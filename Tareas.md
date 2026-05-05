# Tareas · Ficha Pathfinder 1e

Última actualización: 2026-05-05.
Documentos relacionados:
- `normas.md` — reglas oficiales PF1e con anotaciones de qué cumple la hoja.
- `auditoria-pc.md`, `auditoria-mobile.md`, `auditoria-mobile-v2.md`, `auditoria-paridad-mobile.md`, `auditoria-extra.md` — auditorías por área.
- `bugs.md` — bugs activos.

> Lo que aparece aquí está **sin terminar**. Lo ya hecho se ha quitado. Para ver el histórico de tareas completadas mira `git log` o el archivo `Tareas-historico.md` (si lo conservas).

---

## 🔴 BACKLOG MOBILE — Paridad con PC

Todo el trabajo R-21..R-29 está hecho en PC (commits `14043a7`/`b25bbff`/`83dacb8`/`b624a41`/`409e367`/`c51b4e9`/`27c6e78`/`5306808`/`1363510`). En mobile solo está portado **R-29 (modo Epic)**. El resto + brechas detectadas en auditoría de paridad están abajo.

### FASE A — Motor de combate (impacto: cada combate de cualquier PJ)

- **MA-1 · Power Attack / Deadly Aim / TWF en cards de arma** *(auditoria-paridad #motor)*
  - Hoy `D5_computeWeaponAttack` mobile ignora estas tácticas. Las cards muestran números irreales.
  - Aplicar la fórmula PC: `paAtkMod` y `paDmgBonus` según `is2H`/`offhand`/`ranged`, y `twfPenalty` según `twf-level`.

- **MA-2 · Marca "Roto" −2 atq / −2 dmg / crit ×2** *(motor)*
  - Mobile no tiene checkbox "broken" ni efecto de armadura/escudo rota. Aplicar reducción ½ a CA armadura/escudo.

- **MA-3 · Condiciones de ataque** *(motor)*
  - `condAtk` debe sumar penalizaciones por shaken/frightened/panicked/sickened/entangled/grappled/dazzled/prone (−4 melee, +4 vs distancia).

- **MA-4 · AC condicional** *(motor)*
  - `calcAC` mobile sin: prone (−4 melee/+4 ranged con nota visual), helpless (−4), flat-footed (recortar DEX/dodge), pinned (−4), broken-halves de armadura.
  - Añadir `condAC` a CA Total y a CA Toque.

- **MA-5 · DEX = 0 forzado por paralyzed/helpless/pinned** *(motor)*
  - `calcAttributes` mobile no fuerza DEX 0. Añadir junto al check de paralyzed que ya existe.

- **MA-6 · Encumbrance afecta velocidad + sobrecarga = 0 ft** *(motor)*
  - `D5_calcEffSpeed` solo aplica reducción por armadura. Aplicar tabla PF1e: ligera no afecta, media/pesada cap a 20 ft, sobrecarga = 0 ft.

- **MA-7 · CMD incluye deflection y dodge** *(motor, regla oficial)*
  - `calcCMBCMD` mobile no los suma. Añadir.

- **MA-8 · Edad afecta atributos** *(motor)*
  - `calcAttributes` mobile no aplica modificadores por categoría de edad (joven/mediana/vieja/venerable).

### FASE B — Motor de conjuros (impacto: todos los casters)

- **MB-1 · R-22 Multi-caster: slots por clase separados** *(normas §15-bis-2)*
  - Hoy `computeSpellSlots` mobile asume una sola clase caster. Portar la lógica de PC con `<details>` por clase.

- **MB-2 · R-23 Prestige caster bumps** *(normas §15-bis-3)*
  - Mystic Theurge / Eldritch Knight / Loremaster / Dragon Disciple / Pathfinder Savant / Holy Vindicator / Hellknight Signifer / Arcane Trickster aplican +1 NL a clase elegida. Portar `PRESTIGE_CASTER_BUMPS` y `_parsePrestigeBumpPattern`.

- **MB-3 · Escuela arcana: +1 slot/nivel para wizard** *(motor + R-26 normas)*
  - Portar el bump del slot extra de mago especialista. Marcar escuela prohibida con borde rojo.

- **MB-4 · Override manual de slots** *(motor)*
  - Mobile rellena automáticamente desde tabla; no permite que el usuario sobrescriba. Añadir flag `userOverride` por slot.

- **MB-5 · Penetración mágica** *(motor)*
  - Botón con tirada `1d20 + NL + dote`.

### FASE C — Auto-features de clase (impacto: clases concretas)

- **MC-1 · `REST_RESET_KEY` + `restShort()` + `restLong()`** *(auditoria-paridad #helpers)*
  - Mobile usa `reset:'long'` inline en cada feature pero no tiene tabla central, sin soporte 'short'. Portar la tabla y los dos handlers.

- **MC-2 · 13 clases sin auto-features que sí están en PC**
  - `sorcerer` (Bloodline Power 3+CAR — falta sorcerer entero como auto-feature, ¡es core!)
  - `ranger` (Quarry ≥11)
  - `unchained_barbarian`, `unchained_monk`, `unchained_summoner` (los 3 con sus pools)
  - `occultist` (Focus 3+(lvl-1)/2)
  - `psychic` (Phrenic Pool lvl/2+INT)
  - `mesmerist` (Touch Treatment lvl/2+CAR ≥2)
  - `medium` (Channel Spirit)
  - `spiritualist` (Bonded Manifestation lvl/2+CAR)
  - `shifter` (Wild Shape Shifter)
  - `dragon_disciple` (Breath Weapon ≥2)
  - `shadowdancer` (Shadow Jump 40·2^(lvl−4))

- **MC-3 · 14 clases con paridad parcial — alinear fórmulas**
  - paladin: smite `1+lvl/3` (PC) vs `1+(lvl-1)/4` (mobile). Mobile tiene fórmula vieja.
  - monk: añadir Stunning Fist (`lvl/4`) y gating ≥4.
  - bard: cambiar a `4+CAR+2·(lvl-1)` rounds + detail por nivel.
  - skald: `4+CAR+2·(lvl-1)`.
  - inquisitor: añadir Bane (`lvl`).
  - magus: añadir Spell Recall (≥4).
  - druid: gating ≥4 con escala `(lvl-2)/2`.
  - ninja: gating ≥2.
  - arcanist: cambiar fórmula a `3+lvl/2`.
  - hunter: cambiar a Animal Focus (`lvl`).
  - shaman: añadir Wandering Spirit (≥4: 1).
  - kineticist: cambiar burn a `lvl/2`.
  - witch: cambiar Hex a `lvl`.
  - oracle: cambiar Revelation a `3+CAR`.

- **MC-4 · `ARCHETYPE_AUTO_FEATURES`** *(helpers)*
  - Mobile no tiene auto-features por arquetipo (ej. champion_of_the_faith.smite). Portar el sistema.

- **MC-5 · `_autoFeaturesDismissed` + `syncClassAutoFeatures` + `injectFeatureDetail`** *(helpers)*
  - Recordar tarjetas eliminadas para no re-añadirlas. Inyectar detail plegable (bard/inquisitor/magus).

- **MC-6 · `TEAMWORK_CLASSES` + `addTeamworkFeat`** *(helpers)*
  - Sección de dotes de equipo para inquisitor/hunter/cavalier/tactician.

### FASE D — Paneles avanzados sin portar

- **MD-1 · R-25 Synthesist mobile** *(normas §15-bis-5)*
  - Toggle "🔗 Fusionado" + sustituir FUE/DES/CON, BAB, max(saves), talla, velocidad. Portar de PC commit `27c6e78`.

- **MD-2 · R-24 Broodmaster mobile** *(normas §15-bis-4)*
  - Switch Eidolon 1 / Eidolon 2 con pool de PE compartido a la mitad. Portar de PC commit `c51b4e9`.

- **MD-3 · R-28 Modo Gestalt mobile** *(normas §15-bis-8)*
  - Toggle global + secondary class por fila + cálculos MAX. Portar de PC commit `1363510`.

- **MD-4 · R-27 Panel Mythic mobile** *(normas §15-bis-7)*
  - Tier (1-10), path (6 selects), pool 3+2·tier, surge 1d6→1d12, hard-to-kill helper. Portar de PC commit `5306808`.

- **MD-5 · R-21 Eidolon evolutions con prereqs y stacking** *(normas §15-bis-1)*
  - **Hecho en mobile** (commit `b96daa5`). Sin acción.

- **MD-6 · R-26 Prestige prereqs validación** *(normas §15-bis-6)*
  - `classes.json` ya tiene `prerequisites` (commit `b25bbff`). Falta evaluar y mostrar chip ⚠️/✓/❓ en mobile.

### FASE E — UX y patches sin portar

- **ME-1 · Picker de raza extendido** *(auditoria-paridad #UI)*
  - Mobile usa `applyRaceFull` simple. Portar `confirmLoadRacialTraits` con any-bonus modal, traits auto-renderizados y lock de inputs `*-racial`.

- **ME-2 · Picker de feats con chips de prereq** *(UX)*
  - A-11 ya añadió picker en mobile (commit `b96daa5`) pero sin validación visual ✓/⚠️/❓. Portar `refreshFeatPrereqChips`.

- **ME-3 · Damage-type chips elementales (P-6)** *(UX)*
  - Mobile solo tiene P/S/B en `<option>`. Añadir 8 elementales (fire/cold/acid/electricity/sonic/force/negative/positive) como chips multi-select.

- **ME-4 · SLAs at-will (P-9)** *(UX)*
  - Subsección con `.sla-card` (nombre/CL/DC/desc/Tirar/×) + chat-log.

- **ME-5 · Tracker iniciativa avanzado** *(UX)*
  - Mobile parcial: `INIT_ROUND` no se persiste, no hay condiciones por combatiente, ni acciones Std/Move/Swift por turno.

- **ME-6 · Burbujas de cargas en items mágicos (Q-1)** *(UX)*
  - `toggleMagicCharges` + `rebuildMagicBubbles` para varitas, pergaminos, items con cargas.

- **ME-7 · `@media print` en mobile** *(UX)*
  - PC tiene `@media print` con expansión de collapsibles. Mobile no.

- **ME-8 · `__buff_tracker` dual** *(UX)*
  - PC tiene buff tracker nuevo + legado. Mobile solo legado.

- **ME-9 · Order picker (cavalier/samurai)** *(UX)*
  - `ORDER_PICK` declarado en mobile pero sin botón ni binding visible.

---

## 🟡 BUGS PENDIENTES (mobile, ver auditoria-mobile-v2.md)

> La Fase 1 mobile (commits `adb87fd`/`76b627c`/`032cc44`/`2c36b12`/`9500d99`/`663aea7`/`50265c8`) cerró 7 bugs catastróficos. Los que siguen abiertos:

- **P-16/P-38 (parcial)** — `CombatEngine` mobile lee `#m-size` que no existe; `D5_getSize` fallback funciona para CA pero `calcCMBCMD` sigue dando 'medium' siempre.
- **A-06 (parcial)** — `D3_SKILLS.state.misc` y `CUSTOM_SKILLS` solo en localStorage, no en JSON exportado.
- **N-01** — Cambiar idioma EN↔ES NO retraduce cards dinámicas (renderClasses/renderWeapons/renderFeatsCrud/renderInit/companions).
- **N-02** — Settings tipográficos (`fontSize`/`daltonic`) viven en localStorage `ficha-mobile-settings` separado, NO se incluyen en JSON exportado.
- **N-03** — Importar ficha vieja sin nuevos campos: sin toast de migración. Usuario no sabe qué se completó por defecto.

## 🟠 BUGS PENDIENTES (PC, ver auditoria-pc.md)

- **P-19** — No existe campo "Género".
- **P-37** — Input "BAB total" en Identidad hardcoded a +3 readonly, sin actualización desde `apply()`.
- **P-44** — No hay botones rápidos +/− HP en panel.
- **P-45** — Botones de descanso (corto/largo) están en sección de Conjuros, UX confusa para PJ no lanzador.
- **P-47** — Velocidad efectiva siempre "30 ft" hardcoded; no responde a speed-base/armadura/raza.
- **P-64** — No hay botones tirada para Fortaleza/Reflejos/Voluntad (sí los hay para iniciativa, dispel, SR).
- **A-29 / A-34 / A-40** — Selectores de Escuela Arcana, Escuela Prohibida y Dominios prometen +1 slot/nivel pero el motor NO lo aplica todavía.
- **T-22** — Cambiar idioma NO retraduce cards dinámicas ya creadas (buff/weapon/feat/item) en PC.
- **T-10** — JSON exportado sin `__schema`. Sin migrate explícito.
- **T-28** — Modo Demo (`Demo Efectos.html` + 5 archivos) huérfano, no enlazado.
- **X-19** — `cyberpunk-mode.css` huérfano (en package.json pero ningún HTML lo carga).
- **X-28** — Fuentes Google no funcionan en `file://`. Empaquetar WOFF2 locales.

---

## 🟢 LIMPIEZA (auditoria-extra.md)

- **I-04** — Borrar `patches/patches/` duplicado byte-a-byte de `patches/`.
- **I-06 / I-23 / I-27** — Borrar 6 archivos huérfanos del cache-bust hash abandonado: `index-1e31a0ff.html`, `fallback-data-a8e94bc7.js`, `style-53d8f154.css`, `icono-1fab3e2a.png`, `CLAUDE-563aaf3a.md`, `normas-8b479885.md`.
- **I-07** — Re-build Electron `dist-electron/` (5 días desactualizado).
- **I-09** — ~~Borrar `port/app/src/main/assets/index.desktop.bak.html`~~ ✅ HECHO commit `b96daa5`.
- **I-12 / I-13** — Borrar `app/` raíz y `test/` (código muerto duplicado).

---

## 📌 NO IMPLEMENTAR AUTOMÁTICAMENTE (decisión consciente)

- **Retroactividad de INT/CON:** recalcular puntos de habilidad y PG al subir INT/CON en niveles pasados. Requiere historial por nivel; el usuario lo hace a mano.
- **Slots corporales de objetos mágicos:** restricción de 1 objeto por slot. Sin datos de slot por objeto; el usuario gestiona.
- **Tirada de confirmación de crítico:** integrada en el flujo de combate — el usuario tira aparte.
- **Exclusión de daño de precisión/elemental en críticos:** requiere que el usuario marque qué dados no se multiplican.
- **Concentración integrada con CD contextual:** demasiadas situaciones; el usuario calcula la CD.

---

## 📊 Métricas

- **Pendiente mobile**: 8 motor combate + 5 motor conjuros + 6 auto-features + 5 paneles + 9 UX = **33 items, ~22h**.
- **Pendiente PC**: 11 bugs menores + ~7 patches/decisiones de producto.
- **Limpieza**: 8 acciones rápidas (1-2h).

## 🎯 Recomendación de orden

1. **Limpieza** (1-2h sin riesgo).
2. **Fase A motor combate mobile** (3-4h, alto impacto).
3. **Fase B motor conjuros mobile** (3h).
4. **Fase C auto-features mobile** (4h).
5. Resto a discreción.
