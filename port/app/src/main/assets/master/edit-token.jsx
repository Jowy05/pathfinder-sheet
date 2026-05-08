// =====================================================================
// EDIT TOKEN MODAL — editar nombre, tipo, stats completos y color
// =====================================================================
const KIND_OPTIONS = ['pj', 'ally', 'enemy', 'pet', 'neutral'];

const COLOR_PRESETS = [
  '#3a78c9', // azul (PJ)
  '#5fa760', // verde (aliado)
  '#a64545', // rojo (enemigo)
  '#b88a4a', // marrón (mascota)
  '#888888', // gris (neutral)
  '#7a4ea8', // morado
  '#c89030', // dorado
  '#1a1a1a', // negro (boss)
];

function MstEditTokenModal({ open, token, onClose, onSubmit, onDuplicate, onRemove, onSaveToBestiary, mode, lang }) {
  const t = window.MstData.I18N[lang];
  const [form, setForm] = React.useState(null);

  React.useEffect(() => {
    if (open && token) {
      if (mode !== 'bestiary') {
        try { window.logAction && window.logAction('token','abrir editor', { name: token.name, id: token.id }); } catch(_){}
      }
      const baseAttacks = Array.isArray(token.attacks) && token.attacks.length
        ? token.attacks.map(a => ({ ...a }))
        : (window.MstData.defaultAttacksForKind(token.kind) || []).map(a => ({ ...a }));
      // Serializa los DRs como texto editable: "fuego 5; frío 10; all 3"
      const drToText = (dr) => {
        if (!dr || typeof dr !== 'object') return '';
        return Object.keys(dr).map(k => `${k} ${dr[k]}`).join('; ');
      };
      setForm({
        name:   token.name || '',
        kind:   token.kind || 'enemy',
        color:  token.color || '#888888',
        hp:     token.hp ?? 10,
        hpMax:  token.hpMax ?? 10,
        ac:     token.ac ?? 10,
        ini:    token.ini ?? 10,
        iniMod: token.iniMod ?? 0,
        fort:   token.fort ?? 0,
        ref:    token.ref ?? 0,
        will:   token.will ?? 0,
        per:    token.per ?? 0,
        spd:    token.spd ?? 30,
        attacks: baseAttacks,
        resistText: drToText(token.dr),
        immuneText: Array.isArray(token.immune) ? token.immune.join(', ') : '',
        vulnText:   Array.isArray(token.vuln)   ? token.vuln.join(', ')   : '',
      });
    }
  }, [open, token]);

  if (!open || !form) return null;

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const num = (k, v) => set(k, v === '' ? '' : (parseInt(v, 10) || 0));

  const submit = (e) => {
    if (e) e.preventDefault();
    if (!String(form.name).trim()) return;
    const out = {
      ...token,
      name: String(form.name).trim(),
      short: String(form.name).trim().slice(0, 2).toUpperCase(),
      kind: form.kind,
      color: form.color,
      hp: parseInt(form.hp, 10) || 0,
      hpMax: parseInt(form.hpMax, 10) || 1,
      ac: parseInt(form.ac, 10) || 10,
      ini: parseInt(form.ini, 10) || 0,
      iniMod: parseInt(form.iniMod, 10) || 0,
      fort: parseInt(form.fort, 10) || 0,
      ref: parseInt(form.ref, 10) || 0,
      will: parseInt(form.will, 10) || 0,
      per: parseInt(form.per, 10) || 0,
      spd: parseInt(form.spd, 10) || 0,
      attacks: (form.attacks || [])
        .map(a => {
          const validTypes = ['melee', 'ranged', 'trip', 'disarm', 'sunder', 'grapple', 'bullrush'];
          const type = validTypes.indexOf(a.type) >= 0 ? a.type : 'melee';
          return {
            name: String(a.name || '').trim(),
            tohit: String(a.tohit || '+0').trim(),
            dmg: String(a.dmg || '').trim(),
            type,
          };
        })
        .filter(a => a.name && a.dmg),
      // Parser de DR: "fuego 5; cold 10; all 3" → {fire:5, cold:10, all:3}
      // Acepta español/inglés y un mapeo simple de alias.
      dr: (function parseDR(text){
        const out = {};
        const aliases = {
          'fuego':'fire','frío':'cold','frio':'cold','ácido':'acid','acido':'acid',
          'electricidad':'electric','sónico':'sonic','sonico':'sonic',
          'fuerza':'force','negativo':'negative','positivo':'positive',
          'cortante':'slash','perforante':'pierce','contundente':'blunt',
          'todo':'all','todos':'all',
        };
        String(text || '').split(/[;,\n]+/).forEach(part => {
          const m = part.trim().match(/^([a-záéíóúñ]+)\s+(-?\d+)$/i);
          if (!m) return;
          const k = (aliases[m[1].toLowerCase()] || m[1].toLowerCase());
          const v = parseInt(m[2], 10);
          if (!isNaN(v)) out[k] = v;
        });
        return out;
      })(form.resistText),
      immune: String(form.immuneText || '').split(/[,\n]+/).map(s => s.trim().toLowerCase()).filter(Boolean).map(s => {
        const aliases = { 'fuego':'fire','frío':'cold','frio':'cold','ácido':'acid','acido':'acid','electricidad':'electric','sónico':'sonic','sonico':'sonic','fuerza':'force','negativo':'negative','positivo':'positive','cortante':'slash','perforante':'pierce','contundente':'blunt' };
        return aliases[s] || s;
      }),
      vuln: String(form.vulnText || '').split(/[,\n]+/).map(s => s.trim().toLowerCase()).filter(Boolean).map(s => {
        const aliases = { 'fuego':'fire','frío':'cold','frio':'cold','ácido':'acid','acido':'acid','electricidad':'electric','sónico':'sonic','sonico':'sonic','fuerza':'force','negativo':'negative','positivo':'positive','cortante':'slash','perforante':'pierce','contundente':'blunt' };
        return aliases[s] || s;
      }),
    };
    // Si bajan hpMax por debajo de hp actual, recortar
    if (out.hp > out.hpMax) out.hp = out.hpMax;
    // Logs de cambios en token (no en bestiario; allí ya se loggea desde bestiary.jsx)
    if (mode !== 'bestiary' && token) {
      try {
        const oldName = token.name || '';
        const newName = out.name;
        if (oldName !== newName) {
          window.logAction && window.logAction('token','renombrado', { from: oldName, to: newName, label: oldName + '→' + newName });
        }
        if ((token.hpMax ?? 0) !== out.hpMax) {
          window.logAction && window.logAction('token','PG máx cambiado', { name: out.name, from: token.hpMax, to: out.hpMax });
        }
        if ((token.hp ?? 0) !== out.hp) {
          window.logAction && window.logAction('token','PG ajustado', { name: out.name, delta: out.hp - (token.hp ?? 0), from: token.hp, to: out.hp });
        }
        if ((token.color || '') !== (out.color || '')) {
          window.logAction && window.logAction('token','color', { name: out.name, value: out.color });
        }
      } catch(_){}
    }
    if (mode === 'bestiary') {
      // Para entradas de bestiario no llevamos hp/short/x/y, sí cr/tag/notes
      delete out.hp;
      delete out.short;
      delete out.x;
      delete out.y;
      out.cr = (token && token.cr) || '';
      out.tag = (token && token.tag) || '';
      out.notes = (token && token.notes) || '';
    }
    onSubmit(out);
    onClose();
  };

  const headerTitle = mode === 'bestiary'
    ? (t.editStats || 'Editar criatura')
    : (t.editToken || 'Editar combatiente');
  const isBestiary = mode === 'bestiary';

  return (
    <div className="mst-modal-backdrop" onClick={onClose}>
      <div className="mst-modal mst-edit-modal" onClick={e => e.stopPropagation()}>
        <div className="mst-modal-header">
          <span style={{ fontFamily: 'Cinzel, Georgia, serif', fontWeight: 700, fontSize: 16, letterSpacing: '.06em', textTransform: 'uppercase' }}>
            {headerTitle}
          </span>
          <button className="mst-btn-icon" onClick={onClose} aria-label="cerrar" style={{width:32,height:32,padding:0}}>
            <window.MstIcon name="x" size={16}/>
          </button>
        </div>
        <form onSubmit={submit} className="mst-modal-body">
          {/* Identidad */}
          <label className="mst-field">
            <span className="lbl">{t.editName || 'Nombre'}</span>
            <input
              type="text"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              autoFocus
            />
          </label>

          <div className="mst-field-row">
            <label className="mst-field" style={{ flex: 1.2 }}>
              <span className="lbl">{t.kind || 'Tipo'}</span>
              <select value={form.kind} onChange={e => set('kind', e.target.value)}>
                <option value="pj">{t.kindPJ || 'PJ'}</option>
                <option value="ally">{t.kindAlly || 'Aliado'}</option>
                <option value="enemy">{t.kindEnemy || 'Enemigo'}</option>
                <option value="pet">{t.kindPet || 'Mascota'}</option>
                <option value="neutral">{t.kindNeutral || 'Neutral'}</option>
              </select>
            </label>
            <label className="mst-field" style={{ flex: 1 }}>
              <span className="lbl">{t.color || 'Color'}</span>
              <div className="mst-color-row">
                {COLOR_PRESETS.map(c => (
                  <button
                    type="button"
                    key={c}
                    className={"mst-color-swatch " + (form.color === c ? 'active' : '')}
                    style={{ background: c }}
                    onClick={() => set('color', c)}
                    aria-label={c}
                  />
                ))}
                <input
                  type="color"
                  className="mst-color-picker"
                  value={form.color}
                  onChange={e => set('color', e.target.value)}
                  aria-label={t.color || 'Color'}
                />
              </div>
            </label>
          </div>

          {/* HP / AC / INI */}
          <div className="mst-field-row">
            {!isBestiary && (
              <label className="mst-field">
                <span className="lbl">{t.hp || 'HP'}</span>
                <input type="number" inputMode="numeric" value={form.hp} onChange={e => num('hp', e.target.value)} />
              </label>
            )}
            <label className="mst-field">
              <span className="lbl">{t.hpMax || 'HP máx.'}</span>
              <input type="number" inputMode="numeric" value={form.hpMax} onChange={e => num('hpMax', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.ac || 'CA'}</span>
              <input type="number" inputMode="numeric" value={form.ac} onChange={e => num('ac', e.target.value)} />
            </label>
          </div>

          <div className="mst-field-row">
            <label className="mst-field">
              <span className="lbl">{t.initiative || 'Iniciativa'}</span>
              <input type="number" inputMode="numeric" value={form.ini} onChange={e => num('ini', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.iniMod || 'Mod. iniciativa'}</span>
              <input type="number" inputMode="numeric" value={form.iniMod} onChange={e => num('iniMod', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.speed || 'Vel.'}</span>
              <input type="number" inputMode="numeric" value={form.spd} onChange={e => num('spd', e.target.value)} />
            </label>
          </div>

          {/* Saves */}
          <div className="mst-field-row">
            <label className="mst-field">
              <span className="lbl">{t.fort || 'Fort'}</span>
              <input type="number" inputMode="numeric" value={form.fort} onChange={e => num('fort', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.ref || 'Ref'}</span>
              <input type="number" inputMode="numeric" value={form.ref} onChange={e => num('ref', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.will || 'Vol'}</span>
              <input type="number" inputMode="numeric" value={form.will} onChange={e => num('will', e.target.value)} />
            </label>
            <label className="mst-field">
              <span className="lbl">{t.perception || 'Perc.'}</span>
              <input type="number" inputMode="numeric" value={form.per} onChange={e => num('per', e.target.value)} />
            </label>
          </div>

          {/* Editor de ataques */}
          <div className="mst-field">
            <span className="lbl">{t.attacks || 'Ataques'}</span>
            <div className="mst-attacks-editor">
              {(form.attacks || []).map((a, i) => (
                <div key={i} className="row">
                  <input
                    type="text"
                    value={a.name}
                    onChange={e => set('attacks', form.attacks.map((x, j) => j === i ? { ...x, name: e.target.value } : x))}
                    placeholder={t.attackName || 'Nombre'}
                  />
                  <input
                    type="text"
                    value={a.tohit}
                    onChange={e => set('attacks', form.attacks.map((x, j) => j === i ? { ...x, tohit: e.target.value } : x))}
                    placeholder="+5"
                  />
                  <input
                    type="text"
                    value={a.dmg}
                    onChange={e => set('attacks', form.attacks.map((x, j) => j === i ? { ...x, dmg: e.target.value } : x))}
                    placeholder="1d8+3"
                  />
                  <select
                    value={a.type || 'melee'}
                    onChange={e => set('attacks', form.attacks.map((x, j) => j === i ? { ...x, type: e.target.value } : x))}
                  >
                    <option value="melee">{t.melee || 'C/C'}</option>
                    <option value="ranged">{t.ranged || 'Dist'}</option>
                    <option value="trip">{t.atkTrip || 'Derribo'}</option>
                    <option value="disarm">{t.atkDisarm || 'Desarmar'}</option>
                    <option value="sunder">{t.atkSunder || 'Romper'}</option>
                    <option value="grapple">{t.atkGrapple || 'Presa'}</option>
                    <option value="bullrush">{t.atkBullrush || 'Embestida'}</option>
                  </select>
                  <button
                    type="button"
                    className="del-btn"
                    onClick={() => set('attacks', form.attacks.filter((_, j) => j !== i))}
                    aria-label={t.delete || 'Borrar'}
                    title={t.delete || 'Borrar'}
                  >
                    <window.MstIcon name="x" size={12}/>
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="add-row"
                onClick={() => set('attacks', [...(form.attacks || []), { name: '', tohit: '+0', dmg: '1d6', type: 'melee' }])}
              >
                <window.MstIcon name="plus" size={12}/>
                {t.addAttack || 'Añadir ataque'}
              </button>
            </div>
          </div>

          {/* Resistencias / inmunidades / vulnerabilidades */}
          <label className="mst-field">
            <span className="lbl">{t.resists || 'Resistencias'}</span>
            <input
              type="text"
              value={form.resistText || ''}
              onChange={e => set('resistText', e.target.value)}
              placeholder={t.resistsHint || 'fuego 5; frío 10; all 3'}
            />
          </label>
          <label className="mst-field">
            <span className="lbl">{t.immunities || 'Inmunidades'}</span>
            <input
              type="text"
              value={form.immuneText || ''}
              onChange={e => set('immuneText', e.target.value)}
              placeholder={t.immunitiesHint || 'negativo, mental'}
            />
          </label>
          <label className="mst-field">
            <span className="lbl">{t.vulnerabilities || 'Vulnerabilidades'}</span>
            <input
              type="text"
              value={form.vulnText || ''}
              onChange={e => set('vulnText', e.target.value)}
              placeholder={t.vulnerabilitiesHint || 'frío'}
            />
          </label>

          <div className="mst-modal-actions" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {onDuplicate && (
                <button
                  type="button"
                  className="mst-modal-btn"
                  onClick={() => {
                    try {
                      if (mode === 'bestiary') {
                        window.logAction && window.logAction('bestiario','custom añadido', { name: form.name, source: 'duplicate' });
                      } else {
                        window.logAction && window.logAction('token','duplicado', { name: form.name });
                      }
                    } catch(_){}
                    onDuplicate(); onClose();
                  }}
                  title={t.duplicate || 'Duplicar'}
                >
                  <window.MstIcon name="copy" size={14}/>
                  <span style={{ marginLeft: 6 }}>{t.duplicate || 'Duplicar'}</span>
                </button>
              )}
              {onSaveToBestiary && !isBestiary && (
                <button
                  type="button"
                  className="mst-modal-btn"
                  onClick={() => {
                    try { window.logAction && window.logAction('bestiario','custom añadido', { name: form.name, source: 'token' }); } catch(_){}
                    onSaveToBestiary();
                  }}
                  title={t.saveAsCreature || 'Guardar en bestiario'}
                >
                  <window.MstIcon name="book" size={14}/>
                  <span style={{ marginLeft: 6 }}>{t.saveAsCreature || 'Guardar'}</span>
                </button>
              )}
              {onRemove && (
                <button
                  type="button"
                  className="mst-modal-btn danger"
                  onClick={() => {
                    const msg = isBestiary
                      ? (t.confirmDeleteEntry || '¿Borrar a {n}?').replace('{n}', form.name)
                      : (t.confirmRemove || '¿Quitar a {n}?').replace('{n}', form.name);
                    if (window.confirm(msg)) {
                      try {
                        if (isBestiary) {
                          window.logAction && window.logAction('bestiario','borrado', { name: form.name });
                        } else {
                          window.logAction && window.logAction('token','eliminado', { name: form.name });
                        }
                      } catch(_){}
                      onRemove();
                      onClose();
                    }
                  }}
                  title={isBestiary ? (t.delete || 'Borrar') : (t.removeToken || 'Quitar')}
                >
                  <window.MstIcon name="x" size={14}/>
                </button>
              )}
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button type="button" className="mst-modal-btn" onClick={onClose}>{t.cancel || 'Cancelar'}</button>
              <button type="submit" className="mst-modal-btn primary" disabled={!String(form.name).trim()}>
                {t.save || 'Guardar'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

window.MstEditTokenModal = MstEditTokenModal;
