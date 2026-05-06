# FIXES — registro de bugs arreglados

Histórico de fixes de raíz para evitar repetirlos en el futuro.

---

## 2026-05-06

### Topbar mobile: texto XP cortado horizontalmente

**Síntoma:** "XP 0/9000 · 0%" en el topbar aparecía con la mitad inferior recortada.

**Raíz:** `#topbar-xp-wrap` era una barra de progreso de **5 px de alto** con el texto en `position:absolute; inset:0; font-size:8px` (text-overflow lo cortaba).

**Fix:** layout en columna — el texto va en su propia línea (font 9px) ENCIMA de la barra (4px). Sin overlay, sin overflow:hidden.

**Archivo:** `port/app/src/main/assets/index.html` ~línea 1735.

---

### Topbar: char-sub trunca "Humano" a "Hu..."

**Síntoma:** "Guerrero · Nv 3 · Humano" se cortaba con elipsis aun en pantallas medianas.

**Raíz:** `.char-sub { white-space:nowrap; text-overflow:ellipsis }` forzaba 1 línea con corte.

**Fix:** `display:-webkit-box; -webkit-line-clamp:2; word-break:break-word`. Permite hasta 2 líneas si hace falta antes de cortar.

**Archivo:** `port/app/src/main/assets/index.html` `.char-sub`.

---

### Body con overflow horizontal — bottom-nav, race input y subtabs cortados a la derecha

**Síntoma:** El botón "Más" del bottom-nav, el icono 🏷 del input de raza y la última subtab ("Trasfondo", "Conjuros") aparecían parcialmente cortados por el borde derecho de la pantalla. Pasaba en todas las pantallas.

**Raíz:** Algún hijo del body grid expandía el ancho intrínseco del grid container más allá de `100vw`, y `overflow:hidden` del `html,body` recortaba la zona derecha visible.

**Fix:** Forzar el ancho exacto del viewport en el root y constraindar columnas del grid:

```css
html,body { width:100vw; max-width:100vw }
body.app  { grid-template-columns:minmax(0,100vw); width:100vw; overflow-x:hidden }
body.app > * { min-width:0; max-width:100vw }
```

`minmax(0,100vw)` en grid-template-columns es la clave — sin él, el grid se expande al ancho intrínseco del hijo más ancho.

**Archivo:** `port/app/src/main/assets/index.html` reglas `html,body` y `body.app`.

---

### FALLBACK_CLASSES y FALLBACK_ARCHETYPES vacíos en Android

**Síntoma:** El picker de clase mostraba pocas clases, los arquetipos no aparecían.

**Raíz:** `fallback-data.js` declara las constantes con `const FALLBACK_CLASSES = …`. En navegadores, `const`/`let` a nivel top NO se adjunta a `window`. El helper `fb(k)` accedía vía `window[k]` y obtenía `undefined`, así que `DB.classes`/`DB.archetypes` se quedaban vacíos cuando `fetch()` fallaba bajo `file://`.

**Fix doble:**

1. `fb()` cae a `new Function('return ' + k)()` para leer la binding global cuando `window[k]` es undefined.
2. `fallback-data.js` se **inlinea dentro de `<script>` en el HTML** (no `<script src=…>`), evitando que navegadores con `file://` estricto bloqueen el script externo. Al final del bloque, los nombres `FALLBACK_*` se asignan explícitamente a `window` para máxima compatibilidad con cualquier helper futuro.

**Archivo:** `port/app/src/main/assets/index.html` (~línea 1716 inline + helper `fb()` en `loadDB`).

---

### Avatar grande del sheet de identidad no muestra la foto

**Síntoma:** Al poner foto, el avatar pequeño del topbar la mostraba bien, pero al abrir el sheet "Identidad" el avatar grande seguía con la inicial.

**Raíz:** `applyPhoto()` actualizaba `#avatar` y `#sheet-identidad .avatar-id, [data-avatar-large]`. Pero el div del sheet es `<div class="id-photo">` — ninguno de los selectores coincidía.

**Fix:** Selector ampliado a `.id-photo, .avatar-id, [data-avatar-large]`. Además el `click` del avatar pequeño re-aplica la foto al sheet ANTES de abrirlo, para casos donde la foto se cargó en una sesión anterior.

**Archivo:** `port/app/src/main/assets/index.html` `applyPhoto`/`removePhoto` y handler del avatar.

---

### Avatar muestra "—" cuando el nombre está vacío

**Síntoma:** Sin foto y sin nombre, el avatar mostraba "—" (el placeholder del topbar).

**Raíz:** `updateTopbar()` extraía la primera letra del nombre con `(nombre||'?').trim()[0]`. Si `nombre === '—'`, devolvía `'—'`.

**Fix:** Detectar nombre placeholder ("—" o "-" o vacío) y usar "?" en su lugar.

**Archivo:** `port/app/src/main/assets/index.html` `updateTopbar()`.

---

### CMD del mobile siempre 'medium' independientemente del tamaño

**Síntoma:** Cambiar el tamaño del personaje no actualizaba el CMD ni la CA por tamaño.

**Raíz:** El `<select>` de tamaño no tenía `id` ni atributos `value` mapeados a `SIZE_CMB`. `D5_getSize()` recorría selects buscando texto en español, y `calcCMBCMD` intentaba mapearlo a clave inglés ('small', 'medium', etc.) — pero el evento de cambio no disparaba `CombatEngine.apply()`.

**Fix triple:**

1. `<select id="m-size">` con `<option value="medium">Mediano</option>`, etc. (claves SIZE_CMB directas).
2. Helper nuevo `D5_getSizeKey()` que devuelve la clave SIZE_CMB ('small','medium',…) directa.
3. Listener `size-changed` ahora dispara `CombatEngine.apply()` además de re-render de peso.

**Archivo:** `port/app/src/main/assets/index.html` `<select id="m-size">`, `D5_getSize`, `D5_getSizeKey`, listener `size-changed`.

---

## Reglas para el futuro

### Regla del width root (Android WebView, Brave file://)

**Siempre** mantener:
```css
html,body { width:100vw; max-width:100vw }
body.app  { grid-template-columns:minmax(0,100vw); overflow-x:hidden }
body.app > * { min-width:0; max-width:100vw }
```

Sin `minmax(0,100vw)` en el grid, cualquier `<script>` con contenido enorme inline o un hijo con texto largo unbreakable expande el grid container y el body queda más ancho que el viewport. `overflow:hidden` del root oculta el sobrante en el lado derecho — el usuario ve elementos cortados.

### Regla del fallback (file://)

Los datos para `<script>` que deben funcionar offline:

1. **Inlinear** dentro de `<script>...</script>` — no `<script src=…>`.
2. Si se usan `const`/`let` para declararlos, **AÑADIR explícitamente** `window.X = X;` al final del bloque para que `window[k]` también los devuelva.
3. Helpers que lean fallbacks deben caer a `new Function('return '+k)()` como segundo intento si `window[k]` es undefined — cubre el caso de scripts externos donde no se han hecho los `window.*=` explícitos.

### Regla de los selects con SIZE_CMB / claves canónicas

Cualquier `<select>` cuyo valor se mapee a una clave canónica ('small', 'medium', 'large', etc.) debe usar **`<option value="canonical_key">Texto en español</option>`**, no `<option>Texto</option>`. Y la callback de change debe disparar `CombatEngine.apply()` o el recálculo correspondiente.

### Regla del sync de espejos del port

`port/Ficha Mobile.html` y `port/app/src/main/assets/Ficha Mobile.html` son espejos byte-a-byte de `port/app/src/main/assets/index.html`. Tras CADA edit del index.html mobile:

```bash
cp "port/app/src/main/assets/index.html" "port/Ficha Mobile.html"
cp "port/app/src/main/assets/index.html" "port/app/src/main/assets/Ficha Mobile.html"
```

Si el usuario tiene WIP en algún espejo (ej. proyecto del Modo Máster en `añadir a la app/`), confirmar antes de sobreescribir.
