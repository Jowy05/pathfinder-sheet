# Seguir haciendo · Ficha Pathfinder 1e

> **Para retomar el proyecto en otra sesión**: abre este archivo y
> `CLAUDE.md`. Entre los dos tienes todo el contexto necesario.

---

## 🧭 Contexto rápido del proyecto

- **Qué es**: hoja de personaje **Pathfinder 1ª edición** (PF1e) en
  formato SPA web sin frameworks ni build. Bilingüe ES/EN.
- **Doble despliegue**: web (`Ficha/`) + port Android (`Ficha/port/`).
  Cualquier cambio en HTML/CSS/JS/JSON debe replicarse en
  `Ficha/port/app/src/main/assets/` (ver `CLAUDE.md`).
- **Persistencia**: export/import a JSON. No localStorage para fichas
  (sí para preferencias: tema, idioma, modo cyberpunk, sonido).
- **Stack**: vanilla JS dentro de un `<script>` gigante en
  `index.html`. CSS partido en `style.css` (base) +
  `cyberpunk-loader.css`, `cyberpunk-mode.css`, `cyberpunk-overlay.css`.
  FX en `cyberpunk-fx.js`. Loader en `cyberpunk-loader.js`.

## 🎨 Estado del modo cyberpunk

- Toggle ON/OFF desde el menú de tema (FAB esquina inferior derecha).
  Persiste en `localStorage.pf1e-cyber-mode`.
- Aplica `data-cyber="on"` al `<html>` y dispara una animación
  holográfica en los paneles.
- Includes:
  - Loader inicial con icosaedro SVG + anillos rúnicos (adapta paleta
    al tema activo via `data-loader-theme`).
  - HP bar tipo cardiografía (ECG) con ritmo dinámico (fast/dying/flatline).
  - Confetti + banner + screen shake en NAT 20.
  - Banner + shake en pifia (1).
  - Cursor trail.
  - Botones magnéticos con ripple.
  - Botón flotante de silenciar/dessilenciar sonidos
    (`#cy-sound-fab`) — actualmente visible siempre, ver B-005.

---

## 🔴 BUGS PENDIENTES

### B-001 · Loader: d20 solapa con título y barra de progreso
- **Descripción**: el icosaedro SVG está absolutamente centrado y
  superpone el `.cyb-title` ("PATHFINDER 1E") y el `.cyb-progress-wrap`.
- **Esperado**: el d20 vive en su propia franja vertical, encima del
  título; sin solapamientos.
- **Origen**: `.cyb-d20-stage { position: absolute; top: 50%; left: 50%; }`
  en `cyberpunk-loader.css`.
- **Fix sugerido**: convertir el contenedor del loader a layout flex
  normal con el d20 en flujo (no absolute) y los anillos sí absolute
  detrás del d20. O reducir el d20 a ~160px y desplazarlo hacia arriba
  con `top: 38%`.

### B-002 · Resto de dados (d2, d3, d4, d6, d8, d10, d12, d100) sin cubo 3D
- **Descripción**: sólo el d20 muestra el cubo 3D estilo demo. El resto
  conserva el dado plano hexagonal.
- **Esperado**: TODOS los dados (d2..d100) deberían usar la misma
  estética 3D (cubo 3D), adaptando el número a las caras correctas.
- **Origen**: en `style.css`,
  `.single-die-3d[data-faces="20"] .single-die-cube { display: block }`
  está condicionado a 20.
- **Fix sugerido**: mostrar el cubo 3D para cualquier número de caras y
  rellenar las 6 caras visibles con valores aleatorios del rango [1..N].
  La animación de roll en `rollGenericDie()` ya funciona, sólo hay que
  quitar el `if(faces === 20 && cube)` y aplicar a todos.

### B-003 · D20: animación NAT20 salta al pulsar (antes de tirar)
- **Descripción**: al hacer clic en el dado d20 inmediatamente se
  dispara la animación de NAT20 (confetti + banner) antes de que termine
  el roll de 1.5s.
- **Esperado**: la animación NAT20 sólo se dispara si el resultado FINAL
  es 20, después del 1.5s del cubo rotando.
- **Origen**: el `MutationObserver` en `cyberpunk-fx.js`
  (`attachDieObserver`) reacciona al texto inicial "20" de la cara
  frontal (que está hardcoded en el HTML) cuando se quita y se añade
  `.die-result-flash`.
- **Fix sugerido**:
  1. El observer ya ignora si `.rolling` está, pero lee el textContent
     del `#single-die-number` que ahora se actualiza tras el roll.
     Hay que asegurarse que `numEl.textContent` sólo se asigna al
     valor final una vez (cosa que ya hace el código). El bug está
     probablemente en que el front face del cubo arranca con "20"
     hardcoded y al disparar el roll el observer lo capta como "20
     final" porque la clase `cube-rolling` no es la que vigila.
  2. Quitar el "20" hardcoded de `<span class="sd-face sd-f-front">20</span>`
     o esperar a que `.cube-rolling` no esté presente antes de
     procesar.

### B-004 · Modo no-cyber: sólo se ve el dado d20, los demás desaparecen
- **Descripción**: con `data-cyber="off"`, al cambiar a d4/d6/d8/etc.,
  no aparece nada (el flat tampoco se muestra).
- **Esperado**: en modo pergamino, el dado se ve siempre, sea d20 o
  cualquier otro.
- **Origen**: el HTML pone `single-die-3d` SIEMPRE. La regla
  `.single-die-3d { background: transparent !important; clip-path: none !important; }`
  borra el dado plano dorado y deja sólo el cubo. Como el cubo está
  oculto cuando faces≠20, el resultado es "nada".
- **Fix sugerido**: si se aplica B-002 (todos los dados con cubo 3D),
  este se resuelve solo. Alternativamente, sólo aplicar la clase
  `single-die-3d` cuando data-faces=20.

### B-005 · Botón silenciar sonidos: visible siempre en lugar de sólo en modo cyber
- **Descripción**: el `#cy-sound-fab` es visible en todos los modos.
  Debería aparecer SOLO cuando el modo cyberpunk está activo (es un
  feature exclusivo de ese modo).
- **Esperado**: con `data-cyber="off"` el FAB de sonido está oculto.
- **Origen**: `cyberpunk-overlay.css` define `.cy-sound-fab` sin
  condicionar a `html[data-cyber="on"]`.
- **Fix sugerido**: añadir
  `html:not([data-cyber="on"]) .cy-sound-fab { display: none; }`
  en `cyberpunk-overlay.css`. O mejor: que `ensureSoundFab()` en
  `cyberpunk-fx.js` se invoque sólo en `applyMode(true)` y
  destruya/oculte el botón en `applyMode(false)`.

---

## 📝 Pendientes de continuar (no son bugs, son mejoras / siguiente paso)

### Sincronizar al port Android
Tras arreglar los bugs anteriores, copiar al
`port/app/src/main/assets/` los siguientes archivos modificados:
- `index.html`
- `style.css`
- `cyberpunk-loader.js` y `cyberpunk-loader.css`
- `cyberpunk-fx.js` y `cyberpunk-overlay.css`
- `fallback-data.js` (stub vacío en web; el Android lo sobreescribe).

Hay un `port/sync-assets.bat` que lo automatiza.

### Próximas ideas (a discutir con usuario)
- Subir el proyecto a GitHub para versionado.
- Persistencia adicional: hechizos preparados, pociones consumidas.
- Tracker de aptitudes auto: revisar PF1e edge cases (rabia x rounds,
  ki points, smites/day).
- Auditar `normas.md` contra el cálculo del `recalc()` por si hay
  divergencias residuales.

---

## 📂 Archivos clave del proyecto

| Archivo | Rol |
|---|---|
| `index.html` | App entera (HTML + JS inline) |
| `style.css` | Estilos base + temas pergamino |
| `cyberpunk-loader.css/js` | Loader inicial (icosaedro + anillos) |
| `cyberpunk-mode.css` | Override visual del modo cyberpunk |
| `cyberpunk-overlay.css` | Confetti, banners, FAB sonido, ECG, etc. |
| `cyberpunk-fx.js` | FX runtime (toggle, observer, magnéticos…) |
| `fallback-data.js` | Stub vacío en web; Android lo sobreescribe |
| `*.json` | Datos: clases, razas, equipo, hechizos, dotes |
| `CLAUDE.md` | Reglas de oro del proyecto (regla doble despliegue) |
| `Tareas.md` | Historial de tareas (casi todo ✅) |
| `normas.md` | Reglas oficiales PF1e + qué cumple la hoja |
| `patches/P-*.patch.md` | Specs idempotentes con anchors `#ANCHOR:P*` |
| `seguir haciendo.md` | ESTE archivo. Bugs + contexto + próximos pasos |

---

## 🚀 Cómo retomar

1. Lee `CLAUDE.md` (regla de oro: doble despliegue).
2. Lee este archivo (bugs vivos + contexto).
3. Empieza por **B-002 + B-004** (relacionados, fix conjunto).
4. Sigue con **B-005** (rápido).
5. **B-001** (layout del loader, requiere afinar CSS).
6. **B-003** (observer del NAT20, requiere debug del orden de eventos).
7. Tras cada fix: probar en navegador → si OK → copiar a
   `port/app/src/main/assets/` o ejecutar `port/sync-assets.bat`.
