# Auditoría UX Mobile · Walkthrough del jugador

> Metodología simple: **¿Qué quiero hacer? → ¿Dónde está? → ¿Me deja hacer todo lo que necesito? → ¿Tengo que hacer ingeniería matemática para hacerlo?**
> Fecha: 2026-05-06.
> 2 agentes paralelos cubrieron: **A** crear PJ + **B** combate + **C** subir nivel + **D** casos avanzados + **E** persistencia.

**Leyenda**: ✅ fluido · ⚠️ con fricción · 🔴 falta o roto · 🧮 funciona pero pide matemática manual.

---

## 🔥 Top 15 fricciones del jugador (priorizadas por impacto en sesión real)

| # | Fricción | Severidad | Impacto |
|---|----------|-----------|---------|
| 1 | **Empezar de cero es imposible.** App arranca con un Guerrero nv 3 seed. Sin wizard "Nuevo personaje". | 🔴 Alta | Confunde a novatos completamente. |
| 2 | **Subir de nivel es manual y desconectado.** Toast → ir a Identidad → editar nivel → ir a Habilidades → tirar HD → elegir dote → ir a Conjuros. Nada guía. | 🔴 Alta | Cada level-up es un ritual de 10 min con manual abierto. |
| 3 | **Aplicar buff "Bendición" no afecta stats.** Checkboxes del Modo Máster sin listener; buffs manuales solo guardan texto. | 🔴 Alta | El jugador tira con números falsos toda la sesión. |
| 4 | **Imposible deshacer.** Borras dote/arma/clase = se pierde. | 🔴 Alta | 1 toque mal = ficha rota. |
| 5 | **Sin catálogo de conjuros.** Añadir un conjuro nuevo = teclear nombre/escuela/componentes a mano. | 🔴 Alta | Para casters es la fricción del día a día. |
| 6 | **No hay aviso "te toca dote" en niveles pares.** Sheet sabe la clase pero no avisa. | 🔴 Alta | Los jugadores se olvidan de dotes que les corresponden. |
| 7 | **Botón "Atacar" del Resumen no completa el flujo.** Con 2+ armas te tira a Equipo. | ⚠️ Alta | Cada combate hay que cambiar de tab. |
| 8 | **No hay "estoy flanqueando" toggle.** El +2 hay que sumarlo a mano cada ataque. | ⚠️ Media | Recurrente en todo combate. |
| 9 | **Curar con poción no existe como acción.** Tienes que tirar fórmula con dados externos, sumar a mano, descontar poción a mano. | 🧮 Media | 4 pasos para algo de uso constante. |
| 10 | **Atributos sin point-buy / standard array.** El método más usado de PF1e requiere calculadora externa. | 🧮 Media | Crear PJ es ingeniería. |
| 11 | **Equipar arma/armadura inicial sin picker.** Formulario de 11 campos por arma; `equipment.json` está pero no se usa. | 🧮 Media | El novato no se sabe `1d8 19-20/×2 marcial` de memoria. |
| 12 | **Tracker de iniciativa oculto en Modo Máster.** Botón "▶ Siguiente turno" inaccesible para el jugador normal. | ⚠️ Media | Jugar tracker propio = activar/desactivar Modo Máster cada combate. |
| 13 | **HD del nuevo nivel: o todo o nada.** Botón "Tirar todos los DG" regenera niveles 1-N enteros. No hay "tirar solo el del nuevo nivel". | ⚠️ Media | Pierdes tiradas heroicas anteriores. |
| 14 | **i18n a medias.** Botón EN/ES traduce labels pero toasts/breakdowns/catálogos en ES siempre. | ⚠️ Baja | Usuario inglés ve mezcla. |
| 15 | **Sin backup automático rotatorio.** Si el localStorage se corrompe = adiós ficha. | ⚠️ Baja | Cuando pasa, irrecuperable. |

---

## A. Crear PJ desde cero

| Paso | Estado | Detalle | Cómo simplificar |
|------|--------|---------|------------------|
| A1 Abrir app primera vez | 🔴 | Guerrero nv3 seed pre-rellenado (espada larga +1, daga, arco, cota, escudo, dotes ejemplo). Sin onboarding. | Wizard "Nuevo PJ" + detectar localStorage vacío. Botón "Limpiar ficha" prominente. |
| A2 Editar nombre | ✅ | Input topbar refresca al instante. | — |
| A3 Elegir raza | ⚠️ | Picker solo se abre con botón 🏷; el novato escribe "Humano" en el input y NO dispara `applyRaceFull`. | Que el clic en TODO el input "Raza" abra el picker (`readonly + cursor:pointer`). |
| A4 Elegir clase | ⚠️ | 96 clases mezcladas sin separación visual. | Tabs/chips dentro picker: "Base · Híbrida · Prestigio · Ocultismo". |
| A5 Atributos base | 🧮 | Sin point-buy ni standard array ni 4d6-drop. Tienes que saber tú los costes. | Botón "Método de generación" con Point-Buy 15/20/25 + contador en vivo, Standard Array, 4d6 drop, Manual. |
| A6 Alineamiento | ✅ | Dos selects → output `LB`/`NN`/etc. | — |
| A7 Equipar arma inicial | 🧮 | Formulario manual con 11 campos. `equipment.json` existe pero no se usa. | Picker "Buscar arma del catálogo" → autocompleta todos los campos. |
| A7b Equipar armadura | 🧮 | Mismo problema. | Picker desde `equipment.json`. |
| A8 Habilidades | 🧮 | "Disponibles 2/Gastados 10" estático seed; no recalcula con clase × INT × nivel. No enforce máx rangos. | Cálculo correcto + enforce + diff "te quedan X". |
| A9 Dotes | ⚠️ | Catálogo OK, pero sin contador "Disponibles vs Gastadas" ni filtro "Las que cumplo". | Contador arriba + filtro de cumplidas. |
| A10 Conjuros | ⚠️ | "+ Añadir" abre form manual; sin catálogo de conjuros PF1e. | Picker desde un `spells.json` (no existe aún). |
| A11 Guardar | ⚠️ | Autosave funciona pero invisible. Novato no sabe que se guarda solo. | Indicador "Guardado" en topbar tipo Google Docs. Onboarding "Tu ficha se guarda automáticamente". |

---

## B. Sesión de combate

| Paso | Estado | Detalle | Cómo simplificar |
|------|--------|---------|------------------|
| B1 Tirar iniciativa | ✅ | Botón Tirar 1d20+mod; modo máster auto-añade al tracker. | — |
| B2 Aplicar buff "Bendición" | 🔴 | Checkboxes del Modo Máster cosméticos (sin listener). Buffs manuales = solo texto. | Catálogo de buffs comunes con stat-mod estructurado que sí afecte CombatEngine. |
| B3 Marcar PJ flanqueando | 🔴 | "Flanqueado" existe (defensiva) pero no toggle "estoy flanqueando" (+2 atq). | Añadir "Flanqueando" en card Tácticas activas. |
| B4 Atacar con arma | ✅ | Botones Atacar/Daño en cada arma; iterativos si BAB ≥ 6; sheet de dados con ventaja/crítico. | — |
| B4b Botón "⚔ Atacar" del Resumen | ⚠️ | Con 2+ armas te lleva a Equipo > Armas (interrumpe flujo). | Bottom-sheet rápido "Elegir arma" sin cambiar tab. |
| B5 Recibir daño | ⚠️ | ±1 / ±5 rápido, pero para 7 daño hay que dar 2 toques (−5, −5, +3). | Botón "−X" con teclado numérico inline al tap en barra HP. |
| B6 Aplicar "Asustado" tras fallo TS | ⚠️ | TS funciona pero no sugiere "tu TS falló → ¿aplicar Asustado?". Hay que buscar entre 30+ chips. | Botón "Aplicar condición sugerida" tras fallo. Buscador en grid. |
| B7 Curar con poción | 🧮 | Acción "usar objeto" no existe. Tiras 1d8+1 con app externa, aplicas curación, descuentas poción a mano. | Acción "Beber" sobre items "Poción de X" → tira fórmula + cura + decrementa. |
| B8 Lanzar conjuro | ✅ | Botón Lanzar decrementa slot. | — |
| B9 Avanzar turno | ✅ | "▶ Siguiente turno" en sheet-master rota active y resetea acciones. | — |
| B9b Acceso al "Siguiente turno" | 🔴 | Solo accesible activando Modo Máster. El jugador normal no lo ve. | Tracker visible (read-only) en Combate > Resumen. Botón "Mi turno" siempre visible si hay tracker. |
| B10 Siguiente asalto (round counter) | ✅ | INIT_ROUND++ al volver al primer combatiente. | — |
| B11 Caer 0 PG = Inconsciente auto | ✅ | `calcConditionsAuto` lo activa. | — |
| B12 Estabilizar (Heal CD 15) | 🔴 | Sin acción ni botón. Muriendo solo es chip de condición sin TS CON acumulativo trackeado. | Widget "TS CON CD X — [Tirar]" + botón "Aliado me estabiliza Heal CD 15". |
| B13 Descansar 1h corto | ✅ | Botón "☕ Descanso corto" en sheet-rest recarga ki/panache/grit/bombas/inspiración. | — |

---

## C. Subir de nivel (5 → 6)

| Paso | Estado | Detalle | Cómo simplificar |
|------|--------|---------|------------------|
| C1 Ver XP actual y faltante | ✅ | Card "Experiencia" en Identidad con barra + meta. | Mover barra al topbar siempre visible. |
| C2 Subir nivel al umbral | ⚠️ | Toast "¡Subes de nivel!" pero subir = ir a otra pestaña y editar input. | Botón "+1 nivel" inline al lado del toast. |
| C3 Tirar HD nuevo nivel | 🧮⚠️ | "🎲 Tirar todos los DG" REGENERA todos los niveles desde 1. No hay "solo el del nuevo nivel". | Botón "🎲 Tirar dado del nuevo nivel" con tirar/promedio/máximo. |
| C4 Asignar puntos habilidad | ⚠️ | Recalcula bien pero no hay banner "Tienes X puntos nuevos". Solo aparece en Avisos. | Banner amarillo "Tienes 8 puntos sin asignar" → Habilidades. |
| C5 Elegir dote nivel par | 🔴 | Sin aviso. El sheet no avisa de nada al subir nivel par. | Tracker "dotes esperadas vs registradas" + alerta. |
| C6 Aprender conjuros nuevos | 🧮⚠️ | Slots OK; conjuros conocidos manuales. | Picker desde `spells.json`. |
| C7 Subir FUE/CON → HP retroactivo | ✅ | `attr-changed` recalcula HP_MAX × nivel total. | Toast "HP +6 por CON". |
| C8 Auto-features nuevas | ✅ | `_triggerClassFeaturesFor(cl)` añade/actualiza trackers. | Toast "Has ganado: Rabia mayor (+2)". |

---

## D. Casos avanzados

| Paso | Estado | Detalle | Cómo simplificar |
|------|--------|---------|------------------|
| D1 Modo Mythic | ✅ | Panel completo (tier, path, surge, recargar día). Estado serializado. | Atajo visible en topbar cuando esté activo. |
| D2 Modo Gestalt | ⚠️ | BAB/HD/saves toman MAX, skills suman. UI sin pares "Mago // Pícaro". | Pares de filas etiquetadas en lugar de filas independientes. |
| D3 Modo Epic 21+ | ✅ | Cap nivel a 30, sin contenido oficial. | OK. |
| D4 Synthesist fusión | ✅ | Toggle aparece si arquetipo synthesist. Sustituye FUE/DES/CON. | Indicador "⛓ Fusión activa" en topbar. |
| D5 Broodmaster 2 eidolones | ⚠️ | Selector existe pero detección de archetypeKey "broodmaster" no auto-activa la barra. | Auto-mostrar al detectar archetype, igual que synthesist. |
| D6 Multiclase Hechicero+Mago | ✅ | Barra "Vista de:" con SLOT_STATE/SPELLS_DATA por clase. | Mostrar dos columnas paralelas en lugar de selector. |
| D7 Mystic Theurge +1 NL | ✅ | `_PRESTIGE_BUMPS_MOBILE` aplica +1/lvl. | Mostrar bump explícito: "NL Mago: 5 (+3 MT) = 8". |
| D8 Validar Arcane Trickster sin SA | ✅ | `confirm()` lista prereqs faltantes. | Sustituir `confirm()` por modal in-app (CLAUDE.md). |

---

## E. Persistencia

| Paso | Estado | Detalle | Cómo simplificar |
|------|--------|---------|------------------|
| E1 Cerrar y reabrir | ✅ | localStorage + migrateState + applyState. Todo persiste. | — |
| E2 Exportar JSON | ✅ | Bridge Android o blob+download. | Exportación automática cada N cambios. |
| E3 Borrar localStorage por error → recuperar | 🔴 | Sin backups automáticos rotatorios. | 3 últimos snapshots en `state.bak.1/2/3`. |
| E4 Importar JSON 6 meses antiguo | ⚠️ | `migrateState` solo cubre v0→v1. Cambios estructurales sin migración. | Versionado real con migraciones por pasos. |
| E5 Compartir entre dispositivos | 🧮⚠️ | Solo export/import manual. Sin sync cloud. | Botón "Compartir QR" o sync Google Drive. |
| E6 Imprimir/PDF | ✅ | `@media print` + `printSheet()` Bridge. | Preview antes de imprimir. |
| E7 Deshacer cambio | 🔴 | No hay undo. | Pila Cmd+Z de últimos N cambios estructurales. |
| E8 Cambiar idioma EN↔ES | ⚠️ | Labels OK; toasts/breakdowns/catálogos siempre ES. | Auditar todos los strings hardcoded en JS. |

---

## 🎯 Plan priorizado en 4 fases

### 🟢 FASE F — Quick wins (alto impacto, bajo coste, ~3-4h)
| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-01** | Botón "Limpiar ficha / Empezar de cero" prominente en menú "+" | 🔴 #1 |
| **UX-02** | Click en TODO el input "Raza" abre picker (no solo el botón 🏷) | ⚠️ #6 |
| **UX-03** | Indicador "Guardado" en topbar tipo Google Docs | ⚠️ #11 |
| **UX-04** | "Flanqueando (+2 atq)" en card Tácticas activas | ⚠️ #8 |
| **UX-05** | Botón "🎲 Tirar dado del nuevo nivel" (sin regenerar todo) | ⚠️ #13 |
| **UX-06** | Banner "Tienes X puntos de habilidad sin asignar" al subir nivel | 🔴 #6 |
| **UX-07** | Aviso "Nv N te otorga 1 dote nueva" al subir nivel | 🔴 #6 |
| **UX-08** | Mover XP barra al topbar (siempre visible) | ⚠️ #2 |

### 🟡 FASE G — Asistentes y mejoras de flujo (~6-8h)
| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-09** | Wizard "Nuevo PJ" con pasos guiados (raza → clase → atributos → equipo) | 🔴 #1 |
| **UX-10** | Picker arma/armadura desde `equipment.json` con autocompletado | 🧮 #11 |
| **UX-11** | Catálogo dotes filtrable "solo las que cumplo" + contador | ⚠️ #5 |
| **UX-12** | Asistente "Subir nivel" paso a paso (HD → habilidades → dote → conjuros) | 🔴 #2 |
| **UX-13** | Bottom-sheet rápido "Elegir arma" para botón Atacar del resumen | ⚠️ #7 |
| **UX-14** | Modal in-app sustituyendo `confirm()` y `prompt()` | ⚠️ #14 |
| **UX-15** | Botón "Aplicar condición sugerida" tras TS fallida | ⚠️ #6 |
| **UX-16** | Acción "Beber poción" sobre items de inventario | 🧮 #9 |

### 🟠 FASE H — Sistemas profundos (~10-15h)
| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-17** | Catálogo de conjuros (`spells.json` nuevo + picker filtrable por clase/nivel) | 🔴 #5 |
| **UX-18** | Catálogo de buffs comunes con stat-mod estructurado | 🔴 #3 |
| **UX-19** | Pila de undo/redo (Cmd+Z) para cambios estructurales | 🔴 #4 |
| **UX-20** | 3 backups rotatorios automáticos en localStorage | 🔴 #15 |
| **UX-21** | Generador de atributos: Point-buy 15/20/25 / Standard / 4d6 | 🧮 #10 |
| **UX-22** | Tracker iniciativa visible (read-only) para jugador normal | ⚠️ #12 |
| **UX-23** | Versionado real `state.__schema = N` + migrate por pasos | ⚠️ #15 |

### 🔵 FASE I — Pulido (~4-5h)
| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-24** | Auditar y mover todos los strings hardcoded JS a `I18N` | ⚠️ #14 |
| **UX-25** | Tabs/chips en picker de clase (Base/Prestige/Híbrida) | ⚠️ #4 |
| **UX-26** | Pares de filas Gestalt etiquetadas | ⚠️ #19 |
| **UX-27** | Multi-caster con dos columnas paralelas en lugar de selector | ⚠️ #19 |
| **UX-28** | Auto-detectar archetypeKey broodmaster (igual que synthesist) | ⚠️ #20 |
| **UX-29** | Indicadores topbar: "⛓ Fusión activa", "✨ Mythic activo" | ⚠️ — |

---

## 📊 Resumen ejecutivo

| Métrica | Valor |
|---------|-------|
| Pasos auditados | 51 |
| ✅ Funcionan fluidos | 19 (37%) |
| ⚠️ Con fricción | 18 (35%) |
| 🔴 Roto / falta | 9 (18%) |
| 🧮 Pide mate manual | 8 (16%) |
| **Total tareas nuevas (UX)** | **29 ítems · ~25-30h** |

**Recomendación**: empezar por **Fase F** (8 quick wins, 3-4h, golpea las fricciones más caras). La Fase G es el mayor salto de UX (asistentes guiados). Las Fases H/I son ya pulido y sistemas profundos.

Si tuviera que elegir UNO solo: **UX-09 wizard "Nuevo PJ"**, porque arregla la #1 fricción y desbloquea todo el resto del flujo de iniciación.
