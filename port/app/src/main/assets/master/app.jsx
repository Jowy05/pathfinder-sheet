// =====================================================================
// MASTER APP — orquesta map + drawer + iniciativa + header + bottom-nav
// Soporta 3 variaciones: layout drawer, init position, density
// =====================================================================
const { useState: useStateA, useEffect: useEffectA, useMemo: useMemoA } = React;

// =====================================================================
// AddTokenModal — formulario simple para crear un token
// =====================================================================
function AddTokenModal({ open, onClose, onSubmit, lang }) {
  const t = window.MstData.I18N[lang];
  /* MST-J07: paleta de 8 colores preset + foto opcional */
  const COLOR_PRESETS = [
    '#3a78c8', // azul aliado
    '#5aa86a', // verde
    '#a83828', // rojo
    '#7a2828', // granate
    '#88481a', // naranja terroso
    '#5a2078', // morado
    '#c89030', // dorado
    '#3a3a3a', // gris/negro
  ];
  const [form, setForm] = React.useState({
    name: '', kind: 'enemy', hpMax: 20, ac: 15, ini: 10,
    color: COLOR_PRESETS[2], photo: null,
  });
  const photoInputRef = React.useRef(null);
  React.useEffect(() => {
    if (open) setForm({ name: '', kind: 'enemy', hpMax: 20, ac: 15, ini: 10, color: COLOR_PRESETS[2], photo: null });
  }, [open]);
  if (!open) return null;
  const submit = (e) => {
    if (e) e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit({
      name: form.name.trim(),
      kind: form.kind,
      hpMax: parseInt(form.hpMax, 10) || 20,
      ac: parseInt(form.ac, 10) || 15,
      ini: parseInt(form.ini, 10) || 10,
      color: form.color,
      photo: form.photo,
    });
    onClose();
  };
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  /* MST-J07/J08: leer la foto y down-scalear a 1024px+JPEG 0.8 */
  const onPickPhoto = () => photoInputRef.current && photoInputRef.current.click();
  const onPhotoChange = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(reader.error);
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const maxDim = 1024;
            let w = img.width, h = img.height;
            const ratio = Math.min(1, maxDim / Math.max(w, h));
            w = Math.round(w * ratio); h = Math.round(h * ratio);
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            resolve(canvas.toDataURL('image/jpeg', 0.8));
          };
          img.onerror = () => reject(new Error('decode failed'));
          img.src = reader.result;
        };
        reader.readAsDataURL(f);
      });
      set('photo', dataUrl);
    } catch (err) { console.warn('photo upload failed', err); }
  };
  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {t.addCombatant || 'Añadir combatiente'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <form onSubmit={submit} className="mst-modal-body">
          <label className="mst-field">
            <span className="lbl">{t.editName || 'Nombre'}</span>
            <input
              autoFocus
              type="text"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              placeholder="Ej. Goblin"
            />
          </label>
          <label className="mst-field">
            <span className="lbl">{t.kind || 'Tipo'}</span>
            <select value={form.kind} onChange={e => set('kind', e.target.value)}>
              <option value="pj">{t.kindPJ || 'PJ'}</option>
              <option value="ally">{t.kindAlly || 'Aliado'}</option>
              <option value="enemy">{t.kindEnemy || 'Enemigo'}</option>
              <option value="pet">{t.kindPet || 'Mascota'}</option>
              <option value="neutral">{t.kindNeutral || 'Neutral'}</option>
            </select>
          </label>
          <div className="mst-field-row">
            <label className="mst-field">
              <span className="lbl">{t.hp || 'HP'}</span>
              <input type="number" inputMode="numeric" value={form.hpMax} onChange={e => set('hpMax', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.ac || 'CA'}</span>
              <input type="number" inputMode="numeric" value={form.ac} onChange={e => set('ac', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.initiative || 'Iniciativa'}</span>
              <input type="number" inputMode="numeric" value={form.ini} onChange={e => set('ini', e.target.value)} />
            </label>
          </div>

          {/* MST-J07: color picker (8 presets) */}
          <div className="mst-field">
            <span className="lbl">{t.tokenColor || 'Color'}</span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {COLOR_PRESETS.map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => set('color', c)}
                  aria-label={c}
                  style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: c,
                    border: form.color === c ? '2px solid var(--gold)' : '2px solid var(--line)',
                    cursor: 'pointer',
                    boxShadow: form.color === c ? '0 0 0 2px rgba(0,0,0,.25)' : 'none',
                  }}
                />
              ))}
            </div>
          </div>

          {/* MST-J07: foto opcional (down-scaled MST-J08 internamente) */}
          <div className="mst-field">
            <span className="lbl">{t.tokenPhoto || 'Foto'}</span>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {form.photo ? (
                <img src={form.photo} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--line)' }}/>
              ) : (
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: form.color, border: '1px solid var(--line)' }}/>
              )}
              <button type="button" className="mst-modal-btn" onClick={onPickPhoto}>
                <window.MstIcon name="upload" size={14}/>
                <span style={{ marginLeft: 6 }}>{form.photo ? (t.replace || 'Cambiar') : (t.bgUpload || 'Subir')}</span>
              </button>
              {form.photo && (
                <button type="button" className="mst-modal-btn" onClick={() => set('photo', null)} aria-label={t.remove || 'Quitar'}>
                  <window.MstIcon name="x" size={14}/>
                </button>
              )}
              <input ref={photoInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onPhotoChange}/>
            </div>
          </div>

          <div className="mst-modal-actions">
            <button type="button" className="mst-modal-btn" onClick={onClose}>{t.cancel || 'Cancelar'}</button>
            <button type="submit" className="mst-modal-btn primary" disabled={!form.name.trim()}>
              {t.add || 'Añadir'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// =====================================================================
// MST-J04: PromptModal / ConfirmModal — modales React reutilizables
// que reemplazan a window.prompt() / window.confirm() (no soportados
// fiable en WebView Android, además rompen la estética del modo).
// =====================================================================
function PromptModal({ open, title, message, defaultValue, placeholder, okLabel, cancelLabel, onSubmit, onClose }) {
  const [val, setVal] = React.useState('');
  React.useEffect(() => { if (open) setVal(defaultValue || ''); }, [open, defaultValue]);
  if (!open) return null;
  const submit = (e) => {
    if (e) e.preventDefault();
    const v = (val || '').trim();
    if (!v) { onClose && onClose(); return; }
    onSubmit && onSubmit(v);
  };
  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {title || 'Introduce un valor'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <form onSubmit={submit} className="mst-modal-body">
          {message && <div style={{ marginBottom: 8, opacity: .85 }}>{message}</div>}
          <label className="mst-field">
            <input
              autoFocus
              type="text"
              value={val}
              onChange={e => setVal(e.target.value)}
              placeholder={placeholder || ''}
            />
          </label>
          <div className="mst-modal-actions">
            <button type="button" className="mst-modal-btn" onClick={onClose}>{cancelLabel || 'Cancelar'}</button>
            <button type="submit" className="mst-modal-btn primary" disabled={!(val || '').trim()}>
              {okLabel || 'Aceptar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ConfirmModal({ open, title, message, okLabel, cancelLabel, danger, onConfirm, onClose }) {
  if (!open) return null;
  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {title || '¿Confirmar?'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <div className="mst-modal-body">
          {message && <div style={{ marginBottom: 8 }}>{message}</div>}
          <div className="mst-modal-actions">
            <button type="button" className="mst-modal-btn" onClick={onClose}>{cancelLabel || 'Cancelar'}</button>
            <button
              type="button"
              className={"mst-modal-btn " + (danger ? 'danger' : 'primary')}
              onClick={() => { onConfirm && onConfirm(); }}
            >{okLabel || 'Aceptar'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

window.MstPromptModal = PromptModal;
window.MstConfirmModal = ConfirmModal;

// =====================================================================
// BuffPickerModal — selector de estados/buffs con duración
// Pestañas: Estados (debuffs) / Buffs / Personalizado
// Permite elegir un preset o escribir uno propio + duración en rondas
// (0 = permanente, hasta que se quite a mano)
// =====================================================================
function BuffPickerModal({ open, onClose, onAdd, lang }) {
  const t = window.MstData.I18N[lang];
  const lib = window.MstData.BUFF_LIBRARY;
  const [tab, setTab] = React.useState('debuff'); // 'debuff' | 'buff' | 'custom'
  const [picked, setPicked] = React.useState(null); // { key, kind, label, icon } | null
  const [customLabel, setCustomLabel] = React.useState('');
  const [rounds, setRounds] = React.useState(3);

  React.useEffect(() => {
    if (open) {
      setTab('debuff');
      setPicked(null);
      setCustomLabel('');
      setRounds(3);
    }
  }, [open]);

  if (!open) return null;

  const presets = tab === 'debuff' ? lib.debuffs : tab === 'buff' ? lib.buffs : [];

  const submit = () => {
    let entry;
    if (tab === 'custom') {
      const lbl = customLabel.trim();
      if (!lbl) return;
      entry = { key: 'custom_' + Date.now().toString(36), label: lbl, kind: 'debuff', icon: '✦' };
    } else {
      if (!picked) return;
      entry = { key: picked.key, kind: tab, icon: picked.icon };
    }
    const r = parseInt(rounds, 10);
    if (r > 0) entry.rounds = r;
    onAdd(entry);
    onClose();
  };

  const canSubmit = tab === 'custom' ? !!customLabel.trim() : !!picked;

  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()} style={{ width: 'min(480px, 100%)' }}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {t.lblAddBuff || 'Añadir estado'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <div className="mst-modal-body">
          {/* Tabs */}
          <div className="mst-buff-tabs">
            <button type="button" className={"mst-buff-tab" + (tab==='debuff'?' active':'')} onClick={() => { setTab('debuff'); setPicked(null); }}>
              {t.debuffs || 'Estados'}
            </button>
            <button type="button" className={"mst-buff-tab" + (tab==='buff'?' active':'')} onClick={() => { setTab('buff'); setPicked(null); }}>
              {t.buffs || 'Buffs'}
            </button>
            <button type="button" className={"mst-buff-tab" + (tab==='custom'?' active':'')} onClick={() => { setTab('custom'); setPicked(null); }}>
              {t.custom || 'Personalizado'}
            </button>
          </div>

          {/* Grid de presets */}
          {tab !== 'custom' && (
            <div className="mst-buff-grid">
              {presets.map(p => {
                const isSel = picked && picked.key === p.key;
                return (
                  <button
                    key={p.key}
                    type="button"
                    className={"mst-buff-card" + (isSel ? ' active' : '') + ' ' + tab}
                    onClick={() => setPicked(p)}
                  >
                    <span className="ic">{p.icon}</span>
                    <span className="lbl">{window.MstData.buffLabel({ key: p.key }, lang)}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Custom label */}
          {tab === 'custom' && (
            <label className="mst-field">
              <span className="lbl">{t.editName || 'Nombre'}</span>
              <input
                autoFocus
                type="text"
                value={customLabel}
                onChange={e => setCustomLabel(e.target.value)}
                placeholder="Ej. Marcado, Maldito…"
              />
            </label>
          )}

          {/* Duración */}
          <div className="mst-buff-duration">
            <span className="lbl">{t.duration || 'Duración'}</span>
            <div className="dur-controls">
              <button type="button" className="dur-btn" onClick={() => setRounds(r => Math.max(0, parseInt(r,10) - 1))} aria-label="-1">−</button>
              <input
                type="number"
                inputMode="numeric"
                min={0}
                value={rounds}
                onChange={e => setRounds(e.target.value)}
              />
              <button type="button" className="dur-btn" onClick={() => setRounds(r => parseInt(r,10) + 1)} aria-label="+1">+</button>
              <span className="dur-unit">{rounds == 0 ? (t.permanent || 'permanente') : (t.rounds || 'rondas')}</span>
            </div>
          </div>

          <div className="mst-modal-actions">
            <button type="button" className="mst-modal-btn" onClick={onClose}>{t.cancel || 'Cancelar'}</button>
            <button type="button" className="mst-modal-btn primary" onClick={submit} disabled={!canSubmit}>
              {t.add || 'Añadir'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// DamageModal — flujo "ataque tirado → preguntar daño → aplicar a objetivo"
// El attacker tiró 1d20+toHit; aquí el master ve si acierta, mete daño
// (expresión libre tipo "1d8+3"), opcionalmente activa crit (doblar daño)
// y elige objetivo entre los tokens vivos. Aplica via onApplyDamage(id, n).
// =====================================================================
// Detecta tipo de daño desde un fragmento libre ("cortante", "1d6 de fuego")
function detectDamageType(s) {
  const txt = String(s || '').toLowerCase();
  const map = {
    slash: ['slash', 'cortante', 'cortar'],
    pierce: ['pierce', 'perforante', 'perfor'],
    blunt: ['blunt', 'contundente', 'contund'],
    fire: ['fire', 'fuego'],
    cold: ['cold', 'frío', 'frio'],
    acid: ['acid', 'ácido', 'acido'],
    electric: ['electric', 'lightning', 'electri', 'rayo'],
    sonic: ['sonic', 'sonico', 'sónico', 'sonido'],
    force: ['force', 'fuerza'],
    negative: ['negative', 'negativo'],
    positive: ['positive', 'positivo'],
    mental: ['mental'],
  };
  for (const k of Object.keys(map)) {
    if (map[k].some(needle => txt.includes(needle))) return k;
  }
  return null;
}

// Parser robusto de cadenas de daño compuesto:
//   "1d8+3 cortante + 1d6 fuego"  → [{expr:'1d8+3', type:'slash'}, {expr:'1d6', type:'fire'}]
// Si no detecta el "+" entre partes, devuelve una sola entrada.
function parseCompoundDamage(s) {
  const raw = String(s || '').trim();
  if (!raw) return [{ expr: '1d6', type: 'slash' }];
  // Split por "+" o "+" seguido de algo no numérico (para no romper "1d8+3")
  // → primero detectamos las partes con dado: cada parte arranca con "Nd"
  const parts = [];
  // Regex: captura un grupo de "[Nd][número]+modifier" seguido del resto descriptivo
  const re = /(\d*d\d+(?:\s*[+\-]\s*\d+)?)([^+]*)/gi;
  let m;
  while ((m = re.exec(raw)) !== null) {
    const expr = m[1].replace(/\s+/g, '');
    const type = detectDamageType(m[2]) || 'slash';
    parts.push({ expr, type });
  }
  if (!parts.length) return [{ expr: '1d6', type: detectDamageType(raw) || 'slash' }];
  return parts;
}

function DamageModal({ open, pending, tokens, onClose, onApply, lang }) {
  const t = window.MstData.I18N[lang];
  // Cada parte de daño es una fila independiente con expresión + tipo
  const [parts, setParts] = React.useState([{ expr: '1d6', type: 'slash' }]);
  const [crit, setCrit] = React.useState(false);
  const [targetId, setTargetId] = React.useState('');

  React.useEffect(() => {
    if (open && pending) {
      const dmgStr = String(pending.attack.dmg || '');
      setParts(parseCompoundDamage(dmgStr));
      setCrit(pending.result.natural === 20);
      // Preselecciona el primer objetivo vivo distinto del atacante
      const firstAlive = tokens.find(tk => tk.hp > 0 && tk.id !== pending.attacker.id);
      setTargetId(firstAlive ? firstAlive.id : '');
    }
  }, [open, pending]);

  if (!open || !pending) return null;

  const target = tokens.find(tk => tk.id === targetId);
  const aliveTargets = tokens.filter(tk => tk.id !== pending.attacker.id);

  const doApply = () => {
    if (!target) return;
    const cleanParts = parts
      .map(p => ({ expr: String(p.expr || '').trim(), type: p.type || 'slash' }))
      .filter(p => p.expr);
    if (!cleanParts.length) return;
    // Tirar cada parte y aplicar resists individualmente — onApply recibe
    // la lista para que el caller lo loguee parte a parte.
    const rolled = cleanParts.map(p => {
      const r = window.MstDice.rollDice(p.expr);
      const total = Math.max(0, crit ? r.total * 2 : r.total);
      return { expr: p.expr, type: p.type, rollResult: r, raw: total };
    });
    onApply({
      pending,
      target,
      crit,
      parts: rolled,
    });
    onClose();
  };

  const setPart = (i, patch) => setParts(arr => arr.map((p, j) => j === i ? { ...p, ...patch } : p));
  const addPart = () => setParts(arr => [...arr, { expr: '1d6', type: 'fire' }]);
  const removePart = (i) => setParts(arr => arr.filter((_, j) => j !== i));

  const skip = () => {
    onApply({ pending, skipped: true });
    onClose();
  };

  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()} style={{ width: 'min(440px, 100%)' }}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {t.applyDamage || 'Aplicar daño'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <div className="mst-modal-body">
          {/* Resultado de la tirada de ataque */}
          <div className={"mst-dmg-roll " +
            (pending.result.natural === 20 ? 'crit' : '') +
            (pending.result.natural === 1 ? ' fumble' : '')}>
            <div className="lbl">
              {pending.attacker.name} · {pending.attack.name}
            </div>
            <div className="val">
              <window.MstIcon name="dice" size={16}/>
              <span className="num">{pending.result.total}</span>
              <span className="raw">d20[{pending.result.natural}] {pending.attack.tohit}</span>
            </div>
            {pending.result.natural === 20 && <div className="tag crit">{t.critNatural || '¡20 NATURAL!'}</div>}
            {pending.result.natural === 1  && <div className="tag fumble">{t.fumbleNatural || '¡PIFIA!'}</div>}
          </div>

          {/* Daño multi-parte: cada fila es una expresión + tipo independiente */}
          <div className="mst-field">
            <span className="lbl">{t.damageExpr || 'Daño'}</span>
            <div className="mst-attacks-editor">
              {parts.map((p, i) => (
                <div key={i} className="row" style={{ gridTemplateColumns: '1.2fr 1fr 28px' }}>
                  <input
                    type="text"
                    value={p.expr}
                    onChange={e => setPart(i, { expr: e.target.value })}
                    placeholder="1d8+3"
                    spellCheck={false}
                  />
                  <select value={p.type} onChange={e => setPart(i, { type: e.target.value })}>
                    {window.MstData.DAMAGE_TYPES.map(dt => (
                      <option key={dt} value={dt}>{t['damageType_' + dt] || dt}</option>
                    ))}
                  </select>
                  {parts.length > 1 && (
                    <button
                      type="button"
                      className="del-btn"
                      onClick={() => removePart(i)}
                      aria-label="—"
                    >
                      <window.MstIcon name="x" size={12}/>
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="add-row"
                onClick={addPart}
              >
                <window.MstIcon name="plus" size={12}/>
                {t.addDamagePart || 'Añadir tipo de daño'}
              </button>
            </div>
          </div>

          {/* Crit toggle */}
          <div className="mst-dice-adv" style={{ marginTop: 6 }}>
            <button
              type="button"
              className={"mst-pill-toggle " + (crit ? 'active' : '')}
              onClick={() => setCrit(c => !c)}
            >
              ✦ {t.crit || 'Crítico'} (×2)
            </button>
          </div>

          {/* Objetivo */}
          <label className="mst-field" style={{ marginTop: 10 }}>
            <span className="lbl">{t.target || 'Objetivo'}</span>
            <select value={targetId} onChange={e => setTargetId(e.target.value)}>
              {aliveTargets.length === 0 && <option value="">—</option>}
              {aliveTargets.map(tk => (
                <option key={tk.id} value={tk.id} disabled={tk.hp <= 0}>
                  {tk.name} ({tk.hp}/{tk.hpMax}{tk.hp <= 0 ? ' · KO' : ''})
                </option>
              ))}
            </select>
          </label>

          <div className="mst-modal-actions" style={{ justifyContent: 'space-between' }}>
            <button type="button" className="mst-modal-btn" onClick={skip}>
              {t.miss || 'Falla / sin daño'}
            </button>
            <div style={{ display: 'flex', gap: 6 }}>
              <button type="button" className="mst-modal-btn" onClick={onClose}>{t.cancel || 'Cancelar'}</button>
              <button
                type="button"
                className="mst-modal-btn primary"
                onClick={doApply}
                disabled={!target || !parts.some(p => String(p.expr || '').trim())}
              >
                {t.applyDamage || 'Aplicar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// TemplateModal — selector de plantilla de área (esfera/cono/línea)
// =====================================================================
function TemplateModal({ open, onClose, onConfirm, lang }) {
  const t = window.MstData.I18N[lang];
  const [kind, setKind] = React.useState('circle');
  const [sizeFt, setSizeFt] = React.useState(20);
  const [angle, setAngle] = React.useState(0); // 0=norte, 90=este
  const [color, setColor] = React.useState('#a64545');
  const [snap, setSnap] = React.useState(true); // PF1e: ajustar a casillas exactas

  React.useEffect(() => {
    if (open) {
      setKind('circle');
      setSizeFt(20);
      setAngle(0);
      setColor('#a64545');
      setSnap(true);
    }
  }, [open]);

  if (!open) return null;

  const submit = () => {
    onConfirm({
      kind,
      sizeFt: parseInt(sizeFt, 10) || 10,
      angle: parseInt(angle, 10) || 0,
      color,
      snap,
    });
    onClose();
  };

  const sizeLabel = kind === 'line' ? (t.templateLength || 'Largo (ft)') : (t.templateRadius || 'Radio (ft)');

  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()} style={{ width: 'min(420px, 100%)' }}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {t.lblTemplates || 'Plantilla de área'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <div className="mst-modal-body">
          <div className="mst-template-modal">
            <div className="shape-grid">
              {[
                { k: 'circle', icon: 'circle', lbl: t.templateCircle || 'Esfera' },
                { k: 'cone',   icon: 'cone',   lbl: t.templateCone   || 'Cono' },
                { k: 'line',   icon: 'line',   lbl: t.templateLine   || 'Línea' },
              ].map(s => (
                <button
                  key={s.k}
                  type="button"
                  className={"shape-card " + (kind === s.k ? 'active' : '')}
                  onClick={() => setKind(s.k)}
                >
                  <window.MstIcon name={s.icon} size={28}/>
                  <span className="lbl">{s.lbl}</span>
                </button>
              ))}
            </div>
            <label className="mst-field">
              <span className="lbl">{sizeLabel}</span>
              <input type="number" inputMode="numeric" min={5} step={5} value={sizeFt} onChange={e => setSizeFt(e.target.value)} />
            </label>
            {kind !== 'circle' && (
              <label className="mst-field">
                <span className="lbl">{(t.templateAngle || 'Ángulo')} (0=N, 90=E, 180=S, 270=O)</span>
                <input type="number" inputMode="numeric" value={angle} onChange={e => setAngle(e.target.value)} />
              </label>
            )}
            <label className="mst-field">
              <span className="lbl">{t.color || 'Color'}</span>
              <input type="color" value={color} onChange={e => setColor(e.target.value)} style={{ width: 60, height: 32, padding: 0 }} />
            </label>
            {kind !== 'circle' && (
              <label className="mst-field" style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <input type="checkbox" checked={snap} onChange={e => setSnap(e.target.checked)} />
                <span className="lbl" style={{ marginBottom: 0 }}>{t.snapToGrid || 'Casillas PF1e exactas'}</span>
              </label>
            )}
          </div>
          <div className="mst-modal-actions">
            <button type="button" className="mst-modal-btn" onClick={onClose}>{t.cancel || 'Cancelar'}</button>
            <button type="button" className="mst-modal-btn primary" onClick={submit}>{t.add || 'Colocar'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// GroupSaveModal — salvación en grupo (AoE) contra una CD
// El master elige tipo de save, CD, qué tokens están en el área, y aplica
// la tirada para cada uno; resultado al log con éxito/fallo por entrada.
// =====================================================================
function GroupSaveModal({ open, onClose, onApply, tokens, lang }) {
  const t = window.MstData.I18N[lang];
  const [dc, setDc] = React.useState(15);
  const [saveKind, setSaveKind] = React.useState('ref');
  const [selected, setSelected] = React.useState({});

  React.useEffect(() => {
    if (open) {
      setDc(15);
      setSaveKind('ref');
      // Por defecto seleccionar a todos los vivos
      const m = {};
      tokens.forEach(tk => { if (tk.hp > 0) m[tk.id] = true; });
      setSelected(m);
    }
  }, [open]);

  if (!open) return null;

  const submit = () => {
    const ids = Object.keys(selected).filter(k => selected[k]);
    if (!ids.length) return;
    onApply({ saveKind, dc: parseInt(dc, 10) || 10, ids });
    onClose();
  };

  const toggleAll = (val) => {
    const m = {};
    tokens.forEach(tk => { if (tk.hp > 0) m[tk.id] = val; });
    setSelected(m);
  };

  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()} style={{ width: 'min(440px, 100%)' }}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {t.groupSave || 'Salvación en grupo'}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <div className="mst-modal-body">
          <div className="mst-field-row">
            <label className="mst-field" style={{ flex: 1 }}>
              <span className="lbl">{t.save || 'Salvación'}</span>
              <select value={saveKind} onChange={e => setSaveKind(e.target.value)}>
                <option value="fort">{t.fort || 'Fort'}</option>
                <option value="ref">{t.ref || 'Ref'}</option>
                <option value="will">{t.will || 'Vol'}</option>
              </select>
            </label>
            <label className="mst-field" style={{ flex: 1 }}>
              <span className="lbl">{t.dc || 'CD'}</span>
              <input type="number" inputMode="numeric" value={dc} onChange={e => setDc(e.target.value)}/>
            </label>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, marginBottom: 4 }}>
            <span className="lbl" style={{ font: '700 10px/1 system-ui', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
              {t.affectedTokens || 'Tokens afectados'}
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button type="button" className="mst-modal-btn" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => toggleAll(true)}>{t.all || 'Todos'}</button>
              <button type="button" className="mst-modal-btn" style={{ padding: '4px 8px', fontSize: 11 }} onClick={() => toggleAll(false)}>{t.none || 'Ninguno'}</button>
            </div>
          </div>

          <div className="mst-group-save-list">
            {tokens.filter(tk => tk.hp > 0).map(tk => {
              const sv = tk[saveKind] ?? 0;
              return (
                <label key={tk.id} className="mst-group-save-row">
                  <input
                    type="checkbox"
                    checked={!!selected[tk.id]}
                    onChange={e => setSelected(s => ({ ...s, [tk.id]: e.target.checked }))}
                  />
                  <span className="name">{tk.name}</span>
                  <span className="bonus">{(sv >= 0 ? '+' : '') + sv}</span>
                </label>
              );
            })}
          </div>

          <div className="mst-modal-actions">
            <button type="button" className="mst-modal-btn" onClick={onClose}>{t.cancel || 'Cancelar'}</button>
            <button type="button" className="mst-modal-btn primary" onClick={submit}>
              <window.MstIcon name="dice" size={14}/>
              <span style={{ marginLeft: 6 }}>{t.roll || 'Tirar'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// =====================================================================
// SnapshotDiffModal — diff visual entre el snapshot guardado y el estado
// actual del encuentro. Muestra altas/bajas de tokens, cambios de HP/HP máx,
// cambios de buffs y de ronda.
// =====================================================================
function SnapshotDiffModal({ open, snapshot, current, onClose, lang }) {
  const t = window.MstData.I18N[lang];
  if (!open || !snapshot) return null;

  const sn = snapshot.state || {};
  const a = Array.isArray(sn.tokens) ? sn.tokens : [];
  const b = Array.isArray(current.tokens) ? current.tokens : [];
  const aBy = new Map(a.map(tk => [tk.id, tk]));
  const bBy = new Map(b.map(tk => [tk.id, tk]));

  const added = b.filter(tk => !aBy.has(tk.id));
  const removed = a.filter(tk => !bBy.has(tk.id));
  const both = b.filter(tk => aBy.has(tk.id));
  const hpChanges = both
    .map(now => {
      const before = aBy.get(now.id);
      const dHp = (now.hp ?? 0) - (before.hp ?? 0);
      const dMax = (now.hpMax ?? 0) - (before.hpMax ?? 0);
      return { token: now, before, dHp, dMax };
    })
    .filter(c => c.dHp !== 0 || c.dMax !== 0);

  const buffsBy = (state) => state.buffs || {};
  const aBuffs = buffsBy(sn);
  const bBuffs = buffsBy(current);
  const buffChanges = both
    .map(now => {
      const before = (aBuffs[now.id] || []).map(x => x.key || x.label);
      const after  = (bBuffs[now.id] || []).map(x => x.key || x.label);
      const added = after.filter(k => before.indexOf(k) < 0);
      const removed = before.filter(k => after.indexOf(k) < 0);
      return { token: now, added, removed };
    })
    .filter(c => c.added.length || c.removed.length);

  const roundChanged = (sn.round || 0) !== (current.round || 0);

  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal" onClick={e => e.stopPropagation()} style={{ width: 'min(560px, 100%)' }}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {t.snapshotDiff || 'Comparar snapshot'}: {snapshot.name}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <div className="mst-modal-body" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          {roundChanged && (
            <div className="mst-diff-row">
              <span className="lbl">{t.round || 'Ronda'}:</span>
              <span className="from">{sn.round || 0}</span>
              <span className="arrow">→</span>
              <span className="to">{current.round || 0}</span>
            </div>
          )}
          {added.length > 0 && (
            <div className="mst-diff-section">
              <div className="title positive">{t.diffAdded || 'Añadidos'} ({added.length})</div>
              {added.map(tk => (
                <div key={tk.id} className="mst-diff-row added">+ {tk.name} <span className="dim">({tk.hp}/{tk.hpMax})</span></div>
              ))}
            </div>
          )}
          {removed.length > 0 && (
            <div className="mst-diff-section">
              <div className="title negative">{t.diffRemoved || 'Quitados'} ({removed.length})</div>
              {removed.map(tk => (
                <div key={tk.id} className="mst-diff-row removed">− {tk.name}</div>
              ))}
            </div>
          )}
          {hpChanges.length > 0 && (
            <div className="mst-diff-section">
              <div className="title">{t.diffHp || 'Cambios HP'} ({hpChanges.length})</div>
              {hpChanges.map(c => (
                <div key={c.token.id} className="mst-diff-row">
                  <span className="lbl">{c.token.name}:</span>
                  <span className="from">{c.before.hp}/{c.before.hpMax}</span>
                  <span className="arrow">→</span>
                  <span className={"to " + (c.dHp < 0 ? 'negative' : c.dHp > 0 ? 'positive' : '')}>
                    {c.token.hp}/{c.token.hpMax}
                  </span>
                  {c.dHp !== 0 && (
                    <span className={"delta " + (c.dHp < 0 ? 'negative' : 'positive')}>
                      ({c.dHp > 0 ? '+' : ''}{c.dHp})
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
          {buffChanges.length > 0 && (
            <div className="mst-diff-section">
              <div className="title">{t.diffBuffs || 'Cambios estados'} ({buffChanges.length})</div>
              {buffChanges.map(c => (
                <div key={c.token.id} className="mst-diff-row" style={{ flexWrap: 'wrap' }}>
                  <span className="lbl">{c.token.name}:</span>
                  {c.added.map(k => <span key={'+'+k} className="buff-tag positive">+{window.MstData.buffLabel({ key: k }, lang)}</span>)}
                  {c.removed.map(k => <span key={'-'+k} className="buff-tag negative">−{window.MstData.buffLabel({ key: k }, lang)}</span>)}
                </div>
              ))}
            </div>
          )}
          {!roundChanged && !added.length && !removed.length && !hpChanges.length && !buffChanges.length && (
            <div className="mst-log-empty">
              <window.MstIcon name="save-disk" size={32}/>
              <div className="mst-log-empty-title">{t.diffEmpty || 'Sin cambios'}</div>
              <div className="mst-log-empty-sub">{t.diffEmptySub || 'El estado actual coincide con el snapshot.'}</div>
            </div>
          )}
        </div>
        <div className="mst-modal-actions">
          <button type="button" className="mst-modal-btn" onClick={onClose}>{t.close || 'Cerrar'}</button>
        </div>
      </div>
    </div>
  );
}

function MasterApp({
  variant = 'A',           // 'A' | 'B' | 'C' — combinación pre-armada
  drawerLayout = 'expanded', // 'compact'|'expanded'|'tabs'
  initPos = 'top',         // 'top'|'rail'|'float'
  density = 'minimal',     // 'minimal'|'rich'
  encounterKey = 'forest',
  gridType = 'square',
  lang = 'es',
  theme = 'verdant',
  onSetTheme,
  onSetLang,
  onSetGrid,
  initialDrawerHeight = 'mid',
  showFrame = true,
}) {
  const t = window.MstData.I18N[lang];
  const initialEnc = window.MstData.ENCOUNTERS[encounterKey];

  // Deep clone to allow mutations per artboard
  const [tokens, setTokens] = useStateA(() => initialEnc.tokens.map(x => ({...x})));
  const [zones] = useStateA(() => initialEnc.zones);
  const [activeId, setActiveId] = useStateA(initialEnc.activeId);
  const [selectedId, setSelectedId] = useStateA(initialEnc.activeId);
  const [drawerHeight, setDrawerHeight] = useStateA(initialDrawerHeight);
  const [round, setRound] = useStateA(1);
  const [actionsState, setActionsState] = useStateA({});
  const [buffs, setBuffs] = useStateA(() => {
    const m = {};
    initialEnc.tokens.forEach(tk => {
      const b = window.MstData.buffsFor(tk);
      if (b.length) m[tk.id] = [...b];
    });
    return m;
  });
  const [bottomTab, setBottomTab] = useStateA('map');
  const [viewMode, setViewMode] = useStateA('map'); // 'map' | 'list'
  const [centerSignal, setCenterSignal] = useStateA(null);
  const [resetZoomSignal, setResetZoomSignal] = useStateA(null);
  const [roundFlash, setRoundFlash] = useStateA(0); // se incrementa en cambio de ronda
  const [measureMode, setMeasureMode] = useStateA(false);
  const [measurePts, setMeasurePts] = useStateA([]); // [{x,y}, {x,y}?] en coords de grid
  // Plantillas de área: lista colocada + plantilla pendiente de colocar
  const [templates, setTemplates] = useStateA([]); // [{id,kind,x,y,sizeFt,angle,color}]
  const [pendingTemplate, setPendingTemplate] = useStateA(null);
  const [templateModalOpen, setTemplateModalOpen] = useStateA(false);
  // Niebla y fondo de mapa
  const [fogMode, setFogMode] = useStateA(false);
  const [fogCells, setFogCells] = useStateA([]); // [{x,y}] coords cuadrícula
  const [fogBrush, setFogBrush] = useStateA(1); // 1, 3, 5 — tamaño del pincel (cuadros)
  const [mapBg, setMapBg] = useStateA(null); // {kind:'image'|'color', value} o null
  // Anotaciones sobre el mapa
  const [mapNotes, setMapNotes] = useStateA([]); // [{id,x,y,text,color}]
  const [pendingNote, setPendingNote] = useStateA(false); // bool: el siguiente click coloca
  const [addTokenOpen, setAddTokenOpen] = useStateA(false);
  const [buffPickerOpen, setBuffPickerOpen] = useStateA(false);
  const [buffPickerTarget, setBuffPickerTarget] = useStateA(null);
  const [editTokenId, setEditTokenId] = useStateA(null);
  /* MST-J05: snap-to-grid opcional al mover tokens.
     2026-05-08: por defecto OFF — los tokens se mueven libres por el mapa.
     El usuario puede activarlo desde ajustes si quiere alinear a casilla. */
  const [snapToGrid, setSnapToGrid] = useStateA(() => {
    try { return localStorage.getItem('mst-snap-to-grid') === '1'; } catch (_) { return false; }
  });
  useEffectA(() => {
    try { localStorage.setItem('mst-snap-to-grid', snapToGrid ? '1' : '0'); } catch (_) {}
  }, [snapToGrid]);
  /* MST-J04: estado para PromptModal/ConfirmModal reutilizables */
  const [promptCfg, setPromptCfg] = useStateA(null);   // {title,message,defaultValue,placeholder,okLabel,onSubmit}
  const [confirmCfg, setConfirmCfg] = useStateA(null); // {title,message,okLabel,danger,onConfirm}
  const askPrompt = (cfg) => setPromptCfg(cfg);
  const askConfirm = (cfg) => setConfirmCfg(cfg);
  const [savedAt, setSavedAt] = useStateA(() => window.MstPersist ? window.MstPersist.getSavedAt() : null);
  // Bestiario: entrada en edición + tick para forzar reload del panel cuando cambia externamente
  const [editEntry, setEditEntry] = useStateA(null);
  const [bestiaryTick, setBestiaryTick] = useStateA(0);

  // ---- Dice + Log ----
  // Rehidratamos el log desde localStorage SOLO si el encuentro guardado coincide.
  const initialLog = useMemoA(() => {
    try {
      if (!window.MstPersist) return null;
      const saved = window.MstPersist.loadState();
      if (!saved || saved.encounterKey !== encounterKey) return null;
      return Array.isArray(saved.log) ? saved.log : null;
    } catch (e) { return null; }
  }, []);
  const log = window.MstDice.useLog(initialLog);
  const [diceOpen, setDiceOpen] = useStateA(false);
  const [dicePreset, setDicePreset] = useStateA(null); // {expr, label}
  const [attackPending, setAttackPending] = useStateA(null); // {attacker, attack, result}
  const [toasts, setToasts] = useStateA([]); // [{id, kind, text}]
  const [groupSaveOpen, setGroupSaveOpen] = useStateA(false);
  // Modo TV/streamer: oculta UI de control y deja solo mapa + iniciativa.
  const [streamMode, setStreamMode] = useStateA(false);
  // Selección múltiple de tokens (shift+click). Set de ids; drag de cualquiera
  // mueve a todos con el mismo delta. Esc limpia.
  const [multiSelected, setMultiSelected] = useStateA(() => new Set());
  const openDice = (expr, label) => {
    setDicePreset({ expr: expr || '1d20', label: label || null });
    setDiceOpen(true);
  };
  const closeDice = () => setDiceOpen(false);
  const onDiceRolled = (result, label) => {
    const actorName = (selectedToken && selectedToken.name) || '—';
    const adv = result.adv ? ` (${result.adv.mode === 'adv' ? '▲' : '▼'} ${result.adv.rolls.join('/')})` : '';
    const text = `${actorName} ${t.rolled || 'tiró'} ${label}${adv}`;
    const raw = result.rolls.map(g => `${g.n}d${g.sides}[${g.results.join(',')}]`).join(' ') +
      (result.mod !== 0 ? ` ${result.mod >= 0 ? '+' : ''}${result.mod}` : '');
    log.push({
      kind: 'roll',
      actor: actorName,
      total: result.total,
      natural: result.natural,
      text,
      raw,
    });
  };
  const onAttackRoll = (token, attack) => {
    // 1d20 + tohit
    const tohitMod = parseInt(String(attack.tohit).replace(/[^\d-]/g, ''), 10) || 0;
    const result = window.MstDice.rollDice(`1d20${tohitMod >= 0 ? '+' : ''}${tohitMod}`);
    log.push({
      kind: 'attack',
      actor: token.name,
      total: result.total,
      natural: result.natural,
      text: `${token.name} ${t.attacks_v || 'ataca con'} ${attack.name}`,
      raw: `1d20[${result.rolls[0].results[0]}] ${attack.tohit} → ${attack.dmg} ${
        attack.type === 'ranged' ? t.ranged :
        attack.type === 'trip' ? (t.atkTrip || 'Derribo') :
        attack.type === 'disarm' ? (t.atkDisarm || 'Desarmar') :
        attack.type === 'sunder' ? (t.atkSunder || 'Romper') :
        attack.type === 'grapple' ? (t.atkGrapple || 'Presa') :
        attack.type === 'bullrush' ? (t.atkBullrush || 'Embestida') :
        t.melee
      }`,
    });
    if (result.natural === 20) playSfx('crit');
    // Abrimos el flujo "preguntar daño + objetivo"
    setAttackPending({ attacker: token, attack, result });
  };

  // Variante "solo log": tira el ataque y registra sin abrir DamageModal.
  // Útil para los iterativos del full-attack (PF1e -5/-10/-15) donde abrir
  // el modal por cada uno sería molesto. El master decide a mano qué hace
  // con cada resultado.
  const onAttackLogOnly = (token, attack) => {
    const tohitMod = parseInt(String(attack.tohit).replace(/[^\d-]/g, ''), 10) || 0;
    const result = window.MstDice.rollDice(`1d20${tohitMod >= 0 ? '+' : ''}${tohitMod}`);
    log.push({
      kind: 'attack',
      actor: token.name,
      total: result.total,
      natural: result.natural,
      text: `${token.name} ${t.attacks_v || 'ataca con'} ${attack.name}`,
      raw: `1d20[${result.rolls[0].results[0]}] ${attack.tohit} → ${attack.dmg} ${
        attack.type === 'ranged' ? t.ranged :
        attack.type === 'trip' ? (t.atkTrip || 'Derribo') :
        attack.type === 'disarm' ? (t.atkDisarm || 'Desarmar') :
        attack.type === 'sunder' ? (t.atkSunder || 'Romper') :
        attack.type === 'grapple' ? (t.atkGrapple || 'Presa') :
        attack.type === 'bullrush' ? (t.atkBullrush || 'Embestida') :
        t.melee
      }`,
    });
  };

  // Tirar salvación en grupo (AoE): cada token marcado tira 1d20+save vs CD.
  // Loguea éxito/fallo por token y un toast resumen.
  const onApplyGroupSave = ({ saveKind, dc, ids }) => {
    const lblMap = { fort: t.fort, ref: t.ref, will: t.will };
    const lbl = lblMap[saveKind] || saveKind;
    let ok = 0, fail = 0;
    ids.forEach(id => {
      const tk = tokens.find(x => x.id === id);
      if (!tk) return;
      const mod = tk[saveKind] | 0;
      const r = window.MstDice.rollDice(`1d20${mod >= 0 ? '+' : ''}${mod}`);
      const success = r.total >= dc;
      if (success) ok++; else fail++;
      log.push({
        kind: 'save',
        actor: tk.name,
        total: r.total,
        natural: r.natural,
        text: `${tk.name}: ${lbl} CD ${dc} · ${success ? (t.success || 'éxito') : (t.failure || 'fallo')}`,
        raw: `1d20[${r.rolls[0].results[0]}] ${mod >= 0 ? '+' : ''}${mod} = ${r.total} vs CD ${dc}`,
      });
    });
    pushToast(`${lbl} CD ${dc}: ${ok}/${ids.length}`, 'round', 2400);
  };

  // Toggle de slot de conjuro: incrementa o decrementa `used` por nivel.
  // Solo local; el sync inverso al ficha queda pendiente (necesitaría
  // modificar SLOT_STATE y disparar renderSlots).
  // Sube o baja la capa visual de un token en el mapa. `dir` ∈ {-1, +1, 'top', 'bottom'}.
  const onChangeTokenZ = (id, dir) => {
    setTokens(ts => {
      const tk = ts.find(x => x.id === id);
      if (!tk) return ts;
      const maxZ = ts.reduce((m, t) => Math.max(m, t.z || 0), 0);
      const minZ = ts.reduce((m, t) => Math.min(m, t.z || 0), 0);
      let newZ = (tk.z || 0);
      if (dir === 'top') newZ = maxZ + 1;
      else if (dir === 'bottom') newZ = minZ - 1;
      else newZ = (tk.z || 0) + (dir === -1 ? -1 : 1);
      return ts.map(t => t.id === id ? { ...t, z: newZ } : t);
    });
  };

  const onToggleSpellSlot = (id, level) => {
    let prevToken = null, newUsed = null, newMax = null;
    setTokens(ts => ts.map(tk => {
      if (tk.id !== id) return tk;
      prevToken = tk;
      const slots = { ...(tk.spellSlots || {}) };
      const lvl = String(level);
      const cur = slots[lvl] || { max: 0, used: 0 };
      newUsed = cur.used >= cur.max ? 0 : cur.used + 1;
      newMax = cur.max;
      slots[lvl] = { ...cur, used: newUsed };
      return { ...tk, spellSlots: slots };
    }));
    // Sync inverso a la ficha si el token vino de allí
    if (prevToken && prevToken.fromSheet && newUsed != null) {
      emitToSheet({
        type: 'mst-pj-slot-update',
        uid: prevToken.fromSheetUid || null,
        name: prevToken.name,
        level: parseInt(level, 10),
        used: newUsed,
        max: newMax,
      });
    }
  };

  // Tirar habilidad desde la sección de skills del drawer
  const onSkillRoll = (token, skill) => {
    const mod = parseInt(skill && skill.total, 10) | 0;
    const r = window.MstDice.rollDice(`1d20${mod >= 0 ? '+' : ''}${mod}`);
    log.push({
      kind: 'roll',
      actor: token.name,
      total: r.total,
      natural: r.natural,
      text: `${token.name} ${t.rolled || 'tiró'} ${skill.name}`,
      raw: `1d20[${r.rolls[0].results[0]}] ${mod >= 0 ? '+' : ''}${mod} = ${r.total}`,
    });
  };

  // Tirar salvación desde la tarjeta del token (drawer.StatsSection)
  const onSaveRoll = (token, saveKey, saveVal) => {
    const mod = saveVal | 0;
    const r = window.MstDice.rollDice(`1d20${mod >= 0 ? '+' : ''}${mod}`);
    const lblMap = { fort: t.fort, ref: t.ref, will: t.will };
    const lbl = lblMap[saveKey] || saveKey;
    log.push({
      kind: 'save',
      actor: token.name,
      total: r.total,
      natural: r.natural,
      text: `${token.name} ${t.rolled || 'tiró'} ${t.save || 'salvación'} ${lbl}`,
      raw: `1d20[${r.rolls[0].results[0]}] ${mod >= 0 ? '+' : ''}${mod} = ${r.total}`,
    });
  };

  // Resultado del DamageModal — ahora con daño multi-parte
  const onApplyAttackResult = ({ pending, target, parts, crit, skipped }) => {
    if (skipped) {
      log.push({
        kind: 'note',
        actor: pending.attacker.name,
        text: `${pending.attacker.name}: ${pending.attack.name} ${t.missLog || 'sin daño'}`,
      });
      return;
    }
    if (!target || !Array.isArray(parts) || parts.length === 0) return;
    // Aplicar resistencias por parte y sumar al final
    const breakdown = [];
    let totalFinal = 0;
    parts.forEach(p => {
      const adj = window.MstData.applyDamageType(target, p.raw, p.type);
      breakdown.push({ ...p, final: adj.final, note: adj.note });
      totalFinal += adj.final;
    });
    // Anti-misclick si dejamos a un PJ a 0 HP
    const isPC = target.kind === 'pj' || target.kind === 'player';
    if (isPC && target.hp > 0 && (target.hp - totalFinal) <= 0) {
      const msg = (t.confirmKnockoutPC || '¿Aplicar daño que dejará a {n} a 0 PG?').replace('{n}', target.name);
      if (!window.confirm(msg)) return;
    }
    // Texto humano: "5 cortante + 8 fuego = 13"
    const partTexts = breakdown.map(b => {
      const lbl = (t['damageType_' + b.type] || b.type).toLowerCase();
      const noteSuf = b.note ? ` [${b.note}]` : '';
      return `${b.final} ${lbl}${noteSuf}`;
    });
    const summary = partTexts.length > 1
      ? partTexts.join(' + ') + ' = ' + totalFinal
      : (totalFinal + ' ' + (t['damageType_' + breakdown[0].type] || breakdown[0].type).toLowerCase() +
         (breakdown[0].note ? ' [' + breakdown[0].note + ']' : ''));
    const rawText = breakdown.map(b => {
      const r = b.rollResult;
      const die = r.rolls && r.rolls[0] && r.rolls[0].results ? `[${r.rolls[0].results.join(',')}]` : '';
      const adj = b.final !== b.raw ? ` · ${b.raw}→${b.final}` : '';
      return `${b.expr}${die} = ${r.total}${crit ? '×2' : ''}${adj}`;
    }).join(' ; ');
    log.push({
      kind: 'damage',
      actor: target.name,
      total: totalFinal,
      text: `${target.name} ${t.deals || 'sufre'} ${summary}${crit ? ' ✦' : ''}`,
      raw: rawText,
    });
    if (totalFinal > 0) onChangeHp(target.id, -totalFinal);
    // Recordatorio: si el target tiene reacción disponible y sigue vivo,
    // sugerimos que tire/declarar reacción (Dispar, Atque de oport., etc).
    const tas = (actionsState[target.id] || { reaction: false });
    if (!tas.reaction && target.hp - totalFinal > 0 && !target.dead) {
      pushToast(`${t.reactionPrompt || '¿Reacción de'} ${target.name}?`, 'round', 2400);
    }
  };

  // Reset when encounter changes
  useEffectA(() => {
    const enc = window.MstData.ENCOUNTERS[encounterKey];
    setTokens(enc.tokens.map(x => ({...x})));
    setActiveId(enc.activeId);
    setSelectedId(enc.activeId);
    setRound(1);
    setActionsState({});
    const m = {};
    enc.tokens.forEach(tk => {
      const b = window.MstData.buffsFor(tk);
      if (b.length) m[tk.id] = [...b];
    });
    setBuffs(m);
  }, [encounterKey]);

  // Orden de iniciativa: por INI desc; empates por `orderIndex` asc (lo
  // marca `onReorderInit` cuando el master arrastra a mano), y como último
  // recurso por nombre, para que el orden sea determinista incluso sin
  // tocar ini.
  /* MST-J09: tokens con `delay === true` se relegan al final del round actual.
     Mantienen su INI numérica para futuras rondas, pero en el orden visible
     aparecen detrás de los no-delayed. */
  const initiativeOrder = useMemoA(() =>
    [...tokens].sort((a, b) => {
      const ad = a.delay === true ? 1 : 0;
      const bd = b.delay === true ? 1 : 0;
      if (ad !== bd) return ad - bd; // delayed al final
      const di = (b.ini ?? 0) - (a.ini ?? 0);
      if (di !== 0) return di;
      const dx = (a.orderIndex ?? 0) - (b.orderIndex ?? 0);
      if (dx !== 0) return dx;
      return (a.name || '').localeCompare(b.name || '');
    }),
    [tokens]
  );

  const selectedToken = tokens.find(x => x.id === selectedId);

  // ---- Medición de distancia ----
  // Convención: 1 cuadro = 50px en coords de grid, 1 cuadro = 5ft en juego.
  // Regla PF1e 5/10/5: la 1ª diagonal cuenta 5ft, la 2ª 10, la 3ª 5...
  const GRID_PX_PER_SQUARE = 50;
  const FT_PER_SQUARE = 5;
  /* 2026-05-08: para hex pointy-top, distancia entre centros adyacentes = SQ (alineado).
     Convertimos coords a axiales (q,r) y usamos cube distance. Así 2 hex contiguos = 5ft. */
  const _pxToAxial = (x, y) => {
    const s = GRID_PX_PER_SQUARE / Math.sqrt(3); // mismo s que en map.jsx
    const q = (Math.sqrt(3)/3 * x - 1/3 * y) / s;
    const r = (2/3 * y) / s;
    return { q, r };
  };
  const _axialRound = (q, r) => {
    const x = q, z = r, y = -x - z;
    let rx = Math.round(x), ry = Math.round(y), rz = Math.round(z);
    const dx = Math.abs(rx - x), dy = Math.abs(ry - y), dz = Math.abs(rz - z);
    if (dx > dy && dx > dz) rx = -ry - rz;
    else if (dy > dz) ry = -rx - rz;
    else rz = -rx - ry;
    return { q: rx, r: rz };
  };
  const computePathfinderDistance = (a, b) => {
    if (!a || !b) return null;
    const euclideanFt = Math.round(Math.hypot(b.x - a.x, b.y - a.y) / GRID_PX_PER_SQUARE * FT_PER_SQUARE);
    if (gridType === 'hex') {
      const A = _axialRound(_pxToAxial(a.x, a.y).q, _pxToAxial(a.x, a.y).r);
      const B = _axialRound(_pxToAxial(b.x, b.y).q, _pxToAxial(b.x, b.y).r);
      const dq = A.q - B.q, dr = A.r - B.r;
      const hexDist = (Math.abs(dq) + Math.abs(dq + dr) + Math.abs(dr)) / 2;
      return { squares: hexDist, ft: hexDist * FT_PER_SQUARE, euclideanFt };
    }
    const dx = Math.abs(b.x - a.x) / GRID_PX_PER_SQUARE;
    const dy = Math.abs(b.y - a.y) / GRID_PX_PER_SQUARE;
    const diag = Math.min(dx, dy);
    const orth = Math.max(dx, dy) - diag;
    const diagCost = Math.floor(diag) + Math.floor(diag / 2);
    const fractional = (diag - Math.floor(diag));
    const totalSquares = orth + diagCost + fractional;
    return {
      squares: totalSquares,
      ft: Math.round(totalSquares * FT_PER_SQUARE),
      euclideanFt,
    };
  };
  const onMeasureClick = (point) => {
    setMeasurePts(pts => {
      if (pts.length >= 2) return [point];
      return [...pts, point];
    });
  };
  const toggleMeasureMode = () => {
    setMeasureMode(m => {
      if (m) setMeasurePts([]);
      return !m;
    });
  };

  // ---- Plantillas de área ----
  // Confirmamos el modal → guardamos la plantilla "pendiente"; el siguiente
  // click sobre el mapa la coloca y la persiste en `templates`.
  const onConfirmTemplate = (cfg) => {
    setPendingTemplate(cfg);
    pushToast(t.placeTemplateHint || 'Toca el mapa para colocar', 'round', 1800);
  };
  const [lastPlacedTpl, setLastPlacedTpl] = useStateA(null);
  const onPlaceTemplate = (point) => {
    if (!pendingTemplate) return;
    const id = 'tpl_' + Date.now().toString(36);
    setTemplates(arr => [...arr, { id, ...pendingTemplate, x: point.x, y: point.y }]);
    setLastPlacedTpl(id);
    // Quitar el marcador tras la animación para que en re-renders no quede pegado
    setTimeout(() => setLastPlacedTpl(prev => (prev === id ? null : prev)), 700);
    setPendingTemplate(null);
  };
  const onRemoveTemplate = (id) => {
    setTemplates(arr => arr.filter(t => t.id !== id));
  };
  const clearAllTemplates = () => {
    setTemplates([]);
    setPendingTemplate(null);
  };

  // ---- Niebla ----
  // fogCells almacena coordenadas DE CUADRÍCULA (no px). El "pincel" decide
  // qué celdas afecta cada click: 1 = solo la celda; 3 = 3×3 alrededor; 5 = 5×5.
  // El toggle se decide por la celda central: si está cubierta → revelamos
  // todo el cuadrado; si está descubierta → cubrimos. Eso evita que clicks
  // sucesivos rompan el estado mezclando.
  const onFogCellClick = (cellX, cellY) => {
    const half = Math.floor(fogBrush / 2);
    setFogCells(cells => {
      const set = new Map(cells.map(c => [c.x + ',' + c.y, c]));
      const centerKey = cellX + ',' + cellY;
      const wasCovered = set.has(centerKey);
      for (let dy = -half; dy <= half; dy++) {
        for (let dx = -half; dx <= half; dx++) {
          const x = cellX + dx, y = cellY + dy;
          if (x < 0 || y < 0) continue;
          const k = x + ',' + y;
          if (wasCovered) set.delete(k);
          else set.set(k, { x, y });
        }
      }
      return Array.from(set.values());
    });
  };
  const fogRevealAll = () => setFogCells([]);
  const fogHideAll = () => {
    // Cubrir toda la cuadrícula
    const cols = Math.ceil(initialEnc.grid.w / GRID_PX_PER_SQUARE);
    const rows = Math.ceil(initialEnc.grid.h / GRID_PX_PER_SQUARE);
    const cells = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push({ x: c, y: r });
    setFogCells(cells);
  };

  // ---- Anotaciones ----
  /* MST-J04: prompt React en lugar de window.prompt */
  const onPlaceNote = (point) => {
    askPrompt({
      title: t.lblNote || 'Nota',
      message: t.noteText || 'Texto de la nota',
      defaultValue: '',
      placeholder: t.noteText || 'Texto de la nota',
      okLabel: t.add || 'Añadir',
      onSubmit: (text) => {
        const id = 'note_' + Date.now().toString(36);
        setMapNotes(arr => [...arr, { id, x: point.x, y: point.y, text, color: '#c89030' }]);
        setPendingNote(false);
        setPromptCfg(null);
      },
      onCancel: () => { setPendingNote(false); setPromptCfg(null); },
    });
  };
  const onDeleteNote = (id) => {
    if (!window.confirm(t.deleteNote || '¿Borrar nota?')) return;
    setMapNotes(arr => arr.filter(n => n.id !== id));
  };
  const onMoveNote = (id, x, y) => {
    setMapNotes(arr => arr.map(n => n.id === id ? { ...n, x, y } : n));
  };

  // ---- Fondo del mapa ----
  // Downscalear a 1024px lado mayor antes de guardar; un mapa de 4K en
  // localStorage tumba la app silenciosamente (límite ~5MB).
  const onChangeBgImage = async (file) => {
    if (!file) return;
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(reader.error);
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            const maxDim = 1024;
            let w = img.width, h = img.height;
            const ratio = Math.min(1, maxDim / Math.max(w, h));
            w = Math.round(w * ratio); h = Math.round(h * ratio);
            const canvas = document.createElement('canvas');
            canvas.width = w; canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            resolve(canvas.toDataURL('image/jpeg', 0.8));
          };
          img.onerror = () => reject(new Error('decode failed'));
          img.src = reader.result;
        };
        reader.readAsDataURL(file);
      });
      setMapBg({ kind: 'image', value: dataUrl });
    } catch (e) {
      console.warn('bg upload failed', e);
    }
  };
  const onChangeBgColor = (color) => setMapBg({ kind: 'color', value: color });
  const onResetBg = () => setMapBg(null);

  // ---- Sonidos opcionales (síntesis vía WebAudio, sin assets externos) ----
  // Tres tipos: 'crit' (campana ascendente), 'kill' (golpe sordo), 'round' (ding).
  // Se controlan con un toggle en Settings → state.soundsOn.
  const [soundsOn, setSoundsOn] = useStateA(() => {
    try { return localStorage.getItem('mst-sounds') !== '0'; } catch (_) { return true; }
  });
  const audioCtxRef = React.useRef(null);
  const ensureAudioCtx = () => {
    if (audioCtxRef.current) return audioCtxRef.current;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtxRef.current = new Ctx();
      return audioCtxRef.current;
    } catch (_) { return null; }
  };
  const playSfx = (kind) => {
    if (!soundsOn) return;
    const ctx = ensureAudioCtx();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      g.gain.value = 0;
      if (kind === 'crit') {
        o.type = 'triangle';
        o.frequency.setValueAtTime(440, now);
        o.frequency.linearRampToValueAtTime(880, now + 0.18);
        g.gain.linearRampToValueAtTime(0.18, now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        o.start(now); o.stop(now + 0.42);
      } else if (kind === 'kill') {
        o.type = 'sawtooth';
        o.frequency.setValueAtTime(160, now);
        o.frequency.exponentialRampToValueAtTime(60, now + 0.25);
        g.gain.linearRampToValueAtTime(0.22, now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        o.start(now); o.stop(now + 0.36);
      } else if (kind === 'round') {
        o.type = 'sine';
        o.frequency.setValueAtTime(660, now);
        o.frequency.linearRampToValueAtTime(990, now + 0.08);
        g.gain.linearRampToValueAtTime(0.12, now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        o.start(now); o.stop(now + 0.52);
      }
    } catch (_) {}
  };
  // Persistir el toggle
  useEffectA(() => {
    try { localStorage.setItem('mst-sounds', soundsOn ? '1' : '0'); } catch (_) {}
  }, [soundsOn]);

  // ---- Tema automático según hora local ----
  // Si está activado, fuerza un tema oscuro entre las 20:00 y las 08:00 y
  // restaura el tema "diurno" del usuario fuera de ese rango. El usuario
  // puede seguir cambiando manualmente; al cambiar manualmente se recuerda
  // como tema "diurno" para volver a él.
  const [themeAuto, setThemeAuto] = useStateA(() => {
    try { return localStorage.getItem('mst-theme-auto') === '1'; } catch (_) { return false; }
  });
  const dayThemeRef = React.useRef(theme);
  useEffectA(() => {
    try { localStorage.setItem('mst-theme-auto', themeAuto ? '1' : '0'); } catch (_) {}
  }, [themeAuto]);
  useEffectA(() => {
    if (!themeAuto || !onSetTheme) return;
    const tick = () => {
      const h = new Date().getHours();
      const isNight = (h >= 20 || h < 8);
      if (isNight && theme !== 'dark' && theme !== 'navy' && theme !== 'cyber-yellow' && theme !== 'cyber-red') {
        dayThemeRef.current = theme;
        onSetTheme('dark');
      } else if (!isNight && (theme === 'dark') && dayThemeRef.current && dayThemeRef.current !== 'dark') {
        onSetTheme(dayThemeRef.current);
      }
    };
    tick();
    const id = setInterval(tick, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [themeAuto, theme, onSetTheme]);

  // ---- Notificaciones del navegador ----
  // Sólo se disparan cuando la pestaña está oculta (`document.hidden`),
  // así no molestan si el master ya está mirando el modo.
  const [notifsOn, setNotifsOn] = useStateA(() => {
    try { return localStorage.getItem('mst-notifs') === '1'; } catch (_) { return false; }
  });
  useEffectA(() => {
    try { localStorage.setItem('mst-notifs', notifsOn ? '1' : '0'); } catch (_) {}
  }, [notifsOn]);
  const requestNotifsPermission = async () => {
    if (typeof Notification === 'undefined') return false;
    if (Notification.permission === 'granted') return true;
    if (Notification.permission === 'denied') return false;
    try {
      const r = await Notification.requestPermission();
      return r === 'granted';
    } catch (_) { return false; }
  };
  const pushNotification = (title, body) => {
    if (!notifsOn) return;
    if (typeof Notification === 'undefined') return;
    if (Notification.permission !== 'granted') return;
    if (typeof document !== 'undefined' && !document.hidden) return; // pestaña visible
    try {
      const n = new Notification(title, { body, silent: true });
      setTimeout(() => { try { n.close(); } catch (_) {} }, 4000);
    } catch (_) {}
  };

  // ---- Toasts ----
  const toastIdRef = React.useRef(0);
  const pushToast = (text, kind = 'info', ttl = 2400) => {
    toastIdRef.current += 1;
    const id = toastIdRef.current;
    setToasts(arr => [...arr, { id, kind, text }]);
    setTimeout(() => setToasts(arr => arr.filter(t => t.id !== id)), ttl);
  };

  // ---- Handlers ----
  const onSelectToken = (id, opts) => {
    setSelectedId(id);
    // Solo expandir el drawer en gestos explícitos (long-press / doble-tap).
    // El tap simple solo selecciona, deja arrastrar libremente sin abrir nada.
    if (opts && opts.openDrawer && drawerHeight === 'peek') setDrawerHeight('mid');
  };
  /* MST-J05: snap al centro de celda (cuadrada o hex) si está activado */
  const SQ = 50; // mismo valor que GRID_PX_PER_SQUARE
  const snapPoint = (x, y) => {
    if (!snapToGrid) return { x, y };
    if (gridType === 'hex') {
      // Hex flat-top: ancho 2R, alto 2R*sqrt(3)/2; se aproxima a SQ.
      const colW = SQ * 0.866; // ~ancho horizontal entre hexes
      const rowH = SQ;          // alto entre filas
      const col  = Math.round(x / colW);
      const isOdd = col & 1;
      const row  = Math.round((y - (isOdd ? rowH / 2 : 0)) / rowH);
      return { x: col * colW, y: row * rowH + (isOdd ? rowH / 2 : 0) };
    }
    // square: snap al centro de cuadro
    return {
      x: Math.round((x - SQ / 2) / SQ) * SQ + SQ / 2,
      y: Math.round((y - SQ / 2) / SQ) * SQ + SQ / 2,
    };
  };
  const onTokenMove = (id, x, y) => {
    setTokens(ts => {
      const tk = ts.find(t => t.id === id);
      if (!tk) return ts;
      const snapped = snapPoint(x, y);
      const dx = snapped.x - tk.x;
      const dy = snapped.y - tk.y;
      // Si hay multi-selección y el token movido pertenece, mueve a todos
      if (multiSelected.size > 1 && multiSelected.has(id)) {
        return ts.map(t => multiSelected.has(t.id)
          ? { ...t, x: t.x + dx, y: t.y + dy }
          : t);
      }
      return ts.map(t => t.id === id ? {...t, x: snapped.x, y: snapped.y} : t);
    });
  };
  const toggleMultiSelect = (id) => {
    setMultiSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };
  const clearMultiSelect = () => setMultiSelected(new Set());
  /* MST-J08: si recibimos un File, downscalear a 1024px+JPEG 0.8 antes de guardar.
     Si recibimos un dataURL ya, lo asumimos preprocesado (ej. desde AddTokenModal). */
  const onSetPhoto = async (id, input) => {
    let dataUrl = null;
    try {
      if (input && typeof input === 'object' && input instanceof Blob) {
        dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = () => reject(reader.error);
          reader.onload = () => {
            const img = new Image();
            img.onload = () => {
              const maxDim = 1024;
              let w = img.width, h = img.height;
              const ratio = Math.min(1, maxDim / Math.max(w, h));
              w = Math.round(w * ratio); h = Math.round(h * ratio);
              const canvas = document.createElement('canvas');
              canvas.width = w; canvas.height = h;
              canvas.getContext('2d').drawImage(img, 0, 0, w, h);
              resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = () => reject(new Error('decode failed'));
            img.src = reader.result;
          };
          reader.readAsDataURL(input);
        });
      } else if (typeof input === 'string') {
        // Si el dataURL viene crudo (no procesado), también re-comprimimos para
        // evitar guardar un PNG gigante en localStorage.
        if (input.startsWith('data:image/') && !input.startsWith('data:image/jpeg')) {
          dataUrl = await new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const maxDim = 1024;
              let w = img.width, h = img.height;
              const ratio = Math.min(1, maxDim / Math.max(w, h));
              w = Math.round(w * ratio); h = Math.round(h * ratio);
              const canvas = document.createElement('canvas');
              canvas.width = w; canvas.height = h;
              canvas.getContext('2d').drawImage(img, 0, 0, w, h);
              resolve(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.onerror = () => reject(new Error('decode failed'));
            img.src = input;
          });
        } else {
          dataUrl = input; // ya en jpeg o null
        }
      } else {
        dataUrl = null;
      }
    } catch (e) {
      console.warn('onSetPhoto downscale failed', e);
      return;
    }
    setTokens(ts => ts.map(tk => tk.id === id ? { ...tk, photo: dataUrl } : tk));
  };
  const onRenameToken = (id, name) => {
    setTokens(ts => ts.map(tk => {
      if (tk.id !== id) return tk;
      const short = name.trim().slice(0, 2).toUpperCase();
      return { ...tk, name, short };
    }));
  };
  const onAddToken = (data) => {
    // Generate a unique id
    const usedIds = new Set(tokens.map(tk => tk.id));
    let n = 1;
    while (usedIds.has('tk' + n)) n++;
    const id = 'tk' + n;
    // Place near the center of the grid
    const cx = (initialEnc.grid.w / 2) | 0;
    const cy = (initialEnc.grid.h / 2) | 0;
    // Slight offset so multiple new tokens don't stack exactly
    const ox = ((tokens.length * 38) % 200) - 100;
    const oy = ((tokens.length * 29) % 140) - 70;
    const palette = window.MstData.COLOR;
    const colorByKind = {
      pj: palette.pj || '#3a78c9',
      ally: palette.ally || '#5fa760',
      enemy: palette.enemy || '#a64545',
      pet: palette.pet || '#b88a4a',
      neutral: palette.neutral || '#888',
    };
    const tk = {
      id,
      name: data.name || 'Nuevo',
      short: (data.name || 'NU').trim().slice(0, 2).toUpperCase(),
      kind: data.kind || 'enemy',
      color: data.color || colorByKind[data.kind || 'enemy'],
      x: cx + ox,
      y: cy + oy,
      hp: data.hpMax || 20,
      hpMax: data.hpMax || 20,
      ac: data.ac || 15,
      fort: 4, ref: 4, will: 4, per: 5, spd: 25,
      ini: data.ini || 10,
      attacks: window.MstData.defaultAttacksForKind(data.kind || 'enemy'),
      photo: data.photo || null,/* MST-J07 */
    };
    setTokens(ts => [...ts, tk]);
    setSelectedId(id);
    setCenterSignal({ x: tk.x, y: tk.y, ts: Date.now() });
    log.push({ kind: 'add', actor: tk.name, text: `${tk.name} entra al encuentro` });
  };

  // Editar todos los stats de un token (desde modal de edición)
  const onEditToken = (updated) => {
    let prev = null;
    setTokens(ts => {
      prev = ts.find(x => x.id === updated.id) || null;
      return ts.map(tk => tk.id === updated.id ? { ...tk, ...updated } : tk);
    });
    log.push({ kind: 'edit', actor: updated.name, text: `${updated.name} actualizado` });
    // Si el token vino de la ficha y cambia HP/HP máx, propagar a la ficha
    if (prev && prev.fromSheet) {
      const hpChanged = prev.hp !== updated.hp;
      const maxChanged = prev.hpMax !== updated.hpMax;
      if (hpChanged || maxChanged) {
        emitToSheet({
          type: 'mst-pj-update',
          uid: prev.fromSheetUid || null,
          name: updated.name || prev.name,
          hp: updated.hp,
          hpMax: updated.hpMax,
          delta: (updated.hp || 0) - (prev.hp || 0),
        });
      }
    }
  };

  // -------- Bestiario --------
  // Añadir entrada del bestiario al encuentro (la convierte en token y la coloca cerca del centro)
  const onAddBestiaryToEncounter = (tokenTemplate) => {
    const cx = (initialEnc.grid.w / 2) | 0;
    const cy = (initialEnc.grid.h / 2) | 0;
    const ox = ((tokens.length * 38) % 200) - 100;
    const oy = ((tokens.length * 29) % 140) - 70;
    // Asegurar id único
    const usedIds = new Set(tokens.map(tk => tk.id));
    let nid = tokenTemplate.id;
    let n = 1;
    while (usedIds.has(nid)) { n++; nid = tokenTemplate.id + '_' + n; }
    const tk = { ...tokenTemplate, id: nid, x: cx + ox, y: cy + oy };
    setTokens(ts => [...ts, tk]);
    setSelectedId(nid);
    setBottomTab('map');
    setViewMode('map');
    setCenterSignal({ x: tk.x, y: tk.y, ts: Date.now() });
    log.push({ kind: 'add', actor: tk.name, text: `${tk.name} (bestiario) entra al encuentro` });
  };
  // Guardar/actualizar entrada del bestiario desde el modal de edición
  const onSaveBestiaryEntry = (entry) => {
    const list = window.MstBestiary.loadBestiary();
    const idx = list.findIndex(e => e.id === entry.id);
    let next;
    if (idx === -1) next = [...list, entry];
    else { next = [...list]; next[idx] = entry; }
    window.MstBestiary.saveBestiary(next);
    setBestiaryTick(x => x + 1);
  };
  // Borrar entrada del bestiario
  const onDeleteBestiaryEntry = (entry) => {
    const list = window.MstBestiary.loadBestiary();
    window.MstBestiary.saveBestiary(list.filter(e => e.id !== entry.id));
    setBestiaryTick(x => x + 1);
  };
  // "Guardar como criatura" desde el modal de edición de un token vivo
  const onSaveTokenToBestiary = (token) => {
    const list = window.MstBestiary.loadBestiary();
    const ids = new Set(list.map(e => e.id));
    let n = 1;
    let id = 'b_' + n.toString().padStart(3, '0');
    while (ids.has(id)) { n++; id = 'b_' + n.toString().padStart(3, '0'); }
    const entry = window.MstBestiary.tokenToEntry(token, id);
    const next = [...list, entry];
    window.MstBestiary.saveBestiary(next);
    setBestiaryTick(x => x + 1);
    log.push({ kind: 'add', actor: token.name, text: `${token.name} guardado en bestiario` });
  };
  // Duplicar token (copia justo al lado, nuevo id)
  const onDuplicateToken = (id) => {
    const src = tokens.find(x => x.id === id);
    if (!src) return;
    const usedIds = new Set(tokens.map(x => x.id));
    let n = 2;
    let nid = src.id + '_' + n;
    while (usedIds.has(nid)) { n++; nid = src.id + '_' + n; }
    const copy = {
      ...src,
      id: nid,
      x: (src.x || 0) + 60,
      y: (src.y || 0) + 30,
      hp: src.hpMax,
    };
    setTokens(ts => [...ts, copy]);
    setSelectedId(nid);
    setCenterSignal({ x: copy.x, y: copy.y, ts: Date.now() });
    log.push({ kind: 'add', actor: copy.name, text: `${copy.name} duplicado` });
  };

  // -------- Persistencia: rehidratar al montar --------
  // Solo rehidratamos si el guardado pertenece al mismo encuentro que está activo
  // ahora; si no, lo ignoramos para no cargar tokens del bosque sobre el mapa
  // urbano (etc.). El export/import explícito sí permite saltar entre mapas.
  const hydratedRef = React.useRef(false);
  useEffectA(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    if (!window.MstPersist) return;
    const saved = window.MstPersist.loadState();
    if (!saved) return;
    if (saved.encounterKey && saved.encounterKey !== encounterKey) return;
    try {
      if (Array.isArray(saved.tokens) && saved.tokens.length) setTokens(saved.tokens);
      if (saved.activeId)   setActiveId(saved.activeId);
      if (saved.selectedId) setSelectedId(saved.selectedId);
      if (saved.round)      setRound(saved.round);
      if (saved.actionsState) setActionsState(saved.actionsState);
      if (saved.buffs)      setBuffs(saved.buffs);
      if (Array.isArray(saved.templates)) setTemplates(saved.templates);
      if (Array.isArray(saved.fogCells))  setFogCells(saved.fogCells);
      if (saved.mapBg)                    setMapBg(saved.mapBg);
      if (Array.isArray(saved.mapNotes))  setMapNotes(saved.mapNotes);
    } catch(e) { console.warn('hydrate failed', e); }
  }, []);

  // -------- Autosave (debounce ligero con timeout) --------
  useEffectA(() => {
    if (!window.MstPersist) return;
    const id = setTimeout(() => {
      const ok = window.MstPersist.saveState({
        encounterKey, tokens, activeId, selectedId, round, actionsState, buffs,
        theme, lang, gridKind: gridType,
        layout: drawerLayout, initPos, density,
        drawerHeight, viewMode, tab: bottomTab,
        log: log.entries,
        templates, fogCells, mapBg, mapNotes,
      });
      if (ok) setSavedAt(Date.now());
    }, 400);
    return () => clearTimeout(id);
  }, [tokens, activeId, selectedId, round, actionsState, buffs, encounterKey, theme, lang, gridType, drawerLayout, initPos, density, drawerHeight, viewMode, bottomTab, log.entries, templates, fogCells, mapBg, mapNotes]);

  // -------- Export / Import / Reset / Clear saved --------
  const handleExport = () => {
    if (!window.MstPersist) return;
    window.MstPersist.exportJson({
      encounterKey, tokens, activeId, selectedId, round, actionsState, buffs,
      theme, lang, gridKind: gridType,
      layout: drawerLayout, initPos, density,
      drawerHeight, viewMode, tab: bottomTab,
      log: log.entries,
      templates, fogCells, mapBg, mapNotes,
    });
  };
  const handleImport = async (file) => {
    if (!window.MstPersist) return;
    const data = await window.MstPersist.importJsonFile(file);
    if (Array.isArray(data.tokens)) setTokens(data.tokens);
    if (data.activeId)   setActiveId(data.activeId);
    if (data.selectedId) setSelectedId(data.selectedId);
    if (data.round)      setRound(data.round);
    if (data.actionsState) setActionsState(data.actionsState);
    if (data.buffs)      setBuffs(data.buffs);
    if (Array.isArray(data.log)) log.replace(data.log);
    if (Array.isArray(data.templates)) setTemplates(data.templates);
    if (Array.isArray(data.fogCells))  setFogCells(data.fogCells);
    if (data.mapBg)                    setMapBg(data.mapBg);
    if (Array.isArray(data.mapNotes))  setMapNotes(data.mapNotes);
    log.push({ kind: 'turn', text: `Encuentro importado`, actor: '' });
    setSavedAt(Date.now());
  };
  const handleResetEncounter = () => {
    const enc = window.MstData.ENCOUNTERS[encounterKey];
    setTokens(enc.tokens.map(x => ({...x})));
    setActiveId(enc.activeId);
    setSelectedId(enc.activeId);
    setRound(1);
    setActionsState({});
    const m = {};
    enc.tokens.forEach(tk => {
      const b = window.MstData.buffsFor(tk);
      if (b.length) m[tk.id] = [...b];
    });
    setBuffs(m);
    log.clear();
    log.push({ kind: 'turn', text: `Encuentro reiniciado`, actor: '' });
  };
  const handleClearSaved = () => {
    if (!window.MstPersist) return;
    window.MstPersist.clearState();
    setSavedAt(null);
  };
  /* MST-J02: encuentro vacío — limpia combatientes y reinicia R1 con el mapa actual */
  const handleEmptyEncounter = () => {
    askConfirm({
      title: t.emptyEncounter || 'Encuentro vacío',
      message: t.emptyEncounterConfirm || '¿Empezar un encuentro vacío?',
      okLabel: t.emptyEncounterAction || 'Empezar',
      danger: true,
      onConfirm: () => {
        setTokens([]);
        setActiveId(null);
        setSelectedId(null);
        setRound(1);
        setActionsState({});
        setBuffs({});
        setTemplates([]);
        setFogCells([]);
        setMapNotes([]);
        setMultiSelected(new Set());
        log.clear();
        log.push({ kind: 'turn', text: t.emptyEncounter || 'Encuentro vacío', actor: '' });
        pushToast(t.emptyEncounter || 'Encuentro vacío', 'round', 1800);
      },
    });
  };

  // -------- Snapshots con nombre --------
  const [snapshots, setSnapshots] = useStateA(() =>
    window.MstPersist ? window.MstPersist.listSnapshots() : []);
  const refreshSnapshots = () => setSnapshots(window.MstPersist.listSnapshots());
  const handleCreateSnapshot = () => {
    if (!window.MstPersist) return;
    const def = (initialEnc.nameKey ? t[initialEnc.nameKey] : 'Encuentro') + ' · R' + round;
    /* MST-J04: prompt React en lugar de window.prompt */
    askPrompt({
      title: t.snapshotName || 'Nombre del snapshot',
      message: t.snapshotName || 'Nombre del snapshot',
      defaultValue: def,
      okLabel: t.snapshotCreate || 'Crear',
      onSubmit: (name) => {
        window.MstPersist.saveNamedSnapshot(name, {
          encounterKey, tokens, activeId, selectedId, round, actionsState, buffs,
          theme, lang, gridKind: gridType,
          layout: drawerLayout, initPos, density,
          drawerHeight, viewMode, tab: bottomTab,
          log: log.entries,
          templates, fogCells, mapBg, mapNotes,
        });
        refreshSnapshots();
        pushToast(t.snapshotCreated || 'Snapshot creado', 'round', 1800);
        setPromptCfg(null);
      },
    });
  };
  const handleLoadSnapshot = (id) => {
    if (!window.MstPersist) return;
    const snap = window.MstPersist.getNamedSnapshot(id);
    if (!snap || !snap.state) return;
    if (!window.confirm((t.confirmLoadSnapshot || '¿Cargar el snapshot "{n}"? Se sobrescribirá el estado actual.').replace('{n}', snap.name))) return;
    const s = snap.state;
    if (Array.isArray(s.tokens)) setTokens(s.tokens);
    if (s.activeId)   setActiveId(s.activeId);
    if (s.selectedId) setSelectedId(s.selectedId);
    if (s.round)      setRound(s.round);
    if (s.actionsState) setActionsState(s.actionsState);
    if (s.buffs)      setBuffs(s.buffs);
    if (Array.isArray(s.log)) log.replace(s.log);
    if (Array.isArray(s.templates)) setTemplates(s.templates);
    if (Array.isArray(s.fogCells))  setFogCells(s.fogCells);
    if (s.mapBg)                    setMapBg(s.mapBg);
    if (Array.isArray(s.mapNotes))  setMapNotes(s.mapNotes);
    log.push({ kind: 'turn', text: `Snapshot "${snap.name}" restaurado`, actor: '' });
    pushToast(t.snapshotLoaded || 'Snapshot cargado', 'round', 1800);
  };
  const handleDeleteSnapshot = (id) => {
    if (!window.MstPersist) return;
    const snap = window.MstPersist.getNamedSnapshot(id);
    const name = snap ? snap.name : '';
    if (!window.confirm((t.confirmDeleteSnapshot || '¿Borrar "{n}"?').replace('{n}', name))) return;
    window.MstPersist.deleteNamedSnapshot(id);
    refreshSnapshots();
  };
  const [diffSnapshot, setDiffSnapshot] = useStateA(null);
  const handleCompareSnapshot = (id) => {
    if (!window.MstPersist) return;
    const snap = window.MstPersist.getNamedSnapshot(id);
    if (snap) setDiffSnapshot(snap);
  };

  // -------- Encuentros custom (JSON externo) --------
  const [customEncounters, setCustomEncounters] = useStateA(() =>
    window.MstPersist ? window.MstPersist.listCustomEncounters() : []);
  const refreshCustomEncounters = () => setCustomEncounters(window.MstPersist.listCustomEncounters());
  /* MST-J04: prompt React (Promise) en lugar de window.prompt */
  const handleImportEncounterFile = async (file) => {
    if (!file || !window.MstPersist) return null;
    const data = await window.MstPersist.importEncounterFile(file);
    const name = await new Promise((resolve) => {
      askPrompt({
        title: t.encounterName || 'Nombre del encuentro',
        message: t.encounterName || 'Nombre del encuentro',
        defaultValue: data.name || 'Custom',
        okLabel: t.snapshotCreate || 'Guardar',
        onSubmit: (v) => { setPromptCfg(null); resolve(v); },
        onCancel: () => { setPromptCfg(null); resolve(null); },
      });
    });
    if (!name) return null;
    const entry = window.MstPersist.saveCustomEncounter(name, data);
    refreshCustomEncounters();
    return entry;
  };
  const handleLoadEncounter = (id) => {
    if (!window.MstPersist) return;
    const enc = window.MstPersist.getCustomEncounter(id);
    if (!enc || !enc.data) return;
    if (!window.confirm((t.confirmLoadEncounter || '¿Cargar "{n}"? Reemplaza el encuentro actual.').replace('{n}', enc.name))) return;
    const d = enc.data;
    setTokens(d.tokens.map(x => ({ ...x })));
    if (d.activeId) { setActiveId(d.activeId); setSelectedId(d.activeId); }
    setRound(1);
    setActionsState({});
    const m = {};
    d.tokens.forEach(tk => {
      const b = window.MstData.buffsFor(tk);
      if (b.length) m[tk.id] = [...b];
    });
    setBuffs(m);
    log.push({ kind: 'turn', text: `Encuentro cargado: ${enc.name}`, actor: '' });
    pushToast(t.encounterLoaded || 'Encuentro cargado', 'round', 1800);
  };
  const handleDeleteEncounter = (id) => {
    if (!window.MstPersist) return;
    const enc = window.MstPersist.getCustomEncounter(id);
    if (enc && !window.confirm((t.confirmDeleteEncounter || '¿Borrar "{n}"?').replace('{n}', enc.name))) return;
    window.MstPersist.deleteCustomEncounter(id);
    refreshCustomEncounters();
  };

  // -------- BroadcastChannel: sync multi-pestaña con la ficha --------
  // Sin iframe: si el usuario abre la ficha y el modo máster en pestañas
  // distintas del MISMO origen, BroadcastChannel hace de bus. La ficha
  // también escucha/emite por aquí. Anti-loop por la misma firma JSON.
  const bcRef = React.useRef(null);
  useEffectA(() => {
    if (typeof BroadcastChannel === 'undefined') return;
    let bc;
    try { bc = new BroadcastChannel('pf-master-sync'); }
    catch (_) { return; }
    bcRef.current = bc;
    bc.onmessage = (e) => {
      const d = e && e.data;
      if (!d) return;
      // Reusamos el mismo handler que postMessage, pero sin la validación
      // e.source === window.parent (BroadcastChannel no tiene source).
      if (d.type === 'mst-sheet-update') {
        const name = String(d.name || '').trim();
        const uid = d.uid ? String(d.uid) : null;
        const hp = parseInt(d.hp, 10);
        const hpMax = parseInt(d.hpMax, 10);
        if (!name || !Number.isFinite(hp)) return;
        setTokens(ts => {
          const fromSheet = ts.filter(x => x.fromSheet);
          if (fromSheet.length === 0) return ts;
          let targetId = null;
          if (uid) {
            const byUid = fromSheet.find(x => x.fromSheetUid === uid);
            if (byUid) targetId = byUid.id;
          }
          if (!targetId) {
            if (fromSheet.length === 1) targetId = fromSheet[0].id;
            else {
              const found = fromSheet.find(x => (x.name || '').trim() === name);
              if (!found) return ts;
              targetId = found.id;
            }
          }
          let changed = false;
          const next = ts.map(tk => {
            if (tk.id !== targetId) return tk;
            if (tk.hp === hp && (!Number.isFinite(hpMax) || tk.hpMax === hpMax)) return tk;
            changed = true;
            const patch = { hp };
            if (Number.isFinite(hpMax)) patch.hpMax = hpMax;
            return { ...tk, ...patch };
          });
          if (Array.isArray(d.conditions) || Array.isArray(d.buffs)) {
            const conv = sheetBuffsRef.current;
            if (conv) {
              const newList = conv(d.conditions, d.buffs);
              const sigOf = (arr) => JSON.stringify((arr || []).map(b => ({
                key: b.key, kind: b.kind, label: b.label, rounds: b.rounds,
              })));
              setBuffs(prev => {
                const oldSig = sigOf(prev[targetId]);
                const newSig = sigOf(newList);
                if (oldSig === newSig) return prev;
                sentBuffsRef.current[targetId] = newSig;
                return { ...prev, [targetId]: newList };
              });
            }
          }
          return changed ? next : ts;
        });
      }
    };
    return () => { try { bc.close(); } catch (_) {} };
  }, []);

  // Helper para emitir por ambos canales (postMessage al padre + Broadcast)
  const emitToSheet = (payload) => {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(payload, '*');
      }
    } catch (_) {}
    try {
      if (bcRef.current) bcRef.current.postMessage(payload);
    } catch (_) {}
  };

  // -------- Emisor: el master propaga sus buffs/condiciones a la ficha --------
  // Cualquier cambio en buffs[id] de un token fromSheet se traduce en un
  // postMessage `mst-pj-buffs` para que la ficha active/desactive el chip de
  // condición correspondiente. Anti-loop: solo emitimos si la "firma" del
  // array cambia respecto al último envío para ese token.
  const sentBuffsRef = React.useRef({});
  useEffectA(() => {
    if (!(window.parent && window.parent !== window)) return;
    tokens.forEach(tk => {
      if (!tk.fromSheet) return;
      // Firma estable y simétrica con el listener mst-sheet-update: solo
      // {key, kind, label, rounds} sin sufijos derivados (buffLabel añade
      // contadores que romperían la igualdad en el lado contrario).
      const list = (buffs[tk.id] || []).map(b => ({
        key: b.key,
        kind: b.kind,
        label: b.label,
        rounds: b.rounds,
      }));
      const sig = JSON.stringify(list);
      if (sentBuffsRef.current[tk.id] === sig) return;
      sentBuffsRef.current[tk.id] = sig;
      emitToSheet({
        type: 'mst-pj-buffs',
        uid: tk.fromSheetUid || null,
        name: tk.name,
        buffs: list,
      });
    });
  }, [buffs, tokens, lang]);

  // Ref a la función de conversión actual para que el listener (montado una
  // sola vez) pueda invocar la versión con el `lang` correcto en cada render.
  const sheetBuffsRef = React.useRef(null);
  React.useEffect(() => {
    sheetBuffsRef.current = (conditions, buffs) => sheetBuffsToInitialBuffs(conditions, buffs);
  }, [lang]);

  // -------- Listener: la ficha nos avisa de cambios HP de PJs --------
  // Cierra el bucle del sync bidireccional. Sólo aceptamos del padre.
  // Para evitar loop con `mst-pj-update`, sólo aplicamos si el HP recibido
  // difiere realmente del HP actual (la igualdad rompe la cadena).
  useEffectA(() => {
    const onMsg = (e) => {
      const d = e && e.data;
      if (!d || d.type !== 'mst-sheet-update') return;
      if (e.source !== window.parent) return;
      const name = String(d.name || '').trim();
      const uid = d.uid ? String(d.uid) : null;
      const hp = parseInt(d.hp, 10);
      const hpMax = parseInt(d.hpMax, 10);
      if (!name || !Number.isFinite(hp)) return;
      setTokens(ts => {
        // Identificación robusta del token a actualizar (en orden de
        // preferencia):
        //   1) Si la ficha mandó uid → match por fromSheetUid.
        //   2) Si solo hay UN token fromSheet → es el match (rename-tolerant).
        //   3) Si hay varios → match por nombre exacto.
        //   4) Si no hay ninguno → ignorar.
        const fromSheet = ts.filter(x => x.fromSheet);
        if (fromSheet.length === 0) return ts;
        let targetId = null;
        if (uid) {
          const byUid = fromSheet.find(x => x.fromSheetUid === uid);
          if (byUid) targetId = byUid.id;
        }
        if (!targetId) {
          if (fromSheet.length === 1) {
            targetId = fromSheet[0].id;
          } else {
            const found = fromSheet.find(x => (x.name || '').trim() === name);
            if (!found) return ts;
            targetId = found.id;
          }
        }
        let changed = false;
        const next = ts.map(tk => {
          if (tk.id !== targetId) return tk;
          if (tk.hp === hp && (!Number.isFinite(hpMax) || tk.hpMax === hpMax)) return tk;
          changed = true;
          const patch = { hp };
          if (Number.isFinite(hpMax)) patch.hpMax = hpMax;
          return { ...tk, ...patch };
        });
        // Aplicar conditions/buffs si vienen — lado ficha→master del sync
        // bidireccional. Anti-loop: solo escribimos `state.buffs[targetId]`
        // si la firma cambia, y marcamos `sentBuffsRef` con esa firma para
        // que el emisor no rebote inmediatamente.
        if (Array.isArray(d.conditions) || Array.isArray(d.buffs)) {
          const conv = sheetBuffsRef.current;
          if (conv) {
            const newList = conv(d.conditions, d.buffs);
            const sigOf = (arr) => JSON.stringify((arr || []).map(b => ({
              key: b.key, kind: b.kind, label: b.label, rounds: b.rounds,
            })));
            setBuffs(prev => {
              const oldSig = sigOf(prev[targetId]);
              const newSig = sigOf(newList);
              if (oldSig === newSig) return prev;
              sentBuffsRef.current[targetId] = newSig;
              return { ...prev, [targetId]: newList };
            });
          }
        }
        return changed ? next : ts;
      });
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // -------- Importar PJ desde la ficha Pathfinder --------
  // Estrategia:
  //   1) Si hay padre (estamos en iframe), pedir vía postMessage
  //      ({type:'mst-request-pjs'}) y esperar respuesta tipo {type:'mst-pjs',pjs:[...]}.
  //   2) Si no hay respuesta en 600ms, fallback: leer localStorage
  //      'ficha-mobile-state-v1' (sólo funciona en mismo origen).
  //   3) Convertir cada PJ recibido a token y añadirlo al encuentro.
  const importPJsFromSheet = () => {
    return new Promise((resolve) => {
      let resolved = false;
      const finish = (pjs) => {
        if (resolved) return;
        resolved = true;
        window.removeEventListener('message', onMsg);
        const tokens = (pjs || []).map(pjFromSheetToToken).filter(Boolean);
        applySheetPJs(tokens);
        resolve(tokens);
      };
      const onMsg = (e) => {
        const d = e && e.data;
        if (!d || d.type !== 'mst-pjs') return;
        if (e.source !== window.parent) return;
        finish(Array.isArray(d.pjs) ? d.pjs : []);
      };
      window.addEventListener('message', onMsg);
      // Listener BroadcastChannel para multi-pestaña
      let bcAd = null;
      try {
        if (typeof BroadcastChannel !== 'undefined') {
          bcAd = new BroadcastChannel('pf-master-sync');
          bcAd.onmessage = (ev) => {
            const d = ev && ev.data;
            if (!d || d.type !== 'mst-pjs') return;
            finish(Array.isArray(d.pjs) ? d.pjs : []);
          };
        }
      } catch (_) {}
      // Pedimos por todos los canales disponibles
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'mst-request-pjs' }, '*');
        }
      } catch (_) {}
      try { if (bcAd) bcAd.postMessage({ type: 'mst-request-pjs' }); } catch (_) {}
      // Fallback con timeout: leer localStorage del mismo origen
      setTimeout(() => {
        try { if (bcAd) bcAd.close(); } catch (_) {}
        if (resolved) return;
        try {
          const raw = localStorage.getItem('ficha-mobile-state-v1');
          if (raw) {
            const st = JSON.parse(raw);
            if (st && typeof st === 'object') {
              finish([fichaStateToPJBlob(st)]);
              return;
            }
          }
        } catch (_) {}
        finish([]);
      }, 600);
    });
  };

  // Aplica al encuentro la lista ya convertida a tokens MstMaster.
  // Si los tokens traen `initialBuffs` (mapeados desde conditions/buffs de
  // la ficha), también los volcamos en el state `buffs` para que aparezcan
  // ya activos en la lista del drawer y de iniciativa.
  const applySheetPJs = (tokens) => {
    if (!tokens.length) {
      pushToast(t.importNoPJs || 'Sin PJs disponibles', 'kill', 2400);
      return;
    }
    const idsApplied = [];
    const buffsApplied = {};
    const updatedNames = [];
    setTokens(prev => {
      // Idempotente por uid: si un PJ entrante trae `fromSheetUid` y ya
      // existe un token con ese uid, lo actualizamos en lugar de duplicar.
      const used = new Set(prev.map(x => x.id));
      const byUid = new Map();
      prev.forEach(x => { if (x.fromSheetUid) byUid.set(x.fromSheetUid, x); });
      let out = [...prev];
      for (const tk of tokens) {
        const existing = tk.fromSheetUid ? byUid.get(tk.fromSheetUid) : null;
        if (existing) {
          // Actualizar in-place preservando posición y color custom
          out = out.map(x => x.id === existing.id ? {
            ...x,
            name: tk.name,
            short: tk.short,
            photo: tk.photo || x.photo,
            hp: tk.hp,
            hpMax: tk.hpMax,
            ac: tk.ac,
            acTouch: tk.acTouch,
            acFlat: tk.acFlat,
            fort: tk.fort, ref: tk.ref, will: tk.will,
            per: tk.per, spd: tk.spd, iniMod: tk.iniMod,
            attacks: tk.attacks,
          } : x);
          if (Array.isArray(tk.initialBuffs)) {
            buffsApplied[existing.id] = tk.initialBuffs.map(b => ({ ...b }));
          }
          updatedNames.push(tk.name);
          continue;
        }
        // Nuevo: id único
        let id = tk.id;
        let n = 2;
        while (used.has(id)) { id = (tk.id || 'pj') + '_' + n; n++; }
        used.add(id);
        const finalTk = { ...tk, id };
        if (Array.isArray(tk.initialBuffs) && tk.initialBuffs.length) {
          buffsApplied[id] = tk.initialBuffs.map(b => ({ ...b }));
        }
        idsApplied.push({ id, name: tk.name });
        out.push(finalTk);
      }
      return out;
    });
    if (Object.keys(buffsApplied).length) {
      setBuffs(prev => ({ ...prev, ...buffsApplied }));
    }
    idsApplied.forEach(p => {
      log.push({ kind: 'add', actor: p.name, text: `${p.name} (ficha) entra al encuentro` });
    });
    updatedNames.forEach(n => {
      log.push({ kind: 'edit', actor: n, text: `${n} actualizado desde la ficha` });
    });
    const totalCount = idsApplied.length + updatedNames.length;
    pushToast(`${totalCount} ${t.importPJsOk || 'PJs importados'}`, 'round', 2400);
  };

  // Convierte conditions/buffs del blob de la ficha al modelo de buffs del
  // master. Cualquier label con key conocida (frightened, hasted...) se mapea
  // con `buffKeyFromLabel`; si no, se guarda como custom con label libre.
  const sheetBuffsToInitialBuffs = (conditions, buffs) => {
    const out = [];
    (conditions || []).forEach((c, i) => {
      const label = (c && c.label) || c;
      if (!label) return;
      const key = window.MstData.buffKeyFromLabel(label, lang);
      if (key) out.push({ key, kind: 'debuff' });
      else out.push({ key: 'cust_' + i + '_' + Date.now().toString(36), kind: 'debuff', label: String(label).trim() });
    });
    (buffs || []).forEach((b, i) => {
      const label = (b && b.label) || b;
      if (!label) return;
      const key = window.MstData.buffKeyFromLabel(label, lang);
      const entry = key ? { key, kind: 'buff' } : { key: 'custb_' + i + '_' + Date.now().toString(36), kind: 'buff', label: String(label).trim() };
      if (b && Number.isFinite(parseInt(b.rounds, 10))) entry.rounds = parseInt(b.rounds, 10);
      out.push(entry);
    });
    return out;
  };

  // Convierte un blob {name, hp, hpMax, ac, ...} (tal como lo manda la ficha
  // o lo extraemos del STATE) en un token válido del modo máster.
  const pjFromSheetToToken = (pj) => {
    if (!pj || typeof pj !== 'object') return null;
    const name = String(pj.name || pj.nombre || 'PJ').trim() || 'PJ';
    const hpMax = parseInt(pj.hpMax, 10) || parseInt(pj.hp, 10) || 30;
    const hp = parseInt(pj.hp, 10);
    const palette = window.MstData.COLOR;
    const idBase = 'pj_' + name.toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 10);
    const initBuffs = sheetBuffsToInitialBuffs(pj.conditions, pj.buffs);
    return {
      id: idBase || ('pj_' + Date.now().toString(36)),
      name,
      short: name.trim().slice(0, 2).toUpperCase(),
      kind: 'pj',
      color: pj.color || palette.player || '#3a78c9',
      photo: pj.photo || null,
      x: (initialEnc.grid.w / 2) | 0,
      y: (initialEnc.grid.h / 2) | 0,
      hp: Number.isFinite(hp) ? hp : hpMax,
      hpMax,
      ac: parseInt(pj.ac, 10) || 15,
      acTouch: Number.isFinite(parseInt(pj.acTouch, 10)) ? parseInt(pj.acTouch, 10) : undefined,
      acFlat:  Number.isFinite(parseInt(pj.acFlat,  10)) ? parseInt(pj.acFlat,  10) : undefined,
      ini: parseInt(pj.ini, 10) || 0,
      iniMod: parseInt(pj.iniMod, 10) || parseInt(pj.ini, 10) || 0,
      fort: parseInt(pj.fort, 10) || 0,
      ref:  parseInt(pj.ref,  10) || 0,
      will: parseInt(pj.will, 10) || 0,
      per:  parseInt(pj.per,  10) || 0,
      spd:  parseInt(pj.spd,  10) || 30,
      attacks: Array.isArray(pj.attacks) && pj.attacks.length
        ? pj.attacks.map(a => ({
            name: String(a.name || 'Ataque').trim(),
            tohit: String(a.tohit || '+0').trim(),
            dmg: String(a.dmg || '1d6').trim(),
            type: a.type === 'ranged' ? 'ranged' : 'melee',
          }))
        : window.MstData.defaultAttacksForKind('pj'),
      initialBuffs: initBuffs.length ? initBuffs : undefined,
      skills: Array.isArray(pj.skills) ? pj.skills.map(s => ({
        name: String(s.name || '').trim(),
        total: parseInt(s.total, 10) || 0,
        attr: String(s.attr || '').trim(),
      })).filter(s => s.name) : undefined,
      armor: Array.isArray(pj.armor) ? pj.armor.map(a => ({
        name: String(a.name || '').trim(),
        type: String(a.type || '').trim(),
        acBonus: parseInt(a.acBonus, 10) || 0,
        maxDex: Number.isFinite(parseInt(a.maxDex, 10)) ? parseInt(a.maxDex, 10) : undefined,
        acp: parseInt(a.acp, 10) || 0,
        arcaneFail: parseInt(a.arcaneFail, 10) || 0,
      })).filter(a => a.name) : undefined,
      spellSlots: (pj.spellSlots && typeof pj.spellSlots === 'object') ? pj.spellSlots : undefined,
      fromSheet: true,
      fromSheetUid: pj.uid || null,
    };
  };

  // Extrae lo que se pueda del STATE persistido por la ficha
  // ('ficha-mobile-state-v1'). Es el plan B cuando el padre no responde:
  // sólo tenemos campos serializados, no DOM derivado, así que de stats
  // de combate (AC, saves, init...) sólo recuperamos lo que hay. Pero sí
  // tenemos weapons/buffs en el STATE → los mapeamos a attacks/buffs.
  function fichaStateToPJBlob(state) {
    const id = (state && state.identity) || {};
    const buffs = Array.isArray(state.buffs) ? state.buffs.map(b => ({
      label: String(b.name || '').trim(),
      rounds: (b.dur === 'Asaltos' || b.dur === 'Rounds') ? parseInt(b.remaining ?? b.qty, 10) || undefined : undefined,
    })).filter(b => b.label) : [];
    const weapons = Array.isArray(state.weapons) ? state.weapons.map(w => ({
      name: String(w.name || '').trim() || 'Arma',
      tohit: String(w.atk || '+0').trim(),
      dmg: String(w.dmg || w.damage_die || '1d6').trim() + (w.crit ? ' (' + w.crit + ')' : ''),
      type: (w.style && /ranged|range|dist/i.test(w.style)) ? 'ranged' : 'melee',
    })).filter(w => w.name) : [];
    return {
      uid: id.uid || null,
      name: id.nombre || id.name || 'PJ',
      photo: state.photo || null,
      hpMax: 30, hp: 30,
      ac: 15, ini: 0, iniMod: 0,
      fort: 0, ref: 0, will: 0, per: 0, spd: 30,
      conditions: Array.isArray(state.conds) ? state.conds : [],
      buffs,
      attacks: weapons,
    };
  }

  // Refresca un token fromSheet ya existente: pide al padre y aplica los
  // campos del PJ activo al token con tokenId, sin duplicarlo y sin tocar
  // posición ni id. Si el token no es fromSheet, no hace nada.
  const refreshPJFromSheet = (tokenId) => {
    return new Promise((resolve) => {
      const tk = tokens.find(x => x.id === tokenId);
      if (!tk || !tk.fromSheet) { resolve(false); return; }
      let resolved = false;
      const finish = (pj) => {
        if (resolved) return;
        resolved = true;
        window.removeEventListener('message', onMsg);
        if (!pj) { resolve(false); return; }
        const fresh = pjFromSheetToToken(pj);
        if (!fresh) { resolve(false); return; }
        setTokens(ts => ts.map(x => x.id === tokenId ? {
          ...x,
          // Datos refrescables
          name: fresh.name,
          short: fresh.short,
          color: x.color || fresh.color, // respeta color personalizado
          photo: fresh.photo || x.photo,
          hp: fresh.hp,
          hpMax: fresh.hpMax,
          ac: fresh.ac,
          acTouch: fresh.acTouch,
          acFlat: fresh.acFlat,
          fort: fresh.fort, ref: fresh.ref, will: fresh.will,
          per: fresh.per, spd: fresh.spd,
          ini: x.ini, // respetamos ini del encuentro
          iniMod: fresh.iniMod,
          attacks: fresh.attacks,
          fromSheetUid: fresh.fromSheetUid || x.fromSheetUid,
          // x, y, fromSheet conservados
        } : x));
        // Buffs: aplicamos los nuevos initialBuffs sobre state.buffs[id]
        if (Array.isArray(fresh.initialBuffs)) {
          setBuffs(prev => ({ ...prev, [tokenId]: fresh.initialBuffs.map(b => ({ ...b })) }));
        }
        log.push({ kind: 'edit', actor: fresh.name, text: `${fresh.name} actualizado desde la ficha` });
        pushToast(t.refreshOk || 'PJ actualizado', 'round', 1800);
        resolve(true);
      };
      const onMsg = (e) => {
        const d = e && e.data;
        if (!d || d.type !== 'mst-pjs') return;
        if (e.source !== window.parent) return;
        const pj = Array.isArray(d.pjs) && d.pjs[0] ? d.pjs[0] : null;
        finish(pj);
      };
      window.addEventListener('message', onMsg);
      let bcRef2 = null;
      try {
        if (typeof BroadcastChannel !== 'undefined') {
          bcRef2 = new BroadcastChannel('pf-master-sync');
          bcRef2.onmessage = (ev) => {
            const d = ev && ev.data;
            if (!d || d.type !== 'mst-pjs') return;
            const pj = Array.isArray(d.pjs) && d.pjs[0] ? d.pjs[0] : null;
            finish(pj);
          };
        }
      } catch (_) {}
      try {
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'mst-request-pjs' }, '*');
        }
      } catch (_) {}
      try { if (bcRef2) bcRef2.postMessage({ type: 'mst-request-pjs' }); } catch (_) {}
      // Timeout: si no responde, intentar localStorage
      setTimeout(() => {
        try { if (bcRef2) bcRef2.close(); } catch (_) {}
        if (resolved) return;
        try {
          const raw = localStorage.getItem('ficha-mobile-state-v1');
          if (raw) {
            const st = JSON.parse(raw);
            if (st) { finish(fichaStateToPJBlob(st)); return; }
          }
        } catch (_) {}
        finish(null);
      }, 600);
    });
  };

  // Importa un PJ desde un JSON exportado de la ficha (file picker).
  // El JSON contiene el STATE entero. Aceptamos múltiples llamadas para
  // construir un grupo de PJs venidos de exports distintos.
  const importPJFromFile = async (file) => {
    if (!file) return null;
    const text = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onerror = () => reject(r.error || new Error('read failed'));
      r.onload = () => resolve(r.result);
      r.readAsText(file);
    });
    let data;
    try { data = JSON.parse(text); }
    catch (e) { throw new Error('JSON inválido'); }
    if (!data || typeof data !== 'object') throw new Error('No es un STATE de ficha');
    if (!data.identity) throw new Error('No tiene identidad');
    const blob = fichaStateToPJBlob(data);
    const tk = pjFromSheetToToken(blob);
    if (!tk) throw new Error('No se pudo convertir');
    applySheetPJs([tk]);
    return tk;
  };
  const onCenterOnActive = () => {
    const tk = tokens.find(x => x.id === activeId);
    if (!tk) return;
    setCenterSignal({ x: tk.x, y: tk.y, ts: Date.now() });
  };
  const onCenterToken = (id) => {
    const tk = tokens.find(x => x.id === id);
    if (!tk) return;
    setCenterSignal({ x: tk.x, y: tk.y, ts: Date.now() });
    setSelectedId(id);
    setBottomTab('map');
    setViewMode('map');
  };
  const onChangeIni = (id, val) => {
    setTokens(ts => ts.map(tk => tk.id === id ? { ...tk, ini: val } : tk));
  };
  const onChangeDelay = (id, val) => {
    setTokens(ts => ts.map(tk => tk.id === id ? { ...tk, delay: val } : tk));
  };
  // Reorder estable: NO toca ini, solo ajusta `orderIndex` para colocar
  // `fromId` encima o debajo de `toId`. Si ambos tienen ini distinta,
  // adicionalmente igualamos la ini del from a la del to (porque mover una
  // criatura "encima" de otra que va antes en la ronda implica que ahora va
  // antes — y eso requiere alinear la ini para que el primer criterio no
  // las separe). orderIndex resuelve los empates exactos sin colisiones.
  const onReorderInit = (fromId, toId) => {
    setTokens(ts => {
      const from = ts.find(x => x.id === fromId);
      const to   = ts.find(x => x.id === toId);
      if (!from || !to || fromId === toId) return ts;
      const sorted = [...ts].sort((a, b) => {
        const di = (b.ini ?? 0) - (a.ini ?? 0);
        if (di !== 0) return di;
        return (a.orderIndex ?? 0) - (b.orderIndex ?? 0);
      });
      const fromIdx = sorted.findIndex(x => x.id === fromId);
      const toIdx   = sorted.findIndex(x => x.id === toId);
      if (fromIdx === -1 || toIdx === -1) return ts;
      // Calcular un nuevo orderIndex: justo encima o debajo del target.
      // Si subimos (fromIdx > toIdx): from queda antes que to → orderIndex < to.orderIndex
      // Si bajamos (fromIdx < toIdx): from queda después de to → orderIndex > to.orderIndex
      const targetOI = to.orderIndex ?? 0;
      const newOI = (fromIdx > toIdx) ? (targetOI - 1) : (targetOI + 1);
      const targetIni = to.ini ?? 0;
      return ts.map(tk => tk.id === fromId
        ? { ...tk, ini: targetIni, orderIndex: newOI }
        : tk);
    });
  };
  const onRollAllInitiatives = () => {
    setTokens(ts => ts.map(tk => {
      const mod = tk.iniMod ?? 0;
      const r = window.MstDice.rollDice(`1d20${mod >= 0 ? '+' : ''}${mod}`);
      const die = r.rolls[0].results[0];
      log.push({
        kind: 'roll',
        actor: tk.name,
        total: r.total,
        natural: r.natural,
        text: `${tk.name} ${t.rolled || 'tiró'} ${t.initiative.toLowerCase()}`,
        raw: `1d20[${die}] ${mod >= 0 ? '+' : ''}${mod} = ${r.total}`,
      });
      return { ...tk, ini: r.total };
    }));
  };
  const onRemoveToken = (id) => {
    const tk = tokens.find(x => x.id === id);
    /* MST-J10: confirmar si es un PJ importado de la ficha */
    if (tk && tk.fromSheetUid) {
      askConfirm({
        title: t.removeToken || 'Quitar',
        message: (t.confirmRemovePCFromSheet || 'Vas a quitar a {n}, importado de la ficha. ¿Continuar?').replace('{n}', tk.name),
        okLabel: t.removeToken || 'Quitar',
        danger: true,
        onConfirm: () => doRemoveToken(id),
      });
      return;
    }
    doRemoveToken(id);
  };
  const doRemoveToken = (id) => {
    const tk = tokens.find(x => x.id === id);
    setTokens(ts => ts.filter(x => x.id !== id));
    if (selectedId === id) setSelectedId(null);
    if (activeId === id) {
      const remaining = tokens.filter(x => x.id !== id);
      if (remaining.length) setActiveId(remaining[0].id);
    }
    if (tk) {
      log.push({ kind: 'remove', actor: tk.name, text: `${tk.name} sale del encuentro` });
    }
  };
  // Estado vital al caer a 0 PG: el master puede marcarlo como
  // estabilizado (no muere por sangrado) o muerto (queda fuera del orden).
  const onSetVitalState = (id, state) => {
    setTokens(ts => ts.map(tk => {
      if (tk.id !== id) return tk;
      const next = { ...tk, dead: false, stable: false };
      if (state === 'dead') next.dead = true;
      else if (state === 'stable') next.stable = true;
      // 'reset' deja ambos a false (despertar = onChangeHp +1)
      return next;
    }));
    const tk = tokens.find(x => x.id === id);
    if (!tk) return;
    if (state === 'dead') {
      log.push({ kind: 'kill', actor: tk.name, text: `${tk.name} ${t.confirmedDead || 'confirmado muerto'}` });
      pushToast(`${tk.name} ${t.confirmedDead || 'muerto'}`, 'kill', 2400);
    } else if (state === 'stable') {
      log.push({ kind: 'heal', actor: tk.name, text: `${tk.name} ${t.stabilized || 'estabilizado'}` });
      pushToast(`${tk.name} ${t.stabilized || 'estabilizado'}`, 'round', 1800);
    }
  };

  // Atajo: setea HP a un valor absoluto (clamped) y emite los mismos
  // logs/toasts que onChangeHp (calcula el delta y reusa onChangeHp).
  const onSetHp = (id, value) => {
    const tk = tokens.find(x => x.id === id);
    if (!tk) return;
    const target = Math.max(0, Math.min(tk.hpMax, parseInt(value, 10) || 0));
    const delta = target - tk.hp;
    if (delta !== 0) onChangeHp(id, delta);
  };

  const onChangeHp = (id, delta) => {
    /* MST-J06: anti-misclick si vamos a dejar a un PJ a 0 PG con −1 directo */
    const targetTk = tokens.find(x => x.id === id);
    if (targetTk) {
      const isPC = targetTk.kind === 'pj' || targetTk.kind === 'player' || targetTk.fromSheet;
      if (isPC && delta < 0 && targetTk.hp > 0 && (targetTk.hp + delta) <= 0) {
        askConfirm({
          title: t.koToast || 'KO',
          message: (t.confirmKnockoutPC || '¿Aplicar daño que dejará a {n} a 0 PG?').replace('{n}', targetTk.name),
          okLabel: t.confirm || 'Aplicar',
          danger: true,
          onConfirm: () => doChangeHp(id, delta),
        });
        return;
      }
    }
    doChangeHp(id, delta);
  };
  const doChangeHp = (id, delta) => {
    setTokens(ts => ts.map(tk => {
      if (tk.id !== id) return tk;
      const newHp = Math.max(0, Math.min(tk.hpMax, tk.hp + delta));
      const actualDelta = newHp - tk.hp;
      // Sync bidireccional con la ficha: si el token vino de la ficha,
      // mandamos el HP actualizado al padre para que el panel principal
      // refleje el cambio (ej. el master inflige daño desde aquí → la
      // ficha baja `#pg-current`).
      if (tk.fromSheet && actualDelta !== 0) {
        emitToSheet({
          type: 'mst-pj-update',
          uid: tk.fromSheetUid || null,
          name: tk.name,
          hp: newHp,
          hpMax: tk.hpMax,
          delta: actualDelta,
        });
      }
      if (actualDelta !== 0) {
        const wasAlive = tk.hp > 0;
        const isDead = newHp <= 0;
        if (actualDelta < 0) {
          log.push({
            kind: 'damage',
            actor: tk.name,
            total: -actualDelta,
            text: `${tk.name} ${t.deals || 'sufre'} ${-actualDelta} ${t.damage || 'daño'}`,
            raw: `${tk.hp} → ${newHp} / ${tk.hpMax}`,
          });
          if (wasAlive && isDead) {
            log.push({
              kind: 'kill',
              actor: tk.name,
              text: `${tk.name} cae inconsciente (0 PG)`,
            });
            pushToast(`${tk.name} ${t.koToast || 'cae inconsciente'}`, 'kill');
            playSfx('kill');
            pushNotification(tk.name, (t.koToast || 'cae inconsciente'));
          }
        } else {
          log.push({
            kind: 'heal',
            actor: tk.name,
            total: actualDelta,
            text: `${tk.name} ${t.healed || 'recupera'} ${actualDelta} PG`,
            raw: `${tk.hp} → ${newHp} / ${tk.hpMax}`,
          });
        }
      }
      return { ...tk, hp: newHp };
    }));
  };
  const onToggleAction = (id, kind, idx) => {
    setActionsState(s => {
      const cur = s[id] || { used:[false,false,false], reaction:false };
      if (kind === 'a') {
        const used = [...cur.used];
        used[idx] = !used[idx];
        return { ...s, [id]: { ...cur, used } };
      } else {
        return { ...s, [id]: { ...cur, reaction: !cur.reaction } };
      }
    });
  };
  const onToggleBuff = (id, idx, op) => {
    if (op === 'remove') {
      setBuffs(b => {
        const list = [...(b[id] || [])];
        list.splice(idx, 1);
        return { ...b, [id]: list };
      });
    } else if (op === 'add') {
      // Abrir picker en vez de añadir al azar
      setBuffPickerTarget(id);
      setBuffPickerOpen(true);
    }
  };
  const onAddBuff = (entry) => {
    if (!buffPickerTarget) return;
    setBuffs(b => {
      const list = [...(b[buffPickerTarget] || []), entry];
      return { ...b, [buffPickerTarget]: list };
    });
    setBuffPickerTarget(null);
  };
  const advanceTurn = () => {
    const order = initiativeOrder;
    const idx = order.findIndex(x => x.id === activeId);
    /* MST-J09: saltar muertos y también los que están en delay (pero los
       delayed ya están al final del orden; vuelven a entrar al cambiar
       de ronda al limpiarse el flag). */
    let nextIdx = (idx + 1) % order.length;
    let safety = 0;
    while (order[nextIdx] && (order[nextIdx].dead) && safety < order.length) {
      nextIdx = (nextIdx + 1) % order.length;
      safety++;
    }
    const next = order[nextIdx];
    const newRound = nextIdx <= idx;
    setActiveId(next.id);
    setSelectedId(next.id);
    if (newRound) {
      /* MST-J09: al iniciar ronda nueva, los tokens en delay vuelven a entrar
         (les quitamos el flag para que se ordenen por INI normalmente). */
      setTokens(ts => ts.map(tk => tk.delay === true ? { ...tk, delay: false } : tk));
      setRound(r => {
        log.push({ kind: 'turn', text: `— ${t.round} ${r + 1} —`, actor: '' });
        pushToast(`${t.round} ${r + 1}`, 'round');
        return r + 1;
      });
      setRoundFlash(f => f + 1);
      playSfx('round');
      pushNotification(t.round || 'Ronda', `${(initialEnc.nameKey ? t[initialEnc.nameKey] : '')}`);
      // Decrementar duración de buffs/estados temporales al cambiar de ronda.
      // Permanentes (sin `rounds`) se mantienen; los demás bajan 1 y se quitan al llegar a 0.
      setBuffs(prev => {
        const out = {};
        for (const tokId of Object.keys(prev)) {
          const tk = tokens.find(x => x.id === tokId);
          const tname = tk ? tk.name : tokId;
          out[tokId] = (prev[tokId] || []).flatMap(b => {
            if (b.rounds == null) return [b];
            const nr = b.rounds - 1;
            if (nr <= 0) {
              const lbl = window.MstData.buffLabel({ key: b.key, label: b.label }, lang);
              log.push({ kind: 'turn', actor: tname, text: `${tname}: ${lbl} ${t.expired || 'ha expirado'}` });
              return [];
            }
            return [{ ...b, rounds: nr }];
          });
        }
        return out;
      });
    }
    log.push({
      kind: 'turn',
      actor: next.name,
      text: `${next.name} ${t.nextTurnLog || 'empieza su turno'}`,
    });
    // Reset actions for the new active token
    setActionsState(s => ({...s, [next.id]: { used:[false,false,false], reaction:false }}));
  };
  const rewindTurn = () => {
    const order = initiativeOrder;
    const idx = order.findIndex(x => x.id === activeId);
    const prev = order[(idx - 1 + order.length) % order.length];
    setActiveId(prev.id);
    setSelectedId(prev.id);
  };

  // ---- Atajos de teclado ----
  // Solo cuando NO hay un input/textarea/select en foco, y solo en pestaña mapa.
  useEffectA(() => {
    const onKey = (e) => {
      const tag = (e.target && e.target.tagName) || '';
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
      if (e.target && e.target.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (bottomTab !== 'map' && bottomTab !== 'init') return;
      // No interferir cuando hay un modal abierto
      if (diceOpen || addTokenOpen || buffPickerOpen || editTokenId || editEntry || attackPending || groupSaveOpen || templateModalOpen) return;
      if (e.code === 'Space') {
        e.preventDefault();
        if (e.shiftKey) rewindTurn(); else advanceTurn();
      } else if (e.key === 'r' || e.key === 'R') {
        // Reset zoom rápido
        e.preventDefault();
        setResetZoomSignal({ ts: Date.now() });
      } else if (e.key === 'c' || e.key === 'C') {
        // Centrar en token activo
        e.preventDefault();
        onCenterOnActive();
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        toggleMeasureMode();
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        if (pendingTemplate) setPendingTemplate(null);
        else setTemplateModalOpen(true);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setFogMode(f => !f);
      } else if (e.key === 'n' || e.key === 'N') {
        e.preventDefault();
        setPendingNote(p => !p);
      } else if (e.key === 'Escape') {
        if (measureMode) { setMeasureMode(false); setMeasurePts([]); }
        if (pendingTemplate) setPendingTemplate(null);
        if (fogMode) setFogMode(false);
        if (pendingNote) setPendingNote(false);
        if (multiSelected.size > 0) clearMultiSelect();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [bottomTab, activeId, initiativeOrder, diceOpen, addTokenOpen, buffPickerOpen, editTokenId, editEntry, attackPending, measureMode, pendingTemplate, fogMode, pendingNote, templateModalOpen, groupSaveOpen]);

  // ---- Subcomponents ----
  const InitTop = () => (
    <div className="mst-init-strip">
      {initiativeOrder.map(tk => (
        <button key={tk.id}
          className={`mst-init-pill ${tk.id === activeId ? 'active has-turn-glow' : ''} ${tk.hp <= 0 ? 'dead' : ''}`}
          onClick={() => { setSelectedId(tk.id); }}>
          <window.TokenPortrait token={tk} size={22} className="dot"/>
          <span className="name">{tk.name}</span>
          <span className="ini">{tk.ini}</span>
        </button>
      ))}
    </div>
  );

  const InitRail = () => (
    <div className="mst-rail">
      <div style={{font:'700 9px/1 system-ui', letterSpacing:'.12em', textTransform:'uppercase', color:'var(--ink-muted)', textAlign:'center', padding:'2px 0 4px'}}>{t.turn}</div>
      {initiativeOrder.map(tk => {
        const pct = Math.max(0, (tk.hp/tk.hpMax)*100);
        return (
          <div key={tk.id}
            className={"mst-rail-item " + (tk.id === activeId ? 'active' : '') + " " + (tk.hp <= 0 ? 'dead' : '')}
            onClick={() => { setSelectedId(tk.id); }}>
            <window.TokenPortrait token={tk} size={30} className="dot" style={{opacity: tk.hp <= 0 ? .35 : 1}}/>
            <div className="ini">{tk.ini}</div>
            <div className="hpmini"><span style={{width: pct + '%', background: pct > 50 ? 'var(--positive)' : pct > 20 ? 'var(--gold)' : 'var(--negative)'}}/></div>
          </div>
        );
      })}
    </div>
  );

  const InitFloat = () => (
    <div className="mst-init-float">
      <div className="mst-init-float-header">
        <span>{t.turn}</span>
        <span style={{color:'var(--accent-strong)'}}>R{round}</span>
      </div>
      {initiativeOrder.map(tk => (
        <div key={tk.id}
          className={"mst-init-float-item " + (tk.id === activeId ? 'active' : '')}
          style={{ opacity: tk.hp <= 0 ? .4 : 1 }}
          onClick={() => { setSelectedId(tk.id); }}>
          <window.TokenPortrait token={tk} size={22} className="dot"/>
          <span className="name">{tk.name.split(' ')[0]}</span>
          <span className="ini">{tk.ini}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={"mst-app" + (streamMode ? ' stream-mode' : '')}>
      {/* HEADER */}
      <div className="mst-header">
        {/* 2026-05-07: botón SALIR eliminado — el overlay wrapper de la ficha
            ya tiene una "✕ Cerrar" arriba, era redundante. La SPA puede seguir
            cerrándose vía postMessage 'mst-exit' desde otros sitios si hace falta. */}
        <div style={{ flex:1, minWidth:0 }}>
          <div className="mst-header-title">
            <span style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
              {t[initialEnc.nameKey]}
            </span>
          </div>
          <div className="mst-header-meta">
            <span key={roundFlash} className="mst-round-pill mst-round-pill-flash">{t.round} {round}</span>
            {/* 2026-05-07: avanzar/retroceder turno y bestiario eliminados del header.
                Ya están en init-full toolbar (donde se gestiona iniciativa) y en
                bottom-nav respectivamente. Header se queda sólo con título + ronda. */}
          </div>
        </div>
      </div>

      {/* INIT TOP */}
      {initPos === 'top' && viewMode === 'map' && bottomTab === 'map' && <InitTop />}

      {/* BODY */}
      <div style={{ flex:1, position:'relative', display:'flex', minHeight: 0 }}>
        {initPos === 'rail' && viewMode === 'map' && bottomTab === 'map' && <InitRail />}
        <div style={{ flex:1, position:'relative', minWidth: 0, display:'flex', flexDirection:'column' }}>
          {bottomTab === 'log' ? (
            <window.MstDice.LogPanel entries={log.entries} onClear={log.clear} lang={lang}/>
          ) : bottomTab === 'init' ? (
            <window.MstInitFull
              tokens={tokens}
              activeId={activeId}
              selectedId={selectedId}
              round={round}
              buffs={buffs}
              lang={lang}
              onSelectToken={(id) => { setSelectedId(id); }}
              onCenterToken={onCenterToken}
              onChangeIni={onChangeIni}
              onChangeDelay={onChangeDelay}
              onReorder={onReorderInit}
              onAdvanceTurn={advanceTurn}
              onRewindTurn={rewindTurn}
              onRollAllInitiatives={onRollAllInitiatives}
              onAddCombatant={() => setAddTokenOpen(true)}
              onRemoveToken={onRemoveToken}
              onGroupSave={() => setGroupSaveOpen(true)}
            />
          ) : bottomTab === 'best' ? (
            <window.MstBestiaryPanel
              lang={lang}
              refreshKey={bestiaryTick}
              onAddToEncounter={onAddBestiaryToEncounter}
              onEditEntry={(entry) => setEditEntry(entry)}
            />
          ) : bottomTab === 'set' ? (
            <window.MstSettings
              lang={lang}
              theme={theme}
              gridKind={gridType}
              savedAt={savedAt}
              onSetLang={(v) => onSetLang && onSetLang(v)}
              onSetTheme={(v) => onSetTheme && onSetTheme(v)}
              onSetGrid={(v) => onSetGrid && onSetGrid(v)}
              onResetEncounter={handleResetEncounter}
              onEmptyEncounter={handleEmptyEncounter}
              snapToGrid={snapToGrid}
              onToggleSnapToGrid={setSnapToGrid}
              onExport={handleExport}
              onImportFile={handleImport}
              onClearSaved={handleClearSaved}
              onImportFromSheet={importPJsFromSheet}
              onImportPJFromFile={importPJFromFile}
              mapBg={mapBg}
              onChangeBgImage={onChangeBgImage}
              onChangeBgColor={onChangeBgColor}
              onResetBg={onResetBg}
              fogRevealAll={fogRevealAll}
              fogHideAll={fogHideAll}
              fogBrush={fogBrush}
              onSetFogBrush={setFogBrush}
              clearAllTemplates={clearAllTemplates}
              clearAllNotes={() => setMapNotes([])}
              snapshots={snapshots}
              onCreateSnapshot={handleCreateSnapshot}
              onLoadSnapshot={handleLoadSnapshot}
              onDeleteSnapshot={handleDeleteSnapshot}
              onCompareSnapshot={handleCompareSnapshot}
              soundsOn={soundsOn}
              onToggleSounds={setSoundsOn}
              streamMode={streamMode}
              onToggleStreamMode={setStreamMode}
              themeAuto={themeAuto}
              onToggleThemeAuto={setThemeAuto}
              notifsOn={notifsOn}
              onToggleNotifs={async (v) => {
                if (v) {
                  const ok = await requestNotifsPermission();
                  if (!ok) {
                    pushToast(t.notifsDenied || 'Permiso denegado por el navegador', 'kill', 2400);
                    return;
                  }
                }
                setNotifsOn(v);
              }}
              customEncounters={customEncounters}
              onImportEncounterFile={handleImportEncounterFile}
              onLoadEncounter={handleLoadEncounter}
              onDeleteEncounter={handleDeleteEncounter}
            />
          ) : viewMode === 'list' ? (
            <window.MstInitList
              tokens={tokens}
              activeId={activeId}
              selectedId={selectedId}
              onSelectToken={onSelectToken}
              buffs={buffs}
              lang={lang}
              onChangeHp={onChangeHp}
              density={density}
            />
          ) : (
            <React.Fragment>
              <MstMap
                encounter={{...initialEnc, tokens, zones}}
                gridType={gridType}
                selectedId={selectedId}
                activeId={activeId}
                onSelectToken={onSelectToken}
                onTokenMove={onTokenMove}
                dimMap={drawerHeight === 'full'}
                centerSignal={centerSignal}
                resetSignal={resetZoomSignal}
                measureMode={measureMode}
                measurePts={measurePts}
                onMeasureClick={onMeasureClick}
                pxPerSquare={GRID_PX_PER_SQUARE}
                computeDistance={computePathfinderDistance}
                templates={templates}
                lastPlacedTpl={lastPlacedTpl}
                pendingTemplate={pendingTemplate}
                onPlaceTemplate={onPlaceTemplate}
                onRemoveTemplate={onRemoveTemplate}
                fogMode={fogMode}
                fogCells={fogCells}
                onFogCellClick={onFogCellClick}
                mapBg={mapBg}
                mapNotes={mapNotes}
                pendingNote={pendingNote}
                onPlaceNote={onPlaceNote}
                onDeleteNote={onDeleteNote}
                onMoveNote={onMoveNote}
                multiSelected={multiSelected}
                onToggleMultiSelect={toggleMultiSelect}
              />
              {initPos === 'float' && <InitFloat />}
            </React.Fragment>
          )}
          {/* Floating fab toolbar — strip vertical pegado al borde derecho.
              2026-05-06: layout cambiado de fila horizontal abajo a columna
              vertical desde debajo de init-strip hasta justo encima del drawer.
              top:0 alinea con la zona del mapa (justo bajo la init-strip que
              ocupa unos 38px); bottom dinámico evita tapar el drawer; con
              overflow-y:auto en .mst-fab-row, hace scroll si la lista no cabe. */}
          {bottomTab === 'map' && drawerHeight !== 'full' && (
            <div
              className="mst-fab-row"
              style={{
                right: 0,
                top: 0,
                /* Pegado al borde superior del drawer (o al bottom-nav si no hay token).
                   El bottom debe dejar espacio para el bottom-nav (56px) + safe-area
                   + altura del drawer según su estado. */
                bottom: !selectedToken
                  ? 'calc(56px + env(safe-area-inset-bottom) + 8px)'
                  : drawerHeight === 'peek'
                    ? 'calc(56px + env(safe-area-inset-bottom) + 64px + 8px)'
                    : 'calc(56px + env(safe-area-inset-bottom) + 230px + 8px)',
                transition: 'bottom var(--t-mid) cubic-bezier(.2,.9,.3,1.2)'
              }}
            >
              <div className="mst-btn-stack">
                <button
                  className={"mst-fab " + (viewMode === 'list' ? 'active-mode' : '')}
                  aria-label={viewMode === 'list' ? t.viewMap : t.viewList}
                  title={viewMode === 'list' ? t.viewMap : t.viewList}
                  onClick={() => setViewMode(v => v === 'list' ? 'map' : 'list')}
                >
                  <window.MstIcon name={viewMode === 'list' ? 'map' : 'initiative'} size={20}/>
                </button>
                <span className="mst-btn-caption on-dark">{viewMode === 'list' ? t.mapMode : t.lblView}</span>
              </div>
              {viewMode === 'map' && (
                <div className="mst-btn-stack">
                  <button
                    className="mst-fab"
                    aria-label={t.lblCenter || 'Centrar'}
                    title={t.lblCenter || 'Centrar en activo'}
                    onClick={onCenterOnActive}
                  >
                    <window.MstIcon name="target" size={20}/>
                  </button>
                  <span className="mst-btn-caption on-dark">{t.lblCenter || 'Centrar'}</span>
                </div>
              )}
              {viewMode === 'map' && (
                <div className="mst-btn-stack">
                  <button
                    className="mst-fab"
                    aria-label={t.lblResetZoom || 'Reset zoom'}
                    title={t.lblResetZoom || 'Reset zoom (R)'}
                    onClick={() => setResetZoomSignal({ ts: Date.now() })}
                  >
                    <window.MstIcon name="search" size={20}/>
                  </button>
                  <span className="mst-btn-caption on-dark">{t.lblResetZoom || 'Reset'}</span>
                </div>
              )}
              {viewMode === 'map' && (
                <div className="mst-btn-stack">
                  <button
                    className={"mst-fab " + (measureMode ? 'active-mode' : '')}
                    aria-label={t.lblMeasure || 'Medir'}
                    title={(t.lblMeasure || 'Medir') + ' (M)'}
                    onClick={toggleMeasureMode}
                  >
                    <window.MstIcon name="ruler" size={20}/>
                  </button>
                  <span className="mst-btn-caption on-dark">{t.lblMeasure || 'Medir'}</span>
                </div>
              )}
              {viewMode === 'map' && (
                <div className="mst-btn-stack">
                  <button
                    className={"mst-fab " + (pendingTemplate ? 'active-mode' : '')}
                    aria-label={t.lblTemplates || 'Plantillas'}
                    title={(t.lblTemplates || 'Plantillas') + ' (T)'}
                    onClick={() => {
                      if (pendingTemplate) {
                        setPendingTemplate(null);
                      } else if (templates.length > 0) {
                        // Si ya hay plantillas, abrir modal añade una nueva
                        setTemplateModalOpen(true);
                      } else {
                        setTemplateModalOpen(true);
                      }
                    }}
                    onContextMenu={(e) => { e.preventDefault(); clearAllTemplates(); }}
                  >
                    <window.MstIcon name="circle" size={20}/>
                  </button>
                  <span className="mst-btn-caption on-dark">{t.lblTemplates || 'Plantillas'}</span>
                </div>
              )}
              {viewMode === 'map' && (
                <div className="mst-btn-stack">
                  <button
                    className={"mst-fab " + (fogMode ? 'active-mode' : '')}
                    aria-label={t.lblFog || 'Niebla'}
                    title={(t.lblFog || 'Niebla') + ' (F)'}
                    onClick={() => setFogMode(f => !f)}
                    onContextMenu={(e) => { e.preventDefault(); fogRevealAll(); }}
                  >
                    <window.MstIcon name="fog" size={20}/>
                  </button>
                  <span className="mst-btn-caption on-dark">{t.lblFog || 'Niebla'}</span>
                </div>
              )}
              {viewMode === 'map' && (
                <div className="mst-btn-stack">
                  <button
                    className={"mst-fab " + (pendingNote ? 'active-mode' : '')}
                    aria-label={t.lblNote || 'Nota'}
                    title={t.addNote || 'Añadir nota'}
                    onClick={() => setPendingNote(p => !p)}
                  >
                    <window.MstIcon name="note" size={20}/>
                  </button>
                  <span className="mst-btn-caption on-dark">{t.lblNote || 'Nota'}</span>
                </div>
              )}
              <div className="mst-btn-stack">
                <button className="mst-fab" aria-label={t.lblAdd || 'Añadir'} onClick={() => setAddTokenOpen(true)}>
                  <window.MstIcon name="plus" size={20}/>
                </button>
                <span className="mst-btn-caption on-dark">{t.lblAdd || 'Añadir'}</span>
              </div>
              <div className="mst-btn-stack">
                <button className="mst-fab" aria-label={t.lblDice} onClick={() => openDice('1d20', null)}><window.MstIcon name="dice" size={20}/></button>
                <span className="mst-btn-caption on-dark">{t.lblDice}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* DICE MODAL */}
      <window.MstDice.DiceModal
        open={diceOpen}
        onClose={closeDice}
        onRoll={onDiceRolled}
        lang={lang}
        presetExpr={dicePreset?.expr}
        presetLabel={dicePreset?.label}
      />

      {/* DAMAGE MODAL — flujo tras 'tirar ataque' */}
      <DamageModal
        open={!!attackPending}
        pending={attackPending}
        tokens={tokens}
        lang={lang}
        onClose={() => setAttackPending(null)}
        onApply={onApplyAttackResult}
      />

      {/* TEMPLATE MODAL — selector de plantilla de área */}
      <TemplateModal
        open={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
        onConfirm={onConfirmTemplate}
        lang={lang}
      />

      {/* GROUP SAVE MODAL — salvación en grupo tras AoE */}
      <GroupSaveModal
        open={groupSaveOpen}
        onClose={() => setGroupSaveOpen(false)}
        onApply={onApplyGroupSave}
        tokens={tokens}
        lang={lang}
      />

      {/* SNAPSHOT DIFF MODAL — comparar snapshot con estado actual */}
      <SnapshotDiffModal
        open={!!diffSnapshot}
        snapshot={diffSnapshot}
        current={{ tokens, buffs, round }}
        onClose={() => setDiffSnapshot(null)}
        lang={lang}
      />

      {/* ADD TOKEN MODAL */}
      <AddTokenModal
        open={addTokenOpen}
        onClose={() => setAddTokenOpen(false)}
        onSubmit={onAddToken}
        lang={lang}
      />

      {/* BUFF / CONDITION PICKER */}
      <BuffPickerModal
        open={buffPickerOpen}
        onClose={() => { setBuffPickerOpen(false); setBuffPickerTarget(null); }}
        onAdd={onAddBuff}
        lang={lang}
      />

      {/* EDIT TOKEN MODAL */}
      <window.MstEditTokenModal
        open={!!editTokenId}
        token={tokens.find(x => x.id === editTokenId)}
        onClose={() => setEditTokenId(null)}
        onSubmit={onEditToken}
        onDuplicate={() => onDuplicateToken(editTokenId)}
        onRemove={() => onRemoveToken(editTokenId)}
        onSaveToBestiary={() => {
          const tk = tokens.find(x => x.id === editTokenId);
          if (tk) onSaveTokenToBestiary(tk);
        }}
        lang={lang}
      />

      {/* EDIT BESTIARY ENTRY MODAL — reutiliza el mismo componente */}
      <window.MstEditTokenModal
        open={!!editEntry}
        token={editEntry}
        mode="bestiary"
        onClose={() => setEditEntry(null)}
        onSubmit={(updated) => { onSaveBestiaryEntry(updated); }}
        onRemove={() => { if (editEntry) onDeleteBestiaryEntry(editEntry); }}
        lang={lang}
      />

      {/* MST-J04: PROMPT / CONFIRM MODAL — reemplazo de window.prompt/confirm */}
      <PromptModal
        open={!!promptCfg}
        title={promptCfg && promptCfg.title}
        message={promptCfg && promptCfg.message}
        defaultValue={promptCfg && promptCfg.defaultValue}
        placeholder={promptCfg && promptCfg.placeholder}
        okLabel={promptCfg && promptCfg.okLabel}
        cancelLabel={promptCfg && promptCfg.cancelLabel}
        onSubmit={(v) => { if (promptCfg && promptCfg.onSubmit) promptCfg.onSubmit(v); else setPromptCfg(null); }}
        onClose={() => { if (promptCfg && promptCfg.onCancel) promptCfg.onCancel(); else setPromptCfg(null); }}
      />
      <ConfirmModal
        open={!!confirmCfg}
        title={confirmCfg && confirmCfg.title}
        message={confirmCfg && confirmCfg.message}
        okLabel={confirmCfg && confirmCfg.okLabel}
        cancelLabel={confirmCfg && confirmCfg.cancelLabel}
        danger={confirmCfg && confirmCfg.danger}
        onConfirm={() => { if (confirmCfg && confirmCfg.onConfirm) confirmCfg.onConfirm(); setConfirmCfg(null); }}
        onClose={() => { if (confirmCfg && confirmCfg.onCancel) confirmCfg.onCancel(); setConfirmCfg(null); }}
      />

      {/* DRAWER — solo visible en mapa cuando hay token seleccionado */}
      {bottomTab === 'map' && selectedToken && (
        <MstDrawer
          token={selectedToken}
          lang={lang}
          layout={drawerLayout}
          density={density}
          drawerHeight={drawerHeight}
          onSetHeight={setDrawerHeight}
          onChangeHp={onChangeHp}
          onSetHp={onSetHp}
          onSetVitalState={onSetVitalState}
          onToggleAction={onToggleAction}
          actionsState={actionsState}
          onToggleBuff={onToggleBuff}
          buffs={buffs}
          onAttackRoll={onAttackRoll}
          onAttackLogOnly={onAttackLogOnly}
          onSaveRoll={onSaveRoll}
          onSkillRoll={onSkillRoll}
          onToggleSpellSlot={onToggleSpellSlot}
          onChangeTokenZ={onChangeTokenZ}
          onRefreshFromSheet={refreshPJFromSheet}
          onSetPhoto={onSetPhoto}
          onRemoveToken={onRemoveToken}
          onRenameToken={onRenameToken}
          onEditToken={() => setEditTokenId(selectedToken.id)}
        />
      )}

      {/* Botón salir del modo stream (sólo visible cuando está activo) */}
      {streamMode && (
        <button
          className="mst-stream-exit"
          aria-label={t.streamExit || 'Salir modo TV'}
          title={t.streamExit || 'Salir modo TV'}
          onClick={() => setStreamMode(false)}
        >
          <window.MstIcon name="x" size={18}/>
        </button>
      )}

      {/* TOASTS */}
      {toasts.length > 0 && (
        <div className="mst-toast-stack" aria-live="polite">
          {toasts.map(ts => (
            <div key={ts.id} className={"mst-toast kind-" + ts.kind}>{ts.text}</div>
          ))}
        </div>
      )}

      {/* BOTTOM NAV */}
      <div className="mst-bottom-nav">
        <button className={"mst-tab-btn " + (bottomTab==='map'?'active':'')} onClick={()=>{setBottomTab('map'); setViewMode('map');}}>
          <window.MstIcon name="map" className="ico"/>
          <span className="lbl">{t.map}</span>
        </button>
        <button className={"mst-tab-btn " + (bottomTab==='init'?'active':'')} onClick={()=>{setBottomTab('init');}}>
          <window.MstIcon name="initiative" className="ico"/>
          <span className="lbl">{t.initiative.slice(0,5)}.</span>
        </button>
        <button className={"mst-tab-btn " + (bottomTab==='best'?'active':'')} onClick={()=>setBottomTab('best')}>
          <window.MstIcon name="book" className="ico"/>
          <span className="lbl">{t.bestiary.slice(0,7)}.</span>
        </button>
        <button className={"mst-tab-btn " + (bottomTab==='log'?'active':'')} onClick={()=>setBottomTab('log')}>
          <window.MstIcon name="pen" className="ico"/>
          <span className="lbl">{t.log}</span>
        </button>
        <button className={"mst-tab-btn " + (bottomTab==='set'?'active':'')} onClick={()=>setBottomTab('set')}>
          <window.MstIcon name="cog" className="ico"/>
          <span className="lbl">{t.settings.slice(0,5)}.</span>
        </button>
      </div>
    </div>
  );
}

window.MasterApp = MasterApp;
