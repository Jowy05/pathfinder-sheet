// =====================================================================
// DATOS DE EJEMPLO — encuentros, monstruos, ataques, condiciones
// Genéricos (sin marca propietaria). Usables como semillas en JSONs reales.
// =====================================================================

const I18N = {
  es: {
    appTitle: "Modo Máster",
    exit: "Salir",
    round: "Ronda",
    turn: "Turno",
    initiative: "Iniciativa",
    bestiary: "Bestiario",
    notes: "Notas",
    log: "Registro",
    settings: "Ajustes",
    map: "Mapa",
    nextTurn: "Siguiente turno",
    endRound: "Fin de ronda",
    addToken: "Añadir ficha",
    actions: "Acciones",
    reaction: "Reacción",
    movement: "Movimiento",
    hp: "PG",
    ac: "CA",
    fort: "Fort",
    ref: "Ref",
    will: "Vol",
    perception: "Percep.",
    speed: "Vel.",
    save: "Salvación",
    attacks: "Ataques",
    skills: "Habilidades",
    abilities: "Aptitudes",
    description: "Descripción",
    buffs: "Buffs",
    debuffs: "Estados",
    custom: "Personalizado",
    duration: "Duración",
    permanent: "permanente",
    expired: "ha expirado",
    damage: "Daño",
    heal: "Curar",
    add: "Añadir",
    drag: "Arrastra para soltar",
    selectToken: "Toca una ficha para ver detalles",
    encounter: "Encuentro",
    dim: "atenuar",
    statusFrightened: "Asustado",
    statusHasted: "Acelerado",
    statusProne: "Tumbado",
    statusFlatFooted: "Desprev.",
    statusInspired: "Inspirado",
    statusPoisoned: "Envenenado",
    statusGrabbed: "Agarrado",
    statusBlinded: "Cegado",
    statusStunned: "Aturdido",
    statusParalyzed: "Paralizado",
    statusDeafened: "Ensordecido",
    statusSickened: "Enfermo",
    statusShaken: "Sacudido",
    statusDazzled: "Deslumbrado",
    statusFatigued: "Fatigado",
    statusExhausted: "Exhausto",
    statusEntangled: "Enredado",
    statusBleeding: "Sangrando",
    statusBlessed: "Bendecido",
    statusShielded: "Escudado",
    statusInvisible: "Invisible",
    statusRaging: "Furioso",
    statusRegenerating: "Regenerando",
    statusConcealed: "Camuflado",
    rounds: "rondas",
    melee: "C/C",
    ranged: "Dist.",
    crit: "Crít.",
    forest: "Emboscada en el bosque",
    dungeon: "Sala del trono profanada",
    urban: "Plaza del mercado",
    /* MST-J02 */
    emptyEncounter: "Encuentro vacío",
    emptyEncounterHelp: "Limpia tokens, niebla y plantillas. Empieza en R1 con el mapa actual.",
    emptyEncounterAction: "Encuentro vacío",
    emptyEncounterConfirm: "¿Empezar un encuentro vacío? Se borrarán tokens, niebla y plantillas.",
    /* MST-J05 */
    snapToGrid: "Imantar a celda",
    snapToGridHelp: "Los tokens se alinean al centro de la cuadrícula al moverlos",
    /* MST-J10 */
    confirmRemovePCFromSheet: "Vas a quitar a {n}, importado de la ficha. ¿Continuar?",
    /* MST-J07 */
    tokenColor: "Color del token",
    tokenPhoto: "Foto",
    replace: "Cambiar",
    remove: "Quitar",
    encDesc: "Toca cualquier ficha para abrir su tarjeta. Mantén pulsado para arrastrar.",
    layoutCompact: "Compacto",
    layoutExpanded: "Expandido",
    layoutTabs: "Pestañas",
    initTop: "Tira superior",
    initRail: "Carril lateral",
    initFloat: "Flotante",
    densityMin: "Minimal",
    densityRich: "Rico",
    viewMap: "Vista mapa",
    viewList: "Vista lista",
    listMode: "Solo lista",
    mapMode: "Mapa",
    sortByIni: "Por iniciativa",
    diceRoller: "Tirador de dados",
    advantage: "Ventaja",
    disadvantage: "Desventaja",
    roll: "Tirar",
    critNatural: "¡20 NATURAL!",
    fumbleNatural: "¡PIFIA!",
    logEmpty: "Sin actividad",
    logEmptySub: "Las tiradas y eventos aparecerán aquí.",
    events: "eventos",
    clear: "Limpiar",
    rolled: "tiró",
    attacks_v: "ataca con",
    deals: "inflige",
    healed: "recupera",
    nextTurnLog: "empieza su turno",
    bestiaryStub: "Bestiario",
    bestiaryStubSub: "Catálogo de criaturas (próximamente)",
    settingsStub: "Ajustes",
    settingsStubSub: "Tema, idioma y opciones del encuentro",
    lblExit: "Salir",
    lblPrev: "Atrás",
    lblNextTurn: "Sgte.",
    lblView: "Vista",
    lblDice: "Dados",
    lblBestiary: "Best.",
    lblAction: "Acción",
    lblReaction: "Reacción",
    lblRoll: "Tirar",
    lblAddBuff: "Añadir estado",
    removeToken: "Quitar combatiente",
    confirmRemove: "¿Quitar a {n} del encuentro?",
    editName: "Nombre del combatiente",
    changePhoto: "Cambiar foto",
    addCombatant: "Añadir combatiente",
    rollAllIni: "Tirar todas",
    delay: "Delay",
    noCombatants: "Sin combatientes",
    noCombatantsSub: "Pulsa Añadir para empezar",
    kind: "Tipo",
    kindPJ: "PJ",
    kindAlly: "Aliado",
    kindEnemy: "Enemigo",
    kindPet: "Mascota",
    kindNeutral: "Neutral",
    hp: "HP",
    ac: "CA",
    cancel: "Cancelar",
    lblAdd: "Añadir",
    lblCenter: "Centrar",
    // Editar token
    editToken: "Editar combatiente",
    edit: "Editar",
    duplicate: "Duplicar",
    save: "Guardar",
    color: "Color",
    // Bestiario
    searchCreature: "Buscar criatura…",
    newCreature: "Nueva",
    addToEncounter: "Añadir al encuentro",
    bestiaryEmpty: "Bestiario vacío",
    bestiaryEmptySub: "Pulsa la ＋ para crear una criatura",
    noMatch: "Sin resultados",
    noMatchSub: "Prueba con otro nombre",
    confirmDeleteEntry: "¿Borrar a {n} del bestiario?",
    delete: "Borrar",
    edit: "Editar",
    allKinds: "Todos",
    saveAsCreature: "Guardar en bestiario",
    savedToBestiary: "Guardada en bestiario",
    cr: "CR",
    tag: "Etiqueta",
    notes: "Notas",
    // Settings
    appearance: "Apariencia",
    theme: "Tema",
    language: "Idioma",
    gameTable: "Mesa de juego",
    gridLabel: "Cuadrícula",
    gridSquare: "Cuadrada",
    gridHex: "Hex",
    resetEncounter: "Reiniciar encuentro",
    resetHelp: "Vuelve al estado original del encuentro elegido. Pierdes tokens añadidos, daño y estados.",
    confirmReset: "¿Reiniciar el encuentro? Se perderán los cambios.",
    resetOk: "Encuentro reiniciado",
    persistence: "Master Info",
    savedYes: "Estado guardado en este dispositivo",
    savedNo: "Sin estado guardado",
    savedAt: "Última vez",
    savedHelp: "El encuentro se guardará automáticamente cuando hagas cambios.",
    exportJson: "Exportar JSON",
    importJson: "Importar JSON",
    exportHelp: "Exporta el estado actual a un archivo .json. Importa para cargar uno guardado.",
    exportOk: "Archivo descargado",
    importOk: "Encuentro importado",
    importErr: "Error al importar",
    clearSaved: "Borrar guardado",
    confirmClearSaved: "¿Borrar el estado guardado en este dispositivo? El encuentro actual se mantendrá hasta que recargues.",
    clearedOk: "Guardado borrado",
    about: "Acerca de",
    aboutTagline: "Pantalla de máster para combates de mesa de rol",
    localOnly: "Datos solo en este dispositivo",
    // Damage / save flow
    applyDamage: "Aplicar daño",
    damageExpr: "Daño",
    target: "Objetivo",
    miss: "Falla / sin daño",
    missLog: "sin daño",
    rollSave: "Tirar salvación",
    koToast: "cae inconsciente",
    lblResetZoom: "Reset",
    addAttack: "Añadir ataque",
    attackName: "Nombre",
    // Integración ficha
    fichaIntegration: "Integración con la ficha",
    importFromSheet: "Importar PJs",
    importFromSheetHelp: "Pide al navegador padre los PJs activos. Si no hay padre, intenta leer el estado de la ficha en este dispositivo.",
    importFromSheetOk: "PJs importados",
    importFromSheetEmpty: "Sin PJs disponibles",
    importFromSheetErr: "Error al importar",
    importNoPJs: "Sin PJs disponibles",
    importPJsOk: "PJs importados",
    importPJFromFile: "Desde JSON",
    // Mapa avanzado
    lblMeasure: "Medir",
    lblTemplates: "Plantillas",
    lblFog: "Niebla",
    lblBackground: "Fondo",
    lblNote: "Nota",
    measureHint: "Toca dos puntos o tokens para medir",
    templateCircle: "Esfera",
    templateCone: "Cono",
    templateLine: "Línea",
    templateRadius: "Radio (ft)",
    templateLength: "Largo (ft)",
    templateAngle: "Ángulo",
    fogHint: "Toca el mapa para alternar niebla en zonas",
    fogClear: "Limpiar niebla",
    fogReveal: "Revelar todo",
    fogHide: "Ocultar todo",
    tplClear: "Borrar plantillas",
    notesClear: "Borrar notas",
    bgChange: "Cambiar fondo",
    bgUpload: "Subir imagen",
    bgColor: "Color sólido",
    bgReset: "Restaurar",
    addNote: "Añadir nota",
    noteText: "Texto",
    deleteNote: "Borrar nota",
    // Tipos de daño
    damageType: "Tipo de daño",
    damageType_slash: "Cortante",
    damageType_pierce: "Perforante",
    damageType_blunt: "Contundente",
    damageType_fire: "Fuego",
    damageType_cold: "Frío",
    damageType_acid: "Ácido",
    damageType_electric: "Electricidad",
    damageType_sonic: "Sónico",
    damageType_force: "Fuerza",
    damageType_negative: "Negativo",
    damageType_positive: "Positivo",
    damageType_mental: "Mental",
    resists: "Resistencias",
    immunities: "Inmunidades",
    vulnerabilities: "Vulnerabilidades",
    resistsHint: "Formato: \"fuego 5; frío 10; all 3\"",
    immunitiesHint: "Lista separada por comas: \"negativo, mental\"",
    vulnerabilitiesHint: "Lista separada por comas: \"frío\"",
    // Snapshots
    snapshots: "Snapshots",
    snapshotCreate: "Crear snapshot",
    snapshotName: "Nombre del snapshot",
    snapshotHelp: "Punto de retorno del estado completo. Útil antes de un turno crítico.",
    snapshotLoad: "Cargar",
    snapshotCreated: "Snapshot creado",
    snapshotLoaded: "Snapshot cargado",
    confirmLoadSnapshot: "¿Cargar el snapshot \"{n}\"? Se sobrescribirá el estado actual.",
    confirmDeleteSnapshot: "¿Borrar \"{n}\"?",
    placeTemplateHint: "Toca el mapa para colocar la plantilla",
    // Salvación en grupo
    groupSave: "Salv. grupo",
    dc: "CD",
    affectedTokens: "Tokens afectados",
    all: "Todos",
    none: "Ninguno",
    success: "éxito",
    failure: "fallo",
    save: "Salvación",
    confirmKnockoutPC: "¿Aplicar daño que dejará a {n} a 0 PG?",
    addDamagePart: "Añadir tipo de daño",
    lblFullAttack: "Full",
    fogBrush: "Pincel niebla",
    customEncounters: "Encuentros custom",
    importEncounter: "Importar encuentro",
    importEncounterHelp: "JSON con grid + tokens. Se guarda como plantilla local reutilizable.",
    encounterName: "Nombre del encuentro",
    encounterLoaded: "Encuentro cargado",
    confirmLoadEncounter: "¿Cargar \"{n}\"? Reemplaza el encuentro actual.",
    confirmDeleteEncounter: "¿Borrar \"{n}\"?",
    imported: "guardado",
    snapToGrid: "Casillas PF1e exactas",
    // Snapshot diff
    snapshotDiff: "Comparar snapshot",
    snapshotCompare: "Comparar con actual",
    diffAdded: "Tokens añadidos",
    diffRemoved: "Tokens quitados",
    diffHp: "Cambios HP",
    diffBuffs: "Cambios estados",
    diffEmpty: "Sin cambios",
    diffEmptySub: "El estado actual coincide con el snapshot.",
    close: "Cerrar",
    acTouch: "CA Toque",
    acFlat: "CA Despr.",
    // Maniobras de combate (PF1e)
    atkTrip: "Derribo",
    atkDisarm: "Desarmar",
    atkSunder: "Romper",
    atkGrapple: "Presa",
    atkBullrush: "Embestida",
    refreshFromSheet: "Refrescar desde la ficha",
    refreshOk: "PJ actualizado",
    rollSkill: "Tirar habilidad",
    hpSetPrompt: "HP exacto:",
    hpFullHeal: "Curar todo",
    hpHalfHeal: "Mitad",
    hpSet: "Establecer",
    // Log filters / export
    logSearch: "Buscar…",
    logCopy: "Copiar",
    logCopied: "Copiado",
    logExport: "Exportar",
    logNoMatches: "Sin coincidencias",
    logKind_all: "Todos",
    logKind_roll: "Tiradas",
    logKind_attack: "Ataques",
    logKind_damage: "Daño",
    logKind_heal: "Curación",
    logKind_save: "Salvación",
    logKind_turn: "Turno",
    logKind_kill: "KO",
    // Estado vital
    vitalDying: "Muriendo",
    vitalStable: "Estabilizado",
    vitalDead: "Muerto",
    stabilize: "Estabilizar",
    confirmKill: "Muerto",
    confirmDead: "¿Confirmar muerte de {n}?",
    confirmedDead: "confirmado muerto",
    stabilized: "estabilizado",
    vitalReset: "Reset",
    sounds: "Sonidos",
    soundsHelp: "Crit, KO y nueva ronda",
    on: "On",
    off: "Off",
    moveUp: "Subir",
    moveDown: "Bajar",
    streamMode: "Modo TV/streamer",
    streamHelp: "Oculta controles, deja solo mapa + iniciativa para mostrar al grupo",
    streamEnter: "Activar",
    streamExit: "Salir",
    notifs: "Notificaciones",
    notifsHelp: "Avisos del navegador cuando la pestaña está oculta (KO, ronda nueva)",
    notifsDenied: "Permiso denegado por el navegador",
    themeAuto: "Tema automático",
    themeAutoHelp: "Tema oscuro de noche (20:00–08:00), claro de día",
    spellSlots: "Espacios de conjuro",
    reactionPrompt: "¿Reacción de",
    zTop: "Capa al frente",
    zBottom: "Capa atrás",
  },
  en: {
    appTitle: "Master Mode",
    exit: "Exit",
    round: "Round",
    turn: "Turn",
    initiative: "Initiative",
    bestiary: "Bestiary",
    notes: "Notes",
    log: "Log",
    settings: "Settings",
    map: "Map",
    nextTurn: "Next turn",
    endRound: "End round",
    addToken: "Add token",
    actions: "Actions",
    reaction: "Reaction",
    movement: "Movement",
    hp: "HP",
    ac: "AC",
    fort: "Fort",
    ref: "Ref",
    will: "Will",
    perception: "Percept.",
    speed: "Speed",
    save: "Save",
    attacks: "Attacks",
    skills: "Skills",
    abilities: "Abilities",
    description: "Description",
    buffs: "Buffs",
    debuffs: "Conditions",
    custom: "Custom",
    duration: "Duration",
    permanent: "permanent",
    expired: "has expired",
    damage: "Damage",
    heal: "Heal",
    add: "Add",
    drag: "Drag to place",
    selectToken: "Tap a token to see details",
    encounter: "Encounter",
    dim: "dim",
    statusFrightened: "Frightened",
    statusHasted: "Hasted",
    statusProne: "Prone",
    statusFlatFooted: "Flat-footed",
    statusInspired: "Inspired",
    statusPoisoned: "Poisoned",
    statusGrabbed: "Grabbed",
    statusBlinded: "Blinded",
    statusStunned: "Stunned",
    statusParalyzed: "Paralyzed",
    statusDeafened: "Deafened",
    statusSickened: "Sickened",
    statusShaken: "Shaken",
    statusDazzled: "Dazzled",
    statusFatigued: "Fatigued",
    statusExhausted: "Exhausted",
    statusEntangled: "Entangled",
    statusBleeding: "Bleeding",
    statusBlessed: "Blessed",
    statusShielded: "Shielded",
    statusInvisible: "Invisible",
    statusRaging: "Raging",
    statusRegenerating: "Regenerating",
    statusConcealed: "Concealed",
    rounds: "rounds",
    melee: "Melee",
    ranged: "Ranged",
    crit: "Crit",
    forest: "Forest ambush",
    /* MST-J02 */
    emptyEncounter: "Empty encounter",
    emptyEncounterHelp: "Clears tokens, fog and templates. Starts at R1 with the current map.",
    emptyEncounterAction: "Empty encounter",
    emptyEncounterConfirm: "Start an empty encounter? Tokens, fog and templates will be cleared.",
    /* MST-J05 */
    snapToGrid: "Snap to grid",
    snapToGridHelp: "Tokens align to the cell center when moved",
    /* MST-J10 */
    confirmRemovePCFromSheet: "You are about to remove {n}, imported from the sheet. Continue?",
    /* MST-J07 */
    tokenColor: "Token color",
    tokenPhoto: "Photo",
    replace: "Replace",
    remove: "Remove",
    dungeon: "Defiled throne room",
    urban: "Market square",
    encDesc: "Tap any token to open its card. Long-press to drag.",
    layoutCompact: "Compact",
    layoutExpanded: "Expanded",
    layoutTabs: "Tabs",
    initTop: "Top strip",
    initRail: "Side rail",
    initFloat: "Floating",
    densityMin: "Minimal",
    densityRich: "Rich",
    viewMap: "Map view",
    viewList: "List view",
    listMode: "List only",
    mapMode: "Map",
    sortByIni: "By initiative",
    diceRoller: "Dice roller",
    advantage: "Advantage",
    disadvantage: "Disadvantage",
    roll: "Roll",
    critNatural: "NAT 20!",
    fumbleNatural: "FUMBLE!",
    logEmpty: "No activity",
    logEmptySub: "Rolls and events will appear here.",
    events: "events",
    clear: "Clear",
    rolled: "rolled",
    attacks_v: "attacks with",
    deals: "deals",
    healed: "heals",
    nextTurnLog: "starts their turn",
    bestiaryStub: "Bestiary",
    bestiaryStubSub: "Creature catalog (coming soon)",
    settingsStub: "Settings",
    settingsStubSub: "Theme, language, encounter options",
    lblExit: "Exit",
    lblPrev: "Prev",
    lblNextTurn: "Next",
    lblView: "View",
    lblDice: "Dice",
    lblBestiary: "Best.",
    lblAction: "Action",
    lblReaction: "Reaction",
    lblRoll: "Roll",
    lblAddBuff: "Add status",
    removeToken: "Remove combatant",
    confirmRemove: "Remove {n} from the encounter?",
    editName: "Combatant name",
    changePhoto: "Change photo",
    addCombatant: "Add combatant",
    rollAllIni: "Roll all",
    delay: "Delay",
    noCombatants: "No combatants",
    noCombatantsSub: "Tap Add to start",
    kind: "Type",
    kindPJ: "PC",
    kindAlly: "Ally",
    kindEnemy: "Enemy",
    kindPet: "Pet",
    kindNeutral: "Neutral",
    hp: "HP",
    ac: "AC",
    cancel: "Cancel",
    lblAdd: "Add",
    lblCenter: "Center",
    // Edit token
    editToken: "Edit combatant",
    edit: "Edit",
    duplicate: "Duplicate",
    save: "Save",
    color: "Color",
    // Bestiary
    searchCreature: "Search creature…",
    newCreature: "New",
    addToEncounter: "Add to encounter",
    bestiaryEmpty: "Bestiary empty",
    bestiaryEmptySub: "Tap ＋ to create a creature",
    noMatch: "No results",
    noMatchSub: "Try another name",
    confirmDeleteEntry: "Delete {n} from the bestiary?",
    delete: "Delete",
    edit: "Edit",
    allKinds: "All",
    saveAsCreature: "Save to bestiary",
    savedToBestiary: "Saved to bestiary",
    cr: "CR",
    tag: "Tag",
    notes: "Notes",
    // Settings
    appearance: "Appearance",
    theme: "Theme",
    language: "Language",
    gameTable: "Game table",
    gridLabel: "Grid",
    gridSquare: "Square",
    gridHex: "Hex",
    resetEncounter: "Reset encounter",
    resetHelp: "Return to the original state of the chosen encounter. You lose added tokens, damage and conditions.",
    confirmReset: "Reset encounter? Changes will be lost.",
    resetOk: "Encounter reset",
    persistence: "Master Info",
    savedYes: "State saved on this device",
    savedNo: "No saved state",
    savedAt: "Last save",
    savedHelp: "The encounter will save automatically when you make changes.",
    exportJson: "Export JSON",
    importJson: "Import JSON",
    exportHelp: "Export the current state to a .json file. Import to load a saved one.",
    exportOk: "File downloaded",
    importOk: "Encounter imported",
    importErr: "Import error",
    clearSaved: "Clear saved state",
    confirmClearSaved: "Clear the saved state on this device? The current encounter will remain until you reload.",
    clearedOk: "Saved state cleared",
    about: "About",
    aboutTagline: "Master screen for tabletop RPG combat",
    localOnly: "Data lives only on this device",
    // Damage / save flow
    applyDamage: "Apply damage",
    damageExpr: "Damage",
    target: "Target",
    miss: "Miss / no damage",
    missLog: "no damage",
    rollSave: "Roll save",
    koToast: "is down",
    lblResetZoom: "Reset",
    addAttack: "Add attack",
    attackName: "Name",
    // Sheet integration
    fichaIntegration: "Sheet integration",
    importFromSheet: "Import PCs",
    importFromSheetHelp: "Request active PCs from the parent window. If standalone, try to read the sheet state from this device.",
    importFromSheetOk: "PCs imported",
    importFromSheetEmpty: "No PCs available",
    importFromSheetErr: "Import error",
    importNoPJs: "No PCs available",
    importPJsOk: "PCs imported",
    importPJFromFile: "From JSON",
    // Advanced map
    lblMeasure: "Measure",
    lblTemplates: "Templates",
    lblFog: "Fog",
    lblBackground: "Background",
    lblNote: "Note",
    measureHint: "Tap two points or tokens to measure",
    templateCircle: "Burst",
    templateCone: "Cone",
    templateLine: "Line",
    templateRadius: "Radius (ft)",
    templateLength: "Length (ft)",
    templateAngle: "Angle",
    fogHint: "Tap the map to toggle fog",
    fogClear: "Clear fog",
    fogReveal: "Reveal all",
    fogHide: "Hide all",
    tplClear: "Clear templates",
    notesClear: "Clear notes",
    bgChange: "Change background",
    bgUpload: "Upload image",
    bgColor: "Solid color",
    bgReset: "Reset",
    addNote: "Add note",
    noteText: "Text",
    deleteNote: "Delete note",
    // Damage types
    damageType: "Damage type",
    damageType_slash: "Slashing",
    damageType_pierce: "Piercing",
    damageType_blunt: "Bludgeoning",
    damageType_fire: "Fire",
    damageType_cold: "Cold",
    damageType_acid: "Acid",
    damageType_electric: "Electric",
    damageType_sonic: "Sonic",
    damageType_force: "Force",
    damageType_negative: "Negative",
    damageType_positive: "Positive",
    damageType_mental: "Mental",
    resists: "Resistances (DR)",
    immunities: "Immunities",
    vulnerabilities: "Vulnerabilities",
    resistsHint: "Format: \"fire 5; cold 10; all 3\"",
    immunitiesHint: "Comma-separated: \"negative, mental\"",
    vulnerabilitiesHint: "Comma-separated: \"cold\"",
    // Snapshots
    snapshots: "Snapshots",
    snapshotCreate: "Create snapshot",
    snapshotName: "Snapshot name",
    snapshotHelp: "Save a full-state restore point. Useful before a critical turn.",
    snapshotLoad: "Load",
    snapshotCreated: "Snapshot saved",
    snapshotLoaded: "Snapshot loaded",
    confirmLoadSnapshot: "Load snapshot \"{n}\"? Current state will be overwritten.",
    confirmDeleteSnapshot: "Delete \"{n}\"?",
    placeTemplateHint: "Tap the map to place the template",
    // Group save
    groupSave: "Group save",
    dc: "DC",
    affectedTokens: "Affected tokens",
    all: "All",
    none: "None",
    success: "success",
    failure: "fail",
    confirmKnockoutPC: "Apply damage that will drop {n} to 0 HP?",
    addDamagePart: "Add damage part",
    lblFullAttack: "Full",
    fogBrush: "Fog brush",
    customEncounters: "Custom encounters",
    importEncounter: "Import encounter",
    importEncounterHelp: "JSON with grid + tokens. Saved as a local reusable template.",
    encounterName: "Encounter name",
    encounterLoaded: "Encounter loaded",
    confirmLoadEncounter: "Load \"{n}\"? Replaces the current encounter.",
    confirmDeleteEncounter: "Delete \"{n}\"?",
    imported: "saved",
    snapToGrid: "PF1e grid-exact",
    // Snapshot diff
    snapshotDiff: "Compare snapshot",
    snapshotCompare: "Compare with current",
    diffAdded: "Tokens added",
    diffRemoved: "Tokens removed",
    diffHp: "HP changes",
    diffBuffs: "Status changes",
    diffEmpty: "No changes",
    diffEmptySub: "Current state matches the snapshot.",
    close: "Close",
    acTouch: "Touch AC",
    acFlat: "Flat-foot",
    // Combat maneuvers (PF1e)
    atkTrip: "Trip",
    atkDisarm: "Disarm",
    atkSunder: "Sunder",
    atkGrapple: "Grapple",
    atkBullrush: "Bull rush",
    refreshFromSheet: "Refresh from sheet",
    refreshOk: "PC updated",
    rollSkill: "Roll skill",
    hpSetPrompt: "Exact HP:",
    hpFullHeal: "Full heal",
    hpHalfHeal: "Half",
    hpSet: "Set",
    // Log filters / export
    logSearch: "Search…",
    logCopy: "Copy",
    logCopied: "Copied",
    logExport: "Export",
    logNoMatches: "No matches",
    logKind_all: "All",
    logKind_roll: "Rolls",
    logKind_attack: "Attacks",
    logKind_damage: "Damage",
    logKind_heal: "Heal",
    logKind_save: "Save",
    logKind_turn: "Turn",
    logKind_kill: "KO",
    // Vital state
    vitalDying: "Dying",
    vitalStable: "Stable",
    vitalDead: "Dead",
    stabilize: "Stabilize",
    confirmKill: "Dead",
    confirmDead: "Confirm death of {n}?",
    confirmedDead: "confirmed dead",
    stabilized: "stabilized",
    vitalReset: "Reset",
    sounds: "Sounds",
    soundsHelp: "Crit, KO and new round",
    on: "On",
    off: "Off",
    moveUp: "Move up",
    moveDown: "Move down",
    streamMode: "TV/stream mode",
    streamHelp: "Hides controls, leaves only map + initiative for streaming/group display",
    streamEnter: "Enable",
    streamExit: "Exit",
    notifs: "Notifications",
    notifsHelp: "Browser alerts when the tab is hidden (KO, new round)",
    notifsDenied: "Permission denied by the browser",
    themeAuto: "Auto theme",
    themeAutoHelp: "Dark theme at night (20:00–08:00), light during day",
    spellSlots: "Spell slots",
    reactionPrompt: "Reaction by",
    zTop: "Bring to front",
    zBottom: "Send to back",
  }
};

// Token color helpers — semantic, not literal palette
const COLOR = {
  player: "#3a78c8",     // azul aliado
  ally:   "#5aa86a",
  goblin: "#a83828",     // rojo
  hobgoblin: "#7a2828",
  ogre: "#88481a",
  cultist: "#5a2078",
  skeleton: "#bcb098",
  boss: "#1a1a1a",
  civilian: "#8a8a8a",
  rat: "#5a4030",
  wolf: "#605040",
};

const ENCOUNTERS = {
  /* MST-J02: encuentro vacío — punto de partida limpio en R1 */
  empty: {
    nameKey: "emptyEncounter",
    grid: { w: 1200, h: 900 },
    zones: [],
    tokens: [],
    activeId: null,
  },
  forest: {
    nameKey: "forest",
    grid: { w: 1200, h: 900 },
    zones: [
      { id:"z1", kind:"difficult", x: 80, y: 120, w: 240, h: 180, label:"Maleza" },
      { id:"z2", kind:"difficult", x: 720, y: 540, w: 300, h: 200, label:"Raíces" },
      { id:"z3", kind:"toxic",     x: 480, y: 300, w: 180, h: 140, label:"Esporas" },
    ],
    tokens: [
      { id:"p1", name:"Lyra (Pícara)",   short:"L", color: COLOR.player, x: 200, y: 460, hp:42, hpMax:42, ini:21, ac:19, fort:6, ref:11, will:5, per:9, spd:30, kind:"player" },
      { id:"p2", name:"Brand (Guerr.)",  short:"B", color: COLOR.player, x: 260, y: 540, hp:58, hpMax:58, ini:14, ac:22, fort:9, ref:5, will:4, per:6, spd:25, kind:"player" },
      { id:"p3", name:"Vey (Maga)",      short:"V", color: COLOR.player, x: 160, y: 580, hp:30, hpMax:30, ini:17, ac:16, fort:4, ref:7, will:9, per:7, spd:30, kind:"player" },
      { id:"p4", name:"Old Tam (Clér.)", short:"T", color: COLOR.player, x: 220, y: 620, hp:40, hpMax:40, ini:11, ac:18, fort:8, ref:5, will:10, per:8, spd:25, kind:"player" },
      { id:"g1", name:"Goblin 1",        short:"1", color: COLOR.goblin, x: 760, y: 320, hp:6, hpMax:6, ini:18, ac:16, fort:1, ref:6, will:0, per:5, spd:25, kind:"npc", initialBuffs:[{ key:"frightened", n:1, kind:"debuff" }] },
      { id:"g2", name:"Goblin 2",        short:"2", color: COLOR.goblin, x: 820, y: 380, hp:6, hpMax:6, ini:19, ac:16, fort:1, ref:6, will:0, per:5, spd:25, kind:"npc", initialBuffs:[{ key:"hasted", rounds:3, kind:"buff" }] },
      { id:"g3", name:"Goblin 3",        short:"3", color: COLOR.goblin, x: 880, y: 320, hp:6, hpMax:6, ini:13, ac:16, fort:1, ref:6, will:0, per:5, spd:25, kind:"npc" },
      { id:"g4", name:"Goblin 4",        short:"4", color: COLOR.goblin, x: 900, y: 420, hp:6, hpMax:6, ini:15, ac:16, fort:1, ref:6, will:0, per:5, spd:25, kind:"npc" },
      { id:"w1", name:"Lobo huargo",     short:"W", color: COLOR.wolf,   x: 940, y: 280, hp:30, hpMax:30, ini:16, ac:14, fort:7, ref:7, will:3, per:9, spd:50, kind:"npc" },
    ],
    activeId: "g1",
  },
  dungeon: {
    nameKey: "dungeon",
    grid: { w: 1200, h: 900 },
    zones: [
      { id:"z1", kind:"toxic", x: 540, y: 240, w: 200, h: 200, label:"Vapores" },
      { id:"z2", kind:"fire",  x: 280, y: 500, w: 180, h: 120, label:"Brasas" },
      { id:"z3", kind:"aura",  x: 800, y: 400, w: 220, h: 220, label:"Aura sagrada" },
    ],
    tokens: [
      { id:"p1", name:"Lyra (Pícara)",   short:"L", color: COLOR.player, x: 200, y: 720, hp:42, hpMax:42, ini:21, ac:19, fort:6, ref:11, will:5, per:9, spd:30, kind:"player" },
      { id:"p2", name:"Brand (Guerr.)",  short:"B", color: COLOR.player, x: 260, y: 760, hp:48, hpMax:58, ini:14, ac:22, fort:9, ref:5, will:4, per:6, spd:25, kind:"player" },
      { id:"p3", name:"Vey (Maga)",      short:"V", color: COLOR.player, x: 160, y: 800, hp:18, hpMax:30, ini:17, ac:16, fort:4, ref:7, will:9, per:7, spd:30, kind:"player", initialBuffs:[{ key:"poisoned", n:1, kind:"debuff" }] },
      { id:"p4", name:"Old Tam (Clér.)", short:"T", color: COLOR.player, x: 220, y: 820, hp:40, hpMax:40, ini:11, ac:18, fort:8, ref:5, will:10, per:8, spd:25, kind:"player" },
      { id:"c1", name:"Cultista 1",      short:"1", color: COLOR.cultist, x: 700, y: 580, hp:24, hpMax:24, ini:10, ac:15, fort:3, ref:4, will:6, per:4, spd:30, kind:"npc" },
      { id:"c2", name:"Cultista 2",      short:"2", color: COLOR.cultist, x: 760, y: 620, hp:24, hpMax:24, ini:9, ac:15, fort:3, ref:4, will:6, per:4, spd:30, kind:"npc" },
      { id:"sk1", name:"Esqueleto 1",    short:"E", color: COLOR.skeleton, x: 360, y: 360, hp:14, hpMax:14, ini:12, ac:14, fort:2, ref:5, will:0, per:3, spd:30, kind:"npc" },
      { id:"sk2", name:"Esqueleto 2",    short:"E", color: COLOR.skeleton, x: 420, y: 320, hp:14, hpMax:14, ini:8, ac:14, fort:2, ref:5, will:0, per:3, spd:30, kind:"npc" },
      { id:"boss", name:"Heraldo Necr.", short:"♛", color: COLOR.boss, x: 880, y: 480, hp:120, hpMax:140, ini:15, ac:24, fort:12, ref:9, will:14, per:12, spd:30, kind:"boss", initialBuffs:[{ key:"inspired", rounds:5, kind:"buff" }, { key:"flatFooted", kind:"debuff" }] },
    ],
    activeId: "boss",
  },
  urban: {
    nameKey: "urban",
    grid: { w: 1200, h: 900 },
    zones: [
      { id:"z1", kind:"difficult", x: 480, y: 380, w: 240, h: 100, label:"Puestos" },
    ],
    tokens: [
      { id:"p1", name:"Lyra (Pícara)",   short:"L", color: COLOR.player, x: 240, y: 540, hp:42, hpMax:42, ini:21, ac:19, fort:6, ref:11, will:5, per:9, spd:30, kind:"player" },
      { id:"p2", name:"Brand (Guerr.)",  short:"B", color: COLOR.player, x: 300, y: 580, hp:58, hpMax:58, ini:14, ac:22, fort:9, ref:5, will:4, per:6, spd:25, kind:"player" },
      { id:"p3", name:"Vey (Maga)",      short:"V", color: COLOR.player, x: 200, y: 620, hp:30, hpMax:30, ini:17, ac:16, fort:4, ref:7, will:9, per:7, spd:30, kind:"player" },
      { id:"p4", name:"Old Tam (Clér.)", short:"T", color: COLOR.player, x: 260, y: 660, hp:40, hpMax:40, ini:11, ac:18, fort:8, ref:5, will:10, per:8, spd:25, kind:"player" },
      { id:"hb1", name:"Hobgoblin",      short:"H", color: COLOR.hobgoblin, x: 820, y: 520, hp:28, hpMax:28, ini:14, ac:18, fort:5, ref:5, will:3, per:6, spd:30, kind:"npc", initialBuffs:[{ key:"hasted", rounds:2, kind:"buff" }] },
      { id:"hb2", name:"Hobgoblin",      short:"H", color: COLOR.hobgoblin, x: 880, y: 580, hp:28, hpMax:28, ini:13, ac:18, fort:5, ref:5, will:3, per:6, spd:30, kind:"npc" },
      { id:"og1", name:"Bruto Ogro",     short:"O", color: COLOR.ogre, x: 940, y: 480, hp:65, hpMax:65, ini:6, ac:17, fort:11, ref:3, will:5, per:5, spd:40, kind:"npc", initialBuffs:[{ key:"frightened", n:2, kind:"debuff" }] },
      { id:"civ1", name:"Mercader",      short:"M", color: COLOR.civilian, x: 540, y: 420, hp:8, hpMax:8, ini:5, ac:10, fort:1, ref:1, will:2, per:1, spd:30, kind:"civ" },
      { id:"civ2", name:"Niño",          short:"N", color: COLOR.civilian, x: 600, y: 460, hp:4, hpMax:4, ini:8, ac:10, fort:0, ref:2, will:1, per:1, spd:25, kind:"civ" },
    ],
    activeId: "hb1",
  }
};

// Default attacks/buffs per token kind. We tag by id pattern.
const ATTACK_TABLE = {
  goblin: [
    { name:"Cimitarra", tohit:"+5", dmg:"1d6+1 cortante", type:"melee" },
    { name:"Arco corto", tohit:"+6", dmg:"1d6 perforante (60ft)", type:"ranged" },
    { name:"Mordisco", tohit:"+3", dmg:"1d4 perforante", type:"melee" },
  ],
  player: [
    { name:"Daga +1", tohit:"+11", dmg:"1d4+5 perforante", type:"melee" },
    { name:"Disparo certero", tohit:"+9", dmg:"1d6+3 perf.", type:"ranged" },
  ],
  hobgoblin: [
    { name:"Espada larga", tohit:"+8", dmg:"1d8+3 cortante", type:"melee" },
    { name:"Jabalina", tohit:"+7", dmg:"1d6+3 perf. (30ft)", type:"ranged" },
  ],
  ogre: [
    { name:"Garrote enorme", tohit:"+12", dmg:"2d8+9 contundente", type:"melee" },
    { name:"Roca", tohit:"+8", dmg:"2d6+9 cont. (60ft)", type:"ranged" },
  ],
  cultist: [
    { name:"Daga ritual", tohit:"+5", dmg:"1d4+1 perf. + maldición", type:"melee" },
    { name:"Toque profano", tohit:"+6", dmg:"1d8 negativo", type:"melee" },
  ],
  skeleton: [
    { name:"Garra", tohit:"+4", dmg:"1d4+2 cortante", type:"melee" },
    { name:"Mordisco", tohit:"+4", dmg:"1d3+2 perforante", type:"melee" },
  ],
  boss: [
    { name:"Guadaña espectral", tohit:"+18", dmg:"2d10+8 + 2d6 negativo", type:"melee" },
    { name:"Mirada paralizante", tohit:"DC 22", dmg:"Vol. paralizado 1d4r", type:"ranged" },
    { name:"Estallido necrótico", tohit:"DC 22", dmg:"6d6 negativo (estallido 30ft)", type:"ranged" },
  ],
  wolf: [
    { name:"Mordisco", tohit:"+8", dmg:"1d8+5 perf. + derribo", type:"melee" },
  ],
  civ: [
    { name:"Improvisado", tohit:"+0", dmg:"1d3 cont.", type:"melee" },
  ],
};

// Tipos de daño Pathfinder 1e simplificados. La key es el id interno
// (sin tildes / espacios) y el label se resuelve via I18N[lang][damageType_<key>].
const DAMAGE_TYPES = [
  'slash', 'pierce', 'blunt',
  'fire', 'cold', 'acid', 'electric', 'sonic',
  'force', 'negative', 'positive', 'mental',
];

// Aplica resistencias/inmunidades/vulnerabilidades del token al daño raw.
// Devuelve {final, note} donde note describe la modificación (para el log).
//
// token.dr: {[type]: number} — reduce daño de ese tipo en N puntos
//   ('all' aplica a cualquier tipo, simulando DR/--)
// token.immune: array de strings — daño anulado a 0
// token.vuln:   array de strings — daño x1.5
function applyDamageType(token, raw, type) {
  const k = String(type || '').toLowerCase();
  const out = { final: raw, note: '' };
  const immune = Array.isArray(token && token.immune) ? token.immune : [];
  const vuln   = Array.isArray(token && token.vuln)   ? token.vuln   : [];
  const dr     = (token && token.dr) || {};
  if (immune.indexOf(k) >= 0) {
    return { final: 0, note: 'inmune a ' + k };
  }
  let final = raw;
  if (vuln.indexOf(k) >= 0) {
    final = Math.floor(final * 1.5);
    out.note = 'vulnerable a ' + k + ' (×1.5)';
  }
  // DR específica primero, luego DR/all
  const drType = (typeof dr[k] === 'number') ? dr[k] : 0;
  const drAll  = (typeof dr.all === 'number') ? dr.all : 0;
  const reduce = drType + drAll;
  if (reduce > 0) {
    const before = final;
    final = Math.max(0, final - reduce);
    if (final !== before) {
      out.note = (out.note ? out.note + ', ' : '') + 'DR ' + reduce + ' (' + (drType ? k : 'all') + ')';
    }
  }
  out.final = final;
  return out;
}

// Mapa kind → conjunto de ataques por defecto. Cubre tanto la taxonomía
// del seed (player/npc/civ) como la del UI (pj/ally/enemy/pet/neutral).
const KIND_TO_ATTACK_KEY = {
  player: 'player', pj: 'player',
  ally: 'player',
  enemy: 'goblin', npc: 'goblin',
  pet: 'wolf',
  civ: 'civ', neutral: 'civ',
  boss: 'boss',
};

const GENERIC_ATTACKS = [
  { name: "Improvisado", tohit: "+0", dmg: "1d3 cont.", type: "melee" },
];

function defaultAttacksForKind(kind) {
  const key = KIND_TO_ATTACK_KEY[kind];
  if (key && ATTACK_TABLE[key]) return ATTACK_TABLE[key].map(a => ({ ...a }));
  return GENERIC_ATTACKS.map(a => ({ ...a }));
}

// attacksFor: orden de prioridad
//   1) token.attacks (propio del token / bestiario)
//   2) id-pattern legacy (sólo cubre los seeds de ENCOUNTERS)
//   3) defaultAttacksForKind(token.kind)
function attacksFor(token) {
  if (Array.isArray(token.attacks) && token.attacks.length) return token.attacks;
  const id = token.id || '';
  if (id.startsWith("g") && !id.startsWith("og")) return ATTACK_TABLE.goblin;
  if (id === "boss") return ATTACK_TABLE.boss;
  if (id.startsWith("hb")) return ATTACK_TABLE.hobgoblin;
  if (id.startsWith("og")) return ATTACK_TABLE.ogre;
  if (id.startsWith("c"))  return ATTACK_TABLE.cultist;
  if (id.startsWith("sk")) return ATTACK_TABLE.skeleton;
  if (id.startsWith("w"))  return ATTACK_TABLE.wolf;
  if (id.startsWith("p"))  return ATTACK_TABLE.player;
  if (id.startsWith("civ")) return ATTACK_TABLE.civ;
  return defaultAttacksForKind(token.kind);
}

// Los buffs/estados iniciales viven en `token.initialBuffs` (parte del propio
// token). DEFAULT_BUFFS sigue exportado vacío para compatibilidad con código
// que pueda importarlo, pero ya no es la fuente de verdad.
const DEFAULT_BUFFS = {};

function buffsFor(token) {
  return Array.isArray(token && token.initialBuffs) ? token.initialBuffs : [];
}

// =====================================================================
// BUFF / CONDITION LIBRARY — presets seleccionables desde el modal.
// Cada entrada: { key, kind: 'buff'|'debuff', icon }
// El label se resuelve via buffLabel(); si la key no está en el mapa
// se muestra tal cual (útil para entradas custom).
// =====================================================================
const BUFF_LIBRARY = {
  // Estados negativos clásicos
  debuffs: [
    { key: "frightened",   icon: "😱" },
    { key: "prone",        icon: "🛌" },
    { key: "flatFooted",   icon: "😶" },
    { key: "poisoned",     icon: "🧪" },
    { key: "grabbed",      icon: "🤼" },
    { key: "blinded",      icon: "🙈" },
    { key: "stunned",      icon: "💫" },
    { key: "paralyzed",    icon: "🥶" },
    { key: "deafened",     icon: "🙉" },
    { key: "sickened",     icon: "🤢" },
    { key: "shaken",       icon: "😬" },
    { key: "dazzled",      icon: "🌟" },
    { key: "fatigued",     icon: "😪" },
    { key: "exhausted",    icon: "🥵" },
    { key: "entangled",    icon: "🕸️" },
    { key: "bleeding",     icon: "🩸" },
  ],
  // Estados positivos / buffs
  buffs: [
    { key: "hasted",       icon: "💨" },
    { key: "inspired",     icon: "🎵" },
    { key: "blessed",      icon: "✨" },
    { key: "shielded",     icon: "🛡️" },
    { key: "invisible",    icon: "👻" },
    { key: "raging",       icon: "🔥" },
    { key: "regenerating", icon: "💚" },
    { key: "concealed",    icon: "🌫️" },
  ],
};

// Inverso de buffLabel: dado un label libre (la condición tal cual la
// muestra la ficha en su idioma), intenta resolver la `key` interna del
// modelo de buffs del master. Construye el mapa una vez por idioma.
const _BUFF_LABEL_TO_KEY = {};
function _buildLabelMap(lang) {
  if (_BUFF_LABEL_TO_KEY[lang]) return _BUFF_LABEL_TO_KEY[lang];
  const t = I18N[lang] || I18N.es;
  const map = {};
  // Recorre todas las claves I18N que empiezan por "status"
  Object.keys(t).forEach(k => {
    if (!k.startsWith('status')) return;
    // status<KEY> → key sin prefijo, primera letra minúsc.
    const key = k.slice(6).charAt(0).toLowerCase() + k.slice(7);
    const label = t[k];
    if (label) map[label.toLowerCase().trim()] = key;
  });
  _BUFF_LABEL_TO_KEY[lang] = map;
  return map;
}
function buffKeyFromLabel(label, lang) {
  if (!label) return null;
  const norm = String(label).toLowerCase().trim();
  // Quitar tildes / guiones para emparejar mejor
  const stripped = norm.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[-_]/g, ' ');
  const langs = ['es', 'en'];
  for (const lng of langs) {
    const map = _buildLabelMap(lng);
    if (map[norm]) return map[norm];
    if (map[stripped]) return map[stripped];
    // Búsqueda parcial para "Asustado 1" → "frightened"
    for (const k of Object.keys(map)) {
      if (norm.startsWith(k) || stripped.startsWith(k)) return map[k];
    }
  }
  return null;
}

function buffLabel(buff, lang) {
  const t = I18N[lang];
  const map = {
    frightened: t.statusFrightened,
    hasted: t.statusHasted,
    prone: t.statusProne,
    flatFooted: t.statusFlatFooted,
    inspired: t.statusInspired,
    poisoned: t.statusPoisoned,
    grabbed: t.statusGrabbed,
    blinded: t.statusBlinded,
    stunned: t.statusStunned,
    paralyzed: t.statusParalyzed,
    deafened: t.statusDeafened,
    sickened: t.statusSickened,
    shaken: t.statusShaken,
    dazzled: t.statusDazzled,
    fatigued: t.statusFatigued,
    exhausted: t.statusExhausted,
    entangled: t.statusEntangled,
    bleeding: t.statusBleeding,
    blessed: t.statusBlessed,
    shielded: t.statusShielded,
    invisible: t.statusInvisible,
    raging: t.statusRaging,
    regenerating: t.statusRegenerating,
    concealed: t.statusConcealed,
  };
  let s = map[buff.key] || buff.label || buff.key;
  if (buff.n != null) s += " " + buff.n;
  if (buff.rounds != null) s += " (" + buff.rounds + " " + t.rounds + ")";
  return s;
}

window.MstData = { I18N, COLOR, ENCOUNTERS, ATTACK_TABLE, attacksFor, defaultAttacksForKind, KIND_TO_ATTACK_KEY, DEFAULT_BUFFS, buffsFor, buffLabel, buffKeyFromLabel, BUFF_LIBRARY, DAMAGE_TYPES, applyDamageType };
