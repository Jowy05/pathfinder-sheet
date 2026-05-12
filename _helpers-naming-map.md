# Helpers Naming Map — Pathfinder Sheet

Map of internal `_xxx*` helper-function prefixes across the two index.html files.
Source of truth, do NOT refactor en masse: many of these are referenced from
DOM event handlers and dynamic strings, so renames must be deliberate.

| Prefix | Domain | File(s) | Purpose |
|---|---|---|---|
| `_acomp*` | COMP — Animal Companion | MOB (24) | DOM helpers for animal-companion card: photo, sync class, stat bumps, defenses, barding, etc. |
| `_apply*` | UI — Apply state | both (PC 2 / MOB 10) | Generic appliers (race traits, class skills, archetype replaces). |
| `_auto*` | PC — Automation | both (PC 1 / MOB 4) | Auto-recompute on level change, class change, etc. |
| `_brood*` | PC — Brood/Witch subclass | PC (10) | Witch Brood archetype helpers. |
| `_btr*` | PC — Buff Tracker | PC (7) | Buff Tracker UI/logic (master-mode panel). |
| `_class*` | PC — Class progression | both (PC 3 / MOB 2) | Class level helpers (multiclass, gestalt). |
| `_cm*` | COMBAT — Combat Maneuvers | PC (8) | CMB/CMD helpers (cleave, trip, disarm). |
| `_comp*` | COMP — Generic companions | both (PC 5 / MOB 8) | Companion-shared (animal/familiar/eidolón) helpers. |
| `_eid*` | COMP — Eidolón | both (PC 1 / MOB 12) | Eidolón evolutions, lock reasons, point pools, summoner sync. |
| `_eidolon*` | COMP — Eidolón legacy | PC (3) | Older alias of `_eid*`. **TODO refactor**: unify with `_eid*`. |
| `_epic*` | PC — Epic Mode | both (PC 2 / MOB 3) | Epic-level (21-30) caps and helpers. |
| `_familiar*` | COMP — Familiar | MOB (6) | Familiar master-level sync, alertness, empathic tip. |
| `_feat*` | PC — Feats | both (PC 1 / MOB 7) | Feat detection, prereqs, normalization. |
| `_g1_` … `_g6_` | UI/COMP — phased rollout markers | MOB | Helpers grouped by rollout phase (G1=base, G2=combat maneuvers, G3=class abilities, G4=race/skills/sneak, G5=saves/buff packs). See "Phase prefixes" below. |
| `_pcc*` | PC — PC migration core | PC (63) | Main namespace for the PC-only feature set (companion, attribute bumps, save items, mythic auto-apply, archetype replaces, casting override, grants, feat prereqs). |
| `_pj*` | PC — Personaje principal | both (PC 3 / MOB 2) | Player-character specific (stat bumps, level-up). |
| `_animal*` | COMP — Animal companion legacy | MOB (3) | Older alias of `_acomp*` for animal-only logic. **TODO refactor**: merge into `_acomp*` or rename `_acomp*` → `_animalCompanion*`. |

## Phase prefixes `_g[0-9]_*` (Mobile only)

These mark **rollout phases**, not domains. They were introduced to keep patches isolated.
Now stable, but kept as-is because they appear in anchor names (`/* G2-MANEUVER-V1 */`, etc.)
and in commit/issue references.

| Phase | Count | Domain |
|---|---|---|
| `_g2_*` | 9 | COMBAT — combat maneuvers, full attack toggle, cleave |
| `_g3_*` | 54 | COMP/PC — class abilities (LoH, smite, channel, bardic, rage, bloodline, versatile) |
| `_g4_*` | (0 named functions; only anchors) | PC — race traits, class skills, sneak attack, spellbook |
| `_g5_*` | 3 | UI — buff packs, saves items |

**Phase-prefix policy**: do not introduce new `_g[N]_` helpers; instead use a
domain prefix (`_combat*`, `_class*`, `_skill*`, etc.). Existing phase prefixes are
kept for compatibility with anchors but should be migrated opportunistically.

## Anchor format convention (post-2026-05-12 sweep)

All anchors standardized to: `/* DOMAIN-NAME-V1 */`

| Domain | Used in | Example |
|---|---|---|
| `PC-` | PC only | `/* PC-COMPANION-V1 */` (was `/* PC-A-COMPANION */`) |
| `G[0-9]-` | MOB phased rollouts | `/* G2-FULLATK-V1 */` (was `/* G2-FULLATK */`) |
| `#ANCHOR:NAME-V1` | both | inline patch markers (already standardized) |

Drop the per-zone letter (`-A-`, `-B-`, `-C-`, `-D-`) — these distinguished
PC patches by date of introduction, not by domain. The `PC-` prefix alone is the
domain marker.

## TODOs for future refactor (do NOT touch in this sweep)

1. **`_eid*` vs `_eidolon*` duplication (PC)**: `_eidolonEvolutionLockReason` and
   `_eidolonSelectedEvos` exist alongside the canonical `_eidEvolutionLockReason`
   in Mobile. PC has the long form. Either rename PC's `_eidolon*` → `_eid*`
   (matching Mobile) or alias both. Risk: PC import/export uses these names in
   serialized HTML, so check `__eid_html` keys before renaming.
2. **`_animal*` vs `_acomp*` (Mobile)**: `_animalApplyProgression`,
   `_animalApplyType`, `_animalProgressionRow` overlap with `_acomp*`.
   `_animal*` is older. Recommend merging into `_acomp*` namespace.
3. **Phase prefixes `_g[2-5]_*` (Mobile)**: would benefit from migration to
   domain prefixes (`_combat*`, `_classfeat*`, `_skill*`, `_save*`). Only
   if a major refactor pass is planned — these are stable in production.
4. **`_pcc*` is too generic in PC**: 63 helpers all under a single `_pcc`
   prefix make navigation hard. Could split into `_pccCompanion*`,
   `_pccStatBumps*`, `_pccArchetype*`, `_pccMythic*`. Low priority.
5. **`I18N_msg` vs `t()`**: both exist as i18n entry points. Mobile uses
   `I18N_msg`, PC uses `t()`. Consider unifying (probably keep `t()` and alias).

## Why not refactor now?

- HTML attributes, DOM `id` and `data-*` values, and serialized JSON keys
  reference many of these helper names. A blind rename breaks save/load.
- Two agents are editing these files in parallel; touching helper names would
  conflict with their patches.
- The i18n + anchor sweep (this pass) already covers the load-bearing
  consistency wins. Helper-rename can wait until a quiet window.
