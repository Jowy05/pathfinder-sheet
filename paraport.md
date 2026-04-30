# paraport.md — Cómo funciona la Ficha Pathfinder en Android

Documento de referencia para entender, mantener y replicar el port de la ficha web en Android sin romper la versión de escritorio. Pensado para futuras actualizaciones.

---

## 1. Modelo general (qué es realmente la app)

La app Android **no es una app nativa**: es un **WebView a pantalla completa** que carga la misma SPA web en `file:///android_asset/index.html`. Toda la UI, lógica, cálculos, i18n y persistencia los pone el HTML/CSS/JS web; Android solo añade un *bridge* nativo para cosas que el WebView no puede hacer bien (guardar archivos en almacenamiento privado, selector de imagen real, imprimir, toasts).

Esto significa que **el 99% de cualquier cambio futuro vive en la capa web**, y el port se sincroniza copiando los assets. Solo se toca Kotlin si aparece un canal nuevo entre web y Android.

---

## 2. Estructura de carpetas

```
pathfinder-sheet/
├── index.html                   ← SPA web (origen)
├── style.css
├── fallback-data.js             ← respaldo si fetch() falla en file://
├── *.json                       ← bases de datos (clases, dotes, equipo…)
├── electron-main.js             ← .exe escritorio (Electron)
└── port/                        ← proyecto Android
    ├── app/
    │   ├── build.gradle
    │   └── src/main/
    │       ├── AndroidManifest.xml
    │       ├── assets/          ← COPIA de los ficheros web
    │       │   ├── index.html
    │       │   ├── style.css
    │       │   ├── fallback-data.js
    │       │   └── *.json
    │       ├── java/com/pathfinder/sheet/
    │       │   └── MainActivity.kt
    │       ├── res/
    │       │   ├── layout/activity_main.xml   ← solo un WebView fullscreen
    │       │   ├── values/themes.xml
    │       │   └── xml/file_paths.xml         ← FileProvider
    │       └── …
    ├── build.gradle
    ├── gradle.properties
    ├── settings.gradle
    └── sync-assets.bat          ← copia los ficheros web al assets/
```

**Regla de oro**: tras cualquier edit a la web, ejecutar `port/sync-assets.bat` (o copiar a mano) los ficheros relevantes a `port/app/src/main/assets/`. Si no, el APK queda desactualizado.

---

## 3. Punto de entrada (MainActivity.kt)

`onCreate()` infla `activity_main.xml` (un único `WebView` que ocupa toda la pantalla) y llama a `setupWebView()`:

| Setting WebView           | Por qué                                                                |
|---------------------------|------------------------------------------------------------------------|
| `javaScriptEnabled = true`| la SPA es JS-driven                                                    |
| `domStorageEnabled = true`| `localStorage` se usa para temas, idioma, modo máster, cyber-mode, etc.|
| `allowFileAccess = true`  | `fetch('races.json')` desde `file://`                                  |
| `useWideViewPort + loadWithOverviewMode` | viewport como en navegador móvil                        |
| `mixedContentMode = ALWAYS_ALLOW` | mezcla `file://` con fuentes externas (Google Fonts)           |

Tras `loadUrl(file:///android_asset/index.html)`, el `WebViewClient.onPageFinished` inyecta el bridge JS con `injectNativeBridge()`.

---

## 4. Bridge JS ⇄ Kotlin

### 4.1 Lo que el JS expone a Android

Nada explícito: el JS solo detecta Android con `window.NativeApp.isAndroid()` (lo expone Kotlin durante la inyección).

### 4.2 Lo que Android expone al JS (`AndroidBridge`, `@JavascriptInterface`)

| Método JS                                | Qué hace en Kotlin                                                                                  |
|------------------------------------------|------------------------------------------------------------------------------------------------------|
| `AndroidBridge.saveCharacter(json,name)` | Abre diálogo nativo "Guardar personaje", escribe en `filesDir/characters/<name>.json` (privado).      |
| `AndroidBridge.showCharacterPicker()`    | Abre diálogo nativo con la lista de personajes guardados (botones por fila + eliminar + import externo). |
| `AndroidBridge.consumePendingJson()`     | El web lo invoca para recoger el JSON que Android dejó listo tras elegir un personaje del diálogo.   |
| `AndroidBridge.isAndroid()`              | `true` (uso defensivo).                                                                              |
| `AndroidBridge.showToast(msg)`           | `Toast` nativo.                                                                                      |
| `AndroidBridge.printSheet()`             | `PrintManager` con `webView.createPrintDocumentAdapter()`.                                           |
| `AndroidBridge.saveTextFile(content,fn)` | Guarda texto plano en `filesDir/<fn>` (no en `characters/`).                                         |
| `AndroidBridge.pickPhoto()`              | Lanza el `ActivityResultContracts.GetContent()` con MIME `image/*`, codifica en base64 y llama `window.applyPhoto(dataURL)`. |

### 4.3 Lo que el JS inyectado intercepta del DOM

Dentro de `injectNativeBridge()` se añaden listeners *capture-phase*:

1. **`<a download>`** → cancelar el `click`, extraer el JSON del `data:` o `blob:` y llamar `AndroidBridge.saveCharacter(...)` en lugar de descargar al sistema de archivos.
2. **`<input type="file">`** (excepto `#char-photo-file`, que sí va al WebChromeClient) → cancelar el click y abrir el diálogo de personajes guardados.
3. **`window._androidDeliverCharacter()`** — handler que el JS expone para que Kotlin pueda llamar `evaluateJavascript()` después de soltar el JSON pendiente.
4. **`window.NativeApp = { isAndroid: () => true }`** — bandera que la web consulta para decidir flujo nativo.

### 4.4 Selector de imagen para foto del personaje

Hay dos rutas vivas, deliberadamente:

- **Vía WebChromeClient.onShowFileChooser** (para `<input type="file" accept="image/*">` clásico): guarda el `ValueCallback` y lanza el `imagePicker`. Al volver, entrega la `Uri` al callback (la web la lee normalmente).
- **Vía `AndroidBridge.pickPhoto()`** directo (lo que usa el HTML actual con `onclick="if(NativeApp.isAndroid())…"`): no hay callback; el `imagePicker` lee bytes, codifica base64 y llama `window.applyPhoto(dataUrl)`.

La razón de tener las dos es que en algunos dispositivos el click programático sobre el input no llegaba al WebChromeClient.

---

## 5. Flujos críticos (qué pasa exactamente)

### Guardar personaje
1. Usuario pulsa **Exportar** en la web → la web crea `<a download href="data:application/json;..." />` y le hace click.
2. El listener inyectado intercepta, decodifica el `data:`, llama `AndroidBridge.saveCharacter(json, suggestedName)`.
3. Kotlin abre `AlertDialog` con `EditText` prellenado.
4. Confirmar → `saveCharacterFile()` escribe en `filesDir/characters/<safeName>.json`.

### Cargar personaje
1. Usuario pulsa **Importar** → la web crea/click `<input type=file>`.
2. El listener inyectado lo cancela y llama `AndroidBridge.showCharacterPicker()`.
3. Kotlin lista `characters/*.json` ordenados por `lastModified` desc, cada fila con botón principal + botón eliminar.
4. Click en una fila → `loadCharacterIntoWeb(json)` deja el JSON en `pendingLoadJson` y dispara `window._androidDeliverCharacter()`.
5. El handler JS llama `AndroidBridge.consumePendingJson()` (vacía el slot) y reutiliza `applyImportedData(data)` de la web.
6. El botón "Desde archivo externo" usa `Intent.ACTION_GET_CONTENT` con MIME `application/json`.

### Foto del personaje
1. Click en el `.char-photo-wrap` → `if (NativeApp.isAndroid()) AndroidBridge.pickPhoto()`.
2. `imagePicker.launch("image/*")` → al elegir, base64 + `window.applyPhoto(dataUrl)`.
3. La web pone `dataUrl` en `<img>` y lo persiste como cualquier otro campo (`localStorage` / export JSON).

### Imprimir
1. Botón **Imprimir** detecta Android y llama `AndroidBridge.printSheet()`.
2. `PrintManager.print(jobName, webView.createPrintDocumentAdapter(...), null)`.

### Cargar bases de datos (clases, dotes, equipo…)
1. La web hace `fetch('classes.json')` (ruta relativa al `index.html`).
2. Como el HTML está en `file:///android_asset/`, el `fetch` resuelve a `file:///android_asset/classes.json`. Funciona.
3. **Plan B**: si `fetch()` falla (caso esquina con políticas estrictas), `fallback-data.js` ya define los datasets como constantes globales `FALLBACK_*` que el JS consume.

---

## 6. Persistencia y datos sensibles

- **Personajes**: `filesDir/characters/<nombre>.json` → almacenamiento privado de la app, sin permisos. Se borran al desinstalar.
- **Estado UI** (tema, idioma, modo máster, cyber-mode, trackers, notas, tabs): `localStorage` del WebView. Persistido por el sistema. Se borra al limpiar datos de la app o desinstalar.
- **Imágenes (foto del personaje)**: viven embebidas en el JSON exportado como `data:` URL. No hay archivo aparte.
- **Sin permisos**: actualmente la app **no pide ningún permiso**. `READ/WRITE_EXTERNAL_STORAGE` no se necesita porque todo está en `filesDir`.

---

## 7. Adaptaciones que ya hay para mobile (y por qué)

- `mixedContentMode = ALWAYS_ALLOW`: para Google Fonts.
- `setSupportZoom(true) + builtInZoomControls + displayZoomControls=false`: pinch-zoom permitido, sin botones feos en pantalla.
- Los `prompt()`/`alert()` críticos se sustituyeron por modales propios DOM.
- El `<a download>` y el `<input type=file>` van al bridge para evitar el "Compartir" del sistema.
- El selector de foto tiene dos rutas (WebChromeClient + bridge directo) por compatibilidad.

---

## 8. Cuándo SÍ hay que tocar Kotlin tras un cambio web

Solo si el cambio toca alguno de estos puntos:

- **Nuevo `<a download>`** o cambia el nombre del JSON exportado → revisar interceptor en `injectNativeBridge()`.
- **Nuevo `<input type="file">`** → puede que haya que filtrarlo en `webChromeClient.onShowFileChooser` o en el listener JS.
- **Llamadas nuevas a `AndroidBridge.*`** → exponer el `@JavascriptInterface` correspondiente.
- **Permisos nuevos** (cámara, micro, almacenamiento externo) → `AndroidManifest.xml` y `setupWebView()`.

Si el cambio es **solo CSS / JS / JSON / i18n / HTML** sin file-pickers nuevos: copiar assets y listo.

---

## 9. Build & run

- Android Studio Hedgehog 2023.1+ → File → Open → carpeta `port/`.
- `compileSdk 34`, `minSdk 26` (Android 8.0), `targetSdk 34`, Kotlin JVM 1.8.
- Dependencias: `androidx.appcompat`, `androidx.core-ktx`, `material 1.11`, `constraintlayout 2.1.4`.
- ViewBinding habilitado.
- `Run ▶` en emulador o móvil.

Antes de cada build hay que asegurarse de que `assets/` está al día. Comando recomendado: `port/sync-assets.bat`.

---

## 10. Riesgos conocidos / pitfalls

- **WebView bug histórico**: `window.print()` no funciona dentro de WebView estándar → se usa `PrintManager` por el bridge. No tocar.
- **`localStorage` se borra** si el usuario "Limpiar datos" desde Ajustes Android. Los personajes en `filesDir/characters/` también. Los exportados a JSON externo son la única copia segura.
- **Doble copia del index.html**: si se edita uno y no el otro, divergencia silenciosa. Vital ejecutar `sync-assets.bat`.
- **Áreas táctiles pequeñas**: muchos controles del CSS desktop quedan demasiado finos en pantalla móvil. Es el punto que motiva el rediseño "nativo" planeado.
- **Toast de viewport en `onPageFinished`**: hay un debug toast con `Viewport: …` que debería eliminarse en `release`.

---

## 11. Punto de partida del rediseño

El layout actual del WebView es la misma SPA de escritorio metida con calzador. Lo que **se va a rehacer** es la *cáscara* mobile (topbar + stage + bottom-nav) sin tocar la lógica web. Detalles en el plan adjunto.
