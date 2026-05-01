# PENDIENTE — trabajo en vuelo

Última actualización: 2026-05-01

## Estado actual de la base de datos

| Recurso | Estado |
|---|---|
| `archetypes.json` | 328 arquetipos (322 anteriores + 6 colisiones Wave A integradas con slug único) |
| `classes.json` | 95 clases (50 base + 45 prestige) |
| `special_abilities.json` | 2365 entradas — cubre todas las clases base, 40 prestige nuevas y 5 prestige antiguas (con ES fix). Wave 3 integrado. |
| `index.html` | DB inline (L2854) y `FALLBACK_DB` (L10405) sincronizados |
| Port Android | Sincronizado |

## ✅ COMPLETADO

- Wave 3 integrado (`_wave3_pending/` eliminado)
- 6 colisiones de Wave A resueltas con slug único (`_cavalier`, `_oracle`, `_paladin`, `_ranger`, `_shifter`, `_unchained`)
- Traducciones ES de 5 prestige antiguas en `special_abilities.json`
- Auto-activación de aptitudes en mobile (`autoAddMobileClassFeatures()`)
- Motor de buffs en mobile (`_BUFF_MOD_TOTALS`, `parseMod`, `rebuildBuffModTotals`)
- Rabia/Smite/Ki como toggles en mobile
- Compañeros editables en mobile
- Formularios añadir arma/armadura/hechizo en mobile

## ❌ NO INVESTIGADO TODAVÍA

### Class features de las 5 prestige classes ANTIGUAS

`dragon_disciple`, `horizon_walker`, `eldritch_knight`, `loremaster`, `mammoth_rider` tienen entradas en `special_abilities.json` pero puede que les falten features — verificar cobertura vs d20pfsrd/AoN. Estimación: ~50 entradas adicionales.

### Otras lagunas conocidas

- **Hit die / BAB / saves diffs en arquetipos**: ningún arquetipo usa estos campos. >95% de PF1e no los cambia, pero algunos sí.
- **Cambios de competencias (proficiency) en arquetipos**: no cubierto estructuralmente, solo en `features_gained`.
- **Hexes, evoluciones, dominios, escuelas, etc. específicos por arquetipo**: solo descripción narrativa, no campo estructurado.
- **Skill diffs pendientes de confirmación** (G6 caveat): `warrior_poet` (samurai), `witch_doctor` (shaman), `urban_skald` (skald) — AoN renderiza con JS, verificar con PDF oficial.
- **Superstitious barbarian duplicado** (G8 wave 1): verificar que no quedaron descripciones redundantes entre `superstitious` (G1) y `superstitious_barbarian`.
