# Tareas · Ficha Pathfinder 1e
Generado 2026-04-18. Consolida `a añadir.txt`, `porhacer.md` y auditoría de reglas vs `normas.md`.

## nuevas tareas (ordenar y tal)
- ✅ tema morado/oscuro Maniqka — HECHO (ver E-3)
- ✅ temas royal1 y royal2 (gold/red/white y gold/red/black) — HECHO (ver E-4)

Ordenado por **importancia × facilidad** (primero lo que más impacto da con menos trabajo).

## BUGS

### ✅ 2026-04-27 — Resueltos (ver bugs.md)
- ✅ Android: foto pide cargar personaje → `AndroidBridge.pickPhoto()` directo.
- ✅ Android: botón Guardar no funciona → `exportData` rutea al bridge sin `<a download>`.
- ✅ Android: botón Imprimir no funciona → `AndroidBridge.printSheet()`.
- ✅ Android: feedback colisiona con guardar → `downloadRequestMd` rutea a `saveTextFile` y este escribe fuera de `characters/`.
- ✅ Combatientes se salen de pantalla → wrapper con scroll horizontal en `.ini-table`.

### Pendientes
(ninguno conocido)

---

## ✅ Completado (referencia)
- Arreglos de atributos, modificadores, ACP, salvaciones fraccionales
- Traits de armas (alcance, mortal, ágil, derribo, desarme…) + botones de tirada
- Picker de armas desde `equipment.json`
- Sistema de notas guardadas (en todas las áreas de notas)
- PG mínimo 1/nivel · CMD incluye desvío+esquiva · Sobrecarga → velocidad 0 · Buffs mismo tipo no apilan · Solo una armadura+escudo AC · Carga compañero animal corregida
- **R-1** · Tumbado: −4 CA CaC + nota "+X vs distancia" en panel defensa
- **R-2** · ACP ×2 a Nadar (`sk.id === 'swim' ? acpTotal * 2`)
- **R-3** · Warning si primer HD de cada clase < máximo del dado
- **R-4** · Arma rota crit ×2 (`broken ? 2 : parseCritMult`)
- **R-5** · Warnings limpios + XP muestra `xp / umbralSiguienteNivel`
- **I-1** · Toggle TWF con 3 niveles (sin dote / con dote / mejorada)
- **I-2** · Toggle Ataque Poderoso / Puntería Mortal
- **I-3** · Carga FUE > 29 (la fórmula exponencial ya lo maneja correctamente)
- **I-4** · Trucos nivel 0 ilimitados (`isCantrip = level === 0` + etiqueta "Ilimitados")
- **I-5** · `updateCastAttrAuto()` auto-setea atributo lanzador por clase
- **I-6** · Pickers armaduras y equipo general
- **I-8** · Daño de atributo (naranja) y drenaje permanente (rojo)
- **I-7** · Panel defensas especiales: DR, ER ×5 tipos, inmunidades, visión especial (ya estaba)
- **I-9** · Botón ⚂ Tirar Iniciativa
- **I-10** · Auto-trackers completados: Bárbaro (Rabia), Druida (Forma Natural), Ninja (Ki), Alquimista (Bombas), Investigador (Inspiración), Ocultista (Foco)
- **U-2** · "Restantes" conjuros → burbujas pulsables por nivel (salva/carga estado, reset en Nuevo Día)
- **U-8** · Separar UI preparado/espontáneo (ya estaba implementado)
- **I-11** · Paladín/Ranger sin slots hasta nivel de clase 4 (`PARTIAL_CASTERS`)
- **U-1** · Historial de tiradas (últimas 20)
- **U-3** · Slots por día automáticos desde `classes.json`
- **U-4** · Compañero animal: tabla habilidades, ataques naturales, trucos
- **U-5** · Pool hechizos conocidos (lanzadores espontáneos)
- **U-6** · Campos completos por hechizo (escuela, componentes, tiempo, alcance, duración, salvación, RM, fuente, descripción)
- **U-7** · Rasgos raciales desde `races.json` con picker
- **E-2** · Tema Cerezo 🌸

---

## 🟠 IMPORTANTE + MEDIO — siguiente ciclo

### ✅ N-1 · Rasgos de Personaje (Traits) + Defecto (Drawback) — HECHO
Sección colapsable en panel de Biografía o panel de Dotes. Hasta 2 rasgos de personaje (combate, magia, fe, social, racial, campaña) + 1 defecto opcional (da un 3er rasgo). Cada entrada: nombre, tipo (chip/select), descripción. Se guarda/carga en JSON.

### ✅ N-2 · Orden de Cavalier / Samurai — HECHO
Igual que Dominios para el clérigo: selector de Orden visible solo si la clase activa es `cavalier` o `samurai`. Muestra poderes de orden (nv 2, 8, 15) como tarjetas de aptitud auto-generadas. Campo de texto para la modificación al Desafío (Challenge). Necesita `orders.json` con los datos de cada orden. El Samurai añade además el recurso **Resolución** (Resolve, usos = nv/4 redondeado arriba).

---

## 🟡 ÚTIL + MEDIO — cuando haya tiempo

### ✅ N-3 · Warpriest: Fervor — HECHO
Tracker `warpriest.fervor` en `CLASS_AUTO_FEATURES`: ½ nivel + mod SAB usos/día (mín 1). Blessings pendientes para futura iteración.

### ✅ N-4 · Arcanist: Arcane Reservoir — HECHO
Tracker `arcanist.reservoir`: 3 + ½ nivel puntos. Exploits manualmente gestionables mediante el panel de aptitudes general.

### ✅ N-5 · Hunter: Animal Focus — HECHO
Tracker `hunter.animalfocus`: minutos/día = nivel. Lista de focos pendiente para iteración posterior.

### ✅ N-6 · Shaman: Espíritu Errante — HECHO
Tracker `shaman.wandering`: Espíritu Errante desde nivel 4 (1/día, cambia al descansar). Los embrujos normales del espíritu principal son "at will" y no requieren tracker. Selector completo de espíritus pendiente para iteración posterior.

### ✅ N-7 · Slayer: Studied Target — HECHO
Tracker `slayer.studiedtarget`: +1 base, +1 cada 5 niveles.

### ✅ N-8 · Bloodrager: Rabia — HECHO
Tracker `bloodrager.rage`: 4 + mod CON + 2/nivel (fórmula idéntica a Bárbaro). Linajes pendientes.

### ✅ N-9 · Brawler: Martial Flexibility — HECHO
Tracker `brawler.flexibility`: 3 + ½ nivel (mín 3) usos/día.

### ✅ N-10 · Familiar: panel completo — HECHO
Nuevo panel colapsable `familiar-panel` con:
- Selector de tipo (12 opciones: bat, cat, hawk, lizard, monkey, owl, rat, raven, snake, toad, weasel, other)
- Campo nombre y nivel amo
- Cálculo automático de PG (½ amo), CA (10 + NA), Armadura Natural, INT (max 10), bonif. habilidad específico
- Lista de aptitudes desbloqueables por nivel (Alertness/Share Spells/Empathic Link nv1, Deliver Touch nv3, Speak with Master nv5, Speak with Animals nv7, Spell Resistance nv11, Scry nv13)

### ✅ N-11 · Invocaciones mejoradas — HECHO
`addSummonedCreature` extendido con:
- Iniciativa, velocidad, tamaño (select T/P/M/G/E)
- Campo de ataque (ej. "+5 mordisco 1d6+3")
- Duración actual/máx + unidad (rd/min/h) — tracker activo

### ✅ N-12 · Montura (Paladín / Cavalier) — HECHO
Checkbox "Es montura" en panel de compañero animal. Cuando está activo, muestra notas automáticas de Share Spells (nv5+), Smite Evil compartido (Paladín nv5+), RD 5/mal (nv11+), celestial (nv15+) y bonus táctico de Cavalier.

### ✅ N-13 · Munición tracker — HECHO
Campo `weapon-ammo-cur` / `weapon-ammo-max` en cada arma a distancia/composite. Se muestra/oculta automáticamente según `weapon-style`.

### ✅ N-14 · Dinero — HECHO (ya existente)
Sección `p.coins` ya incluye pc/pp/po/ppt + gemas con conversión automática a po y peso. Nota: electrum no es estándar en PF1e.

### ✅ N-15 · Competencias de armas y armaduras — HECHO
Nueva sección `p.proficiencies` en panel de inventario con checkboxes para Simples/Marciales + texto libre para Exóticas, y Ligera/Media/Pesada/Escudo/Torre. Nota de regla incluida (penalización −4 al ataque si no competente).

### ✅ N-16 · Skill bonuses contextuales — HECHO
Columna "Notas" añadida a ambas tablas de habilidades (`sk-${id}-notes`). Texto libre, no afecta al total, tooltip explicativo.

### ✅ N-17 · Alineamiento 2 ejes — HECHO
Campo `char-alignment` reemplazado por dos selects (L/N/C + G/N/E) + input readonly con código combinado (`LG`, `NG`, `N`, etc.).

### ✅ N-18 · Maniobrabilidad de vuelo — HECHO
Selector `fly-maneuverability` junto a velocidad de vuelo (Torpe −8 / Mala −4 / Media +0 / Buena +4 / Perfecta +8). Aplica bonus/penalización directamente al total de la habilidad Volar.

### ✅ N-19 · Spell Penetration — HECHO
Campos `spell-penetration` (readonly, calculado: 1d20 + NL + dotes) y `spell-pen-feat` (select: —, +2 básica, +4 mejorada) en panel de conjuros.

---

## 🟢 MEJORA / LARGO PLAZO

### ✅ L-1 · Diario de sesión y recompensas — HECHO
Tabla en panel de Biografía: fecha, XP, oro (po), notas. Totales acumulados. Guarda/carga en JSON.

### ✅ L-2 · Dominios (Clérigo) — HECHO
Del F-3: selector de 2 dominios; poderes de dominio con tracker; slot automático de hechizo de dominio por nivel.

### ✅ L-3 · Escuela Arcana (Mago) — HECHO
Del F-4: selector de escuela + 2 prohibidas; poderes de escuela con trackers; nota slot adicional.

### ✅ L-4 · Linaje de Sangre (Hechicero) — HECHO
Del F-5: ~20 linajes; poderes, dotes de bonificación, hechizos de linaje por nivel; Bloodline Arcana.

### ✅ L-5 · Metamagia — HECHO
Del M-4: chip por hechizo para marcar metamagia aplicada; consumir slot del nivel ajustado (Empoderar +2, Acelerar +4, etc.).

### ✅ L-6 · Patrono + Hechizos de Bruja / Hex tracker — HECHO
Del F-6: patronos con hechizos; familiar; lista de hexes con DCs.

### ✅ L-7 · Misterio + Revelaciones + Maldición (Oráculo) — HECHO
Del F-7: selector de misterio; revelaciones como aptitudes auto; hechizos de misterio como referencia; campo maldición.

### ✅ L-8 · Magus: Pool Arcano + Golpe de Conjuro + Combate Mágico — HECHO
Del F-8: pool arcano (niv/2 + mod INT); mecánicas de Spellstrike y Spell Combat.

### ✅ L-9 · Actuación Bárdica — HECHO
Del F-15: tracker rondas/día (4 + mod CAR + 2/niv); lista de actuaciones por nivel.

### ✅ L-10 · Inquisidor: Juicio + Perdición + Dotes de Trabajo en Equipo — HECHO
Del F-16: trackers de Judgment y Bane usos/día; interfaz de Teamwork feats compartidos.

### ✅ L-11 · Ataques de toque mágico en panel de armas — HECHO
Del F-10: entradas de ataque de toque CaC y a distancia con su fórmula y CA de toque como objetivo.

### ✅ L-12 · Zona para criaturas invocadas / no muertos — HECHO
Petición Joel: sección colapsable para criaturas controladas (stats básicos, HP, trackers).

### ✅ L-13 · Taxonomía Ex / Su / Sp en aptitudes especiales — HECHO
Del F-12: selector Ex/Su/Sp en cada tarjeta de aptitud especial.

### ✅ L-14 · Selector de Raza completo — HECHO
Picker de raza integrado en la cabecera: selecciona y aplica rasgos raciales, velocidad base, tamaño y bonos de atributo.

---

## 🎨 ESTÉTICO / COSMÉTICO

### ✅ E-1 · Foto del personaje — HECHO
Petición Joel: recuadro en la cabecera para imagen del personaje (upload o URL).

### ✅ E-3 · Tema Maniqka (morado oscuro) — HECHO
Tema oscuro con tonos morados/violetas.

### ✅ E-4 · Temas Royal — HECHO
Royal Blanco (oro/rojo/blanco) + Royal Negro (oro/rojo/negro). Ambos con fondo exterior completo.

---

## 🆕 PENDIENTES 2026-04-20 (descubiertas en testing)

- **DONE · Dominios de clérigo vacíos** — `tData()` no leía el formato `{es,en}` anidado de los JSON; solo buscaba `name_es`/`name_en`. Corregido con detección de objetos anidados en `tData`. Los 26 dominios ahora se muestran correctamente.
- **DONE · Órdenes de Caballero/Samurái** — mismo bug de `tData` + añadidas 3 órdenes exclusivas de Samurái (Guerrero, Héroe, Tierra) y variante Samurái de la Llama con *Desafío Glorioso*. El selector ahora filtra por clase activa y usa optgroups si hay ambas clases. `syncOrderFeatures` repopula el selector al cambiar clase.
- **DONE · Botones colapsables Familiar/Criaturas** — `familiar-header` y `summoned-header` no estaban en el array de `setupListeners`. Corregido.
- **DONE · Criaturas Controladas mejoradas** — campo Duración más grande y legible, "TS" renombrado a "Sal." con tooltip, bloque FUE/DES/CON/INT/SAB/CAR, 3 slots de ataque.
- **DONE · Familiar — atributos y checkbox Alerta** — añadido bloque FUE/DES/CON/INT/SAB/CAR manual, checkbox Alerta recolocado (ya no se solapa).

---

## 🆕 CICLO DE MEJORAS 2026-04-20 (investigación foros + estética)

### Alta prioridad (fácil + muy pedido)
- **✅ P-1 · Tracker de buffs con duración** — HECHO. Panel `#buff-tracker-panel` con filas nombre/tipo/bonus/objetivo/duración/restante, auto-decrement por "Siguiente ronda" (rd directo, min cada 10 clics, h solo en descanso largo), expirados gris+tachado, "Limpiar expirados", persistido como `__buff_tracker`.
- **✅ P-2 · Descanso personalizado** — HECHO. Botones "Descanso corto (1h)" y "Descanso largo (8h)" con routing `REST_RESET_KEY` por `auto-key`: corto recarga ki/panache/gravura/arcane pool/bardic/bombs/inspiration/focus/martial flex/animal focus/studied target; largo recarga TODO + slots + HP + quita fatiga. Reemplaza "Nuevo Día".
- **✅ P-3 · Timer de condiciones** — HECHO. Panel con 27 condiciones PF1e (bleed, blinded, dazed, fatigued, frightened, grappled, nauseated, paralyzed, prone, shaken, staggered, stunned, etc.), checkbox + round counter por condición, barra de chips activos arriba, "Siguiente ronda" decrementa todas, auto-uncheck al llegar a 0. Persistido en `conditions`.
- **✅ P-4 · Validador de prerequisitos de dotes** — HECHO. `refreshFeatPrereqChips()` parsea `prerequisites` de `feats.json` (FUE/STR 13, BAB +N, Nivel de lanzador N, Clase nivel N, rangos de habilidad, dotes previas), inyecta chip ✓/⚠️/❓ con tooltip en cada `.feat-card`, hook en `recalc()`/`addFeat`/eliminación/edición nombre/`importData`.
- **✅ P-5 · Notas de combate rápidas** — HECHO. Mini-textarea `#combat-notes-mini` (3 filas) fijada en `#combat-panel` antes de Defensa, sync bidireccional con el `#combat-notes` canónico del panel de Atributos, botón "Abrir panel completo".

### Media prioridad
- **✅ P-6 · Daño dividido por tipo** — HECHO. Chips en cada `.weapon-card` para 11 tipos (piercing/slashing/bludgeoning/fire/cold/acid/electricity/sonic/force/negative/positive), selección múltiple, mini-chips junto a `.weapon-dmg-normal-display`, persistidos en dataset/HTML dump, restaurados en `importData`.
- **✅ P-7 · Iniciativa + orden de turnos** — HECHO. Panel `#initiative-panel` (full-row) entre condiciones y habilidades, filas con nombre/init/DEX tiebreaker/PJ-enemigo/HP/notas, "Ordenar", "Siguiente turno" (avanza ▶, incrementa ronda), "Reiniciar", auto-añade PC desde `rollInitiative`. Persistido como `__combat_tracker`.
- **✅ P-8 · Tracker de concentración** — HECHO. Botón "Concentración" idiomático como `checkDispel`/`checkSpellResistance`: prompt CD o daño, tira 1d20 + NL + mod del atributo de `cast-attr`, alert con resultado i18n.
- **✅ P-9 · SLAs "a voluntad"** — HECHO. Subsección en `#features-body` con `.sla-card` (nombre/CL/DC/desc/Tirar/×) + chat-log `#sla-log` para anunciar uso, distinto del tracker de usos/día. Persistido en `__sla_atwill_html` + `__sla_log_html`.
- **✅ P-10 · Debilidades / Vulnerabilidades** — HECHO. Bloque en panel de defensas especiales entre ER y Visión, chips `{type, note}` con badge ×2, JSON persistido en `#weaknesses-json` (autocapturado por `exportData`).

### Baja prioridad
- **✅ P-11 · Copiar /roll para Discord** — HECHO. Botón 📋 junto a ATAQUE y DAÑO en cada arma; copia al portapapeles `/roll 1d20+X` y `/roll XdY+Z` compatible con Discord. Fallback a prompt si el navegador bloquea el clipboard.
- **✅ P-12 · Gestalt support** — HECHO. `addClassRow()` permite múltiples clases; BAB se acumula entre clases, salvaciones se suman fraccionalmente con +2 una sola vez por salvación buena, habilidades de clase se fusionan.
- ~~**P-13 · Modificadores negativos rápidos**~~ — descartado; las condiciones con checkbox ya cubren la necesidad.
- **✅ P-14 · Reordenar items** — HECHO. Drag & drop en armas, armaduras, aptitudes y hechizos (por nivel). Feedback visual: fantasma al arrastrar, contorno dorado en destino.
- **✅ P-15 · Economía de acciones** — HECHO. Columna "Acc." en el tracker de combatientes con tres tokens por fila: ● Estándar, ○ Movimiento, ◆ Rápida. Clic para marcar como usada (se atenúa). Se resetean automáticamente al inicio del turno del combatiente.

### Estética
- **✅ P-16 · Dados bonitos (CSS 3D inline)** — HECHO. Upgrade de `@keyframes die-roll` a tumble 3D con `perspective(420px) rotateX/rotateY/rotateZ` (8 keyframes, 720° cada eje, aterriza al frente). Halo dorado radial con `::before` en `.die-hp-wrap`/`.die-generic-wrap` usando `:has(.rolling)`. Pulso dorado `die-result-flash` al aparecer el número final. `will-change`, `transform-style:preserve-3d` y `prefers-reduced-motion` respetados. Sin assets externos, sin JS nuevo salvo 3 líneas por dado.

### Utilidad
- **✅ P-17 · Botón de feedback (tipo HELP)** — HECHO. Botón `?` dorado en `left:18px; bottom:18px` (opuesto al 🎨). Modal tipo email con Asunto + Contenido. Guarda en `localStorage['pf1e-feedback-entries']` y descarga un `request.md` completo en cada guardado (formato `# Request / Feedback` + entradas `## [fecha] — asunto` ordenadas por fecha desc). Incluye lista de entradas previas con eliminar individual, botón "Descargar request.md" independiente, Esc para cerrar, i18n ES/EN, oculto al imprimir.

---

## 🆕 CICLO 2026-04-21 — Mejoras identificadas en auditoría

### ✅ Q-1 · Cargas de objetos mágicos (varita, pergamino, objeto con cargas) — HECHO
Checkbox **"✦ Cargas"** en tarjeta de arma, armadura e ítem. Al marcarlo aparece fila con input de máximo y circulitos clicables (gold=disponible, vacío=gastado). Funciones: `toggleMagicCharges`, `rebuildMagicBubbles`, `toggleMagicCharge`.

### ✅ Q-2 · Vista de impresión / PDF — corregir y mejorar — HECHO
Reescrito el `@media print` en style.css: oculta `#initiative-tracker-panel`, `#warnings-panel`, filas de tirada de armas, todos los botones interactivos; expande collapsibles; inputs sin bordes sobre fondo blanco; page A4 portrait con 8mm de margen.

### ✅ Q-3 · Ataques iterativos — mostrar secuencia completa (+X/+Y/+Z) — YA ESTABA
`formatAtkProgression(wAtk, bab)` ya existía y generaba la cadena `+12/+7/+2` mostrada en `.weapon-atk-display`. TWF y Power Attack ya se aplican antes de llamarla.

### ✅ Q-4 · Trackers de aptitudes de clase faltantes — HECHO
Añadidos a `CLASS_AUTO_FEATURES`:
- **Smite Evil** (Paladín): 1 + nv/3 usos, resetea en descanso largo.
- **Stunning Fist** (Monje / Monje Unchained): nv/4 usos (mín 1), resetea en descanso largo.
Channel Energy, Lay on Hands y Bardic Performance ya existían. Clérigo, bardo y antipladín sin cambios.

---

## 📌 NO IMPLEMENTAR AUTOMÁTICAMENTE (demasiado complejo o fuera de alcance)

- **Retroactividad de INT/CON:** recalcular puntos de habilidad y PG al subir INT/CON en niveles pasados. Requiere historial por nivel; el usuario debe hacerlo a mano.
- **Slots corporales de objetos mágicos:** restricción de 1 objeto por slot. Sin datos de slot por objeto; el usuario gestiona.
- **Tirada de confirmación de crítico:** integrada en el flujo de combate — el usuario tira aparte.
- **Exclusión de daño de precisión/elemental en críticos:** requiere que el usuario marque qué dados no se multiplican.
- **Concentración integrada con CD contextual:** demasiadas situaciones; el usuario calcula la CD.
- **Eidolón del Summoner:** sistema tan complejo como una segunda ficha entera.
