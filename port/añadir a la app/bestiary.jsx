// =====================================================================
// BESTIARY PANEL — pestaña Bestiario fullscreen
// Lista de criaturas guardadas con buscador, filtro por tipo, y acciones:
//   - Añadir al encuentro (instancia un token nuevo)
//   - Editar plantilla
//   - Duplicar plantilla
//   - Borrar plantilla
//   - Crear nueva (botón ＋)
// =====================================================================

const KIND_FILTERS = [
  { key: 'all',     icon: '✦' },
  { key: 'pj',      icon: '🛡' },
  { key: 'ally',    icon: '🤝' },
  { key: 'enemy',   icon: '⚔' },
  { key: 'pet',     icon: '🐾' },
  { key: 'neutral', icon: '·' },
];

function MstBestiaryPanel({ lang, onAddToEncounter, onEditEntry, refreshKey }) {
  const t = window.MstData.I18N[lang];
  const [list, setList] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [kind, setKind]   = React.useState('all');

  // Cargar al montar y cuando cambie refreshKey (cuando el host añade/edita externamente)
  React.useEffect(() => {
    const data = window.MstBestiary.loadBestiary();
    setList(data);
    window.MstBestiary._cache = data;
  }, [refreshKey]);

  const persist = (next) => {
    setList(next);
    window.MstBestiary.saveBestiary(next);
    window.MstBestiary._cache = next;
  };

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return list.filter(e => {
      if (kind !== 'all' && (e.kind || 'enemy') !== kind) return false;
      if (!q) return true;
      const hay = (e.name + ' ' + (e.tag || '') + ' ' + (e.notes || '')).toLowerCase();
      return hay.includes(q);
    });
  }, [list, query, kind]);

  const onDelete = (entry) => {
    if (!window.confirm((t.confirmDeleteEntry || '¿Borrar a {n} del bestiario?').replace('{n}', entry.name))) return;
    persist(list.filter(e => e.id !== entry.id));
  };
  const onDuplicate = (entry) => {
    const ids = new Set(list.map(x => x.id));
    let n = 1;
    let id = 'b_' + n.toString().padStart(3, '0');
    while (ids.has(id)) { n++; id = 'b_' + n.toString().padStart(3, '0'); }
    const copy = { ...entry, id, name: entry.name + ' (copia)' };
    persist([...list, copy]);
  };
  const onAddNew = () => {
    const ids = new Set(list.map(x => x.id));
    let n = 1;
    let id = 'b_' + n.toString().padStart(3, '0');
    while (ids.has(id)) { n++; id = 'b_' + n.toString().padStart(3, '0'); }
    const blank = {
      id, name: t.newCreature || 'Nueva criatura',
      kind: 'enemy', color: '#a64545',
      hpMax: 10, ac: 12, ini: 10, iniMod: 0,
      fort: 0, ref: 0, will: 0, per: 0, spd: 30,
      cr: '', tag: '', notes: '',
    };
    persist([...list, blank]);
    onEditEntry(blank);
  };

  const handleAdd = (entry) => {
    onAddToEncounter(window.MstBestiary.entryToToken(entry));
  };

  return (
    <div className="mst-bestiary">
      {/* Toolbar superior */}
      <div className="mst-bestiary-toolbar">
        <div className="mst-bestiary-search">
          <window.MstIcon name="search" size={16}/>
          <input
            type="text"
            placeholder={t.searchCreature || 'Buscar criatura…'}
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" className="clear-btn" onClick={() => setQuery('')} aria-label="clear">
              <window.MstIcon name="x" size={14}/>
            </button>
          )}
        </div>
        <button
          type="button"
          className="mst-modal-btn primary"
          onClick={onAddNew}
          title={t.newCreature || 'Nueva criatura'}
        >
          <window.MstIcon name="plus" size={14}/>
          <span style={{ marginLeft: 6 }}>{t.newCreature || 'Nueva'}</span>
        </button>
      </div>

      {/* Filtros por tipo */}
      <div className="mst-bestiary-filters">
        {KIND_FILTERS.map(f => {
          const lbl = f.key === 'all'
            ? (t.allKinds || 'Todos')
            : (f.key === 'pj' ? (t.kindPJ || 'PJ') : (t['kind' + f.key.charAt(0).toUpperCase() + f.key.slice(1)] || f.key));
          const count = f.key === 'all' ? list.length : list.filter(e => (e.kind || 'enemy') === f.key).length;
          return (
            <button
              key={f.key}
              type="button"
              className={"filter-chip " + (kind === f.key ? 'active' : '')}
              onClick={() => setKind(f.key)}
            >
              <span className="ic">{f.icon}</span>
              <span className="lbl">{lbl}</span>
              <span className="count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Lista */}
      <div className="mst-bestiary-list">
        {filtered.length === 0 ? (
          <div className="mst-bestiary-empty">
            <window.MstIcon name="book" size={36}/>
            <div className="title">{query ? (t.noMatch || 'Sin resultados') : (t.bestiaryEmpty || 'Bestiario vacío')}</div>
            <div className="sub">{query ? (t.noMatchSub || 'Prueba con otro nombre') : (t.bestiaryEmptySub || 'Pulsa ＋ para crear')}</div>
          </div>
        ) : (
          filtered.map(entry => (
            <BestiaryRow
              key={entry.id}
              entry={entry}
              t={t}
              onAdd={() => handleAdd(entry)}
              onEdit={() => onEditEntry(entry)}
              onDuplicate={() => onDuplicate(entry)}
              onDelete={() => onDelete(entry)}
            />
          ))
        )}
      </div>
    </div>
  );
}

function BestiaryRow({ entry, t, onAdd, onEdit, onDuplicate, onDelete }) {
  return (
    <div className="mst-bestiary-row">
      <window.TokenPortrait token={{ ...entry, short: (entry.name || 'X').slice(0,2).toUpperCase() }} size={42}/>
      <div className="info">
        <div className="name-line">
          <span className="name">{entry.name}</span>
          {entry.cr && <span className="cr">CR {entry.cr}</span>}
          {entry.tag && <span className="tag">{entry.tag}</span>}
        </div>
        <div className="stats-line">
          <span><b>HP</b> {entry.hpMax}</span>
          <span><b>{t.ac}</b> {entry.ac}</span>
          <span><b>{t.initiative.slice(0,3)}.</b> {entry.ini}</span>
          <span><b>{t.fort}</b> {entry.fort >= 0 ? '+' : ''}{entry.fort}</span>
          <span><b>{t.ref}</b> {entry.ref >= 0 ? '+' : ''}{entry.ref}</span>
          <span><b>{t.will}</b> {entry.will >= 0 ? '+' : ''}{entry.will}</span>
        </div>
      </div>
      <div className="actions">
        <button
          type="button"
          className="action-btn primary"
          title={t.addToEncounter || 'Añadir al encuentro'}
          aria-label={t.addToEncounter || 'Añadir al encuentro'}
          onClick={onAdd}
        >
          <window.MstIcon name="plus" size={16}/>
        </button>
        <button
          type="button"
          className="action-btn"
          title={t.edit || 'Editar'}
          aria-label={t.edit || 'Editar'}
          onClick={onEdit}
        >
          <window.MstIcon name="edit" size={14}/>
        </button>
        <button
          type="button"
          className="action-btn"
          title={t.duplicate || 'Duplicar'}
          aria-label={t.duplicate || 'Duplicar'}
          onClick={onDuplicate}
        >
          <window.MstIcon name="copy" size={14}/>
        </button>
        <button
          type="button"
          className="action-btn danger"
          title={t.delete || 'Borrar'}
          aria-label={t.delete || 'Borrar'}
          onClick={onDelete}
        >
          <window.MstIcon name="x" size={14}/>
        </button>
      </div>
    </div>
  );
}

window.MstBestiaryPanel = MstBestiaryPanel;
