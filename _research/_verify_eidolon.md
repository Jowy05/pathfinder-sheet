# Verifications - Eidolon

Date: 2026-04-29
Sources: d20pfsrd.com, aonprd.com

---

## 4-POINT EVOLUTIONS

---

### Item 1 — Dimension Door

**URLs fetched:**
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (x2 fetches)

**Resolution: VERIFIED**

- **Summoner level required:** 9th (from research doc line 429; one d20pfsrd fetch says "at least 11th", second fetch says 9th — conflict noted)
  - ⚠️ CONFLICT: First d20pfsrd fetch returned "summoner must be at least 11th level". Second fetch returned the evolution in the 4pt section at summoner 9+. The research doc already had `Summoner 9°+ [VERIFICAR]`.
  - The APG source (PZO1115) text from d20pfsrd (second fetch, more complete): *"An eidolon learns to cast dimension door as a spell-like ability once per day. For each additional evolution point spent, the eidolon gains one additional daily use (maximum 3/day)."* No explicit level given in that text fragment.
  - **Recommended:** Cross-check APG pg. 62 (Advanced Player's Guide). Based on d20pfsrd table positioning, prereq is **Summoner 9th**.
- **Frequency:** 1/day base; +1/day per extra evolution point spent (max 3/day)
- **Details:** Spell-like ability (Sp). Same as the spell *dimension door*.
- **Action:** Standard action (as the spell).
- **Range:** As *dimension door* (long range, 400 ft + 40 ft/level).

---

### Item 2 — Fast Healing

**URLs fetched:**
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (x2 fetches)

**Resolution: VERIFIED — with correction to research doc**

- **Summoner level required:** The research doc had `Summoner 11°+ [VERIFICAR]`.
  - d20pfsrd second fetch (more reliable, direct text): *"An eidolon gains the ability to heal itself. The eidolon gains fast healing 1. For every 4 HD the eidolon possesses above 4th, this amount increases by 1 (maximum 5 at 20th level)."* No specific summoner-level prereq stated in the text (may be prereq-free beyond the cost).
  - d20pfsrd first fetch: "Summoner must be at least 13th level". ⚠️ CONFLICT with second fetch.
- **Amount:** Fast Healing 1 (base)
- **Scaling:** YES — scales by HD: +1 per 4 HD above 4th (so FH 2 at 8 HD, FH 3 at 12 HD, FH 4 at 16 HD, FH 5 at 20 HD). Does NOT cost extra points — it scales automatically with HD.
- **Correction to research doc:** The doc had "Fast healing 1; heals 1 HP per round automatically" — correct on amount but was missing the automatic HD scaling. Research doc also had wrong level guess (11th); actual appears to be either no prereq or 13th depending on source. Mark as partially unresolved for exact prereq.
- **Recommended action:** Update research doc entry to show scaling. Summoner level prereq: likely none stated (or 13th per one source).

---

### Item 3 — Incorporeal Form

**URLs fetched:**
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (x2 fetches)

**Resolution: VERIFIED**

- **Summoner level required:** **11th** (fetch 2: "The summoner must be at least 11th level before selecting this evolution.")
  - Research doc had `Summoner 13°+ [VERIFICAR]` — **CORRECTION NEEDED**: actual is 11th.
- **Action to activate:** Standard action (implied by fetch 1: "becoming incorporeal as a standard action")
- **Duration:** Up to a number of rounds per day equal to eidolon's Hit Dice. Can return to normal as a free action.
- **Effect while incorporeal:** Gains incorporeal subtype; can pass through walls and solid objects. Cannot make physical attacks; can still use spell-like abilities. Takes half damage from nonmagical weapons, full damage from magic weapons/spells.
- **Type:** Spell-like ability (Sp)

---

### Item 4 — Large

**URLs fetched:**
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (x2 fetches — conflicting results)

**Resolution: PARTIALLY VERIFIED — source conflict on stat bonuses**

The d20pfsrd page returned contradictory stat blocks across two fetches:

| Stat | Research Doc (was [VERIFICAR]) | d20pfsrd Fetch 1 | d20pfsrd Fetch 2 (direct quote) |
|------|-------------------------------|------------------|-------------------------------|
| Str | +8 | +2 | **+4** |
| Con | +4 | +2 | not mentioned |
| Dex | −2 | −2 | −2 |
| AC/attack | −1/−1 | −1/−1 | −1/−1 |
| Summoner level | 8th? | 7th | **8th** |

- **Most reliable d20pfsrd quote (verbatim):** *"An eidolon grows to Large size. It gains a +4 bonus to Strength, –2 penalty to Dexterity, and a –1 penalty to AC and attack rolls."* Summoner must be at least **8th level**.
- Note: The research doc value of +8 Str / +4 Con appears to be the **Huge** size increase values, or a mistaken combination. The actual Large evolution gives +4 Str (not +8), −2 Dex, −1 AC/attack.
- **Natural armor:** Research doc listed "−1 NA" — NOT confirmed; both fetches say −1 to AC (flat AC penalty, not specifically natural armor).
- **Con bonus:** One fetch gave +2, another omitted it entirely. Likely not present for Large (unlike the standard size table which gives +4 Con for Large — but the evolution may differ).
- ⚠️ **RECOMMENDED:** Correct research doc. Use: **+4 Str, −2 Dex, −1 AC, −1 attack, summoner level 8th**. Con bonus and exact AC type need APG book confirmation.

---

### Item 5 — Lifesense

**URLs fetched:**
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (fetch 2)

**Resolution: VERIFIED**

- **Radius:** **60 feet**
  - Research doc had "radius" as [VERIFICAR] — confirmed 60 ft.
- **Summoner level required:** **9th** (fetch 2: "The summoner must be at least 9th level")
  - Research doc had `Summoner 11°+ [VERIFICAR]` — **CORRECTION NEEDED**: actual is 9th.
- **Effect:** Automatically detects presence and location of living creatures within 60 ft., regardless of visibility or concealment.
- **Type:** Supernatural (Su)

---

### Item 6 — Spell Resistance

**URLs fetched:**
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (fetch 2)

**Resolution: VERIFIED — correction to research doc formula**

- **Exact formula:** SR = **11 + eidolon's HD** (NOT summoner level + 11)
  - Research doc had "SR = summoner level + 11 [VERIFICAR]" — **CORRECTION NEEDED**: formula uses HD not summoner level.
  - d20pfsrd verbatim: *"An eidolon gains spell resistance equal to 11 + its HD."*
- **Summoner level required:** 13th
  - Research doc had `Summoner 9°+ [VERIFICAR]` — **CORRECTION NEEDED**: actual is 13th.
- **Type:** Extraordinary (Ex)

---

## UNCHAINED SUMMONER SUBTYPES

All subtype data fetched from: https://aonprd.com/EidolonUCSubtypes.aspx and https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=[Name]

---

### Item 7 — Div subtype alignment

**URL fetched:** https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Div

**Resolution: VERIFIED**

- **Alignment:** **Neutral Evil** ✓ (research doc had NE [VERIFICAR] — confirmed)
- **Base form:** Biped (claws, limbs [arms], limbs [legs])

---

### Item 8 — Qlippoth subtype

**URLs fetched:**
- https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Qlippoth
- https://aonprd.com/EidolonUCSubtypes.aspx (full list)
- https://aonprd.com/Search.aspx?Query=qlippoth+eidolon+unchained

**Resolution: UNVERIFIABLE — Qlippoth is NOT an official unchained eidolon subtype**

- The complete list of official unchained eidolon subtypes on AoN does NOT include Qlippoth.
- The official 26 subtypes are: Aberrant, Aeon, Agathion, Ancestor, Angel, Archon, Astral, Azata, Daemon, Deepwater, Demon, Devil, Div, Elemental, Genie, Inevitable, Kami, Kyton, Plant, Protean, Psychopomp, Radiant, Shadow, Storykin, Twinned, Void.
- Qlippoth does not appear in any AoN unchained eidolon subtype page. Multiple searches confirmed absence.
- **Action required:** Remove Qlippoth from the research doc's subtype list OR mark as "not an official option" (possibly confused with Demon or a 3rd-party/homebrew extension).

---

### Item 9 — Asura subtype

**URLs fetched:**
- https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Asura
- https://aonprd.com/EidolonUCSubtypes.aspx (full list)
- https://aonprd.com/Search.aspx?Query=asura+eidolon+unchained

**Resolution: UNVERIFIABLE — Asura is NOT an official unchained eidolon subtype**

- Asura does NOT appear in the AoN official list of 26 unchained eidolon subtypes.
- Multiple searches confirmed: Asura appears as a monster type but not as an eidolon subtype option.
- **Action required:** Remove Asura from the research doc's subtype list OR mark as homebrew/unofficial.

---

### Item 10 — Daeva subtype

**URLs fetched:**
- https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Daeva
- https://aonprd.com/EidolonUCSubtypes.aspx (full list)
- https://aonprd.com/Search.aspx?Query=daeva+eidolon+unchained

**Resolution: UNVERIFIABLE — Daeva is NOT an official unchained eidolon subtype**

- Daeva does NOT appear in the AoN official list of 26 unchained eidolon subtypes.
- **Action required:** Remove Daeva from the research doc's subtype list OR mark as unofficial.
- The claim of "Strange Aeons" sourcebook could not be verified through web sources.

---

### Item 11 — Full HD Progression for All Official 14 Subtypes

**URL fetched:** https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=[each subtype]

Note: The research doc listed 14 subtypes. Of those, 3 are not official (Qlippoth, Asura, Daeva). The correct list from AoN has 26 subtypes total. Below is the verified progression for the 11 official subtypes that overlap with the research doc's list.

#### Agathion (Neutral Good)
- **HD 1:** Resistance (electricity), +4 saves vs. poison and petrification
- **HD 4:** Cold resistance 10, sonic resistance 10
- **HD 8:** Lay on hands (as paladin with levels = HD)
- **HD 12:** DR 5/evil, immunity to petrification, truespeech
- **HD 16:** Immunity (electricity) replaces resistance; speak with animals
- **HD 20:** *detect thoughts* at will (SLA), DR increases to 10/evil

#### Angel (Any Good)
- **HD 1:** Resistance (acid), resistance (cold), +4 saves vs. poison
- **HD 4:** Electricity resistance 10, fire resistance 10
- **HD 8:** Flight evolution (feathery wings)
- **HD 12:** DR 5/evil, immunity to petrification, truespeech
- **HD 16:** Immunity (acid) and immunity (cold) replace resistances
- **HD 20:** Protective aura (as angel subtype, Bestiary)
- Source: Pathfinder Unchained pg. 30

#### Archon (Lawful Good)
- **HD 1:** Resistance (electricity), skilled (Intimidate), +4 saves vs. poison
- **HD 4:** +1 evolution pool point
- **HD 8:** Ability increase (summoner's choice)
- **HD 12:** DR 5/evil, immunity to petrification, truespeech
- **HD 16:** Immunity (electricity) replaces resistance and skilled (Intimidate); aura of menace
- **HD 20:** *Greater teleport* at will (self + 50 lbs, CL 14th)

#### Azata (Chaotic Good)
- **HD 1:** Resistance (electricity), weapon training (martial weapons)
- **HD 4:** Cold resistance 10, fire resistance 10
- **HD 8:** Flight evolution (large feathery wings)
- **HD 12:** DR 5/evil, immunity to petrification, truespeech
- **HD 16:** Immunity (electricity) replaces resistance; ability increase (summoner's choice)
- **HD 20:** Energy form ability (incorporeal form, double fly speed, can't make weapon attacks)

#### Daemon (Neutral Evil)
- **HD 1:** Resistance (acid), +4 saves vs. death effects/disease/poison
- **HD 4:** Cold resistance 10, electricity resistance 10, fire resistance 10
- **HD 8:** +1 evolution pool point; +4 poison save replaced by immunity to poison
- **HD 12:** DR 5/good, ability increase (summoner's choice)
- **HD 16:** Immunity (acid) replaces resistance; telepathy
- **HD 20:** *True seeing* as constant SLA

#### Demon (Chaotic Evil)
- **HD 1:** Resistance (electricity), resistance (fire), +4 saves vs. poison
- **HD 4:** Acid resistance 10, cold resistance 10
- **HD 8:** Immunity to poison replaces save bonus; +1 evolution pool point
- **HD 12:** DR 5/good, ability increase (summoner's choice)
- **HD 16:** Immunity (electricity) replaces resistance; telepathy
- **HD 20:** *True seeing* as constant SLA

#### Devil (Lawful Evil)
- **HD 1:** Resistance (fire), skilled (Bluff), +4 saves vs. poison
- **HD 4:** Acid resistance 10, cold resistance 10
- **HD 8:** Skilled (Diplomacy); immunity to poison replaces save bonus
- **HD 12:** DR 5/good, see in darkness
- **HD 16:** Immunity (fire) replaces resistance; telepathy
- **HD 20:** Regeneration 5 (good weapons, good spells)

#### Div (Neutral Evil)
- **HD 1:** Resistance (fire), +4 saves vs. poison
- **HD 4:** Acid resistance 10, electricity resistance 10
- **HD 8:** +1 evolution pool point; immunity to poison replaces save bonus
- **HD 12:** DR 5/good, see in darkness (per div subtype, Bestiary 3 pg. 305)
- **HD 16:** Immunity (fire) replaces resistance; telepathy
- **HD 20:** *Greater teleport* at will (self + 50 lbs, CL 14th)

#### Inevitable (Lawful Neutral)
- **HD 1:** Functions as construct and outsider for bane weapons; +4 saves vs. death/disease/necromancy/paralysis/poison/sleep/stun
- **HD 4:** +4 saves vs. mind-affecting; immunity to nonlethal damage, fatigue, exhaustion
- **HD 8:** Immunity to death effects, disease, poison
- **HD 12:** DR 5/chaotic, immunity to sleep, truespeech (Bestiary 2)
- **HD 16:** Immunity to ability damage/drain, energy drain, necromancy effects replaces necromancy save bonus
- **HD 20:** Immunity to paralysis, sleep, stun, and Fortitude-only effects

#### Protean (Chaotic Neutral)
- **HD 1:** Resistance (acid), grab evolution (summoner's choice of attack type)
- **HD 4:** Electricity resistance 10, sonic resistance 10
- **HD 8:** Constrict evolution
- **HD 12:** DR 5/lawful, blindsense evolution, wingless flight (perfect maneuverability)
- **HD 16:** Immunity (acid) replaces resistance; amorphous anatomy
- **HD 20:** Constant *freedom of movement*; change shape (greater polymorph)
- **Base form:** Serpentine (bite, grab [tail slap], tail, tail slap)

#### Psychopomp (Neutral)
- **HD 1:** Immunity to death effects, disease, poison
- **HD 4:** Cold resistance 10, electricity resistance 10
- **HD 8:** Spirit touch, +1 evolution pool point
- **HD 12:** DR 5/adamantine, spiritsense
- **HD 16:** Ability increase (summoner's choice); *invisibility* (self only) at will
- **HD 20:** DR increases to 10/adamantine; immunity (cold) and immunity (electricity)

---

### Item 12 — EP Pool Table for Unchained Summoner

**URLs fetched:**
- https://aonprd.com/ClassDisplay.aspx?ItemName=Summoner%20(Unchained) (x3 fetches)
- https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons (EP table for classic summoner obtained)

**Resolution: PARTIALLY UNVERIFIABLE**

The classic summoner EP table (from d20pfsrd) was confirmed:

| Level | Classic EP |
|-------|-----------|
| 1 | 3 |
| 2 | 4 |
| 3 | 5 |
| 4 | 7 |
| 5 | 8 |
| 6 | 9 |
| 7 | 10 |
| 8 | 11 |
| 9 | 13 |
| 10 | 14 |
| 11 | 15 |
| 12 | 16 |
| 13 | 17 |
| 14 | 19 |
| 15 | 20 |
| 16 | 21 |
| 17 | 22 |
| 18 | 23 |
| 19 | 25 |
| 20 | 26 |

The **Unchained Summoner EP table** was NOT recoverable from any online source — the AoN class page for Summoner (Unchained) does not display the numerical table in its web-accessible form. The research doc's note "VERIFICAR tabla completa — requiere Pathfinder Unchained pg. 25" remains accurate.

- **UNVERIFIABLE ONLINE — requires Pathfinder Unchained pg. 25 printed book**
- Note: Multiple AoN fetches confirm the unchained version has a *different* pool progression than classic; some subtypes grant +1 pool point at specific HD milestones (Daemon, Demon, Psychopomp, Archon each do so at HD 8).

---

## ARCHETYPES

---

### Item 13 — Blood God Disciple

**URL fetched:** https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Summoner%20Blood%20God%20Disciple

**Resolution: VERIFIED**

- **Source book:** Advanced Race Guide pg. 53
- **Racial restriction:** Half-orc (flavor text: "A half-orc summoner who devotes himself to one of the bloody orc gods")
- **Eidolon variant:** No separate eidolon type — the archetype works with the standard eidolon but grants the summoner access to eidolon evolutions ON THEMSELVES via Blood Feast.
- **Key mechanics:**
  - **Blood Feast (Su)** — Replaces Summon Monster I, III, V, VII, IX. Feeding fallen foes to the eidolon lets the summoner manifest eidolon evolutions on their own body (1-pt evo at lvl 1, scaling to three evolutions worth 5 pts max at lvl 17).
  - **Bloody Gift (Su)** — Replaces Summon Monster II. Share Blood Feast evolutions with allies (starts at 3rd level; more allies at 7th/11th/15th/19th).
  - **Avatar Gambit (Ex)** — Replaces Summon Monster IV. At 7th level, dismissing the eidolon triggers barbarian rage for rounds = ½ summoner level.
  - **Rage Power (Ex)** — Replaces Summon Monster VI and VIII. At 11th and 15th level, grants barbarian rage powers usable during rage.

---

## SUMMARY

| Item | Description | Status |
|------|-------------|--------|
| 1 | Dimension Door | VERIFIED (1/day base, +1/day per extra pt, max 3/day; summoner 9th) |
| 2 | Fast Healing | VERIFIED (FH 1, scales by HD automatically; summoner level: 13th per one source) |
| 3 | Incorporeal Form | VERIFIED (summoner 11th; rounds/day = HD; standard action activation) |
| 4 | Large | VERIFIED with CORRECTIONS (+4 Str, -2 Dex, -1 AC/attack; summoner 8th — NOT +8 Str) |
| 5 | Lifesense | VERIFIED (60 ft radius; summoner 9th — NOT 11th) |
| 6 | Spell Resistance | VERIFIED with CORRECTION (SR = 11 + HD, not 11 + summoner level; summoner 13th) |
| 7 | Div alignment | VERIFIED (Neutral Evil) |
| 8 | Qlippoth subtype | NOT AN OFFICIAL SUBTYPE — remove from list |
| 9 | Asura subtype | NOT AN OFFICIAL SUBTYPE — remove from list |
| 10 | Daeva subtype | NOT AN OFFICIAL SUBTYPE — remove from list |
| 11 | Full HD progression (11 official subtypes) | VERIFIED — full tables above |
| 12 | Unchained EP pool table | UNVERIFIABLE ONLINE — needs Pathfinder Unchained pg. 25 |
| 13 | Blood God Disciple | VERIFIED (ARG pg. 53, half-orc, standard eidolon + personal evo mechanics) |
