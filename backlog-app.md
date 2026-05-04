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

### P-05 ✅ XP no editable
- ~~Los campos de XP no permiten escribir directamente.~~
- ~~Deben ser inputs editables (actual y siguiente umbral).~~

**Resuelto**: card de Experiencia ahora con tres inputs editables (`xp-current`, `xp-next`, `xp-track`). Tabla `XP_TABLE` PF1e canónica para los 3 avances (Lento/Medio/Rápido) × 20 niveles. Función `autoFillXPNext()` calcula el umbral según nivel total del personaje (suma de niveles de clase) y avance seleccionado. `refreshXPBar()` actualiza barra y porcentaje en vivo. Si XP actual >= XP next muestra mensaje "¡Subes de nivel!" en color verde. Listeners conectados a `class-changed` para auto-recalcular el umbral al subir nivel. Persistencia en `STATE.xp = {current, next, track}`.

### P-06 ✅ Idiomas conocidos: copiar lista de la ficha PC
- ~~La ficha PC tiene el listado completo de idiomas de PF1e.~~
- ~~Copiar esa lista al selector de idiomas de la mobile.~~
- ~~Mantener el botón de idioma personalizado.~~

**Resuelto**: la card de Idiomas pasa de 6 checkboxes hardcoded a render dinámico desde `LANGUAGES` (D6) con dos secciones: **Estándar** (Común, Élfico, Enano, Gnomo, Mediano, Orco, Trasgo, Celestial, Infernal, Abisal, Dracónico) y **Exóticos** (Acuán, Auran, Ignan, Terran, Silvano, Druídico, Subcomún, Necril, Tien, Varisiano, Osiriano, Hallit, Skald, Kelish, Vudrani, Shoanti, Tengu). `renderLanguagesLists()` genera los checkboxes preservando los marcados al re-render. Botón "+ Idioma personalizado" (`addCustomLanguage`) añade al área `#lang-list-custom` con botón × para borrar individualmente. Persistencia en `STATE.langs = {std:[], exo:[], custom:[{name,checked}]}`.

### P-07 ✅ Rasgos no se actualizan al cambiar clase/raza
- ~~Actualmente los rasgos de clase (aptitudes de clase) y raciales son estáticos (datos seed del guerrero/humano).~~
- ~~Al elegir clase y raza, los rasgos deben cargarse de los JSON correspondientes.~~

**Resuelto**:
- Rasgos raciales: P-01 ya cubre esto (`renderRacialTraits` lee `RACES_DATA_FULL`).
- Rasgos de clase: nueva función `renderClassTraitsCard()` que muestra rasgos para TODAS las clases multi-clase del personaje. Prioridad de fuente: 1) `DB.classes[key].features` filtradas por `level <= cl.level`; 2) `CLASSES_DATA_FULL` (D6); 3) `CLASS_FEATURES_DATA` con `auto:true` (aptitudes auto de D4). Si tiene varias clases, las separa por header `<b>Nombre (Nv X)</b>`. Listener en `class-changed` para auto-render. Init render en `init6`.

---

## COMBATE

### C-01 ✅ Daño no letal — quitar o arreglar mecánica
- ~~La mecánica actual (darse daño no letal uno mismo) no tiene sentido.~~
- ~~Opciones: (a) eliminarlo completamente, o (b) implementarlo correctamente.~~

**Resuelto (opción b)**: arreglada la mecánica PF1e completa. Cambios en `applyDH`:
- **Daño letal**: ahora consume primero PG temporales (hpTemp), luego PG actuales. Antes ignoraba hpTemp.
- **No letal**: NO baja PG; acumula en hpNonlethal. Cuando hpNonlethal ≥ HP actuales o ≥ HP_MAX, **auto-marca condición Inconsciente** (estable, no muriendo) y dispara `rebuildBuffModTotals + CombatEngine.apply`.
- **Curación**: ya estaba bien, restaura PG sin tocar daño no letal.
- **Cura no letal** (NUEVO): cuarto botón en sheet-hp-edit que resta hpNonlethal (descanso 1h por nivel, magia, atención médica).
- **PG temporales**: ya estaba bien.

Hints actualizados con texto descriptivo PF1e por modo. Botón "cure-nonlethal" con color verde oliva propio.

### C-02 ✅ Defensa: auto-calcular todos los campos
- ~~CA, Toque, Indefenso deben calcularse automáticamente según: armadura equipada + escudo + bono DES (respetando máx DES armadura) + tamaño + armadura natural + bono deflexión + misc.~~
- ~~Dejar campos editables solo para los bonos "extra" (armadura natural, deflexión, misc / correcciones).~~
- ~~Los campos calculados deben ser `readonly` visualmente pero con botón de override si el usuario necesita forzar un valor.~~

**Resuelto**: nueva función `recomputeCAAuto()` rellena los 4 inputs auto-calculables (`armor`, `shield`, `dex`, `size`) cada vez que se emite `armor-equipped`, `armor-removed`, `attr-changed`, `size-changed` o `class-changed`. Suma `ac_bonus` de armaduras body equipadas, idem para escudos, capa DES_mod por el menor `max_dex` de las armaduras, y aplica `SIZE_AC_MOD` por tamaño. CombatEngine recalcula CA Total/Toque/Desp con los nuevos componentes. Los campos auto-rellenados se marcan visualmente con borde dashed + fondo distinto + `data-auto-filled="1"` (el usuario puede editarlos pero el siguiente evento sobreescribirá). Los slots `nat`, `deflect`, `dodge` se dejan al usuario (son misceláneos no derivables).

### C-03 ✅ Botón de reposo: cálculo correcto PF1e
- ~~En PF1e un descanso largo NO cura todos los HP.~~
- ~~Fórmula: curar `NivelPersonaje` HP + modificador CON (mínimo 1 HP) por noche de descanso completo.~~
- ~~Añadir pregunta sobre calidad del descanso/comida: Buena (normal), Mala (solo la mitad), Excelente (doble).~~

**Resuelto**: el botón "Reposo" de la HP card abre `sheet-rest` con preview en vivo. Fórmula PF1e: `cura = max(1, (nivel_total + CON_mod) × multiplicador)`, daño no letal cura el doble. Multiplicadores por calidad: Mala ×0.5, Normal ×1, Buena ×1.5, Excelente ×2. Antes el botón curaba todo a tope (irreal). Aplicar también dispara `rest-long` event para que conjuros y aptitudes auto se reseteen (handler ya existente en D4). Toast con resumen.

### C-04 ✅ Notas de combate: no se guardan
- ~~El botón "Guardar" de notas de combate no persiste el texto.~~
- ~~Conectar al sistema de persistencia (save state).~~

**Resuelto**: nuevo array `window.COMBAT_NOTES = [{t,body,at}]` con render `renderCombatNotesList()` debajo del formulario. Botón "💾 Guardar nota" ahora añade entrada (con timestamp) y limpia inputs. Cada nota tiene botón × para borrar individualmente. Persistencia en `STATE.combatNotes` con autosave + restauración en applyState. Las notas guardadas se muestran ordenadas (más recientes primero) con título, fecha (formato ES corto) y cuerpo.

### C-05 ✅ Condiciones: que afecten stats automáticamente
- ~~Al activar una condición (Aturdido, Asustado, Fatigado, etc.) deben aplicarse los modificadores de PF1e correspondientes a CA, ataque, salvaciones, etc.~~
- ~~Lista de modificadores por condición en `normas.md`.~~

**Resuelto**: nuevo map `CONDITION_MODS` con los modificadores parsables por condición (Asustado=−2 atq/ts, Fatigado=−2 FUE/DES, Cegado=−2 ac/atq, Sacudido=−2 atq/ts/hab, Enredado=−2 atq −4 dex, Exhausto=−6 FUE/DES, Enfermo=−2 atq/dmg/ts, Tumbado=−4 atq, Inmovilizado=−4 ac, Agarrado=−4 dex/−2 atq/cmb, Deslumbrado=−1 atq, Ensordecido=−4 init, En Pánico=−2 ts, Acobardado/Aturdido/Aturdido grave=−2 ac…). `rebuildBuffModTotals()` ahora también itera `.cond-chip.active` y suma sus mods al `_BUFF_MOD_TOTALS` (que ya consume CombatEngine para CA, ataque, saves, init, hp). Toggle de condición dispara `rebuildBuffModTotals + CombatEngine.apply` y autosave. `applyState` también recalcula tras restaurar conditions. Condiciones con efectos no parsables (Confundido = comport. aleatorio, Indefenso = DES 0, Inconsciente, Petrificado, Paralizado, Mareado, Tambaleante, Fascinado, Muriendo, Sangrando) quedan como advertencias visuales sin auto-aplicación.

---

## APTITUDES

### A-01 ✅ Campos de habilidades incompletos
- ~~Cada habilidad debería mostrar: Rangos + Mod. atributo + Clase (+3 si clase) + Misc = Total.~~
- ~~Actualmente solo hay el campo de rangos; el total no se recalcula.~~
- ~~Ver ficha PC para referencia de todos los campos.~~

**Resuelto**: ya estaba implementado por D3 (Dominio Habilidades). `calcSkillTotal(s)` (línea ~6310) calcula `rangos + atributo_mod + (3 si rangos>0 && esClase) + misc + ACP de armadura`. Listener de `input` en cada `.skill-rank` actualiza `.skill-total` en vivo. Listeners de `attr-changed`, `class-changed`, `armor-equipped` causan re-render. Counter `getSkillPointsTotal()` (PF1e: max(1, base+INT)×nivel + bono humano) muestra Disponibles/Gastados en `#sc-disp` y `#sc-spent`. Tap en fila tira `1d20+total` dinámico. Long-press abre sheet detalle con desglose.

### A-02 ✅ Botón añadir conjuros no funciona
- ~~El botón "+" en la sección de conjuros no abre diálogo ni añade hechizos.~~
- ~~Debe abrir un buscador sobre `spells.json` (si existe) o permitir entrada manual.~~

**Resuelto**: ya estaba implementado. `sheet-spell-add` con formulario (nivel, nombre, escuela, componentes) abre desde `+ Añadir conjuro` (estado vacío) y `+ Añadir conjuro Nv X` (por nivel). Handler `spell-add-save` hace push a `SPELLS_DATA` con flag `custom:true`, ajusta slot máximo del nivel si era 0, re-renderiza spells y slots, cierra sheet y muestra toast. No hay `spells.json` en el proyecto — la entrada es manual (apropiado para el alcance actual).

---

## EQUIPAMIENTO

### E-01 ✅ Carga: dinámica, no estática
- ~~El peso total y la categoría de carga (sin carga / carga ligera / media / pesada) no se recalculan al añadir/quitar objetos.~~
- ~~La función `D5_computeTotalWeight()` existe pero no está conectada al render dinámico.~~
- ~~Reconectar a los eventos de cambio de equipo.~~

**Resuelto**: ya estaba bien para inventario y monedas (D5_recompute se llamaba). Faltaban hooks al añadir/eliminar **arma** (`weap-save` push y `weapon delete`) y al añadir **armadura** (`armor-save` push). Ahora todos llaman `D5_recompute()` que ejecuta `D5_renderCoins() + D5_renderWeight() + D5_refreshWeaponRolls()`. También render inicial en `init6` con setTimeout 200ms para que el card de Equipo > Peso muestre los valores reales al arrancar (antes se quedaba con los placeholders "—").

---

## SECCIÓN MÁS

### M-01 ✅ Compañeros: familiar — multi-instancia + campos PF1e completos
- Resuelto: `COMP_DATA.familiar` ahora es array. Botón ＋ Añadir y × Eliminar por instancia. Vista lista + editor con back. Campos: nombre, tipo (cuervo/búho/...), PG, CA, atributos completos (FUE/DES/CON/INT/SAB/CAR), TS (Fort/Ref/Vol), ataques, habilidades especiales, notas. Migración v1→v2 transparente en `applyState`.

### M-02 ✅ Compañero animal: stats completos
- Resuelto: `COMP_DATA.animal` ahora multi-instancia con schema PF1e completo: nombre, raza/tipo, PG, CA, atributos (FUE/DES/CON/INT/SAB/CAR), bonos por nivel de clase animal, trucos conocidos (1 por línea), ataques detallados, notas adicionales. Misma UI lista/editor.

### M-03 ✅ Eidolón: stats completos
- Resuelto: `COMP_DATA.eidolon` multi-instancia con: nombre, subtipo Unchained (selector), tamaño (Diminuto..Enorme), atributos completos, armadura natural, puntos de evolución usados/totales, evoluciones (lista), ataques, notas. Editor unificado.

### M-04 ✅ Invocadas: múltiples + campos completos
- Resuelto: `COMP_DATA.invocadas` ya no es slot único — array multi-instancia con ＋ Añadir y × Eliminar. Cada criatura: nombre, PG, CA, duración (rondas totales), ronda actual, ataques, notas. La lista muestra contador de rondas con icono ⏱.

### M-05 ✅ Notas de sesión: no se pueden leer
- ~~Las notas guardadas aparecen en la lista pero no se pueden pulsar para leer el cuerpo completo.~~
- ~~Al pulsar una nota, abrir un modal/sheet con el texto completo.~~

**Resuelto**: cards de notas ahora son tap-able. El cuerpo se trunca a 100 caracteres en la preview con "…" y nota "Tap para leer/editar completa". Al hacer tap, carga título y body al editor superior, marca el botón Save como "💾 Sobreescribir nota" y `dataset.editingIdx`. Save sobreescribe la nota en su posición original (mantiene el orden) en vez de añadir una nueva. Botón × por nota para borrar individual con `stopPropagation` para no abrir la nota. Counter de cantidad en la cabecera. Autosave en delete + sobreescritura.

### M-06 ✅ Ajustes: temas incompletos y no persisten
- ~~Solo aparecen 2 temas en la lista (deberían ser más: pergamino claro, pergamino oscuro, cyberpunk, etc.).~~
- ~~Al volver a abrir el menú, la configuración vuelve al valor por defecto (no persiste).~~
- ~~El modo daltónico no aplica cambios visuales.~~

**Resuelto**:
- **Tema**: el dropdown ahora se rellena dinámicamente desde `THEMES[]` (los 13 temas registrados, mismos del icono pincel) en vez de hardcoded "Pergamino/Oscuro". Cambiar tema desde Ajustes lo aplica inmediatamente y persiste en `ficha-theme`.
- **Persistencia**: nueva clave `ficha-mobile-settings` con `{lang, theme, fontSize, daltonic}`. Al abrir el sheet de Ajustes los inputs reflejan los valores guardados.
- **Tamaño de fuente**: 4 niveles (Pequeño 14px / Normal 16px / Grande 18px / Extra grande 20px). Aplica a `:root` con re-flow automático.
- **Modo daltónico**: ahora SÍ aplica visualmente. Inyecta CSS que (a) pone fuente en negrita, (b) cambia accent a azul + negative a rojo oscuro + positive a verde oscuro (más contrastes para deutaranopia/protanopia), (c) elimina text-shadows que confunden, (d) condiciones activas ganan outline dashed para contraste visual.

### M-07 ✅ Exportar / Importar no funcionan
- ~~El botón "Guardar" / exportar no genera ni descarga el JSON del personaje.~~
- ~~Importar tampoco carga datos.~~
- ~~Probablemente el bridge nativo (`AndroidBridge.saveCharacter`) no está conectado o los datos que se pasan están vacíos.~~

**Resuelto**: el handler **mock** (línea 5617) que mostraba "Ficha exportada (mock)" estaba registrado en bubbling phase y aunque el handler real de D6 (`wireConfirmActions`) corría primero en capture con `stopImmediatePropagation`, podía no propagarse en algunos navegadores. Eliminado el mock por completo. Ahora `confirm-go` solo tiene el handler real de D6 que llama `exportCharacter()` (Android: `AndroidBridge.saveCharacter`; web: `<a download>`) o `importCharacter()` (Android: `AndroidBridge.showCharacterPicker` + `_androidDeliverCharacter`; web: `<input type=file>` + FileReader). El nombre del archivo (`ficha-<slug>.json`) y el tamaño aproximado en bytes se calculan dinámicamente desde `STATE.identity.nombre` en el preview del sheet de confirmación.

### M-08 ✅ Imprimir: imprime la pestaña activa ("Más") en lugar de la hoja
- ~~`AndroidBridge.printSheet()` imprime el WebView tal como está → se ve la pestaña "Más".~~
- ~~Antes de imprimir, cambiar a una vista de impresión (tab personaje, o mejor: generar una vista all-in-one sin botones).~~

**Resuelto**: regla `@media print` añadida que:
- Oculta UI interactiva: topbar, bottom-nav, FAB, sheets, subtabs, botones, inputs CRUD, icon-buttons.
- Fuerza visibilidad de TODAS las tab-pages y sub-pages (forzando `display:block !important` aunque tengan `hidden`).
- Cards en blanco/negro con bordes finos y `page-break-inside:avoid`.
- Salto de página entre tabs principales con heading "PERSONAJE / COMBATE / APTITUDES / EQUIPO / MÁS".
- `<details>` se imprimen abiertos con summary en negrita.
- `printSheet()` además abre todos los `<details>` antes de imprimir y espera 100ms para que el DOM se asiente.

Ahora imprimiendo en Android (`AndroidBridge.printSheet`) o web (`window.print`) sale la ficha completa, no solo la tab activa.

### M-09 ✅ Modo master: avisos de dotes/trasfondo fuera de lugar
- ~~Los avisos "Faltan X dotes por seleccionar" y "Trasfondo sin completar" aparecen en la sección del master cuando deberían ir en la sección del jugador (o flotantes globales).~~

**Resuelto**: nueva entrada en tab Más → "Avisos del personaje" (con badge rojo de cantidad) que abre `sheet-warnings`. Validaciones dinámicas (`computeWarnings`):
- Identidad sin nombre/jugador/historia
- Atributos base suman menos de 60
- Clases vacías o nivel 0
- PG sin asignar por clase (sugiere usar "Tirar todos los DG")
- Puntos de habilidad sin gastar (lee D3_SKILLS.points)
- Druida/Explorador sin compañero animal
- Conjuros sin preparar (clases preparadoras)
- Sin foto (informativo)

Re-render reactivo en `attr-changed`, `class-changed`, `race-changed`, `photo-changed`, `state-loaded`, `skills-changed`. Los avisos en sheet-master ahora también son dinámicos (mismo origen). Badge rojo con cantidad solo se muestra si hay >0 avisos.

### M-10 ✅ Tracker de iniciativa: info incompleta al añadir combatiente
- ~~Al añadir combatiente al tracker falta: HP máximos, CA, condiciones, tipo (PC/enemigo/aliado).~~

**Resuelto**: formulario ampliado con dos filas:
- Fila 1: Nombre, Init, PG, **CA** (nuevo)
- Fila 2: Tipo (🟥 Enemigo / 🟩 Aliado / ⚔ PJ) + botón "+ Añadir"

Card del combatiente ahora muestra:
- Badge color según tipo (rojo enemigo, azul aliado, verde PJ con icono)
- HP/HPMax con botones ± (ya existía)
- **CA X** en pequeño junto al nombre
- Lista de **condiciones activas** debajo del nombre (en rojo, si las hay)

Estructura `INIT_LIST[i] = {n, v, hp, hpMax, ac, type, isPC, conds:[]}`. Persistencia ya existía via STATE.initList (X-01). Las condiciones (`r.conds`) están preparadas para edición futura — se persisten pero la UI de toggle todavía no se ha añadido.

### M-11 ✅ Tracker de buffs: falta en combate
- ~~La sección de combate no tiene tracker de buffs activos con countdown de rounds.~~
- ~~Añadir lista de buffs con duración en rounds y botón "avanzar round" que los decremente.~~

**Resuelto**: nueva card "⏱ Buffs activos" en sub-page Resumen (Combate > Resumen) que lee `BUFFS_LIST`. Cada buff muestra nombre, modificador y duración restante (rondas/asaltos pendientes, ∞ permanente, ⚠ caducado). Botón × para quitar individualmente. Botón "▶ Siguiente asalto" decrementa la cantidad de buffs medidos en asaltos/rondas y elimina los que llegan a 0. Recalcula `_BUFF_MOD_TOTALS` y CombatEngine.apply tras cada cambio. Toast con caducados o "Asalto siguiente". Hook en `renderBuffs()` también re-renderiza el resumen.

### M-12 ✅ Tracker iniciativa: botón ordenar por iniciativa
- ~~Botón para ordenar automáticamente los combatientes de mayor a menor iniciativa.~~

**Resuelto**: nuevo botón `#init-sort` "⇅ Ordenar por iniciativa" en sheet-master que reordena `INIT_LIST` por valor descendente. Toast de feedback + autosave.

### M-13 ✅ Foto del personaje no funciona
- ~~Botón "Cambiar foto" no abre el selector de imagen.~~
- ~~Botón "Quitar foto" probablemente tampoco funciona.~~
- ~~Revisar que `AndroidBridge.pickPhoto()` esté correctamente conectado.~~

**Resuelto**: existía un handler MOCK (línea 6371) registrado en bubbling phase que cambiaba el avatar a un gradient feo con "J" hardcoded; coexistía con el handler real de D6 (`bindPhotoButtons` en capture). Eliminado el mock por completo. Ahora "Cambiar foto" llama `AndroidBridge.pickPhoto()` (Android) o `<input type=file>` + FileReader (web). "Quitar foto" llama `removePhoto()` que limpia background, marca `delete dataset.photoSet` y dispara `updateTopbar()` para que pinte la inicial del nombre real (no "J" hardcoded). `applyPhoto()` marca `dataset.photoSet='1'` para que `updateTopbar` no sobreescriba con la inicial. Toast de feedback en ambos casos.

### M-14 ✅ Datos de identidad no persisten / no se actualizan en la UI
- ~~Campos de nombre, jugador, raza, clase, etc. no se reflejan en el topbar ni en otros sitios donde deberían verse.~~
- ~~Revisar que `collectIdentity()` → `snapshotState()` → `saveStateDebounced()` esté conectado a los `input` events.~~

**Resuelto**: bug en `updateTopbar()` que leía de `window.STATE.identity` (snapshot que va con 800ms de debounce) en vez del DOM directo, así los cambios no se veían hasta el siguiente snapshot. Ahora lee de `getElementById(...).value` directo. El listener de `input` también amplía a `in-name`, `in-jugador`, `al-r`. Nuevo listener de `change` para selects de alineamiento (al-1, al-2). Avatar muestra automáticamente la inicial del nombre si no tiene foto puesta. Persistencia ya estaba bien en `wireAutosave` + `snapshotState`.

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
