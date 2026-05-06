// =====================================================================
// INIT FULL — pantalla completa de iniciativa
// Lista editable, reordenable, con modificación inline de ini/delay,
// botones por fila (centrar / quitar) y header con ronda + avance.
// Toda la edición vive aquí; al cerrar la pestaña, el estado persiste.
// =====================================================================
const { useState: useStateIF, useRef: useRefIF, useEffect: useEffectIF } = React;

function MstInitFull({
  tokens,
  activeId,
  selectedId,
  round,
  buffs,
  lang,
  onSelectToken,
  onCenterToken,
  onChangeIni,
  onChangeDelay,
  onReorder,
  onAdvanceTurn,
  onRewindTurn,
  onRollAllInitiatives,
  onAddCombatant,
  onRemoveToken,
  onGroupSave,
}) {
  const t = window.MstData.I18N[lang];

  // Orden mostrado: por iniciativa desc, salvo override manual (drag).
  // Si onReorder se llama, los tokens vienen ya ordenados desde fuera.
  // Aquí solo ordenamos por ini si los tokens no traen un orderIndex.
  // Filtro por bando: todos / pj / aliado / enemigo / pet / neutral.
  // Mapea taxonomías legacy del seed (player/npc/civ) al modelo del UI.
  const [kindFilter, setKindFilter] = useStateIF('all');
  const normalizeKind = (k) => {
    if (k === 'player') return 'pj';
    if (k === 'civ') return 'neutral';
    if (k === 'npc' || k === 'boss') return 'enemy';
    return k || 'neutral';
  };
  const ordered = React.useMemo(() => {
    return [...tokens]
      .filter(tk => kindFilter === 'all' || normalizeKind(tk.kind) === kindFilter)
      .sort((a, b) => {
        const ai = a.ini ?? 0;
        const bi = b.ini ?? 0;
        if (bi !== ai) return bi - ai;
        return (a.name || '').localeCompare(b.name || '');
      });
  }, [tokens, kindFilter]);
  const counts = React.useMemo(() => {
    const c = { all: tokens.length, pj:0, ally:0, enemy:0, pet:0, neutral:0 };
    tokens.forEach(tk => {
      const k = normalizeKind(tk.kind);
      if (c[k] != null) c[k]++;
    });
    return c;
  }, [tokens]);

  // Drag-to-reorder
  const dragRef = useRefIF(null);
  const [dragOver, setDragOver] = useStateIF(null); // id sobre el que se arrastra

  const onDragStart = (e, id) => {
    dragRef.current = id;
    e.dataTransfer.effectAllowed = 'move';
    try { e.dataTransfer.setData('text/plain', id); } catch (err) {}
  };
  const onDragOver = (e, id) => {
    e.preventDefault();
    if (dragOver !== id) setDragOver(id);
  };
  const onDrop = (e, id) => {
    e.preventDefault();
    const fromId = dragRef.current;
    setDragOver(null);
    dragRef.current = null;
    if (!fromId || fromId === id) return;
    onReorder && onReorder(fromId, id);
  };
  const onDragEnd = () => {
    setDragOver(null);
    dragRef.current = null;
  };

  return (
    <div className="mst-initfull">
      {/* HEADER */}
      <div className="mst-initfull-header">
        <div className="mst-initfull-round">
          <span className="round-lbl">{t.round || 'Ronda'}</span>
          <span className="round-num">{round}</span>
        </div>
        <div className="mst-initfull-turn-controls">
          <button className="mst-modal-btn" onClick={onRewindTurn} title={t.lblPrevTurn || 'Anterior'}>
            <window.MstIcon name="rewind" size={14}/>
          </button>
          <button className="mst-modal-btn primary" onClick={onAdvanceTurn} title={t.lblNextTurn || 'Siguiente'}>
            <window.MstIcon name="fast" size={14}/>
            <span style={{marginLeft:6}}>{t.lblNextTurn || 'Sig.'}</span>
          </button>
        </div>
      </div>

      {/* FILTROS POR BANDO */}
      <div className="mst-initfull-filters">
        {[
          { key: 'all',     icon: '✦' },
          { key: 'pj',      icon: '🛡' },
          { key: 'ally',    icon: '🤝' },
          { key: 'enemy',   icon: '⚔' },
          { key: 'pet',     icon: '🐾' },
          { key: 'neutral', icon: '·' },
        ].map(f => {
          const lbl = f.key === 'all' ? (t.allKinds || 'Todos')
            : f.key === 'pj' ? (t.kindPJ || 'PJ')
            : f.key === 'ally' ? (t.kindAlly || 'Aliado')
            : f.key === 'enemy' ? (t.kindEnemy || 'Enemigo')
            : f.key === 'pet' ? (t.kindPet || 'Mascota')
            : (t.kindNeutral || 'Neutral');
          return (
            <button
              key={f.key}
              type="button"
              className={"filter-chip " + (kindFilter === f.key ? 'active' : '')}
              onClick={() => setKindFilter(f.key)}
            >
              <span className="ic">{f.icon}</span>
              <span className="lbl">{lbl}</span>
              <span className="count">{counts[f.key] || 0}</span>
            </button>
          );
        })}
      </div>

      {/* TOOLBAR */}
      <div className="mst-initfull-toolbar">
        <button className="mst-modal-btn" onClick={onRollAllInitiatives}>
          <window.MstIcon name="dice" size={14}/>
          <span style={{marginLeft:6}}>{t.rollAllIni || 'Tirar todas'}</span>
        </button>
        {onGroupSave && (
          <button className="mst-modal-btn" onClick={onGroupSave}>
            <window.MstIcon name="shield" size={14}/>
            <span style={{marginLeft:6}}>{t.groupSave || 'Salv. grupo'}</span>
          </button>
        )}
        <button className="mst-modal-btn primary" onClick={onAddCombatant}>
          <window.MstIcon name="plus" size={14}/>
          <span style={{marginLeft:6}}>{t.addCombatant || 'Añadir'}</span>
        </button>
      </div>

      {/* LISTA */}
      <div className="mst-initfull-list">
        {ordered.map((tk, idx) => {
          const pct = Math.max(0, (tk.hp / tk.hpMax) * 100);
          const hpColor = pct > 50 ? 'var(--positive)' : pct > 20 ? 'var(--gold)' : 'var(--negative)';
          const isActive = tk.id === activeId;
          const isSel = tk.id === selectedId;
          const isDead = tk.hp <= 0;
          const tkBuffs = buffs[tk.id] || [];
          const isOver = dragOver === tk.id;

          return (
            <div
              key={tk.id}
              draggable
              onDragStart={(e) => onDragStart(e, tk.id)}
              onDragOver={(e) => onDragOver(e, tk.id)}
              onDrop={(e) => onDrop(e, tk.id)}
              onDragEnd={onDragEnd}
              className={
                "mst-initfull-row" +
                (isActive ? ' active' : '') +
                (isSel ? ' selected' : '') +
                (isDead ? ' dead' : '') +
                (isOver ? ' drag-over' : '')
              }
              onClick={() => onSelectToken(tk.id)}
            >
              {/* Drag handle */}
              <div className="mst-initfull-grip" aria-label="reordenar" title="Arrastrar para reordenar">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="currentColor">
                  <circle cx="2.5" cy="3"  r="1.2"/><circle cx="7.5" cy="3"  r="1.2"/>
                  <circle cx="2.5" cy="8"  r="1.2"/><circle cx="7.5" cy="8"  r="1.2"/>
                  <circle cx="2.5" cy="13" r="1.2"/><circle cx="7.5" cy="13" r="1.2"/>
                </svg>
              </div>

              {/* Rank */}
              <div className="mst-initfull-rank">{idx + 1}</div>

              {/* Portrait */}
              <div className="mst-initfull-portrait" style={{ background: tk.color }}>
                {tk.photo ? (
                  <img src={tk.photo} alt={tk.name || ''} draggable={false}/>
                ) : (
                  <span className="short">{tk.short}</span>
                )}
                {isActive && <div className="active-ring" aria-hidden="true"></div>}
              </div>

              {/* Name + HP + buffs */}
              <div className="mst-initfull-main">
                <div className="name-line">
                  <span className="name">{tk.name}</span>
                  {tk.kind && <span className="kind">{tk.kind}</span>}
                </div>
                <div className="hp-line">
                  <div className="hp-bar"><span style={{width: pct + '%', background: hpColor}}></span></div>
                  <span className="hp-text">{tk.hp}<span className="dim">/{tk.hpMax}</span></span>
                </div>
                {tkBuffs.length > 0 && (
                  <div className="buffs-line">
                    {tkBuffs.slice(0, 3).map((b, bi) => {
                      const lbl = window.MstData.buffLabel({ key: b.key, label: b.label }, lang);
                      return (
                        <span key={bi} className={"buff " + (b.kind === 'buff' ? 'is-buff' : 'is-debuff')}>
                          {lbl}{b.rounds != null ? ` ·${b.rounds}` : ''}
                        </span>
                      );
                    })}
                    {tkBuffs.length > 3 && <span className="buff is-more">+{tkBuffs.length - 3}</span>}
                  </div>
                )}
              </div>

              {/* Editables: ini + delay */}
              <div className="mst-initfull-stats" onClick={(e) => e.stopPropagation()}>
                <label className="stat-cell">
                  <span className="lbl">INI</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    value={tk.ini ?? 0}
                    onChange={(e) => onChangeIni(tk.id, parseInt(e.target.value, 10) || 0)}
                  />
                </label>
                <label className="stat-cell">
                  <span className="lbl">{t.delay || 'DELAY'}</span>
                  <input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    value={tk.delay ?? 0}
                    onChange={(e) => onChangeDelay(tk.id, Math.max(0, parseInt(e.target.value, 10) || 0))}
                  />
                </label>
              </div>

              {/* Acciones */}
              <div className="mst-initfull-actions" onClick={(e) => e.stopPropagation()}>
                <div className="reorder-stack">
                  <button
                    className="action-btn sm"
                    title={t.moveUp || 'Subir'}
                    disabled={idx === 0}
                    onClick={() => {
                      const above = ordered[idx - 1];
                      if (above && onReorder) onReorder(tk.id, above.id);
                    }}
                  >▲</button>
                  <button
                    className="action-btn sm"
                    title={t.moveDown || 'Bajar'}
                    disabled={idx >= ordered.length - 1}
                    onClick={() => {
                      const below = ordered[idx + 1];
                      if (below && onReorder) onReorder(tk.id, below.id);
                    }}
                  >▼</button>
                </div>
                <button
                  className="action-btn"
                  title={t.lblCenter || 'Centrar'}
                  onClick={() => onCenterToken && onCenterToken(tk.id)}
                >
                  <window.MstIcon name="map" size={14}/>
                </button>
                <button
                  className="action-btn danger"
                  title={t.removeToken || 'Quitar'}
                  onClick={() => {
                    if (window.confirm((t.confirmRemove || '¿Quitar a {n}?').replace('{n}', tk.name))) {
                      onRemoveToken && onRemoveToken(tk.id);
                    }
                  }}
                >
                  <window.MstIcon name="x" size={14}/>
                </button>
              </div>
            </div>
          );
        })}
        {ordered.length === 0 && (
          <div className="mst-initfull-empty">
            <window.MstIcon name="initiative" size={32}/>
            <div className="title">{t.noCombatants || 'Sin combatientes'}</div>
            <div className="sub">{t.noCombatantsSub || 'Pulsa Añadir para empezar'}</div>
          </div>
        )}
      </div>
    </div>
  );
}

window.MstInitFull = MstInitFull;
