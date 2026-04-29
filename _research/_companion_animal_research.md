# Pathfinder 1e — Animal Companion: Referencia Completa

> Documento de investigación para la implementación en la ficha HTML bilingual ES/EN.
> Fuentes verificadas: d20pfsrd.com, aonprd.com. Última actualización: 2026-04-29.

---

## Tabla de Contenidos

1. [Mecánica base](#1-mecánica-base)
2. [Tabla de progresión estándar](#2-tabla-de-progresión-estándar)
3. [Special abilities desbloqueadas por nivel](#3-special-abilities-desbloqueadas-por-nivel)
4. [Catálogo de templates de animal](#4-catálogo-de-templates-de-animal)
5. [Tricks (trucos)](#5-tricks-trucos)
6. [Archetypes y dotes que afectan al compañero](#6-archetypes-y-dotes-que-afectan-al-compañero)
7. [Mount-specific (paladín / cavalier / pony)](#7-mount-specific-paladín--cavalier--pony)
8. [Equipo y barding](#8-equipo-y-barding)
9. [Schemas JSON sugeridos](#9-schemas-json-sugeridos)
10. [Lista de campos UI necesarios](#10-lista-de-campos-ui-necesarios)

---

## 1. Mecánica base

### ¿Quién obtiene compañero animal?

| Clase | ¿Cuándo? | Nivel efectivo de druida |
|-------|----------|--------------------------|
| **Druid** | 1er nivel | = nivel de druida |
| **Hunter** | 1er nivel | = nivel de hunter |
| **Ranger** (Hunter's Bond) | 4o nivel | = nivel ranger − 3 |
| **Cavalier** (Mount) | 1er nivel | = nivel de cavalier |
| **Paladin** (Divine Bond — Mount) | 5o nivel | = nivel de paladín |
| **Inquisitor — Sacred Huntsmaster** (archetype) | 1er nivel | = nivel de inquisitor |
| **Ranger — Beastmaster** (archetype) | como ranger | = nivel ranger − 3 (hasta 12o), luego = nivel |
| **Druid — Beastmaster** (archetype) | ver arquetipo | divide ED entre múltiples compañeros |
| **Witch** (hexes Animal Skin / Animal Servant) | ver hexes | [VERIFICAR] hex de gran poder |

**Fuente:** https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/

### Nivel efectivo del compañero (Effective Druid Level — EDL)

La tabla de progresión del compañero (sección 2) usa el **nivel efectivo de druida** del dueño.

```
EDL = nivel de clase base (ver tabla arriba)
     + Boon Companion feat (+4, máx = nivel de personaje total)
     + stacking de múltiples clases con compañero
```

- Los niveles de **todas** las clases con derecho a compañero animal se suman para el mismo compañero.
- Ejemplo: Druid 5 / Ranger 4 → EDL = 5 + 1 = 6 (solo el ranger aporta nivel−3 = 1).
- **Boon Companion**: sube el EDL +4, hasta un máximo igual al nivel total del personaje.

### Características base del compañero

- **Inteligencia mínima:** 1 (animales estándar). Algunos tienen Int 2.
- **Idiomas:** El compañero animal no habla idiomas (Int 1–2). No tiene.
- **Alineamiento:** Igual al druida o neutral (no puede ser más extremo que el dueño en la mayoría de casos). [VERIFICAR regla exacta]
- **Class skills del compañero (base):** Acrobatics, Climb, Fly, Perception, Stealth, Swim. Más los propios del template racial.
- **Skill ranks por nivel de HD:** Igual a la tabla de progresión (ver sección 2). Se distribuyen en las skills de clase.
- **Save progression:** good Fort + good Ref + poor Will (estándar). Algunos templates modifican esto.
- **BAB progression:** Igual a la tabla de progresión.

---

## 2. Tabla de progresión estándar

**Animal Companion Base Statistics**
Fuente: https://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/

> **Nota:** Los bonos de Nat Armor y Str/Dex son **adicionales** a los del template base.
> Los Skills se suman acumulativamente (son totales disponibles desde 1o, no por nivel).
> "Bonus Tricks" son tricks gratuitos que no cuentan contra el límite de Int.

| EDL | HD | BAB | Fort | Ref | Will | Skills (total) | Feats | +Nat Armor | +Str/Dex | Bonus Tricks | Special |
|-----|----|-----|------|-----|------|----------------|-------|------------|----------|--------------|---------|
| 1 | 2 | +1 | +3 | +3 | +0 | 2 | 1 | +0 | +0 | 1 | Link, Share Spells |
| 2 | 3 | +2 | +3 | +3 | +1 | 3 | 2 | +0 | +0 | 1 | — |
| 3 | 3 | +2 | +3 | +3 | +1 | 3 | 2 | +2 | +1 | 2 | Evasion |
| 4 | 4 | +3 | +4 | +4 | +1 | 4 | 2 | +2 | +1 | 2 | Ability Score +1 |
| 5 | 5 | +3 | +4 | +4 | +1 | 5 | 3 | +2 | +1 | 2 | — |
| 6 | 6 | +4 | +5 | +5 | +2 | 6 | 3 | +4 | +2 | 3 | Devotion |
| 7 | 6 | +4 | +5 | +5 | +2 | 6 | 3 | +4 | +2 | 3 | — |
| 8 | 7 | +5 | +5 | +5 | +2 | 7 | 4 | +4 | +2 | 3 | — |
| 9 | 8 | +6 | +6 | +6 | +2 | 8 | 4 | +6 | +3 | 4 | Ability Score +1, Multiattack |
| 10 | 9 | +6 | +6 | +6 | +3 | 9 | 5 | +6 | +3 | 4 | — |
| 11 | 9 | +6 | +6 | +6 | +3 | 9 | 5 | +6 | +3 | 4 | — |
| 12 | 10 | +7 | +7 | +7 | +3 | 10 | 5 | +8 | +4 | 5 | — |
| 13 | 11 | +8 | +7 | +7 | +3 | 11 | 6 | +8 | +4 | 5 | — |
| 14 | 12 | +9 | +8 | +8 | +4 | 12 | 6 | +8 | +4 | 5 | Ability Score +1 |
| 15 | 12 | +9 | +8 | +8 | +4 | 12 | 6 | +10 | +5 | 6 | Improved Evasion |
| 16 | 13 | +9 | +8 | +8 | +4 | 13 | 7 | +10 | +5 | 6 | — |
| 17 | 14 | +10 | +9 | +9 | +4 | 14 | 7 | +10 | +5 | 6 | — |
| 18 | 15 | +11 | +9 | +9 | +5 | 15 | 8 | +12 | +6 | 7 | — |
| 19 | 15 | +11 | +9 | +9 | +5 | 15 | 8 | +12 | +6 | 7 | — |
| 20 | 16 | +12 | +10 | +10 | +5 | 16 | 8 | +12 | +6 | 7 | Ability Score +1 |

### Cómo calcular las stats finales del compañero

```
AC final = 10 + Dex mod (base) + Nat Armor (template) + Nat Armor bonus (tabla) + armor (barding) + otros
BAB final = BAB de la tabla
Fort = base tabla + Con mod
Ref  = base tabla + Dex mod
Will = base tabla + Wis mod
Str  = Str base (template) + bono Str de tabla (en los avances)
Dex  = Dex base (template) + bono Dex de tabla (en los avances)
HP   = HD × (tamaño de dado del tipo + Con mod) + PF de Constitution
Ataques = BAB + Str mod (melé) o BAB + Dex mod (a distancia) + bonos de tamaño
```

> Los bonos de Str/Dex en la columna "+Str/Dex" aplican a **ambos** atributos simultáneamente en los niveles indicados.
> En los niveles de **Ability Score +1** (EDL 4, 9, 14, 20), el dueño elige UN atributo cualquiera.

---

## 3. Special Abilities desbloqueadas por nivel

### Link (Ex) — EDL 1
> "A druid can handle her animal companion as a free action, or push it as a move action, even if she doesn't have any ranks in Handle Animal."

- Handle animal como **free action** (en vez de move action).
- Push como **move action** (en vez de standard action).
- Handle Animal checks: +4 circumstance bonus del dueño.
- **Importante:** el compañero actúa en el turno del dueño si recibe comandos; de lo contrario, actúa en defensa propia.

### Share Spells (Ex) — EDL 1
> "The druid may cast a spell with a target of 'You' on her animal companion instead of on herself."

- El druida puede lanzar hechizos de rango "Tú" sobre el compañero.
- El compañero debe estar adyacente (a 5 ft.) a menos que el hechizo indique otro alcance.
- No afecta a hechizos con rango diferente a "You."
- **Cavalier:** su montura **NO** gana Share Spells.

### Evasion (Ex) — EDL 3
> "If subjected to an attack that normally allows a Reflex saving throw for half damage, the companion takes no damage on a successful save."

- Si pasa la tirada de Reflex: **daño 0**.
- Si falla la tirada de Reflex: daño normal.

### Ability Score Increase (Ex) — EDL 4, 9, 14, 20
- En cada uno de estos niveles, el compañero gana **+1 a cualquier atributo** a elección del dueño.
- Total de 4 incrementos a lo largo de la vida del compañero.

### Devotion (Ex) — EDL 6
> "An animal companion gains a +4 morale bonus on Will saves against enchantment spells and effects."

- **+4 moral** a todas las tiradas de Will contra hechizos y efectos de encantamiento (enchantment).
- No afecta otras escuelas de magia o efectos mentales no-enchantment.

### Multiattack (Ex) — EDL 9
- Si el compañero tiene **3 o más ataques naturales**, gana la dote Multiattack como dote bonus.
- Multiattack: los ataques secundarios naturales aplican solo **–2** en vez de –5.
- Si tiene menos de 3 ataques naturales, gana en su lugar un **ataque adicional** con el ataque secundario a **–5**.

### Improved Evasion (Ex) — EDL 15
> "When subjected to an attack that allows a Reflex saving throw for half damage, the companion takes no damage on a successful save and only half damage if the save fails."

- Si pasa Reflex: **daño 0**.
- Si falla Reflex: **daño mitad** (en vez de daño total).
- Mejora de Evasion (antes de este nivel, fallar Reflex = daño total).

---

## 4. Catálogo de templates de animal

> Fuente base: http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/
>
> **Formato de cada entrada:**
> Tamaño | Velocidad | Nat AC | FUE/DES/CON/INT/SAB/CAR | Ataques | Special | Avance (EDL requerido)
>
> Los bonos de la tabla de progresión (sección 2) se SUMAN a estos valores base.
> "Avance" indica el EDL de druida mínimo para que ocurra el avance natural del template.

---

### Animales disponibles en EDL 1 (selección principal)

#### Ape (Simio)
- Tamaño: Medium | Speed: 30 ft., climb 30 ft.
- Nat AC: +1 | Str 13, Dex 17, Con 10, Int 2, Wis 12, Cha 7
- Ataques: bite 1d4, 2 claws 1d4
- Special: low-light vision, scent
- **Avance EDL 4:** Large; bite 1d6, 2 claws 1d6; +Str 8, −Dex 2, +Con 4
- URL: http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/

#### Badger (Tejón)
- Tamaño: Small | Speed: 30 ft., burrow 10 ft., climb 10 ft.
- Nat AC: +2 | Str 10, Dex 17, Con 15, Int 2, Wis 12, Cha 10
- Ataques: bite 1d4, 2 claws 1d3
- Special: low-light vision, scent, rage (6 rounds/día)
- **Avance EDL 4:** Medium; bite 1d6, 2 claws 1d4; +Str 4, −Dex 2, +Con 2

#### Bear (Oso pequeño / Black Bear)
- Tamaño: Small | Speed: 40 ft.
- Nat AC: +2 | Str 15, Dex 15, Con 13, Int 2, Wis 12, Cha 6
- Ataques: bite 1d4, 2 claws 1d3
- Special: low-light vision, scent
- **Avance EDL 4:** Medium; bite 1d6, 2 claws 1d4; +Str 4, −Dex 2, +Con 2

#### Bird (Ave de presa genérica — águila/halcón/búho)
- Tamaño: Small | Speed: 10 ft., fly 80 ft. (average)
- Nat AC: +1 | Str 10, Dex 15, Con 12, Int 2, Wis 14, Cha 6
- Ataques: bite 1d4, 2 talons 1d4
- Special: low-light vision
- **Avance EDL 4:** +Str 2, +Con 2

#### Boar (Jabalí)
- Tamaño: Small | Speed: 40 ft.
- Nat AC: +6 | Str 13, Dex 12, Con 15, Int 2, Wis 13, Cha 4
- Ataques: gore 1d6
- Special: low-light vision, scent
- **Avance EDL 4:** Medium; gore 1d8; ferocity; +Str 4, −Dex 2, +Con 2

#### Camel (Camello)
- Tamaño: Large | Speed: 50 ft.
- Nat AC: +1 | Str 18, Dex 16, Con 14, Int 2, Wis 11, Cha 4
- Ataques: bite 1d4 OR spit (touch ranged, sickened 1d4 rds, 10 ft.)
- Special: low-light vision, scent
- **Avance EDL 4:** +Str 2, +Con 2

#### Cat, Big (Felino grande — leopardo/jaguar inicial)
- Tamaño: Medium | Speed: 40 ft.
- Nat AC: +1 | Str 13, Dex 17, Con 10, Int 2, Wis 12, Cha 6
- Ataques: bite 1d4, 2 claws 1d4
- Special: low-light vision, scent
- **Avance EDL 7:** Large; bite 1d6, 2 claws 1d4; grab, pounce; nat AC +4; +Str 8, −Dex 2, +Con 4

#### Cat, Small (Gato montés / lince)
- Tamaño: Small | Speed: 40 ft.
- [VERIFICAR stats completos — datos incompletos en fuente]
- Special: low-light vision, scent
- **Avance EDL 4:** [VERIFICAR]

#### Crocodile (Cocodrilo)
- Tamaño: Small | Speed: 20 ft., swim 30 ft.
- Nat AC: +4 | Str 15, Dex 14, Con 13, Int 1, Wis 12, Cha 8
- Ataques: bite 1d8
- Special: hold breath, scent
- **Avance EDL 4:** Medium; bite 1d10; death roll, grab; nat AC +2; +Str 4, −Dex 2, +Con 2

#### Dog (Perro)
- Tamaño: Small | Speed: 40 ft.
- Nat AC: +1 | Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 6
- Ataques: bite 1d6
- Special: low-light vision, scent
- **Avance EDL 4:** Medium; bite 1d8; nat AC +2; +Str 4, −Dex 2, +Con 2

#### Dolphin (Delfín)
- Tamaño: Medium | Speed: swim 60 ft.
- Nat AC: +2 | Str 13, Dex 17, Con 13, Int 2, Wis 12, Cha 6
- Ataques: bite 1d6
- Special: blindsense 120 ft., hold breath, low-light vision
- **Avance EDL 7:** Large; bite 1d8; nat AC +2; +Str 8, −Dex 2, +Con 4

#### Elk (Alce)
- Tamaño: Medium | Speed: 50 ft.
- Nat AC: +2 | Str 15, Dex 14, Con 14, Int 2, Wis 12, Cha 5
- Ataques: gore 1d6, 2 hooves 1d4
- Special: low-light vision, scent
- **Avance EDL 7:** Large; gore 1d8, hooves 1d6; +Str 8, −Dex 2, +Con 4

#### Horse (Caballo)
- Tamaño: Large | Speed: 60 ft.
- Nat AC: +1 | Str 16, Dex 13, Con 15, Int 2, Wis 12, Cha 6
- Ataques: 2 hooves 1d4, bite 1d4
- Special: low-light vision, scent
- **Avance EDL 4:** +Str 2, +Con 2
- Nota: Los caballos son la montura estándar para paladin/cavalier Medium.

#### Hyena (Hiena)
- Tamaño: Small | Speed: 40 ft.
- Nat AC: +1 | Str 13, Dex 16, Con 10, Int 2, Wis 13, Cha 6
- Ataques: bite 1d4
- Special: low-light vision, scent
- **Avance EDL 4:** [VERIFICAR stats completos del avance]

#### Manta Ray (Mantarraya)
- Tamaño: Medium | Speed: swim 60 ft.
- Nat AC: +2 | Str 12, Dex 15, Con 13, Int 1, Wis 12, Cha 2
- Ataques: tail slap 1d4
- Special: low-light vision
- **Avance EDL 4:** [VERIFICAR]

#### Octopus (Pulpo)
- Tamaño: Small | Speed: swim 30 ft.
- Nat AC: +0 | Str 10, Dex 17, Con 12, Int 3, Wis 12, Cha 6
- Ataques: 8 arms 1d3 + grab
- Special: jet propulsion, low-light vision
- Nota: Int 3 — puede aprender hasta **6 tricks** (no solo 3).
- **Avance EDL 4:** [VERIFICAR]

#### Pony (Poni)
- Tamaño: Medium | Speed: 40 ft.
- Nat AC: +2 | Str 13, Dex 13, Con 14, Int 2, Wis 12, Cha 6
- Ataques: bite 1d3, 2 hooves 1d4
- Special: low-light vision, scent
- **Avance EDL 4:** +Str 2, +Dex 2, +Con 2
- Nota: Montura estándar para personajes Small (paladin gnomo, halfling).

#### Roc (Roc)
- Tamaño: Medium | Speed: 10 ft., fly 60 ft. (average)
- Nat AC: +3 | Str 15, Dex 17, Con 13, Int 2, Wis 14, Cha 6
- Ataques: bite 1d6, 2 talons 1d4
- Special: low-light vision
- **Avance EDL 7:** [VERIFICAR]

#### Shark (Tiburón)
- Tamaño: Small | Speed: swim 60 ft.
- Nat AC: +1 | Str 12, Dex 17, Con 13, Int 1, Wis 12, Cha 2
- Ataques: bite 1d4
- Special: blindsense 120 ft., low-light vision, scent
- **Avance EDL 4:** Medium; bite 1d6; nat AC +2; +Str 4, −Dex 2, +Con 2

#### Snake, Constrictor (Serpiente constrictora)
- Tamaño: Medium | Speed: 20 ft., climb 20 ft., swim 20 ft.
- Nat AC: +2 | Str 15, Dex 17, Con 13, Int 1, Wis 12, Cha 4
- Ataques: bite 1d6
- Special: hold breath, low-light vision, scent
- **Avance EDL 7:** Large; bite 1d8; grab, constrict; nat AC +2; +Str 8, −Dex 2, +Con 4

#### Snake, Viper (Víbora)
- Tamaño: Small | Speed: 30 ft., climb 30 ft., swim 30 ft.
- Nat AC: +2 | Str 11, Dex 17, Con 11, Int 1, Wis 12, Cha 4
- Ataques: bite 1d4 + poison
- Special: low-light vision, scent
- Nota: Solo puede aprender **3 tricks** (Int 1).
- **Avance EDL 4:** +Str 2, +Con 2

#### Wolf (Lobo)
- Tamaño: Medium | Speed: 50 ft.
- Nat AC: +2 | Str 13, Dex 15, Con 15, Int 2, Wis 12, Cha 6
- Ataques: bite 1d6
- Special: low-light vision, scent
- **Avance EDL 4:** nat AC +2; trip (con bite); +Str 4, −Dex 2, +Con 2

---

### Animales disponibles en EDL 4 (selección)

#### Bear, Grizzly (Oso grizzly)
- Tamaño: Medium | Speed: 40 ft.
- Nat AC: +1 | Str 17, Dex 13, Con 13, Int 2, Wis 13, Cha 6
- Ataques: bite 1d6, 2 claws 1d4
- Special: low-light vision, scent
- **Avance EDL 7:** Large; bite 1d8, 2 claws 1d6 + grab; nat AC +4

---

### Animales disponibles en EDL 7 (selección)

#### Allosaurus
- Tamaño: Medium | Speed: 40 ft.
- Nat AC: +4 | Str 14, Dex 16, Con 10, Int 2, Wis 15, Cha 10
- Ataques: bite 1d6, 2 claws 1d4
- Special: low-light vision, scent
- **Avance EDL 7:** Large; bite 1d8, 2 claws 1d6; grab, pounce

#### Ankylosaurus
- Tamaño: Medium | Speed: 30 ft.
- Nat AC: +9 | Str 10, Dex 14, Con 9, Int 2, Wis 12, Cha 8
- Ataques: tail 1d6
- Special: low-light vision, scent
- **Avance EDL 7:** Large; tail 2d6; stun

#### Brachiosaurus
- Tamaño: Medium | Speed: 30 ft.
- Nat AC: +3 | Str 13, Dex 14, Con 11, Int 2, Wis 13, Cha 10
- Ataques: tail 2d4
- Special: low-light vision, scent
- **Avance EDL 7:** Large; tail 2d6; trample (1d8); +Str 8, −Dex 2, +Con 4

#### Deinonychus (Dinosaurio raptor)
- Tamaño: Small | Speed: 60 ft.
- Nat AC: +1 | Str 13, Dex 17, Con 12, Int 2, Wis 12, Cha 6
- Ataques: bite 1d6, 2 talons 1d6, 2 feet 1d4
- Special: low-light vision, scent
- **Avance EDL 4:** Medium; bite 1d8, 2 talons 1d8, 2 feet 1d6; pounce; nat AC +2; +Str 4, −Dex 2, +Con 2

#### Elephant/Mastodon (Elefante / Mastodonte)
- Tamaño: Large | Speed: 40 ft.
- Nat AC: +4 | Str 18, Dex 10, Con 17, Int 2, Wis 11, Cha 5
- Ataques: gore 1d6, slam 1d6
- Special: low-light vision, scent
- **Avance EDL 7:** gore 1d8, slam 1d8; trample; nat AC +2; +Str 4, +Con 4

---

### Dinosaurios adicionales (stat block de bestiary — para referencia)

#### Compsognathus (Compsi familiar/compañero)
> Fuente: https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/compsognathus/
- Tamaño: Tiny | Speed: 40 ft., swim 20 ft.
- Nat AC: +1 | Str 8, Dex 15, Con 14, Int 2, Wis 11, Cha 5
- HD: 1d8+2 (6 hp) | BAB: +0 | CMB/CMD: +0/9
- Fort +4, Ref +4, Will +0
- Ataques: bite +1 (1d3−1 + **poison** Fort DC 12, 1d2 Str damage)
- Special: low-light vision, scent; como **familiar** da +4 Initiative al dueño
- Feats: Improved Initiative

#### Velociraptor
> Fuente: https://www.d20pfsrd.com/bestiary/monster-listings/animals/dinosaur/velociraptor/
- Tamaño: Small | Speed: 60 ft.
- Nat AC: +1 | Str 13, Dex 17, Con 17, Int 2, Wis 14, Cha 14
- HD: 3d8+9 (22 hp) | BAB: +2 | CMD: 15
- Fort +6, Ref +6, Will +3
- Ataques: bite +6 (1d4+1), 2 talons +6 (1d6+1, 19-20/×2)
- Special: evasion, leaping charge
- Feats: Improved Initiative, Weapon Finesse
- Skills raciales: Acrobatics +23 (saltar), Perception +10, Stealth +15
- Nota: Como animal companion template puede diferir ligeramente de esta versión bestiary.

---

### Lista completa de nombres de animales disponibles (200+ en d20pfsrd)

La fuente lista los siguientes animales (orden alfabético, selección de los más relevantes para implementación):

**A-C:** Allosaurus, Amargasaurus, Anglerfish, Ankylosaurus, Antelope, Ape, Archaeopteryx, Archelon, Armorfish, Arsinoitherium, Aurochs, Axe Beak, Baboon, Badger, Baluchitherium, Basilosaurus, Bat (Dire), Bear, Bear (Grizzly), Bird (generic), Bird (Blackwisp Egret), Bird (Cassowary), Bird (Harpy Eagle), Bird (Giant Owl), Bird (Shoebill Stork), Boar, Boar (Babirusa), Boar (Bristle), Brachiosaurus, Brontotherium, Bull (War), Bustard, Camel, Cameroceras, Capybara, Cat (Big), Cat (Small), Cattle, Centipede (Giant), Chalicotherium, Chameleon (Giant), Cooshee, Crocodile

**D-H:** Deinonychus, Deinotherium, Devil Monkey, Dimetrodon, Dimorphodon, Diplodocus, Dog, Dolphin, Drake, Dunkleosteus, Eel (Electric), Elasmosaurus, Elasmotherium, Elephant/Mastodon, Elk, Embolotherium, Horse, Hyena

**M-Z:** Manta Ray, Octopus, Pony, Roc, Shark, Snake (Constrictor), Snake (Viper), Wolf, + muchos más (Wolliped, Yak, Zebra, etc.)

URL de referencia completa: http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/

---

## 5. Tricks (trucos)

Fuente: https://www.d20pfsrd.com/skills/handle-animal

### Máximo de tricks que puede aprender un animal

| Inteligencia | Máx. Tricks |
|-------------|-------------|
| Int 1 | **3** |
| Int 2 | **6** |
| Int 3+ | 3 × Int mod + 3 [VERIFICAR fórmula exacta para Int 3+] |

- Los **Bonus Tricks** de la tabla de progresión (columna Bonus Tricks) **NO cuentan** contra este límite.
- El druida/ranger recibe un +4 circumstance bonus a Handle Animal con su compañero.

### Tiempo de enseñanza

- 1 trick = **1 semana** de entrenamiento + tirada de Handle Animal al final.
- Si la tirada falla: el tiempo no se pierde pero el trick no se aprende (se puede reintentar).
- Los Bonus Tricks del compañero no requieren tiempo ni tirada.

### Lista completa de tricks con DC

#### DC 10
| Trick | Descripción |
|-------|-------------|
| Calm | +2 morale bonus a Will saves iniciales vs. fear; +4 a checks posteriores (monturas). |

#### DC 15
| Trick | Descripción |
|-------|-------------|
| Bury | Entierra objetos en lugares seguros (funciona con Fetch para recuperarlos). |
| Come | El animal se acerca al manejador aunque normalmente no lo haría. |
| Deliver | Transporta objetos a ubicaciones o personas designadas. |
| Demolish | Ataca y daña objetos/estructuras (requiere Attack y all-creature training). |
| Down | Se retira del combate y queda quieto. |
| Fetch | Recupera objetos, ya sean específicos o aleatorios. |
| Find Master | Localiza al manejador usando olfato u otros medios de rastreo. |
| Guide | Ayuda a criaturas ciegas permaneciendo adyacente e indicando obstáculos. |
| Heel | Sigue de cerca al manejador, incluso a lugares inusuales. |
| Intimidate | Amenaza criaturas designadas; −4 contra no-animales/humanoides. |
| Perform | Ejecuta trucos simples de entretenimiento. |
| Preen | (montura) +5 a negociar alojamiento/establo. |
| Seek | Explora un área buscando algo vivo. |
| Serve | Acepta comandos de criaturas designadas (no solo el manejador). |
| Sneak | Hace Stealth checks y mantiene cobertura/ocultamiento. |
| Stay | Permanece inmóvil hasta ser llamado. |
| Subdue | Todos los ataques naturales son no-letales (−4 penalty). |
| Warm | +2 bonus a resistir efectos de frío cuando está adyacente. |

#### DC 20
| Trick | Descripción |
|-------|-------------|
| Aid | Usa Aid Another para ayudar a aliados específicos en combate. |
| Attack | Ataca enemigos designados. "All-creature" (ataca cualquier criatura) cuenta como **2 tricks**. |
| Bombard | (voladores) Suelta proyectiles sobre objetivos designados usando BAB. |
| Break Out | Rompe restricciones; +4 a Escape Artist de criaturas restringidas. |
| Defend | Protege al manejador o personaje designado. |
| Exclusive | Solo acepta comandos del manejador que enseñó este trick. |
| Feint | Hace fintas contra oponentes (requiere Attack). |
| Flank | Mantiene adyacencia para flanquear (requiere Attack). |
| Flee | Huye y se esconde, permaneciendo dentro de rango auditivo/visual. |
| Get Help | Localiza y recupera criaturas designadas (máx = Int del animal). |
| Guard | Impide que otros se acerquen a un área designada. |
| Hunt | Usa instintos naturales para encontrar comida; bonus a Survival. |
| Maneuver | Ejecuta una combat maneuver específica (requiere Attack; se puede enseñar múltiples veces para diferentes maniobras). |
| Menace | Intimida a una criatura para impedir movimiento; solo ataca si el objetivo intenta moverse. |
| Milk Venom | Proporciona una dosis de veneno (requiere 10 min y vial; el animal debe tener veneno). |
| Protect | Se queda junto a objetivo designado y readied actions contra amenazas adyacentes. |
| Quiet Watch | Vigila silenciosamente un área; alerta al manejador sin hacer ruido cuando es posible. |
| Rescue | Arrastra criaturas incapacitadas/muertas a lugar seguro (requiere Deliver y Guard). |
| Track | Rastrea por olfato (requiere scent). |
| Withhold Venom | No inyecta veneno en ataques designados (requiere venom ability). |

#### DC 25
| Trick | Descripción |
|-------|-------------|
| Build Simple Structure | Construye estructuras naturales (telaraña, presa, madriguera). 10 min/5 ft. cuadrado. |
| Detect | Busca olores, sonidos o señales inusuales usando Perception. |
| Drive | Ahuyenta monturas no-jineteadas y criaturas no-mágicas (Will DC 10 o huye 120 ft.). |
| Entertain | Trucos impresionantes; espectadores −2 Perception a menos que pasen Sense Motive. |
| Hide Tracks | La montura no levanta polvo; +5 DC de rastreo; pierde 5 ft./round de movimiento. |
| Mark Territory | Marca área de hasta media milla cuadrada; reduce 25% encuentros aleatorios. |
| Nest | Encuentra lugar de acampada más seguro. |
| Receive Spell | Entrenado para recibir y usar los efectos de un hechizo específico. |
| Speak | Comunica conceptos simples (sí/no, contar hasta 3, 2 preguntas por punto de Int; requiere Int 2+). |
| Steal | Conoce: Come, Fetch, Maneuver (steal), Seek, Sneak. |

### General Purpose Training Packages

Cuando se entrena un animal para un "propósito general", los tricks incluidos **no cuentan contra el límite** del animal.

| Propósito | DC | Tiempo | Tricks incluidos |
|-----------|-----|--------|------------------|
| **Heavy Labor** (Trabajo pesado) | 15 | 2 semanas | Come, Work |
| **Perform** (Actuación) | 15 | 5 semanas | Come, Fetch, Heel, Perform, Stay |
| **Ride** (Monta básica) | 15 | 3 semanas | Come, Heel, Stay |
| **Air Support** | 20 | [VERIFICAR] | Attack, Bombard, Deliver |
| **Attack/Fight** (Combate básico) | 20 | 3 semanas | Attack, Down, Stay |
| **Combat Riding** (Monta de combate) | 20 | 6 sem. (3 si ya tiene Ride) | Attack, Come, Defend, Down, Guard, Heel |
| **Guard** (Guardia) | 20 | 4 semanas | Attack, Defend, Down, Guard |
| **Hunt** (Caza) | 20 | 6 semanas | Attack, Down, Fetch, Heel, Seek, Track |
| **Liberate** | 20 | [VERIFICAR] | Break Out, Flee, Get Help |
| **Serve** | 20 | [VERIFICAR] | Deliver, Exclusive, Serve |

> **Nota de implementación:** "Combat Riding" es el paquete equivalente a "Combat Trained" que usan cavaliers y paladins para sus monturas.

---

## 6. Archetypes y dotes que afectan al compañero

### Dotes

#### Boon Companion
> Fuente: https://www.d20pfsrd.com/feats/general-feats/boon-companion/

- **Prerequisito:** Clase feature de animal companion o familiar.
- **Beneficio:** El EDL del compañero funciona **como si el nivel de clase fuera 4 más alto**, con máximo = nivel total del personaje.
- **Ejemplo:** Ranger 5 (EDL normal = 2) → con Boon Companion → EDL = 6.
- **Ejemplo:** Ranger 5 con EDL normal 2, nivel personaje 5 → Boon Companion da EDL = min(2+4, 5) = 5.
- Se puede tomar múltiples veces; cada instancia aplica a un compañero diferente. Los efectos **no se acumulan** en el mismo compañero.
- Al perder un compañero beneficiado, puedes transferir el boon al reemplazo.

#### Feats de montura (mounted combat chain)

| Dote | Prerrequisitos | Beneficio |
|------|----------------|-----------|
| **Mounted Combat** | Ride 1 rank | 1×/round: Ride check (immediate action) para negar un impacto a la montura. |
| **Ride-By Attack** | Mounted Combat, Ride 1 rank | Durante una charge montado: ataca y continúa moviéndote (sin AoO del objetivo). |
| **Spirited Charge** | Mounted Combat, Ride-By Attack, Ride 1 rank | Charge montado: ×2 daño con melé; ×3 con lanza. |
| **Trample** | Mounted Combat, Ride 1 rank | Overrun montado: el objetivo no puede evitarte; la montura hace un ataque de casco (+4 vs. prone). |

> Fuentes: https://www.d20pfsrd.com/feats/combat-feats/mounted-combat-combat/
> https://www.d20pfsrd.com/feats/combat-feats/spirited-charge-combat/
> https://www.d20pfsrd.com/feats/combat-feats/ride-by-attack-combat/
> https://www.d20pfsrd.com/feats/combat-feats/trample-combat/

---

### Archetypes

#### Ranger — Beastmaster
> Fuente: https://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo-ranger-archetypes/beastmaster/

- **Múltiples compañeros:** El Beastmaster puede tener **más de un animal companion**, dividiendo su EDL entre ellos.
- **Ejemplo:** Beastmaster EDL 4 → un compañero EDL 4, o dos EDL 2, o un EDL 3 + uno EDL 1.
- Una vez asignados los niveles a un compañero, **no se pueden redistribuir** mientras ese compañero esté activo.
- **Sin restricción de tipo:** puede elegir cualquier animal companion disponible para druidas.
- **Strong Bond (lvl 12):** La fórmula mejora y puede redistribuir inmediatamente los niveles adicionales.

#### Ranger — Falconer
> Fuente: https://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo-ranger-archetypes/falconer/

- Compañero: debe ser un **ave de caza o carroña** de tamaño grande.
- Comienza con **la mitad de HP** normal; gana HP completos cuando adquiere Hunter's Bond a nivel 4.
- No puede aprender el trick Work.
- Aprende gratis Roam o Distract a nivel 1.
- Tricks especiales: **Roam** (DC 15), **Distract** (DC 20), **Swooping Charge** (DC 20: 2d4 bite, ×4 crítico, deja staggered).
- Reemplaza: Wild Empathy → Distract trick; Combat Style Feat (lvl 6) → Swoop for the Kill.

#### Hunter — Packmaster
> Fuente: https://www.d20pfsrd.com/classes/hybrid-classes/hunter/archetypes/paizo-hunter-archetypes/packmaster/

- **Múltiples compañeros:** Similar a Beastmaster, divide EDL entre varios compañeros.
- **Pack Bond (Ex):** Ejemplo EDL 4 → uno EDL 4, dos EDL 2, mezcla, o cuatro EDL 1.
- **Share Spells** solo aplica a **un compañero a la vez**.
- Precise Companion, Woodland Stride y feats de trabajo en equipo aplican a un compañero a la vez (swift action para cambiar).
- **Pack Focus (Su):** Puede mantener un aspecto de Animal Focus sin gastar minutos diarios; dos aspectos activos simultáneamente (uno libre, uno limitado).

#### Inquisitor — Sacred Huntsmaster
> URL: https://www.d20pfsrd.com/classes/base-classes/inquisitor/archetypes/paizo-inquisitor-archetypes/
> [VERIFICAR stats completos — página no disponible durante la investigación]

- Obtiene animal companion a **nivel 1** (reemplaza Judgment).
- EDL = nivel de inquisitor.
- Comparte **teamwork feats** con el compañero animal como si el compañero tuviera los mismos feats.
- El compañero gana los teamwork feats del inquisitor automáticamente.

#### Druid — Beastmaster / Beastlord
> [VERIFICAR — página no disponible durante la investigación]
> Nota: El arquetipo de druida "Beastmaster" es diferente al del ranger.
> Consultar: https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/

#### Hunter — Verminous Hunter
> Permite tomar **vermin** (bichos, insectos) como compañero animal en vez de animales normales.
> EDL = nivel de hunter.
> [VERIFICAR detalles completos]

#### Hunter (clase base)
> Fuente: https://www.d20pfsrd.com/classes/hybrid-classes/hunter/

- Compañero animal a **nivel 1**, EDL = nivel de hunter (full).
- También puede enseñar **Skirmisher Tricks** (ranger) además de tricks normales.
- Los skirmisher tricks se usan un número de veces = ½ HD del compañero + Wis mod.
- **Improved Empathic Link (lvl 4):** Ve a través de los ojos del compañero (swift action, hasta 1 milla).
- **Greater Empathic Link (lvl 14):** Rango 10 millas; comunicación telepática a 1 milla.

---

## 7. Mount-specific (paladín / cavalier / pony)

### Reglas de tamaño para montura y jinete

| Tamaño del jinete | Tamaño mínimo de montura |
|-------------------|--------------------------|
| Small | Medium |
| Medium | Large |
| Large | Huge |

> Regla: puedes intentar montar una criatura hasta **1 categoría de tamaño mayor** que tú mediante la skill Ride.

### Cavalier Mount

- EDL = nivel de cavalier (full progression).
- La montura **NO gana Share Spells** (diferencia clave con druida).
- La montura **SÍ gana Link, Evasion, Devotion, Improved Evasion** en los niveles correspondientes.
- La montura gana **Light Armor Proficiency** como bonus feat.
- El cavalier no tiene ACP en Ride checks mientras está montado.
- Si la montura muere/se libera: 1 semana de luto, luego nueva montura que **no gana Link, Evasion, Devotion, Improved Evasion** hasta el siguiente level gain.

### Paladin Divine Bond (Mount)

- Se obtiene a **nivel 5** del paladín.
- Mount funciona como druid animal companion, EDL = nivel paladín.
- Montura estándar: **Heavy Horse** (Medium paladin) / **Pony** (Small paladin).
- A **nivel 11:** la montura gana el template **Celestial creature** y se convierte en magical beast.
- A **nivel 15:** gana Spell Resistance = nivel paladín + 11.
- Se puede invocar la montura como **full-round action**; 1×/día a nivel 5, +1 uso por cada 4 niveles posteriores (máx 4×/día a nivel 17).
- Montura alternativas (Medium paladin): elk, giant seahorse, giraffe, yak, zebra.
- Montura alternativas (Small paladin): antelope, capybara, eohippus, giant weasel, ram, reindeer, stag, wolfdog.

### Charge y combate montado

| Situación | Regla |
|-----------|-------|
| **Mounted charge** | El jinete y la montura cargan juntos. El jinete hace el ataque. |
| **Spirited Charge** | ×2 daño con arma melé; **×3 con lanza** (lance). |
| **Trample** | Overrun montado: objetivo no puede apartarse; montura hace ataque de casco (+4 vs. prone). |
| **Ride-By Attack** | Ataca durante la charge y continúa moviéndose; sin AoO del objetivo. |
| **Montura no-combat-trained** | Controlar en combate: move action + Ride DC 20. Si falla, no puedes hacer nada más. |
| **Montura combat-trained** | Dirigir el ataque: free action. Rider puede atacar normalmente. |

### Ride Skill DCs (referencia)

| Acción | DC |
|--------|-----|
| Guide with knees | 5 |
| Stay in saddle | 5 |
| Fight with combat-trained mount | 10 |
| Cover (esconderse tras la montura) | 15 |
| Soft fall (caída sin daño) | 15 |
| Leap (saltar obstáculo montado) | 15 |
| Spur mount (velocidad extra) | 15 |
| Control mount in battle (no-combat-trained) | 20 |
| Fast mount/dismount | 20 |

> Fuente: https://www.d20pfsrd.com/skills/ride/

---

## 8. Equipo y barding

### Barding (armadura para animales)

> Fuente: https://www.d20pfsrd.com/equipment/armor/

El barding es cualquier tipo de armadura estándar adaptada para un animal. Sus propiedades (Max Dex, ACP, velocidad) son **iguales a la armadura base**.

#### Multiplicadores de costo y peso

| Tamaño del animal | Multiplicador de costo | Multiplicador de peso |
|-------------------|----------------------|----------------------|
| Medium (poni, etc.) | ×2 | ×1 (igual que humanoid) |
| Large (caballo, oso, etc.) | ×4 | ×2 |
| Larger (elefante, etc.) | [VERIFICAR tabla completa] | [VERIFICAR] |

#### Restricciones del barding

- **Vuelo:** Los animales voladores **no pueden volar** con medium o heavy barding.
- **Carga:** Un animal con barding **no puede cargar nada más** excepto el jinete y las saddlebags normales.
- **Ponerse/quitarse:** Tarda **5× el tiempo normal** de ponerse/quitarse armadura.
- La reducción de velocidad por heavy barding aplica igual que para humanoids (1/3 velocidad al correr en vez de 1/4).

#### Tipos de barding y stats

| Tipo | Ejemplo | +AC | Max Dex | ACP | Velocidad (Medium/Large) |
|------|---------|-----|---------|-----|--------------------------|
| Light | Leather, Chainshirt | +1 a +4 | +6 a +4 | 0 a -2 | Sin penalización |
| Medium | Chainmail, Breastplate | +5 a +6 | +2 a +3 | -3 a -4 | −10 ft. (20 ft. si base 30) |
| Heavy | Full Plate, Splint | +7 a +9 | +1 | -5 a -7 | −10 ft. (20 ft. si base 30) |

> Nota: Los valores exactos de Max Dex y ACP son idénticos a la armadura base correspondiente.

### Saddles (Sillas de montar)

| Tipo | Costo | Descripción / Beneficio mecánico |
|------|-------|----------------------------------|
| **Riding Saddle** (Silla de cabalgar) | 10 gp | Estándar. Sin bonus especial. |
| **Military Saddle** (Silla militar) | 20 gp | +2 circumstance bonus a Ride checks para mantenerse en silla. |
| **Exotic Military Saddle** | 60 gp | Como military, pero diseñada para monturas de forma inusual (griffon, hippogriff, etc.). |
| **Pack Saddle** (Silla de carga) | 5 gp | Para animales de carga; **no permite montar**; aumenta capacidad de carga. |

> [VERIFICAR costos exactos en tabla oficial de equipo d20pfsrd]

---

## 9. Schemas JSON sugeridos

### `animal_companions.json`

```json
[
  {
    "id": "wolf",
    "name_es": "Lobo",
    "name_en": "Wolf",
    "size": "Medium",
    "speed": [{"type": "land", "ft": 50}],
    "natural_armor_base": 2,
    "ability_scores": {
      "str": 13, "dex": 15, "con": 15,
      "int": 2,  "wis": 12, "cha": 6
    },
    "attacks": [
      {"name": "Bite", "dice": "1d6", "type": "B+P+S", "special": []}
    ],
    "special_qualities": ["low-light vision", "scent"],
    "racial_skill_bonuses": [],
    "starting_feats": [],
    "advancement": {
      "edl_required": 4,
      "changes": {
        "natural_armor_delta": 2,
        "str_delta": 4, "dex_delta": -2, "con_delta": 2,
        "new_special": ["trip"],
        "attacks_changed": []
      }
    },
    "edl_available": 1,
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  }
]
```

**Campos clave del template:**
- `id`: slug único
- `name_es`, `name_en`: bilingüe
- `size`: Tiny / Small / Medium / Large / Huge
- `speed`: array de modos (land, swim, fly, climb, burrow) con ft
- `natural_armor_base`: NAT AC del template (sin bonos de tabla)
- `ability_scores`: 6 valores base (sin bonos de tabla)
- `attacks`: array con name, dice, damage type, effects (grab, trip, poison, etc.)
- `special_qualities`: array de strings
- `racial_skill_bonuses`: array de {skill, bonus, condition}
- `starting_feats`: array de feat ids
- `advancement`: objeto con edl_required y los cambios que ocurren
- `edl_available`: nivel EDL mínimo para seleccionar este animal (1, 4, 7, etc.)
- `source_url`: para referencia

---

### `animal_progression.json`

```json
[
  {
    "edl": 1,
    "hd": 2,
    "bab": 1,
    "fort": 3, "ref": 3, "will": 0,
    "skills_total": 2,
    "feats": 1,
    "natural_armor_bonus": 0,
    "str_dex_bonus": 0,
    "bonus_tricks": 1,
    "special": ["link", "share_spells"]
  },
  {
    "edl": 2,
    "hd": 3,
    "bab": 2,
    "fort": 3, "ref": 3, "will": 1,
    "skills_total": 3,
    "feats": 2,
    "natural_armor_bonus": 0,
    "str_dex_bonus": 0,
    "bonus_tricks": 1,
    "special": []
  }
  // ... continúa hasta edl: 20
]
```

**Nota de implementación:**
- `natural_armor_bonus` y `str_dex_bonus` son los bonos CUMULATIVOS acumulados hasta ese EDL.
- `special` usa IDs de habilidades especiales para lookup.
- `hd` es el total de dados de golpe del compañero.

---

### `animal_tricks.json`

```json
[
  {
    "id": "attack",
    "name_es": "Atacar",
    "name_en": "Attack",
    "dc": 20,
    "description_en": "The animal attacks apparent enemies. You may point to a particular creature that you wish the animal to attack, and it will comply if able. Normally, an animal will attack only humanoids, monstrous humanoids, giants, or other animals. Teaching an animal to attack all creatures (including such unnatural creatures as undead and aberrations) counts as two tricks.",
    "description_es": "El animal ataca enemigos visibles. Normalmente solo ataca humanoides, humanoides monstruosos, gigantes u otros animales. Enseñarlo a atacar todo (undead, aberraciones) cuenta como 2 tricks.",
    "requires": [],
    "counts_as": 1,
    "general_purpose_packages": ["attack_fight", "combat_riding", "guard", "hunt"]
  },
  {
    "id": "attack_all",
    "name_es": "Atacar (cualquier criatura)",
    "name_en": "Attack (All Creatures)",
    "dc": 20,
    "description_en": "Teaches the animal to attack any type of creature. Counts as two tricks.",
    "description_es": "Ataca cualquier tipo de criatura. Cuenta como 2 tricks.",
    "requires": ["attack"],
    "counts_as": 2,
    "general_purpose_packages": []
  }
  // ... un objeto por trick
]
```

---

### `animal_general_purposes.json`

```json
[
  {
    "id": "combat_riding",
    "name_es": "Monta de combate",
    "name_en": "Combat Riding",
    "dc": 20,
    "weeks": 6,
    "weeks_upgrade_from": {"from": "riding", "weeks": 3},
    "tricks_included": ["attack", "come", "defend", "down", "guard", "heel"],
    "tricks_dont_count_against_limit": true
  }
]
```

---

## 10. Lista de campos UI necesarios

### Ya existentes (según descripción del sistema)

- Nombre del compañero
- Tipo / template de animal
- Atributos (FUE/DES/CON/INT/SAB/CAR)
- Stats calculados (AC, HP, BAB, saves)
- Skills
- Ataques naturales
- Inventario

### Campos adicionales necesarios

#### Sección: Identidad y progresión
- [ ] **EDL (Effective Druid Level):** input numérico; derivado de nivel del dueño + modificadores
- [ ] **Nivel del dueño** (para calcular EDL)
- [ ] **Clase del dueño** (dropdown: Druid, Hunter, Ranger, Cavalier, Paladin, Sacred Huntsmaster, etc.)
- [ ] **Boon Companion** (checkbox): +4 EDL hasta máx nivel personaje
- [ ] **Fila de tabla activa** (calculado: qué fila de la tabla de progresión aplica)

#### Sección: Stats derivados de la tabla
- [ ] **HD total** (tabla + template base)
- [ ] **BAB** (de tabla)
- [ ] **Fort / Ref / Will** base (de tabla + ability mods)
- [ ] **Bono de armadura natural** (+NAT de tabla sumado al base del template)
- [ ] **Bono acumulado Str/Dex** (de tabla)
- [ ] **Feats totales** (de tabla; con lista de feats seleccionados)
- [ ] **Bonus Tricks** actuales (de tabla)
- [ ] **Skills totales disponibles** (de tabla)

#### Sección: Special Abilities (unlocks automáticos)
- [ ] **Link** (nivel 1) — display informativo
- [ ] **Share Spells** (nivel 1) — display informativo
- [ ] **Evasion** (nivel 3) — checkbox o badge
- [ ] **Devotion** (nivel 6) — +4 Will vs. enchantment — display
- [ ] **Multiattack** (nivel 9) — badge; ¿tiene 3+ ataques? (auto-detect)
- [ ] **Improved Evasion** (nivel 15) — badge

#### Sección: Ability Score Increases
- [ ] 4 slots de "+1 a atributo" (niveles 4, 9, 14, 20)
- [ ] Dropdown por slot: qué atributo recibió el +1
- [ ] Los 4 bonos se suman a los stats base del template

#### Sección: Tricks
- [ ] **Máximo de tricks** (calculado: Int 1 → 3, Int 2 → 6)
- [ ] **Bonus Tricks** (de tabla; no cuentan)
- [ ] **Tricks conocidos** (lista de checkboxes o selección múltiple)
- [ ] **General Purpose Package** activo (dropdown)
- [ ] **Tricks del paquete** (display automático, no cuentan contra límite)

#### Sección: Template y avance
- [ ] **Template seleccionado** (dropdown con los 200+ animales)
- [ ] **Stats base del template** (auto-cargados al seleccionar)
- [ ] **Avance activado** (checkbox: ¿ya alcanzó el EDL de avance?)
- [ ] **Stats post-avance** (calculados automáticamente)

#### Sección: Equipo
- [ ] **Tipo de silla** (Riding / Military / Exotic Military / Pack)
- [ ] **Barding** (ninguna / light / medium / heavy; con tipo de material)
- [ ] **Bono AC de barding** (calculado según tipo)
- [ ] **Penalización de velocidad** (calculada según barding)
- [ ] **ACP de barding** (auto-calculado)
- [ ] **Max Dex de barding** (auto-calculado; limita el Dex mod en AC)
- [ ] **Capacidad de carga** (STR-based; con carga actual del inventario)

#### Sección: Montura (si aplica)
- [ ] **Es montura** (checkbox)
- [ ] **Combat Trained** (checkbox: tiene el paquete Combat Riding)
- [ ] **Ride skill del jinete** (para calcular DCs)
- [ ] **Feats de montura del jinete** (Mounted Combat, Ride-By Attack, Spirited Charge, Trample)
- [ ] **Multiplicador de daño en charge** (auto: ×2 normal, ×3 con lanza si tiene Spirited Charge)

#### Sección: Datos de la clase del dueño (para auto-cálculo)
- [ ] **Clase principal** y nivel
- [ ] **¿Comparte favored enemy/terrain?** (Ranger: sí)
- [ ] **¿Tiene Skirmisher Tricks?** (Hunter: sí)
- [ ] **¿Tiene teamwork feat sharing?** (Sacred Huntsmaster: sí)
- [ ] **Link avanzado** (Hunter niveles 4/14: Improved/Greater Empathic Link)

---

## Notas de implementación

1. **Cálculo automático de EDL:** Cuando el usuario cambia el nivel/clase del dueño, recalcular toda la fila de progresión.

2. **Selección de template:** Al seleccionar animal, pre-cargar stats base. Aplicar bonos de tabla encima.

3. **Avance automático:** Si EDL >= edl_required del template, aplicar los cambios de avance automáticamente (con posibilidad de toggle manual).

4. **Límite de tricks:** Fórmula: `max_tricks = (Int <= 1) ? 3 : 6` (para Int 2). Los bonus_tricks de la tabla van en campo separado y no se suman al límite.

5. **Ability Score Increases:** Los 4 incrementos son elegibles en EDL 4, 9, 14, 20. Si EDL >= 4, hay 1 disponible; si >= 9, hay 2; etc. Cada uno se aplica al atributo elegido por el usuario.

6. **Stack de natural armor:** AC_natural = nat_armor_template + nat_armor_bonus_tabla. Ambos campos separados en el JSON.

---

*Documento generado: 2026-04-29. Fuentes: d20pfsrd.com. Datos marcados [VERIFICAR] requieren confirmación adicional.*
