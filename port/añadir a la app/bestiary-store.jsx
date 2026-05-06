// =====================================================================
// BESTIARY STORE — catálogo persistente de criaturas
// Independiente del encuentro: vive en localStorage bajo otra clave.
// Cada criatura es una "plantilla" de token (sin x/y/hp actual; solo hpMax).
// =====================================================================
const MST_BESTIARY_KEY = 'mst-bestiary-v1';

// Lo mínimo que define una criatura como plantilla.
// Pensado para Pathfinder 1e pero genérico:
//   id (interno), name, kind (pj/ally/enemy/pet/neutral), color,
//   hpMax, ac, ini, iniMod, fort, ref, will, per, spd,
//   cr (challenge rating, opcional), tag (etiqueta libre, p.ej. "humanoide"),
//   notes (string libre), photo (dataURL opcional)
//
// El "id" del bestiario va con prefijo `b_` para no colisionar con ids de tokens.

function defaultSeed() {
  // Tomamos las criaturas de los encuentros como base, normalizadas.
  // Solo se siembra una vez; luego el usuario edita libremente.
  const list = [];
  const seen = new Set();
  const enc = window.MstData.ENCOUNTERS;
  const push = (tk, extras = {}) => {
    // Clave de dedupe por nombre+kind para no meter 4 goblins idénticos.
    const k = (tk.name || '').toLowerCase().trim() + '|' + (tk.kind || '');
    if (seen.has(k)) return;
    seen.add(k);
    const newKind = tk.kind === 'player' ? 'pj' : tk.kind === 'civ' ? 'neutral' : tk.kind === 'boss' ? 'enemy' : (tk.kind || 'enemy');
    // Inferimos los ataques desde el id-pattern legacy del seed; quedan
    // congelados como copia, así si después editamos goblin no afecta a
    // las plantillas guardadas.
    const seedAttacks = window.MstData.attacksFor(tk).map(a => ({ ...a }));
    list.push({
      id: 'b_' + (list.length + 1).toString().padStart(3, '0'),
      name: tk.name,
      kind: newKind,
      color: tk.color,
      hpMax: tk.hpMax || tk.hp || 10,
      ac: tk.ac || 10,
      ini: tk.ini || 10,
      iniMod: 0,
      fort: tk.fort || 0,
      ref:  tk.ref  || 0,
      will: tk.will || 0,
      per:  tk.per  || 0,
      spd:  tk.spd  || 30,
      attacks: seedAttacks,
      cr:   extras.cr || '',
      tag:  extras.tag || '',
      notes: '',
    });
  };
  Object.values(enc).forEach(e => e.tokens.forEach(tk => push(tk)));
  return list;
}

function loadBestiary() {
  try {
    const raw = localStorage.getItem(MST_BESTIARY_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      if (Array.isArray(data)) return data;
    }
  } catch (e) { console.warn('[mst] loadBestiary failed', e); }
  // No hay nada: sembramos
  const seed = defaultSeed();
  saveBestiary(seed);
  return seed;
}

function saveBestiary(list) {
  try {
    localStorage.setItem(MST_BESTIARY_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    console.warn('[mst] saveBestiary failed', e);
    return false;
  }
}

function clearBestiary() {
  try { localStorage.removeItem(MST_BESTIARY_KEY); return true; }
  catch(e) { return false; }
}

// Convertir una entrada del bestiario en un token instanciable
function entryToToken(entry, opts) {
  opts = opts || {};
  const id = opts.id || ('b' + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36));
  const atk = (Array.isArray(entry.attacks) && entry.attacks.length)
    ? entry.attacks.map(a => ({ ...a }))
    : window.MstData.defaultAttacksForKind(entry.kind);
  return {
    id,
    name: entry.name,
    short: (entry.name || 'X').trim().slice(0, 2).toUpperCase(),
    kind: entry.kind,
    color: entry.color,
    photo: entry.photo,
    x: opts.x || 0,
    y: opts.y || 0,
    hp: entry.hpMax,
    hpMax: entry.hpMax,
    ac: entry.ac,
    ini: entry.ini,
    iniMod: entry.iniMod || 0,
    fort: entry.fort || 0,
    ref:  entry.ref  || 0,
    will: entry.will || 0,
    per:  entry.per  || 0,
    spd:  entry.spd  || 30,
    attacks: atk,
    fromBestiary: entry.id,
  };
}

// Crear una entrada del bestiario a partir de un token del mapa.
// El llamante debe pasar el id (calculado por él para evitar duplicación de lógica).
function tokenToEntry(token, idOverride) {
  const id = idOverride || token.id || ('b_' + Date.now().toString(36));
  const atk = (Array.isArray(token.attacks) && token.attacks.length)
    ? token.attacks.map(a => ({ ...a }))
    : window.MstData.defaultAttacksForKind(token.kind);
  return {
    id,
    name: token.name,
    kind: token.kind || 'enemy',
    color: token.color,
    photo: token.photo,
    hpMax: token.hpMax,
    ac: token.ac,
    ini: token.ini,
    iniMod: token.iniMod || 0,
    fort: token.fort || 0,
    ref:  token.ref  || 0,
    will: token.will || 0,
    per:  token.per  || 0,
    spd:  token.spd  || 30,
    attacks: atk,
    cr: '',
    tag: '',
    notes: '',
  };
}

window.MstBestiary = {
  KEY: MST_BESTIARY_KEY,
  loadBestiary, saveBestiary, clearBestiary,
  entryToToken, tokenToEntry, defaultSeed,
};
