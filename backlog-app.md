# Backlog · Ficha App Mobile (Pathfinder 1e)

> **Archivo vivo.** Añadir ✅ cuando esté hecho, 🔄 cuando esté en progreso.
> Prioridad: 🔴 bloqueante / 🟡 importante / 🔵 mejora

---

## PERSONAJE

### P-01 ✅ Selector de raza con ajustes automáticos
- ~~Dropdown de raza que aplique automáticamente los bonos raciales (+2/−2 atributos).~~
- ~~Razas con bono libre (Humano +2 libre, semi-elfo +2 libre, semi-orco +2 libre) → popup modal para elegir a qué atributo va el bono.~~
- ~~Los rasgos raciales deben actualizarse en la sección "Rasgos" al cambiar la raza.~~

**Resuelto**: nueva función `applyRaceFull(raceName)` que al elegir raza en el picker:
1. Aplica los bonos raciales fijos vía `applyRacialBonuses` (Elfo +2DES/+2INT/−2CON, Enano +2CON/+2SAB/−2CAR, Mediano, Gnomo, Aasimar, Tiflin, Catfolk).
2. Para Humano/Semielfo/Semiorco abre un modal `sheet-free-bonus` (creado al vuelo) con 6 botones FUE/DES/CON/INT/SAB/CAR — el usuario elige a qué atributo va el +2.
3. Renderiza la card "Rasgos raciales" en Personaje > Rasgos con datos de `RACES_DATA_FULL` (D6): bonuses, tamaño, velocidad, idiomas iniciales, traits.
4. Si la raza tiene tamaño definido, sincroniza el `<select>` de tamaño y dispara `size-changed`.
5. Dispara `race-changed` y autosave.

`applyState` también re-renderiza los rasgos al cargar el state guardado (sin re-disparar el modal de +2 libre).

### P-02 ✅ Campo de deidad: escritura libre + lista
- ~~Actualmente la lista no permite escribir nombre personalizado.~~
- ~~Mantener el desplegable pero añadir opción "Personalizada…" que habilite input de texto libre.~~

**Resuelto**: el picker ahora añade como primera opción "— Personalizada (escribir libre) —" que al pulsarla pone el input en `readOnly=false` y enfoca para escribir. Las opciones canónicas siguen funcionando igual (selecciona, cierra picker, deja readonly). Si el state guardado tiene una deidad que NO está en la lista, el input arranca en modo libre. Doble-click siempre abre el picker (incluso desde modo libre, por si quiere volver a la lista). `window._openDeityPicker` expuesto.

### P-03 ✅ Clases: importar catálogo completo
- ~~La ficha PC tiene ~60 clases y ~304 arquetipos; la mobile solo tiene las básicas de seed.~~
- ~~Usar el `classes.json` y `archetypes.json` existentes en assets para poblar el selector.~~
- ~~El arquetipo debería filtrar por clase seleccionada.~~

**Resuelto**: ya estaba implementado vía `loadDB()` (línea ~4346) que hace fetch de los 15 JSON al arrancar y `getClassPickerData()` lista las 96 clases del JSON (con búsqueda live en `#class-search`). `getArchetypePickerData(classKey)` filtra arquetipos por `a.class === classKey || a.class_key === classKey`. **Mejoras añadidas en este commit**: telemetría de carga en `loadDB` (`window.__DB_STATS = {counts, failed}` + `console.log` con conteos). Botón "+ Añadir clase" ahora dispara `class-changed` (que faltaba) — resto del sistema se entera y recalcula todo.

### P-04 ✅ Campos auto-calculables no se actualizan
- ~~Al cambiar clase/nivel no se recalcula: Dados de Golpe totales, DG a tirar, BAB, Tiradas de Salvación, Puntos de Habilidad disponibles, Iniciativa, etc.~~
- ~~El botón "Tirar todos los DG" no es funcional (actualmente solo es un toast).~~
- ~~Implementar `recalc()` completo similar a la ficha PC que actualice todos los campos derivados al cambiar clase o nivel.~~

**Resuelto**: cambios de nivel/clase/arquetipo ahora disparan `class-changed` (window+document). Suscritos: CombatEngine (BAB, HP, saves, init), D3 skills (puntos disponibles, recalculo total), D5 weapons (BAB+atrib en ataques), D4 spells (slots por nivel/clase). HP_MAX pasa a `let` y se sustituye desde `combat-changed` (`hp-max`). Botón "🎲 Tirar todos los DG (regenerar PG totales)" funcional: por cada clase tira `level`d`hd` (nivel 1 = max) + CON_mod×nivel, asigna a `cl.hp`, recalcula HP_MAX, pone HP actual al máximo y muestra desglose en sheet de dados.

### P-05 🟡 XP no editable
- Los campos de XP no permiten escribir directamente.
- Deben ser inputs editables (actual y siguiente umbral).

### P-06 🔵 Idiomas conocidos: copiar lista de la ficha PC
- La ficha PC tiene el listado completo de idiomas de PF1e.
- Copiar esa lista al selector de idiomas de la mobile.
- Mantener el botón de idioma personalizado.

### P-07 🔴 Rasgos no se actualizan al cambiar clase/raza
- Actualmente los rasgos de clase (aptitudes de clase) y raciales son estáticos (datos seed del guerrero/humano).
- Al elegir clase y raza, los rasgos deben cargarse de los JSON correspondientes.

---

## COMBATE

### C-01 🟡 Daño no letal — quitar o arreglar mecánica
- La mecánica actual (darse daño no letal uno mismo) no tiene sentido.
- Opciones: (a) eliminarlo completamente, o (b) implementarlo correctamente: el daño no letal no mata, pero si supera tus HP máximos te deja inconsciente (en 0 hp funcional). Mostrar barra separada de daño no letal sobre la de HP.
- **Recomendación**: eliminarlo; si en algún momento se necesita, re-añadir bien.

### C-02 ✅ Defensa: auto-calcular todos los campos
- ~~CA, Toque, Indefenso deben calcularse automáticamente según: armadura equipada + escudo + bono DES (respetando máx DES armadura) + tamaño + armadura natural + bono deflexión + misc.~~
- ~~Dejar campos editables solo para los bonos "extra" (armadura natural, deflexión, misc / correcciones).~~
- ~~Los campos calculados deben ser `readonly` visualmente pero con botón de override si el usuario necesita forzar un valor.~~

**Resuelto**: nueva función `recomputeCAAuto()` rellena los 4 inputs auto-calculables (`armor`, `shield`, `dex`, `size`) cada vez que se emite `armor-equipped`, `armor-removed`, `attr-changed`, `size-changed` o `class-changed`. Suma `ac_bonus` de armaduras body equipadas, idem para escudos, capa DES_mod por el menor `max_dex` de las armaduras, y aplica `SIZE_AC_MOD` por tamaño. CombatEngine recalcula CA Total/Toque/Desp con los nuevos componentes. Los campos auto-rellenados se marcan visualmente con borde dashed + fondo distinto + `data-auto-filled="1"` (el usuario puede editarlos pero el siguiente evento sobreescribirá). Los slots `nat`, `deflect`, `dodge` se dejan al usuario (son misceláneos no derivables).

### C-03 🟡 Botón de reposo: cálculo correcto PF1e
- En PF1e un descanso largo NO cura todos los HP.
- Fórmula: curar `NivelPersonaje` HP + modificador CON (mínimo 1 HP) por noche de descanso completo.
- Añadir pregunta sobre calidad del descanso/comida: Buena (normal), Mala (solo la mitad), Excelente (doble).

### C-04 🟡 Notas de combate: no se guardan
- El botón "Guardar" de notas de combate no persiste el texto.
- Conectar al sistema de persistencia (save state).

### C-05 🔴 Condiciones: que afecten stats automáticamente
- Al activar una condición (Aturdido, Asustado, Fatigado, etc.) deben aplicarse los modificadores de PF1e correspondientes a CA, ataque, salvaciones, etc.
- Lista de modificadores por condición en `normas.md`.

---

## APTITUDES

### A-01 ✅ Campos de habilidades incompletos
- ~~Cada habilidad debería mostrar: Rangos + Mod. atributo + Clase (+3 si clase) + Misc = Total.~~
- ~~Actualmente solo hay el campo de rangos; el total no se recalcula.~~
- ~~Ver ficha PC para referencia de todos los campos.~~

**Resuelto**: ya estaba implementado por D3 (Dominio Habilidades). `calcSkillTotal(s)` (línea ~6310) calcula `rangos + atributo_mod + (3 si rangos>0 && esClase) + misc + ACP de armadura`. Listener de `input` en cada `.skill-rank` actualiza `.skill-total` en vivo. Listeners de `attr-changed`, `class-changed`, `armor-equipped` causan re-render. Counter `getSkillPointsTotal()` (PF1e: max(1, base+INT)×nivel + bono humano) muestra Disponibles/Gastados en `#sc-disp` y `#sc-spent`. Tap en fila tira `1d20+total` dinámico. Long-press abre sheet detalle con desglose.

### A-02 🔴 Botón añadir conjuros no funciona
- El botón "+" en la sección de conjuros no abre diálogo ni añade hechizos.
- Debe abrir un buscador sobre `spells.json` (si existe) o permitir entrada manual.

---

## EQUIPAMIENTO

### E-01 🔴 Carga: dinámica, no estática
- El peso total y la categoría de carga (sin carga / carga ligera / media / pesada) no se recalculan al añadir/quitar objetos.
- La función `D5_computeTotalWeight()` existe pero no está conectada al render dinámico.
- Reconectar a los eventos de cambio de equipo.

---

## SECCIÓN MÁS

### M-01 🟡 Compañeros: familiar — solo un slot, faltan campos
- Solo existe 1 familiar hardcodeado. Debería poder crearse/eliminarse.
- Faltan campos que la ficha PC sí tiene: estadísticas, tiradas de salvación, habilidades especiales, tipo de familiar con sus bonos.

### M-02 🔴 Compañero animal: faltan stats completos
- Faltan: tipo/raza del compañero, estadísticas completas (FUE/DES/CON/INT/SAB/CAR), bonos de nivel, trucos conocidos, ataques detallados, HP con tracker.

### M-03 🔴 Eidolón: faltan stats completos
- Más allá de las evoluciones y subtipo (ya implementado) falta: estadísticas base, tamaño, puntos de evolución disponibles/gastados, armadura natural, bonos de nivel.

### M-04 🟡 Invocadas: permitir múltiples + más campos
- Solo 1 slot estático. Debería poder añadir N criaturas invocadas.
- Cada una con: nombre, HP (tracker), CA, ataques, duración.

### M-05 🟡 Notas de sesión: no se pueden leer
- Las notas guardadas aparecen en la lista pero no se pueden pulsar para leer el cuerpo completo.
- Al pulsar una nota, abrir un modal/sheet con el texto completo.

### M-06 🟡 Ajustes: temas incompletos y no persisten
- Solo aparecen 2 temas en la lista (deberían ser más: pergamino claro, pergamino oscuro, cyberpunk, etc.).
- Al volver a abrir el menú, la configuración vuelve al valor por defecto (no persiste).
- El modo daltónico no aplica cambios visuales.

### M-07 ✅ Exportar / Importar no funcionan
- ~~El botón "Guardar" / exportar no genera ni descarga el JSON del personaje.~~
- ~~Importar tampoco carga datos.~~
- ~~Probablemente el bridge nativo (`AndroidBridge.saveCharacter`) no está conectado o los datos que se pasan están vacíos.~~

**Resuelto**: el handler **mock** (línea 5617) que mostraba "Ficha exportada (mock)" estaba registrado en bubbling phase y aunque el handler real de D6 (`wireConfirmActions`) corría primero en capture con `stopImmediatePropagation`, podía no propagarse en algunos navegadores. Eliminado el mock por completo. Ahora `confirm-go` solo tiene el handler real de D6 que llama `exportCharacter()` (Android: `AndroidBridge.saveCharacter`; web: `<a download>`) o `importCharacter()` (Android: `AndroidBridge.showCharacterPicker` + `_androidDeliverCharacter`; web: `<input type=file>` + FileReader). El nombre del archivo (`ficha-<slug>.json`) y el tamaño aproximado en bytes se calculan dinámicamente desde `STATE.identity.nombre` en el preview del sheet de confirmación.

### M-08 🟡 Imprimir: imprime la pestaña activa ("Más") en lugar de la hoja
- `AndroidBridge.printSheet()` imprime el WebView tal como está → se ve la pestaña "Más".
- Antes de imprimir, cambiar a una vista de impresión (tab personaje, o mejor: generar una vista all-in-one sin botones).

### M-09 🟡 Modo master: avisos de dotes/trasfondo fuera de lugar
- Los avisos "Faltan X dotes por seleccionar" y "Trasfondo sin completar" aparecen en la sección del master cuando deberían ir en la sección del jugador (o flotantes globales).

### M-10 🟡 Tracker de iniciativa: info incompleta al añadir combatiente
- Al añadir combatiente al tracker falta: HP máximos, CA, condiciones, tipo (PC/enemigo/aliado).
- Ver ficha PC para referencia.

### M-11 🟡 Tracker de buffs: falta en combate
- La sección de combate no tiene tracker de buffs activos con countdown de rounds.
- Añadir lista de buffs con duración en rounds y botón "avanzar round" que los decremente.

### M-12 🔵 Tracker iniciativa: botón ordenar por iniciativa
- Botón para ordenar automáticamente los combatientes de mayor a menor iniciativa.

### M-13 🟡 Foto del personaje no funciona
- Botón "Cambiar foto" no abre el selector de imagen.
- Botón "Quitar foto" probablemente tampoco funciona.
- Revisar que `AndroidBridge.pickPhoto()` esté correctamente conectado.

### M-14 🔴 Datos de identidad no persisten / no se actualizan en la UI
- Campos de nombre, jugador, raza, clase, etc. no se reflejan en el topbar ni en otros sitios donde deberían verse.
- Revisar que `collectIdentity()` → `snapshotState()` → `saveStateDebounced()` esté conectado a los `input` events.

---

## PERSISTENCIA GENERAL

### X-01 ✅ Save/Load de estado roto o incompleto
- ~~El personaje no se guarda correctamente entre sesiones.~~
- ~~Auditar `snapshotState()` / `applyState()` / `saveStateDebounced()`: verificar que todos los campos del DOM (identidad, atributos, clase, nivel, HP, etc.) se incluyen.~~
- ~~En Android el guardado va por `AndroidBridge.saveCharacter()` → verificar que el JSON que se le pasa no esté vacío.~~

**Resuelto**: extendido `snapshotState`/`applyState` con HP actual, hpTemp, hpNonlethal, D5_INVENTORY, D5_COINS, NOTES_LIST, INIT_LIST, CA components (`#m-ca-rows`), pgDetails (buff/miscPerLvl), combatMisc (initMisc/baseSpeed) y subtab activa por tab. Hook en `setHP` y `applyDH` para autosave inmediato al cambiar HP. La exportación/importación JSON ya cubría el resto (D6 commit f8677ab) — ahora el snapshot incluye toda la sesión viva.

---

## ORDEN SUGERIDO DE ATAQUE

1. **X-01** (persistencia) — sin esto nada tiene sentido
2. **P-04** (auto-cálculo al cambiar clase/nivel) — base de todo
3. **P-03** (catálogo completo de clases/arquetipos)
4. **C-02** (CA auto-calculada)
5. **A-01** (totales de habilidades)
6. **M-07** (exportar/importar)
7. Resto por secciones
