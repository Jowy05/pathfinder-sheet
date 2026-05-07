// =====================================================================
// SETTINGS PANEL — pestaña Ajustes
// Tema · idioma · cuadrícula · reset · export/import JSON · about
// =====================================================================

const THEMES = [
  { key: 'pergamino',   label: 'Pergamino', preview: ['#f5ecd2','#b8902c','#a02828'] },
  { key: 'light',       label: 'Light',     preview: ['#fbfaf5','#b8902c','#98262e'] },
  { key: 'dark',        label: 'Dark',      preview: ['#1f1d1a','#c8a050','#b03030'] },
  { key: 'verdant',     label: 'Verdant',   preview: ['#2a3a22','#d4a840','#b02828'] },
  { key: 'navy',        label: 'Navy',      preview: ['#0e1828','#d4a840','#c04848'] },
  { key: 'cyber-yellow',label: 'Cyber Y',   preview: ['#1a1605','#f5d020','#ff8020'] },
  { key: 'cyber-red',   label: 'Cyber R',   preview: ['#1a0608','#ff4040','#ff2050'] },
];

const LANGS = [
  { key: 'es', label: 'Español' },
  { key: 'en', label: 'English' },
];

const GRIDS = [
  { key: 'square', labelKey: 'gridSquare' },
  { key: 'hex',    labelKey: 'gridHex' },
];

function MstSettings({
  lang, theme, gridKind, savedAt,
  onSetLang, onSetTheme, onSetGrid,
  onResetEncounter, onEmptyEncounter, /* MST-J02 */
  snapToGrid, onToggleSnapToGrid, /* MST-J05 */
  onExport, onImportFile, onClearSaved,
  onImportFromSheet, onImportPJFromFile,
  // Mapa avanzado
  mapBg, onChangeBgImage, onChangeBgColor, onResetBg,
  fogRevealAll, fogHideAll, fogBrush, onSetFogBrush,
  clearAllTemplates, clearAllNotes,
  // Snapshots
  snapshots, onCreateSnapshot, onLoadSnapshot, onDeleteSnapshot, onCompareSnapshot,
  // Sonidos
  soundsOn, onToggleSounds,
  // Modo TV/streamer
  streamMode, onToggleStreamMode,
  // Notificaciones
  notifsOn, onToggleNotifs,
  // Tema auto
  themeAuto, onToggleThemeAuto,
  // Encuentros custom
  customEncounters, onImportEncounterFile, onLoadEncounter, onDeleteEncounter,
}) {
  const t = window.MstData.I18N[lang];
  const fileRef = React.useRef(null);
  const [flash, setFlash] = React.useState(null); // { kind:'ok'|'err', text }

  const showFlash = (kind, text) => {
    setFlash({ kind, text });
    setTimeout(() => setFlash(null), 2400);
  };

  const onPickImport = () => fileRef.current && fileRef.current.click();
  const bgFileRef = React.useRef(null);
  const onPickBg = () => bgFileRef.current && bgFileRef.current.click();
  const onBgFileChange = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (f && onChangeBgImage) onChangeBgImage(f);
  };
  const pjFileRef = React.useRef(null);
  const onPickPJ = () => pjFileRef.current && pjFileRef.current.click();
  const encFileRef = React.useRef(null);
  const onPickEnc = () => encFileRef.current && encFileRef.current.click();
  const onEncFileChange = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const entry = await onImportEncounterFile(f);
      if (entry) showFlash('ok', `${entry.name} ${t.imported || 'guardado'}`);
    } catch (err) {
      showFlash('err', (t.importErr || 'Error') + ': ' + (err && err.message || err));
    }
  };
  const onPJFileChange = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const tk = await onImportPJFromFile(f);
      if (tk) showFlash('ok', `${tk.name} ${t.importFromSheetOk || 'importado'}`);
    } catch (err) {
      showFlash('err', (t.importFromSheetErr || 'Error') + ': ' + (err && err.message || err));
    }
  };

  const onFileChange = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      await onImportFile(f);
      showFlash('ok', t.importOk || 'Importado');
    } catch (err) {
      showFlash('err', (t.importErr || 'Error') + ': ' + err.message);
    }
  };

  const fmtDate = (ts) => {
    if (!ts) return null;
    const d = new Date(ts);
    return d.toLocaleString(lang === 'es' ? 'es-ES' : 'en-US', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="mst-settings">
      {flash && (
        <div className={"mst-settings-flash " + flash.kind}>{flash.text}</div>
      )}

      {/* APARIENCIA */}
      <div className="mst-settings-section">
        <div className="mst-settings-section-title">{t.appearance || 'Apariencia'}</div>

        {onToggleThemeAuto && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.themeAuto || 'Tema automático'}
              <div className="hint">{t.themeAutoHelp || 'Tema oscuro de noche (20:00–08:00), claro de día'}</div>
            </div>
            <div className="mst-segmented">
              <button type="button" className={"seg " + (themeAuto ? 'active' : '')} onClick={() => onToggleThemeAuto(true)}>{t.on || 'On'}</button>
              <button type="button" className={"seg " + (!themeAuto ? 'active' : '')} onClick={() => onToggleThemeAuto(false)}>{t.off || 'Off'}</button>
            </div>
          </div>
        )}

        <div className="mst-settings-row">
          <div className="lbl">{t.theme || 'Tema'}</div>
          <div className="mst-theme-grid">
            {THEMES.map(th => (
              <button
                key={th.key}
                type="button"
                className={"mst-theme-card " + (theme === th.key ? 'active' : '')}
                onClick={() => onSetTheme(th.key)}
                title={th.label}
              >
                <div className="swatches">
                  {th.preview.map((c, i) => (
                    <span key={i} style={{ background: c }} />
                  ))}
                </div>
                <span className="name">{th.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mst-settings-row">
          <div className="lbl">{t.language || 'Idioma'}</div>
          <div className="mst-segmented">
            {LANGS.map(l => (
              <button
                key={l.key}
                type="button"
                className={"seg " + (lang === l.key ? 'active' : '')}
                onClick={() => onSetLang(l.key)}
              >{l.label}</button>
            ))}
          </div>
        </div>

        {onToggleSounds && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.sounds || 'Sonidos'}
              <div className="hint">{t.soundsHelp || 'Crit, KO y nueva ronda'}</div>
            </div>
            <div className="mst-segmented">
              <button type="button" className={"seg " + (soundsOn ? 'active' : '')} onClick={() => onToggleSounds(true)}>{t.on || 'On'}</button>
              <button type="button" className={"seg " + (!soundsOn ? 'active' : '')} onClick={() => onToggleSounds(false)}>{t.off || 'Off'}</button>
            </div>
          </div>
        )}

        {onToggleStreamMode && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.streamMode || 'Modo TV/streamer'}
              <div className="hint">{t.streamHelp || 'Oculta controles, deja solo mapa + iniciativa para mostrar al grupo'}</div>
            </div>
            <button
              type="button"
              className={"mst-modal-btn " + (streamMode ? 'primary' : '')}
              onClick={() => onToggleStreamMode(!streamMode)}
            >
              {streamMode ? (t.streamExit || 'Salir') : (t.streamEnter || 'Activar')}
            </button>
          </div>
        )}

        {onToggleNotifs && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.notifs || 'Notificaciones'}
              <div className="hint">{t.notifsHelp || 'Avisos del navegador cuando la pestaña está oculta (KO, ronda nueva)'}</div>
            </div>
            <div className="mst-segmented">
              <button type="button" className={"seg " + (notifsOn ? 'active' : '')} onClick={() => onToggleNotifs(true)}>{t.on || 'On'}</button>
              <button type="button" className={"seg " + (!notifsOn ? 'active' : '')} onClick={() => onToggleNotifs(false)}>{t.off || 'Off'}</button>
            </div>
          </div>
        )}
      </div>

      {/* MESA */}
      <div className="mst-settings-section">
        <div className="mst-settings-section-title">{t.gameTable || 'Mesa de juego'}</div>

        <div className="mst-settings-row">
          <div className="lbl">{t.gridLabel || 'Cuadrícula'}</div>
          <div className="mst-segmented">
            {GRIDS.map(g => (
              <button
                key={g.key}
                type="button"
                className={"seg " + (gridKind === g.key ? 'active' : '')}
                onClick={() => onSetGrid(g.key)}
              >{t[g.labelKey]}</button>
            ))}
          </div>
        </div>

        {/* MST-J05: snap a celda al mover tokens */}
        {onToggleSnapToGrid && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.snapToGrid || 'Imantar a celda'}
              <div className="hint">{t.snapToGridHelp || 'Los tokens se alinean al centro de la cuadrícula al moverlos'}</div>
            </div>
            <div className="mst-segmented">
              <button type="button" className={"seg " + (snapToGrid ? 'active' : '')} onClick={() => onToggleSnapToGrid(true)}>{t.on || 'On'}</button>
              <button type="button" className={"seg " + (!snapToGrid ? 'active' : '')} onClick={() => onToggleSnapToGrid(false)}>{t.off || 'Off'}</button>
            </div>
          </div>
        )}

        <div className="mst-settings-row">
          <div className="lbl">
            {t.resetEncounter || 'Reiniciar encuentro'}
            <div className="hint">{t.resetHelp}</div>
          </div>
          <button
            type="button"
            className="mst-modal-btn danger"
            onClick={() => {
              if (window.confirm(t.confirmReset || '¿Reiniciar?')) {
                onResetEncounter();
                showFlash('ok', t.resetOk || 'Reiniciado');
              }
            }}
          >
            <window.MstIcon name="rewind" size={14}/>
            <span style={{ marginLeft: 6 }}>{t.resetEncounter}</span>
          </button>
        </div>

        {/* MST-J02: empezar encuentro vacío manteniendo el mapa */}
        {onEmptyEncounter && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.emptyEncounter || 'Encuentro vacío'}
              <div className="hint">{t.emptyEncounterHelp || 'Limpia tokens, niebla y plantillas. Empieza en R1 con el mapa actual.'}</div>
            </div>
            <button
              type="button"
              className="mst-modal-btn"
              onClick={() => { onEmptyEncounter(); showFlash('ok', t.emptyEncounter || 'Encuentro vacío'); }}
            >
              <window.MstIcon name="plus" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.emptyEncounterAction || 'Encuentro vacío'}</span>
            </button>
          </div>
        )}
      </div>

      {/* PERSISTENCIA */}
      <div className="mst-settings-section">
        <div className="mst-settings-section-title">{t.persistence || 'Persistencia'}</div>

        <div className="mst-settings-row">
          <div className="lbl">
            {savedAt ? (t.savedYes || 'Estado guardado') : (t.savedNo || 'Sin guardado')}
            {savedAt && (
              <div className="hint">{(t.savedAt || 'Última vez') + ': ' + fmtDate(savedAt)}</div>
            )}
            {!savedAt && (
              <div className="hint">{t.savedHelp}</div>
            )}
          </div>
          <div className="mst-status-dot" data-active={savedAt ? 'true' : 'false'} />
        </div>

        <div className="mst-settings-row">
          <div className="lbl">
            {t.exportJson || 'Exportar JSON'}
            <div className="hint">{t.exportHelp}</div>
          </div>
          <div style={{ display:'flex', gap: 6, flexWrap:'wrap' }}>
            <button type="button" className="mst-modal-btn" onClick={() => { onExport(); showFlash('ok', t.exportOk || 'Descargado'); }}>
              <window.MstIcon name="download" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.exportJson}</span>
            </button>
            <button type="button" className="mst-modal-btn" onClick={onPickImport}>
              <window.MstIcon name="upload" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.importJson}</span>
            </button>
            <input ref={fileRef} type="file" accept="application/json,.json" style={{ display: 'none' }} onChange={onFileChange} />
          </div>
        </div>

        {savedAt && (
          <div className="mst-settings-row">
            <div className="lbl">
              {t.clearSaved || 'Borrar guardado'}
            </div>
            <button
              type="button"
              className="mst-modal-btn danger"
              onClick={() => {
                if (window.confirm(t.confirmClearSaved || '¿Borrar?')) {
                  onClearSaved();
                  showFlash('ok', t.clearedOk || 'Borrado');
                }
              }}
            >
              <window.MstIcon name="x" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.clearSaved}</span>
            </button>
          </div>
        )}
      </div>

      {/* MAPA AVANZADO */}
      {(onChangeBgImage || fogRevealAll || clearAllTemplates) && (
        <div className="mst-settings-section">
          <div className="mst-settings-section-title">{t.lblBackground || 'Mapa avanzado'}</div>

          {onChangeBgImage && (
            <div className="mst-settings-row">
              <div className="lbl">
                {t.bgChange || 'Fondo del mapa'}
                <div className="hint">{mapBg ? (t.lblBackground || 'Custom activo') : (t.gridLabel || 'Cuadrícula por defecto')}</div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <button type="button" className="mst-modal-btn" onClick={onPickBg}>
                  <window.MstIcon name="image" size={14}/>
                  <span style={{ marginLeft: 6 }}>{t.bgUpload || 'Subir imagen'}</span>
                </button>
                <input
                  type="color"
                  onChange={(e) => onChangeBgColor && onChangeBgColor(e.target.value)}
                  title={t.bgColor || 'Color sólido'}
                  style={{ width: 40, height: 32, padding: 0, border: '1px solid var(--line)', borderRadius: 6 }}
                />
                <button type="button" className="mst-modal-btn" onClick={onResetBg}>
                  <window.MstIcon name="rewind" size={14}/>
                  <span style={{ marginLeft: 6 }}>{t.bgReset || 'Restaurar'}</span>
                </button>
                <input ref={bgFileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onBgFileChange}/>
              </div>
            </div>
          )}

          {(fogRevealAll || fogHideAll) && (
            <>
              <div className="mst-settings-row">
                <div className="lbl">
                  {t.lblFog || 'Niebla'}
                  <div className="hint">{t.fogHint || 'Toca el mapa con el modo niebla activo'}</div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  <button type="button" className="mst-modal-btn" onClick={fogRevealAll}>{t.fogReveal || 'Revelar todo'}</button>
                  <button type="button" className="mst-modal-btn" onClick={fogHideAll}>{t.fogHide || 'Ocultar todo'}</button>
                </div>
              </div>
              {onSetFogBrush && (
                <div className="mst-settings-row">
                  <div className="lbl">{t.fogBrush || 'Pincel niebla'}</div>
                  <div className="mst-segmented">
                    {[1, 3, 5].map(n => (
                      <button
                        key={n}
                        type="button"
                        className={"seg " + (fogBrush === n ? 'active' : '')}
                        onClick={() => onSetFogBrush(n)}
                      >{n}×{n}</button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* 2026-05-07: i18n separado para distinguir entre Limpiar plantillas/notas/niebla. */}
          {clearAllTemplates && (
            <div className="mst-settings-row">
              <div className="lbl">{t.lblTemplates || 'Plantillas'}</div>
              <button type="button" className="mst-modal-btn danger" onClick={clearAllTemplates}>
                <window.MstIcon name="x" size={14}/>
                <span style={{ marginLeft: 6 }}>{t.tplClear || t.fogClear || 'Borrar plantillas'}</span>
              </button>
            </div>
          )}

          {clearAllNotes && (
            <div className="mst-settings-row">
              <div className="lbl">{t.lblNote || 'Notas'}</div>
              <button type="button" className="mst-modal-btn danger" onClick={clearAllNotes}>
                <window.MstIcon name="x" size={14}/>
                <span style={{ marginLeft: 6 }}>{t.notesClear || t.fogClear || 'Borrar notas'}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* ENCUENTROS CUSTOM */}
      {onImportEncounterFile && (
        <div className="mst-settings-section">
          <div className="mst-settings-section-title">{t.customEncounters || 'Encuentros custom'}</div>
          <div className="mst-settings-row">
            <div className="lbl">
              {t.importEncounter || 'Importar encuentro'}
              <div className="hint">{t.importEncounterHelp || 'JSON con grid + tokens. Se guarda como plantilla local reutilizable.'}</div>
            </div>
            <button type="button" className="mst-modal-btn" onClick={onPickEnc}>
              <window.MstIcon name="upload" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.importEncounter || 'Importar'}</span>
            </button>
            <input ref={encFileRef} type="file" accept="application/json,.json" style={{ display: 'none' }} onChange={onEncFileChange}/>
          </div>
          {Array.isArray(customEncounters) && customEncounters.length > 0 && (
            <div className="mst-snapshots-list">
              {customEncounters.map(e => (
                <div key={e.id} className="mst-snapshot-row">
                  <div className="info">
                    <div className="name">{e.name}</div>
                    <div className="ts">{(e.data && e.data.tokens && e.data.tokens.length) || 0} tokens</div>
                  </div>
                  <div className="actions">
                    <button type="button" className="mst-modal-btn" onClick={() => onLoadEncounter && onLoadEncounter(e.id)}>
                      <window.MstIcon name="map" size={12}/>
                      <span style={{ marginLeft: 4 }}>{t.snapshotLoad || 'Cargar'}</span>
                    </button>
                    <button type="button" className="mst-modal-btn danger" onClick={() => onDeleteEncounter && onDeleteEncounter(e.id)} aria-label={t.delete || 'Borrar'}>
                      <window.MstIcon name="x" size={12}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SNAPSHOTS */}
      {onCreateSnapshot && (
        <div className="mst-settings-section">
          <div className="mst-settings-section-title">{t.snapshots || 'Snapshots'}</div>
          <div className="mst-settings-row">
            <div className="lbl">
              {t.snapshotCreate || 'Crear snapshot'}
              <div className="hint">{t.snapshotHelp || 'Punto de retorno del estado completo. Útil antes de un turno crítico.'}</div>
            </div>
            <button type="button" className="mst-modal-btn primary" onClick={onCreateSnapshot}>
              <window.MstIcon name="save-disk" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.snapshotCreate || 'Crear'}</span>
            </button>
          </div>
          {Array.isArray(snapshots) && snapshots.length > 0 && (
            <div className="mst-snapshots-list">
              {snapshots.map(s => (
                <div key={s.id} className="mst-snapshot-row">
                  <div className="info">
                    <div className="name">{s.name}</div>
                    <div className="ts">{fmtDate(s.ts)}</div>
                  </div>
                  <div className="actions">
                    {onCompareSnapshot && (
                      <button
                        type="button"
                        className="mst-modal-btn"
                        onClick={() => onCompareSnapshot(s.id)}
                        title={t.snapshotCompare || 'Comparar con actual'}
                        aria-label={t.snapshotCompare || 'Comparar'}
                      >
                        <window.MstIcon name="search" size={12}/>
                      </button>
                    )}
                    <button type="button" className="mst-modal-btn" onClick={() => onLoadSnapshot && onLoadSnapshot(s.id)}>
                      <window.MstIcon name="upload" size={12}/>
                      <span style={{ marginLeft: 4 }}>{t.snapshotLoad || 'Cargar'}</span>
                    </button>
                    <button type="button" className="mst-modal-btn danger" onClick={() => onDeleteSnapshot && onDeleteSnapshot(s.id)} aria-label={t.delete || 'Borrar'}>
                      <window.MstIcon name="x" size={12}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* INTEGRACIÓN CON LA FICHA */}
      {onImportFromSheet && (
        <div className="mst-settings-section">
          <div className="mst-settings-section-title">{t.fichaIntegration || 'Integración con la ficha'}</div>
          <div className="mst-settings-row">
            <div className="lbl">
              {t.importFromSheet || 'Importar PJs de la ficha'}
              <div className="hint">{t.importFromSheetHelp || 'Pide al navegador padre los PJs activos. Si no hay padre, intenta leer el estado de la ficha en este dispositivo.'}</div>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <button
                type="button"
                className="mst-modal-btn"
                onClick={async () => {
                  try {
                    const tokens = await onImportFromSheet();
                    if (tokens && tokens.length) {
                      showFlash('ok', `${tokens.length} ${t.importFromSheetOk || 'PJs importados'}`);
                    } else {
                      showFlash('err', t.importFromSheetEmpty || 'Sin PJs disponibles');
                    }
                  } catch (err) {
                    showFlash('err', (t.importFromSheetErr || 'Error') + ': ' + (err && err.message || err));
                  }
                }}
              >
                <window.MstIcon name="upload" size={14}/>
                <span style={{ marginLeft: 6 }}>{t.importFromSheet || 'PJ activo'}</span>
              </button>
              {onImportPJFromFile && (
                <button type="button" className="mst-modal-btn" onClick={onPickPJ}>
                  <window.MstIcon name="upload" size={14}/>
                  <span style={{ marginLeft: 6 }}>{t.importPJFromFile || 'Desde JSON'}</span>
                </button>
              )}
              <input ref={pjFileRef} type="file" accept="application/json,.json" style={{ display: 'none' }} onChange={onPJFileChange}/>
            </div>
          </div>
        </div>
      )}

      {/* ABOUT */}
      <div className="mst-settings-section">
        <div className="mst-settings-section-title">{t.about || 'Acerca de'}</div>
        <div className="mst-settings-about">
          <div className="brand">{t.appTitle || 'Master Mode'}</div>
          <div className="tag">{t.aboutTagline}</div>
          <div className="meta">{t.localOnly}</div>
        </div>
      </div>
    </div>
  );
}

window.MstSettings = MstSettings;
