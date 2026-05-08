// =====================================================================
// DICE + LOG — sistema de tiradas y registro central
// =====================================================================
const { useState: useStateDL, useRef: useRefDL, useEffect: useEffectDL, useMemo: useMemoDL } = React;

// ---- Roll engine ------------------------------------------------------
// Parsea expresiones tipo "1d20+5", "2d6", "1d8+3", "d20-1"
function parseDice(expr) {
  if (typeof expr === 'number') return { dice: [], mod: expr };
  const s = String(expr).replace(/\s+/g, '').toLowerCase();
  // grupos: dados (NdS) y modificadores enteros (+N / -N)
  const dice = [];
  let mod = 0;
  const partRx = /([+-]?)(\d*)d(\d+)|([+-]?\d+)/g;
  let m;
  while ((m = partRx.exec(s)) !== null) {
    if (m[3]) {
      const sign = m[1] === '-' ? -1 : 1;
      const n = m[2] ? parseInt(m[2], 10) : 1;
      const sides = parseInt(m[3], 10);
      dice.push({ n, sides, sign });
    } else if (m[4]) {
      mod += parseInt(m[4], 10);
    }
  }
  return { dice, mod };
}

function rollDice(expr, opts = {}) {
  // opts: { advantage: 'adv'|'dis'|null }
  const { dice, mod } = parseDice(expr);
  const rolls = [];
  let total = 0;
  for (const d of dice) {
    const groupRolls = [];
    for (let i = 0; i < d.n; i++) {
      groupRolls.push(1 + Math.floor(Math.random() * d.sides));
    }
    rolls.push({ ...d, results: groupRolls });
    total += d.sign * groupRolls.reduce((a, b) => a + b, 0);
  }
  total += mod;

  // Advantage / disadvantage para 1d20: tirar dos veces
  let adv = null;
  if (opts.advantage && dice.length === 1 && dice[0].n === 1 && dice[0].sides === 20) {
    const r2 = 1 + Math.floor(Math.random() * 20);
    const r1 = rolls[0].results[0];
    const chosen = opts.advantage === 'adv' ? Math.max(r1, r2) : Math.min(r1, r2);
    adv = { mode: opts.advantage, rolls: [r1, r2], chosen };
    rolls[0].results = [chosen];
    total = chosen + mod;
  }

  // Detectar crit/pifia natural en 1d20
  const isD20 = dice.length === 1 && dice[0].n === 1 && dice[0].sides === 20;
  const natural = isD20 ? rolls[0].results[0] : null;

  return { expr: String(expr), dice, mod, rolls, total, adv, natural };
}

// ---- Log store --------------------------------------------------------
// Cada entrada: { id, ts, kind, actor, target?, expr?, total?, text, raw? }
// kind: 'roll' | 'attack' | 'damage' | 'save' | 'turn' | 'note' | 'kill' | 'heal'

function useLog(initial) {
  const [entries, setEntries] = useStateDL(initial && Array.isArray(initial) ? initial : []);
  const idRef = useRefDL(0);
  // Si rehidratamos, el siguiente id debe ser mayor que el máximo guardado
  if (initial && Array.isArray(initial)) {
    initial.forEach(e => { if (e && typeof e.id === 'number' && e.id > idRef.current) idRef.current = e.id; });
  }
  const push = (entry) => {
    idRef.current += 1;
    setEntries(es => [{ id: idRef.current, ts: Date.now(), ...entry }, ...es].slice(0, 200));
  };
  const clear = () => setEntries([]);
  // Reemplaza el contenido completo (usado al rehidratar / importar JSON)
  const replace = (es) => {
    if (!Array.isArray(es)) return;
    es.forEach(e => { if (e && typeof e.id === 'number' && e.id > idRef.current) idRef.current = e.id; });
    setEntries(es);
  };
  return { entries, push, clear, replace };
}

// ---- Dice icon visual -------------------------------------------------
function DieFace({ value, sides, large }) {
  const size = large ? 56 : 32;
  const isD20 = sides === 20;
  return (
    <div className={"mst-die" + (large ? ' large' : '') + (isD20 ? ' d20' : '')}
      style={{ width: size, height: size }}>
      {isD20 ? (
        <svg viewBox="0 0 60 60" width={size} height={size}>
          <polygon points="30,4 54,20 50,48 10,48 6,20" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <polygon points="30,4 30,30 54,20" fill="rgba(var(--gold-rgb,200,144,48),.10)" stroke="currentColor" strokeWidth=".8"/>
          <polygon points="30,4 30,30 6,20" fill="rgba(var(--gold-rgb,200,144,48),.04)" stroke="currentColor" strokeWidth=".8"/>
          <polygon points="30,30 54,20 50,48" fill="rgba(var(--gold-rgb,200,144,48),.07)" stroke="currentColor" strokeWidth=".8"/>
          <polygon points="30,30 6,20 10,48" fill="rgba(var(--gold-rgb,200,144,48),.02)" stroke="currentColor" strokeWidth=".8"/>
          <polygon points="30,30 10,48 50,48" fill="rgba(var(--gold-rgb,200,144,48),.12)" stroke="currentColor" strokeWidth=".8"/>
        </svg>
      ) : (
        <svg viewBox="0 0 60 60" width={size} height={size}>
          <rect x="6" y="6" width="48" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth="1.6"/>
        </svg>
      )}
      <span className="mst-die-val">{value}</span>
    </div>
  );
}

// ---- Dice modal -------------------------------------------------------
function DiceModal({ open, onClose, onRoll, lang, presetExpr, presetLabel }) {
  const t = window.MstData.I18N[lang];
  const [expr, setExpr] = useStateDL('1d20');
  const [advantage, setAdvantage] = useStateDL(null); // null | 'adv' | 'dis'
  const [last, setLast] = useStateDL(null);
  const [rolling, setRolling] = useStateDL(false);

  useEffectDL(() => {
    if (open && presetExpr) setExpr(presetExpr);
    if (open) { setLast(null); setAdvantage(null); }
  }, [open, presetExpr]);

  if (!open) return null;

  const doRoll = () => {
    setRolling(true);
    setTimeout(() => {
      const r = rollDice(expr, { advantage });
      setLast(r);
      setRolling(false);
      try { window.logAction && window.logAction('dado', last && expr === last.expr ? 're-tirada' : 'tirada', `${expr} = ${r.total}`); } catch(_){}
      onRoll && onRoll(r, presetLabel || expr);
    }, 380);
  };

  const QUICK = ['1d4','1d6','1d8','1d10','1d12','1d20','2d6','3d6','1d100'];

  return (
    <div className="mst-modal-back" onClick={onClose}>
      <div className="mst-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mst-modal-header">
          <span>{t.diceRoller || 'Tirador de dados'}</span>
          <button className="mst-btn-icon" style={{width:32, height:32}} onClick={onClose} aria-label="cerrar">
            <window.MstIcon name="x" size={14}/>
          </button>
        </div>
        <div className="mst-modal-body">
          {presetLabel && (
            <div className="mst-modal-preset">{presetLabel}</div>
          )}
          <input
            className="mst-dice-input"
            value={expr}
            onChange={(e) => setExpr(e.target.value)}
            placeholder="1d20+5"
            spellCheck={false}
            autoComplete="off"
          />
          <div className="mst-dice-quick">
            {QUICK.map(q => (
              <button key={q} className="mst-chip mst-chip-ghost" onClick={() => setExpr(q)}>{q}</button>
            ))}
          </div>
          <div className="mst-dice-adv">
            <button className={"mst-pill-toggle " + (advantage==='adv'?'active':'')} onClick={() => setAdvantage(a => a==='adv'?null:'adv')}>
              ▲ {t.advantage || 'Ventaja'}
            </button>
            <button className={"mst-pill-toggle " + (advantage==='dis'?'active':'')} onClick={() => setAdvantage(a => a==='dis'?null:'dis')}>
              ▼ {t.disadvantage || 'Desventaja'}
            </button>
          </div>

          <button className={"mst-roll-btn " + (rolling ? 'rolling' : '')} onClick={doRoll} disabled={rolling}>
            {rolling ? '…' : (t.roll || 'Tirar')}
          </button>

          {last && (
            <div className="mst-dice-result">
              <div className="mst-dice-result-row">
                {last.rolls.map((g, gi) =>
                  g.results.map((v, ri) => (
                    <DieFace key={gi+'-'+ri} value={v} sides={g.sides} large={last.dice.length === 1 && g.results.length === 1} />
                  ))
                )}
              </div>
              {last.adv && (
                <div className="mst-dice-adv-info">
                  {last.adv.mode === 'adv' ? '▲' : '▼'} {last.adv.rolls.join(' / ')} → {last.adv.chosen}
                </div>
              )}
              <div className={"mst-dice-total " +
                (last.natural === 20 ? 'crit' : '') +
                (last.natural === 1 ? ' fumble' : '')}>
                {last.total}
                {last.mod !== 0 && (
                  <span className="mst-dice-mod"> ({last.mod >= 0 ? '+' : ''}{last.mod})</span>
                )}
              </div>
              {last.natural === 20 && <div className="mst-dice-tag crit">{t.critNatural || '¡20 NATURAL!'}</div>}
              {last.natural === 1  && <div className="mst-dice-tag fumble">{t.fumbleNatural || '¡PIFIA!'}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ---- Log panel --------------------------------------------------------
// Mapa de iconos por kind para los toggles de filtro
const LOG_KIND_FILTERS = [
  { key: 'all',     icon: 'pen' },
  { key: 'roll',    icon: 'dice' },
  { key: 'attack',  icon: 'swords' },
  { key: 'damage',  icon: 'heart' },
  { key: 'heal',    icon: 'heart' },
  { key: 'save',    icon: 'shield' },
  { key: 'turn',    icon: 'fast' },
  { key: 'kill',    icon: 'skull' },
];

// Convierte una entrada del log a una línea Markdown.
function logEntryToMarkdown(e, lang) {
  const t = (window.MstData && window.MstData.I18N && window.MstData.I18N[lang]) || {};
  const date = new Date(e.ts);
  const hh = String(date.getHours()).padStart(2,'0');
  const mm = String(date.getMinutes()).padStart(2,'0');
  const time = `${hh}:${mm}`;
  const kindLbl = (t['logKind_' + e.kind]) || e.kind;
  const total = (e.total != null) ? ` **${e.total}**` : '';
  const tag = e.natural === 20 ? ' 💥' : e.natural === 1 ? ' 💀' : '';
  const raw = e.raw ? `  \n  _${e.raw}_` : '';
  return `- \`${time}\` · _${kindLbl}_ · ${e.text || ''}${total}${tag}${raw}`;
}
function buildLogMarkdown(entries, lang) {
  const t = (window.MstData && window.MstData.I18N && window.MstData.I18N[lang]) || {};
  const head = `# ${t.log || 'Registro'} — ${new Date().toLocaleString()}`;
  const lines = entries.slice().reverse().map(e => logEntryToMarkdown(e, lang));
  return head + '\n\n' + lines.join('\n');
}

function LogPanel({ entries, onClear, lang }) {
  const t = window.MstData.I18N[lang];
  const [filter, setFilter] = useStateDL('all');
  const [search, setSearch] = useStateDL('');
  const [exported, setExported] = useStateDL(null);

  const filtered = useMemoDL(() => {
    const q = search.trim().toLowerCase();
    return entries.filter(e => {
      if (filter !== 'all' && e.kind !== filter) return false;
      if (!q) return true;
      const hay = ((e.text || '') + ' ' + (e.actor || '') + ' ' + (e.raw || '')).toLowerCase();
      return hay.includes(q);
    });
  }, [entries, filter, search]);

  const onExportClipboard = async () => {
    const md = buildLogMarkdown(filtered.length ? filtered : entries, lang);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(md);
        setExported('clipboard');
      } else {
        // Fallback: textarea + execCommand
        const ta = document.createElement('textarea');
        ta.value = md;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); setExported('clipboard'); }
        catch (_) { setExported('error'); }
        document.body.removeChild(ta);
      }
    } catch (_) { setExported('error'); }
    setTimeout(() => setExported(null), 1800);
  };
  const onExportMarkdown = () => {
    const md = buildLogMarkdown(filtered.length ? filtered : entries, lang);
    const blob = new Blob([md], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mst-log-' + new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19) + '.md';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 200);
  };

  if (!entries.length) {
    return (
      <div className="mst-log-empty">
        <window.MstIcon name="pen" size={32}/>
        <div className="mst-log-empty-title">{t.logEmpty || 'Sin actividad'}</div>
        <div className="mst-log-empty-sub">{t.logEmptySub || 'Las tiradas, daños y eventos aparecerán aquí.'}</div>
      </div>
    );
  }

  return (
    <div className="mst-log-list">
      <div className="mst-log-toolbar">
        <span>{filtered.length}/{entries.length} {t.events || 'eventos'}</span>
        <div style={{ display: 'flex', gap: 4 }}>
          <button
            className={"mst-chip mst-chip-ghost" + (exported === 'clipboard' ? ' active' : '')}
            onClick={onExportClipboard}
            title={t.logCopy || 'Copiar al portapapeles'}
          >
            <window.MstIcon name="copy" size={12}/> {exported === 'clipboard' ? (t.logCopied || 'Copiado') : (t.logCopy || 'Copiar')}
          </button>
          <button
            className="mst-chip mst-chip-ghost"
            onClick={onExportMarkdown}
            title={t.logExport || 'Exportar Markdown'}
          >
            <window.MstIcon name="download" size={12}/> .md
          </button>
          <button className="mst-chip mst-chip-ghost" onClick={() => {
            try { window.logAction && window.logAction('dado', 'log limpiado', String(entries.length) + ' entradas'); } catch(_){}
            onClear && onClear();
          }}>
            <window.MstIcon name="x" size={12}/> {t.clear || 'Limpiar'}
          </button>
        </div>
      </div>
      <div className="mst-log-filters">
        <input
          type="text"
          className="mst-log-search"
          placeholder={t.logSearch || 'Buscar…'}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="mst-log-filter-chips">
          {LOG_KIND_FILTERS.map(f => (
            <button
              key={f.key}
              type="button"
              className={"mst-log-filter-chip" + (filter === f.key ? ' active' : '')}
              onClick={() => setFilter(f.key)}
              title={t['logKind_' + f.key] || f.key}
            >
              <window.MstIcon name={f.icon} size={12}/>
              <span>{t['logKind_' + f.key] || (f.key === 'all' ? (t.allKinds || 'Todos') : f.key)}</span>
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="mst-log-empty" style={{ padding: 32 }}>
          <window.MstIcon name="search" size={28}/>
          <div className="mst-log-empty-title">{t.logNoMatches || 'Sin coincidencias'}</div>
        </div>
      ) : filtered.map(e => (
        <LogEntry key={e.id} entry={e} lang={lang}/>
      ))}
    </div>
  );
}

function LogEntry({ entry, lang }) {
  const t = window.MstData.I18N[lang];
  const date = new Date(entry.ts);
  const hh = String(date.getHours()).padStart(2,'0');
  const mm = String(date.getMinutes()).padStart(2,'0');
  const ss = String(date.getSeconds()).padStart(2,'0');
  const time = `${hh}:${mm}:${ss}`;

  let icon = 'pen';
  let colorVar = 'var(--ink-muted)';
  if (entry.kind === 'roll')   { icon = 'dice';   colorVar = 'var(--gold)'; }
  if (entry.kind === 'attack') { icon = 'swords'; colorVar = 'var(--accent)'; }
  if (entry.kind === 'damage') { icon = 'heart';  colorVar = 'var(--negative)'; }
  if (entry.kind === 'heal')   { icon = 'heart';  colorVar = 'var(--positive)'; }
  if (entry.kind === 'save')   { icon = 'shield'; colorVar = 'var(--gold)'; }
  if (entry.kind === 'turn')   { icon = 'fast';   colorVar = 'var(--accent)'; }
  if (entry.kind === 'kill')   { icon = 'skull';  colorVar = 'var(--negative)'; }

  return (
    <div className={"mst-log-entry kind-" + entry.kind}>
      <div className="mst-log-entry-icon" style={{ color: colorVar }}>
        <window.MstIcon name={icon} size={14}/>
      </div>
      <div className="mst-log-entry-body">
        <div className="mst-log-entry-text">{entry.text}</div>
        {entry.raw && <div className="mst-log-entry-raw">{entry.raw}</div>}
      </div>
      <div className="mst-log-entry-meta">
        {entry.total != null && (
          <div className={"mst-log-entry-total " +
            (entry.natural === 20 ? 'crit' : '') +
            (entry.natural === 1 ? ' fumble' : '')}>
            {entry.total}
          </div>
        )}
        <div className="mst-log-entry-time">{time}</div>
      </div>
    </div>
  );
}

window.MstDice = { rollDice, parseDice, useLog, DiceModal, LogPanel };
