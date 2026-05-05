# Auditoría Mobile v2 — Plan paso a paso

> Re-revisión step-by-step de la app mobile (`port/app/src/main/assets/index.html` + espejo `port/Ficha Mobile.html`).
> Cubre: (A) qué bugs críticos siguen vivos, (B) qué tareas de PC (R-21..R-29 + P-6/P-9/P-10) faltan portar, (C) bugs nuevos detectados en walkthrough.
> Fecha: 2026-05-05.

**Leyenda**: ✅ funciona · 🟡 parcial · 🔴 roto · 🆕 falta UI · ❓ no aplica.

---

## 🔥 VEREDICTO RÁPIDO

La app mobile **se inicia, deja crear PJ y guardar JSON**, pero tiene 3 problemas que rompen el flujo de juego en cuanto se complica:

1. **Las condiciones de combate aplican el bono al revés** (Cegado da +2 atq en vez de −2). Catastrófico para uso en partida.
2. **Los buffs en el resumen y en la card no se hablan** (uno usa `qty`, otro `remaining`) — cuando le das al "▶ Siguiente asalto", uno baja y el otro no.
3. **Casi nada de las features avanzadas hechas en PC (R-21..R-29, P-6/P-9/P-10) está portado a mobile**. La mobile va por detrás del PC en sistemas Pathfinder (eidolon prereqs, multi-caster, prestige prereqs, Mythic, Gestalt, Synthesist, Broodmaster, weakness chips, SLA at-will, damage-type chips).

---

## (A) Estado actual de los 10 bugs críticos previos

| ID | Bug | Estado | Línea | Detalle |
|----|-----|--------|-------|---------|
| **C-16/C-18** | minus Unicode `−` en `parseMod` y `CONDITION_MODS` | 🔴 VIVO | 7656-7691 (parseMod), 7694-7724 (CONDITION_MODS) | `parseMod` regex `[+-]` solo acepta `-` ASCII. `CONDITION_MODS` sigue con U+2212 (`−2 ac`, `−4 dex`). **Ningún mod de condición se aplica al motor.** |
| **E-16/E-18** | inventario y monedas sin UI | ✅ CORREGIDO | 7453, 7498, 7508-9, 7576, 7581, 7594 | Todos los IDs existen y se usan. |
| **C-31** | `init-add-pc` lee `pg-current`/`pg-max` | 🔴 VIVO | 5599-5614 | Esos IDs no existen → `null`. Hay que cambiar a `HP_MAX`/`hp` globales. |
| **P-16/P-38** | select tamaño sin id; `CombatEngine` lee `#m-size` | 🟡 PARCIAL | 7870, 7313-7317 | `D5_getSize()` fallback funciona para CA/ataques, pero `calcCMBCMD` sigue leyendo `#m-size` → siempre `medium`. |
| **P-04/P-50** | tecleo manual raza no aplica `applyRaceFull` | 🔴 VIVO | 6733-6734 | Solo listener `input` para `updateCharSub`; sin `change`/`blur`. |
| **A-11** | catálogo de dotes desde `feats.json` | 🔴 VIVO | 2685-2706 | Sigue siendo formulario manual. `DB.feats` se carga (4489) pero **nunca se consume**. |
| **A-38** | `SLOT_STATE` persiste | ✅ CORREGIDO | 8200, 8339-41 | `s.slotUsed` serializado y restaurado. |
| **M-07** | daltónico CSS inválido `body.daltonic-mode :root` | 🔴 VIVO | 8943 | Selector descendiente con `:root` nunca aplica. Variables NO cambian. |
| **C-04** | buffs resumen vs card desincronizados | 🔴 VIVO | 5785-7, 5813 vs 8848-54, 8886-9 | `renderBuffs` usa `remaining`; `renderSummaryBuffs`/`nextRoundDecrement` usan `qty`. **Contadores divergen.** |
| **A-06** | `D3_SKILLS.state` en export/import | 🟡 PARCIAL | 8176-83, 8298-306 | Rangos persisten vía DOM proxy, pero `state[id].misc` y `CUSTOM_SKILLS` no se serializan en JSON (solo localStorage). |

**Score: 2/10 corregidos · 6/10 vivos · 2/10 parciales.**

---

## (B) Paridad PC ↔ Mobile (qué falta portar)

| ID | Feature | PC | Mobile | Trabajo en mobile |
|----|---------|-----|--------|-------------------|
| **R-21** | Eidolon evolutions: prereqs + stacking | ✅ commit `14043a7` | ❌ textarea libre | Reemplazar `evolText` por picker estructurado con `_eidolonEvolutionLockReason` portado. |
| **R-22** | Multi-caster slots por clase | ✅ `b624a41` | ❌ un solo bloque | Generar `<details>` por clase caster con `mc-*` IDs prefijados. |
| **R-23** | Prestige caster bumps | ✅ `409e367` | ❌ caster level manual | Portar `PRESTIGE_CASTER_BUMPS` y aplicar bumps a `mc-cl-<class>`. |
| **R-24** | Broodmaster panel doble | ✅ `c51b4e9` | ❌ un eidolon | Detectar archetype broodmaster y forzar 2 instancias en `COMP_DATA.eidolon[]` con pool ½. |
| **R-25** | Synthesist fusión stats | ✅ `27c6e78` | ❌ sin toggle | Toggle "🔗 Fusionado" + sustituir FUE/DES/CON, BAB, max(saves), talla y velocidad. |
| **R-26** | Prestige prereqs validation | ✅ `b25bbff` | ❌ sin chips | Portar `checkPrestigePrerequisites` + chip ⚠️/✓ en picker. |
| **R-27** | Panel Mythic | ✅ `5306808` | ❌ inexistente | Crear `#mythic-panel` colapsable: tier, path, surge, pool, hard-to-kill helper. |
| **R-28** | Modo Gestalt | ✅ `1363510` | ❌ sin secondary class | Toggle global + secondary select por fila de `CLASSES_DATA`. |
| **R-29** | Modo Epic (>20) | ✅ `83dacb8` | ❌ sin toggle | Toggle epic en settings + max=30 en inputs de nivel. |
| **P-6** | Damage-type chips (11 tipos) | ✅ | ❌ | Multi-select chips en `.weapon-card` mobile. |
| **P-9** | SLAs "a voluntad" | ✅ | ❌ | Subsección con cards SLA + chat-log. |
| **P-10** | Weakness/Vulnerability chips | ✅ | 🟡 5 checkboxes fijos | Reemplazar por chips dinámicos `{type, note, multiplier}`. |
| **A-11** | Picker dotes desde `feats.json` | ✅ | ❌ | Bottom-sheet picker + auto-prereq chips. |
| **D5 Inv** | Inventario con todas las categorías PF1e | ✅ | 🟡 solo 2 cats hardcoded (potions, gear) | Ampliar `D5_CAT_LABELS` a categorías completas. |

**Resumen: 9 de 9 tareas R-21..R-29 sin portar + 3 patches P-6/P-9/P-10 sin portar + catálogo feats sin usar.**

---

## (C) Bugs nuevos detectados en walkthrough

| Nuevo | Escenario | Detalle | Acción |
|-------|-----------|---------|--------|
| **N-01** | Cambiar idioma EN↔ES | `applyLang` solo recorre `[data-i18n]` + `data-attr-name` + `.cond-chip`. **No re-renderiza** `renderClasses`/`renderWeapons`/`renderFeatsCrud`/`renderInit`/companions. Topbar tiene "Fighter"/"Guerrero" hardcoded en 6729. | Hook en `applyLang` que llame a renders dinámicos. |
| **N-02** | Settings tipográficos en JSON | `fontSize`/`daltonic` viven en localStorage `ficha-mobile-settings` separado. **No se incluyen en JSON exportado** → al cargar la ficha en otro dispositivo se pierden. | Snapshot `mobileSettings` en `exportData`. |
| **N-03** | Importar ficha vieja | Sin toast de migración. Usuario no sabe qué campos se completaron por defecto. | Detectar campos ausentes y avisar "Ficha v1 importada — algunos campos por defecto." |
| **N-04** | CUSTOM_SKILLS persistencia | Solo en `localStorage.ficha-custom-skills`. **No viaja con la ficha JSON.** Al cargar ficha en otro dispositivo, las skills custom se pierden. | Serializar en JSON. |
| **N-05** | Flush en visibilitychange | `saveStateDebounced` con 800 ms. Sin handler `visibilitychange`/`pagehide`. **En Android, si el WebView se pausa antes del flush, se pierde el último edit.** | `document.addEventListener('visibilitychange', flushNow)`. |
| **N-06** | QuotaExceededError | `saveState` envuelve en try/catch silente. **Usuario sigue editando creyendo que se guarda.** | Toast bloqueante con opción "exporta y limpia foto". |

---

## 🎯 PLAN PASO A PASO PRIORIZADO

### 🟢 FASE 1 — Quick wins (1-2h, alta prioridad, bugs catastróficos)

| # | Tarea | Tiempo | Impacto |
|---|-------|--------|---------|
| F1.1 | **Fix C-16/C-18 minus Unicode** — añadir `replace(/[−–—]/g,'-')` en `parseMod` (1 línea). | 5 min | 🔴 Crítico — desbloquea TODAS las condiciones y ajustes con minus Unicode |
| F1.2 | **Fix C-31 init-add-pc** — cambiar lectura a `HP_MAX`/`hp` globales + `saveStateDebounced`. | 10 min | 🔴 Funcional — desbloquea tracker iniciativa con PJ |
| F1.3 | **Fix P-04 tecleo raza** — añadir listener `change` en `#in-raza` que llame `applyRaceFull` si coincide con slug. | 10 min | 🟡 UX |
| F1.4 | **Fix M-07 daltónico** — cambiar selector a `:root.daltonic-mode` y añadir clase a `documentElement`. | 5 min | 🔴 Funcional |
| F1.5 | **Fix C-04 buffs sync** — unificar a `remaining`. Eliminar `qty` o hacer alias. | 30 min | 🔴 Funcional |
| F1.6 | **Fix N-05 flush en visibilitychange** — handler que llame `snapshotState` + `localStorage.setItem` síncrono. | 10 min | 🟡 Robustez |
| F1.7 | **Fix N-06 QuotaExceededError** — catch específico con toast. | 10 min | 🟡 Robustez |

**Subtotal Fase 1: ~80 min, 7 fixes pequeños.**

### 🟡 FASE 2 — Paridad estructural con PC (medio plazo)

Por dependencias y complejidad creciente:

| # | Tarea | Tiempo aprox | Notas |
|---|-------|--------------|-------|
| F2.1 | **R-29 Modo Epic** (toggle + max=30) | 30 min | Más simple. |
| F2.2 | **R-21 Eidolon evolutions prereqs** (portar `_eidolonEvolutionLockReason` al editor mobile) | 1.5h | Requiere cambiar el textarea libre por picker. |
| F2.3 | **R-26 Prestige prereqs** (chips + confirm) | 1h | Reusa `feats.json` parser. |
| F2.4 | **A-11 Picker de dotes** | 1.5h | Crea bottom-sheet `sheet-feat-pick` + busca `DB.feats`. |
| F2.5 | **R-25 Synthesist fusión stats** | 2h | Toggle + sustitución en `recalcMobile`/`apply()`. |
| F2.6 | **R-22 Multi-caster slots** | 3h | Tarea grande. Bloque paralelo. |
| F2.7 | **R-23 Prestige caster bumps** | 1h | Depende de R-22. |
| F2.8 | **R-24 Broodmaster panel doble** | 2h | Multi-instancia eidolon ya existe (M-01); añadir vínculo + pool ½. |
| F2.9 | **R-27 Panel Mythic** | 2h | Nuevo panel. |
| F2.10 | **R-28 Gestalt mode** | 2h | Toggle + secondary class. |

**Subtotal Fase 2: ~16h, 10 tareas.**

### 🔵 FASE 3 — Patches PC pendientes + UX

| # | Tarea | Tiempo aprox |
|---|-------|--------------|
| F3.1 | **P-6 damage-type chips** en armas | 1h |
| F3.2 | **P-9 SLAs at-will** | 1h |
| F3.3 | **P-10 Weakness chips dinámicos** | 1h |
| F3.4 | **N-01 i18n re-render dinámico** | 1h |
| F3.5 | **N-02 settings tipográficos en JSON** | 30 min |
| F3.6 | **N-03 toast de migración** | 20 min |
| F3.7 | **N-04 CUSTOM_SKILLS en JSON** | 20 min |
| F3.8 | **A-06 D3_SKILLS.state.misc en JSON** | 20 min |
| F3.9 | **P-16/P-38 sincronizar #m-size** | 30 min |

**Subtotal Fase 3: ~6h, 9 tareas.**

---

## 📊 Resumen ejecutivo

| Categoría | Items | Estado |
|-----------|-------|--------|
| Bugs críticos previos | 10 | 2 corregidos · 6 vivos · 2 parciales |
| Tareas R-21..R-29 portadas | 9 | 0 portadas · 9 pendientes |
| Patches P-6/P-9/P-10 | 3 | 0 portados |
| Bugs nuevos | 6 | 0 corregidos |
| **TOTAL pendiente** | **31** | **~24h trabajo** |

## ⚡ Recomendación de orden

1. **Empezar por Fase 1 completa** (~80 min) — desbloquea uso real en partida.
2. **Fase 2 priorizando R-29 + R-21 + R-26 + A-11** primero (~5h) — esos son los 4 que dan más valor con menos trabajo.
3. **R-22/R-23/R-24/R-25/R-27/R-28** son grandes; pueden esperar a un sprint dedicado.
4. **Fase 3** opcional según uso.

Si quieres, ataco la Fase 1 entera ahora (todos los fixes son rápidos y de impacto inmediato).
