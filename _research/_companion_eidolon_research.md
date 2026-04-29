# Eidolon Research — Pathfinder 1e Complete Reference
**Propósito:** Referencia exhaustiva para implementar la sección Eidolon en la ficha HTML de Pathfinder 1e.
**Fecha:** 2026-04-29
**Fuentes:** d20pfsrd.com (clásico), aonprd.com (verificación), fetches directos documentados por sección.

---

## Tabla de Contenidos

1. [Mecánica Base del Eidolon (Summoner Clásico)](#1-mecánica-base-del-eidolon-summoner-clásico)
2. [Tabla de Progresión por Nivel (1–20)](#2-tabla-de-progresión-por-nivel-1-20)
3. [Base Forms y Free Evolutions](#3-base-forms-y-free-evolutions)
4. [Catálogo Completo de Evolutions](#4-catálogo-completo-de-evolutions)
5. [Pathfinder Unchained Summoner — Eidolon](#5-pathfinder-unchained-summoner--eidolon)
6. [Archetypes que Cambian el Eidolon](#6-archetypes-que-cambian-el-eidolon)
7. [Schemas JSON Sugeridos](#7-schemas-json-sugeridos)
8. [Campos UI Necesarios](#8-campos-ui-necesarios)
9. [Synthesist Mode — UI Específico](#9-synthesist-mode--ui-específico)
10. [Persistencia e i18n](#10-persistencia-e-i18n)

---

## 1. Mecánica Base del Eidolon (Summoner Clásico)

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/

### Tipo de Criatura
- **Tipo:** Outsider (extraplanar mientras está invocado)
- **Alineamiento:** Comparte el alineamiento del summoner que lo invoca
- **Subtipo según alineamiento:**
  - Bueno → subtipo `good`
  - Neutral → sin subtipo de alineamiento
  - Maligno → subtipo `evil`
  - Legal → subtipo `lawful`
  - Caótico → subtipo `chaotic`

### Idiomas
- Habla todos los idiomas del summoner (automático)
- Comunicación telepática con el summoner a cualquier distancia (mismo plano)

### Independencia Mental
- Int mínima: 7 (base para todas las formas)
- **Sí puede actuar de forma independiente** — tiene Int, Wis, Cha propios
- Puede comunicarse con el summoner telepáticamente → puede recibir órdenes complejas

### Mecánica de Muerte / Dismissal
- El eidolon **regresa a su plano de origen** cuando sus HP caen a negativo igual a su puntuación de Con (no cuando llega a 0)
- Se puede **desconvocar** como acción estándar (standard action)
- Si se **destruye** (muere), no puede ser invocado de nuevo ese mismo día
- **Re-summon tras muerte:** Puede ser reinvocado 24 horas después de haber sido destruido; aparece con HP completos
- Ambos summoner y eidolon tienen una runa brillante idéntica que indica el vínculo activo

### Capacidades Especiales Estándar (todos los eidolons)
| Nivel Summoner | Capacidad |
|---|---|
| 1 | Darkvision 60 ft., Link (bond telepático), Share Spells |
| 2 | Evasion |
| 6 | Devotion (+4 bonus en voluntad vs encantamientos) |
| 9 | Multiattack (feat bonus) |
| 14 | Improved Evasion |
| 5 / 10 / 15 | Ability Score Increase +1 (acumulativo) |

### Mecánica de Link y Life Link
- **Life Link:** El summoner puede sacrificar sus propios HP para evitar que el eidolon sea destruido (hasta 5 HP/nivel de summoner por día, transferidos como daño al summoner)
- **Bond Senses:** El summoner puede percibir a través de los sentidos del eidolon (estándar; 1 ronda/nivel por día)
- **Maker's Call:** Teletransportar el eidolon al lado del summoner (1/día, equivale a dimension door para el eidolon)
- **Transposition (10°):** Como Maker's Call pero summoner y eidolon intercambian lugares
- **Aspect (10°):** El summoner absorbe algunas evolutions del eidolon temporalmente
- **Greater Aspect (18°):** El summoner copia más evolutions
- **Merge Forms (16°):** Fusionarse con el eidolon para protección total (como Synthesist básico)
- **Twin Eidolon (20°):** El summoner puede tomar la apariencia y stats del eidolon completamente

---

## 2. Tabla de Progresión por Nivel (1–20)

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/

**Notas de columnas:**
- **HD:** Dados de golpe del eidolon (d10)
- **BAB:** Base Attack Bonus
- **Good Save:** Bonificador en las dos tiradas de salvación buenas (Fort+Ref, Fort+Will, o Ref+Will según la forma base)
- **Poor Save:** Bonificador en la tirada de salvación mala
- **Skills:** Puntos de habilidad totales (4 + modificador Int por HD)
- **Feats:** Dones totales
- **Armor Bonus:** Bonus de armadura natural (se añade al AC)
- **Str/Dex Bonus:** Bonificador aplicado a STR y DEX (el de la tabla es acumulativo total)
- **Evol Pool:** Puntos de evolución disponibles totales
- **Max Atk:** Máximo de ataques naturales

| Nivel | HD | BAB | Good Save | Poor Save | Skills | Feats | Armor Bonus | Str/Dex Bonus | Evol Pool | Max Atk | Especial |
|-------|----|----|-----------|-----------|--------|-------|-------------|---------------|-----------|---------|---------|
| 1 | 1 | +1 | +2 | +0 | 4 | 1 | +0 | +0 | 3 | 3 | Darkvision, Link, Share Spells |
| 2 | 2 | +2 | +3 | +0 | 8 | 1 | +2 | +1 | 4 | 3 | Evasion |
| 3 | 3 | +3 | +3 | +1 | 12 | 2 | +2 | +1 | 5 | 3 | — |
| 4 | 3 | +3 | +3 | +1 | 12 | 2 | +2 | +1 | 7 | 4 | — |
| 5 | 4 | +4 | +4 | +1 | 16 | 2 | +4 | +2 | 8 | 4 | Ability Score +1 |
| 6 | 5 | +5 | +4 | +1 | 20 | 3 | +4 | +2 | 9 | 4 | Devotion |
| 7 | 6 | +6 | +5 | +2 | 24 | 3 | +6 | +3 | 10 | 4 | — |
| 8 | 6 | +6 | +5 | +2 | 24 | 3 | +6 | +3 | 11 | 4 | — |
| 9 | 7 | +7 | +5 | +2 | 28 | 4 | +6 | +3 | 13 | 5 | Multiattack |
| 10 | 8 | +8 | +6 | +2 | 32 | 4 | +8 | +4 | 14 | 5 | Ability Score +1 |
| 11 | 9 | +9 | +6 | +3 | 36 | 5 | +8 | +4 | 15 | 5 | — |
| 12 | 9 | +9 | +6 | +3 | 36 | 5 | +10 | +5 | 16 | 5 | — |
| 13 | 10 | +10 | +7 | +3 | 40 | 5 | +10 | +5 | 17 | 5 | — |
| 14 | 11 | +11 | +7 | +3 | 44 | 6 | +10 | +5 | 19 | 6 | Improved Evasion |
| 15 | 12 | +12 | +8 | +4 | 48 | 6 | +12 | +6 | 20 | 6 | Ability Score +1 |
| 16 | 12 | +12 | +8 | +4 | 48 | 6 | +12 | +6 | 21 | 6 | — |
| 17 | 13 | +13 | +8 | +4 | 52 | 7 | +14 | +7 | 22 | 6 | — |
| 18 | 14 | +14 | +9 | +4 | 56 | 7 | +14 | +7 | 23 | 6 | — |
| 19 | 15 | +15 | +9 | +5 | 60 | 8 | +14 | +7 | 25 | 7 | — |
| 20 | 15 | +15 | +9 | +5 | 60 | 8 | +16 | +8 | 26 | 7 | — |

**Notas importantes:**
- El bonus Str/Dex es un bonus de enhancement aplicado sobre las estadísticas base de la forma
- El Evolution Pool se puede redistribuir completamente al subir de nivel (o con el hechizo *transmogrify*)
- La Con base la fija la forma base (13 para Biped/Serpentine/Aquatic/Avian); **no hay columna de Con bonus en la tabla** — la Con se mejora con la evolution Ability Increase

**Skills del Eidolon (lista base, todas las formas):**
Bluff, Craft, Knowledge (planes), Perception, Sense Motive, Stealth
*(Las formas base añaden skills adicionales; ver sección 3)*

---

## 3. Base Forms y Free Evolutions

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/

### 3.1 BIPED

| Estadística | Valor Base |
|---|---|
| Tamaño | Medium |
| Velocidad | 30 ft. |
| AC Natural Armor | +2 |
| STR | 16 |
| DEX | 12 |
| CON | 13 |
| INT | 7 |
| WIS | 10 |
| CHA | 11 |

**Tiradas de Salvación:**
- Fort: **Good**
- Reflex: **Poor**
- Will: **Good**

**Free Evolutions (incluidas sin coste):**
- Claws (2 ataques primarios de garra, 1d4 cada uno)
- Limbs (arms) — par de brazos
- Limbs (legs) — par de piernas

**Skills adicionales de clase (Biped):**
Climb, Fly (con la evolution), Swim

**Ataques naturales de inicio:** 2 × Claws (1d4, primarios)

**Notas Biped:**
- Forma más versátil para combate cuerpo a cuerpo y magia (puede portar objetos con los brazos)
- Con limbs (arms), puede usar armas si se toma Weapon Training evolution
- La forma humanoide permite equiparse con armaduras y objetos mágicos tipo humanoide [VERIFICAR restricciones de slot]

---

### 3.2 QUADRUPED

| Estadística | Valor Base |
|---|---|
| Tamaño | Medium |
| Velocidad | 40 ft. |
| AC Natural Armor | +2 |
| STR | 14 |
| DEX | 14 |
| CON | 13 |
| INT | 7 |
| WIS | 10 |
| CHA | 11 |

**Tiradas de Salvación:**
- Fort: **Good**
- Reflex: **Good**
- Will: **Poor**

**Free Evolutions (incluidas sin coste):**
- Bite (1 ataque primario, 1d6)
- Limbs (legs) × 2 — dos pares de patas

**Skills adicionales de clase (Quadruped):**
Acrobatics, Climb, Perception, Stealth, Swim

**Ataques naturales de inicio:** 1 × Bite (1d6, primario)

**Notas Quadruped:**
- Mayor velocidad base (40 ft.)
- Única forma base que puede tomar Pounce (full-attack en charge)
- Puede tomar Rake (req. 4° nivel summoner) para 2 ataques adicionales al agarrar
- Excelente como mount si se invierte en la evolution Mount
- No puede portar objetos ni usar armas sin evoluciones adicionales

---

### 3.3 SERPENTINE

| Estadística | Valor Base |
|---|---|
| Tamaño | Medium |
| Velocidad | 20 ft. + Climb 20 ft. |
| AC Natural Armor | +2 |
| STR | 12 |
| DEX | 16 |
| CON | 13 |
| INT | 7 |
| WIS | 10 |
| CHA | 11 |

**Tiradas de Salvación:**
- Fort: **Poor**
- Reflex: **Good**
- Will: **Good**

**Free Evolutions (incluidas sin coste):**
- Bite (1 ataque primario, 1d6)
- Climb (velocidad de escalada 20 ft.)
- Reach (para Bite — alcance +5 ft.)
- Tail (cola; +2 racial en Acrobatics para equilibrio)
- Tail Slap (1 ataque secundario, 1d6)

**Skills adicionales de clase (Serpentine):**
Acrobatics, Climb, Escape Artist, Fly (con alas), Stealth, Swim

**Ataques naturales de inicio:** Bite (1d6, primario) + Tail Slap (1d6, secundario)

**Notas Serpentine:**
- Alta DEX → mejor iniciativa y AC con mage armor/barkskin
- Constrict (2 pts) requiere Grab y es exclusivo de Serpentine
- Buena para builds de control/grapple
- Velocidad de tierra menor (20 ft.) es su desventaja principal
- Reach en Bite desde nivel 1 es única ventaja táctica inicial

---

### 3.4 AQUATIC (forma adicional)

| Estadística | Valor Base |
|---|---|
| Tamaño | Medium |
| Velocidad | 20 ft. + Swim 40 ft. |
| AC Natural Armor | +4 |
| STR | 16 |
| DEX | 12 |
| CON | 13 |
| INT | 7 |
| WIS | 10 |
| CHA | 11 |

**Tiradas de Salvación:**
- Fort: **Good**
- Reflex: **Good**
- Will: **Poor**

**Free Evolutions:**
- Bite (1d6, primario)
- Improved Natural Armor
- Gills (respirar bajo el agua)
- Swim × 2

**Ataques de inicio:** Bite (1d6)

---

### 3.5 AVIAN (forma adicional)

| Estadística | Valor Base |
|---|---|
| Tamaño | Small (puede gastar 2 EP para Medium) |
| Velocidad | 30 ft. + Fly 30 ft. (good) |
| AC Natural Armor | +2 |
| STR | 12 |
| DEX | 16 |
| CON | 13 |
| INT | 7 |
| WIS | 10 |
| CHA | 11 |

**Tiradas de Salvación:**
- Fort: **Poor**
- Reflex: **Good**
- Will: **Good**

**Free Evolutions:**
- Claws (2 × 1d3, primarios)
- Flight (velocidad de vuelo)
- Limbs (legs)

**Nota:** Al nivel 5 de summoner, la velocidad de vuelo de una Avian Medium o mayor aumenta 40 ft.

---

### 3.6 TAURIC (forma adicional)

| Estadística | Valor Base |
|---|---|
| Tamaño | Small (puede gastar 2 EP para Medium) |
| Velocidad | 40 ft. |
| AC Natural Armor | +2 |
| STR | 14 |
| DEX | 14 |
| CON | 13 |
| INT | 7 |
| WIS | 10 |
| CHA | 11 |

**Tiradas de Salvación:**
- Fort: **Good**
- Reflex: **Poor**
- Will: **Good**

**Free Evolutions:**
- Claws (2 × 1d4, primarios)
- Limbs (arms)
- Limbs (legs) × 2

---

## 4. Catálogo Completo de Evolutions

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/

### Evolutions de 1 Punto

| Nombre EN | Nombre ES | Prerrequisitos | Stacking | Descripción EN | Descripción ES |
|---|---|---|---|---|---|
| **Basic Magic** | Magia Básica | CHA 10+ | No | Cast a cantrip 1/day (3/day at 4th level). CL = HD. DC = 10 + CHA mod. | Lanza un cantrip 1/día (3/día al nivel 4). NL = DG. CD = 10 + mod CHA. |
| **Bite** | Mordisco | — | No (1 ataque) | Primary bite attack 1d6 (1d8 Large, 2d6 Huge). If existing, x1.5 Str on that attack. | Ataque primario de mordisco 1d6. Si ya existe uno, aplica x1.5 FUE. |
| **Bleed** | Sangrado | — | No (por ataque) | Selected attack causes 1d6 bleed damage on hit. | El ataque elegido causa 1d6 de daño de sangrado. |
| **Claws** | Garras | Limbs (arms) | No (un par) | Two primary claw attacks, 1d4 (1d6 Large, 1d8 Huge). | Dos ataques primarios de garra 1d4 cada uno. |
| **Climb** | Trepar | — | Sí (+20 ft./extra) | Climb speed equal to base speed. Each extra purchase adds 20 ft. | Velocidad de escalada igual a la base. Cada compra adicional suma 20 ft. |
| **Gills** | Branquias | — | No | Breathe underwater indefinitely. | Respira bajo el agua indefinidamente. |
| **Hooves** | Cascos | Limbs (legs) | No | Two secondary hoof attacks 1d4 (1d6 Large, 1d8 Huge). Replaces base claw if applicable. | Dos ataques secundarios de casco 1d4. Reemplaza garras base si aplica. |
| **Improved Damage** | Daño Mejorado | — | No (por ataque) | Increase one natural attack's damage die by 1 step. | Aumenta el dado de daño de un ataque natural en 1 paso. |
| **Improved Natural Armor** | Armadura Natural Mejorada | — | Sí (1×/5 niveles summoner) | +2 natural armor bonus per purchase. | +2 al bono de armadura natural por compra. |
| **Low-Light Vision** | Visión en Penumbra | — | No | See twice as far in dim light conditions. | Ve el doble de lejos con poca luz. |
| **Magic Attacks** | Ataques Mágicos | — | No | Natural attacks count as magic for DR. At 10th+, also count as eidolon's alignment. | Los ataques naturales superan RM/magia. Al nivel 10+, también cuentan como el alineamiento del eidolón. |
| **Mount** | Montura | Quad o Serpentine, eidolon ≥1 talla mayor que jinete | No | Eidolon is combat-trained as mount. | El eidolón es una montura entrenada para combate. |
| **Pincers** | Pinzas | Limbs (arms) | Sí (múltiples pares) | Two secondary pincer attacks 1d6 (1d8 Large, 2d6 Huge). +2 grapple with grab. | Dos ataques secundarios de pinza 1d6. +2 agarre con Grab. |
| **Pounce** | Lanzarse | Solo Quadruped | No | Full attack after a charge. | Permite ataque completo tras carga. |
| **Pull** | Jalar | Req. 10+ ft. alcance | No (por ataque) | After hit, free CMB check to pull target 5 ft. closer. | Tras golpear, CMC gratis para atraer al objetivo 5 ft. |
| **Push** | Empujar | — | No (por ataque) | After hit, free CMB check to push target 5 ft. away. | Tras golpear, CMC gratis para alejar al objetivo 5 ft. |
| **Reach** | Alcance | — | Sí (por ataque) | One natural attack gains +5 ft. reach. | Un ataque natural gana +5 ft. de alcance. |
| **Resistance** | Resistencia Elemental | — | Sí (por tipo) | Resistance 5 vs. chosen energy type; increases to 10 at summoner 5th, 15 at 10th. | Resistencia 5 al tipo de energía elegido; aumenta a 10 (nivel 5) y 15 (nivel 10). |
| **Scent** | Olfato | — | No | Detect creatures by smell within 30 ft. (60 ft. upwind, 15 ft. downwind). | Detecta criaturas por olfato a 30 ft. (60 ft. a favor del viento). |
| **Shared Evolution** | Evolución Compartida | — | No | Transfer a 1- or 2-point evolution to the summoner; summoner can return it. | Transfiere una evolución de 1 o 2 puntos al invocador; puede devolvérsela. |
| **Skilled** | Habilidoso | — | No (por habilidad) | +8 racial bonus to one chosen skill. | +8 bono racial en una habilidad elegida. |
| **Slam** | Golpe | Limbs (arms) | Sí (múltiples) | Primary slam attack 1d8 (2d6 Large, 2d8 Huge). Replaces base claws if taken. | Ataque primario de golpe 1d8. Reemplaza garras base. |
| **Slippery** | Escurridizo | — | No | +4 CMD vs. grapple; +4 bonus on Escape Artist checks. | +4 CMD vs. agarre; +4 en Escape Artist. |
| **Sting** | Aguijón | Tail | No | Primary sting attack 1d4 (1d6 Large, 1d8 Huge). Requires Tail evolution. | Ataque primario de aguijón 1d4. Requiere cola. |
| **Swim** | Nadar | — | Sí (+20 ft./extra) | Swim speed equal to base speed. Each extra purchase adds 20 ft. Does not grant water breathing. | Velocidad de natación igual a la base. No otorga respirar bajo el agua. |
| **Tail** | Cola | — | No | Grants a tail appendage; +2 racial bonus on Acrobatics (balance). Enables Tail Slap, Sting. | Otorga cola; +2 racial en Acrobatics (equilibrio). Habilita Sting y Tail Slap. |
| **Tail Slap** | Golpe de Cola | Tail | No | Secondary tail slap attack 1d6 (1d8 Large, 2d6 Huge). | Ataque secundario con la cola 1d6. |
| **Tentacle** | Tentáculo | — | Sí (múltiples) | Secondary tentacle attack 1d4 (1d6 Large, 1d8 Huge). Can be taken multiple times. | Ataque secundario de tentáculo 1d4. Puede comprarse varias veces. |
| **Unnatural Aura** | Aura Sobrenatural | — | No | Normal animals avoid the eidolon within 25 ft. unless Handle Animal DC 25 succeeds. | Los animales normales evitan al eidolón en 25 ft. salvo DC 25 Handle Animal. |
| **Wing Buffet** | Aletazo | Flight (con alas) | No | Two secondary wing buffet attacks 1d4 (1d6 Large, 1d8 Huge). | Dos ataques secundarios de ala 1d4. Requiere vuelo con alas. |

**Total evolutions de 1 punto documentadas: 29**

---

### Evolutions de 2 Puntos

| Nombre EN | Nombre ES | Prerrequisitos | Stacking | Descripción EN | Descripción ES |
|---|---|---|---|---|---|
| **Ability Increase** | Aumento de Característica | — | Sí (1×/atributo + 1 extra/6 niveles) | +2 to one ability score. | +2 a una característica. |
| **Alignment Smite** | Golpe de Alineamiento | — | No | 1/day swift action: +1d6 vs opposite alignment. Treated as aligned for DR. At 10th: 2/day for 1 extra pt. | 1/día acción rápida: +1d6 vs alineamiento opuesto; supera RM de alineamiento. |
| **Channel Resistance** | Resistencia a Canalización | Undead Appearance | No | +2 bonus vs. channel energy effects. +4 at 7th level for 2 extra pts. | +2 a las tiradas vs. canalización de energía. |
| **Constrict** | Constricción | Grab, Solo Serpentine | No | While grappling via Grab, deal extra damage equal to grab attack's damage. | Mientras agarra (Grab), inflige daño extra igual al ataque de agarre. |
| **Energy Attacks** | Ataques de Energía | Summoner 5°+ | No | All natural attacks deal +1d6 energy damage (choose acid/cold/electricity/fire). | Todos los ataques naturales suman +1d6 de energía (ácido/frío/eléctrico/fuego). |
| **Extra Feat** | Dón Extra | Cumplir prerrequisitos del dón | Sí | Gain one bonus feat for which the eidolon qualifies. | Gana un dón adicional para el que califique el eidolón. |
| **Flight** | Vuelo | Summoner 5°+ | Sí (velocidad +20/extra) | Fly speed = base speed; Good maneuverability (Medium/smaller), Average (Large), Poor (Huge). +2 pts: magical flight, no wings, Perfect maneuverability. | Velocidad de vuelo = velocidad base. Con +2 pts: vuelo mágico sin alas, maniobr. perfecta. |
| **Gore** | Corneada | — | No | Primary gore attack 1d6 (1d8 Large, 2d6 Huge). | Ataque primario de corneada 1d6. |
| **Grab** | Agarrar | — | Sí (por tipo de ataque) | After successful hit with selected attack, make free grapple CMB check vs. targets one size smaller. +4 grapple CMB. | Tras golpear, comprobación de agarre gratis vs. objetivo de talla menor o igual. +4 CMC agarre. |
| **Head** | Cabeza Extra | — | Sí | Gain an extra head (no extra attacks, but enables head evolutions: bite, gore, breath weapon). | Cabeza adicional; habilita evoluciones de cabeza (mordisco, corneada, arma de aliento). |
| **Immunity** | Inmunidad | Summoner 7°+ | Sí (por tipo) | Choose one energy type (acid/cold/electricity/fire/sonic); gain immunity. | Inmunidad a un tipo de energía elegido. |
| **Keen Scent** | Olfato Agudo | Gills + Scent | No | Notice creatures by smell within 180 ft. underwater; detect blood up to 1 mile. | Detectar criaturas por olfato a 180 ft. bajo el agua; sangre a 1 milla. |
| **Limbs** | Extremidades | — | Sí | Add a pair of limbs (arms or legs). Legs: +10 ft. speed. Arms: enable arm evolutions, can wield weapons. | Añade un par de extremidades (brazos o patas). Patas: +10 ft. velocidad. Brazos: permiten evoluciones de brazo y usar armas. |
| **Minor Magic** | Magia Menor | CHA 11+, Basic Magic, Summoner 4°+ | No | Cast one 1st-level spell 1/day (3/day at 7th with +2 pts). CL = HD − 2. DC = 10 + ½HD + CHA. | Lanza un hechizo de nivel 1 una vez al día. NL = DG − 2. |
| **Poison** | Veneno | Bite o Sting, Summoner 7°+ | No | On hit: Fort save or 1d4 Str dmg (freq. 1/round × 4 rds, cure 1 save). DC = 10 + ½HD + CON. +2 pts: CON dmg instead. | Veneno en mordisco/aguijón: CON o FUE daño, frecuencia 4 rondas. |
| **Rake** | Rasgar | Claws, Summoner 4°+, Solo Quadruped | No | Two primary rake attacks 1d4 (1d6 Large, 1d8 Huge) when grappling. | Dos ataques de rasgado primario al agarrar. Solo cuadrúpedo. |
| **Rend** | Desgarrar | Claws, Summoner 6°+ | No | Two successful claw hits on same target deal extra claw dmg + 1.5× Str. | Dos golpes de garra al mismo objetivo: daño extra de garra + ×1,5 FUE. |
| **Rock Throwing** | Lanzar Piedras | Large | No | [VERIFICAR — requiere tamaño Large; proyectil 2d6 a distancia media] | Lanza piedras como proyectil; requiere tamaño Grande. |
| **Shadow Blend** | Mezcla con Sombras | — | No | In non-bright light: 20% miss chance (50% with Shadow Form). Toggle free action. | En luz no brillante: 20% de fallo (50% con Shadow Form). Activa/desactiva gratis. |
| **Shadow Form** | Forma de Sombra | — | No | Constant 20% miss chance; melee affects incorporeal (ghost touch); half damage to corporeal. | 20% fallo constante; afecta incorporales; inflige la mitad a corpóreos. |
| **Sickening** | Nauseabundo | — | No | Living creatures within 20 ft. are sickened 1 round unless Fort save (DC = 10 + ½HD + CON). | Criaturas vivas a 20 ft. quedan enfermadas 1 ronda si fallan Fort. |
| **Trample** | Pisotear | Biped o Quad | No | Full-round overrun smaller creatures; 1d6 (1d8 Large, 2d6 Huge) + 1.5× Str; Reflex for half. | Pisotear criaturas menores; daño + Reflex a mitad. Solo bípedo/cuadrúpedo. |
| **Tremorsense** | Tremorsense | Summoner 7°+ | No | Tremorsense 30 ft. (detect creatures in contact with ground). | Detectar criaturas en contacto con el suelo en 30 ft. |
| **Trip** | Derribar | Bite | No | After successful bite, free trip CMB check vs. same-size or smaller targets. | Tras mordisco exitoso, CMC gratis para derribar. |
| **Undead Appearance** | Apariencia no-muerta | — | No | Appears undead; negative energy heals, positive harms. +2 saves vs. disease/paralysis/poison/sleep/stunning. Escalable a nivel 7 (+4) y 12 (inmunidad). | Apariencia de no-muerto; energía negativa cura, positiva daña. Bonos graduales a niveles 7 y 12. |
| **Weapon Training** | Entrenamiento con Armas | — | No | Proficiency with simple weapons. +2 pts: also martial weapons. | Competencia con armas simples. Con +2 pts adicionales: también marciales. |

**Total evolutions de 2 puntos documentadas: 25**

---

### Evolutions de 3 Puntos

| Nombre EN | Nombre ES | Prerrequisitos | Stacking | Descripción EN | Descripción ES |
|---|---|---|---|---|---|
| **Blindsense** | Sentido Ciego | Summoner 9°+ | No | Pinpoint creatures within 30 ft. without seeing them (concealment still applies). | Detectar criaturas a 30 ft. sin verlas; el ocultamiento total todavía aplica. |
| **Burrow** | Excavar | Summoner 9°+ | No | Burrow speed = ½ base speed through earth; leaves no hole. | Velocidad de excavación = ½ base; no deja túnel. |
| **Celestial Appearance** | Apariencia Celestial | Summoner bueno, Good alignment | No | Appears celestial; +2 saves vs. disease/petrification/poison/electricity; SR 5+HD vs. evil. Escalable. | Apariencia celestial; bonos de salvación; RM vs. efectos del mal. Escalable. |
| **Damage Reduction** | Reducción de Daño | Summoner 9°+ | No | DR 5/opposite-alignment weapon. At 12th level: DR 10 for 2 extra pts. | RD 5/tipo opuesto de alineamiento. RD 10 al nivel 12 por 2 puntos extra. |
| **Fiendish Appearance** | Apariencia Infernal | Summoner malvado | No | Appears fiendish; +2 saves vs. acid/disease/fire/poison; SR 5+HD vs. good. Escalable. | Apariencia infernal; bonos de salvación; RM vs. efectos del bien. Escalable. |
| **Frightful Presence** | Presencia Aterradora | Summoner 11°+ | No | 30 ft. radius; Will save or shaken 3d6 rounds. DC = 10 + ½HD + CHA. If 4+ more HD: frightened. | 30 ft. de radio: Will o sacudido 3d6 rondas. Si el eidolón tiene 4+ DG más: asustado. |
| **Major Magic** | Magia Mayor | CHA 12+, Minor Magic, Summoner 7°+ | No | Cast one 2nd-level spell 1/day (3/day at 10th with +2 pts). CL = HD − 2. DC = 10 + ½HD + CHA. | Lanza un hechizo de nivel 2 una vez al día. NL = DG − 2. |
| **Sacrifice** | Sacrificio | — | No | Standard action: sacrifice up to 2 HP/HD, touch target, heal target for half of sacrificed HP. | Acción estándar: sacrifica HP propios para curar objetivo tocado (la mitad). |
| **See in Darkness** | Ver en la Oscuridad | Summoner 9°+ | No | See perfectly in magical darkness, including deeper darkness. | Ve perfectamente en oscuridad mágica, incluso en oscuridad profunda. |
| **Swallow Whole** | Tragar Entero | Grab (bite), Summoner 9°+ | No | If grappled target at turn start, CMB check to swallow. Swallowed takes bite + 1d6 bludgeoning/round. Can cut free. | Tragar al objetivo agarrado por el mordisco; daño continuo/ronda. Puede cortarse para escapar. |
| **Web** | Red/Telaraña | Climb, Summoner 7°+ | No | Ranged touch 50 ft., 8/day; entangles target up to 1 size larger. Escape DC = 10 + ½HD + CON. Webs: Hardness 0, HP = total HD. | Ataque a distancia de contacto que enreda al objetivo. El eidolón siente criaturas tocando su red. |

**Total evolutions de 3 puntos documentadas: 11**

---

### Evolutions de 4 Puntos

| Nombre EN | Nombre ES | Prerrequisitos | Stacking | Descripción EN | Descripción ES |
|---|---|---|---|---|---|
| **Blindsight** | Vista Ciega | Blindsense, Summoner 11°+ | No | 30 ft. blindsight; ignore darkness/invisibility/concealment (needs line of effect). | Vista ciega 30 ft.; ignora oscuridad, invisibilidad y ocultamiento. |
| **Breath Weapon** | Arma de Aliento | Summoner 9°+ | No | 30-ft. cone or 60-ft. line; 1d6 dmg/HD (acid/cold/electricity/fire). Reflex DC = 10+½HD+CON for half. 1/day; +1 pt/extra use (max 3/day). | Cono 30 ft. o línea 60 ft.; 1d6/DG de daño de energía. Reflex para mitad. 1/día expandible. |
| **Dimension Door** | Puerta Dimensional | Summoner 9°+ [VERIFICAR nivel] | No | Eidolon can use dimension door as a spell-like ability. [VERIFICAR frecuencia y detalles completos] | El eidolón puede usar puerta dimensional como habilidad de conjuro. |
| **Fast Healing** | Curación Acelerada | Summoner 11°+ [VERIFICAR] | No | Fast healing 1; heals 1 HP per round automatically. [VERIFICAR si escala con puntos extra] | Curación acelerada 1; regenera 1 PG por ronda automáticamente. |
| **Incorporeal Form** | Forma Incorpórea | Summoner 13°+ [VERIFICAR] | No | Eidolon becomes incorporeal for limited duration. [VERIFICAR detalles y frecuencia] | El eidolón se vuelve incorpóreo temporalmente. |
| **Large** | Grande | Summoner 8°+ [VERIFICAR] | No | Eidolon increases one size category to Large. +8 Str, +4 Con, −2 Dex, −1 AC natural armor, −1 attack. Space 10 ft., Reach 10 ft. | El eidolón sube a talla Grande. +8 FUE, +4 CON, −2 DES, −1 CA natural, −1 ataque. |
| **Lifesense** | Sentido de Vida | Summoner 11°+ [VERIFICAR] | No | Detect living creatures within a radius regardless of concealment. [VERIFICAR rango] | Detectar criaturas vivas en radio independientemente del ocultamiento. |
| **No Breath** | Sin Respiración | — | No | Eidolon no longer needs to breathe; immune to inhaled poisons, drowning, suffocation. | El eidolón no necesita respirar; inmune a venenos inhalados, ahogamiento. |
| **Spell Resistance** | Resistencia a Conjuros | Summoner 9°+ [VERIFICAR] | No | SR = summoner level + 11. [VERIFICAR fórmula exacta] | RM = nivel de invocador + 11. |
| **Ultimate Magic** | Magia Suprema | CHA 13+, Major Magic, Summoner 13°+ | No | Cast one 3rd-level spell 1/day (3/day at 16th with +2 pts). CL = HD − 2. DC = 10 + ½HD + CHA. | Lanza un hechizo de nivel 3 una vez al día. NL = DG − 2. |

**Total evolutions de 4 puntos documentadas: 10**

**Items marcados [VERIFICAR]:** Large (nivel requerido, stats exactos), Fast Healing (escalado), Dimension Door (frecuencia), Incorporeal Form (detalles), Lifesense (rango), Spell Resistance (fórmula).

---

### Resumen del Catálogo

| Coste | Cantidad |
|---|---|
| 1 punto | 29 |
| 2 puntos | 25 |
| 3 puntos | 11 |
| 4 puntos | 10 |
| **TOTAL** | **75** |

---

## 5. Pathfinder Unchained Summoner — Eidolon

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/ (Unchained section), Pathfinder Unchained pg. 25

### Diferencias Fundamentales del Eidolon Unchained vs. Clásico

| Aspecto | Clásico | Unchained |
|---|---|---|
| Forma | Libre (cualquier base form) | Determinada por **subtipo** |
| Evolutions | Pool libre, cualquier evolution | Algunas fijas por subtipo + pool libre reducido |
| Subtipo | Solo alignment subtype | Subtipo de outsider específico (Angel, Demon, etc.) |
| Restricción alineamiento | El eidolon comparte alineamiento | Eidolon debe estar a 1 paso del summoner; subtipo restringe alineamiento |
| Hechizos summoner | Lista completa de conjuros | Lista de conjuros diferente (simplificada) |
| Compatibilidad | APG original | Pathfinder Unchained (2015) |

### Subtipos Disponibles (Unchained)

**Nota:** Las páginas individuales de d20pfsrd/aonprd para subtipos unchained devolvieron 404. La siguiente información es basada en el reglamento Pathfinder Unchained y conocimiento canónico verificado parcialmente. Los items con [VERIFICAR] necesitan confirmación directa en la fuente.

| Subtipo | Alineamiento Required | Descripción |
|---|---|---|
| **Agathion** | Neutral Good | Outsider animal del Nirvana; combina rasgos de bestia y celestial |
| **Angel** | Neutral Good o Lawful Good o Chaotic Good (cualquier bueno) | Mensajero celestial; inmunidades al ácido/frío/petrificación |
| **Archon** | Lawful Good | Paladín celestial del Nirvana; resistencias eléctricas, auras de ley |
| **Azata** | Chaotic Good | Espíritu libre del Elysium; resistencias eléctricas, encantamiento |
| **Daemon** | Neutral Evil | Segador del Abaddon; resistencias ácido/frío/fuego/relámpago |
| **Demon** | Chaotic Evil | Demonio del Abyss; resistencias ácido/frío/fuego/relámpago |
| **Devil** | Lawful Evil | Diablo del Infierno; resistencias ácido/frío |
| **Div** | Neutral Evil [VERIFICAR] | Corruptor del Abaddon/Caligastia; raro |
| **Inevitable** | Lawful Neutral | Constructo-outsider del Axis; DR/caótico |
| **Protean** | Chaotic Neutral | Serpiente del Limbo; inmune ácido, resistencias |
| **Psychopomp** | Neutral | Guía de almas del Boneyard/Purgatorio; resistencias |
| **Qlippoth** | Chaotic Evil [VERIFICAR] | Proto-demonios del Abyss original; extraños |
| **Asura** | Lawful Evil [VERIFICAR] | Tirano del Nirvana caído; resistencias fuego |
| **Daeva** | Neutral Evil [VERIFICAR] | Raro; de Strange Aeons |

### Tabla de Evolution Pool — Unchained Summoner

**Nota:** El pool de evolución del Unchained es ligeramente diferente al clásico porque parte de los puntos están pre-asignados por el subtipo.

[VERIFICAR tabla completa — la progresión general sigue el mismo patrón que el clásico pero algunos puntos del pool están fijados por el subtipo elegido. La tabla numérica exacta requiere acceso a Pathfinder Unchained pg. 25]

### Features Fijas por Subtipo (Estructura General)

Cada subtipo del Unchained otorga features en los HD del eidolon. A continuación la estructura general verificada en parte:

**Angel (ejemplo canónico):**
- HD 1: Resistencia al ácido 5, resistencia al frío 5, resistencia al fuego 5
- HD 4: Habilidad especial de vuelo o inmunidad a efectos de sueño/veneno [VERIFICAR HD exacto]
- HD 8: Resistencia 10 o habilidades adicionales [VERIFICAR]
- HD 12+: DR y/o SR [VERIFICAR]

**Demon (ejemplo canónico):**
- HD 1: Resistencia al ácido 5, resistencia al frío 5, resistencia al fuego 5, resistencia al relámpago 5
- HD 4: Telekinesis o habilidades de miedo [VERIFICAR]
- HD 8+: Inmunidad al fuego o poison immunity [VERIFICAR]

**Devil (ejemplo canónico):**
- HD 1: Resistencia al fuego 5, see in darkness
- HD 4–8: Inmunidad al fuego, resistencia al frío [VERIFICAR progresión]

**Nota General:** Las features exactas de cada subtipo por nivel de HD requieren acceso directo a Pathfinder Unchained. Las páginas online para subtipos unchained individuales retornaron 404 durante esta investigación. Se recomienda consultar Archives of Nethys directamente con la búsqueda: `https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=[SubtypeName]`

### URLs a Verificar para Subtipos Unchained

```
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Agathion
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Angel
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Archon
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Azata
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Daemon
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Demon
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Devil
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Inevitable
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Protean
https://aonprd.com/EidolonUnchainedDisplay.aspx?ItemName=Psychopomp
```

*(Intentar con ItemName URL-encoded si falla la búsqueda directa)*

---

## 6. Archetypes que Cambian el Eidolon

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/

### 6.1 Synthesist

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/synthesist/

**Mecánica Core:** El summoner "lleva" al eidolon como armadura viva traslúcida. Se fusionan en una sola criatura.

| Aspecto | Efecto |
|---|---|
| Stats físicos (FUE, DES, CON) | Usa los del eidolon mientras está fusionado |
| Stats mentales (INT, SAB, CAR) | Usa los del summoner |
| HP del summoner | Separados: el summoner tiene sus propios HP bajo los del eidolon |
| HP del eidolon | Se convierten en HP temporales que actúan como buffer |
| Armadura propia del summoner | No aplica mientras fusionado (usa la del eidolon) |
| BAB | Usa el BAB del eidolon |
| AC | Usa armor bonus + natural armor del eidolon |
| Sentidos | Percibe a través de los sentidos del eidolon |
| Voz | Habla con la voz del eidolon |

**Habilidades de Clase del Synthesist:**
| Nivel | Habilidad | Reemplaza |
|---|---|---|
| 1 | Fused Eidolon (fusión) | Summon Eidolon estándar |
| 1 | Fused Link (sacrificar HP propios para salvar al eidolon) | Life Link |
| 4 | Shielded Meld (+2 shield AC y saves mientras fusionado) | Shield Ally |
| 6 | Maker's Jump (dimension door SLA mientras fusionado) | Maker's Call |
| 12 | Greater Shielded Meld (+4 shield AC y saves) | Greater Shield Ally |
| 16 | Split Forms (separarse del eidolon temporalmente) | Merge Forms |

**Limitaciones:**
- No puede actuar separado del eidolon mientras fusionado
- El eidolon no puede tomar acciones independientes
- Cuando los HP temporales llegan a 0, el eidolon se destruye y se desconvoca
- Solo puede fusionarse 1 vez (el eidolon está siempre fusionado o no está)

---

### 6.2 Master Summoner

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/master-summoner/

**Mecánica Core:** Eidolon más débil a cambio de invocaciones múltiples.

| Aspecto | Efecto |
|---|---|
| Nivel efectivo del eidolon | ½ nivel del summoner (mínimo 1) para HD, Pool, BAB, etc. |
| Evolution Pool | Mitad del pool normal |
| Summon Monster | 5 + CHA/día como SLA; múltiples criaturas activas simultáneamente si eidolon no está presente |
| Restricción | Solo 1 Summon Monster activo mientras el eidolon está presente |

**Habilidades Adicionales:**
- Augment Summoning (dón gratis al nivel 2, sin prerrequisitos) — reemplaza Bond Senses
- Summoning Mastery (reemplaza Summon Monster I y Shield Ally)

**Advertencia del GM:** Este archetype puede alargar mucho los turnos en combate.

---

### 6.3 Broodmaster

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/broodmaster/

**Mecánica Core:** En vez de un eidolon, el summoner comanda múltiples eidolons más pequeños.

| Aspecto | Efecto |
|---|---|
| Número de eidolons | 2 (pequeños al nivel 2); puede aumentar con niveles |
| Tamaño inicial | Small |
| Stats compartidos | BAB y tiradas de salvación son iguales para todos |
| Stats divididos | HD (mínimo 1 c/u), puntos de habilidad, dones, bonus de armadura, bonus FUE/DES, pool de evolución, máximo ataques — se dividen entre los eidolons |
| Evolución | Cada eidolon compra evoluciones por separado de su pool individual |

**Habilidades Especiales:**
| Nivel | Habilidad |
|---|---|
| 8 | Puede gastar 4 EP para aplicar Large antes de dividir el pool |
| 13 | Puede gastar 6 EP adicionales para eidolons de talla Grande |
| 14 | Brood Bond (transfiere daño a un eidolon elegido; exceso de daño mata al summoner) |

**Modificaciones de Habilidades Estándar:**
- Brood Link (reemplaza Life Link): protege solo a 1 eidolon a la vez
- Bond Senses: comparte sentidos con 1 eidolon a la vez
- Maker's Call / Transposition: afecta 1 criatura por uso

---

### 6.4 Naturalist

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/naturalist/

**Mecánica Core:** Eidolon de tipo bestia/planta/elemental con aspectos animales.

| Nivel | Habilidad | Reemplaza |
|---|---|---|
| 1 | Nature's Call (Summon Nature's Ally como SLA: 3 + CHA/día; solo animales/bestias mágicas/vermin) | Summon Monster SLA |
| 4 | Animal Focus (aplica aspecto animal del hunter al eidolon, swift action; nivel efectivo = summoner −2) | Shield Ally |
| 10 | Second Animal Focus (2 aspectos simultáneos al eidolon) | Aspect |
| 14 | Shared Focus (1 aspecto del eidolon también aplica al summoner) | Life Bond |
| 18 | Third Animal Focus (3 aspectos simultáneos) | Greater Aspect |

---

### 6.5 Spirit Summoner

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/spirit-summoner/

**Mecánica Core:** El eidolon debe ser temáticamente apropiado al espíritu elegido.

| Nivel | Habilidad | Reemplaza |
|---|---|---|
| 1 | Spirit Feature (vínculo con espíritu de shamán; acceso a hechizos del espíritu hasta nivel 6) | Summon Monster I |
| 6+ | Hexes del shamán elegido | Aspect, Maker's Call, Merge Forms, Transposition |
| 9 | Greater Spirit version | — |
| 17 | True Spirit version | — |

**Restricción de Eidolon:** Las habilidades del eidolon deben ser apropiadas al espíritu (GM decide). No se puede tener un eidolon de hielo/agua con espíritu de llama, por ejemplo. Las evoluciones temporales (evolution surge) sí están permitidas.

---

### 6.6 Evolutionist

**Fuente:** https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/evolutionist/

**Mecánica Core:** Control mejorado sobre las evoluciones del eidolon.

| Nivel | Habilidad | Reemplaza |
|---|---|---|
| 6 | Mutate Eidolon (ritual de 24h + 200 gp/nivel; cambia evoluciones del eidolon como si subiera de nivel) | Maker's Call |
| 8 | Evolve Base Form (puede cambiar la forma base al subir de nivel) | Transposition |
| 12 | Transmogrify 1/día como SLA sin componente material (tiempo de lanzamiento 1 minuto) | Greater Shield Ally |

---

### 6.7 Otros Archetypes Notables

| Archetype | Fuente | Efecto Principal en Eidolon |
|---|---|---|
| **Morphic Savant** | Paizo | [VERIFICAR — relacionado con cambiar forma del eidolon más frecuentemente] |
| **First Worlder** | Paizo | [VERIFICAR — eidolon de tipo First World/hada] |
| **Counter Summoner** | Paizo | [VERIFICAR — posiblemente reduce capacidades del eidolon a cambio de anti-summoning] |
| **Story Summoner** | Paizo | [VERIFICAR — eidolon ligado a narrativa/historia] |
| **Blood Summoner** | Paizo | [VERIFICAR — posiblemente HP como recurso] |
| **Wild Caller** | Paizo (también Half-Elf racial) | [VERIFICAR — eidolon de tipo natural] |
| **Shadow Caller** | Paizo (Fetchling racial) | Eidolon del Plane of Shadow |
| **Blood God Disciple** | Paizo (Half-Orc racial) | [VERIFICAR] |

---

## 7. Schemas JSON Sugeridos

### 7.1 `eidolon_base_forms.json`

```json
[
  {
    "id": "biped",
    "name_en": "Biped",
    "name_es": "Bípedo",
    "size": "Medium",
    "speed": { "land": 30 },
    "natural_armor_base": 2,
    "ability_scores": {
      "str": 16, "dex": 12, "con": 13,
      "int": 7, "wis": 10, "cha": 11
    },
    "good_saves": ["fort", "will"],
    "poor_saves": ["ref"],
    "free_evolutions": ["claws", "limbs_arms", "limbs_legs"],
    "class_skills": ["Climb", "Fly", "Knowledge (planes)", "Perception", "Stealth", "Swim"],
    "natural_attacks": [
      { "name": "Claws", "count": 2, "damage": "1d4", "type": "primary" }
    ],
    "source": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/"
  },
  {
    "id": "quadruped",
    "name_en": "Quadruped",
    "name_es": "Cuadrúpedo",
    "size": "Medium",
    "speed": { "land": 40 },
    "natural_armor_base": 2,
    "ability_scores": {
      "str": 14, "dex": 14, "con": 13,
      "int": 7, "wis": 10, "cha": 11
    },
    "good_saves": ["fort", "ref"],
    "poor_saves": ["will"],
    "free_evolutions": ["bite", "limbs_legs", "limbs_legs_2"],
    "class_skills": ["Acrobatics", "Climb", "Knowledge (planes)", "Perception", "Stealth", "Swim"],
    "natural_attacks": [
      { "name": "Bite", "count": 1, "damage": "1d6", "type": "primary" }
    ],
    "source": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/"
  },
  {
    "id": "serpentine",
    "name_en": "Serpentine",
    "name_es": "Serpentino",
    "size": "Medium",
    "speed": { "land": 20, "climb": 20 },
    "natural_armor_base": 2,
    "ability_scores": {
      "str": 12, "dex": 16, "con": 13,
      "int": 7, "wis": 10, "cha": 11
    },
    "good_saves": ["ref", "will"],
    "poor_saves": ["fort"],
    "free_evolutions": ["bite", "climb", "reach_bite", "tail", "tail_slap"],
    "class_skills": ["Acrobatics", "Climb", "Escape Artist", "Knowledge (planes)", "Perception", "Stealth", "Swim"],
    "natural_attacks": [
      { "name": "Bite", "count": 1, "damage": "1d6", "type": "primary", "reach": true },
      { "name": "Tail Slap", "count": 1, "damage": "1d6", "type": "secondary" }
    ],
    "source": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/"
  }
]
```

### 7.2 `eidolon_evolutions.json` (estructura por entrada)

```json
[
  {
    "id": "bite",
    "name_en": "Bite",
    "name_es": "Mordisco",
    "cost": 1,
    "prereqs": {
      "summoner_level_min": null,
      "requires_evolution": null,
      "base_form_required": null,
      "alignment_required": null
    },
    "stacking": false,
    "stacking_notes": "Solo se puede tener 1 Bite a la vez",
    "damage_base": "1d6",
    "damage_large": "1d8",
    "damage_huge": "2d6",
    "attack_type": "primary",
    "description_en": "Primary bite attack 1d6 (1d8 Large, 2d6 Huge). If eidolon already has a bite, adds 1.5× Str modifier.",
    "description_es": "Ataque primario de mordisco 1d6. Si ya tiene mordisco, aplica ×1,5 FUE.",
    "category": "attack",
    "source": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/"
  },
  {
    "id": "flight",
    "name_en": "Flight",
    "name_es": "Vuelo",
    "cost": 2,
    "prereqs": {
      "summoner_level_min": 5,
      "requires_evolution": null,
      "base_form_required": null,
      "alignment_required": null
    },
    "stacking": true,
    "stacking_notes": "Cada compra adicional aumenta velocidad de vuelo +20 ft.",
    "variants": [
      {
        "extra_cost": 0,
        "description_en": "Wings; fly speed = base speed; maneuverability by size",
        "maneuverability": { "medium_smaller": "good", "large": "average", "huge": "poor" }
      },
      {
        "extra_cost": 2,
        "description_en": "Magical flight, no wings, Perfect maneuverability",
        "maneuverability": "perfect"
      }
    ],
    "description_en": "Fly speed equals base speed. Medium/smaller: good maneuverability. Requires summoner 5th.",
    "description_es": "Velocidad de vuelo igual a base. Maniobr. buena para Medium o menor. Req. invocador nivel 5.",
    "category": "movement",
    "source": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/"
  }
]
```

### 7.3 `eidolon_subtypes.json` (Unchained, estructura por entrada)

```json
[
  {
    "id": "angel",
    "name_en": "Angel",
    "name_es": "Ángel",
    "alignment_required": ["lawful good", "neutral good", "chaotic good"],
    "alignment_note": "Cualquier alineamiento bueno",
    "outsider_subtype": "good",
    "good_saves": ["ref", "will"],
    "poor_saves": ["fort"],
    "class_skills": ["VERIFICAR lista completa"],
    "features_by_hd": [
      {
        "hd": 1,
        "features": [
          { "name": "Resistance (acid)", "value": 5 },
          { "name": "Resistance (cold)", "value": 5 },
          { "name": "Resistance (electricity)", "value": 5 }
        ]
      },
      {
        "hd": 4,
        "features": ["VERIFICAR"]
      }
    ],
    "evolution_pool_note": "Parte del pool está pre-asignada a las features de subtipo",
    "source": "Pathfinder Unchained pg. 25 [VERIFICAR URLs aonprd]"
  },
  {
    "id": "demon",
    "name_en": "Demon",
    "name_es": "Demonio",
    "alignment_required": ["chaotic evil"],
    "outsider_subtype": "evil chaotic",
    "good_saves": ["VERIFICAR"],
    "poor_saves": ["VERIFICAR"],
    "class_skills": ["VERIFICAR"],
    "features_by_hd": [
      {
        "hd": 1,
        "features": [
          { "name": "Resistance (acid)", "value": 5 },
          { "name": "Resistance (cold)", "value": 5 },
          { "name": "Resistance (fire)", "value": 5 },
          { "name": "Resistance (electricity)", "value": 5 }
        ]
      }
    ],
    "source": "Pathfinder Unchained pg. 25 [VERIFICAR]"
  }
]
```

---

## 8. Campos UI Necesarios

### 8.1 Inputs Editables

| Campo | Tipo | Notas |
|---|---|---|
| Nombre del eidolon | text | Libre |
| Nivel del summoner | number (1–20) | Auto-calcula progresión |
| Forma base | select | biped/quadruped/serpentine/aquatic/avian/tauric |
| Modo (clásico/unchained) | radio | Cambia campos disponibles |
| Subtipo unchained | select | Solo visible si modo = unchained |
| Archetype mode | select | standard/synthesist/master/broodmaster/naturalist/spirit/evolutionist |
| Alineamiento del eidolon | select | LG/NG/CG/LN/N/CN/LE/NE/CE |
| STR base | number | Modificado por forma + evolution bonuses |
| DEX base | number | — |
| CON base | number | — |
| INT base | number | Mínimo 7 (puede aumentarse con Ability Increase) |
| WIS base | number | — |
| CHA base | number | Mínimo 11 para algunas evoluciones |
| HP actuales | number | Tracker |
| HP máximos | calculated | HD × (5 + CON mod promedio) |
| Nombre del invocador | text | Referencia |

### 8.2 Outputs Calculados

| Campo | Cálculo |
|---|---|
| HD total | Según tabla de progresión (columna HD) |
| BAB | Según tabla |
| Fort save | Good o Poor según forma + modificador CON |
| Ref save | Good o Poor según forma + modificador DEX |
| Will save | Good o Poor según forma + modificador SAB |
| AC total | 10 + natural armor (tabla) + forma base + DEX mod + otros |
| AC Natural Armor total | Tabla armor bonus + free armor (forma) + Improved Natural Armor comprada |
| Str/Dex enhancement | Columna tabla aplicada sobre base |
| Evolution Pool total | Columna Evol Pool según nivel |
| Evolution Points usados | Suma de costos de evoluciones seleccionadas |
| Evolution Points disponibles | Total − Usados |
| Número de ataques naturales | Conteo de evoluciones de ataque |
| Tamaño actual | Base form + Large evolution si comprada |
| Velocidad de movimiento | Base form + Limbs bonus + evolutions |
| Feats totales | Columna Feats + Multiattack (nivel 9) |
| Skills totales | (4 + INT mod) × HD |

### 8.3 Selectores

| Selector | Opciones |
|---|---|
| Forma base | Biped, Quadruped, Serpentine, Aquatic, Avian, Tauric |
| Modo clásico/unchained | Classic, Unchained |
| Subtipo unchained | Agathion, Angel, Archon, Azata, Daemon, Demon, Devil, Inevitable, Protean, Psychopomp [más si se verifican] |
| Archetype | Standard, Synthesist, Master Summoner, Broodmaster, Naturalist, Spirit Summoner, Evolutionist |
| Alineamiento | LG, NG, CG, LN, N, CN, LE, NE, CE |
| Tipo de daño (Energy Attacks) | Acid, Cold, Electricity, Fire |
| Tipo Breath Weapon | Acid, Cold, Electricity, Fire |

### 8.4 Listas Dinámicas

| Lista | Comportamiento |
|---|---|
| Evolutions seleccionadas | Array de objetos; muestra nombre, costo, descripción; calcula EP usados |
| Ataques naturales | Auto-poblado desde free evolutions + evolutions de ataque compradas; muestra nombre, dado de daño, tipo (primario/secundario) |
| Resistencias elementales | Auto-poblado desde evolution Resistance; muestra tipo y valor actual según nivel |
| Habilidades especiales pasivas | Auto-poblado desde tabla: Darkvision, Evasion, Devotion, etc. por nivel |
| Feats del eidolon | Lista de dones; incluye Multiattack automático al nivel 9 |

### 8.5 Trackers

| Tracker | Tipo | Notas |
|---|---|---|
| HP actuales | number input + barra | Buffer HP temporales si Synthesist |
| HP temporales (Synthesist) | number input + barra | Separado del HP del summoner |
| Fast Healing (si aplica) | display | Muestra valor cuando la evolution está activa |
| Usos de Breath Weapon | number (0/1, 0/2, o 0/3) | Resetea diariamente |
| Usos de habilidades SLA | número/día | Para Minor Magic, Major Magic, Ultimate Magic |

---

## 9. Synthesist Mode — UI Específico

### Toggle de Estado

```
[ ] Fusionado  [●] Separado
```

Cuando el toggle cambia:
- **Separado:** Muestra stats del summoner normales. El eidolon aparece como panel separado con sus propios stats.
- **Fusionado:** Reemplaza visualmente las columnas de stats físicos del summoner por los del eidolon.

### Panel en Modo Fusionado

| Campo | Fuente |
|---|---|
| FUE efectiva | Eidolon (tabla base + evolutions + progression bonus) |
| DES efectiva | Eidolon |
| CON efectiva | Eidolon |
| INT | Summoner |
| SAB | Summoner |
| CAR | Summoner |
| HP temporales (buffer) | HP máximos del eidolon |
| HP propios summoner | Ocultos bajo buffer; se revelan cuando buffer = 0 |
| BAB | Eidolon |
| Armor Class | 10 + armor eidolon + natural armor eidolon + DEX eidolon + shield (Shielded Meld si nivel 4+) |
| Ataques naturales | Los del eidolon |
| Feats | Combina feats del summoner + eidolon [VERIFICAR cuáles aplican fusionado] |

### Lógica de Daño (Synthesist Fusionado)

```
1. El daño entrante primero reduce HP temporales del eidolon.
2. Cuando HP_temp_eidolon = 0 → el eidolon es destruido y desconvocado.
3. Fused Link: el summoner puede declarar "sacrifico X HP propios" para prevenir 
   que los HP_temp del eidolon bajen a 0. (Límite: no puede sacrificar HP que lo 
   lleven a él mismo a -CON)
4. El summoner puede usar Fused Link reactivamente cuando el eidolon recibiría 
   el daño letal.
```

### Diferencias de Capacidades (Synthesist vs. Estándar)

| Capacidad | Síntesis |
|---|---|
| Sentidos independientes | No — todo por el eidolon |
| Lanzar hechizos fusionado | Sí, con la voz/gestos del eidolon |
| Equipo del summoner | No aplica armadura propia; rings, neck, etc. sí [VERIFICAR slots] |
| Movimiento | Usa velocidad del eidolon |
| Tamaño | El del eidolon (afecta slots de equipo) |

---

## 10. Persistencia e i18n

### 10.1 Claves para `exportData()` / `importData()`

```json
{
  "eidolon": {
    "name": "",
    "summoner_level": 1,
    "base_form": "biped",
    "mode": "classic",
    "unchained_subtype": null,
    "archetype": "standard",
    "alignment": "N",
    "ability_scores_base": {
      "str": 16, "dex": 12, "con": 13, "int": 7, "wis": 10, "cha": 11
    },
    "hp_current": 0,
    "hp_temp_synthesist": 0,
    "evolutions_selected": [],
    "feats_selected": [],
    "skills_ranks": {},
    "natural_attacks_custom": [],
    "tracker_breath_weapon_uses": 0,
    "tracker_sla_uses": {},
    "notes": "",
    "synthesist_fused": false
  }
}
```

### 10.2 Claves `data-i18n` Sugeridas

| Clave i18n | EN | ES |
|---|---|---|
| `eidolon.section.title` | "Eidolon" | "Eidolón" |
| `eidolon.name.label` | "Eidolon Name" | "Nombre del Eidolón" |
| `eidolon.base_form.label` | "Base Form" | "Forma Base" |
| `eidolon.base_form.biped` | "Biped" | "Bípedo" |
| `eidolon.base_form.quadruped` | "Quadruped" | "Cuadrúpedo" |
| `eidolon.base_form.serpentine` | "Serpentine" | "Serpentino" |
| `eidolon.base_form.aquatic` | "Aquatic" | "Acuático" |
| `eidolon.base_form.avian` | "Avian" | "Aviar" |
| `eidolon.base_form.tauric` | "Tauric" | "Táurico" |
| `eidolon.mode.classic` | "Classic Summoner" | "Invocador Clásico" |
| `eidolon.mode.unchained` | "Unchained Summoner" | "Invocador Liberado" |
| `eidolon.subtype.label` | "Eidolon Subtype" | "Subtipo de Eidolón" |
| `eidolon.archetype.label` | "Archetype" | "Arquetipo" |
| `eidolon.archetype.standard` | "Standard" | "Estándar" |
| `eidolon.archetype.synthesist` | "Synthesist" | "Sintetista" |
| `eidolon.archetype.master` | "Master Summoner" | "Invocador Maestro" |
| `eidolon.archetype.broodmaster` | "Broodmaster" | "Maestro de Camada" |
| `eidolon.archetype.naturalist` | "Naturalist" | "Naturalista" |
| `eidolon.archetype.spirit` | "Spirit Summoner" | "Invocador Espiritual" |
| `eidolon.archetype.evolutionist` | "Evolutionist" | "Evolucionista" |
| `eidolon.evolution_pool.label` | "Evolution Pool" | "Reserva de Evolución" |
| `eidolon.evolution_pool.used` | "Used" | "Usado" |
| `eidolon.evolution_pool.available` | "Available" | "Disponible" |
| `eidolon.evolutions.section` | "Evolutions" | "Evoluciones" |
| `eidolon.evolutions.add` | "Add Evolution" | "Añadir Evolución" |
| `eidolon.evolutions.cost` | "Cost" | "Coste" |
| `eidolon.evolutions.prereqs` | "Prerequisites" | "Prerrequisitos" |
| `eidolon.attacks.section` | "Natural Attacks" | "Ataques Naturales" |
| `eidolon.attacks.primary` | "Primary" | "Primario" |
| `eidolon.attacks.secondary` | "Secondary" | "Secundario" |
| `eidolon.progression.hd` | "Hit Dice" | "Dados de Golpe" |
| `eidolon.progression.bab` | "BAB" | "BBA" |
| `eidolon.progression.fort` | "Fortitude" | "Fortaleza" |
| `eidolon.progression.ref` | "Reflex" | "Reflejos" |
| `eidolon.progression.will` | "Will" | "Voluntad" |
| `eidolon.progression.armor` | "Armor Bonus" | "Bonificación de Armadura" |
| `eidolon.progression.str_dex` | "Str/Dex Bonus" | "Bonif. FUE/DES" |
| `eidolon.hp.current` | "Current HP" | "PG Actuales" |
| `eidolon.hp.max` | "Max HP" | "PG Máximos" |
| `eidolon.hp.temp` | "Temp HP (Eidolon Buffer)" | "PG Temp. (Buffer Eidolón)" |
| `eidolon.synthesist.toggle` | "Fused" | "Fusionado" |
| `eidolon.synthesist.fused_label` | "Fused with Eidolon" | "Fusionado con el Eidolón" |
| `eidolon.synthesist.separated_label` | "Separated from Eidolon" | "Separado del Eidolón" |
| `eidolon.ac.natural_armor` | "Natural Armor" | "Armadura Natural" |
| `eidolon.saves.good` | "Good" | "Buena" |
| `eidolon.saves.poor` | "Poor" | "Mala" |
| `eidolon.special.darkvision` | "Darkvision 60 ft." | "Visión en Oscuridad 60 ft." |
| `eidolon.special.evasion` | "Evasion" | "Evasión" |
| `eidolon.special.devotion` | "Devotion" | "Devoción" |
| `eidolon.special.multiattack` | "Multiattack" | "Multiataques" |
| `eidolon.special.improved_evasion` | "Improved Evasion" | "Evasión Mejorada" |
| `eidolon.link.section` | "Summoner Link" | "Vínculo con el Invocador" |
| `eidolon.link.life_link` | "Life Link" | "Vínculo de Vida" |
| `eidolon.unchained.features` | "Subtype Features" | "Rasgos de Subtipo" |
| `eidolon.unchained.features_by_hd` | "Features at HD {n}" | "Rasgos al DG {n}" |

---

## Notas de Implementación

### Prioridad de Implementación Sugerida

1. **Fase 1 — Core Clásico:** Secciones 1, 2, 3 — stats base, tabla de progresión, forma base selector
2. **Fase 2 — Evolutions:** Sección 4 — catálogo de evolutions con selector multi-selección y cálculo de EP
3. **Fase 3 — UI Completo:** Sección 8 — todos los campos, ataques auto-poblados, trackers
4. **Fase 4 — Synthesist:** Sección 9 — toggle fusión, HP buffer
5. **Fase 5 — Unchained:** Sección 5 — subtipos (requiere verificar datos con fuente impresa o aonprd)
6. **Fase 6 — Archetypes:** Sección 6 — modificaciones por archetype

### Datos que Requieren Verificación Directa en Fuente

Items marcados [VERIFICAR] en este documento:
- Tabla completa de EP para Unchained Summoner (Pathfinder Unchained pg. 25)
- Features por HD de cada subtipo unchained (Pathfinder Unchained pg. 25–40 aprox.)
- Stats exactos de Large evolution (+8 Str, +4 Con, −2 Dex está en PRD pero conviene confirmar)
- Fast Healing — escalado con puntos adicionales
- Dimension Door — frecuencia de uso como SLA
- Incorporeal Form — duración y detalles
- Lifesense — rango exacto
- Spell Resistance — fórmula exacta
- Archetypes menores (Morphic Savant, First Worlder, Counter Summoner, Story Summoner, Blood Summoner)
- Skills completas de clase para cada base form

### Compatibilidad con FALLBACK_DB (file://)

Recordar que para `file://` la app cae al FALLBACK_DB. Los archivos `eidolon_base_forms.json`, `eidolon_evolutions.json`, y `eidolon_subtypes.json` **deben también tener su contenido inline** en `index.html` dentro del bloque FALLBACK_DB, igual que archetypes.json y classes.json.

---

*Documento generado: 2026-04-29 | Fuentes primarias: d20pfsrd.com, aonprd.com*
*Verificar items marcados [VERIFICAR] antes de implementar*
