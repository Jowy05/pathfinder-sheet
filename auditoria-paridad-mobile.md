# Auditoría · Paridad PC ↔ Mobile

> Análisis con 3 agentes paralelos (auto-features, motor de cálculo, paneles UI). Objetivo: detectar qué hace PC que mobile NO hace, para guiar el roadmap de paridad.
> Fecha: 2026-05-05.

---

## 1. Auto-features de clase (CLASS_AUTO_FEATURES)

PC tiene **40+ entradas** en `CLASS_AUTO_FEATURES`. Mobile tiene **28** en `CLASS_AUTO_FEATURES_D4`.

### 🔴 Clases PC que faltan totalmente en mobile (13)
`unchained_barbarian`, `unchained_monk`, `unchained_summoner`, `occultist`, `psychic`, `mesmerist`, `medium`, `spiritualist`, `shifter`, `sorcerer` (¡!), `ranger`, `dragon_disciple`, `shadowdancer`.

### 🟡 Clases con paridad parcial (fórmula distinta o feature secundaria faltante)

| Clase | Falta en mobile |
|-------|-----------------|
| paladin | Smite con fórmula PC `1+lvl/3` vs mobile `1+(lvl-1)/4` |
| monk / unchained_monk | Stunning Fist (`lvl/4`), gating ≥4 nivel |
| bard | Performance rounds detalladas + detail por nivel |
| skald | Raging Song con fórmula 4+CAR+2·(lvl−1) |
| inquisitor | Bane (perdición, `lvl`) |
| magus | Spell Recall (≥4 nivel) |
| druid | Wild Shape gating ≥4 con escala (lvl−2)/2 |
| ninja | Gating ≥2 nivel |
| arcanist | Reservoir con fórmula PC `3+lvl/2` |
| hunter | Animal Focus (lvl) en lugar de Vínculo + Empatía |
| shaman | Wandering Spirit ≥4 |
| kineticist | Burn con fórmula PC `lvl/2` |
| witch | Hex con `lvl` |
| oracle | Revelation `3+CAR` (mobile usa `1+(lvl-1)/2 máx 7`) |

### 🆕 Mobile añadió cosas que PC no tiene
`alquimista.Mutágeno`, `peleador.Maestría descontrolada`, `cazador.Vínculo+Empatía`, `sacerdote_de_guerra.Arma sagrada`, `invocador.Vínculo eidolón`, `samurai.Resolución`, `antipaladin.Castigo del bien + Imposición impía`.

### 🛠 Helpers PC sin equivalente en mobile
- **`REST_RESET_KEY`** — mapping id→`'short'/'long'`. Mobile guarda `reset:'long'` inline pero sin tabla central, sin soporte 'short'.
- **`restShort()`** — descanso 1h que solo resetea pools de encuentro/concentración (ki, panache, grit, magus, arcane reservoir, performance, bombs, inspiration, focus, flexibility, animal focus, studied target).
- **`restLong()`** — 8h: resetea todo + `newDay()` slots + restaura HP máx + clear temp HP + fatigued→clear / exhausted→fatigued.
- **`ARCHETYPE_AUTO_FEATURES`** — auto-features por arquetipo (champion_of_the_faith.smite). Mobile no tiene este sistema.
- **`_autoFeaturesDismissed`** — Set que recuerda tarjetas eliminadas para no re-añadirlas.
- **`syncClassAutoFeatures(mods)`** con `applyTemplates`/`injectFeatureDetail` — actualiza max al cambiar nivel/atributo + inyecta `<details>` de referencia plegables (bard, inquisitor, magus).
- **`TEAMWORK_CLASSES` + `addTeamworkFeat`** — sección de dotes de trabajo en equipo para inquisitor/hunter/cavalier/tactician.

---

## 2. Motor de cálculo

| Función | Diferencia crítica |
|---------|--------------------|
| `recalc()` vs `CombatEngine.apply()` | Mobile NO orquesta armas, encumbrance, skills, spells ni progresión de clases en `apply()`; viven en flujos `D5_*` dispersos sin coordinación |
| `calcAttributes` | Mobile **sin synthesist, sin age tier, sin drain/dmg explícito, sin DEX-0 forzado** por paralyzed/helpless/pinned. Indefenso/Paralizado/Petrificado tienen `CONDITION_MODS=''` (no aplican nada) |
| `calcAC` / `calcDefense` | Mobile **sin prone (−4 melee/+4 ranged), sin helpless −4, sin flat-footed (no recorta DEX/dodge), sin nota visual vs ranged, sin broken-halves** |
| `calcSaves` | Mobile **sin slot save-item separado, sin featBonuses por save, sin sickened −2 explícito** |
| `calcCMB / calcCMD` | Mobile **CMD no incluye deflection ni dodge** (regla oficial), sin Agile Maneuvers, sin penalizadores de condición |
| `calcCombat` armas | Mobile **sin Power Attack, sin Deadly Aim, sin TWF, sin broken (−2 atk/−2 dmg/×2 crit), sin condiciones de ataque (fear/sickened/grappled/dazzled/prone), sin composite-cap, sin agile trait, sin deadly +1d8 crit, sin sobrecarga→speed 0** |
| `calcSkills` | Mobile **sin penalizadores de condición, sin trained-only block, sin rank cap por nivel (solo aviso visual), sin fly-maneuverability, sin buff por skill** |
| `calcEncumbrance` | Mobile **sobrecarga no para velocidad, encumbrance no afecta speed, sin "ant haul" (hormiga)** |
| `calcSpells` / `buildSpellSlots` | Mobile **sin prestige bumps al CL (R-23), sin penetración mágica, sin multi-caster (R-22), sin escuela arcana (specialist +1), sin override manual de slots** |
| `gatherBuffDeltas` | Mobile **sin buff por habilidad concreta (`perSkill`), sin daño por arma (`dmg`), sin all-skills, sin atributos físicos derivados al recalcular DEX/STR efectivos** |

### 🔥 Top 5 brechas de motor (mayor impacto)

1. **Power Attack / Deadly Aim / TWF / Broken / condiciones de ataque** — `D5_computeWeaponAttack` ignora todas las modificaciones tácticas. Las cards de arma muestran números irreales en combate.
2. **Synthesist + age tier + DEX-0 por paralyzed/helpless/pinned** — `calcAttributes` mobile no fusiona eidolón, no aplica edad, no fuerza DEX 0 en estados de incapacitación.
3. **AC condicional: prone/helpless/flat-footed/broken-halves** — sin penalizadores de condición ni reducción por armadura rota. CMD tampoco incluye deflection ni dodge.
4. **Encumbrance no afecta velocidad, overload no para movimiento** — debería forzar 0 ft.
5. **Spells: sin penetración, sin prestige bumps al CL, sin multi-caster, sin escuela arcana, sin override manual** — `computeSpellSlots` minimalista falla con prestige, magos especialistas y multiclase caster.

---

## 3. Paneles, sheets y UI

| ID PC | Sección/Panel | Mobile | Estado |
|-------|---------------|--------|--------|
| `#mythic-panel` (R-27) | Panel Mythic Adventures | ❌ | falta portar |
| `#gestalt-mode` + `class-b<idx>` (R-28) | Modo Gestalt | ❌ | falta portar |
| `#multi-caster-section` (R-22) | Multi-caster | ❌ | falta portar |
| `#brood-bar`, `#brood-active` (R-24) | Broodmaster | ❌ | falta portar |
| `#synth-bar`, `#synth-fused` (R-25) | Synthesist | ❌ | falta portar |
| `confirmLoadRacialTraits` + lock racial | Picker de raza extendido (any-bonus + traits auto + lock) | ❌ | falta portar |
| `refreshFeatPrereqChips` (✓/⚠️/❓) | Picker feats con chips prereq | ❌ (solo input texto) | falta portar |
| Damage-type chips elementales (P-6) | 3 físicos + 8 elementales | ❌ (solo P/S/B en `<option>`) | falta portar |
| `.sla-card` + `#sla-log` (P-9) | SLAs at-will | ❌ | falta portar |
| Tracker iniciativa con condiciones + Std/Move/Swift | Tracker avanzado | 🟡 parcial (sin INIT_ROUND persistido, sin conds, sin acciones) | falta portar |
| Burbujas de cargas (Q-1) en items mágicos | Cargas de objetos mágicos | ❌ | falta portar |
| `@media print` con expansión collapsibles | Vista de impresión | ❌ (sin `@media print`) | falta portar |
| `__buff_tracker` (sistema nuevo) | Buff tracker dual | 🟡 solo legado `BUFFS_LIST` | falta portar nuevo |
| Paneles separados familiar/animal/eidolón/summoned | Companions con UI dedicada | divergencia (mobile unifica en `COMP_DATA`) | decisión arquitectónica |
| Pickers dinámicos por clase (escuela/linaje/misterio/patrón/dominios) | Selectores | ✅ | portado |
| Order picker (cavalier) | Selector de orden | ❌ | falta portar |

### 🔥 Top 5 secciones críticas

1. **Panel Mythic completo** — bloquea campañas mythic.
2. **Synthesist + Broodmaster** — dos arquetipos clave del Summoner totalmente ausentes.
3. **Modo Gestalt + Multi-caster** — imposible usar PJs gestalt o multiclase caster real.
4. **Picker de feats con chips de prereq** — mobile solo tiene input de texto libre.
5. **Tracker iniciativa avanzado** — falta INIT_ROUND persistido, condiciones por combatiente, desglose Std/Move/Swift.

---

## 📊 Resumen ejecutivo de la paridad

| Área | PC | Mobile | Gap |
|------|----|----|------|
| Catálogo de clases (BBDD) | 96 | 96 | ✅ |
| Catálogo de arquetipos (BBDD) | 332 | 332 | ✅ |
| Auto-features de clase | 40+ | 28 | 🟡 13 faltan + 14 con paridad parcial |
| Motor de cálculo (recalc) | completo | parcial | 🔴 5 áreas críticas |
| Paneles/sistemas avanzados | 9 | 0 | 🔴 todo falta (R-22..R-28, P-6, P-9, P-10 ya sí) |
| BBDD fallback offline | ✅ | ✅ (recién portada) | ✅ |

## 🎯 Plan recomendado por orden de impacto

### Fase A — Motor crítico (afecta a CADA combate)
1. **Power Attack / Deadly Aim / TWF / Broken** en `D5_computeWeaponAttack` mobile.
2. **AC condicional**: aplicar prone/helpless/flat-footed/broken-halves.
3. **Encumbrance afecta velocidad**: aplicar tabla PF1e + sobrecarga→0.
4. **Forzar DEX 0 con paralyzed/helpless/pinned** en `calcAttributes` mobile.
5. **Condiciones de ataque** (fear/sickened/grappled/dazzled/prone) sumadas a `condAtk`.

### Fase B — Motor de conjuros (afecta casters)
6. **Multi-caster** mobile (R-22).
7. **Prestige caster bumps** mobile (R-23).
8. **Override manual de slots** + penetración mágica.
9. **Escuela arcana** especialista (+1 slot/nivel).

### Fase C — Auto-features (afecta clases concretas)
10. **REST_RESET_KEY + restShort/restLong** centralizado.
11. **Trackers que faltan** para sorcerer (¡falta!), ranger, occultist, psychic, mesmerist, medium, spiritualist, shifter, dragon_disciple, shadowdancer + unchained_*.
12. **Helpers de detail** (bard/inquisitor/magus con tabla plegable).
13. **TEAMWORK_CLASSES + addTeamworkFeat**.

### Fase D — Paneles arquetipos exóticos
14. **Synthesist** mobile (R-25).
15. **Broodmaster** mobile (R-24).
16. **Modo Gestalt** mobile (R-28).
17. **Mythic panel** mobile (R-27).

### Fase E — UX y patches sin portar
18. **Picker raza extendido** con any-bonus + traits auto + lock.
19. **Picker feats con chips prereq** ✓/⚠️/❓.
20. **Damage-type chips elementales** (8 más).
21. **SLAs at-will** (P-9).
22. **Burbujas de cargas** (Q-1).
23. **`@media print`** mobile.
24. **Tracker iniciativa**: INIT_ROUND persistido, conds por combatiente, acciones Std/Move/Swift.
25. **Order picker** (cavalier).
26. **`__buff_tracker` dual** (sistema nuevo).

## Nota sobre tamaño de trabajo

- **Fase A** (motor combate): ~3-4h. Alto impacto, cualquier sesión lo nota.
- **Fase B** (conjuros): ~3h.
- **Fase C** (auto-features): ~4h. Volumen pero patrones repetitivos.
- **Fase D** (paneles): ~6-8h. Arquitectura.
- **Fase E** (UX): ~5-6h.

**Total estimado: ~22h.**

Si tienes que priorizar, empieza por **Fase A** (cualquier PJ se beneficia) y **Fase B** (todos los casters).
