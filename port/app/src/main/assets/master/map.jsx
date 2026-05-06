// =====================================================================
// MAP — grid background, zonas, tokens, pan/zoom
// =====================================================================
const { useState, useRef, useEffect, useCallback } = React;

// Geometría PF1e por casillas: lista de celdas {x,y} (coords de cuadrícula)
// que un cono o una línea cubre, partiendo de un origen en píxeles.
function coneSquaresPF(cx, cy, radiusPx, angleDeg, sq) {
  const cells = [];
  const radiusSq = Math.ceil(radiusPx / sq) + 1;
  const baseX = Math.floor(cx / sq);
  const baseY = Math.floor(cy / sq);
  const angRad = (angleDeg - 90) * Math.PI / 180; // 0=norte
  const halfCone = Math.PI / 6; // 60° total
  for (let dy = -radiusSq; dy <= radiusSq; dy++) {
    for (let dx = -radiusSq; dx <= radiusSq; dx++) {
      const cellX = baseX + dx;
      const cellY = baseY + dy;
      const px = cellX * sq + sq / 2;
      const py = cellY * sq + sq / 2;
      const dist = Math.hypot(px - cx, py - cy);
      if (dist > radiusPx) continue;
      if (dist < 1) continue;
      const cellAng = Math.atan2(py - cy, px - cx);
      let diff = Math.abs(cellAng - angRad);
      if (diff > Math.PI) diff = 2 * Math.PI - diff;
      if (diff > halfCone) continue;
      cells.push({ x: cellX, y: cellY });
    }
  }
  return cells;
}
function lineSquaresPF(cx, cy, lengthPx, angleDeg, sq) {
  const cells = [];
  const seen = new Set();
  const angRad = (angleDeg - 90) * Math.PI / 180;
  const dx = Math.cos(angRad);
  const dy = Math.sin(angRad);
  // Pasos de un cuarto de cuadro para no saltar diagonales
  const steps = Math.ceil((lengthPx * 4) / sq);
  for (let i = 0; i <= steps; i++) {
    const px = cx + dx * (i * sq / 4);
    const py = cy + dy * (i * sq / 4);
    const cellX = Math.floor(px / sq);
    const cellY = Math.floor(py / sq);
    const k = cellX + ',' + cellY;
    if (!seen.has(k)) {
      seen.add(k);
      cells.push({ x: cellX, y: cellY });
    }
  }
  return cells;
}

function MstMap({
  encounter, gridType, selectedId, activeId,
  onSelectToken, onTokenMove, dimMap,
  centerSignal, resetSignal, onMapTap,
  measureMode, measurePts, onMeasureClick, pxPerSquare, computeDistance,
  templates, lastPlacedTpl, pendingTemplate, onPlaceTemplate, onRemoveTemplate,
  fogMode, fogCells, onFogCellClick,
  mapBg, mapNotes, pendingNote, onPlaceNote, onDeleteNote, onMoveNote,
  multiSelected, onToggleMultiSelect,
}) {
  const SQ = pxPerSquare || 50;
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 });
  const containerRef = useRef(null);
  const dragState = useRef(null);
  const viewRef = useRef(view);
  viewRef.current = view;
  // Tracking double-tap por token: { id, ts }
  const lastTapRef = useRef(null);
  // Timer de long-press (500ms)
  const longPressRef = useRef(null);

  const gw = encounter.grid.w;
  const gh = encounter.grid.h;

  // Clamp helper — pure function of rect + view + grid
  const clamp = useCallback((v) => {
    const el = containerRef.current;
    if (!el) return v;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return v;
    const minScale = Math.max(rect.width / gw, rect.height / gh);
    const scale = Math.max(minScale, Math.min(1.8, v.scale));
    const scaledW = gw * scale;
    const scaledH = gh * scale;
    const minX = rect.width - scaledW;   // <= 0
    const minY = rect.height - scaledH;  // <= 0
    const x = Math.min(0, Math.max(minX, v.x));
    const y = Math.min(0, Math.max(minY, v.y));
    return { x, y, scale };
  }, [gw, gh]);

  // Initial fit + re-fit on container resize / encounter change
  const fitCover = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const minScale = Math.max(rect.width / gw, rect.height / gh);
    const scale = minScale;
    const x = (rect.width - gw * scale) / 2;
    const y = (rect.height - gh * scale) / 2;
    setView(clamp({ x, y, scale }));
  }, [gw, gh, clamp]);

  useEffect(() => {
    fitCover();
  }, [encounter.nameKey, fitCover]);

  // Reset zoom externo (tecla R / FAB Reset)
  useEffect(() => {
    if (!resetSignal) return;
    fitCover();
  }, [resetSignal, fitCover]);

  // Center map on a given point (in grid coords) — driven by `centerSignal`
  // ({x, y, ts}). The ts changes each call so the effect re-runs even
  // if x/y are the same.
  useEffect(() => {
    if (!centerSignal) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const s = viewRef.current.scale;
    const targetX = rect.width / 2 - centerSignal.x * s;
    const targetY = rect.height / 2 - centerSignal.y * s;
    setView(clamp({ x: targetX, y: targetY, scale: s }));
  }, [centerSignal, clamp]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => {
      // Re-clamp current view; if it became invalid, fit cover
      setView(v => clamp(v));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [clamp]);

  // Convierte coords de pantalla a coords del grid (interior del mapa)
  const screenToGrid = (clientX, clientY) => {
    const el = containerRef.current;
    if (!el) return { x: 0, y: 0 };
    const rect = el.getBoundingClientRect();
    const v = viewRef.current;
    return {
      x: (clientX - rect.left - v.x) / v.scale,
      y: (clientY - rect.top  - v.y) / v.scale,
    };
  };

  const onPointerDown = (e) => {
    if (measureMode) {
      e.preventDefault();
      const pt = screenToGrid(e.clientX, e.clientY);
      onMeasureClick && onMeasureClick(pt);
      return;
    }
    if (pendingTemplate) {
      e.preventDefault();
      const pt = screenToGrid(e.clientX, e.clientY);
      onPlaceTemplate && onPlaceTemplate(pt);
      return;
    }
    if (pendingNote) {
      e.preventDefault();
      const pt = screenToGrid(e.clientX, e.clientY);
      onPlaceNote && onPlaceNote(pt);
      return;
    }
    if (fogMode) {
      // Toggle de la celda donde se ha clicado
      if (e.target.closest('.mst-map-note')) return;
      e.preventDefault();
      const pt = screenToGrid(e.clientX, e.clientY);
      const cx = Math.floor(pt.x / SQ);
      const cy = Math.floor(pt.y / SQ);
      onFogCellClick && onFogCellClick(cx, cy);
      return;
    }
    if (e.target.closest('.mst-token')) return;
    if (e.target.closest('.mst-map-note')) return;
    e.target.setPointerCapture?.(e.pointerId);
    dragState.current = {
      type: 'pan', x: e.clientX, y: e.clientY,
      vx: viewRef.current.x, vy: viewRef.current.y, id: e.pointerId
    };
  };
  const onPointerMove = (e) => {
    const d = dragState.current;
    if (!d || d.id !== e.pointerId) return;
    if (d.type === 'pan') {
      setView(v => clamp({ ...v, x: d.vx + (e.clientX - d.x), y: d.vy + (e.clientY - d.y) }));
    } else if (d.type === 'token') {
      const dx = (e.clientX - d.x) / viewRef.current.scale;
      const dy = (e.clientY - d.y) / viewRef.current.scale;
      if (Math.abs(e.clientX - d.x) > 6 || Math.abs(e.clientY - d.y) > 6) {
        if (longPressRef.current) { clearTimeout(longPressRef.current); longPressRef.current = null; }
        d.moved = true;
      }
      onTokenMove(d.tokenId, d.tx + dx, d.ty + dy);
    } else if (d.type === 'note') {
      const cur = screenToGrid(e.clientX, e.clientY);
      const dx = cur.x - d.x;
      const dy = cur.y - d.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) d.moved = true;
      onMoveNote && onMoveNote(d.noteId, d.nx + dx, d.ny + dy);
    }
  };
  const onPointerUp = (e) => {
    const d = dragState.current;
    if (longPressRef.current) { clearTimeout(longPressRef.current); longPressRef.current = null; }
    if (d && d.type === 'note' && !d.moved) {
      // Tap puro sobre nota: borrar
      if (window.confirm('¿Borrar nota?')) onDeleteNote && onDeleteNote(d.noteId);
    }
    dragState.current = null;
  };

  const onWheelNative = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const factor = e.deltaY > 0 ? 0.92 : 1.08;
    setView(v => {
      const rect = containerRef.current.getBoundingClientRect();
      const minScale = Math.max(rect.width / gw, rect.height / gh);
      const ns = Math.max(minScale, Math.min(1.8, v.scale * factor));
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const k = ns / v.scale;
      return clamp({ scale: ns, x: mx - (mx - v.x) * k, y: my - (my - v.y) * k });
    });
  }, [clamp, gw, gh]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', onWheelNative, { passive: false, capture: true });
    return () => el.removeEventListener('wheel', onWheelNative, { capture: true });
  }, [onWheelNative]);

  const onTokenPointerDown = (e, t) => {
    e.stopPropagation();
    if (measureMode) {
      onMeasureClick && onMeasureClick({ x: t.x, y: t.y });
      return;
    }
    // Shift+click: toggle multi-selección sin iniciar drag ni abrir drawer
    if ((e.shiftKey || e.ctrlKey || e.metaKey) && onToggleMultiSelect) {
      onToggleMultiSelect(t.id);
      return;
    }
    onSelectToken(t.id);
    // 1) Estado primero — si falla setPointerCapture el long-press y el drag siguen funcionando
    dragState.current = {
      type: 'token', x: e.clientX, y: e.clientY, tx: t.x, ty: t.y, tokenId: t.id, id: e.pointerId,
      pressTime: Date.now(), moved: false
    };
    // 2) Capture (puede fallar en eventos sintéticos sin pointer activo)
    try { e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId); } catch (err) {}
    // 3) Long-press → abre drawer
    if (longPressRef.current) clearTimeout(longPressRef.current);
    longPressRef.current = setTimeout(() => {
      const d = dragState.current;
      if (d && !d.moved && d.tokenId === t.id) {
        onSelectToken(t.id, { openDrawer: true });
        try { navigator.vibrate && navigator.vibrate(20); } catch(err) {}
      }
      longPressRef.current = null;
    }, 500);
  };

  const onTokenPointerUp = (e, t) => {
    e.stopPropagation();
    const d = dragState.current;
    if (longPressRef.current) { clearTimeout(longPressRef.current); longPressRef.current = null; }
    // Si fue un tap (sin mover): chequear doble-tap
    if (d && !d.moved) {
      const now = Date.now();
      const last = lastTapRef.current;
      if (last && last.id === t.id && (now - last.ts) < 320) {
        onSelectToken(t.id, { openDrawer: true });
        lastTapRef.current = null;
      } else {
        lastTapRef.current = { id: t.id, ts: now };
      }
    } else {
      // arrastre real → invalida la pareja de doble-tap
      lastTapRef.current = null;
    }
    dragState.current = null;
  };

  const gridClass = gridType === 'hex' ? 'mst-grid-hex' : 'mst-grid-square';

  return (
    <div
      className={
        "mst-map" +
        (measureMode || pendingTemplate || pendingNote || fogMode ? ' measuring' : '')
      }
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={dimMap ? { filter: 'brightness(0.6)' } : null}
    >
      <div
        className={"mst-map-inner " + gridClass}
        style={{
          width: encounter.grid.w,
          height: encounter.grid.h,
          transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
          top: 0, left: 0,
        }}
      >
        {/* Fondo personalizado (color o imagen) — debajo del grid */}
        {mapBg && mapBg.kind === 'color' && (
          <div className="mst-map-bg-image" style={{ background: mapBg.value }}/>
        )}
        {mapBg && mapBg.kind === 'image' && (
          <div className="mst-map-bg-image" style={{ backgroundImage: `url(${mapBg.value})` }}/>
        )}
        {gridType === 'hex' && (() => {
          // Clean pointy-top honeycomb. Hex with side s=30:
          // width = sqrt(3)*s ≈ 51.96, height = 2*s = 60.
          // Vertical spacing between rows = 1.5*s = 45.
          // Odd rows offset by w/2.
          const s = 30;
          const w = Math.sqrt(3) * s;          // 51.96
          const h = 2 * s;                     // 60
          const vstep = 1.5 * s;               // 45
          const cols = Math.ceil(encounter.grid.w / w) + 2;
          const rows = Math.ceil(encounter.grid.h / vstep) + 2;
          const points = (cx, cy) =>
            [0,1,2,3,4,5].map(i => {
              const a = (Math.PI / 180) * (60 * i - 30); // pointy-top
              return (cx + s * Math.cos(a)).toFixed(2) + ',' + (cy + s * Math.sin(a)).toFixed(2);
            }).join(' ');
          const polys = [];
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const cx = c * w + (r % 2 ? w / 2 : 0);
              const cy = r * vstep;
              polys.push(<polygon key={r+'-'+c} points={points(cx, cy)} fill="none" stroke="currentColor" strokeWidth="1"/>);
            }
          }
          return (
            <svg className="mst-hex-overlay" width={encounter.grid.w} height={encounter.grid.h} xmlns="http://www.w3.org/2000/svg">
              {polys}
            </svg>
          );
        })()}
        {encounter.zones.map(z => (
          <div key={z.id}
            className={"mst-zone mst-zone-" + z.kind}
            style={{ left: z.x, top: z.y, width: z.w, height: z.h, pointerEvents: 'none' }}>
            <span className="mst-zone-label">{z.label}</span>
          </div>
        ))}
        {[...encounter.tokens].sort((a, b) => (a.z || 0) - (b.z || 0)).map(t => {
          const isActive = t.id === activeId;
          const isSel = t.id === selectedId;
          const dead = t.hp <= 0;
          const pct = Math.max(0, Math.min(1, t.hp / t.hpMax));
          const hpClass = pct > 0.5 ? '' : (pct > 0.2 ? 'bloody' : 'dying');
          return (
            <div key={t.id}
              className={
                "mst-token " +
                (isActive ? 'active ' : '') +
                (isSel ? 'selected ' : '') +
                (dead ? 'dead ' : '') +
                (multiSelected && multiSelected.has && multiSelected.has(t.id) ? 'multi-selected' : '')
              }
              style={{ left: t.x, top: t.y, background: t.color, zIndex: 100 + (t.z || 0) }}
              title={`${t.name} · ${t.hp}/${t.hpMax} HP${t.kind ? ' · ' + t.kind : ''}`}
              onPointerDown={(e) => onTokenPointerDown(e, t)}
              onPointerUp={(e) => onTokenPointerUp(e, t)}
              onPointerCancel={(e) => onTokenPointerUp(e, t)}
            >
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={t.name || ''}
                  className="mst-token-photo"
                  draggable={false}
                />
              ) : (
                <span className="mst-token-short">{t.short}</span>
              )}
              <div className="mst-token-hp">
                <div className={"mst-token-hp-fill " + hpClass} style={{ width: (pct*100) + '%' }} />
              </div>
            </div>
          );
        })}
        {/* Plantillas de área (esfera/cono/línea) */}
        {Array.isArray(templates) && templates.length > 0 && (
          <svg
            className="mst-template-overlay"
            width={encounter.grid.w}
            height={encounter.grid.h}
            xmlns="http://www.w3.org/2000/svg"
          >
            {templates.map(tpl => {
              const radiusPx = ((tpl.sizeFt || 10) / 5) * SQ;
              const stroke = tpl.color || 'var(--accent)';
              const fill = (tpl.color || '#a64545') + '33'; // hex8: ~20% alpha
              const cls = "mst-template-shape" + (lastPlacedTpl === tpl.id ? ' pulse' : '');
              const onClick = (e) => {
                e.stopPropagation();
                if (window.confirm('¿Quitar plantilla?')) onRemoveTemplate && onRemoveTemplate(tpl.id);
              };
              if (tpl.kind === 'circle') {
                return (
                  <circle
                    key={tpl.id}
                    className={cls}
                    cx={tpl.x} cy={tpl.y} r={radiusPx}
                    fill={fill} stroke={stroke} strokeWidth="2.4"
                    strokeDasharray="8 5"
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    onClick={onClick}
                  />
                );
              }
              // Render por celdas (PF1e exact) si tpl.snap está activo
              if (tpl.snap && (tpl.kind === 'cone' || tpl.kind === 'line')) {
                const cells = tpl.kind === 'cone'
                  ? coneSquaresPF(tpl.x, tpl.y, radiusPx, tpl.angle || 0, SQ)
                  : lineSquaresPF(tpl.x, tpl.y, radiusPx, tpl.angle || 0, SQ);
                return (
                  <g
                    key={tpl.id}
                    className={cls}
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    onClick={onClick}
                  >
                    {cells.map((c, i) => (
                      <rect
                        key={i}
                        x={c.x * SQ} y={c.y * SQ}
                        width={SQ} height={SQ}
                        fill={fill} stroke={stroke} strokeWidth="1.6"
                      />
                    ))}
                  </g>
                );
              }
              if (tpl.kind === 'cone') {
                const ang = (tpl.angle || 0) - 90;
                const rad = (a) => (a * Math.PI) / 180;
                const half = 30;
                const p1 = { x: tpl.x, y: tpl.y };
                const p2 = { x: tpl.x + radiusPx * Math.cos(rad(ang - half)), y: tpl.y + radiusPx * Math.sin(rad(ang - half)) };
                const p3 = { x: tpl.x + radiusPx * Math.cos(rad(ang + half)), y: tpl.y + radiusPx * Math.sin(rad(ang + half)) };
                return (
                  <polygon
                    key={tpl.id}
                    className={cls}
                    points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`}
                    fill={fill} stroke={stroke} strokeWidth="2.4"
                    strokeDasharray="8 5"
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    onClick={onClick}
                  />
                );
              }
              if (tpl.kind === 'line') {
                const ang = (tpl.angle || 0) - 90;
                const rad = (a) => (a * Math.PI) / 180;
                const ex = tpl.x + radiusPx * Math.cos(rad(ang));
                const ey = tpl.y + radiusPx * Math.sin(rad(ang));
                const widthPx = SQ;
                const dx = Math.cos(rad(ang)), dy = Math.sin(rad(ang));
                const px = -dy * widthPx / 2, py = dx * widthPx / 2;
                const points = [
                  `${tpl.x + px},${tpl.y + py}`,
                  `${ex + px},${ey + py}`,
                  `${ex - px},${ey - py}`,
                  `${tpl.x - px},${tpl.y - py}`,
                ].join(' ');
                return (
                  <polygon
                    key={tpl.id}
                    className={cls}
                    points={points}
                    fill={fill} stroke={stroke} strokeWidth="2.4"
                    strokeDasharray="8 5"
                    style={{ pointerEvents: 'auto', cursor: 'pointer' }}
                    onClick={onClick}
                  />
                );
              }
              return null;
            })}
          </svg>
        )}

        {/* Niebla / fog of war */}
        {Array.isArray(fogCells) && fogCells.length > 0 && (
          <svg
            className="mst-fog-overlay"
            width={encounter.grid.w}
            height={encounter.grid.h}
            xmlns="http://www.w3.org/2000/svg"
          >
            {fogCells.map((c, i) => (
              <rect
                key={'fog-' + i}
                className="mst-fog-cell"
                x={c.x * SQ} y={c.y * SQ}
                width={SQ} height={SQ}
              />
            ))}
          </svg>
        )}

        {/* Notas / marcadores de texto. Tap = borra (con confirmación);
            drag = mover (arrastra > 4px en grid). */}
        {Array.isArray(mapNotes) && mapNotes.map(n => {
          const onNotePointerDown = (e) => {
            e.stopPropagation();
            const startG = screenToGrid(e.clientX, e.clientY);
            const start = { x: startG.x, y: startG.y, nx: n.x, ny: n.y, moved: false, id: e.pointerId };
            try { e.target.setPointerCapture && e.target.setPointerCapture(e.pointerId); } catch (_) {}
            dragState.current = { type: 'note', ...start, noteId: n.id };
          };
          return (
            <div
              key={n.id}
              className="mst-map-note"
              style={{
                left: n.x,
                top: n.y,
                transform: 'translate(-50%, -50%)',
                borderColor: n.color || 'var(--gold)',
                cursor: 'grab',
              }}
              onPointerDown={onNotePointerDown}
              title={n.text}
            >
              {n.text}
            </div>
          );
        })}

        {/* Overlay de medición */}
        {measureMode && Array.isArray(measurePts) && measurePts.length > 0 && (
          <svg
            className="mst-measure-overlay"
            width={encounter.grid.w}
            height={encounter.grid.h}
            style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            {measurePts.map((p, i) => (
              <circle key={'mp-' + i} cx={p.x} cy={p.y} r={6}
                fill="var(--gold)" stroke="white" strokeWidth="2"/>
            ))}
            {measurePts.length === 2 && (() => {
              const [a, b] = measurePts;
              const d = computeDistance ? computeDistance(a, b) : null;
              const mx = (a.x + b.x) / 2;
              const my = (a.y + b.y) / 2;
              return (
                <g>
                  <line x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke="var(--gold)" strokeWidth="3" strokeDasharray="6 4"/>
                  {d && (
                    <g>
                      <rect x={mx - 38} y={my - 14} width="76" height="28" rx="6"
                        fill="rgba(0,0,0,.78)" stroke="var(--gold)" strokeWidth="1.2"/>
                      <text x={mx} y={my + 5} textAnchor="middle"
                        fill="white" fontSize="14" fontWeight="700"
                        style={{ fontFamily: 'Cinzel, Georgia, serif' }}>
                        {d.ft} ft
                      </text>
                    </g>
                  )}
                </g>
              );
            })()}
          </svg>
        )}
      </div>
    </div>
  );
}

window.MstMap = MstMap;
