# Auditoría UX técnica — `port/Ficha Mobile.html`

Recorrido completo del archivo (~6500 líneas, una sola SPA HTML+CSS+JS inline). Realizada por agente auditor independiente tras aplicar los 6 dominios funcionales (D1 atributos, D2 combate, D3 habilidades, D4 conjuros, D5 equipo, D6 persistencia).

> "Descubrible" = un usuario que no leyó el código encontraría el flujo en menos de 30 s.

---

## Tabla de casos de uso

| # | Caso | ¿Botón existe? | ¿Funciona? | ¿Descubrible? | Bloqueo / problema concreto |
|---|------|----------------|------------|---------------|------------------------------|
| 1 | Atacar con espada larga | Sí (Equipo > Armas > "Atacar"/"Daño" por arma) | Parcial | Solo si vas a Equipo. **El botón "⚔ Atacar" del Resumen de Combate (`#summary-attack`) NO tenía listener** — bug bloqueante de cara visible (corregido en commit `03716b7`) | Crítico (nat 20) muestra el botón "Confirmar crítico" pero **solo si el roll se hizo desde un botón con label que contenga "Ataque"** (regex `/Ataque/i` en `rebindRolls`). Fumble (nat 1) se marca visualmente en historial pero no dispara flujo de confirmación |
| 2 | Subir a nivel 4 con Guerrero | Sí (Identidad > Clases, input "Nivel") | Parcial | Sí | Cambiar nivel recalcula BAB/saves/HP via `CombatEngine.apply` por evento `input`, pero **NO hay aviso de "dote nueva pendiente" ni de "puntos de habilidad nuevos"**. La lista del modo Máster los menciona como texto estático; no son dinámicos. HP recalcula media de DG, no avisa de tirada |
| 3 | Multi-clase Pícaro/Guerrero | Sí (botón "+ Añadir clase" en Identidad) | Sí | Sí | Funciona: añade clase con nivel 1 al `CLASSES_DATA`; BAB y saves se recalculan correctamente en `CombatEngine`. No hay validación de prerequisitos ni recálculo automático de skill points "nuevos asignables vs gastados" |
| 4 | Clérigo prepara conjuros tras descansar | Sí (Aptitudes > Conjuros, botón "🌙 Descansar 8h") | Parcial | Medio (hay que cambiar nombre de clase a mano en Identidad) | Slots se calculan según `FULL9_PREP` con bonus de SAB. El "preparar" es solo un toggle visual `data-spell-prep` — **no enforce slot máximo al preparar**. "Lanzar" decrementa slot OK. **Botón "+ Añadir conjuro Nv X" solo muestra toast "pendiente de UI"** — no se pueden añadir conjuros propios |
| 5 | Mago elige escuela arcana | Sí (Aptitudes > Aptitudes de clase; aparece botón "🎓 Escuela arcana" si CLASE=Mago) | Sí | Bajo — el card aparece solo cuando la clase canónica = "mago"; **no hay autoexpansión visible al cambiar clase**, hay que ir a la subtab manualmente | Picker funciona, persiste en variable JS `SCHOOL_PICK` pero **NO se serializa**; al recargar se pierde |
| 6 | Compañero animal de druida | Sí (Más > Compañeros; tabs Familiar/Animal/Eidolón/Invocadas) | Solo lectura | Sí | Datos completamente hardcoded en `COMP_DATA`. No editable, no persiste, sin tiradas, sin gestión de PG. Es un mock |
| 7 | Equipar armadura nueva | Sí (Equipo > Armadura > "+ Añadir armadura" + checkbox "Equipada") | Parcial | Sí | Añade `{name:'Armadura nueva', ac:'+0'...}` placeholder genérico; **no hay formulario para introducir bono CA, max DES, fallo de conjuro reales**. Marcar "Equipada" sí dispara `armor-equipped` y refresca, pero el `body.dataset.armorMaxDex` solo se setea desde un evento que pasa `a.maxDex` (string '+2') — el `parseInt` puede romper. Velocidad NO se actualiza por armadura |
| 8 | TS Reflejos contra bola de fuego | No directo. La fila `.save-row` muestra valor + breakdown pero **no tiene click handler de tirada** | Parcial | Bajo — se ve el bonus pero no se tira tocando | Hay que ir a Combate > Ofensiva o Resumen y usar botón Tirar / Iniciativa. **No hay tirada por save** end-to-end. Breakdown sí visible ("Base 3 · Atributo +2 · …") |
| 9 | Daño letal/no letal | Sí ("⚕ Daño / Curación específica" en HP card; modos: dmg/no letal/heal/temp) | Sí | Sí | Diferencia bien letal/no letal. Overlay visual rayado para no letal. **Inconsciente automático** está implementado en `calcConditionsAuto` (cur≤0 o nl≥max). PERO usa `__autoConds` Set que **nunca lee la UI** — la condición no aparece marcada como activa visualmente, solo en variable interna. Bug funcional |
| 10 | Marcar "Asustado" | Sí (Combate > Condiciones, grid de chips) | Sí | Sí | Tap toggle activa el chip y badge en bottom nav. Long-press abre `sheet-cond-detail` con descripción mecánica completa de `COND_DETAIL`. Bien hecho |
| 11 | Castigo del mal del paladín | Sí (Aptitudes de clase, tracker de burbujas con +/− y "↺ Reset") | Sí (cuando clase=Paladín) | Sí | `CLASS_AUTO_FEATURES_D4.paladin` genera el feature con max=1+(lvl-1)/4 y reset='long'. "Descansar 8h" lo restaura. Bug menor: "Castigo del mal" PF1e oficial es `1 + lvl/5`, no `1 + (lvl-1)/4` |
| 12 | Rangos de habilidad disponibles vs gastados | Sí (counter en tab Habilidades) | Sí (cálculo PF1e correcto: base+INT+humano)×nivel | Sí | `getSkillPointsTotal` lee CLASSES_DATA, raza humano, INT mod. Marca con borde rojo si rangos > nivel total. Bien |
| 13 | Exportar ficha JSON | Sí (Más > "Exportar ficha (JSON)" + en sheet Overflow) | **Sí (post D6)** | Sí | `exportCharacter()` real implementado en commit `f8677ab` (Dominio 6). Usa AndroidBridge.saveCharacter en Android, `<a download>` en web con nombre `ficha-<slug>.json` |
| 14 | Importar ficha | Sí (Más > Importar ficha) | **Sí (post D6)** | Sí | `importCharacter()` real con migración v0→v1. Bridge `window._androidDeliverCharacter` y `webImportPicker()` en web. Aplica state vía `applyState` y dispara eventos |
| 15 | DES 14→16 con objeto +2 | Sí (Atributos > details "Modificadores" > slot "Mejora") | Sí | Medio (hay que abrir `<details>` colapsado) | Recalcula total y mod. Dispara `attr-changed` → `CombatEngine.apply()` → CA, Reflejos, Iniciativa, CMD se actualizan. Habilidades de DES también via `D3_SKILLS` listener |
| 16 | Bárbaro entra en Rabia | Sí (tracker auto-generado en Aptitudes de clase si clase=Bárbaro) | Parcial | Solo si la clase es Bárbaro | El tracker decrementa rondas. **No aplica modificadores +4 FUE/+4 CON/−2 CA automáticamente al "activar"** — el usuario tiene que ajustarlos a mano en los slots `temp` de cada atributo |
| 17 | Buscar condición Enredado | Sí (long-press 420ms en chip de Condición) | Sí | **Bajo — no hay pista visual** de que el long-press abra detalle | Funciona y muestra `COND_DETAIL['Enredado']` |
| 18 | Buff +2 Diplomacia 1h | Sí (Combate > Condiciones > "+ Añadir buff temporal") | Visual | Sí | Crea card en `BUFFS_LIST` con nombre/mod/duración, pero el campo "modificador" es texto libre — **NO se aplica al total de Diplomacia**. La habilidad sigue sumando solo rangos+atributo+misc. Es CRUD cosmético |
| 19 | Cambiar idioma a inglés | Sí (botón `#btn-lang` topbar) | Mayoritariamente | Sí | `applyLang('en')` traduce todo `[data-i18n]`, atributos y condiciones. Persiste en `localStorage 'ficha-lang'`. Pero hay strings hardcoded sin `data-i18n` ("Clases y progresión", "Velocidad (ft)", etc.) que quedan en español |
| 20 | Cambiar tema a Olympus | Sí (icono pincel topbar > sheet-theme con 13 temas) | Sí | Sí | Persiste en localStorage `ficha-theme`. Loader también respeta tema |
| 21 | Cerrar/abrir mañana — persistencia | **Sí (post D6)** | **Sí** | — | Commit `f8677ab` añadió autosave debounced 800ms en `localStorage['ficha-mobile-state-v1']`. Persiste TODO: identidad, clases, atributos, habilidades, dotes, armas, armadura, condiciones, buffs, ajustes, notas, foto, theme, lang. Schema versionado con migración v0→v1. NOTA: algunos datos viven en variables JS internas que el snapshot pueda no recoger en el primer pase (ej. `SCHOOL_PICK`, `SAMURAI_RESOLVE.used`); reportar si se pierden al recargar |
| 22 | Vista resumen combate | Sí (Combate > Resumen, primera subtab activa) | Sí | Sí | Muestra HP bar, CA, Iniciativa, CMD, 3 saves, condiciones activas. Bien diseñado. Botón ⚔ Atacar conectado en commit `03716b7` (sin armas → tab Equipo; 1 arma → tirada directa; varias → lleva a Equipo>Armas) |
| 23 | Tomar 10 / Tomar 20 | Sí (long-press 500ms en habilidad → sheet-skill-detail con T10/T20) | Sí | **Muy bajo**: el long-press solo se descubre por accidente | Calcula total+10 y total+20, lo añade al historial de dados |
| 24 | Notas de sesión | Sí (Más > Notas de sesión) | Sí (en memoria) | Sí | Guarda en `NOTES_LIST` (variable JS). **NO persiste a localStorage por sí mismo**, pero el autosave global de D6 sí captura el textarea visible |
| 25 | Hechicero cambia linaje | Sí (Aptitudes de clase > "🩸 Linaje" si clase=Hechicero) | Sí (visual) | Bajo (solo aparece tras cambiar nombre clase) | Picker funcional, pero `BLOODLINE_PICK` no persiste ni afecta cálculos |

---

## Casos extra observados

- **Velocidad**: input numérico simple, no se ajusta por armadura/carga.
- **Carga (peso)**: `D5_renderWeight` calcula bien los thresholds. La tab antigua "Peso" en Equipo (~l.2121) tiene **valores hardcoded** ("67 lb", "≤76 lb", "62%") y no usa `D5_renderWeight` — discrepa con la tab live.
- **Tirada de iniciativa tracker (Master)**: existe pero `init-next` NO scrollea ni resalta, fácil perderse.
- **Avatar foto**: en commit `f8677ab` el botón "Cambiar foto" se conectó a `AndroidBridge.pickPhoto()` (Android) o `<input type=file>` (web). Pinta el avatar y persiste como data:URL.
- **"Sincronizar ficha"** en overflow → toast "Sincronizando..." y nada más. Mock puro.

---

## Top 10 fricciones críticas (orden por gravedad)

1. **[BUG BLOQUEANTE — RESUELTO en `03716b7`]** Botón "⚔ Atacar" del Resumen de Combate sin listener (`#summary-attack`). Era la primera CTA visible al entrar a la tab Combate y no hacía nada.

2. **[FALSA-POSITIVA — RESUELTO en `f8677ab`]** Exportar/Importar JSON eran mock toasts. Ahora son funcionales en Android (bridge) y web (`<a download>` / FileReader).

3. **[FALSA-POSITIVA — MAYORMENTE RESUELTO en `f8677ab`]** Persistencia entre sesiones casi inexistente. Ahora autosave debounced cubre identidad/atributos/clases/habilidades/dotes/armas/armadura/condiciones/buffs/ajustes/notas/foto/theme/lang. **Pendientes**: variables internas como `SCHOOL_PICK`, `BLOODLINE_PICK`, `SAMURAI_RESOLVE.used`, `SLOT_STATE.used` que están fuera del snapshot del DOM.

4. **[FALSA-POSITIVA pendiente]** Buffs temporales no aplican mecánicamente (caso #18). Aparecen como cards bonitas pero no afectan ninguna tirada ni habilidad — el usuario creerá que su +2 Diplomacia está activo.

5. **[FALSA-POSITIVA pendiente]** Rabia/Smite/Ki no aplican modificadores (caso #16). El tracker decrementa pero +4 FUE/+4 CON no se autoaplican. Si el usuario confía en la app, hará tiradas mal.

6. **[FALSA-POSITIVA pendiente]** Inconsciente automático no aparece como condición visible (caso #9). `__autoConds` es un Set interno que nunca pinta el chip ni el badge.

7. **[UX NO-DESCUBRIBLE pendiente]** Tirar Save tocando la fila no funciona (caso #8). Las filas de Fort/Ref/Will muestran números pero no son interactivas.

8. **[UX NO-DESCUBRIBLE pendiente]** Tomar 10/20 y descripción de condición ocultos detrás de long-press (casos #23, #17) sin pista visual ni hint.

9. **[FALSA-POSITIVA pendiente]** "+ Añadir conjuro Nv X" muestra "pendiente de UI" (caso #4). No se pueden añadir conjuros más allá de la DB hardcoded de 8-10 por clase.

10. **[FALSA-POSITIVA pendiente]** Compañeros (Familiar/Animal/Eidolón/Invocadas) son solo datos hardcoded de demostración (caso #6). No editable, no persiste, sin tiradas. Crítico para druida/mago/invocador.

---

## Otros bugs/inconsistencias menores observados

- Tab "Peso" en Equipo (~l.2121) tiene valores hardcoded que no coinciden con `D5_renderWeight` en otras tabs.
- `Castigo del mal` usa fórmula `1+(lvl-1)/4` en vez de la oficial `1+lvl/5`.
- "Sincronizar ficha" sigue siendo toast vacío (no implementado el flujo real).
- Strings hardcoded sin `data-i18n` en muchos sub-headers (ej. "Clases y progresión", "Velocidad (ft)", "Detalles de PG", etc.) — el inglés queda mezclado.
- Pickers de escuela/linaje/dominio/misterio/patrón/orden no persisten su selección al recargar.
- `summary-attack` y la falta de tirada al tocar saves indican que la audit mental "primer botón visible = primera acción de combate" no fue end-to-end al diseñar.

---

## Priorización sugerida para próxima ronda

1. **Persistir variables internas** (`SCHOOL_PICK`, `BLOODLINE_PICK`, `SAMURAI_RESOLVE`, `SLOT_STATE.used`, `SPELLS_DATA[].cast/prepared`, `D5_INVENTORY`, `D5_COINS`, etc.) en el snapshot de `D6.snapshotState`.
2. **Tap-to-roll en saves** (Fort/Ref/Will).
3. **Aplicar buffs/rabia/smite mecánicamente** parseando el texto del modificador o convirtiéndolo en estructura.
4. **Auto-condiciones (Inconsciente, Muriendo) deben pintar el chip activo** en lugar de solo Set interno.
5. **Hint visual de long-press** (icono ⓘ pequeño en condiciones y filas de habilidad) o cambiar a otro gesto.
6. **Compañeros editables** (CRUD real con HP, CA, ataques, evoluciones).
7. **Formulario completo al añadir armadura/arma** (no solo placeholder genérico).

---

*Auditoría generada en sesión coordinada de 7 agentes (6 dominios funcionales + 1 auditor). Archivo en `port/Ficha Mobile.html`. Estado tras commit `03716b7`.*
