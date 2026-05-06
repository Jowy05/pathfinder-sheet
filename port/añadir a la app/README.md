# Modo Máster — para integrar en el port

Esta carpeta contiene el proyecto completo del **Modo Máster** (encuentros, mapa, iniciativa, tirador de dados, bestiario, snapshots, etc.) listo para incrustar en la app Pathfinder Sheet.

## Entry point

Abrir `Modo Master.html` en un navegador moderno. Es una SPA en React 18 (carga vía Babel-standalone, sin build) con:

- HTML + CSS + JSON estáticos.
- 16 ficheros `.jsx` cargados en orden por `<script type="text/babel">`.
- 1 `themes.css` con los 7 temas (mismos data-theme que la ficha).

## Cómo incrustarlo en la app

El modo máster está pensado para vivir como **iframe hijo** de la ficha. Desde la ficha:

```html
<iframe src="añadir a la app/Modo Master.html" allow="clipboard-write"></iframe>
```

O bien abrirlo en otra pestaña — el sync funciona también vía `BroadcastChannel` (canal `pf-master-sync`).

La ficha (`Ficha Mobile.html` y sus 2 copias del port) ya tiene el bridge instalado. No hay que tocar nada más en la ficha; solo asegurarse de que el iframe apunta a esta carpeta.

## Comunicación entre ficha y modo máster

Mensajes (vía `postMessage` al padre + `BroadcastChannel`):

| Tipo | Dirección | Payload |
|---|---|---|
| `mst-request-pjs` | master → ficha | (vacío) |
| `mst-pjs` | ficha → master | `{pjs: [{uid, name, hp, hpMax, ac, acTouch, acFlat, fort, ref, will, spd, photo, conditions, buffs, attacks, skills, armor, spellSlots}]}` |
| `mst-sheet-update` | ficha → master | `{uid, name, hp, hpMax, conditions, buffs}` |
| `mst-pj-update` | master → ficha | `{uid, name, hp, hpMax, delta}` |
| `mst-pj-buffs` | master → ficha | `{uid, name, buffs:[{key, kind, label, rounds}]}` |
| `mst-pj-slot-update` | master → ficha | `{uid, name, level, used, max}` |
| `mst-exit` | master → ficha | (vacío — el master pidió cerrar) |

## Estado del proyecto

Ver `TAREAS.md` para el backlog completo. **Cerrado todo lo comprometido**; quedan 3 ideas en 🟦 (aptitudes auto, drag rectangular, preview de plantilla siguiendo cursor).

## Persistencia

El modo máster guarda en `localStorage` bajo claves propias (no choca con la ficha):

- `mst-state-v1` — autosave del encuentro actual
- `mst-snapshots-v1` — snapshots con nombre (máx 20)
- `mst-bestiary-v1` — plantillas de criaturas
- `mst-custom-encounters-v1` — encuentros JSON importados (máx 30)
- `mst-sounds`, `mst-notifs`, `mst-theme-auto` — toggles de Settings

## Ficheros que tocan a la ficha (ya aplicados)

El bridge de la ficha está en los **3 `Ficha Mobile.html` / `index.html`** del port. No copiar nada del modo máster a esos ficheros — ya están integrados.

Si por algún motivo se restaura la ficha desde una versión antigua, hay que volver a aplicar los bloques marcados con el comentario:
`<!-- ─── Bridge con el modo máster (iframe hijo) ─── -->`
