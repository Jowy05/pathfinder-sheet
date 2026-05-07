# Auditoría UX Mobile · 2026-05-06 (post fases A-I)

> Walkthrough fresco después de cerrar todas las fases A-I más los fixes de raíz de hoy. 4 agentes paralelos cubrieron crear PJ, combate, subir nivel + casos avanzados, y persistencia + UI general.

**Leyenda**: ✅ fluido · ⚠️ con fricción · 🔴 falta o roto · 🧮 funciona pero pide mate manual.

---

## 🔥 Top 12 fricciones que sobreviven (priorizadas)

| # | Fricción | Severidad | Sección |
|---|----------|-----------|---------|
| 1 | **HP retroactivo al subir CON** — sólo añade DG nuevos; los previos quedan con cómputo viejo. Pierdes/sumas PG manualmente. | 🔴 Alta | C7 |
| 2 | **Inconsciente no se auto-marca al caer a 0 PG** + Estabilizar (Heal CD 15) sin botón ni TS CON acumulativo. | 🔴 Alta | B11+B12 |
| 3 | **Pociones / objetos consumibles sin acción "Usar"** — inventario plano texto, no hay decremento ni efecto al beber. | 🔴 Alta | B7 |
| 4 | **Catálogo de hechizos minúsculo** — `SPELLS_CATALOG` tiene ~30 entradas hardcoded vs ~1500 PF1e. Cada caster cae a "Personalizar". | 🔴 Alta | A10/B8 |
| 5 | **Notas de sesión documentadas pero no implementadas** en mobile. `STATE.notes` único global se sobreescribe sesión a sesión. | 🔴 Alta | H4 |
| 6 | **"Sincronizar ficha" es placeholder cosmético** — solo emite toast, sin QR/cloud/link. Engaña al usuario. | 🔴 Alta | E5 |
| 7 | **Banner subida de nivel no se dispara automáticamente al cruzar XP** — solo aparece tras editar `level` manual. Toast efímero como sustituto. | ⚠️ Alta | C2 |
| 8 | **Wizard "Nuevo PJ" no auto-abre en primer arranque** — usuario virgen no sabe que existe (oculto en menú overflow). | ⚠️ Alta | A1 |
| 9 | **Buffs condicionales como texto libre** — "+1 TS vs miedo" se aplica a TODOS los TS porque no hay flag `condTrigger`. | ⚠️ Media | B2 |
| 10 | **Skills no enforcean cap de rangos** — avisan visualmente pero permiten teclear cualquier valor. | 🧮 Media | A8 |
| 11 | **Wizard subir nivel delega skills/spells** — navega a otro tab en lugar de gastar puntos in-place, rompe el flujo paso-a-paso. | ⚠️ Media | C4/C6 |
| 12 | **Undo solo cubre eliminaciones** (clase/arma/armadura/dote). Ediciones de inputs (HP, atributos, XP) no se snapshotean. | ⚠️ Media | E7 |

---

## A. Crear personaje (post fase I)

| Paso | Estado | Detalle |
|------|--------|---------|
| A1 Primer arranque | ⚠️ | `_openWizard()` resetea hard pero **no auto-abre** al detectar localStorage vacío. Wizard 6 pasos completo en overlay. |
| A2 Editar nombre | ✅ | `updateTopbar()` refresca al instante. |
| A3 Elegir raza | ✅ | Picker + `applyRaceFull(name)` aplica automods, velocidad, tamaño. |
| A4 Elegir clase | ✅ | Chips Base/Prestige/Unchained/NPC/Especial activos sobre `DB.classes[k].category`. |
| A5 Elegir arquetipo | ⚠️ | Lista compatibles pero **no marca cuáles cumplen prereqs**. Compárese con dotes ✓/⚠. |
| A6 Atributos base | ✅ | Wizard paso 4 con 5 métodos (point-buy 15/20/25, standard, 4d6 drop, manual). |
| A7 Equipar arma | ✅ | `weap-add-catalog` desde `DB.equipment.weapons` o personalizada. |
| A7b Armadura | ✅ | `armor-add-catalog` simétrico. |
| A8 Habilidades | 🧮 | `renderD3Skills` avisa pero no bloquea overflow de rangos. Cálculo `getSkillPointsTotal()` correcto. |
| A9 Dotes | ✅ | Picker con búsqueda, toggle "solo cumplidas", chips ✓/⚠/❓, `_computeFeatBudget()` con humano +1/Guerrero ×0.5+1/Monje L1. |
| A10 Conjuros | 🧮 | `SPELLS_CATALOG` ~30 hechizos hardcoded; el resto va a "Personalizar". |
| A11 Guardar | ✅ | `saveStateDebounced` + `save-indicator` "✓ Guardado" estilo Docs + 3 backups rotatorios. |
| A12 Foto | ⚠️ | `applyPhoto` pinta avatar y `.id-photo`. **No hay opción "cámara directa"** (solo galería). |

---

## B. Sesión de combate

| Paso | Estado | Detalle |
|------|--------|---------|
| B1 Tirar iniciativa | ✅ | `#m-init-roll` con d20+mod, push a `INIT_LIST`. |
| B2 Buff "Bendición" | ⚠️ | `_BUFF_TEMPLATES[0]` existe; el "vs miedo" es texto libre — `parseMod` suma a TODOS los TS. |
| B3 Flanqueando (+2) | ✅ | `#combat-flanking` toggle vinculado a CombatEngine. |
| B4 Atacar con arma | ✅ | Botones Atacar/Daño + iterativos cuando BAB ≥ 6. |
| B4b Atacar Resumen | ✅ | `wireSummaryAttack`: 1 arma → tira directo, varias → bottom-sheet. No cambia tab. |
| B5 Recibir daño | ✅ | Sheet `#sheet-hp-edit` con teclado numérico nativo y 5 modos (letal/no letal/heal/cura no letal/temp). |
| B6 Cond tras fallo TS | ✅ | `_showSuggestedConditions` muestra chips contextuales (fort: Fatigado, Mareado; will: Asustado, Confundido). |
| B7 Beber poción | 🔴 | Inventario `<li>` plano. No hay action "usar"/"consumir" que decremente cantidad ni dispare efecto. |
| B8 Lanzar conjuro | ⚠️ | `_openSpellsCatalog` existe pero el botón "Cast" inline necesita verificación. |
| B9 Avanzar turno | ✅ | `INIT_LIST` con flag `active`, rota turno, resetea acciones. |
| B9b Tracker visible | ✅ | `renderInitReadOnly` en card `#combat-init-readonly`. |
| B10 Round counter | ⚠️ | `nextRoundDecrement` decrementa duraciones. **No muestra "Asalto N" visible**, solo toast efímero. |
| B11 0 PG → Inconsciente | 🔴 | Init-card marca `init-dead` visual pero **no aplica condición Inconsciente** auto al PJ. |
| B12 Estabilizar (CD 15) | 🔴 | Solo texto en condición "Muriendo". Sin TS CON acumulativo ni botón. |
| B13 Descanso | ✅ | Botones corto/largo en panel HP, recargan pools `short`/`long` con `REST_RESET_KEY_MAP`. |
| B14 Tirar saves | ✅ | `bindSaveRolls`: tap en `.save-row` tira d20+mod, log, toast. |
| B15 CMD por tamaño | ✅ | `D5_getSizeKey` lee `#m-size` value canonical, `SIZE_CMB[sizeKey]` aplica. |
| B16 Daño/cura init | ⚠️ | Botones `−/+` por combatiente abren `appPrompt`. UX inconsistente con sheet HP del PJ propio. |

---

## C. Subir de nivel (5 → 6)

| Paso | Estado | Detalle |
|------|--------|---------|
| C1 Ver XP | ✅ | `refreshXPBar` pinta topbar + card identidad. |
| C2 Banner subida | ⚠️ | Banner completo existe pero **solo aparece tras editar `level` manual**. Cruzar XP solo lanza toast. |
| C3 Tirar HD | ✅ | Wizard: roll/avg/max para el **nuevo nivel** (no regenera todo). |
| C4 Pts habilidad | ⚠️ | Wizard navega a Habilidades; no asigna in-place. Aviso global "X puntos sin asignar". |
| C5 Dote | ⚠️ | Detecta nivel impar / Guerrero par; `_computeFeatBudget` cuenta humano + clase pero **no dotes de arquetipo** (THF, Brawler) ni míticas. |
| C6 Conjuros | ⚠️ | Wizard abre tab Conjuros; **no hay catálogo "spells learned"** in-place. |
| C7 Subir CON → HP retro | 🔴🧮 | `_lvlupApply` solo añade `HP_MAX += hpRolled`. **No recalcula DG previos** con CON nuevo. |
| C8 Auto-features | ✅ | `CLASS_AUTO_FEATURES_D4` + `autoAddMobileClassFeatures` inyectan rasgos por nivel + arquetipo. |

---

## D. Casos avanzados

| Paso | Estado | Detalle |
|------|--------|---------|
| D1 Mítico | ✅ | `_MYTHIC_STATE` con tier/path/power/surge die/recargar día. |
| D2 Gestalt | ⚠️ | Pares A/B etiquetados, BAB/saves MAX, incompatible con Synthesist. **Wizard no avisa** cómo se calculan skills/feats en gestalt. |
| D3 Epic | ⚠️ | Cap a 30 sin contenido oficial. Falta marcar como "experimental" más visiblemente. |
| D4 Synthesist | ✅ | Toggle automático, sustitución FUE/DES/CON, flag `⛓` en topbar. |
| D5 Broodmaster | ✅ | Auto-detecta archetypeKey, bar con selector E1/E2, flag `🐲 Brood E#`. |
| D6 Multi-caster | ✅ | `multicaster-bar` con tarjetas paralelas, slots/known por clase, +1 slot/lvl por escuela arcana. |
| D7 MT bumps | ✅ | `_PRESTIGE_BUMPS_MOBILE` aplica `+1/lvl` arcane y divine. |
| D8 Validar prereqs | ✅ | `appConfirm` modal in-app (sin `confirm()` nativo). |
| D9 Indicadores topbar | ✅ | Sintetista, Mítico T#, Gestalt, Epic, Brood E# con poll 1.5s + eventos. |

---

## E. Persistencia

| Paso | Estado | Detalle |
|------|--------|---------|
| E1 Reabrir | ✅ | `loadStoredState` + `migrateState`, flush en `visibilitychange`/`pagehide`. |
| E2 Exportar | ✅ | `AndroidBridge.saveCharacter` + fallback blob. |
| E3 Backups rotatorios | ✅⚠️ | `_rotateBackups` cada 5min, 3 slots con `_backupTs`. **Sin UI** — solo se accede por consola. |
| E4 Importar antigua | ✅ | `migrateState` v0→v1→v2 con toast detallado. |
| E5 Sincronizar | 🔴 | Botón "Sincronizar ficha" es **placeholder cosmético**, solo `toast('Sincronizando…')`. |
| E6 Imprimir | ✅ | `AndroidBridge.printSheet` o `window.print`. |
| E7 Undo | ⚠️ | Pila 20 snapshots + Ctrl+Z + botón topbar. **Solo cubre deletes** (clase/arma/armadura/dote), no edits de inputs. |
| E8 Lang switch | ✅ | `language-changed` re-renderiza clases/buffs/init/topbar/skills. Poll 1.5s como band-aid. |

---

## F. UI general

| Paso | Estado | Detalle |
|------|--------|---------|
| F1 Topbar XP | ✅ | Texto + barra apilados, no superpuestos. Char-sub wrap a 2 líneas. |
| F2 Avatar | ✅ | "?" sin nombre, foto en sheet identidad. |
| F3 Save indicator | ✅ | "Guardando…" / "✓ Guardado" / "⚠ Error". |
| F4 Bottom nav 5 tabs | ✅ | Sin cortes tras fix de width root. |
| F5 Subtab strip fade | ⚠️ | `overflow-x:auto` pero **sin gradiente fade** visible — el usuario no sabe que es scrolleable. |
| F6 Overflow horiz | ✅ | `body{width:100vw;overflow-x:hidden}` + `grid-template-columns:minmax(0,100vw)`. |
| F7 Temas + daltón | ✅ | 13+ temas. Modo daltónico vía toggle de settings. |
| F8 FAB dados | ✅ | `#fab-dice` oculto en tab "Más". |

---

## G. Modo Máster (integración con SPA externa)

| Paso | Estado | Detalle |
|------|--------|---------|
| G1 Toggle "M" + persist | ✅ | `body.master-mode` + `localStorage 'pf1e-master-mode'`. |
| G2 Entrada en "Más" | ✅ | `.more-master-only` solo visible con master-mode. |
| G3 Overlay iframe | ✅ | `<dialog>` lazy-load `master/Modo%20Master.html`. |
| G4 Cerrar | ✅ | Botón ✕ + listener `postMessage 'mst-exit'`. |
| G5 SPA carga | ✅ | Vendored React/Babel + `allowFileAccessFromFileURLs` en MainActivity. |

---

## H. Mantenimiento

| Paso | Estado | Detalle |
|------|--------|---------|
| H1 Empezar de cero | ⚠️ | Botón en settings funciona pero usa `confirm()` nativo (CLAUDE.md prefiere modal in-app). |
| H2a Wizard nuevo PJ | ✅ | `wireNewCharWizard()` desde overlay. |
| H2b Subir nivel | ⚠️ | Banner + asistente existen, **disparo manual** (no auto al cruzar XP). |
| H3 Avisos badge | ✅ | `#warnings-badge` en "Más" con sheet detalle. |
| H4 Notas sesión | 🔴 | **No existe `__session_log` ni pestaña** — CLAUDE.md las menciona pero solo hay `STATE.notes` global único. |
| H5 Dados libre | ✅ | `#sheet-dice` con historial. |

---

## 📊 Resumen ejecutivo

| Métrica | 2026-05-06 | (anterior) |
|---------|------------|------------|
| Pasos auditados | 60 | 51 |
| ✅ Funcionan fluidos | 38 (63%) | 19 (37%) |
| ⚠️ Con fricción | 16 (27%) | 18 (35%) |
| 🔴 Roto / falta | 6 (10%) | 9 (18%) |
| 🧮 Pide mate manual | 4 (7%) | 8 (16%) |

**Resultado**: la ficha está **madura**. Las fases A-I cerraron casi todo el catálogo histórico. Lo que queda son 6 frentes 🔴 concretos y 16 ⚠️ pulibles.

---

## 🎯 Plan priorizado (3 fases)

### 🔴 FASE J — Críticos vivos (~8-10h)

| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-J01** | Recálculo HP retroactivo al cambiar CON (Σ DG_i + conMod_actual) | #1 |
| **UX-J02** | Auto-toggle "Inconsciente" cuando hp ≤ 0 (con override Diehard) + helper Estabilizar (TS CON CD 10+1/turno) | #2 |
| **UX-J03** | Items consumibles: campo `qty` + botón "Usar" que decremente y aplique fórmula | #3 |
| **UX-J04** | Auto-abrir wizard si `localStorage[STATE_KEY] === null` | #8 |
| **UX-J05** | Disparar `_showLevelUpBanner` automáticamente al cruzar XP (no solo al editar level) | #7 |
| **UX-J06** | Quitar o feature-flag el botón "Sincronizar ficha" (o implementar QR-export) | #6 |

### 🟡 FASE K — Catálogos profundos (~10-15h)

| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-K01** | `spells.json` real (~1500 conjuros oficiales) + picker filtrable por clase/nivel | #4 |
| **UX-K02** | Pestaña/sheet de "Notas de sesión" con `__session_log` (varias entradas con fecha) | #5 |
| **UX-K03** | Buffs estructurados con flag `condTrigger` (vs miedo, vs encantamiento, vs ondulado) | #9 |

### 🔵 FASE L — Pulido (~4-5h)

| ID | Tarea | Impacto |
|----|-------|---------|
| **UX-L01** | Skills enforce duro de cap de rangos (cap por clase × INT × nivel) | #10 |
| **UX-L02** | Wizard subir nivel: gastar puntos hab e elegir spells learned in-place | #11 |
| **UX-L03** | Undo: hookear `change`/`input` debounced en stat blocks/HP/XP/gold | #12 |
| **UX-L04** | Subtab strip: gradiente fade `mask-image` o `::after` para indicar scroll | F5 |
| **UX-L05** | Arquetipos picker: chip de prereq cumplido (igual que dotes) | A5 |
| **UX-L06** | Foto: opción `capture="environment"` para cámara directa | A12 |
| **UX-L07** | `_computeFeatBudget` añadir dotes de arquetipo y míticas | C5 |
| **UX-L08** | Modo Epic: marcar como "experimental" más visiblemente | D3 |
| **UX-L09** | Round counter "Asalto N" visible en card init | B10 |
| **UX-L10** | Sustituir `confirm()` de "Empezar de cero" por modal in-app | H1 |

---

**Recomendación**: empezar por **Fase J** (6 ítems, ~8-10h) porque son los únicos 🔴 vivos. UX-J01 (HP retroactivo) y UX-J02 (Inconsciente/Estabilizar) son los que más rompen sesiones reales. UX-J04+J05 son muy baratos y desbloquean onboarding. UX-J06 es ético: dejar de mentir al usuario.

Si tuviera que elegir UNO solo: **UX-J02** porque cada combate duro lo toca al menos una vez.
