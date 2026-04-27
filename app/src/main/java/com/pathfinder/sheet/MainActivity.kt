package com.pathfinder.sheet

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.text.format.DateUtils
import android.view.Gravity
import android.webkit.*
import android.widget.*
import androidx.appcompat.app.AlertDialog
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.FileProvider
import androidx.activity.result.contract.ActivityResultContracts
import com.pathfinder.sheet.databinding.ActivityMainBinding
import java.io.File
import java.text.SimpleDateFormat
import java.util.*

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding
    private lateinit var webView: WebView

    // Directorio privado de personajes guardados (no necesita permisos de almacenamiento)
    private val characterDir: File by lazy {
        File(filesDir, "characters").also { it.mkdirs() }
    }

    // JSON pendiente de entrega a la web tras elegir personaje en el diálogo
    @Volatile private var pendingLoadJson: String? = null

    // Callback pendiente para el selector de imagen de la foto del personaje
    private var imageFileCallback: android.webkit.ValueCallback<Array<android.net.Uri>>? = null

    // Launcher para selector de imagen (foto del personaje).
    // Dos modos:
    //  1. WebChromeClient.onShowFileChooser dejó un imageFileCallback → devuelve URI.
    //  2. Sin callback (bridge directo AndroidBridge.pickPhoto) → lee la imagen,
    //     la codifica como data:URL base64 y la entrega a la web mediante applyPhoto().
    private val imagePicker = registerForActivityResult(
        ActivityResultContracts.GetContent()
    ) { uri ->
        val cb = imageFileCallback
        imageFileCallback = null
        if (uri == null) {
            cb?.onReceiveValue(null)
            return@registerForActivityResult
        }
        if (cb != null) {
            cb.onReceiveValue(arrayOf(uri))
            return@registerForActivityResult
        }
        // Bridge directo: leer y entregar como data: URL a la web
        try {
            val bytes = contentResolver.openInputStream(uri)?.use { it.readBytes() }
                ?: run { toast("No se pudo leer la imagen"); return@registerForActivityResult }
            val mime = contentResolver.getType(uri) ?: "image/jpeg"
            val b64 = android.util.Base64.encodeToString(bytes, android.util.Base64.NO_WRAP)
            val dataUrl = "data:$mime;base64,$b64"
            webView.post {
                val js = "window.applyPhoto && window.applyPhoto(" +
                    org.json.JSONObject.quote(dataUrl) + ")"
                webView.evaluateJavascript(js, null)
            }
        } catch (e: Exception) {
            toast("Error al cargar imagen: ${e.message}")
        }
    }

    // Launcher para importar JSON externo (opción "Desde archivo" en el diálogo)
    private val externalFilePicker = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            result.data?.data?.let { uri ->
                try {
                    val json = contentResolver.openInputStream(uri)
                        ?.bufferedReader()?.readText() ?: return@let
                    loadCharacterIntoWeb(json)
                } catch (e: Exception) {
                    toast("Error al leer archivo: ${e.message}")
                }
            }
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        webView = binding.webView
        setupWebView()
        webView.loadUrl("file:///android_asset/index.html")
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun setupWebView() {
        webView.settings.apply {
            javaScriptEnabled        = true
            domStorageEnabled        = true
            allowFileAccess          = true
            allowContentAccess       = true
            setSupportZoom(true)
            builtInZoomControls      = true
            displayZoomControls      = false
            useWideViewPort          = true
            loadWithOverviewMode     = true
            mediaPlaybackRequiresUserGesture = false
            textZoom = 100
            mixedContentMode         = android.webkit.WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        }

        webView.addJavascriptInterface(SheetBridge(), "AndroidBridge")

        // WebChromeClient mínimo: si algún input[type=file] no fue interceptado por el JS,
        // cancélalo en lugar de abrir el selector del sistema (que confundiría al usuario).
        webView.webChromeClient = object : WebChromeClient() {
            override fun onShowFileChooser(
                view: WebView, filePathCallback: ValueCallback<Array<Uri>>,
                fileChooserParams: FileChooserParams
            ): Boolean {
                val accepts = fileChooserParams.acceptTypes ?: emptyArray()
                if (accepts.any { it.contains("image") }) {
                    // Es la foto del personaje — abrir selector de imágenes
                    imageFileCallback = filePathCallback
                    imagePicker.launch("image/*")
                } else {
                    // Es importar personaje JSON — cancelar y mostrar nuestro diálogo
                    filePathCallback.onReceiveValue(null)
                    showLoadDialog()
                }
                return true
            }
        }

        webView.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView, url: String) {
                injectNativeBridge()
                // DEBUG: show actual CSS viewport width as toast
                webView.post {
                    webView.evaluateJavascript(
                        "(window.innerWidth + 'x' + window.innerHeight + ' doc:' + document.documentElement.scrollWidth)"
                    ) { result -> toast("Viewport: $result") }
                }
            }
            override fun shouldOverrideUrlLoading(
                view: WebView, request: WebResourceRequest
            ): Boolean {
                val url = request.url.toString()
                return if (url.startsWith("file:///android_asset/")) false
                else { startActivity(Intent(Intent.ACTION_VIEW, request.url)); true }
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────
    //  Puente JS inyectado en la página
    // ─────────────────────────────────────────────────────────────────

    private fun injectNativeBridge() {
        @Suppress("StringShouldBeRawString")
        val js = """
(function() {
    if (window._androidBridgeInjected) return;
    window._androidBridgeInjected = true;

    // ── 1. Interceptar enlace de descarga (exportar ficha) ──
    // La web crea un <a download href="data:..."> y hace click en él.
    document.addEventListener('click', function(e) {
        var a = e.target.closest('a[download]');
        if (!a) return;
        var href = a.href || '';
        if (!href) return;
        e.preventDefault();
        e.stopPropagation();

        function doSave(jsonStr) {
            // Extraer nombre del personaje del JSON si es posible
            var suggested = a.download || 'personaje';
            try {
                var obj = JSON.parse(jsonStr);
                if (obj.name) suggested = obj.name;
                else if (obj.charName) suggested = obj.charName;
            } catch(ex) {}
            AndroidBridge.saveCharacter(jsonStr, suggested);
        }

        if (href.startsWith('data:')) {
            var idx = href.indexOf(',');
            var encoded = href.substring(idx + 1);
            try { doSave(decodeURIComponent(encoded)); }
            catch(ex) { doSave(atob(encoded)); }
        } else if (href.startsWith('blob:')) {
            fetch(href).then(function(r){ return r.text(); }).then(doSave);
        }
    }, true);

    // ── 2. Interceptar input[type=file] (importar ficha) ──
    document.addEventListener('click', function(e) {
        var inp = e.target.closest('input[type="file"]');
        if (!inp) return;
        if (inp.id === 'char-photo-file') return; // dejar que el selector de imagen funcione normalmente
        e.preventDefault();
        e.stopImmediatePropagation();
        AndroidBridge.showCharacterPicker();
    }, true);

    // ── 3. Función que Android llama para entregar el JSON elegido ──
    window._androidDeliverCharacter = function() {
        var json = AndroidBridge.consumePendingJson();
        if (!json) return;
        try {
            var data = JSON.parse(json);
            if (typeof applyImportedData === 'function') {
                applyImportedData(data);
            } else {
                console.warn('applyImportedData() not found');
            }
        } catch(ex) {
            console.error('Error loading character:', ex);
        }
    };

    // ── 4. Exponer NativeApp para detección desde la web ──
    window.NativeApp = { isAndroid: function() { return true; } };
})();
        """.trimIndent()
        webView.evaluateJavascript(js, null)
    }

    // ─────────────────────────────────────────────────────────────────
    //  Bridge expuesto a JavaScript
    // ─────────────────────────────────────────────────────────────────

    inner class SheetBridge {

        @JavascriptInterface
        fun saveCharacter(json: String, suggestedName: String) =
            runOnUiThread { showSaveDialog(json, suggestedName) }

        @JavascriptInterface
        fun showCharacterPicker() =
            runOnUiThread { showLoadDialog() }

        /** La web llama a esto justo después de que Android ponga el JSON pendiente. */
        @JavascriptInterface
        fun consumePendingJson(): String? {
            val j = pendingLoadJson
            pendingLoadJson = null
            return j
        }

        @JavascriptInterface
        fun isAndroid(): Boolean = true

        @JavascriptInterface
        fun showToast(msg: String) = runOnUiThread { toast(msg) }

        @JavascriptInterface
        fun printSheet() = runOnUiThread {
            val printMgr = getSystemService(android.content.Context.PRINT_SERVICE)
                    as android.print.PrintManager
            val jobName = "PathfinderSheet_${System.currentTimeMillis()}"
            val adapter = webView.createPrintDocumentAdapter(jobName)
            printMgr.print(jobName, adapter, null)
        }

        @JavascriptInterface
        fun saveTextFile(content: String, fileName: String) = runOnUiThread {
            try {
                // Guardar en filesDir raíz (no en characters/) para que el
                // diálogo de cargar personaje no muestre archivos como request.md.
                File(filesDir, fileName).writeText(content, Charsets.UTF_8)
                toast("'$fileName' guardado en almacenamiento de la app")
            } catch (e: Exception) {
                toast("Error al guardar: ${e.message}")
            }
        }

        /** Lanza el selector nativo de imágenes para la foto del personaje.
         *  Al elegir, el imagePicker codifica la imagen como data:URL y se la
         *  entrega a la web vía window.applyPhoto(). Evita el camino indirecto
         *  de hacer click() programático sobre un <input type="file">, que no
         *  llegaba bien al WebChromeClient en algunos dispositivos. */
        @JavascriptInterface
        fun pickPhoto() = runOnUiThread {
            imageFileCallback = null  // ruta sin callback de WebChromeClient
            imagePicker.launch("image/*")
        }
    }

    // ─────────────────────────────────────────────────────────────────
    //  Diálogo GUARDAR
    // ─────────────────────────────────────────────────────────────────

    private fun showSaveDialog(json: String, suggestedName: String) {
        val input = EditText(this).apply {
            val clean = suggestedName.replace(Regex("[^\\w\\s\\-]"), "").trim()
            setText(if (clean.isNotBlank()) clean else "personaje")
            selectAll()
            setPadding(48, 24, 48, 8)
        }

        AlertDialog.Builder(this)
            .setTitle("Guardar personaje")
            .setMessage("Elige el nombre con el que se guardará en la app:")
            .setView(input)
            .setPositiveButton("Guardar") { _, _ ->
                val name = input.text.toString().trim().ifBlank { "personaje" }
                saveCharacterFile(json, name)
            }
            .setNegativeButton("Cancelar", null)
            .show()
            .also { input.requestFocus() }
    }

    private fun saveCharacterFile(json: String, name: String) {
        val safe = name.replace(Regex("[^\\w\\s\\-]"), "_").trim()
        File(characterDir, "$safe.json").writeText(json, Charsets.UTF_8)
        toast("\"$safe\" guardado")
    }

    // ─────────────────────────────────────────────────────────────────
    //  Diálogo CARGAR — lista de personajes guardados
    // ─────────────────────────────────────────────────────────────────

    private fun showLoadDialog() {
        val files = characterDir.listFiles { f -> f.extension == "json" }
            ?.sortedByDescending { it.lastModified() }
            ?: emptyList()

        val scroll = ScrollView(this)
        val container = LinearLayout(this).apply {
            orientation = LinearLayout.VERTICAL
            setPadding(8.dp, 8.dp, 8.dp, 8.dp)
        }
        scroll.addView(container)

        val dialog = AlertDialog.Builder(this)
            .setTitle("Personajes guardados")
            .setView(scroll)
            .setNeutralButton("Desde archivo externo") { _, _ -> pickExternalFile() }
            .setNegativeButton("Cancelar", null)
            .create()

        if (files.isEmpty()) {
            container.addView(TextView(this).apply {
                text = "Todavía no hay personajes guardados.\nGuarda uno primero con el botón Exportar."
                setPadding(16.dp, 24.dp, 16.dp, 24.dp)
                gravity = Gravity.CENTER
            })
        } else {
            files.forEach { file -> container.addView(buildCharacterRow(file, dialog)) }
        }

        dialog.show()
    }

    private fun buildCharacterRow(file: File, dialog: AlertDialog): LinearLayout {
        val relTime = DateUtils.getRelativeTimeSpanString(
            file.lastModified(), System.currentTimeMillis(), DateUtils.MINUTE_IN_MILLIS
        ).toString()

        return LinearLayout(this).apply {
            orientation = LinearLayout.HORIZONTAL
            setPadding(4.dp, 4.dp, 4.dp, 4.dp)
            gravity = Gravity.CENTER_VERTICAL

            // Botón principal — carga el personaje
            addView(LinearLayout(context).apply {
                orientation = LinearLayout.VERTICAL
                layoutParams = LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
                setPadding(12.dp, 12.dp, 12.dp, 12.dp)
                setBackgroundResource(android.R.drawable.list_selector_background)
                isClickable = true
                isFocusable = true

                addView(TextView(context).apply {
                    text = file.nameWithoutExtension
                    textSize = 15f
                })
                addView(TextView(context).apply {
                    text = relTime
                    textSize = 11f
                    alpha = 0.6f
                })

                setOnClickListener {
                    dialog.dismiss()
                    loadCharacterIntoWeb(file.readText(Charsets.UTF_8))
                }
            })

            // Botón eliminar
            addView(ImageButton(context).apply {
                setImageResource(android.R.drawable.ic_menu_delete)
                contentDescription = "Eliminar"
                background = null
                setPadding(12.dp, 12.dp, 12.dp, 12.dp)
                setOnClickListener {
                    AlertDialog.Builder(this@MainActivity)
                        .setMessage("¿Eliminar \"${file.nameWithoutExtension}\"?")
                        .setPositiveButton("Eliminar") { _, _ ->
                            file.delete()
                            dialog.dismiss()
                            showLoadDialog()
                        }
                        .setNegativeButton("Cancelar", null)
                        .show()
                }
            })
        }
    }

    // ─────────────────────────────────────────────────────────────────
    //  Cargar personaje en la WebView
    // ─────────────────────────────────────────────────────────────────

    private fun loadCharacterIntoWeb(json: String) {
        pendingLoadJson = json
        webView.post {
            webView.evaluateJavascript(
                "window._androidDeliverCharacter && window._androidDeliverCharacter()", null
            )
        }
    }

    // ─────────────────────────────────────────────────────────────────
    //  Importar JSON desde archivo externo (opción avanzada)
    // ─────────────────────────────────────────────────────────────────

    private fun pickExternalFile() {
        val intent = Intent(Intent.ACTION_GET_CONTENT).apply {
            type = "application/json"
            addCategory(Intent.CATEGORY_OPENABLE)
        }
        externalFilePicker.launch(Intent.createChooser(intent, "Importar ficha JSON"))
    }

    // ─────────────────────────────────────────────────────────────────
    //  Utilidades
    // ─────────────────────────────────────────────────────────────────

    private fun toast(msg: String) =
        Toast.makeText(this, msg, Toast.LENGTH_SHORT).show()

    private val Int.dp: Int get() =
        (this * resources.displayMetrics.density + 0.5f).toInt()

    override fun onBackPressed() {
        if (webView.canGoBack()) webView.goBack() else super.onBackPressed()
    }
}
