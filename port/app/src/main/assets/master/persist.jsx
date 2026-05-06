// =====================================================================
// PERSISTENCE — localStorage + export/import JSON
// Single source of truth para qué se guarda del estado del encuentro.
// =====================================================================
const MST_STORAGE_KEY = 'mst-state-v1';
const MST_STATE_VERSION = 1;

// El estado que guardamos. NO incluye objetos no serializables.
// El log se trunca a 100 entradas para no inflar localStorage.
function snapshotState(s) {
  return {
    version: MST_STATE_VERSION,
    savedAt: Date.now(),
    encounterKey: s.encounterKey,
    tokens: s.tokens,
    activeId: s.activeId,
    selectedId: s.selectedId,
    round: s.round,
    actionsState: s.actionsState,
    buffs: s.buffs,
    theme: s.theme,
    lang: s.lang,
    gridKind: s.gridKind,
    layout: s.layout,
    initPos: s.initPos,
    density: s.density,
    drawerHeight: s.drawerHeight,
    viewMode: s.viewMode,
    tab: s.tab,
    log: Array.isArray(s.log) ? s.log.slice(0, 100) : undefined,
    templates: Array.isArray(s.templates) ? s.templates : undefined,
    fogCells: Array.isArray(s.fogCells) ? s.fogCells : undefined,
    mapBg: s.mapBg || undefined,
    mapNotes: Array.isArray(s.mapNotes) ? s.mapNotes : undefined,
  };
}

function saveState(s) {
  try {
    const snap = snapshotState(s);
    localStorage.setItem(MST_STORAGE_KEY, JSON.stringify(snap));
    return true;
  } catch (e) {
    console.warn('[mst] saveState failed', e);
    return false;
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(MST_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (!data || data.version !== MST_STATE_VERSION) return null;
    return data;
  } catch (e) {
    console.warn('[mst] loadState failed', e);
    return null;
  }
}

function clearState() {
  try { localStorage.removeItem(MST_STORAGE_KEY); return true; }
  catch (e) { return false; }
}

function getSavedAt() {
  try {
    const raw = localStorage.getItem(MST_STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    return data && data.savedAt ? data.savedAt : null;
  } catch (e) { return null; }
}

function exportJson(s, filename) {
  const snap = snapshotState(s);
  const blob = new Blob([JSON.stringify(snap, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const name = filename || ('master-' + (snap.encounterKey || 'encounter') + '-' +
    new Date(snap.savedAt).toISOString().replace(/[:.]/g, '-').slice(0,19) + '.json');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 200);
  return name;
}

function importJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('read failed'));
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (!data || typeof data !== 'object') throw new Error('not an object');
        if (data.version !== MST_STATE_VERSION) throw new Error('version mismatch');
        if (!Array.isArray(data.tokens)) throw new Error('no tokens');
        resolve(data);
      } catch (e) { reject(e); }
    };
    reader.readAsText(file);
  });
}

// =====================================================================
// Snapshots con nombre — punto de retorno antes de un turno crítico.
// Lista persistida bajo otra clave para no chocar con el autosave.
// =====================================================================
const MST_SNAPSHOTS_KEY = 'mst-snapshots-v1';

function listSnapshots() {
  try {
    const raw = localStorage.getItem(MST_SNAPSHOTS_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

function saveNamedSnapshot(name, s) {
  const list = listSnapshots();
  const id = 'snap_' + Date.now().toString(36);
  const entry = { id, name: String(name || '').trim() || ('Snapshot ' + (list.length + 1)),
                  ts: Date.now(), state: snapshotState(s) };
  const next = [entry, ...list].slice(0, 20); // máx 20 snapshots
  try { localStorage.setItem(MST_SNAPSHOTS_KEY, JSON.stringify(next)); } catch(e) {}
  return entry;
}

function deleteNamedSnapshot(id) {
  const list = listSnapshots().filter(e => e.id !== id);
  try { localStorage.setItem(MST_SNAPSHOTS_KEY, JSON.stringify(list)); } catch(e) {}
  return list;
}

function getNamedSnapshot(id) {
  return listSnapshots().find(e => e.id === id) || null;
}

function clearAllNamedSnapshots() {
  try { localStorage.removeItem(MST_SNAPSHOTS_KEY); } catch(e) {}
}

// =====================================================================
// Encounters custom — plantillas de encuentro cargables desde JSON
// Estructura mínima esperada: {nameKey?, name?, grid:{w,h}, zones?, tokens, activeId?}
// Los tokens son los mismos que ENCOUNTERS de data.jsx.
// =====================================================================
const MST_CUSTOM_ENC_KEY = 'mst-custom-encounters-v1';

function listCustomEncounters() {
  try {
    const raw = localStorage.getItem(MST_CUSTOM_ENC_KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch (e) { return []; }
}

function validateEncounter(obj) {
  if (!obj || typeof obj !== 'object') throw new Error('No es un objeto');
  if (!obj.grid || !obj.grid.w || !obj.grid.h) throw new Error('Falta grid {w,h}');
  if (!Array.isArray(obj.tokens)) throw new Error('Falta tokens (array)');
  return {
    name: String(obj.name || obj.nameKey || 'Encuentro custom').slice(0, 60),
    nameKey: obj.nameKey || null,
    grid: { w: parseInt(obj.grid.w, 10) || 1200, h: parseInt(obj.grid.h, 10) || 900 },
    zones: Array.isArray(obj.zones) ? obj.zones : [],
    tokens: obj.tokens,
    activeId: obj.activeId || (obj.tokens[0] && obj.tokens[0].id) || null,
  };
}

function saveCustomEncounter(name, encounter) {
  const list = listCustomEncounters();
  const id = 'enc_' + Date.now().toString(36);
  const validated = validateEncounter(encounter);
  validated.name = String(name || '').trim() || validated.name;
  const entry = { id, name: validated.name, ts: Date.now(), data: validated };
  const next = [entry, ...list].slice(0, 30);
  try { localStorage.setItem(MST_CUSTOM_ENC_KEY, JSON.stringify(next)); } catch(e) {}
  return entry;
}

function deleteCustomEncounter(id) {
  const list = listCustomEncounters().filter(e => e.id !== id);
  try { localStorage.setItem(MST_CUSTOM_ENC_KEY, JSON.stringify(list)); } catch(e) {}
  return list;
}

function getCustomEncounter(id) {
  return listCustomEncounters().find(e => e.id === id) || null;
}

function importEncounterFile(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onerror = () => reject(r.error || new Error('read failed'));
    r.onload = () => {
      try { resolve(validateEncounter(JSON.parse(r.result))); }
      catch (e) { reject(e); }
    };
    r.readAsText(file);
  });
}

window.MstPersist = {
  KEY: MST_STORAGE_KEY,
  VERSION: MST_STATE_VERSION,
  SNAPSHOTS_KEY: MST_SNAPSHOTS_KEY,
  CUSTOM_ENC_KEY: MST_CUSTOM_ENC_KEY,
  snapshotState, saveState, loadState, clearState, getSavedAt,
  exportJson, importJsonFile,
  listSnapshots, saveNamedSnapshot, deleteNamedSnapshot, getNamedSnapshot, clearAllNamedSnapshots,
  listCustomEncounters, saveCustomEncounter, deleteCustomEncounter, getCustomEncounter, validateEncounter, importEncounterFile,
};
