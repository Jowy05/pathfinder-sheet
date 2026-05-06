// =====================================================================
// INIT LIST — vista de lista de tokens ordenados por iniciativa
// Sin mapa: cada fila muestra portrait + nombre + ini + HP + estados
// Tap en una fila → selecciona token (abre drawer)
// =====================================================================
const { useMemo: useMemoIL } = React;

function MstInitList({
  tokens,
  activeId,
  selectedId,
  onSelectToken,
  buffs,
  lang,
  onChangeHp,
  density = 'rich',
}) {
  const t = window.MstData.I18N[lang];

  const ordered = useMemoIL(() =>
    [...tokens].sort((a, b) => b.ini - a.ini),
    [tokens]
  );

  return (
    <div className="mst-init-list">
      <div className="mst-init-list-toolbar">
        <span>{t.sortByIni || 'Por iniciativa'}</span>
        <span className="mst-init-list-count">{ordered.length}</span>
      </div>
      <div className="mst-init-list-scroll">
        {ordered.map((tk, idx) => {
          const pct = Math.max(0, (tk.hp / tk.hpMax) * 100);
          const hpColor = pct > 50 ? 'var(--positive)' : pct > 20 ? 'var(--gold)' : 'var(--negative)';
          const isActive = tk.id === activeId;
          const isSelected = tk.id === selectedId;
          const isDead = tk.hp <= 0;
          const tkBuffs = buffs[tk.id] || [];

          return (
            <div
              key={tk.id}
              className={
                "mst-init-row" +
                (isActive ? ' active' : '') +
                (isSelected ? ' selected' : '') +
                (isDead ? ' dead' : '')
              }
              onClick={() => onSelectToken(tk.id)}
            >
              {/* Order rank */}
              <div className="mst-init-row-rank">{idx + 1}</div>

              {/* Portrait dot */}
              <div className="mst-init-row-portrait" style={{ background: tk.color, overflow: 'hidden' }}>
                {tk.photo ? (
                  <img
                    src={tk.photo}
                    alt={tk.name || ''}
                    className="mst-init-row-photo"
                    draggable={false}
                  />
                ) : (
                  <span className="mst-init-row-short">{tk.short}</span>
                )}
                {isActive && <div className="mst-init-row-active-ring" aria-hidden="true"></div>}
              </div>

              {/* Center column */}
              <div className="mst-init-row-main">
                <div className="mst-init-row-name-line">
                  <span className="mst-init-row-name">{tk.name}</span>
                  {tk.kind && <span className="mst-init-row-kind">{tk.kind}</span>}
                </div>

                {/* HP bar */}
                <div className="mst-init-row-hp">
                  <div className="mst-init-row-hp-bar">
                    <span style={{ width: pct + '%', background: hpColor }}></span>
                  </div>
                  <span className="mst-init-row-hp-text">
                    {tk.hp}<span className="dim">/{tk.hpMax}</span>
                  </span>
                </div>

                {/* Status chips (only if rich density) */}
                {density === 'rich' && tkBuffs.length > 0 && (
                  <div className="mst-init-row-buffs">
                    {tkBuffs.slice(0, 4).map((b, bi) => {
                      const label = t['status' + b.key.charAt(0).toUpperCase() + b.key.slice(1)] || b.key;
                      return (
                        <span
                          key={bi}
                          className={"mst-init-row-buff " + (b.kind === 'buff' ? 'is-buff' : 'is-debuff')}
                        >
                          {label}{b.rounds ? ' ' + b.rounds : ''}
                        </span>
                      );
                    })}
                    {tkBuffs.length > 4 && (
                      <span className="mst-init-row-buff is-more">+{tkBuffs.length - 4}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Right column: ini + AC + quick HP buttons */}
              <div className="mst-init-row-right">
                <div className="mst-init-row-ini">
                  <span className="mst-init-row-ini-num">{tk.ini}</span>
                  <span className="mst-init-row-ini-lbl">ini</span>
                </div>
                {tk.ac != null && (
                  <div className="mst-init-row-ac" title={t.ac || 'CA'}>
                    <window.MstIcon name="shield" size={11}/>
                    <span>{tk.ac}</span>
                  </div>
                )}
              </div>

              {/* Quick HP buttons (rich only) */}
              {density === 'rich' && (
                <div className="mst-init-row-actions" onClick={(e) => e.stopPropagation()}>
                  <button
                    className="mst-init-row-hp-btn neg"
                    aria-label={t.damage || 'Daño'}
                    onClick={() => onChangeHp(tk.id, -1)}
                  >
                    −
                  </button>
                  <button
                    className="mst-init-row-hp-btn pos"
                    aria-label={t.heal || 'Curar'}
                    onClick={() => onChangeHp(tk.id, +1)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

window.MstInitList = MstInitList;
