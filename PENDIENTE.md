# PENDIENTE — trabajo en vuelo

Última actualización: 2026-05-01

## Estado actual de la base de datos

| Recurso | Estado |
|---|---|
| `archetypes.json` | 332 arquetipos (328 anteriores + cardinal, feyspeaker, cloistered_cleric, spire_defender, wildborn) |
| `classes.json` | 95 clases (50 base + 45 prestige) |
| `special_abilities.json` | 2371 entradas — todas las clases cubiertas incluyendo capstones de 5 prestige antiguas |
| `index.html` | DB inline y FALLBACK_DB sincronizados; soporte de arch.bab/saves/hit_die/skill_points |
| Port Android | Sincronizado |

## ✅ COMPLETADO

- Wave 3 integrado (`_wave3_pending/` eliminado)
- 6 colisiones de Wave A resueltas con slug único (`_cavalier`, `_oracle`, `_paladin`, `_ranger`, `_shifter`, `_unchained`)
- Traducciones ES de 5 prestige antiguas en `special_abilities.json`
- Features faltantes de 5 prestige antiguas: EK Bonus Feat, DD Apotheosis, MR nv7-9, Loremaster nv8, HW lvl fix
- Skill diffs de warrior_poet/witch_doctor/urban_skald: confirmado NO modifican skills
- Hit die / BAB / saves diffs: soporte de código + 5 arquetipos nuevos con datos correctos (cardinal, feyspeaker, cloistered_cleric, spire_defender, wildborn). crossblooded y monster_knight ya tenían saves; ahora el motor los aplica.
- Cambios de competencias: cubiertos descriptivamente en `description_es/en` de los arquetipos afectados
- Hexes/dominios/escuelas/evoluciones/espíritus: campo `sub_options` en 20 arquetipos (theologian, ecclesitheurge, separatist, undead_lord, merciful_healer, crusader, crossblooded, wildblooded, exploiter_wizard, spell_sage, blood_arcanist, school_savant, hexcrafter, primalist, crossblooded_rager, synthesist, master_summoner, broodmaster, unsworn_shaman, spirit_guide). Tooltip en selector de arquetipo.
- Auto-activación de aptitudes en mobile (`autoAddMobileClassFeatures()`)
- Motor de buffs en mobile (`_BUFF_MOD_TOTALS`, `parseMod`, `rebuildBuffModTotals`)
- Rabia/Smite/Ki como toggles en mobile; compañeros editables; formularios añadir arma/armadura/hechizo

## ❌ PENDIENTE / MEJORAS FUTURAS

- **sub_options en más arquetipos**: quedan ~68 arquetipos con menciones de hexes/dominios/escuelas sin sub_options formal (principalmente shaman, witch, occultist, medium, spiritualist archetypes)
- **Enforcement de sub_options en UI**: actualmente sub_options solo aparece como tooltip; no restringe las opciones del selector de forma activa
- **Proficiency enforcement**: las notas de proficiencias en description_es no se aplican mecánicamente al personaje
- **Hit die diffs aún no investigados exhaustivamente**: solo se cubrieron los 5 arquetipos nuevos; puede haber más en toda la DB de 332 que tengan HD diferente al base
