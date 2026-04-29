# Plan de Compañeros — Eidolon y Mejoras al Compañero Animal

Última actualización: 2026-04-29

Este documento es un **task list para revisar contigo**, no una propuesta cerrada. Está dividido en fases priorizadas. Tras tu visto bueno se ejecuta lo que decidas.

---

## Parte A — EIDOLON (nuevo, no existe en la ficha)

El eidolon es **mucho más complejo** que el compañero animal: tiene base form, evolution pool, evolutions seleccionables, subtipos, smaller variant para Master Summoner, modo Synthesist (fusionado), y diferencias entre summoner clásico y unchained.

### Fase 1 — Estructura básica de la sección (esencial)

- [ ] **Crear panel `<div id="eidolon-panel">`** debajo del Compañero Animal, colapsable.
- [ ] **Auto-mostrar/ocultar** según si el personaje tiene clase `summoner` o `unchained_summoner`.
- [ ] **Campos editables manualmente**:
  - Nombre del Eidolon
  - Forma base (Biped / Quadruped / Serpentine) — dropdown
  - Subtipo / Tipo de criatura (Outsider, Native, Augmented…)
  - Tamaño actual (Small/Medium/Large/Huge…)
  - Alineamiento (deriva del summoner)
- [ ] **6 atributos editables** (Str/Dex/Con/Int/Wis/Cha) con `mod` calculado.
- [ ] **HP máximo + tracker actual**.
- [ ] **AC editable** (con auto-cálculo opcional desde Dex + Natural Armor + tamaño).
- [ ] **Notas libres**.

### Fase 2 — Auto-cálculo desde nivel de summoner

- [ ] **HD del eidolon** (tabla por nivel: 1→1HD, 4→4HD, 7→7HD…) — fuente: PF1e Core Eidolon Base table.
- [ ] **BAB** del eidolon (igual a HD para summoner clásico, igual a HD para unchained también pero diferente progresión por base form).
- [ ] **Saves** (Fort/Ref/Will progresión por base form):
  - Biped: Fort poor / Ref poor / Will good
  - Quadruped: Fort good / Ref good / Will poor
  - Serpentine: Fort poor / Ref good / Will good
- [ ] **Skill points** (4 + Int mod por HD).
- [ ] **Feats** (1 + 1 cada 2 HD).
- [ ] **Natural Armor bonus** según tabla (varía por nivel y forma base).
- [ ] **Max attacks** (limita ataques naturales totales).
- [ ] **Evolution Points pool** (varía por nivel: 3 al nivel 1, +1 cada nivel siguiente, hasta 26 en nivel 20).

### Fase 3 — Catálogo de Evolutions + selector

Ingerir un `eidolon_evolutions.json` con todas las evolutions oficiales:
- [ ] **1 punto** (~25 evolutions): Bite, Claws, Climb, Gills, Improved Damage, Improved Natural Armor, Magic Attacks, Mount, Pincers, Pounce, Pull, Push, Reach, Resistance, Scent, Skilled, Slam, Slap, Sting, Swim, Tail, Tail Slap, Tentacle, Unnatural Aura, Wing Buffet
- [ ] **2 puntos** (~22): Ability Increase, Channel Resistance, Constrict, Energy Attacks, Flight, Gore, Grab, Immunity, Limbs, Mount (advanced), Poison, Rake, Rend, Rock Throwing, Trample, Trip, Weapon Training
- [ ] **3 puntos** (~10): Blindsense, Burrow, Damage Reduction, Frightful Presence, Major Magic, Swallow Whole, Web
- [ ] **4 puntos** (~9): Blindsight, Breath Weapon, Fast Healing, Large, Spell Resistance, Ultimate Magic
- [ ] **Cada evolution con**: nombre ES/EN, descripción ES/EN, costo, prereqs (HD mín, otra evolution requerida, base form requerido), stacking rules, source.
- [ ] **Selector UI** dentro del panel:
  - Lista de evolutions disponibles filtrada por HD/base form
  - Tarjetas de evolutions seleccionadas con coste visible
  - Contador EP usado / total
  - Botón "+ Add evolution"

### Fase 4 — Free Evolutions por base form

Cada base form trae evolutions gratis sin coste:
- [ ] **Biped**: Bite, Claws (×2), Limbs (×2 — arms/legs)
- [ ] **Quadruped**: Bite, Limbs (×4 — legs)
- [ ] **Serpentine**: Bite, Climb, Reach (Bite), Tail, Tail Slap

### Fase 5 — Soporte para Unchained Summoner

El unchained eidolon es ESTRUCTURALMENTE DIFERENTE: en lugar de Evolution Pool libre, elige un **subtipo** (Agathion, Angel, Archon, Azata, Daemon, Demon, Devil, Inevitable, Protean, Psychopomp, Asura, Daeva…) que da habilidades fijas en niveles HD específicos. El pool de EP queda reducido o eliminado para evolutions extra.

- [ ] Detectar si la clase es `unchained_summoner` y cambiar la UI a "subtipo + lista fija de habilidades por HD"
- [ ] `eidolon_subtypes.json` con cada subtipo + sus features por nivel
- [ ] El Evolution Pool del unchained es más reducido (~3, +1 cada 4 niveles) o se gasta solo en evolutions específicas

### Fase 6 — Synthesist (archetype)

Con archetype `synthesist`, el eidolon **fusiona con el summoner**: usa stats físicas del eidolon, mentales del summoner. Modo distinto.

- [ ] Detectar archetype `synthesist`
- [ ] Toggle "Eidolon fusionado" que reemplaza stats del personaje principal cuando está activo
- [ ] HP temporales del eidolon (fast healing efectivo)
- [ ] Evolutions reducidas en Pool

### Fase 7 — Master Summoner

Con archetype `master_summoner`, el eidolon es **una talla menor** y solo recibe ½ Evolution Pool, pero el summoner puede invocar más servidores.

- [ ] Aplicar penalizadores al pool y stats si archetype = master_summoner

### Fase 8 — Trackers y misc

- [ ] **Tracker de PG actual** (con bubbles al estilo del personaje)
- [ ] **Tracker de Daily Summon** (rondas/día restantes)
- [ ] **Lista de ataques naturales** (auto-poblada desde free evolutions + 1pt evolutions seleccionadas)
- [ ] **Skills** con ranks (4 + Int mod por HD, animal class skill list por defecto)
- [ ] **Inventario propio** (raro pero algunos eidolons llevan items)
- [ ] **Notas libres** y **Senses summary**

### Fase 9 — i18n + persistencia

- [ ] Todas las labels con `data-i18n`
- [ ] Todos los IDs deben aparecer en `exportData()` / `importData()` para guardar/cargar
- [ ] Bloque inline en `FALLBACK_DB` si añadimos `eidolon_evolutions.json` y `eidolon_subtypes.json`
- [ ] Replicar al port Android (regla CLAUDE.md)

### Fuentes de datos
- d20pfsrd Summoner: https://www.d20pfsrd.com/classes/base-classes/summoner/
- d20pfsrd Eidolon: https://www.d20pfsrd.com/classes/base-classes/summoner/eidolon/
- d20pfsrd Evolutions: https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/
- Pathfinder Unchained Summoner: https://www.d20pfsrd.com/classes/base-classes/summoner-unchained/

---

## Parte B — COMPAÑERO ANIMAL (mejoras a sección existente)

Lo que **YA está** en la ficha hoy:
- Nombre, tipo, tamaño, nivel del maestro, checkbox montura
- 6 atributos editables
- Stats calculadas: HD, HP, BAB, AC, Fort/Ref/Will, CMB, Feats
- Habilidades especiales con texto fijo (Evasión nv.3, Devoción nv.6, etc.)
- Skills con tabla de ranks
- Ataques naturales con contenedor
- Inventario

Lo que **falta o está flojo**:

### Fase 1 — Catálogo de templates de animal

- [ ] Crear `animal_companions.json` con plantillas de animales canónicos (cada uno trae su starting stats, ataques naturales, special abilities, skills):
  - Eagle, Bear (cave/grizzly/polar/etc), Big Cat (leopard/lion/cheetah/tiger), Bird (eagle/owl/raven), Boar, Camel, Crocodile, Dinosaur (compsognathus/deinonychus/velociraptor/triceratops…), Dog (riding/wolf), Elephant, Hippopotamus, Horse (heavy/light), Hyena, Pony, Roc, Shark, Snake (constrictor/viper), Velociraptor, Wolf
  - Para cada uno: HD inicial, BAB, saves, atributos, ataques naturales con damage, special abilities (scent/grab/trip/pounce), tamaño, AC base, skill bonuses raciales
- [ ] **Selector de template** que rellene auto los stats al elegir
- [ ] **Botón "Customizar"** que vuelva los campos editables tras pre-rellenar

### Fase 2 — Auto-aplicar mejoras estándar al subir HD

PF1e tiene una progresión estándar para cualquier animal companion: cada 1 HD aumenta atributos, AC, BAB. Hay que automatizar esto:

- [ ] **Tabla estándar de mejoras** por HD (1→14HD): cada milestone añade +1 Str/+1 Con/+1 Dex/+2 NA según la tabla "Animal Companion Base Statistics"
- [ ] **Auto-aplicar** estas mejoras como bonus visibles encima de los stats base del template
- [ ] **Bonificaciones de atributos por nivel del personaje** (cada 4 nv): elegir +1 a un atributo
- [ ] **Special abilities según HD efectivo**:
  - Link (1)
  - Share Spells (1)
  - Evasion (3)
  - Ability Score Increase (3, 6, 9, 12, 15, 18 — una +1)
  - Devotion (6)
  - Multiattack (9, OR un dote bonus)
  - Improved Evasion (15)
  - (las que ya están en la ficha como `<span>` deberían convertirse en cards activables con descripción y auto-toggle según HD)

### Fase 3 — Tricks (trucos)

- [ ] **Lista de tricks conocidos** (Attack, Come, Defend, Down, Fetch, Guard, Heel, Perform, Seek, Stay, Track, Work, etc.)
- [ ] **Counter "tricks known / max"** (max = 1 + Int mod del compañero, por nivel + dote Boon Companion etc)
- [ ] **Bonus tricks** según nivel (Combat Trained, Hunting, Riding…)
- [ ] **Catálogo de packages/tricks groups** preset (Riding, Fighting, etc.)

### Fase 4 — Mecánicas adicionales

- [ ] **Boon Companion** dote / **Eldritch Heritage (Sylvan)** etc — si están seleccionadas, ajustar HD efectivo
- [ ] **Hunter's Bond** (ranger): si el ranger comparte FE bonus, indicarlo
- [ ] **Druidic Bonus Spells** que afectan al compañero
- [ ] **Mount features** (carga, paso, mount-specific feats)
- [ ] Si `is-mount` está marcado: aplicar speed extra, cargo capacity, etc.

### Fase 5 — UI improvements

- [ ] Las "Habilidades Especiales" actuales son `<span>` estáticos — convertir en **cards interactivas** con descripción al click, con check de "ya desbloqueado por HD".
- [ ] Bubble-tracker para PG actual (ya hay HP max readonly, falta el current)
- [ ] Dropdown de skills con auto-añadir las skills clase del template (los animales tienen lista propia)
- [ ] Indicar el HD efectivo arriba del bloque cuando difiere del nivel del maestro (e.g., -3 si Hunter's Bond)

### Fase 6 — i18n + persistencia

- [ ] Verificar que todos los nuevos IDs entran en `exportData()` / `importData()`
- [ ] Labels con `data-i18n` (ya hay base, pero los nuevos hay que añadirlos)
- [ ] `animal_companions.json` con name_es/name_en por animal
- [ ] Replicar al port Android

---

## Decisiones que necesito de ti

1. **Eidolon Fase 1+2** (estructura básica + auto-cálculo) → **¿Empezamos por aquí?** Es la base mínima para que un summoner pueda usar la sección.

2. **Eidolon Fase 3** (catálogo de evolutions) → es mucho trabajo (~70 evolutions con texto bilingüe). ¿Las pides ahora con un agente o las dejamos para más tarde?

3. **Eidolon Fases 5-7** (Unchained, Synthesist, Master Summoner) → ¿qué prioridad? Si juegas casi siempre con summoner clásico, podemos diferirlas.

4. **Animal Companion Fase 1** (catálogo de templates) → muy útil para "elegir lobo" sin teclear todo. ¿Lo construimos?

5. **Animal Companion Fase 3** (tricks) → ¿lo necesitas o tu mesa no usa tricks formales?

6. **Animal Companion Fases 2/4** (auto-mejoras por HD, boon companion, etc.) → bastante mecánica. ¿Lo automatizamos o dejamos los stats editables a mano?

7. **Orden de ejecución**: ¿quieres que arranque por Eidolon Fase 1+2 o por Animal Companion Fase 1?

Marca las que quieras y avísame.
