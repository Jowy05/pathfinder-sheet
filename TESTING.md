# 🧪 Checklist de testing — Pathfinder Sheet

Marcado **[M]** solo Mobile, **[PC]** solo PC, **[M+PC]** ambos. Cada item dice qué tocar y qué debería pasar.

## ⚡ Smoke test rápido (5 min)

**[M+PC]** Abrir app → crea PJ con nombre, raza Humano, clase Guerrero nv 1, atributos por defecto.
- ✅ Ficha carga sin errores en consola/log.
- ✅ HP, CA, BAB, saves se calculan.

**[M+PC]** Pestaña "Más" o footer → **Acerca de · v1**.
- ✅ Botón **clicable** (no greyed).
- ✅ Se ve log con `app · log inicializado` y `db · DB cargado`.
- ✅ Botón "Copiar" funciona.

---

## 👤 Tab Personaje

**[M]** Identidad → llena nombre, jugador, género, color pelo/ojos, región (Andoran/Varisia/…).
- ✅ Persisten al exportar/reimportar.

**[M]** Selecciona raza Enano → atributos cambian: +2 CON, +2 SAB, −2 CAR auto.
- ✅ Rasgos raciales aparecen abajo.

**[M+PC]** Selecciona clase Druida, sube a nivel 4.
- ✅ Aparece card "🎯 Aumentos pendientes: 1" con 6 botones +1 stat. Asigna +1 INT.
- ✅ Stat sube y `pendingStatBumps` baja a 0.

**[M+PC]** Cambia método atributos en card "Generador":
- Pulsa "4d6 drop lowest" → ✅ valores cambian.
- Pulsa "Personalizado" → ✅ todos a 10.
- Pulsa "Point-Buy 25" → ✅ aplica PB.
- **[M]** "Heroico" / "Stat Array" → ✅ aplica preset.

**[M]** Subir foto del PJ → ✅ abre **galería nativa Android** (no file explorer).

**[M]** Multiclase: añade Mago nv 3 además del Druida nv 4.
- ✅ BAB = 4 (3+1). Saves suman ambas progresiones.
- ✅ Class features de AMBAS clases aparecen (no solo la primera).

**[M+PC]** Activar **Gestalt mode** en ajustes.
- ✅ BAB = max(3, 2) = 3, no 5. Saves toman el max.

---

## ⚔ Tab Combate

**[M+PC]** Botones de HP rápido ±1, ±5 → ✅ HP cambia.

**[M+PC]** Permite HP < 0 hasta `-CON_score`. Aplicar daño 30 con CON 14.
- ✅ HP llega a −16 sin clamp a 0.
- ✅ Chip "Muriendo" se marca auto.

**[M+PC]** Toggle "Sangrando" en condiciones, avanzar 1 asalto.
- ✅ HP baja 1 punto auto. Log muestra `combate · sangrado tick`.

**[M+PC]** Toggle "Cegado":
- ✅ CA total baja 2 puntos.
- ✅ Atque baja 2 puntos. **(antes PC no aplicaba el -2 atq — verificar)**

**[M+PC]** Toggle "Asalto Enérgico":
- ✅ Atque -4, CA dodge +2.

**[M+PC]** Toggle "Carga":
- ✅ Atque +2, CA dodge -2.

**[M]** Toggle "Acción completa":
- ✅ OFF → solo aparece 1 ataque iterativo. ON → todos los iterativos.

**[M+PC]** Card maniobras → "Derribar":
- ✅ Tira 1d20+CMB, muestra resultado.
- ✅ Si tienes dote "Derribo Mejorado", aplica +4.

**[M+PC]** Card ataques especiales → "Cleave":
- ✅ Pide confirm "¿Impactaste?", si SÍ tira 2.º ataque.

**[M+PC]** Botones de TS (Fortaleza/Reflejos/Voluntad):
- ✅ Cada uno tira `1d20 + total` y muestra resultado.

**[M+PC]** Botón Iniciativa:
- ✅ Tira `1d20 + DEX + misc`.

**[M+PC]** Buff packs PF1e:
- Abre "📦 Buff packs" → aplica "Premura" (Haste).
- ✅ Buff temporal aparece en lista con duración por nivel.
- ✅ +1 atk, +1 ref, +1 CA reflejados en totales.

**[M+PC]** Mythic toggle → activar tier 3.
- ✅ +3 atk, +3 saves, +3 CA auto.

**[M+PC]** Hard to Kill (mythic feat):
- Aplica daño hasta hp = -CON. ✅ NO se marca "Muriendo" ni "Inconsciente".
- En PC: ✅ permite hp hasta -2×CON.

**[M+PC]** Init tracker:
- Añade 3 combatientes con iniciativas distintas.
- ✅ Ordenar funciona, siguiente turno avanza, asalto cuenta.

**[M]** Botón **"🛡 Check SR"** en card defensas.
- ✅ Pide NL enemigo, tira 1d20+CL_propio.

**[M]** Botón **"🎯 Tirada concentración"**.
- ✅ Pide DC, tira correctamente.

**[M]** Botones **"🤚 Ataques de toque"** CaC/Distancia.
- ✅ Tiradas correctas.

---

## 📚 Tab Aptitudes

**[M+PC]** Habilidades → cambia rangos en Acrobacias (DES skill).
- ✅ Total = ranks + DEX mod + (3 si class skill).
- ✅ Class skill toggle aplica +3 cuando ranks ≥ 1.

**[M+PC]** Botón "📐 T10" en una habilidad → ✅ muestra "Tomar 10 = X".

**[M+PC]** Añade dote del catálogo: "Gran Fortaleza".
- ✅ Save Fort sube +2 automático.

**[M+PC]** Añade dote "Esquiva".
- ✅ CA sube +1.

**[M+PC]** Añade dote "Dureza".
- ✅ HP_MAX sube `max(3, nivel)` (3 a nv 1-3, +1/nv después).

**[M+PC]** Conjuros: clase Mago, añade conjuro custom "Bola de Fuego" Nv 3.
- ✅ Aparece en lista, slots Nv 3 visibles.

**[M+PC]** Añade dote "Enfoque de Conjuro (Evocación)".
- ✅ DC de Bola de Fuego sube +1.

**[M+PC]** Botón "📚 Buscar en catálogo PF1e (564 conjuros)".
- ✅ Picker abre, filtra por clase Mago, nivel 3, busca "fuego".
- ✅ Selecciona uno → se añade.

**[M+PC]** Marca conjuro como preparado → toggle.
- ✅ Cambia estado.

**[M+PC]** Botón "Descansar 8h".
- ✅ Slots restauran al max.
- ✅ Rage uses / ki / smite / channel restauran (verificar log: `rest-long dispatch`).

**[PC]** Filtro de conjuros (todos/conocidos/preparados/lanzados).
- ✅ Filtra correctamente.

**[PC]** Spell DC bar.
- ✅ Muestra desglose: base 10 + atrib + mod + escuela + NL.

---

## 🎒 Tab Equipo

**[M+PC]** Catálogo de armas → añade "Espada larga".
- ✅ Card aparece con atk, daño, crítico.

**[M+PC]** Tap en card de arma → ✅ abre editor (no solo borrar).

**[M+PC]** Crea arma personalizada con style "offhand", aplica TWF.
- ✅ Penalizadores -2/-2 con dote, -4/-8 sin.

**[M]** TWF select → "TWF base + offhand no-ligera (-2/-6)".
- ✅ Penalizadores -2/-6 aplican.

**[M+PC]** Catálogo armadura → "Cota de mallas", equipa.
- ✅ CA sube, max DEX, ACP auto.

**[M+PC]** Inventario → añade "Poción de curar heridas leves".
- ✅ Categoría pociones.

**[M+PC]** Beber poción (botón en inv).
- ✅ HP sube 1d8+1 auto. Qty baja 1.

**[M]** Botón **"🎒 Equipo inicial por clase"**.
- ✅ Aplica items default según la clase (si DB tiene `starting_gear`).

**[M+PC]** Card "🛡 Items de salvación":
- Mete +5 en "Resistencia genérica" (Cloak of Resistance).
- ✅ Los 3 saves suben +5.

**[M]** 💎 Gemas en monedas → mete 100 po.
- ✅ Display muestra "⚖ Peso monedas: X lb" actualizado.

**[M+PC]** Cambia peso de muleback / quadruped → ✅ capacidad de carga cambia.

---

## 🐾 Compañeros

**[M]** Tab Más → Compañeros → "Compañero animal".

**[M]** Selecciona tipo "Lobo" → "Aplicar tipo".
- ✅ Rellena raza, stats, ataques, AC nat, dotes iniciales.

**[M]** Nivel efectivo 4 → "Aplicar progresión".
- ✅ HD, BAB, saves, AC nat según tabla PF1e.
- ✅ Aumento de atributo pendiente +1 (lv 4).

**[M]** Subir a nv 7.
- ✅ Aviso de cambio de tamaño.
- ✅ Multiattack auto-añadido a nv 9.

**[M]** Toggle 5 trucos → ✅ contador "Trucos X/Y".

**[M]** Tira ataque del compañero → ✅ 1d20+atk.

**[M]** Sync con clase Druida → ✅ nivel auto desde el PJ.

**[M]** Familiar → tipo Búho → ✅ stats auto, INT 5+lvl_amo.

**[M]** Eidolón → forma base Bípedo → ✅ tope ataques naturales = 6.

---

## 💾 Persistencia + Sync PC↔Mobile

**[M+PC]** Crea PJ completo (nombre, raza, clase nv 5, atributos, 3 dotes, 2 conjuros, 1 arma, 1 armadura).

**[M+PC]** Exportar JSON → guarda fichero.

**[M+PC]** Reimporta el mismo JSON en la misma plataforma.
- ✅ Todo restaurado idéntico.

**[M+PC]** **Sync cross-platform** (NUEVO en v1.4.0):
- Exporta en Mobile.
- Importa en PC. ✅ Detecta shape "mobile", convierte automático.
- ✅ Identidad, atributos, clases, XP, mythic se ven correctos en PC.
- ⚠️ Conjuros / dotes / armas / armaduras pueden tener gaps (mobile guarda data, PC necesita re-render desde data).

- Al revés: exportar en PC, importar en Mobile.
- ✅ Detecta shape "pc", convierte.
- ⚠️ Blobs HTML opacos del PC → mobile avisa por toast cuáles no pudo parsear.

**[PC]** Settings → toggle "Exportar con foto" OFF → exporta → ✅ JSON no incluye dataURL.

**[M]** Settings → toggle "Exportar con foto" idem.

**[M+PC]** Backup automático → Settings → "Restaurar backup".
- ✅ Lista 3 backups con timestamp.
- ✅ Selecciona uno → confirma → recarga con el backup.

---

## 🎲 Master mode (solo Mobile)

**[M]** Settings → activa "Modo Máster" → Más → Modo Máster.
- ✅ Overlay con iframe abre.

**[M]** Mapa:
- Pinch zoom 2 dedos → ✅ escala.
- Tap token → ✅ selecciona.
- Long-press token → ✅ abre drawer.
- Arrastra token → ✅ se mueve libremente.

**[M]** Plantillas:
- Selecciona "Cono" → ✅ aparece triángulo (no rejilla de cuadrados).
- Coloca círculo, línea, cuadrado.

**[M]** Medir distancias:
- Tap 2 puntos → ✅ muestra distancia en ft (5 ft por hex).
- Hasta 8 puntos secuenciales → ✅ suma total.

**[M]** Init tracker → añade 3 combatientes, ordena, siguiente turno.

**[M]** Bestiario → busca "lobo" → invoca → ✅ token aparece.

**[M]** Edita token: nombre, color, foto, HP.

**[M]** Exporta estado → cambia encuentro → ✅ ring buffer recuerda el anterior.

---

## 🐛 Edge cases / cazar regresiones

**[M+PC]** Activa Cegado + Sacudido al mismo tiempo → ✅ los penalizadores **NO se duplican** (era un bug pre-v1.1).

**[M+PC]** Cambia idioma ES↔EN → ✅ no aparecen literales tipo `wk.silver` o `dtype.fire` (era gap pre-v1.4).

**[M]** Asalto siguiente (botón ▶ en resumen) sin init tracker activo → ✅ contador sube +1 (no doble-incremento).

**[M+PC]** Importa una ficha vieja v0 → ✅ migración v0→v1→v2 aplica defaults.

**[M+PC]** Llena el log de "Acerca de" con 50+ acciones → ✅ buffer cap a 500, persiste entre sesiones.

---

## 📨 Reportar bugs

Cuando encuentres algo:
1. Pestaña Más → **Acerca de · v1**.
2. Botón **"📋 Copiar"** → pega el log donde puedas mandarme.
3. Describe brevemente qué hiciste antes del bug.

El log captura automáticamente:
- Errores no manejados (`error · …`)
- Apertura de sheets (`sheet · openSheet · …`)
- Acciones de combate/conjuros/dotes/equipo
- Cambios de tab, idioma, tema
- Tiradas de dados

Los logs viven en `localStorage['pf1e-action-log']` (mobile) y `localStorage['ficha-action-log']` (PC, con fallback).
