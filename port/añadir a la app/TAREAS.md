# Modo Máster — Lista de tareas

Estado vivo del proyecto. Marca con `[x]` lo hecho.

> Última revisión: 2026-05-06.
> Backlog vivo cerrado en este sprint — quedan ideas/extensiones, no bugs ni features prometidas.

---

## 🟢 Hecho

### UX / mapa / drawer
- [x] Estructura full-bleed mobile (sin marco, sin design canvas)
- [x] Mapa con pan/zoom y clamp a bordes (cover-fit)
- [x] Cuadrícula cuadrada y hexagonal real (panal limpio)
- [x] Tokens: tap selecciona, drag mueve, HP bar
- [x] Drawer arrastrable peek/medio/completo (touch + ratón, tap cicla estados)
- [x] Drawer scrolleable hasta abajo (no tapado por bottom-nav)
- [x] HP stepper ±1/±5 + entrada numérica con sumar/restar
- [x] Action economy (3 diamantes + reacción) — con etiquetas
- [x] Buffs/debuffs como chips (añadir/quitar) + picker con duración en rondas
- [x] Iniciativa: tira sup., carril lateral, flotante (3 layouts)
- [x] Vista lista (toggle mapa↔lista, ordenada por iniciativa)
- [x] Avanzar / retroceder turno; ronda incrementa
- [x] Decremento automático de duración de buffs/estados al cambiar de ronda
- [x] 7 temas (verdant, pergamino, dark, light, cyber-yellow, cyber-red, navy)
- [x] Cambio de encuentro (3 ejemplos: bosque, mazmorra, plaza)
- [x] i18n ES/EN
- [x] Tooltip al hacer hover sobre tokens (desktop)
- [x] Animación de cambio de ronda (flash dorado del round-pill)
- [x] Toasts para eventos clave (token KO, ronda nueva)
- [x] Atajos de teclado: `Espacio` sig. turno · `Shift+Espacio` anterior · `R` reset zoom · `C` centrar · `M` medir · `T` plantillas · `F` niebla · `N` nota · `Esc` salir de modo
- [x] Reset zoom mapa (botón FAB + tecla R)

### Tokens
- [x] Añadir token (FAB ＋ con modal)
- [x] Quitar token (botón × en cabecera del drawer + en init-full + en edit-modal, con confirmación)
- [x] Editar nombre, stats completos, color, tipo → `MstEditTokenModal`
- [x] Editor de ataques en `MstEditTokenModal` (filas: nombre/+toHit/dmg/tipo, añadir/quitar)
- [x] Editor de **resistencias / inmunidades / vulnerabilidades** (texto libre con parser ES/EN)
- [x] Duplicar token (botón "Duplicar" en edit-modal)
- [x] Centrar mapa en token activo (FAB target + acción "centrar" en lista de iniciativa)
- [x] Foto de perfil del combatiente (click en portrait → file picker)
- [x] Downscale de fotos (256px máx, JPEG 85%) antes de guardar

### Combate
- [x] Tirador de dados real (1d20+mod, 2d6, etc., ventaja/desventaja, crit/pifia natural)
- [x] Botón 🎲 ataque → tira d20+toHit y registra
- [x] **Ciclo de ataque completo**: `DamageModal` con expresión de daño, **selector de tipo de daño** (cortante/perforante/contundente/fuego/frío/...), toggle crítico (×2 auto en natural 20), selector de objetivo entre tokens vivos. Botón "Falla / sin daño". Aplica daño al target.
- [x] **Daño por tipo + DR/inmunidades/vulnerabilidades**: `applyDamageType(token, raw, type)` reduce daño por DR del tipo o `dr.all`, anula si está en `immune`, multiplica ×1.5 si está en `vuln`. Log incluye nota de la modificación.
- [x] **Confirmación anti-misclick** cuando un golpe dejaría a un PJ a 0 HP
- [x] **Tirar salvación desde la tarjeta** (Fort/Ref/Vol clicables → 1d20 + save)
- [x] **Salvación en grupo (AoE)** desde pestaña Iniciativa: modal con CD + tipo + lista de tokens marcables → tira para todos y resume éxito/fallo
- [x] `onRollAllInitiatives` unificado con `MstDice.rollDice`
- [x] Atributos de ataque por token (`token.attacks`); `attacksFor()` con prioridad: token > id-pattern legacy > kind-fallback
- [x] Sistema de log + entries de turn / damage / heal / kill / save / roll / attack / add / remove / note

### Pestañas del bottom-nav
- [x] **Iniciativa** pantalla completa (lista editable, drag-to-reorder, set INI, set DELAY, "tirar todas", **salvación grupo**, añadir, quitar, centrar)
- [x] Reorder con `orderIndex` independiente (no toca el INI más allá de igualarlo al target; orden estable y sin tiebreak alfabético arbitrario)
- [x] **Bestiario** (buscador, filtros, CRUD plantillas, "añadir al encuentro", "guardar token como criatura", incluye `attacks`)
- [x] **Registro** (LogPanel con icono/color por kind, timestamps, limpiar)
- [x] **Ajustes** (tema, idioma, cuadrícula, reset, export/import JSON, borrar guardado, badge "última vez", **fondo del mapa**, **niebla**, **plantillas**, **notas**, **snapshots**, **integración con la ficha**)

### Mapa avanzado
- [x] **Medir distancia** entre dos puntos / tokens — regla PF1e 5/10/5, etiqueta en pies sobre la línea
- [x] **Plantillas de área**: esfera (radio), cono (60° con ángulo), línea (largo+ancho 1 cuadro). Click coloca, click sobre plantilla pregunta borrar
- [x] **Niebla / fog of war**: toggle por celda en modo Niebla; revelar todo / ocultar todo desde Settings
- [x] **Anotaciones de texto** sobre el mapa: prompt al colocar, click sobre nota la borra
- [x] **Cambiar fondo del mapa**: color sólido o imagen (Settings)

### Persistencia / integración
- [x] localStorage: snapshot del estado del encuentro (autosave debounce 400ms)
- [x] Hydrate al montar **sólo si coincide `encounterKey`**
- [x] Persistir el log (truncado a 100 entradas) + plantillas + niebla + fondo + notas
- [x] Cargar/Guardar encuentro como JSON (`exportJson` / `importJsonFile`)
- [x] Bestiario persistente en clave aparte (`mst-bestiary-v1`)
- [x] **Snapshots con nombre** (clave `mst-snapshots-v1`, máx 20): crear con prompt, lista en Settings con cargar/borrar; el snapshot incluye estado completo (tokens, log, mapa avanzado, etc.)

### Salida / integración con la ficha
- [x] Botón Salir → `postMessage({type:'mst-exit'})` al padre
- [x] Botón 📖 Bestiario del header → abre pestaña Bestiario
- [x] **Importar PJs desde la ficha** (Settings → "Importar PJs"). Estrategia:
   1. `postMessage({type:'mst-request-pjs'})` al padre y escucha respuesta `{type:'mst-pjs',pjs:[...]}` (validamos que `e.source === window.parent` para no aceptar de iframes hermanos).
   2. Fallback con timeout 600ms: leer `localStorage['ficha-mobile-state-v1']` si la ficha y el modo están en mismo origen (mismo dispositivo).
- [x] **Bridge en la ficha** (`Ficha Mobile.html` × 3 copias): listener de `message` que lee del DOM (`in-nombre`, `pg-current`, `pg-max`, `m-ca-total`, `m-init-val`, `m-save-fort-r`, `m-save-ref-r`, `m-save-will-r`, `speed-base`) + `STATE.photo` y responde al iframe que lo pidió.

---

## 🟢 Refactors arquitectónicos cerrados

- [x] `attacksFor` por id-prefix → `token.attacks` > id-pattern > kind-fallback (`defaultAttacksForKind`)
- [x] `DEFAULT_BUFFS` global hardcoded → `token.initialBuffs` por token. La función `buffsFor(token)` ahora simplemente lee del propio token.
- [x] `persistence.jsx` duplicado de `persist.jsx` → borrado
- [x] `useLog(initial)` con método `replace` para rehidratar
- [x] `entryToToken` / `tokenToEntry` propagan `attacks`
- [x] `tokenToEntry(token, idOverride)` — el llamante calcula el id (no más doble cálculo)
- [x] `postMessage` reforzado con validación `e.source === window.parent`

---

## 🟢 Más extensiones implementadas (sesión 2026-05-06 cont.)

- [x] **Animación al colocar plantilla** (pulso de stroke + scale, 0.65s, marcado con `lastPlacedTpl` y limpieza por timeout)
- [x] **Niebla con pincel de tamaño N** (1×1 / 3×3 / 5×5, selector en Settings; toggle se decide por la celda central para evitar mezclar estados al pintar)
- [x] **Anotaciones movibles por drag** (pointermove sobre nota → recoloca; tap puro pregunta borrar)
- [x] **Sincronización bidireccional con la ficha**: el modo máster envía `postMessage({type:'mst-pj-update', name, hp, hpMax, delta})` cuando baja HP de un token con `fromSheet:true`; la ficha (las 3 copias) escucha y actualiza `#pg-current` con `dispatchEvent('input')` para que el motor de cálculo recompute. Solo se acepta el mensaje si el `e.source` es un iframe hijo del documento.
- [x] **Ataques iterativos / Full Attack PF1e** (botón ⚔ junto al 🎲 en cada ataque cuando toHit ≥ +6): el primer ataque abre `DamageModal` normal, los iterativos a -5/-10/-15 se loguean en silencio. Se corta cuando el toHit baja de +1.
- [x] **Daño tipado robusto multi-parte**: parser de "1d8+3 cortante + 1d6 fuego" → 2 filas independientes en el `DamageModal`. Cada parte tiene su tipo, su tirada, sus resistencias aplicadas; el log muestra desglose `5 cortante + 8 fuego = 13`.

---

## 🟢 Más extensiones implementadas (sesión 2026-05-06 — pasos 20-24)

- [x] **Sync inverso ficha→master**: la ficha emite `mst-sheet-update` (debounce 200ms) cuando `#pg-current` cambia por interacción del usuario; el master lo aplica a tokens `fromSheet:true` con el mismo nombre, pero **solo si difiere realmente** del HP actual (rompe el bucle con `mst-pj-update`).
- [x] **Multi-PJ desde la ficha vía JSON**: botón "Desde JSON" en Settings → file picker que acepta cualquier export del STATE de la ficha y lo añade como token. Permite construir un grupo combinando varios JSONs de PJs distintos.
- [x] **`ENCOUNTERS` cargables desde JSON externo**: nueva clave `mst-custom-encounters-v1` (máx 30 entradas). Settings → "Importar encuentro" valida `{grid, tokens}`, guarda con nombre, y la lista permite **Cargar** (reemplaza el encuentro actual respetando los `initialBuffs` de cada token) o borrar.
- [x] **Cono PF1e por casillas exactas**: toggle "Casillas PF1e exactas" en `TemplateModal` para conos y líneas. Algoritmo `coneSquaresPF` (radio + ángulo de 60° por casillas centradas) y `lineSquaresPF` (recorrido en pasos de ¼ cuadro). Render como `<rect>` por celda en lugar de polígono continuo.
- [x] **Snapshots: comparar dos**: nuevo modal `SnapshotDiffModal` con diff visual del snapshot vs estado actual: tokens añadidos/quitados, cambios HP/HP máx con delta coloreado, cambios de buffs (+verde/−rojo), cambio de ronda, mensaje "sin cambios". Botón 🔍 junto al "Cargar" en cada snapshot.

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 25-28)

- [x] **Sync de `hpMax` desde la ficha**: la ficha también escucha `pg-max input/change` y emite `mst-sheet-update` con `{name, hp, hpMax}`. El master aplica `hpMax` cuando llega y comprueba la igualdad combinada `hp|hpMax` para decidir si actualiza (rompe el bucle igual que con HP). En sentido inverso, `onEditToken` del master detecta cambios de HP/HP máx en tokens fromSheet y emite `mst-pj-update` con ambos campos.
- [x] **Sync de buffs/conditions ficha↔master**: la ficha lee chips activos de condiciones (`.cond-chip.active`) y la `BUFFS_LIST` global, los manda en el blob como `conditions: [string]` y `buffs: [{label, rounds?}]`. El master los mapea a las keys conocidas (`frightened`, `hasted`...) usando una función nueva `buffKeyFromLabel` que invierte el `I18N.statusXxx` en ES y EN; los que no se reconocen entran como custom (`label` libre). `applySheetPJs` aplica los `initialBuffs` también al state `buffs[id]` para que se vean activos al instante en el drawer.
- [x] **Importar `STATE.weapons` como ataques del token**: la ficha mapea `weapons[]` → `[{name, tohit:atk, dmg:dmg+crit, type:melee/ranged}]` y los envía en el blob. El master los respeta en `pjFromSheetToToken` (en lugar del set genérico de "player"). Si el token no trae `attacks`, fallback al genérico por kind como antes.
- [x] **Sync por id estable, no frágil ante rename**: cuando llega un `mst-sheet-update`, si hay **un único** token con `fromSheet:true`, ese es el match (resuelve el caso típico 1 PJ ↔ 1 token aunque el usuario renombre). Si hay varios tokens fromSheet, fallback a coincidencia exacta por nombre. Si hay cero, se ignora.

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 29-33)

- [x] **Sync inverso de buffs (master→ficha)**: cuando el master cambia `buffs[id]` de un token `fromSheet`, emite `mst-pj-buffs` con la lista. La ficha mapea las keys conocidas (`frightened`, `shaken`, `prone`, `poisoned`...) a los nombres exactos de los chips de condición de la ficha (`Asustado`, `Sacudido`, `Tumbado`...) con un mapping `COND_KEY_TO_NAME` y activa/desactiva los chips. Recalcula `updateCondBadge`, `rebuildBuffModTotals` y `CombatEngine.apply` y dispara `saveStateDebounced`. Anti-loop por firma JSON del último envío.
- [x] **`fromSheetUid` realmente estable**: la ficha genera un UUID en `STATE.identity.uid` la primera vez que el modo máster lo pide (`ensureUid`) y lo persiste con `saveStateDebounced('mst-uid')`. Lo emite en `mst-pjs`, `mst-sheet-update` y la ficha lo recibe en `mst-pj-update` y `mst-pj-buffs` para uso futuro. El master lo guarda como `tk.fromSheetUid` y lo usa como clave primaria al actualizar (1ª opción), con fallback a la heurística single-fromSheet (2ª) y a coincidencia por nombre (3ª).
- [x] **Importar info defensiva de la ficha**: el blob también lleva `acTouch` (`m-ca-touch`) y `acFlat` (`m-ca-flat`). El master los guarda y el drawer los muestra en una fila adicional cuando vienen ambos.
- [x] **Maniobras de combate como tipos de ataque**: el editor de `MstEditTokenModal` y el render del drawer reconocen `trip`, `disarm`, `sunder`, `grapple`, `bullrush` (además de `melee`/`ranged`). El log de ataque también las muestra correctamente con el label localizado.
- [x] **"Refrescar desde la ficha" en el drawer**: botón ↩ junto a Editar cuando `token.fromSheet`. Pide al padre con `mst-request-pjs`, recibe el blob actualizado y machaca los campos refrescables del token (HP, AC, saves, ataques, buffs, foto) preservando posición, ini propio del encuentro y color custom. Fallback a localStorage si el padre no responde en 600 ms.

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 34-36)

- [x] **Sync de buffs positivos a `BUFFS_LIST`**: cuando el master pone `hasted/inspired/blessed/shielded/invisible/raging/regenerating/concealed` en un PJ fromSheet, la ficha los añade a `BUFFS_LIST` con `__mstSync: true` (mod=0, dur=`Asaltos` si trae rondas y `Indefinido` en otro caso). Cuando el master los quita, la ficha los elimina automáticamente. Los buffs añadidos a mano por el usuario se respetan tal cual (no llevan `__mstSync`). `renderBuffs` se llama tras cualquier cambio.
- [x] **Sync inverso completo de buffs (ficha→master)**: `broadcastHp` ahora envía también `conditions` y `buffs` activos en cada `mst-sheet-update`. La firma `lastSentKey` incluye estas cuatro dimensiones (`hp|hpMax|conds|buffs`) para no repetir envíos. Nuevo `MutationObserver` en `#cond-grid` (con attributeFilter:`['class']`) y `#buffs-list` que dispara `scheduleBroadcast` al cambiar el DOM. El master extiende su listener `mst-sheet-update`: convierte `conditions/buffs` con `sheetBuffsRef.current`, compara firma JSON con `state.buffs[targetId]` y solo escribe si difiere; marca `sentBuffsRef[targetId]` para que el emisor no reemita inmediatamente. Bucle roto en ambos extremos.
- [x] **Multi-PJ idempotente por uid**: `fichaStateToPJBlob` propaga `id.uid` al blob, `pjFromSheetToToken` lo guarda en `fromSheetUid`. `applySheetPJs` ahora detecta tokens existentes con el mismo `fromSheetUid` y los **actualiza en place** (preservando posición y color custom) en lugar de duplicarlos. Importar dos veces el mismo PJ = idempotente. Importar varios JSONs distintos = varios tokens con uids distintos, cada uno sincronizado por uid en los listeners.

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 37-43)

- [x] **BroadcastChannel para sync multi-pestaña**: nuevo canal `pf-master-sync` paralelo a postMessage. La ficha y el master ahora también comunican por BC, así cuando el modo máster está en una pestaña distinta de la ficha (mismo origen, sin iframe) el sync sigue funcionando. Helper `emitToSheet(payload)` en el master que emite por ambos canales. `importPJsFromSheet` y `refreshPJFromSheet` también escuchan/preguntan por BC.
- [x] **Sync de habilidades (skills) desde la ficha**: la ficha lee `SKILLS[]` y lo envía como `[{name, total, attr}]` en el blob. El master los guarda en `token.skills` y el `MstDrawer` añade una nueva sección/pestaña "Habil." con chips clicables que tiran `1d20 + total` y registran como `kind:'roll'`. Visible en los 4 layouts del drawer.
- [x] **Atajos de HP en el drawer**: bajo el HpStepper se añaden 3 botones secundarios — "Curar todo" (set hp = hpMax), "½" (mitad de hpMax), "＝" (prompt "HP exacto"). Usan un nuevo handler `onSetHp(id, value)` que calcula el delta y reusa `onChangeHp` para mantener logs/toasts coherentes.
- [x] **Filtros + exportar log**: el panel del Registro tiene buscador (texto libre) y chips de filtro por kind (todos/roll/attack/damage/heal/save/turn/kill). Botones extra para copiar al portapapeles o descargar como `.md` (markdown con timestamps + entry text + raw + tags de crit/pifia). Pretty-print pensado para pegar en Discord/notas.
- [x] **Estado vital "Muriendo / Estabilizado / Muerto"**: cuando HP ≤ 0 aparece un bloque rojo pulsante en el drawer con tres acciones — Estabilizar (token.stable=true, fin del pulso), Muerto (token.dead=true, sale del orden de iniciativa con confirmación) y Reset (despertar). `advanceTurn` salta tokens con `dead:true` automáticamente. Nuevo handler `onSetVitalState`.
- [x] **Sonidos opcionales (WebAudio)**: tres SFX sintetizados sin assets externos — `crit` (campana ascendente al sacar nat 20), `kill` (golpe sordo cuando un token cae a 0), `round` (ding al cambiar ronda). Toggle on/off en Settings persistido en `localStorage['mst-sounds']`. `AudioContext` lazy y `playSfx(kind)` con guard de soundsOn.
- [x] **Filtros de bando en pestaña Iniciativa**: barra de chips (Todos/PJ/Aliado/Enemigo/Mascota/Neutral) con contador por categoría. Normaliza taxonomías legacy (`player→pj`, `civ→neutral`, `npc/boss→enemy`). El `ordered` ahora se filtra antes de renderizar.

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 44-47)

- [x] **Quick reorder con flechas en init-full**: cada fila de la pestaña Iniciativa ahora muestra ▲▼ pequeños junto a las acciones de centrar/quitar, deshabilitados en los extremos. Llaman al mismo `onReorder` que el drag, sólo que paso a paso (una posición). Útil para retoques finos sin arrastrar.
- [x] **Modo TV / streamer**: nuevo toggle en Settings + clase `.mst-app.stream-mode` que oculta header, bottom-nav, drawer y FAB row. Sólo queda mapa + tira de iniciativa (con fondo translúcido). Botón flotante minimal en la esquina superior derecha para salir. Pensado para mostrar al grupo en otra pantalla.
- [x] **Notificaciones del navegador**: toggle en Settings con `Notification.requestPermission()`. `pushNotification(title, body)` solo dispara si `notifsOn`, permiso `granted` y `document.hidden === true` (pestaña en background). Avisa de KO de tokens y nueva ronda. Persistido en `localStorage['mst-notifs']`.
- [x] **Sync de armadura equipada**: la ficha lee `STATE.armor[].equipped===true` y envía `[{name, type, acBonus, maxDex, acp, arcaneFail}]` en el blob. El master los guarda en `token.armor` y `MstDrawer.StatsSection` muestra una línea horizontal compacta con cada pieza equipada (icono escudo + nombre + ACP en rojo). Tooltip con info completa al hover.

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 48-51)

- [x] **Modo nocturno automático**: toggle en Settings que entre 20:00 y 08:00 fuerza el tema `dark` y restaura el "tema diurno" del usuario fuera de ese rango. Recuerda el último tema manual como referencia. setInterval cada 5 min, persistido en `localStorage['mst-theme-auto']`.
- [x] **Recordatorio de reacciones**: tras aplicar daño en `onApplyAttackResult`, si el target sigue vivo y `actionsState[target.id].reaction === false`, toast `¿Reacción de {name}?`. Soft reminder sin bloquear el flujo.
- [x] **Selección múltiple de tokens en mapa**: `multiSelected: Set<id>` con shift/ctrl/meta+click sobre token. Cuando set.size > 1, drag de uno mueve a TODOS con el mismo delta (cálculo en `onTokenMove`). Anillo dorado punteado en tokens del set. Esc limpia.
- [x] **Sync de slots de conjuro**: la ficha lee `SLOT_STATE[]` y los manda como `{0:{max,used}, 1:{...}}`. El master los guarda en `token.spellSlots` y el drawer pinta una sección "Espacios de conjuro" con filas por nivel y dots clicables (verde=disponible, gris=usado). Click toggle (cycle: 0 → +1 → +1 → ... → 0). Sólo local; el sync inverso al SLOT_STATE de la ficha queda pendiente (requeriría disparar `renderSlots` y modificar `SLOT_STATE.used`).

---

## 🟢 Más extensiones (sesión 2026-05-06 — pasos 52-53)

- [x] **Z-index reorder de tokens**: nuevo handler `onChangeTokenZ(id, dir)` con dir ∈ {-1, +1, 'top', 'bottom'}. Mapa pinta tokens ordenados por `(t.z||0)` y aplica `zIndex: 100 + t.z` en CSS. Botones ⇡/⇣ en el HpStepper del drawer.
- [x] **Sync inverso de slots master → ficha**: al togglear un slot en el drawer del master, si el token es `fromSheet` se emite `mst-pj-slot-update` con `{uid, name, level, used, max}`. La ficha lo aplica con `applyMstSlot(d)` que actualiza `SLOT_STATE[level].used/max` y dispara `renderSlots()` + `saveStateDebounced`. Anti-loop: si el used recibido coincide con el actual, no hace nada.

---

## 🟦 Ideas pendientes (siguen)

- [ ] Aptitudes auto (ki, smite, rabia, channel): tracker nuevo similar a slots pero por feature (`CLASS_AUTO_FEATURES` de la ficha)
- [ ] Drag rectangular en el mapa para selección múltiple (alternativa a shift+click)
- [ ] Preview de cono/línea siguiendo al cursor antes de fijar la plantilla

---

## 🟦 Decisiones conscientes (no son TODOs)

- `postMessage(target, '*')`: aceptable porque los datos enviados/recibidos son inocuos (datos del PJ ya leíbles desde el padre), y el modo máster puede correr en cualquier dominio. Reforzado con validación de `e.source` en el receptor.
- `android-frame.jsx`, `design-canvas.jsx` y `.design-canvas.state.json` siguen en el repo pero no se cargan por el HTML — son herramientas de diseño. Mover a `_dev/` queda al criterio del autor.
- El log se trunca a 100 entradas en el snapshot persistido (las 200 más recientes en memoria) para no inflar localStorage.

---

## 🚀 Próximos pasos sugeridos
1. Validar la integración real con la ficha en el Android port (cargar la ficha + iframe del modo máster + pulsar "Importar PJs").
2. Probar a fondo los modos del mapa (medir/plantillas/niebla/notas) en touch + desktop.
3. Decidir UX para los items 🟦 (sync bidireccional, multi-PJ, parser de daño compuesto).
