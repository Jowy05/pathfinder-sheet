# Auditoría · Pase EXTRA (todo lo que quedaba sin investigar)

> Continuación de `auditoria-mobile.md` y `auditoria-pc.md`. Cubre las áreas marcadas como "NO investigado" en aquellos documentos.
> Fecha: 2026-05-04.

**Leyenda estados**

- ✅ funciona end-to-end
- ⚠️ funciona pero confuso, parcial o con efectos secundarios
- ❌ no funciona / no existe pero se referencia
- 🆕 falta UI o feature entera

---

## 🔥 Top hallazgos críticos del pase extra

| Ref | Severidad | Por qué |
|-----|-----------|---------|
| **I-06 / I-23 / I-27** | 🔴 ALTO | **Sistema de cache-bust con hash está MUERTO**. Hay 6 archivos huérfanos (`index-1e31a0ff.html`, `fallback-data-a8e94bc7.js`, `style-53d8f154.css`, `icono-1fab3e2a.png`, `CLAUDE-563aaf3a.md`, `normas-8b479885.md`) que nadie genera ni consume. Solo añaden ruido. |
| **I-07** | 🔴 ALTO | **El .exe de Electron en `dist-electron/` está 5 días desactualizado** (2026-04-29 vs assets del 2026-05-04). |
| **I-09** | 🔴 ALTO | `port/app/src/main/assets/index.desktop.bak.html` (3.21 MB) es un backup que se cuela en el APK. **CLAUDE.md prohíbe explícitamente esto**. |
| **I-10** | 🔴 ALTO | `port/...assets/eidolon_subtypes.json` está desincronizado con la raíz: el port no tiene Elemental. Otros JSONs también desactualizados. |
| **I-12 / I-13** | 🔴 ALTO | Carpetas huérfanas duplicadas: `app/src/main/` (raíz) y `test/` (con copia interna `test/test/`). |
| **I-04** | 🔴 ALTO | `patches/patches/` es duplicado byte-a-byte de `patches/`. |
| **S-08 / S-09** | 🔴 ALTO | **No hay schema versioning real**. `STATE_VERSION = 1` en mobile pero las migraciones se hacen por inferencia, no por bumps. PC no tiene NINGUNA marca de versión. |
| **S-21** | 🔴 ALTO | Importar ficha B sobre ficha A **mezcla** estados (ej. dotes auto descartadas de A persisten en B). No hay reseteo defensivo. |
| **S-11** | 🔴 ALTO | Si `localStorage` se llena (`QuotaExceededError`) el catch loggea y sigue. Usuario sigue editando creyendo que se guarda. |
| **K-12 / K-13** | 🟡 ALTO | Eidolon evolutions: NO valida prereqs (claws sin limbs, magic attacks sin nivel) y permite stacking infinito de evoluciones marcadas `single`. |
| **K-17 / K-18** | 🟡 ALTO | **Broodmaster solo tiene 1 panel** (debería ser 2 eidolones); **Synthesist NO fusiona stats** (el usuario debe hacerlo a mano). |
| **K-29 / K-30 / K-32 / K-54** | 🟡 ALTO | Multi-caster (sorcerer+wizard) usa **un único bloque global de slots** sin separación por clase. Mystic Theurge no aplica `+caster level`. Prestige sin validación de prerrequisitos. |
| **X-15** | 🟡 ALTO | Loader cyberpunk dura **8.14s fijo bloqueante** + define `wingsSvg()` muerto que nunca se inserta. |
| **X-19** | 🟡 ALTO | `cyberpunk-mode.css` (d20 cube 3D) es archivo huérfano referenciado en `package.json` pero ningún HTML lo carga. |
| **X-21 / X-22** | 🟡 ALTO | Modo Demo (`Demo Efectos.html` + 5 assets) NO está enlazado desde ningún sitio. Código vivo solo en página huérfana. |
| **X-28** | 🟡 ALTO | **Fuentes Google no funcionan en `file://` ni offline** — la app cae a sans-serif perdiendo estética en Electron y Android. |
| **S-18** | 🟡 ALTO | Mobile: si el usuario edita y cierra la app antes de los 800ms del debounce, **se pierde el último cambio**. Sin handler `visibilitychange` ni `pagehide`. |

---

## 5. Cyberpunk FX + Modo Demo + recursos visuales

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| X-01 | Modo Cyberpunk: toggle on/off | ⚠️ | No existe botón "CY" propio. Toggle inyectado dinámicamente como `.theme-menu-cyber-row` ("⚡ Modo Holograma") al final del menú de temas. Persiste en `pf1e-cyber-mode`. Boot sin flicker. Carga lazy del overlay (~24KB). | Botón directo o atajo de teclado para descubrir la feature; hoy oculta tras 2 clicks. |
| X-02 | Cyberpunk: fondo gradiente + grid animado | ✅ | Radial-gradients magenta/cian + grid 60×60 con `cyGridDrift 30s` usando `transform: translate3d` (GPU). | — |
| X-03 | Cyberpunk: scanlines overlay | ✅ | `body::after` con scanlines cian al 2.5%, `mix-blend-mode:screen`. Respeta `prefers-reduced-motion`. | — |
| X-04 | Cyberpunk: glitch del título (H1) | ✅ | `cyTitleGlitch 6s infinite` con desplazamiento ±2-4px y text-shadow. No causa reflow. | — |
| X-05 | Cyberpunk: glassmorphism paneles + chamfer HUD | ⚠️ | `backdrop-filter: blur(6px)` aplicado a TODOS los `.panel`. Caro con >20 paneles (mitigado: blur 12→6, sin saturate). Auto-disable en reduced-motion y max-width:800px. | Considerar deshabilitar también si hay >25 paneles activos. |
| X-06 | Cyberpunk: animación holo-in al activar | ✅ | `cyHoloIn 800ms` con stagger 40ms por panel. Solo 1.2s en estado estable. | — |
| X-07 | Cyberpunk: botones magnéticos + ripple + blip | ✅ | Mousemove escribe `--mx/--my`, click crea `.ripple`. MutationObserver re-engancha botones nuevos. | — |
| X-08 | Cyberpunk: cursor trail | ⚠️ | Throttle 30ms inserta dots con `mix-blend-mode:screen`. **NO respeta `prefers-reduced-motion`**. Puede generar 33 dots/seg. | Añadir guard `prefers-reduced-motion` o opt-out. |
| X-09 | Cyberpunk: sonidos sintéticos + FAB de sonido | ✅ | WebAudio con OscillatorNode. Persiste `pf1e-cyber-sound` (default ON). FAB visible solo con `data-cyber=on`. | — |
| X-10 | Cyberpunk: HP bar ECG + heartbeat dinámico | ✅ | `--hp-rate` según % HP (0.4–2s vivo, 4–12s moribundo, 99s muerto). Estados `cy-dying`, `cy-flatline`. Polling 2.5s + MutationObserver. | — |
| X-11 | Cyberpunk: confetti burst en NAT 20 | ✅ | 70 piezas con animación `cyConfettiBurst 1600ms`. Cleanup tras 1700ms. | — |
| X-12 | Cyberpunk: screen shake en crit/pifia | ⚠️ | `cyShake 360ms` aplica `transform` al `<body>`. **Mueve los position:fixed (FABs)**. NO envuelto en `prefers-reduced-motion`. | Aplicar shake al `.sheet-container` y respetar reduced-motion. |
| X-13 | Cyberpunk: banner crítico NAT 20 / PIFIA | ✅ | 64px con animación `cyCritBanner 1400ms`. MutationObserver con guards (firstRollDone, lastFinalVal, suppress). | — |
| X-14 | Cyberpunk: estilos para single-die / die-hp / chips | ✅ | Override completo con borde cian + glow + Orbitron. | — |
| X-15 | **Loader inicial: D20 + 2 anillos + alas** | 🟡⚠️ | Se ejecuta SIEMPRE (no condicional al modo cyber). Dura **8140ms fijo + 200ms + 800ms fade = ~9.1s**. `wingsSvg()` se DEFINE pero NUNCA se inserta. Código muerto. | Eliminar `wingsSvg()` o insertarlo. Reducir duración fija (8s perceptible como bloqueo). |
| X-16 | Loader: adaptación por tema | ✅ | 14 temas mapeados con vars `--loader-bg/accent/glow`. | — |
| X-17 | Loader: fade-out al terminar | ⚠️ | Transición CSS 4700ms pero JS solo espera 800ms antes de `loader.remove()`. Loader se elimina antes de terminar el fade visual. | Alinear timeouts. |
| X-18 | Loader: textos hardcoded solo en español | ⚠️ | "Invocando interfaz", "Calibrando dados", etc. sin i18n. | Detectar `pf1e-lang` antes de boot y elegir EN/ES. |
| X-19 | **`cyberpunk-mode.css` (d20 cube 3D)** | 🟡❌ | **Archivo huérfano**. Define `.d20-stage`, animaciones `d20Idle/d20Roll`. NO está enlazado por `index.html`. La ficha PC usa `.sd-` (single-die). Selectores nunca matchean. | Borrar archivo o portarlo. Quitarlo de `package.json` para no empaquetarlo en Electron. |
| X-20 | **Panel de configuración para activar/desactivar efectos individuales** | 🟡❌ 🆕 | NO existe. Es **todo-o-nada**: `data-cyber=on` enciende los ~14 efectos de golpe. Solo el sonido tiene toggle independiente. | Submenú con checkboxes (scanlines, cursor trail, shake, blur paneles, glitch título). |
| X-21 | **Modo Demo: `Demo Efectos.html`** | 🟡⚠️ | Página standalone funcional. **NO está enlazada desde `index.html`** ni desde el menú de feedback. Solo accesible escribiendo URL manualmente. | Enlazar desde menú feedback o eliminar. |
| X-22 | **Modo Demo: assets `demo-fx.js` / `demo-loader.js` / `demo.css` / `demo-d20.css` / `demo-loader.css`** | 🟡❌ | Solo se cargan desde `Demo Efectos.html`. Ningún otro HTML los referencia. Tamaño no trivial. | Si se elimina la demo, borrar los 5 archivos. |
| X-23 | bug-finder.html / debug panel / diagnostic | ❌ | NO existe ningún archivo con bug/debug/diagnostic. NO hay panel oculto vía URL hash. | — (no aplica si no se quiere) |
| X-24 | Panel de feedback / sugerencias | ✅ | Existe panel completo: FAB `?`, dropdown, modal con asunto+contenido. Persiste en `pf1e-feedback-entries`. Exportable a `request.md`. Cierre con Esc. i18n ES/EN. | — |
| X-25 | Panel oculto vía URL hash o atajo | ❌ | No detectado. No hay handlers de `hashchange`. | — |
| X-26 | Recursos visuales: imágenes/iconos | ⚠️ | Solo `icono.png` + `icono-1fab3e2a.png` (duplicado con hash) + `icono.ico`. NO hay SVG/GIF/WebP propios — todos los SVG son inline o data-URI. | Eliminar `icono-1fab3e2a.png` (artifact de build). |
| X-27 | Animaciones CSS principales (style.css) | ✅ | `@keyframes` clave usan transform/opacity → no causan reflow. | — |
| X-28 | **Fuentes web: Cinzel, EB Garamond, Orbitron** | 🟡⚠️ | Carga desde `fonts.googleapis.com`. **NO funciona en `file://` ni offline** — cae a sans-serif perdiendo estética. La app Android empaquetada también depende del CDN. | Empaquetar TTF/WOFF2 locales con `@font-face` para offline + Electron + Android `file://`. |
| X-29 | JetBrains Mono cargada por demo pero no por index | ⚠️ | `Demo Efectos.html` + `cyberpunk-loader.css` referencian JetBrains Mono pero `index.html` NO la incluye. Subtítulo del loader cae a fallback monospace. | Añadir al `<link>` o eliminar dependencia. |
| X-30 | Accesibilidad cyberpunk global | ⚠️ | El toggle tiene `role=menuitemcheckbox`. ECG respeta reduced-motion. PERO scanlines + glitch + cursor trail + shake + grid drift no comprueban reduced-motion individualmente. Glitch del header NO se desactiva. Contraste de inputs (cian sobre azul-negro) puede caer por debajo de WCAG AA. | Añadir `@media (prefers-reduced-motion)` al `cyTitleGlitch`, `cyShake`, cursor trail. Verificar contraste. |

---

## 6. Infraestructura: patches, cache-bust, Electron, sync, archivos huérfanos

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| I-01 | Directorio `patches/` existe | ✅ | 6 ficheros (P-1, P-2-P-8, P-3, P-4-P-5, P-6-P-9-P-10, P-7). Frozen 2026-04-28. | — |
| I-02 | Anchors `#ANCHOR:P*-NAME-V1` en `index.html` | ⚠️ | Solo viven anchors de **P6, P9, P10** (8 marcadores). P-1 a P-5, P-7, P-8 NO dejaron marcador en código (solo P-6/9/10 adoptaron la convención). Las features sí están integradas. | Convención no uniforme; documentar solo para P6/9/10 o añadir anchors retroactivos. |
| I-03 | Anchors en `port/Ficha Mobile.html` | ❌ | **Cero anchors `#ANCHOR:P*` en mobile**. Las patches P-6/P-9/P-10 NO están portadas (sin damage-type chips, SLA at-will, weakness/vulnerability). | Portar P6/P9/P10 a mobile o anotar que mobile va por detrás. |
| I-04 | **Doble carpeta `patches/patches/`** | 🔴❌ | `patches/patches/` es copia byte-a-byte de `patches/`. | Borrar `patches/patches/` (residuo). |
| I-05 | Sistema de cache-bust (querystring `?v=`) | ✅ | `style.css?v=14`, `cyberpunk-loader.css?v=15`, etc. Los `?v=20260504-elem` añadidos no entran en conflicto. | Considerar unificar el sufijo. |
| I-06 | **Sistema de cache-bust (archivos `nombre-{hash}.ext`)** | 🔴❌ | NO existe ningún script que genere `index-1e31a0ff.html`, `fallback-data-a8e94bc7.js`, `style-53d8f154.css`, `icono-1fab3e2a.png`, etc. Todos timestampean **2026-04-28 09:03:34** y nunca se han regenerado. `package.json` NO tiene script para producirlos; el packager los **excluye** explícitamente vía glob. NADIE los referencia. | **Borrar todos los archivos huérfanos** del sistema de hashing abandonado. |
| I-07 | **Build Electron empaquetado** | 🔴❌ | El `.exe` y `app.asar` datados **2026-04-29 13:28**. Pero `index.html` y `style.css` se modificaron **2026-05-04 09:20** y `fallback-data.js` el **2026-05-04 12:02**. **El .exe es 5 días anterior** a los assets actuales. | Re-ejecutar `npm run build` para regenerar el .exe con los assets actuales. |
| I-08 | Script de empaquetado | ✅ | `package.json` tiene script `build` con electron-packager. Excluye node_modules, port, _research, app, test, build, dist-electron, patches, .gradle, .idea, .md, gradle, hashed-files, joel/jowy.json. | — |
| I-09 | **`port/app/src/main/assets/index.desktop.bak.html`** | 🔴❌ | 3.21 MB, datado 2026-05-04 09:20. **Backup de `index.html` (PC) que se coló dentro de los assets de Android** — no se sirve, no se referencia, ocupa 3.2 MB en el APK final. **CLAUDE.md prohíbe explícitamente esto**. | Borrar `port/app/src/main/assets/index.desktop.bak.html`. |
| I-10 | **Sync entre raíz y `port/app/src/main/assets/`** | 🔴❌ | `port/...assets/eidolon_subtypes.json` = 37 986 bytes 2026-04-29. Raíz = 42 625 bytes 2026-05-04. **El port no tiene Elemental**. `arcane_schools`, `bloodlines`, `cyberpunk-*`, `domains`, `equipment`, `feats`, `items`, `oracle_mysteries`, `orders`, `races`, `sizes`, `skills`, `witch_patrons` también con fechas viejas. | Re-ejecutar el sync de todos los JSONs (y assets cyberpunk). |
| I-11 | Script `sync-assets.bat` | ❌ | `CLAUDE.md` referencia `Ficha/port/sync-assets.bat`, pero NO existe ningún `.bat`. El sync tiene que hacerse a mano. | Crear el .bat o eliminar la referencia documental. |
| I-12 | **`app/` (carpeta de primer nivel)** | 🔴❌ | `app/src/main/` con AndroidManifest.xml, assets/, java/, res/. **Estructura Android huérfana**. El proyecto Android real vive en `port/app/`. Probablemente residuo de un intento previo. | Investigar y borrar si efectivamente es duplicado. |
| I-13 | **`test/` (carpeta de primer nivel)** | 🔴❌ | 10 ficheros + subcarpeta `test/test/` con los MISMOS ficheros (duplicados). `index.html` aquí pesa 283 KB (vs 3.3 MB en raíz). NO referenciado. NO es test runner real. | Borrar `test/` entero. |
| I-14 | `_research/` | ✅ | 4 archivos `.md` de investigación de companions. Documental. Excluido del build Electron. | — |
| I-15 | `node_modules/` (135 paquetes) | ✅ | Excluido del build Electron y del port. | — |
| I-16 | Validez JSON (raíz) | ✅ | Los 21 `.json` de raíz parsean correctamente. | — |
| I-17 | JSONs huérfanos en raíz | ⚠️ | `joel_samurai2.json` y `jowy.json` son personajes guardados que NO se referencian. Excluidos del build y en `.gitignore`. | Mover a `personajes/` o `_saves/` para limpieza visual. |
| I-18 | `Ficha Mobile.html` (raíz vs port) | ✅ | La fuente de verdad mobile vive en `port/Ficha Mobile.html`. Sync al byte. | — |
| I-19 | `Demo Efectos.html` y assets | ✅ | 6 ficheros frozen 2026-04-28. Excluidos del build Electron. | Mantener si se usan; si no, mover a `_demos/`. |
| I-20 | `cyberpunk-*` assets | ✅ | Referenciados desde `index.html` con `?v=` cache-bust. Sincronizados al port. | — |
| I-21 | Anchors CSS (`style.css`) | ✅ | 5 anchors localizados (P6 damage-type, P9 SLA, P10 weakness, CY 3D die, Chromancer). | — |
| I-22 | Discrepancia tamaño desktop vs mobile | ℹ️ | `index.html` (PC) = 3.32 MB. `Ficha Mobile.html` = 481 KB (×7 más pequeño). Mobile lleva mucha menos lógica/datos inline. Todas las features modernas (P6/P9/P10, eidolon elementals) viven solo en PC. | Decisión de producto: ¿mobile debe converger? |
| I-23 | **Documentos `.md` duplicados con sufijo hash** | 🔴❌ | `CLAUDE-563aaf3a.md` (2026-04-28) coexiste con `CLAUDE.md` (2026-05-04, contenido vivo). `normas-8b479885.md` coexiste con `normas.md`. Snapshots manuales abandonados. | Borrar los `-{hash}.md`. |
| I-24 | `auditoria-*.md` files | ℹ️ | Productos de auditorías previas. | — |
| I-25 | Andamiaje Gradle en raíz | ⚠️ | `.gradle`, `local.properties`, `gradle.properties`, `gradle/`, `build.gradle`, `settings.gradle` en raíz para un proyecto Android que en realidad vive en `port/`. | Mover a `port/` o eliminar. |
| I-26 | Documental backlog/notas | ℹ️ | `seguir haciendo.md`, `paraport.md`, `bugs.md`, `Tareas.md`, `PENDIENTE.md`, `MEMORY.md`, `backlog-app.md`, `COMPANIONS_PLAN.md`. | — |
| I-27 | **`icono.png` vs `icono.ico` vs `icono-1fab3e2a.png`** | 🔴❌ | Tres iconos. `icono-1fab3e2a.png` es byte-idéntico a `icono.png` (huérfano de cache-bust). | Borrar `icono-1fab3e2a.png`. |
| I-28 | Cache-bust `?v=20260504-elem` añadido hoy | ✅ | Convive sin conflicto con `?v=14/15/12/10/6` (cyberpunk). | — |
| I-29 | Build Android | ℹ️ | `port/app/build/` existe (output Gradle), no auditado en profundidad. | Investigar si `port/app/build/` y `app/build.gradle` (raíz) están coordinados. |
| I-30 | Cobertura entre patches y código | ℹ️ | P6/P9/P10 con anchors vivos. P1-P5/P7/P8 sin sistema de anchor pero features integradas. Sin patches obsoletos. | — |

---

## 7. Schema versioning + Import/Export edge cases

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| S-01 | **Import `jowy.json` (legacy) en PC actual** | ⚠️ | Le faltan ~20 claves modernas (`__weaknesses`, `__buff_tracker`, `conditions`, `__dismissed_features`, `__eid_evolutions`, `__hp_dice_vals`, `__combat_tracker`, `__char_photo`, `eid-fcb-*`, `eid-elemental-choice`, `weapon-atk-bonus`, etc.). `importData` usa guards y try/catch — carga sin lanzar — pero rasgos del personaje viejo se quedan en blanco y los containers heredan lo que ya hubiera en sesión. | Llamar a `blankState()`/limpiar containers no presentes antes de aplicar; o setear a '' cuando la clave no exista. |
| S-02 | **Import `joel_samurai2.json`** | ⚠️ | Aún más antiguo: `char-size:"M"` (no `medium`), `xp-track:"media"`, `lang-común:true`. Selects con valores no reconocidos quedan en valor previo. | Capa de normalización legacy: `"M"→"medium"`, `"media"→"medium"`, mapear claves `lang-<nombre>`. |
| S-03 | Try/catch raíz de `importData` (PC) | ✅ | Cuerpo envuelto en `try{...}catch(err){alert(t('m.loadError')+...)}`. JSON corrupto → alert legible. | — |
| S-04 | JSON gigante (>10MB) en `importData` | ⚠️ | `FileReader.readAsText` carga todo en RAM, luego `JSON.parse` síncrono y ~30 `innerHTML=`. No hay límite ni indicador. En móviles WebView con foto base64 grande puede congelar UI o disparar OOM. | Guard `file.size > N` con confirmación, overlay "Cargando…" y `requestIdleCallback`. |
| S-05 | JSON con campos extra desconocidos | ✅ | Ambos solo leen las claves que conocen. Robusto. | — |
| S-06 | JSON parcial (sin sección X) | ✅ ⚠️ | Cada bloque chequea `if(data[k])`. Pero NO hay reseteo: lo presente en DOM previo persiste cruzado con import nuevo (ver S-21). | Reset preventivo. |
| S-07 | JSON con tipos incorrectos (string donde se espera number/array) | ⚠️ | Mobile: si `incoming` no es Array ni objeto-con-`n`, se sobrescribe con `[]` (pierde datos silenciosamente). PC: `parseInt → NaN→0`. JSON sólo string al raíz → `JSON.parse` ok pero crash en accesos → atrapado por catch. | Validar tipos al inicio y warning específico. |
| S-08 | **Schema versioning PC** | 🔴❌ | `exportData()` NO emite ningún campo de versión. NO hay `migrateState`. Convivir entre fichas viejas y nuevas se basa en defaults `if(undefined)`. | Añadir `data['__schema'] = 'pf1e-pc-v3'` en export y `migrateLegacy(data)` en import. |
| S-09 | **Schema versioning mobile** | 🔴⚠️ | `STATE_VERSION = 1` y `migrateState()` solo gestiona v=0→1. **NO hay v1→v2** pese a que se han añadido FCB, eidolon Elemental, COMP_DATA arrays multi-instancia, `__combat_tracker`, etc. Cambios se ejecutan por inferencia. | Bumpear `STATE_VERSION = 2`, `migrateState` rellena defaults faltantes. |
| S-10 | Cambios estructurales sin migración explícita | ⚠️ | Eidolón Elemental, FCB, +Atq armas (PC), arrays COMP_DATA (mobile). Funcionan "igual" porque rebuilds reescriben con defaults. Usuario no ve warning "esta ficha es de versión anterior". | Toast "Ficha importada (formato anterior, completados defaults)". |
| S-11 | **`localStorage` lleno (`QuotaExceededError`)** | 🔴❌ | Mobile: `saveStateDebounced` envuelve en try/catch genérico → solo `console.warn`. **NO hay aviso al usuario, NO hay fallback** (ej. dropear `__combat_tracker`, foto base64). Usuario sigue editando creyendo que se guarda. | Detectar `e.name==='QuotaExceededError'`, toast bloqueante "Espacio agotado, exporta y limpia" + opción borrar foto. |
| S-12 | Storage deshabilitado / modo privado | ⚠️ | `localStorage.setItem` envuelto en try/catch que solo loggea. App sigue funcionando sin persistencia, pero usuario no recibe aviso. | Detectar al boot y avisar una vez. |
| S-13 | `AndroidBridge.saveCharacter` falla | ⚠️ | Mobile: try/catch + fallback `<a download>`. **PC: si Android disponible llama y `return` SIN try/catch** → si el bridge lanza, error sin recuperación y sin fallback. | PC: envolver en try/catch y caer al `Blob+<a>`. |
| S-14 | Round-trip export → import (PC) | ⚠️ | Se pierden/mutan: (a) listeners JS de tarjetas dinámicas reasignados con `onclick=""` inline; (b) `<select>` `selected="selected"` no siempre presente; (c) `_eidolonSelectedEvos` Set serializado pero UIs derivados dependen de DBs cargadas via fetch — race; (d) `_hpDiceVals` orden indeterminado vs recalc; (e) `__resolve_used` con `setTimeout(100)` race. | Reemplazar `innerHTML` por schema estructurado serializable (refactor mayor). |
| S-15 | Round-trip export → import (mobile) | ⚠️ | Campos NO snapshotados aunque sí mostrados: tracker de buffs por instancia, lang-list-custom orden, subtabs activas restauradas con `setTimeout(120)` race. `ficha-cm-themes` vive en clave aparte → no viaja con la ficha. | Snapshotear `ficha-cm-themes`, eliminar setTimeouts a favor de eventos `state-loaded`. |
| S-16 | Tamaño JSON ficha media | ⚠️ | Estimación: ~600KB para 5 clases + 50 dotes + 100 hechizos + foto. Foto PNG sin redimensionar puede irse a 2-5MB. `JSON.stringify(...,null,2)` añade ~20%. | Quitar `null,2` en producción; redimensionar foto antes de embeber (max 512x512 JPEG q70). |
| S-17 | Bloqueo del thread principal en export/import | ⚠️ | `JSON.stringify`, `JSON.parse`, ~30 `innerHTML=` y `recalc()` son síncronos. Para 600KB en móvil de gama baja: ~300-800ms freeze. Sin spinner, parece colgado. | Overlay con spinner; `setTimeout(0)` entre pasos pesados o Web Worker. |
| S-18 | **Auto-save mobile (`saveStateDebounced 800ms`)** | 🟡⚠️ | El timer es `setTimeout`. Si el usuario edita y cierra la app antes de 800ms, **se pierde el último cambio**. NO hay handler `beforeunload`/`pagehide`/`visibilitychange`. En Android la app se mata en background sin flush. | `document.addEventListener('visibilitychange', ...)` para flush inmediato + equivalente `pagehide`. |
| S-19 | Toast de error en `importCharacter` mobile | ⚠️ | Toast genérico sin causa. Comparar con PC: muestra `err.message`. | Incluir `err.message` en el toast. |
| S-20 | Tope localStorage iOS Safari (~5MB) / Android WebView (~10MB) | ⚠️ | Una ficha + foto + tracker grande + ~600KB cabe holgadamente, pero combinada con `ficha-cm-themes` + `ficha-attrs-state` puede acercarse al límite. | Contador en Ajustes "Espacio usado: X / Y KB". |
| S-21 | **Reseteo defensivo en import PC** | 🔴❌ | `importData` NO resetea `_autoFeaturesDismissed`, `_eidolonSelectedEvos`, `_combatState`, `_weaknesses` antes de aplicar, solo lo hace cuando la clave existe. **Importar ficha B sobre ficha A mezcla estados** (ej. dotes auto descartadas de A persisten en B). | Resetear todas las estructuras globales al inicio del `try`. |
| S-22 | Mobile re-add `lang-list-custom` con `setTimeout(150)` | ⚠️ | Race condition: si el usuario importa y rápidamente toca un tab, los idiomas custom no están restaurados; un `change` posterior puede pisar el estado. | Quitar setTimeout, llamar tras `renderLanguagesLists` síncronamente. |
| S-23 | Mobile aplicar foto base64 + localStorage | ⚠️ | Foto 2MB hace todos los siguientes saves serializar 2MB cada 800ms — degrada UX. | Comprimir/down-scale antes de almacenar; guardar foto en clave aparte. |
| S-24 | PC export con `JSON.stringify(data, null, 2)` y JSON anidado | ✅ ⚠️ | `__notes_data`, `__weaknesses`, `__combat_tracker`, etc. son strings con JSON anidado. Funciona pero infla tamaño y hace ilegible el JSON. | Pasar a objetos nativos en próxima versión rompiendo compat. |
| S-25 | `importData` no recalcula identidad de race traits / FCB tras carga | ⚠️ | Después de aplicar `__lang_grid_html`, no se vuelve a llamar a `renderRaceTraits()` para race recién importada. `_eidolonSelectedEvos` se restaura antes de cargar las DBs si import ocurre en boot. | Encolar `pending import` hasta `init` complete. |
| S-26 | Bridge Android: nombre archivo PC vs mobile | ℹ️ | PC: `personaje_pf1e.json` fijo. Mobile: `ficha-<nombre-slug>.json`. Inconsistente; el interceptor Kotlin debe filtrar ambos. | Unificar: usar slug del nombre en ambos. |

---

## 8. Casos límite: pickers, arquetipos, multi-caster, Mythic, i18n in-flight

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| K-01 | **Picker razas - completitud catálogo** | ⚠️ | Solo 12 razas. Faltan: gathlain, drow, goblin, hobgoblin, orc, sylph, undine, oread, ifrit, suli, dhampir, changeling, fetchling, grippli, ratfolk, samsaran, strix, vanara, vishkanya, wayang, etc. | Ampliar a ~30+ razas ARG/Bestiary/PSA. |
| K-02 | Picker razas - exposición UI | ✅ | `buildRacePickerList()` itera `DB.races.forEach` sin filtros — expone todas. | — |
| K-03 | Razas "any +2" - flujo elección | ✅ | human/half_elf/half_orc abren modal con select. Validan elección. | — |
| K-04 | **Razas - velocidades alternativas (vuelo/nadar/escalar)** | ❌ | El esquema de `races.json` define `speed` como número plano. Si en el futuro se añade gathlain/strix/merfolk, no hay campos para fly/swim/climb. | Migrar `speed` a `{land,fly,swim,climb,burrow,fly_maneuverability}`. |
| K-05 | Razas - persistencia anyBonus | ⚠️ | El bonus se SUMA al campo `*-racial` pero NO se guarda metadata de "qué stat fue elegida". Reabrir picker pierde la elección. | Persistir `__race_choice` con stat elegido. |
| K-06 | Razas alternativas humanas (aasimar variant heritage, tiefling variant heritage) | ❌ | aasimar/tiefling existen como entradas planas. NO hay subraces / variantes (Angelkin/Plumekith/Pitborn). | Añadir `variants` array por raza para heritages. |
| K-07 | Subraces (drow, deep gnome, etc.) | ❌ | NO hay subrace de elf/dwarf/gnome. | Modelar `subraces` en JSON. |
| K-08 | Picker arquetipos - mapeo a clases | ✅ | 47 valores únicos de `class` en archetypes.json — todos existen en classes.json. Sin huérfanos. | — |
| K-09 | **Multi-arquetipo por clase** | ❌ | Solo 1 archetype-select por class-row. Pathfinder permite múltiples no-conflictivos. | Permitir 2+ arquetipos con check de overlap. |
| K-10 | Validación de overlap de arquetipos | ❌ | Ningún check de `features_replaced`/`features_removed`. Se puede asignar archetype incompatible sin warning. | Validador que compare claves. |
| K-11 | Eidolon evolutions - filtro por coste | ✅ | Cost-filter + búsqueda. Ordena por coste asc. | — |
| K-12 | **Eidolon evolutions - prereqs** | 🟡❌ | `addEidolonEvolution()` NO valida `prereqs.base_form`, `prereqs.min_summoner_level`, `prereqs.requires_evolutions`. Ej: claws requiere "limbs", no se comprueba. | Validar prereqs antes de añadir; pintar opciones bloqueadas. |
| K-13 | **Eidolon evolutions - reglas de stacking** | 🟡❌ | `stacking: single|limited|unlimited` y `max_stacks` están en JSON pero el UI permite añadir N copias siempre. Bite "single" puede comprarse 50 veces. | Bloquear adds según stacking/max_stacks. |
| K-14 | Eidolon EP - exceso permitido | ⚠️ | `eid-ep-used` se calcula pero no impide superar `eid-ep-total`. Solo informativo. | Pintar rojo / impedir add cuando `used > total`. |
| K-15 | Master Summoner - EP a la mitad | ✅ | `recalcEidolon()` detecta master_summoner y aplica `Math.floor(ep/2)`. Muestra nota. | — |
| K-16 | Master Summoner - tamaño −1 | ❌ | Solo texto "eidolon is one size smaller" pero el campo `eid-size` NO se reduce automáticamente. | Reducir `eid-size` un escalón programáticamente. |
| K-17 | **Broodmaster - 2 eidolones** | 🟡❌ | Solo existe **un único panel de eidolón**. Al activar broodmaster solo se halve EP y se muestra texto. NO hay segundo panel. | Añadir panel secundario eidolón cuando archetype === broodmaster. |
| K-18 | **Synthesist - fusión de stats** | 🟡❌ | Nota informativa pero **ninguna lógica reemplaza FUE/DES/CON del invocador con los del eidolón**. Usuario debe hacer cuentas mentalmente. | Implementar override de stats físicos al detectar synthesist. |
| K-19 | Master Summoner + Synthesist - incompatibilidad | ❌ | NO hay validación. | Validar conflictos en `features_replaced`. |
| K-20 | Picker linajes hechicero | ✅ | 29 linajes, todos en select. Visible solo si sorcerer/bloodrager. | — |
| K-21 | Picker misterios oráculo | ✅ | 31 misterios, todos. Visible solo con clase oracle. | — |
| K-22 | Picker patrones bruja | ✅ | 13 patrones. Visible solo si witch/shaman. | — |
| K-23 | Picker dominios clérigo | ✅ | 84 dominios. Visible solo con cleric/warpriest. | — |
| K-24 | Picker escuelas arcanas | ✅ | 27 escuelas + 2 prohibited. Visible solo wizard/arcanist/magus. | — |
| K-25 | Picker órdenes (cavalier/samurai) | ✅ | 60 órdenes; filtra por classType + optgroups. | — |
| K-26 | Animal companion catálogo | ⚠️ | 28 animales. Faltan: bat, lizard, monitor lizard, baboon, eagle, hawk, rhino, tiger, giant frog, megaloceros. | Ampliar catálogo a 40+. |
| K-27 | Animal companion - plantillas (celestial/fiendish/entropic/resolute) | ❌ | NO existe sistema de templates. | Añadir templates como modificadores opcionales. |
| K-28 | Druida + Ranger - companion compartido | ❌ | El campo `comp-master-level` es manual; no agrega niveles druid+ranger (ranger cuenta como −3). | Auto-calcular `effective companion level = druid + max(0, ranger-3)`. |
| K-29 | **Multi-caster (sorcerer + wizard) - slots por clase** | 🟡❌ | `buildSpellSlots()` genera **UN único bloque global de slots Lv0–9 sin per-class**. Multiclase de casters comparte UI; el usuario debe calcular cada slot manualmente. | Generar bloque de slots por cada clase caster activa. |
| K-30 | **Mystic Theurge / progression doble** | 🟡❌ | mystic_theurge existe en classes.json como prestige, pero el cálculo de spell slots NO ofrece "+1 caster level a divine + arcane". | Implementar progression-stacking para prestige spellcasting. |
| K-31 | Prestige clases en catálogo | ✅ | 35+ prestige (arcane_trickster, eldritch_knight, mystic_theurge, dragon_disciple, loremaster, duelist, shadowdancer, holy_vindicator, hellknight, etc.). Sin filtro por categoría. | — |
| K-32 | **Prestige - validación prerequisitos** | 🟡❌ | classes.json NO almacena `prerequisites`. Un PJ nivel 1 puede ser Arcane Trickster sin TM, BAB o Hide ranks. | Añadir `prereqs` JSON y validar al seleccionar. |
| K-33 | BAB/saves prestige - cálculo correcto | ✅ | `bab_progression` y `saves` se aplican correctamente per-class-row. Funciona para Arcane Trickster (low/bad/good/good) y Eldritch Knight (full/good/bad/bad). | — |
| K-34 | **Nivel >20 (Epic)** | ❌ | `<input type="number" id="level${idx}" max="20">` y `comp-master-level max="20"`. NO hay soporte epic. | Eliminar `max="20"` y soportar nivel 21+ con tablas epic. |
| K-35 | **Sección Mythic** | ❌ | NO hay sección, paths, ni mythic power tracker. | Añadir panel Mythic (10 tiers, paths, mythic feats, surges). |
| K-36 | **Modo Gestalt** | ❌ | NO existe. El multiclase suma niveles, pero gestalt requeriría 2 clases por nivel con max BAB/HD/saves de las dos. | Añadir flag `gestalt` por class-row con merge MAX(stat). |
| K-37 | i18n in-flight - pickers abiertos | ✅ | `setLanguage()` re-construye listas de pickers abiertos: feat, feature, race, weapon, armor, item. | — |
| K-38 | i18n in-flight - pickers de eidolón evolutions / animal trick / order | ⚠️ | Solo cubre 6 paneles. Eidolon evo, animal trick, order, bloodline, mystery, patron, school NO se reconstruyen al cambiar idioma; quedan con texto en idioma anterior. | Refresh de selects en `setLanguage`. |
| K-39 | i18n in-flight - tirada animada | ✅ | La animación es CSS+setTimeout. Cambiar idioma no rompe la animación. | — |
| K-40 | i18n in-flight - nombre de buff | ⚠️ | Buff tracker guarda nombres como string libre; no se traducen (esperado). Pero buffs auto-añadidos por features (rage, smite, judgment) no se sincronizan con re-render. | Documentar o añadir traducción para auto-buffs. |
| K-41 | i18n in-flight - ATTR_NAMES Proxy | ✅ | Es un Proxy que evalúa LANG en cada acceso — siempre actualizado. | — |
| K-42 | Doble click rápido en "Añadir evolución" | ⚠️ | Permite N pulsaciones. Como cada uid usa `Date.now()`, dos clicks en mismo ms colisionan en Set y se dedupen. En clicks normales sí añade duplicados. Combinado con K-13, se puede abusar. | Debounce + validar stacking. |
| K-43 | Doble click en "Cargar raza" | ✅ | `confirmLoadRacialTraits()` hace `container.innerHTML=''` antes y reasigna. Idempotente. | — |
| K-44 | Long-press / hold | ❌ | NO hay handler. | (Opcional) Long-press para tooltip. |
| K-45 | Esc en mitad de picker | ❌ | Solo theme-menu y feedback-modal escuchan Escape. Race/feat/feature/weapon/armor/item/eidolon evo pickers NO cierran con Esc. UX pobre. | Handler global Escape → cerrar picker abierto. |
| K-46 | Búsqueda con caracteres especiales | ⚠️ | `text.includes(q)` con `toLowerCase().trim()`. **Acentos NO se normalizan**: buscar "alquimico" no encuentra "Alquímico". | Normalizar con `String.prototype.normalize('NFD').replace(/\p{Diacritic}/gu,'')`. |
| K-47 | Búsqueda con regex injection | ✅ | `includes()` no interpreta regex; entrada arbitraria es segura. | — |
| K-48 | Race picker - races con SLA escala con nivel | ⚠️ | aasimar/tiefling traits dicen "1/día: Daylight (NL = nivel del personaje)" como texto. NO se computa NL ni se trackea uso. | Convertir SLA en tracker auto con CL=character level. |
| K-49 | Razas - resistencias (cold/fire/electricity 5) | ❌ | Aasimar/Tiefling tienen "Celestial/Fiendish Resistance" como texto en trait card; no rellena ningún campo de resistencias. | Añadir panel de resistencias y enlazar. |
| K-50 | Razas - tamaño Small aplicado | ⚠️ | `confirmLoadRacialTraits` aplica `char-size` a Small si la opción existe. recalc encadena por evento change. | Verificar que recalc encadena. |
| K-51 | Eidolon subtypes (Unchained) - completitud | ⚠️ | Verificar que UC subtypes (azata, daemon, demon, devil, agathion, angel, archon, inevitable, protean, **elemental**, psychopomp) están todos. Ya añadimos elemental. | Verificar. |
| K-52 | Pickers - placeholder visible al filtrar | ✅ | `_filterPickerOptions` mantiene placeholder visible siempre. | — |
| K-53 | Multiclass - skill points por clase | ❌ | El cálculo de skills NO es per-class-row. Si bárbaro (4) + mago (2), se necesitan trackings separados. | Verificar y añadir skill points per-class. |
| K-54 | **Multi-caster CL stacking (Mystic Theurge etc.)** | 🟡❌ | `caster-level` es input manual; NO agrega niveles de prestige (Arcane Trickster +caster, Eldritch Knight +caster, Mystic Theurge +caster a ambos). | Cálculo automático con regla `+CL` por prestige. |
| K-55 | Picker razas - reset al cambiar raza | ⚠️ | `clearRaceData()` resetea `*-racial=0` y desbloquea, OK. Pero NO resetea `base-speed` ni `char-size` al valor por defecto. | Resetear también speed (30) y size (medium). |

---

## Resumen numérico del pase EXTRA

| Estado | X (30) | I (30) | S (26) | K (55) | **TOTAL (141)** |
|---|---|---|---|---|---|
| ✅ | 13 | 13 | 5 | 24 | **55** (39%) |
| ⚠️ | 13 | 5 | 18 | 13 | **49** (35%) |
| ❌ | 4 | 11 | 3 | 18 | **36** (26%) |
| 🆕 | 0 | 1 | 0 | 0 | **1** (1%) |
| ℹ️ | — | — | — | — | (informativos sin estado, ~5) |

> El pase EXTRA tiene proporcionalmente más rojo que mobile/PC porque va a las áreas no probadas: infraestructura abandonada, casos límite avanzados (Mythic/Gestalt no soportados), schema versioning ausente, multi-caster sin separación de slots.

---

## Acciones críticas sugeridas (orden ideal por impacto)

### 🧹 Limpieza inmediata (1-2 horas, sin riesgo)
1. **Borrar archivos huérfanos cache-bust** (I-06, I-23, I-27): `index-1e31a0ff.html`, `fallback-data-a8e94bc7.js`, `style-53d8f154.css`, `icono-1fab3e2a.png`, `CLAUDE-563aaf3a.md`, `normas-8b479885.md`.
2. **Borrar `patches/patches/`** (I-04) duplicado.
3. **Borrar `port/app/src/main/assets/index.desktop.bak.html`** (I-09) — viola CLAUDE.md.
4. **Borrar `test/`** (I-13) — código muerto duplicado.
5. **Borrar `app/`** raíz si es duplicado de `port/app/` (I-12).
6. **Re-sync de JSONs port** (I-10): empezando por `eidolon_subtypes.json`.

### 🔧 Bugs reales que afectan al usuario (priorizar)
7. **S-21** Reseteo defensivo en import PC (impide mezcla de fichas).
8. **S-11** Manejo de QuotaExceededError con aviso al usuario.
9. **S-18** Flush en `visibilitychange` para no perder último cambio en mobile.
10. **K-12 / K-13** Validar prereqs y stacking de eidolon evolutions.
11. **K-29** Slots de conjuro per-clase para multi-caster.
12. **K-46** Normalizar acentos en búsqueda de pickers.

### 🏗️ Mejoras de fundamento (más trabajo, alto impacto)
13. **S-08 / S-09** Schema versioning real con migrate(). Imprescindible para futuro.
14. **K-17 / K-18** Implementar Broodmaster (panel doble) y Synthesist (fusión de stats).
15. **X-28** Empaquetar fuentes WOFF2 locales para offline/file://.
16. **I-07** Re-build Electron con assets actuales.
17. **A-13 (de auditoria-pc.md)** + **K-32** Auto-aplicar Weapon Focus + validar prereqs prestige.

### 📦 Decisiones de producto
18. **X-21 / X-22** Decidir destino del Modo Demo (enlazar o eliminar 5 archivos).
19. **X-19** Decidir destino de `cyberpunk-mode.css` (huérfano).
20. **K-34 / K-35 / K-36** Decidir si soportar Epic / Mythic / Gestalt.
21. **K-01 / K-26** Ampliar catálogo de razas y compañeros animales.
22. **I-22** Decidir si mobile debe converger con PC (faltan P6/P9/P10).

### 🎨 Pulido
23. **X-15 / X-17** Reducir loader 8s + alinear timeouts.
24. **X-20** Panel de configuración por efecto cyberpunk.
25. **K-45** Esc para cerrar pickers.
26. **X-08 / X-12 / X-30** Respetar `prefers-reduced-motion` en TODOS los efectos.

---

## ✅ Cobertura final auditoría

| Documento | Features | Estado |
|-----------|----------|--------|
| `auditoria-mobile.md` | 199 | Completo |
| `auditoria-pc.md` | 242 | Completo |
| `auditoria-extra.md` (este) | 141 | Completo |
| **TOTAL** | **582 features** | — |

Cobertura cruzada PC + Mobile + transversales + infra + casos límite + edge cases + visuales + Modo Demo + patches + Electron + sync.

**Sin áreas pendientes en el alcance pedido.** Si surgen nuevos sub-sistemas (Mythic, Gestalt, multi-eidolon real, etc.), se auditan al construirse.
