## BUGS A ARREGLAR

### BUG-C · features_removed del arquetipo ignoradas al auto-añadir aptitudes
- **Descripción**: cuando un arquetipo elimina aptitudes de la clase base (campo `features_removed` en archetypes.json), esas aptitudes siguen apareciendo en la ficha porque `autoAddClassAbilities()` no consulta ese campo. Ejemplo: Caballero Monstruoso elimina "Convocar Monstruo" pero sigue apareciendo.
- **Causa**: `saAbils` en `autoAddClassAbilities` (index.html ~línea 8148) filtra por clase y nivel pero no por `features_removed`. Los nombres en `features_removed` son en inglés (ej. "Summon Monster") y los de `special_abilities.json` en español (ej. "Convocar Monstruo"), por lo que no hay match directo.
- **Fix sugerido**: añadir campo `features_removed_ids` (array de IDs de SA) a los arquetipos que eliminan aptitudes, y filtrar en `saAbils` saltando los IDs listados. Alternativa más rápida: añadir `features_removed_es` con los nombres en español al arquetipo y comparar con `tData(a,'name')`.
- **Arquetipos afectados conocidos**: monster_knight (elimina Convocar Monstruo, Vínculo Sensorial, Fusión de Formas, Convocación Gemela, etc.) y probablemente otros arquetipos "full replacement".
- **Impacto**: las aptitudes eliminadas se muestran de más, el usuario las borra manualmente.

## BUGS ARREGLADOS

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
