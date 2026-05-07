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

  /* MST-J01: pointer events para reorder (drag HTML5 no funciona en WebView Android touch) */
  const dragRef = useRefIF(null);            // id del token que se arrastra
  const startYRef = useRefIF(0);             // y inicial del pointerdown
  const longPressTimerRef = useRefIF(null);  // timer para long-press (300ms)
  const listRef = useRefIF(null);            // contenedor de la lista
  const [dragOver, setDragOver] = useStateIF(null);   // id sobre el que se arrastra
  const [draggingId, setDraggingId] = useStateIF(null); // id actualmente "agarrado"

  // Detecta el id del row debajo del puntero, leyendo data-token-id
  const findRowIdFromPoint = (clientX, clientY) => {
    const el = document.elementFromPoint(clientX, clientY);
    if (!el) return null;
    const row = el.closest('[data-token-id]');
    return row ? row.getAttribute('data-token-id') : null;
  };

  const cancelLongPress = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const endDrag = (commitTargetId) => {
    const fromId = dragRef.current;
    cancelLongPress();
    dragRef.current = null;
    setDragOver(null);
    setDraggingId(null);
    if (fromId && commitTargetId && fromId !== commitTargetId) {
      onReorder && onReorder(fromId, commitTargetId);
    }
    // Eliminar listeners globales
    window.removeEventListener('pointermove', onPointerMoveGlobal);
    window.removeEventListener('pointerup', onPointerUpGlobal);
    window.removeEventListener('pointercancel', onPointerCancelGlobal);
  };

  const onPointerMoveGlobal = (e) => {
    // Si no hemos iniciado drag aún, el movimiento cancela el long-press
    if (!draggingId && longPressTimerRef.current) {
      const dy = Math.abs(e.clientY - startYRef.current);
      if (dy > 8) cancelLongPress();
      return;
    }
    if (!dragRef.current) return;
    e.preventDefault();
    const overId = findRowIdFromPoint(e.clientX, e.clientY);
    if (overId !== dragOver) setDragOver(overId);
  };
  const onPointerUpGlobal = (e) => {
    const overId = dragRef.current ? findRowIdFromPoint(e.clientX, e.clientY) : null;
    endDrag(overId);
  };
  const onPointerCancelGlobal = () => endDrag(null);

  // Inicia el drag desde el grip (pointerdown). Long-press en touch para no
  // bloquear scroll vertical del propio contenedor; en mouse se inicia inmediato.
  const onGripPointerDown = (e, id) => {
    if (e.button != null && e.button !== 0) return; // solo botón principal/touch
    startYRef.current = e.clientY;
    dragRef.current = id;
    const startNow = () => {
      setDraggingId(id);
      setDragOver(id);
    };
    if (e.pointerType === 'mouse') {
      startNow();
    } else {
      cancelLongPress();
      longPressTimerRef.current = setTimeout(startNow, 220);
    }
    window.addEventListener('pointermove', onPointerMoveGlobal, { passive: false });
    window.addEventListener('pointerup', onPointerUpGlobal);
    window.addEventListener('pointercancel', onPointerCancelGlobal);
  };

  // Cleanup al desmontar
  useEffectIF(() => {
    return () => {
      cancelLongPress();
      window.removeEventListener('pointermove', onPointerMoveGlobal);
      window.removeEventListener('pointerup', onPointerUpGlobal);
      window.removeEventListener('pointercancel', onPointerCancelGlobal);
    };
    // eslint-disable-next-line
  }, []);

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
      <div className="mst-initfull-list" ref={listRef}>
        {ordered.map((tk, idx) => {
          const pct = Math.max(0, (tk.hp / tk.hpMax) * 100);
          const hpColor = pct > 50 ? 'var(--positive)' : pct > 20 ? 'var(--gold)' : 'var(--negative)';
          const isActive = tk.id === activeId;
          const isSel = tk.id === selectedId;
          const isDead = tk.hp <= 0;
          const tkBuffs = buffs[tk.id] || [];
          const isOver = dragOver === tk.id && draggingId && draggingId !== tk.id;
          const isDragging = draggingId === tk.id;

          return (
            <div
              key={tk.id}
              data-token-id={tk.id}
              className={
                "mst-initfull-row" +
                (isActive ? ' active' : '') +
                (isSel ? ' selected' : '') +
                (isDead ? ' dead' : '') +
                (isOver ? ' drag-over' : '') +
                (isDragging ? ' dragging' : '')
              }
              onClick={() => { if (!draggingId) onSelectToken(tk.id); }}
            >
              {/* Drag handle — MST-J01: pointer events */}
              <div
                className="mst-initfull-grip"
                aria-label="reordenar"
                title="Arrastrar para reordenar"
                onPointerDown={(e) => onGripPointerDown(e, tk.id)}
                style={{ touchAction: 'none', cursor: 'grab' }}
              >
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
                {/* MST-J09: DELAY como toggle booleano. Activado = salta su turno
                    y se relega al final del round actual; se restablece al
                    iniciar la siguiente ronda. */}
                <button
                  type="button"
                  className={"action-btn sm" + (tk.delay === true ? ' active' : '')}
                  title={t.delay || 'DELAY'}
                  aria-pressed={tk.delay === true}
                  onClick={() => onChangeDelay(tk.id, tk.delay === true ? false : true)}
                  style={{
                    minWidth: 56,
                    background: tk.delay === true ? 'var(--gold)' : undefined,
                    color: tk.delay === true ? '#1a1a1a' : undefined,
                    fontWeight: 600, letterSpacing: '.04em',
                  }}
                >
                  {t.delay || 'DELAY'}
                </button>
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
