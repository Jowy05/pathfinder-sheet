# MEMORY · Ficha Pathfinder 1e

Resumen de referencia del proyecto. Si añades un panel/feature nuevo, actualiza este archivo.

## Qué es
SPA bilingüe (ES/EN) para gestionar fichas de personaje de **Pathfinder Roleplaying Game 1ª edición**. Sin build system, sin frameworks: HTML + CSS + JSON estáticos servidos directamente desde disco. Tiene un puerto a Android empaquetando la web en un WebView.

## Estructura

```
Ficha/
├── index.html              ← App entera (HTML + ~7 000 líneas JS inline)
├── style.css               ← 5 temas (default, cerezo, maniqka, royal1, royal2)
├── fallback-data.js        ← Datos embebidos para cuando fetch() falla (file://)
├── *.json                  ← BBDD: classes, archetypes, feats, races, equipment,
│                             items, skills, sizes, special_abilities, domains,
│                             orders, arcane_schools, oracle_mysteries,
│                             witch_patrons, bloodlines
├── jowy.json               ← Personaje ejemplo
├── joel_samurai2.json      ← Personaje ejemplo
├── Tareas.md               ← Backlog histórico (casi todo ✅)
├── normas.md               ← Reglas oficiales PF1e + qué cumple la hoja
├── bugs.md                 ← Bugs reportados (vacío)
├── CLAUDE.md               ← Regla de doble despliegue + mapa breve
├── MEMORY.md               ← Este archivo (resumen de referencia)
├── patches/                ← Specs idempotentes P-1…P-10 con anchors únicos
├── test/                   ← Snapshot antiguo de assets (no activo)
└── port/                   ← Wrapper Android
    ├── app/src/main/
    │   ├── java/.../MainActivity.kt    ← WebView + bridge JS↔Kotlin
    │   ├── assets/                     ← Copia espejo de los archivos web
    │   ├── res/                        ← Iconos + layout XML
    │   └── AndroidManifest.xml
    └── sync-assets.bat                 ← Copia los archivos web a assets/
```

## Cómo funciona

**Carga**: `init()` ([index.html:2495](index.html#L2495)) hace `Promise.all` de `fetch()` sobre los JSON. Si falla (típico en `file://` del WebView), cae a `FALLBACK_DB` definido en `fallback-data.js`.

**Motor de cálculo**: `recalc()` ([index.html:4422](index.html#L4422)) recompone todos los campos derivados desde inputs base. Se dispara con la clase `.recalc` en cualquier control y al pulsar el botón Refrescar.

**Persistencia**: export/import JSON, no hay autosave. `exportData()` ([index.html:8105](index.html#L8105)) recorre todos los `input/select/textarea` por id y serializa además HTML dinámico bajo claves `__weapons_html`, `__buff_tracker`, `__combat_tracker`, `__notes_data`, `__weaknesses`, etc. `importData()` revierte el proceso.

**i18n**: objeto `I18N.es` / `I18N.en` con claves; cualquier nodo con `data-i18n`, `data-i18n-ph`, `data-i18n-title` se traduce con `applyI18n()`. `tData()` lee `name_es`/`name_en` o `{es,en}` anidado de los JSON.

**Modo master**: toggle en el FAB inferior. Oculta/muestra el tracker de iniciativa y el buff tracker mediante la clase `master-hidden`. Estado en `localStorage['pf1e-master-mode']`.

## Funcionalidades principales

- **Cabecera**: foto del personaje, nombre/jugador/raza/deidad/alineamiento/edad/tamaño/XP, picker de raza, botón refrescar, **buscador global** (`#global-search`, indexa data-i18n ES+EN, scroll+flash dorado al match), imprimir, toggle ES/EN.
- **Clases y progresión**: gestalt soportado (varias clases sumadas), arquetipos como diff sobre clase base, BAB/salvaciones fraccionales (Unchained), HP rolled o manual, dado bonito 3D dorado.
- **Atributos**: 6 columnas de fuentes (base/racial/mejora/inherente/misc/temporal) con modificador y total auto.
- **Combate**: BAB, CMB/CMD, CA total/toque/desprevenido, iniciativa con auto-add al PC, toques mágicos, ataques iterativos, panel de defensas (DR, ER ×5 tipos, debilidades, inmunidades, visión, condiciones tumbado/flanqueo).
- **Salvaciones** fraccionales o estándar.
- **Condiciones**: 27 condiciones PF1e con timer en rondas, chips activos arriba.
- **Tracker de iniciativa**: combatientes con init/dex/HP, economía de acciones (●○◆), **barra HP visual**, **duplicar con HP compartido por `groupId`** (cualquier cambio de hpCur/hpMax se propaga a hermanos del mismo grupo en tiempo real).
- **Habilidades**: 35 habilidades con rangos, clase, ACP, notas contextuales, sub-tabla de animal companion.
- **Bio**: alineamiento 2 ejes, idiomas grid, rasgos de personaje + defecto, diario de sesión con XP/oro acumulados, rasgos raciales picker.
- **Aptitudes de clase**: trackers automáticos por clase (rabia, ki, smite, channel, lay on hands, fervor, judgment, bane, studied target, bombs, inspiration, focus, animal focus, martial flexibility, arcane reservoir, panache, grit, …) en `CLASS_AUTO_FEATURES`. Picker de aptitudes especiales.
- **Dotes**: picker, validador de prerequisitos con chip ✓/⚠️/❓, contador disponibles vs gastadas, dotes de bonificación por clase/nivel.
- **Armas**: picker desde equipment.json, 11 traits (alcance, mortal, ágil, derribo…), 11 tipos de daño con chips, ataques iterativos +X/+Y/+Z, toggles TWF/Ataque Poderoso, munición tracker, armas rotas, copiar /roll para Discord, drag & drop.
- **Inventario**: armadura+escudo con picker, ítems generales con picker, cargas mágicas (varitas, pergaminos), competencias.
- **Compañero animal**: tabla de habilidades, ataques naturales, trucos, montura para Paladín/Cavalier.
- **Familiar**: 12 tipos predefinidos, atributos, aptitudes desbloqueables por nivel.
- **Conjuros**: slots auto desde classes.json, modos preparado/espontáneo, bonus por atributo, restantes como burbujas pulsables, picker de Dominio (Clérigo), Escuela Arcana (Mago), Misterio (Oráculo), Linaje (Hechicero/Bloodrager), Patrono+Hexes (Bruja), Orden (Caballero/Samurái), Magus pool, metamagia chips, spell penetration, concentración, disipar magia.
- **Criaturas convocadas / no muertos**: stats básicos, HP, trackers, duración.
- **Buff tracker**: nombre/tipo/bonus/objetivo/duración con auto-decrement por ronda/min/h.
- **SLAs "a voluntad"**: tarjetas con CL/DC + log de uso.
- **Descansos**: corto (1h) recupera pools de encuentro; largo (8h) recupera todo + slots + HP + quita fatiga.
- **Imprimir**: `@media print` oculta UI interactiva, expande colapsables, A4 portrait.

## Convenciones de código

- IDs literales = persistencia automática. Si añades `id="foo"` a un input, ya se exporta/importa.
- HTML generado dinámicamente se serializa en `__nombre_html`.
- Estado en variables JS necesita serialización explícita en `exportData()`.
- Botones nuevos visibles → `data-i18n` con clave en `I18N.es` y `I18N.en`.
- Anchors `#ANCHOR:P*-NAME-V1` señalan inserciones idempotentes de los patches.
- Nada de localStorage para personajes — solo para temas/idioma/master mode/feedback.

## Android

`MainActivity.kt` carga `file:///android_asset/index.html` en un WebView con `JavaScriptEnabled` + `domStorageEnabled`. Expone `AndroidBridge` con:
- `saveCharacter(json, name)` → diálogo nativo de guardar.
- `showCharacterPicker()` → lista de personajes guardados en `filesDir/characters/`.
- `consumePendingJson()` → entrega JSON a `applyImportedData()` de la web.
- `printSheet()` → `PrintManager` nativo.
- `showToast(msg)`.

Intercepta `<a download>` (export) e `<input type="file">` (import) vía un script inyectado en `onPageFinished`. La foto del personaje (`#char-photo-file`) se deja pasar al picker de imágenes nativo.

**Bugs Android conocidos** (de Tareas.md):
- La foto pide cargar personaje en vez de imagen.
- Botones Guardar/Imprimir no funcionan en Android.
- "Enviar sugerencia" colisiona con el flujo de guardar.
- Combatientes salen de pantalla al crearse en la zona de encuentro.

## Regla operativa principal (ver CLAUDE.md)

**Cada cambio en la web hay que replicarlo en `port/app/src/main/assets/`** (manual o con `sync-assets.bat`). Sólo se toca `MainActivity.kt` si se cambian file pickers, descargas con nombre nuevo o se añade un `AndroidBridge.*`. CSS / lógica JS / JSON / i18n / HTML estructural sin file pickers nuevos = sólo copiar assets.

## Funciones clave (mapa de navegación)

| Tema | Función / variable | Línea aprox. |
|------|--------------------|--------------|
| Boot | `init()` | 2495 |
| Recalc completo | `recalc()` | 4422 |
| i18n | `t()`, `tData()`, `setLanguage()` | 2106-2156 |
| Atributos | `calcAttributes()`, `buildAttrTable()` | 4507, 2860 |
| Clases | `addClassRow()`, `calcClassProgression()` | 2645, 4554 |
| Combate | `calcCombat()`, `calcDefense()` | 4791, 4730 |
| Habilidades | `calcSkills()`, `buildSkillTable()`, `syncClassSkills()` | 5116, 2882, 5090 |
| Conjuros | `calcSpells()`, `buildSpellSlots()`, `autoFillSpellSlots()` | 5224, 4040, 5196 |
| Aptitudes auto | `CLASS_AUTO_FEATURES`, `syncClassAutoFeatures()` | 3126, 3395 |
| Dominios/Escuelas/Linajes/Órdenes/etc | `sync*Features()` | 3460, 3586, 3645, 3798, 3958 |
| Descansos | `restShort()`, `restLong()`, `REST_RESET_KEY` | 3086, 3099, 3045 |
| Tracker iniciativa | `iniRender()`, `iniUpdateField()`, `iniDuplicate()`, `_iniSyncHpRow()` | 6148, 6009, post-iniUpdateField |
| Buff tracker | `btrAddBuff()`, `btrNextRound()`, `btrSerialize()` | 9138, 9220, 9241 |
| Buscador global | `buildSearchIndex()`, `_searchRender()`, `_searchJumpTo()` | post closeFabDropdown |
| Persistencia | `exportData()`, `importData()` | 8105, 8213 |
| Modo master | `setMasterMode()`, `toggleMasterMode()` | 9292, 9309 |
| Compañero animal | `calcAnimalCompanion()`, `buildCompSkillTable()` | 5411, 5504 |
| Familiar | `calcFamiliar()` | 5363 |
