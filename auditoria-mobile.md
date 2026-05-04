# Auditoría · Ficha Mobile (Android port)

> Archivo auditado: `port/app/src/main/assets/index.html` (≈9516 líneas) y su espejo `port/Ficha Mobile.html`.
> Metodología: por feature → ¿qué quiere hacer el usuario? → ¿cómo debería hacerlo? → ¿cómo lo hace realmente? → ¿funciona end-to-end?
> Fecha: 2026-05-04.

**Leyenda estados**

- ✅ funciona end-to-end
- ⚠️ funciona pero confuso, parcial o con efectos secundarios
- ❌ no funciona
- 🆕 falta UI o feature entera

---

## 🔥 Top prioridad (bugs catastróficos)

| Ref | Severidad | Por qué |
|-----|-----------|---------|
| **C-18** | 🔴 CRÍTICO | Las **condiciones aplican mods invertidos**: activar Cegado da +2 atq/+2 CA en lugar de −2/−2. Causa: `CONDITION_MODS` usa minus Unicode `−` (U+2212) y `parseMod` solo entiende `-` ASCII → captura el dígito como positivo. |
| **C-16** | 🔴 CRÍTICO | Mismo problema con **ajustes permanentes**: el placeholder `−1 SAB` con minus Unicode hace que el bono se aplique como `+1`. |
| **E-16 / E-18** | 🔴 ALTO | **Inventario y monedas no editables desde la UI** mobile: faltan los IDs/sheets que `D5_renderInventory` y `D5_renderCoins` esperan. El peso solo refleja seeds + armas + armadura. |
| **C-31** | 🟡 ALTO | Botón "Añadir PJ al tracker" lee `#pg-current` y `#pg-max` que no existen → entra con `hp:null`, sin botones de daño/curar. |
| **P-16 / P-38** | 🟡 ALTO | El **tamaño del personaje** se edita en un select sin `id` y `CombatEngine` lee `#m-size` (no existe) → CMB/CMD/CA siempre calculan como Mediano. |
| **P-04 / P-50** | 🟡 ALTO | **Tecleando la raza a mano** (sin picker) no aplica `applyRaceFull` (sin bonos, sin idiomas, sin tamaño). Tras importar JSON tampoco se reaplica. |
| **A-11** | 🟡 ALTO | **No hay catálogo de dotes**: solo formulario manual aunque `DB.feats` está cargado. |
| **A-38** | 🟡 ALTO | `SLOT_STATE` (slots de conjuros usados) **no persiste**: al recargar vuelve a 0 los lanzados. |
| **M-07** | 🟡 ALTO | **Modo daltónico** no funciona: regla CSS `body.daltonic-mode :root` es inválida (`:root` no puede ser descendiente de `body`). |
| **C-04 / C-05** | 🟡 ALTO | **Buffs en resumen vs en card desincronizados**: usan `qty` y `remaining` por separado; el "▶ Siguiente asalto" mueve uno y el botón "−1" del card mueve el otro. |

---

## 1. Tab PERSONAJE (identidad / atributos / HP / CA / saves / BAB / init)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| P-01 | Nombre del personaje (`in-nombre`) | ✅ | Refresca topbar y avatar. Persiste vía `saveStateDebounced`. | — |
| P-02 | Nombre del jugador (`in-jugador`) | ⚠️ | Persiste pero NUNCA se muestra en topbar/resumen/sheet-identidad. Solo desaparece de Avisos. | Mostrar en sheet-identidad o pequeño bajo topbar. |
| P-03 | Raza vía picker (`btn-raza-picker`) | ✅ | Aplica `applyRaceFull` (atributos, rasgos, idioma, tamaño, modal +2 libre). | — |
| P-04 | Editar raza tecleando libre en `in-raza` | ❌ | Sin listener `change`. Escribir "Elfo" cambia el texto pero NO aplica bonos/rasgos. | Listener `change` que llame `applyRaceFull(value)` si coincide con slug conocido. |
| P-05 | Bonos raciales aplicados al elegir raza | ⚠️ | `applyRacialBonuses` usa `RACIAL_ABILITY_MODS` (10 razas hardcoded) en lugar de leer de `RACES_DATA_FULL[*].bonuses`. | Unificar fuente de verdad (leer de `RACES_DATA_FULL`). |
| P-06 | Tamaño automático al cambiar raza | ⚠️ | `applyRaceFull` busca por contenido del option; faltan tamaños Enorme/Gargantesco/Colosal/Menudo y el select no tiene `id`. | Asignar `id="in-tamano"`, completar opciones, sincronizar con CombatEngine. |
| P-07 | Clase principal · añadir vía picker | ✅ | Push a `CLASSES_DATA`, dispara `class-changed`. | — |
| P-08 | Multiclase | ✅ | Permite varias entradas, suma BAB y saves multiclase. | — |
| P-09 | Cambiar clase existente | ✅ | Tap en card abre picker; reset arquetipo. | — |
| P-10 | Nivel · `class-level` | ⚠️ | El HP_MAX no se recalcula auto al subir nivel si `cl.hp` está fijado manualmente (guarda en `calcHPMax`). | Botón "recalcular HP" o invalidar `cl.hp` al subir level. |
| P-11 | Arquetipo (`arch-name` → picker) | ✅ | Tap abre picker filtrado por classKey. | — |
| P-12 | XP — subir nivel | ⚠️ | Toast "¡Subes de nivel!" UNA vez; NO sube nivel automático, NO ofrece tirar DG, NO descuenta XP. La barra sí sube/baja. | Sheet "Sube nivel" con botones para incrementar nivel, tirar DG, restar XP. |
| P-13 | Avance XP (slow/medium/fast) | ✅ | `autoFillXPNext` usa `XP_TABLE` correctamente. | — |
| P-14 | Alineamiento (al-1/al-2 → al-r) | ✅ | Topbar refresca. | — |
| P-15 | Deidad — picker editable | ⚠️ | Toggle readonly↔editable confuso; el modo libre no persiste tras recargar. | Botón explícito 📝/🏷 para alternar. |
| P-16 | Tamaño (Físico) | ❌ | Sin `id`, sin handler propio. CombatEngine lee `#m-size` que no existe → siempre Mediano. | Asignar id, ampliar opciones, alimentar CombatEngine. |
| P-17 | Edad / Altura / Peso | ❌ | Inputs sin `id`, sin listeners, sin persistencia. | Asignar `in-edad/in-altura/in-peso` y persistir. |
| P-18 | Categoría de edad | ⚠️ | `bindAgeCat` funciona pero `CURRENT_AGE_CAT` no se serializa. | Asignar id y serializar. |
| P-19 | Género | 🆕 | No existe campo. | Añadir `in-genero` en card "Físico". |
| P-20 | Foto / Avatar | ✅ | Bridge Android + web fallback. Persiste. | — |
| P-21 | Atributos · editar base | ✅ | 8 inputs por atributo (base/racial/mejora/inherente/misc/temp/daño/drenaje). Recalcula combat. | — |
| P-22 | Atributos · ver modificadores | ✅ | Pos/neg con clases. | — |
| P-23 | Buffs/ajustes raciales sobre atributos | ⚠️ | Buffs temporales NO se reflejan en la tarjeta (solo en BAB/saves/init/CA). | Añadir fila "Buff activo" o indicador en cada attr-card. |
| P-24 | HP máximo (`HP_MAX`) | ⚠️ | `calcHPMax` emite evento `hp-max` pero NADIE lo escucha → la barra usa el techo viejo. | Listener que asigne `HP_MAX = ev.detail.value` y `refreshHP()`. |
| P-25 | HP actual / barra | ✅ | Doble pintado (resumen + combate), clamp [0, HP_MAX]. | — |
| P-26 | Daño/Cura sheet (`sheet-hp-edit`) | ✅ | Modos dmg/nonlethal/heal/cure-nl/temp; PG temporales consumidos primero; auto-Inconsciente. | — |
| P-27 | PG temporales | ✅ | Sincroniza con `hpTemp`. | — |
| P-28 | Daño no letal | ✅ | Acumula sin tocar HP, marca Inconsciente. | — |
| P-29 | Descanso PF1e (`sheet-rest`) | ✅ | Calidad mala/normal/buena/excelente, fórmula `nivel + CON_mod` PG (×2 NL). | — |
| P-30 | Descanso corto | 🆕 | No existe (PF1e core no lo usa, pero `CLASS_AUTO_FEATURES` lo menciona). | Añadir botón "Descanso corto (1 h)" si se usa la regla casera. |
| P-31 | CA total / toque / desprev. | ✅ | `calcAC` aplica límite Max-DEX. | — |
| P-32 | Componentes CA editables | ✅ | 7 inputs `data-ca`, persiste `s.caRows`. | — |
| P-33 | CA tamaño (sin sincronía) | ⚠️ | El input "size" en `#m-ca-rows` no se sincroniza con el select tamaño físico. | Sincronizar tamaño con la fila CA "size". |
| P-34 | Saves Fortaleza/Reflejos/Voluntad | ✅ | Cálculo correcto + tirada al tap (NAT 20/Pifia). | — |
| P-35 | Save breakdown muestra "Objeto 0 · Misc 0" hardcoded | ⚠️ | No hay UI para añadir bonificadores misc/objeto a saves. | Inputs misc/objeto por save o leer de equipo/buffs. |
| P-36 | BAB total | ✅ | `calcBAB` multiclase OK. | — |
| P-37 | BAB total mostrado en Identidad | ❌ | Input "BAB total" hardcoded a +3 readonly, sin actualización. | Asignar id y actualizar desde `apply()`. |
| P-38 | CMB / CMD | ⚠️ | `calcCMBCMD` usa `bab + str + sizeCMB` pero `sizeKey` viene de `#m-size` inexistente → siempre 0. CMD también ignora bonos armadura/dodge/desviación/escudo/natural (PF1e estándar). | Crear/usar select de tamaño correcto; añadir bonificadores PF1e a CMD. |
| P-39 | Iniciativa | ⚠️ | Bono de Iniciativa Mejorada se podría aplicar 2× si está activa como buff (sin deduplicación). | Verificar deduplicación dote vs buff. |
| P-40 | Tirar iniciativa | ✅ | data-roll actualizado en apply(). | — |
| P-41 | Topbar / hero-strip se actualiza | ✅ | Vía `class-changed` y autosave global. | — |
| P-42 | sheet-identidad muestra resumen | ⚠️ | No incluye jugador, género, alineamiento traducido (muestra "NN" en vez de "Neutral"); no desglosa multiclase. | Mejorar id-summary. |
| P-43 | Avisos del personaje (sheet-warnings) | ✅ | Cubre nombre/jugador/historia/atributos<60/clases/HP/skills sin asignar/foto/conjuros. | — |
| P-44 | Aviso si raza vacía | ❌ | No valida `in-raza` ni deidad. | Añadir checks. |
| P-45 | Tirar todos los DG (`btn-roll-all-hd`) | ✅ | Tira nivel-1 dados (nivel 1 = max), suma CON×nivel; usa `setTimeout 50ms` para subir HP (frágil). | (Opcional) reemplazar timer por await/then. |
| P-46 | Clase Predilecta (FCB) | ✅ ⚠️ | Botones suman a `FCB_DATA`, totales visibles. PERO NO se aplican: ni a HP ni a skills ni a clase. | Conectar `fcb-hp-total` a `calcHPMax` y `fcb-sk-total` a skill points. |
| P-47 | Velocidad efectiva | ⚠️ | `speed-eff` siempre "30 ft" hardcoded; no responde a speed-base, armadura, raza. | Handler que recompute según armadura/encumbrance/raza. |
| P-48 | BAB / TS Fraccionales (Unchained) checkbox | ❌ | Sin id, sin listener, no afecta cálculos. | Implementar o eliminar. |
| P-49 | Resumen de combate (sub-page Resumen) | ✅ | Todos los stats reflejados. | — |
| P-50 | Persistencia identidad tras reload | ⚠️ | NO restaura: edad/altura/peso/tamaño/categoría edad (sin id) y la raza no aplica `applyRaceFull` automáticamente al importar. | Añadir ids + llamar applyRaceFull en importData. |

---

## 2. Tab COMBATE (HP+CA+Saves+BAB+Init resumen / buffs / condiciones / tracker)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| C-01 | Resumen · HP card sincronizada con Ofensiva | ✅ | `refreshHP()` escribe en ambos sets. | — |
| C-02 | Resumen · stat-tiles CA/Init/CMD/TS reflejan cálculo real | ✅ | `CombatEngine.apply()` reactivo. | — |
| C-03 | Resumen · Botón "⚔ Atacar" (`#summary-attack`) | ⚠️ | Con varias armas arrastra al tab Equipo, no abre selector inline. | Mini-selector inline en el resumen. |
| C-04 | Resumen · Card "Buffs activos" muestra countdown | ❌ | `renderSummaryBuffs` lee `qty`, `renderBuffs` lee `remaining`. Botones de cada lado decrementan campos distintos. | Unificar contador (usar SOLO `remaining`). |
| C-05 | "▶ Siguiente asalto" (`#btn-next-round`) | ⚠️ | Solo decrementa `qty` (ver C-04); no avanza `INIT_ROUND` del tracker. | Sincronizar con `INIT_ROUND` y `remaining`. |
| C-06 | Buff temporal · sheet-buff guarda y refresca | ✅ | — | — |
| C-07 | Buff `+1 atq` aplica al ataque visible base | ✅ | — | — |
| C-08 | Buff `+2 FUE` propaga a tarjetas de arma individuales | ❌ | `D5_refreshWeaponRolls` no escucha buff-changed; usa FUE base. | Disparar `attr-changed` desde buff-save y/o sumar `_BUFF_MOD_TOTALS.str` en `D5_getMod`. |
| C-09 | Buff temporal · "−1" por buff | ⚠️ | Funciona en card pero no actualiza el resumen (ver C-04). | `renderSummaryBuffs()` también desde el tick. |
| C-10 | Buff "Permanente" / "Hasta descansar" no decrementa | ✅ | Filtrado correcto. | — |
| C-11 | Buff "Hasta descansar" se elimina al descansar | ❌ | `wireRestPF1e` no recorre `BUFFS_LIST`. | En `btn-rest-apply` filtrar y eliminar. |
| C-12 | Buff: pausar combate / reanudar | 🆕 | No existe pausa. | Toggle que bloquee `nextRoundDecrement`/`init-next`. |
| C-13 | Borrar buff con × del card | ⚠️ | El botón del card de Condiciones no llama `saveStateDebounced`. | Añadir autosave en `_buffRemove`. |
| C-14 | Ajustes permanentes · sheet-adjust | ✅ | — | — |
| C-15 | Ajuste `+2 ataque vs no muertos` | ⚠️ | Se aplica a TODOS los ataques; no es condicional. | Documentar limitación o flag "condicional". |
| C-16 | Ajuste `−1 SAB` (placeholder con minus Unicode) | 🔴❌ | El minus Unicode `−` (U+2212) hace que `parseMod` capture solo el dígito → suma `+1` en lugar de `−1`. | **Normalizar texto antes de regex**: `replace(/[−–—]/g,'-')`. |
| C-17 | Condición · aplicar (Asustado, Fatigado…) | ✅ | Chip toggle, persiste. | — |
| C-18 | Condición · efecto numérico en stats | 🔴❌ | Mismo bug que C-16: `CONDITION_MODS` usa `−` Unicode. **Cegado da +2 en vez de −2.** Catastrófico. | Misma fix que C-16 (normalizar) o cambiar a guion ASCII en `CONDITION_MODS`. |
| C-19 | Condición · persistencia | ⚠️ | Funciona pero al restaurar sigue aplicando los signos invertidos. | Resolver C-18. |
| C-20 | Condiciones automáticas (Inconsciente) por HP | ⚠️ | `calcConditionsAuto` no aplica regla `nl >= cur` (PF1e: caes inconsciente cuando NL iguala los PG actuales). `applyDH` sí lo hace → discrepancia entre paths. | Unificar regla. |
| C-21 | Daño no letal · acumular sin bajar PG | ✅ | — | — |
| C-22 | Daño no letal · curar específico | ✅ | — | — |
| C-23 | Daño no letal · sincronía con `#pg-nonlethal` | ⚠️ | Cuando `applyDH` cambia `hpNonlethal`, el input no se actualiza. | En `refreshHP()` también fijar `value = hpNonlethal`. |
| C-24 | Curación / daño rápido | ✅ | Botones ±1/±5 + sheet. | — |
| C-25 | Sheet HP-edit · modos temp y daño consume temp | ✅ | — | — |
| C-26 | Reposo · calidad afecta cantidad curada | ✅ | bad×0.5 / normal×1 / good×1.5 / exc×2. | — |
| C-27 | Reposo · descanso corto vs largo | ⚠️ | Solo descanso largo 8h. | Botón "Descanso 1 h" que solo cure NL = nivel. |
| C-28 | Reposo · resetea slots de conjuros | ⚠️ | Dispara `rest-long` pero el comentario del sheet dice que el reset de slots es manual. Hay que verificar receptor. | Confirmar listener en módulo Spells. |
| C-29 | Tracker iniciativa · abrir desde toggle máster | ✅ | — | — |
| C-30 | Tracker · añadir combatiente con `#init-add` | ✅ | Push a `INIT_LIST`, ordena por iniciativa, autosave. | — |
| C-31 | Tracker · añadir PJ automático (`#init-add-pc`) | ❌ | Lee `#pg-current` y `#pg-max` que NO existen → entra con `hp:null, hpMax:null`, sin botones de daño. No autosave. | Cambiar lectura a `HP_MAX` y `hp` globales + autosave. |
| C-32 | Tracker · "⇅ Ordenar" (M-12) | ✅ | — | — |
| C-33 | Tracker · "▶ Siguiente turno" avanza activo y suma asalto | ⚠️ | `INIT_ROUND` no se persiste; al recargar vuelve a "Asalto 1". | Añadir `s.initRound` en snapshot/applyState. |
| C-34 | Tracker · daño/curar a combatiente | ⚠️ | Usa `prompt()` (CLAUDE.md desaconseja en WebView). | Mini-input inline o sheet con teclado numérico. |
| C-35 | Tracker · eliminar combatiente | ✅ | — | — |
| C-36 | Tracker · "↺ Nueva batalla" | ⚠️ | Usa `confirm()` nativo + sin autosave tras reset. | Modal propio + autosave. |
| C-37 | Tracker · condiciones por combatiente | ❌ | `r.conds` se renderiza pero NO hay UI para añadir/quitar. | Long-press en init-card para mini-picker. |
| C-38 | Tracker · persistencia entre sesiones | ⚠️ | Falta `INIT_ROUND` y `active` por combatiente añadido vía init-add-pc. | Ver C-31, C-33. |
| C-39 | Buffs de grupo (sheet máster: Bendición / Plegaria / Heroísmo) | ❌ | Tres checkboxes sin id, sin listener, sin i18n → decoración. | Conectar a `BUFFS_LIST` o eliminar. |
| C-40 | Avisos completitud (M-09) | ✅ | Cubre los principales. | — |
| C-41 | Aviso "Druida sin mascota" | ✅ | — | — |
| C-42 | Notas de combate (C-04) | ✅ | Crear, listar timestamp, borrar, autosave. | — |
| C-43 | Round button | ⚠️ | Ver C-04. | Resolver C-04. |
| C-44 | Componentes CA y maxDex de armadura | ✅ | — | — |
| C-45 | Tácticas activas (Ataque Poderoso, Puntería Mortal, CDA, Asalto Enérgico) | ❌ | 4 checkboxes sin id, sin handler. NO modifican atq/daño/CA. | Implementar handler con flags. |
| C-46 | Velocidades alternativas / Maniobrabilidad vuelo | ⚠️ | Inputs sin id; autosave los toca pero applyState no los repinta. | Asignar id + persistir. |
| C-47 | Resistencia a magia / Fallo conjuros | ⚠️ | Mismo patrón. | Ids + persistencia. |
| C-48 | Resistencias a energía e Inmunidades | ⚠️ | Inputs sin id; `__weaknesses` no aparece serializado. | Implementar serialización. |
| C-49 | Debilidades (×2 daño) | ❌ | Sin id, sin listener, sin influencia en daño. | Conectar al motor o documentar como visual. |
| C-50 | TS · "Componentes" (Base/Atributo/Objeto/Misc) | ⚠️ | "Objeto 0 · Misc 0" hardcoded. | Inputs `data-ts-misc="fort"` etc. |
| C-51 | Filtro de condiciones (Todas/Activas/Buenas/Malas) | ⚠️ | "Activas" lee del DOM existente; tras recarga queda vacío hasta primer click. | Inicializar set de "activas" desde STATE. |
| C-52 | Long-press en chip de condición → sheet-cond-detail | ✅ | — | — |
| C-53 | Botón "Iniciativa · Tirar" | ✅ | — | — |
| C-54 | Inputs Base CaC / Base Dist / Iniciativa misc | ⚠️ | Solo serializa `combatMisc.initMisc`; pg-buff y pg-misc-lvl sí. | OK, confirmar otros. |
| C-55 | "Detalles de PG" (Buff HP, RD, Inmunidades, Resistencias) | ⚠️ | RD/Inmunidades/Resistencias por elemento sin id ni serialización. | Ids + persistencia. |
| C-56 | Tirada de salvaciones tap-to-roll | ✅ | — | — |

---

## 3. Tab APTITUDES (skills / dotes / class features / conjuros)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| A-01 | Editar rangos de habilidad | ✅ | Persiste en `SKILL_STATE[id].r`, dispara `fireSkillsChanged`. | — |
| A-02 | Cálculo total habilidad (rango + atrib + clase + misc + ACP) | ✅ | `calcSkillTotal` correcto. | — |
| A-03 | Marcar habilidades de clase | ✅ | Cruza `CLASS_SKILL_MAP` con clases activas. | — |
| A-04 | Puntos de habilidad sin asignar | ⚠️ | `getSkillPointsTotal` NO suma FCB skill (`FCB_DATA`). | Sumar `FCB_DATA.filter(e=>e==='skill').length`. |
| A-05 | Tirar habilidad + Tomar 10/20 | ✅ | Tap=tirada; long-press 500ms abre detail. | — |
| A-06 | Persistencia rangos | ❌ | `D3_SKILLS.state` NO está en exportData/applyState. Recargar/exportar pierde rangos PF1e (el legado `SKILLS` sí). | Serializar `D3_SKILLS.state` y `CUSTOM_SKILLS`. |
| A-07 | Habilidad personalizada (Saber X, Profesión X) | ✅ | Sheet `sheet-skill-custom`, persiste en localStorage. | — |
| A-08 | Filtros chips Todas/De clase/Con rangos | ✅ | — | — |
| A-09 | Buscar habilidad | ✅ | Alias `fue/des` etc. | — |
| A-10 | Listado de Dotes | ✅ | Cards con tag combat/general/item, prereq y descripción colapsable. | — |
| A-11 | Añadir dote desde **catálogo** PF1e | ❌ | Solo formulario manual; `DB.feats` se carga pero NO se renderiza en ningún picker. | Añadir picker similar a `bindPicker`. |
| A-12 | Crear dote personalizada | ✅ | — | — |
| A-13 | Eliminar dote | ✅ | — | — |
| A-14 | Buscar dote | ❌ | No hay input de búsqueda en `data-sub="dotes"`. | Añadir `<input id="feats-search">` + filtro. |
| A-15 | Tag combat-feat / metamagic / racial | ⚠️ | Solo combat/general/item; metamagia cae en general. | Ampliar `<select id="feat-type">` + CSS. |
| A-16 | Info de prerequisitos al añadir | ⚠️ | Solo string libre, sin validación contra ATTR_STATE/BAB. | Validar y marcar prereq. |
| A-17 | Dote → afecta cálculo de ataque | ❌ | `D5_getIterativeAttacks` solo considera `w.misc` manual. Soltura con armas no se aplica auto. | Auto-aplicar cuando exista la dote (link feat→arma). |
| A-18 | Listar Class Features | ✅ | Auto-pobla desde `DB.special_abilities`. | — |
| A-19 | Contadores de uso (rabia/smite/ki/punto acción) | ✅ | Burbujas + max editable + reset. | — |
| A-20 | Reset por descanso largo | ✅ | Listener `rest-long`. | — |
| A-21 | Reset por descanso corto | ⚠️ | Listener existe pero NO hay botón en UI. | Añadir botón "Descanso corto" en sheet-rest. |
| A-22 | Toggle Rabia activa/desactivada | ✅ | `_RAGE_BONUSES` aplicados (FUE/CON +4, Vol +2, CA −2). | — |
| A-23 | Selecciones de clase (escuela, linaje, dominios, misterio, patrón, orden) | ✅ | `class-picker-card` por clase, persiste. | — |
| A-24 | Conjuros: lista por nivel | ✅ | — | — |
| A-25 | Slots disponibles (grid) | ✅ | `computeSpellSlots` por classId/lvl/attrMod. | — |
| A-26 | Marcar preparado / lanzar / recuperar | ✅ | — | — |
| A-27 | Lanzar conjuro baja slot | ✅ | — | — |
| A-28 | Añadir conjuro nuevo | ✅ | Botón por nivel; modo prep/spont detecta default `prepared`. | — |
| A-29 | Escuela de mago (SCHOOL_PICK) | ⚠️ | Picker funciona y persiste, pero NO suma slot adicional ni marca escuela prohibida. | Aplicar en `computeSpellSlots`/render. |
| A-30 | Modo lanzador preparado vs espontáneo | ✅ | `CASTING_MODE` derivado de `PF1E_CASTER_INFO`. | — |
| A-31 | Aviso "Sin conjuros preparados" | ✅ | — | — |
| A-32 | Restaurar slots (Descansar 8h) | ✅ | Botón `#rest-8h` resetea SLOT_STATE.used + SPELLS_DATA.cast. | — |
| A-33 | Habilidades extra (skill bonus por raza/dote) | ❌ | Skill Focus +3, Alertness +2, racial bonuses → no se aplican auto. | Detectar y poblar `SKILL_STATE[id].misc`. |
| A-34 | Cambio de nivel recalcula slots/BAB/saves/skill points | ⚠️ | Skill points se actualiza en counter pero no avisa "X puntos nuevos por asignar". | Prompt al subir nivel. |
| A-35 | Cambio de clase a Druida → compañero animal | ⚠️ | Aviso correcto pero no aparece slot/tarjeta nueva ni atajo. | En `class-changed` mostrar atajo a sheet-companions. |
| A-36 | Botón "Atacar rápido" `#summary-attack` | ✅ | Parchedo en 03716b7. | — |
| A-37 | Persistencia FEATS / class features / spells | ✅ | — | — |
| A-38 | Persistencia SLOT_STATE | ❌ | Solo `spellsCast` (cast/prepared por id). Slots usados se pierden al recargar. | Serializar `SLOT_STATE.map(s=>({max,used}))`. |
| A-39 | Persistencia _RAGE_ACTIVE | ✅ | — | — |
| A-40 | Conflicto renderFeats vs renderFeatsCrud | ⚠️ | `renderFeats` huérfano (init usa Crud). | Eliminar código muerto. |
| A-41 | feat-changed dispatch | ❌ | Listener registrado pero nunca se dispara desde feat-save/renderFeatsCrud. | `dispatchEvent(new CustomEvent('feat-changed'))` tras push/splice. |
| A-42 | Habilidades pierden ACP de escudo | ⚠️ | Funciona; solo verifica parseo. | Sin acción. |
| A-43 | Idiomas (linguistics sin rangos) | ✅ | Marca `noRanks:true`. | — |
| A-44 | Habilidades subtipo (Saber X, Artesanía X, Profesión X, Actuar X) | ⚠️ | No hay UI para crear sub-instancias múltiples (Artesanía Herrería/Carpintería). | Permitir clonar skill con sufijo. |

---

## 4. Tab EQUIPO + Tab MÁS (armas / armadura / inventario / peso / settings / persistencia / impresión)

| ID | Feature | Estado | Detalle | Acción sugerida |
|----|---------|--------|---------|-----------------|
| E-01 | Añadir arma "desde lista" predefinida | ❌ | Botón abre solo formulario manual; no existe `WEAPONS_LIBRARY` ni picker. | Sheet `sheet-weapon-pick` con presets. |
| E-02 | Crear arma manual (`sheet-weapon-add`) | ✅ | Form completo, persiste. | — |
| E-03 | Editar arma existente | ❌ | No hay botón "editar" en `renderWeapons`; solo se editan `misc`/`miscOn`. Para cambiar dado/crit hay que borrar y recrear. | Botón editar que abra `sheet-weapon-add` poblado + lógica edit/new. |
| E-04 | Bono +Atq de dotes (M-01: misc + toggle activo) | ✅ | Checkbox + input + chip dorado, respeta toggle en cálculos. | — |
| E-05 | Eliminar arma | ✅ | — | — |
| E-06 | Tirada de ataque + iterativo (BAB ≥ 6/11/16) | ✅ | — | — |
| E-07 | Tirada de daño con FUE (×1.5 a 2 manos, 0 a distancia) | ✅ | — | — |
| E-08 | Daño-die actualizado al editar misc o estilo | ⚠️ | Style/hands/damage_die congelados tras save (ver E-03). | Ligado a E-03. |
| E-09 | Añadir armadura | ✅ | — | — |
| E-10 | Equipar/desequipar (1 cuerpo + 1 escudo simultáneos) | ✅ | Eventos `armor-equipped`/`armor-removed`. | — |
| E-11 | Bono CA en summary tras equipar | ✅ | — | — |
| E-12 | Penalizadores armadura (ACP, fallo conjuros, max DES) | ✅ | — | — |
| E-13 | Velocidad reducida por armadura media/pesada | ✅ | `D5_calcEffSpeed` aplica ×2/3. | — |
| E-14 | Eliminar armadura | ✅ ⚠️ | Si eliminas la equipada NO emite `armor-removed` pero `D5_recompute` recalcula. | (Opcional) emitir evento desde delete. |
| E-15 | Inventario simple (`<ul id="inv-list">`) | ⚠️ | Solo `<li>` con texto plano (sin categoría/cantidad/peso/valor). | — |
| E-16 | Inventario PF1e completo (`D5_INVENTORY`) | 🔴❌ | `D5_renderInventory`/`D5_bindAddSheet` requieren IDs (`inv-cats`, `inv-add-btn`, `sheet-inv-add`, etc.) que NO existen en HTML mobile → peso solo refleja seeds. | Añadir IDs y crear `<dialog id="sheet-inv-add">`. |
| E-17 | Suma de peso del inventario al total | ⚠️ | Funciona pero ver E-16. | Resolver E-16. |
| E-18 | Monedas pp/po/pe/pc | 🔴❌ | `D5_renderCoins` requiere inputs `.coin-in` que no existen. Solo seed text. | Añadir tarjeta de monedas con 4 inputs `.coin-in`. |
| E-19 | Cambio rápido de monedas | ❌ | Sin UI. | Botones de conversión 1:10. |
| E-20 | Peso total visible | ✅ | `#weight-current`. | — |
| E-21 | Estado de carga (ligera/media/pesada/sobrecarga) | ✅ | Fórmula PF1e correcta. | — |
| E-22 | Subir/bajar STR cambia peso transportable | ✅ | `attr-changed` triggea recompute. | — |
| E-23 | Modificadores de tamaño y cuadrúpedo / don mular | ✅ | — | — |
| E-24 | Override de peso manual | ✅ | — | — |
| E-25 | Subtab "peso" muestra carga/estado/umbrales | ✅ | — | — |
| M-01 | Compañeros (sanity check post M-01..M-04) | ✅ | Multi-instancia + schema completo + migración v1→v2. | — |
| M-02 | Notas: crear, listar, leer/editar, eliminar | ✅ | — | — |
| M-03 | Notas persisten | ⚠️ | El "save" no llama explícito `saveStateDebounced('note-save')`. | Añadir autosave en handler noteSave. |
| M-04 | Settings — idioma | ✅ | — | — |
| M-05 | Settings — tema (lista completa) | ✅ | — | — |
| M-06 | Settings — tamaño de fuente | ✅ | — | — |
| M-07 | Settings — modo daltónico real | 🔴❌ | Regla `body.daltonic-mode :root{}` inválida (`:root`=html, no descendiente de body) → variables NO aplican. Solo el font-weight y outline cond-chip. | Usar `:root.daltonic-mode` + clase en `documentElement`, o `body.daltonic-mode{ --accent:...; }`. |
| M-08 | Settings — persistencia en localStorage | ✅ | — | — |
| M-09 | Settings — botón "Limpiar todos los datos" | ✅ ⚠️ | No borra `ficha-mobile-settings` ni `ficha-cm-themes`. | Añadir esos 2 keys al removeItem. |
| M-10 | Búsqueda global (`sheet-search`) | ⚠️ | Solo busca en 4 grupos hardcoded; no indexa DBs reales; resultados no abren detalle. | Reemplazar por búsqueda real + navegación. |
| M-11 | Tirada de dados libre (`sheet-dice`) | ✅ | Presets, ventaja/desventaja, historial, reroll, confirm crit. | — |
| M-12 | Selector de tema + Chromancer | ✅ | — | — |
| M-13 | Tema persiste tras recargar | ✅ | — | — |
| M-14 | Tema se aplica a todos los sheets | ✅ | — | — |
| M-15 | Foto del personaje | ✅ | Bridge Android + web fallback. | — |
| M-16 | Impresión (@media print) | ✅ ⚠️ | El heading `::before` usa `attr(data-tab)` ("personaje"); sería mejor `data-screen-label`. | (Opcional) usar `data-screen-label`. |
| M-17 | Exportar JSON | ✅ | Bridge Android + web. | — |
| M-18 | Importar JSON | ✅ | — | — |
| M-19 | Schema versioning v0→v1 | ⚠️ | No hay paso v1→v2; la migración de `compData` (single→array) está en applyState, no en migrateState. Si se sube STATE_VERSION se rompe. | Mover a `migrateState` con branch v<2. |
| M-20 | Importar restaura compData M-01..M-04 | ✅ | Acepta array (v2) y objeto single (v1). | — |
| M-21 | Importar restaura WEAPONS_DATA con +Atq (misc/miscOn) | ✅ | — | — |
| M-22 | Autosave debounced 800ms | ✅ | — | — |
| M-23 | AndroidBridge.saveCharacter | ✅ | Try/catch + fallback. | — |
| M-24 | Modo overflow (Refrescar/Sync/Export/Import/Print/Máster) | ⚠️ | "Refrescar ficha" y "Sincronizar ficha" son stubs (data-toast). | Implementar Refrescar = `recalc()` + `D5_recompute()`; eliminar/marcar Sync como WIP. |
| M-25 | `more-warnings` (avisos M-09) | ✅ | — | — |
| M-26 | "Acerca de · v1.0" | 🆕 | Decorativo. | — |
| M-27 | Cambio de tema persiste tras cerrar app | ✅ | Doble persistencia. | — |
| M-28 | Botones "Compañeros / Notas / Dados" en tab más | ✅ | — | — |

---

## Resumen numérico

| Estado | P (50) | C (56) | A (44) | E+M (49) | **TOTAL (199)** |
|---|---|---|---|---|---|
| ✅ | 27 | 25 | 32 | 33 | **117** (59%) |
| ⚠️ | 17 | 22 | 9 | 9 | **57** (29%) |
| ❌ | 5 | 8 | 5 | 6 | **24** (12%) |
| 🆕 | 1 | 1 | — | 1 | **3** (2%) |

## Próximos pasos sugeridos (orden ideal)

1. **C-16, C-18** — fix del minus Unicode (1 línea de regex). Catastrófico actualmente.
2. **P-16/P-38** — id al select de tamaño + alimentar CombatEngine.
3. **A-06, A-38** — persistir `D3_SKILLS.state` y `SLOT_STATE`.
4. **C-31** — fix del init-add-pc (variables globales).
5. **M-07** — fix del modo daltónico (selector CSS).
6. **E-16, E-18** — añadir UI de inventario y monedas.
7. **A-11, A-14** — picker de dotes desde catálogo + buscador.
8. **C-04** — unificar `qty`/`remaining` en buffs.
9. Resto de ⚠️ por orden de uso real.
