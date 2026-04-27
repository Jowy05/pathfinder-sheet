Manual de Reglas de Pathfinder 1ª Edición (Edición Mejorada)
Incluye verificación de la hoja de personaje HTML interactiva
Propósito: Este manual explica las reglas esenciales y avanzadas de Pathfinder 1ª edición según las fuentes oficiales (Core Rulebook, Advanced Player's Guide, Unchained, etc.). Además, indica qué partes están bien implementadas en la hoja de personaje HTML proporcionada y cuáles no se siguen correctamente, para que el jugador sepa cuándo confiar en la hoja y cuándo debe aplicar ajustes manuales.

1. Atributos y modificadores
Regla oficial
Los seis atributos (FUE, DES, CON, INT, SAB, CAR) tienen un valor numérico. El modificador se calcula como:

Modificador = floor((Valor – 10) / 2)

(floor = redondear hacia abajo, en JavaScript Math.floor).

Este modificador se usa para las tiradas de ataque, daño, salvaciones, habilidades, etc.

Fuentes de bonificadores a un atributo:

Base: el valor inicial (compra de puntos o tiradas).

Racial: bonificación o penalización por raza.

Mejora (Enhancement): de objetos mágicos (Cinturón de Fuerza, etc.).

Inherente: de manuales mágicos o conjuros como Deseo (máximo +5).

Misceláneo: varios (dotes, rasgos, etc.).

Temporal: de conjuros de corta duración.

Edad: modificadores por categoría (mediana edad, viejo, venerable).

¿La hoja lo sigue bien?
Sí. Calcula automáticamente el modificador a partir del total, sumando todas las columnas de la tabla de atributos. Sin embargo, no impide el apilamiento de bonos del mismo tipo (ej. dos mejoras a FUE se sumarían), pero eso es responsabilidad del usuario.

Ejemplo
FUE 18 → (18‑10)/2 = +4.
FUE 9 → (9‑10)/2 = –0,5 → –1.

2. Puntos de golpe (PG)
Regla oficial
Cada clase tiene un dado de golpe (DG): d6, d8, d10 o d12.

Primer nivel: el dado se maximiza (p.ej., d10 → 10 PG).

Niveles siguientes: se tira el dado o se toma la media (normalmente mitad+1).

Se suma el modificador de Constitución por cada nivel.

Mínimo 1 PG por nivel, incluso si el modificador de CON es negativo.

¿La hoja lo sigue bien?
Parcialmente.

Permite tirar dados o introducir valores manuales.

Suma correctamente el modificador de CON y las bonificaciones (Dureza, etc.).

No aplica el mínimo de 1 PG por nivel (puede dar 0 o negativo).

No fuerza el máximo en el primer nivel (el usuario debe ponerlo a mano).

Ejemplo del error
Bárbaro nivel 2 (d12), CON 6 (–2).
Nivel 1: 12 – 2 = 10
Nivel 2: tirada 8 – 2 = 6
Total = 16 PG.
Oficial: mínimo 1 PG en nivel 2 → 10 + 1 = 11 PG.
La hoja daría 16. El jugador debe corregir manualmente.

3. Progresión de niveles y experiencia
Regla oficial
Pathfinder usa tres tablas de experiencia (XP) para subir de nivel: Rápida, Media y Lenta. No siguen una fórmula matemática pura; tienen ajustes manuales. Por tanto, la mejor práctica es usar una tabla de búsqueda (lookup table).

Nivel	Rápida	Media	Lenta
1	0	0	0
2	1.300	2.000	3.000
3	3.300	5.000	7.500
4	6.000	9.000	14.000
5	10.000	15.000	23.000
6	15.000	23.000	35.000
7	23.000	35.000	53.000
8	34.000	51.000	77.000
9	50.000	75.000	115.000
10	71.000	105.000	160.000
...	...	...	...
20	2.400.000	3.600.000	5.350.000
Al subir de nivel:

Cada 4 niveles (4, 8, 12, 16, 20): se incrementa un atributo en +1.

Si se sube INT, los puntos de habilidad de todos los niveles anteriores deben recalcularse retroactivamente.

Si se sube CON, los PG máximos deben aumentar retroactivamente (1 PG por nivel).

Niveles impares (1, 3, 5, ...): se obtiene una nueva dote.

Niveles pares de algunas clases: dotes de bonificación adicionales (guerrero, mago, etc.).

¿La hoja lo sigue bien?
Parcialmente.

Tiene las tablas de XP y muestra el umbral para el siguiente nivel.

Los avisos (warnings) indican cuándo falta una mejora de atributo.

No recalcula automáticamente los puntos de habilidad ni los PG al aumentar INT o CON. El usuario debe hacerlo manualmente (la hoja solo avisa).

Ejemplo de retroactividad
Un pícaro nivel 4 con INT 12 (+1) tiene 4×(8+1)=36 puntos de habilidad.
Si en nivel 4 aumenta INT a 14 (+2), debería tener 4×(8+2)=40 puntos. La hoja no añade los 4 puntos retroactivos; el jugador debe añadirlos manualmente.

4. Bono de Ataque Base (BAB) y salvaciones
Regla oficial
Cada clase tiene progresiones:

Tipo	BAB por nivel	Salvación buena	Salvación mala
Buena (full)	+1	2 + nivel/2	–
Media (3/4)	+0,75	–	–
Mala (1/2)	+0,5	–	nivel/3
Para multiclase sin regla fraccional: se suman los valores enteros de cada clase (tal como aparecen en sus tablas).
Con regla fraccional (Unchained): se suman las fracciones, se redondea al final, y los +2 de las salvaciones buenas solo se aplican una vez por tipo.

¿La hoja lo sigue bien?
Sí, completamente.

Ofrece un interruptor para activar/desactivar el modo fraccional.

Con modo fraccional activado, suma fracciones y aplica +2 una sola vez.

Con modo desactivado, suma los valores enteros (correcto según reglas estándar).

Ejemplo estándar (correcto)
Guerrero 1 (BAB +1, Fort +2) + Mago 1 (BAB +0, Fort +0) → BAB +1, Fort +2.

Ejemplo fraccional (correcto)
Guerrero 1 (BAB 1, Fort 0,5) + Clérigo 1 (BAB 0,75, Fort 0,5) → BAB 1,75 → +1; Fort 1,0 +2 = +3.

5. Clase de Armadura (CA) y sus tres variantes
Regla oficial
CA Total = 10 + armadura + escudo + DES (limitado) + tamaño + natural + desvío + esquiva + otros.

CA de Toque = 10 + DES + tamaño + desvío + esquiva + otros (ignora armadura, escudo y natural).

CA Desprevenido = 10 + armadura + escudo + tamaño + natural + desvío + otros (ignora DES y esquiva).

Reglas de apilamiento de bonificadores:
Los bonos del mismo tipo no se acumulan; se aplica el mayor (excepciones: Esquiva y Circunstancia se acumulan). Tipos comunes: Mejora, Moral, Desvío, Sagrado, Profano, Suerte, Competencia, Alquímico, Armadura, Escudo, Armadura Natural.

¿La hoja lo sigue bien?
Estructuralmente sí, pero con dos problemas:

Apilamiento: la hoja suma todas las fuentes sin comprobar tipos. Por ejemplo, dos bonos de mejora a la armadura natural (racial +1 y conjuro Piel corteza +2) se sumarían (+3) cuando oficialmente solo debería aplicarse el mayor (+2). El usuario debe evitar duplicar.

CMD: ignora por completo los bonos de desvío y esquiva (ver sección de maniobras).

Ejemplo del error de apilamiento
Armadura natural racial +1 y Piel corteza (+2 mejora).
Oficial: CA +2. Hoja: CA +3. El jugador debe quitar el +1 racial si usa el conjuro.

6. Maniobras de combate (CMB y CMD)
Regla oficial
CMB = BAB + FUE + tamaño_especial + bonificadores de dotes (Derribo Mejorado, etc.) + misc.

CMD = 10 + BAB + FUE + DES + tamaño_especial + desvío + esquiva + otros bonos (excepto armadura y escudo).

Modificadores de tamaño: son diferentes para ataques/CA y para maniobras.

Tamaño	Modificador Ataque/CA	Modificador CMB/CMD
Fino	+8	–8
Diminuto	+4	–4
Menudo	+2	–2
Pequeño	+1	–1
Mediano	0	0
Grande	–1	+1
Enorme	–2	+2
Gargantuesco	–4	+4
Colosal	–8	+8
¿La hoja lo sigue bien?
No.

CMB: solo usa BAB + FUE + tamaño_especial. Ignora bonificadores de dotes y condiciones.

CMD: solo usa 10 + BAB + FUE + DES + tamaño_especial. Ignora desvío, esquiva, etc.

La tabla de tamaños para CMB/CMD no está implementada (la hoja usa el mismo modificador que para ataque/CA).

Ejemplo del error
Guerrero nivel 6, FUE 18 (+4), DES 12 (+1), anillo de protección +2, dote Derribo Mejorado (+2 a CMB).

CMB oficial para derribar: +6 (BAB) +4 +0 +2 = +12. Hoja: +10.

CMD oficial: 10+6+4+1+0+2(desvío) = 23. Hoja: 10+6+4+1 = 21.
El jugador debe añadir los bonos manualmente.

7. Dotes: Ataque Poderoso y Puntería Mortal
Regla oficial
Estas dotes sacrifican precisión por daño. El penalizador al ataque y el bono al daño escalan con el BAB:

Penalizador = –1 – floor(BAB / 4)

El bono al daño depende del tipo de arma:

Arma ligera o secundaria: igual al valor absoluto del penalizador.

Arma de una mano o primaria: doble del valor absoluto.

Arma a dos manos: triple del valor absoluto.

¿La hoja lo sigue bien?
No. No hay ningún control para activar Ataque Poderoso o Puntería Mortal. El usuario debe crear un buff temporal o modificar manualmente el ataque y daño de cada arma.

Ejemplo
Guerrero BAB +6, Ataque Poderoso activado.
Penalizador = –1 – floor(6/4) = –1 –1 = –2.
Con espada larga a una mano: –2 ataque, +4 daño.
Con espada a dos manos: –2 ataque, +6 daño.
La hoja no aplica estos cambios automáticamente.

8. Críticos
Regla oficial
Se tira el ataque. Si el dado natural está dentro del rango de amenaza del arma (ej. 19-20), se pasa al paso 2.

Tirada de confirmación: se tira otra vez el ataque con los mismos bonificadores. Si impacta, el crítico se confirma.

Multiplicación del daño: se multiplican los dados de daño base y los bonificadores planos (FUE, mejora mágica, Ataque Poderoso, etc.).
No se multiplican los dados adicionales de precisión (Ataque furtivo) ni los de daño elemental (1d6 fuego, etc.).

¿La hoja lo sigue bien?
Parcialmente.

Muestra el rango de amenaza y el multiplicador.

Los botones de «Daño crítico» tiran los dados multiplicados.

No realiza la tirada de confirmación (el usuario debe hacerla aparte).

No excluye automáticamente el daño de precisión/elemental de la multiplicación; el usuario debe saber que esos dados no se multiplican.

Ejemplo correcto
Espadón +1 flamígero (2d6 +1 mejora +4 FUE), Ataque furtivo 2d6.
Crítico ×2:
Oficial: (2d6×2) + (1×2) + (4×2) + 1d6 (fuego) + 2d6 (furtivo).
La hoja, si se usa el botón de crítico, multiplicaría todo, incluyendo fuego y furtivo (error). El jugador debe tirar el daño crítico por separado o ajustar manualmente.

9. Habilidades
Regla oficial
Rangos máximos = nivel total (o HD total).

Habilidad de clase: si tienes al menos 1 rango, obtienes un +3.

Solo entrenada: no se puede usar sin rangos.

Penalizador de armadura (ACP): se aplica a Acrobacias, Trepar, Escapismo, Montar, Juego de Manos, Sigilo y Nadar (aplicación simple, no doble — el "ACP ×2 a Nadar" es regla de D&D 3.5, no de Pathfinder 1e). Si no se es competente con la armadura, el ACP también afecta a las tiradas de ataque y a pruebas de FUE/DES.

Retroactividad: si el modificador de INT aumenta (por mejora de atributo o objeto mágico usado durante 24h), los puntos de habilidad de todos los niveles anteriores deben recalcularse.

¿La hoja lo sigue bien?
Parcialmente.

Calcula bien el total (rangos + atributo + clase + misc + ACP + condiciones).

Limita los rangos al nivel total y avisa si se superan.

Las habilidades «solo entrenadas» muestran «—» si no hay rangos.

No recalcula puntos de habilidad retroactivamente al aumentar INT. El usuario debe añadirlos manualmente.

Nadar usa ACP simple (correcto RAW de Pathfinder 1e; el ACP ×2 era regla de D&D 3.5).

No contempla la falta de competencia con armadura (duplicar ACP y afectar ataque).

Ejemplo del error de retroactividad
Pícaro nivel 4 con INT 12 (+1) → 4×(8+1)=36 puntos.
Sube INT a 14 (+2) en nivel 4 → debería tener 4×(8+2)=40 puntos.
La hoja no añade los 4 puntos extra; el jugador debe añadirlos manualmente en los rangos.

10. Capacidad de carga y peso de monedas
Regla oficial
Capacidad de carga se basa en la Fuerza y el tamaño.

Para Fuerza > 29, se usa la fórmula exponencial:
Carga pesada base (tabla para Fuerza entre 20-29) × 4^(floor((STR-20)/10)).

Peso de las monedas: 50 monedas (de cualquier tipo) = 1 libra.

Multiplicadores por tamaño:
Fino ×0,125, Diminuto ×0,25, Menudo ×0,5, Pequeño ×0,75, Mediano ×1, Grande ×2, Enorme ×4, Gargantuesco ×8, Colosal ×16.

Cuadrúpedos: usan **tabla separada** (no es un multiplicador sobre la bípeda). Valores: Fino ×0,25, Diminuto ×0,5, Menudo ×0,75, Pequeño ×1, Mediano ×1,5, Grande ×3, Enorme ×6, Gargantuesco ×12, Colosal ×24.

Carga Media: velocidad 30 ft → 20 ft (base 20 → 15), máx DES +3, penalizador ACP –3, no puede correr.
Carga Pesada: velocidad 30 ft → 20 ft (base 20 → 15, igual que media), máx DES +1, penalizador ACP –6, no puede correr.
Sobrecarga: superar la carga máxima deja al personaje sin poder moverse voluntariamente en la práctica (la hoja lo implementa como velocidad 0; oficialmente la regla permite arrastrar pero no correr, con velocidad extremadamente reducida). Pierde el bono de DES a CA.

¿La hoja lo sigue bien?
Parcialmente.

Calcula bien la capacidad para Fuerza ≤ 29, incluyendo opciones (Cordones de mula, Carga hormiga, cuadrúpedo).

Suma el peso de las monedas correctamente.

No implementa la fórmula para Fuerza > 29 (se queda en el valor de la tabla base).

En sobrecarga, asigna velocidad 5 pies en lugar de 0 (error grave).

Aplica reducciones de velocidad y máx DES por carga, pero no usa la tabla oficial de reducción (usa una simplificación).

Ejemplo del error de sobrecarga
Personaje con sobrecarga, velocidad base 30.
Oficial: 0 pies (no se mueve). Hoja: 5 pies. El jugador debe saber que no puede moverse.

Ejemplo de Fuerza extrema
Fuerza 35 → equivalente a Fuerza 25 en tabla (carga pesada 800 lb).
Oficial: 800 × 4^(floor((35-20)/10)) = 800 × 4^1 = 3.200 lb.
Hoja: se queda en 800 lb (incorrecto).

11. Magia: CD, bonus spells y concentración
11.1. CD de salvación de conjuros
CD = 10 + nivel del conjuro + modificador del atributo de lanzamiento

Para habilidades de monstruos (Ex, Su, Sp):

CD = 10 + floor(HD totales / 2) + modificador del atributo relevante

¿La hoja lo sigue bien?
Sí para conjuros de personajes jugador. Muestra la CD correcta para cada nivel.
No implementa el cálculo para habilidades de monstruos (la hoja no está pensada para NPCs).

11.2. Conjuros adicionales por atributo alto (bonus spells)
Regla oficial: Se obtienen espacios adicionales según la siguiente fórmula (o tabla, pero la fórmula es más práctica):

Bonus slots por nivel = max( floor((modificador – nivel_conjuro + 1) / 4) , 0 )

Ejemplo: Modificador +7 (INT 24).

Nivel 1: floor((7-1+1)/4) = floor(7/4)=1 → +1 espacio.

Nivel 4: floor((7-4+1)/4) = floor(4/4)=1 → +1.

Nivel 5: floor((7-5+1)/4) = floor(3/4)=0 → nada.

Nivel 8: floor((7-8+1)/4) = floor(0/4)=0.

¿La hoja lo sigue bien?
Sí. La hoja calcula los bonus slots según esta fórmula y los añade al campo «Por Día», respetando la base que introdujo el usuario. Funciona correctamente.

11.3. Concentración
Regla oficial: Cuando un conjuro puede interrumpirse (por daño, lanzar a la defensiva, etc.), se tira 1d20 + CL + modificador de atributo contra una CD que depende de la situación.

Situación	CD
Lanzar a la defensiva	15 + (nivel del conjuro × 2)
Sufrir daño mientras lanzas	10 + daño recibido + nivel del conjuro
Daño continuo (sangrado, etc.)	10 + (daño total/2) + nivel del conjuro
Apresado o inmovilizado	10 + CMB del agresor + nivel del conjuro
Movimiento vigoroso (montura al trote, barco tranquilo)	10 + nivel del conjuro
Movimiento violento (montura al galope, barco agitado)	15 + nivel del conjuro
Movimiento extremadamente violento (terremoto, barco en tormenta)	20 + nivel del conjuro
Enmarañado	15 + nivel del conjuro
Viento fuerte (o lluvia/nieve)	5 o 10 + nivel del conjuro según intensidad
Afectado por conjuro no dañino	CD del conjuro interferente + nivel del conjuro
Si recibes daño de múltiples fuentes en el mismo asalto, **se hace una tirada de concentración por cada fuente** (no una sola sumando; eso es un malentendido común).

¿La hoja lo sigue bien?
No. Solo muestra el bonificador de concentración (CL + mod), pero no integra ninguna tirada ni CD. El usuario debe tirar el d20 aparte y calcular la CD según el contexto.

12. Condiciones
Regla oficial
Las condiciones (fatigado, asustado, tumbado, etc.) modifican múltiples estadísticas. La hoja implementa la mayoría correctamente, pero con algunos errores.

Errores conocidos en la hoja:

Tumbado: debería dar +4 a CA contra ataques a distancia y –4 CA cuerpo a cuerpo. La hoja muestra una nota con el valor vs. distancia pero no lo aplica al cálculo principal.

Miedo múltiple (Asustado / Despavorido / Aterrado): **las condiciones de miedo NO se acumulan** — se aplica la más severa (Aterrado > Despavorido > Asustado). La hoja permite marcar varias casillas, lo que puede confundir.

Despavorido (frightened): condición independiente (no es "Asustado + huir"). Aplica los mismos −2 que Asustado pero además obliga al personaje a huir 1 asalto como mínimo.

Agotado (exhausted): −6 FUE y DES (implementado correctamente en la hoja), no −2.

Condiciones que la hoja aplica bien:

Fatigado/Agotado: modifican FUE/DES.

Cegado: –2 CA, sin bono de DES, –4 a habilidades.

Enfermo: –2 ataque, daño, salvaciones, habilidades.

Asustado/Despavorido: –2 ataque, salvaciones, habilidades.

etc.

¿La hoja lo sigue bien?
Mayormente bien, excepto los errores señalados. El jugador debe recordar el +4 de CA de tumbado y la velocidad 0 en sobrecarga.

13. Objetos mágicos y slots corporales
Regla oficial
Un personaje humanoide solo puede beneficiarse de un objeto mágico por cada «slot» corporal. Los slots oficiales son:
Cabeza, Cintillo (headband), Ojos, Cuello, Pecho, Cuerpo, Armadura, Escudo, Manos, Muñecas, Anillo (×2), Cinturón, Pies, Hombros (shoulders — incluye capas, mantos, pauldrones, etc.).

Nota: no existe un slot «capa» separado del de «hombros»; la capa forma parte del slot de hombros.

No se pueden usar dos objetos en el mismo slot (ej. dos capas, dos cinturones). La hoja no implementa ninguna restricción; el usuario debe gestionarlo manualmente.

¿La hoja lo sigue bien?
No. La hoja permite equipar cualquier número de objetos en cualquier slot sin comprobación. El jugador debe saber las limitaciones.

14. Estado «roto» (broken)
Regla oficial
Arma rota: –2 a las tiradas de ataque y daño. El multiplicador crítico se reduce a ×2 y **solo amenaza con 20 natural** (independientemente del rango de amenaza original del arma). Las varitas y báculos rotos gastan **el doble de cargas** al usarse (la munición convencional no tiene consumo extra — ese es un malentendido común).

Armadura rota: su bonificación de CA se reduce a la mitad (redondeando hacia abajo). El penalizador ACP se duplica. La velocidad no se ve afectada adicionalmente.

¿La hoja lo sigue bien?
Parcialmente.

Para armas: aplica –2 ataque y daño, pero no reduce el multiplicador crítico a ×2.

Para armaduras: reduce la CA a la mitad y duplica el ACP. Correcto.

No afecta a la velocidad (correcto).

Ejemplo del error
Hacha de batalla rota (crítico ×3).
Oficial: crítico ×2. Hoja: sigue mostrando ×3 (y al tirar daño crítico multiplica por 3, incorrecto). El jugador debe recordar que el crítico es solo ×2.

15. Resumen del estado actual (post-auditoría 2026-04-20)

Arreglado en código (ya no son bugs):
- CMD incluye desvío y esquiva.
- Combatir con dos armas: toggle con 3 niveles (sin dote / con dote / mejorada).
- Ataque Poderoso y Puntería Mortal: toggle con fórmula correcta.
- Sobrecarga: velocidad 0 aplicada.
- Buffs del mismo tipo: se toma el mayor (solo untyped y dodge apilan).
- Fuerza > 29 para capacidad de carga: fórmula exponencial aplicada.
- Arma rota: multiplicador crítico reducido a ×2.
- Agotado: −6 a FUE y DES.

Parcialmente implementado (el usuario debe ajustar a mano):
#	Regla	Estado actual
1	Mínimo 1 PG por nivel	Solo garantiza total ≥ número de HD; no fuerza 1 PG por nivel individual.
2	Flanqueo y Carga como acción	Solo existe la condición "Flanqueado" (defensiva). No hay botón de carga/flanqueo para el atacante.
3	Concentración	Muestra bonificador pero no tira ni aplica CDs contextuales.
4	Tumbado contra distancia	Muestra nota informativa pero no modifica el cálculo de CA.
5	Rasgos (traits)	Solo texto libre; no aplican bonos numéricos automáticos.
6	Carga del compañero animal	Aplica ×1,5 fijo (cuadrúpedo) pero no consulta el tamaño seleccionado.

Intencionalmente no implementado (demasiado complejo o fuera de alcance):
- Retroactividad INT/CON al subir de nivel.
- Slots corporales (1 objeto por slot): el usuario gestiona las restricciones.
- Exclusión de daño de precisión/elemental en críticos: el usuario tira aparte.
- Tirada de confirmación de crítico integrada.

Todas las demás reglas (atributos, habilidades básicas, daño de armas, conjuros básicos, SR, disipar, idiomas, etc.) están bien implementadas.