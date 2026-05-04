# Auditoría · Ficha PC (`index.html`)

> Archivo auditado: `pathfinder-sheet/index.html` (~10500 líneas, single-file SPA con build script + fetch JSONs).
> Metodología: por feature → ¿qué quiere hacer el usuario? → ¿cómo debería hacerlo? → ¿cómo lo hace realmente? → ¿funciona end-to-end?
> Fecha: 2026-05-04.

**Leyenda estados**

- ✅ funciona end-to-end
- ⚠️ funciona pero confuso, parcial o con efectos secundarios
- ❌ no funciona
- 🆕 falta UI o feature entera

---

## 🔥 Top prioridad (bugs/limitaciones críticos)

| Ref | Severidad | Por qué |
|-----|-----------|---------|
| **A-13** | 🔴 ALTO | Añadir Weapon Focus desde catálogo NO autorrellena el +1 al ataque del arma. El jugador debe abrir cada arma y poner +1 a mano. Ídem Weapon Specialization, Greater. |
| **A-33 / A-34 / A-40** | 🔴 ALTO | Selectores de Escuela Arcana, Escuela Prohibida y Dominios prometen "+1 slot/nivel" en el texto de referencia, pero el motor de slots **NO lo aplica**. |
| **P-36 / P-38 / P-39** | 🔴 ALTO | Condiciones `helpless`, `pinned` y `flat-footed` (checkbox) **no producen efecto mecánico** en CA/DEX. |
| **A-44 / A-45 / A-53** | 🔴 ALTO | Paneles de Compañero Animal y Familiar siempre visibles; subir nivel druida o cambiar a wizard no autorrellena `comp-master-level`/`familiar-master-level`. |
| **E-49** | 🟡 ALTO | CMB no respeta encantamiento de arma equipada ni opción "Agile Maneuvers" (DES). |
| **E-25** | 🟡 ALTO | El motor toma el max de armaduras/escudos equipados pero **no impide** marcar "equipado" en varias a la vez (silencioso). |
| **T-10** | 🟡 ALTO | El JSON exportado no tiene `schemaVersion`. JSON viejos importados quedan con valores por defecto en campos nuevos sin warning. |
| **P-12** | 🟡 MEDIO | XP actual NO calcula nivel sugerido ni avisa "puedes subir nivel"; solo muestra umbral siguiente. |
| **P-44** | 🟡 MEDIO | No hay botones "+/− HP" rápidos ni campo "aplicar daño" — solo edición directa del input. |
| **P-45** | 🟡 MEDIO | Botones de descanso (corto/largo) están en la sección de Conjuros — UX confusa para PJ no lanzador. |
| **A-21 / A-36 / A-37 / A-38** | 🟡 MEDIO | Conjuros de linaje/misterio/patrono se muestran en texto pero no se inyectan automáticamente en lista de Conocidos; cambiar prep↔spont no migra entradas. |
| **T-22** | 🟡 MEDIO | Cambiar idioma NO retraduce cards dinámicas ya creadas (buff/weapon/feat/item) — quedan congeladas en el idioma de creación. |
| **T-16** | 🟡 BAJO | Sin atajos Ctrl+S / Ctrl+O. |
| **P-19** | 🟡 BAJO | No existe campo "Género". |
| **P-64** | 🟡 BAJO | No hay botones tirada para Fortaleza/Reflejos/Voluntad (sí existen para iniciativa, dispel, SR). |

---

## 1. Sección IDENTIDAD / ATRIBUTOS / HP / CA / SAVES / BAB / INIT / CMB / CMD

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| P-01 | Nombre PJ | ✅ | `#char-name` input texto, persistido por ID. | — |
| P-02 | Jugador | ✅ | `#char-player` input texto, persistido por ID. | — |
| P-03 | Raza (input libre) | ✅ | `#char-race` editable, persiste por ID. | — |
| P-04 | Picker de raza (🏷) | ✅ | `openRacePicker → buildRacePickerList → previewRace → confirmLoadRacialTraits` aplica nombre/velocidad/tamaño/mods raciales/anyBonus + bloquea inputs `*-racial`. | — |
| P-05 | Limpiar raza | ✅ | `clearRaceData()` resetea inputs racial y quita readonly. | — |
| P-06 | Multiclase (hasta 5) | ✅ | `addClassRow()` con `MAX_CLASS_ROWS=5`. Botón [+] se oculta al máximo. | — |
| P-07 | Selector de Clase | ✅ | `getClassOptHTML()` desde `DB.classes`; cambio repobla arquetipos + `recalc()` + `syncClassSkills()`. | — |
| P-08 | Selector de Arquetipo | ✅ | `populateArchetypeSelect()` filtra por `a.class === classKey`. | — |
| P-09 | Nivel por clase | ✅ | `#level{idx}` clase `recalc`; ejecuta `autoAddClassAbilities(old,new)`. | — |
| P-10 | Nivel total | ✅ | `#total-level` derivado en `calcClassProgression()`. | — |
| P-11 | XP track (lenta/media/rápida) | ✅ | `#xp-track` clase `recalc`. | — |
| P-12 | XP actual | ⚠️ | `#char-xp` no se usa para nada: solo escribe `xp-next`. Sin barra de progreso ni aviso "puedes subir nivel". | Indicador visual + aviso "level up disponible". |
| P-13 | XP siguiente nivel | ✅ | `XP_TABLES[track][totalLevel]`; nivel 20 muestra `xp.maxLevel`. | — |
| P-14 | Alineamiento (2 ejes LC + GM) | ⚠️ | Selects `char-alignment-lc/-gm` sin clase `recalc`. Funciona por listener global de `change`, frágil. | Añadir clase `recalc` o onchange directo. |
| P-15 | Deidad | ✅ | `#char-deity` input libre. Sin validación con dominios. | — |
| P-16 | Tamaño | ✅ | Desde `DB.sizes`. Cambio sugiere velocidad por defecto + `recalc()`. | — |
| P-17 | Edad (input numérico) | ⚠️ | No sincronizado con categoría — usuario puede poner edad=300 y categoría "Adulto". | Auto-set categoría según edad o warning. |
| P-18 | Categoría de edad → ajustes | ✅ | `ageMods` correctos: middle (-1F/+1M), old (-3F/+2M), venerable (-6F/+3M). | — |
| P-19 | Género | ❌ 🆕 | No existe campo. | Añadir `<input id="char-gender">` en header row2. |
| P-20 | Foto del personaje | ✅ | File input + `loadCharPhoto/setCharPhoto`. Bridge Android. Botón × para limpiar. | — |
| P-21 | Atributo Base (FUE/DES/CON/INT/SAB/CAR) | ✅ | `#${a}-base` editable. | — |
| P-22 | Aj. Racial | ✅ | Locked si raza cargada. | — |
| P-23 | Mejora (enhance) | ✅ | Suma en `calcAttributes()`. | — |
| P-24 | Inherente | ✅ ⚠️ | Suma. **Sin tope a +5** (regla PF1e Tomos/Manuales). | Validar máx +5. |
| P-25 | Misc (col. "Misc") | ⚠️ | Input se llama `${a}-misc2` (sufijo legacy). | Renombrar tras migrar exports. |
| P-26 | Temporal | ✅ | — | — |
| P-27 | Daño a atributo | ✅ | Resta del total para calcular `effective`. Mín 0. | — |
| P-28 | Drenaje a atributo | ✅ | Resta directo del total (afecta también puntuación). Mín 0. | — |
| P-29 | Total atributo | ✅ | base+racial+enhance+inherent+misc2+temp+age+buff−drain (+condStr/condDex/paralyzed). | — |
| P-30 | Modificador | ✅ | `floor((effective-10)/2)`. | — |
| P-31 | Edad → mods | ✅ | Ver P-18. | — |
| P-32 | Buffs sobre atributos | ✅ | `gatherBuffDeltas()` agrega solo el max por tipo. | — |
| P-33 | Cond. exhausted/fatigued → STR/DEX | ✅ | exhausted −6, fatigued −2 (mutuamente excluyentes). | — |
| P-34 | Cond. entangled/grappled → DEX | ✅ | −4 ambos. | — |
| P-35 | Cond. paralyzed → STR/DEX = 0 | ✅ | Forzado a 0. | — |
| P-36 | Cond. helpless → DEX = 0 | ❌ | NO se aplica. | Añadir a `calcAttributes` y `losesDex` en `calcEffectiveDex`. |
| P-37 | Cond. petrified → estatua | ⚠️ | Sin efecto mecánico. | Aplicar al menos efectos de unconscious. |
| P-38 | Cond. pinned → -4 CA + sin DEX | ❌ | No afecta CA ni DEX. | Añadir condAC −4 + forzar pierda DEX. |
| P-39 | Cond. flat-footed (checkbox) | ❌ | El checkbox no produce efecto. | Conectar para forzar uso de `acFlat` o eliminar. |
| P-40 | HP máximo (calc) | ✅ | Si todos los dados tirados: `Σmax(1, dado+conMod)`; si no: `Σ hp_per_level + conMod·HD`. + hp-misc + featHP + hpFeatBonus. | — |
| P-41 | HP actual | ✅ | Auto-inicializado al máximo. | — |
| P-42 | HP no letal | ⚠️ | No se compara con HP actual ni dispara warning de inconsciencia. | Validación + auto-toggle de cond-staggered/unconscious. |
| P-43 | HP temporales | ✅ | Mostrado en barra como overlay azul. | — |
| P-44 | Cura/Daño (acciones) | ⚠️ | No hay botones "+/− 1, ±5" ni campo "aplicar daño". | Añadir botones rápidos. |
| P-45 | Descansar (corto/largo) | ⚠️ | Funciona pero los botones están en la sección de Conjuros — UX confusa para PJ no lanzador. | Mover/duplicar al panel de PG. |
| P-46 | Tirar dados de HP (por nivel) | ✅ | `buildHPDice / rollHPDie / rollAllHPDice / updateHPFromDice`. Piso `max(1, dado+conMod)`. | — |
| P-47 | CA Total | ✅ | `10 + armor + shield + effDex + sizeMod + natArmor + deflect + dodge + condAC`. | — |
| P-48 | CA Toque | ✅ | Excluye armadura/escudo/natArmor. | — |
| P-49 | CA Desprevenido | ✅ | `effDexFlat = min(0, effDex)` excluye dodge. | — |
| P-50 | Bono Esquiva | ✅ | Suma `dodge-bonus` + dote Dodge (+1). | — |
| P-51 | Bono Desvío | ✅ | A CA Total y Toque. | — |
| P-52 | Armadura Natural | ✅ | A CA Total y Desprevenido (no Toque). | — |
| P-53 | Bono Armadura (de tarjetas equipadas) | ⚠️ | Toma el **máximo** de armaduras equipadas (silencioso). | Mostrar warning si >1 equipada. |
| P-54 | Bono Escudo | ⚠️ | Mismo patrón. | Ídem. |
| P-55 | Talla → CA/Atq | ✅ | `DB.sizes[sizeKey].ac_attack_mod`. | — |
| P-56 | Cond. → CA (blinded/cowering/stunned/unconscious/prone) | ✅ | −2 cada uno; prone −4 a CaC + nota "+8 vs distancia". | — |
| P-57 | Penalizador armadura/escudo a CMD | ⚠️ | CMD no incluye `condAC` (condiciones que reducen DEX no bajan CMD). | Aplicar `condAC` (o subset) a CMD. |
| P-58 | Save Fortaleza | ✅ | base + CON + items + misc + condSave + featBonus. | — |
| P-59 | Save Reflejos | ✅ | base + DEX (bruto) + items + misc + condSave + featBonus. | — |
| P-60 | Save Voluntad | ✅ | base + WIS + items + misc + condSave + featBonus. | — |
| P-61 | Save base por clase | ✅ | `floor(level/2)+2` good, `floor(level/3)` poor. Multiclase suma. | — |
| P-62 | Save base fraccional (Unchained) | ✅ | Toggle `#fractional-bab` aplica 0.5/1/3 + bono base 2 si alguna good. | — |
| P-63 | Saves: cond. miedo/sickened | ✅ | `condSave −2` por shaken/frightened/panicked y por sickened. | — |
| P-64 | Tirada de save (botón) | ❌ 🆕 | No hay botones para tirar Fortaleza/Reflejos/Voluntad. | Botón ⚂ por save. |
| P-65 | BAB total | ✅ | `floor(Σ levelᵢ × rateᵢ)`. Toggle fraccional acumula y trunca al final. | — |
| P-66 | BAB por arquetipo | ✅ | `arch?.bab \|\| cls.bab_progression`. | — |
| P-67 | Iniciativa total | ✅ | `mods.dex + init-misc + featBonus.init` (+4 Improved Initiative). Deafened −4. | — |
| P-68 | Iniciativa: tirada | ✅ | Botón `rollInitiative()` ⚂. | — |
| P-69 | CMB | ✅ | `bab + STR + sizeCMB + condCmb`. | — |
| P-70 | CMD | ⚠️ | No suma `condAC`, ni buffs `ac`/`dodge` (`applyActiveBuffs` solo escribe en `ac-total`/`ac-touch`). | Aplicar `condAC` y `deltas.ac` también a CMD. |
| P-71 | CMB/CMD por talla | ✅ | `cmb_cmd_mod` (small=−1, large=+1). | — |
| P-72 | Velocidad efectiva | ✅ | Reducción por armadura (heavy/medium → 30→20 / 20→15) y carga (cap 20; overload=0). Nota explicativa. | — |
| P-73 | Velocidad sugerida por talla | ✅ | Solo pisa si valor actual es default conocido. | — |
| P-74 | Cordones de Mula / Carga Hormiga / Cuadrúpedo | ✅ | Mula +8 STR, Hormiga ×3, Cuadrúpedo ×1.5 multiplicador. | — |
| P-75 | Buff `ac` no aplica a CA Desprevenido | ❌ | `applyActiveBuffs` actualiza `ac-total` y `ac-touch` pero no `ac-flat`. | Sumar `deltas.ac` también a `ac-flat` (con lógica de tipo). |
| P-76 | Refrescar Ficha (botón) | ✅ | `recalc() + buildHPDiceIfChanged()`. | — |
| P-77 | XP/HP/CA reactivos a cambio de raza | ✅ | Cascada `confirmLoadRacialTraits → recalc`. | — |
| P-78 | Subir nivel → HP/saves/BAB | ✅ | `change` en `level{idx}` invoca autoAddClassAbilities + recalc + buildHPDiceIfChanged. | — |
| P-79 | Equipar armadura → CA | ✅ | Cambio en `.armor-equipped` (clase recalc). | — |
| P-80 | Equipar escudo → CA | ✅ | `type === 'shield'` → `shieldACBonus`. | — |
| P-81 | Armadura rota → CA/ACP | ✅ | broken: ac/=2, acp×2. | — |
| P-82 | Cambio de raza no resetea atributos base | ✅ | Solo escribe en `*-racial`, no toca `*-base`. | — |
| P-83 | Multiclase: dote/HD/saves correctos | ✅ | Cada clase aporta bab/saves/HD/skills independientes. | — |

---

## 2. Sección APTITUDES (skills / dotes / class features / conjuros / compañeros)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| A-01 | Tabla de habilidades base (`buildSkillTable`) | ✅ | 2 columnas, IDs `sk-<id>-{ranks,cs,misc,attrmod,total,notes}`. | — |
| A-02 | Cálculo total por habilidad (`calcSkills`) | ✅ | rangos+attr+CS bonus(3 si rk>0)+ACP+misc+condiciones+buffs. Capa rangos a totalHD. | — |
| A-03 | Sub-skills (Conocimiento X / Saber X / Profesión X / Artesanía X / Actuar X) | ⚠️ | Knowledge tiene 10 entradas separadas; **Craft, Profession, Perform son una sola fila** sin selector de especialidad. | UI para añadir variantes con input de especialidad + ranks por instancia. |
| A-04 | Linguistics + idiomas (`addCustomLanguage`) | ✅ | Skill normal + panel de idiomas dinámico (`__lang_*`). | — |
| A-05 | Class skills auto (`syncClassSkills`) | ✅ | Cruza clases activas + arquetipos. Respeta override manual via `dataset.auto`. | — |
| A-06 | Skill points (`calcSkillPoints`) | ✅ ⚠️ | `(SP_clase + INT) × nivel`, mín 1. Respeta `archetype.skill_points`. **No suma punto humano por nivel.** | Sumar +1 SP/nivel humano + favored class. |
| A-07 | Picker de feats (`openFeatPicker`) | ✅ | Modal con filtro por categoría + lista alfa, preview con prereqs/desc. | — |
| A-08 | Añadir feat manual (`addFeat`) | ✅ | Tarjeta con name+type-select+notes+remove. | — |
| A-09 | Tipos de dote (normal/cbt/meta/crit/team) | ✅ | Selector funciona; teamwork va a panel separado. | — |
| A-10 | Contador de dotes (`updateFeatCounter`) | ⚠️ | `ceil(lvl/2)` + bonus fighter/cavalier/gunslinger/brawler `1+lvl/2` + wizard `lvl/5`. **No suma dote extra humano**, ni dote combate de monje, ni dotes de orden, ni `extra_feats` de arquetipos. | Sumar +1 humano + iterar `arch.extra_feats`/`bonus_combat_feats`. |
| A-11 | Validador de prerequisitos (`refreshFeatPrereqChips`) | ✅ | Chip ✓/⚠️/❓ con tooltip. Parsea attr/BAB/caster lvl/clase/skill/feat ref ES y EN. | — |
| A-12 | Bonus de dote → estadística (`getFeatBonuses`) | ✅ ⚠️ | Toughness/Great Fortitude/Lightning Reflexes/Iron Will/Improved Initiative/Dodge auto. **Faltan Skill Focus → +3/+6 a una skill nominada.** | Ampliar lista. |
| A-13 | **Weapon Focus → +Atq del arma** | 🔴⚠️ | El arma tiene `.weapon-atk-bonus` + checkbox que se suma. Es **manual**: añadir Weapon Focus NO autorrellena el +1. | Auto-detectar Weapon Focus / Specialization / Greater por nombre y aplicar +1/+2 al arma cuyo `weapon-name-inp` coincida. |
| A-14 | Picker de aptitudes especiales (`openFeaturePicker`) | ✅ | Filtro por clase. Permite establecer usos al añadir. | — |
| A-15 | Auto-añadir aptitudes por clase (`autoAddClassAbilities + CLASS_AUTO_FEATURES`) | ✅ | Trackers (rabia, smite, ki, ola, juicio, panache, grit) inyectados al alcanzar nivel. Recalc maxUses al cambiar nivel/atributo. Respeta `_autoFeaturesDismissed`. | — |
| A-16 | Aptitudes desde `special_abilities.json` | ✅ | Filtra por class_en/class + lvlunlock + arquetipo. Excluye `features_removed`. Parsea usos. | — |
| A-17 | Sync sheet manual (`openSyncSheet`) | ✅ | Lista lo que falta y lo añade selectivamente. | — |
| A-18 | Reset descanso corto (`restShort`) | ✅ | Solo aptitudes con `REST_RESET_KEY[key]==='short'` (ki, panache, bombs, inspiration, focus, grit, martial flex, bardic). | — |
| A-19 | Reset descanso largo (`restLong`) | ✅ | Resetea burbujas, slots de conjuro (`newDay`), HP→max, temp→0, fatigado→limpio, exhausto→fatigado. | — |
| A-20 | Build slots de conjuro (`buildSpellSlots`) | ✅ | 0-9 cajas con DC, perDay, burbujas restantes y secciones preparado/conocidos. | — |
| A-21 | Modo preparado/espontáneo (`setSpellMode`) | ✅ ⚠️ | Toggla `.sp-prepared-section` vs `.sp-known-section`. **Las dos colecciones son independientes**; cambiar de modo no migra entradas. | Botón "copiar a la otra lista" o aviso. |
| A-22 | Auto-set modo según clase | ✅ | Respeta marca manual del usuario. | — |
| A-23 | Auto-set atributo lanzador | ✅ | `dataset.manual='1'` evita machacar. | — |
| A-24 | Auto-rellenar perDay (`autoFillSpellSlots`) | ✅ | Toma la mejor clase con `spells_per_day`. | — |
| A-25 | Slots bonus por atributo | ✅ | +1 cuando `castMod >= lv/lv+4/lv+8/lv+12`. Badge `+N bonus`. | — |
| A-26 | CD de hechizo y concentración | ✅ | DC=10+lv+castMod. Concentración=CL+castMod. Penetración=1d20+CL+penFeat. | — |
| A-27 | Gating lanzador parcial (`updateCasterLevelGating`) | ✅ | Bloquea niveles inalcanzables. | — |
| A-28 | Añadir hechizo preparado (`addSpellEntry`) | ✅ | Tarjeta con escuela, detalles V/S/M/F/DF, casttime, range, target, duration, save, SR, source, metamagia. | — |
| A-29 | Añadir hechizo conocido (`addKnownSpell`) | ✅ | Sin checkbox de gasto. | — |
| A-30 | Metamagia (`toggleMetamagicChip`) | ✅ | Silent/Still/Extend/Empower/Maximize/Quicken con ajuste +N nivel. | — |
| A-31 | Burbujas de slots restantes | ✅ | Hasta 20 visibles, "+N" si más. Click toggla used/avail. | — |
| A-32 | Reset hechizos al descansar (`newDay`) | ✅ | Limpia `.expended`, restaura `sp-left`, repinta burbujas. | — |
| A-33 | **Selector de Escuela Arcana → +1 slot/nivel** | 🔴❌ | Inserta poderes y avisa de prohibidas, pero **NO añade el +1 slot**. El texto del ref lo promete pero el motor no lo aplica. | Sumar +1 a `sp-perday-${lv}` (1-9) cuando wizard tenga escuela seleccionada y modo preparado. |
| A-34 | **Escuela prohibida → bloqueo** | 🔴❌ | Las prohibidas se muestran como texto pero el cálculo de slots y la lista no impiden lanzar de esa escuela. | Filtrar opciones `SPELL_SCHOOLS` en `addSpellEntry` o pintar entrada con borde rojo si school prohibido. |
| A-35 | Selector de Linaje hechicero | ✅ | Visible si sorcerer/bloodrager. Muestra arcana + spells. Cambia limpio. | — |
| A-36 | Conjuros de linaje en lista | ⚠️ | Aparecen en texto de referencia pero **no se inyectan automáticamente** en lista de conocidos. | Botón "Añadir conjuros de linaje a Conocidos" o auto-inyectar al alcanzar nivel. |
| A-37 | Selector de Misterio Oráculo | ✅ ⚠️ | Inyecta revelaciones como cards. Mismo problema que A-36 con spells del misterio. | Igual que A-36. |
| A-38 | Selector de Patrono Bruja | ✅ ⚠️ | Visible si witch/shaman. Maléficos vía `addHexEntry`. Mismo problema. | Igual que A-36. |
| A-39 | Selector de Dominios | ✅ | Hasta 2 dominios; selectivo según arquetipo. Inyecta poderes con usos. Tabla domain-spells-ref Nv1-9. | — |
| A-40 | **Slot extra de dominio** | 🔴❌ | Tabla indica "(slot extra/nivel)" pero **no añade +1 slot real** al clérigo. | Sumar +1 por nivel 1-9 si hay clérigo con ≥1 dominio. |
| A-41 | Selector de Orden (Cavalier/Samurai) | ✅ | Filtra por classType, agrupa con `<optgroup>`. Inyecta poderes. Resuelve resolve bubbles para samurai. | — |
| A-42 | Trackers de combate clase (rabia, smite, ki, panache, grit, juicio, perdición) | ✅ | 47 entradas en `CLASS_AUTO_FEATURES` (incluye unchained, dragon_disciple, shadowdancer). Reset correcto. | — |
| A-43 | Aptitudes de arquetipo extra (`ARCHETYPE_AUTO_FEATURES`) | ⚠️ | Solo `champion_of_the_faith` hardcoded; resto via `special_abilities.json`+`features_gained`. Inconsistencia dual. | Migrar todo a JSON. |
| A-44 | **Compañero animal** (`calcAnimalCompanion`) | 🔴⚠️ | Cálculo robusto. **Pero panel siempre visible**, no se auto-muestra/oculta según clases. `comp-master-level` no autorrellena. | Implementar `updateCompanionVisibility()` con detección de clase + nivel. |
| A-45 | **Familiar** (`calcFamiliar`) | 🔴⚠️ | Cálculo correcto. **Panel siempre visible**, no se condiciona a wizard/witch/sorcerer/alchemist/oracle. | Visibility/auto-set similar a A-44. |
| A-46 | Eidolón (`recalcEidolon`, etc.) | ✅ | Panel se auto-muestra cuando summoner ≥ 1. Tabla EIDOLON_BASE_TABLE 1-20. Subtipo UC visible solo si unchained. Master_summoner/broodmaster/synthesist con modificaciones. | — |
| A-47 | Evoluciones eidolón | ✅ | Selector con filtros coste+búsqueda; UID único; total `ep-used / ep-total`. | Avisar visualmente cuando `used > total`. |
| A-48 | Criaturas invocadas (`addSummonedCreature`) | ✅ | Tarjeta editable completa. Persiste `__summoned_html`. | — |
| A-49 | Trucos de compañero | ✅ | Picker desde `animal_tricks.json` con DC + paquetes. | — |
| A-50 | Picker de raza | ✅ | Aplica mods raciales (incl. anyBonus libre), bloquea inputs. | — |
| A-51 | Tarjetas raciales manuales | ✅ | Botón "+ Trait" con escape HTML. | — |
| A-52 | Aptitudes raciales auto-pobladas | ⚠️ | Solo se inyectan desde el race picker; escribir el nombre en `char-race` no dispara sync. | Documentar o auto-disparar al detectar raza conocida. |
| A-53 | Cambio nivel druida → compañero animal | 🔴❌ | No muestra/oculta el panel ni autorellena nivel. Hay que hacerlo a mano. | Implementar A-44. |
| A-54 | Cambio escuela mago → slot extra | 🔴❌ | Ver A-33. | — |
| A-55 | Cambio escuela mago → escuela prohibida | 🔴⚠️ | Ver A-34. | — |
| A-56 | Cambio preparado ↔ espontáneo → lista cambia | ✅ | `setSpellMode` togglea correctamente. | OK, ver A-21. |
| A-57 | Cambio de modo dispara recálculo de slots | ✅ | El cambio no toca `sp-perday-${lv}`. | — |

---

## 3. Sección EQUIPO (armas / armadura / escudo / inventario / monedas / peso / carga)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| E-01 | Picker de armas (lista DB) | ✅ | `openWeaponPicker` puebla desde `DB.equipment.weapons`. Search filter. | — |
| E-02 | Crear arma manual | ✅ | `addWeapon()` con `data={}`. Drag&drop activo. | — |
| E-03 | Selector estilo (melee/finesse/ranged/composite/offhand) | ✅ | 5 opciones. Composite/ranged muestran/ocultan campos. Legacy `melee1h/melee2h` normalizado. | — |
| E-04 | Toggle 1M/2M | ✅ | `syncHands` exclusivo. | — |
| E-05 | STR a daño según mano | ✅ | 1H = STR; 2H = floor(STR×1.5); offhand = floor(STR×0.5); ranged = min(0,STR); composite cap. | — |
| E-06 | Atributo de ataque (DES en finesse/ranged/composite) | ✅ | — | — |
| E-07 | +Atq nuevo (Weapon Focus) con toggle | ✅ | Input `.weapon-atk-bonus` + checkbox. Tooltip i18n. | — |
| E-08 | +Dmg manual | ✅ | `.weapon-dmg-bonus`. | — |
| E-09 | Encantamiento (+enhance) | ✅ | A wAtk y wDmg. | — |
| E-10 | Dado de daño | ✅ | `parseDiceExpr` calcula min/max y muestra `1d8+5 (6-13)`. | — |
| E-11 | Crítico (rango y multiplicador) | ✅ | broken fuerza ×2. | — |
| E-12 | Tipo de daño texto + chips B/P/S/elemental | ✅ | `seedDamageTypesFromDB` autocarga. Persiste en `data-damageTypes`. | — |
| E-13 | Marcado "Roto" | ✅ | −2 atq, −2 dmg, crit ×2 forzado. Armadura: AC/2, ACP×2. | — |
| E-14 | Munición ranged/composite | ⚠️ | Inputs visibles pero **no se decrementa al tirar ataque**. | Decrementar en `rollWeaponAttack` o botón "−1 munición". |
| E-15 | Tirada de ataque (`rollWeaponAttack`) | ✅ | Anima 700ms, marca nat 20 / pifia. | — |
| E-16 | Tirada de daño normal | ✅ | `count×dN+mod`, mín 1. | — |
| E-17 | Tirada de daño crítico | ✅ | `actualCount = count*mult`; trait Mortal +1d8. | — |
| E-18 | Copy Discord (atk/dmg) | ⚠️ | Para atq incluye iterativo `1d20+8/+3/-2` (no válido en bots `/roll`). Para dmg incluye `(6-13)`. | Limpiar formato. |
| E-19 | Traits PF1e (chips) | ✅ | `WEAPON_TRAITS` con `toggleTrait`; efectos en `weapon-trait-effects-row`. | — |
| E-20 | Trait Ágil (DES en lugar de FUE al daño) | ✅ | — | — |
| E-21 | Trait Mortal | ✅ | Solo activa en crítico. | — |
| E-22 | Trait custom | ✅ | `addCustomTrait` añade chip eliminable. | — |
| E-23 | Picker de armadura/escudo (filtro tipo) | ✅ | `openArmorPicker + filterArmorList`. | — |
| E-24 | Crear armadura manual | ✅ | Select tipo (none/light/medium/heavy/shield) + campos. | — |
| E-25 | Equipar 1 cuerpo + 1 escudo | ⚠️ | Toma el max si hay >1 equipado, pero **no impide marcar varias**. | Avisar visualmente cuando >1. |
| E-26 | Bono CA armadura | ✅ | `armorACBonus` con reducción ½ si rota. | — |
| E-27 | Bono CA escudo | ✅ | `shieldACBonus` separado en `#shield-bonus`. | — |
| E-28 | Max DES armadura | ✅ | `armorMaxDex` toma el menor. | — |
| E-29 | ACP a habilidades FUE/DES | ✅ | 10 habilidades flagged: acrobatics/climb/escape_artist/fly/ride/sleight_of_hand/stealth/swim. | — |
| E-30 | Fallo de conjuros arcanos | ✅ | Suma por equipada; deafened +20%. | — |
| E-31 | Equipar armadura pesada → reduce velocidad | ✅ | `armorReducesSpeed` + tabla PF (30→20, 20→15) + nota. | — |
| E-32 | Picker de objetos generales | ✅ | Filtro categoría (potions/gear); preview con efecto y precio. | — |
| E-33 | Inventario manual (`addItem`) | ⚠️ | Solo nombre/cant./peso/notas/checkbox mágico. **No existen "Contenedor" ni "Identificado"**. | Añadir `<select class="item-container">` y `<input type="checkbox" class="item-identified">`. |
| E-34 | Peso total inventario | ✅ | Sumas correctas (incl. companion items). | — |
| E-35 | Carga magic items con burbujas | ✅ | `toggleMagicCharges` + `rebuildMagicBubbles`. | — |
| E-36 | Monedas pp/po/pe/pc + gemas | ✅ | Total en po: cp×0.01 + sp×0.1 + gp + pp×10 + gems. | — |
| E-37 | Peso monedas (50/lb) | ✅ | Gemas no pesan (correcto PF1e). | — |
| E-38 | Capacidad de carga (STR + tamaño) | ✅ | `100 × 2^(0.2(STR-10)) × sizeMult`. | — |
| E-39 | Modificador cuadrúpedo | ✅ | `sizeMultiplier *= 1.5` (cuadrúpedo cuenta como 1 categoría mayor). | — |
| E-40 | Cordones de Mula (+8 STR efectiva) | ✅ | — | — |
| E-41 | Carga Hormiga (×3) | ✅ | — | — |
| E-42 | Estados ligera/media/pesada/sobrecarga | ✅ | Cap DES (3/1/0), ACP (−3/−6/−6), velocidad capada a 20 ft o 0. | — |
| E-43 | STR cambia → peso transportable | ✅ | Cualquier edit en attr-tbody dispara recalc. | — |
| E-44 | Activar Ataque Poderoso modifica atq y daño | ✅ | `paPenalty = -(1+floor(BAB/4))`; aplica solo a no-ranged: dmg += |pa|×(3 si 2H, 1 si offhand, 2 normal). | — |
| E-45 | Activar Puntería Mortal | ✅ | Análogo: solo a ranged, dmg ×2. | — |
| E-46 | TWF aplica −2/−2 (mejorada), −2/−6, −4/−8 | ✅ | `twfMain/twfOff` según `twf-level`. Ranged exento. | — |
| E-47 | TWF UI muestra/oculta selector nivel | ✅ | onchange inline. | — |
| E-48 | Penalizadores condición a ataque | ✅ | hasFear/sickened/entangled/grappled/dazzled aplicados. Prone −4 melee. | — |
| E-49 | **CMB / CMD** | 🟡⚠️ | `cmb = bab + STR + sizeCMB + condAtk`. **No incluye encantamiento de arma equipada**, ni opción "Agile Maneuvers" (DES). CMD no aplica enc penalty. | Bono per-weapon (sunder/disarm con encantamiento) + opción Agile Maneuvers. |
| E-50 | Maniobras específicas (sunder/disarm/trip/grapple) | ⚠️ | Solo traits informativos; **no hay botones tirada CMB específicos por maniobra**. | Botones `[Tirar Desarme]` con `cmb + traitBonus`. |
| E-51 | Display "Bono Escudo" | ✅ | `#shield-bonus`. | — |
| E-52 | Persistencia HTML armas/armaduras/items | ✅ | `__weapons_html`, `__items_html`, `__comp_items_html`. | — |
| E-53 | Re-cálculo automático (clase `.recalc`) | ✅ | Listener delegado `input/change`. | — |
| E-54 | Eliminar tarjeta (botón ×) | ✅ | Listener delegado. | — |
| E-55 | Drag & drop reordenar armas/armaduras | ✅ | `initDragSort`. | — |
| E-56 | Indicador "no equipada" (opacidad) | ✅ | 0.6. | — |
| E-57 | Texto "rota" en arma da −2/−2 y crit ×2 | ✅ | Ver E-13. | — |
| E-58 | Pifia (1) y crit nat (20) en tirada atq | ✅ | Marca con clases + texto i18n. | — |
| E-59 | Toque mágico section UI | ⚠️ 🆕 | Existe `#touch-attacks-section` pero **no hay función que lo pueble** ni botón añadir. Sección huérfana. | Implementar `addTouchAttack()` o eliminar el bloque. |
| E-60 | Gemas suman valor pero no peso | ✅ | Coincide con regla PF (peso ya incluido en bolsa). | — |
| E-61 | Sobrecarga → velocidad 0 | ✅ | — | — |
| E-62 | Ammo display oculto cuando no aplica | ✅ | — | — |
| E-63 | Composite STR cap | ✅ | Si STR≥0 y cap>0, `dmgStat = min(STR, cap)`; STR<0 aplica completa. | — |
| E-64 | i18n etiquetas equipo (ES/EN) | ✅ | `w.atkBonus`, `tt.atkBonusFeats`, etc. | — |

---

## 4. Sección TRANSVERSAL (buffs / condiciones / iniciativa / notas / persistencia / impresión / i18n / temas / master mode)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| T-01 | Buffs legacy (`buffs-container` + `gatherBuffDeltas`) → afectan recalc | ✅ | `addBuff` crea `.buff-card` con stat/value/type. Cumple regla bonos tipados (no apilan, MAX); untyped/dodge sí apilan. | — |
| T-02 | Buff +2 STR → propaga a daño/atq de armas | ✅ | El delta se inyecta antes de calcCombat/calcSkills/weapons. | — |
| T-03 | **Buff Tracker temporal (`__buff_tracker`)** | ⚠️ | Panel funcional (añadir, expandir, decremento por ronda/min, expirar). **Comentario explícito: "Does not feed into recalc()"**. Los `btr-bonus`/`btr-target` son cosméticos: marcar +2 ATK NO afecta CA/ataques. | Documentar en UI O cablearlo a `gatherBuffDeltas` cuando active && remaining>0. |
| T-04 | Condiciones PF1e (`PF1E_CONDITIONS`) | ✅ | `getConditionsState/setConditionsState`, chips clickables, `clearAllConditions`, `initConditionsTimer` cablea cambios → recalc. | — |
| T-05 | Condiciones que mutan stats (fatigado/extenuado/aprisionado/agarrado/paralizado) | ✅ | `calcAttributes` ajusta STR/DEX correctamente. | — |
| T-06 | Iniciativa: `_combatState` (añadir/eliminar/duplicar/ordenar/siguiente turno/reset) | ✅ | Avanza ronda al volver al primero. HP por combatiente, acciones (Std/Move/Swift), grupos, importar PJ. | — |
| T-07 | Notas de sesión (combat/campaign/session) y log | ✅ | `saveCurrentNote`, `renderNotesList`, `_refreshAllNotesUI`. Persistido en `__notes_data` y `__session_log`. | — |
| T-08 | Persistencia JSON: export | ✅ | `exportData()` recorre todos `input/select/textarea` por id; serializa HTML dinámicos, conditions estructuradas, buff tracker, combat tracker, char-photo, weaknesses, dismissed features, hp dice. Bridge nativo Android. | — |
| T-09 | Persistencia JSON: import | ✅ | `importData(event)` restaura todo + reaplica `recalc()` al final. | — |
| T-10 | **Schema versioning del JSON de personaje** | 🟡🆕 | No existe campo `schemaVersion`/`version`. Cada nuevo `__*_html` se añade ad-hoc. JSON viejo importado queda con valores por defecto sin warning. | Añadir `data.__schema=N` y un `migrate(data)` previo. |
| T-11 | Import recupera FCB Eidolón + invocador | ✅ | IDs `eid-fcb-eid-hp/skill`, `eid-fcb-hp/skill` cogidos por loop genérico. | — |
| T-12 | Import recupera elemento del Eidolón Elemental (`eid-elemental-choice`) | ✅ | Restaurado por loop genérico. Visibilidad recalculada vía `updateEidolonVisibility()`. | — |
| T-13 | Import recupera evoluciones del Eidolón (multi-select) | ✅ | `__eid_evolutions` JSON-stringify de `_eidolonSelectedEvos`. | — |
| T-14 | Import recupera +Atq de armas | ✅ | `weapon-atk-bonus` y `weapon-atk-bonus-on` viven dentro de `__weapons_html`. | — |
| T-15 | LocalStorage no guarda personaje (solo config) | ✅ | Solo: pf1e-theme/lang/master-mode/cyber-mode/cyber-sound/feedback-entries/group-state, __chromancer_themes. | — |
| T-16 | **Atajos de teclado (Ctrl+S guardar / Ctrl+O cargar)** | 🟡❌ | No existen. Solo Esc cerrar modales, Enter en buscador, Ctrl+Enter en Chromancer. | Añadir `if(ctrl+s){preventDefault(); exportData();}` y Ctrl+O → click(`#import-file`). |
| T-17 | Impresión: `@media print` y `@page A4` | ✅ | Define `@page A4 portrait`, fuerza grid 2-cols, expande secciones colapsadas, oculta panels de sesión. | — |
| T-18 | Impresión expande TODAS las secciones | ✅ | `.collapsible-body.hidden { display:block !important; }`. | — |
| T-19 | Impresión: foto del personaje sale | ✅ | `.char-photo-wrap { align-self:center }`. | — |
| T-20 | I18N: cambio ES↔EN aplica al DOM estático | ✅ | `applyI18n` recorre `[data-i18n]`, `[data-i18n-ph]`, `[data-i18n-title]`, `[data-i18n-aria]`. | — |
| T-21 | I18N: re-render de tablas/cards dinámicas tras cambio | ✅ | `setLanguage` re-llama buildAttrTable/buildSkillTable/buildSpellSlots/etc. y reabre pickers. | — |
| T-22 | **I18N: cards generadas (buff/weapon/feat/item) NO se re-traducen** | 🟡⚠️ | Quedan congeladas en el idioma de creación. Solo iniRender reconstruye. | Hook en `setLanguage`: aplicar `applyI18n` a cards existentes o reconstruir. |
| T-23 | I18N persistencia | ✅ | `localStorage.pf1e-lang`. | — |
| T-24 | Temas: registro de 14 built-in | ⚠️ | `THEMES` tiene 14 (incluye `dape`); `CLAUDE.md` declara 13. Desfase documental. | Actualizar `CLAUDE.md`. |
| T-25 | Temas: aplicar/persistir | ✅ | `applyTheme(id)` set/remove `data-theme` + localStorage. Snippet en `<head>` hidrata antes del primer paint. | — |
| T-26 | Temas Chromancer custom | ✅ | `addCustomThemeFromCss`, persistencia en `__chromancer_themes`. Modal añadir, swatch dinámico, borrado. | — |
| T-27 | Modo Cyberpunk | ✅ | Toggle CY guarda `pf1e-cyber-mode`, lazy-load de overlay CSS, `data-cyber="on"`. | — |
| T-28 | **Modo Demo** (`demo-fx.js`, `demo-loader.js`, `demo.css`) | ❌ | Archivos en disco pero `index.html` (PC) **NO los referencia**. Solo se usan en `Demo Efectos.html`. | Añadir loader condicional o eliminar archivos huérfanos. |
| T-29 | Discord roll integration | ✅ | `copyDiscordRoll(btn,'atk'\|'dmg')` + botones 📋. | — |
| T-30 | Master Mode: oculta tracker iniciativa + buff tracker | ✅ | Togglea `master-hidden` en ambos paneles. CSS `display:none !important`. | — |
| T-31 | Master Mode: persistencia | ✅ | `pf1e-master-mode` set '1'/'0'. Default OFF. | — |
| T-32 | Eventos personalizados `lang-changed`/`theme-changed`/`master-changed` | ❌ | NO se dispara ningún CustomEvent. Plugins externos deben observar `data-theme` con MutationObserver. | Añadir dispatchEvent para extensibilidad. |
| T-33 | Picker global de búsqueda (`#global-search`) | ✅ | Indexa data-i18n ES/EN, placeholders, titles, aria, options, labels. ↑↓/Enter, scroll + flash al destino, expande panels colapsados. Re-indexa en focus/recalc/setLanguage/iniRender/buildSpellSlots. | — |
| T-34 | Foto del personaje | ✅ | dataURL en `__char_photo`. Botón × para borrar. Bridge Android `pickPhoto` + file input. | — |
| T-35 | Bug-finder / panel diagnostic | 🆕 | No existe. Lo más cercano: `#warnings-panel` y modal Feedback. | (Opcional) panel debug con _combatState, btrSerialize(), getConditionsState(), warnings de consola. |
| T-36 | Footer Guardar/Cargar accesibles desde UI | ✅ | Botón export + input file import. Sin atajos de teclado (T-16). | — |
| T-37 | `recalc()` se llama tras todas las operaciones críticas | ✅ | Tras importar, cambiar idioma, toggle buff, conditions chip, add comp item. | — |
| T-38 | Cross: `dape` tema vs `CLAUDE.md` (declara 13) | ⚠️ | Inconsistencia documental. Ver T-24. | Sync. |

---

## ⚠️ NO investigado (queda fuera de esta auditoría)

Los siguientes bloques no se cubrieron en este pase. Si quieres que los audite también, dilo:

- **Auto-cyberpunk-fx**: efectos cyberpunk activables (`cyberpunk-fx.js`, `cyberpunk-loader.js`, `cyberpunk-mode.css`, `cyberpunk-overlay.css`). Solo se confirmó que el toggle persiste (T-27); no se probaron los 13 efectos visuales individuales.
- **Modo "Demo Efectos"** (archivo `Demo Efectos.html`): es una página separada con su propio script (`demo-fx.js`). No se auditó.
- **Patches `Ficha/patches/P-*.patch.md`**: no se contrastó si todos los anchors `#ANCHOR:P*-NAME-V1` siguen vivos en el código actual.
- **`bug-finder.html`** (si existe): no se buscó.
- **Build script de cache-bust**: `index-1e31a0ff.html`, `fallback-data-a8e94bc7.js` sugieren un build con hash. No se verificó qué proceso lo genera ni si está actualizado.
- **Versión Electron** (`dist-electron/`): no se auditó si el build empaquetado está alineado con `index.html` actual.
- **i18n in-flight** durante una operación (cambiar idioma mientras un modal está abierto, mientras una tirada está rodando): no se probó.
- **Edge cases del export**: ficha con 5 clases multiclase + 50 dotes + 100 hechizos + 30 buffs activos: no se midió rendimiento ni tamaño del JSON.
- **Compatibilidad import vieja↔nueva**: no se cargó un JSON de hace 6 meses para ver qué se pierde.
- **Pickers de raza extendidos**: solo se contrastaron los 12 listados; no las del catálogo completo (RACES_DATA tiene más).
- **Combinaciones específicas de arquetipos** (Master Summoner + Synthesist, etc.): no se probaron.
- **Nivel 21+** (Mythic, Gestalt): no se auditó si están soportados.
- **Trampas de los pickers**: tap rápido / doble click / mantener pulsado en mobile-emulation.
- **Casos de import malformado** (JSON corrupto, JSON con campos extra, JSON parcial): no se verificó qué hace.

---

## Resumen numérico

| Estado | P (83) | A (57) | E (64) | T (38) | **TOTAL (242)** |
|---|---|---|---|---|---|
| ✅ | 67 | 39 | 51 | 28 | **185** (76%) |
| ⚠️ | 11 | 14 | 11 | 6 | **42** (17%) |
| ❌ | 4 | 4 | 0 | 3 | **11** (5%) |
| 🆕 | 1 | 0 | 1 | 1 | **4** (2%) |

> La PC está significativamente más madura que la mobile (76% ✅ vs 59% ✅ en mobile). Los ❌ son principalmente: 3 condiciones sin efecto mecánico (helpless/pinned/flat-footed), Weapon Focus no automático, Slot extra escuela/dominio no aplicado, sin atajos teclado, Modo Demo huérfano, sin CustomEvents.

## Próximos pasos sugeridos (orden ideal)

1. **A-13** — Auto-aplicar Weapon Focus / Specialization al `+Atq` del arma por nombre.
2. **A-33 / A-34 / A-40** — Slot extra de Escuela Arcana y Dominio (ahora prometido pero no aplicado).
3. **P-36 / P-38 / P-39** — Cumplir efectos PF1e de helpless / pinned / flat-footed.
4. **A-44 / A-45 / A-53** — Auto-mostrar/ocultar paneles Compañero Animal y Familiar; auto-rellenar nivel.
5. **E-49** — CMB con encantamiento de arma + opción Agile Maneuvers.
6. **T-22** — Re-traducir cards dinámicas al cambiar idioma.
7. **T-10** — Añadir `schemaVersion` al JSON exportado + migrate().
8. **T-16** — Atajos Ctrl+S / Ctrl+O.
9. **P-12** — XP avisa "puedes subir nivel".
10. **P-44** — Botones rápidos +/− HP en panel.
11. **A-21 / A-36 / A-37 / A-38** — Inyección de spells de linaje/misterio/patrono en Conocidos.
12. **P-19** — Campo Género.
13. **P-64** — Botones tirada Fortaleza/Reflejos/Voluntad.
14. **T-24** — Sync `CLAUDE.md` (14 temas, no 13).
15. **T-28** — Decidir destino del Modo Demo (integrar o eliminar).
16. **E-25** — Avisar si >1 armadura/escudo equipada.
17. **E-50** — Botones tirada por maniobra (sunder/disarm/trip/grapple).
18. **A-12** — Auto-aplicar Skill Focus +3/+6 a la skill nominada.
19. **E-59** — Implementar `addTouchAttack()` o eliminar el bloque huérfano.

Resto de ⚠️ por orden de uso real.
