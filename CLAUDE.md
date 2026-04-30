# CLAUDE.md — Ficha Pathfinder 1e

## Regla de oro: subir cada cambio a git

**Cada vez que termines un cambio (por pequeño que sea) súbelo a `origin/main`:**

1. `git add` de los ficheros tocados (no `git add -A` ciego — evitar comitear `.gradle/`, `port/build-output.log`, ni cualquier artifact de build).
2. `git commit -m "<mensaje claro>"` — describir el *qué* y el *por qué*, no listar ficheros.
3. `git push origin main`.

Si hay commits nuevos en `origin/main` antes de empezar, hacer primero `git pull --rebase` (o `--ff-only` si no hay locales) para evitar divergencias. Si el pull baja cambios que tocan los mismos ficheros que tu edit (típicamente `style.css`, `index.html`), reaplicar el fix encima de la versión nueva — nunca sobrescribir lo recién bajado con una copia antigua.

## Regla de oro: doble despliegue (web + Android port)

Este proyecto tiene **dos copias** del mismo código que deben mantenerse en sincronía:

| Origen (web)                        | Destino (Android port)                                      |
|-------------------------------------|--------------------------------------------------------------|
| `Ficha/index.html`                  | `Ficha/port/app/src/main/assets/index.html`                 |
| `Ficha/style.css`                   | `Ficha/port/app/src/main/assets/style.css`                  |
| `Ficha/fallback-data.js`            | `Ficha/port/app/src/main/assets/fallback-data.js`           |
| `Ficha/*.json` (todos)              | `Ficha/port/app/src/main/assets/*.json`                     |

**Tras cualquier cambio en la web hay que copiar el archivo modificado a `port/app/src/main/assets/`** (manual o vía `Ficha/port/sync-assets.bat`). Si no se replica, la app de Android queda desactualizada.

### Cuándo además hay que tocar el bridge nativo

Sólo si el cambio toca alguno de estos puntos, también hay que ajustar `Ficha/port/app/src/main/java/com/pathfinder/sheet/MainActivity.kt`:

- Nuevos `<a download>` o cambio del nombre del JSON de export → revisar interceptor en `injectNativeBridge()`.
- Nuevo `<input type="file">` → puede que haya que filtrarlo en el `webChromeClient.onShowFileChooser` o en el listener `click` del bridge.
- Llamadas nuevas a `AndroidBridge.*` desde JS → exponer el `@JavascriptInterface` correspondiente.
- Nuevos permisos (cámara, almacenamiento) → `AndroidManifest.xml` y `setupWebView()`.

Si el cambio es **CSS, lógica JS pura, JSON de datos, i18n o HTML estructural sin file pickers nuevos**, basta con copiar los assets y NO hay que tocar Kotlin.

### Qué adaptaciones suele necesitar Android

- El WebView usa `file://` así que `fetch()` puede fallar — los datos viven embebidos en `fallback-data.js` como respaldo (`FALLBACK_*`).
- Botones grandes y áreas táctiles ≥ 32 px (las filas estrechas del tracker dan problemas con dedo).
- Evitar `prompt()` y `alert()` cuando se pueda — bloquean mal en WebView; preferir modales propios.
- Diálogos del sistema (guardar JSON, cargar personaje) van por bridge nativo, no por DOM.

---

## Estructura del proyecto

- **App web SPA** en `Ficha/`: HTML + CSS + JSON estáticos, sin build, sin frameworks. Toda la lógica vive en un único `<script>` inline gigante dentro de `index.html`. Bilingüe ES/EN vía objeto `I18N` y `data-i18n*`.
- **Persistencia**: export/import JSON (no localStorage para personajes). Estado adicional en claves namespaced `__buff_tracker`, `__weapons_html`, `__notes_data`, `__session_log`, `__combat_tracker`, `__weaknesses`, etc.
- **Motor de cálculo**: `recalc()` recompone todos los campos derivados; `init()` carga DBs y `populateSelectors()` rellena selects.
- **Trackers de aptitudes auto** (rabia, ki, smite…) viven en `CLASS_AUTO_FEATURES` con reset por descanso corto/largo en `REST_RESET_KEY`.
- **Modo master**: `setMasterMode()` togglea visibilidad del tracker de iniciativa y del buff tracker (clase `master-hidden`). Estado en `localStorage` bajo `pf1e-master-mode`.

## Documentos clave

- `Ficha/Tareas.md` — backlog histórico, casi todo ✅. Pendientes vivos en la sección **BUGS** y **PENDIENTES**.
- `Ficha/normas.md` — reglas oficiales PF1e con anotaciones de qué cumple la hoja y qué no.
- `Ficha/patches/P-*.patch.md` — specs idempotentes de los últimos cambios usando anchors únicos `#ANCHOR:P*`.
- `Ficha/bugs.md` — list activa de bugs (si está vacía, no hay bugs reportados pendientes ahí; mirar Tareas.md).

## Convenciones

- IDs de DOM se exportan/importan literalmente (`document.querySelectorAll('input,select,textarea')`). Si añades un campo nuevo y le pones `id`, automáticamente se persiste.
- HTML dinámico (tarjetas) se serializa en claves `__*_html`.
- Para datos derivados de DOM (estado en variables JS), añade serialización explícita en `exportData()` y restauración en `importData()`.
- Cualquier nuevo botón visible debería tener `data-i18n` apuntando a una clave de `I18N.es` y `I18N.en`.
- Anchors `#ANCHOR:P*-NAME-V1` señalan inserciones de los patches; respétalos para ediciones futuras.
