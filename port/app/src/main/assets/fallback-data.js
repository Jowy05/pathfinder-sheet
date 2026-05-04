/* ============================================================
   FICHA PATHFINDER · FALLBACK DATA (stub)
   Stub vacío. La web carga los JSON via fetch().
   El port Android sustituye este archivo por uno con FALLBACK_*
   embebido para funcionar bajo file://.
   ============================================================ */
window.FALLBACK_DATA = window.FALLBACK_DATA || null;

const FALLBACK_DOMAINS = [{"id":"air","name":{"es":"Aire","en":"Air"},"powers":[{"id":"air.bolt","name":{"es":"Rayo Eléctrico","en":"Lightning Arc"},"desc":{"es":"Toque a distancia 1d6+½nv eléctrico. 3+SAB usos/día.","en":"Ranged touch 1d6+½lv electric. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"air.resist","name":{"es":"Resistencia a Electricidad","en":"Electricity Resistance"},"desc":{"es":"Nv6: resistencia elec 10. Nv12: 20. Nv20: inmune.","en":"Lv6: elec resist 10. Lv12: 20. Lv20: immune."},"min_level":6,"uses":null}],"spells":["Niebla oscurecedora","Muro de viento","Forma gaseosa","Caminar por el aire","Control de vientos","Rayo en cadena","Forma elemental IV (aire)","Torbellino","Invocar elemental"]},{"id":"animal","name":{"es":"Animal","en":"Animal"},"powers":[{"id":"animal.companion","name":{"es":"Compañero Animal Mejorado","en":"Animal Companion"},"desc":{"es":"Compañero animal como un Explorador de nivel clérigo–3.","en":"Animal companion as a Ranger of cleric level–3."},"min_level":1,"uses":null},{"id":"animal.speech","name":{"es":"Hablar con Animales","en":"Speak with Animals"},"desc":{"es":"Hablar con animales a voluntad (nv 6).","en":"Speak with animals at will (lv 6)."},"min_level":6,"uses":null}],"spells":["Calmar animales","Detener animal","Dominar animal","Invocar aliado de la naturaleza IV","Forma de bestia III","Barrera antivida","Formas animales","Invocar aliado de la naturaleza VIII","Cambiar de forma"]},{"id":"artifice","name":{"es":"Artefacto","en":"Artifice"},"powers":[{"id":"art.touch","name":{"es":"Toque del Artesano","en":"Artificer\u0027s Touch"},"desc":{"es":"Toque 1d6+½nv a objetos/constructos (3+SAB/día). Reparar constructo.","en":"Touch 1d6+½lv to objects/constructs (3+WIS/day). Repair construct."},"min_level":1,"uses":"3+wis"},{"id":"art.servant","name":{"es":"Sirviente Fiel","en":"Dancing Weapons"},"desc":{"es":"Nv6: dotar arma de bendición mágica 1 ronda/nv. 1 vez/día.","en":"Lv6: grant weapon magic blessing 1 round/lv. 1/day."},"min_level":6,"uses":"1"}],"spells":["Animar cuerda","Moldear madera","Moldear piedra","Creación menor","Fabricar","Creación mayor","Animar objetos","Muro prismático","Esfera prismática"]},{"id":"chaos","name":{"es":"Caos","en":"Chaos"},"powers":[{"id":"chaos.touch","name":{"es":"Toque del Caos","en":"Touch of Chaos"},"desc":{"es":"Toque: la próxima tirada del objetivo usa el peor de 2d20. 3+SAB/día.","en":"Touch: target\u0027s next roll uses worse of 2d20. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"chaos.aura","name":{"es":"Aura del Caos","en":"Aura of Chaos"},"desc":{"es":"Nv8: puedes lanzar Burbuja de caos con DV ≤ tu nv clérigo×2.","en":"Lv8: cast chaos hammer on creatures ≤ cleric lv×2 HD."},"min_level":8,"uses":"1"}],"spells":["Protección contra la ley","Destrozar","Círculo mágico vs ley","Martillo del caos","Disipar ley","Animar objetos","Palabra del caos","Capa del caos","Invocar monstruo IX"]},{"id":"charm","name":{"es":"Encanto","en":"Charm"},"powers":[{"id":"charm.compel","name":{"es":"Mirada Cautivadora","en":"Adoration"},"desc":{"es":"Otorgar +4 Carisma a pruebas de influencia 1 ronda/nv. 3+SAB/día.","en":"Grant +4 Charisma to influence checks 1 round/lv. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"charm.aura","name":{"es":"Aura de Encantamiento","en":"Charming Smile"},"desc":{"es":"Nv8: hechizar personas (nv/día rondas, voluntad niega).","en":"Lv8: charm persons (lv/day rounds, Will negates)."},"min_level":8,"uses":"1"}],"spells":["Hechizar persona","Calmar emociones","Sugestión","Heroísmo","Hechizar monstruo","Expiación","Demencia","Exigir","Dominar monstruo"]},{"id":"community","name":{"es":"Comunidad","en":"Community"},"powers":[{"id":"comm.calm","name":{"es":"Calmar","en":"Calming Touch"},"desc":{"es":"Toque: curar condiciones asustado/perturbado, 3+SAB/día.","en":"Touch: remove frightened/shaken conditions. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"comm.unity","name":{"es":"Unidad","en":"Unity"},"desc":{"es":"Nv8: aliados en 30ft repiten tirada fallida vs encantamiento/compulsión. 1/día.","en":"Lv8: allies within 30ft reroll failed save vs enchantment/compulsion. 1/day."},"min_level":8,"uses":"1"}],"spells":["Bendecir","Escudar a otro","Oración","Imbricar con poder hechizador","Nexo telepático","Festín de los héroes","Refugio","Curar heridas críticas en grupo","Milagro"]},{"id":"darkness","name":{"es":"Oscuridad","en":"Darkness"},"powers":[{"id":"dark.touch","name":{"es":"Toque de Oscuridad","en":"Touch of Darkness"},"desc":{"es":"Toque: objetivo sufre penalización –2 a percepción y tiradas de ataque 1 ronda/2nv. 3+SAB/día.","en":"Touch: –2 perception and attack rolls for 1 round/2lv. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"dark.eyes","name":{"es":"Ojos de la Oscuridad","en":"Eyes of Darkness"},"desc":{"es":"Nv8: visión en oscuridad completa 1 ronda/nv. 1/día.","en":"Lv8: darkvision in total darkness 1 round/lv. 1/day."},"min_level":8,"uses":"1"}],"spells":["Niebla oscurecedora","Ceguera/sordera","Oscuridad profunda","Conjuración de sombra","Invocar monstruo V","Caminar entre sombras","Cegar con conjuro","Evocación de sombra mayor","Sombras"]},{"id":"death","name":{"es":"Muerte","en":"Death"},"powers":[{"id":"death.touch","name":{"es":"Toque de Muerte","en":"Bleeding Touch"},"desc":{"es":"Toque: 1d6 daño por ronda (curar o sanar detiene). 3+SAB/día.","en":"Touch: 1d6 bleeding/round (cure or heal stops). 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"death.aura","name":{"es":"Aura de la Muerte","en":"Death\u0027s Embrace"},"desc":{"es":"Nv8: criaturas no-muertas no te atacan de forma automática; recibes curación de efectos de no-muertos.","en":"Lv8: undead don\u0027t auto-attack you; healed by undead energy effects."},"min_level":8,"uses":null}],"spells":["Causar miedo","Toque de muerte","Animar muertos","Protección contra la muerte","Matar ser vivo","Crear no-muertos","Destrucción","Crear no-muertos superiores","Lamento de la banshee"]},{"id":"destruction","name":{"es":"Destrucción","en":"Destruction"},"powers":[{"id":"destr.strike","name":{"es":"Golpe Destructor","en":"Destructive Smite"},"desc":{"es":"+½nv daño en un ataque. 3+SAB/día.","en":"+½lv damage on one attack. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"destr.aura","name":{"es":"Aura Destructora","en":"Destructive Aura"},"desc":{"es":"Nv8: aura 30ft, +nv daño y crítico amenazado 19-20. Nv rondas. 1/día.","en":"Lv8: 30ft aura, +lv dmg and 19-20 crit threat. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Impacto certero","Destrozar","Ira","Infligir heridas críticas","Grito","Dañar","Desintegrar","Terremoto","Implosión"]},{"id":"earth","name":{"es":"Tierra","en":"Earth"},"powers":[{"id":"earth.dart","name":{"es":"Dardo Ácido","en":"Acid Dart"},"desc":{"es":"Toque a distancia 1d6+½nv ácido. 3+SAB/día.","en":"Ranged touch 1d6+½lv acid. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"earth.resist","name":{"es":"Resistencia a Ácido","en":"Acid Resistance"},"desc":{"es":"Nv6: resistencia a ácido 10. Nv12: 20. Nv20: inmune.","en":"Lv6: acid resist 10. Lv12: 20. Lv20: immune."},"min_level":6,"uses":null}],"spells":["Piedra mágica","Ablandar tierra y piedra","Moldear piedra","Estacas de piedra","Muro de piedra","Piel pétrea","Forma elemental IV (tierra)","Terremoto","Invocar elemental"]},{"id":"evil","name":{"es":"Maldad","en":"Evil"},"powers":[{"id":"evil.touch","name":{"es":"Toque Maligno","en":"Touch of Evil"},"desc":{"es":"Toque: objetivo enfermado 1 ronda/2nv. 3+SAB/día.","en":"Touch: sickened 1 round/2lv. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"evil.aura","name":{"es":"Aura de la Desesperación","en":"Scythe of Evil"},"desc":{"es":"Nv8: tocar arma; añadir alineamiento Mal. Nv rondas. 1/día.","en":"Lv8: touch weapon; add Evil alignment. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Protección contra el bien","Alinear arma","Círculo mágico vs bien","Azote malvado","Disipar el bien","Crear no-muertos","Blasfemia","Aura impía","Invocar monstruo IX"]},{"id":"fire","name":{"es":"Fuego","en":"Fire"},"powers":[{"id":"fire.bolt","name":{"es":"Rayo de Fuego","en":"Fire Bolt"},"desc":{"es":"Toque a distancia 1d6+½nv de fuego. 3+SAB/día.","en":"Ranged touch 1d6+½lv fire. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"fire.resist","name":{"es":"Resistencia al Fuego","en":"Fire Resistance"},"desc":{"es":"Nv6: resistencia al fuego 10. Nv12: 20. Nv20: inmune.","en":"Lv6: fire resist 10. Lv12: 20. Lv20: immune."},"min_level":6,"uses":null}],"spells":["Manos ardientes","Producir llamas","Bola de fuego","Muro de fuego","Escudo de fuego","Semillas de fuego","Forma elemental IV (fuego)","Nube incendiaria","Invocar elemental"]},{"id":"glory","name":{"es":"Gloria","en":"Glory"},"powers":[{"id":"glory.touch","name":{"es":"Toque de Gloria","en":"Touch of Glory"},"desc":{"es":"Toque: +nv a una prueba de Car. 3+SAB/día.","en":"Touch: +lv to a Cha check. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"glory.aura","name":{"es":"Aura de Gloria","en":"Divine Presence"},"desc":{"es":"Nv8: aura 30ft, aliados +nv a moral. Nv rondas, 1/día.","en":"Lv8: 30ft aura, allies +lv morale. Lv rounds, 1/day."},"min_level":8,"uses":"1"}],"spells":["Escudo de la fe","Bendecir arma","Luz solar hiriente","Castigo sagrado","Tamaño justo","Repeler muertos vivientes","Espada sagrada","Aura sagrada","Portal"]},{"id":"good","name":{"es":"Bien","en":"Good"},"powers":[{"id":"good.touch","name":{"es":"Toque del Bien","en":"Touch of Good"},"desc":{"es":"Toque: +½nv a una tirada. 3+SAB/día.","en":"Touch: +½lv to a roll. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"good.aura","name":{"es":"Aura de la Justicia","en":"Holy Lance"},"desc":{"es":"Nv8: tocar arma; añadir alineamiento Bien. Nv rondas. 1/día.","en":"Lv8: touch weapon; add Good alignment. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Protección contra el mal","Alinear arma","Círculo mágico vs mal","Castigo sagrado","Disipar el mal","Barrera de cuchillas","Palabra sagrada","Aura sagrada","Invocar monstruo IX"]},{"id":"healing","name":{"es":"Curación","en":"Healing"},"powers":[{"id":"heal.touch","name":{"es":"Toque Sanador","en":"Healer\u0027s Blessing"},"desc":{"es":"Conjuros de curación maximizados (como si con Curar Maximizado). Pasivo nv1.","en":"Healing spells maximized (as if with Maximize Spell). Passive lv1."},"min_level":1,"uses":null},{"id":"heal.channel","name":{"es":"Canalizar Energía Positiva Mejorado","en":"Enhanced Channel"},"desc":{"es":"Nv6: canalizar energía positiva cura +nv PG.","en":"Lv6: positive energy channel heals +lv hp."},"min_level":6,"uses":null}],"spells":["Curar heridas leves","Curar heridas moderadas","Curar heridas graves","Curar heridas críticas","Aliento de vida","Curar","Regenerar","Curar heridas críticas en grupo","Curación masiva"]},{"id":"knowledge","name":{"es":"Conocimiento","en":"Knowledge"},"powers":[{"id":"know.lore","name":{"es":"Rumor del Saber","en":"Lore Keeper"},"desc":{"es":"Toque: prueba de Conocimiento sobre el objetivo usando nv clérigo+SAB. 3+SAB/día.","en":"Touch: Knowledge check vs target using cleric lv+WIS. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"know.remote","name":{"es":"Visión Remota","en":"Remote Viewing"},"desc":{"es":"Nv6: clairvoyance como conjuro de clérigo. 1 ronda/nv. 1/día.","en":"Lv6: clairaudience/clairvoyance as cleric spell. 1 round/lv. 1/day."},"min_level":6,"uses":"1"}],"spells":["Detectar puertas secretas","Zona de verdad","Clarividencia/clariaudiencia","Adivinación","Visión verdadera","Hallar el camino","Leyenda viviente","Localizar objeto a distancia","Presciencia"]},{"id":"law","name":{"es":"Ley","en":"Law"},"powers":[{"id":"law.touch","name":{"es":"Toque de la Ley","en":"Touch of Law"},"desc":{"es":"Toque: la próxima tirada del objetivo usa exactamente 11 (trata 11 como resultado de d20). 3+SAB/día.","en":"Touch: target\u0027s next d20 roll treats 11 as the result. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"law.lance","name":{"es":"Lanza de la Ley","en":"Staff of Order"},"desc":{"es":"Nv8: tocar arma; añadir alineamiento Ley. Nv rondas. 1/día.","en":"Lv8: touch weapon; add Lawful alignment. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Protección contra el caos","Calmar emociones","Círculo mágico vs caos","Ira del orden","Disipar el caos","Inmovilizar monstruo","Dictum","Escudo de la ley","Invocar monstruo IX"]},{"id":"liberation","name":{"es":"Liberación","en":"Liberation"},"powers":[{"id":"lib.touch","name":{"es":"Toque Liberador","en":"Liberation"},"desc":{"es":"Actuar como si hubieras lanzado libertad de movimiento, 1 ronda/nv al día.","en":"Act as if freedom of movement cast, 1 round/lv per day."},"min_level":1,"uses":"clvl"},{"id":"lib.aura","name":{"es":"Libertad","en":"Freedom\u0027s Call"},"desc":{"es":"Nv8: aura 30ft, aliados pueden ignorar grapple/restrain 1 ronda. Nv rondas, 1/día.","en":"Lv8: 30ft aura, allies can ignore grapple/restrain 1 round. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Disipar el miedo","Disipar la parálisis","Disipar la maldición","Libertad de movimiento","Romper encantamiento","Disipar magia mayor","Refugio","Bloquear la mente","Libertad"]},{"id":"luck","name":{"es":"Suerte","en":"Luck"},"powers":[{"id":"luck.reroll","name":{"es":"Suerte del Bribón","en":"Bit of Luck"},"desc":{"es":"Toque: repetir cualquier tirada d20 en el siguiente turno (toma mejor). 3+SAB/día.","en":"Touch: reroll any d20 in the next turn (take better). 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"luck.aura","name":{"es":"Aura de Suerte","en":"Good Fortune"},"desc":{"es":"Nv6: una vez por turno puedes repetir una tirada. Nv veces/día.","en":"Lv6: once per round reroll a roll. Lv times/day."},"min_level":6,"uses":"clvl"}],"spells":["Escudo de entropía","Ayuda","Protección frente a energía","Libertad de movimiento","Romper encantamiento","Engaño","Desviar conjuros","Momento de presciencia","Milagro"]},{"id":"plant","name":{"es":"Plantas","en":"Plant"},"powers":[{"id":"plant.bramble","name":{"es":"Armadura de Zarzas","en":"Bramble Armor"},"desc":{"es":"Zarzas en armadura: atacantes CaC sufren 1d6+½nv perforante. 3+SAB/día (rondas).","en":"Bramble armor: melee attackers take 1d6+½lv piercing. 3+WIS/day (rounds)."},"min_level":1,"uses":"3+wis"},{"id":"plant.wooden","name":{"es":"Semilla de Madera","en":"Wooden Fist"},"desc":{"es":"Nv6: puños como arma natural 1d6, ignorando RD/talado. 3+SAB/día (rondas).","en":"Lv6: fists as natural weapon 1d6, ignoring DR/slashing. 3+WIS/day (rounds)."},"min_level":6,"uses":"3+wis"}],"spells":["Enredar","Corteza de árbol","Crecimiento vegetal","Ordenar a las plantas","Muro de espinos","Repeler madera","Animar plantas","Controlar plantas","Engendro vegetal"]},{"id":"protection","name":{"es":"Protección","en":"Protection"},"powers":[{"id":"prot.touch","name":{"es":"Toque de Resistencia","en":"Resistance Bonus"},"desc":{"es":"Toque: +1 resistencia a tiradas de salvación por 1 minuto. 3+SAB/día.","en":"Touch: +1 resistance bonus to saving throws for 1 minute. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"prot.aura","name":{"es":"Aura de Protección","en":"Aura of Protection"},"desc":{"es":"Nv8: aura 30ft +nv deflexión a CA aliados. Nv rondas, 1/día.","en":"Lv8: 30ft aura +lv deflection to AC allies. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Santuario","Escudar a otro","Protección frente a energía","Inmunidad a conjuros","Resistencia a conjuros","Campo antimagia","Repulsión","Bloquear la mente","Esfera prismática"]},{"id":"strength","name":{"es":"Fuerza","en":"Strength"},"powers":[{"id":"str.surge","name":{"es":"Impulso de Fuerza","en":"Strength Surge"},"desc":{"es":"Toque: +nv a FUE o CMB por 1 ronda. 3+SAB/día.","en":"Touch: +lv to STR or CMB for 1 round. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"str.might","name":{"es":"Fuerza Hercúlea","en":"Might of the Gods"},"desc":{"es":"Nv8: +nv a FUE. Nv rondas, 1/día.","en":"Lv8: +lv to STR. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Agrandar persona","Fuerza de toro","Ira","Inmunidad a conjuros","Tamaño justo","Piel pétrea","Mano que sujeta","Puño cerrado","Mano aplastante"]},{"id":"sun","name":{"es":"Sol","en":"Sun"},"powers":[{"id":"sun.bolt","name":{"es":"Rayo de Sol","en":"Sun\u0027s Blessing"},"desc":{"es":"Canalizar energía positiva +nv al daño contra no-muertos. Además 3+SAB/día de toque a distancia 1d6+½nv fuego.","en":"Channel positive energy +lv damage vs undead. Also 3+WIS/day ranged touch 1d6+½lv fire."},"min_level":1,"uses":"3+wis"},{"id":"sun.nimbus","name":{"es":"Nimbo de Luz","en":"Nimbus of Light"},"desc":{"es":"Nv8: aura 30ft de luz solar, no-muertos sufren 1d6/nv. Nv rondas, 1/día.","en":"Lv8: 30ft sunlight aura, undead take 1d6/lv. Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Resistir elementos","Calentar metal","Luz solar hiriente","Escudo de fuego","Columna de llamas","Semillas de fuego","Rayo de sol","Explosión de sol","Esfera prismática"]},{"id":"travel","name":{"es":"Viaje","en":"Travel"},"powers":[{"id":"trav.speed","name":{"es":"Pies Ágiles","en":"Agile Feet"},"desc":{"es":"Ignorar terreno difícil por 1 ronda. 3+SAB/día.","en":"Ignore difficult terrain for 1 round. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"trav.dimension","name":{"es":"Paso Dimensional","en":"Dimensional Hop"},"desc":{"es":"Nv8: teletransportarse hasta 10ft/nv al día (en pies, divididos).","en":"Lv8: teleport up to 10ft/lv per day (in feet, split up)."},"min_level":8,"uses":"clvl"}],"spells":["Paso largo","Localizar objeto","Volar","Puerta dimensional","Teletransporte","Hallar el camino","Teletransporte mayor","Puerta de fase","Proyección astral"]},{"id":"trickery","name":{"es":"Engaño","en":"Trickery"},"powers":[{"id":"trick.copy","name":{"es":"Copia Ilusoria","en":"Copycat"},"desc":{"es":"Crear copia ilusoria de ti mismo (como Imagen especular) por 1 ronda/nv. 3+SAB/día.","en":"Create illusory copy (as Mirror Image) for 1 round/lv. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"trick.master","name":{"es":"Amo del Engaño","en":"Master\u0027s Illusion"},"desc":{"es":"Nv8: ilusión de campo 30ft (como Imagen programable mayor). Nv rondas. 1/día.","en":"Lv8: 30ft field illusion (as Programmed Image). Lv rounds. 1/day."},"min_level":8,"uses":"1"}],"spells":["Disfrazarse","Invisibilidad","No detección","Confusión","Visión falsa","Engaño","Pantalla","Invisibilidad en grupo","Parar el tiempo"]},{"id":"war","name":{"es":"Guerra","en":"War"},"powers":[{"id":"war.feat","name":{"es":"Dote de Combate Bélico","en":"Battle Rage"},"desc":{"es":"Competencia con el arma favorita de tu deidad. Toque: +nv daño durante 1 ronda. 3+SAB/día.","en":"Proficiency in deity\u0027s favored weapon. Touch: +lv damage for 1 round. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"war.weapon","name":{"es":"Arma del Guerrero","en":"Weapon Master"},"desc":{"es":"Nv8: arma favorita de deidad como si fuera +1 por 1 ronda/nv. 1/día.","en":"Lv8: deity\u0027s favored weapon +1 for 1 round/lv. 1/day."},"min_level":8,"uses":"1"}],"spells":["Arma mágica","Arma espiritual","Vestimento mágico","Poder divino","Columna de llamas","Barrera de cuchillas","Cegar con conjuro","Aturdir con conjuro","Matar con conjuro"]},{"id":"water","name":{"es":"Agua","en":"Water"},"powers":[{"id":"water.dart","name":{"es":"Dardo de Hielo","en":"Icicle"},"desc":{"es":"Toque a distancia 1d6+½nv de frío. 3+SAB/día.","en":"Ranged touch 1d6+½lv cold. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"water.resist","name":{"es":"Resistencia al Frío","en":"Cold Resistance"},"desc":{"es":"Nv6: resistencia al frío 10. Nv12: 20. Nv20: inmune.","en":"Lv6: cold resist 10. Lv12: 20. Lv20: immune."},"min_level":6,"uses":null}],"spells":["Niebla oscurecedora","Nube de niebla","Respirar bajo el agua","Controlar el agua","Tormenta de granizo","Cono de frío","Forma elemental IV (agua)","Marchitar horriblemente","Invocar elemental"]},{"id":"weather","name":{"es":"Clima","en":"Weather"},"powers":[{"id":"weath.bolt","name":{"es":"Descarga de Tormenta","en":"Storm Burst"},"desc":{"es":"Toque a distancia: 1d6+½nv no letal y –2 a tiradas de ataque 1 ronda. 3+SAB/día.","en":"Ranged touch: 1d6+½lv nonlethal and –2 attack rolls 1 round. 3+WIS/day."},"min_level":1,"uses":"3+wis"},{"id":"weath.eye","name":{"es":"Ojo de la Tormenta","en":"Lightning Lord"},"desc":{"es":"Nv8: lanzar rayo 1 vez/nv al día (como efecto de Llamada del rayo).","en":"Lv8: call lightning 1/lv per day (as Call Lightning effect)."},"min_level":8,"uses":"clvl"}],"spells":["Niebla oscurecedora","Nube de niebla","Llamada del rayo","Tormenta de granizo","Tormenta de hielo","Controlar vientos","Controlar el clima","Torbellino","Tormenta de venganza"]}];

const FALLBACK_RACES = [ { "id": "human", "name": { "es": "Humano", "en": "Human" }, "speed": 30, "size": "Medium", "abilityMods": {}, "anyBonus": 2, "traits": [ { "id": "human_bonus_feat", "name": { "es": "Dote extra", "en": "Bonus Feat" }, "description": { "es": "Los humanos obtienen una dote extra al nivel 1.", "en": "Humans gain one extra feat at 1st level." } }, { "id": "human_skilled", "name": { "es": "Talentoso", "en": "Skilled" }, "description": { "es": "+1 rango de habilidad adicional por nivel.", "en": "+1 additional skill rank per level." } } ] }, { "id": "elf", "name": { "es": "Elfo", "en": "Elf" }, "speed": 30, "size": "Medium", "abilityMods": {"dex": 2, "int": 2, "con": -2}, "traits": [ { "id": "elf_elven_magic", "name": { "es": "Magia Ã‰lfica", "en": "Elven Magic" }, "description": { "es": "+2 a Conocimiento mÃ¡gico para identificar objetos o conjuros. +2 a la CD de conjuros.", "en": "+2 to Spellcraft to identify magic items or spells. +2 to spell DCs." } }, { "id": "elf_keen_senses", "name": { "es": "Sentidos Agudos", "en": "Keen Senses" }, "description": { "es": "+2 a PercepciÃ³n.", "en": "+2 to Perception." } }, { "id": "elf_low_light", "name": { "es": "VisiÃ³n en Luz Tenue", "en": "Low-Light Vision" }, "description": { "es": "Ve el doble de lejos que los humanos con luz escasa.", "en": "See twice as far as humans in dim light." } }, { "id": "elf_weapon_fam", "name": { "es": "Familiaridad con Armas", "en": "Weapon Familiarity" }, "description": { "es": "Competente con arco largo, arco largo de mano, espada larga y espada de mano. Las armas Ã©lficas se tratan como marciales.", "en": "Proficient with longbow, shortbow, longsword, and rapier. Elven weapons are martial weapons." } }, { "id": "elf_immunity", "name": { "es": "Inmunidad Ã‰lfica", "en": "Elven Immunities" }, "description": { "es": "Inmune al sueÃ±o mÃ¡gico. +2 a tiradas vs encantamientos.", "en": "Immune to magic sleep. +2 vs enchantment spells and effects." } } ] }, { "id": "dwarf", "name": { "es": "Enano", "en": "Dwarf" }, "speed": 20, "size": "Medium", "abilityMods": {"con": 2, "wis": 2, "cha": -2}, "traits": [ { "id": "dwarf_hardy", "name": { "es": "Resistente", "en": "Hardy" }, "description": { "es": "+2 a tiradas de salvaciÃ³n vs veneno, conjuros y efectos mÃ¡gicos.", "en": "+2 to saves vs poison, spells, and spell-like effects." } }, { "id": "dwarf_stability", "name": { "es": "Estabilidad", "en": "Stability" }, "description": { "es": "+4 a CMD vs derribo y empuje.", "en": "+4 CMD vs bull rush and trip while on the ground." } }, { "id": "dwarf_greed", "name": { "es": "Codicia", "en": "Greed" }, "description": { "es": "+2 a Valorar objetos de metal o piedra.", "en": "+2 to Appraise related to metal or stone items." } }, { "id": "dwarf_stonecunning", "name": { "es": "Astucia en Piedra", "en": "Stonecunning" }, "description": { "es": "+2 a PercepciÃ³n vs trampas de piedra; cÃ¡lculo automÃ¡tico a 10 ft.", "en": "+2 to Perception vs stone traps; automatic check within 10 ft." } }, { "id": "dwarf_darkvision", "name": { "es": "VisiÃ³n en la Oscuridad", "en": "Darkvision" }, "description": { "es": "60 ft de visiÃ³n en oscuridad total.", "en": "60 ft darkvision." } }, { "id": "dwarf_hatred", "name": { "es": "Odio", "en": "Hatred" }, "description": { "es": "+1 a ataques vs orcos y goblinoides.", "en": "+1 on attacks vs orcs and goblinoids." } }, { "id": "dwarf_weapon_fam", "name": { "es": "Familiaridad con Armas", "en": "Weapon Familiarity" }, "description": { "es": "Competente con hacha de guerra enana y martillo enano. Las armas enanas son marciales.", "en": "Proficient with dwarven waraxe and dwarven urgrosh. Dwarven weapons are martial." } } ] }, { "id": "halfling", "name": { "es": "Mediano", "en": "Halfling" }, "speed": 20, "size": "Small", "abilityMods": {"dex": 2, "cha": 2, "str": -2}, "traits": [ { "id": "half_fearless", "name": { "es": "Sin Miedo", "en": "Fearless" }, "description": { "es": "+2 a tiradas de salvaciÃ³n vs miedo.", "en": "+2 to saves vs fear." } }, { "id": "half_halfling_luck", "name": { "es": "Suerte Mediana", "en": "Halfling Luck" }, "description": { "es": "+1 a todas las tiradas de salvaciÃ³n.", "en": "+1 to all saving throws." } }, { "id": "half_keen_senses", "name": { "es": "Sentidos Agudos", "en": "Keen Senses" }, "description": { "es": "+2 a PercepciÃ³n.", "en": "+2 to Perception." } }, { "id": "half_sure_footed", "name": { "es": "Pie Firme", "en": "Sure-Footed" }, "description": { "es": "+2 a Acrobacias y Sigilo.", "en": "+2 to Acrobatics and Stealth." } }, { "id": "half_weapon_fam", "name": { "es": "Familiaridad con Armas", "en": "Weapon Familiarity" }, "description": { "es": "Las armas medianas son marciales.", "en": "Halfling weapons are martial weapons." } } ] }, { "id": "gnome", "name": { "es": "Gnomo", "en": "Gnome" }, "speed": 20, "size": "Small", "abilityMods": {"con": 2, "cha": 2, "str": -2}, "traits": [ { "id": "gnome_defensive", "name": { "es": "Entrenamiento Defensivo","en": "Defensive Training" }, "description": { "es": "+4 a CA vs gigantes.", "en": "+4 dodge bonus to AC vs giants." } }, { "id": "gnome_hatred", "name": { "es": "Odio", "en": "Hatred" }, "description": { "es": "+1 a ataques vs humanoides reptiloides y goblinoides.", "en": "+1 on attacks vs reptilian humanoids and goblinoids." } }, { "id": "gnome_illusion", "name": { "es": "Magia de IlusiÃ³n", "en": "Illusion Resistance" }, "description": { "es": "+2 a TS vs ilusiones. CD de conjuros de ilusiÃ³n +1.", "en": "+2 to saves vs illusions. +1 DC for illusion spells." } }, { "id": "gnome_keen_senses", "name": { "es": "Sentidos Agudos", "en": "Keen Senses" }, "description": { "es": "+2 a PercepciÃ³n.", "en": "+2 to Perception." } }, { "id": "gnome_low_light", "name": { "es": "VisiÃ³n en Luz Tenue", "en": "Low-Light Vision" }, "description": { "es": "Ve el doble que los humanos con luz escasa.", "en": "See twice as far as humans in dim light." } }, { "id": "gnome_weapon_fam", "name": { "es": "Familiaridad con Armas", "en": "Weapon Familiarity" }, "description": { "es": "Las armas gnomas son marciales.", "en": "Gnome weapons are martial weapons." } } ] }, { "id": "half_elf", "name": { "es": "Semielfo", "en": "Half-Elf" }, "speed": 30, "size": "Medium", "abilityMods": {}, "anyBonus": 2, "traits": [ { "id": "half_elf_adaptability","name": { "es": "Adaptabilidad", "en": "Adaptability" }, "description": { "es": "Dote de competencia extra (Perspicacia, Habilidad o Pericia).", "en": "Bonus feat (Skill Focus, Skill Training, or similar)." } }, { "id": "half_elf_elven_blood","name": { "es": "Sangre Ã‰lfica", "en": "Elven Blood" }, "description": { "es": "Cuenta como elfo y humano para efectos raciales.", "en": "Counts as both elf and human for racial effects." } }, { "id": "half_elf_keen", "name": { "es": "Sentidos Agudos", "en": "Keen Senses" }, "description": { "es": "+2 a PercepciÃ³n.", "en": "+2 to Perception." } }, { "id": "half_elf_low_light", "name": { "es": "VisiÃ³n en Luz Tenue", "en": "Low-Light Vision" }, "description": { "es": "Ve el doble que los humanos con luz escasa.", "en": "See twice as far as humans in dim light." } }, { "id": "half_elf_multitalented","name":{ "es": "MultifacÃ©tico", "en": "Multitalented" }, "description": { "es": "Dos clases favoritas en lugar de una.", "en": "Two favored classes instead of one." } } ] }, { "id": "half_orc", "name": { "es": "Semiorco", "en": "Half-Orc" }, "speed": 30, "size": "Medium", "abilityMods": {}, "anyBonus": 2, "traits": [ { "id": "half_orc_ferocity", "name": { "es": "Ferocidad", "en": "Ferocity" }, "description": { "es": "1/dÃ­a cuando se reduce a 0 o menos PG puede actuar como si tuviera 1 PG durante 1 ronda.", "en": "1/day when reduced to 0 HP, may act as if at 1 HP for 1 round." } }, { "id": "half_orc_darkvision","name": { "es": "VisiÃ³n en la Oscuridad", "en": "Darkvision" }, "description": { "es": "60 ft de visiÃ³n en oscuridad total.", "en": "60 ft darkvision." } }, { "id": "half_orc_orc_blood", "name": { "es": "Sangre Orca", "en": "Orc Blood" }, "description": { "es": "Cuenta como orco y humano para efectos raciales.", "en": "Counts as both orc and human for racial effects." } }, { "id": "half_orc_weapon_fam","name": { "es": "Familiaridad con Armas", "en": "Weapon Familiarity" }, "description": { "es": "Competente con cimitarra y cuchillo de uro. Las armas orcas son marciales.", "en": "Proficient with greataxe and falchion. Orc weapons are martial." } }, { "id": "half_orc_intimidate","name": { "es": "IntimidaciÃ³n", "en": "Intimidating" }, "description": { "es": "+2 a Intimidar.", "en": "+2 to Intimidate." } } ] }, { "id": "aasimar", "name": { "es": "Aasimar", "en": "Aasimar" }, "speed": 30, "size": "Medium", "abilityMods": {"wis": 2, "cha": 2}, "traits": [ { "id": "aas_celestial_resist","name":{ "es": "Resistencia Celestial", "en": "Celestial Resistance" }, "description": { "es": "Resistencia al Ã¡cido 5, al frÃ­o 5 y a la electricidad 5.", "en": "Acid resist 5, cold resist 5, electricity resist 5." } }, { "id": "aas_skilled", "name": { "es": "Habilidoso", "en": "Skilled" }, "description": { "es": "+2 a Diplomacia y PercepciÃ³n.", "en": "+2 to Diplomacy and Perception." } }, { "id": "aas_spell_like", "name": { "es": "Habilidad de Conjuro", "en": "Spell-Like Ability" }, "description": { "es": "1/dÃ­a: Luz diurna (NL = nivel del personaje).", "en": "1/day: Daylight (CL = character level)." } }, { "id": "aas_darkvision", "name": { "es": "VisiÃ³n en la Oscuridad", "en": "Darkvision" }, "description": { "es": "60 ft de visiÃ³n en oscuridad total.", "en": "60 ft darkvision." } } ] }, { "id": "tiefling", "name": { "es": "Tiefling", "en": "Tiefling" }, "speed": 30, "size": "Medium", "abilityMods": {"dex": 2, "int": 2, "cha": -2}, "traits": [ { "id": "tief_fiendish_resist","name":{ "es": "Resistencia Infernal", "en": "Fiendish Resistance" }, "description": { "es": "Resistencia al frÃ­o 5, al fuego 5 y a la electricidad 5.", "en": "Cold resist 5, electricity resist 5, fire resist 5." } }, { "id": "tief_skilled", "name": { "es": "Habilidoso", "en": "Skilled" }, "description": { "es": "+2 a EngaÃ±ar y Sigilo.", "en": "+2 to Bluff and Stealth." } }, { "id": "tief_spell_like", "name": { "es": "Habilidad de Conjuro", "en": "Spell-Like Ability" }, "description": { "es": "1/dÃ­a: Oscuridad (NL = nivel del personaje).", "en": "1/day: Darkness (CL = character level)." } }, { "id": "tief_darkvision", "name": { "es": "VisiÃ³n en la Oscuridad", "en": "Darkvision" }, "description": { "es": "60 ft de visiÃ³n en oscuridad total.", "en": "60 ft darkvision." } } ] }, { "id": "catfolk", "name": { "es": "Gatuno", "en": "Catfolk" }, "speed": 30, "size": "Medium", "abilityMods": {"dex": 2, "cha": 2, "wis": -2}, "traits": [ { "id": "cat_sprinter", "name": { "es": "Velocista", "en": "Sprinter" }, "description": { "es": "+10 ft de velocidad al cargar, correr o retirada.", "en": "+10 ft speed when charging, running, or withdrawing." } }, { "id": "cat_nat_hunter", "name": { "es": "Cazador Natural", "en": "Natural Hunter" }, "description": { "es": "+2 a PercepciÃ³n, Sigilo y Supervivencia.", "en": "+2 to Perception, Stealth, and Survival." } }, { "id": "cat_low_light", "name": { "es": "VisiÃ³n en Luz Tenue", "en": "Low-Light Vision" }, "description": { "es": "Ve el doble que los humanos con luz escasa.", "en": "See twice as far as humans in dim light." } } ] }, { "id": "tengu", "name": { "es": "Tengu", "en": "Tengu" }, "speed": 30, "size": "Medium", "abilityMods": {"dex": 2, "wis": 2, "con": -2}, "traits": [ { "id": "tengu_senses", "name": { "es": "Sentidos Agudos", "en": "Senses" }, "description": { "es": "+2 a PercepciÃ³n.", "en": "+2 to Perception." } }, { "id": "tengu_sword_trained","name": { "es": "Entrenado en Espadas", "en": "Sword-Trained" }, "description": { "es": "Competente con todas las espadas.", "en": "Proficient with all swords." } }, { "id": "tengu_gifted_ling", "name": { "es": "PolÃ­glota", "en": "Gifted Linguist" }, "description": { "es": "+4 a LinguÃ­stica, aprende 2 idiomas por punto de INT en lugar de 1.", "en": "+4 to Linguistics, learn 2 languages per INT mod instead of 1." } }, { "id": "tengu_low_light", "name": { "es": "VisiÃ³n en Luz Tenue", "en": "Low-Light Vision" }, "description": { "es": "Ve el doble que los humanos con luz escasa.", "en": "See twice as far as humans in dim light." } } ] }, { "id": "kitsune", "name": { "es": "Kitsune", "en": "Kitsune" }, "speed": 30, "size": "Medium", "abilityMods": {"dex": 2, "cha": 2, "str": -2}, "traits": [ { "id": "kit_agile", "name": { "es": "Ãgil", "en": "Agile" }, "description": { "es": "+2 a Acrobacias.", "en": "+2 to Acrobatics." } }, { "id": "kit_kitsune_magic", "name": { "es": "Magia Kitsune", "en": "Kitsune Magic" }, "description": { "es": "+1 a CD de ilusiones y encantamientos. 1/dÃ­a: Dazzle.", "en": "+1 to DC of illusion and enchantment spells. 1/day: Dazzle." } }, { "id": "kit_change_shape", "name": { "es": "Cambiar de Forma", "en": "Change Shape" }, "description": { "es": "Puede asumir la apariencia de un humano concreto (como el conjuro Alterar yo).", "en": "Can assume a specific human appearance (as Alter Self)." } }, { "id": "kit_low_light", "name": { "es": "VisiÃ³n en Luz Tenue", "en": "Low-Light Vision" }, "description": { "es": "Ve el doble que los humanos con luz escasa.", "en": "See twice as far as humans in dim light." } } ] } ] ;

/* ─── EXTRA FALLBACKS (auto-generados desde *.json) ─── */
/* Permite que index.html funcione bajo file:// (Brave/file://) cuando fetch() falla por CORS. */

const FALLBACK_ARCHETYPES = {
  "_schema": "Cada arquetipo actúa como diff sobre su clase base. Solo incluye campos que CAMBIAN respecto a classes.json. Campos ausentes = usar valor de la clase base. class_skills_add/remove para cambios parciales, class_skills para reemplazo completo.",
  "invulnerable_rager": {
    "class": "barbarian",
    "name": "Invulnerable Rager",
    "name_en": "Invulnerable Rager",
    "name_es": "Rabioso Invulnerable",
    "source": "Advanced Player's Guide",
    "description_es": "Sustituye esquiva sobrenatural y RD por Resistencia Invulnerable (RD/— igual a la mitad del nivel) y resistencia a un entorno natural. Énfasis en absorber daño directo.",
    "description_en": "Replaces uncanny dodge and DR with Invulnerable Resistance (DR/— equal to half the barbarian's level) and resistance to a natural environment. Emphasis on absorbing direct damage.",
    "features_removed": [
      "Uncanny Dodge",
      "Improved Uncanny Dodge",
      "Damage Reduction",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Invulnerability",
        "name_en": "Invulnerability",
        "description_es": "RD/— igual a la mitad del nivel del bárbaro. Mitad de esta RD aplica contra ataques mágicos.",
        "description_en": "DR/— equal to half the barbarian's level. Half this DR applies against magical attacks.",
        "level": 2
      },
      {
        "name": "Extreme Endurance",
        "name_en": "Extreme Endurance",
        "description_es": "Resistencia a un tipo de entorno: calor, frío, electricidad o fuego. Escala con el nivel.",
        "description_en": "Resistance to one environment type: heat, cold, electricity, or fire. Scales with level.",
        "level": 3
      }
    ]
  },
  "titan_mauler": {
    "class": "barbarian",
    "name": "Titan Mauler",
    "name_en": "Titan Mauler",
    "name_es": "Machacador Titán",
    "source": "Ultimate Combat",
    "description_es": "Puede blandir armas diseñadas para criaturas de una categoría mayor con penalizador reducido. Sus poderes de furia incluyen capacidades para armas gigantescas.",
    "description_en": "Can wield weapons designed for creatures one size category larger with reduced penalty. Its rage powers include capabilities for giant-sized weapons.",
    "features_removed": [
      "Rage Powers (2nd, 6th, 10th, 14th, 18th)"
    ],
    "features_gained": [
      {
        "name": "Big Game Hunter",
        "name_en": "Big Game Hunter",
        "description_es": "+1 a daño cuerpo a cuerpo contra criaturas de mayor tamaño.",
        "description_en": "+1 to melee damage against creatures of larger size.",
        "level": 1
      },
      {
        "name": "Massive Weapons",
        "name_en": "Massive Weapons",
        "description_es": "Penalizador reducido por usar armas de una categoría mayor. A nivel 3 puede usarlas sin penalizador de ataque.",
        "description_en": "Reduced penalty for using weapons one size category larger. At level 3 can use them without attack penalty.",
        "level": 1
      },
      {
        "name": "Titanic Rage",
        "name_en": "Titanic Rage",
        "description_es": "En furia puede aumentar su tamaño una categoría (como Agrandar Persona).",
        "description_en": "While raging can increase size by one category (as Enlarge Person).",
        "level": 2
      }
    ]
  },
  "archaeologist": {
    "class": "bard",
    "name": "Archaeologist",
    "name_en": "Archaeologist",
    "name_es": "Arqueólogo",
    "source": "Ultimate Combat",
    "class_skills_add": [
      "disable_device"
    ],
    "description_es": "Cambia las actuaciones musicales por suerte personal (Archaeologist's Luck, +1 escalable a ataque/daño/salvaciones/habilidades). Más explorador solitario que apoyo de grupo.",
    "description_en": "Trades musical performances for personal luck (Archaeologist's Luck, a scaling +1 to attack/damage/saves/skills). More of a solo explorer than a party supporter.",
    "features_removed": [
      "Bardic Performance",
      "Versatile Performance",
      "Well-Versed"
    ],
    "features_gained": [
      {
        "name": "Archaeologist's Luck (Ex)",
        "name_en": "Archaeologist's Luck (Ex)",
        "description_es": "Rondas por día igual a 4 + mod CARs. Otorga bonificación de suerte +1 (escala a +4 a nivel 19) a tiradas de ataque, daño, salvaciones y habilidades.",
        "description_en": "Rounds per day equal to 4 + CHA mod. Grants a +1 luck bonus (scaling to +4 at level 19) on attack rolls, damage, saves, and skills.",
        "level": 1
      },
      {
        "name": "Trap Sense (Ex)",
        "name_en": "Trap Sense (Ex)",
        "description_es": "Bonificación de +1 por cada 3 niveles a CA y salvaciones contra trampas.",
        "description_en": "+1 bonus per 3 levels to AC and saves against traps.",
        "level": 3
      },
      {
        "name": "Rogue Talent",
        "name_en": "Rogue Talent",
        "description_es": "Gana talentos de pícaro en lugar de actuaciones adicionales.",
        "description_en": "Gains rogue talents in place of additional performances.",
        "level": 4
      },
      {
        "name": "Uncanny Dodge / Evasion",
        "name_en": "Uncanny Dodge / Evasion",
        "description_es": "Obtiene esquiva sobrenatural a nivel 2 y Evasión a nivel 6.",
        "description_en": "Gains uncanny dodge at level 2 and Evasion at level 6.",
        "level": 2
      }
    ]
  },
  "court_bard": {
    "class": "bard",
    "name": "Court Bard",
    "name_en": "Court Bard",
    "name_es": "Bardo Cortesano",
    "source": "Advanced Player's Guide",
    "description_es": "Cambia actuaciones inspiradoras por ridículo social y sátira que imponen penalizadores a enemigos en lugar de bonificar aliados. Maestro de la intriga cortesana.",
    "description_en": "Trades inspiring performances for social mockery and satire that impose penalties on enemies rather than buffing allies. A master of courtly intrigue.",
    "features_removed": [
      "Inspire Courage",
      "Inspire Competence",
      "Dirge of Doom",
      "Frightening Tune",
      "Bardic Knowledge",
      "Lore Master",
      "Jack of All Trades"
    ],
    "features_gained": [
      {
        "name": "Satire (Su)",
        "name_en": "Satire (Su)",
        "description_es": "Penalizador –1 (escala a –4) a tiradas de ataque, salvaciones y verificaciones de habilidad de todos los enemigos que puedan oír.",
        "description_en": "–1 penalty (scaling to –4) to attack rolls, saves, and skill checks for all enemies who can hear.",
        "level": 1
      },
      {
        "name": "Mockery (Su)",
        "name_en": "Mockery (Su)",
        "description_es": "Penalizador de moral –2 al atributo de un objetivo individual.",
        "description_en": "–2 morale penalty to an ability score of a single target.",
        "level": 3
      },
      {
        "name": "Scandal (Su)",
        "name_en": "Scandal (Su)",
        "description_es": "Penalizador a verificaciones de Carisma de un objetivo durante 24 horas.",
        "description_en": "Penalty to the target's Charisma-based checks for 24 hours.",
        "level": 8
      },
      {
        "name": "Heraldic Expertise",
        "name_en": "Heraldic Expertise",
        "description_es": "+2 a verificaciones de Conocimiento (historia, nobleza, local) y Diplomacia.",
        "description_en": "+2 to Knowledge (history, nobility, local) and Diplomacy checks.",
        "level": 2
      }
    ]
  },
  "crusader": {
    "class": "cleric",
    "name": "Crusader",
    "name_en": "Crusader",
    "name_es": "Cruzado",
    "source": "Ultimate Combat",
    "description_es": "Intercambia canalización de energía y parte de la magia por dones de combate adicionales y capacidad de compartir efectos de conjuro con múltiples aliados.",
    "description_en": "Trades channel energy and part of their magic for additional combat feats and the ability to share spell effects with multiple allies.",
    "features_removed": [
      "Channel Energy",
      "Bonus Domain Feats"
    ],
    "features_gained": [
      {
        "name": "Bonus Feats",
        "name_en": "Bonus Feats",
        "description_es": "Gana dones de combate adicionales a niveles 1, 3, 5, 7... en lugar de los dones de dominio estándar.",
        "description_en": "Gains additional combat feats at levels 1, 3, 5, 7... instead of standard domain feats.",
        "level": 1
      },
      {
        "name": "Legion's Blessing (Su)",
        "name_en": "Legion's Blessing (Su)",
        "description_es": "Puede lanzar conjuros de toque beneficiosos sobre múltiples aliados con una acción de asalto completo.",
        "description_en": "Can cast beneficial touch spells on multiple allies as a full-round action.",
        "level": 8
      }
    ],
    "sub_options": {
      "domains": "Debe elegir un dominio de combate (ej. Guerra, Destrucción, Fuerza, Nobleza). / Must select a combat-oriented domain (e.g. War, Destruction, Strength, Nobility)."
    }
  },
  "ecclesitheurge": {
    "class": "cleric",
    "name": "Ecclesitheurge",
    "name_en": "Ecclesitheurge",
    "name_es": "Eclesiteurgo",
    "source": "Advanced Class Guide",
    "description_es": "Renuncia a toda armadura por maestría divina ampliada: dominio secundario intercambiable diariamente y símbolo sagrado vinculado que potencia conjuros.",
    "description_en": "Gives up all armor for expanded divine mastery: a daily-swappable secondary domain and a bonded holy symbol that empowers spells.",
    "features_removed": [
      "Armor Proficiency (light, medium, heavy)",
      "Shield Proficiency"
    ],
    "features_gained": [
      {
        "name": "Powerful Domain (Su)",
        "name_en": "Powerful Domain (Su)",
        "description_es": "Dominio primario otorga un uso adicional de poderes de dominio por día.",
        "description_en": "Primary domain grants an additional use of domain powers per day.",
        "level": 1
      },
      {
        "name": "Bonded Holy Symbol (Su)",
        "name_en": "Bonded Holy Symbol (Su)",
        "description_es": "Su símbolo sagrado actúa como objeto vinculado que puede aumentar el DC de sus conjuros o recuperar un conjuro por día.",
        "description_en": "Their holy symbol acts as a bonded item that can raise their spell DCs or recover one spell per day.",
        "level": 3
      },
      {
        "name": "Wandering Domain",
        "name_en": "Wandering Domain",
        "description_es": "A nivel 4 puede cambiar su dominio secundario diariamente al preparar conjuros.",
        "description_en": "At level 4 can change their secondary domain daily when preparing spells.",
        "level": 4
      }
    ],
    "sub_options": {
      "domains": "Un único dominio; en vez de un segundo dominio obtiene poderes de dominio mejorados a niveles 8 y 16. / One domain; instead of a second domain gains enhanced domain powers at levels 8 and 16."
    },
    "restrictions": {
      "domain_max": 1
    }
  },
  "blight_druid": {
    "class": "druid",
    "name": "Blight Druid",
    "name_en": "Blight Druid",
    "name_es": "Druida de la Plaga",
    "source": "Advanced Player's Guide",
    "class_skills_add": [
      "intimidate"
    ],
    "class_skills_remove": [
      "ride"
    ],
    "description_es": "Druida de la corrupción. Empatía con alimañas (vermin) en lugar de animales, inmunidad a enfermedades y poder para difundir plagas. Acompañante de criatura plaga o corrupta.",
    "description_en": "Druid of corruption. Empathy with vermin instead of animals, disease immunity, and the power to spread plagues. Companion is a blighted or corrupted creature.",
    "features_removed": [
      "Animal Companion",
      "Wild Empathy",
      "Trackless Step",
      "Resist Nature's Lure",
      "Venom Immunity",
      "A Thousand Faces"
    ],
    "features_gained": [
      {
        "name": "Vermin Empathy (Ex)",
        "name_en": "Vermin Empathy (Ex)",
        "description_es": "Funciona como Wild Empathy pero con insectos, arañas y otras alimañas.",
        "description_en": "Functions like Wild Empathy but with insects, spiders, and other vermin.",
        "level": 1
      },
      {
        "name": "Miasma (Su)",
        "name_en": "Miasma (Su)",
        "description_es": "Aura de enfermedad con alcance escalable. Criaturas que fallen contra ella contraen una enfermedad.",
        "description_en": "Disease aura with scaling range. Creatures that fail against it contract a disease.",
        "level": 9
      },
      {
        "name": "Plagued (Ex)",
        "name_en": "Plagued (Ex)",
        "description_es": "Inmunidad a enfermedades. Puede transmitir enfermedades mediante el toque.",
        "description_en": "Immunity to diseases. Can transmit diseases by touch.",
        "level": 4
      }
    ]
  },
  "urban_druid": {
    "class": "druid",
    "name": "Urban Druid",
    "name_en": "Urban Druid",
    "name_es": "Druida Urbano",
    "source": "Advanced Player's Guide",
    "class_skills_add": [
      "disable_device",
      "knowledge_local",
      "stealth"
    ],
    "class_skills_remove": [
      "survival",
      "ride",
      "knowledge_nature"
    ],
    "description_es": "Druida de ciudades y civilización. Terrenos favorecidos urbanos, detección de trampas, lista de conjuros con magia social. Sin forma animal, con forma urbana alternativa.",
    "description_en": "Druid of cities and civilization. Urban favored terrains, trap detection, a spell list with social magic. No wild shape, but an alternative urban form.",
    "features_removed": [
      "Spontaneous Casting (Summon Nature's Ally)",
      "Animal Companion",
      "Woodland Stride",
      "Trackless Step",
      "Resist Nature's Lure",
      "Venom Immunity"
    ],
    "features_gained": [
      {
        "name": "Spontaneous Casting",
        "name_en": "Spontaneous Casting",
        "description_es": "Lanza conjuros de encantamiento espontáneamente en lugar de Llamar a la Naturaleza.",
        "description_en": "Spontaneously casts enchantment spells instead of Summon Nature's Ally.",
        "level": 1
      },
      {
        "name": "Mental Strength (Ex)",
        "name_en": "Mental Strength (Ex)",
        "description_es": "Bonificación de +2 a salvaciones contra encantamientos y efectos de miedo.",
        "description_en": "+2 bonus on saves against enchantments and fear effects.",
        "level": 4
      },
      {
        "name": "Lorekeeper (Ex)",
        "name_en": "Lorekeeper (Ex)",
        "description_es": "Puede usar Conocimiento (local) como habilidad de clase para identificar monstruos humanoides.",
        "description_en": "Can use Knowledge (local) as a class skill to identify humanoid monsters.",
        "level": 1
      }
    ]
  },
  "two_handed_fighter": {
    "class": "fighter",
    "name": "Two-Handed Fighter",
    "name_en": "Two-Handed Fighter",
    "name_es": "Guerrero a Dos Manos",
    "source": "Advanced Player's Guide",
    "description_es": "Especialista en armas a dos manos. Shattering Strike destruye armaduras, Backswing añade doble bonificador de FUE al daño en el 2º ataque. Sin entrenamiento en armadura.",
    "description_en": "Specialist in two-handed weapons. Shattering Strike destroys armor; Backswing adds double STR bonus to damage on the 2nd attack. No armor training.",
    "features_removed": [
      "Bravery",
      "Armor Training (1st–4th)",
      "Armor Mastery"
    ],
    "features_gained": [
      {
        "name": "Shattering Strike (Ex)",
        "name_en": "Shattering Strike (Ex)",
        "description_es": "+1 por cada 4 niveles a tiradas de ataque y daño para destrozar (sunder) objetos.",
        "description_en": "+1 per 4 levels to attack and damage rolls for sundering objects.",
        "level": 2
      },
      {
        "name": "Backswing (Ex)",
        "name_en": "Backswing (Ex)",
        "description_es": "En el 2º ataque de asalto completo añade doble bonificador de FUE al daño.",
        "description_en": "On the 2nd attack of a full-attack, adds double STR bonus to damage.",
        "level": 3
      },
      {
        "name": "Piledriver (Ex)",
        "name_en": "Piledriver (Ex)",
        "description_es": "Puede hacer empuje o derribo como maniobra libre después de un golpe.",
        "description_en": "Can make a bull rush or trip as a free maneuver after a hit.",
        "level": 9
      },
      {
        "name": "Overhand Chop (Ex)",
        "name_en": "Overhand Chop (Ex)",
        "description_es": "Con ataques estándar (no asalto completo) añade doble bonificador de FUE al daño.",
        "description_en": "With standard attacks (not full-attack) adds double STR bonus to damage.",
        "level": 1
      }
    ]
  },
  "two_weapon_warrior": {
    "class": "fighter",
    "name": "Two-Weapon Warrior",
    "name_en": "Two-Weapon Warrior",
    "name_es": "Guerrero de Dos Armas",
    "source": "Advanced Player's Guide",
    "description_es": "Especialista en lucha con dos armas. Ataques con ambas armas como acción estándar, ataques de oportunidad simultáneos y bonificaciones escalables a dos armas.",
    "description_en": "Two-weapon fighting specialist. Strikes with both weapons as a standard action, simultaneous attacks of opportunity, and scaling two-weapon bonuses.",
    "features_removed": [
      "Armor Training 1",
      "Armor Training 2",
      "Weapon Training 1–4",
      "Armor Mastery"
    ],
    "features_gained": [
      {
        "name": "Doublestrike (Ex)",
        "name_en": "Doublestrike (Ex)",
        "description_es": "Como acción estándar puede atacar una vez con cada arma.",
        "description_en": "As a standard action, attack once with each weapon.",
        "level": 9
      },
      {
        "name": "Improved Balance (Ex)",
        "name_en": "Improved Balance (Ex)",
        "description_es": "Reduce penalizador de ataque con arma secundaria en –1 adicional.",
        "description_en": "Reduces off-hand attack penalty by an additional –1.",
        "level": 3
      },
      {
        "name": "Equal Opportunity (Ex)",
        "name_en": "Equal Opportunity (Ex)",
        "description_es": "Cuando hace un ataque de oportunidad, puede atacar con ambas armas.",
        "description_en": "When making an attack of opportunity, can attack with both weapons.",
        "level": 14
      },
      {
        "name": "Deft Doublestrike (Ex)",
        "name_en": "Deft Doublestrike (Ex)",
        "description_es": "Cuando golpea al mismo objetivo con ambas armas en el mismo turno puede intentar desarmar o aturdir sin acción adicional.",
        "description_en": "When hitting the same target with both weapons in the same turn, can attempt to disarm or stun without an extra action.",
        "level": 11
      }
    ]
  },
  "qinggong_monk": {
    "class": "monk",
    "name": "Qinggong Monk",
    "name_en": "Qinggong Monk",
    "name_es": "Monje Qinggong",
    "source": "Ultimate Magic",
    "description_es": "Reemplaza habilidades estándar del monje por poderes ki personalizables elegidos de una lista. Máxima flexibilidad táctica para adaptar el monje a cualquier concepto.",
    "description_en": "Replaces standard monk abilities with customizable ki powers chosen from a list. Maximum tactical flexibility to tailor the monk to any concept.",
    "features_removed": [
      "Slow Fall",
      "High Jump",
      "Wholeness of Body",
      "Diamond Body",
      "Abundant Step",
      "Diamond Soul",
      "Quivering Palm",
      "Timeless Body",
      "Tongue of Sun and Moon",
      "Empty Body",
      "Perfect Self"
    ],
    "features_gained": [
      {
        "name": "Ki Powers (Su/Sp)",
        "name_en": "Ki Powers (Su/Sp)",
        "description_es": "Cada habilidad eliminada se reemplaza por un poder ki elegido de la lista de qinggong según el nivel requerido. Incluye conjuros como habilidades, poderes defensivos y ofensivos.",
        "description_en": "Each removed ability is replaced with a ki power chosen from the qinggong list based on the required level. Includes spells as abilities, defensive and offensive powers.",
        "level": 4
      }
    ]
  },
  "master_of_many_styles": {
    "class": "monk",
    "name": "Master of Many Styles",
    "name_en": "Master of Many Styles",
    "name_es": "Maestro de Múltiples Estilos",
    "source": "Ultimate Combat",
    "description_es": "Puede adoptar múltiples posturas de estilo marcial simultáneamente. A nivel 6 inicia dos estilos a la vez; a nivel alto combina hasta cinco estilos activos.",
    "description_en": "Can adopt multiple martial style stances simultaneously. At level 6 enters two styles at once; at high levels combines up to five active styles.",
    "features_removed": [
      "Bonus Feats (standard selection)",
      "Flurry of Blows",
      "Perfect Self"
    ],
    "features_gained": [
      {
        "name": "Fuse Style (Ex)",
        "name_en": "Fuse Style (Ex)",
        "description_es": "Puede estar en dos estilos marciales simultáneamente. Los beneficios de ambos estilos se aplican a la vez.",
        "description_en": "Can be in two martial styles at once. The benefits of both styles apply simultaneously."
      },
      {
        "name": "Maneuver Training (modified)",
        "name_en": "Maneuver Training (modified)",
        "description_es": "Bonus feats deben ser dones de estilo marcial o sus prerrequisitos.",
        "description_en": "Bonus feats must be style feats or their prerequisites.",
        "level": 3
      }
    ]
  },
  "holy_gun": {
    "class": "paladin",
    "name": "Holy Gun",
    "name_en": "Holy Gun",
    "name_es": "Pistola Sagrada",
    "source": "Ultimate Combat",
    "description_es": "Sustituye Smite Evil cuerpo a cuerpo por Smite Evil con armas de fuego a distancia. Divine Bond mejora el arma de fuego en lugar de la montura o espada.",
    "description_en": "Replaces melee Smite Evil with ranged firearm Smite Evil. Divine Bond enhances the firearm instead of mount or sword.",
    "features_removed": [
      "Detect Evil",
      "Smite Evil (melee)",
      "Divine Bond (weapon/mount)"
    ],
    "features_gained": [
      {
        "name": "Smite Evil (ranged)",
        "name_en": "Smite Evil (ranged)",
        "description_es": "Smite Evil funciona con ataques de arma de fuego. +CARs a ataque, +nivel a daño contra el objetivo.",
        "description_en": "Smite Evil works with firearm attacks. +CHA mod to attack, +level to damage against the target."
      },
      {
        "name": "Divine Bond (firearm)",
        "name_en": "Divine Bond (firearm)",
        "description_es": "Mejora el arma de fuego con propiedades sagradas en lugar de montura o espada.",
        "description_en": "Enhances the firearm with holy properties instead of a mount or sword.",
        "level": 5
      },
      {
        "name": "Holy Grit",
        "name_en": "Holy Grit",
        "description_es": "Usa Carisma para recuperar grit (si multiclase con pistolero) en lugar de Sabiduría.",
        "description_en": "Uses Charisma to recover grit (if multiclassed with gunslinger) instead of Wisdom."
      }
    ]
  },
  "sacred_servant": {
    "class": "paladin",
    "name": "Sacred Servant",
    "name_en": "Sacred Servant",
    "name_es": "Siervo Sagrado",
    "source": "Advanced Player's Guide",
    "description_es": "Obtiene acceso a un dominio de su deidad y puede convocar aliados celestiales. Divine Bond llama criaturas sagradas en lugar de mejorar armas.",
    "description_en": "Gains access to one of their deity's domains and can summon celestial allies. Divine Bond calls holy creatures instead of enhancing weapons.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Domain",
        "name_en": "Domain",
        "description_es": "Obtiene un dominio de su deidad con sus poderes otorgados (como clérigo de mitad de nivel).",
        "description_en": "Gains a domain from their deity with its granted powers (as a cleric of half their level).",
        "level": 4
      },
      {
        "name": "Divine Bond (celestial ally)",
        "name_en": "Divine Bond (celestial ally)",
        "description_es": "Convoca archon, ángel u otra criatura sagrada como aliado temporal en lugar de potenciar un arma.",
        "description_en": "Summons an archon, angel, or other holy creature as a temporary ally instead of empowering a weapon.",
        "level": 5
      }
    ],
    "sub_options": {
      "domains": "Gana un dominio divino (como clérigo) en vez del compañero divino estándar. El dominio se elige de la lista de dominios de su deidad. Los poderes de dominio sustituyen las habilidades de compañero divino. / Gains one divine domain (as cleric) instead of standard divine bond. Domain chosen from deity's domain list. Domain powers replace divine bond abilities."
    }
  },
  "urban_ranger": {
    "class": "ranger",
    "name": "Urban Ranger",
    "name_en": "Urban Ranger",
    "name_es": "Explorador Urbano",
    "source": "Advanced Player's Guide",
    "class_skills_add": [
      "disable_device",
      "knowledge_local"
    ],
    "class_skills_remove": [
      "handle_animal",
      "knowledge_nature"
    ],
    "description_es": "Versión urbana del explorador. Terreno favorecido solo urbano/subterráneo, detección de trampas, habilidades de sigilo en ciudades.",
    "description_en": "Urban version of the ranger. Favored terrain only urban/underground, trap detection, stealth skills in cities.",
    "features_removed": [
      "Handle Animal (class skill)",
      "Knowledge (Nature) (class skill)",
      "Endurance",
      "Woodland Stride",
      "Camouflage",
      "Hide in Plain Sight (wilderness)"
    ],
    "features_gained": [
      {
        "name": "Disable Device (class skill)",
        "name_en": "Disable Device (class skill)",
        "description_es": "Añade Desactivar Artefacto a habilidades de clase.",
        "description_en": "Adds Disable Device to class skills.",
        "level": 1
      },
      {
        "name": "Trapfinding",
        "name_en": "Trapfinding",
        "description_es": "Gana Trapfinding como el pícaro a nivel 3.",
        "description_en": "Gains Trapfinding as the rogue at level 3.",
        "level": 1
      },
      {
        "name": "Blend In",
        "name_en": "Blend In",
        "description_es": "Puede usar Sigilo en áreas concurridas (sustituye Hide in Plain Sight pero solo en ciudades).",
        "description_en": "Can use Stealth in crowded areas (replaces Hide in Plain Sight but only in cities).",
        "level": 7
      }
    ]
  },
  "beast_master": {
    "class": "ranger",
    "name": "Beast Master",
    "name_en": "Beast Master",
    "name_es": "Amo de Bestias",
    "source": "Advanced Player's Guide",
    "description_es": "Puede tener múltiples compañeros animales, repartiendo niveles de explorador entre ellos. Sacrifica el vínculo con el grupo por tener una manada propia.",
    "description_en": "Can have multiple animal companions, splitting ranger levels among them. Trades the party bond for having a personal pack.",
    "features_removed": [
      "Hunter's Bond (party)"
    ],
    "features_gained": [
      {
        "name": "Animal Companions (multiple)",
        "name_en": "Animal Companions (multiple)",
        "description_es": "A nivel 4 puede tener un segundo compañero animal. Los niveles de explorador se reparten entre todos los compañeros activos.",
        "description_en": "At level 4 can have a second animal companion. Ranger levels are divided among all active companions.",
        "level": 4
      }
    ]
  },
  "knife_master": {
    "class": "rogue",
    "name": "Knife Master",
    "name_en": "Knife Master",
    "name_es": "Maestro del Cuchillo",
    "source": "Ultimate Combat",
    "description_es": "Ataque furtivo con dagas y armas similares usa d8 en lugar de d6. Blade Sense: bonificación de esquiva escalable a la CA contra armas cortantes.",
    "description_en": "Sneak attack with daggers and similar weapons uses d8 instead of d6. Blade Sense: scaling dodge AC bonus against slashing weapons.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Hidden Blade",
        "name_en": "Hidden Blade",
        "description_es": "+1 a verificaciones de Prestidigitación para ocultar dagas y navajas. Gana Conceal Spell-Like Ability como don adicional.",
        "description_en": "+1 to Sleight of Hand checks to conceal daggers and knives. Gains Conceal Spell-Like Ability as a bonus feat."
      },
      {
        "name": "Sneak Stab (Ex)",
        "name_en": "Sneak Stab (Ex)",
        "description_es": "Ataque furtivo con dagas/navajas/armas similares usa d8 en lugar de d6; con cualquier otra arma usa d4.",
        "description_en": "Sneak attack with daggers/knives/similar weapons uses d8 instead of d6; with any other weapon uses d4."
      },
      {
        "name": "Blade Sense (Ex)",
        "name_en": "Blade Sense (Ex)",
        "description_es": "+1 de esquiva a la CA por cada 3 niveles de pícaro contra ataques de armas cortantes.",
        "description_en": "+1 dodge to AC per 3 rogue levels against slashing weapon attacks.",
        "level": 3
      }
    ]
  },
  "scout": {
    "class": "rogue",
    "name": "Scout",
    "name_en": "Scout",
    "name_es": "Explorador",
    "source": "Advanced Player's Guide",
    "description_es": "Puede aplicar ataque furtivo en carga si se ha movido 10+ pies. A nivel 8, cualquier round donde se mueva 10+ pies aplica ataque furtivo.",
    "description_en": "Can apply sneak attack on a charge if moved 10+ feet. At level 8, any round they move 10+ feet they apply sneak attack.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Scout's Charge (Ex)",
        "name_en": "Scout's Charge (Ex)",
        "description_es": "Siempre que el explorador carga, aplica ataque furtivo como si el objetivo estuviera flanqueado, si se ha movido al menos 10 pies antes de atacar.",
        "description_en": "Whenever the scout charges, they apply sneak attack as if the target were flanked, if they moved at least 10 feet before attacking.",
        "level": 4
      },
      {
        "name": "Skirmisher (Ex)",
        "name_en": "Skirmisher (Ex)",
        "description_es": "A nivel 8, cualquier round en que se mueva más de 10 pies aplica ataque furtivo en su primer ataque.",
        "description_en": "At level 8, any round they move more than 10 feet they apply sneak attack on their first attack.",
        "level": 8
      }
    ]
  },
  "crossblooded": {
    "class": "sorcerer",
    "name": "Crossblooded",
    "name_en": "Crossblooded",
    "name_es": "Sangre Mezclada",
    "source": "Ultimate Magic",
    "saves": {
      "fort": "bad",
      "ref": "bad",
      "will": "bad"
    },
    "description_es": "Selecciona dos linajes distintos y obtiene poderes/dones de ambos, pero con un conjuro conocido menos por nivel y penalizador –2 a Voluntad. Gran versatilidad a alto coste.",
    "description_en": "Selects two different bloodlines and gains powers/feats from both, but with one less spell known per level and a –2 penalty on Will saves. Great versatility at a high cost.",
    "features_removed": [
      "1 Spell Known per level"
    ],
    "features_gained": [
      {
        "name": "Two Bloodlines",
        "name_en": "Two Bloodlines",
        "description_es": "Selecciona poderes de linaje, dones de linaje y arcanas de dos linajes distintos de forma alternada por nivel.",
        "description_en": "Selects bloodline powers, bloodline feats, and arcanas from two different bloodlines, alternating by level.",
        "level": 1
      }
    ],
    "sub_options": {
      "bloodlines": "Elige DOS linajes. Obtiene los poderes de ambos pero con 1 nivel de retraso. Penalización de -2 a todas las tiradas de voluntad. Pierde un hechizo de sangre por nivel de hechicero. / Selects TWO bloodlines. Gains powers from both but 1 level delayed. -2 penalty to all will saves. Loses one bloodline spell per sorcerer level."
    }
  },
  "wildblooded": {
    "class": "sorcerer",
    "name": "Wildblooded",
    "name_en": "Wildblooded",
    "name_es": "Sangre Salvaje",
    "source": "Ultimate Magic",
    "description_es": "Aplica una variante mutada a un linaje existente, modificando la arcana y ciertos poderes de linaje. Ej: variante Sage usa INT en lugar de CARs.",
    "description_en": "Applies a mutated variant to an existing bloodline, modifying the arcana and certain bloodline powers. Ex: the Sage variant uses INT instead of CHA.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Bloodline Mutation",
        "name_en": "Bloodline Mutation",
        "description_es": "La arcana de linaje y uno o más poderes de linaje son reemplazados por versiones mutadas que cambian el funcionamiento fundamental del linaje.",
        "description_en": "The bloodline arcana and one or more bloodline powers are replaced by mutated versions that change the fundamental function of the bloodline.",
        "level": 1
      }
    ],
    "sub_options": {
      "bloodlines": "Elige un linaje de mutación (versión alternativa de un linaje estándar). Cada linaje wildblood modifica levemente la lista de hechizos y poderes del linaje base. / Selects a mutation bloodline (alternate version of a standard bloodline). Each wildblood bloodline slightly modifies the spell list and powers of the base bloodline."
    }
  },
  "exploiter_wizard": {
    "class": "wizard",
    "name": "Exploiter Wizard",
    "name_en": "Exploiter Wizard",
    "name_es": "Mago Explotador",
    "source": "Advanced Class Guide",
    "description_es": "Cambia el vínculo arcano y la escuela arcana por la reserva arcana y las explotaciones del Arcanista. Niveles de mago determinan los puntos de reserva.",
    "description_en": "Trades arcane bond and arcane school for the Arcanist's arcane reservoir and exploits. Wizard levels determine reservoir points.",
    "features_removed": [
      "Arcane Bond",
      "Arcane School"
    ],
    "features_gained": [
      {
        "name": "Arcane Reservoir",
        "name_en": "Arcane Reservoir",
        "description_es": "Reserva arcana como el Arcanista (3 + la mitad del nivel). Puede gastar puntos para mejorar conjuros.",
        "description_en": "Arcane reservoir as the Arcanist (3 + half level). Can spend points to enhance spells."
      },
      {
        "name": "Arcanist Exploit",
        "name_en": "Arcanist Exploit",
        "description_es": "Obtiene explotaciones de arcanista a nivel 1 y cada 4 niveles. Nivel efectivo = nivel de mago.",
        "description_en": "Gains arcanist exploits at level 1 and every 4 levels. Effective level = wizard level."
      }
    ],
    "sub_options": {
      "schools": "Pierde la especialización de escuela. En su lugar gana explotaciones de arcanista (arcane exploits) elegidas de la lista de arcanista. / Loses school specialization. Instead gains arcane exploits chosen from the arcanist list."
    }
  },
  "spellslinger": {
    "class": "wizard",
    "name": "Spellslinger",
    "name_en": "Spellslinger",
    "name_es": "Pistolero Arcano",
    "source": "Ultimate Combat",
    "description_es": "Canaliza conjuros a través de un arma de fuego arcana como ataques de toque a distancia. Sin trucos ni herramientas tradicionales del mago.",
    "description_en": "Channels spells through an arcane firearm as ranged touch attacks. No cantrips or traditional wizard tools.",
    "features_removed": [
      "Arcane Bond",
      "Scribe Scroll",
      "Cantrips",
      "Arcane School"
    ],
    "features_gained": [
      {
        "name": "Arcane Gun (Su)",
        "name_en": "Arcane Gun (Su)",
        "description_es": "Arma de fuego especial que puede canalizar conjuros de toque como ataques de toque a distancia. El alcance del conjuro pasa a ser el del arma.",
        "description_en": "Special firearm that can channel touch spells as ranged touch attacks. The spell's range becomes the weapon's range.",
        "level": 1
      },
      {
        "name": "Mage Bullets (Su)",
        "name_en": "Mage Bullets (Su)",
        "description_es": "Puede usar componentes de conjuro para crear munición mágica especial.",
        "description_en": "Can use spell components to create special magical ammunition.",
        "level": 1
      }
    ],
    "sub_options": {
      "schools": "No se especializa en ninguna escuela. En su lugar se especializa en el disparo de conjuros a través de armas de fuego. Las escuelas de conjuro estándar no están disponibles pero puede elegir una \"pistola arcana\" que amplía ciertos tipos de hechizos. / Does not specialize in any school. Instead specializes in firing spells through firearms. Standard spell schools unavailable but can choose an \"arcane gun\" that amplifies certain spell types."
    }
  },
  "vivisectionist": {
    "class": "alchemist",
    "name": "Vivisectionist",
    "name_en": "Vivisectionist",
    "name_es": "Viviseccionista",
    "source": "Ultimate Magic",
    "description_es": "Reemplaza bombas por ataque furtivo con progresión de pícaro. Accede a talentos de pícaro como descubrimientos. Combate cuerpo a cuerpo con pociones.",
    "description_en": "Replaces bombs with sneak attack on rogue progression. Accesses rogue talents as discoveries. Melee combat with potions.",
    "features_removed": [
      "Bomb"
    ],
    "features_gained": [
      {
        "name": "Sneak Attack",
        "name_en": "Sneak Attack",
        "description_es": "Ataque furtivo que progresa como pícaro (1d6 a nivel 1, +1d6 cada 2 niveles).",
        "description_en": "Sneak attack that progresses as a rogue (1d6 at level 1, +1d6 every 2 levels).",
        "level": 1
      },
      {
        "name": "Rogue Talents",
        "name_en": "Rogue Talents",
        "description_es": "Puede seleccionar talentos de pícaro como descubrimientos adicionales de alquimista.",
        "description_en": "Can select rogue talents as additional alchemist discoveries.",
        "level": 2
      }
    ]
  },
  "grenadier": {
    "class": "alchemist",
    "name": "Grenadier",
    "name_en": "Grenadier",
    "name_es": "Granadero",
    "source": "Pathfinder Society Field Guide",
    "description_es": "Sacrifica el dominio del veneno por lanzamiento de bombas mejorado, infusión de arma alquímica y explosiones dirigidas.",
    "description_en": "Sacrifices poison mastery for enhanced bomb throwing, alchemical weapon infusion, and directed blasts.",
    "features_removed": [
      "Brew Potion",
      "Poison Resistance",
      "Poison Use",
      "Swift Poisoning",
      "Poison Immunity"
    ],
    "features_gained": [
      {
        "name": "Martial Weapon Proficiency",
        "name_en": "Martial Weapon Proficiency",
        "description_es": "Gana competencia con todas las armas marciales.",
        "description_en": "Gains proficiency with all martial weapons."
      },
      {
        "name": "Alchemical Weapon (Su)",
        "name_en": "Alchemical Weapon (Su)",
        "description_es": "Como acción rápida infunde un arma con un extracto de alquimista, añadiendo sus efectos al próximo golpe.",
        "description_en": "As a swift action, infuse a weapon with an alchemist extract, adding its effects to the next hit.",
        "level": 2
      },
      {
        "name": "Directed Blast (Su)",
        "name_en": "Directed Blast (Su)",
        "description_es": "Puede detonar una bomba para que afecte un cono de 6 m en lugar de área de explosión estándar.",
        "description_en": "Can detonate a bomb to affect a 20-ft cone instead of the standard splash area.",
        "level": 6
      }
    ]
  },
  "beast_rider": {
    "class": "cavalier",
    "name": "Beast Rider",
    "name_en": "Beast Rider",
    "name_es": "Jinete de Bestias",
    "source": "Ultimate Combat",
    "description_es": "Puede montar criaturas exóticas (osos, dinosaurios, tiburones...) en lugar del caballo estándar, con el entrenamiento adecuado.",
    "description_en": "Can mount exotic creatures (bears, dinosaurs, sharks...) instead of the standard horse, with the proper training.",
    "features_removed": [
      "Expert Trainer",
      "Horse Mastery"
    ],
    "features_gained": [
      {
        "name": "Exotic Mount",
        "name_en": "Exotic Mount",
        "description_es": "Puede seleccionar criaturas exóticas como montura. La lista varía por tamaño del caballero y nivel.",
        "description_en": "Can select exotic creatures as a mount. The list varies by cavalier's size and level.",
        "level": 1
      }
    ]
  },
  "standard_bearer": {
    "class": "cavalier",
    "name": "Standard Bearer",
    "name_en": "Standard Bearer",
    "name_es": "Portaestandarte",
    "source": "Advanced Player's Guide",
    "description_es": "Su enseña otorga mayores bonificaciones morales a aliados. El estandarte puede inspirar cargas, valentía y devoción. Rol de líder de campo de batalla.",
    "description_en": "Their banner grants greater morale bonuses to allies. The standard can inspire charges, courage, and devotion. A battlefield leader role.",
    "features_removed": [
      "Charge Bonus (standard)"
    ],
    "features_gained": [
      {
        "name": "Banner (enhanced)",
        "name_en": "Banner (enhanced)",
        "description_es": "El estandarte otorga +2 moral a salvaciones contra miedo y +1 moral a ataques en carga (en lugar de +1/+0). Escala más rápido.",
        "description_en": "The banner grants +2 morale to saves against fear and +1 morale to charge attacks (instead of +1/+0). Scales faster.",
        "level": 5
      },
      {
        "name": "Inspire Courage",
        "name_en": "Inspire Courage",
        "description_es": "Puede usar su estandarte para otorgar bonificación de actuación a aliados cercanos, como bardo de la mitad de su nivel.",
        "description_en": "Can use their banner to grant a performance bonus to nearby allies, as a bard of half their level.",
        "level": 5
      }
    ]
  },
  "pistolero": {
    "class": "gunslinger",
    "name": "Pistolero",
    "name_en": "Pistolero",
    "name_es": "Pistolero",
    "source": "Ultimate Combat",
    "description_es": "Especializado exclusivamente en pistolas. Puede ocultarlas y usarlas en cuerpo a cuerpo sin provocar ataques de oportunidad. Daño mejorado a corta distancia.",
    "description_en": "Specialized exclusively in pistols. Can conceal them and use them in melee without provoking attacks of opportunity. Improved damage at short range.",
    "features_removed": [
      "Gunsmith (rifle/musket training)",
      "Up Close and Deadly"
    ],
    "features_gained": [
      {
        "name": "Pistol Training (Ex)",
        "name_en": "Pistol Training (Ex)",
        "description_es": "Gun Training solo aplica a pistolas. Puede añadir mod DES al daño de pistola a cualquier alcance.",
        "description_en": "Gun Training only applies to pistols. Can add DEX mod to pistol damage at any range.",
        "level": 5
      },
      {
        "name": "Up Close and Deadly (Ex)",
        "name_en": "Up Close and Deadly (Ex)",
        "description_es": "Gasta 1 Grit para añadir daño adicional en ataques con pistola a bocajarro (distancia cuerpo a cuerpo).",
        "description_en": "Spend 1 Grit to add extra damage on point-blank pistol attacks (melee range).",
        "level": 1
      }
    ]
  },
  "mysterious_stranger": {
    "class": "gunslinger",
    "name": "Mysterious Stranger",
    "name_en": "Mysterious Stranger",
    "name_es": "Forastero Misterioso",
    "source": "Ultimate Combat",
    "description_es": "Usa Carisma en lugar de Sabiduría para Grit y sus hazañas. A nivel 11 añade CARs al daño de pistola. El pistolero dramático y carismático.",
    "description_en": "Uses Charisma instead of Wisdom for Grit and its deeds. At level 11 adds CHA mod to pistol damage. The dramatic, charismatic gunslinger.",
    "features_removed": [
      "Gun Training (standard)"
    ],
    "features_gained": [
      {
        "name": "Grit (CHA-based)",
        "name_en": "Grit (CHA-based)",
        "description_es": "Reserva de Grit basada en Carisma en lugar de Sabiduría.",
        "description_en": "Grit pool based on Charisma instead of Wisdom.",
        "level": 1
      },
      {
        "name": "Luck of the Devil (Ex)",
        "name_en": "Luck of the Devil (Ex)",
        "description_es": "Puede gastar 1 Grit para añadir CARs a cualquier tirada de salvación.",
        "description_en": "Can spend 1 Grit to add CHA mod to any saving throw.",
        "level": 2
      },
      {
        "name": "Focused Aim (Ex)",
        "name_en": "Focused Aim (Ex)",
        "description_es": "A nivel 11, puede gastar 1 Grit para añadir CARs al daño de todas las pistolas ese turno.",
        "description_en": "At level 11, can spend 1 Grit to add CHA mod to damage of all pistol shots that turn.",
        "level": 11
      }
    ]
  },
  "sanctified_slayer": {
    "class": "inquisitor",
    "name": "Sanctified Slayer",
    "name_en": "Sanctified Slayer",
    "name_es": "Matador Santificado",
    "source": "Advanced Class Guide",
    "description_es": "Combina mecánicas del Matador con el Inquisidor. Objetivo Estudiado y talentos de matador en lugar de tácticas de grupo. Asesino solitario y preciso.",
    "description_en": "Combines Slayer mechanics with the Inquisitor. Studied Target and slayer talents in place of team tactics. A solitary, precise assassin.",
    "features_removed": [
      "Stern Gaze",
      "Cunning Initiative",
      "Solo Tactics",
      "Teamwork Feats"
    ],
    "features_gained": [
      {
        "name": "Studied Target (Ex)",
        "name_en": "Studied Target (Ex)",
        "description_es": "Como el Matador: bonificador escalonado a ataque, daño y habilidades contra un objetivo estudiado con acción de movimiento.",
        "description_en": "As the Slayer: scaling bonus to attack, damage, and skills against a studied target with a move action.",
        "level": 1
      },
      {
        "name": "Slayer Talents",
        "name_en": "Slayer Talents",
        "description_es": "Obtiene talentos de matador a niveles 4, 8, 12, 16, 20 en lugar de dones de trabajo en equipo.",
        "description_en": "Gains slayer talents at levels 4, 8, 12, 16, 20 instead of teamwork feats.",
        "level": 4
      }
    ]
  },
  "spellbreaker": {
    "class": "inquisitor",
    "name": "Spellbreaker",
    "name_en": "Spellbreaker",
    "name_es": "Rompeconjuros",
    "source": "Advanced Player's Guide",
    "description_es": "Especializado en destruir lanzadores de conjuros. Bonificaciones contra magia activa, Disruptive mejorado y capacidad de negar conjuros específicos.",
    "description_en": "Specialized in destroying spellcasters. Bonuses against active magic, improved Disruptive, and the ability to negate specific spells.",
    "features_removed": [
      "Judgment 2nd",
      "Judgment 8th",
      "Judgment 16th",
      "Solo Tactics",
      "Teamwork Feats"
    ],
    "features_gained": [
      {
        "name": "Foil Casting (Ex)",
        "name_en": "Foil Casting (Ex)",
        "description_es": "El inquisidor puede negar la concentración de un lanzador de conjuros con una acción inmediata (tirada de ataque vs DC de concentración).",
        "description_en": "The inquisitor can negate a spellcaster's concentration with an immediate action (attack roll vs. concentration DC).",
        "level": 1
      },
      {
        "name": "Disruptive (bonus feat)",
        "name_en": "Disruptive (bonus feat)",
        "description_es": "Obtiene Disruptive como don adicional, aumentando la DC de concentración para lanzadores adyacentes.",
        "description_en": "Gains Disruptive as a bonus feat, increasing the concentration DC for adjacent spellcasters.",
        "level": 6
      },
      {
        "name": "Fighter Training",
        "name_en": "Fighter Training",
        "description_es": "Cuenta como guerrero de la mitad de su nivel para requisitos de dones de combate.",
        "description_en": "Counts as a fighter of half their level for combat feat prerequisites.",
        "level": 10
      }
    ]
  },
  "eldritch_archer": {
    "class": "magus",
    "name": "Eldritch Archer",
    "name_en": "Eldritch Archer",
    "name_es": "Arquero Arcano",
    "source": "Ultimate Magic",
    "description_es": "Combate mágico a distancia con arcos y ballestas. Ranged Spellstrike canaliza conjuros de toque a través de flechas disparadas.",
    "description_en": "Ranged spell combat with bows and crossbows. Ranged Spellstrike channels touch spells through fired arrows.",
    "features_removed": [
      "Spell Combat (melee)"
    ],
    "features_gained": [
      {
        "name": "Ranged Spell Combat (Ex)",
        "name_en": "Ranged Spell Combat (Ex)",
        "description_es": "Puede usar Combate Mágico con arcos/ballestas en lugar de solo cuerpo a cuerpo. Penalizador de –2 a ataques de arco al hacerlo.",
        "description_en": "Can use Spell Combat with bows/crossbows instead of only melee. –2 penalty to bow attacks when doing so.",
        "level": 1
      },
      {
        "name": "Ranged Spellstrike (Su)",
        "name_en": "Ranged Spellstrike (Su)",
        "description_es": "Puede canalizar conjuros de toque a través de una flecha disparada. El alcance del conjuro pasa a ser el del arma.",
        "description_en": "Can channel touch spells through a fired arrow. The spell's range becomes the weapon's range.",
        "level": 1
      }
    ]
  },
  "hexcrafter": {
    "class": "magus",
    "name": "Hexcrafter",
    "name_en": "Hexcrafter",
    "name_es": "Artífice de Maleficios",
    "source": "Ultimate Magic",
    "class_skills_add": [
      "use_magic_device"
    ],
    "description_es": "Permite seleccionar maleficios de bruja como arcanas de magus. Puede aplicar maleficios mediante Spellstrike. Acceso parcial a la lista de conjuros de bruja.",
    "description_en": "Allows selecting witch hexes as magus arcana. Can apply hexes via Spellstrike. Partial access to the witch spell list.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Hex Arcana",
        "name_en": "Hex Arcana",
        "description_es": "Puede seleccionar maleficios de bruja como arcanas de magus. El mago utiliza su nivel de magus para el DC y la duración de los maleficios.",
        "description_en": "Can select witch hexes as magus arcana. The magus uses their magus level for hex DC and duration."
      },
      {
        "name": "Hex Magus (Su)",
        "name_en": "Hex Magus (Su)",
        "description_es": "Puede aplicar maleficios mediante Spellstrike en lugar de un conjuro. El maleficio afecta al objetivo golpeado.",
        "description_en": "Can apply hexes via Spellstrike instead of a spell. The hex affects the struck target."
      },
      {
        "name": "Accursed Strike (Sp)",
        "name_en": "Accursed Strike (Sp)",
        "description_es": "Puede aplicar maleficios de forma diferida a través de ataques preparados.",
        "description_en": "Can apply hexes delayed through prepared attacks.",
        "level": 4
      }
    ],
    "sub_options": {
      "hexes": "Puede elegir hexes de bruja como acanos de magus. Los hexes disponibles: vuelo, lenguas, mal de ojo, desgracia, miedo, sueño, lentitud, ceguera (lista no exhaustiva). Los hexes malignos requieren un acano para activarse con el magus. / Can select witch hexes as magus arcana. Available hexes: flight, tongues, evil eye, misfortune, fear, slumber, slow, blindness (non-exhaustive). Evil hexes require an arcana to activate with the magus."
    }
  },
  "seeker": {
    "class": "oracle",
    "name": "Seeker",
    "name_en": "Seeker",
    "name_es": "Buscador",
    "source": "Advanced Player's Guide",
    "class_skills_add": [
      "disable_device",
      "perception"
    ],
    "description_es": "Sacrifica dos revelaciones por capacidades de explorador de ruinas: Trapfinding a nivel 2 y Trap Sense a nivel 7. Oráculo orientado a la exploración.",
    "description_en": "Sacrifices two revelations for ruin-delving abilities: Trapfinding at level 2 and Trap Sense at level 7. An exploration-oriented oracle.",
    "features_removed": [
      "Revelation (2nd level)",
      "Revelation (7th level)"
    ],
    "features_gained": [
      {
        "name": "Trapfinding",
        "name_en": "Trapfinding",
        "description_es": "A nivel 2, gana Trapfinding como el pícaro para detectar y desactivar trampas mágicas.",
        "description_en": "At level 2, gains Trapfinding as the rogue to detect and disable magic traps.",
        "level": 2
      },
      {
        "name": "Trap Sense (Ex)",
        "name_en": "Trap Sense (Ex)",
        "description_es": "A nivel 7, gana bonificación de +2 a CA y salvaciones contra trampas.",
        "description_en": "At level 7, gains +2 to AC and saves against traps.",
        "level": 7
      }
    ]
  },
  "ancient_lorekeeper": {
    "class": "oracle",
    "name": "Ancient Lorekeeper",
    "name_en": "Ancient Lorekeeper",
    "name_es": "Guardián del Saber Antiguo",
    "source": "Advanced Player's Guide",
    "description_es": "Solo para elfos. Reemplaza la revelación de nivel 5 por acceso a conjuros arcanos de la lista de mago/hechicero como conjuros adicionales conocidos.",
    "description_en": "Elves only. Replaces the 5th-level revelation with access to arcane spells from the wizard/sorcerer list as additional known spells.",
    "features_removed": [
      "Revelation (5th level)"
    ],
    "features_gained": [
      {
        "name": "Arcane Archivist (Su)",
        "name_en": "Arcane Archivist (Su)",
        "description_es": "A nivel 5, puede aprender un número de conjuros arcanos de mago/hechicero igual a su mod CARs, añadiéndolos como conjuros adicionales conocidos del oráculo.",
        "description_en": "At level 5, can learn a number of wizard/sorcerer arcane spells equal to their CHA mod, adding them as additional known oracle spells.",
        "level": 5
      }
    ]
  },
  "synthesist": {
    "class": "summoner",
    "name": "Synthesist",
    "name_en": "Synthesist",
    "name_es": "Sintetista",
    "source": "Ultimate Magic",
    "description_es": "Fusiona la esencia del eidolón en su propio cuerpo. Obtiene habilidades físicas del eidolón como PG temporales. Sin eidolón externo.",
    "description_en": "Fuses the eidolon's essence into their own body. Gains physical abilities from the eidolon as temporary HP. No external eidolon.",
    "features_removed": [
      "Eidolon (external)",
      "Bond Senses",
      "Life Bond",
      "Shield Ally",
      "Maker's Call",
      "Transposition",
      "Greater Shield Ally",
      "Merge Forms"
    ],
    "features_gained": [
      {
        "name": "Fused Eidolon",
        "name_en": "Fused Eidolon",
        "description_es": "El eidolón se fusiona con el convocador. Gana las habilidades físicas (FUE, DES, CON, armadura natural, ataques) como capa sobre sus propias estadísticas mentales.",
        "description_en": "The eidolon fuses with the summoner. Gains physical abilities (STR, DEX, CON, natural armor, attacks) as a layer over their own mental stats.",
        "level": 1
      },
      {
        "name": "Fused Link (Su)",
        "name_en": "Fused Link (Su)",
        "description_es": "La conexión con el eidolón fundido cura PG del convocador cuando el eidolón recibiría daño letal.",
        "description_en": "The link with the fused eidolon heals the summoner's HP when the eidolon would take lethal damage.",
        "level": 1
      }
    ],
    "sub_options": {
      "evolutions": "Todas las evoluciones del eidolón se aplican al cuerpo del convocador mientras está fusionado. El eidolón actúa como una armadura viva; las evoluciones de PF del eidolón se aplican al convocador. / All eidolon evolutions apply to the summoner's body while fused. The eidolon acts as living armor; eidolon EP evolutions apply to the summoner."
    }
  },
  "master_summoner": {
    "class": "summoner",
    "name": "Master Summoner",
    "name_en": "Master Summoner",
    "name_es": "Gran Convocador",
    "source": "Ultimate Magic",
    "description_es": "Intercambia un eidolón poderoso por múltiples criaturas convocadas simultáneas. Eidolón más débil (Lesser Eidolon) pero convocaciones múltiples activas.",
    "description_en": "Trades a powerful eidolon for multiple simultaneous summoned creatures. Weaker eidolon (Lesser Eidolon) but multiple active summons.",
    "features_removed": [
      "Bond Senses"
    ],
    "features_gained": [
      {
        "name": "Lesser Eidolon",
        "name_en": "Lesser Eidolon",
        "description_es": "Su eidolón es más débil: pool de evolución reducido a la mitad.",
        "description_en": "Their eidolon is weaker: evolution pool reduced by half."
      },
      {
        "name": "Multiple Summons",
        "name_en": "Multiple Summons",
        "description_es": "Puede mantener múltiples Summon Monster activos simultáneamente cuando el eidolón no está desplegado. Sin límite normal de una sola convocación activa.",
        "description_en": "Can maintain multiple Summon Monster active simultaneously when the eidolon is not deployed. Without the normal limit of one active summon."
      }
    ],
    "sub_options": {
      "evolutions": "El eidolón tiene solo 1/4 de los Puntos de Evolución normales pero puede conjurar más monstruos invocados simultáneamente (hasta 1+ nivel de conjuración / 5). / The eidolon has only 1/4 normal Evolution Points but can summon more creatures simultaneously (up to 1 + summon level / 5)."
    }
  },
  "hedge_witch": {
    "class": "witch",
    "name": "Hedge Witch",
    "name_en": "Hedge Witch",
    "name_es": "Bruja Rústica",
    "source": "Ultimate Magic",
    "description_es": "Enfocada en curación rural. Lanzamiento espontáneo de conjuros de curación y capacidad de absorber veneno o enfermedad de otros mediante conjuro.",
    "description_en": "Focused on rural healing. Spontaneous casting of cure spells and the ability to absorb poison or disease from others via spell.",
    "features_removed": [
      "Hex (4th level)",
      "Hex (8th level)"
    ],
    "features_gained": [
      {
        "name": "Spontaneous Healing",
        "name_en": "Spontaneous Healing",
        "description_es": "Puede convertir conjuros preparados en conjuros de curación espontáneamente (como clérigo con curación).",
        "description_en": "Can convert prepared spells into cure spells spontaneously (as a cleric with cure)."
      },
      {
        "name": "Empathic Healing (Su)",
        "name_en": "Empathic Healing (Su)",
        "description_es": "Puede absorber veneno o enfermedad de otro ser al tocarlo, transfiriéndolo a sí misma.",
        "description_en": "Can absorb poison or disease from another being by touch, transferring it to herself.",
        "level": 4
      }
    ],
    "sub_options": {
      "hexes": "Debe elegir el patrón de Curación. Los hexes disponibles se centran en curación y protección. Tiene acceso prioritario a hexes: curar heridas, medicina, antídoto, bendición. No puede elegir hexes de maldición o daño directo. / Must choose the Healing patron. Available hexes focus on healing and protection. Has priority access to hexes: healing, medicine, antidote, bless. Cannot choose curse or direct damage hexes."
    }
  },
  "winter_witch": {
    "class": "witch",
    "name": "Winter Witch",
    "name_en": "Winter Witch",
    "name_es": "Bruja Invernal",
    "source": "Inner Sea Magic",
    "description_es": "Especializada en magia de frío. DC de conjuros de frío aumentado, resistencia al frío escalable. No puede lanzar conjuros de fuego. Familiar de animal ártico.",
    "description_en": "Specialized in cold magic. Increased DC for cold spells, scaling cold resistance. Cannot cast fire spells. Arctic animal familiar.",
    "features_removed": [
      "Hex (4th level)"
    ],
    "features_gained": [
      {
        "name": "Cold Flesh (Ex)",
        "name_en": "Cold Flesh (Ex)",
        "description_es": "Resistencia al frío 5 a nivel 1, aumenta a 10 a nivel 5, 20 a nivel 10, e inmunidad a nivel 15.",
        "description_en": "Cold resistance 5 at level 1, increases to 10 at level 5, 20 at level 10, and immunity at level 15.",
        "level": 1
      },
      {
        "name": "Icy Stare (Su)",
        "name_en": "Icy Stare (Su)",
        "description_es": "Su mal de ojo aplica la condición de entumecimiento en lugar del penalizador normal.",
        "description_en": "Her evil eye applies the numbed condition instead of the normal penalty.",
        "level": 1
      },
      {
        "name": "Frozen Caress (Su)",
        "name_en": "Frozen Caress (Su)",
        "description_es": "Añade 1d4 de daño por frío a ataques de toque y conjuros de toque.",
        "description_en": "Adds 1d4 cold damage to touch attacks and touch spells.",
        "level": 4
      }
    ],
    "sub_options": {
      "hexes": "Requiere el patrón Invierno. Hexes disponibles limitados al tema del frío: escarcha (rime), congelación, tormenta de hielo. Hexes de fuego o calor no disponibles.",
      "patrons": "El patrón debe ser Invierno. No puede elegir otro patrón. Los hechizos de patrón son todos del tema de frío y hielo. / Patron must be Winter. Cannot choose another patron. All patron spells have cold and ice themes."
    }
  },
  "blade_adept": {
    "class": "arcanist",
    "name": "Blade Adept",
    "name_en": "Blade Adept",
    "name_es": "Adepto de la Hoja",
    "source": "Advanced Class Guide",
    "class_skills_add": [
      "intimidate"
    ],
    "description_es": "Combina lanzamiento de conjuros con combate cuerpo a cuerpo mediante espada inteligente vinculada. Accede a explotaciones de magus y Spellstrike.",
    "description_en": "Combines spellcasting with melee combat via a bonded intelligent sword. Accesses magus arcana and Spellstrike.",
    "features_removed": [
      "Arcanist Exploit (1st level)",
      "Arcanist Exploit (9th level)",
      "Exploit (3rd)",
      "Familiar"
    ],
    "features_gained": [
      {
        "name": "Black Blade (Ex)",
        "name_en": "Black Blade (Ex)",
        "description_es": "Espada inteligente vinculada que usa la reserva arcana del arcanista. Gana capacidades de Magus Black Blade.",
        "description_en": "Bonded intelligent sword that uses the arcanist's arcane reservoir. Gains Magus Black Blade abilities.",
        "level": 1
      },
      {
        "name": "Spell Strike",
        "name_en": "Spell Strike",
        "description_es": "Puede canalizar conjuros de toque a través de su espada negra.",
        "description_en": "Can channel touch spells through their black blade.",
        "level": 1
      },
      {
        "name": "Magus Arcana",
        "name_en": "Magus Arcana",
        "description_es": "Puede seleccionar arcanas de magus en lugar de explotaciones en ciertos niveles.",
        "description_en": "Can select magus arcana instead of exploits at certain levels.",
        "level": 3
      }
    ]
  },
  "brown_fur_transmuter": {
    "class": "arcanist",
    "name": "Brown-Fur Transmuter",
    "name_en": "Brown-Fur Transmuter",
    "name_es": "Transmutador de Piel Parda",
    "source": "Advanced Class Guide",
    "description_es": "Especialista en transmutación. Amplifica bonificadores de atributos para aliados, comparte conjuros de transmutación personal, y transformación permanente a nivel 20.",
    "description_en": "Transmutation specialist. Amplifies ability score bonuses for allies, shares personal transmutation spells, and permanent transformation at level 20.",
    "features_removed": [
      "Arcanist Exploit (3rd)",
      "Arcanist Exploit (9th)",
      "Magical Supremacy (20th)"
    ],
    "features_gained": [
      {
        "name": "Transform (Su)",
        "name_en": "Transform (Su)",
        "description_es": "Puede amplificar bonificaciones de mejora de atributo hasta +6 (de +2/+4 estándar) al lanzar sobre aliados, gastando 1 punto de reserva.",
        "description_en": "Can amplify enhancement bonuses to ability scores up to +6 (from the standard +2/+4) when casting on allies, spending 1 reservoir point.",
        "level": 1
      },
      {
        "name": "Share Transmutation",
        "name_en": "Share Transmutation",
        "description_es": "Puede lanzar conjuros de transmutación personal (rango personal) sobre otros mediante toque.",
        "description_en": "Can cast personal-range transmutation spells on others via touch.",
        "level": 3
      },
      {
        "name": "Greater Transmuter (Su)",
        "name_en": "Greater Transmuter (Su)",
        "description_es": "A nivel 20, se transforma permanentemente en una forma transmutada poderosa de su elección.",
        "description_en": "At level 20, permanently transforms into a powerful transmuted form of their choice.",
        "level": 20
      }
    ]
  },
  "steelblood": {
    "class": "bloodrager",
    "name": "Steelblood",
    "name_en": "Steelblood",
    "name_es": "Sangre de Acero",
    "source": "Advanced Class Guide",
    "class_skills_add": [
      "knowledge_engineering"
    ],
    "description_es": "Especialista en armadura pesada. Blood Deflection gasta conjuros para CA. Formación progresiva en armadura. Sacrifica velocidad y esquiva sobrenatural.",
    "description_en": "Heavy armor specialist. Blood Deflection spends spells for AC. Progressive armor training. Sacrifices speed and uncanny dodge.",
    "features_removed": [
      "Fast Movement",
      "Uncanny Dodge",
      "Improved Uncanny Dodge",
      "Damage Reduction"
    ],
    "features_gained": [
      {
        "name": "Armor Training (Ex)",
        "name_en": "Armor Training (Ex)",
        "description_es": "Gana Formación en Armadura como el guerrero, reduciendo penalizadores y aumentando DES máxima en armadura.",
        "description_en": "Gains Armor Training as the fighter, reducing penalties and increasing max DEX in armor.",
        "level": 1
      },
      {
        "name": "Blood Deflection (Su)",
        "name_en": "Blood Deflection (Su)",
        "description_es": "En furia puede gastar un conjuro preparado para obtener un bonificador de escudo a la CA igual al nivel del conjuro durante 1 minuto.",
        "description_en": "While raging can spend a prepared spell to gain a shield bonus to AC equal to the spell's level for 1 minute.",
        "level": 7
      },
      {
        "name": "Inured to Armor (Ex)",
        "name_en": "Inured to Armor (Ex)",
        "description_es": "No aplica la reducción de velocidad por armadura pesada.",
        "description_en": "Does not suffer the speed reduction from heavy armor.",
        "level": 1
      }
    ]
  },
  "primalist": {
    "class": "bloodrager",
    "name": "Primalist",
    "name_en": "Primalist",
    "name_es": "Primalista",
    "source": "Advanced Class Guide",
    "description_es": "Permite incorporar poderes de furia de bárbaro en lugar de poderes de linaje de sangre a niveles 4+. Cada reemplazo otorga 2 poderes de furia.",
    "description_en": "Allows incorporating barbarian rage powers in place of bloodline powers at levels 4+. Each replacement grants 2 rage powers.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Rage Powers",
        "name_en": "Rage Powers",
        "description_es": "A nivel 4 y cada 4 niveles puede reemplazar un poder de linaje de sangre por 2 poderes de furia de bárbaro. No puede seleccionar poderes que requieran furia de bárbaro estándar.",
        "description_en": "At level 4 and every 4 levels can replace a bloodline power with 2 barbarian rage powers. Cannot select powers that require standard barbarian rage.",
        "level": 4
      }
    ],
    "sub_options": {
      "bloodlines": "Mantiene su linaje de sangre. En vez de poderes de linaje en niveles 8, 12, 16, 20 puede elegir dos poderes de rabia en su lugar. / Keeps bloodline. Instead of bloodline powers at levels 8, 12, 16, 20 may choose two rage powers instead."
    }
  },
  "exemplar": {
    "class": "brawler",
    "name": "Exemplar",
    "name_en": "Exemplar",
    "name_es": "Ejemplar",
    "source": "Advanced Class Guide",
    "description_es": "Líder inspirador. Sus aliados cercanos no quedan sorprendidos. Gana actuaciones de inspiración y otorga dones de trabajo en equipo temporales mediante displays marciales.",
    "description_en": "Inspiring leader. Their nearby allies aren't surprised. Gains inspiring performances and grants temporary teamwork feats through martial displays.",
    "features_removed": [
      "Unarmed Strike (standard progression)",
      "Close Weapon Mastery",
      "Maneuver Training",
      "AC Bonus",
      "Brawler's Strike"
    ],
    "features_gained": [
      {
        "name": "Inspiring Prowess (Ex)",
        "name_en": "Inspiring Prowess (Ex)",
        "description_es": "Todos los aliados en 9 m no quedan sorprendidos mientras el Ejemplar esté consciente al inicio del combate.",
        "description_en": "All allies within 30 ft are not surprised as long as the Exemplar is conscious at the start of combat."
      },
      {
        "name": "Exemplar Arts",
        "name_en": "Exemplar Arts",
        "description_es": "Puede otorgar temporalmente un don de trabajo en equipo que conozca a los aliados dentro de su alcance como acción de movimiento.",
        "description_en": "Can temporarily grant a teamwork feat they know to allies within reach as a move action."
      }
    ]
  },
  "steel_breaker": {
    "class": "brawler",
    "name": "Steel-Breaker",
    "name_en": "Steel-Breaker",
    "name_es": "Rompedor de Acero",
    "source": "Advanced Class Guide",
    "description_es": "Analiza debilidades de criaturas para ignorar defensas. Sunder Training especializado. Bonificaciones de ataque basadas en el tipo de criatura.",
    "description_en": "Analyzes creature weaknesses to ignore defenses. Specialized Sunder Training. Attack bonuses based on creature type.",
    "features_removed": [
      "Brawler's Strike"
    ],
    "features_gained": [
      {
        "name": "Sunder Training (Ex)",
        "name_en": "Sunder Training (Ex)",
        "description_es": "Maneuver Training se aplica solo a Sunder. Bonificador adicional a tiradas de destrozar y para ignorar dureza.",
        "description_en": "Maneuver Training applies only to Sunder. Additional bonus to sunder rolls and to ignore hardness.",
        "level": 3
      },
      {
        "name": "Weakness Finder (Ex)",
        "name_en": "Weakness Finder (Ex)",
        "description_es": "Puede analizar las debilidades de tipo de criatura para obtener bonificadores de ataque y penetración contra ese tipo específico.",
        "description_en": "Can analyze a creature type's weaknesses to gain attack and penetration bonuses against that specific type.",
        "level": 7
      }
    ]
  },
  "feral_hunter": {
    "class": "hunter",
    "name": "Feral Hunter",
    "name_en": "Feral Hunter",
    "name_es": "Cazador Feral",
    "source": "Advanced Class Guide",
    "description_es": "Sin compañero animal: el cazador adopta formas animales permanentes. Gana Wild Shape y puede invocar manadas de animales temporales.",
    "description_en": "No animal companion: the hunter adopts permanent animal forms. Gains Wild Shape and can summon temporary animal packs.",
    "features_removed": [
      "Animal Companion",
      "Animal Focus (share)",
      "Hunter Tactics",
      "Speak with Master",
      "Precise Companion",
      "Bonus Tricks",
      "Empathic Link",
      "Raise Animal Companion",
      "Teamwork Feats (6,9,12,15,18)"
    ],
    "features_gained": [
      {
        "name": "Feral Focus (Ex)",
        "name_en": "Feral Focus (Ex)",
        "description_es": "Puede aplicar Animal Focus directamente a sí mismo permanentemente sin depender de un compañero. El número de enfoques activos escala con el nivel.",
        "description_en": "Can apply Animal Focus directly to themself permanently without relying on a companion. The number of active foci scales with level."
      },
      {
        "name": "Wild Shape (Su)",
        "name_en": "Wild Shape (Su)",
        "description_es": "A nivel 4 gana Wild Shape como druida del mismo nivel.",
        "description_en": "At level 4 gains Wild Shape as a druid of the same level.",
        "level": 4
      },
      {
        "name": "Summon Feral Kin (Sp)",
        "name_en": "Summon Feral Kin (Sp)",
        "description_es": "A niveles altos puede invocar una manada de animales como Llamar a la Naturaleza.",
        "description_en": "At high levels can summon a pack of animals as Summon Nature's Ally.",
        "level": 6
      }
    ]
  },
  "divine_hunter": {
    "class": "hunter",
    "name": "Divine Hunter",
    "name_en": "Divine Hunter",
    "name_es": "Cazador Divino",
    "source": "Advanced Class Guide",
    "description_es": "Canaliza poder divino eligiendo un dominio de deidad. El compañero animal gana la plantilla celestial o infernal.",
    "description_en": "Channels divine power by choosing a deity's domain. The animal companion gains the celestial or infernal template.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Domain",
        "name_en": "Domain",
        "description_es": "A nivel 3, selecciona un dominio de su deidad (como clérigo de nivel equivalente). Obtiene los poderes de dominio pero no los conjuros de ranura de dominio adicionales.",
        "description_en": "At level 3, selects a domain from their deity (as a cleric of equivalent level). Gains the domain powers but not the additional domain spell slots.",
        "level": 3
      },
      {
        "name": "Sanctified Animal",
        "name_en": "Sanctified Animal",
        "description_es": "Su compañero animal gana la plantilla Celestial (bien) o Infernal (mal) según el alineamiento del cazador.",
        "description_en": "Their animal companion gains the Celestial (good) or Infernal (evil) template based on the hunter's alignment.",
        "level": 1
      }
    ],
    "sub_options": {
      "domains": "El compañero animal del cazador divino refleja el dominio de su deidad. Obtiene un mini-dominio de paladin (Misericordia o similar) en vez del vínculo animal estándar. / The divine hunter's animal companion reflects his deity's domain. Gains a paladin-like domain mini (Mercy, etc.) instead of standard animal bond."
    }
  },
  "sleuth": {
    "class": "investigator",
    "name": "Sleuth",
    "name_en": "Sleuth",
    "name_es": "Detective",
    "source": "Advanced Class Guide",
    "description_es": "Sustituye la alquimia por un sistema de suerte basado en CARs. Gana hazañas de pistolero adaptadas: movilidad, evasión y tiradas adicionales.",
    "description_en": "Replaces alchemy with a CHA-based luck system. Gains adapted gunslinger deeds: mobility, evasion, and extra rolls.",
    "features_removed": [
      "Alchemy",
      "Swift Alchemy"
    ],
    "features_gained": [
      {
        "name": "Luck Pool (Ex)",
        "name_en": "Luck Pool (Ex)",
        "description_es": "Pool de suerte igual a mod CARs (mínimo 1). Se recupera al descansar. Alimenta sus hazañas.",
        "description_en": "Luck pool equal to CHA mod (minimum 1). Recovers on rest. Fuels their deeds.",
        "level": 1
      },
      {
        "name": "Deeds (Ex)",
        "name_en": "Deeds (Ex)",
        "description_es": "Gana hazañas similares al pistolero (Uncanny Initiative, Unflinching, Quick Thinking) alimentadas por el Pool de Suerte.",
        "description_en": "Gains deeds similar to the gunslinger (Uncanny Initiative, Unflinching, Quick Thinking) fueled by the Luck Pool.",
        "level": 1
      }
    ]
  },
  "empiricist": {
    "class": "investigator",
    "name": "Empiricist",
    "name_en": "Empiricist",
    "name_es": "Empiricista",
    "source": "Advanced Class Guide",
    "description_es": "Usa Inteligencia para todas las habilidades. Bonificaciones de perspicacia contra ilusiones y posesión. Master Intellect final: mejora ilimitada de habilidades.",
    "description_en": "Uses Intelligence for all skills. Insight bonuses against illusions and possession. Master Intellect capstone: unlimited skill enhancement.",
    "features_removed": [
      "Poison Lore",
      "Poison Resistance",
      "Swift Alchemy",
      "True Inspiration"
    ],
    "features_gained": [
      {
        "name": "Ceaseless Observation (Ex)",
        "name_en": "Ceaseless Observation (Ex)",
        "description_es": "Usa el modificador de INT en lugar del modificador habitual para todas las habilidades (Percepción, Desactivar Artefacto, Engañar, etc.).",
        "description_en": "Uses INT modifier instead of the usual modifier for all skills (Perception, Disable Device, Bluff, etc.).",
        "level": 1
      },
      {
        "name": "Unfailing Logic (Ex)",
        "name_en": "Unfailing Logic (Ex)",
        "description_es": "Bonificación de perspicacia escalable a salvaciones contra ilusiones (tipo [phantasm] y [figment]) y posesión.",
        "description_en": "Scaling insight bonus to saves against illusions ([phantasm] and [figment] types) and possession.",
        "level": 2
      },
      {
        "name": "Master Intellect (Ex)",
        "name_en": "Master Intellect (Ex)",
        "description_es": "A nivel 20, puede gastar Inspiración en cualquier verificación de habilidad sin límite de usos.",
        "description_en": "At level 20, can spend Inspiration on any skill check without limit of uses.",
        "level": 20
      }
    ]
  },
  "spirit_guide": {
    "class": "shaman",
    "name": "Spirit Guide",
    "name_en": "Spirit Guide",
    "name_es": "Guía de Espíritus",
    "source": "Advanced Class Guide",
    "description_es": "Accede a Revelaciones de Oráculo a través de su espíritu vagante. Puente entre la tradición del chamán y del oráculo.",
    "description_en": "Accesses Oracle Revelations through their wandering spirit. Bridges the shaman and oracle traditions.",
    "features_removed": [
      "Hex (4th level)",
      "Hex (8th level)"
    ],
    "features_gained": [
      {
        "name": "Oracle Revelations",
        "name_en": "Oracle Revelations",
        "description_es": "A nivel 4 y 8, puede usar su espíritu vagante para acceder a revelaciones del misterio de oráculo asociado a ese espíritu en lugar de un maleficio.",
        "description_en": "At levels 4 and 8, can use their wandering spirit to access revelations from the oracle mystery tied to that spirit instead of a hex.",
        "level": 4
      }
    ],
    "sub_options": {
      "spirits": "Oráculo con acceso a espíritus de chamán. Elige un espíritu al nivel 3 (y opcionalmente uno wandering al nivel 7). Los poderes de espíritu reemplazan revelaciones de oráculo. / Oracle with access to shaman spirits. Chooses a spirit at level 3 (and optionally a wandering spirit at level 7). Spirit powers replace oracle revelations."
    }
  },
  "unsworn_shaman": {
    "class": "shaman",
    "name": "Unsworn Shaman",
    "name_en": "Unsworn Shaman",
    "name_es": "Chamán Sin Juramento",
    "source": "Advanced Class Guide",
    "description_es": "Sin espíritu primario. Solo espíritu vagante pero puede cambiar entre múltiples espíritus vagantes distintos cada día. Enorme versatilidad, sin profundidad.",
    "description_en": "No primary spirit. Only wandering spirits, but can swap between multiple distinct wandering spirits each day. Huge versatility, no depth.",
    "features_removed": [
      "Spirit (primary)",
      "Spirit Animal",
      "Spirit Magic",
      "Greater Spirit",
      "True Spirit",
      "Manifestation"
    ],
    "features_gained": [
      {
        "name": "Multiple Wandering Spirits",
        "name_en": "Multiple Wandering Spirits",
        "description_es": "Puede tener un número de espíritus vagantes distintos por día igual a 1 + 1 por cada 6 niveles. Elige cuál está activo al preparar conjuros.",
        "description_en": "Can have a number of distinct wandering spirits per day equal to 1 + 1 per 6 levels. Chooses which is active when preparing spells.",
        "level": 1
      }
    ],
    "sub_options": {
      "spirits": "No vincula un espíritu al crear el personaje. Cada día puede vincular cualquier espíritu (sin espíritu de wandering fijo). Tiene menos hechizos memorables pero máxima flexibilidad de espíritu. / Does not bond a spirit at creation. Each day can channel any spirit (no fixed wandering spirit). Has fewer memorized spells but maximum spirit flexibility."
    }
  },
  "totemic_skald": {
    "class": "skald",
    "name": "Totemic Skald",
    "name_en": "Totemic Skald",
    "name_es": "Escaldo Totémico",
    "source": "Inner Sea Races",
    "description_es": "Su canción de furia solo otorga poderes de furia de un único tótem elegido al principio. Más profundo en su tótem pero sin versatilidad de otros poderes.",
    "description_en": "Their raging song only grants rage powers from a single totem chosen at the start. Deeper in their totem, but without the versatility of other powers.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Totem Song (Su)",
        "name_en": "Totem Song (Su)",
        "description_es": "La canción de furia solo puede conceder poderes de furia del tótem elegido (oso, espíritu, piel). Los aliados afectados por la canción solo reciben poderes de ese tótem específico.",
        "description_en": "The raging song can only grant rage powers of the chosen totem (beast, spirit, fiend). Allies affected by the song only receive powers from that specific totem.",
        "level": 1
      }
    ],
    "sub_options": {
      "spirits": "En vez de los poderes rúnicos estándar del escaldo, canaliza espíritus tótem animales. Cada espíritu tótem otorga una rabia simbólica diferente al escaldo y sus aliados (tótem del oso = PG extra, tótem del lobo = flanqueo, etc.). / Instead of standard runic skald powers, channels animal totem spirits. Each totem spirit grants a different symbolic rage to the skald and allies (bear totem = extra HP, wolf totem = flanking, etc.)."
    }
  },
  "court_poet": {
    "class": "skald",
    "name": "Court Poet",
    "name_en": "Court Poet",
    "name_es": "Poeta Cortesano",
    "source": "Ultimate Intrigue",
    "description_es": "Más bardo que bárbaro. Reemplaza la furia inspirada por actuaciones sociales que bonifican aliados en entornos cortesanos y debilitan enemigos.",
    "description_en": "More bard than barbarian. Replaces inspired rage with social performances that buff allies in courtly settings and weaken enemies.",
    "features_removed": [
      "Inspired Rage",
      "Song of Strength"
    ],
    "features_gained": [
      {
        "name": "Hymn of Valor (Su)",
        "name_en": "Hymn of Valor (Su)",
        "description_es": "En lugar de inducir furia, su actuación otorga bonificadores de moral a salvaciones y habilidades sociales a aliados en zonas cortesanas.",
        "description_en": "Instead of inducing rage, their performance grants morale bonuses to saves and social skills for allies in courtly areas.",
        "level": 1
      },
      {
        "name": "Stinging Verse (Su)",
        "name_en": "Stinging Verse (Su)",
        "description_es": "Actuación que impone penalizadores de moral a las tiradas de Diplomacia y Persuasión del objetivo.",
        "description_en": "Performance that imposes morale penalties to the target's Diplomacy and Persuasion checks.",
        "level": 3
      }
    ]
  },
  "bounty_hunter": {
    "class": "slayer",
    "name": "Bounty Hunter",
    "name_en": "Bounty Hunter",
    "name_es": "Cazarrecompensas",
    "source": "Advanced Class Guide",
    "description_es": "Especializado en capturar objetivos con vida. Ataques furtivos otorgan bonificadores a agarres. Puede noquear objetivos estudiados en lugar de matarlos.",
    "description_en": "Specialized in capturing targets alive. Sneak attacks grant grapple bonuses. Can knock out studied targets instead of killing them.",
    "features_removed": [
      "Dirty Trick (2nd)",
      "Submission Hold (6th)",
      "Incapacitate (10th)"
    ],
    "features_gained": [
      {
        "name": "Grappling Strike (Ex)",
        "name_en": "Grappling Strike (Ex)",
        "description_es": "Puede comenzar un agarre como parte del ataque furtivo que active la condición sin provocar ataque de oportunidad.",
        "description_en": "Can start a grapple as part of a sneak attack that triggers the condition without provoking an attack of opportunity.",
        "level": 2
      },
      {
        "name": "Target of Opportunity (Ex)",
        "name_en": "Target of Opportunity (Ex)",
        "description_es": "Puede usar ataque furtivo de daño no letal contra su objetivo estudiado para intentar dejarlo inconsciente.",
        "description_en": "Can use nonlethal sneak attack against their studied target to try to knock them unconscious.",
        "level": 6
      }
    ]
  },
  "sniper": {
    "class": "slayer",
    "name": "Sniper",
    "name_en": "Sniper",
    "name_es": "Francotirador",
    "source": "Advanced Class Guide",
    "description_es": "Gana Hide in Plain Sight para permanecer oculto tras disparos. Aplica ataque furtivo a largo alcance. Studied Target funciona a distancia máxima del arma.",
    "description_en": "Gains Hide in Plain Sight to remain hidden after shots. Applies sneak attack at long range. Studied Target works out to the weapon's maximum range.",
    "features_removed": [
      "Stalker (7th)"
    ],
    "features_gained": [
      {
        "name": "Sniper Training (Ex)",
        "name_en": "Sniper Training (Ex)",
        "description_es": "Puede aplicar ataque furtivo a cualquier distancia siempre que el objetivo esté a distancia de arma.",
        "description_en": "Can apply sneak attack at any distance as long as the target is within weapon range.",
        "level": 1
      },
      {
        "name": "Hide in Plain Sight (Ex)",
        "name_en": "Hide in Plain Sight (Ex)",
        "description_es": "Puede ocultarse incluso bajo observación directa mientras no esté en combate cuerpo a cuerpo.",
        "description_en": "Can hide even while being observed, as long as they are not in melee combat.",
        "level": 7
      }
    ]
  },
  "inspired_blade": {
    "class": "swashbuckler",
    "name": "Inspired Blade",
    "name_en": "Inspired Blade",
    "name_es": "Hoja Inspirada",
    "source": "Advanced Class Guide",
    "description_es": "Solo para rapier. Recupera Panache de CHA e INT combinados. Weapon Finesse automático con rapier. Rango de amenaza mejorado a nivel alto.",
    "description_en": "Rapier only. Recovers Panache from combined CHA and INT. Automatic Weapon Finesse with rapier. Improved threat range at high levels.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Inspired Panache",
        "name_en": "Inspired Panache",
        "description_es": "Pool de Panache igual a CHA + INT modificadores (mínimo 1). Recupera Panache al confirmar críticos con rapier además del modo estándar.",
        "description_en": "Panache pool equal to CHA + INT modifiers (minimum 1). Recovers Panache on confirmed crits with rapier in addition to the standard means."
      },
      {
        "name": "Inspired Finesse",
        "name_en": "Inspired Finesse",
        "description_es": "Obtiene Weapon Finesse con rapier automáticamente a nivel 1. A nivel 5, puede añadir INT al daño con rapier además de FUE o DES.",
        "description_en": "Gains Weapon Finesse with rapier automatically at level 1. At level 5, can add INT to rapier damage in addition to STR or DEX."
      }
    ]
  },
  "daring_champion": {
    "class": "swashbuckler",
    "name": "Daring Champion",
    "name_en": "Daring Champion",
    "name_es": "Campeón Audaz",
    "source": "Advanced Class Guide",
    "class_skills_add": [
      "handle_animal",
      "ride"
    ],
    "description_es": "Combina espadachín con caballero. Reemplaza algunas hazañas por Desafío de caballero y Orden. Duelo con honor y código caballeresco.",
    "description_en": "Combines swashbuckler with cavalier. Replaces some deeds with cavalier Challenge and Order. Honorable dueling with a knightly code.",
    "features_removed": [
      "Opportune Parry and Riposte",
      "Precise Strike",
      "Swashbuckler Finesse"
    ],
    "features_gained": [
      {
        "name": "Challenge (Ex)",
        "name_en": "Challenge (Ex)",
        "description_es": "Obtiene la capacidad de Desafío del Caballero (1/día a nivel 1, +1 por cada 3 niveles). El objetivo del desafío recibe daño extra igual al nivel.",
        "description_en": "Gains the Cavalier's Challenge ability (1/day at level 1, +1 per 3 levels). The challenge target takes extra damage equal to the level.",
        "level": 1
      },
      {
        "name": "Order (Ex)",
        "name_en": "Order (Ex)",
        "description_es": "Pertenece a una orden de caballería, obteniendo sus beneficios de habilidad, edictos y capacidades de orden.",
        "description_en": "Belongs to a knightly order, gaining its skill benefits, edicts, and order abilities.",
        "level": 1
      }
    ]
  },
  "sacred_fist": {
    "class": "warpriest",
    "name": "Sacred Fist",
    "name_en": "Sacred Fist",
    "name_es": "Puño Sagrado",
    "source": "Advanced Class Guide",
    "description_es": "Luchador desarmado sagrado. Flurry of Blows, bonificación de CA de SAB, reserva de ki y dones de estilo marcial. Las manos son el arma sagrada.",
    "description_en": "Holy unarmed fighter. Flurry of Blows, WIS AC bonus, ki pool, and martial style feats. The hands are the sacred weapon.",
    "features_removed": [
      "Sacred Weapon",
      "Focus Weapon",
      "Bonus Feats (3rd level)",
      "Sacred Armor"
    ],
    "features_gained": [
      {
        "name": "Flurry of Blows (Ex)",
        "name_en": "Flurry of Blows (Ex)",
        "description_es": "Puede realizar Lluvia de Golpes con armas desarmadas como monje de su nivel de sacerdote de guerra.",
        "description_en": "Can perform Flurry of Blows with unarmed strikes as a monk of their warpriest level.",
        "level": 1
      },
      {
        "name": "AC Bonus (Ex)",
        "name_en": "AC Bonus (Ex)",
        "description_es": "Cuando sin armadura y sin escudo, añade mod SAB a la CA como monje.",
        "description_en": "When unarmored and unshielded, adds WIS mod to AC as a monk.",
        "level": 1
      },
      {
        "name": "Ki Pool (Su)",
        "name_en": "Ki Pool (Su)",
        "description_es": "Reserva de ki igual a ½ nivel + mod SAB. Puede gastarla para ataques adicionales, velocidad o CA.",
        "description_en": "Ki pool equal to 1/2 level + WIS mod. Can spend it for extra attacks, speed, or AC.",
        "level": 4
      },
      {
        "name": "Style Feats",
        "name_en": "Style Feats",
        "description_es": "Los dones adicionales de nivel 6, 12 y 18 deben ser dones de Estilo Marcial.",
        "description_en": "The bonus feats at levels 6, 12, and 18 must be Martial Style feats.",
        "level": 3
      }
    ]
  },
  "arsenal_chaplain": {
    "class": "warpriest",
    "name": "Arsenal Chaplain",
    "name_en": "Arsenal Chaplain",
    "name_es": "Capellán de Arsenal",
    "source": "Advanced Class Guide",
    "description_es": "Reemplaza la restricción de arma sagrada enfocada por Formación en Armas de guerrero progresiva. Puede tratar cualquier arma como sagrada.",
    "description_en": "Replaces the focused sacred weapon restriction with progressive fighter Weapon Training. Can treat any weapon as sacred.",
    "features_removed": [
      "Focus Weapon (single weapon restriction)"
    ],
    "features_gained": [
      {
        "name": "Weapon Training (Ex)",
        "name_en": "Weapon Training (Ex)",
        "description_es": "Gana Formación en Armas como el guerrero, progresivamente con un grupo de armas adicional cada 6 niveles.",
        "description_en": "Gains Weapon Training as the fighter, progressively with an additional weapon group every 6 levels.",
        "level": 3
      },
      {
        "name": "Versatile Sacred Weapon",
        "name_en": "Versatile Sacred Weapon",
        "description_es": "Puede aplicar el dado de daño sagrado a cualquier arma del grupo de entrenamiento, no solo al arma de enfoque.",
        "description_en": "Can apply the sacred weapon damage die to any weapon in the training group, not only the focus weapon.",
        "level": 4
      }
    ]
  },
  "kinetic_knight": {
    "class": "kineticist",
    "name": "Kinetic Knight",
    "name_en": "Kinetic Knight",
    "name_es": "Caballero Cinético",
    "source": "Psychic Anthology",
    "class_skills_add": [
      "climb",
      "ride",
      "sense_motive",
      "swim"
    ],
    "class_skills_remove": [
      "acrobatics",
      "heal"
    ],
    "description_es": "Guerrero acorazado cinético. Hoja Elemental obligatoria (cuerpo a cuerpo). CON califica para requisitos de dones. Armadura y escudo sintonizados con su magia.",
    "description_en": "Armored kineticist warrior. Mandatory Kinetic Blade (melee). CON qualifies for feat prerequisites. Armor and shield attuned to their magic.",
    "features_removed": [
      "Kinetic Blast (ranged options)",
      "Most Infusions",
      "Metakinesis",
      "Infusion 3rd",
      "Supercharge"
    ],
    "features_gained": [
      {
        "name": "Kinetic Blade (mandatory)",
        "name_en": "Kinetic Blade (mandatory)",
        "description_es": "La única forma de Kinetic Blast disponible es el Kinetic Blade (cuerpo a cuerpo). Todas las infusiones de blast deben ser de sustancia.",
        "description_en": "The only form of Kinetic Blast available is the Kinetic Blade (melee). All blast infusions must be substance infusions."
      },
      {
        "name": "Armor Channel (Su)",
        "name_en": "Armor Channel (Su)",
        "description_es": "Puede usar Gatherpower mientras lleva armadura y escudo sin penalizador al lanzamiento.",
        "description_en": "Can use Gather Power while wearing armor and a shield without casting penalty."
      },
      {
        "name": "Resolve (Ex)",
        "name_en": "Resolve (Ex)",
        "description_es": "Gana Resolución como el samurái: puede estabilizarse automáticamente y gastar reserva de resolución para continuar luchando herido.",
        "description_en": "Gains Resolve as the samurai: can automatically stabilize and spend the resolve pool to keep fighting while wounded.",
        "level": 4
      }
    ]
  },
  "overwhelming_soul": {
    "class": "kineticist",
    "name": "Overwhelming Soul",
    "name_en": "Overwhelming Soul",
    "name_es": "Alma Abrumadora",
    "source": "Occult Origins",
    "description_es": "Elimina el Burn (daño no letal). Usa Carisma en lugar de Constitución para poderes salvajes. Sin autosacrificio pero con menor poder bruto.",
    "description_en": "Eliminates Burn (nonlethal damage). Uses Charisma instead of Constitution for wild powers. No self-sacrifice but lower raw power.",
    "features_removed": [
      "Burn (nonlethal damage mechanic)",
      "Internal Buffer",
      "Metakinesis (higher levels)"
    ],
    "features_gained": [
      {
        "name": "CHA-based Powers",
        "name_en": "CHA-based Powers",
        "description_es": "Usa CARs en lugar de CON para el DC de los poderes salvajes, la bonificación de Kinetic Blast y el límite de Burn.",
        "description_en": "Uses CHA mod instead of CON for the DC of wild powers, Kinetic Blast bonus, and Burn limit.",
        "level": 1
      },
      {
        "name": "No-Burn Gather Power",
        "name_en": "No-Burn Gather Power",
        "description_es": "Puede acumular poder sin tomar puntos de Burn, pero con una límite de poder acumulado menor que el cinético estándar.",
        "description_en": "Can accumulate power without taking Burn points, but with a lower accumulated power limit than the standard kineticist.",
        "level": 1
      }
    ]
  },
  "storyteller": {
    "class": "medium",
    "name": "Storyteller",
    "name_en": "Storyteller",
    "name_es": "Narrador",
    "source": "Occult Adventures",
    "description_es": "Cambia la canalización espiritual por narrativa mágica. Actuación bárdica a través de historias con bonificaciones a conocimiento. Puede atrapar objetivos en relatos.",
    "description_en": "Trades spirit channeling for magical storytelling. Bardic performance through stories with Knowledge bonuses. Can trap targets within tales.",
    "features_removed": [
      "Spirit Seance Boon",
      "Spirit Bonus",
      "Spirit Surge",
      "Shared Seance",
      "Taboo",
      "Haunt Channeler",
      "Propitiation",
      "Trance of Three",
      "Connection Channel",
      "Spirit Mastery",
      "Astral Beacon"
    ],
    "features_gained": [
      {
        "name": "Bardic Performance (Story)",
        "name_en": "Bardic Performance (Story)",
        "description_es": "Gana actuación bárdica con un subconjunto de actuaciones basadas en narración oral en lugar de música.",
        "description_en": "Gains bardic performance with a subset of oral-storytelling performances instead of music.",
        "level": 1
      },
      {
        "name": "Lore of the Told (Ex)",
        "name_en": "Lore of the Told (Ex)",
        "description_es": "Bonificación de perspicacia escalable a verificaciones de Conocimiento (todas) cuando narra historias relevantes.",
        "description_en": "Scaling insight bonus to Knowledge checks (all) when telling relevant stories.",
        "level": 1
      },
      {
        "name": "Captivating Story (Sp)",
        "name_en": "Captivating Story (Sp)",
        "description_es": "A nivel alto puede atrapar a un objetivo dentro de un relato (similar a Maze), incapacitándolo mientras el narrador mantiene la historia activa.",
        "description_en": "At high levels can trap a target within a tale (similar to Maze), incapacitating them while the storyteller keeps the story active.",
        "level": 5
      }
    ],
    "sub_options": {
      "spirits": "Canaliza espíritus de figuras legendarias e históricas (leyendas locales, héroes de la antigüedad). En vez de los 6 espíritus estándar de médium, accede a un catálogo de personajes históricos con poderes únicos. / Channels spirits of legendary and historical figures (local legends, ancient heroes). Instead of the 6 standard medium spirits, accesses a catalog of historical figures with unique powers."
    }
  },
  "spirit_dancer": {
    "class": "medium",
    "name": "Spirit Dancer",
    "name_en": "Spirit Dancer",
    "name_es": "Danzarín de Espíritus",
    "source": "Occult Adventures",
    "description_es": "Puede cambiar de espíritu durante el combate como acción libre. A nivel alto canaliza dos espíritus simultáneamente. Rotación táctica de espíritus.",
    "description_en": "Can switch spirits during combat as a free action. At high levels channels two spirits simultaneously. Tactical rotation of spirits.",
    "features_removed": [
      "Spirit (fixed)",
      "Spirit Bonus",
      "Spirit Surge",
      "Taboo",
      "Shared Seance",
      "Trance of Three",
      "Spacious Soul",
      "Astral Beacon"
    ],
    "features_gained": [
      {
        "name": "Spirit Dance (Su)",
        "name_en": "Spirit Dance (Su)",
        "description_es": "Puede cambiar de espíritu canalizado como acción libre una vez por ronda. Tiene un número de rondas de danza iguales a 3 + mod CARs.",
        "description_en": "Can switch the channeled spirit as a free action once per round. Has a number of dance rounds equal to 3 + CHA mod.",
        "level": 1
      },
      {
        "name": "Dual Spirit (Su)",
        "name_en": "Dual Spirit (Su)",
        "description_es": "A nivel 12, puede canalizar dos espíritus simultáneamente durante la danza, obteniendo los beneficios de ambos.",
        "description_en": "At level 12, can channel two spirits simultaneously during the dance, gaining the benefits of both.",
        "level": 15
      }
    ],
    "sub_options": {
      "spirits": "Puede canalizar múltiples espíritus simultáneamente (hasta 3 a niveles altos) pero con poderes más débiles que los canalizados individualmente. Influencia de espíritu se distribuye entre todos. / Can channel multiple spirits simultaneously (up to 3 at high levels) but with weaker powers than individually channeled spirits. Spirit influence is distributed among all."
    }
  },
  "fey_trickster": {
    "class": "mesmerist",
    "name": "Fey Trickster",
    "name_en": "Fey Trickster",
    "name_es": "Tramposo Feérico",
    "source": "Ultimate Intrigue",
    "class_skills_add": [
      "knowledge_nature",
      "survival"
    ],
    "class_skills_remove": [
      "knowledge_planes",
      "spellcraft"
    ],
    "description_es": "Lanzador divino feérico con lista de druida/explorador. Gana Woodland Stride, ilusiones sociales y transformación feérica permanente a nivel alto.",
    "description_en": "Fey divine caster with druid/ranger spell list. Gains Woodland Stride, social illusions, and permanent fey transformation at high levels.",
    "features_removed": [
      "Towering Ego",
      "Touch Treatment",
      "Rule Minds"
    ],
    "features_gained": [
      {
        "name": "Woodland Stride (Ex)",
        "name_en": "Woodland Stride (Ex)",
        "description_es": "Se mueve por terreno natural sin penalizadores ni daño de espinas o plantas mágicas.",
        "description_en": "Moves through natural terrain without penalties or damage from thorns or magical plants."
      },
      {
        "name": "Fey Tricks (Sp)",
        "name_en": "Fey Tricks (Sp)",
        "description_es": "Puede lanzar una serie de conjuros ilusorios como poderes mágicos de forma espontánea usando sus niveles de hipnotizador.",
        "description_en": "Can cast a set of illusion spells as spell-like abilities spontaneously using their mesmerist levels.",
        "level": 3
      },
      {
        "name": "Fey Form",
        "name_en": "Fey Form",
        "description_es": "A nivel alto se transforma permanentemente en un ser feérico, obteniendo el subtipo Hada y visión en la oscuridad.",
        "description_en": "At high levels permanently transforms into a fey being, gaining the Fey subtype and darkvision.",
        "level": 20
      }
    ]
  },
  "cult_master": {
    "class": "mesmerist",
    "name": "Cult Master",
    "name_en": "Cult Master",
    "name_es": "Maestro de Cultos",
    "source": "Occult Adventures",
    "description_es": "Líder carismático de cultos. Mirada fanática, curación psicológica de seguidores y transferencia de conciencia a seguidores a nivel máximo.",
    "description_en": "Charismatic cult leader. Fanatical gaze, psychological healing of followers, and consciousness transfer to followers at capstone.",
    "features_removed": [
      "Consummate Liar",
      "Painful Stare",
      "Touch Treatment (3rd, 6th)",
      "Bold Stare (7th)",
      "Touch Treatment (10th, 14th)",
      "Rule Minds"
    ],
    "features_gained": [
      {
        "name": "Fanaticism (Su)",
        "name_en": "Fanaticism (Su)",
        "description_es": "Sus trucos de hipnotizador pueden hacer que los seguidores realicen acciones de autosacrificio sin hacer tiradas de Voluntad adicionales.",
        "description_en": "Their mesmerist tricks can make followers perform self-sacrificing actions without making additional Will saves.",
        "level": 1
      },
      {
        "name": "Disciple's Aura (Ex)",
        "name_en": "Disciple's Aura (Ex)",
        "description_es": "Los seguidores bajo su influencia proporcionan escudo emocional, dando al maestro bonificaciones de moral basadas en cuántos seguidores tiene activos.",
        "description_en": "Followers under their influence provide emotional shielding, granting the master morale bonuses based on how many active followers they have.",
        "level": 3
      },
      {
        "name": "Body Jump (Su)",
        "name_en": "Body Jump (Su)",
        "description_es": "A nivel 20, puede transferir su conciencia al cuerpo de un seguidor como mente en blanco.",
        "description_en": "At level 20, can transfer their consciousness to a follower's body as a mind swap.",
        "level": 20
      }
    ]
  },
  "battle_host": {
    "class": "occultist",
    "name": "Battle Host",
    "name_en": "Battle Host",
    "name_es": "Anfitrión de Batalla",
    "source": "Occult Adventures",
    "description_es": "Canaliza toda la magia a través de un único objeto vinculado (arma/armadura/escudo). Invoca guerreros espirituales y otorga capacidades sobrehumanas.",
    "description_en": "Channels all magic through a single bonded object (weapon/armor/shield). Summons spirit warriors and grants superhuman capabilities.",
    "features_removed": [
      "Multiple Implements",
      "Shift Focus",
      "Magic Circles",
      "Binding Circles",
      "Fast Circles",
      "Aura Sight"
    ],
    "features_gained": [
      {
        "name": "Panoply Bond (Su)",
        "name_en": "Panoply Bond (Su)",
        "description_es": "Un único objeto (arma, armadura o escudo) sirve como todo su sistema de implementos. Todo el foco mental se concentra en él.",
        "description_en": "A single object (weapon, armor, or shield) serves as their entire implement system. All mental focus concentrates on it.",
        "level": 1
      },
      {
        "name": "Heroic Splendor (Su)",
        "name_en": "Heroic Splendor (Su)",
        "description_es": "Puede gastar foco para otorgar a aliados capacidades sobrehumanas temporales (vuelo, visión, fuerza).",
        "description_en": "Can spend focus to grant allies temporary superhuman abilities (flight, vision, strength)."
      },
      {
        "name": "Ghost Warrior (Sp)",
        "name_en": "Ghost Warrior (Sp)",
        "description_es": "Invoca guerreros espectrales vinculados al objeto para ayudar en combate.",
        "description_en": "Summons spectral warriors bonded to the object to help in combat."
      }
    ],
    "sub_options": {
      "spirits": "Un objeto místico (arma o armadura) alberga un espíritu guerrero que actúa como \"familiar\" del ocultista de batalla. El espíritu del objeto solo puede usar implementos de escuelas de combate. / A mystic object (weapon or armor) houses a warrior spirit acting as the battle host occultist's \"familiar.\" The object's spirit can only use implement schools from combat schools."
    }
  },
  "necroccultist": {
    "class": "occultist",
    "name": "Necroccultist",
    "name_en": "Necroccultist",
    "name_es": "Necrooculista",
    "source": "Occult Adventures",
    "description_es": "Especialista en necromancia. Consume restos de criaturas para información, invoca enjambres de espíritus dañinos y drena niveles negativos.",
    "description_en": "Necromancy specialist. Consumes creature remains for information, summons harmful spirit swarms, and drains negative levels.",
    "features_removed": [
      "Object Reading",
      "Aura Sight",
      "Outside Contact",
      "Bonus (14th)"
    ],
    "features_gained": [
      {
        "name": "Death Knell (Su)",
        "name_en": "Death Knell (Su)",
        "description_es": "Consumiendo restos de una criatura muerta, obtiene memorias o conocimientos del difunto (como Leer Magia pero para información biográfica).",
        "description_en": "By consuming remains of a dead creature, gains memories or knowledge from the deceased (like Read Magic but for biographical information).",
        "level": 2
      },
      {
        "name": "Ghostly Horde (Sp)",
        "name_en": "Ghostly Horde (Sp)",
        "description_es": "Invoca un enjambre de espíritus que causa daño de energía negativa en área.",
        "description_en": "Summons a spirit swarm that deals area negative energy damage.",
        "level": 12
      },
      {
        "name": "Life Drain (Su)",
        "name_en": "Life Drain (Su)",
        "description_es": "Puede drenar niveles negativos de enemigos y transferirlos a aliados como puntos de resistencia temporales.",
        "description_en": "Can drain negative levels from enemies and transfer them to allies as temporary resistance points.",
        "level": 14
      }
    ],
    "sub_options": {
      "spirits": "Puede vincular espíritus no-muertos a sus implementos. Los implementos vinculados a espíritus no-muertos otorgan poderes necrománticos en vez de los estándar de cada escuela. / Can bind undead spirits to implements. Implements bound to undead spirits grant necromantic powers instead of each school's standard powers."
    }
  },
  "amnesiac": {
    "class": "psychic",
    "name": "Amnesiac",
    "name_en": "Amnesiac",
    "name_es": "Amnésico",
    "source": "Occult Adventures",
    "description_es": "Psíquico con memoria suprimida. Lista limitada de conjuros conocidos recuperados mediante meditación diaria. Spell Recollection recupera conjuros adicionales como acción rápida.",
    "description_en": "Psychic with suppressed memory. Limited known spell list recovered through daily meditation. Spell Recollection recovers additional spells as a swift action.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Spell Recollection (Su)",
        "name_en": "Spell Recollection (Su)",
        "description_es": "Como acción rápida una vez por hora, puede intentar recordar un conjuro de su lista que no tenga preparado. Si tiene éxito (tirada de Concentración), lo añade a su lista disponible hoy.",
        "description_en": "As a swift action once per hour, can attempt to recall a spell from their list they don't have prepared. On success (Concentration check), adds it to today's available list.",
        "level": 1
      },
      {
        "name": "Fragmented Magic",
        "name_en": "Fragmented Magic",
        "description_es": "Número de conjuros conocidos reducido, pero puede recuperar cualquier conjuro de nivel adecuado de la lista completa de psíquico mediante Spell Recollection.",
        "description_en": "Reduced number of spells known, but can recover any spell of suitable level from the full psychic list via Spell Recollection.",
        "level": 1
      }
    ]
  },
  "formless_adept": {
    "class": "psychic",
    "name": "Formless Adept",
    "name_en": "Formless Adept",
    "name_es": "Adepto Sin Forma",
    "source": "Occult Adventures",
    "description_es": "Se transforma progresivamente en forma etérea (borrosa, gaseosa, incorpórea). Usa CARs para reserva fénica. Bonificaciones de conjuro mientras es informe.",
    "description_en": "Progressively transforms into an ethereal form (blurred, gaseous, incorporeal). Uses CHA for the phrenic pool. Spell bonuses while formless.",
    "features_removed": [
      "Discipline",
      "Discipline Powers",
      "Phrenic Amplification (1st)",
      "Discipline Spells",
      "Phrenic Amplification (15th)",
      "Remade Self"
    ],
    "features_gained": [
      {
        "name": "Formless (Su)",
        "name_en": "Formless (Su)",
        "description_es": "A nivel 3 puede volverse borroso (20% fallo de conjuro). A nivel 7 gaseoso, a nivel 13 incorpóreo durante rondas/día escalables.",
        "description_en": "At level 3 can become blurred (20% spell miss chance). At level 7 gaseous, at level 13 incorporeal for scaling rounds/day."
      },
      {
        "name": "CHA Phrenic Pool",
        "name_en": "CHA Phrenic Pool",
        "description_es": "La reserva fénica usa CARs en lugar de INT para el número de puntos.",
        "description_en": "The phrenic pool uses CHA instead of INT for point count."
      },
      {
        "name": "Formless Magic (Su)",
        "name_en": "Formless Magic (Su)",
        "description_es": "Cuando está en forma gaseosa o incorpórea, ciertos conjuros no requieren componentes físicos.",
        "description_en": "When in gaseous or incorporeal form, certain spells don't require physical components."
      }
    ]
  },
  "ectoplasmatist": {
    "class": "spiritualist",
    "name": "Ectoplasmatist",
    "name_en": "Ectoplasmatist",
    "name_es": "Ectoplasmatista",
    "source": "Occult Adventures",
    "description_es": "Se infunde con ectoplasma en lugar de convocar un fantasma. Manifiesta latigazos de ectoplasma como armas, combinando conjuros con ataques de látigo.",
    "description_en": "Infuses themself with ectoplasm instead of summoning a phantom. Manifests ectoplasmic lashes as weapons, combining spells with whip attacks.",
    "features_removed": [
      "Etheric Tether",
      "Phantom",
      "Shared/Fused Consciousness",
      "Spiritual Bond",
      "Empowered Consciousness",
      "Bonded Manifestation",
      "Phantom Recall",
      "Dual Bond",
      "Spiritual/Greater Spiritual Interference"
    ],
    "features_gained": [
      {
        "name": "Ectoplasmic Lash (Su)",
        "name_en": "Ectoplasmic Lash (Su)",
        "description_es": "Manifiesta un látigo o tentáculo de ectoplasma como arma natural de 1d6 + ½ nivel con alcance de 3 m. Puede hacer múltiples ataques con él.",
        "description_en": "Manifests an ectoplasmic whip or tentacle as a natural weapon dealing 1d6 + 1/2 level with 10 ft reach. Can make multiple attacks with it.",
        "level": 1
      },
      {
        "name": "Ectoplasmic Armor (Su)",
        "name_en": "Ectoplasmic Armor (Su)",
        "description_es": "Bonificación de armadura natural escalable igual a ½ su nivel de espiritista mientras el ectoplasma esté manifestado.",
        "description_en": "Scaling natural armor bonus equal to 1/2 spiritualist level while the ectoplasm is manifested.",
        "level": 1
      }
    ],
    "sub_options": {
      "spirits": "El espíritu del espiritualista se manifiesta como ectoplasma físico en vez de forma espectral. El espíritu ectoplásmico puede aferrar y mover objetos. Limitación: pierde las habilidades espectrales del espíritu estándar. / Spiritualist's spirit manifests as physical ectoplasm instead of spectral form. Ectoplasmic spirit can grab and move objects. Limitation: loses standard spirit's spectral abilities."
    }
  },
  "involutionist": {
    "class": "spiritualist",
    "name": "Involutionist",
    "name_en": "Involutionist",
    "name_es": "Involucionista",
    "source": "Adventurer's Guide",
    "description_es": "Crea su fantasma desde su propia alma. Usa componentes verbales/somáticos estándar. El fantasma puede otorgar maleficios de bruja.",
    "description_en": "Creates their phantom from their own soul. Uses standard verbal/somatic components. The phantom can grant witch hexes.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Soul Phantom",
        "name_en": "Soul Phantom",
        "description_es": "El fantasma se genera desde la propia alma del espiritista en lugar de vincularse a un espíritu exterior. No puede ser destruido permanentemente mientras el espiritista viva.",
        "description_en": "The phantom is generated from the spiritualist's own soul instead of being bound to an external spirit. Cannot be permanently destroyed while the spiritualist lives."
      },
      {
        "name": "Witch Hexes",
        "name_en": "Witch Hexes",
        "description_es": "El fantasma puede otorgar al espiritista maleficios de bruja en lugar de los poderes de fusión estándar.",
        "description_en": "The phantom can grant the spiritualist witch hexes instead of the standard fusion powers."
      }
    ],
    "sub_options": {
      "spirits": "El espíritu del espiritualista puede ganar hexes de bruja a medida que sube de nivel, en vez de los poderes de espíritu estándar. Cada vez que el espíritu ganaría un nuevo poder, puede elegir un hex en su lugar. / Spiritualist's spirit can gain witch hexes as it levels up instead of standard spirit powers. Each time the spirit would gain a new power, can choose a hex instead.",
      "hexes": "Los hexes están disponibles para el espíritu vinculado, no para el espiritualista directamente. El espiritualista invoca el hex a través del espíritu, requiriendo que el espíritu esté manifiesto. / Hexes are available to the bound spirit, not the spiritualist directly. The spiritualist invokes the hex through the spirit, requiring the spirit to be manifest."
    }
  },
  "sword_saint": {
    "class": "samurai",
    "name": "Sword Saint",
    "name_en": "Sword Saint",
    "name_es": "Santo de la Espada",
    "source": "Ultimate Combat",
    "description_es": "Maestro del iaijutsu: desenvaine y golpe en un solo movimiento. Iaijutsu Challenge añade daño extra al primer golpe. Sin mecánicas de montura.",
    "description_en": "Master of iaijutsu: draw and strike in a single motion. Iaijutsu Challenge adds extra damage on the first hit. No mount mechanics.",
    "features_removed": [
      "Weapon Expertise",
      "Mounted Archer",
      "Demanding Challenge",
      "Resolve",
      "Greater Resolve",
      "True Resolve"
    ],
    "features_gained": [
      {
        "name": "Iaijutsu Challenge (Ex)",
        "name_en": "Iaijutsu Challenge (Ex)",
        "description_es": "Al inicio del combate, si puede desenvainar su arma, puede designar un objetivo como desafío de iaijutsu. El primer golpe exitoso añade daño extra igual a su nivel.",
        "description_en": "At the start of combat, if they can draw their weapon, they can designate a target as an iaijutsu challenge. The first successful hit adds extra damage equal to their level.",
        "level": 1
      },
      {
        "name": "Iaijutsu Focus (Ex)",
        "name_en": "Iaijutsu Focus (Ex)",
        "description_es": "Puede realizar un ataque de oportunidad en el turno del enemigo cuando este se mueve hacia él, atacando mientras desenvaina.",
        "description_en": "Can make an attack of opportunity on the enemy's turn when they move toward them, attacking while drawing the weapon.",
        "level": 3
      },
      {
        "name": "Certain Strike (Ex)",
        "name_en": "Certain Strike (Ex)",
        "description_es": "Puede declarar Certain Strike antes de atacar para relanzar el dado de daño y quedarse con el mejor resultado.",
        "description_en": "Can declare Certain Strike before attacking to reroll the damage die and keep the better result.",
        "level": 9
      }
    ]
  },
  "warrior_of_the_holy_land": {
    "class": "samurai",
    "name": "Warrior of the Holy Land",
    "name_en": "Warrior of the Holy Land",
    "name_es": "Guerrero de la Tierra Santa",
    "source": "Ultimate Combat",
    "description_es": "Samurái sin montura dedicado a defender tierras sagradas. Gana poderes divinos similares al inquisidor; su poder viene de la tierra y el deber.",
    "description_en": "Mountless samurai dedicated to defending holy lands. Gains divine powers similar to the inquisitor; their power comes from the land and duty.",
    "features_removed": [
      "Mount",
      "Expert Trainer",
      "Mounted Archer"
    ],
    "features_gained": [
      {
        "name": "Holy Judgment (Su)",
        "name_en": "Holy Judgment (Su)",
        "description_es": "Gana la capacidad Juicio del Inquisidor con un número de usos por día igual a ½ nivel de samurái. Puede activar 1 juicio por uso.",
        "description_en": "Gains the Inquisitor's Judgment ability with uses per day equal to 1/2 samurai level. Can activate 1 judgment per use.",
        "level": 1
      },
      {
        "name": "Blessed (Ex)",
        "name_en": "Blessed (Ex)",
        "description_es": "Gana bonificador de competencia a salvaciones igual al modificador de SAB cuando defiende tierras designadas como sagradas.",
        "description_en": "Gains a competence bonus on saves equal to WIS modifier when defending lands designated as holy.",
        "level": 3
      }
    ]
  },
  "poisoner": {
    "class": "ninja",
    "name": "Poisoner",
    "name_en": "Poisoner",
    "name_es": "Envenenador",
    "source": "Ultimate Combat",
    "description_es": "Sacrifica cuatro poderes ki por maestría avanzada en venenos. Puede crear venenos con sus manos, inmunidad a propios venenos, venenos de efecto instantáneo.",
    "description_en": "Sacrifices four ki powers for advanced poison mastery. Can create poisons with their hands, immunity to own poisons, instant-effect poisons.",
    "features_removed": [
      "Ki Powers (4th, 8th, 10th, 16th)"
    ],
    "features_gained": [
      {
        "name": "Poison Touch (Su)",
        "name_en": "Poison Touch (Su)",
        "description_es": "Puede crear un veneno de toque una vez por día que aplica daño de atributo. El número de usos y la potencia escalan con el nivel.",
        "description_en": "Can create a touch poison once per day that deals ability damage. Uses and potency scale with level.",
        "level": 4
      },
      {
        "name": "Poison Immunity (Ex)",
        "name_en": "Poison Immunity (Ex)",
        "description_es": "A nivel 8, inmune a todos los venenos propios. A nivel 12, inmune a todos los venenos.",
        "description_en": "At level 8, immune to own poisons. At level 12, immune to all poisons.",
        "level": 8
      },
      {
        "name": "Instant Poison (Su)",
        "name_en": "Instant Poison (Su)",
        "description_es": "Puede aplicar venenos en armas como acción rápida en lugar de estándar.",
        "description_en": "Can apply poisons to weapons as a swift action instead of a standard action.",
        "level": 10
      }
    ]
  },
  "deadly_courtesan": {
    "class": "ninja",
    "name": "Deadly Courtesan",
    "name_en": "Deadly Courtesan",
    "name_es": "Cortesana Letal",
    "source": "Ultimate Intrigue",
    "class_skills_add": [
      "bluff",
      "disguise",
      "perform"
    ],
    "description_es": "Ninja social infiltrada en altas esferas. Sacrifica progresión de ataque furtivo por talentos de intriga social. Elimina objetivos sin levantar sospechas.",
    "description_en": "Social ninja infiltrating high society. Sacrifices sneak attack progression for social intrigue talents. Eliminates targets without raising suspicion.",
    "features_removed": [
      "Sneak Attack 2d6",
      "Sneak Attack 5d6",
      "Uncanny Dodge",
      "Improved Uncanny Dodge"
    ],
    "features_gained": [
      {
        "name": "Social Graces (Ex)",
        "name_en": "Social Graces (Ex)",
        "description_es": "Gana bonificaciones a habilidades sociales escalables cuando se infiltra en un grupo o institución durante tiempo.",
        "description_en": "Gains scaling bonuses to social skills when infiltrating a group or institution over time.",
        "level": 1
      },
      {
        "name": "Courtly Killer (Ex)",
        "name_en": "Courtly Killer (Ex)",
        "description_es": "Puede aplicar ataque furtivo a víctimas que hayan consumido veneno de su preparación, aunque estén alertas.",
        "description_en": "Can apply sneak attack to victims who have consumed poison of their making, even if alert.",
        "level": 4
      }
    ]
  },
  "iron_tyrant": {
    "class": "antipaladin",
    "name": "Iron Tyrant",
    "name_en": "Iron Tyrant",
    "name_es": "Tirano de Hierro",
    "source": "Ultimate Combat",
    "description_es": "Especializado en armadura completa y terror. Capacidades basadas en armadura: Spellsurge, Armor of Damnation. Sin curación negativa pero con defensa aplastante.",
    "description_en": "Specialized in full plate and terror. Armor-based abilities: Spellsurge, Armor of Damnation. No negative channeling but with crushing defense.",
    "features_removed": [
      "Channel Negative Energy",
      "Cruelties",
      "Aura of Despair (standard)",
      "Unholy Champion"
    ],
    "features_gained": [
      {
        "name": "Armor of Damnation (Su)",
        "name_en": "Armor of Damnation (Su)",
        "description_es": "Su armadura otorga bonificación de escudo adicional contra criaturas del bien igual a ½ su nivel de antipaladín.",
        "description_en": "Their armor grants an additional shield bonus against good creatures equal to 1/2 antipaladin level."
      },
      {
        "name": "Spellsurge (Su)",
        "name_en": "Spellsurge (Su)",
        "description_es": "Puede lanzar conjuros de contacto a través de ataques de armadura cargada (como embestidas o atropellos) como acción gratuita.",
        "description_en": "Can cast touch spells through charged armor attacks (like bull rushes or overruns) as a free action.",
        "level": 4
      },
      {
        "name": "Heavy Dominance (Ex)",
        "name_en": "Heavy Dominance (Ex)",
        "description_es": "No sufre penalizadores de velocidad por armadura pesada. La CA de armadura de su armadura pesada aumenta +2.",
        "description_en": "Does not suffer speed penalties from heavy armor. The armor AC of their heavy armor increases by +2.",
        "level": 8
      }
    ]
  },
  "dread_vanguard": {
    "class": "antipaladin",
    "name": "Dread Vanguard",
    "name_en": "Dread Vanguard",
    "name_es": "Vanguardia del Terror",
    "source": "Inner Sea Gods",
    "description_es": "Portador de estandarte oscuro. Irradia miedo en área. Su presencia debilita la voluntad de los aliados del bien. Líder de ejércitos del mal.",
    "description_en": "Bearer of the dark standard. Radiates fear in an area. Their presence weakens the will of good-aligned enemies. Leader of evil armies.",
    "features_removed": [
      "Touch of Corruption",
      "Aura of Despair (standard)",
      "Unholy Champion"
    ],
    "features_gained": [
      {
        "name": "Dread Banner (Su)",
        "name_en": "Dread Banner (Su)",
        "description_es": "Puede enarbolar un estandarte oscuro que irradia Aura de Miedo en radio igual a 9 m × la mitad de su nivel.",
        "description_en": "Can raise a dark standard that radiates Aura of Fear in a radius of 30 ft × half their level.",
        "level": 5
      },
      {
        "name": "Terrifying Charge (Su)",
        "name_en": "Terrifying Charge (Su)",
        "description_es": "Al cargar bajo su estandarte, todos los enemigos en 9 m deben superar una tirada de Voluntad o quedar asustados durante 1d4 rondas.",
        "description_en": "When charging beneath their standard, all enemies within 30 ft must make a Will save or become frightened for 1d4 rounds.",
        "level": 11
      }
    ]
  },
  "adaptive_shifter": {
    "class": "shifter",
    "name": "Adaptive Shifter",
    "name_en": "Adaptive Shifter",
    "name_es": "Cambiante Adaptable",
    "source": "Ultimate Wilderness",
    "description_es": "Sus aspectos animales evolucionan con el nivel. Puede cambiar las habilidades de su aspecto activo entre encuentros. Mayor versatilidad táctica.",
    "description_en": "Their animal aspects evolve with level. Can change the abilities of their active aspect between encounters. Greater tactical versatility.",
    "features_removed": [
      "Chimeric Aspect",
      "Shifter's Fury"
    ],
    "features_gained": [
      {
        "name": "Adaptive Aspect (Su)",
        "name_en": "Adaptive Aspect (Su)",
        "description_es": "Una vez por día puede recalibrar las habilidades de su aspecto activo, eligiendo qué capacidades activa de entre las disponibles para ese aspecto.",
        "description_en": "Once per day can recalibrate the abilities of their active aspect, choosing which capabilities to activate from those available for that aspect.",
        "level": 1
      },
      {
        "name": "Improved Aspect Evolution",
        "name_en": "Improved Aspect Evolution",
        "description_es": "Los aspectos del cambiante adaptable evolucionan más rápido, obteniendo la mejora de nivel más alto a niveles impares.",
        "description_en": "The adaptive shifter's aspects evolve faster, gaining the higher-level improvement at odd levels."
      }
    ],
    "sub_options": {
      "evolutions": "En vez de formas de animal estándar, puede adaptar evolutivamente sus transformaciones. Gana puntos de evolución similares al eidolón del convocador para personalizar sus formas de cambio. A nivel 20 puede mantener múltiples adaptaciones simultáneamente. / Instead of standard animal forms, can evolutionarily adapt transformations. Gains evolution points similar to a summoner's eidolon to customize shift forms. At level 20 can maintain multiple adaptations simultaneously."
    }
  },
  "wild_effigy": {
    "class": "shifter",
    "name": "Wild Effigy",
    "name_en": "Wild Effigy",
    "name_es": "Efigie Salvaje",
    "source": "Ultimate Wilderness",
    "description_es": "Se transforma en formas de enjambre o agrupaciones de criaturas. Resistencias basadas en constituyentes. Ataques de área en forma de enjambre.",
    "description_en": "Transforms into swarm forms or creature clusters. Resistances based on constituents. Area attacks in swarm form.",
    "features_removed": [
      "Shifter Claws",
      "Chimeric Aspect"
    ],
    "features_gained": [
      {
        "name": "Swarm Form (Su)",
        "name_en": "Swarm Form (Su)",
        "description_es": "Puede tomar una forma de enjambre que otorga resistencia a daño físico no mágico, inmunidad a efectos de flanqueo y ataques de área de enjambre.",
        "description_en": "Can take a swarm form that grants resistance to nonmagical physical damage, immunity to flanking effects, and swarm area attacks.",
        "level": 1
      },
      {
        "name": "Effigy Aspect (Su)",
        "name_en": "Effigy Aspect (Su)",
        "description_es": "Sus aspectos animales se manifiestan como cualidades del enjambre (enjambre de ratas para rapidez, abejas para veneno, etc.).",
        "description_en": "Their animal aspects manifest as swarm qualities (rat swarm for speed, bee swarm for poison, etc.).",
        "level": 1
      }
    ]
  },
  "brute": {
    "class": "vigilante",
    "name": "Brute",
    "name_en": "Brute",
    "name_es": "Bruto",
    "source": "Ultimate Intrigue",
    "description_es": "Su identidad de vigilante es una forma monstruosa. Gana poderes tipo furia en lugar de talentos sociales. Doble vida literalmente bestial.",
    "description_en": "Their vigilante identity is a monstrous form. Gains rage-like powers instead of social talents. A literal beastly double life.",
    "features_removed": [
      "Vigilante Specialization (Avenger only)",
      "Social Talents (2nd, 8th, 14th)"
    ],
    "features_gained": [
      {
        "name": "Monster Form (Ex)",
        "name_en": "Monster Form (Ex)",
        "description_es": "Su identidad de vigilante es una forma física monstruosa (hombre bestia). Gana bonificadores de FUE y naturalmente, y garras o mordiscos como arma natural.",
        "description_en": "Their vigilante identity is a monstrous physical form (beastman). Gains STR bonuses and natural armor, plus claws or bite as natural weapons.",
        "level": 1
      },
      {
        "name": "Brute Talents",
        "name_en": "Brute Talents",
        "description_es": "En lugar de talentos sociales gana poderes de furia: puede seleccionar poderes de furia de bárbaro como talentos de bruto.",
        "description_en": "Instead of social talents gains rage powers: can select barbarian rage powers as brute talents.",
        "level": 2
      }
    ]
  },
  "wildsoul": {
    "class": "vigilante",
    "name": "Wildsoul",
    "name_en": "Wildsoul",
    "name_es": "Alma Salvaje",
    "source": "Ultimate Intrigue",
    "description_es": "Incorpora el sistema de Enfoque Animal del Cazador. Aplica enfoques animales en ambas identidades.",
    "description_en": "Incorporates the Hunter's Animal Focus system. Applies animal foci in both identities.",
    "features_removed": [
      "Vigilante Talent (8th level)"
    ],
    "features_gained": [
      {
        "name": "Animal Focus (Ex)",
        "name_en": "Animal Focus (Ex)",
        "description_es": "Obtiene la capacidad Animal Focus del cazador a nivel 2. Puede tener 1 enfoque activo (2 a nivel 8) aplicado a sí mismo en cualquier identidad.",
        "description_en": "Gains the hunter's Animal Focus ability at level 2. Can have 1 active focus (2 at level 8) applied to themself in either identity.",
        "level": 8
      },
      {
        "name": "Wild Talents",
        "name_en": "Wild Talents",
        "description_es": "Algunos talentos de vigilante se reemplazan por capacidades adicionales de enfoque animal.",
        "description_en": "Some vigilante talents are replaced with additional animal focus capabilities.",
        "level": 8
      }
    ]
  },
  "scaled_fist": {
    "class": "unchained_monk",
    "name": "Scaled Fist",
    "name_en": "Scaled Fist",
    "name_es": "Puño Escamado",
    "source": "Advanced Class Guide",
    "description_es": "Monje de dragón que usa Carisma en lugar de Sabiduría para CA y ki. Dragon Style automático. Mecánicas dracónicas: terror, aliento ki, resistencias.",
    "description_en": "Draconic monk that uses Charisma instead of Wisdom for AC and ki. Automatic Dragon Style. Draconic mechanics: fear, ki breath, resistances.",
    "features_removed": [
      "Stunning Fist",
      "Diamond Soul"
    ],
    "features_gained": [
      {
        "name": "CHA-based AC Bonus",
        "name_en": "CHA-based AC Bonus",
        "description_es": "Usa CARs en lugar de SAB para la bonificación de CA cuando está sin armadura.",
        "description_en": "Uses CHA instead of WIS for the AC bonus when unarmored.",
        "level": 1
      },
      {
        "name": "CHA-based Ki Pool",
        "name_en": "CHA-based Ki Pool",
        "description_es": "La reserva ki se basa en CARs en lugar de SAB.",
        "description_en": "The ki pool is based on CHA instead of WIS.",
        "level": 4
      },
      {
        "name": "Dragon Ferocity (Ex)",
        "name_en": "Dragon Ferocity (Ex)",
        "description_es": "Puede gastar 1 punto de ki para infundir terror dracónico: el objetivo debe superar Voluntad o quedarse asustado 1d4+1 rondas.",
        "description_en": "Can spend 1 ki point to infuse draconic terror: target must succeed on a Will save or be frightened for 1d4+1 rounds.",
        "level": 1
      },
      {
        "name": "Dragon Style (bonus feat)",
        "name_en": "Dragon Style (bonus feat)",
        "description_es": "Obtiene Dragon Style de forma automática a nivel 1 sin requisitos previos.",
        "description_en": "Gains Dragon Style automatically at level 1 without prerequisites.",
        "level": 1
      }
    ]
  },
  "zen_archer": {
    "class": "unchained_monk",
    "name": "Zen Archer",
    "name_en": "Zen Archer",
    "name_es": "Arquero Zen",
    "source": "Advanced Player's Guide",
    "description_es": "El arco es su camino de meditación marcial. Flurry of Blows con arcos, Perfect Strike para elegir mejor dado, y ki para alcance extendido.",
    "description_en": "The bow is their path of martial meditation. Flurry of Blows with bows, Perfect Strike to pick the better die, and ki for extended range.",
    "features_removed": [
      "Flurry of Blows (melee)",
      "Unarmed Strike",
      "Evasion",
      "Maneuver Training",
      "Fast Movement"
    ],
    "features_gained": [
      {
        "name": "Flurry of Blows (archery)",
        "name_en": "Flurry of Blows (archery)",
        "description_es": "Puede usar Lluvia de Golpes con arco corto o largo, arco compuesto, y arco de monje.",
        "description_en": "Can use Flurry of Blows with shortbow, longbow, composite bow, and monk bow.",
        "level": 1
      },
      {
        "name": "Perfect Strike (Ex)",
        "name_en": "Perfect Strike (Ex)",
        "description_es": "Una vez por turno puede relanzar el dado de ataque con el arco; si tiene éxito en ambos, elige el resultado. También puede relanzar el daño.",
        "description_en": "Once per turn can reroll the bow's attack die; if both succeed, choose the result. Can also reroll damage.",
        "level": 1
      },
      {
        "name": "Ki Archery (Su)",
        "name_en": "Ki Archery (Su)",
        "description_es": "Gastando 1 ki puede aumentar el alcance del arco en 30 pies.",
        "description_en": "By spending 1 ki can increase the bow's range by 30 feet.",
        "level": 3
      },
      {
        "name": "Bonus Feats (archery)",
        "name_en": "Bonus Feats (archery)",
        "description_es": "Los dones adicionales de monje deben ser dones de arco (Point-Blank Shot, Precise Shot, etc.).",
        "description_en": "The monk bonus feats must be archery feats (Point-Blank Shot, Precise Shot, etc.).",
        "level": 1
      }
    ]
  },
  "scout_unchained_rogue": {
    "class": "unchained_rogue",
    "name": "Scout",
    "name_en": "Scout",
    "name_es": "Explorador",
    "source": "Advanced Player's Guide",
    "description_es": "Aplica ataque furtivo en carga si se ha movido 10+ pies. A nivel 8 aplica ataque furtivo cualquier round con movimiento de 10+ pies.",
    "description_en": "Applies sneak attack on a charge if moved 10+ feet. At level 8 applies sneak attack any round with 10+ feet of movement.",
    "features_removed": [
      "Finesse Training (3rd level)",
      "Danger Sense (3rd level)"
    ],
    "features_gained": [
      {
        "name": "Scout's Charge (Ex)",
        "name_en": "Scout's Charge (Ex)",
        "description_es": "Al cargar (habiendo movido 10+ pies antes), aplica ataque furtivo al objetivo como si estuviera flanqueado.",
        "description_en": "When charging (having moved 10+ feet first), applies sneak attack to the target as if it were flanked.",
        "level": 3
      },
      {
        "name": "Skirmisher (Ex)",
        "name_en": "Skirmisher (Ex)",
        "description_es": "A nivel 8, cualquier round en que se mueva 10+ pies aplica ataque furtivo en su primer ataque de ese round.",
        "description_en": "At level 8, any round they move 10+ feet they apply sneak attack on their first attack that round.",
        "level": 8
      }
    ]
  },
  "thug": {
    "class": "unchained_rogue",
    "name": "Thug",
    "name_en": "Thug",
    "name_es": "Matón",
    "source": "Advanced Player's Guide",
    "description_es": "Pícaro de fuerza bruta. Ataque furtivo aplica Staggered. Frightening usa Intimidar como parte de ataque. Brutal Beating penaliza permanentemente a asustados.",
    "description_en": "Brute-force rogue. Sneak attack applies Staggered. Frightening uses Intimidate as part of an attack. Brutal Beating permanently penalizes frightened targets.",
    "features_removed": [
      "Finesse Training",
      "Trapfinding"
    ],
    "features_gained": [
      {
        "name": "Frightening (Ex)",
        "name_en": "Frightening (Ex)",
        "description_es": "Puede usar Intimidar para asustar a un enemigo como parte de una acción estándar de ataque (en lugar de acción estándar separada).",
        "description_en": "Can use Intimidate to frighten an enemy as part of a standard attack action (instead of a separate standard action).",
        "level": 1
      },
      {
        "name": "Brutal Beating (Ex)",
        "name_en": "Brutal Beating (Ex)",
        "description_es": "Cuando aplica ataque furtivo, el objetivo asustado queda Staggered (aturdido leve) durante 1d4+1 rondas en lugar del efecto normal de ataque furtivo.",
        "description_en": "When applying sneak attack, the frightened target becomes Staggered for 1d4+1 rounds instead of the normal sneak attack effect.",
        "level": 1
      }
    ]
  },
  "titan_mauler_unchained": {
    "class": "unchained_barbarian",
    "name": "Titan Mauler",
    "name_en": "Titan Mauler",
    "name_es": "Machacador Titán",
    "source": "Ultimate Combat",
    "description_es": "Puede blandir armas gigantescas con penalizador reducido. Titanic Rage aumenta tamaño durante furia. Énfasis en daño bruto sobre defensa.",
    "description_en": "Can wield gigantic weapons with reduced penalty. Titanic Rage increases size during rage. Emphasis on raw damage over defense.",
    "features_removed": [],
    "features_gained": [
      {
        "name": "Big Game Hunter (Ex)",
        "name_en": "Big Game Hunter (Ex)",
        "description_es": "+1 a tiradas de daño cuerpo a cuerpo contra criaturas de categoría de tamaño mayor.",
        "description_en": "+1 to melee damage rolls against creatures of a larger size category.",
        "level": 1
      },
      {
        "name": "Massive Weapons (Ex)",
        "name_en": "Massive Weapons (Ex)",
        "description_es": "Puede blandir armas de una categoría mayor con penalizador –2 (en lugar de –4). A nivel 3 puede hacerlo sin penalizador.",
        "description_en": "Can wield weapons one size category larger with a –2 penalty (instead of –4). At level 3 can do so without penalty.",
        "level": 1
      },
      {
        "name": "Titanic Rage (Su)",
        "name_en": "Titanic Rage (Su)",
        "description_es": "Durante la furia puede aumentar su tamaño una categoría (como Agrandar Persona). Esto cancela otros efectos de tamaño menores.",
        "description_en": "While raging can increase size by one category (as Enlarge Person). This overrides other smaller size effects.",
        "level": 2
      }
    ]
  },
  "elemental_kin": {
    "class": "unchained_barbarian",
    "name": "Elemental Kin",
    "name_en": "Elemental Kin",
    "name_es": "Pariente Elemental",
    "source": "Inner Sea Races",
    "description_es": "Solo para enanos. Reemplaza Trap Sense por resistencia elemental. Poderes de furia con temática de fuego, tierra, agua o aire según herencia enana.",
    "description_en": "Dwarves only. Replaces Trap Sense with elemental resistance. Rage powers themed around fire, earth, water, or air based on dwarven heritage.",
    "features_removed": [
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Elemental Resistance (Ex)",
        "name_en": "Elemental Resistance (Ex)",
        "description_es": "Resistencia 5 a un elemento (fuego, frío, electricidad o ácido) según el linaje elemental enano del personaje. Escala a 10 a nivel 8.",
        "description_en": "Resistance 5 to an element (fire, cold, electricity, or acid) based on the character's dwarven elemental lineage. Scales to 10 at level 8.",
        "level": 3
      },
      {
        "name": "Elemental Rage Powers",
        "name_en": "Elemental Rage Powers",
        "description_es": "Los poderes de furia disponibles incluyen poderes elementales únicos (ráfaga de llamas, terreno dificultoso de tierra, etc.) basados en el elemento elegido.",
        "description_en": "Available rage powers include unique elemental powers (flame burst, earth difficult terrain, etc.) based on the chosen element.",
        "level": 2
      }
    ]
  },
  "monster_knight": {
    "class": "unchained_summoner",
    "name": "Monster Knight",
    "name_en": "Monster Knight",
    "name_es": "Caballero Monstruo",
    "source": "Legendary Games (3rd Party)",
    "saves": {
      "fort": "good",
      "ref": "bad",
      "will": "good"
    },
    "skill_points": 4,
    "class_skills": [
      "bluff",
      "climb",
      "craft",
      "diplomacy",
      "handle_animal",
      "intimidate",
      "profession",
      "ride",
      "sense_motive",
      "swim"
    ],
    "description_es": "Convocador desencadenado que renuncia completamente a su magia por convertirse en caballero montado en su eidolón. Combina sistema de Caballero (Desafío + Orden) con montura eidolón. Sin conjuros, máximo potencial de carga montada.",
    "description_en": "Unchained summoner who gives up all magic to become a knight mounted on their eidolon. Combines the Cavalier system (Challenge + Order) with an eidolon mount. No spells, maximum mounted charge potential.",
    "features_removed": [
      "Spellcasting (all spells)",
      "Summon Monster",
      "Bond Senses",
      "Transposition",
      "Merge Forms",
      "Shield Ally",
      "Greater Shield Ally",
      "Gate",
      "Twin Eidolon"
    ],
    "features_gained": [
      {
        "name": "Challenge (Ex)",
        "name_en": "Challenge (Ex)",
        "level": 1,
        "description_es": "1/día a nivel 1, +1/día cada 3 niveles (máx 7/día a nivel 19). Daño extra igual al nivel en ataques cuerpo a cuerpo contra el objetivo. A niveles 7/13/19 gana +1/+2/+3 a ataque vs el objetivo.",
        "description_en": "1/day at level 1, +1/day every 3 levels (max 7/day at level 19). Extra damage equal to level on melee attacks against the target. At levels 7/13/19 gains +1/+2/+3 to attacks vs. the target."
      },
      {
        "name": "Eidolon Mount (Ex)",
        "name_en": "Eidolon Mount (Ex)",
        "level": 1,
        "description_es": "Eidolón modificado con evolución de montura de nivel 1. Cura naturalmente 3 PG × DG / día. Debe usar forma cuadrúpeda o serpentina. Puede renunciar a todos los ataques del eidolón para obtener la evolución Grande gratis.",
        "description_en": "Modified eidolon with Mount evolution at level 1. Naturally heals 3 HP × HD / day. Must use quadruped or serpentine form. Can forgo all eidolon attacks to get Large evolution free."
      },
      {
        "name": "Life Link (Su)",
        "name_en": "Life Link (Su)",
        "level": 1,
        "description_es": "Sin cambios respecto al convocador desencadenado base.",
        "description_en": "Unchanged from the base unchained summoner."
      },
      {
        "name": "Order (Ex)",
        "name_en": "Order (Ex)",
        "level": 1,
        "description_es": "Obtiene la Orden del Caballero: edictos, beneficios de desafío de orden, bonificaciones de habilidad. Habilidades adicionales de orden a niveles 2, 8 y 15.",
        "description_en": "Gains the Cavalier's Order: edicts, order challenge benefits, skill bonuses. Additional order abilities at levels 2, 8, and 15."
      },
      {
        "name": "Focused Charge (Ex)",
        "name_en": "Focused Charge (Ex)",
        "level": 3,
        "description_es": "+4 a tiradas de ataque en carga montada (en lugar de +2). No sufre penalizador a CA después de cargar mientras está montado.",
        "description_en": "+4 to attack rolls on mounted charge (instead of +2). No AC penalty after charging while mounted."
      },
      {
        "name": "Monster Tactics (Ex)",
        "name_en": "Monster Tactics (Ex)",
        "level": 5,
        "description_es": "Don de combate o trabajo en equipo adicional a niveles 5, 12 y 17. El eidolón montura obtiene automáticamente cualquier don de trabajo en equipo que aprenda el caballero, ignorando requisitos.",
        "description_en": "Additional combat or teamwork feat at levels 5, 12, and 17. The mount eidolon automatically gains any teamwork feat the knight learns, ignoring prerequisites."
      },
      {
        "name": "Mascot (Ex)",
        "name_en": "Mascot (Ex)",
        "level": 9,
        "description_es": "Con el eidolón consciente y visible, todos los aliados en 18 m reciben +2 moral a salvaciones contra miedo y +1 moral a ataques en carga.",
        "description_en": "With the eidolon conscious and visible, all allies within 60 ft gain +2 morale to saves against fear and +1 morale to charge attacks."
      },
      {
        "name": "Mighty Charge (Ex)",
        "name_en": "Mighty Charge (Ex)",
        "level": 11,
        "description_es": "Duplica el rango de amenaza en carga montada. Tras ataque exitoso puede hacer una maniobra gratuita (empuje/desarmar/destrozar/derribar) sin provocar AoO.",
        "description_en": "Doubles threat range on mounted charge. After a successful hit, can make a free maneuver (bull rush/disarm/sunder/trip) without provoking AoO."
      },
      {
        "name": "Supreme Charge (Ex)",
        "name_en": "Supreme Charge (Ex)",
        "level": 20,
        "description_es": "Carga montada: doble daño (triple con lanza). Con Spirited Charge: triple (cuádruple con lanza). Crítico confirmado en carga: objetivo aturdido 1d4 rondas (Voluntad CD 10+BAB base = tambaleante).",
        "description_en": "Mounted charge: double damage (triple with a lance). With Spirited Charge: triple (quadruple with a lance). Confirmed crit on charge: target stunned 1d4 rounds (Will DC 10+base BAB = staggered)."
      }
    ],
    "sub_options": {
      "evolutions": "El eidolón del caballero monstruo actúa como montura de combate. Las evoluciones disponibles se limitan a las apropiadas para montura: tamaño, capacidad de carga, resistencia. Límite en evoluciones de ataque: pocas. / The monster knight's eidolon acts as a combat mount. Available evolutions limited to mount-appropriate: size, carry capacity, resilience. Limit on attack evolutions: few.",
      "spirits": "El vínculo de montura aporta un espíritu de compañero animal a través del eidolón. El jinete y la montura comparten un espíritu de vínculo de caballería. / The mount bond brings an animal companion spirit through the eidolon. Rider and mount share a cavalry bond spirit."
    }
  },
  "shadow_caller": {
    "class": "unchained_summoner",
    "name": "Shadow Caller",
    "name_en": "Shadow Caller",
    "name_es": "Invocador de Sombras",
    "source": "Pathfinder RPG (3rd Party - Rite Publishing)",
    "description_es": "Convoca criaturas del Plano de Sombra en lugar de los planos estándar. Su eidolón tiene subtipo Sombra con resistencia a energía negativa y visión en penumbra mejorada.",
    "description_en": "Summons creatures from the Shadow Plane instead of standard planes. Their eidolon has the Shadow subtype with negative energy resistance and improved low-light vision.",
    "features_removed": [
      "Summon Monster (standard list)"
    ],
    "features_gained": [
      {
        "name": "Shadow Conjuration",
        "name_en": "Shadow Conjuration",
        "description_es": "La lista de Summon Monster se reemplaza por criaturas de sombra equivalentes. Las criaturas convocadas tienen el subtipo Sombra y resistencia a daño de energía negativa.",
        "description_en": "The Summon Monster list is replaced with equivalent shadow creatures. Summoned creatures have the Shadow subtype and negative energy damage resistance.",
        "level": 1
      },
      {
        "name": "Shadow Eidolon",
        "name_en": "Shadow Eidolon",
        "description_es": "El eidolón tiene el subtipo Sombra: resistencia a frío 5, visión en la oscuridad, y puede ocultarse en áreas de penumbra (Sigilo como si fueran oscuras).",
        "description_en": "The eidolon has the Shadow subtype: cold resistance 5, darkvision, and can hide in dim-light areas (Stealth as if they were dark).",
        "level": 1
      }
    ]
  },
  "wild_rager": {
    "class": "barbarian",
    "name": "Wild Rager",
    "name_en": "Wild Rager",
    "name_es": "Rabioso Salvaje",
    "source": "Ultimate Combat",
    "description_es": "Bárbaro cuya furia se descontrola: gana ataque extra arriesgado y puede entrar en confusión al matar enemigos, sacrificando esquiva sobrenatural por agresividad ciega.",
    "description_en": "A barbarian whose rage spirals out of control, gaining a reckless extra attack and risking confusion when felling enemies, trading uncanny dodge for blind aggression.",
    "features_removed": [
      "Uncanny Dodge (2nd)",
      "Improved Uncanny Dodge (5th)"
    ],
    "features_gained": [
      {
        "name": "Wild Fighting (Ex)",
        "name_en": "Wild Fighting (Ex)",
        "description_es": "En ataques completos durante furia, gana un ataque adicional con su BAB más alto, pero sufre -2 a tiradas de ataque y -4 a CA hasta su próximo turno.",
        "description_en": "On full-attack actions while raging, gains one extra attack at her highest BAB, but suffers -2 on attack rolls and -4 to AC until her next turn.",
        "level": 1
      },
      {
        "name": "Uncontrolled Rage (Ex)",
        "name_en": "Uncontrolled Rage (Ex)",
        "description_es": "Al reducir un enemigo a 0 PG durante furia, debe superar una salvación de Voluntad o quedar confusa, atacando a la criatura más cercana.",
        "description_en": "When reducing a foe to 0 HP during rage, must succeed a Will save or become confused, attacking the nearest creature.",
        "level": 2
      }
    ]
  },
  "drunken_brute": {
    "class": "barbarian",
    "name": "Drunken Brute",
    "name_en": "Drunken Brute",
    "name_es": "Bruto Borracho",
    "source": "Advanced Player's Guide",
    "description_es": "Bárbaro que canaliza su furia mediante el alcohol, sacrificando velocidad por la capacidad de prolongar su furia bebiendo en combate.",
    "description_en": "A barbarian who channels rage through alcohol, sacrificing speed for the ability to extend rage by drinking mid-combat.",
    "features_removed": [
      "Fast Movement"
    ],
    "features_gained": [
      {
        "name": "Raging Drunk (Ex)",
        "name_en": "Raging Drunk (Ex)",
        "description_es": "Durante la furia puede consumir una poción o bebida alcohólica como acción de movimiento sin provocar ataques de oportunidad. Mantiene la furia ese asalto sin gastar uno de sus rondas diarias, pero al terminar queda mareada 1 asalto adicional por cada bebida.",
        "description_en": "While raging she can drink a potion or alcoholic beverage as a move action without provoking. Sustains rage that round without spending a daily round, but each drink leaves her nauseated for 1 round when rage ends.",
        "level": 1
      }
    ]
  },
  "savage_barbarian": {
    "class": "barbarian",
    "name": "Savage Barbarian",
    "name_en": "Savage Barbarian",
    "name_es": "Bárbaro Salvaje",
    "source": "Advanced Player's Guide",
    "description_es": "Bárbaro que prospera sin armadura, ganando bonificaciones defensivas y de coraje cuando lucha desnudo, en lugar de detectar trampas y RD convencional.",
    "description_en": "A barbarian who thrives without armor, gaining defensive and courage bonuses while fighting naked instead of trap sense and conventional DR.",
    "features_removed": [
      "Trap Sense (3rd)",
      "Damage Reduction (7th)"
    ],
    "features_gained": [
      {
        "name": "Naked Courage (Ex)",
        "name_en": "Naked Courage (Ex)",
        "description_es": "A nivel 3, sin armadura (escudos permitidos), gana +1 de bono de esquiva a CA y +1 de bono de moral en salvaciones contra miedo. Aumenta +1 cada 6 niveles.",
        "description_en": "At 3rd level, while wearing no armor (shields allowed), gains a +1 dodge bonus to AC and +1 morale bonus on saves vs fear. Increases by +1 every 6 levels.",
        "level": 3
      },
      {
        "name": "Natural Toughness (Ex)",
        "name_en": "Natural Toughness (Ex)",
        "description_es": "A nivel 7, sin armadura, gana +1 de bono de armadura natural a CA. Aumenta +1 cada 3 niveles más allá del 7.",
        "description_en": "At 7th level, while unarmored, gains +1 natural armor bonus to AC. Increases by +1 every 3 levels beyond 7th.",
        "level": 7
      }
    ]
  },
  "archer_fighter": {
    "class": "fighter",
    "name": "Archer",
    "name_en": "Archer",
    "name_es": "Arquero",
    "source": "Advanced Player's Guide",
    "description_es": "Guerrero especializado en arcos: cambia coraje, entrenamiento de armadura y armas por bonos al combate a distancia y trucos con el arco.",
    "description_en": "A bow specialist fighter who trades bravery, armor and weapon training for ranged combat bonuses and bow trick shots.",
    "features_removed": [
      "Bravery (2nd)",
      "Armor Training 1-4",
      "Weapon Training 1-4"
    ],
    "features_gained": [
      {
        "name": "Hawkeye (Ex)",
        "name_en": "Hawkeye (Ex)",
        "description_es": "A nivel 2, +1 a Avistar y el incremento de alcance de sus arcos aumenta 1.5 m. Mejora cada 4 niveles.",
        "description_en": "At 2nd level, +1 on Perception checks and bow range increment increases by 5 ft. Improves every 4 levels.",
        "level": 2
      },
      {
        "name": "Trick Shot (Ex)",
        "name_en": "Trick Shot (Ex)",
        "description_es": "A nivel 3, puede ejecutar maniobras (desarmar, fintar, romper, etc.) con el arco a 9 m con -4. Gana opciones adicionales cada 4 niveles.",
        "description_en": "At 3rd level, can perform maneuvers (disarm, feint, sunder, etc.) with the bow at 30 ft with -4. Gains additional options every 4 levels.",
        "level": 3
      },
      {
        "name": "Expert Archer (Ex)",
        "name_en": "Expert Archer (Ex)",
        "description_es": "A nivel 5, +1 a tiradas de ataque y daño con arcos. Aumenta +1 cada 4 niveles.",
        "description_en": "At 5th level, +1 to attack and damage rolls with bows. Increases +1 every 4 levels.",
        "level": 5
      }
    ]
  },
  "mobile_fighter": {
    "class": "fighter",
    "name": "Mobile Fighter",
    "name_en": "Mobile Fighter",
    "name_es": "Guerrero Móvil",
    "source": "Advanced Player's Guide",
    "description_es": "Guerrero ágil que se basa en moverse para atacar: cambia coraje, entrenamiento y maestría por velocidad y combos de movimiento-ataque.",
    "description_en": "An agile fighter who relies on mobility, trading bravery, training and mastery for speed and move-and-attack combos.",
    "features_removed": [
      "Bravery (2nd)",
      "Weapon Training 1 (5th)",
      "Armor Training 3-4",
      "Weapon Mastery (20th)"
    ],
    "features_gained": [
      {
        "name": "Agility (Ex)",
        "name_en": "Agility (Ex)",
        "description_es": "A nivel 2, +1 a salvaciones contra efectos de paralizar, ralentizar o entorpecer. Aumenta +1 cada 4 niveles.",
        "description_en": "At 2nd level, +1 on saves vs paralyzed, slowed, or entangled effects. Increases +1 every 4 levels.",
        "level": 2
      },
      {
        "name": "Leaping Attack (Ex)",
        "name_en": "Leaping Attack (Ex)",
        "description_es": "A nivel 5, si se ha movido al menos 1.5 m antes de atacar, +1 a tiradas de ataque y daño. Aumenta +1 cada 4 niveles.",
        "description_en": "At 5th level, if he moved at least 5 ft before attacking, +1 to attack and damage rolls. Increases +1 every 4 levels.",
        "level": 5
      },
      {
        "name": "Rapid Attack (Ex)",
        "name_en": "Rapid Attack (Ex)",
        "description_es": "A nivel 11, puede combinar una acción de movimiento con un ataque completo, sacrificando el ataque de mayor BAB.",
        "description_en": "At 11th level, can combine a move action with a full-attack, forgoing the highest-BAB attack.",
        "level": 11
      },
      {
        "name": "Whirlwind Blitz (Ex)",
        "name_en": "Whirlwind Blitz (Ex)",
        "description_es": "A nivel 20, puede ejecutar ataque completo o usar Ataque Torbellino como acción estándar.",
        "description_en": "At 20th level, may perform a full-attack or use the Whirlwind Attack feat as a standard action.",
        "level": 20
      }
    ]
  },
  "sohei": {
    "class": "monk",
    "name": "Sohei",
    "name_en": "Sohei",
    "name_es": "Sohei",
    "source": "Ultimate Combat",
    "description_es": "Monje guerrero monástico montado: cambia muchas habilidades clásicas del monje por iniciativa superior, montura, mejoras de arma con ki y entrenamiento marcial.",
    "description_en": "A martial monastic warrior on horseback who trades many classic monk abilities for superior initiative, a mount, ki weapon enhancement, and weapon training.",
    "features_removed": [
      "Stunning Fist (1st)",
      "Fast Movement",
      "Slow Fall",
      "Abundant Step (12th)"
    ],
    "features_gained": [
      {
        "name": "Devoted Guardian (Ex)",
        "name_en": "Devoted Guardian (Ex)",
        "description_es": "A nivel 1, puede actuar en la ronda de sorpresa aunque no esté consciente; bono a iniciativa igual a la mitad del nivel de monje.",
        "description_en": "At 1st level, can act in the surprise round even if unaware; initiative bonus equal to half monk level.",
        "level": 1
      },
      {
        "name": "Monastic Mount (Su)",
        "name_en": "Monastic Mount (Su)",
        "description_es": "A nivel 4, gasta 1 punto de ki para otorgar a su montura PG temporales (2× nivel) durante 1 hora/nivel.",
        "description_en": "At 4th level, spends 1 ki point to grant his mount temporary HP (2× level) for 1 hour/level.",
        "level": 4
      },
      {
        "name": "Weapon Training (Ex)",
        "name_en": "Weapon Training (Ex)",
        "description_es": "A nivel 6, elige un grupo de armas (arcos, ballestas, armas de monje, armas de asta, lanzas o arrojadizas), ganando bono al ataque y daño.",
        "description_en": "At 6th level, chooses a weapon group (bows, crossbows, monk, polearms, spears, or thrown), gaining attack and damage bonuses.",
        "level": 6
      }
    ],
    "class_skills_add": [
      "handle_animal"
    ]
  },
  "undead_scourge": {
    "class": "paladin",
    "name": "Undead Scourge",
    "name_en": "Undead Scourge",
    "name_es": "Azote de los No-Muertos",
    "source": "Advanced Player's Guide",
    "description_es": "Paladín focalizado en aniquilar no-muertos: su golpe del mal escala de manera especial contra muertos vivientes.",
    "description_en": "A paladin focused on annihilating undead: her smite evil scales specially against undead.",
    "features_removed": [
      "Aura of Resolve (8th)",
      "Aura of Justice (11th)"
    ],
    "features_gained": [
      {
        "name": "Smite Evil (Undead)",
        "name_en": "Smite Evil (Undead)",
        "description_es": "Su golpe del mal añade +2 al daño por nivel de paladín contra no-muertos malignos.",
        "description_en": "Her smite evil adds +2 damage per paladin level against evil undead.",
        "level": 1
      },
      {
        "name": "Aura of Life (Su)",
        "name_en": "Aura of Life (Su)",
        "description_es": "A nivel 8, emite un aura de vida de 3 m: los no-muertos en ella reciben -4 a salvaciones contra energía positiva.",
        "description_en": "At 8th level, emits a 10-ft aura of life: undead within it take -4 on Will saves vs positive energy.",
        "level": 8
      }
    ]
  },
  "guide": {
    "class": "ranger",
    "name": "Guide",
    "name_en": "Guide",
    "name_es": "Guía",
    "source": "Advanced Player's Guide",
    "description_es": "Explorador adaptable que abandona el enemigo predilecto por una capacidad para marcar a cualquier enemigo y compartir su maestría del terreno con el grupo.",
    "description_en": "An adaptable scout who trades favored enemy for the ability to mark any enemy and share his terrain mastery with the party.",
    "features_removed": [
      "Favored Enemy (1st)",
      "Hunter's Bond (4th)",
      "Quarry (11th)"
    ],
    "features_gained": [
      {
        "name": "Ranger's Focus (Ex)",
        "name_en": "Ranger's Focus (Ex)",
        "description_es": "A nivel 1, como acción rápida, designa a un enemigo y gana +2 a tiradas de ataque y daño contra él. Aumenta +2 a nivel 5 y cada 5 niveles.",
        "description_en": "At 1st level, as a swift action, designates a foe and gains +2 to attack and damage rolls against it. Increases by +2 at 5th and every 5 levels."
      },
      {
        "name": "Terrain Bond (Ex)",
        "name_en": "Terrain Bond (Ex)",
        "description_es": "A nivel 4, los aliados a la vista en su terreno predilecto ganan +2 a iniciativa y a Avistar, Sigilo y Supervivencia.",
        "description_en": "At 4th level, allies within line of sight in his favored terrain gain +2 on initiative, Perception, Stealth, and Survival.",
        "level": 4
      }
    ]
  },
  "skirmisher": {
    "class": "ranger",
    "name": "Skirmisher",
    "name_en": "Skirmisher",
    "name_es": "Hostigador",
    "source": "Advanced Player's Guide",
    "description_es": "Explorador sin magia que sustituye toda su lista de conjuros por trucos de cazador tácticos usables varias veces al día.",
    "description_en": "A non-magical ranger who replaces his entire spell list with tactical hunter's tricks usable several times per day.",
    "features_removed": [
      "Spells (all spell levels)"
    ],
    "features_gained": [
      {
        "name": "Hunter's Tricks (Ex)",
        "name_en": "Hunter's Tricks (Ex)",
        "description_es": "A nivel 5, aprende un truco de cazador, ganando trucos adicionales a nivel 7 y cada 2 niveles. Puede usarlos un total de veces al día igual a la mitad de su nivel de explorador + su modificador de Sabiduría.",
        "description_en": "At 5th level, learns one hunter's trick, gaining additional tricks at 7th and every 2 levels. Usable a number of times per day equal to half his ranger level + his Wisdom modifier.",
        "level": 5
      }
    ]
  },
  "beastmaster": {
    "class": "ranger",
    "name": "Beastmaster",
    "name_en": "Beastmaster",
    "name_es": "Domador de Bestias",
    "source": "Advanced Player's Guide",
    "description_es": "Explorador centrado en sus compañeros animales, capaz de mantener varios a la vez dividiendo su nivel efectivo de druida.",
    "description_en": "A ranger focused on his animal companions, able to maintain several at once by dividing his effective druid level among them.",
    "features_removed": [
      "Hunter's Bond (4th)",
      "Combat Style Feat (6th)",
      "Camouflage (12th)"
    ],
    "features_gained": [
      {
        "name": "Animal Companion (Ex)",
        "name_en": "Animal Companion (Ex)",
        "description_es": "A nivel 4, gana un compañero animal con nivel efectivo de druida igual a nivel de explorador -3. Puede mantener varios compañeros dividiendo su nivel efectivo entre ellos.",
        "description_en": "At 4th level, gains an animal companion with effective druid level equal to ranger level -3. Can maintain multiple companions by dividing his effective level among them.",
        "level": 4
      }
    ],
    "class_skills_add": [
      "acrobatics",
      "escape_artist"
    ],
    "class_skills_remove": [
      "knowledge_dungeoneering",
      "knowledge_geography",
      "profession",
      "spellcraft"
    ]
  },
  "chirurgeon": {
    "class": "alchemist",
    "name": "Chirurgeon",
    "name_en": "Chirurgeon",
    "name_es": "Cirujano",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/alchemist/archetypes/paizo-alchemist-archetypes/chirurgeon/",
    "description_es": "Alquimista médico que prioriza la curación y la anatomía sobre los venenos, sacrificando todas las habilidades venenosas a cambio de extractos curativos infundidos y mejor uso de la habilidad Sanar.",
    "description_en": "A medical alchemist who prioritizes healing and anatomy over poisons, trading all poison abilities for infused cure extracts and superior Heal-skill use.",
    "features_removed": [
      "Poison Use (2)",
      "Poison Resistance +4 (5)",
      "Poison Immunity (10)"
    ],
    "features_gained": [
      {
        "name": "Curativo Infundido (Ex)",
        "name_en": "Infused Curative (Ex)",
        "description_es": "Los extractos de cure (curar heridas) actúan automáticamente como infusiones y pueden ser usados por no alquimistas.",
        "description_en": "Cure extracts automatically act as infusions and can be used by non-alchemists.",
        "level": 1
      },
      {
        "name": "Anestésico (Ex)",
        "name_en": "Anaesthetic (Ex)",
        "description_es": "Gana Soltura en Habilidad (Sanar) como dote extra; los usos peligrosos de Sanar solo causan el daño mínimo.",
        "description_en": "Gains Skill Focus (Heal) as a bonus feat; dangerous Heal uses deal only minimum damage.",
        "level": 1
      },
      {
        "name": "Poder Sobre la Muerte (Sb)",
        "name_en": "Power Over Death (Su)",
        "description_es": "Añade aliento de vida (breath of life) como extracto de nivel 4 y puede usarlo con la capacidad de infusión.",
        "description_en": "Adds breath of life as a 4th-level extract usable with the infusion ability.",
        "level": 7
      }
    ]
  },
  "beastmorph": {
    "class": "alchemist",
    "name": "Beastmorph",
    "name_en": "Beastmorph",
    "name_es": "Bestiamorfo",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/alchemist/archetypes/paizo-alchemist-archetypes/beastmorph/",
    "description_es": "Alquimista que estudia la anatomía monstruosa para imitar sus capacidades a través del mutágeno, ganando rasgos animales a costa de la maestría con venenos y la alquimia rápida.",
    "description_en": "An alchemist who studies monstrous anatomy to mimic their traits through mutagens, gaining beast-like features at the cost of poison mastery and swift alchemy.",
    "features_removed": [
      "Swift Alchemy (3)",
      "Swift Poisoning (6)",
      "Poison Resistance / Poison Immunity (5/8/10)",
      "Persistent Mutagen (14)"
    ],
    "features_gained": [
      {
        "name": "Mutágeno Bestial (Ex)",
        "name_en": "Beastform Mutagen (Ex)",
        "description_es": "Mientras tiene activo su mutágeno, gana apariencia animal y una capacidad de la lista de alter self.",
        "description_en": "While the mutagen is active, gains an animalistic appearance plus one ability from alter self.",
        "level": 1
      },
      {
        "name": "Mutágeno Bestial Mejorado (Ex)",
        "name_en": "Improved Beastform Mutagen (Ex)",
        "description_es": "Al nivel 6 obtiene dos capacidades de la lista de beast shape I mientras esté en mutágeno.",
        "description_en": "At 6th level, gains two abilities from beast shape I while in mutagen form.",
        "level": 6
      },
      {
        "name": "Mutágeno Bestial Mayor (Ex)",
        "name_en": "Greater Beastform Mutagen (Ex)",
        "description_es": "Al nivel 10 obtiene tres capacidades de beast shape II.",
        "description_en": "At 10th level, gains three abilities from beast shape II.",
        "level": 10
      },
      {
        "name": "Mutágeno Bestial Grandioso (Ex)",
        "name_en": "Grand Beastform Mutagen (Ex)",
        "description_es": "Al nivel 14 obtiene cuatro capacidades de beast shape III.",
        "description_en": "At 14th level, gains four abilities from beast shape III.",
        "level": 14
      }
    ]
  },
  "mindchemist": {
    "class": "alchemist",
    "name": "Mindchemist",
    "name_en": "Mindchemist",
    "name_es": "Mentalquimista",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/alchemist/archetypes/paizo-alchemist-archetypes/mindchemist/",
    "description_es": "Alquimista intelectual que reemplaza el mutágeno físico por un cognatógeno mental, sacrificando la mejora corporal a cambio de un intelecto formidable y memoria perfecta.",
    "description_en": "An intellectual alchemist who swaps the physical mutagen for a mental cognatogen, trading bodily prowess for formidable intellect and perfect recall.",
    "features_removed": [
      "Mutagen (1)",
      "Poison Use (2)"
    ],
    "features_gained": [
      {
        "name": "Cognatógeno (Sb)",
        "name_en": "Cognatogen (Su)",
        "description_es": "Crea un cognatógeno que potencia atributos mentales (Int/Sab/Car) en lugar del mutágeno físico estándar.",
        "description_en": "Creates a cognatogen that boosts mental scores (Int/Wis/Cha) instead of the standard physical mutagen."
      },
      {
        "name": "Memoria Perfecta (Ex)",
        "name_en": "Perfect Recall (Ex)",
        "description_es": "Al hacer una tirada de Conocimiento, suma el modificador de Inteligencia una segunda vez al resultado.",
        "description_en": "On any Knowledge check, may add the Intelligence modifier to the check a second time.",
        "level": 2
      },
      {
        "name": "Dotes Adicionales / Idiomas",
        "name_en": "Bonus Feats / Languages",
        "description_es": "Puede tomar Soltura en Habilidad (habilidades mentales) o aprender tres idiomas en lugar de descubrimientos.",
        "description_en": "May take Skill Focus in mental skills or learn three languages in place of discoveries.",
        "level": 4
      }
    ]
  },
  "preservationist": {
    "class": "alchemist",
    "name": "Preservationist",
    "name_en": "Preservationist",
    "name_es": "Conservador",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/alchemist/archetypes/paizo-alchemist-archetypes/preservationist/",
    "description_es": "Alquimista que preserva criaturas vivas en frascos para liberarlas como aliados invocados, intercambiando toda la maestría con venenos por una progresión de aliados embotellados.",
    "description_en": "An alchemist who preserves living creatures in bottles to release them as summoned allies, trading poison mastery for a bottled-ally progression.",
    "features_removed": [
      "Poison Use (2)",
      "Poison Resistance +4/+6 (5/8)",
      "Poison Immunity (10)",
      "Persistent Mutagen (14)",
      "Discovery (18)"
    ],
    "features_gained": [
      {
        "name": "Aliado Embotellado (Sb)",
        "name_en": "Bottled Ally (Su)",
        "description_es": "Al abrir el frasco, el espécimen cobra vida tamaño normal y sirve como una criatura invocada por convocar aliado natural; progresa de I a IX entre niveles 2 y 18.",
        "description_en": "Opening the bottle animates the specimen full-size as a creature summoned by summon nature's ally; progresses from I to IX between levels 2 and 18.",
        "level": 2
      }
    ],
    "class_skills_add": [
      "handle_animal"
    ]
  },
  "internal_alchemist": {
    "class": "alchemist",
    "name": "Internal Alchemist",
    "name_en": "Internal Alchemist",
    "name_es": "Alquimista Interno",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/alchemist/archetypes/paizo-alchemist-archetypes/internal-alchemist/",
    "description_es": "Alquimista que busca la auto-perfección y la longevidad mediante medicina, dieta y control corporal, intercambiando bombas rápidas y veneno rápido por dominio del aliento y resistencia a enfermedades.",
    "description_en": "An alchemist who pursues self-perfection and longevity through medicine, diet, and bodily control, trading throw anything and swift poisoning for breath mastery and disease resistance.",
    "features_removed": [
      "Throw Anything (1)",
      "Swift Alchemy (3)",
      "Swift Poisoning (6)"
    ],
    "features_gained": [
      {
        "name": "Maestría del Aliento (Ex)",
        "name_en": "Breath Mastery (Ex)",
        "description_es": "Puede contener la respiración un número de minutos igual a su Constitución sin preparación, o 1 hora por punto con preparación; puede entrar en animación suspendida.",
        "description_en": "Can hold breath for Constitution score in minutes without preparation, or 1 hour per Con point with preparation; can enter suspended animation."
      },
      {
        "name": "Resistencia a Enfermedad (Ex)",
        "name_en": "Disease Resistance (Ex)",
        "description_es": "Al nivel 3 obtiene un bono a salvaciones contra enfermedad igual a su resistencia a veneno; se vuelve inmune a enfermedad al obtener inmunidad a veneno.",
        "description_en": "At 3rd level gains a save bonus against disease equal to poison resistance; becomes immune to disease upon gaining poison immunity.",
        "level": 3
      },
      {
        "name": "Esquiva Sobrenatural (Ex)",
        "name_en": "Uncanny Dodge (Ex)",
        "description_es": "Al nivel 6 no puede ser pillado desprevenido y conserva su modificador de Destreza incluso ante invisibles.",
        "description_en": "At 6th level cannot be caught flat-footed and retains Dex bonus to AC even against invisible attackers.",
        "level": 6
      }
    ]
  },
  "blighted_myrmidon": {
    "class": "antipaladin",
    "name": "Blighted Myrmidon",
    "name_en": "Blighted Myrmidon",
    "name_es": "Mirmidón Marchito",
    "source": "Ultimate Wilderness",
    "source_url": "https://www.d20pfsrd.com/classes/alternate-classes/antipaladin/archetypes/paizo-antipaladin-archetypes/blighted-myrmidon-antipaladin-archetype/",
    "description_es": "Antipaladín corruptor de la naturaleza que reemplaza castigar el bien por castigar a la naturaleza, drenando la vida de animales, plantas y fey en lugar de servir al mal genérico.",
    "description_en": "A nature-corrupting antipaladin that swaps smite good for smite nature, draining the life of animals, plants, and fey rather than serving generic evil.",
    "features_removed": [
      "Smite Good (1)",
      "Fiendish Boon (5)",
      "Aura of Vengeance (11)",
      "Cruelty (15)",
      "Unholy Champion (20)"
    ],
    "features_gained": [
      {
        "name": "Castigar Naturaleza (Sb)",
        "name_en": "Smite Nature (Su)",
        "description_es": "Funciona como castigar el bien pero apunta a animales, plantas, sabandijas, elementales, fey y clases con vínculo natural.",
        "description_en": "Functions like smite good but targets animals, plants, vermin, elementals, fey, and nature-themed classes.",
        "level": 1
      },
      {
        "name": "Aura de Decadencia (Sb)",
        "name_en": "Aura of Decay (Su)",
        "description_es": "Aura de 10 pies que daña a criaturas naturales mientras sana al mirmidón.",
        "description_en": "10-foot aura that damages natural creatures while healing the myrmidon.",
        "level": 11
      },
      {
        "name": "Toque Enervante (Sb)",
        "name_en": "Enervating Touch (Su)",
        "description_es": "Reduce a la mitad la curación recibida por la criatura tocada durante un tiempo prolongado.",
        "description_en": "Halves all healing the touched creature receives for an extended duration.",
        "level": 5
      }
    ]
  },
  "fearmonger": {
    "class": "antipaladin",
    "name": "Fearmonger",
    "name_en": "Fearmonger",
    "name_es": "Sembrador de Miedo",
    "source": "Monster Codex",
    "source_url": "https://www.d20pfsrd.com/classes/alternate-classes/antipaladin/archetypes/paizo-antipaladin-archetypes/fearmonger-antipaladin-archetype/",
    "description_es": "Antipaladín que se alimenta del terror ajeno, reemplazando el toque de corrupción por una capacidad que cura al fallar las víctimas las salvaciones contra miedo.",
    "description_en": "An antipaladin who feeds on the terror of others, replacing touch of corruption with an ability that heals when victims fail saves against fear effects.",
    "features_removed": [
      "Touch of Corruption (2)"
    ],
    "features_gained": [
      {
        "name": "Alimentarse del Miedo (Sb)",
        "name_en": "Feed on Fear (Su)",
        "description_es": "Cuando un enemigo falla una salvación contra un efecto de miedo, el fearmonger sana 1 punto por cada 2 niveles; con vida llena, gana puntos de golpe temporales.",
        "description_en": "When a foe fails a save against a fear effect, the fearmonger heals 1 hp per 2 antipaladin levels; at full HP gains temporary HP instead.",
        "level": 2
      },
      {
        "name": "Crueldades de Miedo (Sb)",
        "name_en": "Frightening Cruelties (Su)",
        "description_es": "Las crueldades disponibles se restringen a temáticas de miedo: shaken, frightened, dazed y panicked.",
        "description_en": "Available cruelties are restricted to fear-themed conditions: shaken, frightened, dazed, and panicked.",
        "level": 3
      }
    ]
  },
  "insinuator": {
    "class": "antipaladin",
    "name": "Insinuator",
    "name_en": "Insinuator",
    "name_es": "Insinuante",
    "source": "Pathfinder Player Companion: Agents of Evil",
    "source_url": "https://www.d20pfsrd.com/classes/alternate-classes/antipaladin/archetypes/paizo-antipaladin-archetypes/insinuator-antipaladin-archetype/",
    "description_es": "Antipaladín mercenario que invoca diariamente a un exterior maligno distinto para tomar prestado su poder, reemplazando casi todas las capacidades clásicas de antipaladín por la versatilidad de la Invocación.",
    "description_en": "A mercenary antipaladin who daily invokes a different evil outsider to borrow its power, replacing almost every classic antipaladin feature with the versatility of Invocation.",
    "features_removed": [
      "Aura of Evil",
      "Detect Good",
      "Smite Good",
      "Touch of Corruption",
      "Aura of Cowardice",
      "Plague Bringer",
      "Cruelty",
      "Antipaladin Spells",
      "Fiendish Boon",
      "Aura of Despair",
      "Aura of Vengeance",
      "Aura of Sin",
      "Aura of Depravity",
      "Unholy Champion"
    ],
    "features_gained": [
      {
        "name": "Invocación (Sb)",
        "name_en": "Invocation (Su)",
        "description_es": "Mediante meditación diaria contacta a un exterior maligno y toma prestados sus poderes; los rasgos de clase del día dependen del exterior elegido.",
        "description_en": "Through daily meditation contacts an evil outsider and borrows its powers; the day's class features depend on the chosen outsider."
      },
      {
        "name": "Castigar Insolencia (Sb)",
        "name_en": "Smite Impudence (Su)",
        "description_es": "Castiga a criaturas opuestas al alineamiento del exterior invocado en lugar de simplemente las criaturas buenas.",
        "description_en": "Smites creatures opposed to the alignment of the invoked outsider rather than simply good creatures."
      },
      {
        "name": "Vínculo Ambicioso (Sb)",
        "name_en": "Ambitious Bond (Su)",
        "description_es": "Recibe un arma o sirviente exterior cuyas capacidades cambian para coincidir con la invocación diaria.",
        "description_en": "Receives a weapon or outsider servant whose abilities change to match the daily invocation.",
        "level": 5
      }
    ]
  },
  "knight_of_the_sepulcher": {
    "class": "antipaladin",
    "name": "Knight of the Sepulcher",
    "name_en": "Knight of the Sepulcher",
    "name_es": "Caballero del Sepulcro",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/alternate-classes/antipaladin/archetypes/paizo-antipaladin-archetypes/knight-of-the-sepulcher/",
    "description_es": "Antipaladín que se transforma progresivamente en no-muerto, sacrificando dádivas fiéndicas, auras y crueldades a cambio de inmunidades, fortificación y una conversión final al tipo no-muerto.",
    "description_en": "An antipaladin who progressively transforms into an undead, sacrificing fiendish boons, auras, and cruelties for immunities, fortification, and a final conversion to the undead type.",
    "features_removed": [
      "Fiendish Boon (5)",
      "Aura of Despair (8)",
      "Smite Good use (10)",
      "Aura of Vengeance (11)",
      "Aura of Sin (14)",
      "Cruelty (15)",
      "Aura of Depravity (17)",
      "Unholy Champion (20)"
    ],
    "features_gained": [
      {
        "name": "Resiliencia Sepulcral (Ex)",
        "name_en": "Sepulchral Resilience (Ex)",
        "description_es": "Es curado por energía negativa y dañado por la positiva; resistencia a efectos mentales, de muerte y veneno.",
        "description_en": "Healed by negative energy and harmed by positive; resistance to mind-affecting, death effects, and poison.",
        "level": 5
      },
      {
        "name": "Fortificación (Ex)",
        "name_en": "Fortification (Ex)",
        "description_es": "Fortificación 25-75% contra críticos y ataques furtivos según el nivel.",
        "description_en": "25-75% fortification against critical hits and sneak attacks, scaling with level.",
        "level": 8
      },
      {
        "name": "Reducción de Daño y Visión Oscura (Ex)",
        "name_en": "Damage Reduction and Darkvision (Ex)",
        "description_es": "Visión en la oscuridad de 60 pies y RD 5/contundente y bueno (10 al nivel 20).",
        "description_en": "Darkvision 60 ft. and DR 5/bludgeoning and good (10 at 20th level).",
        "level": 11
      },
      {
        "name": "Convertirse en No-Muerto (Sb)",
        "name_en": "Become Undead (Su)",
        "description_es": "Al nivel 20 se convierte en no-muerto, usando Carisma en vez de Constitución para PG y salvaciones.",
        "description_en": "At 20th level becomes undead, using Charisma instead of Constitution for HP and saves.",
        "level": 20
      }
    ]
  },
  "tyrant": {
    "class": "antipaladin",
    "name": "Tyrant",
    "name_en": "Tyrant",
    "name_es": "Tirano",
    "source": "Ultimate Intrigue",
    "source_url": "https://www.d20pfsrd.com/classes/alternate-classes/antipaladin/archetypes/paizo-antipaladin-archetypes/tyrant-antipaladin-archetype/",
    "description_es": "Antipaladín lawful evil manipulador que opera como cerebro estratégico, capaz de colaborar con buenos para usarlos en sus fines; cambia Cabalgar por Diplomacia y restringe su dádiva fiéndica al alineamiento legal-malvado.",
    "description_en": "A lawful evil manipulative antipaladin who operates as a strategic mastermind, willing to work with good-aligned creatures to exploit them; trades Ride for Diplomacy and restricts his fiendish boon to lawful evil options.",
    "features_removed": [
      "Ride class skill (1)",
      "Standard Fiendish Boon options (5)"
    ],
    "features_gained": [
      {
        "name": "Código del Tirano",
        "name_en": "Tyrant's Code",
        "description_es": "Debe mantenerse legal-malvado; solo puede actuar bien si sirve a sus propias ambiciones oscuras y exige lealtad absoluta de sus subordinados.",
        "description_en": "Must remain lawful evil; may perform good acts only if they serve his dark ambitions, and demands absolute loyalty from his underlings.",
        "level": 1
      },
      {
        "name": "Diplomacia como Habilidad de Clase",
        "name_en": "Diplomacy as Class Skill",
        "description_es": "Reemplaza Cabalgar por Diplomacia, enfatizando la manipulación social.",
        "description_en": "Replaces Ride with Diplomacy, emphasizing social manipulation.",
        "level": 1
      },
      {
        "name": "Dádiva Diabólica (Sb)",
        "name_en": "Diabolic Boon (Su)",
        "description_es": "Su sirviente fiéndico debe ser un animal fiéndico o una criatura con los subtipos legal y maligno.",
        "description_en": "His fiendish servant must be a fiendish animal or a creature with the lawful and evil subtypes.",
        "level": 5
      }
    ],
    "class_skills_add": [
      "diplomacy"
    ],
    "class_skills_remove": [
      "ride"
    ]
  },
  "blood_arcanist": {
    "class": "arcanist",
    "name": "Blood Arcanist",
    "name_en": "Blood Arcanist",
    "name_es": "Arcanista de Sangre",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/arcanist/archetypes/paizo-arcanist-archetypes/blood-arcanist",
    "description_es": "Arcanista que canaliza un linaje de hechicero, ganando los poderes y arcana de un linaje completo a cambio de varios exploits arcanos y de la supremacía mágica.",
    "description_en": "An arcanist who channels a sorcerer bloodline, gaining the full bloodline arcana and powers of one bloodline at the cost of several arcanist exploits and magical supremacy.",
    "features_removed": [
      "Arcanist Exploit (1, 3, 9, 15)",
      "Magical Supremacy (20)"
    ],
    "features_gained": [
      {
        "name": "Linaje (Sb)",
        "name_en": "Bloodline (Su)",
        "description_es": "Selecciona un linaje de hechicero al nivel 1; usa su nivel de arcanista como nivel de hechicero para los arcana y poderes del linaje.",
        "description_en": "Selects a sorcerer bloodline at 1st level; uses arcanist level as sorcerer level for bloodline arcana and powers.",
        "level": 1
      },
      {
        "name": "Restricción de Linaje",
        "name_en": "Bloodline Restriction",
        "description_es": "No puede tomar el exploit de desarrollo de linaje, y todo linaje obtenido por multiclase debe coincidir con el original.",
        "description_en": "Cannot take the bloodline development exploit; any additional bloodline from multiclassing must match the original.",
        "level": 1
      }
    ],
    "sub_options": {
      "bloodlines": "Elige un linaje de hechicero al nivel 1. Gana hechizos de linaje adicionales y algunos poderes de linaje, pero no los beneficios del linaje completo. / Selects a sorcerer bloodline at level 1. Gains bonus bloodline spells and some bloodline powers, but not the full bloodline benefits."
    }
  },
  "eldritch_font": {
    "class": "arcanist",
    "name": "Eldritch Font",
    "name_en": "Eldritch Font",
    "name_es": "Fuente Sobrenatural",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/arcanist/archetypes/paizo-arcanist-archetypes/eldritch-font",
    "description_es": "Arcanista que es un manantial puro de magia, ganando ranuras de hechizo extra y la capacidad de sobrecargar sus conjuros con un Surge Sobrenatural a costa de fatiga y de varios exploits.",
    "description_en": "An arcanist who is a raw magical wellspring, gaining bonus spell slots and the ability to surge spells with Eldritch Surge at the cost of fatigue and several exploits.",
    "features_removed": [
      "Arcanist Exploit (3, 7, 13)",
      "Magical Supremacy (20)"
    ],
    "features_gained": [
      {
        "name": "Fuente de Poder (Ex)",
        "name_en": "Font of Power (Ex)",
        "description_es": "Gana ranuras de hechizo adicionales por nivel pero reduce los hechizos preparados en uno por nivel.",
        "description_en": "Gains bonus spell slots per arcanist level, but reduces prepared spells by one per level.",
        "level": 1
      },
      {
        "name": "Surge Sobrenatural (Sb)",
        "name_en": "Eldritch Surge (Su)",
        "description_es": "Como acción rápida, añade +2 al nivel de lanzador y CD de un conjuro, quedando fatigada o exhausta tras hacerlo.",
        "description_en": "As a swift action, add +2 to caster level and DC of a spell, becoming fatigued or exhausted afterward.",
        "level": 1
      },
      {
        "name": "Surge Mejorado (Sb)",
        "name_en": "Improved Surge (Su)",
        "description_es": "Al nivel 7 puede repetir tiradas de ataque o de daño de hechizos cuando usa surge.",
        "description_en": "At 7th level, may reroll attack or damage rolls for spells when using surge.",
        "level": 7
      },
      {
        "name": "Surge Mayor (Sb)",
        "name_en": "Greater Surge (Su)",
        "description_es": "Al nivel 13 obliga a una criatura a repetir su salvación contra su hechizo y tomar el peor resultado.",
        "description_en": "At 13th level, forces a creature to reroll its save against her spell and take the worse result.",
        "level": 13
      }
    ]
  },
  "occultist_arcanist": {
    "class": "arcanist",
    "name": "Occultist (Arcanist)",
    "name_en": "Occultist (Arcanist)",
    "name_es": "Ocultista (Arcanista)",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/arcanist/archetypes/paizo-arcanist-archetypes/occultist",
    "description_es": "Arcanista que pacta con entidades extraplanares para obtener poder y conocimiento, especializándose en convocaciones y contacto planar a cambio de exploits y supremacía mágica.",
    "description_en": "An arcanist who bargains with extraplanar entities for power and knowledge, specializing in summoning and planar contact at the cost of exploits and magical supremacy.",
    "features_removed": [
      "Arcanist Exploit (1, 7)",
      "Magical Supremacy (20)"
    ],
    "features_gained": [
      {
        "name": "Foco del Conjurador (Sb)",
        "name_en": "Conjurer's Focus (Su)",
        "description_es": "Gasta puntos de reserva arcana para lanzar convocar monstruo como acción estándar con duración 1 minuto/nivel; el nivel del conjuro aumenta cada 2 niveles hasta IX.",
        "description_en": "Spend arcane reservoir points to cast summon monster as a standard action with 1 min/level duration; the spell level increases every 2 levels up to IX.",
        "level": 1
      },
      {
        "name": "Hechizos Planares",
        "name_en": "Planar Spells",
        "description_es": "Añade los hechizos de planar ally a su lista y trata plane shift como hechizo arcanista de nivel 5.",
        "description_en": "Adds the planar ally spells to her list and treats plane shift as a 5th-level arcanist spell.",
        "level": 7
      },
      {
        "name": "Contacto Planar (Sb)",
        "name_en": "Planar Contact (Su)",
        "description_es": "Al nivel 7 puede lanzar augury una vez al día y contact other plane una vez por semana.",
        "description_en": "At 7th level may cast augury once per day and contact other plane once per week.",
        "level": 7
      }
    ]
  },
  "school_savant": {
    "class": "arcanist",
    "name": "School Savant",
    "name_en": "School Savant",
    "name_es": "Sabio de Escuela",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/arcanist/archetypes/paizo-arcanist-archetypes/school-savant",
    "description_es": "Arcanista que se especializa en una escuela de magia al estilo de un mago especialista, ganando capacidades de escuela arcana y un conjuro extra a cambio de dos escuelas opuestas.",
    "description_en": "An arcanist who specializes in one school of magic like a wizard specialist, gaining arcane school abilities and a bonus prepared spell at the cost of two opposition schools.",
    "features_removed": [
      "Arcanist Exploit (1, 3, 7)"
    ],
    "features_gained": [
      {
        "name": "Foco de Escuela",
        "name_en": "School Focus",
        "description_es": "Selecciona una escuela de magia y gana las habilidades de escuela arcana del mago para esa escuela.",
        "description_en": "Selects one school of magic and gains the wizard arcane school abilities for that school.",
        "level": 1
      },
      {
        "name": "Preparación Ampliada",
        "name_en": "Expanded Spell Preparation",
        "description_es": "Prepara un conjuro adicional por día de cada nivel que pueda lanzar, pero debe pertenecer a la escuela elegida.",
        "description_en": "Prepares one additional spell per day at each castable level, but it must come from the chosen school.",
        "level": 1
      },
      {
        "name": "Escuelas Opuestas",
        "name_en": "Opposition Schools",
        "description_es": "Selecciona dos escuelas opuestas; los hechizos de esas escuelas ocupan dos ranuras al prepararse y aplican -4 al elaborar objetos relacionados.",
        "description_en": "Selects two opposition schools; their spells take up two prepared slots and incur -4 on crafting items requiring those schools.",
        "level": 1
      }
    ],
    "sub_options": {
      "schools": "Se especializa en una escuela arcana al nivel 1. Los hechizos de especialización se preparan con un nivel efectivo más bajo (facilita lanzamiento). La escuela opuesta impone penalización como en mago. / Specializes in one arcane school at level 1. Specialization spells prepared at effectively lower level (easier casting). Opposed school imposes penalty as for wizard."
    }
  },
  "unlettered_arcanist": {
    "class": "arcanist",
    "name": "Unlettered Arcanist",
    "name_en": "Unlettered Arcanist",
    "name_es": "Arcanista Iletrado",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/arcanist/archetypes/paizo-arcanist-archetypes/unlettered-arcanist",
    "description_es": "Arcanista que almacena sus hechizos en un familiar al estilo de la bruja en lugar de un grimorio, usando además la lista de hechizos de bruja.",
    "description_en": "An arcanist who stores spells inside a witch-style familiar instead of a spellbook and uses the witch spell list.",
    "features_removed": [
      "Spellbook (1)"
    ],
    "features_gained": [
      {
        "name": "Familiar (Ex)",
        "name_en": "Familiar (Ex)",
        "description_es": "Recibe un familiar como una bruja que almacena sus hechizos; su nivel de arcanista cuenta como nivel de bruja para las capacidades del familiar.",
        "description_name": "",
        "description_en": "Receives a witch-style familiar that stores her spells; arcanist level counts as witch level for familiar abilities.",
        "level": 1
      },
      {
        "name": "Lista de Hechizos de Bruja",
        "name_en": "Witch Spell List",
        "description_es": "Usa la lista de hechizos de bruja en lugar de la de mago/hechicero.",
        "description_en": "Uses the witch spell list instead of the wizard/sorcerer spell list.",
        "level": 1
      }
    ]
  },
  "armored_hulk": {
    "class": "barbarian",
    "name": "Armored Hulk",
    "name_en": "Armored Hulk",
    "name_es": "Mole Acorazada",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/armored-hulk/",
    "description_es": "Bárbaro que abraza la armadura pesada por encima de la velocidad, sacrificando movimiento rápido y esquiva sobrenatural a cambio de estabilidad, mejor velocidad con armadura y resistencia a críticos.",
    "description_en": "A barbarian who embraces heavy armor over speed, trading fast movement and uncanny dodge for stability, better armored speed, and crit resilience.",
    "features_removed": [
      "Fast Movement (1)",
      "Uncanny Dodge (2)",
      "Trap Sense (3)",
      "Improved Uncanny Dodge (5)"
    ],
    "features_gained": [
      {
        "name": "Postura Indomable (Ex)",
        "name_en": "Indomitable Stance (Ex)",
        "description_es": "+1 a maniobras de combate y CMD contra arrollar y a salvaciones de Reflejos contra ataques de pisotear.",
        "description_en": "+1 on combat maneuvers and CMD against overrun, and on Reflex saves against trample attacks.",
        "level": 1
      },
      {
        "name": "Rapidez Acorazada (Ex)",
        "name_en": "Armored Swiftness (Ex)",
        "description_es": "Al nivel 2 se mueve 5 pies más rápido en armadura mediana o pesada.",
        "description_en": "At 2nd level moves 5 ft. faster in medium or heavy armor.",
        "level": 2
      },
      {
        "name": "Resiliencia de Acero (Ex)",
        "name_en": "Resilience of Steel (Ex)",
        "description_es": "Al nivel 3 gana un bono a la CA contra confirmaciones de crítico mientras lleve armadura pesada, +1 cada 3 niveles.",
        "description_en": "At 3rd level gains an AC bonus against critical confirmations while wearing heavy armor, +1 every 3 levels.",
        "level": 3
      },
      {
        "name": "Rapidez Acorazada Mejorada (Ex)",
        "name_en": "Improved Armored Swiftness (Ex)",
        "description_es": "Al nivel 5 incrementa su velocidad terrestre +10 pies con cualquier armadura.",
        "description_en": "At 5th level increases land speed by +10 ft. while wearing any armor.",
        "level": 5
      }
    ]
  },
  "brutal_pugilist": {
    "class": "barbarian",
    "name": "Brutal Pugilist",
    "name_en": "Brutal Pugilist",
    "name_es": "Pugilista Brutal",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/brutal-pugilist/",
    "description_es": "Bárbaro pendenciero especializado en lucha sin armas y presas, intercambiando esquiva sobrenatural y sentido de trampas por habilidad para forcejear y maniobras de combate.",
    "description_en": "A brawling barbarian who specializes in unarmed combat and grappling, trading uncanny dodge and trap sense for grapple prowess and combat maneuvers.",
    "features_removed": [
      "Uncanny Dodge (2)",
      "Trap Sense (3)",
      "Improved Uncanny Dodge (5)"
    ],
    "features_gained": [
      {
        "name": "Presa Salvaje (Ex)",
        "name_en": "Savage Grapple (Ex)",
        "description_es": "Al estar apresado solo sufre la mitad de las penalizaciones a Destreza, ataque y maniobras; puede hacer ataques de oportunidad contra quien intente apresarlo.",
        "description_en": "When grappled, takes only half the penalties to Dex, attack, and CMB; may make attacks of opportunity against creatures attempting to grapple her.",
        "level": 2
      },
      {
        "name": "Pit Fighter (Ex)",
        "name_en": "Pit Fighter (Ex)",
        "description_es": "Al nivel 3 selecciona maniobras de combate y gana un bono de inspiración +1 al CMB o CMD (+2 sin armadura), añadiendo otra maniobra cada 3 niveles.",
        "description_en": "At 3rd level selects combat maneuvers and gains a +1 insight bonus to CMB or CMD (+2 unarmored), adding another maneuver every 3 levels.",
        "level": 3
      },
      {
        "name": "Presa Salvaje Mejorada (Ex)",
        "name_en": "Improved Savage Grapple (Ex)",
        "description_es": "Al nivel 5 ignora todas las penalizaciones por estar apresado y se considera una categoría de tamaño mayor para ser apresada.",
        "description_en": "At 5th level ignores all penalties from being grappled and counts as one size larger for being grappled.",
        "level": 5
      }
    ]
  },
  "mounted_fury": {
    "class": "barbarian",
    "name": "Mounted Fury",
    "name_en": "Mounted Fury",
    "name_es": "Furia Montada",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/mounted-fury/",
    "description_es": "Bárbaro de tribus jinetes que sacrifica movimiento rápido y esquiva sobrenatural a cambio de aumentar la velocidad de su montura y obtener una bestia bestial como aliada animal.",
    "description_en": "A barbarian from horse-riding tribes who sacrifices fast movement and uncanny dodge to boost his mount's speed and gain a bestial animal companion mount.",
    "features_removed": [
      "Fast Movement (1)",
      "Uncanny Dodge (2)",
      "Improved Uncanny Dodge (5)"
    ],
    "features_gained": [
      {
        "name": "Jinete Veloz (Ex)",
        "name_en": "Fast Rider (Ex)",
        "description_es": "La velocidad de cualquier montura que cabalgue se incrementa en 10 pies.",
        "description_en": "The speed of any mount the barbarian rides is increased by 10 ft."
      },
      {
        "name": "Montura Bestial (Ex)",
        "name_en": "Bestial Mount (Ex)",
        "description_es": "Al nivel 5 gana una montura tipo compañero animal de druida (nivel de bárbaro -4); cuando entra en furia montado, la montura gana +2 moral a Fuerza.",
        "description_en": "At 5th level gains a mount that functions as a druid's animal companion (barbarian level -4); when she rages while mounted, the mount gains +2 morale Strength.",
        "level": 2
      }
    ]
  },
  "superstitious": {
    "class": "barbarian",
    "name": "Superstitious",
    "name_en": "Superstitious",
    "name_es": "Supersticioso",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/superstitious/",
    "description_es": "Bárbaro desconfiado de la magia que reemplaza el sentido de trampas y la reducción de daño por intuición sobrenatural y sentidos cada vez más agudos.",
    "description_en": "A barbarian distrustful of magic who replaces trap sense and damage reduction with supernatural intuition and increasingly keen senses.",
    "features_removed": [
      "Trap Sense (3)",
      "Damage Reduction (7+)"
    ],
    "features_gained": [
      {
        "name": "Sexto Sentido (Ex)",
        "name_en": "Sixth Sense (Ex)",
        "description_es": "Al nivel 3 gana +1 a iniciativa y +1 de inspiración a la CA durante asaltos de sorpresa, +1 cada 3 niveles.",
        "description_en": "At 3rd level gains +1 initiative and +1 insight to AC during surprise rounds, +1 per three additional levels.",
        "level": 3
      },
      {
        "name": "Sentidos Agudos (Ex)",
        "name_en": "Keen Senses (Ex)",
        "description_es": "Adquiere visión nocturna (7), visión en la oscuridad 60 ft (10), olfato (13), percepción ciega 30 ft (16) y vista ciega 30 ft (19).",
        "description_en": "Gains low-light vision (7), darkvision 60 ft (10), scent (13), blindsense 30 ft (16), and blindsight 30 ft (19).",
        "level": 7
      }
    ]
  },
  "urban_barbarian": {
    "class": "barbarian",
    "name": "Urban Barbarian",
    "name_en": "Urban Barbarian",
    "name_es": "Bárbaro Urbano",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/urban-barbarian/",
    "description_es": "Bárbaro adaptado a la ciudad que sustituye el movimiento rápido y la furia tradicional por bonos en multitudes y una furia controlada que reparte sus bonos entre atributos elegidos.",
    "description_en": "A city-bred barbarian who swaps fast movement and standard rage for crowd-fighting bonuses and a controlled rage that distributes its bonuses among chosen abilities.",
    "features_removed": [
      "Medium armor proficiency",
      "Class skills: Handle Animal, Knowledge (nature), Survival",
      "Fast Movement (1)"
    ],
    "features_gained": [
      {
        "name": "Control de Multitudes (Ex)",
        "name_en": "Crowd Control (Ex)",
        "description_es": "+1 a las tiradas de ataque y +1 de esquiva a la CA cuando hay dos o más enemigos adyacentes; mejora Intimidar contra multitudes.",
        "description_en": "+1 attack and +1 dodge AC when adjacent to two or more enemies; improves Intimidate against crowds.",
        "level": 1
      },
      {
        "name": "Furia Controlada (Ex)",
        "name_en": "Controlled Rage (Ex)",
        "description_es": "En lugar de la furia normal, asigna sus bonos morales (+4/+6/+8) a Fuerza, Destreza o Constitución como elija; sin penalizaciones a CA ni a Voluntad y conserva habilidades mentales.",
        "description_en": "Instead of the standard rage, assigns her morale bonuses (+4/+6/+8) to Str, Dex, or Con as chosen; takes no penalties to AC or Will and keeps mental skills.",
        "level": 1
      },
      {
        "name": "Habilidades Urbanas",
        "name_en": "Urban Class Skills",
        "description_es": "Añade Diplomacia, Conocimiento (local), Conocimiento (nobleza), Lingüística y Profesión como habilidades de clase.",
        "description_en": "Adds Diplomacy, Knowledge (local), Knowledge (nobility), Linguistics, and Profession as class skills.",
        "level": 1
      }
    ],
    "class_skills_add": [
      "diplomacy",
      "knowledge_local",
      "knowledge_nobility",
      "linguistics",
      "profession"
    ],
    "class_skills_remove": [
      "handle_animal",
      "knowledge_nature",
      "survival"
    ]
  },
  "arcane_duelist": {
    "class": "bard",
    "name": "Arcane Duelist",
    "name_en": "Arcane Duelist",
    "name_es": "Duelista Arcano",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/bard/archetypes/paizo-bard-archetypes/arcane-duelist/",
    "description_es": "Bardo guerrero que combina hechizos con esgrima, sacrificando saberes bárdicos y muchas interpretaciones por dotes marciales, vínculo arcano con su arma y mejora mágica de la hoja.",
    "description_en": "A martial bard who blends spells with swordplay, trading bardic lore and many performances for combat feats, an arcane bond with his weapon, and magical blade enhancement.",
    "features_removed": [
      "Bardic Knowledge (1)",
      "Countersong (1)",
      "Versatile Performance",
      "Well-Versed",
      "Lore Master (5)",
      "Suggestion (6)",
      "Jack of All Trades (10)",
      "Mass Suggestion (18)"
    ],
    "features_gained": [
      {
        "name": "Golpe Arcano",
        "name_en": "Arcane Strike",
        "description_es": "Recibe Golpe Arcano como dote bonus al nivel 1 para infundir hechizos en sus ataques con arma.",
        "description_en": "Gains Arcane Strike as a bonus feat at 1st level to infuse spells into weapon attacks.",
        "level": 1
      },
      {
        "name": "Grito de Arenga",
        "name_en": "Rallying Cry",
        "description_es": "Usa la interpretación para reanimar aliados; sustituye sus tiradas de Voluntad contra miedo por su tirada de Intimidar.",
        "description_en": "Uses performance to rally allies; substitutes his Intimidate check for their Will saves against fear.",
        "level": 1
      },
      {
        "name": "Vínculo Arcano (Sb)",
        "name_en": "Arcane Bond (Su)",
        "description_es": "Al nivel 5 forma un vínculo de mago con un arma para componentes somáticos.",
        "description_en": "At 5th level forms a wizard-style arcane bond with a weapon for somatic components.",
        "level": 5
      },
      {
        "name": "Sed de Hoja (Sb)",
        "name_en": "Bladethirst (Su)",
        "description_es": "Al nivel 6 usa interpretación para añadir bonos +1 a +5 (o propiedades especiales) a las armas de los aliados.",
        "description_en": "At 6th level uses performance to grant +1 to +5 enhancement bonuses (or special properties) to allies' weapons.",
        "level": 6
      },
      {
        "name": "Armadura Arcana (Ex)",
        "name_en": "Arcane Armor (Ex)",
        "description_es": "Recibe competencia con armadura mediana (10) y pesada (16) sin probabilidad de fallo arcano para los hechizos de bardo.",
        "description_en": "Gains medium (10) and heavy (16) armor proficiency with no arcane spell failure for bard spells.",
        "level": 10
      }
    ]
  },
  "sandman": {
    "class": "bard",
    "name": "Sandman",
    "name_en": "Sandman",
    "name_es": "Hombre de Arena",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/bard/archetypes/paizo-bard-archetypes/sandman/",
    "description_es": "Bardo embaucador que cambia inspirar valor y muchas interpretaciones clásicas por la habilidad de robar conjuros con el contacto, ataque furtivo y canciones que adormecen.",
    "description_en": "A trickster bard who swaps inspire courage and many classic performances for the ability to steal spells with a touch, sneak attack, and sleep-inducing songs.",
    "features_removed": [
      "Inspire Courage (1)",
      "Bardic Knowledge (1)",
      "Versatile Performance (2)",
      "Inspire Competence (3)",
      "Lore Master (5)",
      "Suggestion (6)",
      "Inspire Greatness (9)",
      "Inspire Heroics (15)",
      "Mass Suggestion (18)",
      "Deadly Performance (20)"
    ],
    "features_gained": [
      {
        "name": "Robar Conjuro (Sb)",
        "name_en": "Stealspell (Su)",
        "description_es": "Mediante interpretación y un ataque de contacto puede robar un hechizo preparado o conocido de otra criatura.",
        "description_en": "Through performance and a touch attack, may steal a prepared spell or spell known from another creature.",
        "level": 1
      },
      {
        "name": "Maestro del Engaño (Ex)",
        "name_en": "Master of Deception (Ex)",
        "description_es": "Bono a Engañar, Juego de Manos y Sigilo igual a la mitad del nivel.",
        "description_en": "Bonus to Bluff, Sleight of Hand, and Stealth equal to half his level.",
        "level": 1
      },
      {
        "name": "Hechizo Furtivo (Sb)",
        "name_en": "Sneakspell (Su)",
        "description_es": "Sus conjuros aumentan su CD contra enemigos desprevenidos.",
        "description_en": "His spells gain a higher save DC against flat-footed targets.",
        "level": 2
      },
      {
        "name": "Ataque Furtivo (Ex)",
        "name_en": "Sneak Attack (Ex)",
        "description_es": "+1d6 de daño contra blancos a los que flanquea o que pierden su bono de Destreza, aumentando con el nivel.",
        "description_en": "+1d6 damage against targets he flanks or that lose their Dex bonus, scaling with level.",
        "level": 1
      },
      {
        "name": "Canción del Sueño (Sb)",
        "name_en": "Slumber Song (Su)",
        "description_es": "Al nivel 6 reemplaza Sugestión con una interpretación que deja inconscientes a los enemigos.",
        "description_en": "At 6th level replaces Suggestion with a performance that puts foes to sleep.",
        "level": 6
      }
    ]
  },
  "dawnflower_dervish": {
    "class": "bard",
    "name": "Dawnflower Dervish",
    "name_en": "Dawnflower Dervish",
    "name_es": "Derviche de la Flor del Alba",
    "source": "Inner Sea Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/bard/archetypes/paizo-bard-archetypes/dawnflower-dervish/",
    "description_es": "Bardo bailarín devoto de Sarenrae que canaliza la magia mediante una danza giratoria con cimitarra; sus interpretaciones solo le afectan a él pero con bonificaciones dobles.",
    "description_en": "A spinning, scimitar-wielding bard devoted to Sarenrae whose performances affect only herself but at double the normal bonuses.",
    "features_removed": [
      "Rapier and whip proficiency",
      "Bardic Knowledge (1)",
      "Lore Master (5)",
      "Dirge of Doom (8)"
    ],
    "features_gained": [
      {
        "name": "Danza de Batalla (Sb)",
        "name_en": "Battle Dance (Su)",
        "description_es": "Las interpretaciones le otorgan el doble de bonos pero solo a sí mismo; comienza como acción de movimiento (rápida al nivel 10).",
        "description_en": "Performances grant her double the normal bonuses, but only to herself; starts as a move action (swift at 10th).",
        "level": 1
      },
      {
        "name": "Danza del Derviche",
        "name_en": "Dervish Dance",
        "description_es": "Recibe la dote Danza del Derviche como bono, ganando competencia y beneficios con la cimitarra.",
        "description_en": "Gains Dervish Dance as a bonus feat, granting scimitar proficiency and benefits.",
        "level": 2
      },
      {
        "name": "Lanzador Giratorio (Ex)",
        "name_en": "Spinning Spellcaster (Ex)",
        "description_es": "Al nivel 5 gana +4 de Concentración para lanzar a la defensiva durante la danza.",
        "description_en": "At 5th level gains +4 to Concentration for defensive casting while dancing.",
        "level": 5
      },
      {
        "name": "Remolino Meditativo (Sb)",
        "name_en": "Meditative Whirl (Su)",
        "description_es": "Al nivel 8, mientras baila puede acelerar conjuros de cure como acción de movimiento, una vez al día más una por cada 2 niveles tras el 8º.",
        "description_en": "At 8th level, while dancing she may quicken cure spells as a move action, once per day plus one per two levels after 8th.",
        "level": 8
      }
    ]
  },
  "dirge_bard": {
    "class": "bard",
    "name": "Dirge Bard",
    "name_en": "Dirge Bard",
    "name_es": "Bardo de Endecha",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/bard/archetypes/paizo-bard-archetypes/dirge-bard/",
    "description_es": "Bardo lúgubre que comulga con los muertos, intercambiando experiencia versátil y maestría de saberes por defensas contra necromancia, capacidades sobre no-muertos y animación de cadáveres.",
    "description_en": "A mournful bard who communes with the dead, trading versatile performance and lore mastery for defenses against necromancy, undead-affecting abilities, and corpse animation.",
    "features_removed": [
      "Well-Versed (2)",
      "Versatile Performance (2)",
      "Lore Master (5)",
      "Jack of All Trades (10)"
    ],
    "features_gained": [
      {
        "name": "Ojos Atormentados (Ex)",
        "name_en": "Haunted Eyes (Ex)",
        "description_es": "Al nivel 2 gana +4 a salvaciones contra miedo, drenado de energía, efectos de muerte y necromancia.",
        "description_en": "At 2nd level gains +4 on saves against fear, energy drain, death effects, and necromancy.",
        "level": 2
      },
      {
        "name": "Secretos de la Tumba (Sb)",
        "name_en": "Secrets of the Grave (Su)",
        "description_es": "Bono a Conocimiento (religión) para identificar no-muertos; puede afectar a no-muertos con conjuros mentales y añade hechizos de necromancia.",
        "description_en": "Bonus to Knowledge (religion) to identify undead; can affect undead with mind-affecting spells and adds necromancy spells.",
        "level": 2
      },
      {
        "name": "Estribillo Acechante (Sb)",
        "name_en": "Haunting Refrain (Su)",
        "description_es": "Al nivel 5 usa Interpretar (teclado o percusión) en vez de Intimidar para acobardar; los efectos de miedo aplican -2 adicional a las salvaciones, escalando.",
        "description_en": "At 5th level uses Perform (keyboard/percussion) instead of Intimidate to demoralize; fear effects gain an extra -2 to saves, scaling.",
        "level": 5
      },
      {
        "name": "Danza de los Muertos (Sb)",
        "name_en": "Dance of the Dead (Su)",
        "description_es": "Al nivel 10 anima esqueletos o zombis durante su interpretación bárdica sin componentes ni descriptor maligno; cesan al terminar la actuación.",
        "description_en": "At 10th level animates skeletons or zombies during bardic performance without components or evil descriptor; they cease when the performance ends.",
        "level": 10
      }
    ]
  },
  "detective": {
    "class": "bard",
    "name": "Detective",
    "name_en": "Detective",
    "name_es": "Detective",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/bard/archetypes/paizo-bard-archetypes/detective/",
    "description_es": "Bardo investigador que reemplaza Inspirar Valor y experiencia versátil por trabajo en equipo, intuición arcana, ojo para el detalle y capacidad de descubrir mentiras y enemigos invisibles.",
    "description_en": "An investigative bard who swaps inspire courage and versatile performance for teamwork, arcane insight, an eye for detail, and the ability to expose lies and hidden foes.",
    "features_removed": [
      "Inspire Courage (1)",
      "Bardic Knowledge (1)",
      "Well-Versed (2)",
      "Versatile Performance (2)"
    ],
    "features_gained": [
      {
        "name": "Trabajo en Equipo Cuidadoso",
        "name_en": "Careful Teamwork",
        "description_es": "Tras 3 asaltos de interpretación, los aliados a 30 pies ganan bonos a iniciativa, Avistar, Inutilizar Mecanismo, Reflejos y CA contra trampas.",
        "description_en": "After 3 rounds of performance, allies within 30 ft. gain bonuses to initiative, Perception, Disable Device, Reflex, and AC against traps.",
        "level": 1
      },
      {
        "name": "Ojo para el Detalle (Ex)",
        "name_en": "Eye for Detail (Ex)",
        "description_es": "Suma la mitad de su nivel a Conocimiento (local), Avistar, Averiguar Intenciones y Diplomacia para recopilar información.",
        "description_en": "Adds half his level to Knowledge (local), Perception, Sense Motive, and Diplomacy for gathering information.",
        "level": 1
      },
      {
        "name": "Intuición Arcana (Sb)",
        "name_en": "Arcane Insight (Su)",
        "description_es": "Al nivel 2 puede localizar e inutilizar trampas mágicas y obtiene +4 contra ilusiones y para penetrar protecciones de adivinación.",
        "description_en": "At 2nd level can locate and disable magical traps and gains +4 against illusions and to penetrate divination protections.",
        "level": 2
      },
      {
        "name": "Confesión Verdadera (Sb)",
        "name_en": "True Confession (Su)",
        "description_es": "Al nivel 9, tras 3 asaltos de interpretación, una criatura debe superar Voluntad o revelar mentiras, encantamientos o compulsiones.",
        "description_en": "At 9th level, after 3 rounds of performance, a creature must save Will or reveal lies, enchantments, or compulsions.",
        "level": 9
      },
      {
        "name": "Investigación Arcana",
        "name_en": "Arcane Investigation",
        "description_es": "Añade hechizos de divinación e investigación a su lista bárdica.",
        "description_en": "Adds investigation-themed divination spells to the bard list.",
        "level": 2
      }
    ]
  },
  "blood_conduit": {
    "class": "bloodrager",
    "name": "Blood Conduit",
    "name_en": "Blood Conduit",
    "name_es": "Conducto Sanguíneo",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo-bloodrager-archetypes/blood-conduit/",
    "description_es": "Un bloodrager que canaliza magia arcana mediante el contacto físico, entregando hechizos de toque a través de maniobras de combate. Sacrifica movilidad y voluntad por sinergia entre maniobras y conjuros.",
    "description_en": "A bloodrager who channels arcane magic through physical contact, delivering touch spells via combat maneuvers. Trades movement and will for synergy between maneuvers and spellcasting.",
    "features_removed": [
      "Fast Movement (1st)",
      "Uncanny Dodge (2nd)",
      "Improved Uncanny Dodge (5th)",
      "Indomitable Will (14th)"
    ],
    "features_gained": [
      {
        "name": "Contact Specialist (Ex)",
        "name_en": "Contact Specialist (Ex)",
        "description_es": "A nivel 1 obtiene un dote extra de combate (Improved Bull Rush, Grapple, Reposition, Trip, o Unarmed Strike) sin cumplir requisitos.",
        "description_en": "At 1st level, gains a bonus combat feat from Improved Bull Rush, Grapple, Reposition, Trip, or Unarmed Strike without meeting prerequisites.",
        "level": 1
      },
      {
        "name": "Spell Conduit (Su)",
        "name_en": "Spell Conduit (Su)",
        "description_es": "A nivel 5, con armadura ligera o ninguna, puede entregar conjuros de toque como acción rápida tras éxito en una maniobra de combate o golpe sin armas, sin tirada de toque adicional.",
        "description_en": "At 5th level, in light or no armor, can deliver touch spells as a swift action after succeeding on a combat maneuver or unarmed strike, without an additional touch attack.",
        "level": 5
      },
      {
        "name": "Reflexive Conduit (Su)",
        "name_en": "Reflexive Conduit (Su)",
        "description_es": "A nivel 14, cuando un enemigo intenta una maniobra contra él puede lanzar un conjuro de toque como acción inmediata, usando su tirada de maniobra en lugar de la de toque.",
        "description_en": "At 14th level, when an enemy attempts a combat maneuver against him, he may cast a touch spell as an immediate action, using his maneuver check instead of a touch attack.",
        "level": 14
      }
    ]
  },
  "crossblooded_rager": {
    "class": "bloodrager",
    "name": "Crossblooded Rager",
    "name_en": "Crossblooded Rager",
    "name_es": "Rabioso de Sangre Cruzada",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo-bloodrager-archetypes/crossblooded-rager/",
    "description_es": "Manifiesta dos linajes simultáneamente, ganando poderes de ambos a costa de una notable penalización a las salvaciones de Voluntad. Mayor versatilidad por menor fortaleza mental.",
    "description_en": "Manifests two bloodlines at once, gaining powers from both at the cost of a steep penalty to Will saves. Greater versatility for reduced mental fortitude.",
    "features_removed": [
      "Single Bloodline restriction",
      "Bonus to Will saves during bloodrage"
    ],
    "features_gained": [
      {
        "name": "Two Bloodlines",
        "name_en": "Two Bloodlines",
        "description_es": "Selecciona dos linajes de bloodrager y obtiene los dotes y conjuros de linaje de ambos.",
        "description_en": "Selects two bloodrager bloodlines and gains the bonus feats and bloodline spells of both.",
        "level": 1
      },
      {
        "name": "Combined Bloodline Powers",
        "name_en": "Combined Bloodline Powers",
        "description_es": "Cada vez que gana un poder de linaje puede elegirlo de cualquiera de los dos linajes; opcionalmente sustituye un poder superior por uno inferior no aprendido.",
        "description_en": "When gaining a bloodline power, may choose from either bloodline; may also swap a higher power for a lower one not yet learned.",
        "level": 1
      },
      {
        "name": "Conflicting Bloodlines",
        "name_en": "Conflicting Bloodlines",
        "description_es": "Sufre una penalización de –2 a todas las salvaciones de Voluntad permanente, y bonificadores morales reducidos durante el bloodrage.",
        "description_en": "Suffers a permanent –2 penalty to all Will saves, and reduced morale bonuses while bloodraging.",
        "level": 1
      }
    ],
    "sub_options": {
      "bloodlines": "Elige DOS linajes (como crossblooded sorcerer). Obtiene poderes de ambos pero con 1 nivel de retraso. Penalización de -2 a todas las tiradas de voluntad. / Selects TWO bloodlines. Gains powers from both but 1 level delayed. -2 penalty to all will saves."
    }
  },
  "metamagic_rager": {
    "class": "bloodrager",
    "name": "Metamagic Rager",
    "name_en": "Metamagic Rager",
    "name_es": "Rabioso Metamágico",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo-bloodrager-archetypes/metamagic-rager/",
    "description_es": "Sacrifica rondas de bloodrage para aplicar dotes metamágicos a sus conjuros sin aumentar el nivel del espacio. Cambia esquiva mejorada por flexibilidad arcana.",
    "description_en": "Sacrifices bloodrage rounds to apply metamagic feats to spells without increasing slot level. Trades improved uncanny dodge for arcane flexibility.",
    "features_removed": [
      "Improved Uncanny Dodge (5th)"
    ],
    "features_gained": [
      {
        "name": "Meta-Rage (Su)",
        "name_en": "Meta-Rage (Su)",
        "description_es": "A nivel 5, gasta rondas de bloodrage iguales al doble del nivel ajustado del conjuro (mín. 2) para aplicar un dote metamágico conocido sin aumentar el nivel del espacio. Funciona incluso fuera del bloodrage.",
        "description_en": "At 5th level, spends bloodrage rounds equal to twice the adjusted spell level (min 2) to apply a known metamagic feat without raising slot level. Works even when not bloodraging.",
        "level": 5
      },
      {
        "name": "Metamagic Bloodline Feats",
        "name_en": "Metamagic Bloodline Feats",
        "description_es": "Al elegir dotes de linaje, puede escoger dotes metamágicos en su lugar.",
        "description_en": "When selecting bloodline feats, may choose metamagic feats instead."
      }
    ],
    "sub_options": {
      "bloodlines": "Mantiene el linaje de sangre estándar. Los poderes de rabia se sustituyen por la habilidad de aplicar metamagia a sus propios hechizos de forma espontánea mientras rages. El linaje determina qué hechizos pueden potenciarse. / Keeps standard bloodline. Rage powers replaced by ability to spontaneously apply metamagic to own spells while raging. Bloodline determines which spells can be enhanced."
    }
  },
  "rageshaper": {
    "class": "bloodrager",
    "name": "Rageshaper",
    "name_en": "Rageshaper",
    "name_es": "Modelador de Furia",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo-bloodrager-archetypes/rageshaper/",
    "description_es": "Vuelca su poder arcano en transformaciones físicas, fusionando magia de polimorfismo con combate bestial. Pierde algunas defensas a cambio de formas mejoradas.",
    "description_en": "Pours arcane power into physical transformations, blending polymorph magic with bestial combat. Trades some defenses for empowered shapes.",
    "features_removed": [
      "Blood Sanctuary (4th)",
      "Improved Uncanny Dodge (5th)"
    ],
    "features_gained": [
      {
        "name": "Bestial Aspect (Su)",
        "name_en": "Bestial Aspect (Su)",
        "description_es": "A nivel 4, sus ataques naturales otorgados por conjuros de polimorfismo aumentan un escalón de dado; a nivel 9 añade 10 pies a velocidades de movimiento concedidas por la forma.",
        "description_en": "At 4th level, natural attacks from polymorph spells increase one die step; at 9th, adds 10 ft to movement speeds granted by altered forms.",
        "level": 4
      },
      {
        "name": "Furious Transformation (Su)",
        "name_en": "Furious Transformation (Su)",
        "description_es": "A nivel 5 puede lanzar conjuros de transmutación/polimorfismo de su lista durante el bloodrage con duración extendida; los conjuros del descriptor de su linaje se extienden automáticamente sin tirada de concentración.",
        "description_en": "At 5th level, can cast transmutation/polymorph spells from the bloodrager list while raging with extended duration; spells matching the bloodline are automatically extended without a concentration check.",
        "level": 5
      }
    ],
    "sub_options": {
      "bloodlines": "Requiere linaje Bestia (Beast) o Primordial. Los poderes de linaje se centran en la transformación física durante la rabia. La forma de rabia del rageshaper refleja el linaje elegido (reptil, mamífero, etc.). / Requires Beast or Primal bloodline. Bloodline powers focus on physical transformation during rage. Rageshaper's rage form reflects chosen bloodline (reptile, mammal, etc.)."
    }
  },
  "spelleater": {
    "class": "bloodrager",
    "name": "Spelleater",
    "name_en": "Spelleater",
    "name_es": "Devorador de Conjuros",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/bloodrager/archetypes/paizo-bloodrager-archetypes/spelleater/",
    "description_es": "Sacrifica defensas y reducción de daño por curación sostenida durante el bloodrage y la capacidad de consumir espacios de conjuro para sanar.",
    "description_en": "Trades defenses and damage reduction for sustained fast healing while raging and the ability to consume spell slots for healing.",
    "features_removed": [
      "Uncanny Dodge (2nd)",
      "Damage Reduction (7th)",
      "Improved Uncanny Dodge (5th)"
    ],
    "features_gained": [
      {
        "name": "Blood of Life (Su)",
        "name_en": "Blood of Life (Su)",
        "description_es": "A nivel 2 obtiene curación rápida 1 mientras está en bloodrage, aumentando cada 3 niveles hasta 6 a nivel 19. Las mejoras de DR se añaden a su DR efectiva.",
        "description_en": "At 2nd level, gains fast healing 1 while bloodraging, increasing every 3 levels to a max of 6 at 19th. Improvements to damage reduction add to his effective DR.",
        "level": 2
      },
      {
        "name": "Spell Eating (Su)",
        "name_en": "Spell Eating (Su)",
        "description_es": "A nivel 5, como acción rápida puede consumir un espacio de conjuro de bloodrager sin usar para curar 1d8 puntos de daño por nivel del espacio.",
        "description_en": "At 5th level, as a swift action may consume an unused bloodrager spell slot to heal 1d8 damage per level of the slot.",
        "level": 7
      }
    ]
  },
  "snakebite_striker": {
    "class": "brawler",
    "name": "Snakebite Striker",
    "name_en": "Snakebite Striker",
    "name_es": "Atacante Serpiente",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/brawler/archetypes/paizo-brawler-archetypes/snakebite-striker/",
    "description_es": "Cambia versatilidad marcial por daño furtivo y maniobras astutas, golpeando a enemigos desprevenidos con velocidad y engaño.",
    "description_en": "Trades martial versatility for sneak attack damage and cunning maneuvers, striking flat-footed foes with speed and deception.",
    "features_removed": [
      "Martial Flexibility (1st)",
      "Maneuver Training (3rd, 7th, 11th, 19th)"
    ],
    "features_gained": [
      {
        "name": "Sneak Attack (Ex)",
        "name_en": "Sneak Attack (Ex)",
        "description_es": "A nivel 1, +1d6 de daño furtivo, aumentando a niveles 6, 10, 12 y 20. Se acumula con otras fuentes de ataque furtivo.",
        "description_en": "At 1st level, +1d6 sneak attack, increasing at 6th, 10th, 12th, and 20th. Stacks with sneak attack from other sources.",
        "level": 1
      },
      {
        "name": "Snake Feint (Ex)",
        "name_en": "Snake Feint (Ex)",
        "description_es": "A nivel 3 combina movimiento con un finta. A nivel 11 trata su casilla y una adyacente como puntos de origen para el flanqueo; a nivel 15 añade otra casilla.",
        "description_en": "At 3rd level, combines movement with a feint. At 11th, designates her square and one adjacent square as flanking origins; at 15th, adds an additional square.",
        "level": 3
      },
      {
        "name": "Opportunist (Ex)",
        "name_en": "Opportunist (Ex)",
        "description_es": "A nivel 11 hace un ataque de oportunidad extra por asalto cuando un aliado daña a un enemigo en cuerpo a cuerpo. A nivel 19 son dos por asalto.",
        "description_en": "At 11th level, gains one extra attack of opportunity per round when an ally damages a foe in melee. At 19th, two per round.",
        "level": 11
      }
    ],
    "class_skills_add": [
      "bluff",
      "stealth"
    ],
    "class_skills_remove": [
      "intimidate"
    ]
  },
  "shield_champion": {
    "class": "brawler",
    "name": "Shield Champion",
    "name_en": "Shield Champion",
    "name_es": "Campeón del Escudo",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/brawler/archetypes/paizo-brawler-archetypes/shield-champion/",
    "description_es": "Convierte su escudo en arma arrojadiza que rebota para atacar varios enemigos, sacrificando entrenamiento de maniobras por dominio del escudo.",
    "description_en": "Turns the shield into a thrown weapon that ricochets between foes, sacrificing maneuver training for shield mastery.",
    "features_removed": [
      "Maneuver Training (3rd, 7th, 11th, 15th, 19th)",
      "Brawler's Strike (modified)"
    ],
    "features_gained": [
      {
        "name": "Throw Shield (Ex)",
        "name_en": "Throw Shield (Ex)",
        "description_es": "A nivel 3 puede arrojar escudos pesados o ligeros como armas con alcance mejorado; a niveles superiores aplica maniobras y dotes a esos lanzamientos.",
        "description_en": "At 3rd level, can throw a heavy or light shield as a weapon with extended range; at higher levels, applies combat maneuvers and feats to thrown shields.",
        "level": 3
      },
      {
        "name": "Returning Shield (Ex)",
        "name_en": "Returning Shield (Ex)",
        "description_es": "A nivel 5 los escudos arrojados rebotan y vuelven a la mano; mejoras posteriores permiten múltiples rebotes y tratar el punto de rebote como origen para flanqueo.",
        "description_en": "At 5th level, thrown shields ricochet back; later improvements allow multiple ricochets and treat the ricochet point as the attack origin for flanking.",
        "level": 5
      },
      {
        "name": "Champion Defense (Ex)",
        "name_en": "Champion Defense (Ex)",
        "description_es": "A nivel 15, una vez al día, al ser reducido a 0 PG puede intentar una salvación de Fortaleza para reducir el daño a la mitad; dos veces al día a nivel 19.",
        "description_en": "At 15th level, once per day when reduced to 0 HP, may attempt a Fortitude save to halve the damage; twice per day at 19th.",
        "level": 15
      }
    ]
  },
  "mutagenic_mauler": {
    "class": "brawler",
    "name": "Mutagenic Mauler",
    "name_en": "Mutagenic Mauler",
    "name_es": "Maceador Mutagénico",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/brawler/archetypes/paizo-brawler-archetypes/mutagenic-mauler/",
    "description_es": "Usa alquimia para potenciar su cuerpo, ganando mutágenos y rasgos bestiales a costa de su flexibilidad marcial y bonificación a CA.",
    "description_en": "Uses alchemy to enhance the body, gaining mutagens and beast-like traits at the cost of martial flexibility and AC bonus.",
    "features_removed": [
      "Martial Flexibility (1st)",
      "AC Bonus (4th)"
    ],
    "features_gained": [
      {
        "name": "Mutagen (Su)",
        "name_en": "Mutagen (Su)",
        "description_es": "A nivel 1 prepara y bebe mutágenos como un alquimista. Otorga +2 al daño a nivel 6, +3 a nivel 11 y +4 a nivel 16; gana descubrimientos a niveles 10 y 12.",
        "description_en": "At 1st level, brews and imbibes mutagens as an alchemist. Grants +2 damage at 6th, +3 at 11th, +4 at 16th; gains alchemist discoveries at 10th and 12th.",
        "level": 1
      },
      {
        "name": "Beastmorph (Su)",
        "name_en": "Beastmorph (Su)",
        "description_es": "A nivel 4, mientras esté bajo los efectos del mutágeno, gana visión en penumbra, +10 a velocidad y visión en la oscuridad de 30 pies; mejoras a niveles 13 y 18.",
        "description_en": "At 4th level, while under a mutagen, gains low-light vision, +10 ft speed, and 30-ft darkvision; improvements at 13th and 18th.",
        "level": 4
      }
    ]
  },
  "wild_child": {
    "class": "brawler",
    "name": "Wild Child",
    "name_en": "Wild Child",
    "name_es": "Niño Salvaje",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/brawler/archetypes/paizo-brawler-archetypes/wild-child/",
    "description_es": "Forja vínculo con un compañero animal y aprende trucos de cazador, sacrificando varios dotes de combate adicionales por sinergia con la bestia.",
    "description_en": "Bonds with an animal companion and learns hunter tricks, trading several bonus combat feats for synergy with the beast.",
    "features_removed": [
      "Bonus Combat Feats (2nd, 5th, 8th, 11th, 14th, 17th, 20th)",
      "Close Weapon Mastery (5th)"
    ],
    "features_gained": [
      {
        "name": "Animal Companion (Ex)",
        "name_en": "Animal Companion (Ex)",
        "description_es": "A nivel 1 obtiene un compañero animal de la lista del druida, usando el nivel de brawler como nivel de druida efectivo.",
        "description_en": "At 1st level, gains a druid-list animal companion, using brawler level as effective druid level.",
        "level": 1
      },
      {
        "name": "Hunter's Tricks (Ex)",
        "name_en": "Hunter's Tricks (Ex)",
        "description_es": "Puede gastar usos de flexibilidad marcial para activar trucos de hostigador del ranger (no a distancia) sin acción adicional.",
        "description_en": "May expend martial flexibility uses to activate ranger skirmisher tricks (non-ranged) with no action cost.",
        "level": 2
      },
      {
        "name": "Maneuver Training (Ex)",
        "name_en": "Maneuver Training (Ex)",
        "description_es": "Cuando entrena una maniobra de combate, su compañero animal aprende un truco relacionado sin contar contra su límite.",
        "description_en": "When training a combat maneuver, the animal companion learns a related trick without counting against its trick limit.",
        "level": 3
      },
      {
        "name": "Wild Tricks (Ex)",
        "name_en": "Wild Tricks (Ex)",
        "description_es": "A nivel 5 y cada 6 niveles después gana trucos de cazador (no a distancia), usables 1/2 nivel + Con por día.",
        "description_en": "At 5th level and every 6 levels thereafter, gains hunter tricks (non-ranged), usable 1/2 level + Con modifier per day.",
        "level": 5
      }
    ],
    "class_skills_add": [
      "heal"
    ]
  },
  "strangler": {
    "class": "brawler",
    "name": "Strangler",
    "name_en": "Strangler",
    "name_es": "Estrangulador",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/brawler/archetypes/paizo-brawler-archetypes/strangler/",
    "description_es": "Especialista en presa que mata por estrangulación, ganando daño furtivo en grapple y técnicas mortales contra inmovilizados a cambio de varias capacidades estándar del brawler.",
    "description_en": "Grapple specialist who kills by choking, gaining sneak damage on grapple and lethal techniques against pinned foes in exchange for several standard brawler features.",
    "features_removed": [
      "Unarmed Strike (modified)",
      "Brawler's Flurry (1st)",
      "AC Bonus (4th)",
      "Knockout (8th)",
      "Awesome Blow (12th)",
      "Improved Awesome Blow (16th)"
    ],
    "features_gained": [
      {
        "name": "Strangle (Ex)",
        "name_en": "Strangle (Ex)",
        "description_es": "Inflige +1d6 de daño furtivo cuando tiene éxito en una tirada de presa para dañar o inmovilizar; aumenta a niveles 2, 8 y 15.",
        "description_en": "Deals +1d6 sneak damage when succeeding on a grapple check to damage or pin; increases at 2nd, 8th, and 15th.",
        "level": 1
      },
      {
        "name": "Practiced Strangler (Ex)",
        "name_en": "Practiced Strangler (Ex)",
        "description_es": "A nivel 2 ignora penalizadores de Destreza al estar agarrado; a nivel 9 puede hacer ataques de oportunidad y mantiene su bonificador de Destreza estando inmovilizado.",
        "description_en": "At 2nd level, ignores Dex penalties while grappled; at 9th, can make attacks of opportunity and keeps Dex bonus while pinned.",
        "level": 4
      },
      {
        "name": "Sleeper Hold (Ex)",
        "name_en": "Sleeper Hold (Ex)",
        "description_es": "A nivel 4 puede dejar inconsciente a un enemigo inmovilizado mediante una tirada de presa; usos extra a niveles 10 y 16.",
        "description_en": "At 4th level, may render a pinned foe unconscious via grapple check; extra uses at 10th and 16th.",
        "level": 8
      },
      {
        "name": "Neckbreaker (Ex)",
        "name_en": "Neckbreaker (Ex)",
        "description_es": "A nivel 16 puede matar al instante a un enemigo inmovilizado como acción estándar (acción de movimiento a nivel 20), permitiendo una salvación de Fortaleza.",
        "description_en": "At 16th level, may instantly kill a pinned foe as a standard action (move action at 20th), allowing a Fortitude save.",
        "level": 12
      }
    ],
    "class_skills_add": [
      "stealth"
    ]
  },
  "gendarme": {
    "class": "cavalier",
    "name": "Gendarme",
    "name_en": "Gendarme",
    "name_es": "Gendarme",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/cavalier/archetypes/paizo-cavalier-archetypes/gendarme/",
    "description_es": "Cavalier centrado en la carga montada devastadora, sacrificando táctica de equipo por más dotes de combate y un poder de carga aniquilador.",
    "description_en": "Cavalier focused on devastating mounted charges, trading team tactics for more combat feats and an obliterating charge.",
    "features_removed": [
      "Tactician (1st)",
      "Greater Tactician (9th)",
      "Master Tactician (17th)"
    ],
    "features_gained": [
      {
        "name": "Bonus Feats",
        "name_en": "Bonus Feats",
        "description_es": "A nivel 1, 5 y cada 3 niveles después gana un dote extra elegido entre Improved Bull Rush, Mounted Combat, Power Attack, Ride-by Attack, Spirited Charge, Spring Attack y Unseat.",
        "description_en": "At 1st, 5th, and every 3 levels thereafter, gains a bonus feat from Improved Bull Rush, Mounted Combat, Power Attack, Ride-by Attack, Spirited Charge, Spring Attack, and Unseat."
      },
      {
        "name": "Transfixing Charge (Ex)",
        "name_en": "Transfixing Charge (Ex)",
        "description_es": "A nivel 20, los ataques de carga montada infligen daño triple (cuádruple con lanza), incluyendo bonos. Los críticos confirmados en carga montada infligen daño máximo de arma.",
        "description_en": "At 20th level, mounted charge attacks deal triple damage (quadruple with a lance), including bonuses. Confirmed criticals on mounted charges deal maximum weapon damage.",
        "level": 9
      }
    ],
    "sub_options": {
      "spirits": "No tiene la habilidad Táctica (Tactician) estándar del caballero. En su lugar el caballo de batalla actúa como una extensión del espíritu de combate del jinete, ganando mejoras especiales de combate montado. / Lacks standard Cavalier Tactician ability. Instead the warhorse acts as an extension of the rider's fighting spirit, gaining special mounted combat enhancements."
    }
  },
  "honor_guard": {
    "class": "cavalier",
    "name": "Honor Guard",
    "name_en": "Honor Guard",
    "name_es": "Guardia de Honor",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/cavalier/archetypes/paizo-cavalier-archetypes/honor-guard/",
    "description_es": "Cavalier protector que sacrifica su propia capacidad de carga y desafío ofensivo para escudar a un aliado designado.",
    "description_en": "Protective cavalier who trades offensive charge and challenge in order to shield a designated ally.",
    "features_removed": [
      "Challenge (modified)",
      "Cavalier's Charge (3rd)",
      "Mighty Charge (11th)",
      "Demanding Challenge (12th)"
    ],
    "features_gained": [
      {
        "name": "Sworn Defense (Ex)",
        "name_en": "Sworn Defense (Ex)",
        "description_es": "Al desafiar designa a un aliado como su tutelado: mientras esté adyacente, sufre –1 a CA y el aliado gana +1 de bono por esquiva a CA.",
        "description_en": "When issuing a challenge, designates one ally as ward; while adjacent, takes –1 AC and the ward gains +1 dodge bonus to AC."
      },
      {
        "name": "Intercept (Ex)",
        "name_en": "Intercept (Ex)",
        "description_es": "A nivel 3 obtiene Bodyguard sin requisitos; al usar ayudar a otro para mejorar la CA de un aliado concede +1 adicional.",
        "description_en": "At 3rd level, gains Bodyguard without prerequisites; aid another to boost an ally's AC grants an extra +1.",
        "level": 3
      },
      {
        "name": "Warding Charge (Ex)",
        "name_en": "Warding Charge (Ex)",
        "description_es": "A nivel 11, como acción inmediata puede moverse hasta su velocidad y atacar cuando el objetivo de su desafío ataca a su tutelado.",
        "description_en": "At 11th level, as an immediate action may move up to its speed and make a melee attack when its challenged target attacks its ward.",
        "level": 11
      },
      {
        "name": "Defensive Challenge (Ex)",
        "name_en": "Defensive Challenge (Ex)",
        "description_es": "A nivel 12, el objetivo del desafío sufre –2 a tiradas de ataque contra cualquiera salvo el cavalier mientras esté en su área amenazada.",
        "description_en": "At 12th level, the challenge target suffers –2 to attack rolls against anyone other than the cavalier while in his threatened area.",
        "level": 12
      }
    ]
  },
  "musketeer": {
    "class": "cavalier",
    "name": "Musketeer",
    "name_en": "Musketeer",
    "name_es": "Mosquetero",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/cavalier/archetypes/paizo-cavalier-archetypes/musketeer/",
    "description_es": "Cavalier con un arma de fuego personal en lugar de montura, especializado en pistolas y mosquetes como símbolo de su orden.",
    "description_en": "Cavalier with a personal firearm instead of a mount, specializing in pistols and muskets as the symbol of his order.",
    "features_removed": [
      "Mount (1st)",
      "Expert Trainer (4th)",
      "Heavy Armor Proficiency"
    ],
    "features_gained": [
      {
        "name": "Gifted Firearm (Ex)",
        "name_en": "Gifted Firearm (Ex)",
        "description_es": "A nivel 1 recibe una pistola o mosquete que no puede vender y obtiene Gunsmithing. A nivel 8 puede concentrarse 1 minuto para ganar bonos como Improved Critical, reducir misfire (11), doblar incremento de alcance (17) y una andanada (20).",
        "description_en": "At 1st level, receives a bound pistol or musket and gains Gunsmithing. At 8th, may focus for 1 minute to gain Improved Critical, reduced misfire (11th), doubled range increment (17th), and a flurry of gunfire (20th).",
        "level": 1
      },
      {
        "name": "Swift Powder (Ex)",
        "name_en": "Swift Powder (Ex)",
        "description_es": "A nivel 4 gana Rapid Reload como dote extra; a nivel 14 puede recargar como acción gratuita al emitir un desafío.",
        "description_en": "At 4th level, gains Rapid Reload as a bonus feat; at 14th, may reload as a free action when issuing a challenge.",
        "level": 4
      }
    ]
  },
  "strategist": {
    "class": "cavalier",
    "name": "Strategist",
    "name_en": "Strategist",
    "name_es": "Estratega",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/cavalier/archetypes/paizo-cavalier-archetypes/strategist/",
    "description_es": "Cavalier centrado en el liderazgo táctico, capaz de enseñar dotes de equipo a sus aliados y anular las tácticas enemigas a niveles altos.",
    "description_en": "Cavalier focused on tactical leadership, able to teach teamwork feats to allies and cancel enemy tactics at high levels.",
    "features_removed": [
      "Expert Trainer (4th)",
      "Greater Banner (14th)",
      "Bonus Feat (18th)"
    ],
    "features_gained": [
      {
        "name": "Tactician (Ex, mejorado)",
        "name_en": "Tactician (Ex, improved)",
        "description_es": "Versión mejorada de Tactician: 1/día a nivel 1 más uno extra a nivel 5 y cada 4 niveles después (máx. 5/día a nivel 17).",
        "description_en": "Enhanced Tactician: usable 1/day at 1st, plus an extra use at 5th and every 4 levels thereafter (max 5/day at 17th).",
        "level": 1
      },
      {
        "name": "Drill Instructor (Ex)",
        "name_en": "Drill Instructor (Ex)",
        "description_es": "Gasta un uso de desafío y 10 minutos para conceder a hasta cuatro aliados un dote de equipo que conozca, sin requisitos, durante 10 min + 1 min por cada 2 niveles mientras permanezca visible y audible.",
        "description_en": "Expends one challenge use and 10 minutes to grant up to four allies a teamwork feat he knows, ignoring prerequisites, for 10 min + 1 min per 2 levels while he remains visible and audible.",
        "level": 4
      },
      {
        "name": "Tactical Advantage (Ex)",
        "name_en": "Tactical Advantage (Ex)",
        "description_es": "Le permite moverse hasta su velocidad antes o después de usar tactician.",
        "description_en": "Lets him move up to his speed before or after using the tactician ability.",
        "level": 9
      },
      {
        "name": "Strategic Supremacy (Ex)",
        "name_en": "Strategic Supremacy (Ex)",
        "description_es": "A nivel 18 puede cancelar un dote de equipo enemigo a 30 pies en lugar de conceder uno a un aliado.",
        "description_en": "At 18th level, may cancel one enemy teamwork feat within 30 feet instead of granting an ally a feat.",
        "level": 14
      }
    ]
  },
  "evangelist": {
    "class": "cleric",
    "name": "Evangelist",
    "name_en": "Evangelist",
    "name_es": "Evangelista",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/evangelist/",
    "description_es": "Sacerdote predicador que renuncia a parte de su canalización y armadura para inspirar a sus aliados con sermones casi mágicos.",
    "description_en": "Preaching priest who gives up some channeling and armor to inspire allies with near-magical sermons.",
    "features_removed": [
      "Medium Armor Proficiency",
      "Shield Proficiency",
      "Channel Energy (1st, 9th, 15th uses)",
      "Spontaneous Casting (cure/inflict)",
      "Second Domain"
    ],
    "features_gained": [
      {
        "name": "Public Speaker",
        "name_en": "Public Speaker",
        "description_es": "Perform pasa a ser habilidad de clase; recibe un bono a la proyección de voz igual a su nivel + Carisma para reducir CDs auditivas.",
        "description_en": "Perform becomes a class skill; gains a voice projection bonus equal to class level + Cha modifier to reduce hearing DCs."
      },
      {
        "name": "Single-Minded",
        "name_en": "Single-Minded",
        "description_es": "Sólo selecciona un dominio en lugar de los dos habituales.",
        "description_en": "Selects only one domain instead of the standard two."
      },
      {
        "name": "Sermonic Performance (Su)",
        "name_en": "Sermonic Performance (Su)",
        "description_es": "Funciona como interpretación bárdica usando Perform (oratoria): countersong, fascinate e inspire courage a nivel 1; inspire greatness a 9; inspire heroics a 15.",
        "description_en": "Functions like bardic performance using Perform (oratory): countersong, fascinate, and inspire courage at 1st; inspire greatness at 9th; inspire heroics at 15th."
      },
      {
        "name": "Spontaneous Casting (modificado)",
        "name_en": "Spontaneous Casting (modified)",
        "description_es": "Puede convertir conjuros preparados en command, enthrall, tongues, suggestion, greater command, geas/quest, mass suggestion, sympathy y demand.",
        "description_en": "May convert prepared spells into command, enthrall, tongues, suggestion, greater command, geas/quest, mass suggestion, sympathy, and demand."
      }
    ],
    "class_skills_add": [
      "perform"
    ],
    "sub_options": {
      "domains": "Gana las Bendiciones de la Deidad según el dogma de su divinidad. El dominio elegido se centra en la actividad de la deidad. / Gains Deity Boons based on divine dogma. Chosen domain focuses on deity activity."
    }
  },
  "merciful_healer": {
    "class": "cleric",
    "name": "Merciful Healer",
    "name_en": "Merciful Healer",
    "name_es": "Sanador Misericordioso",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/merciful-healer/",
    "description_es": "Clérigo dedicado por entero a la sanación: renuncia a su segundo dominio y a dañar no muertos por una canalización curativa muy mejorada.",
    "description_en": "Cleric wholly dedicated to healing: gives up the second domain and harming undead in exchange for a vastly improved healing channel.",
    "features_removed": [
      "Second Domain",
      "Channel Energy vs Undead"
    ],
    "features_gained": [
      {
        "name": "Willing Healer",
        "name_en": "Willing Healer",
        "description_es": "Debe escoger el dominio Healing y sólo puede canalizar energía positiva.",
        "description_en": "Must select the Healing domain and may only channel positive energy."
      },
      {
        "name": "Combat Medic (Ex)",
        "name_en": "Combat Medic (Ex)",
        "description_es": "No provoca ataques de oportunidad al usar Heal para estabilizar criaturas o lanzar conjuros curativos.",
        "description_en": "No attacks of opportunity when using Heal to stabilize creatures or casting healing spells."
      },
      {
        "name": "Merciful Healing (Su)",
        "name_en": "Merciful Healing (Su)",
        "description_es": "A niveles 3, 6, 9 y 12, su canalización elimina condiciones cada vez peores (fatigado, asustado, mareado, ciego, paralizado, etc.) sobre los curados.",
        "description_en": "At 3rd, 6th, 9th, and 12th levels, channeling removes progressively worse conditions (fatigued, shaken, dazed, blinded, paralyzed, etc.) on those healed."
      },
      {
        "name": "True Healer (Su)",
        "name_en": "True Healer (Su)",
        "description_es": "A nivel 8, puede repetir los 1 en tiradas de curación o aplicar los beneficios de Merciful Healing antes de tirar.",
        "description_en": "At 8th level, may reroll 1s on healing rolls or apply Merciful Healing benefits before rolling.",
        "level": 8
      }
    ],
    "sub_options": {
      "domains": "Dominio de Curación obligatorio. No puede elegir dominios con subdominios violentos. / Healing domain mandatory. Cannot select domains with violent subdomains."
    },
    "restrictions": {
      "domains_required": [
        "healing"
      ]
    }
  },
  "separatist": {
    "class": "cleric",
    "name": "Separatist",
    "name_en": "Separatist",
    "name_es": "Separatista",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/separatist/",
    "description_es": "Clérigo herético que rechaza parte de la doctrina oficial de su deidad para acceder a un dominio prohibido, aunque debilitado.",
    "description_en": "Heretical cleric who rejects part of his deity's doctrine to access a forbidden domain, albeit weakened.",
    "features_removed": [
      "Deity's Favored Weapon Proficiency",
      "Standard Domain Selection (one slot)"
    ],
    "features_gained": [
      {
        "name": "Forbidden Rites",
        "name_en": "Forbidden Rites",
        "description_es": "Selecciona un dominio aprobado por la deidad y un segundo dominio fuera de la lista oficial. El segundo dominio funciona a 2 niveles menos para efectos, CDs y usos diarios; las habilidades como bono se obtienen normalmente.",
        "description_en": "Selects one deity-approved domain plus a second domain not on the deity's list. The second domain functions at 2 levels lower for effects, DCs, and daily uses; skill bonuses are gained normally.",
        "level": 1
      }
    ],
    "sub_options": {
      "domains": "Puede elegir un dominio fuera del portfolio de su deidad (acceso herético). Accede a dominios de cualquier alineamiento, incluido el opuesto. / Can select one domain outside deity portfolio (heretical access). Can access any alignment domain including opposed."
    }
  },
  "undead_lord": {
    "class": "cleric",
    "name": "Undead Lord",
    "name_en": "Undead Lord",
    "name_es": "Señor de los No Muertos",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/undead-lord/",
    "description_es": "Clérigo nigromántico devoto de la muerte: cambia su selección de dominios por un compañero no muerto y poderosas habilidades para mandar y sanar muertos vivientes.",
    "description_en": "Necromantic cleric devoted to death: trades domain choice for an undead companion and powerful abilities to command and heal undead.",
    "features_removed": [
      "Standard Domain Selection (forced Death/Undead)"
    ],
    "features_gained": [
      {
        "name": "Death Magic",
        "name_en": "Death Magic",
        "description_es": "Debe elegir el dominio Death y el subdominio Undead, sustituyendo el sistema dual de dominios.",
        "description_en": "Must select the Death domain and Undead subdomain, replacing the standard dual-domain ability.",
        "level": 1
      },
      {
        "name": "Corpse Companion (Su)",
        "name_en": "Corpse Companion (Su)",
        "description_es": "Mediante un ritual de 8 horas anima un esqueleto o zombi único cuyos DG no exceden su nivel; obedece sin chequeos de control y no cuenta para los límites de mando habituales.",
        "description_en": "Through an 8-hour ritual, animates a single skeleton or zombie whose HD don't exceed her level; obeys without control checks and doesn't count against normal undead control limits.",
        "level": 1
      },
      {
        "name": "Bonus Feats",
        "name_en": "Bonus Feats",
        "description_es": "Obtiene Command Undead como dote extra. A nivel 10 elige otro entre Channel Smite, Extra Channel, Skeleton Summoner o Undead Master.",
        "description_en": "Gains Command Undead as a bonus feat. At 10th level, selects another from Channel Smite, Extra Channel, Skeleton Summoner, or Undead Master.",
        "level": 5
      },
      {
        "name": "Unlife Healer (Su)",
        "name_en": "Unlife Healer (Su)",
        "description_es": "A nivel 8, los conjuros y habilidades curativas que afectan a no muertos curan un 50% adicional. A nivel 16 curan automáticamente el daño máximo más ese 50%.",
        "description_en": "At 8th level, healing spells and abilities that target undead heal 50% more. At 16th, they automatically heal maximum damage plus the 50% bonus.",
        "level": 8
      }
    ],
    "sub_options": {
      "domains": "Debe elegir el dominio Muerte. El segundo dominio debe ser Muertos Vivientes o Mal. / Must choose the Death domain. Second domain must be Undead or Evil."
    },
    "restrictions": {
      "domain_max": 2,
      "domains_required": [
        "death"
      ]
    }
  },
  "theologian": {
    "class": "cleric",
    "name": "Theologian",
    "name_en": "Theologian",
    "name_es": "Teólogo",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/theologian/",
    "description_es": "Especialista intensamente focalizado en un único aspecto de su deidad. Renuncia al segundo dominio para potenciar el suyo y modificarlo con metamagia.",
    "description_en": "Intensely focused specialist on a single aspect of his deity. Gives up the second domain to empower the chosen one and modify it with metamagic.",
    "features_removed": [
      "Second Domain"
    ],
    "features_gained": [
      {
        "name": "Focused Domain",
        "name_en": "Focused Domain",
        "description_es": "Selecciona un solo dominio cuyos poderes funcionan como si tuviera 2 niveles más de clérigo. Puede preparar conjuros del dominio en espacios normales pero no lanzarlos espontáneamente.",
        "description_en": "Selects a single domain whose powers function as if his cleric level were 2 higher. May prepare domain spells in normal slots but cannot spontaneously cast domain spells.",
        "level": 1
      },
      {
        "name": "Domain Secret (Ex)",
        "name_en": "Domain Secret (Ex)",
        "description_es": "A nivel 5 modifica permanentemente un conjuro de dominio con un dote metamágico (Bouncing, Disruptive, Ectoplasmic, Enlarge, Extend, Focused, Intensified, Silent o Still) sin aumentar el nivel ni necesitar el dote. Conjuros adicionales a niveles 10, 15 y 20.",
        "description_en": "At 5th level, permanently modifies a domain spell with one metamagic feat (Bouncing, Disruptive, Ectoplasmic, Enlarge, Extend, Focused, Intensified, Silent, or Still) without raising slot level or owning the feat. Additional spells at 10th, 15th, and 20th.",
        "level": 8
      }
    ],
    "sub_options": {
      "domains": "Un único dominio (elegido al crear el personaje). Los poderes de dominio mejoran a niveles más altos. / One domain only (chosen at creation). Domain powers scale at higher levels."
    },
    "restrictions": {
      "domain_max": 1
    }
  },
  "aquatic_druid": {
    "class": "druid",
    "name": "Aquatic Druid",
    "name_en": "Aquatic Druid",
    "name_es": "Druida Acuático",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/paizo-druid-archetypes/aquatic-druid/",
    "description_es": "Druida pastor de lagos y mares; intercambia dominio del bosque por adaptaciones acuáticas, velocidad de natación y formas marinas.",
    "description_en": "Druid shepherd of lakes and seas; trades woodland mastery for aquatic adaptations, swim speed, and marine forms.",
    "features_removed": [
      "Woodland Stride (2nd)",
      "Trackless Step (3rd)",
      "Resist Nature's Lure (4th)",
      "Wild Shape (modified, delayed)",
      "Venom Immunity (9th)",
      "A Thousand Faces (13th)"
    ],
    "features_gained": [
      {
        "name": "Wild Empathy (Modified)",
        "name_en": "Wild Empathy (Modified)",
        "description_es": "Funciona sólo con criaturas acuáticas, aunque también afecta a criaturas con Inteligencia 2 o menos en contextos acuáticos.",
        "description_en": "Functions only on aquatic creatures, though it also affects any creature with Int 2 or lower in aquatic contexts.",
        "level": 1
      },
      {
        "name": "Aquatic Adaptation",
        "name_en": "Aquatic Adaptation",
        "description_es": "Bono de perspicacia igual a la mitad del nivel a Iniciativa, Knowledge (geography), Perception, Stealth, Survival y Swim en terreno acuático; no puede ser rastreado allí.",
        "description_en": "Insight bonus equal to half level on Initiative, Knowledge (geography), Perception, Stealth, Survival, and Swim in aquatic terrain; cannot be tracked there.",
        "level": 1
      },
      {
        "name": "Natural Swimmer",
        "name_en": "Natural Swimmer",
        "description_es": "A nivel 3 obtiene velocidad de natación igual a la mitad de su velocidad terrestre.",
        "description_en": "At 3rd level, gains a swim speed equal to half its land speed.",
        "level": 3
      },
      {
        "name": "Resist Ocean's Fury",
        "name_en": "Resist Ocean's Fury",
        "description_es": "+4 a salvaciones contra conjuros de tipo agua y habilidades de criaturas acuáticas.",
        "description_en": "+4 on saves against water-type spells and abilities of aquatic creatures.",
        "level": 4
      },
      {
        "name": "Seaborn",
        "name_en": "Seaborn",
        "description_es": "Gana el subtipo acuático, el rasgo anfibio y velocidad de natación igual a la terrestre; resistencia al frío.",
        "description_en": "Gains the aquatic subtype, amphibious trait, and swim speed equal to land speed; resists cold effects.",
        "level": 9
      },
      {
        "name": "Deep Diver",
        "name_en": "Deep Diver",
        "description_es": "Reducción de daño igual a la mitad de su nivel y protección contra presa/aplastar conjuros; inmune al daño por presión.",
        "description_en": "Damage reduction equal to half its level plus protection against grappling/crushing spells; immune to pressure damage.",
        "level": 13
      }
    ]
  },
  "cave_druid": {
    "class": "druid",
    "name": "Cave Druid",
    "name_en": "Cave Druid",
    "name_es": "Druida de Cavernas",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/paizo-druid-archetypes/cave-druid/",
    "description_es": "Druida del subsuelo, especialista en cuevas y oozes. Sacrifica capacidades del bosque por adaptaciones subterráneas y formas alternativas.",
    "description_en": "Underground druid specializing in caves and oozes. Trades woodland abilities for subterranean adaptations and alternate forms.",
    "features_removed": [
      "Nature Sense (1st)",
      "Woodland Stride (2nd)",
      "Trackless Step (3rd)",
      "Resist Nature's Lure (4th)",
      "Wild Shape (modified, delayed)"
    ],
    "features_gained": [
      {
        "name": "Cavesense",
        "name_en": "Cavesense",
        "description_es": "Knowledge (dungeoneering) es habilidad de clase y obtiene +2 a Knowledge (dungeoneering) y Survival.",
        "description_en": "Knowledge (dungeoneering) becomes a class skill, with +2 to Knowledge (dungeoneering) and Survival.",
        "level": 1
      },
      {
        "name": "Nature Bond (Modified)",
        "name_en": "Nature Bond (Modified)",
        "description_es": "Permite seleccionar el dominio Darkness; los dominios Air y Weather están prohibidos.",
        "description_en": "Allows the Darkness domain; Air and Weather domains are prohibited.",
        "level": 1
      },
      {
        "name": "Wild Empathy (Modified)",
        "name_en": "Wild Empathy (Modified)",
        "description_es": "Puede influir en oozes en lugar de bestias mágicas, con –4.",
        "description_en": "Can influence oozes instead of magical beasts, with a –4 penalty.",
        "level": 1
      },
      {
        "name": "Tunnelrunner (Ex)",
        "name_en": "Tunnelrunner (Ex)",
        "description_es": "A nivel 2 atraviesa escombros y pasajes estrechos a velocidad normal sin penalizaciones.",
        "description_en": "At 2nd level, moves through rubble and narrow passages at normal speed without penalty.",
        "level": 2
      },
      {
        "name": "Lightfoot (Ex)",
        "name_en": "Lightfoot (Ex)",
        "description_es": "A nivel 3 no puede ser detectado mediante tremorsense.",
        "description_en": "At 3rd level, cannot be detected via tremorsense.",
        "level": 3
      },
      {
        "name": "Resist Subterranean Corruption",
        "name_en": "Resist Subterranean Corruption",
        "description_es": "A nivel 4, +2 a salvaciones contra habilidades de oozes y aberraciones.",
        "description_en": "At 4th level, +2 on saves against ooze and aberration abilities.",
        "level": 4
      },
      {
        "name": "Wild Shape (Modified)",
        "name_en": "Wild Shape (Modified)",
        "description_es": "Obtiene Wild Shape a nivel 6 (2 niveles tarde) y no puede asumir formas vegetales; a niveles superiores puede transformarse en oozes.",
        "description_en": "Gains Wild Shape at 6th level (2 levels late) and cannot assume plant forms; at higher levels, may shift into oozes.",
        "level": 6
      }
    ],
    "class_skills_add": [
      "knowledge_dungeoneering"
    ],
    "class_skills_remove": [
      "knowledge_geography"
    ],
    "sub_options": {
      "domains": "Debe elegir los dominios Tierra u Oscuridad. No puede elegir dominios relacionados con cielos o agua. / Must select the Earth or Darkness domain. Cannot choose sky- or water-related domains."
    }
  },
  "menhir_savant": {
    "class": "druid",
    "name": "Menhir Savant",
    "name_en": "Menhir Savant",
    "name_es": "Sabio de los Menhires",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/paizo-druid-archetypes/menhir-savant/",
    "description_es": "Druida que estudia los nodos mágicos y las líneas ley a través de menhires y piedras erguidas, ganando habilidades espirituales y planares.",
    "description_en": "Druid who studies magical nodes and ley lines through menhirs and standing stones, gaining spiritual and planar abilities.",
    "features_removed": [
      "Nature Sense (1st)",
      "Wild Empathy (1st)",
      "Woodland Stride (2nd)",
      "Trackless Step (3rd)",
      "A Thousand Faces (13th)"
    ],
    "features_gained": [
      {
        "name": "Spirit Sense (Sp)",
        "name_en": "Spirit Sense (Sp)",
        "description_es": "Detecta no muertos, fey, exteriores y criaturas en los planos astral, etéreo o incorpóreas, similar a detect undead pero con varios tipos a la vez.",
        "description_en": "Detects undead, fey, outsiders, and creatures on the astral, ethereal, or incorporeal planes, similar to detect undead but covering multiple types at once."
      },
      {
        "name": "Place Magic (Su)",
        "name_en": "Place Magic (Su)",
        "description_es": "Como acción gratuita, aumenta su nivel de lanzador en +1 durante un asalto. Usos diarios igual a 3 + Sabiduría.",
        "description_en": "As a free action, increases caster level by +1 for one round. Uses per day equal to 3 + Wisdom modifier."
      },
      {
        "name": "Walk the Lines (Su)",
        "name_en": "Walk the Lines (Su)",
        "description_es": "A nivel 9 puede lanzar transport via plants un número de veces al día igual a su Sabiduría.",
        "description_en": "At 9th level, may cast transport via plants a number of times per day equal to her Wisdom modifier.",
        "level": 3
      },
      {
        "name": "Empty Body (Su)",
        "name_en": "Empty Body (Su)",
        "description_es": "A nivel 13, como acción estándar se vuelve etérea durante asaltos al día iguales a su nivel de druida.",
        "description_en": "At 13th level, as a standard action becomes ethereal for a number of rounds per day equal to her druid level.",
        "level": 13
      }
    ],
    "sub_options": {
      "spirits": "Canaliza los espíritus de la tierra (ley lines). Puede detectar y moverse a lo largo de líneas ley. No tiene el arquetipo \"wandering spirit\" del chamán, sino acceso especial a lugares de poder. / Channels earth spirits (ley lines). Can detect and travel along ley lines. No shaman wandering spirit; instead gains special access to places of power."
    }
  },
  "storm_druid": {
    "class": "druid",
    "name": "Storm Druid",
    "name_en": "Storm Druid",
    "name_es": "Druida de las Tormentas",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/paizo-druid-archetypes/storm-druid/",
    "description_es": "Druida del cielo y las tempestades. Cambia compañero animal y rasgos del bosque por dominio del viento, sonido y clima.",
    "description_en": "Druid of sky and storm. Trades animal companion and woodland traits for mastery of wind, sound, and weather.",
    "features_removed": [
      "Spontaneous Casting (modified)",
      "Animal Companion (Nature Bond)",
      "Woodland Stride (2nd)",
      "Trackless Step (3rd)",
      "Resist Nature's Lure (4th)",
      "Venom Immunity (9th)",
      "A Thousand Faces (13th)"
    ],
    "features_gained": [
      {
        "name": "Spontaneous Domain Casting",
        "name_en": "Spontaneous Domain Casting",
        "description_es": "Puede convertir conjuros preparados en conjuros de dominio no preparados de igual o menor nivel.",
        "description_en": "Can convert prepared spells into unprepared domain spells of equal or lower level.",
        "level": 1
      },
      {
        "name": "Nature Bond (Restricted)",
        "name_en": "Nature Bond (Restricted)",
        "description_es": "Debe escoger los dominios Air o Weather, o los subdominios Cloud, Storm o Wind, en lugar de un compañero animal.",
        "description_en": "Must select the Air or Weather domain, or Cloud, Storm, or Wind subdomains, instead of an animal companion.",
        "level": 1
      },
      {
        "name": "Windwalker",
        "name_en": "Windwalker",
        "description_es": "A nivel 2 trata las penalizaciones por viento como un escalón menos severas.",
        "description_en": "At 2nd level, treats wind penalties as one step less severe.",
        "level": 2
      },
      {
        "name": "Stormvoice",
        "name_en": "Stormvoice",
        "description_es": "A nivel 3 reduce la CD para oírlo en su nivel de druida.",
        "description_en": "At 3rd level, reduces the Perception DC to hear him by his druid level.",
        "level": 3
      },
      {
        "name": "Eyes of the Storm",
        "name_en": "Eyes of the Storm",
        "description_es": "A nivel 4 ve a través de 10 pies de obstrucción mágica, +5 pies cada 4 niveles.",
        "description_en": "At 4th level, sees through 10 ft of magical obstruction, +5 ft per 4 levels.",
        "level": 4
      },
      {
        "name": "Windlord",
        "name_en": "Windlord",
        "description_es": "A nivel 9 selecciona un dominio o subdominio adicional.",
        "description_en": "At 9th level, selects an additional domain or subdomain.",
        "level": 9
      },
      {
        "name": "Storm Lord",
        "name_en": "Storm Lord",
        "description_es": "A nivel 13 inmunidad a efectos de viento y a quedar ensordecido, +2 a salvaciones contra sónico.",
        "description_en": "At 13th level, immunity to wind effects and deafness, +2 on sonic saves.",
        "level": 13
      }
    ],
    "sub_options": {
      "domains": "Debe elegir los dominios Aire o Clima. Pierde el compañero animal estándar. / Must select the Air or Weather domain. Loses standard animal companion."
    }
  },
  "mooncaller": {
    "class": "druid",
    "name": "Mooncaller",
    "name_en": "Mooncaller",
    "name_es": "Invocador de la Luna",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/paizo-druid-archetypes/mooncaller/",
    "description_es": "Druida ligado a los ciclos lunares. Cambia versatilidad primaria por defensas nocturnas y protección contra cambia formas y efectos mentales.",
    "description_en": "Druid bound to lunar cycles. Trades primal versatility for nocturnal defenses and protection against shapechangers and mental effects.",
    "features_removed": [
      "Woodland Stride (2nd)",
      "Resist Nature's Lure (4th)",
      "Venom Immunity (9th)",
      "A Thousand Faces (13th)"
    ],
    "features_gained": [
      {
        "name": "Night Sight",
        "name_en": "Night Sight",
        "description_es": "A nivel 2 obtiene visión en penumbra; si ya la tiene, gana 30 pies de visión en la oscuridad o amplía 30 pies la que tuviera.",
        "description_en": "At 2nd level, gains low-light vision; if already possessed, gains 30 ft darkvision instead, or extends existing darkvision by 30 ft.",
        "level": 2
      },
      {
        "name": "Resist Call of the Wild",
        "name_en": "Resist Call of the Wild",
        "description_es": "A nivel 4, +4 a salvaciones contra confusion, daze, feeblemind, insanity y +4 contra habilidades de cambia formas.",
        "description_en": "At 4th level, +4 on saves against confusion, daze, feeblemind, insanity, and +4 vs shapechanger abilities.",
        "level": 4
      },
      {
        "name": "Purity of Body",
        "name_en": "Purity of Body",
        "description_es": "A nivel 9 inmune a todas las enfermedades, incluyendo las sobrenaturales y mágicas.",
        "description_en": "At 9th level, immune to all diseases, including supernatural and magical varieties.",
        "level": 9
      },
      {
        "name": "Wolfsbane",
        "name_en": "Wolfsbane",
        "description_es": "A nivel 13 obtiene RD 3/plata, aumentando a 4/plata a 16 y 5/plata a 19.",
        "description_en": "At 13th level, gains DR 3/silver, increasing to 4/silver at 16 and 5/silver at 19.",
        "level": 13
      }
    ]
  },
  "lore_warden": {
    "class": "fighter",
    "name": "Lore Warden",
    "name_en": "Lore Warden",
    "name_es": "Guardián del Saber",
    "source": "Pathfinder Roleplaying Game Adventurer's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/fighter/archetypes/paizo-fighter-archetypes/lore-warden-fighter-archetype/",
    "description_es": "Un guerrero erudito que cambia armadura pesada y escudos por destreza intelectual y técnicas de combate basadas en el conocimiento. Renuncia al entrenamiento de armadura a cambio de bonos a habilidades, hazañas de Combat Expertise y Secretos de Espada.",
    "description_en": "A scholarly fighter who trades heavy armor and shields for intellectual prowess and knowledge-based combat techniques. Gives up armor training in exchange for skill bonuses, Combat Expertise feats and Sword Secrets.",
    "features_removed": [
      "Medium and Heavy Armor Proficiency (1st)",
      "Shield Proficiency (1st)",
      "Bravery (2nd)",
      "Bonus Feat (2nd)",
      "Armor Training (3rd, 7th, 11th, 15th)",
      "Armor Mastery (19th)"
    ],
    "features_gained": [
      {
        "name": "Scholastic (Ex)",
        "name_en": "Scholastic (Ex)",
        "description_es": "Recibe 2 rangos de habilidad adicionales por nivel que deben gastarse en habilidades basadas en Inteligencia. Todas las Artesanías, Conocimientos, Lingüística y Saber Mágico son habilidades de clase.",
        "description_en": "Gains 2 bonus skill ranks per level that must be spent on Intelligence-based skills. All Craft, Knowledge, Linguistics and Spellcraft skills are class skills."
      },
      {
        "name": "Skill Over Strength (Ex)",
        "name_en": "Skill Over Strength (Ex)",
        "description_es": "Califica para dotes de Combat Expertise a nivel 2; gana Combat Expertise como dote adicional a nivel 6; trata su BAB como 2 puntos mayor para Combat Expertise a nivel 10.",
        "description_en": "Qualifies for Combat Expertise feats at 2nd level; gains Combat Expertise as a bonus feat at 6th level; treats BAB as 2 points higher for Combat Expertise at 10th level.",
        "level": 2
      },
      {
        "name": "Sword Secrets (Ex)",
        "name_en": "Sword Secrets (Ex)",
        "description_es": "A nivel 3 obtiene un secreto de espada y otro adicional cada 4 niveles. Incluye técnicas como Exploit Weakness, Hair's Breadth, Know Thy Enemy, Maneuver Training y Swift Assessment.",
        "description_en": "At 3rd level gains one sword secret, plus an additional secret every 4 levels thereafter. Includes techniques such as Exploit Weakness, Hair's Breadth, Know Thy Enemy, Maneuver Training and Swift Assessment.",
        "level": 3
      },
      {
        "name": "Exploit Weakness (Ex)",
        "name_en": "Exploit Weakness (Ex)",
        "description_es": "Suma un tercio del nivel a las tiradas de confirmación de crítico; a nivel 11 ignora 5 puntos de RD/dureza tras confirmar un crítico; a nivel 19 confirma automáticamente un crítico por asalto.",
        "description_en": "Adds one-third class level to critical confirmation rolls; at 11th level ignores 5 points of DR/hardness after confirming a crit; at 19th level auto-confirms one critical hit per round.",
        "level": 9
      }
    ],
    "class_skills_add": [
      "craft",
      "knowledge_arcana",
      "knowledge_dungeoneering",
      "knowledge_engineering",
      "knowledge_geography",
      "knowledge_history",
      "knowledge_local",
      "knowledge_nature",
      "knowledge_nobility",
      "knowledge_planes",
      "knowledge_religion",
      "linguistics",
      "spellcraft"
    ]
  },
  "polearm_master": {
    "class": "fighter",
    "name": "Polearm Master",
    "name_en": "Polearm Master",
    "name_es": "Maestro de Astas",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/fighter/archetypes/paizo-fighter-archetypes/polearm-master/",
    "description_es": "Especialista en lanzas y armas de asta que sacrifica entrenamiento general de armas y armaduras para dominar el alcance, las maniobras defensivas y los ataques de oportunidad con armas de asta.",
    "description_en": "A specialist in spears and polearms who sacrifices general weapon and armor training to master reach, defensive maneuvers and attacks of opportunity with polearm weapons.",
    "features_removed": [
      "Bravery (2nd)",
      "Armor Training (3rd, 7th, 11th, 15th)",
      "Weapon Training (5th, 9th, 13th, 17th)",
      "Armor Mastery (19th)"
    ],
    "features_gained": [
      {
        "name": "Pole Fighting (Ex)",
        "name_en": "Pole Fighting (Ex)",
        "description_es": "A nivel 2, puede acortar el agarre de su arma de asta como acción inmediata para atacar a objetivos adyacentes con un penalizador, mitigando la principal debilidad de las armas con alcance.",
        "description_en": "At 2nd level can shorten his grip on a polearm as an immediate action to attack adjacent targets at a penalty, mitigating the main weakness of reach weapons.",
        "level": 2
      },
      {
        "name": "Steadfast Pike (Ex)",
        "name_en": "Steadfast Pike (Ex)",
        "description_es": "A nivel 3 obtiene un bono de competencia en ataques preparados y AdO realizados con lanzas y armas de asta.",
        "description_en": "At 3rd level gains a bonus on readied attacks and attacks of opportunity made with spears and polearms.",
        "level": 3
      },
      {
        "name": "Polearm Training (Ex)",
        "name_en": "Polearm Training (Ex)",
        "description_es": "A nivel 5, gana bono al ataque y daño con lanzas y armas de asta, aumentando cada 4 niveles. Funciona como entrenamiento de arma del grupo de armas de asta.",
        "description_en": "At 5th level gains bonus on attack and damage rolls with spears and polearms, increasing every 4 levels. Functions as weapon training for the polearm weapon group.",
        "level": 5
      },
      {
        "name": "Flexible Flanker (Ex)",
        "name_en": "Flexible Flanker (Ex)",
        "description_es": "A nivel 9 puede elegir cualquier casilla adyacente al enemigo como su posición a efectos de flanqueo, aprovechando el alcance de su arma.",
        "description_en": "At 9th level can choose any square adjacent to an enemy as his position for flanking purposes, exploiting his weapon's reach.",
        "level": 7
      },
      {
        "name": "Sweeping Fend (Ex)",
        "name_en": "Sweeping Fend (Ex)",
        "description_es": "A nivel 13 puede usar lanzas y armas de asta para realizar maniobras de embestida (bull rush) y derribo (trip).",
        "description_en": "At 13th level can use spears and polearms to perform bull rush and trip combat maneuvers.",
        "level": 9
      },
      {
        "name": "Step Aside (Ex)",
        "name_en": "Step Aside (Ex)",
        "description_es": "A nivel 17, cuando un enemigo se acerca, puede dar un paso de 5 pies como acción inmediata para mantener el alcance.",
        "description_en": "At 17th level, when an enemy approaches he can take a 5-foot step as an immediate action to maintain reach.",
        "level": 11
      },
      {
        "name": "Polearm Parry (Ex)",
        "name_en": "Polearm Parry (Ex)",
        "description_es": "A nivel 19 concede a aliados adyacentes un bono de escudo a la CA y RD contra ataques entrantes mientras empuñe su arma de asta.",
        "description_en": "At 19th level grants adjacent allies a shield bonus to AC and DR against incoming attacks while wielding his polearm.",
        "level": 15
      }
    ]
  },
  "weapon_master_fighter": {
    "class": "fighter",
    "name": "Weapon Master",
    "name_en": "Weapon Master",
    "name_es": "Maestro de Armas",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/fighter/archetypes/paizo-fighter-archetypes/weapon-master/",
    "description_es": "Devoto a una sola arma elegida, sacrifica el entrenamiento general de armas y armaduras para alcanzar maestría sin igual con su arma predilecta, incluyendo críticos devastadores y reroll de ataques.",
    "description_en": "Devoted to a single chosen weapon, sacrifices general weapon and armor training to attain unmatched mastery with his favored weapon, including devastating crits and attack rerolls.",
    "features_removed": [
      "Bravery (2nd)",
      "Armor Training (3rd, 7th, 11th, 15th)",
      "Weapon Training (5th, 9th, 13th, 17th)",
      "Armor Mastery (19th)"
    ],
    "features_gained": [
      {
        "name": "Weapon Guard (Ex)",
        "name_en": "Weapon Guard (Ex)",
        "description_es": "A nivel 2 obtiene +1 a CMD contra intentos de desarmar y romper con su arma elegida; +1 adicional cada 4 niveles.",
        "description_en": "At 2nd level gains +1 to CMD against disarm and sunder attempts with his chosen weapon; +1 more every 4 levels.",
        "level": 2
      },
      {
        "name": "Weapon Training (Ex)",
        "name_en": "Weapon Training (Ex)",
        "description_es": "A nivel 3 obtiene +1 al ataque y daño con su arma elegida, mejorando +1 cada 4 niveles. Solo aplica a esa arma específica.",
        "description_en": "At 3rd level gains +1 on attack and damage rolls with his chosen weapon, improving by +1 every 4 levels. Only applies to that specific weapon.",
        "level": 5
      },
      {
        "name": "Reliable Strike (Ex)",
        "name_en": "Reliable Strike (Ex)",
        "description_es": "A nivel 5, una vez al día como acción inmediata puede repetir un ataque, confirmación de crítico, miss chance o daño con su arma elegida; +1 uso cada 5 niveles.",
        "description_en": "At 5th level, once per day as an immediate action can reroll an attack roll, critical confirmation, miss chance check or damage roll with his chosen weapon; +1 use per 5 levels.",
        "level": 11
      },
      {
        "name": "Mirror Move (Ex)",
        "name_en": "Mirror Move (Ex)",
        "description_es": "A nivel 9 obtiene su bono de Weapon Training como bono de perspicacia a la CA cuando es atacado con su arma elegida.",
        "description_en": "At 9th level gains his Weapon Training bonus as an insight bonus to AC when attacked by his chosen weapon.",
        "level": 9
      },
      {
        "name": "Deadly Critical (Ex)",
        "name_en": "Deadly Critical (Ex)",
        "description_es": "A nivel 13, una vez al día puede aumentar el multiplicador de crítico de su arma en +1 al confirmar un crítico; +1 uso cada 3 niveles.",
        "description_en": "At 13th level, once per day can increase his weapon's damage multiplier by +1 when confirming a critical hit; +1 use per 3 levels.",
        "level": 19
      },
      {
        "name": "Critical Specialist (Ex)",
        "name_en": "Critical Specialist (Ex)",
        "description_es": "A nivel 17, los CD de salvación contra los efectos de crítico de su arma elegida aumentan en +4.",
        "description_en": "At 17th level, save DCs against critical hit effects of his chosen weapon increase by +4.",
        "level": 17
      },
      {
        "name": "Unstoppable Strike (Ex)",
        "name_en": "Unstoppable Strike (Ex)",
        "description_es": "A nivel 19, una vez al día puede declarar un ataque como ataque de toque que ignora la reducción de daño y la dureza.",
        "description_en": "At 19th level, once per day can make one attack as a touch attack ignoring damage reduction and hardness.",
        "level": 3
      }
    ]
  },
  "dragoon": {
    "class": "fighter",
    "name": "Dragoon",
    "name_en": "Dragoon",
    "name_es": "Dragón",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/fighter/archetypes/paizo-fighter-archetypes/dragoon/",
    "description_es": "Guerrero montado especialista en lanza de caballero, que cambia parte de su entrenamiento general por dotes de monta, técnicas de lanza y habilidades especiales como portar estandartes que inspiran a sus aliados.",
    "description_en": "A mounted warrior specialized with the lance who trades part of his general training for mounted feats, lance techniques and special abilities like carrying banners that inspire allies.",
    "features_removed": [
      "Bonus Feat (1st)",
      "Armor Training 2 (7th)",
      "Weapon Training 2, 3, 4 (9th, 13th, 17th)",
      "Armor Training 3 (11th)",
      "Armor Training 4 (15th)"
    ],
    "features_gained": [
      {
        "name": "Skilled Rider (Ex)",
        "name_en": "Skilled Rider (Ex)",
        "description_es": "A nivel 1 recibe Combate Montado y Skill Focus (Cabalgar) como dotes adicionales gratuitas.",
        "description_en": "At 1st level gains Mounted Combat and Skill Focus (Ride) as bonus feats.",
        "level": 1
      },
      {
        "name": "Spear Training (Ex)",
        "name_en": "Spear Training (Ex)",
        "description_es": "A nivel 5 obtiene entrenamiento mejorado con lanzas: +1 al ataque y +2 al daño, aumentando cada 4 niveles más allá del 5º.",
        "description_en": "At 5th level gains enhanced training with spears: +1 attack and +2 damage, increasing every 4 levels beyond 5th.",
        "level": 5
      },
      {
        "name": "Spinning Lance (Ex)",
        "name_en": "Spinning Lance (Ex)",
        "description_es": "A nivel 7 puede alternar ataques entre la punta perforante de su lanza con alcance y el extremo trasero contra enemigos cercanos.",
        "description_en": "At 7th level can alternate attacks between the piercing head of his lance with reach, and the butt end against close enemies.",
        "level": 7
      },
      {
        "name": "Banner (Ex)",
        "name_en": "Banner (Ex)",
        "description_es": "A nivel 9 puede colocar un estandarte en su lanza que otorga bonos a salvaciones contra miedo y al ataque a aliados que lo vean, escalando con el nivel.",
        "description_en": "At 9th level can mount a banner on his lance that grants allies who see it bonuses on saves vs. fear and on attack rolls, scaling with level.",
        "level": 9
      },
      {
        "name": "Piercing Lance (Ex)",
        "name_en": "Piercing Lance (Ex)",
        "description_es": "A nivel 11, en una carga montada puede realizar dos ataques contra oponentes montados; la CD de Cabalgar para negar el impacto aumenta.",
        "description_en": "At 11th level can make two attacks against mounted opponents during a charge; the Ride DC to negate hits increases.",
        "level": 11
      },
      {
        "name": "Leaping Lance (Ex)",
        "name_en": "Leaping Lance (Ex)",
        "description_es": "A nivel 15 ignora el penalizador de armadura en Acrobacias mientras va montado; los bonos de carga se duplican al saltar 10 pies.",
        "description_en": "At 15th level ignores armor penalty on Acrobatics while mounted; charge bonuses are doubled when jumping 10 feet.",
        "level": 15
      },
      {
        "name": "Weapon Mastery (Ex)",
        "name_en": "Weapon Mastery (Ex)",
        "description_es": "A nivel 20 debe elegir la lanza de caballero (lance) como su arma de maestría.",
        "description_en": "At 20th level must select the lance as his mastered weapon.",
        "level": 20
      }
    ]
  },
  "mutation_warrior": {
    "class": "fighter",
    "name": "Mutation Warrior",
    "name_en": "Mutation Warrior",
    "name_es": "Guerrero Mutado",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/fighter/archetypes/paizo-fighter-archetypes/mutation-warrior/",
    "description_es": "Guerrero que sacrifica el entrenamiento de armadura para dominar mutágenos alquímicos, ganando potencia física monstruosa y descubrimientos de alquimista a costa de control mental temporal.",
    "description_en": "A fighter who sacrifices armor training to master alchemical mutagens, gaining monstrous physical power and alchemist discoveries at the cost of temporary mental impairment.",
    "features_removed": [
      "Armor Training 1 (3rd)",
      "Armor Training 2 (7th)",
      "Armor Training 3 (11th)",
      "Armor Training 4 (15th)",
      "Armor Mastery (19th)"
    ],
    "features_gained": [
      {
        "name": "Mutagen (Su)",
        "name_en": "Mutagen (Su)",
        "description_es": "A nivel 3 puede crear y consumir un mutágeno como la habilidad del alquimista, usando su nivel de guerrero como nivel de alquimista para potenciar atributos físicos a costa de mentales.",
        "description_en": "At 3rd level can create and consume a mutagen as the alchemist ability, using his fighter level as alchemist level to boost physical stats at the cost of mental ones.",
        "level": 3
      },
      {
        "name": "Mutagen Discovery (Su)",
        "name_en": "Mutagen Discovery (Su)",
        "description_es": "A nivel 7 y cada 4 niveles después selecciona un descubrimiento de alquimista relacionado con mutágenos: feral mutagen, grand mutagen, infuse mutagen, preserve organs, tentáculo, brazo vestigial, alas, etc.",
        "description_en": "At 7th level and every 4 levels thereafter selects a mutagen-related alchemist discovery: feral mutagen, grand mutagen, infuse mutagen, preserve organs, tentacle, vestigial arm, wings, etc.",
        "level": 7
      }
    ]
  },
  "musket_master": {
    "class": "gunslinger",
    "name": "Musket Master",
    "name_en": "Musket Master",
    "name_es": "Maestro del Mosquete",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/gunslinger/archetypes/paizo-gunslinger-archetypes/musket-master/",
    "description_es": "Pistolero especializado en armas de fuego a dos manos como el mosquete, sacrificando movilidad por alcance, daño extra y velocidad de recarga superior con armas largas.",
    "description_en": "A gunslinger specialized in two-handed firearms like the musket, trading mobility for greater range, extra damage and superior reload speed with long arms.",
    "features_removed": [
      "Weapon Proficiency with one-handed firearms",
      "Gunslinger's Dodge (1st)",
      "Utility Shot (3rd)",
      "Gun Training (5th, 9th, 13th, 17th)"
    ],
    "features_gained": [
      {
        "name": "Two-Handed Firearm Proficiency",
        "name_en": "Two-Handed Firearm Proficiency",
        "description_es": "Solo gana competencia con armas de fuego a dos manos. Debe tomar Exotic Weapon Proficiency por separado para armas de fuego a una mano.",
        "description_en": "Only gains proficiency with two-handed firearms. Must take Exotic Weapon Proficiency separately for one-handed firearms.",
        "level": 1
      },
      {
        "name": "Steady Aim (Ex)",
        "name_en": "Steady Aim (Ex)",
        "description_es": "A nivel 1, como acción de movimiento gastando 1 punto de garra (grit), aumenta el incremento de alcance de armas de fuego a dos manos en 10 pies.",
        "description_en": "At 1st level, as a move action spending 1 grit point, increases the range increment of two-handed firearms by 10 feet.",
        "level": 1
      },
      {
        "name": "Fast Musket (Ex)",
        "name_en": "Fast Musket (Ex)",
        "description_es": "A nivel 3, gastando 1 punto de garra puede recargar armas de fuego a dos manos a la velocidad de las armas a una mano.",
        "description_en": "At 3rd level, spending 1 grit point can reload two-handed firearms at the speed of one-handed firearms.",
        "level": 3
      },
      {
        "name": "Rapid Reloader",
        "name_en": "Rapid Reloader",
        "description_es": "A nivel 1 obtiene la dote Rapid Reload (mosquetes) automáticamente como dote adicional.",
        "description_en": "At 1st level automatically gains the Rapid Reload (muskets) feat as a bonus feat.",
        "level": 3
      },
      {
        "name": "Musket Training (Ex)",
        "name_en": "Musket Training (Ex)",
        "description_es": "A nivel 5 añade su modificador de Destreza al daño de armas de fuego a dos manos; el valor de fallo aumenta solo en 2 (no 4); +1 daño cada 4 niveles.",
        "description_en": "At 5th level adds his Dexterity modifier to two-handed firearm damage; misfire value increases by only 2 (not 4); +1 damage per 4 levels.",
        "level": 5
      }
    ]
  },
  "bolt_ace": {
    "class": "gunslinger",
    "name": "Bolt Ace",
    "name_en": "Bolt Ace",
    "name_es": "As de la Ballesta",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/gunslinger/archetypes/paizo-gunslinger-archetypes/bolt-ace/",
    "description_es": "Pistolero que renuncia totalmente a las armas de fuego para especializarse en ballestas, conservando el sistema de garra (grit) y hazañas pero adaptadas para tiro con virote.",
    "description_en": "A gunslinger who entirely forgoes firearms to specialize in crossbows, retaining the grit and deeds system but adapted for bolt shooting.",
    "features_removed": [
      "Gunsmith (1st)",
      "Deadeye deed",
      "Quick Clear deed",
      "Utility Shot deed",
      "Startling Shot deed",
      "Expert Loading deed",
      "Lightning Reload deed",
      "Menacing Shot deed",
      "Gun Training (5th, 9th, 13th, 17th)"
    ],
    "features_gained": [
      {
        "name": "Crossbow Maven (Ex)",
        "name_en": "Crossbow Maven (Ex)",
        "description_es": "Recibe competencia con todas las ballestas en lugar de armas de fuego, y comienza con una ballesta obra magistral en lugar de un arma de fuego maltrecha.",
        "description_en": "Gains proficiency with all crossbows instead of firearms, and begins with a masterwork crossbow instead of a battered firearm.",
        "level": 1
      },
      {
        "name": "Modified Grit (Ex)",
        "name_en": "Modified Grit (Ex)",
        "description_es": "Recupera puntos de garra (grit) con críticos y golpes letales realizados con ballestas en lugar de armas de fuego.",
        "description_en": "Regains grit points from critical hits and killing blows with crossbows instead of firearms.",
        "level": 1
      },
      {
        "name": "Crossbow Deeds (Ex)",
        "name_en": "Crossbow Deeds (Ex)",
        "description_es": "Reemplaza las hazañas estándar con: Sharp Shoot, Vigilant Loading, Shooter's Resolve, Distracting Shot, Vigilant Shooter, Inexplicable Reload y Pinning Shot, todas adaptadas para ballesta.",
        "description_en": "Replaces standard deeds with: Sharp Shoot, Vigilant Loading, Shooter's Resolve, Distracting Shot, Vigilant Shooter, Inexplicable Reload and Pinning Shot, all adapted for crossbow use.",
        "level": 1
      },
      {
        "name": "Crossbow Training (Ex)",
        "name_en": "Crossbow Training (Ex)",
        "description_es": "A nivel 5 elige un tipo de ballesta y suma su modificador de Destreza al daño con esa ballesta; aumenta el multiplicador de crítico según el tipo.",
        "description_en": "At 5th level chooses a crossbow type and adds Dexterity modifier to damage with that crossbow; increases critical multiplier based on type.",
        "level": 5
      }
    ]
  },
  "techslinger": {
    "class": "gunslinger",
    "name": "Techslinger",
    "name_en": "Techslinger",
    "name_es": "Tecnoslinger",
    "source": "Pathfinder Campaign Setting: Technology Guide",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/gunslinger/archetypes/paizo-gunslinger-archetypes/techslinger/",
    "description_es": "Pistolero especializado en armas de fuego tecnológicas, capaz de gestionar cargas eléctricas, evitar fallos en armas envejecidas y manejar armamento pesado avanzado.",
    "description_en": "A gunslinger specialized in technological firearms, able to manage charges, prevent timeworn glitches and wield advanced heavy weaponry.",
    "features_removed": [
      "Deadeye deed",
      "Quick Clear deed",
      "Expert Loading deed",
      "Gun Training (5th, 9th, 13th, 17th)"
    ],
    "features_gained": [
      {
        "name": "Covet Charge (Ex)",
        "name_en": "Covet Charge (Ex)",
        "description_es": "A nivel 1 puede gastar 1 punto de garra para usar 1 carga menos al disparar un arma tecnológica (mínimo 0).",
        "description_en": "At 1st level can spend 1 grit point to use 1 fewer charge when firing a technological weapon (minimum 0).",
        "level": 1
      },
      {
        "name": "Reliable (Ex)",
        "name_en": "Reliable (Ex)",
        "description_es": "A nivel 1 puede gastar 1 punto de garra como acción gratuita para evitar que un arma de fuego envejecida (timeworn) sufra un fallo.",
        "description_en": "At 1st level can spend 1 grit point as a free action to prevent a timeworn firearm from glitching.",
        "level": 1
      },
      {
        "name": "Technic Training (Ex)",
        "name_en": "Technic Training (Ex)",
        "description_es": "A nivel 5 elige tipos avanzados de armas de fuego tecnológicas; añade Destreza al daño e ignora fallos en versiones envejecidas. Selecciones adicionales a nivel 9, 13 y 17.",
        "description_en": "At 5th level selects specific advanced tech firearm types; gains Dex modifier to damage and ignores glitches on timeworn versions. Additional selections at 9th, 13th and 17th levels.",
        "level": 5
      },
      {
        "name": "Charge Recycling (Ex)",
        "name_en": "Charge Recycling (Ex)",
        "description_es": "A nivel 11 puede otorgar cargas temporales a armas de fuego tecnológicas usando puntos de garra; aumenta a 2 cargas a nivel 15 y 3 a nivel 19.",
        "description_en": "At 11th level can grant temporary charges to technological firearms using grit points; scales to 2 charges at 15th level and 3 at 19th level.",
        "level": 9
      },
      {
        "name": "Heavy Weaponry Deeds (Ex)",
        "name_en": "Heavy Weaponry Deeds (Ex)",
        "description_es": "A nivel 11 trata las armas pesadas tecnológicas como armas de fuego para efectos de hazañas mientras tenga puntos de garra.",
        "description_en": "At 11th level treats heavy technological weapons as firearms for deed purposes while holding grit points.",
        "level": 1
      },
      {
        "name": "Bonus Feats",
        "name_en": "Bonus Feats",
        "description_es": "Puede seleccionar la dote Tecnólogo (Technologist) como dote adicional, normalmente no disponible para pistoleros.",
        "description_en": "Can select Technologist as a bonus feat, normally unavailable to gunslingers.",
        "level": 4
      }
    ]
  },
  "gun_tank": {
    "class": "gunslinger",
    "name": "Gun Tank",
    "name_en": "Gun Tank",
    "name_es": "Tanque Armado",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/gunslinger/archetypes/paizo-gunslinger-archetypes/gun-tank/",
    "description_es": "Pistolero blindado que renuncia a la agilidad para usar armadura pesada y escudos, especializándose en resistir críticos, ataques furtivos y desviar balas con su armadura.",
    "description_en": "An armored gunslinger who trades agility for heavy armor and shield use, specializing in resisting critical hits, sneak attacks and deflecting bullets with armor.",
    "features_removed": [
      "Gunslinger's Dodge deed",
      "Evasive deed",
      "Nimble (Ex)",
      "Bonus Feats (4th, 8th, 12th, 16th, 20th)"
    ],
    "features_gained": [
      {
        "name": "Armor Proficiency",
        "name_en": "Armor Proficiency",
        "description_es": "Recibe competencia con todos los tipos de armadura y todos los escudos, incluidos escudos de torre.",
        "description_en": "Gains proficiency with all armor types and all shields, including tower shields."
      },
      {
        "name": "Gun Tank's Resolve (Ex)",
        "name_en": "Gun Tank's Resolve (Ex)",
        "description_es": "Cuando lleva armadura media o pesada y sufre un crítico o ataque furtivo, puede gastar 1 punto de garra como acción inmediata para intentar negar el daño extra. Comienza con 25% (nivel 1), 50% (nivel 10), 75% (nivel 15).",
        "description_en": "When wearing medium or heavy armor and subject to a critical or sneak attack, can spend 1 grit point as an immediate action to negate the extra damage. Starts at 25% (1st), 50% (10th), 75% (15th)."
      },
      {
        "name": "Bullet Deflection (Ex)",
        "name_en": "Bullet Deflection (Ex)",
        "description_es": "A nivel 2, su armadura media o pesada otorga un bono de deflexión contra ataques de armas de fuego y armas de salpicadura igual a la mitad del bono de armadura más la bonificación de mejora.",
        "description_en": "At 2nd level, his medium or heavy armor grants a deflection bonus against firearm and splash weapon attacks equal to half the armor's bonus plus its enhancement bonus.",
        "level": 4
      },
      {
        "name": "Armor Training (Ex)",
        "name_en": "Armor Training (Ex)",
        "description_es": "A nivel 4 y cada 4 niveles después, reduce el penalizador de armadura en 1 y aumenta el bono máximo de Destreza en 1 (máximo -4 / +4).",
        "description_en": "At 4th level and every 4 levels thereafter, reduces armor check penalty by 1 and increases max Dex bonus by 1 (max -4 / +4).",
        "level": 2
      },
      {
        "name": "Gun Tank's Resilience (Ex)",
        "name_en": "Gun Tank's Resilience (Ex)",
        "description_es": "A nivel 15, mientras tenga al menos 1 punto de garra, en salvaciones de Fortaleza exitosas contra efectos de medio daño no recibe daño alguno; +2 a salvaciones contra miedo y mente.",
        "description_en": "At 15th level, while holding at least 1 grit point, on successful Fortitude saves against half-damage effects takes no damage; +2 on saves against fear and mind-affecting effects.",
        "level": 8
      }
    ]
  },
  "maverick_gunslinger": {
    "class": "gunslinger",
    "name": "Maverick",
    "name_en": "Maverick",
    "name_es": "Inconformista",
    "source": "Ultimate Intrigue",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/gunslinger/archetypes/paizo-gunslinger-archetypes/maverick-gunslinger-archetype/",
    "description_es": "Pistolero rebelde y carismático que combina apuestas, peleas a puños y trucos vistosos con su arma, intercambiando movilidad y disparos elegantes por hazañas sociales y de intimidación.",
    "description_en": "A roguish and charismatic gunslinger who combines gambling, fistfighting and showy gunplay, trading mobility and clean shots for social and intimidation deeds.",
    "features_removed": [
      "Gunslinger's Dodge deed",
      "Pistol Whip deed",
      "Gunslinger Initiative deed"
    ],
    "features_gained": [
      {
        "name": "Stacked Deck (Ex)",
        "name_en": "Stacked Deck (Ex)",
        "description_es": "A nivel 1, gastando 1 punto de garra al hacer un chequeo de Engañar, Profesión (jugador) o Juego de Manos, lanza 1d6 y suma el resultado. En 6 natural puede repetir hasta su modificador de Sabiduría veces.",
        "description_en": "At 1st level, spending 1 grit point on a Bluff, Profession (gambler) or Sleight of Hand check, rolls 1d6 and adds it. On a natural 6 can reroll up to her Wisdom modifier times."
      },
      {
        "name": "Fist Fighter (Ex)",
        "name_en": "Fist Fighter (Ex)",
        "description_es": "A nivel 3, mientras tenga al menos 1 punto de garra, gana los beneficios de la dote Improved Unarmed Strike.",
        "description_en": "At 3rd level, while holding at least 1 grit point, gains the benefits of Improved Unarmed Strike.",
        "level": 3
      },
      {
        "name": "Gun Twirl (Ex)",
        "name_en": "Gun Twirl (Ex)",
        "description_es": "A nivel 3 obtiene la dote Dazzling Display y puede usarla con cualquier arma de fuego aunque no tenga Weapon Focus en ella, mientras tenga al menos 1 punto de garra.",
        "description_en": "At 3rd level gains Dazzling Display and can use it with any firearm even without Weapon Focus, while holding at least 1 grit point.",
        "level": 9
      }
    ]
  },
  "packmaster": {
    "class": "hunter",
    "name": "Packmaster",
    "name_en": "Packmaster",
    "name_es": "Amo de la Manada",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/hunter/archetypes/paizo-hunter-archetypes/packmaster/",
    "description_es": "Cazador que en lugar de un único compañero animal mantiene una manada de varios compañeros más débiles individualmente, expandiendo dotes de equipo y enfoques entre todos ellos.",
    "description_en": "A hunter who instead of a single animal companion maintains a pack of several individually weaker companions, expanding teamwork feats and animal foci across all of them.",
    "features_removed": [
      "Animal Companion (single, full level)",
      "Animal Focus",
      "Bonus Teamwork Feats (3rd+)",
      "Second Animal Focus (8th)",
      "Master Hunter (20th)"
    ],
    "features_gained": [
      {
        "name": "Pack Bond (Ex)",
        "name_en": "Pack Bond (Ex)",
        "description_es": "Puede tener más de un compañero animal, pero debe dividir su nivel efectivo de druida entre ellos para determinar las estadísticas de cada uno.",
        "description_en": "Can have more than one animal companion but must divide her effective druid level among them to determine each one's statistics.",
        "level": 1
      },
      {
        "name": "Pack Focus (Su)",
        "name_en": "Pack Focus (Su)",
        "description_es": "Versión modificada de animal focus que permite aplicar un aspecto a un compañero sin contar contra el límite diario de minutos.",
        "description_en": "Modified animal focus that allows applying one aspect to a companion without counting against the daily minute limit.",
        "level": 1
      },
      {
        "name": "Expanded Teamwork Feats (Ex)",
        "name_en": "Expanded Teamwork Feats (Ex)",
        "description_es": "A partir del nivel 3, en lugar de ganar nuevas dotes de equipo, aumenta el número de compañeros que se benefician de precise companion, woodland stride y dotes de equipo existentes.",
        "description_en": "Starting at 3rd level, instead of gaining new teamwork feats, increases the number of companions that benefit from precise companion, woodland stride and existing teamwork feats.",
        "level": 3
      },
      {
        "name": "Second Pack Focus (Su)",
        "name_en": "Second Pack Focus (Su)",
        "description_es": "A nivel 8 puede asignar aspectos de manera flexible entre múltiples compañeros con diferentes opciones.",
        "description_en": "At 8th level can flexibly assign aspects across multiple companions with different options.",
        "level": 8
      },
      {
        "name": "Master of the Pack (Ex)",
        "name_en": "Master of the Pack (Ex)",
        "description_es": "A nivel 20 obtiene rastreo a velocidad completa y mantiene un animal focus permanente diariamente.",
        "description_en": "At 20th level gains full-speed tracking and maintains one permanent animal focus daily.",
        "level": 20
      }
    ]
  },
  "verminous_hunter": {
    "class": "hunter",
    "name": "Verminous Hunter",
    "name_en": "Verminous Hunter",
    "name_es": "Cazador Verminoso",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/hunter/archetypes/paizo-hunter-archetypes/verminous-hunter/",
    "description_es": "Cazador macabro que se vincula con criaturas alimañas (insectos gigantes y bichos) en lugar de animales, recibiendo enfoques temáticos de bichos y la capacidad de atravesar enjambres sin daño.",
    "description_en": "A macabre hunter who bonds with vermin (giant insects and bugs) instead of animals, gaining bug-themed foci and the ability to traverse swarms unharmed.",
    "features_removed": [
      "Animal Companion",
      "Wild Empathy",
      "Animal Focus",
      "Woodland Stride"
    ],
    "features_gained": [
      {
        "name": "Vermin Companion (Ex)",
        "name_en": "Vermin Companion (Ex)",
        "description_es": "A nivel 1 selecciona una alimaña en lugar de un compañero animal. Las hunter tactics permiten otorgar dotes de equipo a este compañero alimaña sin mente.",
        "description_en": "At 1st level selects a vermin instead of an animal companion. Hunter tactics allows granting teamwork feats to this mindless vermin companion.",
        "level": 1
      },
      {
        "name": "Vermin Empathy (Ex)",
        "name_en": "Vermin Empathy (Ex)",
        "description_es": "Otorga empatía salvaje restringida exclusivamente a influir en alimañas, excluyendo animales y bestias mágicas.",
        "description_en": "Grants wild empathy restricted to influencing vermin only, excluding animals and magical beasts.",
        "level": 1
      },
      {
        "name": "Vermin Focus (Su)",
        "name_en": "Vermin Focus (Su)",
        "description_es": "Reemplaza animal focus con 16 opciones de alimañas (hormiga, escarabajo, ciempiés, cucaracha, cangrejo, pulga, mosca, sanguijuela, mantis, polilla, fásmido, escorpión, araña, avispa, gusano), cada una con bonos distintos a niveles 1, 8 y 15.",
        "description_en": "Replaces animal focus with 16 vermin options (ant, beetle, centipede, cockroach, crab, flea, fly, leech, mantis, moth, phasmid, scorpion, spider, wasp, worm), each with distinct bonuses at levels 1, 8 and 15.",
        "level": 1
      },
      {
        "name": "Swarm Stride (Ex)",
        "name_en": "Swarm Stride (Ex)",
        "description_es": "A nivel 5 atraviesa enjambres de alimañas sin recibir daño e ignora las habilidades de distracción de los enjambres, salvo que ataque activamente al enjambre.",
        "description_en": "At 5th level traverses vermin swarms without taking damage and ignores swarm distraction abilities, unless actively attacking the swarm.",
        "level": 7
      }
    ]
  },
  "primal_companion_hunter": {
    "class": "hunter",
    "name": "Primal Companion Hunter",
    "name_en": "Primal Companion Hunter",
    "name_es": "Cazador de Compañero Primigenio",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/hunter/archetypes/paizo-hunter-archetypes/primal-companion-hunter/",
    "description_es": "Cazador que renuncia a los enfoques animales para imbuir a su compañero animal con poder primigenio, otorgándole evoluciones similares a las de un eidolón durante períodos limitados.",
    "description_en": "A hunter who forgoes animal foci to imbue his animal companion with primal power, granting it eidolon-like evolutions for limited periods.",
    "features_removed": [
      "Animal Focus (1st)",
      "Second Animal Focus (8th)",
      "Master Hunter (20th)"
    ],
    "features_gained": [
      {
        "name": "Primal Transformation (Su)",
        "name_en": "Primal Transformation (Su)",
        "description_es": "A nivel 1, como acción rápida, activa habilidades primigenias en su compañero, otorgándole 2 puntos de evolución (4 a nivel 8, 6 a nivel 15) usables como las de un eidolón. Dura 1 minuto/nivel al día. Si el compañero muere, las evoluciones se aplican al cazador.",
        "description_en": "At 1st level, as a swift action, activates primal abilities in his companion, granting 2 evolution points (4 at 8th, 6 at 15th) usable like an eidolon's. Lasts 1 min/level per day. If the companion dies, evolutions apply to the hunter instead.",
        "level": 1
      },
      {
        "name": "Primal Surge (Su)",
        "name_en": "Primal Surge (Su)",
        "description_es": "A nivel 8, una vez al día como acción rápida, otorga a su compañero una evolución de hasta 4 puntos. La evolución cambia cada uso y activa automáticamente Primal Transformation si es necesario.",
        "description_en": "At 8th level, once per day as a swift action, grants his companion one evolution worth up to 4 points. The evolution changes each use and auto-activates Primal Transformation if needed.",
        "level": 8
      },
      {
        "name": "Primal Master (Su)",
        "name_en": "Primal Master (Su)",
        "description_es": "A nivel 20 activa el aspecto primigenio del compañero como acción gratuita. Al usar Primal Surge, otorga dos evoluciones en lugar de una.",
        "description_en": "At 20th level activates the companion's primal aspect as a free action. When using Primal Surge, grants two evolutions instead of one.",
        "level": 20
      }
    ],
    "sub_options": {
      "evolutions": "El compañero animal puede gastar Puntos de Evolución (como eidolón de convocador). Comienza con 1 PE y gana más con el nivel. Evoluciones disponibles: las mismas que un eidolón cuadrúpedo. / The animal companion can spend Evolution Points (like a summoner's eidolon). Starts with 1 EP, gains more with level. Available evolutions: same as a quadruped eidolon."
    }
  },
  "urban_hunter": {
    "class": "hunter",
    "name": "Urban Hunter",
    "name_en": "Urban Hunter",
    "name_es": "Cazador Urbano",
    "source": "Heroes of the Streets",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Hunter%20Urban%20Hunter",
    "description_es": "Cazador adaptado al entorno urbano que reemplaza habilidades silvestres por sociales, mantiene un compañero de aspecto inocuo y se especializa en captura no letal y combate informado de sus presas humanoides.",
    "description_en": "A hunter adapted to urban environments who replaces wilderness skills with social ones, keeps an innocuous-looking companion and specializes in nonlethal capture and informed combat against humanoid prey.",
    "features_removed": [
      "Knowledge (nature) class skill",
      "Survival class skill",
      "Hunter Tactics teamwork feat",
      "Woodland Stride"
    ],
    "features_gained": [
      {
        "name": "Urban Class Skills",
        "name_en": "Urban Class Skills",
        "description_es": "Diplomacia, Conocimiento (local) y Averiguar Intenciones reemplazan a las habilidades silvestres eliminadas.",
        "description_en": "Diplomacy, Knowledge (local) and Sense Motive replace the removed wilderness skills.",
        "level": 1
      },
      {
        "name": "Urban Animal Companion (Ex)",
        "name_en": "Urban Animal Companion (Ex)",
        "description_es": "Limitado a animales domesticados o nativos de ciudad (perro, caballo, tejón, ave, etc.). Parece inofensivo en entornos urbanos, requiriendo Averiguar Intenciones para reconocerlo como amenaza.",
        "description_en": "Limited to domesticated or city-native animals (dog, horse, badger, bird, etc.). Appears harmless in urban settings, requiring Sense Motive to recognize as a threat.",
        "level": 1
      },
      {
        "name": "Captor (Ex)",
        "name_en": "Captor (Ex)",
        "description_es": "A nivel 3 no recibe penalizadores al causar daño no letal y obtiene dotes de combate adicionales (Improved Bull Rush, Dirty Trick, Disarm, Grapple, Trip y mejoradas) a niveles 3, 6, 9, 12, 15 y 18.",
        "description_en": "At 3rd level takes no penalties when dealing nonlethal damage and gains bonus combat feats (Improved Bull Rush, Dirty Trick, Disarm, Grapple, Trip variants) at 3rd, 6th, 9th, 12th, 15th and 18th levels.",
        "level": 7
      },
      {
        "name": "Animal Insight (Ex)",
        "name_en": "Animal Insight (Ex)",
        "description_es": "A nivel 5, tanto el cazador como su compañero reciben bono de perspicacia a Averiguar Intenciones y +2 contra ilusiones y efectos mentales mientras estén a 30 pies uno del otro.",
        "description_en": "At 5th level, both hunter and companion gain insight bonus on Sense Motive and +2 vs. illusions and mind-affecting effects while within 30 feet of each other.",
        "level": 8
      },
      {
        "name": "Frightful Ferocity (Ex)",
        "name_en": "Frightful Ferocity (Ex)",
        "description_es": "A nivel 17, ambos pueden usar Intimidar como acción rápida para desmoralizar oponentes.",
        "description_en": "At 17th level, both can use Intimidate as a swift action to demoralize opponents.",
        "level": 14
      }
    ],
    "class_skills_add": [
      "diplomacy",
      "knowledge_local",
      "sense_motive"
    ],
    "class_skills_remove": [
      "knowledge_nature",
      "survival"
    ]
  },
  "forester": {
    "class": "hunter",
    "name": "Forester",
    "name_en": "Forester",
    "name_es": "Forestal",
    "source": "Ultimate Wilderness",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Hunter%20Forester",
    "description_es": "Cazador solitario que renuncia a su compañero animal para aplicar el animal focus a sí mismo, ganando terrenos favoritos del explorador, dotes de combate adicionales, evasión y la capacidad de tactician.",
    "description_en": "A solitary hunter who forgoes his animal companion to apply animal focus to himself, gaining ranger-like favored terrains, bonus combat feats, evasion and the tactician ability.",
    "features_removed": [
      "Animal Companion (1st)",
      "Precise Companion (2nd)",
      "Hunter Tactics (3rd)",
      "Bonus Tricks",
      "Improved Empathic Link",
      "Raise Animal Companion",
      "Speak with Master",
      "Greater Empathic Link"
    ],
    "features_gained": [
      {
        "name": "Animal Focus (Su)",
        "name_en": "Animal Focus (Su)",
        "description_es": "Reemplaza el compañero animal: en lugar de vincularse con una criatura, el forestal aplica los beneficios del animal focus a sí mismo.",
        "description_en": "Replaces animal companion: instead of bonding with a creature, the forester applies animal focus benefits to himself."
      },
      {
        "name": "Favored Terrain (Ex)",
        "name_en": "Favored Terrain (Ex)",
        "description_es": "Obtiene la habilidad de terreno favorito del explorador. Desde nivel 5 gana terrenos cada 4 niveles y suma la mitad de su bono al daño contra criaturas nativas de su terreno.",
        "description_en": "Gains the ranger's favored terrain ability. From 5th level gains terrains every 4 levels and adds half his bonus to damage against creatures native to his terrain."
      },
      {
        "name": "Bonus Combat Feats (Ex)",
        "name_en": "Bonus Combat Feats (Ex)",
        "description_es": "Recibe dotes de combate adicionales a niveles 2, 7, 13 y 19 en lugar de la habilidad precise companion.",
        "description_en": "Gains bonus combat feats at 2nd, 7th, 13th and 19th levels in place of the precise companion ability.",
        "level": 3
      },
      {
        "name": "Tactician (Ex)",
        "name_en": "Tactician (Ex)",
        "description_es": "Otorga una dote de equipo a aliados cercanos durante 3+ asaltos como acción estándar. Los usos aumentan a niveles 3, 7 y cada 5 niveles después.",
        "description_en": "Grants one teamwork feat to nearby allies for 3+ rounds as a standard action. Uses increase at 3rd, 7th and every 5 levels thereafter.",
        "level": 3
      },
      {
        "name": "Evasion / Improved Evasion (Ex)",
        "name_en": "Evasion / Improved Evasion (Ex)",
        "description_es": "A nivel 4 obtiene evasión; a nivel 11 evasión mejorada (mitad del daño en salvación fallida).",
        "description_en": "At 4th level gains evasion; at 11th level improved evasion (half damage on failed save).",
        "level": 4
      },
      {
        "name": "Camouflage / Hide in Plain Sight (Ex)",
        "name_en": "Camouflage / Hide in Plain Sight (Ex)",
        "description_es": "A nivel 7 puede esconderse mediante Sigilo en sus terrenos favoritos sin cobertura ni ocultación; a nivel 14 puede usar Sigilo siendo observado en esos terrenos.",
        "description_en": "At 7th level can hide via Stealth in favored terrains without cover or concealment; at 14th can use Stealth while observed in those terrains.",
        "level": 12
      },
      {
        "name": "Breath of Life (Sp)",
        "name_en": "Breath of Life (Sp)",
        "description_es": "A nivel 10, aptitud sobrenatural una vez al día.",
        "description_en": "At 10th level, once-daily spell-like ability.",
        "level": 14
      }
    ]
  },
  "preacher": {
    "class": "inquisitor",
    "name": "Preacher",
    "name_en": "Preacher",
    "name_es": "Predicador",
    "source": "Ultimate Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Inquisitor%20Preacher",
    "description_es": "Inquisidor que renuncia a las tácticas de equipo solitarias para inspirar a aliados con sermones que les permiten repetir tiradas de ataque, defenderse mejor o evitar ataques peligrosos.",
    "description_en": "An inquisitor who forgoes solo tactics to inspire allies with sermons that let them reroll attacks, defend better or avoid dangerous strikes.",
    "features_removed": [
      "Solo Tactics (3rd)"
    ],
    "features_gained": [
      {
        "name": "Determination (Ex)",
        "name_en": "Determination (Ex)",
        "description_es": "A nivel 3, una vez al día como acción gratuita crea uno de tres efectos: Aggression (repetir su propia tirada de ataque antes de revelar el resultado), Defense (+4 perspicacia a CA contra un ataque) o Warning (un aliado provoca que el atacante repita la tirada). Usos extra renunciando a dotes de equipo a niveles 3, 6, 9, 12, 15, 18.",
        "description_en": "At 3rd level, once per day as a free action creates one of three effects: Aggression (reroll her own attack before results revealed), Defense (+4 insight to AC vs. one attack) or Warning (ally forces attacker to reroll). Extra uses by forgoing teamwork feats at 3, 6, 9, 12, 15, 18.",
        "level": 3
      }
    ]
  },
  "infiltrator": {
    "class": "inquisitor",
    "name": "Infiltrator",
    "name_en": "Infiltrator",
    "name_es": "Infiltrador",
    "source": "Ultimate Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Inquisitor%20Infiltrator",
    "description_es": "Inquisidor especialista en infiltrarse en organizaciones enemigas, sacrificando habilidades de detección y rastreo por engaño mágico, capacidad de fingir alineamientos y resistencia a la verdad mágica.",
    "description_en": "An inquisitor specialist at infiltrating enemy organizations, sacrificing detection and tracking abilities for magical deception, the ability to feign alignments and resistance to truth-magic.",
    "features_removed": [
      "Stern Gaze (1st)",
      "Monster Lore (1st)",
      "Track (3rd)",
      "Discern Lies (5th)"
    ],
    "features_gained": [
      {
        "name": "Misdirection (Sp)",
        "name_en": "Misdirection (Sp)",
        "description_es": "A nivel 1, cada día al preparar conjuros elige un alineamiento; aparenta tener ese alineamiento ante magias de detección y otros efectos divinatorios.",
        "description_en": "At 1st level, each day when preparing spells chooses an alignment; appears to have that alignment to detection magic and other divination effects."
      },
      {
        "name": "Guileful Lore (Ex)",
        "name_en": "Guileful Lore (Ex)",
        "description_es": "Añade su modificador de Sabiduría a chequeos de Engañar y Diplomacia, ganando aptitud para el subterfugio social.",
        "description_en": "Adds her Wisdom modifier to Bluff and Diplomacy checks, gaining aptitude for social subterfuge."
      },
      {
        "name": "Forbidden Lore (Ex)",
        "name_en": "Forbidden Lore (Ex)",
        "description_es": "Puede lanzar conjuros de un alineamiento opuesto al suyo o al de su deidad sin penalización, esencial para mantener la fachada.",
        "description_en": "Can cast spells of an alignment opposed to her or her deity without penalty, essential for maintaining cover.",
        "level": 3
      },
      {
        "name": "Necessary Lies (Su)",
        "name_en": "Necessary Lies (Su)",
        "description_es": "Otorga bonos a salvaciones contra magia que revele la verdad, incluyendo detect lies y zone of truth.",
        "description_en": "Grants bonuses on saves against truth-revealing magic, including detect lies and zone of truth.",
        "level": 5
      }
    ]
  },
  "sin_eater": {
    "class": "inquisitor",
    "name": "Sin Eater",
    "name_en": "Sin Eater",
    "name_es": "Devorapecados",
    "source": "Ultimate Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Inquisitor%20Sin%20Eater",
    "description_es": "Inquisidor sombrío que renuncia a su dominio para devorar ritualmente los pecados de enemigos caídos, curándose con su muerte y obteniendo conocimiento de sus almas.",
    "description_en": "A grim inquisitor who forgoes her domain to ritually devour the sins of fallen enemies, healing herself from their deaths and gleaning knowledge from their souls.",
    "features_removed": [
      "Domain (1st)",
      "Bonus Teamwork Feat (6th)",
      "Exploit Weakness (14th)"
    ],
    "features_gained": [
      {
        "name": "Eat Sin (Sp)",
        "name_en": "Eat Sin (Sp)",
        "description_es": "A nivel 1, ritual que permite consumir los pecados de un enemigo recién matado para curar 1d8 + nivel (máx +5), escalando a 4d8 + nivel (máx +20). A nivel 8 puede aceptar niveles negativos temporales para impedir que el caído se levante como no muerto.",
        "description_en": "At 1st level, ritual to consume the sins of a freshly slain enemy to heal 1d8 + level (max +5), scaling to 4d8 + level (max +20). At 8th level can accept temporary negative levels to prevent the slain from rising as undead.",
        "level": 1
      },
      {
        "name": "Speak with Dead (Sp)",
        "name_en": "Speak with Dead (Sp)",
        "description_es": "A nivel 6, dentro de los 10 minutos posteriores a comer los pecados, puede preguntar a los restos del alma del enemigo como con speak with dead, NL = nivel de inquisidor.",
        "description_en": "At 6th level, within 10 minutes of eating an enemy's sins can question the remnants of their soul as per speak with dead, CL = inquisitor level.",
        "level": 6
      },
      {
        "name": "Burden of Sin (Sp)",
        "name_en": "Burden of Sin (Sp)",
        "description_es": "A nivel 14, como acción de asalto completo puede transferir aflicciones, condiciones o efectos de conjuros dañinos de otra criatura a sí misma. Uso reiterable.",
        "description_en": "At 14th level, as a full-round action can transfer afflictions, conditions or harmful spell effects from another creature onto herself. Repeatable.",
        "level": 14
      }
    ],
    "sub_options": {
      "domains": "Debe pertenecer a una deidad caótica o neutral. Dominio relacionado con muerte o redención. Puede consumir los pecados de los muertos para ganar beneficios. / Must serve a chaotic or neutral deity. Domain related to death or redemption. Can consume the sins of the dead to gain benefits."
    }
  },
  "exorcist": {
    "class": "inquisitor",
    "name": "Exorcist",
    "name_en": "Exorcist",
    "name_es": "Exorcista",
    "source": "Ultimate Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Inquisitor%20Exorcist",
    "description_es": "Inquisidor especialista en expulsar entidades poseedoras y exteriores intrusos, cambiando segundos y terceros juicios por veredictos específicos contra la posesión.",
    "description_en": "An inquisitor specialist at expelling possessing entities and intruding outsiders, trading second and third judgments for specific verdicts against possession.",
    "features_removed": [
      "Second Judgment (8th)",
      "Third Judgment (16th)",
      "Slayer (17th)",
      "True Judgment (20th)"
    ],
    "features_gained": [
      {
        "name": "Verdict of Exorcism (Su)",
        "name_en": "Verdict of Exorcism (Su)",
        "description_es": "A nivel 8 permite que el juicio aturda al objetivo durante 1 asalto y expulse forzosamente a entidades poseedoras de cuerpos (Voluntad niega).",
        "description_en": "At 8th level allows judgment to daze a target for 1 round and forcibly expel possessing entities from bodies (Will negates)."
      },
      {
        "name": "Verdict of Exile (Su)",
        "name_en": "Verdict of Exile (Su)",
        "description_es": "A nivel 16 usa el juicio para aturdir y lanzar dismissal sobre criaturas poseídas o exteriores (Voluntad niega).",
        "description_en": "At 16th level uses judgment to daze and cast dismissal on possessed creatures or outsiders (Will negates).",
        "level": 8
      },
      {
        "name": "Closed Mind (Ex)",
        "name_en": "Closed Mind (Ex)",
        "description_es": "A nivel 17 se vuelve inmune a efectos de compulsión y a intentos de posesión, incluyendo magic jar.",
        "description_en": "At 17th level becomes immune to compulsion effects and possession attempts, including magic jar."
      },
      {
        "name": "Verdict of Anathema (Su)",
        "name_en": "Verdict of Anathema (Su)",
        "description_es": "A nivel 20, juicio que afecta a todos los enemigos en 10 pies con el efecto de Verdict of Exorcism simultáneamente.",
        "description_en": "At 20th level, judgment that affects all enemies within 10 feet with the Verdict of Exorcism effect simultaneously.",
        "level": 16
      }
    ]
  },
  "monster_tactician": {
    "class": "inquisitor",
    "name": "Monster Tactician",
    "name_en": "Monster Tactician",
    "name_es": "Táctico de Monstruos",
    "source": "Monster Summoner's Handbook",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Inquisitor%20Monster%20Tactician",
    "description_es": "Inquisidor que reemplaza sus juicios por la habilidad de invocar monstruos como aptitud sobrenatural, otorgándoles dotes de equipo y luchando coordinadamente con criaturas convocadas.",
    "description_en": "An inquisitor who replaces her judgments with the ability to summon monsters as a spell-like ability, granting them teamwork feats and fighting in coordination with summoned creatures.",
    "features_removed": [
      "Judgment (1st)",
      "Discern Lies (5th)",
      "Second Judgment (8th)",
      "Third Judgment (16th)",
      "Slayer (17th)",
      "True Judgment (20th)"
    ],
    "features_gained": [
      {
        "name": "Summon Monster (Sp)",
        "name_en": "Summon Monster (Sp)",
        "description_es": "Lanza summon monster I como aptitud sobrenatural 3 + Sabiduría veces al día, como acción estándar; criaturas duran 1 minuto/nivel. El nivel del conjuro aumenta cada 2 niveles (máx IX a nivel 17). Solo una invocación activa a la vez.",
        "description_en": "Casts summon monster I as a spell-like ability 3 + Wis modifier times/day as a standard action; creatures last 1 minute/level. Spell level increases every 2 levels (max IX at 17th). Only one active summoning at a time."
      },
      {
        "name": "Summon Tactics (Su)",
        "name_en": "Summon Tactics (Su)",
        "description_es": "A nivel 5 aplica una dote de equipo elegida a todas las criaturas invocadas; +1 dote disponible a nivel 8 y 16. A nivel 20, las criaturas invocadas se tratan como si conocieran todas sus dotes de equipo.",
        "description_en": "At 5th level applies one chosen teamwork feat to all summoned creatures; +1 selectable feat at 8th and 16th. At 20th level, summoned creatures are treated as knowing all the monster tactician's teamwork feats."
      }
    ]
  },
  "cipher_investigator": {
    "class": "investigator",
    "name": "Cipher",
    "name_en": "Cipher",
    "name_es": "Cifrado",
    "source": "Ultimate Intrigue",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Investigator%20Cipher",
    "description_es": "Investigador espía especializado en pasar desapercibido y resistir adivinación, cambiando habilidades sociales y resistencia al veneno por sigilo, evasión e invisibilidad psicológica.",
    "description_en": "A spy investigator specialized in going unnoticed and resisting divination, trading social skills and poison resistance for stealth, evasion and psychological invisibility.",
    "features_removed": [
      "Bluff, Diplomacy, Intimidate, Perform class skills",
      "Trapfinding (1st)",
      "Poison Lore (2nd)",
      "Poison Resistance (2nd)",
      "Investigator Talents (3rd, 5th, 7th, 11th)",
      "Trap Sense (3rd)",
      "Swift Alchemy (9th)",
      "Poison Immunity (11th)"
    ],
    "features_gained": [
      {
        "name": "Unassuming (Ex)",
        "name_en": "Unassuming (Ex)",
        "description_es": "Recibe Disfrazarse, Escapismo, Conocimiento (local), Juego de Manos y Sigilo como habilidades de clase. Puede usar inspiración en estas sin gastar usos.",
        "description_en": "Gains Disguise, Escape Artist, Knowledge (local), Sleight of Hand and Stealth as class skills. Can use inspiration on these without expending uses.",
        "level": 1
      },
      {
        "name": "Inattention Blindness (Su)",
        "name_en": "Inattention Blindness (Su)",
        "description_es": "Las criaturas que normalmente lo notarían deben superar un chequeo de Percepción o ignorar al cifrado dentro de un radio que escala con el nivel.",
        "description_en": "Creatures that would normally notice him must succeed at a Perception check or ignore the cipher within a range that scales with level.",
        "level": 1
      },
      {
        "name": "Null Aura (Su, Sp)",
        "name_en": "Null Aura (Su, Sp)",
        "description_es": "+4 a salvaciones contra adivinación; el escrutinio (scrying) requiere conocimiento de primera mano. A nivel 9 obtiene nondetection constante.",
        "description_en": "+4 on saves against divination; scrying requires firsthand knowledge. At 9th level gains constant nondetection.",
        "level": 1
      },
      {
        "name": "Evasion / Improved Evasion (Ex)",
        "name_en": "Evasion / Improved Evasion (Ex)",
        "description_es": "Obtiene evasión a nivel 3 y evasión mejorada a nivel 11.",
        "description_en": "Gains evasion at 3rd level and improved evasion at 11th level.",
        "level": 3
      },
      {
        "name": "Tenuous Threat (Su)",
        "name_en": "Tenuous Threat (Su)",
        "description_es": "El primer impacto exitoso del día contra un oponente no estudiado provoca una salvación de Voluntad o aplica el efecto de studied strike.",
        "description_en": "The first successful hit per day against a non-studied opponent triggers a Will save or applies the studied strike effect.",
        "level": 4
      },
      {
        "name": "Hide in Plain Sight (Su)",
        "name_en": "Hide in Plain Sight (Su)",
        "description_es": "A nivel 7 puede usar Sigilo siendo observado, siempre que el observador esté dentro del rango de Inattention Blindness.",
        "description_en": "At 7th level can use Stealth while observed, as long as the observer is within Inattention Blindness range.",
        "level": 7
      }
    ],
    "class_skills_remove": [
      "bluff",
      "diplomacy",
      "intimidate",
      "perform"
    ]
  },
  "mastermind_investigator": {
    "class": "investigator",
    "name": "Mastermind",
    "name_en": "Mastermind",
    "name_es": "Mente Maestra",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Investigator%20Mastermind",
    "description_es": "Investigador manipulador entre bastidores que prepara aliados con sus rangos de habilidad, defiende contra ataques y rechaza adivinación mental.",
    "description_en": "A behind-the-scenes manipulator investigator who prepares allies with his skill ranks, defends against attacks and rejects mind-reading divination.",
    "features_removed": [
      "Trapfinding (1st)",
      "Swift Alchemy (4th)",
      "Investigator Talent (9th)",
      "Trap Sense (3rd+)"
    ],
    "features_gained": [
      {
        "name": "Mastermind's Inspiration (Ex)",
        "name_en": "Mastermind's Inspiration (Ex)",
        "description_es": "Permite usar inspiración en chequeos de Diplomacia e Intimidar sin gastar usos, pero impide usarla para Lingüística o Saber Mágico.",
        "description_en": "Allows using inspiration on Diplomacy and Intimidate checks without expending uses, but prevents using it for Linguistics or Spellcraft."
      },
      {
        "name": "A Quiet Word (Ex)",
        "name_en": "A Quiet Word (Ex)",
        "description_es": "Tras 10 minutos preparando a un aliado, este puede usar los rangos de habilidad del mente maestra en un chequeo de Diplomacia o Intimidar dentro de 24 horas. Usos crecen con el nivel; a nivel 12 expande a más habilidades.",
        "description_en": "After 10 minutes preparing an ally, that ally can use the mastermind's skill ranks for one Diplomacy or Intimidate check within 24 hours. Uses scale with level; at 12th expands to more skills.",
        "level": 4
      },
      {
        "name": "Mastermind Defense (Ex)",
        "name_en": "Mastermind Defense (Ex)",
        "description_es": "A nivel 4, como acción inmediata gasta dos usos de inspiración para tirar el dado de inspiración como penalizador a un ataque entrante (1 uso si tiene combat inspiration).",
        "description_en": "At 4th level, as an immediate action expends two inspiration uses to roll the inspiration die as a penalty to an incoming attack (1 use if he has combat inspiration).",
        "level": 9
      },
      {
        "name": "Impregnable Mind (Ex)",
        "name_en": "Impregnable Mind (Ex)",
        "description_es": "A nivel 9 obtiene inmunidad a adivinaciones que permitan salvación y puede pensar en cualquier idioma que conozca para impedir lectura de pensamientos a menos que los oponentes conozcan todos sus idiomas.",
        "description_en": "At 9th level gains immunity to divination effects allowing saves and can think in any language he speaks to prevent mind-reading unless opponents know all his languages.",
        "level": 3
      }
    ]
  },
  "psychic_detective": {
    "class": "investigator",
    "name": "Psychic Detective",
    "name_en": "Psychic Detective",
    "name_es": "Detective Psíquico",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Investigator%20Psychic%20Detective",
    "description_es": "Investigador con afinidad psíquica que reemplaza su alquimia por lanzamiento de conjuros psíquicos, ganando resistencias mentales y un toque de las amplificaciones frénicas del psíquico.",
    "description_en": "An investigator with psychic affinity who replaces his alchemy with psychic spellcasting, gaining mental resistances and a touch of the psychic's phrenic amplifications.",
    "features_removed": [
      "Acrobatics, Climb, Perform class skills",
      "Alchemy (1st)",
      "Poison Lore (2nd)",
      "Poison Resistance (2nd)",
      "Investigator Talent (3rd)",
      "Swift Alchemy (9th)",
      "Poison Immunity (11th)"
    ],
    "features_gained": [
      {
        "name": "Spells",
        "name_en": "Spells",
        "description_es": "Lanza conjuros psíquicos de la lista del psíquico (hasta 6º nivel) más conjuros de detective: detect alignment, find traps, calm spirit, daylight, modify memory, banishment, moment of prescience y greater scrying. Usa Inteligencia para lanzamiento.",
        "description_en": "Casts psychic spells from the psychic class list (up to 6th level) plus detective spells: detect alignment, find traps, calm spirit, daylight, modify memory, banishment, moment of prescience and greater scrying. Uses Intelligence for casting.",
        "level": 1
      },
      {
        "name": "Psychic Meddler (Su)",
        "name_en": "Psychic Meddler (Su)",
        "description_es": "Bono a salvaciones contra efectos psíquicos: +1 a nivel 2, escalando hasta +6 a nivel 17. A nivel 5, suma la mitad del bono a chequeos de disipar contra efectos psíquicos.",
        "description_en": "Save bonus against psychic effects: +1 at 2nd, scaling to +6 at 17th. At 5th level, adds half this bonus to dispel checks against psychic effects.",
        "level": 2
      },
      {
        "name": "Phrenic Dabbler (Su)",
        "name_en": "Phrenic Dabbler (Su)",
        "description_es": "A nivel 3 recibe un fondo común de puntos frénicos igual a la mitad del nivel y una amplificación frénica, imitando habilidades del psíquico. No puede elegir descubrimientos de alquimista pero puede tomar Expanded Phrenic Pool como descubrimiento.",
        "description_en": "At 3rd level gains a phrenic point pool equal to half class level and one phrenic amplification, mimicking psychic features. Cannot choose alchemist discoveries but may take Expanded Phrenic Pool as a discovery.",
        "level": 3
      }
    ],
    "class_skills_remove": [
      "acrobatics",
      "climb",
      "perform"
    ],
    "sub_options": {
      "spirits": "Puede usar hechizos psiónicos de detección de espíritus y emociones en vez de extractos de investigador. Detecta residuos espirituales en escenas del crimen mediante sus habilidades psíquicas. / Can use psychic spirit/emotion detection spells instead of investigator extracts. Detects spiritual residue at crime scenes through psychic abilities."
    }
  },
  "cult_hunter": {
    "class": "investigator",
    "name": "Cult Hunter",
    "name_en": "Cult Hunter",
    "name_es": "Cazador de Cultos",
    "source": "Horror Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Investigator%20Cult%20Hunter",
    "description_es": "Investigador especializado en perseguir cultos heréticos y entidades extraplanares, sacrificando trampas y resistencia al veneno por estudio de cultos, defensas contra emboscadas y compulsiones.",
    "description_en": "An investigator specialized in hunting heretical cults and extraplanar entities, trading traps and poison resistance for cult study, ambush defenses and compulsion resistance.",
    "features_removed": [
      "Trapfinding (1st)",
      "Poison Lore (2nd)",
      "Poison Resistance (2nd)",
      "Trap Sense (3rd)",
      "Investigator Talents (7th, 13th)",
      "Swift Alchemy (9th)",
      "Poison Immunity (11th)"
    ],
    "features_gained": [
      {
        "name": "Sense Madness (Ex)",
        "name_en": "Sense Madness (Ex)",
        "description_es": "A nivel 1 añade un bono igual a la mitad del nivel de clase (mín +1) a chequeos de Averiguar Intenciones para detectar locura.",
        "description_en": "At 1st level adds a bonus equal to half class level (min +1) on Sense Motive checks to detect insanity.",
        "level": 1
      },
      {
        "name": "Purify Mind and Body (Ex)",
        "name_en": "Purify Mind and Body (Ex)",
        "description_es": "A nivel 2 otorga bonos a salvaciones contra compulsiones y venenos; a nivel 11 puede repetir las fallidas.",
        "description_en": "At 2nd level grants bonuses on saves vs. compulsions and poisons; at 11th can reroll failures.",
        "level": 2
      },
      {
        "name": "Student of the Beyond (Ex)",
        "name_en": "Student of the Beyond (Ex)",
        "description_es": "A nivel 2, bono en chequeos de Conocimiento y Saber Mágico relacionados con fenómenos planares.",
        "description_en": "At 2nd level, bonus on Knowledge and Spellcraft checks related to planar phenomena.",
        "level": 2
      },
      {
        "name": "Ambush Defense (Ex)",
        "name_en": "Ambush Defense (Ex)",
        "description_es": "A nivel 3, bono de perspicacia a CA y salvaciones de Reflejos durante asaltos sorpresa.",
        "description_en": "At 3rd level, insight bonus to AC and Reflex saves during surprise rounds.",
        "level": 3
      },
      {
        "name": "Cultic Study (Ex)",
        "name_en": "Cultic Study (Ex)",
        "description_es": "A nivel 4 estudia deidades/religiones específicas para ganar bonos en múltiples chequeos de habilidad relacionados.",
        "description_en": "At 4th level studies specific deities/religions for bonuses on multiple related skill checks.",
        "level": 4
      },
      {
        "name": "Summoning Sense (Ex)",
        "name_en": "Summoning Sense (Ex)",
        "description_es": "A nivel 7 obtiene esquiva sobrenatural (uncanny dodge) contra criaturas convocadas.",
        "description_en": "At 7th level gains uncanny dodge against summoned creatures.",
        "level": 7
      },
      {
        "name": "Extraplanar Expulsion (Sp)",
        "name_en": "Extraplanar Expulsion (Sp)",
        "description_es": "A nivel 13, aptitud sobrenatural de disipación de magia sacrificando extractos.",
        "description_en": "At 13th level, spell-like dispel ability by sacrificing extracts.",
        "level": 13
      }
    ]
  },
  "cryptid_scholar": {
    "class": "investigator",
    "name": "Cryptid Scholar",
    "name_en": "Cryptid Scholar",
    "name_es": "Erudito de Críptidos",
    "source": "Magic Tactics Toolbox",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Investigator%20Cryptid%20Scholar",
    "description_es": "Investigador erudito en monstruos esquivos y críptidos, cuya habilidad para identificar criaturas inspira directamente a sus aliados con bonos defensivos y daño extra.",
    "description_en": "An investigator scholar of elusive monsters and cryptids whose monster identification skill directly inspires allies with defensive bonuses and extra damage.",
    "features_removed": [
      "Poison Lore (2nd)",
      "Poison Resistance (2nd)",
      "Studied Combat (4th)",
      "Studied Strike (4th)"
    ],
    "features_gained": [
      {
        "name": "Intuitive Monster Lore (Ex)",
        "name_en": "Intuitive Monster Lore (Ex)",
        "description_es": "Añade su modificador de Sabiduría a chequeos de Conocimiento para identificar habilidades de criaturas. A nivel 5 puede tomar 10 incluso amenazado o distraído.",
        "description_en": "Adds his Wisdom modifier to Knowledge checks for identifying creature abilities. At 5th level can take 10 even when threatened or distracted.",
        "level": 1
      },
      {
        "name": "Opportune Advice (Ex)",
        "name_en": "Opportune Advice (Ex)",
        "description_es": "A nivel 4, tras identificar habilidades de un monstruo, otorga a aliados cercanos +1 perspicacia a CA y salvaciones contra habilidades extraordinarias, sobrenaturales y semejantes a conjuros de ese tipo de criatura. Escala a +5 a nivel 20.",
        "description_en": "At 4th level, after identifying a monster's abilities, grants nearby allies +1 insight to AC and saves vs. extraordinary, supernatural and spell-like abilities from that creature type. Scales to +5 at 20th.",
        "level": 4
      },
      {
        "name": "Knowledgeable Strike (Ex)",
        "name_en": "Knowledgeable Strike (Ex)",
        "description_es": "A nivel 4 puede terminar opportune advice para otorgar a los aliados daño extra en sus ataques. Comienza en 1d6 y aumenta a 5d6 a nivel 20. Daño basado en precisión sujeto a inmunidades a ataque furtivo.",
        "description_en": "At 4th level can end opportune advice to grant allies extra damage on attacks. Starts at 1d6 and increases to 5d6 at 20th level. Precision damage subject to sneak attack immunities.",
        "level": 4
      }
    ]
  },
  "kinetic_chirurgeon": {
    "class": "kineticist",
    "name": "Kinetic Chirurgeon",
    "name_en": "Kinetic Chirurgeon",
    "name_es": "Cirujano Cinético",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Kineticist%20Kinetic%20Chirurgeon",
    "description_es": "Cinético sanador que cambia infusiones y metacinesia destructivas por una versión expandida de kinetic healer, mercedes de paladín aplicables a curación y mayor capacidad de tampón interno.",
    "description_en": "A healer kineticist who trades destructive infusions and metakinesis for an expanded kinetic healer, paladin mercies applied to healing and greater internal buffer capacity.",
    "features_removed": [
      "Infusions",
      "Metakinesis (5th, 9th, 13th, 17th)",
      "Infusion Specialization (5th, 9th, 13th, 17th)",
      "Standard internal buffer capacity"
    ],
    "features_gained": [
      {
        "name": "Kinetic Chirurgery (Su)",
        "name_en": "Kinetic Chirurgery (Su)",
        "description_es": "Debe elegir éter o agua como elemento principal. A nivel 1 obtiene kinetic healer como aptitud salvaje gratuita. A partir de nivel 3 (cada 2 niveles) elige una merced de paladín que puede aplicar al curar.",
        "description_en": "Must choose aether or water as primary element. At 1st level gains kinetic healer as a bonus wild talent. From 3rd level (every 2 levels) selects a paladin mercy applicable when healing."
      },
      {
        "name": "Metahealer (Su)",
        "name_en": "Metahealer (Su)",
        "description_es": "Reemplaza metacinesia: a nivel 5 tira un dado adicional al curar; nivel 9 puede revivir aliados muertos en el último asalto; nivel 11 dos dados extra; nivel 13 puede usar kinetic healer en sí mismo como acción rápida; nivel 17 cura dos objetivos a la vez o tres dados extra.",
        "description_en": "Replaces metakinesis: at 5th rolls one extra die when healing; 9th can revive allies dead within 1 round; 11th two extra dice; 13th can use kinetic healer on himself as a swift action; 17th heals two targets at once or three extra dice.",
        "level": 5
      },
      {
        "name": "Healing Buffer (Su)",
        "name_en": "Healing Buffer (Su)",
        "description_es": "Su tampón interno tiene el doble del tamaño máximo habitual cuando acepta quemado para usar kinetic healer.",
        "description_en": "His internal buffer has double the usual maximum size when accepting burn for kinetic healer.",
        "level": 6
      }
    ]
  },
  "elemental_ascetic": {
    "class": "kineticist",
    "name": "Elemental Ascetic",
    "name_en": "Elemental Ascetic",
    "name_es": "Asceta Elemental",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Kineticist%20Elemental%20Ascetic",
    "description_es": "Cinético monástico que combina disciplina marcial con poderes elementales, usa Sabiduría en lugar de Constitución, ataca con flurry of blows imbuido de elementos y gana CA sin armadura.",
    "description_en": "A monastic kineticist who combines martial discipline with elemental powers, uses Wisdom instead of Constitution, attacks with element-imbued flurry of blows and gains unarmored AC.",
    "features_removed": [
      "Elemental Overflow (1st)",
      "Elemental Defense (2nd)",
      "Infusions (5th, 9th, 13th)"
    ],
    "features_gained": [
      {
        "name": "Elemental Flurry (Ex)",
        "name_en": "Elemental Flurry (Ex)",
        "description_es": "A nivel 1 obtiene Improved Unarmed Strike y la infusión de forma kinetic fist gratis (cuesta 0 quemado en lugar de 1). Permite flurry of blows con kinetic fist, restringido a ataques de puño y sin armadura.",
        "description_en": "At 1st level gains Improved Unarmed Strike bonus feat and the kinetic fist form infusion at 0 burn (instead of 1). Enables flurry of blows with kinetic fist, restricted to fist attacks while unarmored.",
        "level": 1
      },
      {
        "name": "Elemental Wisdom (Su)",
        "name_en": "Elemental Wisdom (Su)",
        "description_es": "Sustituye Sabiduría por Constitución para determinar CD, duraciones y chequeos de concentración de aptitudes salvajes.",
        "description_en": "Substitutes Wisdom for Constitution when determining wild talent DCs, durations and concentration checks.",
        "level": 1
      },
      {
        "name": "AC Bonus (Ex)",
        "name_en": "AC Bonus (Ex)",
        "description_es": "A nivel 2 añade su bono de Sabiduría a la CA y CMD sin armadura, +1 cada 4 niveles más allá del 2º.",
        "description_en": "At 2nd level adds his Wisdom bonus to AC and CMD when unarmored, +1 per 4 levels beyond 2nd.",
        "level": 2
      },
      {
        "name": "Powerful Fist (Ex)",
        "name_en": "Powerful Fist (Ex)",
        "description_es": "A niveles 5, 9 y 13 acepta quemado adicional para aumentar la progresión de dados de daño de kinetic fist (d6 → d8 → d10 → d12).",
        "description_en": "At 5th, 9th and 13th levels accepts additional burn to increase kinetic fist damage dice progression (d6 → d8 → d10 → d12).",
        "level": 5
      }
    ]
  },
  "dark_elementalist": {
    "class": "kineticist",
    "name": "Dark Elementalist",
    "name_en": "Dark Elementalist",
    "name_es": "Elementalista Oscuro",
    "source": "Horror Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Kineticist%20Dark%20Elementalist",
    "description_es": "Cinético maligno que sacrifica su tampón interno y usa Inteligencia en lugar de Constitución, alimentando su poder con almas cosechadas de criaturas sintientes recién muertas.",
    "description_en": "An evil kineticist who sacrifices his internal buffer and uses Intelligence instead of Constitution, fueling his power with souls harvested from recently slain sentient creatures.",
    "features_removed": [
      "Internal Buffer",
      "Standard Save Progressions (Ref/Fort lowered)",
      "Standard Constitution-based DCs"
    ],
    "features_gained": [
      {
        "name": "Dark Studies",
        "name_en": "Dark Studies",
        "description_es": "Salvación de Voluntad alta (2 + 1/2 nivel); Reflejos y Fortaleza pasan a 1/3 nivel. Todos los Conocimientos como habilidades de clase. Usa Inteligencia en lugar de Constitución para daño, CD y efectos relacionados de aptitudes salvajes.",
        "description_en": "Will save becomes 2 + 1/2 level; Reflex and Fortitude become 1/3 level. All Knowledge skills as class skills. Uses Intelligence instead of Constitution for wild talent damage, DCs and related effects.",
        "level": 1
      },
      {
        "name": "Soul Power",
        "name_en": "Soul Power",
        "description_es": "No puede aceptar más de 3 puntos de quemado totales. Puede cosechar almas de criaturas sintientes (CR ≥ nivel) muertas en el último minuto, reduciendo en 1 su quemado actual. Usos diarios = mod. de Inteligencia. Las almas cosechadas no pueden resucitarse normalmente; a niveles 6/11/16 escalan los castigos.",
        "description_en": "Cannot accept more than 3 burn total. Can harvest souls from sentient creatures (CR ≥ character level) dead within the past minute, reducing current burn by 1. Daily uses = Int modifier. Harvested souls cannot be normally resurrected; at 6th/11th/16th increasing penalties apply.",
        "level": 1
      },
      {
        "name": "Modified Elemental Overflow",
        "name_en": "Modified Elemental Overflow",
        "description_es": "Recibe bonos de elemental overflow basados en almas cosechadas en el día en lugar de quemado actual. No gana bonos de tamaño ni resistencia a críticos/ataque furtivo.",
        "description_en": "Gains elemental overflow bonuses based on souls harvested that day instead of current burn. Does not gain size bonuses or critical/sneak attack resistance.",
        "level": 3
      }
    ],
    "class_skills_add": [
      "knowledge_arcana",
      "knowledge_dungeoneering",
      "knowledge_engineering",
      "knowledge_geography",
      "knowledge_history",
      "knowledge_local",
      "knowledge_nature",
      "knowledge_nobility",
      "knowledge_planes",
      "knowledge_religion"
    ]
  },
  "blood_kineticist": {
    "class": "kineticist",
    "name": "Blood Kineticist",
    "name_en": "Blood Kineticist",
    "name_es": "Cinético de Sangre",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Kineticist%20Blood%20Kineticist",
    "description_es": "Cinético de agua que manipula la sangre dentro de las criaturas, sacrificando infusiones y aptitudes utilitarias por habilidades hemomanticas como provocar sangrado, dolor y vampirismo.",
    "description_en": "A water kineticist who manipulates blood within creatures, trading infusions and utility talents for hemomantic abilities like inflicting bleed, pain and vampirism.",
    "features_removed": [
      "Infusions (1st, 5th, 9th, 11th)",
      "Utility Wild Talents (6th, 8th)",
      "Standard Expanded Element benefit",
      "Omnikinesis (20th)"
    ],
    "features_gained": [
      {
        "name": "Blood Focus / Wrack (Sp)",
        "name_en": "Blood Focus / Wrack (Sp)",
        "description_es": "Debe elegir agua como elemento principal; las infusiones solo funcionan en objetivos con sangre. Wrack manipula la sangre causando la mitad del daño del blast (sin tipo, ignora RD); cuesta 0 quemado.",
        "description_en": "Must choose water as primary element; infusions only work on targets with blood. Wrack manipulates blood dealing half blast damage (untyped, ignores DR); costs 0 burn.",
        "level": 1
      },
      {
        "name": "Bleeding Infusion",
        "name_en": "Bleeding Infusion",
        "description_es": "A nivel 5, infusión que causa 1 punto de daño por sangrado por dado del blast. Costo de quemado 2.",
        "description_en": "At 5th level, infusion causing 1 bleed damage per blast die. 2-burn cost.",
        "level": 5
      },
      {
        "name": "Blood Tell (Sp)",
        "name_en": "Blood Tell (Sp)",
        "description_es": "A nivel 6, aprende información a partir de muestras de sangre mediante blood biography; 0 quemado (1 quemado para acción estándar).",
        "description_en": "At 6th level, learns information from blood samples via blood biography; 0 burn (1 burn for standard action).",
        "level": 6
      },
      {
        "name": "Blood Blast / Blood Throw",
        "name_en": "Blood Blast / Blood Throw",
        "description_es": "A nivel 8, blast compuesto físico contundente por 2 quemado; reemplaza inicialmente el blast simple de frío. También gana foe throw para blasts de agua/sangre.",
        "description_en": "At 8th level, bludgeoning physical composite blast for 2 burn; initially replaces the cold simple blast. Also gains foe throw infusion for water/blood blasts.",
        "level": 8
      },
      {
        "name": "Gut-Wrenching Infusion",
        "name_en": "Gut-Wrenching Infusion",
        "description_es": "A nivel 9, infusión que causa la condición sickened si falla la salvación; costo 3 quemado.",
        "description_en": "At 9th level, infusion that sickens target on a failed save; 3-burn cost.",
        "level": 9
      },
      {
        "name": "Vampiric Infusion",
        "name_en": "Vampiric Infusion",
        "description_es": "A nivel 11, infusión que activa kinetic healer al impactar exitosamente; costo 3 quemado.",
        "description_en": "At 11th level, infusion that triggers kinetic healer on a successful hit; 3-burn cost.",
        "level": 11
      },
      {
        "name": "Blood Mastery (Su)",
        "name_en": "Blood Mastery (Su)",
        "description_es": "A nivel 20 deja de envejecer y se vuelve inmune a sangrado, veneno, enfermedad y a las condiciones sickened y nauseated.",
        "description_en": "At 20th level stops aging and becomes immune to bleed, poison, disease and the sickened and nauseated conditions.",
        "level": 20
      }
    ]
  },
  "elemental_annihilator": {
    "class": "kineticist",
    "name": "Elemental Annihilator",
    "name_en": "Elemental Annihilator",
    "name_es": "Aniquilador Elemental",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Kineticist%20Elemental%20Annihilator",
    "description_es": "Cinético guerrero puro que renuncia casi por completo a las aptitudes utilitarias y a las infusiones a cambio de devastadores ataques cuerpo a cuerpo o a distancia, dotes de combate y devastación masiva final.",
    "description_en": "A pure warrior kineticist who nearly entirely forgoes utility talents and infusions in exchange for devastating melee or ranged strikes, combat feats and massive endgame devastation.",
    "features_removed": [
      "1st-level infusion and basic utility talent",
      "Utility wild talents (2nd, 4th, 6th, 8th, 10th, 12th, 14th, 16th, 18th, 20th)",
      "Infusions (3rd, 5th, 9th)",
      "Omnikinesis (20th)"
    ],
    "features_gained": [
      {
        "name": "Devastating Infusion",
        "name_en": "Devastating Infusion",
        "description_es": "A nivel 1, ataque cuerpo a cuerpo o a distancia que causa 1d8 + modificador de Constitución de daño; compatible con Vital Strike.",
        "description_en": "At 1st level, melee or ranged attack dealing 1d8 + Constitution modifier damage; compatible with Vital Strike.",
        "level": 1
      },
      {
        "name": "Dampened Versatility",
        "name_en": "Dampened Versatility",
        "description_es": "No puede adquirir aptitudes salvajes utilitarias en ningún momento.",
        "description_en": "Cannot acquire utility wild talents at any point.",
        "level": 1
      },
      {
        "name": "Bonus Combat Feats",
        "name_en": "Bonus Combat Feats",
        "description_es": "Gana dotes de combate adicionales a niveles 2, 8, 10, 14 y 18 de una lista que incluye Power Attack, Weapon Specialization y Two-Weapon Fighting.",
        "description_en": "Gains bonus combat feats at levels 2, 8, 10, 14 and 18 from a list including Power Attack, Weapon Specialization and Two-Weapon Fighting.",
        "level": 1
      },
      {
        "name": "Increased Range",
        "name_en": "Increased Range",
        "description_es": "Obtiene automáticamente las infusiones extended range (nivel 3) y extreme range (nivel 9).",
        "description_en": "Automatically gains the extended range (3rd) and extreme range (9th) infusions.",
        "level": 3
      },
      {
        "name": "Ever-Present Threat",
        "name_en": "Ever-Present Threat",
        "description_es": "A nivel 4 amenaza a todos los enemigos dentro de su alcance natural; puede formar la infusión devastadora cuerpo a cuerpo como ataque de oportunidad.",
        "description_en": "At 4th level threatens all enemies within natural reach; can form melee devastating infusion as an attack of opportunity.",
        "level": 4
      },
      {
        "name": "Blast Training",
        "name_en": "Blast Training",
        "description_es": "A nivel 5, +1 al ataque y daño con devastating infusion, aumentando cada 4 niveles.",
        "description_en": "At 5th level, +1 on attack and damage rolls with devastating infusion, increasing every 4 levels.",
        "level": 5
      },
      {
        "name": "Flurry of Devastation",
        "name_en": "Flurry of Devastation",
        "description_es": "A nivel 6 puede realizar acciones de ataque completo con múltiples infusiones devastadoras, hasta 120 pies de distancia.",
        "description_en": "At 6th level can perform full-attack actions with multiple devastating infusions, up to 120 feet away.",
        "level": 6
      },
      {
        "name": "Omnicide",
        "name_en": "Omnicide",
        "description_es": "A nivel 20 desencadena un blast compuesto físico único que causa 50d6+50 de daño total a través de cinco tipos de daño.",
        "description_en": "At 20th level unleashes a unique physical composite blast dealing 50d6+50 total damage across five damage types.",
        "level": 20
      }
    ]
  },
  "kensai": {
    "class": "magus",
    "name": "Kensai",
    "name_en": "Kensai",
    "name_es": "Kensai",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/kensai/",
    "description_es": "Maestro espadachin que renuncia a la armadura para canalizar su pool arcano en un solo arma elegida, ganando defensa basada en Destreza y golpes precisos sobrenaturales.",
    "description_en": "A weapon-master who eschews armor to channel his arcane pool through a single chosen weapon, gaining Dexterity-based defense and supernaturally precise strikes.",
    "features_removed": [
      "Spell Recall (4)",
      "Knowledge Pool (7)",
      "Medium Armor (7)",
      "Magus Arcana (9)",
      "Improved Spell Recall (11)",
      "Heavy Armor (13)",
      "Greater Spell Access (19)",
      "True Magus (20)"
    ],
    "features_gained": [
      {
        "name": "Canny Defense (Ex)",
        "name_en": "Canny Defense (Ex)",
        "description_es": "Anade el bono de Inteligencia a la CA al empunar el arma elegida sin armadura.",
        "description_en": "Adds Intelligence bonus to AC when wielding the chosen weapon without armor."
      },
      {
        "name": "Weapon Focus (Ex)",
        "name_en": "Weapon Focus (Ex)",
        "description_es": "Gana Soltura con un Arma con su arma elegida como dote extra a nivel 1.",
        "description_en": "Gains Weapon Focus with chosen weapon as a bonus feat at 1st level."
      },
      {
        "name": "Perfect Strike (Su)",
        "name_en": "Perfect Strike (Su)",
        "description_es": "Gasta puntos de pool arcano para maximizar el dano del arma elegida.",
        "description_en": "Spends arcane pool points to maximize chosen weapon's damage.",
        "level": 4
      },
      {
        "name": "Iaijutsu (Ex)",
        "name_en": "Iaijutsu (Ex)",
        "description_es": "Anade Inteligencia a la iniciativa y puede hacer ataques de oportunidad estando desprevenido.",
        "description_en": "Adds Intelligence to initiative and may make attacks of opportunity while flat-footed.",
        "level": 7
      },
      {
        "name": "Critical Perfection (Ex)",
        "name_en": "Critical Perfection (Ex)",
        "description_es": "Anade el modificador de Inteligencia a las tiradas de confirmacion de critico con el arma elegida.",
        "description_en": "Adds Intelligence modifier to critical confirmation rolls with chosen weapon.",
        "level": 9
      },
      {
        "name": "Iaijutsu Master (Ex)",
        "name_en": "Iaijutsu Master (Ex)",
        "description_es": "Sus tiradas de iniciativa siempre son un 20 natural y nunca esta sorprendido.",
        "description_en": "Initiative rolls are always natural 20 and is never surprised.",
        "level": 11
      }
    ]
  },
  "bladebound": {
    "class": "magus",
    "name": "Bladebound",
    "name_en": "Bladebound",
    "name_es": "Vinculado a la Hoja",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/bladebound/",
    "description_es": "Magus vinculado a una hoja inteligente y sintiente llamada Hoja Negra, que crece en poder pero exige fuerza de voluntad para dominarla.",
    "description_en": "A magus bonded to a sentient, intelligent weapon called a Black Blade, which grows in power but demands willpower to master.",
    "features_removed": [
      "Familiar (1)",
      "Magus Arcana (3)"
    ],
    "features_gained": [
      {
        "name": "Black Blade (Ex)",
        "name_en": "Black Blade (Ex)",
        "description_es": "Recibe una hoja inteligente que actua como vinculo arcano y gana poder con los niveles.",
        "description_en": "Gains a sentient blade that serves as arcane bond and grows in power with levels.",
        "level": 1
      },
      {
        "name": "Black Blade Strike (Sp)",
        "name_en": "Black Blade Strike (Sp)",
        "description_es": "Gasta puntos de pool arcano para anadir dano extra al ataque de la hoja.",
        "description_en": "Spends arcane pool points to add extra damage to the blade's strike.",
        "level": 1
      },
      {
        "name": "Energy Attunement (Su)",
        "name_en": "Energy Attunement (Su)",
        "description_es": "A nivel 5, la Hoja Negra puede convertir el dano del arma a un tipo de energia.",
        "description_en": "At 5th level, the Black Blade can convert weapon damage to an energy type.",
        "level": 5
      },
      {
        "name": "Teleport Blade (Sp)",
        "name_en": "Teleport Blade (Sp)",
        "description_es": "A nivel 9 puede teleportar su Hoja Negra a su mano desde cualquier distancia.",
        "description_en": "At 9th level can teleport his Black Blade to hand from any distance.",
        "level": 9
      },
      {
        "name": "Life Drinker (Su)",
        "name_en": "Life Drinker (Su)",
        "description_es": "A nivel 19, la Hoja Negra otorga niveles negativos al impactar.",
        "description_en": "At 19th level, the Black Blade bestows negative levels on hit.",
        "level": 19
      }
    ]
  },
  "myrmidarch": {
    "class": "magus",
    "name": "Myrmidarch",
    "name_en": "Myrmidarch",
    "name_es": "Mirmidarca",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/myrmidarch/",
    "description_es": "Magus marcial enfocado en armas a distancia y entrenamiento de combatiente, capaz de canalizar conjuros a traves de armas a distancia a costa de menos magia.",
    "description_en": "A martial-focused magus emphasizing ranged weapons and fighter training, able to channel spells through ranged weapons at the cost of fewer spells.",
    "features_removed": [
      "Spell Recall (4)",
      "Magus Arcana (6, 12, 18)",
      "Knowledge Pool (7)",
      "Improved Spell Recall (11)",
      "Improved Spell Combat (14)",
      "Greater Spell Combat (19)",
      "True Magus (20)"
    ],
    "features_gained": [
      {
        "name": "Diminished Spellcasting",
        "name_en": "Diminished Spellcasting",
        "description_es": "Lanza un conjuro menos por dia de cada nivel que un magus normal.",
        "description_en": "Casts one fewer spell per day of each level than a normal magus.",
        "level": 1
      },
      {
        "name": "Ranged Spellstrike (Su)",
        "name_en": "Ranged Spellstrike (Su)",
        "description_es": "A nivel 4 puede entregar conjuros de toque a traves de armas a distancia.",
        "description_en": "At 4th level can deliver touch spells through ranged weapons.",
        "level": 4
      },
      {
        "name": "Weapon Training (Ex)",
        "name_en": "Weapon Training (Ex)",
        "description_es": "A nivel 6 gana entrenamiento de combatiente con un grupo de armas, ampliandose cada 6 niveles.",
        "description_en": "At 6th level gains fighter weapon training with a weapon group, expanding every 6 levels.",
        "level": 6
      },
      {
        "name": "Fighter Training (Ex)",
        "name_en": "Fighter Training (Ex)",
        "description_es": "A nivel 7 sus niveles de magus cuentan como niveles de combatiente para requisitos de dotes.",
        "description_en": "At 7th level his magus levels count as fighter levels for feat prerequisites.",
        "level": 7
      },
      {
        "name": "Armor Training (Ex)",
        "name_en": "Armor Training (Ex)",
        "description_es": "A nivel 8 reduce las penalizaciones por armadura como un combatiente.",
        "description_en": "At 8th level reduces armor penalties like a fighter.",
        "level": 8
      },
      {
        "name": "Armor Mastery (Ex)",
        "name_en": "Armor Mastery (Ex)",
        "description_es": "A nivel 20 obtiene RD 5/- al llevar armadura.",
        "description_en": "At 20th level gains DR 5/- while wearing armor.",
        "level": 20
      }
    ]
  },
  "staff_magus": {
    "class": "magus",
    "name": "Staff Magus",
    "name_en": "Staff Magus",
    "name_es": "Magus del Baston",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/staff-magus/",
    "description_es": "Magus que se especializa en el baston como arma y foco magico, defendiendose con el y canalizando bastones magicos.",
    "description_en": "A magus specializing in the quarterstaff as both weapon and magical focus, defending with it and channeling magic staves.",
    "features_removed": [
      "Standard Weapon Proficiencies (1)",
      "Medium Armor (7)",
      "Heavy Armor (7)",
      "Fighter Training (10)"
    ],
    "features_gained": [
      {
        "name": "Quarterstaff Master (Ex)",
        "name_en": "Quarterstaff Master (Ex)",
        "description_es": "Recibe Soltura con el Arma (baston) y puede lanzar conjuros con armadura ligera sin fallo magico.",
        "description_en": "Gains Weapon Focus (quarterstaff) and can cast spells with light armor without arcane spell failure.",
        "level": 1
      },
      {
        "name": "Quarterstaff Defense (Ex)",
        "name_en": "Quarterstaff Defense (Ex)",
        "description_es": "A nivel 7 obtiene un bono de escudo a la CA igual al bono de potenciacion del baston.",
        "description_en": "At 7th level gains a shield bonus to AC equal to the quarterstaff's enhancement bonus.",
        "level": 7
      },
      {
        "name": "Staff Weapon (Su)",
        "name_en": "Staff Weapon (Su)",
        "description_es": "A nivel 10 puede empunar bastones magicos como armas y restaurar sus cargas con puntos del pool arcano.",
        "description_en": "At 10th level can wield magical staves as weapons and restore their charges with arcane pool points.",
        "level": 10
      }
    ]
  },
  "skirnir": {
    "class": "magus",
    "name": "Skirnir",
    "name_en": "Skirnir",
    "name_es": "Skirnir",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo-magus-archetypes/skirnir/",
    "description_es": "Magus chelaxiano que vincula su pool arcano a un escudo, lanzando conjuros y combatiendo con un escudo magico animado.",
    "description_en": "A Chelaxian magus who bonds his arcane pool to a shield, casting spells and fighting with an animated magical shield.",
    "features_removed": [
      "Spell Combat (1)",
      "Spell Recall (4)",
      "Knowledge Pool (7)",
      "Improved Spell Combat (8)",
      "Greater Spell Combat (14)",
      "Greater Spell Access (19)",
      "Counterstrike (16)"
    ],
    "features_gained": [
      {
        "name": "Diminished Spellcasting",
        "name_en": "Diminished Spellcasting",
        "description_es": "Lanza un conjuro menos por dia de cada nivel que un magus normal.",
        "description_en": "Casts one fewer spell per day of each level than a normal magus.",
        "level": 1
      },
      {
        "name": "Sorcerous Shield (Ex)",
        "name_en": "Sorcerous Shield (Ex)",
        "description_es": "Competente con todos los escudos y no sufre fallo magico arcano por usarlos.",
        "description_en": "Proficient with all shields and suffers no arcane spell failure for using them.",
        "level": 1
      },
      {
        "name": "Arcane Bond (Shield)",
        "name_en": "Arcane Bond (Shield)",
        "description_es": "Se vincula a un escudo en lugar de un familiar y puede aplicarle propiedades magicas.",
        "description_en": "Bonds with a shield instead of a familiar and can apply magical properties to it.",
        "level": 1
      },
      {
        "name": "Spellshield (Su)",
        "name_en": "Spellshield (Su)",
        "description_es": "A nivel 7 puede almacenar conjuros en su escudo, liberandolos al golpear con el.",
        "description_en": "At 7th level can store spells in his shield, releasing them when bashing with it.",
        "level": 7
      },
      {
        "name": "Greater Spellshield (Su)",
        "name_en": "Greater Spellshield (Su)",
        "description_es": "A nivel 16 puede activar conjuros almacenados como accion inmediata al ser impactado.",
        "description_en": "At 16th level can trigger stored spells as an immediate action when struck.",
        "level": 16
      }
    ]
  },
  "kami_medium": {
    "class": "medium",
    "name": "Kami Medium",
    "name_en": "Kami Medium",
    "name_es": "Medium Kami",
    "source": "Pathfinder Campaign Setting: Occult Realms",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Medium%20Kami%20Medium",
    "description_es": "Medium tianse que canaliza espiritus kami de la naturaleza en lugar de leyendas, atado por tabues naturales y guiado por familiares de origami.",
    "description_en": "A Tian medium who channels nature kami spirits instead of legends, bound by natural taboos and guided by origami familiars.",
    "features_removed": [
      "Haunt Channeler (3)",
      "Location Channel (5)",
      "Connection Channel (7)",
      "Archmage legend access",
      "Ask the Spirits (14)",
      "Astral Journey (20)"
    ],
    "features_gained": [
      {
        "name": "Kami Channeler (Su)",
        "name_en": "Kami Channeler (Su)",
        "description_es": "Canaliza espiritus de la naturaleza atados a localizaciones especificas en lugar de leyendas.",
        "description_en": "Channels nature spirits bound to specific locations instead of legendary spirits."
      },
      {
        "name": "Natural Taboo (Ex)",
        "name_en": "Natural Taboo (Ex)",
        "description_es": "Recibe el tabu del hierofante: debe reverenciar la naturaleza y evitar armaduras de metal.",
        "description_en": "Gains a hierophant taboo requiring reverence of nature and avoiding metal armor."
      },
      {
        "name": "Ofuda (Sp)",
        "name_en": "Ofuda (Sp)",
        "description_es": "Usa pergaminos de oraciones cargados psiquicamente como componentes para conjuros.",
        "description_en": "Uses psychically charged prayer scrolls as spell components.",
        "level": 3
      },
      {
        "name": "Shikigami (Su)",
        "name_en": "Shikigami (Su)",
        "description_es": "A nivel 3 crea un familiar de origami animal que alberga un kami menor.",
        "description_en": "At 3rd level creates an origami animal familiar housing a minor kami.",
        "level": 5
      },
      {
        "name": "Ask the Kami (Sp)",
        "name_en": "Ask the Kami (Sp)",
        "description_es": "A nivel 13 puede usar Comunion con la naturaleza para consultar a los kami locales.",
        "description_en": "At 13th level can use commune with nature to consult local kami.",
        "level": 14
      }
    ],
    "sub_options": {
      "spirits": "Solo puede canalizar kamis (espíritus de la naturaleza japoneses: kamis de árbol, río, piedra, etc.). No puede canalizar los 6 espíritus estándar. Los kamis ofrecen poderes distintos centrados en la protección de lugares naturales. / Can only channel kamis (Japanese nature spirits: tree, river, stone kami, etc.). Cannot channel the 6 standard spirits. Kamis offer different powers focused on protecting natural places."
    }
  },
  "relic_channeler": {
    "class": "medium",
    "name": "Relic Channeler",
    "name_en": "Relic Channeler",
    "name_es": "Canalizador de Reliquias",
    "source": "Occult Adventures",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Medium%20Relic%20Channeler",
    "description_es": "Medium que vincula sus espiritus a reliquias fisicas tangibles, ganando bonos permanentes a costa de la flexibilidad del medium estandar.",
    "description_en": "A medium who binds his spirits to tangible physical relics, gaining permanent bonuses at the cost of standard medium flexibility.",
    "features_removed": [
      "Spirit (modified)",
      "Haunt Channeler (3)",
      "Location Channel (5)",
      "Connection Channel (7)"
    ],
    "features_gained": [
      {
        "name": "Relics (Su)",
        "name_en": "Relics (Su)",
        "description_es": "Comienza con una reliquia por cada una de las seis leyendas espirituales que canaliza.",
        "description_en": "Begins with one relic for each of the six spirit legends he channels.",
        "level": 1
      },
      {
        "name": "Powerful Bond (Su)",
        "name_en": "Powerful Bond (Su)",
        "description_es": "Otorga selecciones mejoradas de dotes y habilidades a traves de los poderes espirituales.",
        "description_en": "Grants enhanced feat and skill selections across spirit powers.",
        "level": 1
      },
      {
        "name": "Object Reading (Su)",
        "name_en": "Object Reading (Su)",
        "description_es": "A nivel 3 obtiene la habilidad lectura de objetos del occultist usando su nivel de medium.",
        "description_en": "At 3rd level gains the occultist's object reading using medium level.",
        "level": 3
      },
      {
        "name": "Apport Relic (Sp)",
        "name_en": "Apport Relic (Sp)",
        "description_es": "A nivel 5 puede invocar sus reliquias una vez al dia desde cualquier distancia cercana.",
        "description_en": "At 5th level can summon his relics once daily from short distances.",
        "level": 5
      },
      {
        "name": "Connection Specialty (Su)",
        "name_en": "Connection Specialty (Su)",
        "description_es": "A nivel 7 obtiene canalizacion de conexion con requisitos de familiaridad.",
        "description_en": "At 7th level gains connection channel with familiarity requirements.",
        "level": 7
      }
    ],
    "sub_options": {
      "spirits": "Canaliza espíritus a través de reliquias físicas (objetos sagrados). Los objetos actúan como anclas para el espíritu; sin el objeto, no puede canalizar ese espíritu específico. / Channels spirits through physical relics (sacred objects). Objects act as anchors for the spirit; without the object, cannot channel that specific spirit."
    }
  },
  "reanimated_medium": {
    "class": "medium",
    "name": "Reanimated Medium",
    "name_en": "Reanimated Medium",
    "name_es": "Medium Reanimado",
    "source": "Occult Adventures",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Medium%20Reanimated%20Medium",
    "description_es": "Alma errante que ha regresado para poseer su propio cuerpo revivido, sin tabues pero limitada por mecanicas de influencia invertidas.",
    "description_en": "A departed soul who has returned to possess its own revived body, free of taboos but limited by inverted influence mechanics.",
    "features_removed": [
      "Taboo",
      "Haunt Channeler (3)",
      "Location Channel (5)",
      "Connection Channel (7)",
      "Spacious Soul (7)",
      "Astral Beacon (20)"
    ],
    "features_gained": [
      {
        "name": "Channel Self (Su)",
        "name_en": "Channel Self (Su)",
        "description_es": "Posee su propio cuerpo revivido, ganando hasta 6 puntos de influencia diarios con mecanicas invertidas.",
        "description_en": "Possesses his own revived body, gaining up to 6 influence points daily with inverted mechanics.",
        "level": 1
      },
      {
        "name": "Ease Passage (Su)",
        "name_en": "Ease Passage (Su)",
        "description_es": "Solo recibe 1 nivel negativo en lugar de 2 al ser objetivo de Resucitar a los muertos.",
        "description_en": "Takes only 1 negative level instead of 2 from raise dead.",
        "level": 1
      },
      {
        "name": "Lingering Spirit (Su)",
        "name_en": "Lingering Spirit (Su)",
        "description_es": "Su espiritu persiste 1 asalto tras la muerte si gasta 1 influencia, permitiendo ser curado.",
        "description_en": "His spirit persists 1 round post-death if 1 influence is spent, allowing healing.",
        "level": 3
      },
      {
        "name": "Spirit Warding (Su)",
        "name_en": "Spirit Warding (Su)",
        "description_es": "+4 a salvaciones contra posesion y efectos de muerte; inmunidad a nivel 18.",
        "description_en": "+4 bonus on saves against possession and death effects; immunity at 18th level.",
        "level": 5
      },
      {
        "name": "Living Legend (Su)",
        "name_en": "Living Legend (Su)",
        "description_es": "Sus aliados pueden hacer seances para canalizarlo y acceder a sus habilidades.",
        "description_en": "Allies can perform seances to channel the medium and access his abilities.",
        "level": 7
      }
    ],
    "sub_options": {
      "spirits": "Canaliza únicamente espíritus no-muertos. Tiene un espíritu no-muerto vinculado permanentemente que le otorga poderes de no-muerto. Puede sufrir maldiciones de espíritu más severas que el médium normal. / Channels only undead spirits. Has a permanently bound undead spirit granting undead powers. Can suffer more severe spirit curses than a normal medium."
    }
  },
  "spirit_eater": {
    "class": "medium",
    "name": "Spirit Eater",
    "name_en": "Spirit Eater",
    "name_es": "Devora-Espiritus",
    "source": "Heroes of Golarion",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Medium%20Spirit%20Eater",
    "description_es": "Medium que devora los espiritus de incorporeos derrotados para ganar bonos temporales y puntos de golpe.",
    "description_en": "A medium who consumes the spirits of defeated incorporeal creatures to gain temporary bonuses and hit points.",
    "features_removed": [
      "Haunt Channeler (3)",
      "Location Channel (5)",
      "Connection Channel (7)"
    ],
    "features_gained": [
      {
        "name": "Ectoplasmic Strikes (Su)",
        "name_en": "Ectoplasmic Strikes (Su)",
        "description_es": "A nivel 3, sus ataques se tratan como si tuvieran la propiedad toque fantasmal.",
        "description_en": "At 3rd level, his attacks are treated as having the ghost touch property.",
        "level": 1
      },
      {
        "name": "Consume Spirit (Su)",
        "name_en": "Consume Spirit (Su)",
        "description_es": "A nivel 7 absorbe criaturas incorporeas derrotadas para bonos a ataques, salvaciones o habilidades, mas PG temporales.",
        "description_en": "At 7th level absorbs defeated incorporeal creatures for bonuses to attack, saves or skills, plus temporary HP.",
        "level": 3
      }
    ],
    "sub_options": {
      "spirits": "Puede consumir espíritus en vez de canalizarlos para obtener más poder a corto plazo. Los espíritus consumidos no pueden ser invocados de nuevo durante 24 horas. Gana temporalmente acceso a los poderes del espíritu consumido. / Can consume spirits instead of channeling them for more power short-term. Consumed spirits cannot be summoned again for 24 hours. Temporarily gains access to the consumed spirit's powers."
    }
  },
  "voice_of_the_void": {
    "class": "medium",
    "name": "Voice of the Void",
    "name_en": "Voice of the Void",
    "name_es": "Voz del Vacio",
    "source": "Villain Codex",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Medium%20Voice%20of%20the%20Void",
    "description_es": "Medium que canaliza entidades alienigenas del Lejano Universo, ganando poder superior pero sufriendo penalizaciones a Sabiduria y confusion.",
    "description_en": "A medium who channels alien entities from the Dark Tapestry, gaining superior power but suffering Wisdom penalties and confusion.",
    "features_removed": [
      "Spirit (modified)",
      "Spirit Surge (modified)",
      "Taboo (altered)",
      "Haunt Channeler (3)"
    ],
    "features_gained": [
      {
        "name": "Emissary (Su)",
        "name_en": "Emissary (Su)",
        "description_es": "Reemplaza el espiritu estandar con entidades alienigenas que ofrecen mayor poder pero penalizan salvaciones de Voluntad y Sabiduria.",
        "description_en": "Replaces standard spirit with alien entities offering greater power but penalties to Will saves and Wisdom.",
        "level": 1
      },
      {
        "name": "Surge of the Void (Su)",
        "name_en": "Surge of the Void (Su)",
        "description_es": "Permite oleadas de espiritu adicionales sin influencia aceptando 1 asalto de confusion.",
        "description_en": "Allows additional spirit surges without influence by accepting 1 round of confusion.",
        "level": 1
      },
      {
        "name": "Blasphemy (Ex)",
        "name_en": "Blasphemy (Ex)",
        "description_es": "Tabues alienigenas modificados: -1 a chequeos de Carisma pero aumenta el dado de oleada de espiritu de 1d6 a 1d8.",
        "description_en": "Modified alien taboos imposing -1 Cha check penalty but increasing spirit surge die from 1d6 to 1d8.",
        "level": 1
      },
      {
        "name": "Void Channeler (Su)",
        "name_en": "Void Channeler (Su)",
        "description_es": "A nivel 3 inflige dano del vacio en area de 30 pies; criaturas mas debiles tambien quedan confusas.",
        "description_en": "At 3rd level deals void damage in a 30-foot area; weaker creatures are also confused.",
        "level": 3
      }
    ],
    "sub_options": {
      "spirits": "Canaliza únicamente el espíritu del Vacío (de los Mitos de Cthulhu). No puede canalizar los 6 espíritus estándar. Poderes del Vacío relacionados con locura, lo desconocido y manipulación mental cósmica. / Channels only the Void spirit (from Cthulhu Mythos). Cannot channel the 6 standard spirits. Void powers relate to madness, the unknown, and cosmic mental manipulation."
    }
  },
  "vexing_daredevil": {
    "class": "mesmerist",
    "name": "Vexing Daredevil",
    "name_en": "Vexing Daredevil",
    "name_es": "Temerario Provocador",
    "source": "Occult Adventures",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Mesmerist%20Vexing%20Daredevil",
    "description_es": "Mesmerista acrobatico que combina fintas hipnoticas con maniobras de combate desconcertantes para confundir y dominar a sus oponentes.",
    "description_en": "An acrobatic mesmerist who combines hypnotic feinting with bewildering combat maneuvers to confound and dominate opponents.",
    "features_removed": [
      "Mesmerist Trick (1)",
      "Touch Treatment",
      "Bold Stare"
    ],
    "features_gained": [
      {
        "name": "Acrobatics & Martial Proficiency",
        "name_en": "Acrobatics & Martial Proficiency",
        "description_es": "Anade Acrobacias como habilidad de clase y obtiene competencia con armas marciales.",
        "description_en": "Adds Acrobatics as class skill and gains martial weapon proficiency.",
        "level": 1
      },
      {
        "name": "Dazzling Feint (Ex)",
        "name_en": "Dazzling Feint (Ex)",
        "description_es": "A nivel 3, finta con multiples opciones de combate que se expanden cada 4 niveles.",
        "description_en": "At 3rd level, feints with multiple combat options that expand every 4 levels.",
        "level": 1
      },
      {
        "name": "Bonus Feats",
        "name_en": "Bonus Feats",
        "description_es": "Recibe Finta Mejorada, Finta Mayor, Finta Mesmerica Mayor como dotes extra.",
        "description_en": "Gains Improved Feint, Greater Feint, and Greater Mesmerizing Feint as bonus feats.",
        "level": 3
      },
      {
        "name": "Shimmering Body (Sp)",
        "name_en": "Shimmering Body (Sp)",
        "description_es": "A nivel 11 puede otorgarse ocultacion como habilidad similar a conjuro.",
        "description_en": "At 11th level can grant himself concealment as a spell-like ability.",
        "level": 5
      }
    ],
    "class_skills_add": [
      "acrobatics"
    ]
  },
  "projectionist": {
    "class": "mesmerist",
    "name": "Projectionist",
    "name_en": "Projectionist",
    "name_es": "Proyeccionista",
    "source": "Psychic Anthology",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Mesmerist%20Projectionist",
    "description_es": "Mesmerista que proyecta su consciencia en objetos a distancia, espiando y atacando desde anfitriones inanimados.",
    "description_en": "A mesmerist who projects his consciousness into distant objects, spying and attacking from inanimate hosts.",
    "features_removed": [
      "Mesmerist Tricks (4, 8)",
      "Mental Potency (5)"
    ],
    "features_gained": [
      {
        "name": "Mandatory Possession Spells",
        "name_en": "Mandatory Possession Spells",
        "description_es": "Aprende automaticamente entrar en imagen, posesion menor de objeto, posesion al cabalgar y posesion de objeto.",
        "description_en": "Automatically learns enter image, lesser object possession, riding possession, and object possession.",
        "level": 1
      },
      {
        "name": "Implant Consciousness (Su)",
        "name_en": "Implant Consciousness (Su)",
        "description_es": "Crea un vinculo psiquico con un objeto con su semejanza para proyectar su consciencia a cualquier distancia.",
        "description_en": "Creates a psychic link with an object bearing his likeness to project consciousness any distance.",
        "level": 4
      },
      {
        "name": "Hidden Presence (Ex)",
        "name_en": "Hidden Presence (Ex)",
        "description_es": "Recibe la dote Presencia Oculta sin requisitos cuando posee objetos o criaturas.",
        "description_en": "Gains Hidden Presence feat without prerequisites when possessing objects or creatures.",
        "level": 5
      }
    ]
  },
  "eyebiter": {
    "class": "mesmerist",
    "name": "Eyebiter",
    "name_en": "Eyebiter",
    "name_es": "Mordedor de Ojos",
    "source": "Ultimate Intrigue",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Mesmerist%20Eyebiter",
    "description_es": "Mesmerista enfocado en la mirada que arranca uno de sus ojos como familiar volador, lanzando ataques oculares cegadores.",
    "description_en": "A gaze-focused mesmerist who plucks out an eye as a flying familiar, casting blinding ocular attacks.",
    "features_removed": [
      "Consummate Liar",
      "Mesmerist Trick (1)",
      "Touch Treatment"
    ],
    "features_gained": [
      {
        "name": "Eyeball Familiar (Ex)",
        "name_en": "Eyeball Familiar (Ex)",
        "description_es": "Un ojo sintiente que se separa y vuela independientemente con maniobrabilidad perfecta.",
        "description_en": "A sentient eye that detaches and flies independently with perfect maneuverability."
      },
      {
        "name": "Ocular Occlusion (Su)",
        "name_en": "Ocular Occlusion (Su)",
        "description_es": "Ataque de toque o a distancia con cuatro efectos progresivos: vision nublada, ceguera, horror sin ojos y enfermedad magica.",
        "description_en": "Touch or ranged attack with four progressive effects: clouded vision, blindness, eyeless horror, and spellblight.",
        "level": 2
      },
      {
        "name": "Staring Eye (Su)",
        "name_en": "Staring Eye (Su)",
        "description_es": "Puede ver a traves del ojo familiar o usar ataques de mirada gastando trucos mesmericos.",
        "description_en": "Can see through eyeball familiar or use gaze attacks by spending mesmerist tricks.",
        "level": 3
      },
      {
        "name": "Omnivisual (Ex)",
        "name_en": "Omnivisual (Ex)",
        "description_es": "A nivel 11 obtiene vision en todas direcciones y no puede ser flanqueado mientras el ojo este cerca.",
        "description_en": "At 11th level gains all-around vision and cannot be flanked while the eyeball is nearby.",
        "level": 11
      }
    ]
  },
  "enigma": {
    "class": "mesmerist",
    "name": "Enigma",
    "name_en": "Enigma",
    "name_es": "Enigma",
    "source": "Ultimate Intrigue",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Mesmerist%20Enigma",
    "description_es": "Mesmerista sigiloso e indetectable que se desvanece psiquicamente y traspasa aflicciones mediante ataques furtivos.",
    "description_en": "A stealthy, undetectable mesmerist who psychically vanishes and transfers afflictions through sneak attacks.",
    "features_removed": [
      "Hypnotic Stare (modified)",
      "Consummate Liar",
      "Painful Stare",
      "Touch Treatment",
      "Manifold Tricks",
      "Glib Lie",
      "Rule Minds"
    ],
    "features_gained": [
      {
        "name": "Solipsism (Su)",
        "name_en": "Solipsism (Su)",
        "description_es": "Efecto de invisibilidad/ocultacion psiquica integrado con la mirada hipnotica.",
        "description_en": "Psychic invisibility/concealment integrated with hypnotic stare."
      },
      {
        "name": "Veiled Steps (Ex)",
        "name_en": "Veiled Steps (Ex)",
        "description_es": "Bono a Sigilo igual a 1/4 del nivel de mesmerista (minimo +1).",
        "description_en": "Stealth bonus equal to 1/4 mesmerist level (minimum +1).",
        "level": 2
      },
      {
        "name": "Enigmatic Stare (Su)",
        "name_en": "Enigmatic Stare (Su)",
        "description_es": "Penalizacion -4 a Avistar para detectarlo (-6 a nivel 8).",
        "description_en": "-4 Perception penalty to notice him (-6 at 8th level)."
      },
      {
        "name": "Sneak Attack",
        "name_en": "Sneak Attack",
        "description_es": "Dano de ataque furtivo estilo picaro: +1d6 a nivel 5, +1d6 cada 4 niveles.",
        "description_en": "Rogue-style sneak attack: +1d6 at 5th level, +1d6 every 4 levels.",
        "level": 3
      },
      {
        "name": "Transfer Affliction (Su)",
        "name_en": "Transfer Affliction (Su)",
        "description_es": "Transfiere condiciones daninas a una criatura tocada con tirada de Voluntad.",
        "description_en": "Transfers harmful conditions to a touched creature via Will save.",
        "level": 5
      }
    ]
  },
  "dreamstalker": {
    "class": "mesmerist",
    "name": "Dreamstalker",
    "name_en": "Dreamstalker",
    "name_es": "Acechador de Suenos",
    "source": "Horror Adventures",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Mesmerist%20Dreamstalker",
    "description_es": "Mesmerista que caza dentro de los suenos, mezclando trucos hipnoticos con embrujos de bruja relacionados al sueno y la pesadilla.",
    "description_en": "A mesmerist who hunts within dreams, mixing hypnotic tricks with witch hexes related to sleep and nightmare.",
    "features_removed": [
      "Painful Stare (altered)",
      "Towering Ego",
      "Mesmerist Trick (1)",
      "Manifold Tricks",
      "Glib Lie"
    ],
    "features_gained": [
      {
        "name": "Dreams of Pain (Su)",
        "name_en": "Dreams of Pain (Su)",
        "description_es": "Su mirada dolorosa inflige dano no letal en lugar de letal.",
        "description_en": "His painful stare deals nonlethal damage instead of lethal.",
        "level": 1
      },
      {
        "name": "Somnomancer (Su)",
        "name_en": "Somnomancer (Su)",
        "description_es": "Acceso a embrujos de bruja (sopor, pesadilla, vision, sopor eterno) y conjuros de sueno.",
        "description_en": "Access to witch hexes (slumber, nightmare, vision, eternal slumber) and sleep spells.",
        "level": 1
      },
      {
        "name": "Sleepless (Ex)",
        "name_en": "Sleepless (Ex)",
        "description_es": "Inmune a efectos de sueno y bono basado en Carisma a salvaciones contra fatiga/agotamiento.",
        "description_en": "Immune to sleep effects and Cha-based bonus to saves vs fatigue/exhaustion.",
        "level": 3
      },
      {
        "name": "Dreamwalker (Ex)",
        "name_en": "Dreamwalker (Ex)",
        "description_es": "Trata los paisajes oniricos como terreno favorecido y a las criaturas de sueno como enemigos predilectos.",
        "description_en": "Treats dreamscapes as favored terrain and dream creatures as favored enemies.",
        "level": 5
      },
      {
        "name": "Touch of Night (Su)",
        "name_en": "Touch of Night (Su)",
        "description_es": "Curacion modificada que elimina condiciones de sueno/fatiga en lugar de emociones.",
        "description_en": "Modified healing removing sleep/fatigue conditions instead of emotions.",
        "level": 12
      }
    ],
    "sub_options": {
      "hexes": "Puede seleccionar hexes de bruja del tema onírico (sueño, profecía, ilusión) como trucos de hipnotizador. Los hexes disponibles incluyen: sueño, visión, pesadilla, profecía. / Can select dream-themed witch hexes (sleep, prophecy, illusion) as mesmerist tricks. Available hexes include: slumber, vision, nightmare, prophecy."
    }
  },
  "drunken_master": {
    "class": "monk",
    "name": "Drunken Master",
    "name_en": "Drunken Master",
    "name_es": "Maestro Borracho",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/drunken-master/",
    "description_es": "Monje que bebe alcohol para canalizar ki temporal y golpes mas devastadores, intercambiando claridad mental por fuerza inebriada.",
    "description_en": "A monk who drinks alcohol to channel temporary ki and more devastating strikes, trading mental clarity for inebriated strength.",
    "features_removed": [
      "Still Mind (3)",
      "Purity of Body (5)",
      "Diamond Body (11)",
      "Diamond Soul (13)",
      "Empty Body (19)"
    ],
    "features_gained": [
      {
        "name": "Drunken Ki (Ex)",
        "name_en": "Drunken Ki (Ex)",
        "description_es": "A nivel 3, beber una jarra de alcohol fuerte le otorga un punto de ki temporal.",
        "description_en": "At 3rd level, drinking a tankard of strong alcohol grants one temporary ki point.",
        "level": 3
      },
      {
        "name": "Drunken Strength (Su)",
        "name_en": "Drunken Strength (Su)",
        "description_es": "Gasta ki para infligir 1d6-4d6 de dano extra en ataques cuerpo a cuerpo, escalando con el nivel.",
        "description_en": "Spends ki to inflict 1d6-4d6 extra damage on melee attacks, scaling with level.",
        "level": 5
      },
      {
        "name": "Drunken Courage (Ex)",
        "name_en": "Drunken Courage (Ex)",
        "description_es": "A nivel 11 es inmune al miedo mientras tenga puntos de ki ebrio.",
        "description_en": "At 11th level immune to fear while possessing drunken ki points.",
        "level": 11
      },
      {
        "name": "Drunken Resilience (Ex)",
        "name_en": "Drunken Resilience (Ex)",
        "description_es": "Reduccion de dano 1/- a nivel 13, escalando hasta 3/- a nivel 19 mientras tenga ki ebrio.",
        "description_en": "DR 1/- at 13th, scaling to 3/- at 19th while possessing drunken ki.",
        "level": 13
      },
      {
        "name": "Firewater Breath (Su)",
        "name_en": "Firewater Breath (Su)",
        "description_es": "A nivel 19 gasta 4 puntos de ki para exhalar un cono de fuego de 30 pies que inflige 20d6.",
        "description_en": "At 19th level spends 4 ki to breathe a 30-foot cone of fire dealing 20d6.",
        "level": 19
      }
    ]
  },
  "hungry_ghost_monk": {
    "class": "monk",
    "name": "Hungry Ghost Monk",
    "name_en": "Hungry Ghost Monk",
    "name_es": "Monje del Fantasma Hambriento",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/hungry-ghost-monk/",
    "description_es": "Monje que roba ki y vida de sus enemigos al golpearlos, sacrificando defensas mentales por sustento vital.",
    "description_en": "A monk who steals ki and life from his enemies upon striking them, sacrificing mental defenses for vital sustenance.",
    "features_removed": [
      "Stunning Fist (1)",
      "Purity of Body (5)",
      "Wholeness of Body (7)",
      "Diamond Body (11)",
      "Diamond Soul (13)"
    ],
    "features_gained": [
      {
        "name": "Punishing Kick",
        "name_en": "Punishing Kick",
        "description_es": "A nivel 1 obtiene Patada Castigadora como dote extra incluso sin requisitos.",
        "description_en": "At 1st level gains Punishing Kick as a bonus feat even without prerequisites."
      },
      {
        "name": "Steal Ki (Su)",
        "name_en": "Steal Ki (Su)",
        "description_es": "A nivel 5 recupera puntos de ki al confirmar criticos o reducir enemigos a 0 PG.",
        "description_en": "At 5th level replenishes ki points on confirmed critical hits or reducing enemies to 0 HP.",
        "level": 5
      },
      {
        "name": "Life Funnel (Su)",
        "name_en": "Life Funnel (Su)",
        "description_es": "A nivel 7 cura PG iguales a su nivel de monje al confirmar criticos o derrotar enemigos vivos.",
        "description_en": "At 7th level heals HP equal to monk level on confirmed criticals or defeating living enemies.",
        "level": 7
      },
      {
        "name": "Life from a Stone (Su)",
        "name_en": "Life from a Stone (Su)",
        "description_es": "A nivel 11 puede robar ki/vida de cualquier tipo de criatura, no solo seres vivos.",
        "description_en": "At 11th level can steal ki/life from any creature type, not just living beings.",
        "level": 11
      },
      {
        "name": "Sipping Demon (Su)",
        "name_en": "Sipping Demon (Su)",
        "description_es": "A nivel 13 gana 1 PG temporal cada vez que impacta un enemigo en cuerpo a cuerpo.",
        "description_en": "At 13th level gains 1 temporary HP each time he hits an enemy in melee.",
        "level": 13
      }
    ]
  },
  "monk_of_the_four_winds": {
    "class": "monk",
    "name": "Monk of the Four Winds",
    "name_en": "Monk of the Four Winds",
    "name_es": "Monje de los Cuatro Vientos",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/monk-of-the-four-winds/",
    "description_es": "Monje elemental que canaliza energias primordiales en sus golpes y aprende a manipular el tiempo, asumiendo un aspecto espiritual al alcanzar la maestria.",
    "description_en": "An elemental monk who channels primal energies through his strikes and learns to manipulate time, assuming a spirit aspect at mastery.",
    "features_removed": [
      "Stunning Fist (1)",
      "Abundant Step (12)",
      "Timeless Body (17)",
      "Perfect Self (20)"
    ],
    "features_gained": [
      {
        "name": "Elemental Fist",
        "name_en": "Elemental Fist",
        "description_es": "Recibe Puno Elemental como dote extra a nivel 1, con dano que escala cada cinco niveles.",
        "description_en": "Gains Elemental Fist as bonus feat at 1st level, with scaling damage every five levels."
      },
      {
        "name": "Slow Time (Su)",
        "name_en": "Slow Time (Su)",
        "description_es": "A nivel 12 gasta 6 puntos de ki para realizar tres acciones estandar en su turno.",
        "description_en": "At 12th level spends 6 ki points for three standard actions per turn.",
        "level": 12
      },
      {
        "name": "Aspect Master (Su)",
        "name_en": "Aspect Master (Su)",
        "description_es": "A nivel 17 elige un aspecto espiritual (Carpa, Ki-Rin, Mono, Oni, Buho, Tigre) con habilidades unicas.",
        "description_en": "At 17th level chooses a spirit aspect (Carp, Ki-Rin, Monkey, Oni, Owl, Tiger) with unique abilities.",
        "level": 17
      },
      {
        "name": "Immortality (Su)",
        "name_en": "Immortality (Su)",
        "description_es": "A nivel 20 deja de envejecer y se reencarna espontaneamente tras morir.",
        "description_en": "At 20th level ceases aging and spontaneously reincarnates after death.",
        "level": 20
      }
    ],
    "sub_options": {
      "spirits": "Puede invocar el ki como fuerza elemental de los cuatro vientos (agua, tierra, fuego, aire). Los puntos de ki pueden manifestarse como ataques elementales en vez de usos de ki estándar. / Can invoke ki as elemental force of the four winds (water, earth, fire, air). Ki points can manifest as elemental attacks instead of standard ki uses."
    }
  },
  "tetori": {
    "class": "monk",
    "name": "Tetori",
    "name_en": "Tetori",
    "name_es": "Tetori",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/tetori/",
    "description_es": "Monje luchador especializado en presa y sumision, sacrificando movilidad por dominio total del agarre y bloqueo de polimorfias.",
    "description_en": "A grappling-specialized monk wrestler who sacrifices mobility for total mastery of grappling and polymorph negation.",
    "features_removed": [
      "Flurry of Blows (1)",
      "Slow Fall (4)",
      "High Jump (5)",
      "Abundant Step (9)",
      "Improved Evasion (9)",
      "Timeless Body (9)",
      "Tongue of the Sun and Moon (9)",
      "Diamond Soul (13)",
      "Empty Body (19)"
    ],
    "features_gained": [
      {
        "name": "Graceful Grappler (Ex)",
        "name_en": "Graceful Grappler (Ex)",
        "description_es": "Tecnicas de presa elegantes: no provoca AdO al iniciar presa y mantiene Destreza en CA al apresar.",
        "description_en": "Graceful grappling: doesn't provoke AoO when initiating grapple and keeps Dex in AC while grappling.",
        "level": 1
      },
      {
        "name": "Counter Grapple (Ex)",
        "name_en": "Counter Grapple (Ex)",
        "description_es": "Respuestas defensivas para evitar y revertir intentos de presa enemigos.",
        "description_en": "Defensive responses to evade and reverse enemy grapple attempts.",
        "level": 4
      },
      {
        "name": "Break Free (Ex)",
        "name_en": "Break Free (Ex)",
        "description_es": "Maniobras especiales para escapar de presas con bonos a chequeos de presa para liberarse.",
        "description_en": "Special maneuvers to escape grapples with bonuses to break-free grapple checks.",
        "level": 5
      },
      {
        "name": "Inescapable Grasp (Su)",
        "name_en": "Inescapable Grasp (Su)",
        "description_es": "Sus presas ignoran libertad de movimiento y otras protecciones de escape.",
        "description_en": "His grapples ignore freedom of movement and other escape protections.",
        "level": 9
      },
      {
        "name": "Form Lock (Su)",
        "name_en": "Form Lock (Su)",
        "description_es": "Niega cambios de forma y polimorfias en criaturas apresadas.",
        "description_en": "Negates shapechange and polymorph effects on grappled creatures.",
        "level": 13
      }
    ]
  },
  "frozen_shadow": {
    "class": "ninja",
    "name": "Frozen Shadow",
    "name_en": "Frozen Shadow",
    "name_es": "Sombra Helada",
    "source": "Inner Sea Intrigue",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Ninja%20Frozen%20Shadow",
    "description_es": "Ninja de un clan septentrional especializado en supervivencia, rastreo y deteccion de ilusiones, cazando a sus victimas a traves de cualquier terreno.",
    "description_en": "A ninja of a northern clan specialized in survival, tracking, and illusion detection, hunting victims through any terrain.",
    "features_removed": [
      "Diplomacy class skill",
      "Uncanny Dodge (4)",
      "Improved Uncanny Dodge (8)"
    ],
    "features_gained": [
      {
        "name": "Survival class skill",
        "name_en": "Survival class skill",
        "description_es": "Anade Supervivencia como habilidad de clase en lugar de Diplomacia.",
        "description_en": "Adds Survival as class skill instead of Diplomacy."
      },
      {
        "name": "Hardy Killer (Ex)",
        "name_en": "Hardy Killer (Ex)",
        "description_es": "Gasta 1 punto de ki para los beneficios de soportar elementos; mecanicas de salto modificadas.",
        "description_en": "Spends 1 ki point for endure elements benefits; altered jumping mechanics."
      },
      {
        "name": "Track Victim (Ex)",
        "name_en": "Track Victim (Ex)",
        "description_es": "Bono a Supervivencia rastreando y a Avistar para ver disfraces; +2 Voluntad contra ilusiones de criaturas.",
        "description_en": "Bonus to Survival tracking and Perception vs disguises; +2 Will saves vs creature illusions.",
        "level": 4
      },
      {
        "name": "Swift Tracker (Ex)",
        "name_en": "Swift Tracker (Ex)",
        "description_es": "Rastrea a velocidad normal sin penalizacion; +4 a salvaciones de Voluntad contra ilusiones.",
        "description_en": "Tracks at normal speed without penalty; +4 Will saves vs illusions.",
        "level": 8
      }
    ],
    "class_skills_add": [
      "survival"
    ],
    "class_skills_remove": [
      "diplomacy"
    ]
  },
  "hunting_serpent": {
    "class": "ninja",
    "name": "Hunting Serpent",
    "name_en": "Hunting Serpent",
    "name_es": "Serpiente Cazadora",
    "source": "Villain Codex",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Ninja%20Hunting%20Serpent",
    "description_es": "Ninja asesino implacable que marca a sus victimas para la muerte y las persigue sin descanso a traves de cualquier obstaculo.",
    "description_en": "A relentless ninja assassin who marks victims for death and pursues them tirelessly through any obstacle.",
    "features_removed": [
      "No Trace",
      "Uncanny Dodge",
      "Improved Uncanny Dodge",
      "Ninja Trick (10, 12, 16)",
      "Knowledge (Nobility) class skill"
    ],
    "features_gained": [
      {
        "name": "Survival class skill",
        "name_en": "Survival class skill",
        "description_es": "Gana Supervivencia como habilidad de clase en lugar de Conocimiento (nobleza).",
        "description_en": "Gains Survival as a class skill instead of Knowledge (nobility)."
      },
      {
        "name": "Relentless Pursuit (Ex)",
        "name_en": "Relentless Pursuit (Ex)",
        "description_es": "Bono a Diplomacia (recopilar informacion) y Supervivencia (rastrear), aumentando cada 3 niveles.",
        "description_en": "Bonus to Diplomacy (gather information) and Survival (tracking), increasing every 3 levels."
      },
      {
        "name": "Death Mark (Ex)",
        "name_en": "Death Mark (Ex)",
        "description_es": "Accion rapida para marcar objetivos de ataque furtivo, ganando bonos a ataque, dano y rastreo.",
        "description_en": "Swift action to mark sneak attack targets, gaining bonuses to attack, damage, and tracking.",
        "level": 4
      },
      {
        "name": "Certain Demise (Ex)",
        "name_en": "Certain Demise (Ex)",
        "description_es": "El dano de ataque furtivo se aplica al primer ataque de cada asalto contra blancos marcados.",
        "description_en": "Sneak attack damage applies to the first attack each round against marked targets.",
        "level": 8
      }
    ],
    "class_skills_add": [
      "survival"
    ],
    "class_skills_remove": [
      "knowledge_nobility"
    ]
  },
  "mask_of_the_living_god": {
    "class": "ninja",
    "name": "Mask of the Living God",
    "name_en": "Mask of the Living God",
    "name_es": "Mascara del Dios Viviente",
    "source": "Disciple's Doctrine",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Ninja%20Mask%20of%20the%20Living%20God",
    "description_es": "Ninja al servicio de Razmir disfrazado de campesino comun, silenciando a herejes con magia divina y miradas amenazadoras.",
    "description_en": "A Razmiran ninja disguised as a common peasant, silencing heretics with divine magic and intimidating gazes.",
    "features_removed": [
      "Poison Use",
      "Ki Pool (modified)"
    ],
    "features_gained": [
      {
        "name": "Mask (Ex)",
        "name_en": "Mask (Ex)",
        "description_es": "Mascara especial que debe llevarse para activar la mayoria de sus habilidades de clase.",
        "description_en": "Special mask that must be worn for most class abilities to function."
      },
      {
        "name": "Undercover Faith (Ex)",
        "name_en": "Undercover Faith (Ex)",
        "description_es": "Adopta una identidad mundana similar al talento muchos disfraces del vigilante.",
        "description_en": "Adopts a mundane identity similar to vigilante's many guises talent."
      },
      {
        "name": "Expurgate (Sp)",
        "name_en": "Expurgate (Sp)",
        "description_es": "Gasta ki para silenciar enemigos via efecto lengua trabada (nivel 2) o enmudecerlos 1d4 asaltos (nivel 6).",
        "description_en": "Spends ki to silence foes via fumbletongue (2nd level) or mute them 1d4 rounds (6th level).",
        "level": 2
      },
      {
        "name": "Stern Gaze (Ex)",
        "name_en": "Stern Gaze (Ex)",
        "description_es": "Bono moral a Intimidar y Sentir Motivacion igual a la mitad del nivel de ninja.",
        "description_en": "Morale bonus on Intimidate and Sense Motive equal to half ninja level.",
        "level": 4
      },
      {
        "name": "Bola/Sap/Whip Proficiency",
        "name_en": "Bola/Sap/Whip Proficiency",
        "description_es": "Competente con bolas, cachiporras y latigos.",
        "description_en": "Proficient with bolas, saps, and whips."
      }
    ]
  },
  "gunpowder_bombardier": {
    "class": "ninja",
    "name": "Gunpowder Bombardier",
    "name_en": "Gunpowder Bombardier",
    "name_es": "Bombardero de Polvora",
    "source": "Heroes from the Fringe",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Ninja%20Gunpowder%20Bombardier",
    "description_es": "Ninja que combina sigilo con explosivos de polvora, sembrando bombas demoradas y enriqueciendo sus explosiones con condiciones daninas.",
    "description_en": "A ninja combining stealth with gunpowder explosives, planting delayed bombs and enriching blasts with debilitating conditions.",
    "features_removed": [
      "Ninja Trick (2)",
      "Uncanny Dodge (4)",
      "Improved Uncanny Dodge (8)"
    ],
    "features_gained": [
      {
        "name": "Gunpowder Bomb (Ex)",
        "name_en": "Gunpowder Bomb (Ex)",
        "description_es": "A nivel 2 gasta ki para lanzar bombas explosivas que infligen 1d6 contundente en area de 10 pies.",
        "description_en": "At 2nd level spends ki to throw explosive bombs dealing 1d6 bludgeoning in a 10-foot burst.",
        "level": 2
      },
      {
        "name": "Explosive Impairment (Su)",
        "name_en": "Explosive Impairment (Su)",
        "description_es": "A nivel 4 anade condiciones (deslumbrado, ensordecido, enredado, asustado) gastando ki extra.",
        "description_en": "At 4th level adds conditions (dazzled, deafened, entangled, shaken) by spending extra ki.",
        "level": 4
      },
      {
        "name": "Delayed Explosive (Ex)",
        "name_en": "Delayed Explosive (Ex)",
        "description_es": "A nivel 8 planta bombas que detonan tras un numero de asaltos hasta su nivel de ninja.",
        "description_en": "At 8th level plants bombs that detonate after a number of rounds up to ninja level.",
        "level": 8
      }
    ]
  },
  "petal_ninja": {
    "class": "ninja",
    "name": "Petal Ninja",
    "name_en": "Petal Ninja",
    "name_es": "Ninja de los Petalos",
    "source": "Wilderness Origins",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Ninja%20Petal%20Ninja",
    "description_es": "Ninja ghoran de un clan secreto que crea explosiones de petalos florales y se transforma en una nube insustancial de polen.",
    "description_en": "A ghoran ninja of a secretive clan who creates bursts of flower petals and transforms into an insubstantial cloud of pollen.",
    "features_removed": [
      "Ninja Trick (2)",
      "No Trace (4)",
      "Uncanny Dodge (4)",
      "Improved Uncanny Dodge (8)",
      "Light Steps (6)",
      "Appraise class skill"
    ],
    "features_gained": [
      {
        "name": "Heal class skill",
        "name_en": "Heal class skill",
        "description_es": "Anade Curar como habilidad de clase.",
        "description_en": "Adds Heal as class skill.",
        "level": 1
      },
      {
        "name": "Blossom Shower (Ex)",
        "name_en": "Blossom Shower (Ex)",
        "description_es": "A nivel 2 crea un estallido de petalos en area de 15 pies que provoca varios efectos (ocultacion, deslumbrado, enfermo, fascinado, vacilante o nauseabundo).",
        "description_en": "At 2nd level creates a 15-foot burst of petals causing varied effects (concealment, dazzled, sickened, fascinated, staggered, nauseated).",
        "level": 2
      },
      {
        "name": "Burst of Blossoms (Su)",
        "name_en": "Burst of Blossoms (Su)",
        "description_es": "A nivel 4 se transforma en una nube insustancial de flores hasta 1 asalto, ganando +4 a Sigilo.",
        "description_en": "At 4th level transforms into an insubstantial cloud of blossoms for up to 1 round, gaining +4 Stealth.",
        "level": 4
      },
      {
        "name": "Sundial (Su)",
        "name_en": "Sundial (Su)",
        "description_es": "A nivel 6 ajusta la luz ambiente en 30 pies gastando ki, durando 1 minuto.",
        "description_en": "At 6th level adjusts ambient light within 30 feet by spending ki, lasting 1 minute.",
        "level": 6
      }
    ],
    "class_skills_add": [
      "heal"
    ],
    "class_skills_remove": [
      "appraise"
    ]
  },
  "geomancer": {
    "class": "occultist",
    "name": "Geomancer",
    "name_en": "Geomancer",
    "name_es": "Geomante",
    "source": "Ultimate Wilderness",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Occultist%20Geomancer",
    "description_es": "Occultist que extrae poder de los terrenos naturales, almacenando foco mental en la tierra y otorgando bonos de dominio.",
    "description_en": "An occultist who draws power from natural terrains, storing mental focus in the land and granting dominion bonuses.",
    "features_removed": [
      "Disable Device class skill",
      "Knowledge (engineering) class skill",
      "Knowledge (religion) class skill",
      "Implement school (1)",
      "Magic Item Skill (2)",
      "Aura Sight (5)",
      "Focus Powers (7, 13)"
    ],
    "features_gained": [
      {
        "name": "Geomantic Focus (Su)",
        "name_en": "Geomantic Focus (Su)",
        "description_es": "Almacena foco mental en el terreno en lugar de en implementos.",
        "description_en": "Stores mental focus in terrain instead of in implements."
      },
      {
        "name": "Geomancy (Sp)",
        "name_en": "Geomancy (Sp)",
        "description_es": "Otorga conjuros dependientes del terreno donde se encuentre.",
        "description_en": "Grants spells dependent on the terrain he occupies."
      },
      {
        "name": "Survivalist (Ex)",
        "name_en": "Survivalist (Ex)",
        "description_es": "Bono a chequeos de Supervivencia basado en el foco mental invertido.",
        "description_en": "Bonus to Survival checks based on mental focus invested."
      },
      {
        "name": "Terrain Stride (Ex)",
        "name_en": "Terrain Stride (Ex)",
        "description_es": "Aumento de velocidad de movimiento al recorrer terrenos elegidos.",
        "description_en": "Increased movement speed in chosen terrains.",
        "level": 2
      },
      {
        "name": "Dominion (Su)",
        "name_en": "Dominion (Su)",
        "description_es": "Bonos morales a aliados en su area de dominio territorial.",
        "description_en": "Morale bonuses to allies within his territorial dominion.",
        "level": 5
      },
      {
        "name": "Wall of Terrain (Sp)",
        "name_en": "Wall of Terrain (Sp)",
        "description_es": "Habilidad similar a conjuro para crear muros del terreno circundante.",
        "description_en": "Spell-like ability to create walls from surrounding terrain.",
        "level": 7
      }
    ],
    "class_skills_add": [
      "knowledge_geography",
      "knowledge_nature",
      "survival"
    ],
    "class_skills_remove": [
      "disable_device",
      "knowledge_engineering",
      "knowledge_religion"
    ],
    "sub_options": {
      "schools": "Las escuelas de implemento se eligen en función del terreno: tierra, agua, aire, fuego. La selección de implementos está limitada a los 4 elementos. Cada día puede cambiar el vínculo elemental según el entorno. / Implement schools chosen based on terrain: earth, water, air, fire. Implement selection limited to the 4 elements. Can change elemental bond each day based on surroundings."
    }
  },
  "reliquarian": {
    "class": "occultist",
    "name": "Reliquarian",
    "name_en": "Reliquarian",
    "name_es": "Reliquario",
    "source": "Occult Origins",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Occultist%20Reliquarian",
    "description_es": "Occultist devoto que canaliza el poder divino a traves de reliquias sagradas, lanzando conjuros divinos y accediendo a un dominio de su deidad.",
    "description_en": "A devout occultist who channels divine power through sacred relics, casting divine spells and accessing a domain of his deity.",
    "features_removed": [
      "Knacks",
      "Psychic spells",
      "Intelligence-based mental focus"
    ],
    "features_gained": [
      {
        "name": "Divine Spellcasting",
        "name_en": "Divine Spellcasting",
        "description_es": "Sus conjuros usan componentes verbal y somatico en lugar de pensamiento y emocion.",
        "description_en": "His spells use verbal/somatic components instead of thought/emotion.",
        "level": 1
      },
      {
        "name": "Wisdom-based Focus",
        "name_en": "Wisdom-based Focus",
        "description_es": "Sabiduria reemplaza a Inteligencia para foco mental y conjuros.",
        "description_en": "Wisdom replaces Intelligence for mental focus and spellcasting.",
        "level": 1
      },
      {
        "name": "Domain (Su)",
        "name_en": "Domain (Su)",
        "description_es": "Acceso a un dominio de su deidad con sus poderes y conjuros.",
        "description_en": "Access to one domain from his deity with its powers and spells.",
        "level": 1
      },
      {
        "name": "Sacred Implements (Su)",
        "name_en": "Sacred Implements (Su)",
        "description_es": "Reliquias religiosas que sirven como focos divinos en lugar de implementos estandar.",
        "description_en": "Religious relics that serve as divine focuses instead of standard implements.",
        "level": 1
      },
      {
        "name": "Orisons",
        "name_en": "Orisons",
        "description_es": "Obtiene oraciones (conjuros divinos de nivel 0) al elegir escuelas de implemento.",
        "description_en": "Gains orisons (0-level divine spells) when selecting implement schools.",
        "level": 1
      },
      {
        "name": "Favored Weapon Proficiency",
        "name_en": "Favored Weapon Proficiency",
        "description_es": "Anade el arma favorita de su deidad a sus competencias.",
        "description_en": "Adds his deity's favored weapon to his proficiencies.",
        "level": 1
      }
    ],
    "sub_options": {
      "domains": "Las reliquias funcionan como implementos de ocultista y como dominios divinos. Cada reliquia otorga acceso a uno de los 8 conjuntos de implementos y a un mini-dominio temático. / Relics function as both occultist implements and divine domains. Each relic grants access to one of the 8 implement sets and a thematic mini-domain.",
      "schools": "Las escuelas de implemento se acceden a través de reliquias específicas. Solo puede usar las escuelas vinculadas a las reliquias que posee actualmente. / Implement schools accessed through specific relics. Can only use schools linked to currently held relics."
    }
  },
  "silksworn": {
    "class": "occultist",
    "name": "Silksworn",
    "name_en": "Silksworn",
    "name_es": "Vestido de Seda",
    "source": "Heroes of the High Court",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Occultist%20Silksworn",
    "description_es": "Occultist cortesano que canaliza poder arcano a traves de prendas opulentas y joyas, ganando acceso a mas escuelas de implementos.",
    "description_en": "A courtly occultist who channels arcane power through opulent garments and jewelry, gaining access to more implement schools.",
    "features_removed": [
      "Knowledge (engineering) class skill",
      "Knowledge (planes) class skill",
      "Knacks",
      "Armor & Shield Proficiency",
      "Outside Contact",
      "Magic Circles",
      "Binding Circles",
      "Fast Circles",
      "Implement School (20)"
    ],
    "features_gained": [
      {
        "name": "Arcane Spellcasting",
        "name_en": "Arcane Spellcasting",
        "description_es": "Lanza conjuros arcanos con componentes verbal y somatico en lugar de psiquicos.",
        "description_en": "Casts arcane spells with verbal and somatic components instead of psychic.",
        "level": 1
      },
      {
        "name": "Ostentatious Implements (Su)",
        "name_en": "Ostentatious Implements (Su)",
        "description_es": "Sus implementos son prendas o joyas magicas valoradas en al menos 10 po en huecos especificos.",
        "description_en": "His implements are ostentatious garments or magical items worth at least 10 gp in specific slots.",
        "level": 1
      },
      {
        "name": "Bluff & Knowledge (Nobility) class skills",
        "name_en": "Bluff & Knowledge (Nobility) class skills",
        "description_es": "Anade Enganar y Conocimiento (nobleza) como habilidades de clase.",
        "description_en": "Adds Bluff and Knowledge (nobility) as class skills.",
        "level": 1
      },
      {
        "name": "Enhanced Mental Focus",
        "name_en": "Enhanced Mental Focus",
        "description_es": "Foco mental igual a nivel + Inteligencia + Carisma.",
        "description_en": "Mental focus equals occultist level + Intelligence + Charisma modifier.",
        "level": 1
      },
      {
        "name": "Four Implement Schools (1)",
        "name_en": "Four Implement Schools (1)",
        "description_es": "Acceso a cuatro escuelas de implemento desde nivel 1 en lugar de dos.",
        "description_en": "Access to four implement schools at 1st level instead of two.",
        "level": 1
      },
      {
        "name": "Silksworn Eloquence (Su)",
        "name_en": "Silksworn Eloquence (Su)",
        "description_es": "A nivel 8 obtiene bonos sociales y poderes de elocuencia magica.",
        "description_en": "At 8th level gains social bonuses and magical eloquence powers.",
        "level": 8
      }
    ],
    "class_skills_add": [
      "bluff",
      "knowledge_nobility"
    ],
    "class_skills_remove": [
      "knowledge_engineering",
      "knowledge_planes"
    ],
    "sub_options": {
      "schools": "Los implementos deben ser ropa, joyas o accesorios. Las escuelas disponibles se limitan a aquellas que pueden incorporarse en atuendo: Abjuración, Encantamiento, Ilusión, Transmutación. / Implements must be clothing, jewelry, or accessories. Available schools limited to those that can be incorporated into attire: Abjuration, Enchantment, Illusion, Transmutation."
    }
  },
  "panoply_savant": {
    "class": "occultist",
    "name": "Panoply Savant",
    "name_en": "Panoply Savant",
    "name_es": "Sabio de la Panoplia",
    "source": "Psychic Anthology",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Occultist%20Panoply%20Savant",
    "description_es": "Occultist que se especializa en una panoplia tematica de implementos, combinando sus poderes para efectos sinergicos.",
    "description_en": "An occultist who specializes in a thematic panoply of implements, combining their powers for synergistic effects.",
    "features_removed": [
      "Shift Focus (4)",
      "Outside Contact (8)",
      "Magic Circles (8)",
      "Binding Circles (12)",
      "Fast Circles (16)"
    ],
    "features_gained": [
      {
        "name": "Panoply Focus (Su)",
        "name_en": "Panoply Focus (Su)",
        "description_es": "Gana 1 punto adicional de foco mental diario, invertible solo en implementos de su panoplia.",
        "description_en": "Gains 1 additional mental focus point per day, investable only in panoply implements.",
        "level": 4
      },
      {
        "name": "Implement Specialist (Su)",
        "name_en": "Implement Specialist (Su)",
        "description_es": "Usa su nivel de lanzador con objetos magicos relacionados con su panoplia y restaura cargas meditando.",
        "description_en": "Uses caster level with panoply-related magic items and restores charges through meditation.",
        "level": 4
      },
      {
        "name": "Panoptic Harmony (Su)",
        "name_en": "Panoptic Harmony (Su)",
        "description_es": "Trata su nivel de lanzador como 2 mas alto al alternar entre implementos diferentes de la panoplia.",
        "description_en": "Treats caster level as 2 higher when alternating between different panoply implements.",
        "level": 8
      },
      {
        "name": "Panoptic Call (Su)",
        "name_en": "Panoptic Call (Su)",
        "description_es": "Invoca objetos asociados a su panoplia como accion estandar usando foco mental.",
        "description_en": "Summons panoply-associated items as a standard action using mental focus.",
        "level": 12
      },
      {
        "name": "Combined Powers (Su)",
        "name_en": "Combined Powers (Su)",
        "description_es": "Gasta 2 puntos de foco mental extra para usar un segundo poder de foco de otro implemento simultaneamente.",
        "description_en": "Spends 2 extra mental focus to use a second focus power from a different implement simultaneously.",
        "level": 16
      }
    ]
  },
  "haunt_collector": {
    "class": "occultist",
    "name": "Haunt Collector",
    "name_en": "Haunt Collector",
    "name_es": "Coleccionista de Embrujos",
    "source": "Horror Adventures",
    "source_url": "https://www.aonprd.com/ArchetypeDisplay.aspx?FixedName=Occultist%20Haunt%20Collector",
    "description_es": "Occultist que captura espiritus poseidos en sus implementos, canalizando embrujos y comulgando con los muertos derrotados.",
    "description_en": "An occultist who captures possessed spirits in his implements, channeling haunts and communing with destroyed undead.",
    "features_removed": [
      "Aura Sight (5)",
      "Outside Contact (8)",
      "Magic Circles (8)",
      "Binding Circles (12)",
      "Fast Circles (16)"
    ],
    "features_gained": [
      {
        "name": "Possessed Possessions (Su)",
        "name_en": "Possessed Possessions (Su)",
        "description_es": "A nivel 2 y cada 4 niveles, accede a objetos poseidos por espiritus con bonos de seance.",
        "description_en": "At 2nd level and every 4 levels, gains spirit-possessed items with seance boons."
      },
      {
        "name": "Hauntist (Su)",
        "name_en": "Hauntist (Su)",
        "description_es": "A nivel 5 adquiere la habilidad canalizador de embrujos del medium con nivel efectivo igual a su nivel -2.",
        "description_en": "At 5th level gains the medium's haunt channeler with effective level equal to occultist level -2.",
        "level": 5
      },
      {
        "name": "Spirit Speaker (Sp)",
        "name_en": "Spirit Speaker (Sp)",
        "description_es": "A nivel 8 realiza seances para comulgar con muertos vivientes destruidos o embrujos neutralizados una vez al dia.",
        "description_en": "At 8th level conducts seances to commune with destroyed undead or neutralized haunts once daily.",
        "level": 8
      },
      {
        "name": "Extricate Haunt (Su)",
        "name_en": "Extricate Haunt (Su)",
        "description_es": "A nivel 8 extrae temporalmente espiritus de implementos para crear fenomenos que entregan conjuros.",
        "description_en": "At 8th level temporarily extracts spirits from implements to create spell-delivering phenomena.",
        "level": 12
      }
    ],
    "sub_options": {
      "spirits": "Puede \"coleccionar\" apariciones (haunts) y vincularlas a sus implementos como espíritus menores. Las apariciones recopiladas otorgan poderes espectrales. Límite: una aparición por nivel de ocultista. / Can \"collect\" haunts and bind them to implements as minor spirits. Collected haunts grant spectral powers. Limit: one haunt per occultist level."
    }
  },
  "zen_archer_monk": {
    "class": "monk",
    "name": "Zen Archer",
    "name_en": "Zen Archer",
    "name_es": "Arquero Zen",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/zen-archer/",
    "description_es": "Monje que dedica su entrenamiento al arco, lanzando ataques de raudal con flechas guiadas por su sabiduria y ki.",
    "description_en": "A monk who dedicates his training to the bow, unleashing flurry attacks with arrows guided by his wisdom and ki.",
    "features_removed": [
      "Stunning Fist",
      "Evasion (2)",
      "Maneuver Training (3)",
      "Still Mind (3)",
      "Purity of Body (5)",
      "Improved Evasion (9)",
      "Diamond Body (11)",
      "Tongue of the Sun and Moon (17)"
    ],
    "features_gained": [
      {
        "name": "Bow Proficiencies",
        "name_en": "Bow Proficiencies",
        "description_es": "Competente con arcos largos, arcos cortos y sus variantes compuestas.",
        "description_en": "Proficient with longbows, shortbows, and their composite variants.",
        "level": 1
      },
      {
        "name": "Flurry of Blows (Bow)",
        "name_en": "Flurry of Blows (Bow)",
        "description_es": "Raudal de Golpes modificado solo con arcos, requiriendo el uso de Fuerza.",
        "description_en": "Modified flurry of blows using only bows, requiring Strength use.",
        "level": 1
      },
      {
        "name": "Perfect Strike",
        "name_en": "Perfect Strike",
        "description_es": "Recibe Golpe Perfecto a nivel 1 como dote extra de monje.",
        "description_en": "Gains Perfect Strike at 1st level as a monk bonus feat.",
        "level": 1
      },
      {
        "name": "Zen Archery (Ex)",
        "name_en": "Zen Archery (Ex)",
        "description_es": "Usa su modificador de Sabiduria en lugar de Destreza para ataques a distancia con arco.",
        "description_en": "Uses Wisdom modifier instead of Dexterity for ranged attacks with bow.",
        "level": 3
      },
      {
        "name": "Ki Arrows (Su)",
        "name_en": "Ki Arrows (Su)",
        "description_es": "A nivel 5 puede gastar ki para que sus flechas inflijan dano de su puno desnudo.",
        "description_en": "At 5th level can spend ki so his arrows deal his unarmed strike damage.",
        "level": 5
      },
      {
        "name": "Reflexive Shot (Ex)",
        "name_en": "Reflexive Shot (Ex)",
        "description_es": "A nivel 9 puede hacer ataques de oportunidad con su arco.",
        "description_en": "At 9th level can make attacks of opportunity with his bow.",
        "level": 9
      }
    ]
  },
  "dual_cursed_oracle": {
    "class": "oracle",
    "name": "Dual-Cursed Oracle",
    "name_en": "Dual-Cursed Oracle",
    "name_es": "Oráculo Doblemente Maldito",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/oracle/archetypes/paizo-oracle-archetypes/dual-cursed-oracle/",
    "description_es": "Un oráculo marcado por dos maldiciones a la vez, que canaliza la mala fortuna contra sus enemigos a costa de un beneficio reducido de una de sus maldiciones.",
    "description_en": "An oracle marked by two curses at once, channeling misfortune against enemies at the cost of reduced benefit from one of her curses.",
    "features_removed": [
      "Mystery Class Skills (1)",
      "Mystery Bonus Spells (2,4,6)",
      "Revelations (additional)"
    ],
    "features_gained": [
      {
        "name": "Oracle's Curse (modificada)",
        "name_en": "Oracle's Curse (modified)",
        "description_es": "Selecciona dos maldiciones a nivel 1; una permanece estática sin progresar.",
        "description_en": "Select two curses at 1st level; one remains static and never gains scaling benefits.",
        "level": 1
      },
      {
        "name": "Conjuros Adicionales",
        "name_en": "Bonus Spells",
        "description_es": "Lista fija: ill omen (2), oracle's burden (4), bestow curse (6) que reemplaza los conjuros del misterio.",
        "description_en": "Fixed list: ill omen (2), oracle's burden (4), bestow curse (6), replacing mystery bonus spells.",
        "level": 2
      },
      {
        "name": "Misfortune (Ex)",
        "name_en": "Misfortune (Ex)",
        "description_es": "Acción inmediata para forzar a una criatura a 30 pies a relanzar un d20 y quedarse con el peor resultado; una vez por criatura por día.",
        "description_en": "Immediate action to force a creature within 30 ft to reroll a d20 and take the worse result; once per creature per day.",
        "level": 1
      },
      {
        "name": "Fortune (Ex)",
        "name_en": "Fortune (Ex)",
        "description_es": "Acción inmediata para relanzar uno de tus propios d20; una vez al día a nivel 5, +1 uso cada 6 niveles.",
        "description_en": "Immediate action to reroll one of your own d20s; once daily at level 5, +1 use every 6 levels.",
        "level": 5
      }
    ]
  },
  "possessed_oracle": {
    "class": "oracle",
    "name": "Possessed Oracle",
    "name_en": "Possessed Oracle",
    "name_es": "Oráculo Poseído",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/oracle/archetypes/paizo-oracle-archetypes/possessed-oracle/",
    "description_es": "Un oráculo cuya mente comparte hueco con otra entidad, lo que le otorga defensa mental a cambio de una maldición y conjuros fijos.",
    "description_en": "An oracle whose mind shares space with another entity, granting mental defense at the cost of a fixed curse and bonus spells.",
    "features_removed": [
      "Mystery Bonus Spells"
    ],
    "features_gained": [
      {
        "name": "Forced Curse",
        "name_en": "Forced Curse",
        "description_es": "Debe elegir la maldición Atormentado (Haunted) o Lenguas (Tongues) a nivel 1.",
        "description_en": "Must select the Haunted or Tongues curse at 1st level.",
        "level": 1
      },
      {
        "name": "Bonus Spells",
        "name_en": "Bonus Spells",
        "description_es": "Lista fija: ventriloquism, spider climb, screech, sleepwalk, telekinesis, animate objects, divine vessel.",
        "description_en": "Fixed list: ventriloquism, spider climb, screech, sleepwalk, telekinesis, animate objects, divine vessel.",
        "level": 1
      },
      {
        "name": "Two Minds (Su)",
        "name_en": "Two Minds (Su)",
        "description_es": "Revelación obligatoria: +2 a salvaciones de Voluntad contra encantamientos; a nivel 7 puede relanzar una salvación de Voluntad fallada al día.",
        "description_en": "Mandatory revelation: +2 on Will saves vs enchantment; at 7th level may reroll one failed Will save per day.",
        "level": 1
      }
    ]
  },
  "warsighted": {
    "class": "oracle",
    "name": "Warsighted",
    "name_en": "Warsighted",
    "name_es": "Visión de Guerra",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/oracle/archetypes/paizo-oracle-archetypes/warsighted/",
    "description_es": "Un oráculo marcial cuyas visiones se manifiestan como un dominio cambiante de técnicas de combate en lugar de revelaciones tradicionales.",
    "description_en": "A martial oracle whose visions manifest as a shifting mastery of combat techniques rather than traditional revelations.",
    "features_removed": [
      "Revelations (1, 7, 11, 15)"
    ],
    "features_gained": [
      {
        "name": "Martial Flexibility (Ex)",
        "name_en": "Martial Flexibility (Ex)",
        "description_es": "Acción de movimiento para obtener un dote de combate por 1 minuto; usos = 3 + 1/2 nivel de oráculo. Escala a múltiples dotes simultáneos a niveles 7, 11 y 15.",
        "description_en": "Move action to gain one combat feat for 1 minute; uses per day = 3 + 1/2 oracle level. Scales to multiple simultaneous feats at levels 7, 11, and 15.",
        "level": 1
      }
    ]
  },
  "stargazer": {
    "class": "oracle",
    "name": "Stargazer",
    "name_en": "Stargazer",
    "name_es": "Observador de Estrellas",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/oracle/archetypes/paizo-oracle-archetypes/stargazer/",
    "description_es": "Un oráculo cuyas visiones provienen del firmamento, especializado en navegación celestial y conjuros relacionados con las estrellas.",
    "description_en": "An oracle whose visions come from the firmament, specialized in celestial navigation and star-related spells.",
    "features_removed": [
      "Mystery Class Skills",
      "Mystery Bonus Spells"
    ],
    "features_gained": [
      {
        "name": "Class Skills",
        "name_en": "Class Skills",
        "description_es": "Añade Conocimiento (naturaleza), Percepción y Supervivencia como habilidades de clase.",
        "description_en": "Adds Knowledge (nature), Perception, and Survival as class skills.",
        "level": 1
      },
      {
        "name": "Bonus Spells",
        "name_en": "Bonus Spells",
        "description_es": "Lista fija temática: faerie fire (2), glitterdust (4), guiding star (6), wandering star motes (8), meteor swarm (18).",
        "description_en": "Fixed thematic list: faerie fire (2), glitterdust (4), guiding star (6), wandering star motes (8), meteor swarm (18).",
        "level": 1
      },
      {
        "name": "Guiding Star (Su)",
        "name_en": "Guiding Star (Su)",
        "description_es": "Revelación obligatoria a nivel 1: bonificadores y orientación cuando puede ver las estrellas.",
        "description_en": "Mandatory revelation at 1st level: bonuses and guidance when she can see the stars.",
        "level": 1
      },
      {
        "name": "Star Chart (Su)",
        "name_en": "Star Chart (Su)",
        "description_es": "Revelación obligatoria a nivel 7: dominio de la cartografía estelar y orientación.",
        "description_en": "Mandatory revelation at 7th level: mastery of stellar cartography and guidance.",
        "level": 7
      }
    ],
    "class_skills_add": [
      "knowledge_nature",
      "perception",
      "survival"
    ]
  },
  "hospitaler": {
    "class": "paladin",
    "name": "Hospitaler",
    "name_en": "Hospitaler",
    "name_es": "Hospitalario",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/paladin/archetypes/paizo-paladin-archetypes/hospitaler/",
    "description_es": "Paladín dedicado a la curación, que sacrifica frecuencia de Smite Evil para canalizar energía positiva como un clérigo y crear auras curativas.",
    "description_en": "A paladin dedicated to healing, trading Smite Evil frequency for cleric-like channel positive energy and healing auras.",
    "features_removed": [
      "Smite Evil (frequency)",
      "Channel Positive Energy (standard)",
      "Aura of Justice (11)"
    ],
    "features_gained": [
      {
        "name": "Smite Evil (modificado)",
        "name_en": "Smite Evil (modified)",
        "description_es": "Solo gana usos adicionales a nivel 7 y cada 6 niveles después, en vez de la progresión estándar.",
        "description_en": "Only gains additional uses at 7th level and every 6 levels thereafter, instead of standard progression."
      },
      {
        "name": "Channel Positive Energy (Su)",
        "name_en": "Channel Positive Energy (Su)",
        "description_es": "A nivel 4 canaliza energía positiva como un clérigo de su nivel de paladín −3, con 3 + Carisma usos al día sin gastar imposición de manos.",
        "description_en": "At 4th level channels positive energy as a cleric of paladin level −3, with 3 + Cha uses per day without expending lay on hands.",
        "level": 4
      },
      {
        "name": "Aura of Healing (Su)",
        "name_en": "Aura of Healing (Su)",
        "description_es": "A nivel 11, gastando un uso de canalizar emite un aura curativa de 30 pies durante varios asaltos: estabiliza, concede inmunidad a sangrado y cura.",
        "description_en": "At 11th level, expend a channel use to emit a 30-ft healing aura for several rounds: stabilizes, grants bleed immunity, heals.",
        "level": 11
      }
    ]
  },
  "sacred_shield": {
    "class": "paladin",
    "name": "Sacred Shield",
    "name_en": "Sacred Shield",
    "name_es": "Escudo Sagrado",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/paladin/archetypes/paizo-paladin-archetypes/sacred-shield/",
    "description_es": "Paladín defensor que renuncia a Smite Evil ofensivo y a la canalización para proteger a sus aliados con un baluarte de fe y un escudo bendecido.",
    "description_en": "A defensive paladin who trades offensive Smite Evil and channeling to protect allies with a bulwark of faith and a blessed shield.",
    "features_removed": [
      "Smite Evil",
      "Channel Positive Energy",
      "Aura of Justice",
      "Holy Champion"
    ],
    "features_gained": [
      {
        "name": "Bastion of Good (Su)",
        "name_en": "Bastion of Good (Su)",
        "description_es": "Reemplaza Smite Evil: aliados a 10 pies reciben mitad de daño del objetivo y la paladín gana bonificador de deflexión a CA igual a su Carisma (máx +6).",
        "description_en": "Replaces Smite Evil: allies within 10 ft take half damage from target and the paladin gains deflection AC bonus equal to her Cha (max +6).",
        "level": 1
      },
      {
        "name": "Holy Shield (Su)",
        "name_en": "Holy Shield (Su)",
        "description_es": "A nivel 4, gastando 2 usos de imposición de manos, otorga su bonificador de escudo a aliados adyacentes; expande a 10 pies a nivel 11 y 20 pies a nivel 20.",
        "description_en": "At 4th level, by expending 2 lay on hands uses, grants her shield bonus to adjacent allies; extends to 10 ft at 11 and 20 ft at 20.",
        "level": 4
      },
      {
        "name": "Divine Bond (escudo)",
        "name_en": "Divine Bond (shield)",
        "description_es": "El vínculo divino se aplica al escudo en vez de a un arma o montura, otorgando bonificadores de mejora y propiedades como bashing o spell resistance.",
        "description_en": "Divine bond applies to her shield instead of a weapon or mount, granting enhancement bonuses and properties like bashing or spell resistance.",
        "level": 5
      },
      {
        "name": "Improved Bastion (Su)",
        "name_en": "Improved Bastion (Su)",
        "description_es": "A nivel 11, el radio de Bastion of Good se extiende a 20 pies.",
        "description_en": "At 11th level, the Bastion of Good radius extends to 20 ft.",
        "level": 11
      },
      {
        "name": "Perfect Bastion (Su)",
        "name_en": "Perfect Bastion (Su)",
        "description_es": "A nivel 20, ella y los aliados cercanos obtienen regeneración 10 contra el objetivo del Bastion of Good.",
        "description_en": "At 20th level, she and nearby allies gain regeneration 10 against the Bastion of Good target.",
        "level": 20
      }
    ]
  },
  "warrior_of_the_holy_light": {
    "class": "paladin",
    "name": "Warrior of the Holy Light",
    "name_en": "Warrior of the Holy Light",
    "name_es": "Guerrero de la Luz Sagrada",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/paladin/archetypes/paizo-paladin-archetypes/warrior-of-the-holy-light/",
    "description_es": "Paladín que renuncia por completo a la magia divina para canalizar la luz pura de su deidad como un nimbo radiante de poder.",
    "description_en": "A paladin who fully forgoes divine magic to channel her deity's pure radiance as a luminous nimbus of power.",
    "features_removed": [
      "Spellcasting",
      "Aura of Faith (14)"
    ],
    "features_gained": [
      {
        "name": "Power of Faith (Su)",
        "name_en": "Power of Faith (Su)",
        "description_es": "Reemplaza los conjuros: a nivel 4 gana usos extra de imposición de manos y puede crear un nimbo de luz de 30 pies que otorga +1 moral a CA, ataque, daño y salvaciones de miedo durante 1 minuto. Escala a niveles 8, 12, 16 y 20.",
        "description_en": "Replaces spells: at 4th level gains extra lay on hands uses and can create a 30-ft nimbus of light granting +1 morale to AC, attack, damage and fear saves for 1 minute. Scales at 8, 12, 16, and 20.",
        "level": 1
      },
      {
        "name": "Shining Light (Su)",
        "name_en": "Shining Light (Su)",
        "description_es": "A nivel 14, ráfaga de 30 pies que daña 1d6 por dos niveles a malvados (ciega) y cura 1d6 por dos niveles a buenos. Usos adicionales a niveles 17 y 20.",
        "description_en": "At 14th level, 30-ft burst dealing 1d6 per two levels to evil (blinds) and healing 1d6 per two levels to good. Extra uses at 17 and 20.",
        "level": 14
      }
    ]
  },
  "shining_knight": {
    "class": "paladin",
    "name": "Shining Knight",
    "name_en": "Shining Knight",
    "name_es": "Caballero Refulgente",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/paladin/archetypes/paizo-paladin-archetypes/shining-knight/",
    "description_es": "Paladín montado por excelencia que vincula divinamente con su corcel y carga sin temor a ataques de oportunidad.",
    "description_en": "The quintessential mounted paladin who divinely bonds with her steed and charges without fear of attacks of opportunity.",
    "features_removed": [
      "Divine Health (3)",
      "Aura of Justice (11)"
    ],
    "features_gained": [
      {
        "name": "Skilled Rider (Ex)",
        "name_en": "Skilled Rider (Ex)",
        "description_es": "A nivel 3, no sufre penalizadores de armadura a Cabalgar, y su montura recibe el bonificador de Divine Grace a salvaciones.",
        "description_en": "At 3rd level, no armor check penalty to Ride, and her mount gains her divine grace bonus to saves.",
        "level": 3
      },
      {
        "name": "Divine Bond (montura)",
        "name_en": "Divine Bond (mount)",
        "description_es": "El vínculo divino se aplica obligatoriamente a una montura.",
        "description_en": "Divine bond must be made with a mount.",
        "level": 5
      },
      {
        "name": "Knight's Charge",
        "name_en": "Knight's Charge",
        "description_es": "A nivel 11, al cargar montada no provoca ataques de oportunidad para ella ni su montura. Si combina con Smite Evil, el objetivo debe superar Voluntad o ser preso del pánico.",
        "description_en": "At 11th level, mounted charges provoke no AoO for her or her mount. If combined with Smite Evil, target must save vs Will or be panicked.",
        "level": 11
      }
    ]
  },
  "mutation_mind": {
    "class": "psychic",
    "name": "Mutation Mind",
    "name_en": "Mutation Mind",
    "name_es": "Mente Mutante",
    "source": "Occult Adventures",
    "source_url": "https://www.d20pfsrd.com/alternative-rule-systems/paizo-rules-systems/occult-adventures/occult-classes/psychic/archetypes/paizo-llc-psychic-archetypes/mutation-mind-psychic-archetype/",
    "description_es": "Psíquico cuyo poder mental deforma físicamente su cuerpo, ganando fuerza y mutaciones bestiales a costa de su intelecto.",
    "description_en": "A psychic whose mental power physically warps her body, gaining strength and bestial mutations at the cost of intellect.",
    "features_removed": [
      "Phrenic Amplification (1)"
    ],
    "features_gained": [
      {
        "name": "Physical Mutation (Su)",
        "name_en": "Physical Mutation (Su)",
        "description_es": "Acción rápida: gana +4 mejora a Fuerza y −2 a Inteligencia (+6 a nivel 12). Duración igual a niveles psíquicos en minutos al día. Queda fatigada al terminar.",
        "description_en": "Swift action: gain +4 enhancement to Str and −2 to Int (+6 at level 12). Duration equals psychic levels in minutes per day. Fatigued after.",
        "level": 1
      },
      {
        "name": "Bodily Mutations",
        "name_en": "Bodily Mutations",
        "description_es": "Desde nivel 3, en lugar de amplificaciones frénicas puede elegir mutaciones corporales activas durante Physical Mutation: garras, mordisco, visión en la oscuridad, alcance, RD, etc.",
        "description_en": "From level 3, instead of phrenic amplifications may choose bodily mutations active during Physical Mutation: claws, bite, darkvision, reach, DR, etc.",
        "level": 3
      },
      {
        "name": "Phrenic Empowerment (Su)",
        "name_en": "Phrenic Empowerment (Su)",
        "description_es": "A nivel 7, modificar conjuros aumenta la bonificación a Fuerza en 2 durante asaltos = nivel del conjuro.",
        "description_en": "At 7th level, modifying spells increases Str bonus by 2 for rounds equal to spell level.",
        "level": 7
      },
      {
        "name": "Improved Bodily Mutations",
        "name_en": "Improved Bodily Mutations",
        "description_es": "A nivel 11, accede a mutaciones avanzadas: forma acuática, aumento de tamaño, curación rápida, vuelo o cargas mejoradas.",
        "description_en": "At 11th level, access advanced mutations: aquatic form, size increase, fast healing, flight, or improved bull rush.",
        "level": 11
      }
    ]
  },
  "psychic_duelist": {
    "class": "psychic",
    "name": "Psychic Duelist",
    "name_en": "Psychic Duelist",
    "name_es": "Duelista Psíquico",
    "source": "Occult Adventures",
    "source_url": "https://www.d20pfsrd.com/alternative-rule-systems/paizo-rules-systems/occult-adventures/occult-classes/psychic/archetypes/paizo-llc-psychic-archetypes/psychic-duelist-psychic-archetype/",
    "description_es": "Psíquico especializado en duelos mentales y en la manifestación de criaturas-pensamiento como armas duraderas.",
    "description_en": "A psychic specialized in psychic duels and in manifesting thought-form creatures as enduring weapons.",
    "features_removed": [
      "Phrenic Amplification (7, replaced)"
    ],
    "features_gained": [
      {
        "name": "Instigate Psychic Duel",
        "name_en": "Instigate Psychic Duel",
        "description_es": "A nivel 4 añade instigate psychic duel a su lista de conjuros.",
        "description_en": "At 4th level adds instigate psychic duel to her spell list.",
        "level": 4
      },
      {
        "name": "Manifestation Amplifications",
        "name_en": "Manifestation Amplifications",
        "description_es": "Desde nivel 7, al ganar amplificaciones frénicas puede elegir amplificaciones de manifestación que potencian sus criaturas-pensamiento.",
        "description_en": "From 7th level, when gaining phrenic amplifications may choose manifestation amplifications that boost her thought-form creatures.",
        "level": 7
      },
      {
        "name": "Thought-Form Persistence",
        "name_en": "Thought-Form Persistence",
        "description_es": "Por 1 punto del depósito frénico, su criatura-pensamiento persiste sin atacar y puede mantenerla con acción rápida; el daño psíquico de retroceso se reduce a la mitad.",
        "description_en": "For 1 phrenic pool point, her thought-form creature persists without attacking and may be maintained as a swift action; psychic backlash damage halved.",
        "level": 7
      },
      {
        "name": "Offensive Manifestations",
        "name_en": "Offensive Manifestations",
        "description_es": "A nivel 9 puede usar manifestaciones ofensivas directamente contra enemigos sin entrar en duelo psíquico, sacrificando un conjuro como acción de asalto completo.",
        "description_en": "At 9th level may use offensive manifestations directly against foes without entering a psychic duel, sacrificing a spell as a full-round action.",
        "level": 9
      }
    ]
  },
  "terror_weaver": {
    "class": "psychic",
    "name": "Terror Weaver",
    "name_en": "Terror Weaver",
    "name_es": "Tejedor de Terror",
    "source": "Pathfinder Player Companion: Blood of the Beast",
    "source_url": "https://www.d20pfsrd.com/alternative-rule-systems/paizo-rules-systems/occult-adventures/occult-classes/psychic/archetypes/paizo-llc-psychic-archetypes/terror-weaver-psychic-archetype/",
    "description_es": "Psíquico medio-orco que domina el miedo y los encantamientos para someter a sus víctimas y atormentarles incluso en sueños.",
    "description_en": "A half-orc psychic who masters fear and charm to dominate victims and torment them even in their dreams.",
    "features_removed": [
      "Detect Thoughts (2, replaced)",
      "Phrenic Amplification (replaced)",
      "Telepathic Bond (replaced)"
    ],
    "features_gained": [
      {
        "name": "Charm Person (Sp)",
        "name_en": "Charm Person (Sp)",
        "description_es": "A nivel 2, lanzar charm person 1/día como aptitud sortílega; puede gastar un espacio de 1+ para usarla otra vez.",
        "description_en": "At 2nd level, cast charm person 1/day as SLA; may expend a 1st+ spell slot to cast it again.",
        "level": 2
      },
      {
        "name": "Aura of Doom (Sp)",
        "name_en": "Aura of Doom (Sp)",
        "description_es": "A nivel 9, lanzar aura of doom 1/día; los enemigos pasan a aterrados a nivel 11 y a presa del pánico a nivel 19.",
        "description_en": "At 9th level, cast aura of doom 1/day; enemies become frightened at 11 and panicked at 19.",
        "level": 5
      },
      {
        "name": "Nightmare Affliction (Su)",
        "name_en": "Nightmare Affliction (Su)",
        "description_es": "A nivel 15, tras impactar con un conjuro mental gasta 2 puntos del depósito frénico para infligir nightmare al objetivo cuando duerma.",
        "description_en": "At 15th level, after a successful mind-affecting spell, spend 2 phrenic pool points to afflict the target with nightmare when it sleeps.",
        "level": 9
      }
    ]
  },
  "wildepath": {
    "class": "psychic",
    "name": "Wildepath",
    "name_en": "Wildepath",
    "name_es": "Senda Salvaje",
    "source": "Pathfinder Player Companion: Wilderness Origins",
    "source_url": "https://www.d20pfsrd.com/alternative-rule-systems/paizo-rules-systems/occult-adventures/occult-classes/psychic/archetypes/paizo-llc-psychic-archetypes/wildepath-psychic-archetype/",
    "description_es": "Psíquico cuya conciencia se extiende al mundo natural, capaz de afectar a animales y plantas y aprender conjuros druídicos.",
    "description_en": "A psychic whose mind reaches into the natural world, capable of affecting animals and plants and learning druid spells.",
    "features_removed": [
      "Phrenic Amplifications (1, 11)",
      "Telepathic Bond (9)",
      "Telepathy (17, altered)"
    ],
    "features_gained": [
      {
        "name": "Druidic Spells",
        "name_en": "Druidic Spells",
        "description_es": "Cada nuevo nivel de conjuro disponible, añade un conjuro de la lista de druida a la lista psíquica y a sus conjuros conocidos.",
        "description_en": "Each time she gains a new spell level, may add one druid spell of that level to the psychic list and to her spells known.",
        "level": 1
      },
      {
        "name": "Wilde Amplification",
        "name_en": "Wilde Amplification",
        "description_es": "A nivel 11, gastando 2 puntos frénicos un conjuro mental o dependiente del lenguaje afecta plantas y animales como si fueran humanoides que la entienden.",
        "description_en": "At 11th level, spend 2 phrenic points so a mind-affecting or language-dependent spell affects plants and animals as if humanoids who understand her.",
        "level": 1
      },
      {
        "name": "Commune with Nature (Sp)",
        "name_en": "Commune with Nature (Sp)",
        "description_es": "A nivel 9, lanza commune with nature 1/día como aptitud sortílega; puede gastar espacios de 5+ para usarla otra vez.",
        "description_en": "At 9th level, cast commune with nature 1/day as SLA; may expend 5th+ spell slots to cast again.",
        "level": 9
      },
      {
        "name": "Enhanced Telepathy",
        "name_en": "Enhanced Telepathy",
        "description_es": "A nivel 17, su telepatía también funciona con animales y plantas como si tuvieran lenguaje.",
        "description_en": "At 17th level, her telepathy also works with animals and plants as if they had a language.",
        "level": 11
      }
    ]
  },
  "esoteric_starseeker": {
    "class": "psychic",
    "name": "Esoteric Starseeker",
    "name_en": "Esoteric Starseeker",
    "name_es": "Buscador de Estrellas Esotérico",
    "source": "Pathfinder Player Companion: Wilderness Origins",
    "source_url": "https://www.d20pfsrd.com/alternative-rule-systems/paizo-rules-systems/occult-adventures/occult-classes/psychic/archetypes/paizo-llc-psychic-archetypes/esoteric-starseeker-psychic-archetype/",
    "description_es": "Psíquico que sintoniza con las constelaciones de la Caravana Cósmica, ganando espacios de conjuro adicionales a costa de debilitar una escuela de magia.",
    "description_en": "A psychic who attunes to constellations from the Cosmic Caravan, gaining bonus spell slots at the cost of weakening one school of magic.",
    "features_removed": [
      "Discipline Bonus Spells",
      "Phrenic Amplifications (1, 11)"
    ],
    "features_gained": [
      {
        "name": "Written in the Stars",
        "name_en": "Written in the Stars",
        "description_es": "Sintoniza con una constelación: gana un espacio adicional de constelación por cada nivel de conjuro que pueda lanzar y prepara conjuros asociados. A nivel 11 puede sintonizar con dos constelaciones a la vez.",
        "description_en": "Attune to a constellation: gain a bonus constellation spell slot for each spell level she can cast, preparing associated spells. At 11th level may attune to two constellations."
      },
      {
        "name": "Weakened School",
        "name_en": "Weakened School",
        "description_es": "Al sintonizar debe debilitar una escuela de magia: lanzar conjuros de esa escuela exige una acción de asalto completo adicional, como un metamagic.",
        "description_en": "When attuning she must weaken one school of magic: casting spells of that school requires an additional full-round action, like metamagic."
      },
      {
        "name": "Major Amplifications",
        "name_en": "Major Amplifications",
        "description_es": "A nivel 15 obtiene amplificaciones mayores en lugar de las amplificaciones frénicas estándar.",
        "description_en": "At 15th level gains major amplifications instead of standard phrenic amplifications.",
        "level": 11
      }
    ],
    "sub_options": {
      "schools": "Accede a disciplinas psíquicas astrológicas. La disciplina elegida modifica qué escuelas de hechizos son favorecidas. Solo puede elegir entre las 5 disciplinas esotéricas de los astros (Marte, Venus, Mercurio, etc.). / Accesses astrological psychic disciplines. Chosen discipline modifies which spell schools are favored. Can only select from the 5 esoteric astral disciplines (Mars, Venus, Mercury, etc.)."
    }
  },
  "trapper": {
    "class": "ranger",
    "name": "Trapper",
    "name_en": "Trapper",
    "name_es": "Trampero",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo-ranger-archetypes/trapper/",
    "description_es": "Explorador especializado en construir y desarmar trampas mágicas y mundanas, sacrificando sus conjuros divinos por dominio de la trampería.",
    "description_en": "A ranger specialized in building and disarming both magic and mundane traps, trading divine spells for trap mastery.",
    "features_removed": [
      "Spells"
    ],
    "features_gained": [
      {
        "name": "Trapfinding",
        "name_en": "Trapfinding",
        "description_es": "Añade ½ nivel (mín +1) a Percepción para localizar trampas y a Inutilizar Mecanismo; puede desarmar trampas mágicas.",
        "description_en": "Adds ½ level (min +1) to Perception to find traps and to Disable Device; can disarm magic traps.",
        "level": 1
      },
      {
        "name": "Class Skills",
        "name_en": "Class Skills",
        "description_es": "Añade Inutilizar Mecanismo a sus habilidades de clase.",
        "description_en": "Adds Disable Device to class skills.",
        "level": 1
      },
      {
        "name": "Ranger Trap (Su)",
        "name_en": "Ranger Trap (Su)",
        "description_es": "A nivel 5 aprende snare trap más una trampa de explorador, y otra cada 2 niveles. Usos al día = ½ nivel + Sabiduría.",
        "description_en": "At 5th level learns snare trap plus one ranger trap, and one more every 2 levels. Uses per day = ½ level + Wis.",
        "level": 5
      },
      {
        "name": "Launch Trap (Su)",
        "name_en": "Launch Trap (Su)",
        "description_es": "A nivel 10 puede acoplar trampas mágicas a proyectiles para colocarlas a distancia o atacar directamente con CD reducida.",
        "description_en": "At 10th level can attach magical traps to projectiles for ranged placement or direct attacks at reduced DC.",
        "level": 10
      }
    ],
    "class_skills_add": [
      "disable_device"
    ]
  },
  "falconer": {
    "class": "ranger",
    "name": "Falconer",
    "name_en": "Falconer",
    "name_es": "Halconero",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo-ranger-archetypes/falconer/",
    "description_es": "Explorador acompañado por un ave de presa entrenada, especializado en ataques en picado desde gran altura.",
    "description_en": "A ranger accompanied by a trained bird of prey, specialized in diving attacks from great heights.",
    "features_removed": [
      "Wild Empathy",
      "Combat Style Feat (6)"
    ],
    "features_gained": [
      {
        "name": "Feathered Companion (Ex)",
        "name_en": "Feathered Companion (Ex)",
        "description_es": "A nivel 1 obtiene un ave de presa como compañera animal con la mitad de PG normales, además del truco Roam o Distract gratis.",
        "description_en": "At 1st level gains a bird of prey companion with half normal HP, plus the Roam or Distract trick free."
      },
      {
        "name": "Hunter's Bond (Ex)",
        "name_en": "Hunter's Bond (Ex)",
        "description_es": "A nivel 4 su compañera emplumada gana puntos de golpe completos en lugar de la mitad.",
        "description_en": "At 4th level her feathered companion gains full hit points instead of half.",
        "level": 4
      },
      {
        "name": "Swoop for the Kill (Ex)",
        "name_en": "Swoop for the Kill (Ex)",
        "description_es": "A nivel 6 obtiene el truco Swooping Charge: el ave se lanza desde altura infligiendo 2d4 de daño y aturdiendo al objetivo.",
        "description_en": "At 6th level gains Swooping Charge trick: bird dives from above dealing 2d4 damage and staggering target.",
        "level": 6
      }
    ]
  },
  "freebooter": {
    "class": "ranger",
    "name": "Freebooter",
    "name_en": "Freebooter",
    "name_es": "Filibustero",
    "source": "Pathfinder Player Companion: Pirates of the Inner Sea",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo-ranger-archetypes/freebooter/",
    "description_es": "Explorador inspirador, sin enemigo predilecto, que designa un objetivo común para que su tripulación o aliados lo abatan en grupo.",
    "description_en": "An inspiring ranger with no favored enemy who designates a common target for his crew or allies to bring down together.",
    "features_removed": [
      "Favored Enemy",
      "Hunter's Bond",
      "Woodland Stride"
    ],
    "features_gained": [
      {
        "name": "Freebooter's Bane (Ex)",
        "name_en": "Freebooter's Bane (Ex)",
        "description_es": "A nivel 1, acción de movimiento para designar un enemigo: él y aliados a 30 pies obtienen +1 a ataque y daño contra el objetivo. El bono crece a niveles 5, 10, 15 y 20.",
        "description_en": "At 1st level, move action to designate an enemy: he and allies within 30 ft gain +1 attack and damage vs target. Bonus increases at 5, 10, 15, 20."
      },
      {
        "name": "Freebooter's Bond (Ex)",
        "name_en": "Freebooter's Bond (Ex)",
        "description_es": "A nivel 4, acción de movimiento: aliados a 30 pies ganan +2 adicional a ataque al flanquear con él o con aliados afectados.",
        "description_en": "At 4th level, move action: allies within 30 ft gain +2 additional attack when flanking with him or affected allies.",
        "level": 4
      },
      {
        "name": "Fast Swimmer (Ex)",
        "name_en": "Fast Swimmer (Ex)",
        "description_es": "A nivel 7, nada a la mitad de su velocidad como acción de movimiento o a velocidad completa como asalto completo, con +2 a Nadar.",
        "description_en": "At 7th level, swim half speed as move action or full speed as full-round action, with +2 to Swim.",
        "level": 7
      }
    ]
  },
  "wild_hunter": {
    "class": "ranger",
    "name": "Wild Hunter",
    "name_en": "Wild Hunter",
    "name_es": "Cazador Salvaje",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/ranger/archetypes/paizo-ranger-archetypes/wild-hunter/",
    "description_es": "Explorador que adopta la esencia de las bestias en lugar de odiar a un enemigo concreto, ganando aspectos animales y compartiéndolos con sus aliados.",
    "description_en": "A ranger who takes on beast aspects instead of hating one foe, gaining animal focuses and sharing them with allies.",
    "features_removed": [
      "Favored Enemy (all)",
      "Woodland Stride (7)",
      "Swift Tracker (7)"
    ],
    "features_gained": [
      {
        "name": "Animal Focus (Su)",
        "name_en": "Animal Focus (Su)",
        "description_es": "Adopta el aspecto de un animal ganando una bonificación o capacidad especial. Uso = 1 minuto al día por nivel, en incrementos de 1 minuto.",
        "description_en": "Takes on an animal aspect for a bonus or special ability. Usable for 1 min/day per level in 1-minute increments.",
        "level": 1
      },
      {
        "name": "Shared Focus (Su)",
        "name_en": "Shared Focus (Su)",
        "description_es": "A nivel 7 comparte su aspecto animal actual con una criatura vinculada (compañera animal automáticamente o aliado vinculado mediante acción rápida).",
        "description_en": "At 7th level shares his current animal focus with a bonded creature (animal companion automatically or bonded ally as swift action).",
        "level": 8
      }
    ]
  },
  "acrobat": {
    "class": "rogue",
    "name": "Acrobat",
    "name_en": "Acrobat",
    "name_es": "Acróbata",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/acrobat/",
    "description_es": "Pícaro especializado en agilidad y acrobacias, capaz de moverse sin penalizadores con armadura ligera y de repetir comprobaciones de movimiento.",
    "description_en": "A rogue specialized in agility and acrobatics, able to move unhindered in light armor and to retry movement checks.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Expert Acrobat (Ex)",
        "name_en": "Expert Acrobat (Ex)",
        "description_es": "Sin penalizadores de armadura a Acrobacias, Trepar, Volar, Juego de Manos y Sigilo con armadura ligera; sin armadura, +2 a Acrobacias y Volar.",
        "description_en": "No armor check penalty to Acrobatics, Climb, Fly, Sleight of Hand, Stealth in light armor; without armor, +2 to Acrobatics and Fly.",
        "level": 1
      },
      {
        "name": "Second Chance (Ex)",
        "name_en": "Second Chance (Ex)",
        "description_es": "A nivel 3, repite una comprobación de Acrobacias, Trepar o Volar con −5 al día, +1 uso cada 3 niveles.",
        "description_en": "At 3rd level, reroll an Acrobatics, Climb or Fly check at −5 once per day, +1 use every 3 levels.",
        "level": 3
      }
    ]
  },
  "burglar": {
    "class": "rogue",
    "name": "Burglar",
    "name_en": "Burglar",
    "name_es": "Ladrón de Casas",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/burglar/",
    "description_es": "Pícaro infiltrador especializado en desactivar trampas con cuidado y desviar la atención de los testigos de su sigilo.",
    "description_en": "A break-in specialist rogue focused on carefully disarming traps and distracting witnesses to her stealth.",
    "features_removed": [
      "Uncanny Dodge (4)",
      "Improved Uncanny Dodge (8)"
    ],
    "features_gained": [
      {
        "name": "Careful Disarm (Ex)",
        "name_en": "Careful Disarm (Ex)",
        "description_es": "A nivel 4, al desarmar una trampa con Inutilizar Mecanismo no la activa salvo que falle por 10 o más; si la activa gana doble bonificador de Trap Sense.",
        "description_en": "At 4th level, when disarming a trap she does not spring it unless she fails by 10+; if sprung, gains double Trap Sense bonus.",
        "level": 4
      },
      {
        "name": "Distraction (Ex)",
        "name_en": "Distraction (Ex)",
        "description_es": "A nivel 8, al ser detectada usando Sigilo realiza una comprobación de Engañar opuesta a Averiguar Intenciones del observador para que ignore la detección.",
        "description_en": "At 8th level, when detected via Stealth makes a Bluff check opposed by the observer's Sense Motive to dismiss the detection.",
        "level": 8
      }
    ]
  },
  "investigator_rogue": {
    "class": "rogue",
    "name": "Investigator",
    "name_en": "Investigator",
    "name_es": "Investigador",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/investigator/",
    "description_es": "Pícaro especializado en recopilar información y descubrir mentiras durante una sola comprobación de Diplomacia.",
    "description_en": "A rogue focused on gathering information and detecting falsehoods within a single Diplomacy check.",
    "features_removed": [
      "Trapfinding"
    ],
    "features_gained": [
      {
        "name": "Follow Up (Ex)",
        "name_en": "Follow Up (Ex)",
        "description_es": "Lanza dos veces cualquier comprobación de Diplomacia para reunir información y obtiene la información de ambos resultados; detecta discrepancias falsas.",
        "description_en": "Roll twice on any Diplomacy check to gather information and receive info from both results; detects false discrepancies."
      }
    ]
  },
  "poisoner_rogue": {
    "class": "rogue",
    "name": "Poisoner",
    "name_en": "Poisoner",
    "name_es": "Envenenador",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/poisoner/",
    "description_es": "Pícaro especialista en venenos: nunca se envenena por accidente y puede modificar el método de aplicación de cualquier veneno.",
    "description_en": "A rogue specialized in poisons: never accidentally poisons herself and can modify any poison's delivery method.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Poison Use",
        "name_en": "Poison Use",
        "description_es": "A nivel 1, no se envenena accidentalmente al aplicar veneno a un arma.",
        "description_en": "At 1st level, never accidentally poisons herself when applying poison to a weapon.",
        "level": 1
      },
      {
        "name": "Master Poisoner (Ex)",
        "name_en": "Master Poisoner (Ex)",
        "description_es": "A nivel 3, modifica el tipo de aplicación de un veneno (contacto, ingerido, inhalado o inyección) con 1 hora de Artesanía (alquimia), y +½ nivel a comprobaciones de Artesanía con venenos.",
        "description_en": "At 3rd level, modify a poison's delivery (contact, ingested, inhaled, injury) with 1 hour of Craft (alchemy), and +½ level to poison Craft checks.",
        "level": 3
      }
    ]
  },
  "swashbuckler_rogue": {
    "class": "rogue",
    "name": "Swashbuckler",
    "name_en": "Swashbuckler",
    "name_es": "Espadachín",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/swashbuckler/",
    "description_es": "Pícaro de estilo intrépido y elegante con destreza en armas marciales y resistencia mental al miedo.",
    "description_en": "A daring, dashing rogue with martial weapon training and mental resilience against fear.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Martial Training (Ex)",
        "name_en": "Martial Training (Ex)",
        "description_es": "A nivel 1 obtiene competencia con un arma marcial elegida y puede tomar el talento Combat Trick dos veces.",
        "description_en": "At 1st level gains proficiency with one martial weapon and may take the Combat Trick rogue talent twice.",
        "level": 1
      },
      {
        "name": "Daring (Ex)",
        "name_en": "Daring (Ex)",
        "description_es": "A nivel 3, +1 moral a Acrobacias y a salvaciones contra miedo, +1 cada 3 niveles después.",
        "description_en": "At 3rd level, +1 morale to Acrobatics and saves vs fear, +1 every 3 levels thereafter.",
        "level": 3
      }
    ]
  },
  "yojimbo": {
    "class": "samurai",
    "name": "Yojimbo",
    "name_en": "Yojimbo",
    "name_es": "Yojimbo",
    "source": "Armor Master's Handbook",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Samurai%20Yojimbo",
    "description_es": "Guardaespaldas leal de Minkai que protege a un solo señor designándolo como pupilo, sacrificando montura y maestría con el arco montado por especialización en armadura y defensa de aliados.",
    "description_en": "Loyal Minkai bodyguard who protects a single master by designating them as ward, trading mount and mounted archer for armor mastery and ally defense.",
    "features_removed": [
      "Mount (1st)",
      "Weapon Expertise (3rd)",
      "Mounted Archer (4th)"
    ],
    "features_gained": [
      {
        "name": "Defensa Resuelta (Ex)",
        "name_en": "Resolute Defense (Ex)",
        "description_es": "Designa un aliado adyacente como pupilo durante un desafío; aplica las habilidades de resolución al pupilo en vez de a sí mismo.",
        "description_en": "Designate an adjacent ally as ward during challenge; apply resolve abilities to the ward instead of self.",
        "level": 1
      },
      {
        "name": "Maestría con Armadura (Ex)",
        "name_en": "Armor Expertise (Ex)",
        "description_es": "Elige un tipo de armadura; gana entrenamiento con armadura usando el nivel de samurái como nivel de guerrero.",
        "description_en": "Choose one armor type; gain armor training counting samurai level as fighter level.",
        "level": 3
      },
      {
        "name": "Interceptar (Ex)",
        "name_en": "Intercept (Ex)",
        "description_es": "Gana Guardaespaldas como dote de bonificación; aumenta el bono a la CA de Ayudar a otro en +1.",
        "description_en": "Gain Bodyguard feat as bonus; aid another AC bonus increases by +1.",
        "level": 4
      }
    ]
  },
  "warrior_poet": {
    "class": "samurai",
    "name": "Warrior Poet",
    "name_en": "Warrior Poet",
    "name_es": "Poeta Guerrero",
    "source": "Heroes from the Fringe",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Samurai%20Warrior%20Poet",
    "description_es": "Combatiente artístico que renuncia a armadura, montura y estandarte por gracia carismática, finura con la katana y movilidad de bailarín en combate.",
    "description_en": "Artful combatant who trades armor, mount, and banner for charismatic grace, katana finesse, and dancer-like battlefield mobility.",
    "features_removed": [
      "Medium/Heavy Armor & Shield Proficiency (1st)",
      "Mount (1st)",
      "Weapon Expertise (3rd)",
      "Banner (5th)",
      "Greater Banner (14th)",
      "Mounted Archer (4th)",
      "Demanding Challenge",
      "Bonus Combat Feats (6th, 12th, 18th)"
    ],
    "features_gained": [
      {
        "name": "Gracia del Bailarín (Ex)",
        "name_en": "Dancer's Grace (Ex)",
        "description_es": "Sin armadura ni escudo, suma su mod. de Carisma (máx. nivel) a la CA; se pierde si está desprevenido.",
        "description_en": "When unarmored and shieldless, adds Charisma modifier (max samurai level) to AC; lost if flat-footed.",
        "level": 1
      },
      {
        "name": "Floritura (Ex)",
        "name_en": "Flourish (Ex)",
        "description_es": "Selecciona maniobras de entre ocho opciones a niveles 1, 3, 5, 9, 13, 17, 20 (Vital Strike, velocidad, finta mejorada, etc.).",
        "description_en": "Selects from eight combat maneuvers at levels 1, 3, 5, 9, 13, 17, 20 (Vital Strike, speed, improved feint, etc.).",
        "level": 1
      },
      {
        "name": "Guerrero Grácil (Ex)",
        "name_en": "Graceful Warrior (Ex)",
        "description_es": "Gana Finura con armas y la aplica a glaives, katanas y naginatas.",
        "description_en": "Gains Weapon Finesse and applies it to glaives, katanas, and naginatas.",
        "level": 3
      },
      {
        "name": "Desafío del Hostigador (Ex)",
        "name_en": "Skirmisher's Challenge (Ex)",
        "description_es": "Suma su nivel al daño solo en el primer ataque exitoso por turno contra el objetivo desafiado.",
        "description_en": "Adds samurai level to damage only on the first successful attack per round against the challenged target.",
        "level": 1
      },
      {
        "name": "Golpe Grácil (Ex)",
        "name_en": "Graceful Strike (Ex)",
        "description_es": "Al usar Finura con armas en cuerpo a cuerpo, suma la mitad de su nivel al daño (4º nivel).",
        "description_en": "When using Weapon Finesse for melee attacks, adds half samurai level to damage (4th).",
        "level": 6
      },
      {
        "name": "Danza de Batalla (Ex)",
        "name_en": "Battle Dance (Ex)",
        "description_es": "Gana Ataque en Salto, mejorado y mayor a niveles 6, 12 y 18 sin requisitos previos.",
        "description_en": "Gains Spring Attack (6th), Improved Spring Attack (12th), and Greater Spring Attack (18th) as bonus feats without prerequisites.",
        "level": 5
      }
    ]
  },
  "ironbound_sword": {
    "class": "samurai",
    "name": "Ironbound Sword",
    "name_en": "Ironbound Sword",
    "name_es": "Espada Atada con Hierro",
    "source": "Blood of the Ancients",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Samurai%20Ironbound%20Sword",
    "description_es": "Samurái compasivo que prefiere subyugar antes que matar; renuncia al estandarte por golpes no letales letalmente eficaces.",
    "description_en": "Merciful samurai who prefers to subdue rather than kill; trades banner abilities for devastating nonlethal techniques.",
    "features_removed": [
      "Weapon Expertise (3rd)",
      "Banner (5th)",
      "Greater Banner (14th)"
    ],
    "features_gained": [
      {
        "name": "Combatiente Misericordioso (Ex)",
        "name_en": "Merciful Combatant (Ex)",
        "description_es": "Inflige daño no letal sin la penalización de –4 estándar; +2 a maniobras de combate tras impactos no letales.",
        "description_en": "Deals nonlethal damage without the –4 penalty; +2 on combat maneuvers after successful nonlethal hits."
      },
      {
        "name": "Nocaut Subyugante (Ex)",
        "name_en": "Subduing Knockout (Ex)",
        "description_es": "Una vez al día (más usos a niveles 10 y 15), un ataque que fuerza una salvación de Fortaleza o inconsciencia 1d6 asaltos.",
        "description_en": "Once daily (more at 10th and 15th), an attack forces a Fortitude save or unconsciousness for 1d6 rounds.",
        "level": 3
      },
      {
        "name": "Inversión de Hoja (Ex)",
        "name_en": "Blade Reversal (Ex)",
        "description_es": "En defensa total, gasta un AdO para contrarrestar un ataque cuerpo a cuerpo y desarmar al atacante.",
        "description_en": "While in full defense, spends an AoO to counter incoming melee attacks and free-disarm the attacker.",
        "level": 5
      }
    ]
  },
  "brawling_blademaster": {
    "class": "samurai",
    "name": "Brawling Blademaster",
    "name_en": "Brawling Blademaster",
    "name_es": "Maestro de la Hoja Pugilística",
    "source": "Martial Arts Handbook",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Samurai%20Brawling%20Blademaster",
    "description_es": "Combina golpes desarmados y de espada con igual destreza; renuncia a la montura y al estandarte por estilo dual y agilidad.",
    "description_en": "Mixes unarmed strikes and bladework equally; trades mount and banner for dual-wielding style and agility.",
    "features_removed": [
      "Mount (1st)",
      "Weapon Expertise (3rd)",
      "Mounted Archer (4th)",
      "Banner (5th)",
      "Greater Banner (14th)"
    ],
    "features_gained": [
      {
        "name": "Mano Vacía (Ex)",
        "name_en": "Empty Hand (Ex)",
        "description_es": "Recibe Golpe Desarmado Mejorado de bonificación; nivel de samurái cuenta como nivel de monje para daño desarmado.",
        "description_en": "Gains Improved Unarmed Strike as bonus feat; samurai level counts as monk level for unarmed damage.",
        "level": 1
      },
      {
        "name": "Ágil (Ex)",
        "name_en": "Nimble (Ex)",
        "description_es": "Al 2º nivel, gana la habilidad de clase ágil del pistolero usando su nivel como nivel de pistolero.",
        "description_en": "At 2nd level, gains the gunslinger's nimble class feature using samurai level as gunslinger level.",
        "level": 2
      },
      {
        "name": "Maestría Dual (Ex)",
        "name_en": "Dual Expertise (Ex)",
        "description_es": "Recibe Combate con Dos Armas como dote de bonificación al 3er nivel sin requisitos de Destreza.",
        "description_en": "Gains Two-Weapon Fighting at 3rd level regardless of Dexterity prerequisites.",
        "level": 3
      },
      {
        "name": "Flujo Armonioso (Ex)",
        "name_en": "Harmonious Flow (Ex)",
        "description_es": "Elimina la penalización de –2 al usar arma a una mano y golpe desarmado contra el desafiado (4º).",
        "description_en": "Eliminates the –2 penalty when using a one-handed weapon plus unarmed strike against challenge target (4th).",
        "level": 4
      },
      {
        "name": "Claridad Perfecta (Ex)",
        "name_en": "Perfect Clarity (Ex)",
        "description_es": "Al 5º nivel, deja de sufrir la penalización de CA durante el desafío.",
        "description_en": "At 5th level, no longer takes AC penalty during challenge.",
        "level": 5
      },
      {
        "name": "Foco Superior (Ex)",
        "name_en": "Superior Focus (Ex)",
        "description_es": "Al 14º nivel, +2 a tiradas de salvación durante el desafío.",
        "description_en": "At 14th level, +2 bonus on saving throws during challenge.",
        "level": 14
      }
    ]
  },
  "ward_speaker": {
    "class": "samurai",
    "name": "Ward Speaker",
    "name_en": "Ward Speaker",
    "name_es": "Hablador de Talismanes",
    "source": "Pathfinder Player Companion: Disciple's Doctrine",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Samurai%20Ward%20Speaker",
    "description_es": "Samurái que extrae poder de rituales en santuarios kami, sustituyendo Determinación por bendiciones diarias de cinco kami distintos.",
    "description_en": "Samurai who draws power from kami shrine rituals, replacing Resolve with daily fortunes from five different kami types.",
    "features_removed": [
      "Resolve (1st)",
      "Greater Resolve (8th)",
      "True Resolve (20th)",
      "Honorable Stand (11th, altered)"
    ],
    "features_gained": [
      {
        "name": "Propiciación (Ex, Su, Sp)",
        "name_en": "Propitiation (Ex, Su, Sp)",
        "description_es": "Ritual diario en un santuario kami que concede fortunas (1/día +1 cada 3 niveles, máx. 7); cada uso permite una nueva tirada o un beneficio de uno de cinco kami.",
        "description_en": "Daily ritual at kami shrines granting fortunes (1/day +1 per 3 levels, max 7); each use grants a reroll or specific kami benefit.",
        "level": 1
      },
      {
        "name": "Postura Resiliente (Ex)",
        "name_en": "Resilient Stand (Ex)",
        "description_es": "Al 11º nivel, gasta usos de propiciación en lugar de determinación para repetir salvaciones durante una posición de honor.",
        "description_en": "At 11th level, expends propitiation uses instead of resolve to reroll saving throws during honorable stands.",
        "level": 8
      }
    ]
  },
  "animist": {
    "class": "shaman",
    "name": "Animist",
    "name_en": "Animist",
    "name_es": "Animista",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/shaman/archetypes/paizo-shaman-archetypes/animist/",
    "description_es": "Chamán que se especializa en tratar con espíritus de toda clase, sustituyendo magia espiritual y embrujos por exorcismos y dominación de espíritus.",
    "description_en": "Shaman who specializes in dealing with spirits of all kinds, replacing spirit magic and hexes with exorcism and spirit domination.",
    "features_removed": [
      "Spirit Magic (2nd+)",
      "Hex (2nd, 8th, 10th, 12th, 18th)",
      "Manifestation (20th)"
    ],
    "features_gained": [
      {
        "name": "Magia Espiritual del Animista (Su)",
        "name_en": "Animist Spirit Magic (Su)",
        "description_es": "Sustituye su magia espiritual por una lista temática (de hablar con animales a aprisionar alma).",
        "description_en": "Replaces standard spirit magic with thematically aligned spells from speak with animals (1st) through soul bind (9th).",
        "level": 2
      },
      {
        "name": "Resolver Condición (Su)",
        "name_en": "Wrangle Condition (Su)",
        "description_es": "Tirada de Diplomacia (DC 15-30) para persuadir a espíritus de condiciones a abandonar al objetivo.",
        "description_en": "Diplomacy check (DC 15-30) to persuade condition spirits to depart targets.",
        "level": 2
      },
      {
        "name": "Exorcismo (Su)",
        "name_en": "Exorcism (Su)",
        "description_es": "Acción completa de toque para terminar posesión o dominación (DC 10 + 1/2 nivel + Sab).",
        "description_en": "Full-round touch action to end possession or domination effects (DC 10 + half level + Wis).",
        "level": 8
      },
      {
        "name": "Dominar Espíritu (Sp)",
        "name_en": "Dominate Spirit (Sp)",
        "description_es": "Lanza tarro mágico o poseer objeto 1/día usando al familiar como vasija; usos extra a niveles 14 y 18.",
        "description_en": "Cast magic jar or possess object once daily using familiar as vessel; more uses at 14th, 18th.",
        "level": 10
      },
      {
        "name": "Contacto con el Mundo Espiritual (Su)",
        "name_en": "Contact with Spirit World (Su)",
        "description_es": "Sus armas funcionan como toque etéreo para interactuar con entidades incorpóreas (rondas/día = nivel).",
        "description_en": "Weapons function as ghost touch to interact with incorporeal entities (rounds/day equal to level).",
        "level": 12
      },
      {
        "name": "Etéreo (Sp)",
        "name_en": "Etherealness (Sp)",
        "description_es": "Lanza eterealidad 1/día al 18º nivel.",
        "description_en": "Casts etherealness once daily at 18th level.",
        "level": 18
      }
    ],
    "sub_options": {
      "spirits": "En vez de los espíritus de chamán estándar, vincula espíritus de la naturaleza (espíritus de lugares: bosques, montañas, ríos). Los espíritus animistas tienen poderes distintos a los estándar. No puede acceder a los 6 espíritus estándar del chamán. / Instead of standard shaman spirits, bonds with nature spirits (place spirits: forests, mountains, rivers). Animist spirits have different powers than standard. Cannot access the 6 standard shaman spirits.",
      "hexes": "Solo puede elegir hexes de la lista de hexes de naturaleza vinculados a su espíritu de terreno. No puede acceder a hexes genéricos como desgracia o ojo maligno. / Can only choose hexes from the nature hex list linked to its terrain spirit. Cannot access generic hexes like misfortune or evil eye."
    }
  },
  "possessed_shaman": {
    "class": "shaman",
    "name": "Possessed Shaman",
    "name_en": "Possessed Shaman",
    "name_es": "Chamán Poseído",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/shaman/archetypes/paizo-shaman-archetypes/possessed-shaman/",
    "description_es": "Chamán cuyo cuerpo aloja múltiples espíritus que le otorgan habilidades; sacrifica magia espiritual y un embrujo a cambio de pericias compartidas.",
    "description_en": "Shaman whose body hosts multiple spirits granting skills; trades spirit magic and a hex for shared skill expertise.",
    "features_removed": [
      "Spirit Magic (1st)",
      "Hex (2nd)",
      "Wandering Hex (6th)"
    ],
    "features_gained": [
      {
        "name": "Habilidad Compartida (Su)",
        "name_en": "Shared Skill (Su)",
        "description_es": "Elige dos habilidades de la misma característica; las trata con rangos = nivel y usa Sabiduría como mod.",
        "description_en": "Selects two skills of the same ability; treats them as having ranks equal to shaman level using Wisdom modifier.",
        "level": 1
      },
      {
        "name": "Vasija Atestada (Su)",
        "name_en": "Crowded Vessel (Su)",
        "description_es": "Al fallar una salvación de encantamiento o compulsión, los espíritus internos otorgan una nueva tirada al final del turno.",
        "description_en": "On failed charm/compulsion saves, inner spirits grant a second save at end of turn.",
        "level": 2
      },
      {
        "name": "Habilidades Errantes (Su)",
        "name_en": "Wandering Skills (Su)",
        "description_es": "Al elegir su espíritu errante diario, elige una habilidad con rangos = nivel y mod. de Sab; cambia con el espíritu (6º).",
        "description_en": "Upon selecting daily wandering spirit, picks one skill with ranks equal to level and Wis mod; changes with the spirit (6th).",
        "level": 6
      }
    ],
    "sub_options": {
      "spirits": "Un espíritu toma posesión permanente del chamán. Este espíritu poseído no puede ser cambiado, pero es más poderoso que un espíritu elegido normalmente. El chamán pierde acceso al espíritu errante. / A spirit takes permanent possession of the shaman. This possessing spirit cannot be changed but is more powerful than a normally chosen spirit. The shaman loses access to the wandering spirit.",
      "hexes": "Solo puede elegir hexes asociados con el espíritu que lo posee. Hexes fuera de la lista del espíritu poseedor no están disponibles. / Can only choose hexes associated with the possessing spirit. Hexes outside the possessing spirit's list are unavailable."
    }
  },
  "speaker_for_the_past": {
    "class": "shaman",
    "name": "Speaker for the Past",
    "name_en": "Speaker for the Past",
    "name_es": "Portavoz del Pasado",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/shaman/archetypes/paizo-shaman-archetypes/speaker-for-the-past/",
    "description_es": "Chamán historiador que renuncia al familiar y al espíritu errante para acceder a misterios y revelaciones de los oráculos de ancestros y tiempo.",
    "description_en": "Historian shaman who trades familiar and wandering spirit for access to oracle ancestor and time mysteries' revelations.",
    "features_removed": [
      "Spirit Animal/Familiar (1st)",
      "Wandering Spirit (4th)",
      "Wandering Hex (6th, 12th, 14th)",
      "Manifestation (20th)"
    ],
    "features_gained": [
      {
        "name": "Misterios del Pasado (Ex)",
        "name_en": "Mysteries of the Past (Ex)",
        "description_es": "Gana Lingüística, Conoc. (historia), local, Percepción y UMD como habilidades de clase; añade hechizos de ancestro y tiempo a su lista. Prepara hechizos meditando 1 hora.",
        "description_en": "Gains Linguistics, Knowledge (history, local), Perception, UMD as class skills; adds ancestor and time mystery spells to spell list. Prepares spells via 1 hour of contemplation.",
        "level": 1
      },
      {
        "name": "Revelaciones del Pasado (Su)",
        "name_en": "Revelations of the Past (Su)",
        "description_es": "A niveles 4, 6, 12, 14 y 20 elige una revelación de los misterios de ancestro o tiempo, usando Sabiduría como característica.",
        "description_en": "At 4th, 6th, 12th, 14th, and 20th levels selects a revelation from ancestor or time mysteries, using Wisdom as ability.",
        "level": 4
      }
    ],
    "class_skills_add": [
      "knowledge_local",
      "perception",
      "use_magic_device"
    ],
    "sub_options": {
      "spirits": "Canaliza espíritus de civilizaciones extintas (Azlanti, Thassilonianos, Jistka, etc.). Accede a espíritus históricos únicos en vez de los 6 espíritus estándar de chamán. Cada espíritu histórico tiene poderes únicos relacionados con esa civilización. / Channels spirits of extinct civilizations (Azlanti, Thassilonian, Jistka, etc.). Accesses unique historical spirits instead of the 6 standard shaman spirits. Each historical spirit has unique powers related to its civilization.",
      "hexes": "Los hexes disponibles incluyen hexes arqueológicos y de recuperación del pasado (visiones del pasado, hablar con muertos, etc.). / Available hexes include archaeological and past-recovery hexes (visions of the past, speak with dead, etc.)."
    }
  },
  "witch_doctor": {
    "class": "shaman",
    "name": "Witch Doctor",
    "name_en": "Witch Doctor",
    "name_es": "Hechicero Curandero",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/shaman/archetypes/paizo-shaman-archetypes/witch-doctor/",
    "description_es": "Chamán no-malvado que canaliza energía positiva y desbarata maldiciones, sacrificando varios embrujos por canalización clerical y contrahechizos.",
    "description_en": "Non-evil shaman who channels positive energy and undoes curses, trading several hexes for cleric-style channel and counterspelling.",
    "features_removed": [
      "Hex (4th)",
      "Hex (8th)",
      "Hex (10th)",
      "Hex (12th)"
    ],
    "features_gained": [
      {
        "name": "Canalizar Energía (Su)",
        "name_en": "Channel Energy (Su)",
        "description_es": "Como un clérigo, canaliza energía positiva (nivel efectivo = nivel –3) 3 + Car veces al día (4º).",
        "description_en": "As a cleric, channels positive energy (effective level = shaman level –3) 3 + Cha times/day (4th).",
        "level": 4
      },
      {
        "name": "Contramaldición (Su)",
        "name_en": "Counter Curse (Su)",
        "description_es": "Sacrifica un hechizo espiritual preparado de 3.º+ para lanzar disipar magia o eliminar maldición espontáneamente (8º).",
        "description_en": "Sacrifices a prepared 3rd+ spirit magic spell to spontaneously cast dispel magic or remove curse (8th).",
        "level": 8
      },
      {
        "name": "Embrujo Contrahechizo (Su)",
        "name_en": "Countering Hex (Su)",
        "description_es": "Acción preparada para contrarrestar como disipar magia (1d20 + nivel vs DC 11 + NL); no contra el mismo lanzador en 24 h (10º).",
        "description_en": "Readied counterspell using dispel magic (1d20 + level vs DC 11 + CL); not vs same caster within 24h (10th).",
        "level": 10
      }
    ],
    "sub_options": {
      "spirits": "Combina hechizos de chamán con magia médica tribal. Vincula espíritus curativos y de enfermedad en vez de los estándar. / Combines shaman spells with tribal medical magic. Bonds with healing and disease spirits instead of standard spirits.",
      "hexes": "Los hexes disponibles se centran en curación y enfermedad. Puede elegir hexes de: curar heridas, antídoto, purificar comida, cura de enfermedad. Pierde acceso a hexes de daño o maldición. / Available hexes focus on healing and disease. Can choose: cure wounds, antidote, purify food, cure disease. Loses access to damage or curse hexes."
    }
  },
  "visionary": {
    "class": "shaman",
    "name": "Visionary",
    "name_en": "Visionary",
    "name_es": "Visionario",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/shaman/archetypes/paizo-shaman-archetypes/visionary/",
    "description_es": "Chamán especializado en adivinación; intercambia espíritu y embrujo errantes por hechizos de visión y respuestas casi infalibles.",
    "description_en": "Divination-focused shaman who trades wandering spirit and hex for vision spells and near-infallible answers.",
    "features_removed": [
      "Wandering Spirit (4th)",
      "Wandering Hex (6th)",
      "Greater Wandering Spirit (12th)",
      "True Wandering Spirit (20th)"
    ],
    "features_gained": [
      {
        "name": "Adivino Diligente (Ex)",
        "name_en": "Bonus Feat (Ex)",
        "description_es": "Recibe la dote Adivino Diligente como bonificación al 4º nivel sin requisitos.",
        "description_en": "Gains Diviner's Delving as a bonus feat at 4th level regardless of prerequisites.",
        "level": 4
      },
      {
        "name": "Discernir Pericia Mágica (Ex)",
        "name_en": "Discern Magical Expertise (Ex)",
        "description_es": "Tras 2 rondas de detectar magia o alineamiento, identifica linajes, dominios, embrujos, escuelas o misterios.",
        "description_en": "After 2 rounds of detect magic or alignment-detection, identifies bloodlines, domains, hexes, schools, or mysteries.",
        "level": 6
      },
      {
        "name": "Magia Espiritual de Visión (Su)",
        "name_en": "Vision Spirit Magic (Su)",
        "description_es": "Añade nueve hechizos de adivinación (1.º-9.º) a su magia espiritual.",
        "description_en": "Adds nine divination spells (1st-9th) to spirit magic list.",
        "level": 1
      },
      {
        "name": "Adivinación Mejorada (Su)",
        "name_en": "Improved Divination (Su)",
        "description_es": "Augurio y adivinación dan respuestas correctas el 90%; prepara escudriñar como hechizo de 4.º (6º).",
        "description_en": "Augury and divination give 90% accurate answers; prepares scrying as 4th-level spell (6th).",
        "level": 12
      },
      {
        "name": "Espíritu Errante (Su)",
        "name_en": "Wandering Spirit (Su)",
        "description_es": "Al 12º nivel, vincula con un espíritu adicional cuya magia se suma a la del visión y del espíritu original.",
        "description_en": "At 12th level, bonds with an additional spirit whose magic adds to vision and original spirit magic.",
        "level": 20
      }
    ],
    "sub_options": {
      "spirits": "Accede a espíritus de oráculo, chamán y bruja simultáneamente. Puede vincular un espíritu de cualquiera de estas tres fuentes cada día. / Accesses oracle, shaman, and witch spirits simultaneously. Can bond with a spirit from any of these three sources each day.",
      "hexes": "Puede elegir hexes de la lista completa de bruja además de los hexes de chamán. Tiene la mayor selección de hexes de cualquier arquetipo de chamán. / Can choose hexes from the full witch hex list in addition to shaman hexes. Has the widest hex selection of any shaman archetype.",
      "domains": "Puede acceder a dominios divinos de oráculo (misterios) como si fueran espíritus de chamán. / Can access oracle divine domains (mysteries) as if they were shaman spirits.",
      "bloodlines": "Puede acceder a poderes de linaje de hechicero como si fueran características de espíritu. / Can access sorcerer bloodline powers as if they were spirit features.",
      "schools": "Puede acceder a escuelas arcanas de mago como si fueran poderes de espíritu menores. / Can access wizard arcane schools as if they were minor spirit powers."
    }
  },
  "oozemorph": {
    "class": "shifter",
    "name": "Oozemorph",
    "name_en": "Oozemorph",
    "name_es": "Mutante Limo",
    "source": "Ultimate Wilderness",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/shifter/archetypes/oozemorph-shifter-archetype/",
    "description_es": "Cambiaformas cuyo cuerpo natural es un cieno protoplásmico; cambia formas animales por habilidades de limo (compresión, escurrimiento y RD).",
    "description_en": "Shifter whose true form is a protoplasmic ooze; trades animal aspects for ooze abilities (compression, fluid body, and DR).",
    "features_removed": [
      "Chimeric Form (all)",
      "Greater Chimeric Form (all)",
      "Wild Shape (4th)",
      "Shifter Aspect (1st+)",
      "Shifter Claws (1st)",
      "Defensive Instinct",
      "Woodland Stride"
    ],
    "features_gained": [
      {
        "name": "Compresión (Ex)",
        "name_en": "Compression (Ex)",
        "description_es": "Se exprime por espacios estrechos según las reglas universales de monstruos.",
        "description_en": "Squeezes through tight spaces per universal monster rules.",
        "level": 1
      },
      {
        "name": "Cuerpo Fluídico (Su)",
        "name_en": "Fluidic Body (Su)",
        "description_es": "Su forma base es un cieno: tipo limo, inmune a críticos y flanqueo; usa una transformación humanoide a voluntad (alterar el yo).",
        "description_en": "Base form is protoplasmic ooze: ooze type, immune to crits and flanking; humanoid transform at-will (alter self).",
        "level": 1
      },
      {
        "name": "Armas Mórficas (Ex)",
        "name_en": "Morphic Weaponry (Ex)",
        "description_es": "Crea armas naturales (1d6, tipo variable); ataques adicionales a niveles 6 y 15.",
        "description_en": "Creates natural weapons (1d6, variable type); extra attacks at 6th and 15th levels.",
        "level": 1
      },
      {
        "name": "Empatía con Limos (Ex)",
        "name_en": "Ooze Empathy (Ex)",
        "description_es": "Empatía salvaje modificada que solo afecta a limos de baja Inteligencia.",
        "description_en": "Modified wild empathy that only influences low-Int oozes.",
        "level": 1
      },
      {
        "name": "Reducción de Daño (Ex)",
        "name_en": "Damage Reduction (Ex)",
        "description_es": "RD 4/cortante al 2º, +2 cada 4 niveles (máx. 14/cortante al 20º).",
        "description_en": "DR 4/slashing at 2nd, +2 every 4 levels (max DR 14/slashing at 20th).",
        "level": 2
      },
      {
        "name": "Limo Adherente (Ex)",
        "name_en": "Clinging Ooze (Ex)",
        "description_es": "Velocidad de trepar 10 pies en su forma natural (4º).",
        "description_en": "10-foot climb speed in natural form (4th).",
        "level": 4
      }
    ]
  },
  "weretouched": {
    "class": "shifter",
    "name": "Weretouched",
    "name_en": "Weretouched",
    "name_es": "Tocado por Licántropo",
    "source": "Ultimate Wilderness",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/shifter/archetypes/weretouched-shifter-archetype/",
    "description_es": "Cambiaformas con sangre licantrópica; restringido a un único aspecto animal a cambio de RD/plata y forma híbrida.",
    "description_en": "Shifter with lycanthropic blood; restricted to a single animal aspect in exchange for DR/silver and hybrid form.",
    "features_removed": [
      "Shifter Aspect (1st, restricted)",
      "Wild Empathy (1st, restricted)",
      "Wild Shape (4th, restricted)"
    ],
    "features_gained": [
      {
        "name": "Aspecto de Licántropo (Su)",
        "name_en": "Lycanthrope Aspect (Su)",
        "description_es": "Solo un aspecto animal; al 5º gana RD = 1/2 nivel hasta 10/plata al 20º e inmunidad a la maldición.",
        "description_en": "Single animal aspect; at 5th gains DR = half level up to 10/silver at 20th and immunity to lycanthropy curse.",
        "level": 1
      },
      {
        "name": "Empatía Licantrópica (Ex)",
        "name_en": "Lycanthropic Empathy (Ex)",
        "description_es": "Empatía salvaje con +4, pero solo con su tipo animal elegido.",
        "description_en": "Wild empathy with +4 bonus, only with chosen animal type.",
        "level": 1
      },
      {
        "name": "Forma Salvaje Licantrópica (Su)",
        "name_en": "Lycanthropic Wild Shape (Su)",
        "description_es": "Forma salvaje limitada al animal elegido; permite forma híbrida con +2 Fue, +2 CA natural y todos los ataques naturales.",
        "description_en": "Wild shape limited to chosen animal; hybrid form grants +2 Str, +2 natural armor, and all major-form natural attacks.",
        "level": 4
      }
    ]
  },
  "elementalist_shifter": {
    "class": "shifter",
    "name": "Elementalist Shifter",
    "name_en": "Elementalist Shifter",
    "name_es": "Cambiaformas Elementalista",
    "source": "Ultimate Wilderness",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/shifter/archetypes/elementalist-shifter-shifter-archetype/",
    "description_es": "Cambiaformas vinculado a los elementos; cambia formas animales por aspectos elementales y la capacidad de combinarlos.",
    "description_en": "Shifter bound to the elements; trades animal forms for elemental aspects and the ability to combine them.",
    "features_removed": [
      "Shifter Aspect (1st)",
      "Shifter Claws (1st)",
      "Wild Empathy",
      "Wild Shape (4th)",
      "Chimeric Aspect (9th)",
      "Greater Chimeric Aspect (15th)"
    ],
    "features_gained": [
      {
        "name": "Aspecto Elemental (Su)",
        "name_en": "Elemental Aspect (Su)",
        "description_es": "Elige un aspecto elemental (Aire, Tierra, Fuego o Agua) al 1º; aspectos extra a niveles 5, 10 y 15.",
        "description_en": "Chooses one elemental aspect (Air, Earth, Fire, or Water) at 1st; more at 5th, 10th, and 15th.",
        "level": 1
      },
      {
        "name": "Habla Elemental (Su)",
        "name_en": "Elemental Speech (Su)",
        "description_es": "Lenguas con elementales coincidentes mientras está en forma elemental.",
        "description_en": "Tongues with matching elementals while in elemental form.",
        "level": 1
      },
      {
        "name": "Golpe Elemental (Su)",
        "name_en": "Elemental Strike (Su)",
        "description_es": "Acción rápida: imbuye su ataque cuerpo a cuerpo con 1d6 daño elemental (+1d6 cada 4, máx. 6d6).",
        "description_en": "Swift action: charges melee attack with 1d6 elemental damage (+1d6 per 4 levels, max 6d6).",
        "level": 4
      },
      {
        "name": "Forma Elemental (Su)",
        "name_en": "Elemental Form (Su)",
        "description_es": "Forma salvaje funciona como cuerpo elemental I-IV según su aspecto.",
        "description_en": "Wild Shape functions as elemental body spells based on chosen aspect.",
        "level": 9
      },
      {
        "name": "Omnielementalista (Su)",
        "name_en": "Omnielementalist (Su)",
        "description_es": "Combina dos aspectos elementales simultáneamente (9º) ganando habilidades sinérgicas como tormenta de cenizas o vapor.",
        "description_en": "Combines two elemental aspects simultaneously (9th), gaining synergies like ash storm or steam cloud.",
        "level": 9
      }
    ]
  },
  "feyform_shifter": {
    "class": "shifter",
    "name": "Feyform Shifter",
    "name_en": "Feyform Shifter",
    "name_es": "Cambiaformas de Forma Feérica",
    "source": "Pathfinder Player Companion: Wilderness Origins",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/shifter/archetypes/feyform-shifter-shifter-archetype/",
    "description_es": "Cambiaformas con sangre feérica; sustituye sus aspectos animales por una forma feérica con RD/hierro frío y resistencia al encantamiento.",
    "description_en": "Shifter with fey blood; replaces animal aspects with a fey form granting DR/cold iron and enchantment resistance.",
    "features_removed": [
      "Shifter Aspect Improvements (1st, 5th, 10th, 15th, 20th)",
      "Wild Shape (4th)",
      "Chimeric Aspect (9th)",
      "Greater Chimeric Aspect (14th)",
      "Final Aspect (20th)"
    ],
    "features_gained": [
      {
        "name": "Aspecto Feérico (Su)",
        "name_en": "Fey Aspect (Su)",
        "description_es": "Forma feérica como acción rápida: visión con poca luz, RD 1/hierro frío y ocultación; mejora a niveles 5, 10, 15, 20.",
        "description_en": "Swift-action fey form: low-light vision, DR 1/cold iron, and concealment; improves at 5, 10, 15, 20."
      },
      {
        "name": "Forma Feérica (Su)",
        "name_en": "Fey Shape (Su)",
        "description_es": "Usa forma salvaje para convertirse en una criatura feérica mediante forma feérica I-IV (4º).",
        "description_en": "Uses wild shape to become a fey creature via fey form I-IV spells (4th).",
        "level": 4
      },
      {
        "name": "Cambiaformas Feérico (Su)",
        "name_en": "Fey Shifter (Su)",
        "description_es": "Gana un segundo aspecto (animal) y combina aspecto feérico con un aspecto animal (9º).",
        "description_en": "Gains second (animal) aspect and combines fey aspect with one animal aspect (9th).",
        "level": 9
      },
      {
        "name": "Cambiaformas Feérico Mayor (Su)",
        "name_en": "Greater Fey Shifter (Su)",
        "description_es": "Tercer aspecto; combina el aspecto feérico con dos aspectos animales (14º).",
        "description_en": "Third aspect; combines fey aspect with two animal aspects (14th).",
        "level": 14
      },
      {
        "name": "Aspecto Final (Su)",
        "name_en": "Final Aspect (Su)",
        "description_es": "Cuarto aspecto; usa todas las formas menores y mayores con aspecto feérico a voluntad (20º).",
        "description_en": "Fourth aspect; uses all minor and major forms with fey aspect at will (20th).",
        "level": 20
      }
    ]
  },
  "battle_scion": {
    "class": "skald",
    "name": "Battle Scion",
    "name_en": "Battle Scion",
    "name_es": "Vástago de Batalla",
    "source": "Ultimate Intrigue",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/skald/archetypes/paizo-skald-archetypes/battle-scion-skald-archetype/",
    "description_es": "Skald de cuna noble que canjea poderes de furia y conocimiento bárdico amplio por dotes de combate/equipo y la capacidad de imponer geas a aliados.",
    "description_en": "Noble-born skald who trades rage powers and broad bardic knowledge for combat/teamwork feats and the ability to impose geas-like quests on allies.",
    "features_removed": [
      "Bardic Knowledge (1st, restricted)",
      "Rage Power (3rd+)",
      "Dirge of Doom (10th)",
      "Song of the Fallen (10th)",
      "Master Skald (20th)"
    ],
    "features_gained": [
      {
        "name": "Presencia Cortés (Ex)",
        "name_en": "Courtly Presence (Ex)",
        "description_es": "+½ nivel a Intimidar; ventaja en duelos verbales; conoc. bárdico limitado a Geografía, Historia, Local y Nobleza.",
        "description_en": "+½ level to Intimidate; bonus in verbal duels; bardic knowledge limited to Geography, History, Local, Nobility.",
        "level": 1
      },
      {
        "name": "Pericia de Batalla (Ex)",
        "name_en": "Battle Prowess (Ex)",
        "description_es": "Al ganar poderes de furia, puede tomar dotes de combate o de equipo; puede otorgarlas a aliados con furia inspirada (2 rondas/asalto).",
        "description_en": "When gaining rage powers, may select combat/teamwork feats; can grant them to inspired-rage allies (2 rounds/round).",
        "level": 3
      },
      {
        "name": "Canto de Misión (Su)",
        "name_en": "Song of Questing (Su)",
        "description_es": "Gasta 4 rondas de canto airado para vincular a objetivos voluntarios a una misión noble (geas); múltiples al 14º.",
        "description_en": "Spends 4 raging-song rounds to bind willing targets to a noble quest (geas-like); multiple at 14th.",
        "level": 10
      },
      {
        "name": "Vástago Que Vuelve (Su)",
        "name_en": "Once and Future Scion (Su)",
        "description_es": "Al morir entra en sueño cataléptico 3 días y vuelve a la vida como levantar muertos al 20º.",
        "description_en": "Upon death, enters deathlike sleep for 3 days then returns as raise dead at 20th.",
        "level": 20
      }
    ]
  },
  "spell_warrior": {
    "class": "skald",
    "name": "Spell Warrior",
    "name_en": "Spell Warrior",
    "name_es": "Guerrero del Conjuro",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/skald/archetypes/paizo-skald-archetypes/spell-warrior/",
    "description_es": "Skald especializado en contrahechizos y en infundir las armas aliadas con poder mágico, sustituyendo Furia Inspirada por Canto del Arma.",
    "description_en": "Skald specialized in counterspelling and enchanting allied weapons, replacing Inspired Rage with Weapon Song.",
    "features_removed": [
      "Scribe Scroll (1st)",
      "Inspired Rage (1st)",
      "Spell Kenning (5th)",
      "Dirge of Doom (10th)",
      "Master Skald (20th)"
    ],
    "features_gained": [
      {
        "name": "Contrahechizo Mejorado (Ex)",
        "name_en": "Improved Counterspell (Ex)",
        "description_es": "Recibe Contrahechizo Mejorado como dote bonificada al 1º.",
        "description_en": "Gains Improved Counterspell as bonus feat at 1st.",
        "level": 1
      },
      {
        "name": "Canto del Arma (Su)",
        "name_en": "Weapon Song (Su)",
        "description_es": "Otorga +1 de mejora a las armas aliadas (+1 cada 5 niveles, máx. +5); puede gastar puntos por propiedades especiales.",
        "description_en": "Grants allies' weapons +1 enhancement (+1 per 5 levels, max +5); may spend bonus on special abilities.",
        "level": 1
      },
      {
        "name": "Contrahechizo Mayor (Su)",
        "name_en": "Greater Counterspell (Su)",
        "description_es": "Al 5º gasta 2 espacios de cualquier escuela; al 11º basta uno; al 17º gana Parar Conjuro.",
        "description_en": "At 5th spends two spell slots regardless of school; one slot at 11th; gains Parry Spell at 17th.",
        "level": 5
      },
      {
        "name": "Canto de Manipulación Arcana (Su)",
        "name_en": "Song of Arcane Manipulation (Su)",
        "description_es": "Al 10º contrahechiza como acción inmediata mientras canta, gastando rondas iguales al nivel del hechizo.",
        "description_en": "At 10th counterspells as immediate action while singing, costing rounds equal to spell's level.",
        "level": 10
      },
      {
        "name": "Sabotaje de Conjuro (Su)",
        "name_en": "Spell Tamper (Su)",
        "description_es": "Al 20º, los contrahechizos exitosos infligen 1d6 por nivel del conjuro al lanzador (mitad si Voluntad).",
        "description_en": "At 20th, successful counterspells deal 1d6 per spell level to opponent (half on Will save).",
        "level": 20
      }
    ],
    "sub_options": {
      "schools": "Puede vincular una escuela de magia a su rabia de inspiración. Mientras canta, los aliados con esa escuela activa ganan bonificadores en los CD de hechizos. Escuelas disponibles: Abjuración, Conjuración, Evocación, Transmutación (no escuelas sutiles). / Can link a magic school to his raging song. While singing, allies with that school active gain bonuses to spell DCs. Available schools: Abjuration, Conjuration, Evocation, Transmutation (not subtle schools)."
    }
  },
  "herald_of_the_horn": {
    "class": "skald",
    "name": "Herald of the Horn",
    "name_en": "Herald of the Horn",
    "name_es": "Heraldo del Cuerno",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/skald/archetypes/paizo-skald-archetypes/herald-of-the-horn/",
    "description_es": "Skald cuya magia se canaliza a través de un cuerno mágico; sacrifica Escribir Pergaminos y usos de Lore Conjural por trompetazos sónicos.",
    "description_en": "Skald whose magic flows through a magical horn; trades Scribe Scroll and spell-kenning uses for sonic horn blasts.",
    "features_removed": [
      "Scribe Scroll (1st)",
      "First Spell Kenning use (5th)",
      "Lore Master (7th)",
      "Second & Third Spell Kenning uses (11th, 17th)"
    ],
    "features_gained": [
      {
        "name": "Vínculo Arcano (Ex)",
        "name_en": "Arcane Bond (Ex)",
        "description_es": "Vincula con un cuerno como un hechicero; debe sostenerlo para lanzar sus hechizos de skald.",
        "description_en": "Bonds with a horn like a sorcerer; must hold it to cast skald spells."
      },
      {
        "name": "Réplica Estimulante (Su)",
        "name_en": "Rousing Retort (Su)",
        "description_es": "Al iniciar canto airado, gasta 4 rondas para que los aliados a 60 pies repitan salvaciones contra encantamiento o miedo con +2.",
        "description_en": "When starting raging song, expends 4 rounds to grant allies within 60 ft a new save vs enchantment/fear with +2.",
        "level": 5
      },
      {
        "name": "Llamada del Cuerno (Su)",
        "name_en": "Horn Call (Su)",
        "description_es": "Hechizos sónicos lanzados por el cuerno tienen +1 a la DC (+1 más a niveles 13 y 19).",
        "description_en": "Sonic descriptor spells through the horn gain +1 DC (+1 more at 13th and 19th).",
        "level": 7
      },
      {
        "name": "Estallido Demoledor (Su)",
        "name_en": "Crumbling Blast (Su)",
        "description_es": "Una vez al día crea una onda de choque como cuerno de detonación (DC 10 + ½ nivel + Car); 2/día como mayor al 17º.",
        "description_en": "Once daily creates shock wave as horn of blasting (DC 10 + ½ level + Cha); 2/day as greater horn at 17th.",
        "level": 11
      }
    ]
  },
  "fated_champion": {
    "class": "skald",
    "name": "Fated Champion",
    "name_en": "Fated Champion",
    "name_es": "Campeón del Destino",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/skald/archetypes/paizo-skald-archetypes/fated-champion/",
    "description_es": "Skald vidente que cambia versado y verso de fatalidad por presciencia, intuición en iniciativa y rerolls en momentos críticos.",
    "description_en": "Seer-skald who trades well-versed and dirge of doom for foresight, initiative insight, and clutch rerolls.",
    "features_removed": [
      "Well-Versed (2nd)",
      "Dirge of Doom (10th)",
      "Master Skald (20th)"
    ],
    "features_gained": [
      {
        "name": "Vigilante del Tejido (Ex)",
        "name_en": "Watcher of the Weave (Ex)",
        "description_es": "Bono de intuición a iniciativa = ½ nivel de skald, percibiendo eventos venideros (2º).",
        "description_en": "Insight bonus to initiative equal to ½ skald level, perceiving impending events (2nd)."
      },
      {
        "name": "Vidente Lejano (Su)",
        "name_en": "Far Seer (Su)",
        "description_es": "Modifica Lore Conjural: hechizos de adivinación cuestan 1 nivel menos y los de daño 1 nivel más (5º).",
        "description_en": "Modifies spell kenning: divination spells cost one level less, damage spells one level more (5th).",
        "level": 2
      },
      {
        "name": "Escudo de la Presciencia (Su)",
        "name_en": "Shield of Foresight (Su)",
        "description_es": "Mientras canta, inmune a miedo y los aliados ganan +5 a salvaciones de miedo (10º).",
        "description_en": "While using raging song, immune to fear and allies gain +5 vs fear (10th).",
        "level": 10
      },
      {
        "name": "Hoy No (Su)",
        "name_en": "Not This Day (Su)",
        "description_es": "Acción inmediata: gasta 10 rondas de canto para forzar una repetición de salvación o ataque enemigo (20º).",
        "description_en": "Immediate action: expends 10 raging-song rounds to force reroll of a save or enemy attack (20th).",
        "level": 20
      }
    ]
  },
  "urban_skald": {
    "class": "skald",
    "name": "Urban Skald",
    "name_en": "Urban Skald",
    "name_es": "Skald Urbano",
    "source": "Pathfinder Player Companion: Heroes of the Street",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/skald/archetypes/paizo-skald-archetypes/urban-skald-skald-archetype/",
    "description_es": "Skald de calles que sustituye armadura media y canto de marcha por una furia controlada y mofas humillantes a sus enemigos.",
    "description_en": "Street skald who trades medium armor and song of marching for controlled rage and humiliating mockery of foes.",
    "features_removed": [
      "Medium Armor Proficiency",
      "Song of Marching (3rd)",
      "Damage Reduction (3rd)",
      "Dirge of Doom (10th)"
    ],
    "features_gained": [
      {
        "name": "Furia Inspirada Controlada (Su)",
        "name_en": "Controlled Inspired Rage (Su)",
        "description_es": "Otorga +2 moral (escala a +4 al 8º y +6 al 16º) a Fue, Des o Con sin penalización de CA.",
        "description_en": "Grants +2 morale (scaling to +4 at 8th, +6 at 16th) to Str, Dex, or Con without AC penalty.",
        "level": 1
      },
      {
        "name": "Mofa Enfurecedora (Su)",
        "name_en": "Infuriating Mockery (Su)",
        "description_es": "Objetivo a 30 pies con salvación o –2 CA/ataque, sin habilidades mentales y necesidad de concentración (3º).",
        "description_en": "Target within 30 ft saves or suffers –2 AC/attacks, can't use mental skills, needs concentration to cast (3rd).",
        "level": 3
      },
      {
        "name": "Difamación Humillante (Su)",
        "name_en": "Humiliating Defamation (Su)",
        "description_es": "El objetivo no puede usar bonos de moral, dotes de equipo, ni ser ayudado; salva contra todo hechizo (10º).",
        "description_en": "Primary target loses morale bonuses, teamwork feats, treats no creatures as allies; saves vs all spells (10th).",
        "level": 10
      },
      {
        "name": "Detrás de la Multitud (Ex)",
        "name_en": "Back of the Crowd (Ex)",
        "description_es": "+1 esquiva a CA junto a 2+ aliados (escala a +2 al 9º, +3 al 15º).",
        "description_en": "+1 dodge AC adjacent to 2+ allies (scales to +2 at 9th, +3 at 15th).",
        "level": 3
      }
    ]
  },
  "stygian_slayer": {
    "class": "slayer",
    "name": "Stygian Slayer",
    "name_en": "Stygian Slayer",
    "name_es": "Asesino Estigio",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/slayer/archetypes/paizo-slayer-archetypes/stygian-slayer/",
    "description_es": "Asesino entrenado en magia de sombras; sacrifica armaduras pesadas y talentos por invisibilidad innata, uso arcano de pergaminos y forma de niebla sombría.",
    "description_en": "Slayer trained in shadow magic; trades heavy armor and talents for innate invisibility, arcane scroll use, and shadowy mist form.",
    "features_removed": [
      "Medium/Heavy Armor & Shield Proficiency",
      "Slayer Talent (4th)",
      "Stalker (7th)",
      "Advanced Slayer Talent (10th)"
    ],
    "features_gained": [
      {
        "name": "Invisibilidad (Sp)",
        "name_en": "Invisibility (Sp)",
        "description_es": "Lanza invisibilidad 1/día, +1 cada 4 niveles (4º).",
        "description_en": "Casts invisibility 1/day, +1 per 4 levels (4th).",
        "level": 4
      },
      {
        "name": "Uso de Conjuros",
        "name_en": "Spell Use",
        "description_es": "Activa objetos arcanos como lanzador de conjuros con acceso a oscuridad, ocultar mente, modificar memoria y otros (7º).",
        "description_en": "Activates arcane spell-completion items with access to darkness, nondetection, modify memory, and others (7th).",
        "level": 1
      },
      {
        "name": "Forma de Niebla Sombría (Sp)",
        "name_en": "Shadowy Mist Form (Sp)",
        "description_es": "Se convierte en niebla oscura (forma gaseosa + oscuridad) min/día = nivel (10º).",
        "description_en": "Becomes inky mist (gaseous form + fog cloud) for minutes/day equal to level (10th).",
        "level": 10
      }
    ]
  },
  "vanguard": {
    "class": "slayer",
    "name": "Vanguard",
    "name_en": "Vanguard",
    "name_es": "Vanguardia",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/slayer/archetypes/paizo-slayer-archetypes/vanguard/",
    "description_es": "Asesino comandante de batalla que renuncia a Rastreo y Acechador por dotes de equipo, iniciativa y la capacidad de compartir su objetivo estudiado.",
    "description_en": "Battlefield commander slayer who trades Track and Stalker for teamwork feats, initiative, and shared studied target.",
    "features_removed": [
      "Track (1st)",
      "Slayer Talent (2nd)",
      "Slayer Talent (4th)",
      "Stalker (7th)"
    ],
    "features_gained": [
      {
        "name": "Vigía (Ex)",
        "name_en": "Lookout (Ex)",
        "description_es": "Suma ½ nivel (mín. 1) a tiradas de iniciativa.",
        "description_en": "Adds ½ level (min 1) to initiative checks.",
        "level": 1
      },
      {
        "name": "Táctico (Ex)",
        "name_en": "Tactician (Ex)",
        "description_es": "Recibe una dote de equipo; comparte una con aliados a 30 pies durante 3+ rondas 1/día.",
        "description_en": "Gains bonus teamwork feat; shares one with allies within 30 ft for 3+ rounds 1/day.",
        "level": 2
      },
      {
        "name": "Vínculo de Vanguardia (Ex)",
        "name_en": "Vanguard's Bond (Ex)",
        "description_es": "Comparte la mitad del bono de objetivo estudiado con aliados cercanos durante rondas = mod. Int.",
        "description_en": "Shares half studied-target bonus with nearby allies for rounds equal to Int modifier.",
        "level": 4
      },
      {
        "name": "Siempre Listo (Ex)",
        "name_en": "Ever Ready (Ex)",
        "description_es": "Nunca está desprevenido; siempre actúa en asaltos de sorpresa (aunque desprevenido hasta actuar).",
        "description_en": "Never considered unaware; always acts in surprise rounds (flat-footed until acting).",
        "level": 7
      }
    ]
  },
  "ankous_shadow": {
    "class": "slayer",
    "name": "Ankou's Shadow",
    "name_en": "Ankou's Shadow",
    "name_es": "Sombra de Ankou",
    "source": "Pathfinder Player Companion: Legacy of the First World",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/slayer/archetypes/paizo-slayer-archetypes/ankous-shadow-slayer-archetype/",
    "description_es": "Asesino que crea duplicados sombríos de sí mismo; cambia objetivo estudiado y acechador por imágenes sombrías que flanquean y atacan.",
    "description_en": "Slayer who creates shadowy duplicates; trades studied target and stalker for shadow images that flank and attack.",
    "features_removed": [
      "Studied Target (1st, replaced)",
      "Stalker (7th)",
      "Quarry & Improved Quarry (altered)"
    ],
    "features_gained": [
      {
        "name": "Doble Sombrío (Sp)",
        "name_en": "Shadow Double (Sp)",
        "description_es": "Crea duplicados como imágenes en espejo; al 5º dos que se mueven aparte y flanquean; al 10º tres que pueden atacar; al 15º cuatro.",
        "description_en": "Creates duplicates like mirror images; at 5th two move separately and flank; at 10th three can attack; at 15th four.",
        "level": 1
      },
      {
        "name": "Visión de Ankou (Sp)",
        "name_en": "Ankou's Vision (Sp)",
        "description_es": "Acción rápida para ver invisibilidad min/nivel/día (7º).",
        "description_en": "Swift-action see invisibility for 1 min/level/day (7th).",
        "level": 7
      },
      {
        "name": "Presa Sombría (Ex)",
        "name_en": "Shadow Prey (Ex)",
        "description_es": "Designa una presa si tiene un doble sombrío activo, sin requerir objetivo estudiado.",
        "description_en": "Quarry designation requires a shadow double present but doesn't require the target be studied.",
        "level": 7
      },
      {
        "name": "Sombras Liberadas (Su)",
        "name_en": "Unfettered Shadows (Su)",
        "description_es": "Al 20º, todos sus dobles actúan independientemente 1 minuto como acción estándar.",
        "description_en": "At 20th, all shadow doubles act independently for 1 minute as a standard action.",
        "level": 20
      }
    ]
  },
  "deliverer": {
    "class": "slayer",
    "name": "Deliverer",
    "name_en": "Deliverer",
    "name_es": "Liberador",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/slayer/archetypes/paizo-slayer-archetypes/deliverer/",
    "description_es": "Asesino divino que persigue a los enemigos del alineamiento de su deidad; cambia talentos por celo determinado y daño divino contra opuestos.",
    "description_en": "Divine slayer who hunts foes opposed to their deity; trades talents for determined zeal and divine damage against opposites.",
    "features_removed": [
      "Slayer Talent (2nd)",
      "Slayer Talent (6th)",
      "Advanced Slayer Talent (10th)"
    ],
    "features_gained": [
      {
        "name": "Competencia con Arma Favorita",
        "name_en": "Favored Weapon Proficiency",
        "description_es": "Gana competencia con el arma favorita de su deidad además de las del asesino.",
        "description_en": "Gains proficiency with deity's favored weapon in addition to standard slayer proficiencies.",
        "level": 1
      },
      {
        "name": "Celo Determinado (Ex)",
        "name_en": "Determined Zeal (Ex)",
        "description_es": "Contra enemigos cuyo alineamiento difiere ≥2 pasos: +2 a Voluntad y beneficio de Diehard hasta el siguiente turno (2º).",
        "description_en": "Vs foes whose alignment differs ≥2 steps: +2 vs their Will effects and Diehard until end of next turn (2nd).",
        "level": 2
      },
      {
        "name": "Verdadero Creyente (Ex)",
        "name_en": "True Believer (Ex)",
        "description_es": "Contra enemigos opuestos no queda atontado por PG negativos ni pierde 1 PG por asalto (6º).",
        "description_en": "Vs alignment-opposed foes isn't staggered at negative HP nor loses 1 HP per round (6th).",
        "level": 6
      },
      {
        "name": "Anatema Divino (Ex)",
        "name_en": "Divine Anathema (Ex)",
        "description_es": "Acción libre: declara un objetivo estudiado opuesto como anatema; sus ataques infligen +2d6 daño divino (10º).",
        "description_en": "Free action: declares an alignment-opposed studied target as anathema; attacks deal +2d6 divine damage (10th).",
        "level": 10
      }
    ]
  },
  "cleaner": {
    "class": "slayer",
    "name": "Cleaner",
    "name_en": "Cleaner",
    "name_es": "Limpiador",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/hybrid-classes/slayer/archetypes/paizo-slayer-archetypes/cleaner/",
    "description_es": "Asesino especializado en encubrir crímenes y borrar pruebas; sacrifica Rastreo y Acechador por engaño, alteración de la escena y misdirection a voluntad.",
    "description_en": "Slayer specialized in covering up crimes and erasing evidence; trades Track and Stalker for deceit, scene-altering, and at-will misdirection.",
    "features_removed": [
      "Track (1st)",
      "Slayer Talent (4th)",
      "Stalker (7th)"
    ],
    "features_gained": [
      {
        "name": "Engañoso (Ex)",
        "name_en": "Deceitful (Ex)",
        "description_es": "Recibe la dote Engañoso de bonificación al 1º.",
        "description_en": "Gains Deceitful bonus feat at 1st.",
        "level": 1
      },
      {
        "name": "Sin Dejar Rastro (Ex)",
        "name_en": "Without a Trace (Ex)",
        "description_es": "Tras estudiar una zona (1 min por cuadrado de 10 pies), usa Disfraz o Sigilo para alterar/ocultar pruebas con +4 (4º).",
        "description_en": "After studying a location (1 min per 10-ft square), uses Disguise or Stealth to alter/conceal evidence with +4 (4th).",
        "level": 4
      },
      {
        "name": "Despistar (Sp)",
        "name_en": "Mislead (Sp)",
        "description_es": "Al 7º lanza desorientación sobre sí mismo a voluntad, hasta disipar como acción estándar.",
        "description_en": "At 7th casts misdirection on himself at will, lasts until dismissed as standard action.",
        "level": 7
      }
    ]
  },
  "tattooed_sorcerer": {
    "class": "sorcerer",
    "name": "Tattooed Sorcerer",
    "name_en": "Tattooed Sorcerer",
    "name_es": "Hechicero Tatuado",
    "source": "Inner Sea Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Sorcerer%20Tattooed%20Sorcerer",
    "description_es": "Hechicero varisiano cuyos tatuajes mágicos sirven como conducto de magia y de su familiar; gana un familiar tatuaje a cambio de poderes de linaje.",
    "description_en": "Varisian sorcerer whose magical tattoos serve as both spell focus and familiar vessel, trading bloodline powers for tattoo magic and a familiar.",
    "features_removed": [
      "1st-level Bloodline Power",
      "Eschew Materials (1st)",
      "7th-level Bloodline Feat",
      "9th-level Bloodline Power"
    ],
    "features_gained": [
      {
        "name": "Familiar Tattoo (Su)",
        "name_en": "Familiar Tattoo (Su)",
        "description_es": "Obtiene un familiar como con vínculo arcano de mago; el familiar puede transformarse en un tatuaje sobre su piel.",
        "description_en": "Gains a familiar as a wizard's arcane bond; the familiar can transform into a tattoo carried on her flesh.",
        "level": 1
      },
      {
        "name": "Varisian Tattoo (Ex)",
        "name_en": "Varisian Tattoo (Ex)",
        "description_es": "A nivel 1, obtiene el dote Tatuaje Varisiano sin requisitos, eligiendo una escuela de magia mejorada.",
        "description_en": "At 1st level gains Varisian Tattoo as a bonus feat ignoring prerequisites, picking an enhanced school.",
        "level": 1
      },
      {
        "name": "Bloodline Tattoos (Ex)",
        "name_en": "Bloodline Tattoos (Ex)",
        "description_es": "Sus conjuros de linaje se manifiestan como tatuajes y reciben el bono de Tatuaje Varisiano sin importar la escuela.",
        "description_en": "Bloodline spells manifest as tattoos and gain the Varisian Tattoo bonus regardless of school.",
        "level": 1
      },
      {
        "name": "Create Spell Tattoo (Su)",
        "name_en": "Create Spell Tattoo (Su)",
        "description_es": "Desde nivel 7, crea un tatuaje de conjuro al día como acción estándar; 2/día a nivel 11 y 3/día a nivel 15.",
        "description_en": "From 7th level, creates one spell tattoo per day as a standard action; twice at 11th and three times at 15th.",
        "level": 9
      },
      {
        "name": "Enhanced Varisian Tattoo (Su)",
        "name_en": "Enhanced Varisian Tattoo (Su)",
        "description_es": "A nivel 9, convierte un conjuro conocido en una habilidad mágica usable 1/día con +2 al nivel de lanzador.",
        "description_en": "At 9th level, converts one known spell into a spell-like ability usable once per day at +2 caster level.",
        "level": 7
      }
    ],
    "sub_options": {
      "bloodlines": "El linaje del hechicero está tatuado en su cuerpo. Puede cambiar entre su linaje principal y un linaje secundario (menor) una vez al día. El linaje tatuado es inmutable y define sus poderes base. / Bloodline is tattooed on the sorcerer's body. Can switch between the primary and a secondary (lesser) bloodline once per day. The tattooed bloodline is immutable and defines base powers.",
      "schools": "Los tatuajes del hechicero pueden incluir sellos arcanos de una escuela específica. Si elige un sello de escuela, sus hechizos de esa escuela tienen +1 CD. / The sorcerer's tattoos can include arcane seals of a specific school. If a school seal is chosen, spells of that school gain +1 DC."
    }
  },
  "seeker_sorcerer": {
    "class": "sorcerer",
    "name": "Seeker",
    "name_en": "Seeker",
    "name_es": "Buscador",
    "source": "Pathfinder Society Field Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Sorcerer%20Seeker",
    "description_es": "Hechicero erudito de la Sociedad Pathfinder, especializado en trampas y secretos mágicos antiguos a costa de poderes menores de linaje.",
    "description_en": "Pathfinder Society scholar specializing in traps and ancient magical secrets at the cost of minor bloodline powers.",
    "features_removed": [
      "Eschew Materials (1st)",
      "3rd-level Bloodline Power",
      "15th-level Bloodline Power"
    ],
    "features_gained": [
      {
        "name": "Tinkering (Ex)",
        "name_en": "Tinkering (Ex)",
        "description_es": "Inutilizar Mecanismo es habilidad de clase; añade la mitad del nivel a Percepción para localizar trampas y a Inutilizar Mecanismo, pudiendo usarlo en trampas mágicas.",
        "description_en": "Disable Device is a class skill; adds half class level to Perception to find traps and to Disable Device, including magical traps.",
        "level": 1
      },
      {
        "name": "Seeker Lore (Ex)",
        "name_en": "Seeker Lore (Ex)",
        "description_es": "A nivel 3, +4 a tiradas de concentración, de nivel de lanzador contra RC y a Conocimiento (arcano) y Saber Mágico relativos a su linaje.",
        "description_en": "At 3rd level, +4 to concentration, caster level checks vs SR, and Knowledge (arcana)/Spellcraft tied to bloodline spells.",
        "level": 1
      },
      {
        "name": "Seeker Magic (Su)",
        "name_en": "Seeker Magic (Su)",
        "description_es": "A nivel 15, reduce en 1 el coste de nivel de los dotes metamagia aplicados a sus conjuros de linaje.",
        "description_en": "At 15th level, reduces metamagic level adjustment by 1 when applied to bloodline bonus spells.",
        "level": 3
      }
    ],
    "class_skills_add": [
      "disable_device"
    ],
    "sub_options": {
      "bloodlines": "Tiene el linaje Arcano, pero accede a poderes de linaje de investigación en vez de los estándar. Puede usar el golpe arcano con armas ligeras y de mano. / Has the Arcane bloodline, but accesses investigation bloodline powers instead of standard. Can use arcane strike with light and one-handed weapons."
    }
  },
  "eldritch_scrapper": {
    "class": "sorcerer",
    "name": "Eldritch Scrapper",
    "name_en": "Eldritch Scrapper",
    "name_es": "Pendenciero Sobrenatural",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Sorcerer%20Eldritch%20Scrapper",
    "description_es": "Hechicero callejero que aprende a luchar improvisando dotes de combate como un peleador, sacrificando varios poderes de linaje.",
    "description_en": "Street-fighting sorcerer who improvises combat feats like a brawler, sacrificing several bloodline powers.",
    "features_removed": [
      "1st-level Bloodline Power",
      "9th-level Bloodline Power",
      "15th-level Bloodline Power"
    ],
    "features_gained": [
      {
        "name": "Martial Flexibility (Ex)",
        "name_en": "Martial Flexibility (Ex)",
        "description_es": "Gana la flexibilidad marcial del peleador usando su nivel de hechicero; Golpe Arcano y Lanzar en Combate cuentan como dotes elegibles.",
        "description_en": "Gains the brawler's martial flexibility using sorcerer level; Arcane Strike and Combat Casting are valid choices.",
        "level": 1
      },
      {
        "name": "Improved Martial Flexibility (Ex)",
        "name_en": "Improved Martial Flexibility (Ex)",
        "description_es": "A nivel 9 puede activar dos dotes simultáneos (uno como acción de movimiento o ambos como acción estándar).",
        "description_en": "At 9th level she may activate two feats at once (one as a move action or both as a standard action).",
        "level": 9
      },
      {
        "name": "Greater Martial Flexibility (Ex)",
        "name_en": "Greater Martial Flexibility (Ex)",
        "description_es": "A nivel 15 puede activar tres dotes a la vez (uno como acción rápida, dos de movimiento, o los tres como estándar).",
        "description_en": "At 15th level she may activate three feats at once (one swift, two move, or all three as a standard action).",
        "level": 15
      },
      {
        "name": "Bloodline Weapons",
        "name_en": "Bloodline Weapons",
        "description_es": "A nivel 3, si su poder inicial de linaje otorgaría ataques naturales (mordiscos o garras), puede sustituir el poder de nivel 3 por él.",
        "description_en": "At 3rd level, if her initial bloodline power would grant natural attacks she may substitute it for her 3rd-level bloodline power.",
        "level": 3
      }
    ],
    "sub_options": {
      "bloodlines": "Mantiene su linaje estándar pero en vez de algunos poderes de linaje gana poderes de combate físico potenciados mágicamente (ataque sin armas, golpes de linaje). / Keeps standard bloodline but instead of some bloodline powers gains magically enhanced physical combat powers (unarmed attacks, bloodline strikes)."
    }
  },
  "sorcerer_of_sleep": {
    "class": "sorcerer",
    "name": "Sorcerer of Sleep",
    "name_en": "Sorcerer of Sleep",
    "name_es": "Hechicera del Sueño",
    "source": "Black Markets",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Sorcerer%20Sorcerer%20of%20Sleep",
    "description_es": "Hechicera vinculada al pesh y al opio que canaliza su magia mediante el toque del soñador; pierde Eschew Materials y arcano del linaje.",
    "description_en": "Sorcerer bound to pesh and opium that channels magic through a dreamer's touch; loses Eschew Materials and bloodline arcana.",
    "features_removed": [
      "Bloodline Arcana",
      "Eschew Materials",
      "1st-level Bloodline Power"
    ],
    "features_gained": [
      {
        "name": "Pesh Expert",
        "name_en": "Pesh Expert",
        "description_es": "Suma la mitad de su nivel a Tasar, Artesanía (alquimia), Curar y Conocimiento (local) para asuntos de drogas.",
        "description_en": "Adds half class level to Appraise, Craft (alchemy), Heal and Knowledge (local) checks involving pesh and other drugs.",
        "level": 1
      },
      {
        "name": "Sahir-Afiyun",
        "name_en": "Sahir-Afiyun",
        "description_es": "Gana este dote como gratuito a nivel 1 sin requisitos, y suma cuatro dotes ligados al pesh a sus dotes de linaje.",
        "description_en": "Gains the Sahir-Afiyun feat at 1st level ignoring prerequisites and adds four pesh feats to her bloodline feat options.",
        "level": 1
      },
      {
        "name": "Pesh Touch (Su)",
        "name_en": "Pesh Touch (Su)",
        "description_es": "Toque de combate, 3 + Car/día, que aplica +2 a Fuerza, fatiga, o –2 a salvaciones contra ilusiones y mente durante rondas iguales a la mitad del nivel.",
        "description_en": "Touch attack 3 + Cha/day inflicting either +2 Strength, fatigue, or –2 saves vs illusion/mind-affecting for rounds equal to half class level.",
        "level": 1
      }
    ],
    "sub_options": {
      "bloodlines": "Requiere el linaje Feérico o Celestial (o variantes oníricas). Los poderes de linaje se centran en sueño, encantamiento y compulsión. Hechizos de sueño tienen +2 a la CD. / Requires the Fey or Celestial bloodline (or dream variants). Bloodline powers focus on sleep, enchantment, and compulsion. Sleep spells gain +2 to DC."
    }
  },
  "stone_warder": {
    "class": "sorcerer",
    "name": "Stone Warder",
    "name_en": "Stone Warder",
    "name_es": "Guardián de Piedra",
    "source": "Arcane Anthology",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Sorcerer%20Stone%20Warder",
    "description_es": "Hechicero ligado a linajes de tierra que graba runas defensivas en la piedra; no puede lanzar conjuros con descriptor de aire, frío, electricidad, fuego o agua.",
    "description_en": "Earth-bloodline sorcerer who carves defensive runes into stone but cannot cast spells with the air, cold, electricity, fire, or water descriptor.",
    "features_removed": [
      "Eschew Materials",
      "3rd-level Bloodline Spell",
      "7th-level Bloodline Feat"
    ],
    "features_gained": [
      {
        "name": "Blood of the Earth",
        "name_en": "Blood of the Earth",
        "description_es": "Debe elegir un linaje vinculado a la tierra: deep earth, draconic (cobre), elemental (tierra), orco o shaitan.",
        "description_en": "Must choose an earth-themed bloodline: deep earth, draconic (copper), elemental (earth), orc, or shaitan.",
        "level": 1
      },
      {
        "name": "Power of Stone (Su)",
        "name_en": "Power of Stone (Su)",
        "description_es": "Gana +1 al nivel de lanzador (más a niveles altos) en colinas, montañas o subterráneo, pero no puede lanzar conjuros de aire, frío, electricidad, fuego o agua.",
        "description_en": "+1 caster level (more at higher levels) in hills, mountains, or underground, but cannot cast air, cold, electricity, fire, or water spells.",
        "level": 3
      },
      {
        "name": "Rune of Warding (Sp)",
        "name_en": "Rune of Warding (Sp)",
        "description_es": "Crea runas-trampa que almacenan un conjuro y se activan al pisarlas, 3 + Car/día; duran rondas o minutos por nivel sobre piedra.",
        "description_en": "Creates trap runes storing a spell that triggers when stepped on, 3 + Cha/day; lasts rounds or minutes per level on stone.",
        "level": 7
      }
    ],
    "sub_options": {
      "bloodlines": "Requiere el linaje Elemental (Tierra) o Draconico (tipo tierra). Los poderes de linaje se centran en defensa y control del terreno. Gana RD/— mientras está en contacto con tierra o piedra. / Requires the Elemental (Earth) or Draconic (earth type) bloodline. Bloodline powers focus on defense and terrain control. Gains DR/— while in contact with earth or stone."
    }
  },
  "fractured_mind": {
    "class": "spiritualist",
    "name": "Fractured Mind",
    "name_en": "Fractured Mind",
    "name_es": "Mente Fracturada",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Spiritualist%20Fractured%20Mind",
    "description_es": "Espiritista cuya conexión con su fantasma se basa en una emoción intensa; lanza conjuros con Carisma en lugar de Sabiduría.",
    "description_en": "Spiritualist whose phantom bond is rooted in raw emotion, casting spells with Charisma instead of Wisdom.",
    "features_removed": [
      "Detect Undead",
      "Calm Spirit",
      "See Invisibility",
      "Call Spirit"
    ],
    "features_gained": [
      {
        "name": "Emotional Spellcasting",
        "name_en": "Emotional Spellcasting",
        "description_es": "Usa Carisma en lugar de Sabiduría para conjuros, niveles, CDs de salvación y conjuros adicionales.",
        "description_en": "Uses Charisma instead of Wisdom for spell access, save DCs, and bonus spells per day."
      },
      {
        "name": "Emotional Power (Sp)",
        "name_en": "Emotional Power (Sp)",
        "description_es": "Niveles 5, 7, 9 y 16 conceden habilidades mágicas según el enfoque emocional del fantasma (ira, fervor, desesperación, miedo, odio, celos o celo).",
        "description_en": "Gains spell-like abilities at 5th, 7th, 9th and 16th tied to the phantom's emotional focus (anger, dedication, despair, fear, hatred, jealousy or zeal).",
        "level": 4
      }
    ],
    "sub_options": {
      "spirits": "El espíritu del espiritualista está fracturado en múltiples personalidades. Cada personalidad otorga un conjunto diferente de poderes. El espiritualista puede cambiar de personalidad del espíritu una vez por hora, pero no puede controlar cuándo. / The spiritualist's spirit is fractured into multiple personalities. Each personality grants a different set of powers. The spiritualist can switch spirit personalities once per hour but cannot control when."
    }
  },
  "haunted_spiritualist": {
    "class": "spiritualist",
    "name": "Haunted",
    "name_en": "Haunted",
    "name_es": "Embrujada",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Spiritualist%20Haunted",
    "description_es": "Espiritista atormentado por un fantasma dominante; puede ceder el control de su cuerpo para fortalecer al fantasma a costa de quedar nauseado.",
    "description_en": "Spiritualist tormented by a dominant phantom that can usurp her body to grow stronger while she remains nauseated.",
    "features_removed": [
      "Bonded Manifestation",
      "Dual Bond"
    ],
    "features_gained": [
      {
        "name": "Usurp Manifestation (Su)",
        "name_en": "Usurp Manifestation (Su)",
        "description_es": "Desde nivel 3, como acción inmediata el fantasma aumenta una categoría de tamaño y +2 a CA natural mientras la espiritista queda nauseada; 3 + nivel rondas/día.",
        "description_en": "From 3rd level, as an immediate action the phantom grows one size and gains +2 natural armor while the spiritualist is nauseated; 3 + level rounds/day."
      },
      {
        "name": "Usurp Spell (Su)",
        "name_en": "Usurp Spell (Su)",
        "description_es": "A nivel 8, el fantasma puede consumir un espacio de conjuro como acción rápida para lanzar conjuros de toque sobre sí mismo.",
        "description_en": "At 8th level the phantom may burn a spell slot as a swift action to cast touch spells on itself."
      },
      {
        "name": "Teleplasmic Surge (Su)",
        "name_en": "Teleplasmic Surge (Su)",
        "description_es": "A nivel 13, el fantasma gana +2 de moral a ataques, salvaciones y pruebas de habilidad cuando usurpa.",
        "description_en": "At 13th level the phantom gains +2 morale on attacks, saves, and skill checks while usurping."
      },
      {
        "name": "Ferocious Phantom (Su)",
        "name_en": "Ferocious Phantom (Su)",
        "description_es": "A nivel 18, el fantasma adquiere RD 10/cortante y RC igual a 11 + nivel.",
        "description_en": "At 18th level the phantom gains DR 10/slashing and SR equal to 11 + class level."
      },
      {
        "name": "Usurped Bond (Su)",
        "name_en": "Usurped Bond (Su)",
        "description_es": "A nivel 17, las rondas diarias de Usurp Manifestation pasan a 3 + el doble de su nivel.",
        "description_en": "At 17th level usurp manifestation rounds become 3 + twice her class level per day.",
        "level": 10
      }
    ],
    "sub_options": {
      "spirits": "En vez de un único espíritu vinculado, el espiritualista haunted tiene varios espíritus menores que lo rodean y lo persiguen. Los espíritus menores son más débiles pero más numerosos, y proporcionan diferentes efectos de aparición. / Instead of a single bound spirit, the haunted spiritualist has several minor spirits that surround and haunt him. Minor spirits are weaker but more numerous, providing different haunt effects."
    }
  },
  "onmyoji": {
    "class": "spiritualist",
    "name": "Onmyoji",
    "name_en": "Onmyoji",
    "name_es": "Onmyoji",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Spiritualist%20Onmyoji",
    "description_es": "Espiritista místico oriental cuyo fantasma reside en su mente; lanza conjuros divinos usando ofudas como foco sagrado.",
    "description_en": "Eastern mystic spiritualist whose phantom dwells in her mind; casts divine spells using ofuda paper talismans as a holy focus.",
    "features_removed": [
      "Shared Consciousness",
      "Fused Consciousness",
      "Spiritual Interference",
      "Greater Spiritual Interference"
    ],
    "features_gained": [
      {
        "name": "Divine Spellcasting",
        "name_en": "Divine Spellcasting",
        "description_es": "Sus conjuros usan componentes verbales y somáticos en lugar de pensamiento y emoción, con un ofuda como foco divino.",
        "description_en": "Spells use verbal and somatic components instead of thought and emotion, with an ofuda serving as divine focus.",
        "level": 1
      },
      {
        "name": "Spiritual Resistance (Su)",
        "name_en": "Spiritual Resistance (Su)",
        "description_es": "Mientras el fantasma esté confinado, +2 a salvaciones contra capacidades sobrenaturales y mágicas de hadas, exteriores y no muertos incorpóreos; aumenta cada 6 niveles hasta +5.",
        "description_en": "While the phantom is confined, +2 on saves vs spell-like and supernatural abilities of fey, outsiders and incorporeal undead; +1 every 6 levels (max +5).",
        "level": 1
      },
      {
        "name": "Divine Teachings (Su)",
        "name_en": "Divine Teachings (Su)",
        "description_es": "A nivel 4 y cada 3 niveles, añade un conjuro de clérigo a sus conjuros conocidos, lanzable solo con el fantasma confinado.",
        "description_en": "At 4th level and every 3 levels thereafter, adds a cleric spell to her known spells, castable only while the phantom is confined.",
        "level": 4
      }
    ],
    "sub_options": {
      "spirits": "Solo puede vincular espíritus de la tradición japonesa (kami, oni). Los kami son espíritus de naturaleza protectora; los oni son espíritus de corrupción. El tipo de espíritu vinculado afecta el alineamiento del espiritualista. / Can only bond with spirits from Japanese tradition (kami, oni). Kami are protective nature spirits; oni are corruption spirits. The type of bound spirit affects the spiritualist's alignment."
    }
  },
  "phantom_blade": {
    "class": "spiritualist",
    "name": "Phantom Blade",
    "name_en": "Phantom Blade",
    "name_es": "Hoja Fantasma",
    "source": "Psychic Anthology",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Spiritualist%20Phantom%20Blade",
    "description_es": "Espiritista que canaliza a su fantasma en un arma ectoplasmática inteligente similar a la hoja negra del magus; combina conjuros y combate marcial.",
    "description_en": "Spiritualist who manifests her phantom as a sentient ectoplasmic weapon akin to a magus's black blade, blending spells and martial combat.",
    "features_removed": [
      "Phantom",
      "Phantom Recall",
      "Spiritual Bond",
      "Dual Bond",
      "Etheric Tether",
      "Shared Consciousness",
      "Fused Consciousness",
      "Empowered Consciousness",
      "Bonded Senses",
      "Bonded Manifestation",
      "Spiritual Interference",
      "Greater Spiritual Interference"
    ],
    "features_gained": [
      {
        "name": "Phantom Weapon",
        "name_en": "Phantom Weapon",
        "description_es": "Manifiesta un arma ectoplasmática senciente (similar a la hoja negra del magus) con progresión propia.",
        "description_en": "Manifests an ectoplasmic sentient weapon (akin to a magus's black blade) with its own progression.",
        "level": 1
      },
      {
        "name": "Weapon and Armor Proficiency",
        "name_en": "Weapon and Armor Proficiency",
        "description_es": "Gana competencia con armas sencillas y marciales y con armaduras ligeras y medias.",
        "description_en": "Gains proficiency with all simple and martial weapons and with light and medium armor.",
        "level": 1
      },
      {
        "name": "Spell Combat (Ex)",
        "name_en": "Spell Combat (Ex)",
        "description_es": "Puede lanzar conjuros y empuñar el arma fantasma a la vez con las reglas del combate mágico del magus.",
        "description_en": "May cast spells while wielding her phantom weapon using magus spell combat rules.",
        "level": 1
      },
      {
        "name": "Spellstrike (Su)",
        "name_en": "Spellstrike (Su)",
        "description_es": "A nivel 2, entrega conjuros mediante el arma fantasma como el spellstrike del magus.",
        "description_en": "At 2nd level, delivers spells through the phantom weapon like a magus's spellstrike.",
        "level": 2
      },
      {
        "name": "Spirit of War (Ex)",
        "name_en": "Spirit of War (Ex)",
        "description_es": "A nivel 3 y cada 5 niveles, gana un dote de combate adicional, contando su nivel como BAB y nivel de guerrero para requisitos.",
        "description_en": "At 3rd level and every 5 levels thereafter, gains a bonus combat feat, treating spiritualist level as BAB and fighter level for prerequisites.",
        "level": 3
      },
      {
        "name": "Etheric Focus (Ex)",
        "name_en": "Etheric Focus (Ex)",
        "description_es": "A nivel 4, como acción rápida se centra para lanzar conjuros con componentes de pensamiento; pasa a acción libre a nivel 12.",
        "description_en": "At 4th level, centers herself as a swift action to aid casting thought-component spells; becomes a free action at 12th.",
        "level": 4
      }
    ],
    "sub_options": {
      "spirits": "El espíritu del espiritualista se incorpora en un arma en vez de manifestarse como fantasma. El arma espiritual actúa como el espíritu vinculado y puede ser empuñada con o sin el espiritualista. / Spiritualist's spirit incorporates into a weapon instead of manifesting as a ghost. The spirit weapon acts as the bound spirit and can be wielded with or without the spiritualist."
    }
  },
  "geist_channeler": {
    "class": "spiritualist",
    "name": "Geist Channeler",
    "name_en": "Geist Channeler",
    "name_es": "Canalizadora de Geist",
    "source": "Occult Adventures",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Spiritualist%20Geist%20Channeler",
    "description_es": "Espiritista cuyo fantasma se manifiesta exclusivamente en forma incorpórea y ataca como un poltergeist; renuncia al enfoque emocional.",
    "description_en": "Spiritualist whose phantom manifests only in incorporeal form and attacks like a poltergeist, forgoing the emotional focus.",
    "features_removed": [
      "Phantom Ectoplasmic Manifestation",
      "Phantom Emotional Focus",
      "Standard Bonded Manifestation"
    ],
    "features_gained": [
      {
        "name": "Geistform Phantom",
        "name_en": "Geistform Phantom",
        "description_es": "El fantasma carece de Fuerza, ataca con un golpe incorpóreo de 1d8 (hasta 2d10 a nivel 20) y solo daña a otros incorpóreos hasta poder infundirse de ectoplasma.",
        "description_en": "The phantom lacks Strength, attacks with a 1d8 incorporeal slam (up to 2d10 at 20th), and can only harm incorporeal foes until it briefly infuses with ectoplasm."
      },
      {
        "name": "Emotionless",
        "name_en": "Emotionless",
        "description_es": "Recibe rangos de Conocimiento (arcano) y (religión) iguales a sus DG, dote Voluntad de Hierro, y poderes especiales: Toque inquietante, Maña del poltergeist, Protección espectral y Posesión maligna.",
        "description_en": "Gains Knowledge (arcana/religion) ranks equal to its HD, Iron Will as a bonus feat, plus Unnerving Touch, Poltergeist's Knack, Spectral Protection, and Malevolent Possession."
      },
      {
        "name": "Spiritual Manifestation",
        "name_en": "Spiritual Manifestation",
        "description_es": "Su Bonded Manifestation manifiesta al fantasma únicamente en forma incorpórea.",
        "description_en": "Bonded manifestation manifests the phantom only in incorporeal form."
      }
    ],
    "sub_options": {
      "spirits": "Canaliza geists (espíritus alemanes/centroeuropeos de la muerte). Los geists tienen distintas formas de manifestación (geist del hogar, del bosque, de la guerra). El espiritualista elige el tipo de geist al crear el personaje. / Channels geists (German/Central European death spirits). Geists have different manifestation forms (hearth geist, forest geist, war geist). The spiritualist chooses geist type at character creation."
    }
  },
  "wild_caller": {
    "class": "summoner",
    "name": "Wild Caller",
    "name_en": "Wild Caller",
    "name_es": "Invocador Silvestre",
    "source": "Pathfinder Player Companion: Heroes of the Wild",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo---summoner-archetypes/wild-caller-summoner-archetype/",
    "description_es": "Invocador cuyo eidolón es una planta extraplanar y que llama aliados de la naturaleza en lugar de monstruos.",
    "description_en": "Summoner whose eidolon is an extraplanar plant and who calls nature's allies instead of monsters.",
    "features_removed": [
      "Standard Eidolon",
      "Summon Monster I",
      "Aspect (10th)"
    ],
    "features_gained": [
      {
        "name": "Plant Eidolon",
        "name_en": "Plant Eidolon",
        "description_es": "Su eidolón es una criatura planta extraplanar con una de cuatro formas base (cactus, conífera, hongo o árbol), cada una con evoluciones libres propias.",
        "description_en": "His eidolon is an extraplanar plant creature with one of four base forms (cactus, conifer, mushroom, or tree), each with free evolutions.",
        "level": 1
      },
      {
        "name": "Summon Nature's Ally (Sp)",
        "name_en": "Summon Nature's Ally (Sp)",
        "description_es": "Reemplaza convocar monstruo: lanza convocar aliado de la naturaleza 3 + Car/día con duración de 1 minuto por nivel.",
        "description_en": "Replaces summon monster; casts summon nature's ally 3 + Cha/day with 1 minute per level duration.",
        "level": 1
      },
      {
        "name": "Fey Friend (Ex)",
        "name_en": "Fey Friend (Ex)",
        "description_es": "A nivel 10, +4 a Engañar, Diplomacia y Averiguar Intenciones contra hadas.",
        "description_en": "At 10th level, +4 on Bluff, Diplomacy, and Sense Motive checks against fey.",
        "level": 10
      }
    ],
    "sub_options": {
      "evolutions": "El eidolón del convocador salvaje es un animal mágico o bestia que no puede tener aspectos humanoides. Las evoluciones disponibles se limitan a las apropiadas para animales: pelaje, colmillos, garras, alas, veneno. Límite de PE en evoluciones humanoides: 0. / The wild caller's eidolon is a magical animal or beast that cannot have humanoid aspects. Available evolutions limited to animal-appropriate ones: fur, fangs, claws, wings, venom. EP limit on humanoid evolutions: 0."
    }
  },
  "broodmaster": {
    "class": "summoner",
    "name": "Broodmaster",
    "name_en": "Broodmaster",
    "name_es": "Maestro de Camada",
    "source": "Ultimate Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Summoner%20Broodmaster",
    "description_es": "Invocador que llama una camada de eidolones más pequeños en lugar de uno solo, repartiendo sus puntos de evolución entre todos.",
    "description_en": "Summoner who calls a brood of smaller eidolons instead of one, splitting evolution points among them.",
    "features_removed": [
      "Eidolon (single)",
      "Life Link",
      "Life Bond",
      "Merge Forms"
    ],
    "features_gained": [
      {
        "name": "Eidolon Brood",
        "name_en": "Eidolon Brood",
        "description_es": "Convoca varios eidolones; cada uno tiene su forma base y evoluciones libres, pero comparten BAB y salvaciones y reparten DG, dotes, evoluciones y ataques naturales.",
        "description_en": "Summons multiple eidolons; each has its own base form and free evolutions but they share BAB and saves and divide HD, feats, evolutions, and natural attacks.",
        "level": 1
      },
      {
        "name": "Brood Link (Su)",
        "name_en": "Brood Link (Su)",
        "description_es": "Como Vínculo Vital, pero solo puede sacrificar PG para proteger a un eidolón a la vez.",
        "description_en": "Like life link, but only one eidolon at a time can be protected by HP transfer.",
        "level": 1
      },
      {
        "name": "Brood Senses, Shield Ally, Maker's Call, Transposition (modified)",
        "name_en": "Brood Senses, Shield Ally, Maker's Call, Transposition (modified)",
        "description_es": "Estas habilidades funcionan con un solo eidolón de la camada cada vez.",
        "description_en": "These abilities apply only to one eidolon of the brood at a time."
      },
      {
        "name": "Larger Brood",
        "name_en": "Larger Brood",
        "description_es": "A niveles 8 y 13 puede gastar puntos de evolución para convocar eidolones más grandes o más numerosos.",
        "description_en": "At 8th and 13th level, may spend evolution points to summon larger or additional eidolons.",
        "level": 8
      },
      {
        "name": "Brood Bond (Su)",
        "name_en": "Brood Bond (Su)",
        "description_es": "A nivel 14, transfiere daño solo a un eidolón cada vez.",
        "description_en": "At 14th level, transfers damage to one eidolon at a time.",
        "level": 14
      }
    ],
    "sub_options": {
      "evolutions": "En vez de 1 eidolón potente, el convocador puede tener múltiples eidolones menores (brood). Los Puntos de Evolución se dividen entre todos. Cada eidolón de la cría tiene los mismos PEs divididos. / Instead of 1 powerful eidolon, the summoner can have multiple minor eidolons (brood). Evolution Points are divided among all. Each brood eidolon shares the same divided EPs."
    }
  },
  "naturalist_summoner": {
    "class": "summoner",
    "name": "Naturalist",
    "name_en": "Naturalist",
    "name_es": "Naturalista",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Summoner%20Naturalist",
    "description_es": "Invocador que comparte enfoques animales del cazador con su eidolón en lugar de protegerlo con escudo aliado.",
    "description_en": "Summoner who shares hunter animal foci with his eidolon instead of using shield ally.",
    "features_removed": [
      "Summon Monster I",
      "Shield Ally",
      "Aspect (10th)",
      "Greater Shield Ally",
      "Life Bond",
      "Greater Aspect"
    ],
    "features_gained": [
      {
        "name": "Nature's Call (Sp)",
        "name_en": "Nature's Call (Sp)",
        "description_es": "A nivel 1, lanza convocar aliado de la naturaleza I como habilidad mágica 3 + Car/día (animales, bestias mágicas o sabandijas).",
        "description_en": "At 1st level, casts summon nature's ally I 3 + Cha/day (animals, magical beasts, or vermin only).",
        "level": 1
      },
      {
        "name": "Animal Focus (Su)",
        "name_en": "Animal Focus (Su)",
        "description_es": "A nivel 4, como acción rápida aplica un enfoque animal del cazador a su eidolón usando nivel –2.",
        "description_en": "At 4th level, as a swift action applies a hunter's animal focus to his eidolon using summoner level –2.",
        "level": 1
      },
      {
        "name": "Second Animal Focus (Su)",
        "name_en": "Second Animal Focus (Su)",
        "description_es": "A nivel 10, aplica dos enfoques animales distintos al eidolón a la vez.",
        "description_en": "At 10th level, applies two different animal foci to the eidolon simultaneously.",
        "level": 8
      },
      {
        "name": "Shared Focus (Su)",
        "name_en": "Shared Focus (Su)",
        "description_es": "A nivel 14, gana sobre sí mismo uno de los enfoques activos en su eidolón.",
        "description_en": "At 14th level, gains the same animal focus benefits as one of those active on his eidolon.",
        "level": 10
      },
      {
        "name": "Third Animal Focus (Su)",
        "name_en": "Third Animal Focus (Su)",
        "description_es": "A nivel 18, aplica tres enfoques animales distintos a la vez.",
        "description_en": "At 18th level, applies three different animal foci at once.",
        "level": 15
      }
    ]
  },
  "spirit_summoner": {
    "class": "summoner",
    "name": "Spirit Summoner",
    "name_en": "Spirit Summoner",
    "name_es": "Invocador Espiritual",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Summoner%20Spirit%20Summoner",
    "description_es": "Invocador vinculado a un espíritu de chamán; gana habilidades del espíritu y embrujos a costa de varias habilidades estándar.",
    "description_en": "Summoner bound to a shaman spirit, gaining its abilities and hexes at the cost of several standard summoner features.",
    "features_removed": [
      "Summon Monster",
      "Aspect",
      "Maker's Call",
      "Merge Forms",
      "Transposition"
    ],
    "features_gained": [
      {
        "name": "Spirit (Su)",
        "name_en": "Spirit (Su)",
        "description_es": "Selecciona un espíritu de chamán y gana su habilidad de espíritu; añade los conjuros del espíritu a sus conjuros conocidos hasta nivel 6.",
        "description_en": "Selects one shaman spirit and gains its spirit ability; spirit spells become spells known up to 6th level.",
        "level": 1
      },
      {
        "name": "Greater Spirit (Su)",
        "name_en": "Greater Spirit (Su)",
        "description_es": "A nivel 9, obtiene la habilidad de espíritu mayor del espíritu elegido.",
        "description_en": "At 9th level, gains the greater spirit ability of the chosen spirit.",
        "level": 12
      },
      {
        "name": "True Spirit (Su)",
        "name_en": "True Spirit (Su)",
        "description_es": "A nivel 17, obtiene la habilidad de espíritu verdadero.",
        "description_en": "At 17th level, gains the true spirit ability.",
        "level": 18
      },
      {
        "name": "Hex",
        "name_en": "Hex",
        "description_es": "A niveles 6, 8, 10 y 16 escoge un embrujo de chamán acorde a su espíritu, usando Sabiduría para las CDs.",
        "description_en": "At 6th, 8th, 10th and 16th levels selects a shaman hex appropriate to his spirit, using Wisdom for hex DCs.",
        "level": 1
      },
      {
        "name": "Eidolon (Altered)",
        "name_en": "Eidolon (Altered)",
        "description_es": "La forma del eidolón debe ser apropiada al espíritu elegido; las alteraciones permanentes que la cambien quedan prohibidas.",
        "description_en": "The eidolon's form must match the chosen spirit; permanent changes inappropriate to it are forbidden.",
        "level": 1
      }
    ],
    "sub_options": {
      "spirits": "El eidolón actúa como espíritu de chamán en vez de como ser extraplanar. El eidolón-espíritu otorga al convocador acceso a un espíritu de chamán elegido al crear el personaje. / The eidolon acts as a shaman spirit instead of an extraplanar being. The spirit-eidolon grants the summoner access to a shaman spirit chosen at character creation.",
      "hexes": "A través del vínculo con el eidolón-espíritu, el convocador puede usar hexes de chamán. Los hexes disponibles son los del espíritu de chamán elegido. / Through the spirit-eidolon bond, the summoner can use shaman hexes. Available hexes are those of the chosen shaman spirit."
    }
  },
  "evolutionist": {
    "class": "summoner",
    "name": "Evolutionist",
    "name_en": "Evolutionist",
    "name_es": "Evolucionista",
    "source": "Ultimate Magic",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Summoner%20Evolutionist",
    "description_es": "Invocador que reconfigura el cuerpo de su eidolón mediante rituales arcanos, sacrificando varias habilidades de apoyo.",
    "description_en": "Summoner who reshapes his eidolon's body through arcane rituals, trading several support abilities.",
    "features_removed": [
      "Maker's Call (6th)",
      "Transposition (8th)",
      "Greater Shield Ally (12th)"
    ],
    "features_gained": [
      {
        "name": "Mutate Eidolon (Su)",
        "name_en": "Mutate Eidolon (Su)",
        "description_es": "A nivel 6, mediante un ritual de 24 h y 200 po por nivel, reasigna las evoluciones del eidolón como si subiera de nivel.",
        "description_en": "At 6th level, via a 24-hour ritual costing 200 gp per level, reassigns the eidolon's evolutions as if it had gained a level."
      },
      {
        "name": "Evolve Base Form (Su)",
        "name_en": "Evolve Base Form (Su)",
        "description_es": "A nivel 8, al subir de nivel puede cambiar la forma base del eidolón a otra hasta el siguiente ascenso.",
        "description_en": "At 8th level, on each level-up may change the eidolon's base form, fixed until the next level-up.",
        "level": 6
      },
      {
        "name": "Transmogrify (Sp)",
        "name_en": "Transmogrify (Sp)",
        "description_es": "A nivel 12, lanza transmogrify 1/día sin componentes materiales, con tiempo de lanzamiento de 1 minuto.",
        "description_en": "At 12th level, casts transmogrify once per day with no material components and a 1-minute casting time.",
        "level": 8
      }
    ],
    "sub_options": {
      "evolutions": "El eidolón puede cambiar sus evoluciones cada día (como el chamán cambia su espíritu wandering). Tiene un conjunto fijo de evoluciones base y un conjunto \"flexible\" que se elige cada mañana. / The eidolon can change its evolutions each day (like a shaman changes a wandering spirit). Has a fixed set of base evolutions and a \"flexible\" set chosen each morning."
    }
  },
  "mouser": {
    "class": "swashbuckler",
    "name": "Mouser",
    "name_en": "Mouser",
    "name_es": "Cazarratas",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Swashbuckler%20Mouser",
    "description_es": "Espadachín pequeño y ágil que se cuela bajo los pies de enemigos más grandes para hostigarlos.",
    "description_en": "Small, nimble swashbuckler who slips into the spaces of larger foes to harry them.",
    "features_removed": [
      "Opportune Parry and Riposte",
      "Menacing Swordplay",
      "Targeted Strike",
      "Bleeding Wound"
    ],
    "features_gained": [
      {
        "name": "Underfoot Assault (Ex)",
        "name_en": "Underfoot Assault (Ex)",
        "description_es": "Cuando un enemigo más grande adyacente falla un ataque cuerpo a cuerpo, gasta 1 punto de gallardía para entrar 5 pies en su espacio sin provocar AdO; el enemigo sufre –4 al ataque.",
        "description_en": "When a larger adjacent foe misses her in melee, spends 1 panache to move 5 feet into the foe's space without provoking AoO; the foe suffers –4 to attacks."
      },
      {
        "name": "Quick Steal (Ex)",
        "name_en": "Quick Steal (Ex)",
        "description_es": "A nivel 3, al impactar a un enemigo más grande con arma perforante ligera puede gastar 1 gallardía como acción rápida para hacer una maniobra de robo sin AdO.",
        "description_en": "At 3rd level, on a hit against a larger foe with a light/one-handed piercing weapon, may spend 1 panache as a swift action to steal without AoO.",
        "level": 3
      },
      {
        "name": "Hamstring (Ex)",
        "name_en": "Hamstring (Ex)",
        "description_es": "A nivel 7, con 1 gallardía y un golpe a un enemigo mayor, intenta una maniobra de truco sucio (acción rápida) que solo puede dejar tambaleante al objetivo.",
        "description_en": "At 7th level, with 1 panache and a hit on a larger foe, attempts a swift dirty trick that can only stagger the target.",
        "level": 7
      },
      {
        "name": "Cat's Charge (Ex)",
        "name_en": "Cat's Charge (Ex)",
        "description_es": "A nivel 11, al cargar a un enemigo mayor con gallardía disponible, puede terminar la carga en cualquier casilla a su alcance.",
        "description_en": "At 11th level, when charging a larger foe with panache available, may end her charge in any space she can reach.",
        "level": 9
      }
    ]
  },
  "picaroon": {
    "class": "swashbuckler",
    "name": "Picaroon",
    "name_en": "Picaroon",
    "name_es": "Pícaro Pistolero",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Swashbuckler%20Picaroon",
    "description_es": "Espadachín que combina pistola y sable, ganando gallardía con disparos y golpes mortales.",
    "description_en": "Pistol-and-rapier swashbuckler who earns panache with both gunshots and killing blows.",
    "features_removed": [
      "Standard Weapon Proficiency",
      "Opportune Parry and Riposte",
      "Kip-Up",
      "Superior Feint",
      "Bleeding Wound",
      "Swashbuckler Finesse"
    ],
    "features_gained": [
      {
        "name": "Weapon Proficiency",
        "name_en": "Weapon Proficiency",
        "description_es": "Gana competencia con todas las armas sencillas, marciales y armas de fuego de una mano.",
        "description_en": "Gains proficiency with all simple and martial weapons plus one-handed firearms.",
        "level": 1
      },
      {
        "name": "Two-Weapon Finesse",
        "name_en": "Two-Weapon Finesse",
        "description_es": "Recibe los beneficios de Finta con Arma y Combate con Dos Armas mientras blande arma perforante y pistola.",
        "description_en": "Gains the benefits of Weapon Finesse and Two-Weapon Fighting while wielding a piercing melee weapon and a one-handed firearm.",
        "level": 1
      },
      {
        "name": "Melee Shooter (Ex)",
        "name_en": "Melee Shooter (Ex)",
        "description_es": "A nivel 1, gasta 1 gallardía como acción rápida para evitar AdO con su primer disparo a distancia mientras blanda ambas armas.",
        "description_en": "At 1st level, spend 1 panache as a swift action to avoid AoO on the first ranged attack when wielding both melee piercing weapon and firearm.",
        "level": 1
      },
      {
        "name": "Quick Clear (Ex)",
        "name_en": "Quick Clear (Ex)",
        "description_es": "A nivel 3, acción estándar y 1 gallardía para retirar la condición de Rota de una pistola encasquillada.",
        "description_en": "At 3rd level, a standard action and 1 panache removes the broken condition from a one-handed firearm.",
        "level": 3
      },
      {
        "name": "Gun Feint (Ex)",
        "name_en": "Gun Feint (Ex)",
        "description_es": "A nivel 7, puede fintar con armas de fuego, ganando +5 al fintar gastando 1 gallardía durante un ataque completo.",
        "description_en": "At 7th level, may feint with firearms, gaining +5 by spending 1 panache during a full attack.",
        "level": 7
      },
      {
        "name": "Lightning Reload (Ex)",
        "name_en": "Lightning Reload (Ex)",
        "description_es": "A nivel 11, gasta 1 gallardía para recargar un cañón como acción rápida (libre con Recarga Rápida).",
        "description_en": "At 11th level, spends 1 panache to reload a barrel as a swift action (free with Rapid Reload).",
        "level": 11
      }
    ]
  },
  "whirling_dervish": {
    "class": "swashbuckler",
    "name": "Whirling Dervish",
    "name_en": "Whirling Dervish",
    "name_es": "Derviche Giratorio",
    "source": "Advanced Class Origins",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Swashbuckler%20Whirling%20Dervish",
    "description_es": "Espadachín devoto de Sarenrae que blande la cimitarra como arma perforante; restringe cómo gana gallardía a actos de misericordia.",
    "description_en": "Sarenrae-devoted swashbuckler who wields the scimitar as a piercing finesse weapon and earns panache through merciful deeds.",
    "features_removed": [
      "Swashbuckler Finesse",
      "Panache (gain conditions)",
      "Superior Feint",
      "Targeted Strike",
      "Bleeding Wound",
      "Deadly Stab"
    ],
    "features_gained": [
      {
        "name": "Dervish Finesse (Ex)",
        "name_en": "Dervish Finesse (Ex)",
        "description_es": "Trata las cimitarras como armas perforantes a una mano para Finta con Arma y habilidades relacionadas si no usa otra arma o escudo en la otra mano.",
        "description_en": "Treats scimitars as one-handed piercing weapons for Weapon Finesse and related abilities while no off-hand weapon or shield is wielded.",
        "level": 1
      },
      {
        "name": "Dawnflower's Mercy (Ex)",
        "name_en": "Dawnflower's Mercy (Ex)",
        "description_es": "Solo gana gallardía por derribar exteriores malignos o no muertos, por hacer daño no letal, o por hacer rendirse a un malvado de DG significativos.",
        "description_en": "Only gains panache from killing evil outsiders/undead, dealing nonlethal damage, or causing a notable evildoer to surrender.",
        "level": 1
      },
      {
        "name": "Dervish Dance (Ex)",
        "name_en": "Dervish Dance (Ex)",
        "description_es": "A nivel 4, aplica Destreza en lugar de Fuerza al daño con armas de finta; cuenta como tener el dote Dervish Dance.",
        "description_en": "At 4th level, applies Dex instead of Str to damage with finesse weapons; counts as having the Dervish Dance feat.",
        "level": 3
      },
      {
        "name": "Whirlwind Dance (Ex)",
        "name_en": "Whirlwind Dance (Ex)",
        "description_es": "A nivel 7, gasta 1 gallardía como acción de asalto completo para moverse hasta su velocidad y atacar a varios enemigos a su alcance.",
        "description_en": "At 7th level, spends 1 panache as a full-round action to move up to her speed and make full-attack attacks against different creatures within reach.",
        "level": 11
      },
      {
        "name": "Dance of Dawn (Ex)",
        "name_en": "Dance of Dawn (Ex)",
        "description_es": "A nivel 11, en luz tenue o más brillante, tras impactar gasta 1 gallardía para cegar al objetivo 1 ronda (Fortaleza niega).",
        "description_en": "At 11th level, in dim light or brighter, after a hit spends 1 panache to potentially blind the target for 1 round (Fortitude negates).",
        "level": 15
      },
      {
        "name": "Dance of Mercy (Ex)",
        "name_en": "Dance of Mercy (Ex)",
        "description_es": "A nivel 19, tras confirmar un crítico con perforante, gasta 1 gallardía para infligir daño no letal igual a los PG actuales del objetivo +1 y paralizarlo 1 hora (Fortaleza niega).",
        "description_en": "At 19th level, after confirming a piercing crit, spends 1 panache to deal nonlethal damage equal to the target's current HP +1 and paralyze it for 1 hour (Fortitude negates).",
        "level": 19
      }
    ]
  },
  "flying_blade": {
    "class": "swashbuckler",
    "name": "Flying Blade",
    "name_en": "Flying Blade",
    "name_es": "Hoja Voladora",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Swashbuckler%20Flying%20Blade",
    "description_es": "Espadachín especializado en lanzar dagas y estrellas de filo, aplicando hazañas de gallardía a distancia.",
    "description_en": "Swashbuckler specializing in thrown daggers and starknives, applying panache deeds at range.",
    "features_removed": [
      "Dodging Panache",
      "Kip-Up",
      "Menacing Swordplay",
      "Targeted Strike (standard)",
      "Bleeding Wound (standard)",
      "Perfect Thrust",
      "Swashbuckler Weapon Training",
      "Swashbuckler Weapon Mastery"
    ],
    "features_gained": [
      {
        "name": "Subtle Throw (Ex)",
        "name_en": "Subtle Throw (Ex)",
        "description_es": "Lanza dagas o estrellas de filo sin provocar AdO gastando gallardía.",
        "description_en": "Throws daggers or starknives without provoking AoO by spending panache."
      },
      {
        "name": "Disrupting Counter (Ex)",
        "name_en": "Disrupting Counter (Ex)",
        "description_es": "Gasta gallardía para hacer un AdO contra un atacante cuerpo a cuerpo, imponiendo –4 a sus ataques si impacta.",
        "description_en": "Spends panache for an AoO against a melee attacker, imposing –4 to its attacks if it hits.",
        "level": 3
      },
      {
        "name": "Precise Throw (Ex)",
        "name_en": "Precise Throw (Ex)",
        "description_es": "Aplica precise strike a sus dagas y estrellas de filo arrojadas hasta 60 pies; ignora penalizadores de alcance gastando gallardía.",
        "description_en": "Applies precise strike to thrown daggers and starknives within 60 ft; ignores range penalties by spending panache.",
        "level": 3
      },
      {
        "name": "Targeted Throw (Ex)",
        "name_en": "Targeted Throw (Ex)",
        "description_es": "Apunta partes específicas del cuerpo con sus dagas y estrellas de filo arrojadas a 60 pies.",
        "description_en": "Targets individual body parts with thrown daggers/starknives within 60 ft.",
        "level": 7
      },
      {
        "name": "Bleeding Wound (Ex)",
        "name_en": "Bleeding Wound (Ex)",
        "description_es": "Inflige daño por sangrado con sus dagas y estrellas de filo arrojadas a 60 pies.",
        "description_en": "Deals bleed damage with thrown daggers/starknives within 60 ft.",
        "level": 9
      },
      {
        "name": "Perfect Throw (Ex)",
        "name_en": "Perfect Throw (Ex)",
        "description_es": "Concentra su potencial de ataque en un solo lanzamiento con dagas/estrellas de filo a 60 pies.",
        "description_en": "Pools attack potential into one ranged dagger/starknife attack within 60 ft.",
        "level": 11
      },
      {
        "name": "Flying Blade Training/Mastery (Ex)",
        "name_en": "Flying Blade Training/Mastery (Ex)",
        "description_es": "Bonos crecientes a ataque y daño con dagas/estrellas, Crítico Mejorado, +5 al alcance por incremento, confirmación automática y multiplicador de crítico aumentado.",
        "description_en": "Stacking attack/damage bonuses with daggers/starknives, Improved Critical, +5 ft range increments, automatic crit confirmation, and increased crit multipliers.",
        "level": 5
      }
    ]
  },
  "rondelero_swashbuckler": {
    "class": "swashbuckler",
    "name": "Rondelero Swashbuckler",
    "name_en": "Rondelero Swashbuckler",
    "name_es": "Rodelero",
    "source": "Weapon Master's Handbook",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Swashbuckler%20Rondelero%20Swashbuckler",
    "description_es": "Espadachín de tradición taldana que combina falcata y broquel; alterna ataques entre ambas armas y desarma con la rodela.",
    "description_en": "Taldan-trained swashbuckler combining falcata and buckler, alternating attacks between both weapons and disarming with the buckler.",
    "features_removed": [
      "Derring-Do",
      "Kip-Up",
      "Bleeding Wound",
      "Perfect Thrust"
    ],
    "features_gained": [
      {
        "name": "Falcata Emphasis (Ex)",
        "name_en": "Falcata Emphasis (Ex)",
        "description_es": "Competencia con falcatas; las trata como armas perforantes a una mano para Finta con Arma y habilidades relacionadas.",
        "description_en": "Proficiency with falcatas; treats them as one-handed piercing weapons for Weapon Finesse and related abilities.",
        "level": 1
      },
      {
        "name": "Buckler Bash (Ex)",
        "name_en": "Buckler Bash (Ex)",
        "description_es": "A nivel 2, golpea con su broquel como escudo ligero; trata el broquel como arma perforante a una mano para Finta.",
        "description_en": "At 2nd level, shield bashes with the buckler as if a light shield; treats the buckler as a one-handed piercing weapon for finesse.",
        "level": 2
      },
      {
        "name": "Shield Catch (Ex)",
        "name_en": "Shield Catch (Ex)",
        "description_es": "A nivel 3, +4 a maniobras de desarmar con el broquel mientras tenga gallardía.",
        "description_en": "At 3rd level, +4 on disarm combat maneuver checks with buckler while she has panache.",
        "level": 3
      },
      {
        "name": "Rondelero Flexibility (Ex)",
        "name_en": "Rondelero Flexibility (Ex)",
        "description_es": "A nivel 6, alterna ataques con falcata y broquel sin penalizadores de Combate con Dos Armas ni perder bono de CA.",
        "description_en": "At 6th level, alternates falcata and buckler attacks without two-weapon penalties or losing AC bonus.",
        "level": 6
      },
      {
        "name": "Rondelero Chop (Ex)",
        "name_en": "Rondelero Chop (Ex)",
        "description_es": "A nivel 11, gasta 1 gallardía tras impactar para hacer una maniobra inmediata de Romper sin provocar AdO.",
        "description_en": "At 11th level, spending 1 panache after a melee hit lets her make an immediate sunder without provoking AoO.",
        "level": 11
      },
      {
        "name": "Shattering Chop (Ex)",
        "name_en": "Shattering Chop (Ex)",
        "description_es": "A nivel 15, intento de Romper como acción de asalto completo con +4 e ignora la mitad de la dureza mientras tenga gallardía.",
        "description_en": "At 15th level, full-round sunder attempt at +4 ignoring half the object's hardness while she has panache.",
        "level": 15
      }
    ]
  },
  "magical_child": {
    "class": "vigilante",
    "name": "Magical Child",
    "name_en": "Magical Child",
    "name_es": "Niña Mágica",
    "source": "Ultimate Intrigue",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Vigilante%20Magical%20Child",
    "description_es": "Vigilante anime cuya identidad heroica se transforma con luz y música; lanza conjuros de invocador y se acompaña de un familiar guía.",
    "description_en": "Anime-style vigilante whose heroic identity transforms in light and music; casts summoner spells aided by a magical animal guide.",
    "features_removed": [
      "Vigilante Specialization",
      "Vigilante Talents (4th, 8th, 10th, 14th, 16th)",
      "Medium Armor Proficiency",
      "Class Skills (Disable Device, Knowledge engineering, Perception, Survival)",
      "Skill Ranks (reduced)",
      "Standard Identity Transformation",
      "Startling/Frightening/Stunning Appearance",
      "Vengeance Strike"
    ],
    "features_gained": [
      {
        "name": "Spellcasting",
        "name_en": "Spellcasting",
        "description_es": "Lanza conjuros arcanos espontáneos de la lista del invocador unchained, repuestos con una hora de comunión con su guía animal.",
        "description_en": "Casts spontaneous arcane spells from the unchained summoner list, refreshed by a 1-hour communion with her animal guide."
      },
      {
        "name": "Transformation Sequence",
        "name_en": "Transformation Sequence",
        "description_es": "Cambia entre identidades en 5 asaltos con luz y música brillantes; pasa a acción estándar con el talento social adecuado.",
        "description_en": "Changes between identities in 5 rounds with bright light and music; reduces to a standard action with the right social talent."
      },
      {
        "name": "Animal Guide",
        "name_en": "Animal Guide",
        "description_es": "Recibe un familiar mágico que mejora a niveles 3, 5 y 7 con formas superiores y a nivel 9 gana cambiar de forma.",
        "description_en": "Gains a magical familiar that improves at 3rd, 5th, and 7th levels with stronger forms and gains change shape at 9th."
      },
      {
        "name": "Staunch Ally",
        "name_en": "Staunch Ally",
        "description_es": "El familiar usa el Carisma de la niña para CDs de apariencia y cuenta como ella para activarlas; a nivel 20 puede hacer golpes de venganza.",
        "description_en": "The familiar uses the magical child's Charisma for appearance DCs and counts as her for triggering them; at 20th level it can make vengeance strikes.",
        "level": 4
      }
    ],
    "class_skills_add": [
      "knowledge_arcana",
      "knowledge_planes",
      "spellcraft"
    ],
    "class_skills_remove": [
      "disable_device",
      "knowledge_engineering",
      "perception",
      "survival"
    ]
  },
  "warlock_vigilante": {
    "class": "vigilante",
    "name": "Warlock",
    "name_en": "Warlock",
    "name_es": "Brujo Justiciero",
    "source": "Ultimate Intrigue",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Vigilante%20Warlock",
    "description_es": "Vigilante arcano que dispara descargas místicas y prepara conjuros de mago al estilo del magus.",
    "description_en": "Arcane vigilante who fires mystic bolts and prepares wizard spells from a spellbook like a magus.",
    "features_removed": [
      "Vigilante Specialization",
      "Unshakable",
      "Vigilante Talents (4th, 8th, 10th, 14th, 16th)",
      "Medium Armor Proficiency",
      "Class Skills (Disable Device, Knowledge engineering, Perception, Survival)",
      "Skill Ranks (reduced)"
    ],
    "features_gained": [
      {
        "name": "Spellcasting",
        "name_en": "Spellcasting",
        "description_es": "Prepara conjuros y trucos arcanos como un magus desde un grimorio, eligiendo de la lista de mago/hechicero hasta nivel 6.",
        "description_en": "Prepares arcane spells and cantrips like a magus from a spellbook, choosing from the wizard/sorcerer list up to 6th level.",
        "level": 1
      },
      {
        "name": "Mystic Bolts",
        "name_en": "Mystic Bolts",
        "description_es": "Crea proyectiles mágicos que infligen 1d6 + 1 cada 4 niveles de ácido, frío, electricidad o fuego; añade tipos de daño a niveles altos.",
        "description_en": "Creates magical bolts dealing 1d6 + 1 per 4 levels of acid, cold, electricity, or fire; gains additional damage types at higher levels.",
        "level": 1
      },
      {
        "name": "Piercing Bolts",
        "name_en": "Piercing Bolts",
        "description_es": "A nivel 3, una de sus descargas por asalto pasa a ser ataque de toque; a nivel 5 todas son ataques de toque.",
        "description_en": "At 3rd level, one bolt per round becomes a touch attack; at 5th all bolts are touch attacks.",
        "level": 4
      },
      {
        "name": "Modified Skills",
        "name_en": "Modified Skills",
        "description_es": "Sustituye cuatro habilidades de clase por Conocimiento (arcano) y Saber Mágico, y reduce los rangos a 4 + Int por nivel.",
        "description_en": "Swaps four class skills for Knowledge (arcana) and Spellcraft and gains 4 + Int skill ranks per level.",
        "level": 1
      },
      {
        "name": "Warlock Talents",
        "name_en": "Warlock Talents",
        "description_es": "Acceso a talentos especiales como Arcane Striker, Elemental Armor, Familiar, Social Simulacrum y Tattoo Chamber.",
        "description_en": "Access to special talents such as Arcane Striker, Elemental Armor, Familiar, Social Simulacrum and Tattoo Chamber.",
        "level": 8
      }
    ],
    "class_skills_add": [
      "knowledge_arcana",
      "spellcraft"
    ],
    "class_skills_remove": [
      "disable_device",
      "knowledge_engineering",
      "perception",
      "survival"
    ]
  },
  "zealot_vigilante": {
    "class": "vigilante",
    "name": "Zealot",
    "name_en": "Zealot",
    "name_es": "Fanático",
    "source": "Ultimate Intrigue",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Vigilante%20Zealot",
    "description_es": "Vigilante divino que actúa como brazo armado de su deidad; lanza conjuros de inquisidor y manifiesta un aura de alineamiento.",
    "description_en": "Divine vigilante acting as his deity's armed hand; casts inquisitor spells and projects a powerful alignment aura.",
    "features_removed": [
      "Vigilante Specialization",
      "Vigilante Talents (4th, 8th, 10th, 14th, 16th)",
      "Class Skills (Disable Device, Knowledge engineering, Perform, Sleight of Hand)",
      "Skill Ranks (reduced)"
    ],
    "features_gained": [
      {
        "name": "Spellcasting",
        "name_en": "Spellcasting",
        "description_es": "Lanza conjuros divinos como un inquisidor de la lista de inquisidor.",
        "description_en": "Casts divine spells as an inquisitor from the inquisitor spell list.",
        "level": 1
      },
      {
        "name": "Aura (Ex)",
        "name_en": "Aura (Ex)",
        "description_es": "En su identidad de vigilante manifiesta un aura de alineamiento poderosa correspondiente a su deidad.",
        "description_en": "In his vigilante identity manifests a powerful alignment aura matching his deity.",
        "level": 1
      },
      {
        "name": "Inquisition (Ex)",
        "name_en": "Inquisition (Ex)",
        "description_es": "Selecciona una inquisición ligada a su deidad usando su nivel de vigilante como nivel de inquisidor.",
        "description_en": "Selects an inquisition tied to his deity using vigilante level as inquisitor level.",
        "level": 1
      },
      {
        "name": "Weapon Proficiency",
        "name_en": "Weapon Proficiency",
        "description_es": "Competencia con el arma favorita de su deidad; si es golpe sin armas gana Golpe Sin Armas Mejorado.",
        "description_en": "Proficient with his deity's favored weapon; gains Improved Unarmed Strike if it is unarmed strike.",
        "level": 1
      },
      {
        "name": "Zealot Talents",
        "name_en": "Zealot Talents",
        "description_es": "Acceso a talentos como Channel Energy, Discern Lies, Empower Symbol, Stalwart, Stern Gaze y Zealot Smite.",
        "description_en": "Access to talents such as Channel Energy, Discern Lies, Empower Symbol, Stalwart, Stern Gaze and Zealot Smite.",
        "level": 4
      }
    ],
    "class_skills_add": [
      "knowledge_religion",
      "spellcraft"
    ],
    "class_skills_remove": [
      "disable_device",
      "knowledge_engineering",
      "perform",
      "sleight_of_hand"
    ]
  },
  "cabalist_vigilante": {
    "class": "vigilante",
    "name": "Cabalist",
    "name_en": "Cabalist",
    "name_es": "Cabalista",
    "source": "Ultimate Intrigue",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Vigilante%20Cabalist",
    "description_es": "Vigilante hechicero ligado a la sangre que lanza conjuros de bruja y aterra a quienes sangran ante él.",
    "description_en": "Witch-spell vigilante bound to blood, casting spells from the witch list and terrorizing bleeding foes.",
    "features_removed": [
      "Vigilante Specialization",
      "Vigilante Talents (4th, 8th, 10th, 14th, 16th)",
      "Medium Armor Proficiency",
      "Class Skills (Disable Device, Knowledge engineering, Perception, Survival)",
      "Skill Ranks (reduced)",
      "Startling Appearance",
      "Frightening Appearance",
      "Stunning Appearance"
    ],
    "features_gained": [
      {
        "name": "Spellcasting",
        "name_en": "Spellcasting",
        "description_es": "Prepara conjuros y trucos arcanos como un magus a partir de la lista de bruja hasta nivel 6.",
        "description_en": "Prepares arcane spells and cantrips like a magus from the witch spell list up to 6th level.",
        "level": 2
      },
      {
        "name": "Spill Blood (Ex)",
        "name_en": "Spill Blood (Ex)",
        "description_es": "Inflige daño por sangrado igual a su nivel al causar daño perforante o cortante a enemigos desprevenidos, aliados o pillados a contrapié a 30 pies.",
        "description_en": "Deals bleed damage equal to vigilante level when dealing piercing/slashing damage to unaware, allied, or flat-footed foes within 30 ft.",
        "level": 1
      },
      {
        "name": "Bloodbound Spell (Ex)",
        "name_en": "Bloodbound Spell (Ex)",
        "description_es": "A nivel 5, los enemigos que sangran sufren –1 a salvaciones contra sus conjuros (–2 contra nigromancia).",
        "description_en": "At 5th level, foes taking bleed damage suffer –1 on saves vs his spells (–2 vs necromancy).",
        "level": 5
      },
      {
        "name": "Bloody Horror (Ex)",
        "name_en": "Bloody Horror (Ex)",
        "description_es": "A nivel 11, como acción libre desmoraliza a todos los objetivos de un conjuro o área si uno de ellos sangra.",
        "description_en": "At 11th level, as a free action demoralizes all targets of a spell or area if one of them is bleeding.",
        "level": 11
      },
      {
        "name": "Shadowy Appearance (Sp)",
        "name_en": "Shadowy Appearance (Sp)",
        "description_es": "A nivel 17, 20% de fallo continuo y 1/día invisibilidad mejorada durante 1d6 asaltos.",
        "description_en": "At 17th level, continuous 20% miss chance and once per day greater invisibility for 1d6 rounds.",
        "level": 17
      }
    ],
    "class_skills_add": [
      "knowledge_arcana",
      "spellcraft"
    ],
    "class_skills_remove": [
      "disable_device",
      "knowledge_engineering",
      "perception",
      "survival"
    ]
  },
  "avenging_beast": {
    "class": "vigilante",
    "name": "Avenging Beast",
    "name_en": "Avenging Beast",
    "name_es": "Bestia Vengadora",
    "source": "Ultimate Wilderness",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Vigilante%20Avenging%20Beast",
    "description_es": "Vigilante con máscara animal que lanza conjuros de cazador y se transforma en su animal totémico.",
    "description_en": "Animal-masked vigilante who casts hunter spells and transforms into her totem beast.",
    "features_removed": [
      "Vigilante Specialization",
      "Vigilante Talents (4th, 8th, 10th, 14th, 16th)",
      "Startling/Frightening/Stunning Appearance",
      "Class Skills (Disable Device, Knowledge engineering, Perform, Sleight of Hand)",
      "Skill Ranks (reduced)"
    ],
    "features_gained": [
      {
        "name": "Animal Mask (Ex)",
        "name_en": "Animal Mask (Ex)",
        "description_es": "Una máscara animal sirve de foco de poder para su identidad; el animal elegido es permanente y reemplazarla cuesta 200 po por nivel.",
        "description_en": "An animal mask serves as the focus of her vigilante identity; the chosen animal is permanent and replacing the mask costs 200 gp per level.",
        "level": 1
      },
      {
        "name": "Spellcasting",
        "name_en": "Spellcasting",
        "description_es": "Lanza conjuros divinos usando la lista y la progresión del cazador.",
        "description_en": "Casts divine spells using the hunter's spell list and progression.",
        "level": 4
      },
      {
        "name": "Patron Spells",
        "name_en": "Patron Spells",
        "description_es": "Selecciona un patrón de bruja y añade sus conjuros adicionales hasta nivel 6 a su lista.",
        "description_en": "Selects a witch patron and adds its bonus spells up to 6th level to her list.",
        "level": 4
      },
      {
        "name": "Wild Shape (Su)",
        "name_en": "Wild Shape (Su)",
        "description_es": "Desde nivel 5 se transforma en el animal de su máscara como beast shape I; los usos diarios crecen hasta 8/día a nivel 19.",
        "description_en": "From 5th level transforms into the mask's animal as beast shape I; daily uses scale up to 8/day at 19th.",
        "level": 5
      }
    ],
    "class_skills_add": [
      "knowledge_nature",
      "spellcraft"
    ],
    "class_skills_remove": [
      "disable_device",
      "knowledge_engineering",
      "perform",
      "sleight_of_hand"
    ],
    "sub_options": {
      "patrons": "El aspecto salvaje del vigilante bestial actúa como un patrón mágico de bruja. El patrón del vigilante bestia debe ser un espíritu animal (Lobo, Oso, Serpiente, Cuervo, etc.). / The bestial vigilante's wild aspect acts as a witch-like magical patron. The beast vigilante's patron must be an animal spirit (Wolf, Bear, Serpent, Raven, etc.)."
    }
  },
  "disenchanter": {
    "class": "warpriest",
    "name": "Disenchanter",
    "name_en": "Disenchanter",
    "name_es": "Desencantador",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest%20Disenchanter",
    "description_es": "Warpriest dedicado a contrarrestar magia hostil; renuncia a canalizar energía a cambio de habilidades de abjuración.",
    "description_en": "Warpriest dedicated to countering hostile magic, trading channel energy for abjuration powers.",
    "features_removed": [
      "Channel Energy",
      "Bonus Feat (6th)"
    ],
    "features_gained": [
      {
        "name": "Bonus Feats (Ex)",
        "name_en": "Bonus Feats (Ex)",
        "description_es": "Elige dotes de una lista reducida (Gran Fortaleza, Contraconjuro Mejorado, Voluntad de Hierro, Aptitud Mágica) sin requisitos a niveles 1, 6 y 12.",
        "description_en": "Selects from a restricted list (Great Fortitude, Improved Counterspell, Iron Will, Skill Focus Spellcraft) without prerequisites at 1st, 6th, and 12th levels.",
        "level": 1
      },
      {
        "name": "Mystic Interference (Su)",
        "name_en": "Mystic Interference (Su)",
        "description_es": "A nivel 4, gasta dos fervores para conceder a aliados a 30 pies +1 a salvaciones contra conjuros durante varios asaltos; +1 cada 4 niveles (máx +5).",
        "description_en": "At 4th level, spends two fervor uses to grant allies within 30 ft +1 on saves vs spells for several rounds; +1 every 4 levels (max +5).",
        "level": 4
      },
      {
        "name": "Banish Enchantment (Su)",
        "name_en": "Banish Enchantment (Su)",
        "description_es": "A nivel 6, gasta dos fervores como acción estándar para lanzar disipar magia dirigido a un objetivo a 30 pies.",
        "description_en": "At 6th level, spends two fervor uses as a standard action to cast targeted dispel magic on a creature within 30 ft.",
        "level": 6
      }
    ]
  },
  "forgepriest": {
    "class": "warpriest",
    "name": "Forgepriest",
    "name_en": "Forgepriest",
    "name_es": "Sacerdote de la Forja",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest%20Forgepriest",
    "description_es": "Warpriest artesano dedicado a Torag y otros dioses herreros; crea armas y armaduras mágicas y resiste el fuego.",
    "description_en": "Smith warpriest devoted to forge gods, crafting magic arms and armor and resisting fire.",
    "features_removed": [
      "Blessings (gains only one)",
      "Bonus Feats (3rd)",
      "Channel Energy (4th)",
      "Bonus Feat (6th)"
    ],
    "features_gained": [
      {
        "name": "Smith's Spells",
        "name_en": "Smith's Spells",
        "description_es": "Añade conjuros como jury rig, shield, heat metal, shatter, keen edge, fabricate y mage's sword a su lista.",
        "description_en": "Adds spells like jury rig, shield, heat metal, shatter, keen edge, fabricate, and mage's sword to his list."
      },
      {
        "name": "Forge Mastery (Ex)",
        "name_en": "Forge Mastery (Ex)",
        "description_es": "A nivel 2, +½ nivel a Artesanía para fabricar objetos metálicos, armas y armaduras.",
        "description_en": "At 2nd level, adds half class level to Craft checks for metal items, armor and weapons."
      },
      {
        "name": "Bonus Feats (Altered)",
        "name_en": "Bonus Feats (Altered)",
        "description_es": "Puede elegir dotes de creación de objetos junto a dotes de combate al ganar dotes adicionales.",
        "description_en": "May choose item creation feats alongside combat feats when picking bonus feats.",
        "level": 3
      },
      {
        "name": "Craft Magic Arms and Armor",
        "name_en": "Craft Magic Arms and Armor",
        "description_es": "A nivel 3 gana Crear Armas y Armaduras Mágicas como dote adicional.",
        "description_en": "At 3rd level gains Craft Magic Arms and Armor as a bonus feat.",
        "level": 4
      },
      {
        "name": "Creator's Bond (Su)",
        "name_en": "Creator's Bond (Su)",
        "description_es": "A nivel 4, gasta dos usos de fervor para aumentar en 1 el bono de arma sagrada o armadura sagrada con objetos creados por él.",
        "description_en": "At 4th level, spends two fervor uses to add +1 to sacred weapon or sacred armor bonus on items he crafted.",
        "level": 4
      },
      {
        "name": "Heat of the Forge (Su)",
        "name_en": "Heat of the Forge (Su)",
        "description_es": "A nivel 6 obtiene resistencia al fuego 5 (10 a nivel 13).",
        "description_en": "At 6th level gains fire resistance 5 (10 at 13th).",
        "level": 7
      }
    ]
  },
  "cult_leader": {
    "class": "warpriest",
    "name": "Cult Leader",
    "name_en": "Cult Leader",
    "name_es": "Líder de Culto",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest%20Cult%20Leader",
    "description_es": "Warpriest oculto que lidera una secta clandestina; combina sigilo, ataque furtivo y poderes de seducción.",
    "description_en": "Cloaked warpriest who leads a hidden cult, combining stealth, sneak attack, and crowd-charming powers.",
    "features_removed": [
      "Focus Weapon",
      "Channel Energy",
      "Bonus Feats (3rd, 9th, 12th, 15th)",
      "Standard Weapon and Armor Proficiencies",
      "Standard Class Skills"
    ],
    "features_gained": [
      {
        "name": "Modified Proficiencies and Skills",
        "name_en": "Modified Proficiencies and Skills",
        "description_es": "Competente con ballesta de mano, estoque, sap y arma favorita de su deidad; añade Engañar, Disfrazarse e Intimidar y gana 4 + Int rangos por nivel.",
        "description_en": "Proficient with hand crossbow, rapier, sap, and his deity's favored weapon; adds Bluff, Disguise and Intimidate and gains 4 + Int skill ranks per level.",
        "level": 1
      },
      {
        "name": "Well-Hidden (Ex)",
        "name_en": "Well-Hidden (Ex)",
        "description_es": "+2 a Disfrazarse y Sigilo.",
        "description_en": "+2 on Disguise and Stealth checks.",
        "level": 1
      },
      {
        "name": "Sneak Attack (Ex)",
        "name_en": "Sneak Attack (Ex)",
        "description_es": "A nivel 3, ataque furtivo de 1d6 que aumenta 1d6 cada 3 niveles y se acumula con otras fuentes.",
        "description_en": "At 3rd level, 1d6 sneak attack that increases by 1d6 every 3 levels and stacks with other sources.",
        "level": 3
      },
      {
        "name": "Enthrall (Sp)",
        "name_en": "Enthrall (Sp)",
        "description_es": "A nivel 4 lanza enthrall gastando dos usos de fervor.",
        "description_en": "At 4th level casts enthrall by expending two fervor uses.",
        "level": 4
      },
      {
        "name": "Hide in Plain Sight (Su)",
        "name_en": "Hide in Plain Sight (Su)",
        "description_es": "A nivel 12, usa Sigilo aun observado mientras esté a 10 pies de un área de luz tenue (no en su propia sombra).",
        "description_en": "At 12th level, may use Stealth while observed when within 10 ft of an area of dim light (not in his own shadow).",
        "level": 12
      }
    ],
    "class_skills_add": [
      "acrobatics",
      "bluff",
      "disguise",
      "escape_artist",
      "knowledge_local",
      "perception",
      "sleight_of_hand",
      "stealth"
    ],
    "class_skills_remove": [
      "handle_animal",
      "knowledge_engineering",
      "ride",
      "survival",
      "swim"
    ]
  },
  "divine_commander": {
    "class": "warpriest",
    "name": "Divine Commander",
    "name_en": "Divine Commander",
    "name_es": "Comandante Divino",
    "source": "Advanced Class Guide",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest%20Divine%20Commander",
    "description_es": "Warpriest montado que lidera tropas con dotes de equipo y bendice ejércitos en combate masivo.",
    "description_en": "Mounted warpriest who leads troops with teamwork feats and blesses armies in mass combat.",
    "features_removed": [
      "Blessings (gains only one)",
      "Bonus Feats (3rd, 6th, 12th, 15th)"
    ],
    "features_gained": [
      {
        "name": "Mount (Ex)",
        "name_en": "Mount (Ex)",
        "description_es": "Recibe una montura como compañero animal del druida usando su nivel completo; gana competencia con armadura ligera para la montura.",
        "description_en": "Gains a loyal mount as a druid's animal companion using his full level; the mount gains light armor proficiency.",
        "level": 1
      },
      {
        "name": "Battle Tactician (Ex)",
        "name_en": "Battle Tactician (Ex)",
        "description_es": "A nivel 3 obtiene un dote de equipo extra y puede otorgarlo a aliados a 30 pies como acción estándar durante 4 + ½ nivel asaltos.",
        "description_en": "At 3rd level gains a bonus teamwork feat and may grant it to allies within 30 ft as a standard action for 4 + half level rounds.",
        "level": 3
      },
      {
        "name": "Blessed Mount (Su)",
        "name_en": "Blessed Mount (Su)",
        "description_es": "A nivel 6, su montura recibe la plantilla acorde al alineamiento de la deidad (celestial, entrópica, infernal o resoluta); las deidades neutrales otorgan RC y resistencia a energía.",
        "description_en": "At 6th level the mount gains a template matching the deity's alignment (celestial, entropic, fiendish, or resolute); neutral deities grant SR and energy resistance instead.",
        "level": 6
      },
      {
        "name": "Greater Battle Tactician (Ex)",
        "name_en": "Greater Battle Tactician (Ex)",
        "description_es": "A nivel 12 gana un segundo dote de equipo y puede compartir ambos como acción rápida.",
        "description_en": "At 12th level gains a second teamwork feat and can grant both as a swift action.",
        "level": 12
      },
      {
        "name": "Bless Army (Su)",
        "name_en": "Bless Army (Su)",
        "description_es": "A nivel 15 gasta dos fervores para conceder +1 a la OM y DV de su ejército en combate masivo.",
        "description_en": "At 15th level spends two fervor uses to grant +1 to his army's OM and DV in mass combat.",
        "level": 15
      }
    ]
  },
  "feral_champion": {
    "class": "warpriest",
    "name": "Feral Champion",
    "name_en": "Feral Champion",
    "name_es": "Campeón Salvaje",
    "source": "Ultimate Wilderness",
    "source_url": "https://aonprd.com/ArchetypeDisplay.aspx?FixedName=Warpriest%20Feral%20Champion",
    "description_es": "Warpriest fiero que renuncia a su arma sagrada para combatir con garras y transformarse en bestia.",
    "description_en": "Fierce warpriest who forgoes a sacred weapon to fight with sacred claws and transform into beasts.",
    "features_removed": [
      "Blessings (only Animal)",
      "Sacred Weapon",
      "Sacred Armor"
    ],
    "features_gained": [
      {
        "name": "Feral Blessing",
        "name_en": "Feral Blessing",
        "description_es": "Solo puede elegir la bendición Animal y no recibe la segunda bendición.",
        "description_en": "Must take only the Animal blessing and forgoes the usual second blessing."
      },
      {
        "name": "Sacred Claws (Su)",
        "name_en": "Sacred Claws (Su)",
        "description_es": "Crece garras como ataques naturales primarios en cada mano que reciben los mismos beneficios que el arma sagrada de un warpriest.",
        "description_en": "Grows claws as primary natural weapons that gain the same benefits as a warpriest's sacred weapon."
      },
      {
        "name": "Wild Shape (Su)",
        "name_en": "Wild Shape (Su)",
        "description_es": "A nivel 7, transforma en forma animal usando nivel –3 como nivel de druida; sin formas elementales ni vegetales; usos crecen hasta 4/día a nivel 19.",
        "description_en": "At 7th level, gains wild shape using warpriest level –3 as druid level; no elemental or plant forms; usage scales up to 4/day at 19th.",
        "level": 4
      }
    ]
  },
  "gravewalker": {
    "class": "witch",
    "name": "Gravewalker",
    "name_en": "Gravewalker",
    "name_es": "Caminante de Tumbas",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/witch/archetypes/paizo-witch-archetypes/gravewalker/",
    "description_es": "Bruja necromántica que reemplaza a su familiar por una muñeca de hechizos hecha con huesos y tierra de tumba, dominando a los muertos vivientes en un aura de profanación a costa de varios hexs.",
    "description_en": "A necromantic witch who replaces her familiar with a spell poppet of bones and grave dirt, dominating undead within an aura of desecration at the cost of several hexes.",
    "features_removed": [
      "Familiar (1)",
      "Hex (1)",
      "Hex (4)",
      "Hex (8)"
    ],
    "features_gained": [
      {
        "name": "Muñeca de Hechizos (Ex)",
        "name_en": "Spell Poppet (Ex)",
        "description_es": "Vasija macabra de huesos, tierra de tumba y piel humana que funciona como familiar pero ata a un espíritu maligno.",
        "description_en": "Grisly vessel of bone shards, grave dirt and human skin that functions as her familiar but houses an evil spirit."
      },
      {
        "name": "Aura de Profanación (Su)",
        "name_en": "Aura of Desecration (Su)",
        "description_es": "Aura de 20 pies (que crece 5 pies cada 2 niveles, máx. 70) que aumenta en +1 la CD para canalizar energía negativa y la resistencia al rechazo de muertos vivientes.",
        "description_en": "20-ft aura (expanding 5 ft every 2 levels, max 70) that grants +1 to negative energy channel DC and undead turn resistance."
      },
      {
        "name": "Esclavo Óseo (Su)",
        "name_en": "Bonethrall (Su)",
        "description_es": "Domina muertos vivientes dentro de su aura mediante salvación de Voluntad, controlando hasta 1 DG por nivel de lanzador.",
        "description_en": "Dominates undead within her aura via Will save, controlling up to 1 HD per caster level.",
        "level": 4
      },
      {
        "name": "Entregar Hechizos de Toque (Su)",
        "name_en": "Deliver Touch Spells (Su)",
        "description_es": "Al nivel 3 puede apuñalar la muñeca como acción de asalto completo para entregar un hechizo de toque como toque a distancia contra cualquier objetivo en su aura.",
        "description_en": "At 3rd level she may stab the poppet as a full-round action to deliver a touch spell as a ranged touch against any target within her aura.",
        "level": 8
      },
      {
        "name": "Poseer Muerto Viviente (Sp)",
        "name_en": "Possess Undead (Sp)",
        "description_es": "Toma control directo de un muerto viviente esclavo dentro del aura usando las mecánicas de prisión de almas, con la muñeca como receptáculo.",
        "description_en": "Takes direct control of one bonethralled undead within her aura using magic jar mechanics, with the poppet as the soul receptacle."
      }
    ],
    "sub_options": {
      "hexes": "Tiene acceso a hexes necrománticos especiales: animación de muertos, magia de huesos, invocar no-muertos. El familiar de la bruja gravewalker es un no-muerto animado. / Has access to special necromantic hexes: animate dead, bone magic, summon undead. The gravewalker witch's familiar is an animated undead.",
      "spirits": "El familiar de la bruja está animado como no-muerto. Los espíritus de los muertos que la bruja ha animado pueden ofrecerle información como si fueran hexes de \"hablar con muertos\". / The witch's familiar is animated as undead. Spirits of the dead the witch has animated can offer her information as if they were \"speak with dead\" hexes."
    }
  },
  "sea_witch": {
    "class": "witch",
    "name": "Sea Witch",
    "name_en": "Sea Witch",
    "name_es": "Bruja del Mar",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/witch/archetypes/paizo-witch-archetypes/sea-witch/",
    "description_es": "Bruja vinculada al océano que reemplaza su primer hex por empatía con criaturas marinas y obtiene una lista de hechizos de patrón centrada en agua y clima.",
    "description_en": "A witch bound to the ocean who replaces her 1st-level hex with sea creature empathy and gains a patron spell list focused on water and weather.",
    "features_removed": [
      "Hex (1)"
    ],
    "features_gained": [
      {
        "name": "Conocer Dirección (Sp)",
        "name_en": "Know Direction (Sp)",
        "description_es": "Puede lanzar conocer dirección a voluntad cuando se encuentra cerca de una masa de agua de al menos 1 milla de diámetro.",
        "description_en": "Can cast know direction at will while near a body of water of at least 1 mile diameter.",
        "level": 1
      },
      {
        "name": "Empatía con Criaturas Marinas (Ex)",
        "name_en": "Sea Creature Empathy (Ex)",
        "description_es": "Influye en animales acuáticos y criaturas costeras como un druida; el nivel de bruja cuenta como nivel de druida y se acumula con niveles reales de druida.",
        "description_en": "Influences water-dwelling animals and coastal creatures like a druid; witch levels count as druid levels and stack with actual druid levels.",
        "level": 1
      },
      {
        "name": "Hechizos de Patrón Acuático",
        "name_en": "Aquatic Patron Spells",
        "description_es": "Reemplaza los hechizos otorgados por su patrón con una lista temática de agua y clima en los niveles 2, 4, 6, 8, 10, 12, 14, 16 y 18.",
        "description_en": "Replaces standard patron spells with a water- and weather-themed list at levels 2, 4, 6, 8, 10, 12, 14, 16 and 18.",
        "level": 1
      }
    ],
    "sub_options": {
      "hexes": "Hexes disponibles centrados en el mar y el agua: control del clima marino, caminar sobre el agua, llamar a criaturas marinas, Toque de la Tempestad. No puede elegir hexes sin relación con agua o clima. / Available hexes focused on sea and water: maritime weather control, water walking, call sea creatures, Tempest Touch. Cannot choose hexes unrelated to water or weather.",
      "patrons": "El patrón debe ser Agua, Tempestad o Mar. No puede elegir patrones de fuego, tierra o cielo. Los hechizos de patrón son todos del tema marino. / Patron must be Water, Tempest, or Sea. Cannot choose fire, earth, or sky patrons. All patron spells have maritime themes."
    }
  },
  "white_haired_witch": {
    "class": "witch",
    "name": "White-Haired Witch",
    "name_en": "White-Haired Witch",
    "name_es": "Bruja de Cabello Blanco",
    "source": "Pathfinder Player Companion: Dragon Empires Primer",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/witch/archetypes/paizo-witch-archetypes/white-haired-witch/",
    "description_es": "Bruja marcial cuyo cabello prensil sirve como ataque natural primario capaz de presa, derribo y estrangulamiento, sacrificando hexs mayores y grandes a cambio de talentos de pícaro.",
    "description_en": "A martial witch whose prehensile hair serves as a primary natural attack capable of grappling, tripping and strangling, trading major and grand hexes for rogue talents.",
    "features_removed": [
      "Hex (1)",
      "Major Hex (10+)",
      "Grand Hex"
    ],
    "features_gained": [
      {
        "name": "Cabello Blanco (Su)",
        "name_en": "White Hair (Su)",
        "description_es": "Su cabello prensil es un ataque natural primario (1d4 + mod. Inteligencia, alcance 5 pies). Puede iniciar presa como acción libre usando Inteligencia. El alcance aumenta en 5 pies cada 4 niveles (máx. 30 a nivel 20).",
        "description_en": "Her prehensile hair is a primary natural attack (1d4 + Int mod, 5-ft reach). She may initiate a grapple as a free action using Int. Reach grows by 5 ft every 4 levels (max 30 ft at 20th).",
        "level": 1
      },
      {
        "name": "Constreñir (Ex)",
        "name_en": "Constrict (Ex)",
        "description_es": "Al nivel 2, su cabello inflige daño igual a un ataque cuando logra agarrar al oponente, como acción rápida.",
        "description_en": "At 2nd level her hair deals damage equal to an attack when grappling an opponent, as a swift action.",
        "level": 4
      },
      {
        "name": "Derribo (Ex)",
        "name_en": "Trip (Ex)",
        "description_es": "Al nivel 4, un golpe exitoso del cabello permite intentar una maniobra de derribo como acción rápida.",
        "description_en": "At 4th level a successful hair strike allows a trip combat maneuver as a swift action.",
        "level": 8
      },
      {
        "name": "Tirar (Ex)",
        "name_en": "Pull (Ex)",
        "description_es": "Al nivel 6, un golpe exitoso del cabello le permite tirar del oponente 5 pies hacia ella como acción rápida.",
        "description_en": "At 6th level a successful hair strike pulls the opponent 5 feet closer as a swift action.",
        "level": 12
      },
      {
        "name": "Estrangular (Ex)",
        "name_en": "Strangle (Ex)",
        "description_es": "Al nivel 8, un oponente apresado por su cabello no puede hablar ni lanzar conjuros con componentes verbales.",
        "description_en": "At 8th level a foe grappled by her hair cannot speak or cast spells with verbal components.",
        "level": 16
      },
      {
        "name": "Talentos de Pícaro",
        "name_en": "Rogue Talents",
        "description_es": "A los niveles 10, 12 y cada 2 niveles después gana un talento de pícaro; en los niveles 18 y 20 puede elegir talentos avanzados.",
        "description_en": "At 10th, 12th and every 2 levels thereafter she gains a rogue talent; at 18th and 20th she may choose advanced rogue talents.",
        "level": 10
      }
    ],
    "sub_options": {
      "hexes": "Reemplaza la mayoría de sus hexes con el ataque de cabello (cabello blanco como arma de agarre/látigo). Tiene acceso muy limitado a hexes estándar (solo 2-3 según nivel). Los hexes disponibles son únicamente los no ofensivos. / Replaces most hexes with the hair attack (white hair as a grab/whip weapon). Has very limited access to standard hexes (only 2-3 per level). Available hexes are only non-offensive ones."
    }
  },
  "ley_line_guardian": {
    "class": "witch",
    "name": "Ley Line Guardian",
    "name_en": "Ley Line Guardian",
    "name_es": "Guardiana de Líneas Ley",
    "source": "Occult Adventures",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/witch/archetypes/paizo-witch-archetypes/ley-line-guardian-witch-archetype/",
    "description_es": "Bruja que canaliza líneas ley en lugar de un familiar, lanzando hechizos de forma espontánea como un hechicero a costa del hex de nivel 1 y 8.",
    "description_en": "A witch who channels ley lines rather than a familiar, casting spells spontaneously like a sorcerer at the cost of her 1st- and 8th-level hexes.",
    "features_removed": [
      "Familiar (1)",
      "Hex (1)",
      "Hex (8)"
    ],
    "features_gained": [
      {
        "name": "Potenciada por Líneas Ley",
        "name_en": "Ley Line Powered",
        "description_es": "Lanza conjuros espontáneamente con la misma cantidad de huecos y conjuros conocidos que un hechicero. Los hechizos extra del patrón se añaden a sus conjuros conocidos en los niveles correspondientes.",
        "description_en": "Casts spells spontaneously with sorcerer spell slots and spells known. Patron bonus spells are added to her spells known at the appropriate levels."
      },
      {
        "name": "Surgir del Conducto (Su)",
        "name_en": "Conduit Surge (Su)",
        "description_es": "Como acción rápida, aumenta el nivel de lanzador del próximo conjuro en 1d4-1 (1d4 a nivel 8); requiere salvación de Fortaleza o queda atascada durante minutos iguales al nivel del conjuro. Usable 3 + mod. Carisma veces al día.",
        "description_en": "As a swift action she boosts her next spell's caster level by 1d4-1 (1d4 at 8th); a failed Fortitude save staggers her for minutes equal to the spell level. Usable 3 + Cha mod times per day."
      }
    ],
    "sub_options": {
      "hexes": "Debe elegir el patrón de Naturaleza o Tierra. Hexes disponibles centrados en la tierra y las líneas ley. Puede elegir hexes especiales de línea ley que no están disponibles para brujas normales. / Must choose the Nature or Earth patron. Available hexes focused on earth and ley lines. Can choose special ley line hexes not available to normal witches.",
      "patrons": "El patrón debe ser Naturaleza, Tierra o Plantas. Patrones no relacionados con la tierra no están disponibles. / Patron must be Nature, Earth, or Plants. Non-earth-related patrons unavailable."
    }
  },
  "havocker": {
    "class": "witch",
    "name": "Havocker",
    "name_en": "Havocker",
    "name_es": "Devastadora",
    "source": "Pathfinder Player Companion: Magic Tactics Toolbox",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/witch/archetypes/paizo-witch-archetypes/havocker-witch-archetype/",
    "description_es": "Bruja elementalista que reemplaza a su familiar y casi todos sus hexs por foco elemental y explosión cinética de cineticista, sacrificando conjuros para alimentar infusiones.",
    "description_en": "An elementalist witch who trades her familiar and nearly all hexes for a kineticist's elemental focus and kinetic blast, burning prepared spells to fuel infusions.",
    "features_removed": [
      "Familiar (1)",
      "Hex (1)",
      "Hex (2+)",
      "Major Hex",
      "Grand Hex"
    ],
    "features_gained": [
      {
        "name": "Patrón Elemental",
        "name_en": "Patron Element",
        "description_es": "Elige un elemento de cineticista en lugar de un patrón normal y obtiene foco elemental y explosión cinética; sus niveles de bruja cuentan como niveles de cineticista para esas habilidades.",
        "description_en": "Chooses a kineticist element instead of a normal patron, gaining elemental focus and kinetic blast; her witch levels count as kineticist levels for those abilities."
      },
      {
        "name": "Quema de Conjuros",
        "name_en": "Spellburn",
        "description_es": "Sacrifica un conjuro de bruja preparado para aplicar una infusión a su explosión cinética; el nivel del conjuro debe igualar o superar el de la infusión y no puede aceptar quemadura adicional así.",
        "description_en": "Sacrifices a prepared witch spell to apply an infusion to her kinetic blast; spell level must meet or exceed the infusion level and she cannot take extra burn this way."
      },
      {
        "name": "Infusión",
        "name_en": "Infusion",
        "description_es": "A nivel 2 y cada 4 niveles obtiene una infusión de talento salvaje basada en su foco elemental, funcionando como la habilidad de cineticista del mismo nombre.",
        "description_en": "At 2nd level and every 4 levels she gains an infusion wild talent based on her elemental focus, functioning as the kineticist ability of the same name."
      }
    ],
    "sub_options": {
      "hexes": "Reemplaza todos sus hexes por explosiones cinéticas (kinetic blast). El tipo de explosión refleja el patrón elegido. Solo puede elegir hexes que amplíen el blast (no hexes de maldición o debilitamiento). / Replaces all hexes with kinetic blasts. Blast type reflects chosen patron. Can only choose hexes that enhance the blast (not curse or weakening hexes).",
      "patrons": "El patrón determina el elemento del blast de la bruja destructora (patrón Fuego = blast de fuego, patrón Tempestad = blast de rayo). / Patron determines the element of the havocker witch's blast (Fire patron = fire blast, Tempest patron = lightning blast)."
    }
  },
  "scrollmaster": {
    "class": "wizard",
    "name": "Scrollmaster",
    "name_en": "Scrollmaster",
    "name_es": "Maestro de Pergaminos",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/wizard/archetypes/paizo-wizard-archetypes/scrollmaster/",
    "description_es": "Mago que empuña sus pergaminos como armas y escudos mágicos, sacrificando vínculo arcano y un dote de bonificación a cambio de combate con pergaminos.",
    "description_en": "A wizard who wields his scrolls as magical blades and shields, trading arcane bond and a bonus feat for scroll combat.",
    "features_removed": [
      "Arcane Bond (1)",
      "Bonus Feat (10)"
    ],
    "features_gained": [
      {
        "name": "Hoja de Pergamino (Su)",
        "name_en": "Scroll Blade (Su)",
        "description_es": "Empuña un pergamino como espada corta con bono de mejora igual al hechizo más alto que contiene. A nivel 3 puede cambiar el bono por alcance; a nivel 5 puede añadir propiedades como afilada, escarcha o descarga reduciendo el bono.",
        "description_en": "Wields a scroll as a short sword with an enhancement bonus equal to the highest spell it contains. At 3rd level he can trade the bonus for reach; at 5th he may add properties like keen, frost or shock by reducing the bonus.",
        "level": 1
      },
      {
        "name": "Escudo de Pergamino (Su)",
        "name_en": "Scroll Shield (Su)",
        "description_es": "Empuña un pergamino como escudo ligero de madera con +1 a CA más bono de mejora. A nivel 5 puede añadir propiedades como toque etéreo o fortificación reduciendo el bono.",
        "description_en": "Wields a scroll as a light wooden shield with +1 shield bonus plus enhancement. At 5th level he may add properties like ghost touch or fortification by reducing the bonus.",
        "level": 1
      },
      {
        "name": "Lectura de Pergaminos Mejorada (Su)",
        "name_en": "Improved Scroll Casting (Su)",
        "description_es": "A nivel 10 lanza conjuros de pergaminos descifrados usando su propia Inteligencia, dotes y nivel de lanzador en lugar de los del pergamino.",
        "description_en": "At 10th level he casts spells from deciphered scrolls using his own Intelligence, feats and caster level instead of the scroll's.",
        "level": 10
      }
    ]
  },
  "siege_mage": {
    "class": "wizard",
    "name": "Siege Mage",
    "name_en": "Siege Mage",
    "name_es": "Mago de Asedio",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/wizard/archetypes/paizo-wizard-archetypes/siege-mage/",
    "description_es": "Mago especializado en apoyar y manipular máquinas de asedio a distancia, sacrificando vínculo arcano, escuela y trucos a cambio de pericia con artillería.",
    "description_en": "A wizard specialized in supporting and remotely operating siege engines, trading arcane bond, school and most cantrips for siege-engine mastery.",
    "features_removed": [
      "Scribe Scroll (1)",
      "Arcane School (1)",
      "Arcane Bond (1)",
      "Cantrips"
    ],
    "features_gained": [
      {
        "name": "Ingeniero de Asedio",
        "name_en": "Siege Engineer",
        "description_es": "Recibe el dote de combate Ingeniero de Asedio sin necesidad de cumplir requisitos.",
        "description_en": "Gains the Siege Engineer combat feat without meeting prerequisites.",
        "level": 1
      },
      {
        "name": "Vínculo con Máquina de Asedio (Su)",
        "name_en": "Siege Engine Bond (Su)",
        "description_es": "Se vincula con una máquina de asedio a 30 pies para apuntarla y dispararla a distancia. A nivel 10 puede recargarla sin tripulación. Usos diarios iguales al modificador de Inteligencia (mín. 1).",
        "description_en": "Bonds with a siege engine within 30 ft to remotely aim and fire it. At 10th level he can reload it without a crew. Usable a number of times per day equal to Int mod (min 1).",
        "level": 1
      },
      {
        "name": "Empoderar Máquina de Asedio (Su)",
        "name_en": "Empower Siege Engine (Su)",
        "description_es": "Como acción rápida sacrifica un conjuro preparado para añadir su nivel al ataque y 3 veces su nivel al daño del próximo disparo de la máquina.",
        "description_en": "As a swift action he sacrifices a prepared spell to grant the next siege engine attack a bonus to attack equal to spell level and damage equal to 3x spell level.",
        "level": 1
      },
      {
        "name": "Escuela de Asedio",
        "name_en": "Siege School",
        "description_es": "Renuncia a tres escuelas de magia a nivel 1; preparar conjuros de oposición cuesta dos huecos y crear objetos mágicos con esos conjuros sufre -4. Recibe detectar magia y leer magia como trucos.",
        "description_en": "Forsakes three schools at 1st level; preparing opposition spells costs two slots and crafting items with them takes -4. Gains detect magic and read magic as cantrips.",
        "level": 1
      }
    ],
    "sub_options": {
      "schools": "Debe especializarse en Evocación (escuela de daño/bombardeo). Las escuelas de conjuración o encantamiento no están disponibles como especialización. Los hechizos de Evocación tienen CD+1 y alcance +25% cuando se lanzan a través de motores de asedio. / Must specialize in Evocation (damage/bombardment school). Conjuration or enchantment schools unavailable for specialization. Evocation spells gain DC+1 and range +25% when cast through siege engines."
    }
  },
  "spirit_binder": {
    "class": "wizard",
    "name": "Spirit Binder",
    "name_en": "Spirit Binder",
    "name_es": "Vinculador de Espíritus",
    "source": "Pathfinder Player Companion: Familiar Folio",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/wizard/archetypes/paizo-wizard-archetypes/spirit-binder-wizard-archetype/",
    "description_es": "Mago cuyo familiar alberga el alma de un ser querido fallecido, sacrificando Escribir Pergaminos y dotes de bono a cambio de un familiar empoderado.",
    "description_en": "A wizard whose familiar houses the soul of a departed loved one, trading Scribe Scroll and wizard bonus feats for an empowered companion.",
    "features_removed": [
      "Scribe Scroll (1)",
      "Bonus Feats"
    ],
    "features_gained": [
      {
        "name": "Familiar Vinculado al Alma (Ex)",
        "name_en": "Soulbound Familiar (Ex)",
        "description_es": "El familiar conserva la personalidad del difunto; puede ser de cualquier alineamiento y usa la clase favorita del ser querido para BAB y salvaciones.",
        "description_en": "The familiar retains the deceased's personality; it may be any alignment and uses the loved one's favored class for BAB and saves.",
        "level": 1
      },
      {
        "name": "Sin Necromancia Opuesta",
        "name_en": "No Opposed Necromancy",
        "description_es": "Un vinculador de espíritus no puede elegir la escuela de Necromancia como escuela de oposición.",
        "description_en": "A spirit binder cannot choose Necromancy as an opposition school.",
        "level": 1
      },
      {
        "name": "Talentos Perdidos (Ex)",
        "name_en": "Lost Talents (Ex)",
        "description_es": "En los niveles 1, 5 y cada 5 niveles después, el familiar gana un dote de bono para el que cumpla los requisitos.",
        "description_en": "At 1st, 5th and every 5 levels thereafter, the familiar gains a bonus feat for which it qualifies.",
        "level": 1
      }
    ],
    "sub_options": {
      "schools": "Puede vincular espíritus a sus libros de hechizos; cada espíritu otorga acceso a una escuela arcana adicional. No tiene oposición de escuelas pero tiene restricción de espíritu: solo puede vincular un espíritu por nivel. / Can bind spirits to spellbooks; each spirit grants access to an additional arcane school. No school opposition but has spirit restriction: can only bind one spirit per level.",
      "spirits": "Vincula espíritus a sus libros de hechizos. Cada espíritu provee poderes pasivos relacionados con una escuela arcana. Los espíritus pueden ser de cualquier plano pero deben ser sometidos mediante rituales de vinculación. / Binds spirits to spellbooks. Each spirit provides passive powers related to an arcane school. Spirits can be from any plane but must be subjected to binding rituals."
    }
  },
  "arcane_bomber": {
    "class": "wizard",
    "name": "Arcane Bomber",
    "name_en": "Arcane Bomber",
    "name_es": "Bombardero Arcano",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/wizard/archetypes/paizo-wizard-archetypes/arcane-bomber/",
    "description_es": "Mago que mezcla magia con bombas alquímicas, intercambiando vínculo arcano, trucos y escuela por bombas potenciadas con conjuros.",
    "description_en": "A wizard who blends magic with alchemical bombs, exchanging arcane bond, cantrips and school for spell-fueled bombs.",
    "features_removed": [
      "Arcane Bond (1)",
      "Arcane School (1)",
      "Cantrips"
    ],
    "features_gained": [
      {
        "name": "Bomba (Su)",
        "name_en": "Bomb (Su)",
        "description_es": "A nivel 1 elige un tipo de energía (ácido, frío, fuego o eléctrico) y lanza bombas como un alquimista; el daño se acumula con niveles reales de alquimista.",
        "description_en": "At 1st level he picks an energy type (acid, cold, fire or electricity) and throws bombs as an alchemist; damage stacks with actual alchemist levels.",
        "level": 1
      },
      {
        "name": "Bombas de Estallido Mágico (Su)",
        "name_en": "Spellblast Bombs (Su)",
        "description_es": "Como acción rápida, sacrifica un conjuro preparado para añadir su nivel como bono al ataque y daño de la próxima bomba lanzada en ese turno.",
        "description_en": "As a swift action, sacrifices a prepared spell to grant the next bomb thrown that turn a bonus to attack and damage equal to the spell's level.",
        "level": 1
      },
      {
        "name": "Escuela de la Bomba",
        "name_en": "School of the Bomb",
        "description_es": "Debe elegir cuatro escuelas de oposición; preparar conjuros de esas escuelas cuesta dos huecos y crear objetos mágicos con ellas sufre -4.",
        "description_en": "Must select four opposition schools; preparing spells from them costs two slots and crafting items with them takes -4.",
        "level": 1
      }
    ],
    "sub_options": {
      "schools": "Debe especializarse en Evocación o Transmutación. Las otras escuelas tienen penalización de -1 por dado de daño en conjuros explosivos. La especialización da acceso a la habilidad \"Bomba Arcana\" (área de efecto mejorada). / Must specialize in Evocation or Transmutation. Other schools have -1 per damage die in explosive spells. Specialization grants access to \"Arcane Bomb\" ability (enhanced area of effect)."
    }
  },
  "spell_sage": {
    "class": "wizard",
    "name": "Spell Sage",
    "name_en": "Spell Sage",
    "name_es": "Sabio de Conjuros",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/wizard/archetypes/paizo-wizard-archetypes/spell-sage/",
    "description_es": "Mago erudito que estudia hechizos de otras tradiciones y enfoca su poder mágico, sacrificando vínculo arcano y escuela por flexibilidad sin igual.",
    "description_en": "A scholarly wizard who studies spells of other traditions and focuses his magical power, sacrificing arcane bond and school for unmatched flexibility.",
    "features_removed": [
      "Arcane Bond (1)",
      "Arcane School (1)"
    ],
    "features_gained": [
      {
        "name": "Conjuros Enfocados (Su)",
        "name_en": "Focused Spells (Su)",
        "description_es": "Una vez al día (dos a nivel 8, tres a nivel 16) puede aumentar su nivel de lanzador en +4 para un solo conjuro.",
        "description_en": "Once per day (twice at 8th, thrice at 16th) he may increase his caster level by +4 for a single spell.",
        "level": 1
      },
      {
        "name": "Estudio de Conjuros (Su)",
        "name_en": "Spell Study (Su)",
        "description_es": "A nivel 2, gastando 1 asalto completo por nivel del conjuro y dos conjuros preparados de igual o mayor nivel, lanza un conjuro de la lista de bardo, clérigo o druida como conjuro de mago. Gana usos extra a niveles 6, 11 y 16.",
        "description_en": "At 2nd level, by spending 1 full round per spell level and two prepared spells of equal or higher level, he casts a bard, cleric or druid spell as a wizard spell. Extra uses at 6th, 11th and 16th.",
        "level": 1
      }
    ],
    "sub_options": {
      "schools": "No se especializa en ninguna escuela. Puede lanzar hechizos de todas las escuelas sin penalización de hechicería opuesta. Puede identificar hechizos con tirada de Conocimiento (Arcana). / Does not specialize. Can cast from all schools without opposed school restrictions. Can identify spells with Knowledge (Arcana) checks."
    }
  },
  "savage_technologist": {
    "class": "unchained_barbarian",
    "name": "Savage Technologist",
    "name_en": "Savage Technologist",
    "name_es": "Tecnólogo Salvaje",
    "source": "Pathfinder Campaign Setting: Technology Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/savage-technologist/",
    "description_es": "Bárbaro que combina su furia con armas de fuego primitivas, alterando la furia para favorecer la Destreza y disparando entre golpes. Adaptable al bárbaro desencadenado.",
    "description_en": "A barbarian who fuses his rage with primitive firearms, altering rage to favor Dexterity and shooting between strikes. Adaptable to the unchained barbarian.",
    "features_removed": [
      "Uncanny Dodge (2)",
      "Improved Uncanny Dodge (5)"
    ],
    "features_gained": [
      {
        "name": "Furia Alterada",
        "name_en": "Altered Rage",
        "description_es": "Su furia otorga bonos morales a Fuerza y Destreza en vez de Fuerza y Constitución, sin penalización a CA.",
        "description_en": "His rage grants morale bonuses to Strength and Dexterity instead of Strength and Constitution, with no AC penalty.",
        "level": 1
      },
      {
        "name": "Espada y Pistola (Ex)",
        "name_en": "Sword and Gun (Ex)",
        "description_es": "A nivel 2, mientras está furioso con un arma de fuego de una mano y un arma cuerpo a cuerpo, puede atacar a distancia sin provocar AdO y obtiene los beneficios de Combate con Dos Armas.",
        "description_en": "At 2nd level, while raging with a one-handed firearm and a melee weapon, he may make ranged attacks without provoking AoO and gains Two-Weapon Fighting benefits.",
        "level": 2
      },
      {
        "name": "Magnetismo Primal (Ex)",
        "name_en": "Primal Magnetism (Ex)",
        "description_es": "A nivel 3 añade su modificador de Fuerza a Diplomacia con culturas tribales y puede gastar 2 asaltos de furia para un bono igual a la mitad de su nivel.",
        "description_en": "At 3rd level adds his Strength modifier to Diplomacy with tribal cultures and may spend 2 rounds of rage for a bonus equal to half his level.",
        "level": 2
      },
      {
        "name": "Tirador Certero (Ex)",
        "name_en": "Crack Shot (Ex)",
        "description_es": "A nivel 5 añade su modificador de Destreza al daño con armas de fuego mientras está enfurecido.",
        "description_en": "At 5th level adds his Dexterity modifier to firearm damage rolls while raging.",
        "level": 5
      }
    ],
    "class_skills_add": [
      "diplomacy",
      "knowledge_local",
      "sense_motive"
    ],
    "class_skills_remove": [
      "handle_animal",
      "knowledge_nature"
    ]
  },
  "spirit_summoner_unchained": {
    "class": "unchained_summoner",
    "name": "Spirit Summoner",
    "name_en": "Spirit Summoner",
    "name_es": "Convocadora de Espíritus",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/spirit-summoner/",
    "description_es": "Convocadora que vincula su eidolon a un espíritu de chamán y obtiene hexes, sacrificando convocar monstruo, aspecto y varias habilidades del eidolon.",
    "description_en": "A summoner who binds her eidolon to a shaman spirit and gains hexes, trading summon monster, aspect and several eidolon abilities.",
    "features_removed": [
      "Summon Monster",
      "Aspect",
      "Maker's Call",
      "Merge Forms",
      "Transposition"
    ],
    "features_gained": [
      {
        "name": "Espíritu (Su)",
        "name_en": "Spirit (Su)",
        "description_es": "Se vincula con un espíritu de chamán y gana sus habilidades y conjuros asociados.",
        "description_en": "Bonds with a shaman spirit and gains its abilities and associated spells.",
        "level": 1
      },
      {
        "name": "Eidolon Modificado",
        "name_en": "Modified Eidolon",
        "description_es": "La forma de su eidolon debe ajustarse al tema del espíritu elegido.",
        "description_en": "Her eidolon's form must align with the theme of the chosen spirit.",
        "level": 1
      },
      {
        "name": "Hex",
        "name_en": "Hex",
        "description_es": "A nivel 6 elige un hex de chamán, con selecciones adicionales a niveles 8, 10 y 16.",
        "description_en": "At 6th level she chooses a shaman hex, with additional selections at 8th, 10th and 16th.",
        "level": 1
      }
    ],
    "sub_options": {
      "spirits": "Variante Unchained del spirit_summoner. El eidolón actúa como espíritu de chamán. Acceso a espíritu de chamán elegido al inicio. / Unchained variant of spirit_summoner. Eidolon acts as a shaman spirit. Access to chosen shaman spirit at creation.",
      "hexes": "Los hexes del espíritu de chamán elegido están disponibles a través del vínculo con el eidolón. / The chosen shaman spirit's hexes are available through the eidolon bond."
    }
  },
  "martial_artist_unchained": {
    "class": "unchained_monk",
    "name": "Martial Artist",
    "name_en": "Martial Artist",
    "name_es": "Artista Marcial",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/martial-artist/",
    "description_es": "Monje sin orientación mística cuyo entrenamiento físico reemplaza al ki y a las habilidades sobrenaturales. Funciona como variante laica del monje desencadenado.",
    "description_en": "A monk without mystical orientation whose physical training replaces ki and supernatural abilities. Works as a secular variant of the unchained monk.",
    "features_removed": [
      "Ki Pool",
      "Still Mind",
      "Slow Fall",
      "Purity of Body",
      "Wholeness of Body",
      "Diamond Body",
      "Diamond Soul",
      "Abundant Step",
      "Empty Body",
      "Tongue of Sun and Moon",
      "Timeless Body",
      "Perfect Self"
    ],
    "features_gained": [
      {
        "name": "Puntos de Dolor (Ex)",
        "name_en": "Pain Points (Ex)",
        "description_es": "A nivel 3 gana +1 al confirmar críticos y aumenta la CD de Puño Aturdidor y palma temblorosa.",
        "description_en": "At 3rd level gains +1 to confirm criticals and raises the DC of Stunning Fist and quivering palm."
      },
      {
        "name": "Maestro del Arte Marcial (Ex)",
        "name_en": "Martial Arts Master (Ex)",
        "description_es": "A nivel 4 usa su nivel de monje como nivel de guerrero para los requisitos de dotes de guerrero referidos a ataques desarmados.",
        "description_en": "At 4th level uses his monk level as fighter level for fighter feat prerequisites involving unarmed strikes."
      },
      {
        "name": "Explotar Debilidad (Ex)",
        "name_en": "Exploit Weakness (Ex)",
        "description_es": "A nivel 4, como acción rápida puede analizar a un enemigo para encontrar puntos débiles e ignorar parte de su RD o resistencias.",
        "description_en": "At 4th level, as a swift action he may analyze a foe to find weak points and ignore some of its DR or resistances.",
        "level": 4
      },
      {
        "name": "Resistencia Extrema (Ex)",
        "name_en": "Extreme Endurance (Ex)",
        "description_es": "Desde nivel 5 obtiene inmunidades crecientes: fatiga, agotamiento, aturdimiento y efectos de muerte.",
        "description_en": "From 5th level he gains escalating immunities: fatigue, exhaustion, stunning and death effects.",
        "level": 5
      },
      {
        "name": "Resistencia Física (Ex)",
        "name_en": "Physical Resistance (Ex)",
        "description_es": "Desde nivel 7 reduce el daño o drenaje de característica que sufre.",
        "description_en": "From 7th level he reduces ability damage and drain he takes.",
        "level": 7
      }
    ]
  },
  "drunken_brute_unchained": {
    "class": "unchained_barbarian",
    "name": "Drunken Brute",
    "name_en": "Drunken Brute",
    "name_es": "Bruto Borracho",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/drunken-brute/",
    "description_es": "Bárbaro que canaliza su furia bebiendo licor en pleno combate, sacrificando movimiento rápido por una furia ebria que se prolonga al beber.",
    "description_en": "A barbarian who fuels his rage by drinking liquor mid-combat, trading fast movement for a drunken rage sustained by alcohol.",
    "features_removed": [
      "Fast Movement (1)"
    ],
    "features_gained": [
      {
        "name": "Furia Ebria (Ex)",
        "name_en": "Raging Drunk (Ex)",
        "description_es": "Mientras está enfurecido, puede consumir una poción o bebida alcohólica como acción de movimiento sin provocar AdO. El alcohol mantiene la furia ese asalto sin gastar usos diarios, pero al terminar la furia queda mareado 1 asalto además de fatigado.",
        "description_en": "While raging, he may consume a potion or alcoholic drink as a move action without provoking AoO. Alcohol sustains rage that round without spending a daily use, but when rage ends he is nauseated for 1 round in addition to fatigued.",
        "level": 1
      }
    ]
  },
  "sensei_unchained": {
    "class": "unchained_monk",
    "name": "Sensei",
    "name_en": "Sensei",
    "name_es": "Sensei",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/sensei/",
    "description_es": "Monje maestro y mentor que inspira a sus aliados como un bardo, intercambiando lluvia de golpes y movimiento rápido por consejo y sabiduría compartida.",
    "description_en": "A teaching, mentoring monk who inspires allies like a bard, trading flurry of blows and fast movement for advice and shared wisdom.",
    "features_removed": [
      "Flurry of Blows",
      "Fast Movement",
      "Evasion",
      "Improved Evasion",
      "Bonus Feat (2)",
      "Bonus Feat (6)",
      "Bonus Feat (10)",
      "Bonus Feat (14)"
    ],
    "features_gained": [
      {
        "name": "Consejo (Ex)",
        "name_en": "Advice (Ex)",
        "description_es": "Funciona como interpretación bárdica usando oratoria: inspirar coraje a nivel 1, inspirar competencia a nivel 3 y inspirar grandeza a nivel 9.",
        "description_en": "Functions as bardic performance via oratory: inspire courage at 1st, inspire competence at 3rd and inspire greatness at 9th.",
        "level": 1
      },
      {
        "name": "Golpe Perspicaz (Ex)",
        "name_en": "Insightful Strike (Ex)",
        "description_es": "A nivel 2 usa su modificador de Sabiduría en lugar de Fuerza o Destreza para los ataques desarmados, ataques con armas de monje y maniobras.",
        "description_en": "At 2nd level uses Wisdom mod in place of Str or Dex for unarmed strikes, monk weapon attacks and combat maneuver checks.",
        "level": 2
      },
      {
        "name": "Sabiduría Mística (Su)",
        "name_en": "Mystic Wisdom (Su)",
        "description_es": "Desde nivel 6 gasta puntos de ki para conceder a un aliado cercano sus propias habilidades de clase; ampliado a niveles 10 y 14.",
        "description_en": "From 6th level he spends ki points to grant his class abilities to a nearby ally; expanded at 10th and 14th.",
        "level": 6
      }
    ],
    "class_skills_add": [
      "diplomacy",
      "linguistics",
      "knowledge_arcana",
      "knowledge_dungeoneering",
      "knowledge_engineering",
      "knowledge_geography",
      "knowledge_local",
      "knowledge_nature",
      "knowledge_nobility",
      "knowledge_planes"
    ]
  },
  "synthesist_unchained": {
    "class": "unchained_summoner",
    "name": "Synthesist",
    "name_en": "Synthesist",
    "name_es": "Sintetizadora",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/synthesist/",
    "description_es": "Convocadora que se fusiona con su eidolon como una armadura viviente, perdiendo habilidades de vínculo a distancia. Adaptable al desencadenado pese a su recelo oficial.",
    "description_en": "A summoner who fuses with her eidolon as living armor, losing her ranged bond abilities. Adaptable to unchained though officially cautioned.",
    "features_removed": [
      "Eidolon (standard)",
      "Bond Senses",
      "Life Link",
      "Life Bond",
      "Shield Ally",
      "Greater Shield Ally",
      "Maker's Call",
      "Transposition",
      "Merge Forms"
    ],
    "features_gained": [
      {
        "name": "Eidolon Fusionado (Su)",
        "name_en": "Fused Eidolon (Su)",
        "description_es": "Se funde con su eidolon, usa sus puntuaciones físicas y conserva las mentales propias; los pg del eidolon son temporales sobre los suyos.",
        "description_en": "Fuses with the eidolon, uses its physical scores while keeping her mental scores; the eidolon's HP become temporary HP over hers.",
        "level": 1
      },
      {
        "name": "Vínculo Fusionado",
        "name_en": "Fused Link",
        "description_es": "Como acción libre puede sacrificar puntos de golpe propios para evitar que los pg temporales del eidolon caigan a 0.",
        "description_en": "As a free action she may sacrifice her own HP to keep the eidolon's temporary HP from reaching 0.",
        "level": 1
      },
      {
        "name": "Fusión Escudada (Su)",
        "name_en": "Shielded Meld (Su)",
        "description_es": "A nivel 4, +2 escudo a CA y +2 circunstancial a salvaciones mientras está fusionada.",
        "description_en": "At 4th level, +2 shield to AC and +2 circumstance to saves while fused.",
        "level": 4
      },
      {
        "name": "Salto del Hacedor (Sp)",
        "name_en": "Maker's Jump (Sp)",
        "description_es": "A nivel 6 lanza puerta dimensional como habilidad mágica mientras está fusionada.",
        "description_en": "At 6th level she casts dimension door as a spell-like ability while fused.",
        "level": 6
      },
      {
        "name": "Formas Divididas",
        "name_en": "Split Forms",
        "description_es": "A nivel 16 se separa en dos criaturas como acción rápida durante un número limitado de asaltos al día.",
        "description_en": "At 16th level she splits into two creatures as a swift action for a limited number of rounds per day.",
        "level": 16
      }
    ]
  },
  "poisoner_unchained": {
    "class": "unchained_rogue",
    "name": "Poisoner",
    "name_en": "Poisoner",
    "name_es": "Envenenadora",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/poisoner/",
    "description_es": "Pícara experta en venenos que renuncia a descubrir y sentir trampas para manipular tóxicos sin riesgo.",
    "description_en": "A rogue expert in toxins who trades trapfinding and trap sense to handle poisons without risk.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Uso de Veneno",
        "name_en": "Poison Use",
        "description_es": "Está entrenada en el uso de venenos y nunca se envenena por accidente al aplicarlos a una hoja.",
        "description_en": "Trained in the use of poison and cannot accidentally poison herself when applying it to a blade.",
        "level": 1
      },
      {
        "name": "Maestra Envenenadora",
        "name_en": "Master Poisoner",
        "description_es": "A nivel 3 puede modificar tipos de veneno mediante Oficio (alquimia) y obtiene un bono igual a la mitad de su nivel a pruebas de habilidad relacionadas con venenos.",
        "description_en": "At 3rd level she may transmute poison types via Craft (alchemy) and gains a bonus equal to half her rogue level on poison-related skill checks.",
        "level": 3
      }
    ]
  },
  "maneuver_master_unchained": {
    "class": "unchained_monk",
    "name": "Maneuver Master",
    "name_en": "Maneuver Master",
    "name_es": "Maestro de Maniobras",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/maneuver-master/",
    "description_es": "Monje especializado en maniobras de combate que reemplaza la lluvia de golpes por una lluvia de maniobras versátil.",
    "description_en": "A monk specialized in combat maneuvers, replacing flurry of blows with a versatile flurry of maneuvers.",
    "features_removed": [
      "Flurry of Blows",
      "Still Mind",
      "Slow Fall",
      "Purity of Body",
      "Diamond Body",
      "Quivering Palm"
    ],
    "features_gained": [
      {
        "name": "Lluvia de Maniobras (Ex)",
        "name_en": "Flurry of Maneuvers (Ex)",
        "description_es": "Como parte de un ataque completo, realiza una maniobra de combate adicional sin penalización.",
        "description_en": "As part of a full-attack action, performs one extra combat maneuver without penalty."
      },
      {
        "name": "Defensa de Maniobras (Ex)",
        "name_en": "Maneuver Defense (Ex)",
        "description_es": "Las criaturas que intenten contra él maniobras para las que él tenga el dote Mejorado provocan un AdO suyo.",
        "description_en": "Creatures attempting maneuvers against him for which he has the Improved feat provoke an AoO from him."
      },
      {
        "name": "Maniobra Confiable",
        "name_en": "Reliable Maneuver",
        "description_es": "Por 1 punto de ki tira dos veces la maniobra de combate y elige el mejor resultado.",
        "description_en": "For 1 ki point he rolls a combat maneuver check twice and uses the better result.",
        "level": 3
      },
      {
        "name": "Maniobra Meditativa",
        "name_en": "Meditative Maneuver",
        "description_es": "Como acción rápida añade su modificador de Sabiduría a una tirada de maniobra.",
        "description_en": "As a swift action adds his Wisdom modifier to a combat maneuver check.",
        "level": 5
      },
      {
        "name": "Maniobra Barredora",
        "name_en": "Sweeping Maneuver",
        "description_es": "Como acción estándar realiza dos maniobras de combate.",
        "description_en": "As a standard action performs two combat maneuvers.",
        "level": 9
      },
      {
        "name": "Maniobra Torbellino",
        "name_en": "Whirlwind Maneuver",
        "description_es": "Una vez al día puede intentar una maniobra contra todos los enemigos a los que amenaza.",
        "description_en": "Once per day he may attempt one maneuver against every foe he threatens.",
        "level": 15
      }
    ]
  },
  "superstitious_unchained": {
    "class": "unchained_barbarian",
    "name": "Superstitious",
    "name_en": "Superstitious",
    "name_es": "Supersticioso",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/superstitious/",
    "description_es": "Bárbaro receloso de la magia que cambia su sentido de las trampas y RD por sentidos sobrehumanos. Compatible con el bárbaro desencadenado.",
    "description_en": "A barbarian wary of magic who trades trap sense and DR for superhuman senses. Compatible with the unchained barbarian.",
    "features_removed": [
      "Trap Sense",
      "Damage Reduction (7)"
    ],
    "features_gained": [
      {
        "name": "Sexto Sentido (Ex)",
        "name_en": "Sixth Sense (Ex)",
        "description_es": "A nivel 3, +1 a iniciativa y +1 perspicacia a CA en asaltos de sorpresa, aumentando +1 cada 3 niveles.",
        "description_en": "At 3rd level, +1 to initiative and +1 insight to AC during surprise rounds, +1 every 3 levels thereafter.",
        "level": 3
      },
      {
        "name": "Sentidos Agudos (Ex)",
        "name_en": "Keen Senses (Ex)",
        "description_es": "A los niveles 7, 10, 13, 16 y 19 obtiene en orden visión con poca luz, visión en la oscuridad de 60 pies, olfato, sentir vibraciones 30 pies y vista ciega 30 pies.",
        "description_en": "At 7th, 10th, 13th, 16th and 19th levels he gains low-light vision, darkvision 60 ft, scent, blindsense 30 ft and blindsight 30 ft.",
        "level": 7
      }
    ]
  },
  "swashbuckler_unchained_rogue": {
    "class": "unchained_rogue",
    "name": "Swashbuckler",
    "name_en": "Swashbuckler",
    "name_es": "Espadachín",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/swashbuckler/",
    "description_es": "Pícara intrépida y elegante que cambia descubrir y sentir trampas por entrenamiento marcial y audacia frente al miedo.",
    "description_en": "A daring, dashing rogue who trades trapfinding and trap sense for martial training and daring boldness.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Entrenamiento Marcial",
        "name_en": "Martial Training",
        "description_es": "A nivel 1 elige un arma marcial para añadirla a sus competencias y puede tomar el talento truco de combate hasta dos veces.",
        "description_en": "At 1st level she chooses one martial weapon to add to her proficiencies and may take the combat trick rogue talent up to twice.",
        "level": 1
      },
      {
        "name": "Audacia",
        "name_en": "Daring",
        "description_es": "Desde nivel 3, +1 moral a Acrobacias y a salvaciones contra miedo, +1 cada 3 niveles.",
        "description_en": "From 3rd level, +1 morale bonus on Acrobatics and on saves vs fear, +1 every 3 levels.",
        "level": 3
      }
    ]
  },
  "master_of_many_styles_unchained": {
    "class": "unchained_monk",
    "name": "Master of Many Styles",
    "name_en": "Master of Many Styles",
    "name_es": "Maestro de Múltiples Estilos",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/master-of-many-styles/",
    "description_es": "Monje que renuncia a la lluvia de golpes para adoptar y combinar varios dotes de estilo simultáneamente.",
    "description_en": "A monk who forsakes flurry of blows to adopt and combine multiple style feats at once.",
    "features_removed": [
      "Flurry of Blows",
      "Bonus Feats (standard)"
    ],
    "features_gained": [
      {
        "name": "Dote de Bono (Estilo)",
        "name_en": "Bonus Feat (Style)",
        "description_es": "Obtiene dotes de estilo o Puño Elemental a nivel 1, 2 y cada 4 niveles. Desde nivel 6 puede elegir un hueco de estilo comodín.",
        "description_en": "Gains style feats or Elemental Fist at levels 1, 2 and every 4 levels. From 6th level he may instead choose a wildcard style slot."
      },
      {
        "name": "Fusión de Estilos",
        "name_en": "Fuse Style",
        "description_es": "Mantiene activas dos posturas de estilo a la vez (nivel 1). A nivel 8 fusiona tres estilos con bonos al ataque; a nivel 15 fusiona cuatro como acción libre.",
        "description_en": "Maintains two style stances active at once (level 1). At 8th he fuses three styles with attack bonuses; at 15th he fuses four as a free action."
      },
      {
        "name": "Estilo Perfecto",
        "name_en": "Perfect Style",
        "description_es": "A nivel 20 mantiene cinco posturas de estilo simultáneamente y puede cambiarlas como acción libre.",
        "description_en": "At 20th level he maintains five style stances at once and may change them as a free action.",
        "level": 15
      }
    ]
  },
  "acrobat_unchained_rogue": {
    "class": "unchained_rogue",
    "name": "Acrobat",
    "name_en": "Acrobat",
    "name_es": "Acróbata",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/acrobat/",
    "description_es": "Pícara ágil que se especializa en saltos y movimientos acrobáticos, intercambiando descubrir trampas por bonos a habilidades físicas.",
    "description_en": "A nimble rogue specialized in tumbling and acrobatic motion, trading trapfinding for bonuses on physical skills.",
    "features_removed": [
      "Trapfinding"
    ],
    "features_gained": [
      {
        "name": "Acróbata Experta (Ex)",
        "name_en": "Expert Acrobat (Ex)",
        "description_es": "A nivel 1 ignora la penalización por armadura en Acrobacias, Trepar, Volar, Juego de Manos y Sigilo cuando viste armadura ligera, y obtiene +2 a Acrobacias y Volar sin armadura.",
        "description_en": "At 1st level she ignores armor check penalties on Acrobatics, Climb, Fly, Sleight of Hand and Stealth in light armor, and gains +2 to Acrobatics and Fly when unarmored.",
        "level": 1
      },
      {
        "name": "Segunda Oportunidad (Ex)",
        "name_en": "Second Chance (Ex)",
        "description_es": "A nivel 3 puede repetir una prueba de Acrobacias, Trepar o Volar con -5; usable una vez por día y aumentando un uso cada 3 niveles.",
        "description_en": "At 3rd level she may reroll an Acrobatics, Climb or Fly check at -5; once per day, plus one extra use every 3 levels.",
        "level": 3
      }
    ]
  },
  "sniper_unchained_rogue": {
    "class": "unchained_rogue",
    "name": "Sniper",
    "name_en": "Sniper",
    "name_es": "Francotiradora",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/sniper/",
    "description_es": "Pícara experta en arco y ballesta que extiende su ataque furtivo a distancia, sacrificando descubrir y sentir trampas.",
    "description_en": "A bow- and crossbow-focused rogue who extends her sneak attack at range, trading trapfinding and trap sense.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Precisión",
        "name_en": "Accuracy",
        "description_es": "A nivel 1 reduce a la mitad las penalizaciones por incremento de alcance al disparar arcos o ballestas.",
        "description_en": "At 1st level she halves all range increment penalties when making ranged attacks with a bow or crossbow.",
        "level": 1
      },
      {
        "name": "Alcance Mortal",
        "name_en": "Deadly Range",
        "description_es": "A nivel 3 amplía 10 pies el alcance de su ataque furtivo y otros 10 cada 3 niveles.",
        "description_en": "At 3rd level she extends sneak attack range by 10 feet, plus 10 more every 3 levels.",
        "level": 3
      }
    ]
  },
  "tetori_unchained": {
    "class": "unchained_monk",
    "name": "Tetori",
    "name_en": "Tetori",
    "name_es": "Tetori",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/monk/archetypes/paizo-monk-archetypes/tetori/",
    "description_es": "Monje grappler total que renuncia a lluvia de golpes y muchas habilidades sobrenaturales para dominar la presa absoluta.",
    "description_en": "A grappling-focused monk who forsakes flurry of blows and many supernatural abilities to master absolute grappling.",
    "features_removed": [
      "Flurry of Blows",
      "Slow Fall",
      "High Jump",
      "Abundant Step",
      "Improved Evasion",
      "Diamond Soul",
      "Empty Body",
      "Timeless Body",
      "Tongue of Sun and Moon"
    ],
    "features_gained": [
      {
        "name": "Apresador Grácil (Ex)",
        "name_en": "Graceful Grappler (Ex)",
        "description_es": "Usa su nivel de monje para los cálculos de presa y obtiene los ataques especiales agarrar y constreñir.",
        "description_en": "Uses his monk level for grapple calculations and gains the grab and constrict special attacks.",
        "level": 1
      },
      {
        "name": "Contra-presa (Ex)",
        "name_en": "Counter-Grapple (Ex)",
        "description_es": "Hace AdO contra criaturas que intenten apresarlo.",
        "description_en": "Makes AoO against creatures attempting to grapple him.",
        "level": 4
      },
      {
        "name": "Liberarse (Ex)",
        "name_en": "Break Free (Ex)",
        "description_es": "Bonos para escapar de presas y resistir condiciones que lo restringen.",
        "description_en": "Bonuses to escape grapples and resist restraining conditions.",
        "level": 5
      },
      {
        "name": "Garra Inescapable (Su)",
        "name_en": "Inescapable Grasp (Su)",
        "description_es": "Suprime libertad de movimiento y bonos mágicos a Escapismo de su oponente.",
        "description_en": "Suppresses freedom of movement and magical bonuses to Escape Artist on his opponent.",
        "level": 9
      },
      {
        "name": "Fijar Forma (Su)",
        "name_en": "Form Lock (Su)",
        "description_es": "Mediante toque puede negar efectos de polimorfia.",
        "description_en": "By touch he negates polymorph effects.",
        "level": 13
      },
      {
        "name": "Cuerpo de Hierro (Su)",
        "name_en": "Iron Body (Su)",
        "description_es": "Activa el efecto del conjuro cuerpo de hierro sobre sí mismo.",
        "description_en": "Activates iron body upon himself.",
        "level": 19
      }
    ]
  },
  "invulnerable_rager_unchained": {
    "class": "unchained_barbarian",
    "name": "Invulnerable Rager",
    "name_en": "Invulnerable Rager",
    "name_es": "Furioso Invulnerable",
    "source": "Advanced Player's Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/invulnerable-rager/",
    "description_es": "Bárbaro que canaliza su furia en una resistencia al daño extraordinaria y resistencia a los elementos, perdiendo esquivar increíble y sentir trampas. Compatible con el bárbaro desencadenado al sustituir las mismas habilidades.",
    "description_en": "A barbarian who channels his rage into extraordinary damage reduction and elemental resilience, losing uncanny dodge and trap sense. Compatible with the unchained barbarian, swapping the same abilities.",
    "features_removed": [
      "Uncanny Dodge (2)",
      "Improved Uncanny Dodge (5)",
      "Damage Reduction (7)",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Invulnerabilidad (Ex)",
        "name_en": "Invulnerability (Ex)",
        "description_es": "A nivel 2 obtiene RD/— igual a la mitad de su nivel de bárbaro; esta reducción se duplica contra daño no letal.",
        "description_en": "At 2nd level gains DR/— equal to half his barbarian level; this DR is doubled against nonlethal damage.",
        "level": 2
      },
      {
        "name": "Resistencia Extrema (Ex)",
        "name_en": "Extreme Endurance (Ex)",
        "description_es": "A nivel 3 elige climas fríos o cálidos y se vuelve inmune a sus efectos, ganando resistencia 1 al fuego o al frío que aumenta cada 3 niveles.",
        "description_en": "At 3rd level he picks hot or cold climate, becoming immune to its effects and gaining fire or cold resistance 1 that scales every 3 levels.",
        "level": 3
      }
    ]
  },
  "knife_master_unchained": {
    "class": "unchained_rogue",
    "name": "Knife Master",
    "name_en": "Knife Master",
    "name_es": "Maestro del Cuchillo",
    "source": "Ultimate Combat",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/rogue/archetypes/paizo-rogue-archetypes/knife-master/",
    "description_es": "Pícaro especializado en hojas ligeras cuyo ataque furtivo con dagas usa d8 en lugar de d6, sacrificando descubrir trampas y sentir trampas. Compatible con el pícaro desencadenado.",
    "description_en": "A rogue specialized in light blades whose sneak attack with daggers uses d8s instead of d6s, trading trapfinding and trap sense. Compatible with the unchained rogue.",
    "features_removed": [
      "Trapfinding",
      "Trap Sense"
    ],
    "features_gained": [
      {
        "name": "Hoja Oculta",
        "name_en": "Hidden Blade",
        "description_es": "Añade la mitad de su nivel de pícaro a las pruebas de Juego de Manos para esconder hojas ligeras.",
        "description_en": "Adds half her rogue level to Sleight of Hand checks to conceal light blades."
      },
      {
        "name": "Puñalada Furtiva",
        "name_en": "Sneak Stab",
        "description_es": "Tira d8 en lugar de d6 para el daño del ataque furtivo con dagas y armas similares; con cualquier otra arma usa d4.",
        "description_en": "Rolls d8s instead of d6s for sneak attack damage with daggers and similar light blades; uses d4s with all other weapons."
      },
      {
        "name": "Sentido de la Hoja",
        "name_en": "Blade Sense",
        "description_es": "Bono esquiva a CA contra ataques con hojas ligeras, +1 a nivel 3 y aumentando hasta +6 a nivel 18.",
        "description_en": "Dodge bonus to AC vs light-blade attacks, +1 at 3rd level scaling up to +6 at 18th.",
        "level": 3
      }
    ]
  },
  "master_summoner_unchained": {
    "class": "unchained_summoner",
    "name": "Master Summoner",
    "name_en": "Master Summoner",
    "name_es": "Maestra Convocadora",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/master-summoner/",
    "description_es": "Convocadora con un eidolon menor que compensa con un poder de convocación de monstruos extremadamente frecuente.",
    "description_en": "A summoner with a lesser eidolon who compensates with extremely frequent summon-monster spell-like abilities.",
    "features_removed": [
      "Standard Eidolon",
      "Shield Ally",
      "Bond Senses",
      "Summon Monster I (standard)"
    ],
    "features_gained": [
      {
        "name": "Eidolon Menor",
        "name_en": "Lesser Eidolon",
        "description_es": "Su nivel de clase se considera la mitad (mínimo 1) para determinar las habilidades de su eidolon.",
        "description_en": "Her class level is halved (minimum 1) for determining her eidolon's abilities."
      },
      {
        "name": "Maestría en Convocación (Sp)",
        "name_en": "Summoning Mastery (Sp)",
        "description_es": "Lanza convocar monstruo I como habilidad mágica varias veces al día con capacidades ampliadas cuando su eidolon no está presente.",
        "description_en": "Casts summon monster I as a spell-like ability multiple times per day, with expanded summons when her eidolon is not active."
      },
      {
        "name": "Aumentar Convocación",
        "name_en": "Augment Summoning",
        "description_es": "Recibe Aumentar Convocación como dote de bono a nivel 2 sin cumplir requisitos.",
        "description_en": "Gains Augment Summoning as a bonus feat at 2nd level without meeting prerequisites.",
        "level": 2
      }
    ]
  },
  "broodmaster_unchained": {
    "class": "unchained_summoner",
    "name": "Broodmaster",
    "name_en": "Broodmaster",
    "name_es": "Maestro de la Camada",
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/broodmaster/",
    "description_es": "Convocador que comanda dos eidolones pequeños en lugar de uno solo, dividiendo estadísticas y vínculos entre ambos.",
    "description_en": "A summoner who commands two Small eidolons instead of one, dividing statistics and bonds between them.",
    "features_removed": [
      "Eidolon (standard)",
      "Life Link",
      "Life Bond"
    ],
    "features_gained": [
      {
        "name": "Camada de Eidolones",
        "name_en": "Eidolon Brood",
        "description_es": "Comanda dos eidolones Pequeños cuyas estadísticas base (DG, puntos de habilidad, dotes y bono de armadura) deben dividirse entre los dos.",
        "description_en": "Commands two Small eidolons whose base statistics (HD, skill points, feats and armor bonus) must be divided between them.",
        "level": 1
      },
      {
        "name": "Vínculo de Camada",
        "name_en": "Brood Link",
        "description_es": "Funciona como vínculo vital pero solo puede sacrificar pg para evitar daño a un eidolon de la camada por vez.",
        "description_en": "Works like life link but he can only sacrifice HP to prevent damage to one eidolon at a time.",
        "level": 1
      },
      {
        "name": "Sentidos Vinculados",
        "name_en": "Bond Senses",
        "description_es": "Comparte los sentidos solo con un eidolon a la vez.",
        "description_en": "Shares senses with only one eidolon at a time.",
        "level": 6
      },
      {
        "name": "Camada Mayor",
        "name_en": "Larger Brood",
        "description_es": "A nivel 8, gastando 4 puntos de evolución, puede tener dos eidolones medianos o cuatro pequeños; a nivel 13, con 6 puntos, puede tener uno enorme.",
        "description_en": "At 8th level, by spending 4 evolution points, he may have two Medium or four Small eidolons; at 13th, with 6 points, one Huge.",
        "level": 8
      },
      {
        "name": "Lazo de Camada",
        "name_en": "Brood Bond",
        "description_es": "A nivel 14 puede transferir daño a un eidolon de su camada; reemplaza vínculo vital.",
        "description_en": "At 14th level he may transfer damage to one eidolon in his brood; replaces life bond.",
        "level": 14
      }
    ],
    "sub_options": {
      "evolutions": "Variante Unchained del broodmaster. Múltiples eidolones menores con PEs divididos. Límite: cada eidolón de la cría recibe PEs totales / número de crías. Las evoluciones se aplican por separado a cada eidolón. / Unchained variant of broodmaster. Multiple minor eidolons with divided EPs. Limit: each brood eidolon receives total EPs / number of brood. Evolutions apply separately to each eidolon."
    }
  },
  "naturalist_summoner_unchained": {
    "class": "unchained_summoner",
    "name": "Naturalist",
    "name_en": "Naturalist",
    "name_es": "Naturalista",
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/archetypes/paizo-summoner-archetypes/naturalist/",
    "description_es": "Convocadora ligada a la naturaleza que invoca aliados naturales y aplica enfoques animales a su eidolon, sacrificando aliado escudo y vínculo vital.",
    "description_en": "A nature-bound summoner who calls nature's allies and applies animal aspects to her eidolon, sacrificing shield ally and life bond.",
    "features_removed": [
      "Shield Ally",
      "Greater Shield Ally",
      "Aspect",
      "Greater Aspect",
      "Life Bond"
    ],
    "features_gained": [
      {
        "name": "Llamado de la Naturaleza (Sp)",
        "name_en": "Nature's Call (Sp)",
        "description_es": "Lanza convocar aliado natural I como habilidad mágica varias veces al día, limitada a animales, bestias mágicas o sabandijas.",
        "description_en": "Casts summon nature's ally I as a spell-like ability multiple times per day, limited to animals, magical beasts or vermin.",
        "level": 1
      },
      {
        "name": "Enfoque Animal (Su)",
        "name_en": "Animal Focus (Su)",
        "description_es": "A nivel 4 aplica un aspecto animal de cazador a su eidolon como acción rápida, otorgándole rasgos físicos del animal elegido.",
        "description_en": "At 4th level she applies a hunter animal aspect to her eidolon as a swift action, granting it physical traits of the chosen animal.",
        "level": 1
      },
      {
        "name": "Segundo Enfoque Animal (Su)",
        "name_en": "Second Animal Focus (Su)",
        "description_es": "A nivel 10 aplica dos aspectos animales distintos al eidolon simultáneamente.",
        "description_en": "At 10th level she applies two different animal aspects to her eidolon at once.",
        "level": 8
      },
      {
        "name": "Enfoque Compartido (Su)",
        "name_en": "Shared Focus (Su)",
        "description_es": "A nivel 14 ella misma gana los efectos de un aspecto aplicado a su eidolon.",
        "description_en": "At 14th level she gains the effects of one aspect applied to her eidolon.",
        "level": 10
      },
      {
        "name": "Tercer Enfoque Animal (Su)",
        "name_en": "Third Animal Focus (Su)",
        "description_es": "A nivel 18 aplica tres aspectos animales distintos al eidolon a la vez.",
        "description_en": "At 18th level she applies three different animal aspects to her eidolon at once.",
        "level": 15
      }
    ]
  },
  "order_of_the_chain": {
    "class": "hellknight",
    "name": "Order of the Chain",
    "name_en": "Order of the Chain",
    "name_es": "Orden de la Cadena",
    "source": "Inner Sea World Guide",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/e-h/hellknight/",
    "description_es": "Hellknights especializados en someter y capturar enemigos vivos, expertos en interrogacion y persecucion de fugitivos.",
    "description_en": "Hellknights specialized in subduing and capturing enemies alive, experts in interrogation and pursuing fugitives.",
    "features_removed": [],
    "features_gained": []
  },
  "order_of_the_godclaw": {
    "class": "hellknight",
    "name": "Order of the Godclaw",
    "name_en": "Order of the Godclaw",
    "name_es": "Orden de la Garra Divina",
    "source": "Inner Sea World Guide",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/e-h/hellknight/",
    "description_es": "Hellknights que veneran cinco deidades legales (Abadar, Asmodeo, Iomedae, Irori, Torag) como aspectos de la ley misma.",
    "description_en": "Hellknights who venerate five lawful deities (Abadar, Asmodeus, Iomedae, Irori, Torag) as aspects of law itself.",
    "features_removed": [],
    "features_gained": []
  },
  "order_of_the_nail": {
    "class": "hellknight",
    "name": "Order of the Nail",
    "name_en": "Order of the Nail",
    "name_es": "Orden del Clavo",
    "source": "Inner Sea World Guide",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/e-h/hellknight/",
    "description_es": "Hellknights fronterizos que combaten a barbaros y monstruos del salvajismo, fortificando los limites de la civilizacion.",
    "description_en": "Frontier Hellknights who battle barbarians and monsters from the wilds, fortifying the boundaries of civilization.",
    "features_removed": [],
    "features_gained": []
  },
  "order_of_the_scourge": {
    "class": "hellknight",
    "name": "Order of the Scourge",
    "name_en": "Order of the Scourge",
    "name_es": "Orden del Azote",
    "source": "Inner Sea World Guide",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/e-h/hellknight/",
    "description_es": "Hellknights que persiguen criminales y administran justicia con dureza implacable en areas urbanas como Cheliax.",
    "description_en": "Hellknights who pursue criminals and administer justice with relentless harshness in urban areas like Cheliax.",
    "features_removed": [],
    "features_gained": []
  },
  "order_of_the_gate": {
    "class": "hellknight",
    "name": "Order of the Gate",
    "name_en": "Order of the Gate",
    "name_es": "Orden de la Puerta",
    "source": "Inner Sea World Guide",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/e-h/hellknight/",
    "description_es": "Hellknights eruditos del destino y los planos, sirvientes de Asmodeo que estudian secretos profeticos y diabolicos.",
    "description_en": "Scholarly Hellknights of fate and the planes, servants of Asmodeus who study prophetic and diabolic secrets.",
    "features_removed": [],
    "features_gained": []
  },
  "crimson_assassin": {
    "class": "red_mantis_assassin",
    "name": "Crimson Assassin",
    "name_en": "Crimson Assassin",
    "name_es": "Asesino Carmesi",
    "source": "Pathfinder Roleplaying Game Adventurer's Guide (2017)",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/c-d/crimson-assassin/",
    "description_es": "Reconstruccion oficial de Paizo del Asesino del Mantis Rojo (Adventurer's Guide). Conserva la tematica de devoto sicario de Achaekek pero rediseña progresion y poderes alrededor de la sabre dentada, con nuevas habilidades como Oracion de Ataque, Sudario Rojo, formas de mantis (sangre, muerte) y la sutil capacidad Esfumarse.",
    "description_en": "Paizo's official redesign of the Red Mantis Assassin from the Adventurer's Guide. Keeps the Achaekek-devoted assassin theme but reworks progression around sawtooth sabre fighting with new features such as Prayer Attack, Red Shroud, escalating Mantis Form variants (Blood/Death) and the Fading defense.",
    "features_removed": [
      "Replaces the original Red Mantis Assassin prestige class wholesale (alternate Paizo build)"
    ],
    "features_gained": [
      {
        "name": "Prayer Attack (Su)",
        "name_en": "Prayer Attack (Su)",
        "description_es": "Nivel 2: accion estandar para fascinar a un objetivo a 9 m sosteniendo el sabre apuntado al suelo (CD 10 + nivel + Car); permite golpe de gracia tras 3 asaltos.",
        "description_en": "Level 2: standard-action fascinate within 30 ft holding the sawtooth sabre point down (DC 10 + class level + Cha); allows coup de grace after 3 rounds.",
        "level": 2
      },
      {
        "name": "Red Shroud (Su)",
        "name_en": "Red Shroud (Su)",
        "description_es": "Nivel 3: invoca una niebla roja Con/dia que da +1 de esquiva a CA y curacion rapida igual al modificador de Constitucion durante 1 asalto/nivel; si muere durante su uso, se desintegra dejando solo el equipo.",
        "description_en": "Level 3: summons a red mist Con-mod times/day granting +1 dodge AC and fast healing equal to Con mod for 1 round/level; if slain while active, disintegrates leaving only gear.",
        "level": 3
      },
      {
        "name": "Sabre Fighting (Ex)",
        "name_en": "Sabre Fighting (Ex)",
        "description_es": "Niveles 1/5/7: gana Especializacion con Arma, Mayor Foco y Mayor Especializacion con sabre dentada sin requisitos de guerrero; trata el sabre como arma ligera para Soltura con Arma.",
        "description_en": "Levels 1/5/7: gains Weapon Specialization, Greater Weapon Focus and Greater Weapon Specialization with sawtooth sabre without fighter prerequisites; treats sabre as a light weapon for Weapon Finesse.",
        "level": 1
      },
      {
        "name": "Mantis Form (Su)",
        "name_en": "Mantis Form (Su)",
        "description_es": "Nivel 6: 1/dia se transforma en mantis gigante rojo sangre (vermin shape II) con agarre, embestida y golpe sorpresivo. A nivel 8 (Blood Mantis) inflige 1d6 sangrado y RD 5/bien; a nivel 10 (Death Mantis) el mordisco aplica 1 nivel negativo y RD 10/bien.",
        "description_en": "Level 6: 1/day transforms into a blood-red giant mantis (vermin shape II) with grab, lunge and sudden strike. Level 8 (Blood Mantis) adds 1d6 bleed and DR 5/good; level 10 (Death Mantis) bite inflicts 1 negative level and DR 10/good.",
        "level": 6
      },
      {
        "name": "Fading (Su)",
        "name_en": "Fading (Su)",
        "description_es": "Nivel 8: como accion inmediata Con/dia, se vuelve etereo al ser atacado o forzado a TS de Reflejos, con 50% de evitar el daño.",
        "description_en": "Level 8: immediate action Con-mod times/day to become ethereal when attacked or forced to make a Reflex save, with 50% chance to avoid damage.",
        "level": 8
      },
      {
        "name": "Mantis Doom (Sp)",
        "name_en": "Mantis Doom (Sp)",
        "description_es": "Nivel 9: usa creeping doom 3/dia (NL = nivel de personaje) invocando enjambres de mantis venenosas en lugar de insectos.",
        "description_en": "Level 9: uses creeping doom 3/day (CL = character level), summoning swarms of venomous mantises instead of insects.",
        "level": 9
      }
    ]
  },
  "arcane_savant": {
    "class": "pathfinder_savant",
    "name": "Arcane Savant",
    "name_en": "Arcane Savant",
    "name_es": "Sabio Arcano",
    "source": "Pathfinder Roleplaying Game Adventurer's Guide (2017)",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/a-b/arcane-savant/",
    "description_es": "Rediseño Paizo del Pathfinder Savant en el Adventurer's Guide, despojado de las referencias especificas a la Sociedad Pathfinder para hacerlo accesible a cualquier estudioso magico. Mantiene la maestria de pergaminos, glifos y simbolos pero añade silenciar items y atunar uno con el propio NL.",
    "description_en": "Paizo's Adventurer's Guide redesign of the Pathfinder Savant, stripped of Pathfinder Society-specific flavor so any arcane scholar can take it. Keeps mastery of scrolls, glyphs and symbols but adds silent item activation and the ability to attune one item to use the savant's caster level.",
    "features_removed": [
      "Replaces the original Pathfinder Savant prestige class (Pathfinder Chronicles Campaign Setting)",
      "Pathfinder Society-themed flavor and any Society-restricted abilities"
    ],
    "features_gained": [
      {
        "name": "Adept Activation (Ex)",
        "name_en": "Adept Activation (Ex)",
        "description_es": "Nivel 1: siempre puede tomar 10 en Usar Objeto Magico (excepto activando a ciegas) y no falla automaticamente con un 1 natural.",
        "description_en": "Level 1: can always take 10 on Use Magic Device (except blind activation) and does not auto-fail on natural 1s.",
        "level": 1
      },
      {
        "name": "Esoteric Magic (Ex)",
        "name_en": "Esoteric Magic (Ex)",
        "description_es": "Nivel 2+: cada nivel elige un conjuro de cualquier lista de clase y lo trata como propio (subiendo 1 nivel si es necesario).",
        "description_en": "Level 2+: each level picks a spell from any class list and treats it as on her own list (raising it by 1 level if needed).",
        "level": 2
      },
      {
        "name": "Glyph-Finding / Sigil Master (Ex/Su)",
        "name_en": "Glyph-Finding / Sigil Master (Ex/Su)",
        "description_es": "Niveles 2/5: usa Conjuros para detectar trampas magicas escritas como un picaro, y suma su nivel a TS contra simbolos/runas; un exito evita activarlas sin desactivarlas.",
        "description_en": "Levels 2/5: uses Spellcraft to detect writing-based magical traps like a rogue, and adds class level to saves vs symbols/glyphs; success prevents triggering without disabling.",
        "level": 2
      },
      {
        "name": "Silence Master (Su)",
        "name_en": "Silence Master (Su)",
        "description_es": "Nivel 6: activa items de detonante/completar/palabra de orden silenciosamente con gestos; 3/dia lanza conjuros de hasta 6° nivel como con varilla metamagica de Conjuro Silencioso.",
        "description_en": "Level 6: silently activates spell-trigger/-completion/command-word items with gestures; 3/day casts spells up to 6th level as if using a silent metamagic rod.",
        "level": 6
      },
      {
        "name": "Dispelling Master (Su)",
        "name_en": "Dispelling Master (Su)",
        "description_es": "Nivel 7: convierte conjuros preparados en disipar magia (3°+) o disipar magia mayor (6°+); espontaneos los añaden a su lista. Un exito cura PG igual al NL del efecto disipado.",
        "description_en": "Level 7: converts prepared spells into dispel magic (3rd+) or greater dispel magic (6th+); spontaneous casters add them to spells known. Success heals HP equal to dispelled effect's CL.",
        "level": 7
      },
      {
        "name": "Spellcasting Master (Ex)",
        "name_en": "Spellcasting Master (Ex)",
        "description_es": "Nivel 9: 3/dia accion rapida para no provocar AdO al lanzar conjuros ese asalto, y los conjuros de concentracion duran rondas iguales a su mejor mod mental tras dejar de concentrarse.",
        "description_en": "Level 9: 3/day swift action to avoid AoOs from casting that round; concentration spells persist for rounds equal to her highest mental mod after she stops concentrating.",
        "level": 9
      },
      {
        "name": "Item Master (Su)",
        "name_en": "Item Master (Su)",
        "description_es": "Nivel 10: tras 1 hora de focalizacion, atuna un item magico no de cargas para que use su NL en vez del propio (un solo item a la vez).",
        "description_en": "Level 10: after 1 hour of focus, attunes one non-charged magic item so it uses her caster level instead of its own (only one at a time).",
        "level": 10
      }
    ]
  },
  "swordlord": {
    "class": "aldori_swordlord",
    "name": "Swordlord",
    "name_en": "Swordlord",
    "name_es": "Senor Espadachin",
    "source": "Pathfinder Roleplaying Game Adventurer's Guide (2017)",
    "source_url": "https://www.d20pfsrd.com/classes/prestige-classes/other-paizo/s-z/swordlord/",
    "description_es": "Version actualizada de Paizo del Aldori Swordlord en el Adventurer's Guide. Comparte requisitos casi identicos pero usa un BAB completo y se enfoca en duelos publicos, parada defensiva escalable, intimidacion tras criticos (Quebrar Confianza) y deflexion de criticos (Tajo Salvador). Apila niveles con el arquetipo defender.",
    "description_en": "Paizo's updated Adventurer's Guide take on the Aldori Swordlord. Shares nearly identical prerequisites but advances with a full BAB and focuses on public dueling, scaling Defensive Parry, post-critical Intimidate (Shatter Confidence) and crit-deflecting Saving Slash. Levels stack with the defender fighter archetype.",
    "features_removed": [
      "Replaces the original Aldori Swordlord prestige class (Pathfinder Companion: Sword and Sorcery / Inner Sea World Guide)"
    ],
    "features_gained": [
      {
        "name": "Deft Strike (Ex)",
        "name_en": "Deft Strike (Ex)",
        "description_es": "Nivel 1: añade su modificador de Destreza (en vez del de Fuerza) al daño con la espada de duelo mientras solo empuñe esa arma.",
        "description_en": "Level 1: adds Dex bonus (instead of Str) to damage rolls with the dueling sword while wielding only that weapon.",
        "level": 1
      },
      {
        "name": "Display Weapon Prowess (Ex)",
        "name_en": "Display Weapon Prowess (Ex)",
        "description_es": "Nivel 2: suma medio nivel de clase a Intimidar con Despliegue Asombroso y a chequeos de combate de actuacion en duelos.",
        "description_en": "Level 2: adds half class level to Intimidate when using Dazzling Display and to performance combat checks during duels.",
        "level": 2
      },
      {
        "name": "Defensive Parry (Ex)",
        "name_en": "Defensive Parry (Ex)",
        "description_es": "Niveles 3/7: +1 (luego +2) a CA por esquiva durante un ataque completo con la espada de duelo. Apila con niveles del arquetipo defender.",
        "description_en": "Levels 3/7: +1 (then +2) dodge AC during full attacks with the dueling sword. Stacks with defender archetype levels.",
        "level": 3
      },
      {
        "name": "Adaptive Tactics (Ex)",
        "name_en": "Adaptive Tactics (Ex)",
        "description_es": "Niveles 4/8: reduce la penalizacion por Pelear Defensivamente o Pericia en Combate en 1 (luego 2), y permite chequeos rapidos de Averiguar Intenciones para bonos condicionales.",
        "description_en": "Levels 4/8: reduces fighting defensively / Combat Expertise penalty by 1 (then 2), and allows swift Sense Motive checks for conditional bonuses.",
        "level": 4
      },
      {
        "name": "Shatter Confidence (Ex)",
        "name_en": "Shatter Confidence (Ex)",
        "description_es": "Nivel 5: tras un critico, desarme, reposicion o destrozar, accion rapida para Intimidar y desmoralizar; en agitados ya, suprime sus bonos morales (y a nivel 10 tambien competencia/perspicacia).",
        "description_en": "Level 5: after a critical hit or successful disarm/reposition/sunder, swift Intimidate to demoralize; against already-shaken targets it also suppresses morale bonuses (and at level 10, competence/insight).",
        "level": 5
      },
      {
        "name": "Saving Slash (Ex)",
        "name_en": "Saving Slash (Ex)",
        "description_es": "Niveles 6/9: accion inmediata para reducir un critico cuerpo a cuerpo a daño normal con 25% de exito (nivel 6) o 50% (nivel 9, ademas 25% contra criticos a distancia).",
        "description_en": "Levels 6/9: immediate action to reduce a melee critical to normal damage with 25% chance (level 6) or 50% (level 9, plus 25% vs ranged crits).",
        "level": 6
      },
      {
        "name": "Dexterous Duelist (Ex)",
        "name_en": "Dexterous Duelist (Ex)",
        "description_es": "Nivel 7: conserva su bono de Destreza en Acrobacias y Trepar, y no provoca AdO al levantarse de prono con una mano libre.",
        "description_en": "Level 7: keeps Dex bonus on Acrobatics and Climb, and doesn't provoke AoOs when standing from prone with a free hand.",
        "level": 7
      }
    ]
  },
  "champion_of_the_faith": {
    "class": "warpriest",
    "name": "Champion of the Faith",
    "name_en": "Champion of the Faith",
    "name_es": "Campeón de la Fe",
    "source": "Advanced Class Guide",
    "description_es": "Sacerdote de guerra dedicado a un único aspecto alineado de su deidad. Pierde las mejoras progresivas del arma sagrada y un don adicional, pero gana Detectar Alineamiento a voluntad, Golpe Smite contra enemigos de alineamiento opuesto, y a nivel 12 puede imbuir su arma con una propiedad especial de alineamiento.",
    "description_en": "Warpriest devoted to one alignment aspect of his deity. Loses progressive sacred weapon enhancements and one bonus feat, but gains Detect Alignment at will, Smite against opposed-alignment foes, and at 12th level can imbue his weapon with an alignment special ability.",
    "features_removed": [
      "Bonus Feat (3rd level)",
      "Sacred Weapon Enhancement (4th+ level)"
    ],
    "features_altered": [
      "Blessings"
    ],
    "features_gained": [
      {
        "name": "Alineamiento Elegido (Ex)",
        "name_en": "Chosen Alignment (Ex)",
        "description_es": "Nivel 1. Elige uno de los alineamientos de su deidad: Caos, Mal, Bien o Ley. Debe seleccionar la bendición de ese alineamiento como una de sus dos bendiciones, aunque no esté en la lista de dominios de su deidad. Esto modifica bendiciones.",
        "description_en": "1st level. Choose one alignment component shared with your deity: chaos, evil, good, or law. Must select the corresponding alignment blessing as one of his two blessings, even if not on the deity's domain list. This alters blessings.",
        "level": 1
      },
      {
        "name": "Detectar Alineamiento (Sp)",
        "name_en": "Detect Alignment (Sp)",
        "description_es": "Nivel 3. Puede usar detectar [alineamiento opuesto] a voluntad como habilidad mágica. Sustituye el don adicional de nivel 3.",
        "description_en": "3rd level. Can use detect [opposed alignment] at will as a spell-like ability. Replaces the 3rd-level bonus feat.",
        "level": 3
      },
      {
        "name": "Arma Sagrada: Alineamiento (Ex)",
        "name_en": "Sacred Weapon: Alignment (Ex)",
        "description_es": "Nivel 4. El arma sagrada del campeón cuenta como su alineamiento elegido a efectos de superar la reducción de daño. Sustituye la mejora de +1 de nivel 4 y los incrementos posteriores del arma sagrada.",
        "description_en": "4th level. The champion's sacred weapon counts as his chosen alignment for overcoming damage reduction. Replaces the +1 enhancement at 4th level and all subsequent sacred weapon enhancement increases.",
        "level": 4
      },
      {
        "name": "Golpe Smite (Su)",
        "name_en": "Smite (Su)",
        "description_es": "Nivel 4. Acción rápida: elige un objetivo visible de alineamiento opuesto. Suma su mod. CAR a tiradas de ataque y su nivel de sacerdote de guerra al daño. 1/día, +1/día cada 4 niveles tras el 4.° (máx. 5/día al nivel 20). Si el objetivo no es del alineamiento opuesto, el golpe se desperdicia. El efecto dura hasta que el objetivo muere o el campeón descansa.",
        "description_en": "4th level. Swift action: choose one visible target of your opposed alignment. Add Charisma bonus to attack rolls and warpriest level to all damage rolls vs that target. 1/day, +1/day per 4 levels beyond 4th (max 5/day at 20th). If the target is not of the opposed alignment, the smite is wasted. Effect lasts until target is dead or champion rests.",
        "level": 4
      },
      {
        "name": "Propiedad de Alineamiento (Su)",
        "name_en": "Alignment Weapon Property (Su)",
        "description_es": "Nivel 12. Acción rápida 1/día: imbuye un arma sagrada con la propiedad especial de alineamiento correspondiente (anárquica, impía, sagrada o axiomática). Dura 1 minuto. Gana un uso adicional al nivel 16 y otro al nivel 20 (máx. 3/día).",
        "description_en": "12th level. Swift action 1/day: imbue one sacred weapon with the corresponding alignment special ability (anarchic for chaos, unholy for evil, holy for good, axiomatic for law). Lasts 1 minute. +1/day at 16th and 20th levels (max 3/day).",
        "level": 12
      }
    ],
    "sub_options": {
      "domains": "Las Bendiciones del sacerdote de guerra se eligen de los dominios de su deidad, que pueden incluir dominios normalmente fuera de la lista estándar de sacerdote de guerra. / Warpriest Blessings are chosen from the deity's domain list, which may include domains normally outside the standard warpriest list."
    }
  },
  "daring_champion_cavalier": {
    "class": "cavalier",
    "name": "Daring Champion",
    "name_en": "Daring Champion",
    "name_es": "Campeón Audaz (Caballero)",
    "source": "Advanced Class Guide",
    "description_es": "Caballero que adopta el estilo del espadachín. Sustituye la montura y el adiestramiento experto por panache y proezas de espadachín.",
    "description_en": "Cavalier who adopts the swashbuckler style. Replaces mount and expert trainer with panache and swashbuckler deeds.",
    "features_removed": [
      "Mount",
      "Expert Trainer",
      "Cavalier's Charge"
    ],
    "features_removed_es": [
      "Montura",
      "Adiestramiento experto",
      "Carga del caballero"
    ],
    "features_gained": [
      {
        "name": "Precise Strike (Ex)",
        "name_en": "Precise Strike (Ex)",
        "level": 1,
        "description_es": "Añade nivel al daño con arma de estocada ligera o una mano, sin armadura media/pesada.",
        "description_en": "Adds level to damage with light or one-handed piercing weapon, no medium/heavy armor."
      },
      {
        "name": "Panache (Ex)",
        "name_en": "Panache (Ex)",
        "level": 1,
        "description_es": "Charco de panache igual a mod CAR; se recupera con críticos o reducir enemigos a 0 PG.",
        "description_en": "Panache pool equal to CHA mod; refreshed by critical hits or reducing foes to 0 hp."
      },
      {
        "name": "Swashbuckler Deeds",
        "name_en": "Swashbuckler Deeds",
        "level": 1,
        "description_es": "Obtiene proezas Dodging Panache, Opportune Parry/Riposte, Precise Strike y Superior Feint.",
        "description_en": "Gains deeds: Dodging Panache, Opportune Parry/Riposte, Precise Strike, Superior Feint."
      }
    ]
  },
  "spirit_guide_oracle": {
    "class": "oracle",
    "name": "Spirit Guide",
    "name_en": "Spirit Guide",
    "name_es": "Guía de Espíritus (Oráculo)",
    "source": "Advanced Class Guide",
    "description_es": "Oráculo con vínculo chamánico. Sustituye conjuros del misterio y revelaciones por habilidades de espíritu. Cambia espíritu activo cada día.",
    "description_en": "Oracle with shamanic bonds. Replaces mystery spells and revelations with spirit abilities. Changes active spirit daily.",
    "features_removed": [
      "Mystery Bonus Spells",
      "Mystery Revelations (3,7,11,15,19)"
    ],
    "features_removed_es": [
      "Conjuros adicionales del misterio",
      "Revelaciones del misterio (niv 3,7,11,15,19)"
    ],
    "features_gained": [
      {
        "name": "Spirit (Su)",
        "name_en": "Spirit (Su)",
        "level": 1,
        "description_es": "Vincula un espíritu chamánico cada día. Obtiene animal espiritual, magia de espíritu y capacidades menores/mayores.",
        "description_en": "Bonds with a shaman spirit daily. Gains spirit animal, spirit magic, minor and major spirit abilities."
      },
      {
        "name": "Bonded Spirit (Su)",
        "name_en": "Bonded Spirit (Su)",
        "level": 3,
        "description_es": "Puede cambiar el espíritu vinculado tras descanso completo. Los conjuros de espíritu son conjuros de clase adicionales.",
        "description_en": "Can change bonded spirit after full rest. Spirit spells become additional class spells."
      }
    ],
    "sub_options": {
      "spirits": "Oráculo con acceso a espíritus de chamán. Elige un espíritu al nivel 3, con acceso a sus poderes menores. Al nivel 7 puede vincular un segundo espíritu errante (wandering spirit) diariamente. Los poderes de espíritu reemplazan revelaciones de oráculo. / Oracle with access to shaman spirits. Selects a spirit at level 3, gaining its minor powers. At level 7 can bind a second wandering spirit daily. Spirit powers replace oracle revelations."
    }
  },
  "divine_hunter_paladin": {
    "class": "paladin",
    "name": "Divine Hunter",
    "name_en": "Divine Hunter",
    "name_es": "Cazador Divino (Paladín)",
    "source": "Advanced Class Guide",
    "description_es": "Paladín de combate a distancia. Sustituye vínculo divino con montura por mejoras a arma a distancia y misericordia a distancia.",
    "description_en": "Ranged paladin. Replaces divine bond (mount) with ranged weapon enhancements and remote mercy.",
    "features_removed": [
      "Divine Bond (Mount)"
    ],
    "features_removed_es": [
      "Vínculo divino (montura)"
    ],
    "features_gained": [
      {
        "name": "Precise Shot",
        "name_en": "Precise Shot",
        "level": 1,
        "description_es": "Obtiene Disparo Preciso como dote bonus sin necesitar Punto de Mira como prerrequisito.",
        "description_en": "Gains Precise Shot as bonus feat without Point-Blank Shot prerequisite."
      },
      {
        "name": "Remote Mercy (Su)",
        "name_en": "Remote Mercy (Su)",
        "level": 5,
        "description_es": "Usa imposición de manos a hasta 5 pies/nivel paladín, 1/día.",
        "description_en": "Uses lay on hands at range up to 5 ft/paladin level, 1/day."
      },
      {
        "name": "Divine Bond - Ranged (Sp)",
        "name_en": "Divine Bond - Ranged (Sp)",
        "level": 5,
        "description_es": "Vínculo divino aplica mejoras (+1 por cada 3 niveles sobre 5) a un arma a distancia.",
        "description_en": "Divine bond grants enhancements (+1 per 3 levels above 5th) to a ranged weapon."
      },
      {
        "name": "Distant Smite (Su)",
        "name_en": "Distant Smite (Su)",
        "level": 1,
        "description_es": "Castigo del mal funciona con ataques a distancia; bono sagrado a CA aplica contra el objetivo.",
        "description_en": "Smite evil works with ranged attacks; sacred AC bonus applies against chosen target."
      }
    ]
  },
  "infiltrator_ranger": {
    "class": "ranger",
    "name": "Infiltrator",
    "name_en": "Infiltrator",
    "name_es": "Infiltrador (Ranger)",
    "source": "Advanced Player's Guide",
    "description_es": "Ranger que imita técnicas de habitantes de distintos terrenos. Sustituye terreno favorecido por adaptación y camuflaje en cada terreno elegido.",
    "description_en": "Ranger who mimics techniques of terrain inhabitants. Replaces favored terrain with adaptation and camouflage in chosen terrain.",
    "features_removed": [
      "Favored Terrain"
    ],
    "features_removed_es": [
      "Terreno favorecido"
    ],
    "features_gained": [
      {
        "name": "Adaptation (Ex)",
        "name_en": "Adaptation (Ex)",
        "level": 3,
        "description_es": "A niv 3 y cada 5 niveles: 1 rango libre en habilidad vinculada al terreno (Sigilo/bosque, Nadar/agua, Escalar/montaña).",
        "description_en": "At 3rd and every 5 levels: 1 free rank in terrain-linked skill (Stealth/forest, Swim/aquatic, Climb/mountain)."
      },
      {
        "name": "Blend In (Ex)",
        "name_en": "Blend In (Ex)",
        "level": 3,
        "description_es": "Puede usar el tipo de criatura nativa del terreno elegido para engaños en lugar de su propio tipo.",
        "description_en": "Can use the native creature type of chosen terrain for deceptions instead of his own type."
      }
    ]
  },
  "rageshaper_shifter": {
    "class": "shifter",
    "name": "Rageshaper",
    "name_en": "Rageshaper",
    "name_es": "Modelador de Ira (Metamorfo)",
    "source": "Wilderness Origins",
    "description_es": "Metamorfo que combina transformación bestial con furia. Sustituye aspectos avanzados por furia bestial que potencia las armas naturales del aspecto activo.",
    "description_en": "Shifter combining bestial transformation with fury. Replaces advanced aspects with bestial fury that enhances the active aspect natural weapons.",
    "features_removed": [
      "Chimeric Aspect",
      "Shifter Aspect (3rd and 4th)"
    ],
    "features_removed_es": [
      "Aspecto quimérico",
      "Aspecto metamorfo (3 y 4)"
    ],
    "features_gained": [
      {
        "name": "Bestial Fury (Ex)",
        "name_en": "Bestial Fury (Ex)",
        "level": 1,
        "description_es": "Entra en furia bestial rondas/día = 4 + mod CON. Durante furia, armas naturales causan +2 daño.",
        "description_en": "Enters bestial fury rounds/day = 4 + CON mod. During fury natural weapons deal +2 damage."
      },
      {
        "name": "Rage Aspect (Su)",
        "name_en": "Rage Aspect (Su)",
        "level": 4,
        "description_es": "Durante furia bestial el aspecto activo mejora: +2 a dados de daño de armas naturales del aspecto.",
        "description_en": "During bestial fury the active aspect improves: +2 to damage dice of aspect natural weapons."
      }
    ]
  },
  "urban_barbarian_unchained": {
    "class": "unchained_barbarian",
    "name": "Urban Barbarian",
    "name_en": "Urban Barbarian",
    "name_es": "Bárbaro Urbano (Desencadenado)",
    "source": "Pathfinder Unchained",
    "description_es": "Bárbaro Desencadenado adaptado al entorno urbano. Controla la rabia sin penalizaciones a INT/CHA y obtiene capacidades sociales y de control de multitud.",
    "description_en": "Unchained Barbarian adapted to urban environments. Controls rage without INT/CHA penalties and gains social and crowd-control abilities.",
    "features_removed": [
      "Damage Reduction",
      "Trap Sense"
    ],
    "features_removed_es": [
      "Reducción de daño",
      "Sentido de trampa"
    ],
    "class_skills_add": [
      "diplomacy",
      "knowledge_local",
      "knowledge_nobility",
      "linguistics",
      "profession"
    ],
    "features_gained": [
      {
        "name": "Controlled Rage (Ex)",
        "name_en": "Controlled Rage (Ex)",
        "level": 1,
        "description_es": "Al entrar en rabia aplica +4 como +2/+2 a dos atributos distintos, o +4 a uno. Sin penalización a INT ni CHA.",
        "description_en": "When raging applies +4 as +2/+2 to two different attributes, or +4 to one. No INT or CHA penalty."
      },
      {
        "name": "Crowd Control (Ex)",
        "name_en": "Crowd Control (Ex)",
        "level": 1,
        "description_es": "+1 a ataque y daño contra objetivos adyacentes a 2 o más aliados del bárbaro.",
        "description_en": "+1 to attack and damage against targets adjacent to 2 or more of the barbarian allies."
      }
    ]
  },
  "cardinal": {
    "class": "cleric",
    "name": "Cardinal",
    "name_en": "Cardinal",
    "name_es": "Cardinal",
    "bab": "slow",
    "skill_points": 6,
    "description_en": "Political cleric focused on social influence. Poor BAB, 6+Int skills/level, light armor and no shields, one domain only, loses spontaneous casting.",
    "description_es": "Clérigo político centrado en la influencia social. BAB lento, 6+Int habilidades/nivel, armadura ligera y sin escudos, un solo dominio, pierde lanzamiento espontáneo.",
    "features_removed": [
      "Spontaneous Casting",
      "Second Domain"
    ],
    "features_removed_es": [
      "Lanzamiento Espontáneo",
      "Segundo Dominio"
    ],
    "features_gained": [
      {
        "name": "Habilidades Políticas",
        "name_en": "Political Skills",
        "description_es": "Gana Engaño, Intimidar, Conocimiento (geografía) y Conocimiento (local) como habilidades de clase adicionales. Selección de dominio reducida a un único dominio.",
        "description_en": "Gain Bluff, Intimidate, Knowledge (geography) and Knowledge (local) as additional class skills. Domain selection is limited to one domain."
      }
    ],
    "source": "Ultimate Intrigue",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/cardinal-cleric-archetype/",
    "sub_options": {
      "domains": "Un solo dominio (elegido al crear el personaje). Pierde el segundo dominio y el lanzamiento espontáneo. / One domain only at creation. Loses second domain and spontaneous casting."
    },
    "restrictions": {
      "domain_max": 1
    }
  },
  "feyspeaker": {
    "class": "druid",
    "name": "Hablante de las Hadas",
    "name_en": "Feyspeaker",
    "name_es": "Hablante de las Hadas",
    "bab": "slow",
    "skill_points": 6,
    "description_en": "Fey-touched druid. Poor BAB, 6+Int skills/level, Charisma replaces Wisdom for spells, light non-metal armor only. Gains enchantment/illusion spells from sorcerer list.",
    "description_es": "Druida tocado por las hadas. BAB lento, 6+Int habilidades/nivel, Carisma sustituye a Sabiduría para hechizos, solo armadura ligera no metálica. Gana hechizos de encantamiento/ilusión de la lista de hechicero.",
    "class_skills_add": [
      "bluff",
      "diplomacy",
      "disguise",
      "sense_motive"
    ],
    "features_removed": [
      "Spontaneous Casting (Summon Nature's Ally)",
      "Nature Sense",
      "Wild Shape (Standard)"
    ],
    "features_removed_es": [
      "Lanzamiento Espontáneo (Convocar Aliado Natural)",
      "Sentido de la Naturaleza",
      "Cambio de Forma (Estándar)"
    ],
    "features_gained": [
      {
        "name": "Magia de las Hadas",
        "name_en": "Fey Magic",
        "description_es": "Usa Carisma en vez de Sabiduría como estadística de lanzamiento. En niveles 4, 6, 8, 10, 12, 14, 16, 18 aprende un hechizo de encantamiento o ilusión de la lista de mago/hechicero.",
        "description_en": "Uses Charisma instead of Wisdom for spellcasting. At levels 4, 6, 8, 10, 12, 14, 16, 18 learns one enchantment or illusion spell from the sorcerer/wizard list."
      },
      {
        "name": "Engaño Salvaje",
        "name_en": "Wild Mischief",
        "description_es": "Puede engañar animales en 30 pies (CD = CAR + nivel de clase). Las bestias mágicas con INT 1-2 tienen penalización -4.",
        "description_en": "Can deceive animals within 30 feet (DC = Cha + class level). Magical beasts with Int 1-2 take a -4 penalty on saves."
      }
    ],
    "source": "Advanced Class Guide",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/druid/archetypes/paizo-druid-archetypes/feyspeaker-druid-archetype/"
  },
  "cloistered_cleric": {
    "class": "cleric",
    "name": "Clérigo Recluido",
    "name_en": "Cloistered Cleric",
    "name_es": "Clérigo Recluido",
    "skill_points": 4,
    "description_en": "Scholar cleric. 4+Int skills/level. Loses medium and heavy armor, shield proficiency; weapon proficiency limited to club, heavy mace, light mace, quarterstaff, sling. Gains lore-based abilities.",
    "description_es": "Clérigo erudito. 4+Int habilidades/nivel. Pierde armadura media y pesada, competencia con escudos; competencia de armas limitada a clava, maza pesada, maza ligera, cuarto y honda. Gana habilidades basadas en conocimiento.",
    "features_removed": [
      "Spontaneous Casting (Cure/Inflict)",
      "Proficiency: Martial Weapons",
      "Proficiency: Medium/Heavy Armor",
      "Proficiency: Shields"
    ],
    "features_removed_es": [
      "Lanzamiento Espontáneo (Curar/Infligir)",
      "Competencia: Armas Marciales",
      "Competencia: Armadura Media/Pesada",
      "Competencia: Escudos"
    ],
    "features_gained": [
      {
        "name": "Amplitud de Conocimiento",
        "name_en": "Breadth of Knowledge",
        "description_es": "Bonificación en tiradas de Conocimiento igual a la mitad del nivel de clase (mínimo +1); puede usar Conocimiento sin adiestramiento en todos los campos.",
        "description_en": "Bonus on Knowledge checks equal to half class level (minimum +1); can make all Knowledge checks untrained."
      },
      {
        "name": "Bien Leído",
        "name_en": "Well-Read",
        "description_es": "+2 de bonificación en tiradas de habilidad, tiradas de nivel de lanzador y tiradas de salvación relacionadas con glifos, runas, pergaminos y escrituras.",
        "description_en": "+2 bonus on skill checks, caster level checks, and saving throws related to glyphs, runes, scrolls, and writings."
      },
      {
        "name": "Instrucción Verbal",
        "name_en": "Verbal Instruction",
        "description_es": "Puede ayudar a aliados en 9 m en tiradas de habilidad con la acción de ayudar. Un aliado adicional cada 3 niveles a partir del 3.°.",
        "description_en": "Can aid allies within 30 ft on skill checks as an aid another action. One additional ally per 3 levels beyond 3rd."
      },
      {
        "name": "Escribir Pergamino",
        "name_en": "Scribe Scroll",
        "description_es": "Gana el talento Escribir Pergamino como talento de bonificación en el nivel 4.",
        "description_en": "Gains Scribe Scroll as a bonus feat at 4th level."
      }
    ],
    "source": "Ultimate Magic",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/cleric/archetypes/paizo-cleric-archetypes/cloistered-cleric/"
  },
  "spire_defender": {
    "class": "magus",
    "name": "Defensor de la Torre",
    "name_en": "Spire Defender",
    "name_es": "Defensor de la Torre",
    "description_en": "Mobile, unarmored magus. Loses all armor and shield proficiency. Weapon proficiency limited to light and one-handed simple/martial weapons + one exotic weapon with disarm or trip. Gains Combat Expertise and Dodge as bonus feats.",
    "description_es": "Magus ágil sin armadura. Pierde toda competencia con armaduras y escudos. Competencia de armas limitada a armas simples/marciales ligeras y de una mano + un arma exótica con desarme o zancadilla. Gana Pericia en Combate y Esquivar como talentos de bonificación.",
    "features_removed": [
      "Spell Recall",
      "Armor Proficiency"
    ],
    "features_removed_es": [
      "Recordar Hechizo",
      "Competencia con Armaduras"
    ],
    "features_gained": [
      {
        "name": "Talentos de Bonificación",
        "name_en": "Bonus Feats",
        "description_es": "Gana Pericia en Combate y Esquivar como talentos de bonificación. Si más tarde adquiere competencia con armadura ligera, automáticamente ignora el fracaso arcano de armadura ligera.",
        "description_en": "Gains Combat Expertise and Dodge as bonus feats. If light armor proficiency is later gained, automatically ignores arcane spell failure for light armor."
      },
      {
        "name": "Aumento Arcano",
        "name_en": "Arcane Augmentation",
        "description_es": "Gasta 1 punto de reserva arcana (acción rápida) para +5 de competencia a Acrobacias, Trepar, Escapismo, Percepción, Sigilo o Nadar durante 1 minuto. +1 cada 3 niveles desde el 4.° (máx. +10).",
        "description_en": "Spend 1 arcane pool point (swift action) for +5 competence to Acrobatics, Climb, Escape Artist, Perception, Stealth, or Swim for 1 minute. +1 per 3 levels beyond 4th (max +10)."
      }
    ],
    "source": "Inner Sea Magic",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/magus/archetypes/paizo---magus-archetypes/spire-defender"
  },
  "wildborn": {
    "class": "barbarian",
    "name": "Nacido Salvaje",
    "name_en": "Wildborn",
    "name_es": "Nacido Salvaje",
    "description_en": "Primitive barbarian. Weapon proficiency limited to simple weapons crafted from bone, stone, or wood. Armor limited to leather and hide (no shields). Gains Improved Unarmed Strike and Catch Off-Guard as bonus feats.",
    "description_es": "Bárbaro primitivo. Competencia de armas limitada a armas simples de hueso, piedra o madera. Armadura limitada a cuero y cuero endurecido (sin escudos). Gana Ataque Desarmado Mejorado y Pillar Desprevenido como talentos de bonificación.",
    "features_removed": [
      "Trap Sense",
      "Rage Powers",
      "Standard Weapon Proficiency",
      "Standard Armor Proficiency"
    ],
    "features_removed_es": [
      "Sentido de Trampa",
      "Poderes de Rabia",
      "Competencia con Armas Estándar",
      "Competencia con Armaduras Estándar"
    ],
    "features_gained": [
      {
        "name": "Vivir de la Tierra",
        "name_en": "Live Off the Land",
        "description_es": "Reemplaza Sentido de Trampa. +1/2 nivel de bárbaro a tiradas de Supervivencia para buscar comida. +1 a Fort contra efectos ambientales (nv3), +1 cada 3 niveles siguientes.",
        "description_en": "Replaces trap sense. +1/2 barbarian level on Survival checks to forage. +1 Fort vs environmental effects at 3rd level, +1 per 3 levels thereafter."
      },
      {
        "name": "Inagotable",
        "name_en": "Inexhaustible",
        "description_es": "Recupera daño no letal a razón de 1 minuto = 1 hora de descanso. Aplica reducción de daño al doble contra daño no letal.",
        "description_en": "Recovers nonlethal damage at rate of 1 minute = 1 hour of rest. Applies double damage reduction against nonlethal damage."
      }
    ],
    "source": "Ultimate Wilderness",
    "source_url": "https://www.d20pfsrd.com/classes/core-classes/barbarian/archetypes/paizo-barbarian-archetypes/wildborn-barbarian-archetype/"
  }
};

const FALLBACK_ARCANE_SCHOOLS = [
  {
    "id": "abjuration",
    "name": {"es": "Abjuración", "en": "Abjuration"},
    "powers": [
      {"id": "abjuration.resistance", "min_level": 1, "uses": "3+int",
       "name": {"es": "Resistencia Protectora", "en": "Protective Ward"},
       "desc": {"es": "Toca a aliado: +1 bonificación de resistencia a salvaciones por 1 minuto (+1 por cada 5 niveles de mago).", "en": "Touch an ally: +1 resistance bonus to saves for 1 min (+1 per 5 wizard levels)."}},
      {"id": "abjuration.energyabsorption", "min_level": 6, "uses": "clvl",
       "name": {"es": "Absorción de Energía", "en": "Energy Absorption"},
       "desc": {"es": "Absorbe puntos de daño de energía igual a tu nivel de mago (usos/día = nivel).", "en": "Absorb energy damage up to your wizard level in points per use (uses/day = level)."}}
    ]
  },
  {
    "id": "conjuration",
    "name": {"es": "Conjuración", "en": "Conjuration"},
    "powers": [
      {"id": "conjuration.acidDart", "min_level": 1, "uses": "3+int",
       "name": {"es": "Dardo Ácido", "en": "Acid Dart"},
       "desc": {"es": "Proyectil de ácido como ataque de toque a distancia: 1d6+1 por 2 niveles de mago. 30 ft.", "en": "Acid ray as ranged touch: 1d6 + 1 per 2 wizard levels. 30 ft."}},
      {"id": "conjuration.dimDoor", "min_level": 8, "uses": "1",
       "name": {"es": "Puerta Dimensional (menor)", "en": "Dimensional Steps"},
       "desc": {"es": "Te teletransportas hasta 5 ft × nivel de mago por día (en incrementos de 5 ft).", "en": "Teleport up to 5 ft × wizard level per day (in 5 ft increments)."}}
    ]
  },
  {
    "id": "divination",
    "name": {"es": "Adivinación", "en": "Divination"},
    "powers": [
      {"id": "divination.forewarned", "min_level": 1, "uses": null,
       "name": {"es": "Presciencia", "en": "Forewarned"},
       "desc": {"es": "Siempre puedes actuar en la sorpresa. +1 a iniciativa por cada 2 niveles de mago.", "en": "Always act in surprise round. +1 to initiative per 2 wizard levels."}},
      {"id": "divination.scrying", "min_level": 8, "uses": "1",
       "name": {"es": "Visión Verdadera (menor)", "en": "Diviner's Fortune"},
       "desc": {"es": "1/día: visión verdadera durante 1 ronda/nivel.", "en": "1/day: true seeing for 1 round/level."}}
    ]
  },
  {
    "id": "enchantment",
    "name": {"es": "Encantamiento", "en": "Enchantment"},
    "powers": [
      {"id": "enchantment.daze", "min_level": 1, "uses": "3+int",
       "name": {"es": "Toque Aturdidor", "en": "Dazing Touch"},
       "desc": {"es": "Toque CaC: criatura aturdida 1 ronda (sin salvación, solo funciona en seres con DG ≤ nivel de mago).", "en": "Melee touch: creature dazed 1 round (no save, works on HD ≤ wizard level)."}},
      {"id": "enchantment.aura", "min_level": 8, "uses": "1",
       "name": {"es": "Aura de Encantamiento", "en": "Aura of Despair"},
       "desc": {"es": "Aura de 30 ft: enemigos –2 a tiradas durante 1 ronda/nivel. 1/día.", "en": "30 ft aura: enemies –2 on rolls for 1 round/level. 1/day."}}
    ]
  },
  {
    "id": "evocation",
    "name": {"es": "Evocación", "en": "Evocation"},
    "powers": [
      {"id": "evocation.intensify", "min_level": 1, "uses": "3+int",
       "name": {"es": "Rayo Intenso", "en": "Intense Spells"},
       "desc": {"es": "Toque/proyectil de energía: +½ nivel de mago al daño. Los conjuros de daño ganan +1 dmg/dado.", "en": "Energy ray: +½ wizard level to damage. Damage spells gain +1 dmg/die."}},
      {"id": "evocation.forceMissile", "min_level": 1, "uses": "3+int",
       "name": {"es": "Proyectil de Fuerza", "en": "Force Missile"},
       "desc": {"es": "Proyectil de fuerza que ignora cobertura: 1d4+1 por cada 2 niveles de mago.", "en": "Force missile ignoring cover: 1d4 + 1 per 2 wizard levels."}}
    ]
  },
  {
    "id": "illusion",
    "name": {"es": "Ilusión", "en": "Illusion"},
    "powers": [
      {"id": "illusion.blinding", "min_level": 1, "uses": "3+int",
       "name": {"es": "Destello Cegador", "en": "Blinding Ray"},
       "desc": {"es": "Rayo cegador a distancia: cegado 1 ronda (Fort niega; a ciegas 1d4 rondas si falla).", "en": "Ranged blinding ray: blinded 1 round (Fort negates; blind 1d4 rounds on fail)."}},
      {"id": "illusion.invisField", "min_level": 8, "uses": "1",
       "name": {"es": "Campo de Invisibilidad", "en": "Invisibility Field"},
       "desc": {"es": "Invisibilidad grupal 10 ft: tú y aliados invisibles 1 ronda/nivel. 1/día.", "en": "Group invisibility 10 ft: you and allies invisible 1 round/level. 1/day."}}
    ]
  },
  {
    "id": "necromancy",
    "name": {"es": "Nigromancia", "en": "Necromancy"},
    "powers": [
      {"id": "necromancy.powerOverUndead", "min_level": 1, "uses": "3+int",
       "name": {"es": "Control de No Muertos", "en": "Power Over Undead"},
       "desc": {"es": "Canal de energía negativa (como clérigo nivel = nivel mago) para controlar no muertos.", "en": "Channel negative energy (as cleric level = wizard level) to control undead."}},
      {"id": "necromancy.lifeSight", "min_level": 8, "uses": "clvl",
       "name": {"es": "Vista de la Vida", "en": "Life Sight"},
       "desc": {"es": "Percepción ciega 10 ft para detectar criaturas vivas y no muertas. 1 ronda/nivel de mago total/día.", "en": "Blindsight 10 ft to detect living and undead. 1 round/wizard level total/day."}}
    ]
  },
  {
    "id": "transmutation",
    "name": {"es": "Transmutación", "en": "Transmutation"},
    "powers": [
      {"id": "transmutation.physicalEnhancement", "min_level": 1, "uses": null,
       "name": {"es": "Mejora Física", "en": "Physical Enhancement"},
       "desc": {"es": "+1 bonificación de mejora a FUE, DES o CON (elige 1). +1 por cada 5 niveles de mago.", "en": "+1 enhancement bonus to STR, DEX, or CON (choose 1). +1 per 5 wizard levels."}},
      {"id": "transmutation.telekinesis", "min_level": 8, "uses": "3+int",
       "name": {"es": "Mano Telequinética", "en": "Telekinetic Fist"},
       "desc": {"es": "Ataque de toque: 1d4+1 daño por 2 niveles de mago como ataque a distancia (30 ft).", "en": "Touch attack: 1d4 + 1 dmg per 2 wizard levels as ranged attack (30 ft)."}}
    ]
  },
  {
    "id": "universal",
    "name": {"es": "Universal", "en": "Universal"},
    "powers": [
      {"id": "universal.handOfApprentice", "min_level": 1, "uses": "3+int",
       "name": {"es": "Mano del Aprendiz", "en": "Hand of the Apprentice"},
       "desc": {"es": "Lanza tu arma como proyectil mágico: BAB + INT (en lugar de FUE/DES). Regresa tras el ataque.", "en": "Throw your weapon as a magic projectile: BAB + INT (instead of STR/DEX). Returns after."}},
      {"id": "universal.metamagicMastery", "min_level": 8, "uses": "1",
       "name": {"es": "Maestría de Metamagia", "en": "Metamagic Mastery"},
       "desc": {"es": "1/día: aplica cualquier dote de metamagia conocida a un conjuro sin aumentar el tiempo de lanzamiento.", "en": "1/day: apply any known metamagic feat to a spell without increasing casting time."}}
    ]
  }
];

const FALLBACK_WITCH_PATRONS = [
  {"id":"agility","name":{"es":"Agilidad","en":"Agility"},
   "spells":["Salto","Velocidad de Víbora","Haste","Libertad de Movimiento","Danza de Luces","Velocidad de Víbora (masa)","Prisa (masa)","Forma Etérea","Velocidad"]},
  {"id":"ancestors","name":{"es":"Ancestros","en":"Ancestors"},
   "spells":["Causa Miedo","Hablar con Muertos","Trompeta de Espíritus","Contactar Plano Exterior","Comunión","Deseo Limitado","Visión","Destino del Alma","Deseo"]},
  {"id":"deception","name":{"es":"Engaño","en":"Deception"},
   "spells":["Disfraz","Invisibilidad","Disfraz Mayor","Manto de Engaño","Sombras Mayores","Modificar Memoria","Invisibilidad Mayor","Imagen Proyectada","Ilusión Irreal"]},
  {"id":"elements","name":{"es":"Elementos","en":"Elements"},
   "spells":["Manos Ardientes","Bola de Fuego","Muro de Fuego","Invocar Elemental Pequeño","Muro de Hielo","Invocar Elemental Mediano","Invocar Elemental Grande","Tormenta de Fuego","Invocar Elemental Mayor"]},
  {"id":"endurance","name":{"es":"Resistencia","en":"Endurance"},
   "spells":["Resistencia de Oso","Aguante","Aguante (masa)","Resistencia de Oso (masa)","Salud del Hierro","Resistencia Energía Mayor","Resistencia del Cuerpo","Cuerpo de Hierro","Salud Irresistible"]},
  {"id":"healing","name":{"es":"Curación","en":"Healing"},
   "spells":["Curar Heridas Leves","Curar Heridas Moderadas","Curar Heridas Graves","Curar Heridas Críticas","Curar a Distancia","Curar Heridas Masivas","Curar Enfermedades","Curar Heridas Masivas Críticas","Curar Todo"]},
  {"id":"knowledge","name":{"es":"Conocimiento","en":"Knowledge"},
   "spells":["Identificar","Ojo Arcano","Bola de Cristal Menor","Adivinación","Bola de Cristal","Visión Verdadera","Discernir Paradero","Visión del Futuro","Farsight"]},
  {"id":"moon","name":{"es":"Luna","en":"Moon"},
   "spells":["Luz de Luna","Danza de Luces","Desnudar el Alma","Sueño Profundo","Luz del Día","Sueño","Control del Tiempo (menor)","Influencia Lunar","Control del Tiempo"]},
  {"id":"plague","name":{"es":"Plaga","en":"Plague"},
   "spells":["Causa Miedo","Toque Enfermante","Contagio","Plaga de Ratas","Plaga de Langostas","Infectar","Plaga (maldición)","Plaga Virulenta","Plaga Masiva"]},
  {"id":"shadow","name":{"es":"Sombra","en":"Shadow"},
   "spells":["Oscuridad","Oscuridad Mayor","Sombra Invisible","Sombras","Sombras Evocadas","Sombras Mayores","Sombra en la Pared","Forma de Sombra","Sombra de la Realidad"]},
  {"id":"strength","name":{"es":"Fuerza","en":"Strength"},
   "spells":["Fuerza de Toro","Fuerza de Toro (masa)","Aguante (masa)","Fuerza del Gigante","Tamaño Gigantesco","Fuerza Excepcional","Terremoto","Tamaño Colosal","Deseo"]},
  {"id":"trickery","name":{"es":"Engaño/Truco","en":"Trickery"},
   "spells":["Engañar","Imagen Espejo","Desplazamiento","Imagen Mayor","Falso Paso","Prisa","Confusión","Imagen Persistente","Sombra de la Realidad"]},
  {"id":"winter","name":{"es":"Invierno","en":"Winter"},
   "spells":["Toque Helado","Ráfaga de Frío","Tormenta de Nieve","Tormenta de Hielo","Cono de Frío","Tormenta Helada","Rayo Gélido","Tormenta de Granizo","Tormenta Invernal"]}
];

const FALLBACK_ANIMAL_COMPANIONS = {
  "ape": {
    "name_es": "Simio",
    "name_en": "Ape",
    "size_initial": "medium",
    "speed": { "land": 30, "climb": 30 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 13, "dex": 17, "con": 10, "int": 2, "wis": 12, "cha": 7 },
    "attacks_base": ["bite 1d4", "2 claws 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "large",
      "attacks": ["bite 1d6", "2 claws 1d6"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "badger": {
    "name_es": "Tejón",
    "name_en": "Badger",
    "size_initial": "small",
    "speed": { "land": 30, "burrow": 10, "climb": 10 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 10, "dex": 17, "con": 15, "int": 2, "wis": 12, "cha": 10 },
    "attacks_base": ["bite 1d4", "2 claws 1d3"],
    "special": ["low-light vision", "scent", "rage 6 rounds/day"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "attacks": ["bite 1d6", "2 claws 1d4"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "bear": {
    "name_es": "Oso negro",
    "name_en": "Bear (Black Bear)",
    "size_initial": "small",
    "speed": { "land": 40 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 15, "dex": 15, "con": 13, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d4", "2 claws 1d3"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "attacks": ["bite 1d6", "2 claws 1d4"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "bird": {
    "name_es": "Ave de presa",
    "name_en": "Bird (Eagle/Hawk/Owl)",
    "size_initial": "small",
    "speed": { "land": 10, "fly": 80, "fly_maneuverability": "average" },
    "nat_ac_base": 1,
    "attrs_base": { "str": 10, "dex": 15, "con": 12, "int": 2, "wis": 14, "cha": 6 },
    "attacks_base": ["bite 1d4", "2 talons 1d4"],
    "special": ["low-light vision"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "boar": {
    "name_es": "Jabalí",
    "name_en": "Boar",
    "size_initial": "small",
    "speed": { "land": 40 },
    "nat_ac_base": 6,
    "attrs_base": { "str": 13, "dex": 12, "con": 15, "int": 2, "wis": 13, "cha": 4 },
    "attacks_base": ["gore 1d6"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "attacks": ["gore 1d8"],
      "special_gained": ["ferocity"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "camel": {
    "name_es": "Camello",
    "name_en": "Camel",
    "size_initial": "large",
    "speed": { "land": 50 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 18, "dex": 16, "con": 14, "int": 2, "wis": 11, "cha": 4 },
    "attacks_base": ["bite 1d4", "spit ranged touch (sickened 1d4 rds, 10 ft.)"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "cat_big": {
    "name_es": "Felino grande",
    "name_en": "Cat, Big (Leopard/Jaguar)",
    "size_initial": "medium",
    "speed": { "land": 40 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 13, "dex": 17, "con": 10, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d4", "2 claws 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "nat_ac_change": 4,
      "attacks": ["bite 1d6", "2 claws 1d4"],
      "special_gained": ["grab", "pounce"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "cat_small": {
    "name_es": "Gato montés / Lince",
    "name_en": "Cat, Small (Lynx/Wildcat)",
    "size_initial": "small",
    "speed": { "land": 60 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 12, "dex": 15, "con": 12, "int": 2, "wis": 12, "cha": 5 },
    "attacks_base": ["bite 1d4", "2 claws 1d3"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "dex": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/#TOC-Cat-Small-"
  },
  "crocodile": {
    "name_es": "Cocodrilo",
    "name_en": "Crocodile",
    "size_initial": "small",
    "speed": { "land": 20, "swim": 30 },
    "nat_ac_base": 4,
    "attrs_base": { "str": 15, "dex": 14, "con": 13, "int": 1, "wis": 12, "cha": 8 },
    "attacks_base": ["bite 1d8"],
    "special": ["hold breath", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "nat_ac_change": 2,
      "attacks": ["bite 1d10"],
      "special_gained": ["death roll", "grab"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "advancement_2_at_edl": 7,
    "advancement_2": {
      "size": "large",
      "nat_ac_change": 2,
      "attacks": ["bite 2d6"],
      "special_gained": ["death roll"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/#TOC-Crocodile"
  },
  "dog": {
    "name_es": "Perro",
    "name_en": "Dog",
    "size_initial": "small",
    "speed": { "land": 40 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 15, "dex": 15, "con": 15, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "attacks": ["bite 1d6"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "dolphin": {
    "name_es": "Delfín",
    "name_en": "Dolphin",
    "size_initial": "medium",
    "speed": { "swim": 60 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 13, "dex": 17, "con": 13, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d6"],
    "special": ["blindsense 120 ft.", "hold breath", "low-light vision"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "nat_ac_change": 2,
      "attacks": ["bite 1d8"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "elk": {
    "name_es": "Alce",
    "name_en": "Elk",
    "size_initial": "medium",
    "speed": { "land": 50 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 15, "dex": 14, "con": 14, "int": 2, "wis": 12, "cha": 5 },
    "attacks_base": ["gore 1d6", "2 hooves 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "attacks": ["gore 1d8", "2 hooves 1d6"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "horse": {
    "name_es": "Caballo",
    "name_en": "Horse",
    "size_initial": "large",
    "speed": { "land": 60 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 16, "dex": 13, "con": 15, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["2 hooves 1d4", "bite 1d4"],
    "special": ["low-light vision", "scent"],
    "notes": "Standard mount for Medium paladins/cavaliers.",
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "hyena": {
    "name_es": "Hiena",
    "name_en": "Hyena",
    "size_initial": "small",
    "speed": { "land": 40 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 13, "dex": 16, "con": 10, "int": 2, "wis": 13, "cha": 6 },
    "attacks_base": ["bite 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "attacks": ["bite 1d6"],
      "special_gained": ["trip"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "manta_ray": {
    "name_es": "Mantarraya",
    "name_en": "Manta Ray",
    "size_initial": "medium",
    "speed": { "swim": 40 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 14, "dex": 17, "con": 12, "int": 1, "wis": 12, "cha": 2 },
    "attacks_base": ["tail slap 1d6"],
    "special": ["low-light vision"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "large",
      "nat_ac_change": 2,
      "attacks": ["tail slap 1d8"],
      "attr_changes": { "str": 2, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "octopus": {
    "name_es": "Pulpo",
    "name_en": "Octopus",
    "size_initial": "small",
    "speed": { "swim": 30 },
    "nat_ac_base": 0,
    "attrs_base": { "str": 12, "dex": 17, "con": 12, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["8 tentacles 1d3"],
    "special": ["low-light vision", "camouflage", "jet 120 ft."],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "nat_ac_change": 1,
      "attacks": ["8 tentacles 1d4"],
      "attr_changes": { "str": 2, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "pony": {
    "name_es": "Poni",
    "name_en": "Pony",
    "size_initial": "medium",
    "speed": { "land": 40 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 13, "dex": 13, "con": 14, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d3", "2 hooves 1d4"],
    "special": ["low-light vision", "scent"],
    "notes": "Standard mount for Small characters (gnome/halfling paladins).",
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "dex": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "roc": {
    "name_es": "Roc",
    "name_en": "Roc",
    "size_initial": "medium",
    "speed": { "land": 10, "fly": 60, "fly_maneuverability": "average" },
    "nat_ac_base": 3,
    "attrs_base": { "str": 15, "dex": 17, "con": 13, "int": 2, "wis": 14, "cha": 6 },
    "attacks_base": ["bite 1d6", "2 talons 1d4"],
    "special": ["low-light vision"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "attacks": ["bite 1d8", "2 talons 1d6"],
      "special_gained": ["grab"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "shark": {
    "name_es": "Tiburón",
    "name_en": "Shark",
    "size_initial": "small",
    "speed": { "swim": 60 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 12, "dex": 17, "con": 13, "int": 1, "wis": 12, "cha": 2 },
    "attacks_base": ["bite 1d4"],
    "special": ["blindsense 120 ft.", "low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "nat_ac_change": 2,
      "attacks": ["bite 1d6"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "snake_constrictor": {
    "name_es": "Serpiente constrictora",
    "name_en": "Snake, Constrictor",
    "size_initial": "medium",
    "speed": { "land": 20, "climb": 20, "swim": 20 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 15, "dex": 17, "con": 13, "int": 1, "wis": 12, "cha": 4 },
    "attacks_base": ["bite 1d6"],
    "special": ["hold breath", "low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "nat_ac_change": 2,
      "attacks": ["bite 1d8"],
      "special_gained": ["grab", "constrict"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "snake_viper": {
    "name_es": "Víbora",
    "name_en": "Snake, Viper",
    "size_initial": "small",
    "speed": { "land": 30, "climb": 30, "swim": 30 },
    "nat_ac_base": 2,
    "attrs_base": { "str": 11, "dex": 17, "con": 11, "int": 1, "wis": 12, "cha": 4 },
    "attacks_base": ["bite 1d4 + poison"],
    "special": ["low-light vision", "scent"],
    "notes": "Int 1 — max 3 tricks only.",
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "wolf": {
    "name_es": "Lobo",
    "name_en": "Wolf",
    "size_initial": "medium",
    "speed": { "land": 50 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 13, "dex": 15, "con": 15, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d6"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": null,
      "attacks": null,
      "attr_changes": { "str": 2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "bear_grizzly": {
    "name_es": "Oso grizzly",
    "name_en": "Bear, Grizzly",
    "size_initial": "medium",
    "available_at_edl": 4,
    "speed": { "land": 40 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 17, "dex": 13, "con": 13, "int": 2, "wis": 13, "cha": 6 },
    "attacks_base": ["bite 1d6", "2 claws 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "nat_ac_change": 4,
      "attacks": ["bite 1d8", "2 claws 1d6"],
      "special_gained": ["grab"]
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "allosaurus": {
    "name_es": "Alosaurio",
    "name_en": "Allosaurus",
    "size_initial": "medium",
    "available_at_edl": 7,
    "speed": { "land": 40 },
    "nat_ac_base": 4,
    "attrs_base": { "str": 14, "dex": 16, "con": 10, "int": 2, "wis": 15, "cha": 10 },
    "attacks_base": ["bite 1d6", "2 claws 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "attacks": ["bite 1d8", "2 claws 1d6"],
      "special_gained": ["grab", "pounce"]
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "ankylosaurus": {
    "name_es": "Anquilosaurio",
    "name_en": "Ankylosaurus",
    "size_initial": "medium",
    "available_at_edl": 7,
    "speed": { "land": 30 },
    "nat_ac_base": 9,
    "attrs_base": { "str": 10, "dex": 14, "con": 9, "int": 2, "wis": 12, "cha": 8 },
    "attacks_base": ["tail 1d6"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "attacks": ["tail 2d6"],
      "special_gained": ["stun"]
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "brachiosaurus": {
    "name_es": "Braquiosaurio",
    "name_en": "Brachiosaurus",
    "size_initial": "medium",
    "available_at_edl": 7,
    "speed": { "land": 30 },
    "nat_ac_base": 3,
    "attrs_base": { "str": 13, "dex": 14, "con": 11, "int": 2, "wis": 13, "cha": 10 },
    "attacks_base": ["tail 2d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": "large",
      "attacks": ["tail 2d6"],
      "special_gained": ["trample 1d8"],
      "attr_changes": { "str": 8, "dex": -2, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "deinonychus": {
    "name_es": "Deinonico (raptor)",
    "name_en": "Deinonychus",
    "size_initial": "small",
    "available_at_edl": 7,
    "speed": { "land": 60 },
    "nat_ac_base": 1,
    "attrs_base": { "str": 13, "dex": 17, "con": 12, "int": 2, "wis": 12, "cha": 6 },
    "attacks_base": ["bite 1d6", "2 talons 1d6", "2 feet 1d4"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 4,
    "advancement": {
      "size": "medium",
      "nat_ac_change": 2,
      "attacks": ["bite 1d8", "2 talons 1d8", "2 feet 1d6"],
      "special_gained": ["pounce"],
      "attr_changes": { "str": 4, "dex": -2, "con": 2 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  },
  "elephant": {
    "name_es": "Elefante / Mastodonte",
    "name_en": "Elephant/Mastodon",
    "size_initial": "large",
    "available_at_edl": 7,
    "speed": { "land": 40 },
    "nat_ac_base": 4,
    "attrs_base": { "str": 18, "dex": 10, "con": 17, "int": 2, "wis": 11, "cha": 5 },
    "attacks_base": ["gore 1d6", "slam 1d6"],
    "special": ["low-light vision", "scent"],
    "advancement_at_edl": 7,
    "advancement": {
      "size": null,
      "nat_ac_change": 2,
      "attacks": ["gore 1d8", "slam 1d8"],
      "special_gained": ["trample"],
      "attr_changes": { "str": 4, "con": 4 }
    },
    "source_url": "http://www.d20pfsrd.com/classes/core-classes/druid/animal-companions/"
  }
};

const FALLBACK_EIDOLON_EVOLUTIONS = {
  "basic_magic": {
    "name_es": "Magia Básica",
    "name_en": "Basic Magic",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede lanzar un cantrip 1/día (3/día al nivel 4 del invocador). Nivel de lanzador = DG. CD = 10 + modificador de CAR. Requiere CAR 10+.",
    "description_en": "The eidolon can cast a cantrip 1/day (3/day at summoner 4th). CL = HD. DC = 10 + CHA mod. Requires CHA 10+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "bite": {
    "name_es": "Mordisco",
    "name_en": "Bite",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana un ataque natural de mordisco primario que inflige 1d6 (Medium), 1d8 (Large), 2d6 (Huge). Si el eidolón ya tiene un mordisco, aplica ×1,5 FUE en ese ataque.",
    "description_en": "The eidolon gains a primary bite attack dealing 1d6 (Medium), 1d8 (Large), 2d6 (Huge). If the eidolon already has a bite, it instead applies ×1.5 Str on that attack.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "bleed": {
    "name_es": "Sangrado",
    "name_en": "Bleed",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Un ataque natural del eidolón (a elección) causa 1d6 de daño de sangrado al impactar. Puede comprarse una vez por ataque.",
    "description_en": "One chosen natural attack causes 1d6 bleed damage on a hit. Can be purchased once per attack.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "claws": {
    "name_es": "Garras",
    "name_en": "Claws",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["limbs"]
    },
    "description_es": "El eidolón gana dos ataques de garra primarios que infligen 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Requiere Limbs (arms).",
    "description_en": "The eidolon gains two primary claw attacks dealing 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Requires Limbs (arms).",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "climb": {
    "name_es": "Trepar",
    "name_en": "Climb",
    "cost": 1,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana una velocidad de escalada igual a su velocidad base. Cada compra adicional suma 20 ft. a la velocidad de escalada.",
    "description_en": "The eidolon gains a climb speed equal to its base speed. Each additional purchase adds 20 ft. to the climb speed.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "gills": {
    "name_es": "Branquias",
    "name_en": "Gills",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede respirar bajo el agua indefinidamente.",
    "description_en": "The eidolon can breathe underwater indefinitely.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "hooves": {
    "name_es": "Cascos",
    "name_en": "Hooves",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["limbs"]
    },
    "description_es": "El eidolón gana dos ataques secundarios de casco que infligen 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Reemplaza las garras base si aplica. Requiere Limbs (legs).",
    "description_en": "The eidolon gains two secondary hoof attacks dealing 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Replaces base claws if applicable. Requires Limbs (legs).",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "improved_damage": {
    "name_es": "Daño Mejorado",
    "name_en": "Improved Damage",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Aumenta el dado de daño de un ataque natural en 1 paso. Puede comprarse una vez por ataque.",
    "description_en": "Increase one natural attack's damage die by one step. Can be purchased once per attack.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "improved_natural_armor": {
    "name_es": "Armadura Natural Mejorada",
    "name_en": "Improved Natural Armor",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "+2 al bono de armadura natural por compra. Puede comprarse una vez por cada 5 niveles del invocador.",
    "description_en": "+2 natural armor bonus per purchase. Can be purchased once per 5 summoner levels.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "low_light_vision": {
    "name_es": "Visión en Penumbra",
    "name_en": "Low-Light Vision",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede ver el doble de lejos que un humano en condiciones de poca luz.",
    "description_en": "The eidolon can see twice as far as a human in dim light conditions.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "magic_attacks": {
    "name_es": "Ataques Mágicos",
    "name_en": "Magic Attacks",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Los ataques naturales del eidolón superan reducción de daño de tipo magia. Al nivel 10 del invocador también cuentan como el alineamiento del eidolón para superar RD.",
    "description_en": "The eidolon's natural attacks count as magic for DR purposes. At summoner level 10+, they also count as the eidolon's alignment for DR.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "mount": {
    "name_es": "Montura",
    "name_en": "Mount",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón está entrenado para el combate como montura. Requiere forma cuadrúpeda o serpentina y que el eidolón sea al menos una talla mayor que el jinete.",
    "description_en": "The eidolon is combat-trained as a mount. Requires quadruped or serpentine base form and the eidolon must be at least one size larger than the rider.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "pincers": {
    "name_es": "Pinzas",
    "name_en": "Pincers",
    "cost": 1,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["limbs"]
    },
    "description_es": "El eidolón gana dos ataques secundarios de pinza que infligen 1d6 (Medium), 1d8 (Large), 2d6 (Huge). Otorga +2 a las comprobaciones de agarre cuando usa Grab. Requiere Limbs (arms). Puede comprarse múltiples veces.",
    "description_en": "The eidolon gains two secondary pincer attacks dealing 1d6 (Medium), 1d8 (Large), 2d6 (Huge). Grants +2 grapple CMB when using Grab. Requires Limbs (arms). Can be purchased multiple times.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "pounce": {
    "name_es": "Lanzarse",
    "name_en": "Pounce",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": "quadruped",
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede realizar un ataque completo al final de una carga. Solo para forma cuadrúpeda.",
    "description_en": "The eidolon can make a full attack at the end of a charge. Quadruped only.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "pull": {
    "name_es": "Jalar",
    "name_en": "Pull",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Tras impactar con un ataque elegido (que tenga al menos 10 ft. de alcance), el eidolón puede realizar una comprobación de CMC gratuita para atraer al objetivo 5 ft. Puede comprarse una vez por ataque.",
    "description_en": "After hitting with a selected attack (requiring at least 10 ft. reach), the eidolon can make a free CMB check to pull the target 5 ft. closer. Can be purchased once per attack.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "push": {
    "name_es": "Empujar",
    "name_en": "Push",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Tras impactar con un ataque elegido, el eidolón puede realizar una comprobación de CMC gratuita para alejar al objetivo 5 ft. Puede comprarse una vez por ataque.",
    "description_en": "After hitting with a selected attack, the eidolon can make a free CMB check to push the target 5 ft. away. Can be purchased once per attack.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "reach": {
    "name_es": "Alcance",
    "name_en": "Reach",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Un ataque natural del eidolón gana +5 ft. de alcance. Puede comprarse una vez por ataque.",
    "description_en": "One natural attack gains +5 ft. reach. Can be purchased once per attack.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "resistance": {
    "name_es": "Resistencia Elemental",
    "name_en": "Resistance",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana resistencia 5 a un tipo de energía elegido (ácido, frío, electricidad, fuego o sónico). Aumenta a 10 al nivel 5 del invocador y a 15 al nivel 10. Puede comprarse una vez por tipo de energía.",
    "description_en": "The eidolon gains resistance 5 to one chosen energy type (acid, cold, electricity, fire, or sonic). Increases to 10 at summoner level 5 and 15 at summoner level 10. Can be purchased once per energy type.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "scent": {
    "name_es": "Olfato",
    "name_en": "Scent",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede detectar criaturas por el olfato en un radio de 30 ft. (60 ft. a favor del viento, 15 ft. en contra del viento).",
    "description_en": "The eidolon can detect creatures by smell within 30 ft. (60 ft. upwind, 15 ft. downwind).",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "shared_evolution": {
    "name_es": "Evolución Compartida",
    "name_en": "Shared Evolution",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede transferir al invocador una evolución de 1 o 2 puntos. El invocador puede devolvérsela voluntariamente.",
    "description_en": "The eidolon can transfer a 1- or 2-point evolution to the summoner. The summoner can return it voluntarily.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "skilled": {
    "name_es": "Habilidoso",
    "name_en": "Skilled",
    "cost": 1,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "+8 bono racial en una habilidad elegida. Puede comprarse una vez por habilidad.",
    "description_en": "+8 racial bonus to one chosen skill. Can be purchased once per skill.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "slam": {
    "name_es": "Golpe",
    "name_en": "Slam",
    "cost": 1,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["limbs"]
    },
    "description_es": "El eidolón gana un ataque de golpe primario que inflige 1d8 (Medium), 2d6 (Large), 2d8 (Huge). Reemplaza las garras base si aplica. Requiere Limbs (arms). Puede comprarse múltiples veces.",
    "description_en": "The eidolon gains a primary slam attack dealing 1d8 (Medium), 2d6 (Large), 2d8 (Huge). Replaces base claws if applicable. Requires Limbs (arms). Can be purchased multiple times.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "slippery": {
    "name_es": "Escurridizo",
    "name_en": "Slippery",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "+4 al DMC vs. agarre; +4 bono en pruebas de Escape Artist.",
    "description_en": "+4 CMD vs. grapple; +4 bonus on Escape Artist checks.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "sting": {
    "name_es": "Aguijón",
    "name_en": "Sting",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["tail"]
    },
    "description_es": "El eidolón gana un ataque de aguijón primario que inflige 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Requiere la evolución Cola (Tail).",
    "description_en": "The eidolon gains a primary sting attack dealing 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Requires the Tail evolution.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "swim": {
    "name_es": "Nadar",
    "name_en": "Swim",
    "cost": 1,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana una velocidad de natación igual a su velocidad base. Cada compra adicional suma 20 ft. No otorga respirar bajo el agua.",
    "description_en": "The eidolon gains a swim speed equal to its base speed. Each additional purchase adds 20 ft. Does not grant water breathing.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "tail": {
    "name_es": "Cola",
    "name_en": "Tail",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana un apéndice de cola y +2 bono racial en Acrobatics (equilibrio). Habilita las evoluciones Aguijón (Sting) y Golpe de Cola (Tail Slap).",
    "description_en": "The eidolon gains a tail appendage and +2 racial bonus on Acrobatics (balance). Enables the Sting and Tail Slap evolutions.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "tail_slap": {
    "name_es": "Golpe de Cola",
    "name_en": "Tail Slap",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["tail"]
    },
    "description_es": "El eidolón gana un ataque secundario con la cola que inflige 1d6 (Medium), 1d8 (Large), 2d6 (Huge). Requiere la evolución Cola (Tail).",
    "description_en": "The eidolon gains a secondary tail slap attack dealing 1d6 (Medium), 1d8 (Large), 2d6 (Huge). Requires the Tail evolution.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "tentacle": {
    "name_es": "Tentáculo",
    "name_en": "Tentacle",
    "cost": 1,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana un ataque secundario de tentáculo que inflige 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Puede comprarse múltiples veces.",
    "description_en": "The eidolon gains a secondary tentacle attack dealing 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Can be purchased multiple times.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "unnatural_aura": {
    "name_es": "Aura Sobrenatural",
    "name_en": "Unnatural Aura",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Los animales normales evitan al eidolón dentro de 25 ft. a menos que una prueba de Handle Animal CD 25 tenga éxito.",
    "description_en": "Normal animals avoid the eidolon within 25 ft. unless a Handle Animal DC 25 check succeeds.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "wing_buffet": {
    "name_es": "Aletazo",
    "name_en": "Wing Buffet",
    "cost": 1,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["flight"]
    },
    "description_es": "El eidolón gana dos ataques secundarios de ala que infligen 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Requiere la evolución Vuelo (Flight) con alas.",
    "description_en": "The eidolon gains two secondary wing buffet attacks dealing 1d4 (Medium), 1d6 (Large), 1d8 (Huge). Requires the Flight evolution with wings.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "ability_increase": {
    "name_es": "Aumento de Característica",
    "name_en": "Ability Increase",
    "cost": 2,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "+2 a una característica elegida. Puede comprarse una vez por característica, más una vez adicional por cada 6 niveles del invocador.",
    "description_en": "+2 to one ability score. Can be purchased once per ability score plus one additional time per 6 summoner levels.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "alignment_smite": {
    "name_es": "Golpe de Alineamiento",
    "name_en": "Alignment Smite",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "1/día como acción rápida: el siguiente ataque inflige +1d6 vs. criaturas de alineamiento opuesto y se trata como alineado para superar RD. Al nivel 10 del invocador: 2/día por 1 punto extra.",
    "description_en": "1/day as a swift action: next attack deals +1d6 vs. creatures of opposing alignment and is treated as aligned for DR. At summoner 10th: 2/day for 1 extra point.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "channel_resistance": {
    "name_es": "Resistencia a Canalización",
    "name_en": "Channel Resistance",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["undead_appearance"]
    },
    "description_es": "+2 bono a las tiradas vs. efectos de canalización de energía. Al nivel 7 del invocador +4 por 2 puntos extra. Requiere Undead Appearance.",
    "description_en": "+2 bonus to saves vs. channel energy effects. At summoner 7th: +4 for 2 extra points. Requires Undead Appearance.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "constrict": {
    "name_es": "Constricción",
    "name_en": "Constrict",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": "serpentine",
      "min_summoner_level": null,
      "requires_evolutions": ["grab"]
    },
    "description_es": "Mientras el eidolón agarra a un objetivo con Grab, inflige daño extra igual al del ataque de agarre. Solo para forma serpentina.",
    "description_en": "While grappling a target via Grab, the eidolon deals extra damage equal to the grab attack's damage. Serpentine only.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "energy_attacks": {
    "name_es": "Ataques de Energía",
    "name_en": "Energy Attacks",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 5,
      "requires_evolutions": []
    },
    "description_es": "Todos los ataques naturales del eidolón infligen +1d6 de daño de energía (ácido, frío, electricidad o fuego, a elección). Requiere invocador de nivel 5+.",
    "description_en": "All natural attacks deal +1d6 energy damage (choose acid, cold, electricity, or fire). Requires summoner 5th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "extra_feat": {
    "name_es": "Dón Extra",
    "name_en": "Extra Feat",
    "cost": 2,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana un dón adicional para el que cumpla los prerrequisitos. Puede comprarse múltiples veces.",
    "description_en": "The eidolon gains one bonus feat for which it qualifies. Can be purchased multiple times.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "flight": {
    "name_es": "Vuelo",
    "name_en": "Flight",
    "cost": 2,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 5,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana una velocidad de vuelo igual a su velocidad base. Maniobra Buena (Medium o menor), Media (Large), Pobre (Huge). Por +2 pts adicionales: vuelo mágico sin alas, maniobra Perfecta. Compras adicionales suman +20 ft. Requiere invocador de nivel 5+.",
    "description_en": "The eidolon gains a fly speed equal to its base speed. Good maneuverability (Medium/smaller), Average (Large), Poor (Huge). For +2 extra pts: magical flight, no wings, Perfect maneuverability. Additional purchases add +20 ft. Requires summoner 5th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "gore": {
    "name_es": "Corneada",
    "name_en": "Gore",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana un ataque de corneada primario que inflige 1d6 (Medium), 1d8 (Large), 2d6 (Huge).",
    "description_en": "The eidolon gains a primary gore attack dealing 1d6 (Medium), 1d8 (Large), 2d6 (Huge).",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "grab": {
    "name_es": "Agarrar",
    "name_en": "Grab",
    "cost": 2,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Tras impactar con el ataque elegido, el eidolón puede realizar una comprobación de CMC de agarre gratuita vs. objetivos de la misma talla o menores. +4 al CMC de agarre. Puede comprarse una vez por tipo de ataque.",
    "description_en": "After a successful hit with the selected attack, the eidolon can make a free grapple CMB check vs. targets of the same size or smaller. +4 grapple CMB. Can be purchased once per attack type.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "head": {
    "name_es": "Cabeza Extra",
    "name_en": "Head",
    "cost": 2,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana una cabeza adicional (no otorga ataques extra pero habilita evoluciones de cabeza como mordisco, corneada y arma de aliento). Puede comprarse múltiples veces.",
    "description_en": "The eidolon gains an extra head (no extra attacks, but enables head evolutions: bite, gore, breath weapon). Can be purchased multiple times.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "immunity": {
    "name_es": "Inmunidad",
    "name_en": "Immunity",
    "cost": 2,
    "stacking": "limited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 7,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana inmunidad a un tipo de energía elegido (ácido, frío, electricidad, fuego o sónico). Requiere invocador de nivel 7+. Puede comprarse una vez por tipo.",
    "description_en": "The eidolon gains immunity to one chosen energy type (acid, cold, electricity, fire, or sonic). Requires summoner 7th+. Can be purchased once per energy type.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "keen_scent": {
    "name_es": "Olfato Agudo",
    "name_en": "Keen Scent",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["gills", "scent"]
    },
    "description_es": "El eidolón puede detectar criaturas por olfato a 180 ft. bajo el agua y puede detectar sangre a hasta 1 milla. Requiere Gills y Scent.",
    "description_en": "The eidolon can notice creatures by smell within 180 ft. underwater and can detect blood up to 1 mile away. Requires Gills and Scent.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "limbs": {
    "name_es": "Extremidades",
    "name_en": "Limbs",
    "cost": 2,
    "stacking": "unlimited",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana un par de extremidades (brazos o patas). Patas: +10 ft. de velocidad. Brazos: permiten evoluciones de brazo y usar armas. Puede comprarse múltiples veces.",
    "description_en": "The eidolon gains a pair of limbs (arms or legs). Legs: +10 ft. speed. Arms: enable arm evolutions, can wield weapons. Can be purchased multiple times.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "minor_magic": {
    "name_es": "Magia Menor",
    "name_en": "Minor Magic",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 4,
      "requires_evolutions": ["basic_magic"]
    },
    "description_es": "El eidolón puede lanzar un hechizo de nivel 1 elegido 1/día (3/día al nivel 7 por +2 puntos). NL = DG − 2. CD = 10 + ½DG + mod CAR. Requiere CAR 11+, Magia Básica e invocador de nivel 4+.",
    "description_en": "The eidolon can cast one chosen 1st-level spell 1/day (3/day at summoner 7th for +2 pts). CL = HD − 2. DC = 10 + ½HD + CHA. Requires CHA 11+, Basic Magic, summoner 4th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "poison": {
    "name_es": "Veneno",
    "name_en": "Poison",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 7,
      "requires_evolutions": ["bite"]
    },
    "description_es": "El ataque de mordisco o aguijón inflige veneno al impactar: tirada de Fort o 1d4 de daño de FUE (frecuencia 1/ronda × 4 rondas, cura 1 tirada). CD = 10 + ½DG + mod CON. Por +2 pts: daño de CON en lugar de FUE. Requiere Bite o Sting e invocador de nivel 7+.",
    "description_en": "The bite or sting attack delivers poison on a hit: Fort save or 1d4 Str damage (frequency 1/round × 4 rounds, cure 1 save). DC = 10 + ½HD + CON mod. For +2 pts: CON damage instead. Requires Bite or Sting, summoner 7th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "rake": {
    "name_es": "Rasgar",
    "name_en": "Rake",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": "quadruped",
      "min_summoner_level": 4,
      "requires_evolutions": ["claws"]
    },
    "description_es": "El eidolón gana dos ataques de rasgado primario 1d4 (Medium), 1d6 (Large), 1d8 (Huge) que puede usar al agarrar. Solo cuadrúpedo. Requiere Claws e invocador de nivel 4+.",
    "description_en": "The eidolon gains two primary rake attacks 1d4 (Medium), 1d6 (Large), 1d8 (Huge) usable while grappling. Quadruped only. Requires Claws, summoner 4th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "rend": {
    "name_es": "Desgarrar",
    "name_en": "Rend",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 6,
      "requires_evolutions": ["claws"]
    },
    "description_es": "Si el eidolón impacta con dos ataques de garra al mismo objetivo en el mismo turno, inflige daño extra de garra + ×1,5 FUE. Requiere Claws e invocador de nivel 6+.",
    "description_en": "If two successful claw hits land on the same target in the same turn, the eidolon deals extra claw damage + 1.5× Str. Requires Claws, summoner 6th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "rock_throwing": {
    "name_es": "Lanzar Piedras",
    "name_en": "Rock Throwing",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["large"]
    },
    "description_es": "El eidolón puede lanzar piedras como proyectil, infligiendo 2d6 de daño a distancia media. Requiere tamaño Large.",
    "description_en": "The eidolon can throw rocks as a ranged attack dealing 2d6 damage at medium range. Requires Large size.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "shadow_blend": {
    "name_es": "Mezcla con Sombras",
    "name_en": "Shadow Blend",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "En condiciones de luz no brillante, el eidolón tiene un 20% de probabilidad de fallo (50% con Shadow Form activa). Se activa o desactiva como acción gratuita.",
    "description_en": "In non-bright light conditions, the eidolon gains a 20% miss chance (50% with Shadow Form active). Toggle as a free action.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "shadow_form": {
    "name_es": "Forma de Sombra",
    "name_en": "Shadow Form",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón tiene un 20% de probabilidad de fallo constante; sus ataques de melé afectan a criaturas incorpóreas (toque espectral); inflige la mitad de daño a criaturas corpóreas.",
    "description_en": "The eidolon has a constant 20% miss chance; its melee attacks affect incorporeal creatures (ghost touch); it deals half damage to corporeal creatures.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "sickening": {
    "name_es": "Nauseabundo",
    "name_en": "Sickening",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Las criaturas vivas a 20 ft. del eidolón quedan enfermas (sickened) durante 1 ronda si fallan una tirada de Fort (CD = 10 + ½DG + mod CON).",
    "description_en": "Living creatures within 20 ft. are sickened for 1 round unless they succeed at a Fort save (DC = 10 + ½HD + CON mod).",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "trample": {
    "name_es": "Pisotear",
    "name_en": "Trample",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Acción de ronda completa: pisotear criaturas menores infligiendo 1d6 (Medium), 1d8 (Large), 2d6 (Huge) + ×1,5 FUE. Reflex para recibir la mitad. Solo bípedo o cuadrúpedo.",
    "description_en": "Full-round action: overrun smaller creatures dealing 1d6 (Medium), 1d8 (Large), 2d6 (Huge) + 1.5× Str. Reflex for half. Biped or quadruped only.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "tremorsense": {
    "name_es": "Tremorsense",
    "name_en": "Tremorsense",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 7,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede detectar criaturas en contacto con el suelo en un radio de 30 ft. Requiere invocador de nivel 7+.",
    "description_en": "The eidolon can detect creatures in contact with the ground within 30 ft. Requires summoner 7th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "trip": {
    "name_es": "Derribar",
    "name_en": "Trip",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": ["bite"]
    },
    "description_es": "Tras un mordisco exitoso, el eidolón puede realizar una comprobación de CMC gratuita para derribar al objetivo si es de la misma talla o menor. Requiere Bite.",
    "description_en": "After a successful bite, the eidolon can make a free trip CMB check vs. same-size or smaller targets. Requires Bite.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "undead_appearance": {
    "name_es": "Apariencia No-muerta",
    "name_en": "Undead Appearance",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón tiene apariencia de no-muerto; la energía negativa lo cura y la positiva lo daña. +2 en tiradas de salvación vs. enfermedad, parálisis, veneno, sueño y aturdir. Al nivel 7: +4. Al nivel 12: inmunidad a estos efectos.",
    "description_en": "The eidolon appears undead; negative energy heals it, positive harms it. +2 saves vs. disease, paralysis, poison, sleep, and stunning. At summoner 7th: +4. At 12th: immunity.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "weapon_training": {
    "name_es": "Entrenamiento con Armas",
    "name_en": "Weapon Training",
    "cost": 2,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana competencia con armas simples. Por +2 pts adicionales: también armas marciales.",
    "description_en": "The eidolon gains proficiency with simple weapons. For +2 additional pts: also martial weapons.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "blindsense": {
    "name_es": "Sentido Ciego",
    "name_en": "Blindsense",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede percibir criaturas a 30 ft. sin verlas; el ocultamiento total sigue aplicando. Requiere invocador de nivel 9+.",
    "description_en": "The eidolon can pinpoint creatures within 30 ft. without seeing them; total concealment still applies. Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "burrow": {
    "name_es": "Excavar",
    "name_en": "Burrow",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana una velocidad de excavación igual a la mitad de su velocidad base a través de tierra; no deja túnel tras de sí. Requiere invocador de nivel 9+.",
    "description_en": "The eidolon gains a burrow speed equal to ½ its base speed through earth; leaves no hole. Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "celestial_appearance": {
    "name_es": "Apariencia Celestial",
    "name_en": "Celestial Appearance",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón tiene apariencia celestial; +2 en tiradas vs. enfermedad, petrificación, veneno y electricidad; RM 5+DG vs. efectos del mal. Requiere invocador de alineamiento bueno.",
    "description_en": "The eidolon appears celestial; +2 saves vs. disease, petrification, poison, and electricity; SR 5+HD vs. evil effects. Requires good-aligned summoner.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "damage_reduction": {
    "name_es": "Reducción de Daño",
    "name_en": "Damage Reduction",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana RD 5/tipo de alineamiento opuesto. Al nivel 12 del invocador: RD 10 por 2 puntos extra. Requiere invocador de nivel 9+.",
    "description_en": "The eidolon gains DR 5/opposite-alignment weapon. At summoner 12th: DR 10 for 2 extra points. Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "fiendish_appearance": {
    "name_es": "Apariencia Infernal",
    "name_en": "Fiendish Appearance",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón tiene apariencia infernal; +2 en tiradas vs. ácido, enfermedad, fuego y veneno; RM 5+DG vs. efectos del bien. Requiere invocador de alineamiento malvado.",
    "description_en": "The eidolon appears fiendish; +2 saves vs. acid, disease, fire, and poison; SR 5+HD vs. good effects. Requires evil-aligned summoner.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "frightful_presence": {
    "name_es": "Presencia Aterradora",
    "name_en": "Frightful Presence",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 11,
      "requires_evolutions": []
    },
    "description_es": "Radio de 30 ft.: Will o queda sacudido (shaken) durante 3d6 rondas. CD = 10 + ½DG + mod CAR. Si el eidolón tiene 4+ DG más que el objetivo, queda asustado (frightened). Requiere invocador de nivel 11+.",
    "description_en": "30 ft. radius: Will save or shaken for 3d6 rounds. DC = 10 + ½HD + CHA mod. If eidolon has 4+ more HD than target, target is frightened instead. Requires summoner 11th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "major_magic": {
    "name_es": "Magia Mayor",
    "name_en": "Major Magic",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 7,
      "requires_evolutions": ["minor_magic"]
    },
    "description_es": "El eidolón puede lanzar un hechizo de nivel 2 elegido 1/día (3/día al nivel 10 por +2 puntos). NL = DG − 2. CD = 10 + ½DG + mod CAR. Requiere CAR 12+, Magia Menor e invocador de nivel 7+.",
    "description_en": "The eidolon can cast one chosen 2nd-level spell 1/day (3/day at summoner 10th for +2 pts). CL = HD − 2. DC = 10 + ½HD + CHA. Requires CHA 12+, Minor Magic, summoner 7th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "sacrifice": {
    "name_es": "Sacrificio",
    "name_en": "Sacrifice",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "Acción estándar: el eidolón sacrifica hasta 2 PG por DG y cura al objetivo tocado por la mitad de los PG sacrificados.",
    "description_en": "Standard action: the eidolon sacrifices up to 2 HP per HD and heals a touched target for half the sacrificed HP.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "see_in_darkness": {
    "name_es": "Ver en la Oscuridad",
    "name_en": "See in Darkness",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede ver perfectamente en oscuridad mágica, incluida la oscuridad profunda (deeper darkness). Requiere invocador de nivel 9+.",
    "description_en": "The eidolon can see perfectly in magical darkness, including deeper darkness. Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "swallow_whole": {
    "name_es": "Tragar Entero",
    "name_en": "Swallow Whole",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": ["grab"]
    },
    "description_es": "Si un objetivo está agarrado por el mordisco al inicio del turno del eidolón, puede realizar una comprobación de CMC para tragárselo. El tragado recibe daño de mordisco + 1d6 de daño contundente por ronda. Puede cortarse para escapar. Requiere Grab (mordisco) e invocador de nivel 9+.",
    "description_en": "If a grappled target remains in the bite at the start of the eidolon's turn, it can make a CMB check to swallow. Swallowed target takes bite + 1d6 bludgeoning damage per round and can cut free. Requires Grab (bite), summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "web": {
    "name_es": "Red/Telaraña",
    "name_en": "Web",
    "cost": 3,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 7,
      "requires_evolutions": ["climb"]
    },
    "description_es": "El eidolón puede lanzar tela de araña como ataque de contacto a distancia (50 ft.), 8/día, enredando al objetivo hasta una talla mayor. CD de escape = 10 + ½DG + mod CON. Telarañas: dureza 0, PG = DG totales. El eidolón detecta criaturas tocando su red. Requiere Climb e invocador de nivel 7+.",
    "description_en": "The eidolon can shoot webs as a ranged touch attack (50 ft.), 8/day, entangling targets up to one size larger. Escape DC = 10 + ½HD + CON mod. Webs: Hardness 0, HP = total HD. The eidolon senses creatures touching its web. Requires Climb, summoner 7th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "blindsight": {
    "name_es": "Vista Ciega",
    "name_en": "Blindsight",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 11,
      "requires_evolutions": ["blindsense"]
    },
    "description_es": "El eidolón tiene vista ciega de 30 ft.; ignora oscuridad, invisibilidad y ocultamiento (requiere línea de efecto). Requiere Blindsense e invocador de nivel 11+.",
    "description_en": "The eidolon gains 30 ft. blindsight; ignores darkness, invisibility, and concealment (requires line of effect). Requires Blindsense, summoner 11th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "breath_weapon": {
    "name_es": "Arma de Aliento",
    "name_en": "Breath Weapon",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede usar un arma de aliento: cono de 30 ft. o línea de 60 ft.; 1d6 de daño de energía por DG (ácido, frío, electricidad o fuego). Reflex CD = 10 + ½DG + mod CON para la mitad. 1/día; +1 uso por punto de evolución extra (máximo 3/día). Requiere invocador de nivel 9+.",
    "description_en": "The eidolon gains a breath weapon: 30-ft. cone or 60-ft. line; 1d6 energy damage per HD (acid, cold, electricity, or fire). Reflex DC = 10 + ½HD + CON mod for half. 1/day; +1 use per extra evolution point (max 3/day). Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "dimension_door": {
    "name_es": "Puerta Dimensional",
    "name_en": "Dimension Door",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede usar puerta dimensional (Sp) como acción estándar 1/día. Por cada punto de evolución extra gastado, gana 1 uso adicional por día (máximo 3/día). Requiere invocador de nivel 9+.",
    "description_en": "The eidolon can use dimension door (Sp) as a standard action 1/day. For each additional evolution point spent, it gains 1 additional daily use (max 3/day). Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "fast_healing": {
    "name_es": "Curación Acelerada",
    "name_en": "Fast Healing",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 11,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana Curación Acelerada 1 (regenera 1 PG por ronda automáticamente). Escala automáticamente con DG: +1 por cada 4 DG por encima del 4.° (CA 2 a 8 DG, CA 3 a 12 DG, CA 4 a 16 DG, CA 5 a 20 DG). Sin coste extra para escalar. Requiere invocador de nivel 11+ (posiblemente 13+ según una fuente).",
    "description_en": "The eidolon gains Fast Healing 1 (heals 1 HP per round automatically). Scales automatically with HD: +1 per 4 HD above 4th (FH 2 at 8 HD, FH 3 at 12 HD, FH 4 at 16 HD, FH 5 at 20 HD). No extra cost to scale. Requires summoner 11th+ (possibly 13th+ per one source).",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "incorporeal_form": {
    "name_es": "Forma Incorpórea",
    "name_en": "Incorporeal Form",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 11,
      "requires_evolutions": []
    },
    "description_es": "El eidolón puede volverse incorpóreo (Sp) como acción estándar durante un número de rondas por día igual a sus DG. Puede regresar a la normalidad como acción gratuita. Mientras es incorpóreo: puede atravesar paredes y objetos sólidos; no puede hacer ataques físicos; recibe la mitad de daño de armas no mágicas, daño completo de armas/hechizos mágicos. Requiere invocador de nivel 11+.",
    "description_en": "The eidolon can become incorporeal (Sp) as a standard action for a number of rounds per day equal to its HD. It can return to normal as a free action. While incorporeal: can pass through walls and solid objects; cannot make physical attacks; takes half damage from nonmagical weapons, full damage from magic weapons/spells. Requires summoner 11th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "large": {
    "name_es": "Grande",
    "name_en": "Large",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 8,
      "requires_evolutions": []
    },
    "description_es": "El eidolón crece a talla Grande. Gana +4 FUE, −2 DES, −1 CA y −1 a las tiradas de ataque. Espacio 10 ft., alcance 10 ft. Requiere invocador de nivel 8+. (Nota: el documento de investigación original indicaba +8 FUE/+4 CON — corregido a +4 FUE según verificación.)",
    "description_en": "The eidolon grows to Large size. It gains +4 Str, −2 Dex, −1 AC, and −1 attack rolls. Space 10 ft., reach 10 ft. Requires summoner 8th+. (Note: original research doc had +8 Str/+4 Con — corrected to +4 Str per verification.)",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "lifesense": {
    "name_es": "Sentido de Vida",
    "name_en": "Lifesense",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 9,
      "requires_evolutions": []
    },
    "description_es": "El eidolón detecta automáticamente la presencia y ubicación de criaturas vivas en un radio de 60 ft., independientemente de la visibilidad o el ocultamiento (Su). Requiere invocador de nivel 9+.",
    "description_en": "The eidolon automatically detects the presence and location of living creatures within 60 ft., regardless of visibility or concealment (Su). Requires summoner 9th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "no_breath": {
    "name_es": "Sin Respiración",
    "name_en": "No Breath",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": null,
      "requires_evolutions": []
    },
    "description_es": "El eidolón no necesita respirar; es inmune a venenos inhalados, ahogamiento y asfixia.",
    "description_en": "The eidolon no longer needs to breathe; it is immune to inhaled poisons, drowning, and suffocation.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "spell_resistance": {
    "name_es": "Resistencia a Conjuros",
    "name_en": "Spell Resistance",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 13,
      "requires_evolutions": []
    },
    "description_es": "El eidolón gana Resistencia a Conjuros (Ex) igual a 11 + sus DG. (Nota: el documento de investigación original indicaba RM = nivel de invocador + 11 y nivel 9+; corregido a 11+DG y nivel 13+.)",
    "description_en": "The eidolon gains Spell Resistance (Ex) equal to 11 + its HD. (Note: original research doc had SR = summoner level + 11 and level 9+; corrected to 11 + HD and level 13+ per verification.)",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  },
  "ultimate_magic": {
    "name_es": "Magia Suprema",
    "name_en": "Ultimate Magic",
    "cost": 4,
    "stacking": "single",
    "max_stacks": null,
    "prereqs": {
      "base_form": null,
      "min_summoner_level": 13,
      "requires_evolutions": ["major_magic"]
    },
    "description_es": "El eidolón puede lanzar un hechizo de nivel 3 elegido 1/día (3/día al nivel 16 por +2 puntos). NL = DG − 2. CD = 10 + ½DG + mod CAR. Requiere CAR 13+, Magia Mayor e invocador de nivel 13+.",
    "description_en": "The eidolon can cast one chosen 3rd-level spell 1/day (3/day at summoner 16th for +2 pts). CL = HD − 2. DC = 10 + ½HD + CHA. Requires CHA 13+, Major Magic, summoner 13th+.",
    "source_url": "https://www.d20pfsrd.com/classes/base-classes/summoner/eidolons/eidolons/"
  }
};

const FALLBACK_ANIMAL_TRICKS = {
  "tricks": [
    {
      "slug": "calm",
      "name_es": "Calmar",
      "name_en": "Calm",
      "dc": 10,
      "description_es": "+2 moral a tiradas de Will iniciales contra miedo; +4 a checks posteriores (para monturas).",
      "description_en": "+2 morale bonus to initial Will saves vs. fear; +4 to subsequent checks (mounts).",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "bury",
      "name_es": "Enterrar",
      "name_en": "Bury",
      "dc": 15,
      "description_es": "Entierra objetos en lugares seguros. Funciona con Fetch para recuperarlos.",
      "description_en": "Buries objects in safe locations. Works with Fetch to retrieve them.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "come",
      "name_es": "Venir",
      "name_en": "Come",
      "dc": 15,
      "description_es": "El animal se acerca al manejador aunque normalmente no lo haría.",
      "description_en": "The animal approaches the handler even when it would not normally do so.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "deliver",
      "name_es": "Entregar",
      "name_en": "Deliver",
      "dc": 15,
      "description_es": "Transporta objetos a ubicaciones o personas designadas.",
      "description_en": "Transports objects to designated locations or persons.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "demolish",
      "name_es": "Demoler",
      "name_en": "Demolish",
      "dc": 15,
      "description_es": "Ataca y daña objetos o estructuras. Requiere Attack y entrenamiento para todas las criaturas.",
      "description_en": "Attacks and damages objects or structures. Requires Attack and all-creature training.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": ["attack"]
    },
    {
      "slug": "down",
      "name_es": "Echarse",
      "name_en": "Down",
      "dc": 15,
      "description_es": "Se retira del combate y queda quieto.",
      "description_en": "Withdraws from combat and stays still.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "fetch",
      "name_es": "Traer",
      "name_en": "Fetch",
      "dc": 15,
      "description_es": "Recupera objetos, ya sean específicos o aleatorios.",
      "description_en": "Retrieves objects, whether specific or random.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "find_master",
      "name_es": "Encontrar al Amo",
      "name_en": "Find Master",
      "dc": 15,
      "description_es": "Localiza al manejador usando olfato u otros medios de rastreo.",
      "description_en": "Locates the handler using scent or other tracking means.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "guide",
      "name_es": "Guiar",
      "name_en": "Guide",
      "dc": 15,
      "description_es": "Ayuda a criaturas ciegas permaneciendo adyacente e indicando obstáculos.",
      "description_en": "Assists blind creatures by staying adjacent and indicating obstacles.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "heel",
      "name_es": "Talón",
      "name_en": "Heel",
      "dc": 15,
      "description_es": "Sigue de cerca al manejador, incluso a lugares inusuales.",
      "description_en": "Follows the handler closely, even into unusual locations.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "intimidate",
      "name_es": "Intimidar",
      "name_en": "Intimidate",
      "dc": 15,
      "description_es": "Amenaza criaturas designadas; −4 contra no-animales y humanoides.",
      "description_en": "Threatens designated creatures; −4 against non-animals and humanoids.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "perform",
      "name_es": "Actuar",
      "name_en": "Perform",
      "dc": 15,
      "description_es": "Ejecuta trucos simples de entretenimiento.",
      "description_en": "Performs simple entertainment tricks.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "preen",
      "name_es": "Acicalarse",
      "name_en": "Preen",
      "dc": 15,
      "description_es": "(Montura) +5 a negociar alojamiento y establo.",
      "description_en": "(Mount) +5 to negotiate lodging and stabling.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "seek",
      "name_es": "Buscar",
      "name_en": "Seek",
      "dc": 15,
      "description_es": "Explora un área buscando algo vivo.",
      "description_en": "Explores an area searching for something alive.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "serve",
      "name_es": "Servir",
      "name_en": "Serve",
      "dc": 15,
      "description_es": "Acepta comandos de criaturas designadas, no solo del manejador.",
      "description_en": "Accepts commands from designated creatures, not just the handler.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "sneak",
      "name_es": "Sigilo",
      "name_en": "Sneak",
      "dc": 15,
      "description_es": "Hace tiradas de Stealth y mantiene cobertura u ocultamiento.",
      "description_en": "Makes Stealth checks and maintains cover or concealment.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "stay",
      "name_es": "Quedarse",
      "name_en": "Stay",
      "dc": 15,
      "description_es": "Permanece inmóvil hasta ser llamado.",
      "description_en": "Remains motionless until called.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "subdue",
      "name_es": "Someter",
      "name_en": "Subdue",
      "dc": 15,
      "description_es": "Todos los ataques naturales son no-letales (penalización −4).",
      "description_en": "All natural attacks are nonlethal (−4 penalty).",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "warm",
      "name_es": "Calentar",
      "name_en": "Warm",
      "dc": 15,
      "description_es": "+2 de bonificación a resistir efectos de frío cuando el animal está adyacente.",
      "description_en": "+2 bonus to resist cold effects when the animal is adjacent.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "aid",
      "name_es": "Ayudar",
      "name_en": "Aid",
      "dc": 20,
      "description_es": "Usa Aid Another para ayudar a aliados específicos en combate.",
      "description_en": "Uses Aid Another to assist specific allies in combat.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "attack",
      "name_es": "Atacar",
      "name_en": "Attack",
      "dc": 20,
      "description_es": "Ataca enemigos designados. La versión 'todas las criaturas' (ataca cualquier criatura) cuenta como 2 tricks.",
      "description_en": "Attacks designated enemies. The 'all-creature' version (attacks any creature) counts as 2 tricks.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "bombard",
      "name_es": "Bombardear",
      "name_en": "Bombard",
      "dc": 20,
      "description_es": "(Voladores) Suelta proyectiles sobre objetivos designados usando BAB.",
      "description_en": "(Flyers) Drops projectiles on designated targets using BAB.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "break_out",
      "name_es": "Escapar",
      "name_en": "Break Out",
      "dc": 20,
      "description_es": "Rompe restricciones; +4 a tiradas de Escape Artist de criaturas restringidas.",
      "description_en": "Breaks restraints; +4 to Escape Artist checks for restrained creatures.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "defend",
      "name_es": "Defender",
      "name_en": "Defend",
      "dc": 20,
      "description_es": "Protege al manejador o a un personaje designado.",
      "description_en": "Protects the handler or a designated character.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "exclusive",
      "name_es": "Exclusivo",
      "name_en": "Exclusive",
      "dc": 20,
      "description_es": "Solo acepta comandos del manejador que enseñó este trick.",
      "description_en": "Only accepts commands from the handler who taught this trick.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "feint",
      "name_es": "Fintar",
      "name_en": "Feint",
      "dc": 20,
      "description_es": "Hace fintas contra oponentes. Requiere Attack.",
      "description_en": "Feints against opponents. Requires Attack.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": ["attack"]
    },
    {
      "slug": "flank",
      "name_es": "Flanquear",
      "name_en": "Flank",
      "dc": 20,
      "description_es": "Mantiene adyacencia para flanquear. Requiere Attack.",
      "description_en": "Maintains adjacency to flank. Requires Attack.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": ["attack"]
    },
    {
      "slug": "flee",
      "name_es": "Huir",
      "name_en": "Flee",
      "dc": 20,
      "description_es": "Huye y se esconde, permaneciendo dentro del rango auditivo o visual del manejador.",
      "description_en": "Flees and hides, remaining within auditory or visual range of the handler.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "get_help",
      "name_es": "Pedir Ayuda",
      "name_en": "Get Help",
      "dc": 20,
      "description_es": "Localiza y recupera criaturas designadas. Máximo igual a la Int del animal.",
      "description_en": "Locates and retrieves designated creatures. Maximum equals the animal's Int.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "guard",
      "name_es": "Guardar",
      "name_en": "Guard",
      "dc": 20,
      "description_es": "Impide que otros se acerquen a un área designada.",
      "description_en": "Prevents others from approaching a designated area.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "hunt",
      "name_es": "Cazar",
      "name_en": "Hunt",
      "dc": 20,
      "description_es": "Usa instintos naturales para encontrar comida; bonificación a Supervivencia.",
      "description_en": "Uses natural instincts to find food; bonus to Survival.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "maneuver",
      "name_es": "Maniobra",
      "name_en": "Maneuver",
      "dc": 20,
      "description_es": "Ejecuta una maniobra de combate específica. Requiere Attack. Puede enseñarse múltiples veces para diferentes maniobras.",
      "description_en": "Executes a specific combat maneuver. Requires Attack. Can be taught multiple times for different maneuvers.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": ["attack"]
    },
    {
      "slug": "menace",
      "name_es": "Amenazar",
      "name_en": "Menace",
      "dc": 20,
      "description_es": "Intimida a una criatura para impedir su movimiento; solo ataca si el objetivo intenta moverse.",
      "description_en": "Intimidates a creature to prevent movement; only attacks if the target attempts to move.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "milk_venom",
      "name_es": "Extraer Veneno",
      "name_en": "Milk Venom",
      "dc": 20,
      "description_es": "Proporciona una dosis de veneno. Requiere 10 minutos y un vial; el animal debe tener veneno.",
      "description_en": "Provides one dose of venom. Requires 10 minutes and a vial; the animal must have venom.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "protect",
      "name_es": "Proteger",
      "name_en": "Protect",
      "dc": 20,
      "description_es": "Se queda junto al objetivo designado y realiza acciones preparadas contra amenazas adyacentes.",
      "description_en": "Stays beside a designated target and takes readied actions against adjacent threats.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "quiet_watch",
      "name_es": "Vigía Silencioso",
      "name_en": "Quiet Watch",
      "dc": 20,
      "description_es": "Vigila silenciosamente un área; alerta al manejador sin hacer ruido cuando es posible.",
      "description_en": "Silently watches an area; alerts the handler without noise when possible.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "rescue",
      "name_es": "Rescatar",
      "name_en": "Rescue",
      "dc": 20,
      "description_es": "Arrastra criaturas incapacitadas o muertas a un lugar seguro. Requiere Deliver y Guard.",
      "description_en": "Drags incapacitated or dead creatures to safety. Requires Deliver and Guard.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": ["deliver", "guard"]
    },
    {
      "slug": "track",
      "name_es": "Rastrear",
      "name_en": "Track",
      "dc": 20,
      "description_es": "Rastrea por olfato. Requiere la habilidad especial de olfato (scent).",
      "description_en": "Tracks by scent. Requires the scent special ability.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "withhold_venom",
      "name_es": "Retener Veneno",
      "name_en": "Withhold Venom",
      "dc": 20,
      "description_es": "No inyecta veneno en ataques designados. Requiere la habilidad de veneno.",
      "description_en": "Does not inject venom in designated attacks. Requires venom ability.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "build_simple_structure",
      "name_es": "Construir Estructura Simple",
      "name_en": "Build Simple Structure",
      "dc": 25,
      "description_es": "Construye estructuras naturales (telaraña, presa, madriguera). 10 minutos por cuadro de 5 pies.",
      "description_en": "Builds natural structures (web, dam, burrow). 10 minutes per 5-ft. square.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "detect",
      "name_es": "Detectar",
      "name_en": "Detect",
      "dc": 25,
      "description_es": "Busca olores, sonidos o señales inusuales usando Percepción.",
      "description_en": "Searches for unusual scents, sounds, or signals using Perception.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "drive",
      "name_es": "Ahuyentar",
      "name_en": "Drive",
      "dc": 25,
      "description_es": "Ahuyenta monturas sin jinete y criaturas no mágicas (Will DC 10 o huye 120 pies).",
      "description_en": "Drives off unmounted mounts and non-magical creatures (Will DC 10 or flees 120 ft.).",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "entertain",
      "name_es": "Entretener",
      "name_en": "Entertain",
      "dc": 25,
      "description_es": "Trucos impresionantes; los espectadores sufren −2 a Percepción a menos que superen Sentir Motivaciones.",
      "description_en": "Impressive tricks; spectators suffer −2 to Perception unless they pass Sense Motive.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "hide_tracks",
      "name_es": "Ocultar Rastro",
      "name_en": "Hide Tracks",
      "dc": 25,
      "description_es": "(Montura) No levanta polvo; +5 al DC de rastreo; pierde 5 pies/asalto de movimiento.",
      "description_en": "(Mount) Does not raise dust; +5 to tracking DC; loses 5 ft./round of movement.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "mark_territory",
      "name_es": "Marcar Territorio",
      "name_en": "Mark Territory",
      "dc": 25,
      "description_es": "Marca un área de hasta media milla cuadrada; reduce en un 25% los encuentros aleatorios.",
      "description_en": "Marks an area up to half a square mile; reduces random encounters by 25%.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "nest",
      "name_es": "Anidar",
      "name_en": "Nest",
      "dc": 25,
      "description_es": "Encuentra un lugar de acampada más seguro.",
      "description_en": "Finds a safer campsite location.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "receive_spell",
      "name_es": "Recibir Hechizo",
      "name_en": "Receive Spell",
      "dc": 25,
      "description_es": "Entrenado para recibir y usar los efectos de un hechizo específico.",
      "description_en": "Trained to receive and utilize the effects of a specific spell.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "speak",
      "name_es": "Hablar",
      "name_en": "Speak",
      "dc": 25,
      "description_es": "Comunica conceptos simples (sí/no, contar hasta 3, 2 preguntas por punto de Int). Requiere Int 2+.",
      "description_en": "Communicates simple concepts (yes/no, count to 3, 2 questions per Int point). Requires Int 2+.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": null
    },
    {
      "slug": "steal",
      "name_es": "Robar",
      "name_en": "Steal",
      "dc": 25,
      "description_es": "Requiere: Come, Fetch, Maneuver (robar), Seek, Sneak.",
      "description_en": "Requires knowing: Come, Fetch, Maneuver (steal), Seek, Sneak.",
      "training_time_weeks": 1,
      "is_general_purpose": false,
      "prereqs": ["come", "fetch", "maneuver", "seek", "sneak"]
    }
  ],
  "packages": [
    {
      "slug": "heavy_labor",
      "name_es": "Trabajo Pesado",
      "name_en": "Heavy Labor",
      "dc": 15,
      "training_time_weeks": 2,
      "tricks_included": ["come", "work"],
      "description_es": "Entrenamiento para tareas de trabajo físico intenso.",
      "description_en": "Training for heavy physical labor tasks."
    },
    {
      "slug": "perform",
      "name_es": "Actuación",
      "name_en": "Perform",
      "dc": 15,
      "training_time_weeks": 5,
      "tricks_included": ["come", "fetch", "heel", "perform", "stay"],
      "description_es": "Entrenamiento para actuaciones y entretenimiento.",
      "description_en": "Training for performances and entertainment."
    },
    {
      "slug": "ride",
      "name_es": "Monta Básica",
      "name_en": "Ride",
      "dc": 15,
      "training_time_weeks": 3,
      "tricks_included": ["come", "heel", "stay"],
      "description_es": "Entrenamiento básico para ser montado.",
      "description_en": "Basic training for being ridden."
    },
    {
      "slug": "air_support",
      "name_es": "Apoyo Aéreo",
      "name_en": "Air Support",
      "dc": 20,
      "training_time_weeks": null,
      "tricks_included": ["attack", "bombard", "deliver"],
      "description_es": "Entrenamiento para compañeros voladores en apoyo de combate. Tiempo de entrenamiento no especificado en las reglas.",
      "description_en": "Training for flying companions in combat support. Training time not specified in rules text."
    },
    {
      "slug": "attack_fight",
      "name_es": "Ataque/Combate",
      "name_en": "Attack/Fight",
      "dc": 20,
      "training_time_weeks": 3,
      "tricks_included": ["attack", "down", "stay"],
      "description_es": "Entrenamiento básico de combate.",
      "description_en": "Basic combat training."
    },
    {
      "slug": "combat_riding",
      "name_es": "Monta de Combate",
      "name_en": "Combat Riding",
      "dc": 20,
      "training_time_weeks": 6,
      "tricks_included": ["attack", "come", "defend", "down", "guard", "heel"],
      "description_es": "Entrenamiento completo de monta de combate (equivalente a 'combat trained'). 3 semanas si ya tiene Ride.",
      "description_en": "Full combat mount training (equivalent to 'combat trained'). 3 weeks if Ride already known."
    },
    {
      "slug": "guard",
      "name_es": "Guardia",
      "name_en": "Guard",
      "dc": 20,
      "training_time_weeks": 4,
      "tricks_included": ["attack", "defend", "down", "guard"],
      "description_es": "Entrenamiento para tareas de guardia y vigilancia.",
      "description_en": "Training for guard and watch duties."
    },
    {
      "slug": "hunt",
      "name_es": "Caza",
      "name_en": "Hunt",
      "dc": 20,
      "training_time_weeks": 6,
      "tricks_included": ["attack", "down", "fetch", "heel", "seek", "track"],
      "description_es": "Entrenamiento para caza y rastreo.",
      "description_en": "Training for hunting and tracking."
    },
    {
      "slug": "liberate",
      "name_es": "Liberar",
      "name_en": "Liberate",
      "dc": 25,
      "training_time_weeks": null,
      "tricks_included": ["break_out", "flee", "get_help"],
      "description_es": "Entrenamiento para liberar y rescatar. Tiempo de entrenamiento no especificado en las reglas.",
      "description_en": "Training for liberating and rescuing. Training time not specified in rules text."
    },
    {
      "slug": "serve",
      "name_es": "Servicio",
      "name_en": "Serve",
      "dc": 20,
      "training_time_weeks": null,
      "tricks_included": ["deliver", "exclusive", "serve"],
      "description_es": "Entrenamiento para servir a múltiples amos designados. Tiempo de entrenamiento no especificado en las reglas.",
      "description_en": "Training to serve multiple designated handlers. Training time not specified in rules text."
    }
  ]
};

const FALLBACK_EIDOLON_SUBTYPES = {
  "_meta": {
    "source": "Pathfinder Unchained (PZO1131)",
    "official_subtypes_total_aon": 26,
    "subtypes_in_this_file": 12,
    "subtypes_dropped": ["Qlippoth", "Asura", "Daeva"],
    "dropped_reason": "Not present in AoN official unchained eidolon subtype list (verified via aonprd.com/EidolonUCSubtypes.aspx)",
    "skills_class_note": "All subtypes use standard eidolon class skills unless noted. Standard: Bluff, Craft, Knowledge (planes), Perception, Sense Motive, Stealth. Summoner designates 4 additional class skills at 1st level. Source: d20pfsrd classic eidolon entry (unchained uses same base list).",
    "languages_note": "AoN unchained subtype pages do NOT list per-subtype starting languages. Eidolons speak the summoner's languages (Pathfinder Unchained). Values here reflect canonical outsider-plane language per subtype — VERIFICAR contra Pathfinder Unchained pg. 25.",
    "features_note": "HD milestone features verified via aonprd.com/EidolonUCSubtypes.aspx (fetched 2026-04-29). Daemon HD 20 discrepancy: verify doc says 'true seeing'; live AoN says 'soul devour' — live AoN used as primary source.",
    "generated": "2026-04-29"
  },
  "agathion": {
    "name_es": "Agatión",
    "name_en": "Agathion",
    "alignment": "NG",
    "base_forms": ["biped (claws, limbs [arms], limbs [legs])", "quadruped (limbs [legs, 2], bite)"],
    "languages": ["[VERIFICAR - Celestial canónico para outsiders del Nirvana; ver Pathfinder Unchained pg. 25]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (electricidad) y +4 vs. veneno/petrificación",
        "name_en": "Resistance (electricity) and +4 vs. poison/petrification",
        "description_es": "El eidolon gana la evolución resistencia (electricidad) y un bonificador +4 en las tiradas de salvación contra veneno y petrificación.",
        "description_en": "The eidolon gains the resistance (electricity) evolution and a +4 bonus on saving throws against poison and petrification."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al frío 10 y resistencia sónica 10",
        "name_en": "Cold resistance 10 and sonic resistance 10",
        "description_es": "El eidolon gana resistencia al frío 10 y resistencia sónica 10.",
        "description_en": "The eidolon gains cold resistance 10 and sonic resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Imposición de manos (Sp)",
        "name_en": "Lay on Hands (Sp)",
        "description_es": "El eidolon gana imposición de manos como un paladín con niveles iguales a sus Dados de Golpe.",
        "description_en": "The eidolon gains lay on hands as a paladin with levels equal to its Hit Dice."
      },
      {
        "hd": 12,
        "name_es": "RD 5/mal, inmunidad a petrificación, veradiscurso",
        "name_en": "DR 5/evil, immunity to petrification, truespeech",
        "description_es": "El eidolon gana RD 5/mal, inmunidad a petrificación y la habilidad veradiscurso (truespeech).",
        "description_en": "The eidolon gains DR 5/evil, immunity to petrification, and the truespeech ability."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (electricidad), hablar con animales",
        "name_en": "Immunity (electricity), speak with animals",
        "description_es": "El eidolon pierde la evolución resistencia (electricidad) y en su lugar gana la evolución inmunidad (electricidad). También gana la habilidad hablar con animales del agatión.",
        "description_en": "The eidolon loses the resistance (electricity) evolution and instead gains the immunity (electricity) evolution. It also gains the agathion's speak with animals ability."
      },
      {
        "hd": 20,
        "name_es": "Detectar pensamientos (a voluntad), RD 10/mal",
        "name_en": "Detect thoughts (at will), DR 10/evil",
        "description_es": "El eidolon gana detectar pensamientos como poder mágico a voluntad y aumenta su reducción de daño a RD 10/mal.",
        "description_en": "The eidolon gains detect thoughts as a spell-like ability at will and increases its damage reduction to DR 10/evil."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Agathion",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "angel": {
    "name_es": "Ángel",
    "name_en": "Angel",
    "alignment": "NG/LG/CG",
    "base_forms": ["biped (limbs [arms], limbs [legs], slam)"],
    "languages": ["[VERIFICAR - Celestial canónico; ver Pathfinder Unchained pg. 30]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (ácido), resistencia (frío), +4 vs. veneno",
        "name_en": "Resistance (acid), resistance (cold), +4 vs. poison",
        "description_es": "El eidolon gana las evoluciones resistencia (ácido) y resistencia (frío), y un bonificador +4 en las tiradas de salvación contra veneno.",
        "description_en": "The eidolon gains the resistance (acid) and resistance (cold) evolutions, and a +4 bonus on saving throws against poison."
      },
      {
        "hd": 4,
        "name_es": "Resistencia a electricidad 10 y fuego 10",
        "name_en": "Electricity resistance 10 and fire resistance 10",
        "description_es": "El eidolon gana resistencia a la electricidad 10 y resistencia al fuego 10.",
        "description_en": "The eidolon gains electricity resistance 10 and fire resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Evolución vuelo (alas plumosas)",
        "name_en": "Flight evolution (feathery wings)",
        "description_es": "El eidolon crece grandes alas plumosas y gana la evolución vuelo.",
        "description_en": "The eidolon grows large, feathery wings, gaining the flight evolution."
      },
      {
        "hd": 12,
        "name_es": "RD 5/mal, inmunidad a petrificación, veradiscurso",
        "name_en": "DR 5/evil, immunity to petrification, truespeech",
        "description_es": "El eidolon gana RD 5/mal, inmunidad a petrificación y la habilidad veradiscurso.",
        "description_en": "The eidolon gains DR 5/evil, immunity to petrification, and the truespeech ability."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (ácido) e inmunidad (frío)",
        "name_en": "Immunity (acid) and immunity (cold)",
        "description_es": "El eidolon pierde las evoluciones resistencia (ácido) y resistencia (frío), y en su lugar gana las evoluciones inmunidad (ácido) e inmunidad (frío).",
        "description_en": "The eidolon loses the resistance (acid) and resistance (cold) evolutions, and instead gains the immunity (acid) and immunity (cold) evolutions."
      },
      {
        "hd": 20,
        "name_es": "Aura protectora",
        "name_en": "Protective aura",
        "description_es": "El eidolon gana la habilidad aura protectora (como el subtipo ángel del Bestiario).",
        "description_en": "The eidolon gains the protective aura ability (as the angel subtype, Bestiary)."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Angel",
    "source_book": "Pathfinder Unchained pg. 30"
  },
  "archon": {
    "name_es": "Archon",
    "name_en": "Archon",
    "alignment": "LG",
    "base_forms": ["biped (limbs [arms], limbs [legs], slam)"],
    "languages": ["[VERIFICAR - Celestial canónico; ver Pathfinder Unchained]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (electricidad), diestro (Intimidar), +4 vs. veneno",
        "name_en": "Resistance (electricity), skilled (Intimidate), +4 vs. poison",
        "description_es": "El eidolon gana la evolución resistencia (electricidad) y la evolución diestro (Intimidar). También gana un bonificador +4 en las tiradas de salvación contra veneno.",
        "description_en": "The eidolon gains the resistance (electricity) evolution and the skilled (Intimidate) evolution. It also gains a +4 bonus on saving throws against poison."
      },
      {
        "hd": 4,
        "name_es": "+1 punto al pool de evolución",
        "name_en": "+1 evolution pool point",
        "description_es": "El eidolon añade 1 punto a su pool de evolución.",
        "description_en": "The eidolon adds 1 point to its evolution pool."
      },
      {
        "hd": 8,
        "name_es": "Evolución incremento de característica",
        "name_en": "Ability increase evolution",
        "description_es": "El eidolon gana la evolución incremento de característica, aplicada a la puntuación de característica que elija el invocador.",
        "description_en": "The eidolon gains the ability increase evolution, applied to an ability score the summoner chooses."
      },
      {
        "hd": 12,
        "name_es": "RD 5/mal, inmunidad a petrificación, veradiscurso",
        "name_en": "DR 5/evil, immunity to petrification, truespeech",
        "description_es": "El eidolon gana RD 5/mal, inmunidad a petrificación y la habilidad veradiscurso.",
        "description_en": "The eidolon gains DR 5/evil, immunity to petrification, and the truespeech ability."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (electricidad), aura de amenaza",
        "name_en": "Immunity (electricity), aura of menace",
        "description_es": "El eidolon pierde la evolución resistencia (electricidad) y la evolución diestro (Intimidar), y en su lugar gana la evolución inmunidad (electricidad). También gana la habilidad aura de amenaza.",
        "description_en": "The eidolon loses the resistance (electricity) and skilled (Intimidate) evolutions, and instead gains the immunity (electricity) evolution. It also gains the aura of menace ability."
      },
      {
        "hd": 20,
        "name_es": "Teletransporte mayor (a voluntad)",
        "name_en": "Greater teleport (at will)",
        "description_es": "El eidolon puede usar teletransporte mayor a voluntad como el conjuro (nivel de lanzador 14), excepto que solo puede teletransportarse a sí mismo y hasta 50 libras de objetos.",
        "description_en": "The eidolon gains the ability to use greater teleport at will, as the spell (caster level 14th), except it can only teleport itself and up to 50 pounds of carried objects."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Archon",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "azata": {
    "name_es": "Azata",
    "name_en": "Azata",
    "alignment": "CG",
    "base_forms": ["biped (limbs [arms], limbs [legs])", "serpentine (limbs [arms], tail, tail slap)"],
    "languages": ["[VERIFICAR - Celestial canónico para outsiders del Elysium; ver Pathfinder Unchained]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (electricidad), entrenamiento en armas marciales",
        "name_en": "Resistance (electricity), weapon training (martial weapons)",
        "description_es": "El eidolon gana la evolución resistencia (electricidad) y la evolución de 4 puntos entrenamiento en armas (destreza en armas marciales).",
        "description_en": "The eidolon gains the resistance (electricity) evolution and the 4-point weapon training evolution (proficiency in martial weapons)."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al frío 10 y resistencia al fuego 10",
        "name_en": "Cold resistance 10 and fire resistance 10",
        "description_es": "El eidolon gana resistencia al frío 10 y resistencia al fuego 10.",
        "description_en": "The eidolon gains cold resistance 10 and fire resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Evolución vuelo (alas plumosas grandes)",
        "name_en": "Flight evolution (large feathery wings)",
        "description_es": "El eidolon crece grandes alas plumosas y gana la evolución vuelo.",
        "description_en": "The eidolon grows large, feathery wings, gaining the flight evolution."
      },
      {
        "hd": 12,
        "name_es": "RD 5/mal, inmunidad a petrificación, veradiscurso",
        "name_en": "DR 5/evil, immunity to petrification, truespeech",
        "description_es": "El eidolon gana RD 5/mal, inmunidad a petrificación y la habilidad veradiscurso.",
        "description_en": "The eidolon gains DR 5/evil, immunity to petrification, and the truespeech ability."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (electricidad), incremento de característica",
        "name_en": "Immunity (electricity), ability increase",
        "description_es": "El eidolon pierde la evolución resistencia (electricidad) y en su lugar gana la evolución inmunidad (electricidad). También gana la evolución incremento de característica, aplicada a la puntuación que elija el invocador.",
        "description_en": "The eidolon loses the resistance (electricity) evolution and instead gains the immunity (electricity) evolution. It also gains the ability increase evolution, applied to an ability score of the summoner's choice."
      },
      {
        "hd": 20,
        "name_es": "Forma energética",
        "name_en": "Energy form",
        "description_es": "El eidolon puede alternar entre su forma normal y una forma energética como acción estándar. En forma energética es incorporal y dobla su velocidad de vuelo, pero no puede realizar ataques con armas naturales o fabricadas; sí puede activar evoluciones de poderes mágicos.",
        "description_en": "The eidolon gains the ability to switch between its normal form and an energy form as a standard action. In energy form it is incorporeal and doubles its fly speed, but cannot make natural or manufactured weapon attacks; it can activate spell-like ability evolutions."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Azata",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "daemon": {
    "name_es": "Daemon",
    "name_en": "Daemon",
    "alignment": "NE",
    "base_forms": ["aberrant (bite, tentacle mass)", "biped (claws, limbs [arms], limbs [legs])", "quadruped (limbs [legs, 2], bite)", "serpentine (bite, improved damage [bite], reach [bite], tail, tail slap)"],
    "languages": ["[VERIFICAR - Abadonal canónico para daemons; ver Pathfinder Unchained]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (ácido), +4 vs. efectos de muerte/enfermedad/veneno",
        "name_en": "Resistance (acid), +4 vs. death effects/disease/poison",
        "description_es": "El eidolon gana la evolución resistencia (ácido) y un bonificador +4 en las tiradas de salvación contra efectos de muerte, enfermedad y veneno.",
        "description_en": "The eidolon gains the resistance (acid) evolution and a +4 bonus on saving throws against death effects, disease, and poison."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al frío 10, electricidad 10, fuego 10",
        "name_en": "Cold resistance 10, electricity resistance 10, fire resistance 10",
        "description_es": "El eidolon gana resistencia al frío 10, resistencia a la electricidad 10 y resistencia al fuego 10.",
        "description_en": "The eidolon gains cold resistance 10, electricity resistance 10, and fire resistance 10."
      },
      {
        "hd": 8,
        "name_es": "+1 punto al pool de evolución; inmunidad al veneno",
        "name_en": "+1 evolution pool point; immunity to poison",
        "description_es": "El eidolon añade 1 punto a su pool de evolución. El bonificador +4 al veneno es reemplazado por inmunidad al veneno.",
        "description_en": "The eidolon adds 1 point to its evolution pool. The +4 poison save bonus is replaced by immunity to poison."
      },
      {
        "hd": 12,
        "name_es": "RD 5/bueno, incremento de característica",
        "name_en": "DR 5/good, ability increase",
        "description_es": "El eidolon gana RD 5/bueno y la evolución incremento de característica en la puntuación que elija el invocador.",
        "description_en": "The eidolon gains DR 5/good and the ability increase evolution in an ability score of the summoner's choice."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (ácido), telepatía",
        "name_en": "Immunity (acid), telepathy",
        "description_es": "El eidolon pierde la evolución resistencia (ácido) y en su lugar gana la evolución inmunidad (ácido). También gana telepatía.",
        "description_en": "The eidolon loses the resistance (acid) evolution and instead gains the immunity (acid) evolution. It also gains telepathy."
      },
      {
        "hd": 20,
        "name_es": "Devorar alma (Su)",
        "name_en": "Soul devour (Su)",
        "description_es": "El eidolon gana la habilidad devorar alma. [VERIFICAR: el verify doc indicó 'true seeing' pero la fuente en vivo de AoN indica 'soul devour'; confirmar contra Pathfinder Unchained pg. 25]",
        "description_en": "The eidolon gains the soul devour ability. [VERIFICAR: verify doc listed 'true seeing' but live AoN source indicates 'soul devour'; confirm against Pathfinder Unchained pg. 25]"
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Daemon",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "demon": {
    "name_es": "Demonio",
    "name_en": "Demon",
    "alignment": "CE",
    "base_forms": ["aberrant (bite, tentacle mass)", "biped (claws, limbs [arms], limbs [legs])", "quadruped (limbs [legs, 2], bite)", "serpentine (bite, improved damage [bite], reach [bite], tail, tail slap)"],
    "languages": ["[VERIFICAR - Abyssal canónico para demonios; ver Pathfinder Unchained]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (electricidad), resistencia (fuego), +4 vs. veneno",
        "name_en": "Resistance (electricity), resistance (fire), +4 vs. poison",
        "description_es": "El eidolon gana las evoluciones resistencia (electricidad) y resistencia (fuego), y un bonificador +4 en las tiradas de salvación contra veneno.",
        "description_en": "The eidolon gains the resistance (electricity) and resistance (fire) evolutions, and a +4 bonus on saving throws against poison."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al ácido 10 y resistencia al frío 10",
        "name_en": "Acid resistance 10 and cold resistance 10",
        "description_es": "El eidolon gana resistencia al ácido 10 y resistencia al frío 10.",
        "description_en": "The eidolon gains acid resistance 10 and cold resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Inmunidad al veneno; +1 punto al pool de evolución",
        "name_en": "Immunity to poison; +1 evolution pool point",
        "description_es": "El eidolon pierde el bonificador +4 al veneno y gana inmunidad al veneno. También añade 1 punto a su pool de evolución.",
        "description_en": "The eidolon loses the poison save bonus and gains immunity to poison. It also adds 1 point to its evolution pool."
      },
      {
        "hd": 12,
        "name_es": "RD 5/bueno, incremento de característica",
        "name_en": "DR 5/good, ability increase",
        "description_es": "El eidolon gana RD 5/bueno y la evolución incremento de característica en la puntuación que elija el invocador.",
        "description_en": "The eidolon gains DR 5/good and the ability increase evolution in an ability score of the summoner's choice."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (electricidad), telepatía",
        "name_en": "Immunity (electricity), telepathy",
        "description_es": "El eidolon pierde la evolución resistencia (electricidad) y en su lugar gana la evolución inmunidad (electricidad). También gana telepatía.",
        "description_en": "The eidolon loses the resistance (electricity) evolution and instead gains the immunity (electricity) evolution. It also gains telepathy."
      },
      {
        "hd": 20,
        "name_es": "Visión verdadera (constante)",
        "name_en": "True seeing (constant)",
        "description_es": "El eidolon gana visión verdadera como poder mágico constante.",
        "description_en": "The eidolon gains true seeing as a constant spell-like ability."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Demon",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "devil": {
    "name_es": "Diablo",
    "name_en": "Devil",
    "alignment": "LE",
    "base_forms": ["biped (claws, limbs [arms], limbs [legs])"],
    "languages": ["[VERIFICAR - Infernal canónico para diablos; ver Pathfinder Unchained]"]  ,
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (fuego), diestro (Engañar), +4 vs. veneno",
        "name_en": "Resistance (fire), skilled (Bluff), +4 vs. poison",
        "description_es": "El eidolon gana la evolución resistencia (fuego) y la evolución diestro (Engañar). También gana un bonificador +4 en las tiradas de salvación contra veneno.",
        "description_en": "The eidolon gains the resistance (fire) evolution and the skilled (Bluff) evolution. It also gains a +4 bonus on saving throws against poison."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al ácido 10 y resistencia al frío 10",
        "name_en": "Acid resistance 10 and cold resistance 10",
        "description_es": "El eidolon gana resistencia al ácido 10 y resistencia al frío 10.",
        "description_en": "The eidolon gains acid resistance 10 and cold resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Diestro (Diplomacia); inmunidad al veneno",
        "name_en": "Skilled (Diplomacy); immunity to poison",
        "description_es": "El eidolon gana la evolución diestro (Diplomacia) y la inmunidad al veneno (reemplaza el bonificador +4 al veneno).",
        "description_en": "The eidolon gains the skilled (Diplomacy) evolution and immunity to poison (replacing the +4 poison save bonus)."
      },
      {
        "hd": 12,
        "name_es": "RD 5/bueno, ver en la oscuridad",
        "name_en": "DR 5/good, see in darkness",
        "description_es": "El eidolon gana RD 5/bueno y la habilidad ver en la oscuridad.",
        "description_en": "The eidolon gains DR 5/good and the see in darkness ability."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (fuego), telepatía",
        "name_en": "Immunity (fire), telepathy",
        "description_es": "El eidolon pierde la evolución resistencia (fuego) y en su lugar gana la evolución inmunidad (fuego). También gana telepatía.",
        "description_en": "The eidolon loses the resistance (fire) evolution and instead gains the immunity (fire) evolution. It also gains telepathy."
      },
      {
        "hd": 20,
        "name_es": "Regeneración 5 (armas/conjuros buenos)",
        "name_en": "Regeneration 5 (good weapons, good spells)",
        "description_es": "El eidolon gana regeneración 5 (armas buenas, conjuros buenos). Si recibe suficiente daño sigue siendo desterrado al Infierno normalmente.",
        "description_en": "The eidolon gains regeneration 5 (good weapons, good spells). It is still banished to Hell as normal if taking sufficient damage."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Devil",
    "source_book": "Pathfinder Unchained pg. 32"
  },
  "div": {
    "name_es": "Div",
    "name_en": "Div",
    "alignment": "NE",
    "base_forms": ["biped (claws, limbs [arms], limbs [legs])"],
    "languages": ["[VERIFICAR - ver Pathfinder Unchained; Bestiary 3 pg. 305 para el subtipo div]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (fuego), +4 vs. veneno",
        "name_en": "Resistance (fire), +4 vs. poison",
        "description_es": "El eidolon gana la evolución resistencia (fuego) y un bonificador +4 en las tiradas de salvación contra veneno.",
        "description_en": "The eidolon gains the resistance (fire) evolution and a +4 bonus on saving throws against poison."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al ácido 10 y resistencia a la electricidad 10",
        "name_en": "Acid resistance 10 and electricity resistance 10",
        "description_es": "El eidolon gana resistencia al ácido 10 y resistencia a la electricidad 10.",
        "description_en": "The eidolon gains acid resistance 10 and electricity resistance 10."
      },
      {
        "hd": 8,
        "name_es": "+1 punto al pool de evolución; inmunidad al veneno",
        "name_en": "+1 evolution pool point; immunity to poison",
        "description_es": "El eidolon añade 1 punto a su pool de evolución. El bonificador +4 al veneno es reemplazado por inmunidad al veneno.",
        "description_en": "The eidolon adds 1 point to its evolution pool. The +4 poison save bonus is replaced by immunity to poison."
      },
      {
        "hd": 12,
        "name_es": "RD 5/bueno, ver en la oscuridad",
        "name_en": "DR 5/good, see in darkness",
        "description_es": "El eidolon gana RD 5/bueno y la habilidad ver en la oscuridad (según el subtipo div, Bestiario 3 pág. 305).",
        "description_en": "The eidolon gains DR 5/good and the see in darkness ability (per the div subtype, Bestiary 3 pg. 305)."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (fuego), telepatía",
        "name_en": "Immunity (fire), telepathy",
        "description_es": "El eidolon pierde la evolución resistencia (fuego) y en su lugar gana la evolución inmunidad (fuego). También gana telepatía.",
        "description_en": "The eidolon loses the resistance (fire) evolution and instead gains the immunity (fire) evolution. It also gains telepathy."
      },
      {
        "hd": 20,
        "name_es": "Teletransporte mayor (a voluntad)",
        "name_en": "Greater teleport (at will)",
        "description_es": "El eidolon puede usar teletransporte mayor a voluntad como el conjuro (nivel de lanzador 14), excepto que solo puede teletransportarse a sí mismo y hasta 50 libras de objetos.",
        "description_en": "The eidolon gains the ability to use greater teleport at will, as the spell (caster level 14th), except it can only teleport itself and up to 50 pounds of carried objects."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Div",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "elemental": {
    "name_es": "Elemental",
    "name_en": "Elemental",
    "alignment": "N",
    "base_forms": ["biped (limbs [arms], limbs [legs], slam)", "quadruped (limbs [legs, 2], slam)", "serpentine (slam, tail, tail slap)"],
    "languages": ["[VERIFICAR - Aquan/Auran/Ignan/Terran según elemento elegido; ver Pathfinder Unchained pg. 25]"],
    "elemental_choice_required": true,
    "elemental_choices_es": ["Aire", "Tierra", "Fuego", "Agua"],
    "elemental_choices_en": ["Air", "Earth", "Fire", "Water"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Vínculo elemental + Resistencia 5 (elemento elegido)",
        "name_en": "Elemental bond + Resistance 5 (chosen element)",
        "description_es": "Al elegir el subtipo elemental, el invocador escoge un elemento (aire, tierra, fuego o agua). El eidolon gana resistencia a la energía asociada (electricidad para aire, ácido para tierra, fuego para fuego, frío para agua) por valor de 5, y oscurovisión de 60 pies. Este elemento no puede cambiarse posteriormente.",
        "description_en": "When choosing the elemental subtype, the summoner picks an element (air, earth, fire, or water). The eidolon gains resistance 5 to the associated energy (electricity for air, acid for earth, fire for fire, cold for water) and darkvision 60 ft. The element cannot be changed later."
      },
      {
        "hd": 4,
        "name_es": "+1 punto al pool de evolución; mejora de resistencia",
        "name_en": "+1 evolution pool point; resistance upgrade",
        "description_es": "[VERIFICAR contra Pathfinder Unchained pg. 25] El eidolon añade 1 punto a su pool de evolución y mejora la resistencia al elemento a 10.",
        "description_en": "[VERIFY against Pathfinder Unchained pg. 25] The eidolon gains +1 evolution pool point and upgrades resistance to the chosen element to 10."
      },
      {
        "hd": 8,
        "name_es": "Rasgos del subtipo elemental",
        "name_en": "Elemental subtype traits",
        "description_es": "[VERIFICAR] El eidolon gana los rasgos típicos de las criaturas elementales: inmunidad a sangrado, golpes críticos, flanqueo, parálisis, veneno, sueño y aturdimiento.",
        "description_en": "[VERIFY] The eidolon gains typical elemental creature traits: immunity to bleed, critical hits, flanking, paralysis, poison, sleep, and stunning."
      },
      {
        "hd": 12,
        "name_es": "Resistencia 20 al elemento; RD 5/elemento opuesto",
        "name_en": "Resistance 20 to chosen element; DR 5/opposed element",
        "description_es": "[VERIFICAR] La resistencia del eidolon al elemento elegido sube a 20 y gana RD 5 superable por daño del elemento opuesto.",
        "description_en": "[VERIFY] The eidolon's resistance to the chosen element increases to 20 and it gains DR 5/opposed element."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad al elemento elegido",
        "name_en": "Immunity to chosen element",
        "description_es": "[VERIFICAR] El eidolon pierde la resistencia al elemento elegido y gana inmunidad a esa energía.",
        "description_en": "[VERIFY] The eidolon loses resistance to the chosen element and gains immunity to that energy type."
      },
      {
        "hd": 20,
        "name_es": "Forma elemental constante",
        "name_en": "Constant elemental form",
        "description_es": "[VERIFICAR] El eidolon adopta una forma vinculada permanentemente al elemento, ganando subtype apropiado y movimiento o sentidos especiales relacionados.",
        "description_en": "[VERIFY] The eidolon takes on a form permanently tied to the element, gaining the appropriate subtype and related movement or senses."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Elemental",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "inevitable": {
    "name_es": "Inevitable",
    "name_en": "Inevitable",
    "alignment": "LN",
    "base_forms": ["biped (limbs [arms], limbs [legs], slam)"],
    "languages": ["[VERIFICAR - Truespeech ganado a HD 12; ver Pathfinder Unchained y Bestiary 2 pg. 307]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Cuenta como constructo y foráneo; +4 vs. muerte/enfermedad/nigromancia/parálisis/veneno/sueño/aturdimiento",
        "name_en": "Counts as construct and outsider; +4 vs. death/disease/necromancy/paralysis/poison/sleep/stun",
        "description_es": "El eidolon cuenta como constructo y foráneo para efectos como el arma bane y el rasgo enemigo favorito. Gana +4 en las tiradas de salvación contra efectos de muerte, enfermedad, efectos de nigromancia, parálisis, veneno, sueño y aturdimiento.",
        "description_en": "The eidolon counts as both constructs and outsiders for effects such as the bane weapon ability and favored enemy. It gains a +4 bonus on saving throws against death effects, disease, necromancy effects, paralysis, poison, sleep, and stun."
      },
      {
        "hd": 4,
        "name_es": "+4 vs. efectos de afectación mental; inmunidades",
        "name_en": "+4 vs. mind-affecting; immunities",
        "description_es": "El eidolon gana +4 en las tiradas de salvación contra efectos de afectación mental, e inmunidad al daño no letal, fatiga y agotamiento.",
        "description_en": "The eidolon gains a +4 bonus on saving throws against mind-affecting effects and immunity to nonlethal damage, fatigue, and exhaustion."
      },
      {
        "hd": 8,
        "name_es": "Inmunidad a efectos de muerte, enfermedad y veneno",
        "name_en": "Immunity to death effects, disease, and poison",
        "description_es": "El eidolon gana inmunidad a los efectos de muerte, enfermedad y veneno.",
        "description_en": "The eidolon gains immunity to death effects, disease, and poison."
      },
      {
        "hd": 12,
        "name_es": "RD 5/caótico, inmunidad al sueño, veradiscurso",
        "name_en": "DR 5/chaotic, immunity to sleep, true speech",
        "description_es": "El eidolon gana RD 5/caótico, inmunidad al sueño y la habilidad veradiscurso (true speech, ver subtipo inevitable en Bestiario 2 pág. 307).",
        "description_en": "The eidolon gains DR 5/chaotic, immunity to sleep, and the true speech ability (see the inevitable subtype, Bestiary 2 pg. 307)."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad a daño/drenado de características, drenado de energía y efectos de nigromancia",
        "name_en": "Immunity to ability damage/drain, energy drain, and necromancy effects",
        "description_es": "El eidolon pierde el bonificador +4 en tiradas de salvación contra efectos de nigromancia y gana inmunidad al daño de características, drenado de características, drenado de energía y efectos de nigromancia.",
        "description_en": "The eidolon loses the +4 bonus on saving throws against necromancy effects and gains immunity to ability damage, ability drain, energy drain, and necromancy effects."
      },
      {
        "hd": 20,
        "name_es": "Inmunidad a parálisis, sueño, aturdimiento y efectos de salvación de Fortaleza",
        "name_en": "Immunity to paralysis, sleep, stun, and Fortitude-only effects",
        "description_es": "El eidolon gana inmunidad a la parálisis, el sueño, el aturdimiento y cualquier efecto que requiera una tirada de salvación de Fortaleza (a menos que el efecto también funcione sobre objetos).",
        "description_en": "The eidolon gains immunity to paralysis, sleep, stun, and any effect that requires a Fortitude save (unless the effect also works on objects)."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Inevitable",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "protean": {
    "name_es": "Protean",
    "name_en": "Protean",
    "alignment": "CN",
    "base_forms": ["serpentine (bite, grab [tail slap], tail, tail slap)"],
    "languages": ["[VERIFICAR - ver Pathfinder Unchained; Proteans del Limbo no tienen lenguaje estándar fijo]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Resistencia (ácido), evolución agarrar",
        "name_en": "Resistance (acid), grab evolution",
        "description_es": "El eidolon gana la evolución resistencia (ácido) y la evolución agarrar, vinculada al tipo de ataque que elija el invocador.",
        "description_en": "The eidolon gains the resistance (acid) evolution and the grab evolution, tied to an attack type of the summoner's choice."
      },
      {
        "hd": 4,
        "name_es": "Resistencia a la electricidad 10 y resistencia sónica 10",
        "name_en": "Electricity resistance 10 and sonic resistance 10",
        "description_es": "El eidolon gana resistencia a la electricidad 10 y resistencia sónica 10.",
        "description_en": "The eidolon gains electricity resistance 10 and sonic resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Evolución constricción",
        "name_en": "Constrict evolution",
        "description_es": "El eidolon gana la evolución constricción.",
        "description_en": "The eidolon gains the constrict evolution."
      },
      {
        "hd": 12,
        "name_es": "RD 5/legal, sentido ciego, vuelo sin alas (maniobrabilidad perfecta)",
        "name_en": "DR 5/lawful, blindsense evolution, wingless flight (perfect maneuverability)",
        "description_es": "El eidolon gana RD 5/legal, la evolución sentido ciego y la capacidad de volar sin alas con maniobrabilidad perfecta.",
        "description_en": "The eidolon gains DR 5/lawful, the blindsense evolution, and the ability to fly without wings with perfect maneuverability."
      },
      {
        "hd": 16,
        "name_es": "Inmunidad (ácido), anatomía amorfa",
        "name_en": "Immunity (acid), amorphous anatomy",
        "description_es": "El eidolon pierde la evolución resistencia (ácido) y en su lugar gana la evolución inmunidad (ácido). También gana la habilidad anatomía amorfa.",
        "description_en": "The eidolon loses the resistance (acid) evolution and instead gains the immunity (acid) evolution. It also gains the amorphous anatomy ability."
      },
      {
        "hd": 20,
        "name_es": "Libertad de movimiento (constante), cambiar forma (polimorfismo superior)",
        "name_en": "Freedom of movement (constant), change shape (greater polymorph)",
        "description_es": "El eidolon gana libertad de movimiento constante y la versión protean de cambiar forma (polimorfismo superior).",
        "description_en": "The eidolon gains constant freedom of movement and the protean version of the change shape (greater polymorph) ability."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Protean",
    "source_book": "Pathfinder Unchained pg. 25"
  },
  "psychopomp": {
    "name_es": "Psicopompo",
    "name_en": "Psychopomp",
    "alignment": "N",
    "base_forms": ["biped (limbs [arms], limbs [legs], slam)", "quadruped (bite, limbs [legs, 2])", "serpentine (bite, pull [bite], reach [bite], tail, tail slap)"],
    "languages": ["[VERIFICAR - ver Pathfinder Unchained; Bestiary 4 pg. 308 para el subtipo psychopomp]"],
    "features_per_hd": [
      {
        "hd": 1,
        "name_es": "Inmunidad a efectos de muerte, enfermedad y veneno",
        "name_en": "Immunity to death effects, disease, and poison",
        "description_es": "El eidolon gana inmunidad a los efectos de muerte, enfermedad y veneno.",
        "description_en": "The eidolon gains immunity to death effects, disease, and poison."
      },
      {
        "hd": 4,
        "name_es": "Resistencia al frío 10 y resistencia a la electricidad 10",
        "name_en": "Cold resistance 10 and electricity resistance 10",
        "description_es": "El eidolon gana resistencia al frío 10 y resistencia a la electricidad 10.",
        "description_en": "The eidolon gains cold resistance 10 and electricity resistance 10."
      },
      {
        "hd": 8,
        "name_es": "Toque espiritual; +1 punto al pool de evolución",
        "name_en": "Spirit touch; +1 evolution pool point",
        "description_es": "El eidolon gana la habilidad toque espiritual (ver subtipo psychopomp en Bestiario 4 pág. 308) y añade 1 punto a su pool de evolución.",
        "description_en": "The eidolon gains the spirit touch ability (see the psychopomp subtype, Bestiary 4 pg. 308) and adds 1 point to its evolution pool."
      },
      {
        "hd": 12,
        "name_es": "RD 5/adamantina, sentido espiritual",
        "name_en": "DR 5/adamantine, spiritsense",
        "description_es": "El eidolon gana RD 5/adamantina y la habilidad sentido espiritual (spiritsense, ver Bestiario 4 pág. 308).",
        "description_en": "The eidolon gains DR 5/adamantine and the spiritsense ability (see Bestiary 4 pg. 308)."
      },
      {
        "hd": 16,
        "name_es": "Incremento de característica; invisibilidad (a voluntad, solo yo)",
        "name_en": "Ability increase; invisibility (at will, self only)",
        "description_es": "El eidolon gana la evolución incremento de característica (puntuación a elección del invocador) y puede lanzar invisibilidad (solo sobre sí mismo) como poder mágico a voluntad.",
        "description_en": "The eidolon gains the ability increase evolution (ability score of summoner's choice) and can cast invisibility (self only) as a spell-like ability at will."
      },
      {
        "hd": 20,
        "name_es": "RD 10/adamantina; inmunidad (frío) e inmunidad (electricidad)",
        "name_en": "DR 10/adamantine; immunity (cold) and immunity (electricity)",
        "description_es": "El eidolon aumenta su reducción de daño a RD 10/adamantina y gana las evoluciones inmunidad (frío) e inmunidad (electricidad).",
        "description_en": "The eidolon increases its damage reduction to DR 10/adamantine and gains the immunity (cold) and immunity (electricity) evolutions."
      }
    ],
    "skills_class": ["bluff", "craft", "knowledge_planes", "perception", "sense_motive", "stealth"],
    "source_url": "https://aonprd.com/EidolonUCSubtypes.aspx?ItemName=Psychopomp",
    "source_book": "Pathfinder Unchained pg. 25"
  }
};

const FALLBACK_ORACLE_MYSTERIES = [
  {
    "id": "battle",
    "name": {"es": "Batalla", "en": "Battle"},
    "curse_name": {"es": "Maldición del Oráculo", "en": "Oracle's Curse"},
    "skills": ["intimidate","knowledge_engineering","perception","ride"],
    "spells": ["Escudo Mágico","Fuerza de Toro","Velocidad de Víbora","Explosión de Llamas","Marca de la Justicia","Aguijón de Ira","Hoja Arcana","Armadura de Fuerza","Lluvia de Meteoros"],
    "revelations": [
      {"id":"battle.skill","name":{"es":"Maestría en Combate","en":"Combat Skill"},"min_level":1,"desc":{"es":"Proficiencia con armadura pesada y escudos.","en":"Proficiency with heavy armor and shields."}},
      {"id":"battle.warSight","name":{"es":"Visión de Guerra","en":"War Sight"},"min_level":7,"desc":{"es":"Puedes actuar siempre en sorpresa, y ves invisibilidad.","en":"Always act in surprise round, can see invisible."}},
      {"id":"battle.ironSkin","name":{"es":"Piel de Hierro","en":"Iron Skin"},"min_level":11,"desc":{"es":"1/día: Piel de Hierro como poder mágico. Nv 15+: 2/día.","en":"1/day: ironSkin as spell-like. Lv 15+: 2/day."}}
    ]
  },
  {
    "id": "bones",
    "name": {"es": "Huesos", "en": "Bones"},
    "skills": ["bluff","disguise","intimidate","stealth"],
    "spells": ["Causar Miedo","Toque Enfermante","Animar Muertos (menor)","Infectar","Enfermar","Maldición","Control No Muertos","Crear No Muertos","Crear No Muertos Mayor"],
    "revelations": [
      {"id":"bones.undeadRes","name":{"es":"Resistencia a No Muertos","en":"Undead Resistance"},"min_level":1,"desc":{"es":"+4 a tiros contra enfermedades, escalofríos y efectos de no muertos.","en":"+4 on saves vs disease, fear, and undead effects."}},
      {"id":"bones.channelNeg","name":{"es":"Canal Negativo","en":"Negative Channel"},"min_level":1,"desc":{"es":"Canal de energía negativa (como clérigo de tu nivel).","en":"Channel negative energy as a cleric of your level."}},
      {"id":"bones.boneFist","name":{"es":"Puño de Hueso","en":"Bone Fist"},"min_level":7,"desc":{"es":"Ataques sin armas como si tuvieras Puño Brutal. +1d6 dmg.","en":"Unarmed attacks as if you had Greater Unarmed Strike. +1d6 dmg."}}
    ]
  },
  {
    "id": "flame",
    "name": {"es": "Llama", "en": "Flame"},
    "skills": ["acrobatics","craft","intimidate","survival"],
    "spells": ["Manos Ardientes","Resistencia al Frío","Bola de Fuego","Muro de Fuego","Nube Ígnea","Proyectil Ígneo","Escudo de Llamas","Invocar Elemental (Fuego)","Tormenta de Fuego"],
    "revelations": [
      {"id":"flame.touchFlame","name":{"es":"Toque Llameante","en":"Touch of Flame"},"min_level":1,"desc":{"es":"Toque: 1d6 fuego +1 por 2 niveles. 3+CAR usos/día.","en":"Touch: 1d6 fire +1 per 2 levels. 3+CHA uses/day."}},
      {"id":"flame.flameBreath","name":{"es":"Aliento de Fuego","en":"Burning Breath"},"min_level":7,"desc":{"es":"Cono de fuego 15 ft: 4d6 daño (Ref mitad). 1/día.","en":"15 ft cone: 4d6 fire (Ref half). 1/day."}},
      {"id":"flame.metamagicChannel","name":{"es":"Canal de Metamagia (Fuego)","en":"Metamagic Channel"},"min_level":11,"desc":{"es":"Ampliar Area en conjuros de fuego sin incrementar nivel de conjuro.","en":"Widen Area on fire spells without increasing spell level."}}
    ]
  },
  {
    "id": "heavens",
    "name": {"es": "Cielos", "en": "Heavens"},
    "skills": ["fly","knowledge_arcana","perception","survival"],
    "spells": ["Color Spray","Hipnotismo","Danza de Luces","Luz del Día","Destello","Magia Colorida","Arco Iris","Lluvia de Meteoritos","Prismático (Muro)"],
    "revelations": [
      {"id":"heavens.comet","name":{"es":"Cometa","en":"Comet"},"min_level":1,"desc":{"es":"Rayo de energía cósmico: 4d4+1/nivel (máx +10) daño. Ataque de toque distancia.","en":"Cosmic ray: 4d4 + 1/level (max +10) dmg. Ranged touch attack."}},
      {"id":"heavens.starlight","name":{"es":"Luz Estelar","en":"Starlight Agility"},"min_level":7,"desc":{"es":"+4 Agilidad y velocidad +10 ft durante 1 ronda/nivel. 1/día.","en":"+4 Dexterity and +10 ft speed for 1 round/level. 1/day."}}
    ]
  },
  {
    "id": "life",
    "name": {"es": "Vida", "en": "Life"},
    "skills": ["diplomacy","heal","perception","sense_motive"],
    "spells": ["Curar Heridas Leves","Curar Heridas Moderadas","Curar Heridas Graves","Curar Heridas Críticas","Curar a Distancia","Curar Heridas Masivas","Regenerar","Curar Heridas Masivas Críticas","Curar Todo"],
    "revelations": [
      {"id":"life.channel","name":{"es":"Canal de Energía Positiva","en":"Channel Energy"},"min_level":1,"desc":{"es":"Canal positivo (como clérigo del doble de nivel de oráculo −2).","en":"Positive channel (as cleric of double oracle level −2)."}},
      {"id":"life.lifeLeak","name":{"es":"Absorber Vida","en":"Life Link"},"min_level":1,"desc":{"es":"Vincula a una criatura/nivel de oráculo. Transfiere hasta 5 PG de daño/ronda desde vinculados a ti.","en":"Link oracle level creatures. Transfer up to 5 HP of damage/round from linked to you."}},
      {"id":"life.enhancedCures","name":{"es":"Curación Mejorada","en":"Enhanced Cures"},"min_level":7,"desc":{"es":"Conjuros de curación curan máx de dados + modificadores adicionales.","en":"Cure spells heal max dice + additional modifiers."}}
    ]
  },
  {
    "id": "nature",
    "name": {"es": "Naturaleza", "en": "Nature"},
    "skills": ["fly","handle_animal","knowledge_nature","survival"],
    "spells": ["Enredar","Hablar con Animales","Llamar Bestias","Planta Espinosa","Andar por Árboles","Comunión con Naturaleza","Animales Creados","Llama Sagrada","Tormenta"],
    "revelations": [
      {"id":"nature.animalCompanion","name":{"es":"Compañero Animal","en":"Animal Companion"},"min_level":1,"desc":{"es":"Compañero animal como druida de nivel oráculo −2.","en":"Animal companion as druid of oracle level −2."}},
      {"id":"nature.wildshape","name":{"es":"Forma Natural","en":"Wild Shape"},"min_level":7,"desc":{"es":"Forma Natural como druida de tu nivel oráculo.","en":"Wild Shape as druid of your oracle level."}}
    ]
  },
  {
    "id": "stone",
    "name": {"es": "Piedra", "en": "Stone"},
    "skills": ["appraise","craft","knowledge_dungeoneering","survival"],
    "spells": ["Enredar (barro)","Piel de Roca","Muro de Piedra","Forma Pétrea","Aguijón de Piedra","Muro de Hierro","Cuerpo de Roca","Tormenta de Arena","Terremoto"],
    "revelations": [
      {"id":"stone.earthGlide","name":{"es":"Deslizamiento Terrestre","en":"Earth Glide"},"min_level":7,"desc":{"es":"Muévete a través de tierra y roca como si nadaras. 1 ronda/nivel oráculo por día.","en":"Move through earth and stone as if swimming. 1 round/oracle level per day."}},
      {"id":"stone.stoneFist","name":{"es":"Puños de Piedra","en":"Stone Fist"},"min_level":1,"desc":{"es":"Golpes sin arma cuentan como +1 y aturden 1 ronda (Fort niega). 3+CAR usos.","en":"Unarmed strikes count as +1 and stagger 1 round (Fort negates). 3+CHA uses."}}
    ]
  },
  {
    "id": "waves",
    "name": {"es": "Olas", "en": "Waves"},
    "skills": ["acrobatics","escape_artist","knowledge_nature","swim"],
    "spells": ["Niebla","Bruma","Bola de Agua","Muro de Hielo","Torbellino","Caminante de Agua","Tormenta de Granizo","Tormenta","Maelstrom"],
    "revelations": [
      {"id":"waves.icyTouch","name":{"es":"Toque Helado","en":"Icy Touch"},"min_level":1,"desc":{"es":"Toque: 1d6 frío + entumecido 1 ronda. 3+CAR usos/día.","en":"Touch: 1d6 cold + staggered 1 round. 3+CHA uses/day."}},
      {"id":"waves.waterWalk","name":{"es":"Caminar sobre el Agua","en":"Water Walk"},"min_level":7,"desc":{"es":"Caminas sobre el agua y eres inmune a ser derribado por ella. Permanente.","en":"Walk on water, immune to being knocked down by it. Permanent."}}
    ]
  },
  {
    "id": "wind",
    "name": {"es": "Viento", "en": "Wind"},
    "skills": ["fly","acrobatics","stealth","survival"],
    "spells": ["Manos Heladas","Golpe de Viento","Bola de Fuego (rayo)","Muro de Viento","Nube Atronadora","Volar","Torbellino","Tormenta de Hielo","Tormenta Eléctrica"],
    "revelations": [
      {"id":"wind.thunderbolt","name":{"es":"Rayo Relámpago","en":"Thunderbolt"},"min_level":7,"desc":{"es":"Rayo de relámpago 30 ft: 1d6/2 niveles (Refl mitad). 1/día.","en":"30 ft lightning bolt: 1d6/2 levels (Ref half). 1/day."}},
      {"id":"wind.gusts","name":{"es":"Ráfaga de Viento","en":"Gaseous Form"},"min_level":1,"desc":{"es":"Inmune a ataques de gases y nieblas. 3+CAR usos/día de viento deflector (+4 CA vs proyectiles).","en":"Immune to gas/fog attacks. 3+CHA uses of deflect missiles (+4 AC vs ranged)."}}
    ]
  }
];

const FALLBACK_BLOODLINES = [
  {
    "id": "aberrant",
    "name": {"es": "Aberrante", "en": "Aberrant"},
    "arcana": {"es": "Tus hechizos de transmutación con un solo objetivo tienen un rango doble.", "en": "Your polymorph/transmutation single-target spells have double range."},
    "classSkills": ["knowledge_dungeoneering","knowledge_local","survival","swim"],
    "spells": ["Brazo Largo","Toque del Mal","Tentáculo","Sueño","Teletransportación","Forma Alienígena I","Forma Alienígena II","Nube de Pestes","Dominar Monstruo"],
    "powers": [
      {"id":"aberrant.longLimbs","min_level":1,"uses":"3+cha","name":{"es":"Extremidades Largas","en":"Long Limbs"},"desc":{"es":"Alcance +5 ft en ataques de toque. +5 ft por 5 niveles.","en":"Reach +5 ft on touch attacks. +5 ft per 5 levels."}},
      {"id":"aberrant.unusualAnatomy","min_level":9,"uses":null,"name":{"es":"Anatomía Inusual","en":"Unusual Anatomy"},"desc":{"es":"25% de probabilidad de ignorar golpes críticos y precisión. Nv 13+: 50%.","en":"25% chance to negate crits and precision damage. Lv 13+: 50%."}},
      {"id":"aberrant.alienResist","min_level":15,"uses":null,"name":{"es":"Resistencia Alienígena","en":"Alien Resistance"},"desc":{"es":"Resistencia a hechizos 10 + nivel de hechicero.","en":"Spell resistance 10 + sorcerer level."}}
    ]
  },
  {
    "id": "arcane",
    "name": {"es": "Arcano", "en": "Arcane"},
    "arcana": {"es": "+1 a CD de conjuros de una escuela elegida al subir de nivel.", "en": "+1 to spell DCs of one chosen school at each level gain."},
    "classSkills": ["knowledge_arcana","knowledge_planes","spellcraft","use_magic_device"],
    "spells": ["Proyectil Mágico","Resistir Energía","Disipar Magia","Invisibilidad Mayor","Disipar Magia Mayor","Teletransporte","Ojo Arcano","Palabra de Poder Aturdidora","Embrollo Prismático"],
    "powers": [
      {"id":"arcane.arcaneApotheosis","min_level":1,"uses":"3+cha","name":{"es":"Vínculo Arcano","en":"Arcane Bond"},"desc":{"es":"Otorga +1 a CD de conjuros de tu escuela durante 1 ronda/nivel. 1/día.","en":"Grant +1 to spell DC of your school for 1 round/level. 1/day."}},
      {"id":"arcane.metamagicAdept","min_level":3,"uses":null,"name":{"es":"Adepto de Metamagia","en":"Metamagic Adept"},"desc":{"es":"3+/día: aplica una dote de metamagia sin aumentar tiempo de lanzamiento.","en":"3+/day: apply one metamagic feat without increasing casting time."}}
    ]
  },
  {
    "id": "celestial",
    "name": {"es": "Celestial", "en": "Celestial"},
    "arcana": {"es": "Los conjuros de invocación ([bueno]) y de curación añaden +1 dmg/dado.", "en": "Summoning spells [good] and healing spells deal +1 dmg/die."},
    "classSkills": ["diplomacy","fly","heal","knowledge_religion"],
    "spells":["Protección del Mal","Resistir Energía","Disipar Magia","Toque del Bien","Llama Sagrada","Palabra Santa","Aura Sagrada","Golpe de la Gloria","Transformación Celestial"],
    "powers": [
      {"id":"celestial.holyBolt","min_level":1,"uses":"3+cha","name":{"es":"Rayo Sagrado","en":"Heavenly Fire"},"desc":{"es":"Rayo de fuego sagrado distancia 30 ft: 1d4+1/2 niveles a criaturas malvadas; cura la misma cantidad a criaturas buenas.","en":"Ranged ray 30 ft: 1d4 + 1 per 2 levels to evil creatures; heals same to good."}},
      {"id":"celestial.resist","min_level":9,"uses":null,"name":{"es":"Resistencias Celestiales","en":"Celestial Resistances"},"desc":{"es":"Resistencia a ácido 10 y frío 10. Nv 13+: 20 ambas.","en":"Acid 10 and cold 10 resistance. Lv 13+: 20 both."}}
    ]
  },
  {
    "id": "draconic",
    "name": {"es": "Dragónico", "en": "Draconic"},
    "arcana": {"es": "+1 al daño por dado de conjuros del tipo de energía de tu dragón.", "en": "+1 dmg per die for spells of your dragon's energy type."},
    "classSkills": ["fly","perception","use_magic_device","knowledge_arcana"],
    "spells": ["Manos Ardientes","Resistir Energía","Celeridad del Dragón","Forma de Dragón I","Forma de Dragón II","Explosión de Fuego","Forma de Dragón III","Tormenta de Rayos","Dominar Monstruo"],
    "powers": [
      {"id":"draconic.claws","min_level":1,"uses":"3+cha","name":{"es":"Garras","en":"Claws"},"desc":{"es":"Ataques naturales con garras: 1d4 (nv1-4), 1d6 (nv5-11), 1d8 (nv12-19), 2d6 (nv20).","en":"Natural claw attacks: 1d4 (lv1-4), 1d6 (lv5-11), 1d8 (lv12-19), 2d6 (lv20)."}},
      {"id":"draconic.dragonRes","min_level":9,"uses":null,"name":{"es":"Resistencia de Dragón","en":"Dragon Resistances"},"desc":{"es":"CA natural +1; resistencia al elemento del linaje 10 (nv11+: 20; nv17+: inmunidad).","en":"Natural armor +1; energy resistance 10 (lv11+: 20; lv17+: immunity)."}},
      {"id":"draconic.breathWeapon","min_level":9,"uses":"3+cha","name":{"es":"Arma de Aliento","en":"Breath Weapon"},"desc":{"es":"Cono 30 ft o línea 60 ft: 1d6/nivel de hechicero (Fort mitad). 3+/día.","en":"30 ft cone or 60 ft line: 1d6/sorcerer level (Fort half). 3+/day."}}
    ]
  },
  {
    "id": "elemental",
    "name": {"es": "Elemental", "en": "Elemental"},
    "arcana": {"es": "Los conjuros del tipo de elemento de tu linaje +1 al daño por dado.", "en": "Spells of your elemental type deal +1 dmg per die."},
    "classSkills": ["fly","knowledge_planes","spellcraft","survival"],
    "spells": ["Manos Ardientes","Bola de Fuego","Muro de Fuego","Explosión","Invocar Elemental Pequeño","Invocar Elemental Mediano","Invocar Elemental Grande","Invocar Elemental Superior","Elemental Inmenso"],
    "powers": [
      {"id":"elemental.ray","min_level":1,"uses":"3+cha","name":{"es":"Rayo Elemental","en":"Elemental Ray"},"desc":{"es":"Rayo de energía distancia 30 ft: 1d6+1/2 niveles de daño elemental.","en":"Energy ray 30 ft: 1d6 + 1 per 2 levels elemental damage."}},
      {"id":"elemental.resist","min_level":9,"uses":null,"name":{"es":"Resistencia Elemental","en":"Elemental Resistance"},"desc":{"es":"Resistencia 20 al tipo de energía del linaje. Nv 17+: Inmunidad.","en":"Energy resistance 20 to your lineage type. Lv 17+: Immunity."}}
    ]
  },
  {
    "id": "fey",
    "name": {"es": "Feérico", "en": "Fey"},
    "arcana": {"es": "+2 a CD de conjuros de encantamiento y adivinación.", "en": "+2 to spell DCs for enchantment and divination spells."},
    "classSkills": ["acrobatics","bluff","fly","survival"],
    "spells": ["Inducir Miedo","Sueño","Belleza Encantadora","Libertad de Movimiento","Sueños","Soñar","Engaño Supremo","Ironía","Deseo"],
    "powers": [
      {"id":"fey.laughingTouch","min_level":1,"uses":"3+cha","name":{"es":"Toque de Risa","en":"Laughing Touch"},"desc":{"es":"Toque: criatura ríe incontrolablemente 1 ronda (sin acción, Fort niega). Afecta solo a nv ≤ nivel hechicero.","en":"Touch: creature laughs uncontrollably 1 round (Fort negates). Works on HD ≤ sorcerer level."}},
      {"id":"fey.fleeting_glance","min_level":9,"uses":"1","name":{"es":"Mirada Efímera","en":"Fleeting Glance"},"desc":{"es":"Invisibilidad durante 1 ronda/nivel de hechicero. 1/día.","en":"Invisibility for 1 round/sorcerer level. 1/day."}}
    ]
  },
  {
    "id": "infernal",
    "name": {"es": "Infernal", "en": "Infernal"},
    "arcana": {"es": "+2 a CD de conjuros de encantamiento con subtipo [maldad] y [ley].", "en": "+2 to spell DCs for enchantment spells with [evil] and [law] descriptors."},
    "classSkills": ["bluff","diplomacy","knowledge_planes","spellcraft"],
    "spells":["Protección del Bien","Tenebrismo","Sugestión","Dominación","Engaño Mayor","Maldición","Plaga","Sugestión en Masa","Deseo Limitado"],
    "powers": [
      {"id":"infernal.corruptingTouch","min_level":1,"uses":"3+cha","name":{"es":"Toque Corruptor","en":"Corrupting Touch"},"desc":{"es":"Toque: objetivo apabullado 1 ronda + 1/5 niveles (Fort niega). Solo funciona en seres con DG ≤ nivel hechicero.","en":"Touch: target shaken 1 round + 1 per 5 levels (Fort negates)."}},
      {"id":"infernal.hellfire","min_level":9,"uses":"3+cha","name":{"es":"Fuego Infernal","en":"Hellfire"},"desc":{"es":"Rayo de fuego 30 ft: 1d6/2 niveles daño fuego (mitad fuego sagrado, bypassa RM). Fort mitad.","en":"30 ft ray: 1d6/2 levels fire dmg (half unholy fire, bypasses SR). Fort half."}}
    ]
  },
  {
    "id": "undead",
    "name": {"es": "No Muerto", "en": "Undead"},
    "arcana": {"es": "+1 al daño por dado en conjuros de no muertos y necromancia.", "en": "+1 dmg per die for undead and necromancy spells."},
    "classSkills": ["bluff","disguise","intimidate","knowledge_religion"],
    "spells": ["Causa Miedo","Toque Enfermante","Vampirismo (menor)","Animación de Muertos","Contagio Venomoso","Plaga","Matar","Crear No Muertos Mayor","Energía Negativa"],
    "powers": [
      {"id":"undead.touchOfGrave","min_level":1,"uses":"3+cha","name":{"es":"Toque de la Tumba","en":"Touch of the Grave"},"desc":{"es":"Toque: 1d6+1/2 niveles daño negativo (o cura no muertos). Fort mitad.","en":"Touch: 1d6 + 1 per 2 levels negative energy (or heals undead). Fort half."}},
      {"id":"undead.deathsGift","min_level":9,"uses":null,"name":{"es":"Don de la Muerte","en":"Death's Gift"},"desc":{"es":"Resistencia a frío 10, inmunidad a agotamiento no mágico. Nv 13+: frío 20, sin daño de precisión.","en":"Cold resistance 10, immune to non-magical exhaustion. Lv 13+: cold 20, immune to precision dmg."}}
    ]
  },
  {
    "id": "destined",
    "name": {"es": "Predestinado", "en": "Destined"},
    "arcana": {"es": "Cuando lanzas un conjuro de adivinación o que otorga un bonificador de suerte, añades tu mod CAR a salvaciones hasta el fin de tu próximo turno.", "en": "When casting a divination or luck spell, add CHA mod to saves until end of next turn."},
    "classSkills": ["athletics","knowledge_history","perception","survival"],
    "spells": ["Escudo de la Fe","Premonición","Protección vs Energía","Libertad de Movimiento","Suerte de Bestia","Revisitar los Huesos","Presencia del Héroe","Escudo de la Ley","Deseo"],
    "powers": [
      {"id":"destined.touchFate","min_level":1,"uses":"3+cha","name":{"es":"Toque del Destino","en":"Touch of Destiny"},"desc":{"es":"Toque: aliado +1 por cada 5 niveles a todas las tiradas hasta el fin de su próximo turno.","en":"Touch: ally +1 per 5 levels on all rolls until end of next turn."}},
      {"id":"destined.withinReach","min_level":9,"uses":"1","name":{"es":"A Mi Alcance","en":"It Was Meant to Be"},"desc":{"es":"1/día al fallar una tirada de ataque, salvación o habilidad: repite la tirada y usa el resultado más alto.","en":"1/day on a failed attack, save, or skill check: reroll and take the higher result."}}
    ]
  }
];

const FALLBACK_ORDERS = [
  {
    "id": "blue_rose",
    "classType": "cavalier",
    "name": {"es": "Orden de la Rosa Azul", "en": "Order of the Blue Rose"},
    "edicts": {
      "es": "Promover la paz y la diplomacia. Evitar la violencia cuando sea posible. Poner fin a los conflictos de forma pacífica.",
      "en": "Promote peace and diplomacy. Avoid violence when possible. End conflicts through peaceful means."
    },
    "challenge": {
      "es": "+bono moral a tiradas de Diplomacia contra el objetivo del desafío.",
      "en": "+morale bonus on Diplomacy checks against the challenge target."
    },
    "classSkills": ["diplomacy","knowledge_history"],
    "powers": [
      {"id":"blue_rose.flatBlade","min_level":2,"uses":null,"name":{"es":"Plano del Filo","en":"Flat of the Blade"},"desc":{"es":"Puede atacar con el plano del arma para hacer daño no letal sin penalización. Añade ½ nivel a tiradas de Intimidación para someter (no matar).","en":"May strike with the flat of the blade to deal nonlethal damage without penalty. Add ½ level to Intimidate checks to subdue rather than kill."}},
      {"id":"blue_rose.innerPeace","min_level":8,"uses":null,"name":{"es":"Paz Interior","en":"Inner Peace"},"desc":{"es":"1/día como acción estándar: criatura confusa o perturbada en 30 ft puede repetir su tirada de salvación con +4 de bono.","en":"1/day as standard action: confused or disturbed creature within 30 ft may repeat its saving throw with a +4 bonus."}},
      {"id":"blue_rose.auraOfPeace","min_level":15,"uses":null,"name":{"es":"Aura de Paz","en":"Aura of Peace"},"desc":{"es":"Los aliados en 10 ft ganan +4 de bono moral a las tiradas de salvación contra efectos de alteración de la mente.","en":"Allies within 10 ft gain a +4 morale bonus on saving throws against mind-affecting effects."}}
    ]
  },
  {
    "id": "cockatrice",
    "classType": "cavalier",
    "name": {"es": "Orden del Cocatriz", "en": "Order of the Cockatrice"},
    "edicts": {
      "es": "Actuar en beneficio propio ante todo. Nunca compartir la recompensa del desafío. Buscar la gloria personal.",
      "en": "Act in self-interest above all. Never share the spoils of a challenge. Seek personal glory."
    },
    "challenge": {
      "es": "+¼ de nivel de caballero de bono de competencia a las tiradas de ataque contra el objetivo del desafío.",
      "en": "+¼ cavalier level as a competence bonus on attack rolls against the challenge target."
    },
    "classSkills": ["bluff","intimidate"],
    "powers": [
      {"id":"cockatrice.stealGlory","min_level":2,"uses":null,"name":{"es":"Robar Gloria","en":"Steal Glory"},"desc":{"es":"Si un aliado derrota a un enemigo, puede hacer una tirada de Intimidación gratuita como reacción para atribuirse el mérito ante testigos. +1 a ataque y daño vs el primer enemigo atacado en el siguiente turno.","en":"If an ally defeats an enemy, may make a free Intimidate check as a reaction to claim credit before witnesses. +1 on attack and damage vs the first enemy attacked on the next turn."}},
      {"id":"cockatrice.momentOfTriumph","min_level":8,"uses":"1","name":{"es":"Momento de Triunfo","en":"Moment of Triumph"},"desc":{"es":"1/día: repetir cualquier d20 y usar el resultado más alto.","en":"1/day: reroll any d20 and use the higher result."}},
      {"id":"cockatrice.vengeance","min_level":15,"uses":null,"name":{"es":"Venganza Devastadora","en":"Devastating Vengeance"},"desc":{"es":"Cuando el objetivo del desafío causa daño al caballero, añade ½ nivel de caballero de bono de daño adicional en todos los ataques contra ese objetivo ese turno.","en":"When the challenge target deals damage to the cavalier, add ½ cavalier level as a bonus to all damage rolls against that target this turn."}}
    ]
  },
  {
    "id": "dragon",
    "classType": "cavalier",
    "name": {"es": "Orden del Dragón", "en": "Order of the Dragon"},
    "edicts": {
      "es": "Proteger a sus aliados y responder siempre a sus llamadas de ayuda.",
      "en": "Protect allies and always answer their calls for aid."
    },
    "challenge": {
      "es": "Los aliados ganan +¼ de nivel de caballero de bono de competencia a las tiradas de ataque contra el objetivo del desafío.",
      "en": "Allies gain +¼ cavalier level as a competence bonus on attack rolls against the challenge target."
    },
    "classSkills": ["perception","survival"],
    "powers": [
      {"id":"dragon.aidAllies","min_level":2,"uses":null,"name":{"es":"Ayudar a Aliados","en":"Aid Allies"},"desc":{"es":"Cuando usa Ayudar a Otro con éxito, el bono concedido aumenta en +1 (y +1 cada 4 niveles adicionales).","en":"When successfully using Aid Another, the granted bonus increases by +1 (and +1 per 4 additional levels)."}},
      {"id":"dragon.strategy","min_level":8,"uses":"1","name":{"es":"Estrategia","en":"Strategy"},"desc":{"es":"1/día como acción inmediata: otorgar a un aliado en 30 ft que pueda oírle un movimiento o ataque adicional inmediato.","en":"1/day as immediate action: grant an ally within 30 ft who can hear you an immediate move or attack action."}},
      {"id":"dragon.actAsOne","min_level":15,"uses":"1","name":{"es":"Actuar Como Uno","en":"Act as One"},"desc":{"es":"1/día: todos los aliados en 30 ft pueden hacer inmediatamente un ataque de cuerpo a cuerpo o a distancia como reacción.","en":"1/day: all allies within 30 ft may immediately make one melee or ranged attack as a reaction."}}
    ]
  },
  {
    "id": "flame",
    "classType": "cavalier",
    "name": {"es": "Orden de la Llama", "en": "Order of the Flame"},
    "edicts": {
      "es": "Buscar el combate y la gloria en la batalla. Nunca rechazar un desafío justo. Ser el primero en la carga.",
      "en": "Seek combat and glory in battle. Never refuse a fair challenge. Be first into the charge."
    },
    "challenge": {
      "es": "Los ataques contra el objetivo del desafío causan +1d6 de daño de fuego extra por cada 4 niveles.",
      "en": "Attacks against the challenge target deal +1d6 extra fire damage per 4 levels."
    },
    "classSkills": ["intimidate","ride"],
    "powers": [
      {"id":"flame.burningIntensity","min_level":2,"uses":null,"name":{"es":"Intensidad Ardiente","en":"Burning Intensity"},"desc":{"es":"Bono de resistencia +4 a tiradas de salvación contra miedo. Puede compartir este bono con aliados adyacentes como acción estándar.","en":"Resistance +4 bonus on saves against fear. May share this bonus with adjacent allies as a standard action."}},
      {"id":"flame.mountedMastery","min_level":8,"uses":null,"name":{"es":"Maestría Montada","en":"Mounted Mastery"},"desc":{"es":"Ignora las penalizaciones de armadura al montar. Suma ½ nivel a tiradas de Monta.","en":"Ignores armor penalties when mounted. Add ½ level to Ride checks."}},
      {"id":"flame.knightCharge","min_level":15,"uses":"1","name":{"es":"Carga del Caballero","en":"Knight's Charge"},"desc":{"es":"1/día: al cargar, puede hacer un ataque completo en lugar de un único ataque. Cada golpe extra suma el bono de daño de desafío.","en":"1/day: when charging, may make a full attack instead of a single attack. Each extra hit adds the challenge damage bonus."}}
    ]
  },
  {
    "id": "lion",
    "classType": "cavalier",
    "name": {"es": "Orden del León", "en": "Order of the Lion"},
    "edicts": {
      "es": "Servir y obedecer a su señor. Seguir sus órdenes. Protegerle ante todo.",
      "en": "Serve and obey the liege lord. Follow their commands. Protect them above all."
    },
    "challenge": {
      "es": "Gana bono de competencia a CA igual a ¼ del nivel de caballero contra los ataques del objetivo del desafío.",
      "en": "Gain a competence bonus to AC equal to ¼ cavalier level against attacks from the challenge target."
    },
    "classSkills": ["knowledge_local","knowledge_nobility"],
    "powers": [
      {"id":"lion.lionsCall","min_level":2,"uses":null,"name":{"es":"El Llamado del León","en":"Lion's Call"},"desc":{"es":"Como acción estándar: los aliados en 60 ft ganan +1 de bono moral a tiradas de salvación vs miedo y +1 a ataque por 1 minuto/nivel.","en":"As standard action: allies within 60 ft gain +1 morale bonus on saves vs fear and +1 on attack rolls for 1 min/level."}},
      {"id":"lion.forTheKing","min_level":8,"uses":"1","name":{"es":"Por el Rey","en":"For the King"},"desc":{"es":"1/día como acción inmediata: los aliados en 30 ft ganan +4 de bono moral a ataque y daño durante 1 asalto.","en":"1/day as immediate action: allies within 30 ft gain +4 morale bonus on attack and damage rolls for 1 round."}},
      {"id":"lion.shieldOfLiege","min_level":15,"uses":null,"name":{"es":"Escudo del Señor","en":"Shield of the Liege"},"desc":{"es":"Puede redirigir cualquier ataque dirigido al señor a sí mismo si está adyacente. Gana bono de esquiva +2 a CA al hacerlo.","en":"May redirect any attack targeting the liege to himself if adjacent. Gains +2 dodge bonus to AC when doing so."}}
    ]
  },
  {
    "id": "shield",
    "classType": "cavalier",
    "name": {"es": "Orden del Escudo", "en": "Order of the Shield"},
    "edicts": {
      "es": "Proteger a los inocentes. Acudir en ayuda de los indefensos. Nunca abandonar a los débiles.",
      "en": "Protect the innocent. Aid the defenseless. Never abandon the weak."
    },
    "challenge": {
      "es": "Gana RD 1/— por cada 4 niveles contra los ataques del objetivo del desafío.",
      "en": "Gain DR 1/— per 4 levels against attacks from the challenge target."
    },
    "classSkills": ["heal","knowledge_local"],
    "powers": [
      {"id":"shield.resolute","min_level":2,"uses":null,"name":{"es":"Resuelto","en":"Resolute"},"desc":{"es":"Cuando está adyacente a un aliado no combatiente, gana +2 de bono de competencia a CA y a tiradas de salvación.","en":"When adjacent to a noncombatant ally, gain +2 competence bonus to AC and saving throws."}},
      {"id":"shield.stemTide","min_level":8,"uses":null,"name":{"es":"Detener la Marea","en":"Stem the Tide"},"desc":{"es":"Como acción inmediata: puede detener el movimiento de un enemigo que pase por su amenaza como si hubiera realizado con éxito un ataque de oportunidad (sin necesitarlo). Puede usar esto 1/asalto.","en":"As immediate action: stop one enemy's movement through his threatened area as if making a successful AoO (without needing one). 1/round."}},
      {"id":"shield.defendWeak","min_level":15,"uses":null,"name":{"es":"Defender a los Débiles","en":"Defend the Weak"},"desc":{"es":"Puede elegir recibir el daño de un ataque dirigido a un aliado adyacente como reacción. Gana RD 5/— contra ese golpe redirigido.","en":"May choose to take the damage from an attack targeting an adjacent ally as a reaction. Gains DR 5/— against that redirected hit."}}
    ]
  },
  {
    "id": "star",
    "classType": "cavalier",
    "name": {"es": "Orden de la Estrella", "en": "Order of the Star"},
    "edicts": {
      "es": "Seguir los edictos de la deidad elegida. Promover la fe y proteger a los creyentes.",
      "en": "Follow the edicts of the chosen deity. Promote the faith and protect believers."
    },
    "challenge": {
      "es": "Gana bono de resistencia a tiradas de salvación igual a ¼ del nivel contra conjuros y poderes del objetivo del desafío.",
      "en": "Gain a resistance bonus on saving throws equal to ¼ level against spells and abilities from the challenge target."
    },
    "classSkills": ["heal","knowledge_religion"],
    "powers": [
      {"id":"star.calling","min_level":2,"uses":null,"name":{"es":"Llamada","en":"Calling"},"desc":{"es":"Elige una habilidad de dominio de su deidad con usos = 3 + mod CAR. Si no tiene deidad, elige Canalizar Energía (positiva/negativa según alineamiento, dado 1d6+1/4 niv.).","en":"Choose one domain power from your deity with uses = 3 + CHA mod. If no deity, choose Channel Energy (positive/negative per alignment, 1d6+1 per 4 levels)."}},
      {"id":"star.forTheFaith","min_level":8,"uses":"1","name":{"es":"Por la Fe","en":"For the Faith"},"desc":{"es":"1/día como acción estándar: los aliados en 30 ft que puedan oírle ganan +4 moral a tiradas de salvación contra efectos de miedo durante 1 min/nivel.","en":"1/day as standard action: allies within 30 ft who can hear gain +4 morale on saves vs fear for 1 min/level."}},
      {"id":"star.faithfulCharge","min_level":15,"uses":null,"name":{"es":"Carga Fiel","en":"Faithful Charge"},"desc":{"es":"Al cargar, gana bono de sagrado/profano (según alineamiento) a ataque y daño igual a ½ nivel de caballero.","en":"When charging, gain a sacred/profane (based on alignment) bonus on attack and damage equal to ½ cavalier level."}}
    ]
  },
  {
    "id": "sword",
    "classType": "cavalier",
    "name": {"es": "Orden de la Espada", "en": "Order of the Sword"},
    "edicts": {
      "es": "Actuar con honor y caballerosidad. Nunca deshonrarse. Proteger al inocente y desafiar al malvado.",
      "en": "Act with honor and chivalry. Never bring dishonor. Protect the innocent and challenge evil."
    },
    "challenge": {
      "es": "+¼ de nivel de caballero de bono de competencia a las tiradas de ataque contra el objetivo del desafío.",
      "en": "+¼ cavalier level as a competence bonus on attack rolls against the challenge target."
    },
    "classSkills": ["knowledge_nobility","knowledge_religion"],
    "powers": [
      {"id":"sword.byMyHonor","min_level":2,"uses":null,"name":{"es":"Por Mi Honor","en":"By My Honor"},"desc":{"es":"Elige un alineamiento adyacente al suyo: gana bono de competencia +2 asociado (LB: saves; LN: ataque; NB: daño; NN: CA; NM: velocidad +5 ft; LM: FUE; CM: tiradas de habilidad; CN: iniciativa).","en":"Choose one alignment adjacent to yours: gain an associated +2 competence bonus (LG: saves; LN: attack; NG: damage; NN: AC; NE: speed +5ft; LE: STR; CE: skill checks; CN: initiative)."}},
      {"id":"sword.mountedMastery","min_level":8,"uses":null,"name":{"es":"Maestría Montada","en":"Mounted Mastery"},"desc":{"es":"Ignora las penalizaciones de armadura y escudo en Monta. Puede emplear la lanza sin penalización en la primera ronda de combate (sin carga).","en":"Ignores armor and shield penalties on Ride checks. May use a lance without penalty in the first round of combat (without charging)."}},
      {"id":"sword.knightChallenge","min_level":15,"uses":null,"name":{"es":"Desafío del Caballero","en":"Knight's Challenge"},"desc":{"es":"El bono de ataque y daño del desafío se dobla. Además, el objetivo del desafío sufre penalización de −2 a CA contra los ataques del caballero.","en":"The challenge's attack and damage bonus is doubled. Additionally, the challenge target suffers a −2 penalty to AC against the cavalier's attacks."}}
    ]
  },
  {
    "id": "tome",
    "classType": "cavalier",
    "name": {"es": "Orden del Tomo", "en": "Order of the Tome"},
    "edicts": {
      "es": "Preservar el conocimiento y los libros. Compartir el saber. No destruir textos escritos.",
      "en": "Preserve knowledge and books. Share learning. Never destroy written texts."
    },
    "challenge": {
      "es": "Al aceptar el desafío, hace una tirada de Conocimiento (tipo relevante) para analizar al objetivo; si la supera, gana +1 a ataque y +1 a CA vs ese objetivo.",
      "en": "Upon issuing the challenge, make a relevant Knowledge check to analyze the target; if successful, gain +1 on attack rolls and +1 to AC against that target."
    },
    "classSkills": ["knowledge_arcana","knowledge_dungeoneering"],
    "powers": [
      {"id":"tome.studied","min_level":2,"uses":null,"name":{"es":"Estudiado","en":"Studied"},"desc":{"es":"Suma ½ nivel de caballero a todas las tiradas de Conocimiento. Puede hacer tiradas de Conocimiento sin entrenamiento.","en":"Add ½ cavalier level to all Knowledge checks. May make untrained Knowledge checks."}},
      {"id":"tome.knowledgeIsPower","min_level":8,"uses":null,"name":{"es":"El Conocimiento es Poder","en":"Knowledge is Power"},"desc":{"es":"1/día: usar una tirada de Conocimiento (DC 20) relacionada con el tipo de criatura para obtener +4 a ataque y daño vs esa criatura durante 1 minuto.","en":"1/day: use a Knowledge check (DC 20) related to the creature type to gain +4 on attack and damage vs that creature for 1 minute."}},
      {"id":"tome.tomesInsight","min_level":15,"uses":null,"name":{"es":"Perspicacia del Tomo","en":"Tome's Insight"},"desc":{"es":"Añade su mod de Inteligencia como bono de competencia a todas las tiradas de salvación.","en":"Add Intelligence modifier as a competence bonus to all saving throws."}}
    ]
  },
  {
    "id": "torch",
    "classType": "cavalier",
    "name": {"es": "Orden de la Antorcha", "en": "Order of the Torch"},
    "edicts": {
      "es": "Cazar y destruir aberraciones, no-muertos y demonios. Nunca aliarse con estas criaturas.",
      "en": "Hunt and destroy aberrations, undead, and fiends. Never ally with such creatures."
    },
    "challenge": {
      "es": "+2 de bono a ataque y daño contra el objetivo del desafío si es aberración, no-muerto o extraplanar.",
      "en": "+2 bonus on attack and damage against the challenge target if it is an aberration, undead, or outsider."
    },
    "classSkills": ["knowledge_dungeoneering","knowledge_planes"],
    "powers": [
      {"id":"torch.monsterLore","min_level":2,"uses":null,"name":{"es":"Saber Monstruoso","en":"Monster Lore"},"desc":{"es":"Suma ½ nivel a tiradas de Conocimiento para identificar monstruos. Al identificar con éxito, gana +1 a ataque vs esa criatura durante ese combate.","en":"Add ½ level to Knowledge checks to identify monsters. On a successful identification, gain +1 on attack rolls vs that creature for that combat."}},
      {"id":"torch.torchsWrath","min_level":8,"uses":null,"name":{"es":"Ira de la Antorcha","en":"Torch's Wrath"},"desc":{"es":"Gana RD 2/— contra los ataques de aberraciones, no-muertos y criaturas extraplanares. RD 5/— contra el objetivo del desafío si entra en la categoría.","en":"Gain DR 2/— against attacks from aberrations, undead, and outsiders. DR 5/— against the challenge target if it qualifies."}},
      {"id":"torch.byTorchsLight","min_level":15,"uses":null,"name":{"es":"A la Luz de la Antorcha","en":"By Torch's Light"},"desc":{"es":"Los ataques contra aberraciones, no-muertos y extraplanares ignoran RD y RM. Además, al derrotar al objetivo del desafío, gana un uso de desafío de vuelta inmediatamente.","en":"Attacks against aberrations, undead, and outsiders bypass DR and SR. Additionally, upon defeating the challenge target, regain one challenge use immediately."}}
    ]
  },
  {
    "id": "paw",
    "classType": "cavalier",
    "name": {"es": "Orden de la Pata", "en": "Order of the Paw"},
    "edicts": {
      "es": "Proteger a las razas pequeñas y las criaturas del bien. Respetar los bosques y la naturaleza.",
      "en": "Protect small races and good creatures. Respect forests and nature."
    },
    "challenge": {
      "es": "Gana bono de competencia a CA igual a ¼ del nivel de caballero contra los ataques del objetivo del desafío mientras haya un halfling u otro aliado pequeño a menos de 30 ft.",
      "en": "Gain competence bonus to AC equal to ¼ cavalier level against attacks from the challenge target while a halfling or small ally is within 30 ft."
    },
    "classSkills": ["knowledge_nature","stealth"],
    "powers": [
      {"id":"paw.swornDefense","min_level":2,"uses":null,"name":{"es":"Defensa Jurada","en":"Sworn Defense"},"desc":{"es":"Cuando está adyacente a un aliado de tamaño Pequeño, gana +2 de bono de esquiva a CA. Si el aliado sufre daño, puede realizar un ataque de oportunidad gratuito contra quien atacó.","en":"When adjacent to a Small-sized ally, gain +2 dodge bonus to AC. If the ally takes damage, may make a free attack of opportunity against the attacker."}},
      {"id":"paw.protectMeek","min_level":8,"uses":null,"name":{"es":"Proteger a los Indefensos","en":"Protect the Meek"},"desc":{"es":"Como reacción, puede interponerse entre un aliado Pequeño o halfling adyacente y un ataque, tomando el daño él mismo. Reduce ese daño en ½ nivel de caballero.","en":"As a reaction, may interpose between an adjacent halfling or Small ally and an attack, taking the damage himself. Reduces that damage by ½ cavalier level."}},
      {"id":"paw.guardian","min_level":15,"uses":null,"name":{"es":"Guardián de los Pequeños","en":"Guardian of the Small"},"desc":{"es":"Los aliados de tamaño Pequeño en 30 ft ganan +4 moral a tiradas de salvación y +2 de bono deflector a CA mientras el caballero esté vivo y combatiendo.","en":"Small-sized allies within 30 ft gain +4 morale on saving throws and +2 deflection bonus to AC while the cavalier is alive and fighting."}}
    ]
  },
  {
    "id": "flame_samurai",
    "classType": "samurai",
    "name": {"es": "Orden de la Llama (Samurái)", "en": "Order of the Flame (Samurai)"},
    "edicts": {
      "es": "Buscar el combate y la gloria. Nunca huir de un desafío. Morir con honor antes que rendirse cobardemente.",
      "en": "Seek combat and glory. Never flee from a challenge. Die with honor rather than surrender in cowardice."
    },
    "challenge": {
      "es": "+bono moral al daño igual al nivel de samurái en todos los ataques contra el objetivo del desafío.",
      "en": "+morale bonus on damage rolls equal to samurai level on all attacks against the challenge target."
    },
    "classSkills": ["intimidate","ride"],
    "powers": [
      {"id":"flame_s.bravadosBlade","min_level":2,"uses":null,"name":{"es":"Bravura del Filo","en":"Bravado's Blade"},"desc":{"es":"Cuando causa daño en el primer ataque de una ronda, puede intentar Intimidar al objetivo como acción gratuita. Si tiene éxito, el objetivo queda asustado durante 1 asalto.","en":"When dealing damage on the first attack of a round, may attempt to Demoralize the target as a free action. On success, the target is shaken for 1 round."}},
      {"id":"flame_s.gloriousChallenge","min_level":8,"uses":null,"name":{"es":"Desafío Glorioso","en":"Glorious Challenge"},"desc":{"es":"Al emitir un Desafío, puede moverse inmediatamente hasta su velocidad de movimiento hacia el objetivo como acción gratuita. Esta carga no provoca ataques de oportunidad.","en":"When issuing a Challenge, may immediately move up to his speed toward the target as a free action. This movement does not provoke attacks of opportunity."}},
      {"id":"flame_s.burningAmbition","min_level":15,"uses":null,"name":{"es":"Ambición Ardiente","en":"Burning Ambition"},"desc":{"es":"Cuando el objetivo del desafío cae a 0 PG o menos, recupera inmediatamente 1 uso de Desafío. Solo ocurre una vez por asalto.","en":"When the challenge target is reduced to 0 hp or fewer, immediately regain 1 use of Challenge. This can only occur once per round."}}
    ]
  },
  {
    "id": "warrior",
    "classType": "samurai",
    "name": {"es": "Orden del Guerrero", "en": "Order of the Warrior"},
    "edicts": {
      "es": "Seguir el código del bushido: lealtad, honor, rectitud, respeto, honestidad, valor y benevolencia. Proteger al señor con la propia vida.",
      "en": "Follow the bushido code: loyalty, honor, righteousness, respect, honesty, valor, and benevolence. Protect the lord with your life."
    },
    "challenge": {
      "es": "+bono moral a la tirada de daño igual a ½ nivel de samurái. El bono aumenta a nivel completo cuando ataca al enemigo del señor.",
      "en": "+morale bonus on damage rolls equal to ½ samurai level. Bonus increases to full level when attacking the lord's enemy."
    },
    "classSkills": ["knowledge_local","knowledge_nobility"],
    "powers": [
      {"id":"warrior.battlesToll","min_level":2,"uses":null,"name":{"es":"El Precio de la Batalla","en":"Battle's Toll"},"desc":{"es":"Cuando derrota a un enemigo (reduciéndolo a 0 PG o matándolo), puede realizar inmediatamente un ataque adicional de cuerpo a cuerpo contra otro enemigo adyacente como acción gratuita.","en":"When defeating an enemy (reducing it to 0 hp or killing it), may immediately make one additional melee attack against another adjacent enemy as a free action."}},
      {"id":"warrior.selfless","min_level":8,"uses":null,"name":{"es":"Desinteresado","en":"Selfless"},"desc":{"es":"Como acción estándar, puede transferir su bono moral al daño del Desafío a todos los aliados en 30 ft durante 1 asalto. Mientras lo hace, el samurái no obtiene el bono él mismo.","en":"As a standard action, may transfer his Challenge morale damage bonus to all allies within 30 ft for 1 round. While doing so, the samurai does not gain the bonus himself."}},
      {"id":"warrior.strikeTrue","min_level":15,"uses":"1","name":{"es":"Golpe Certero","en":"Strike True"},"desc":{"es":"1/combate: cuando amenaza un crítico contra el objetivo del desafío, la confirmación es automáticamente exitosa (no necesita tirada). El multiplicador de daño aumenta en ×1.","en":"1/combat: when threatening a critical hit against the challenge target, the confirmation roll automatically succeeds (no roll needed). The damage multiplier increases by ×1."}}
    ]
  },
  {
    "id": "hero",
    "classType": "samurai",
    "name": {"es": "Orden del Héroe", "en": "Order of the Hero"},
    "edicts": {
      "es": "Buscar siempre la acción más heroica. Nunca dejar a un compañero en el campo de batalla. Enfrentarse al peligro de frente.",
      "en": "Always seek the most heroic action. Never leave a companion on the battlefield. Face danger head-on."
    },
    "challenge": {
      "es": "Gana bono de moral a ataque y daño igual a ¼ del nivel de samurái. El bono se dobla en el primer asalto de combate.",
      "en": "Gain a morale bonus on attack and damage rolls equal to ¼ samurai level. The bonus is doubled on the first round of combat."
    },
    "classSkills": ["acrobatics","perception"],
    "powers": [
      {"id":"hero.heroicGrace","min_level":2,"uses":null,"name":{"es":"Gracia Heroica","en":"Heroic Grace"},"desc":{"es":"Suma ½ nivel a las tiradas de iniciativa. Al actuar en el primer asalto, puede hacer un ataque adicional al final de su turno sin las penalizaciones del ataque completo.","en":"Add ½ level to initiative checks. When acting in the first round, may make one additional attack at the end of its turn without the full-attack penalties."}},
      {"id":"hero.inspiringDisplay","min_level":8,"uses":"1","name":{"es":"Exhibición Inspiradora","en":"Inspiring Display"},"desc":{"es":"1/día tras derrotar a un oponente: todos los aliados en 60 ft que puedan ver la hazaña ganan +2 de bono moral a ataque, daño y tiradas de salvación durante 1 minuto.","en":"1/day after defeating an opponent: all allies within 60 ft who can witness the feat gain a +2 morale bonus on attack, damage, and saving throws for 1 minute."}},
      {"id":"hero.heroesChallenge","min_level":15,"uses":null,"name":{"es":"Desafío del Héroe","en":"Hero's Challenge"},"desc":{"es":"Cuando emite un Desafío, puede elegir un segundo objetivo adyacente al primero. Ambos cuentan como objetivos del Desafío, pero el bono al daño se divide entre los dos.","en":"When issuing a Challenge, may choose a second target adjacent to the first. Both count as Challenge targets, but the damage bonus is split between the two."}}
    ]
  },
  {
    "id": "land",
    "classType": "samurai",
    "name": {"es": "Orden de la Tierra", "en": "Order of the Land"},
    "edicts": {
      "es": "Proteger el territorio de su señor. Nunca abandonar un puesto de defensa. Conocer la tierra como a uno mismo.",
      "en": "Protect the lord's territory. Never abandon a defensive post. Know the land as you know yourself."
    },
    "challenge": {
      "es": "Gana bono de competencia a CA igual a ¼ del nivel de samurái mientras permanezca en un área de 10 ft de donde inició el Desafío.",
      "en": "Gain a competence bonus to AC equal to ¼ samurai level while remaining within 10 ft of where the Challenge was issued."
    },
    "classSkills": ["knowledge_nature","survival"],
    "powers": [
      {"id":"land.homeGround","min_level":2,"uses":null,"name":{"es":"Tierra Natal","en":"Home Ground"},"desc":{"es":"En cualquier terreno que lleve explorando al menos 1 hora, ignora terreno difícil y gana +2 de bono de competencia a percepción. No puede ser flanqueado por menos de 3 enemigos a la vez.","en":"In any terrain explored for at least 1 hour, ignores difficult terrain and gains +2 competence on Perception. Cannot be flanked by fewer than 3 enemies simultaneously."}},
      {"id":"land.fortressStance","min_level":8,"uses":"1","name":{"es":"Postura de Fortaleza","en":"Fortress Stance"},"desc":{"es":"1/día: durante 1 minuto/nivel, gana RD 3/— y +2 de bono deflector a CA mientras no se mueva más de 5 ft por ronda.","en":"1/day: for 1 minute/level, gain DR 3/— and +2 deflection bonus to AC while moving no more than 5 ft per round."}},
      {"id":"land.unbreakableDefense","min_level":15,"uses":null,"name":{"es":"Defensa Inquebrantable","en":"Unbreakable Defense"},"desc":{"es":"Los aliados en 30 ft ganan RD 2/— mientras el samurái esté vivo y en posición defensiva. Al ser derribado, puede gastar 1 punto de Resolución para permanecer en pie con 1 PG.","en":"Allies within 30 ft gain DR 2/— while the samurai is alive and in a defensive position. When knocked unconscious, may spend 1 Resolve to remain standing with 1 hp."}}
    ]
  }
];
