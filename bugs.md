## BUGS A ARREGLAR

_(ninguno pendiente)_

## BUGS ARREGLADOS

### 2026-04-30 · BUG-C · features_removed del arquetipo ignoradas al auto-añadir aptitudes
- **Fix**: `autoAddClassAbilities()` y `collectMissingForSync()` construyen ahora un Set `removedByArchetype` con los nombres EN (de `features_removed`) y ES (de `features_removed_es`) de todos los arquetipos activos. Las SA de clase base se descartan si su `name_en` o `name` coincide en ese Set (comparación lowercase).
- Los arquetipos que solo tienen `features_removed` en inglés funcionan correctamente porque la comparación cubre `a.name_en`. Si en el futuro se añade `features_removed_es` a algún arquetipo, también se respeta.

### 2026-04-27 · Ronda Android + reglas
- **A-1 · Foto en Android pedía cargar personaje**
  - Causa: el `<input type="file" id="char-photo-file" accept="image/*">` se disparaba con `.click()` programático desde el wrap. En algunos WebViews `fileChooserParams.acceptTypes` venía vacío y caía en la rama `showLoadDialog()`.
  - Fix: nuevo `AndroidBridge.pickPhoto()` que lanza `imagePicker.launch("image/*")` directamente. El callback codifica la imagen como `data:URL` base64 y se la entrega a la web vía `window.applyPhoto()`. El wrap rutea a este bridge cuando `NativeApp.isAndroid()`.
- **A-2 · Botón Imprimir no funcionaba en Android**
  - Causa: `window.print()` no es soportado por el WebView estándar.
  - Fix: el `onclick` del botón rutea a `AndroidBridge.printSheet()` (que ya existía y usa `PrintManager` nativo) cuando se detecta Android.
- **A-3 · Botón Guardar no funcionaba + feedback colisionaba con guardar**
  - Causa raíz común: `exportData()` y `downloadRequestMd()` creaban un `<a download>` y llamaban `.click()` sin añadirlo al DOM. El listener del bridge `document.addEventListener('click', ...)` nunca veía el evento. Para feedback además, cuando sí burbujeaba (otros browsers), trataba el markdown como JSON de personaje.
  - Fix: ambas funciones detectan Android y van directas al bridge — `AndroidBridge.saveCharacter(json, name)` para personajes y `AndroidBridge.saveTextFile(md, 'request.md')` para feedback. Además `saveTextFile` ahora escribe en `filesDir/` raíz, no en `characters/`, así no contamina el picker.
- **A-4 · Combatientes salían de pantalla en móvil**
  - Causa: la tabla `.ini-table` con 8 columnas no cabía en portrait estrecho.
  - Fix: wrapper `.ini-table-scroll` con `overflow-x:auto` + `min-width:560px` en la tabla. Scroll horizontal táctil con inercia (`-webkit-overflow-scrolling:touch`).
- **F-3 · Mínimo 1 PG por nivel individual**
  - Causa: `recalc()` calculaba `hpFromClasses + conMod * totalHD` y solo aplicaba un piso global = totalHD. Un personaje con dados bajos y CON negativa podía tener < 1 PG en algún nivel individual.
  - Fix: cuando `_hpDiceState` tiene valores tirados, se recalcula como `Σ max(1, dado_i + conMod)`. Sin dados (entrada manual por clase) mantiene el cálculo anterior con piso global.
- **F-13 · Carga del compañero animal con tabla cuadrúpeda**
  - Causa: `calcAnimalCompanion()` aplicaba `×1.5` fijo para emular cuadrúpedo Mediano, ignorando el selector de tamaño.
  - Fix: nueva tabla local `QUAD_CARRY_MULT` (Fino 0.25 → Colosal 24) consultada con `comp-size`.
