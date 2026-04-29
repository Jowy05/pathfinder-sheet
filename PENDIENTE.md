# PENDIENTE — trabajo en vuelo cuando se cortó la sesión

Última actualización: 2026-04-28

## Estado actual de la base de datos

| Recurso | Estado |
|---|---|
| `archetypes.json` | 321 arquetipos integrados (90 originales + 231 nuevos verificados en d20pfsrd/aonprd, todos bilingüe ES/EN) |
| `classes.json` | 95 clases (50 base + 5 prestige antiguas + 40 prestige nuevas) |
| `special_abilities.json` | 383 entradas con `class_en` añadido (fix bug i18n) — **NO incluye class features de las 40 prestige nuevas ni de las 5 prestige antiguas** |
| `index.html` | DB inline (L2621) y `FALLBACK_DB` (L8723-…) sincronizados con los JSON anteriores |
| Port Android | Sincronizado con todo lo anterior |

## ⚠️ PENDIENTE DE INTEGRAR (datos ya investigados, pero NO mergeados)

Los 10 archivos en `_wave3_pending/` contienen trabajo verificado de los workers de Wave 3 que **no se llegó a integrar** por falta de tiempo. Los datos están listos, solo falta el merge mecánico.

### A) Skill diffs de arquetipos — 33 entradas

8 archivos: `_wave3_pending/_w3_arch_g{1..8}.json`

Cada uno es un dict `{slug: {class_skills_add: [...], class_skills_remove: [...]}}`. Los 33 arquetipos identificados (resto de los 231 no modifican habilidades):

- **G1 (3)**: preservationist, tyrant, urban_barbarian
- **G2 (5)**: snakebite_striker, wild_child, strangler, evangelist (cleric), cave_druid
- **G3 (5)**: lore_warden, urban_hunter, cipher_investigator, psychic_detective, dark_elementalist
- **G4 (7)**: sohei, vexing_daredevil, frozen_shadow, hunting_serpent, petal_ninja, geomancer, silksworn
- **G5 (3)**: stargazer, beastmaster, trapper
- **G6 (1)**: speaker_for_the_past
- **G7 (7)**: seeker_sorcerer, magical_child, warlock_vigilante, zealot_vigilante, cabalist_vigilante, avenging_beast, cult_leader
- **G8 (2)**: savage_technologist, sensei_unchained

**Cómo integrar**: para cada entrada del dict, hacer `archetypes[slug].class_skills_add = [...]; archetypes[slug].class_skills_remove = [...]`. Después regenerar `DB inline (L2621)` y `FALLBACK_DB.archetypes`. Replicar al port.

### B) Class features de prestige classes — 411 entradas

2 archivos: `_wave3_pending/_w3_prest_gA.json` y `_w3_prest_gB.json` — cada uno es un **array** de objetos en formato `special_abilities.json`:

```json
{"id":"assassin_death_attack","class":"Asesino","class_en":"Assassin","name":"Ataque Mortal","name_en":"Death Attack","lvlunlock":1,"description":"...","description_en":"..."}
```

Cobertura (40 prestige clases × 2-16 features cada una):
- **PA (205 entradas)**: assassin (11), arcane_archer (10), arcane_trickster (6), duelist (13), mystic_theurge (2), shadowdancer (15), pathfinder_chronicler (13), stalwart_defender (8), holy_vindicator (11), rage_prophet (12), master_chymist (5), battle_herald (11), master_spy (16), nature_warden (14), hellknight (11), hellknight_signifer (10), red_mantis_assassin (11), inheritors_crusader (4), aldori_swordlord (10), diabolist (12)
- **PB (206 entradas)**: cyphermage (2), evangelist (11), exalted (12), noble_scion (8), pathfinder_savant (13), sentinel (13), sleepless_detective (15), living_monolith (15), demoniac (12), divine_scion (6), lion_blade (16), hinterlander (9), winter_witch (10), riftwarden (9), dawnflower_anchorite (8), harrower (11), low_templar (10), ulfen_guard (8), souldrinker (10), stargazer (8)

**Cómo integrar**: concatenar ambos arrays con `special_abilities.json` (que es un array). Después regenerar el inline `FALLBACK_DB.special_abilities` (línea ~8925, single-line JSON). Replicar al port.

### Script PowerShell sugerido para hacer A + B en una pasada

```powershell
$base = 'c:\Users\Lucia\Documents\fichahtml\pathfinder-sheet'
$pending = "$base\_wave3_pending"

# A) skill diffs
$arch = Get-Content "$base\archetypes.json" -Raw -Encoding utf8 | ConvertFrom-Json
foreach ($n in 1..8) {
  $diffs = Get-Content "$pending\_w3_arch_g$n.json" -Raw -Encoding utf8 | ConvertFrom-Json
  foreach ($p in $diffs.PSObject.Properties) {
    if ($p.Value.PSObject.Properties.Name -contains 'class_skills_add') {
      $arch.($p.Name) | Add-Member -NotePropertyName 'class_skills_add' -NotePropertyValue $p.Value.class_skills_add -Force
    }
    if ($p.Value.PSObject.Properties.Name -contains 'class_skills_remove') {
      $arch.($p.Name) | Add-Member -NotePropertyName 'class_skills_remove' -NotePropertyValue $p.Value.class_skills_remove -Force
    }
  }
}
$arch | ConvertTo-Json -Depth 50 | Out-File "$base\archetypes.json" -Encoding utf8 -NoNewline

# B) prestige features
$sa = Get-Content "$base\special_abilities.json" -Raw -Encoding utf8 | ConvertFrom-Json
$pa = Get-Content "$pending\_w3_prest_gA.json" -Raw -Encoding utf8 | ConvertFrom-Json
$pb = Get-Content "$pending\_w3_prest_gB.json" -Raw -Encoding utf8 | ConvertFrom-Json
$saAll = @($sa) + @($pa) + @($pb)
$saAll | ConvertTo-Json -Depth 50 | Out-File "$base\special_abilities.json" -Encoding utf8 -NoNewline

# Regenerar inlines en index.html (L2621 DB online + FALLBACK_DB.archetypes + FALLBACK_DB.special_abilities)
# Replicar al port
```

Recordar: cualquier cambio en `archetypes.json` o `special_abilities.json` requiere actualizar **3 sitios**: el .json, el DB inline en L2621, y el bloque dentro de `FALLBACK_DB`. Y replicar al port.

## ❌ NO INVESTIGADO TODAVÍA

### Class features de las 5 prestige classes ANTIGUAS

`special_abilities.json` tampoco tiene entradas para:
- `dragon_disciple`
- `horizon_walker`
- `eldritch_knight`
- `loremaster`
- `mammoth_rider`

Estas 5 estaban en `classes.json` desde antes pero nunca tuvieron sus class features añadidas a `special_abilities.json`. Estimación: ~50 entradas adicionales.

### Otras lagunas conocidas

- **Hit die / BAB / saves diffs en arquetipos**: 0 arquetipos en TODA la DB usan estos campos del esquema. En PF1e oficial >95% de arquetipos no los cambian, pero algunos sí (e.g. variantes con HD diferente). No está cubierto sistemáticamente.
- **Cambios de competencias (proficiency) en arquetipos**: el esquema no contempla un campo para tracking de prof de armas/armaduras añadidas o quitadas por arquetipo. Cubierto narrativamente en `features_gained` pero no estructuralmente.
- **Hexes, evoluciones, dominios, escuelas, etc. específicos por arquetipo**: cuando un arquetipo restringe o añade opciones de listas (e.g. winter_witch tiene patron específico, hexcrafter añade hexes a magus) no está formalmente capturado, solo descrito.
- **Arquetipos de las 5 prestige antiguas**: el cazador buscó solo en las 40 nuevas + las prestige donde teníamos pista (Hellknight, Aldori, Pathfinder Savant, Red Mantis). No revisó si dragon_disciple/loremaster/horizon_walker/eldritch_knight/mammoth_rider tienen variants — improbable pero no descartado.
- **Re-verificar las 6 colisiones rechazadas en el merge de Wave A**: G2 daring_champion (cavalier), G5 spirit_guide (oracle), G5 divine_hunter (paladin), G5 infiltrator (ranger), G6 rageshaper (shifter), G8 urban_barbarian (unchained_barbarian). Para cada una el slug ya existía para OTRA clase distinta. Habría que renombrar (`_paladin`, `_oracle`, etc.) e integrar — son arquetipos válidos perdidos por colisión de clave.
- **Skill diffs aún no confirmables**: G6 marcó como caveat que AoN renderiza class skills con JS y no pudo verificar `warrior_poet` (samurai), `witch_doctor` (shaman), `urban_skald` (skald). Re-revisar con scraping diferente o consulta directa de PDFs oficiales.
- **El error de description_es del worker G8 wave 1**: se metió `superstitious_barbarian` con sufijo, pero la versión "limpia" para `barbarian` ya existe (G1 `superstitious`). Verificar que no quedaron descripciones duplicadas o redundantes.

## Cómo retomar

1. Leer este archivo entero.
2. Ejecutar el script PowerShell de arriba para integrar A + B.
3. Regenerar los 3 sitios en `index.html` (DB inline L2621, FALLBACK_DB.archetypes, FALLBACK_DB.special_abilities).
4. Replicar `archetypes.json`, `special_abilities.json`, `index.html` al port.
5. Borrar `_wave3_pending/` (ya integrado).
6. Borrar este archivo o actualizarlo con el resto pendiente.
7. Continuar con la lista "NO INVESTIGADO".
