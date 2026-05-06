// =====================================================================
// DRAWER — bottom sheet con stats, action economy, buffs, ataques
// 3 layouts: compact (stats colapsados), expanded (todo visible), tabs
// =====================================================================
const { useState: useStateD, useRef: useRefD, useEffect: useEffectD } = React;

function ActionDiamond({ spent, onClick, label }) {
  return (
    <div className="mst-btn-stack">
      <button className={"mst-diamond " + (spent ? "spent" : "")} onClick={onClick} aria-label={label || "Action"}>
        <svg viewBox="0 0 40 40">
          <polygon points="20,4 36,20 20,36 4,20"
            className={spent ? "d-empty" : "d-fill"} />
          {!spent && (
            <polygon points="20,10 30,20 20,30 10,20"
              fill="rgba(255,255,255,0.18)" />
          )}
        </svg>
      </button>
      {label && <span className="mst-btn-caption">{label}</span>}
    </div>
  );
}

function ReactionBtn({ spent, onClick, label }) {
  return (
    <div className="mst-btn-stack">
      <button className={"mst-reaction-btn " + (spent ? "spent" : "")} onClick={onClick} aria-label={label || "Reaction"}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 0 1 15.5-6.3"/>
          <path d="M21 4v5h-5"/>
        </svg>
      </button>
      {label && <span className="mst-btn-caption">{label}</span>}
    </div>
  );
}

function StatTile({ lbl, val, bonus }) {
  return (
    <div className="mst-stat-tile">
      <div className="lbl">{lbl}</div>
      <div className={"val " + (bonus ? "bonus" : "")}>{val}</div>
    </div>
  );
}

function HpBar({ hp, hpMax }) {
  const pct = Math.max(0, Math.min(100, (hp / hpMax) * 100));
  let cls = "healthy";
  if (pct < 50) cls = "bloody";
  if (pct < 25) cls = "";
  return (
    <div className="mst-hp-wrap">
      <div className={"mst-hp-fill " + cls} style={{ width: pct + "%" }} />
      <div className="mst-hp-text">{hp} / {hpMax}</div>
    </div>
  );
}

function CardTitle({ children }) {
  return <div className="mst-card-title"><span className="orn">✦</span>{children}<span className="orn">✦</span></div>;
}

function MstDrawer({ token, lang, layout, density, drawerHeight, onSetHeight, onChangeHp, onSetHp, onSetVitalState, onToggleAction, actionsState, onToggleBuff, buffs, onAttackRoll, onAttackLogOnly, onSaveRoll, onSkillRoll, onToggleSpellSlot, onChangeTokenZ, onSetPhoto, onRemoveToken, onRenameToken, onEditToken, onRefreshFromSheet }) {
  const t = window.MstData.I18N[lang];
  const [tab, setTab] = useStateD("stats");
  const dragRef = useRefD(null);

  // Drag handle to resize drawer
  const onHandlePointerDown = (e) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { y: e.clientY, h: drawerHeight, id: e.pointerId, moved: false };
  };
  const onHandlePointerMove = (e) => {
    const d = dragRef.current;
    if (!d || d.id !== e.pointerId) return;
    const dy = d.y - e.clientY;
    if (Math.abs(dy) > 4) d.moved = true;
    const vp = window.innerHeight;
    const newPx = (vp * (d.h === 'peek' ? 0.05 : d.h === 'mid' ? 0.45 : 0.85)) + dy;
    const ratio = newPx / vp;
    let next = 'peek';
    if (ratio > 0.65) next = 'full';
    else if (ratio > 0.20) next = 'mid';
    if (next !== drawerHeight) onSetHeight(next);
  };
  const onHandlePointerUp = (e) => {
    const d = dragRef.current;
    // Tap (no movement) → cycle through states peek → mid → full → peek
    if (d && !d.moved) {
      const cycle = { peek: 'mid', mid: 'full', full: 'peek' };
      onSetHeight(cycle[drawerHeight] || 'mid');
    }
    dragRef.current = null;
  };
  const onHandlePointerCancel = () => { dragRef.current = null; };

  if (!token) {
    return (
      <div className={"mst-drawer h-" + drawerHeight}>
        <div className="mst-drawer-handle"
          onPointerDown={onHandlePointerDown}
          onPointerMove={onHandlePointerMove}
          onPointerUp={onHandlePointerUp} onPointerCancel={onHandlePointerCancel}>
          <div className="bar"/>
        </div>
        <div className="mst-drawer-content" style={{textAlign:'center', padding: '24px 16px', color:'var(--ink-muted)'}}>
          <div style={{fontFamily:'Cinzel, Georgia, serif', fontSize:14, letterSpacing:'.1em', textTransform:'uppercase', marginBottom:6}}>{t.selectToken}</div>
          <div style={{fontSize:12}}>{t.encDesc}</div>
        </div>
      </div>
    );
  }

  const attacks = window.MstData.attacksFor(token);
  const tokenBuffs = buffs[token.id] || window.MstData.buffsFor(token);
  const ax = actionsState[token.id] || { used:[false,false,false], reaction:false };

  const SaveTile = ({ lbl, save, saveKey }) => (
    <button
      type="button"
      className="mst-stat-tile mst-stat-tile-clickable"
      onClick={() => onSaveRoll && onSaveRoll(token, saveKey, save)}
      title={`${t.rollSave || 'Tirar salvación'}: ${lbl}`}
    >
      <div className="lbl">{lbl}</div>
      <div className="val bonus">{(save >= 0 ? '+' : '') + save}</div>
      <div className="dice-mini" aria-hidden="true">
        <window.MstIcon name="dice" size={10}/>
      </div>
    </button>
  );

  const StatsSection = () => (
    <>
      <div className="mst-stat-grid">
        <StatTile lbl={t.ac} val={token.ac} />
        <SaveTile lbl={t.fort} save={token.fort ?? 0} saveKey="fort"/>
        <SaveTile lbl={t.ref}  save={token.ref  ?? 0} saveKey="ref"/>
        <SaveTile lbl={t.will} save={token.will ?? 0} saveKey="will"/>
      </div>
      {Array.isArray(token.armor) && token.armor.length > 0 && (
        <div className="mst-armor-line">
          {token.armor.map((a, i) => (
            <span key={i} className="armor-piece" title={`${a.name} · ${t.acBonus || 'CA'} +${a.acBonus} · ACP ${a.acp}${a.arcaneFail ? ' · FA ' + a.arcaneFail + '%' : ''}`}>
              <window.MstIcon name="shield" size={11}/>
              <span className="name">{a.name}</span>
              {a.acp ? <span className="acp">ACP {a.acp}</span> : null}
            </span>
          ))}
        </div>
      )}
      {(Number.isFinite(token.acTouch) || Number.isFinite(token.acFlat)) && (
        <div className="mst-stat-grid" style={{ marginTop: 8, gridTemplateColumns: 'repeat(2,1fr)' }}>
          {Number.isFinite(token.acTouch) && (
            <StatTile lbl={t.acTouch || 'CA Toque'} val={token.acTouch} />
          )}
          {Number.isFinite(token.acFlat) && (
            <StatTile lbl={t.acFlat || 'CA Despr.'} val={token.acFlat} />
          )}
        </div>
      )}
      {density === 'rich' && (
        <div className="mst-stat-grid" style={{ marginTop: 8, gridTemplateColumns: 'repeat(3,1fr)' }}>
          <StatTile lbl={t.perception} val={"+" + token.per} />
          <StatTile lbl={t.speed} val={token.spd + "ft"} />
          <StatTile lbl={t.initiative} val={token.ini} />
        </div>
      )}
    </>
  );

  const ActionsSection = () => (
    <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 12, padding: '8px 4px' }}>
      <div className="mst-actions-row">
        <ActionDiamond spent={ax.used[0]} onClick={() => onToggleAction(token.id, 'a', 0)} label={`${t.lblAction} 1`} />
        <ActionDiamond spent={ax.used[1]} onClick={() => onToggleAction(token.id, 'a', 1)} label={`${t.lblAction} 2`} />
        <ActionDiamond spent={ax.used[2]} onClick={() => onToggleAction(token.id, 'a', 2)} label={`${t.lblAction} 3`} />
        <div style={{width:1, height:28, background:'var(--line)', margin:'14px 6px 0'}}/>
        <ReactionBtn spent={ax.reaction} onClick={() => onToggleAction(token.id, 'r')} label={t.lblReaction} />
      </div>
    </div>
  );

  const BuffsSection = () => (
    <div style={{ display:'flex', flexWrap:'wrap', gap: 6, marginTop: 4 }}>
      {tokenBuffs.map((b, i) => (
        <span key={i} className={"mst-chip " + (b.kind === 'buff' ? 'buff' : 'debuff')}
          onClick={() => onToggleBuff(token.id, i, 'remove')}>
          {window.MstData.buffLabel(b, lang)}
          <span className="x">×</span>
        </span>
      ))}
      <button className="mst-chip mst-chip-add" onClick={() => onToggleBuff(token.id, null, 'add')}>＋ {t.add}</button>
    </div>
  );

  const HpStepper = () => {
    const [hpAmt, setHpAmt] = useStateD('');
    const apply = (sign) => {
      const n = parseInt(hpAmt, 10);
      if (!Number.isFinite(n) || n <= 0) return;
      onChangeHp(token.id, sign * n);
      setHpAmt('');
    };
    const onSet = () => {
      if (!onSetHp) return;
      const v = window.prompt(t.hpSetPrompt || 'HP exacto:', String(token.hp));
      if (v == null) return;
      onSetHp(token.id, v);
    };
    const onFull = () => onSetHp && onSetHp(token.id, token.hpMax);
    const onHalf = () => onSetHp && onSetHp(token.id, Math.ceil(token.hpMax / 2));
    return (
      <div>
        <div className="mst-hp-stepper-v2" style={{ marginTop: 10 }}>
          <button className="hp-btn neg" onClick={() => onChangeHp(token.id, -1)} aria-label="-1">−1</button>
          <button className="hp-btn neg sm" onClick={() => apply(-1)} aria-label="restar" disabled={!hpAmt}>−</button>
          <input
            className="hp-amt"
            type="number"
            inputMode="numeric"
            min="0"
            value={hpAmt}
            onChange={(e) => setHpAmt(e.target.value.replace(/[^\d]/g, ''))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') apply(-1);
            }}
            placeholder="—"
          />
          <button className="hp-btn pos sm" onClick={() => apply(+1)} aria-label="sumar" disabled={!hpAmt}>＋</button>
          <button className="hp-btn pos" onClick={() => onChangeHp(token.id, +1)} aria-label="+1">+1</button>
          <div className="hp-bar-wrap">
            <HpBar hp={token.hp} hpMax={token.hpMax} />
          </div>
        </div>
        {(onSetHp || onChangeTokenZ) && (
          <div className="mst-hp-shortcuts">
            {onSetHp && <button type="button" className="hp-shortcut" onClick={onFull} title={t.hpFullHeal || 'Curar todo'}>{t.hpFullHeal || 'Curar todo'}</button>}
            {onSetHp && <button type="button" className="hp-shortcut" onClick={onHalf} title={t.hpHalfHeal || 'Mitad'}>½</button>}
            {onSetHp && <button type="button" className="hp-shortcut" onClick={onSet} title={t.hpSet || 'Establecer'}>＝</button>}
            {onChangeTokenZ && (
              <>
                <button type="button" className="hp-shortcut" onClick={() => onChangeTokenZ(token.id, 'top')} title={t.zTop || 'Capa arriba'}>⇡</button>
                <button type="button" className="hp-shortcut" onClick={() => onChangeTokenZ(token.id, 'bottom')} title={t.zBottom || 'Capa abajo'}>⇣</button>
              </>
            )}
          </div>
        )}
        {token.hp <= 0 && onSetVitalState && (
          <div className={"mst-vital-state" + (token.dead ? ' dead' : token.stable ? ' stable' : ' dying')}>
            <span className="state-lbl">
              <window.MstIcon name={token.dead ? 'skull' : token.stable ? 'heart' : 'pen'} size={12}/>
              {token.dead
                ? (t.vitalDead || 'Muerto')
                : token.stable
                ? (t.vitalStable || 'Estabilizado')
                : (t.vitalDying || 'Muriendo')}
            </span>
            <div className="state-actions">
              {!token.dead && !token.stable && (
                <button type="button" className="hp-shortcut" onClick={() => onSetVitalState(token.id, 'stable')}>
                  {t.stabilize || 'Estabilizar'}
                </button>
              )}
              {(token.dead || token.stable) && (
                <button type="button" className="hp-shortcut" onClick={() => onSetVitalState(token.id, 'reset')}>
                  {t.vitalReset || 'Reset'}
                </button>
              )}
              {!token.dead && (
                <button type="button" className="hp-shortcut danger" onClick={() => {
                  if (window.confirm((t.confirmDead || '¿Confirmar muerte de {n}?').replace('{n}', token.name))) {
                    onSetVitalState(token.id, 'dead');
                  }
                }}>
                  {t.confirmKill || 'Muerto'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Full attack PF1e: tira el ataque principal (abre DamageModal) y luego
  // los iterativos a -5/-10/-15 sólo log (sin abrir modal por cada uno).
  // Para por debajo de +1 — regla simplificada: si el toHit con penalty cae
  // bajo 1, dejamos de iterar.
  const onFullAttack = (a) => {
    const baseToHit = parseInt(String(a.tohit).replace(/[^\d-]/g, ''), 10) || 0;
    onAttackRoll && onAttackRoll(token, a);
    const penalties = [-5, -10, -15];
    for (const pen of penalties) {
      const total = baseToHit + pen;
      if (total < 1) break;
      const virtualAtk = {
        ...a,
        name: `${a.name} (${pen})`,
        tohit: (total >= 0 ? '+' : '') + total,
      };
      onAttackLogOnly && onAttackLogOnly(token, virtualAtk);
    }
  };

  const SpellSlotsSection = () => {
    const slots = token.spellSlots;
    if (!slots || typeof slots !== 'object') return null;
    const levels = Object.keys(slots).map(Number).filter(n => Number.isFinite(n) && (slots[n].max > 0)).sort((a,b) => a-b);
    if (!levels.length) return null;
    return (
      <div className="mst-slots-grid">
        {levels.map(lvl => {
          const s = slots[lvl];
          const remaining = Math.max(0, s.max - s.used);
          return (
            <div key={lvl} className="mst-slot-row">
              <span className="lvl">{lvl === 0 ? '0' : lvl}</span>
              <div className="dots">
                {Array.from({ length: s.max }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={"slot-dot " + (i < remaining ? 'free' : 'used')}
                    onClick={() => onToggleSpellSlot && onToggleSpellSlot(token.id, lvl)}
                    title={`${remaining}/${s.max}`}
                  />
                ))}
              </div>
              <span className="count">{remaining}/{s.max}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const SkillsSection = () => {
    const list = Array.isArray(token.skills) ? token.skills : [];
    if (!list.length) return null;
    return (
      <div className="mst-skills-grid">
        {list.map((s, i) => (
          <button
            key={i}
            type="button"
            className="mst-skill-chip"
            onClick={() => onSkillRoll && onSkillRoll(token, s)}
            title={`${t.rollSkill || 'Tirar'}: ${s.name}${s.attr ? ' (' + s.attr + ')' : ''}`}
          >
            <span className="lbl">{s.name}</span>
            <span className="bonus">{(s.total >= 0 ? '+' : '') + s.total}</span>
          </button>
        ))}
      </div>
    );
  };

  const AttacksSection = () => (
    <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
      {attacks.map((a, i) => {
        const baseToHit = parseInt(String(a.tohit).replace(/[^\d-]/g, ''), 10) || 0;
        // Solo mostramos botón "Full attack" si el primer iterativo tiene
        // sentido (toHit base ≥ 6, regla PF1e: BAB +6 da iterativo a +1).
        const canIterate = baseToHit >= 6;
        return (
          <div key={i} className="mst-attack-row">
            <div style={{ flex: 1 }}>
              <div className="mst-attack-name">{a.name}</div>
              <div className="mst-attack-dmg">{a.dmg} · {
                a.type === 'ranged' ? t.ranged :
                a.type === 'trip' ? (t.atkTrip || 'Derribo') :
                a.type === 'disarm' ? (t.atkDisarm || 'Desarmar') :
                a.type === 'sunder' ? (t.atkSunder || 'Romper') :
                a.type === 'grapple' ? (t.atkGrapple || 'Presa') :
                a.type === 'bullrush' ? (t.atkBullrush || 'Embestida') :
                t.melee
              }</div>
            </div>
            <div className="mst-attack-tohit">{a.tohit}</div>
            <div className="mst-btn-stack">
              <button
                className="mst-btn-icon"
                style={{width:36, height:36}}
                aria-label={t.lblRoll}
                onClick={() => onAttackRoll && onAttackRoll(token, a)}
              >
                <window.MstIcon name="dice" size={16}/>
              </button>
              <span className="mst-btn-caption">{t.lblRoll}</span>
            </div>
            {canIterate && (
              <div className="mst-btn-stack">
                <button
                  className="mst-btn-icon"
                  style={{width:36, height:36, color:'var(--gold)'}}
                  aria-label={t.lblFullAttack || 'Ataque completo'}
                  title={t.lblFullAttack || 'Ataque completo (iterativos)'}
                  onClick={() => onFullAttack(a)}
                >
                  <window.MstIcon name="swords" size={16}/>
                </button>
                <span className="mst-btn-caption">{t.lblFullAttack || 'Full'}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  // ---------- LAYOUT VARIANTS ----------
  if (layout === 'tabs') {
    return (
      <div className={"mst-drawer h-" + drawerHeight}>
        <div className="mst-drawer-handle"
          onPointerDown={onHandlePointerDown} onPointerMove={onHandlePointerMove} onPointerUp={onHandlePointerUp} onPointerCancel={onHandlePointerCancel}>
          <div className="bar"/>
        </div>
        <div className="mst-drawer-content">
          <DrawerHeader token={token} t={t} onSetPhoto={onSetPhoto} onRemoveToken={onRemoveToken} onRenameToken={onRenameToken} onEditToken={onEditToken} onRefreshFromSheet={onRefreshFromSheet}/>
          <HpStepper />
          <ActionsSection />
          <div className="mst-drawer-tabs">
            <button className={"mst-drawer-tab " + (tab==='stats'?'active':'')} onClick={()=>setTab('stats')}>{t.abilities}</button>
            <button className={"mst-drawer-tab " + (tab==='att'?'active':'')} onClick={()=>setTab('att')}>{t.attacks}</button>
            <button className={"mst-drawer-tab " + (tab==='buf'?'active':'')} onClick={()=>setTab('buf')}>{t.debuffs}</button>
            {Array.isArray(token.skills) && token.skills.length > 0 && (
              <button className={"mst-drawer-tab " + (tab==='sk'?'active':'')} onClick={()=>setTab('sk')}>{t.skills || 'Habil.'}</button>
            )}
          </div>
          {tab === 'stats' && <StatsSection />}
          {tab === 'att' && <AttacksSection />}
          {tab === 'buf' && <BuffsSection />}
          {tab === 'sk' && <SkillsSection />}
        </div>
      </div>
    );
  }

  if (layout === 'compact-tabs') {
    return (
      <div className={"mst-drawer h-" + drawerHeight}>
        <div className="mst-drawer-handle"
          onPointerDown={onHandlePointerDown} onPointerMove={onHandlePointerMove} onPointerUp={onHandlePointerUp} onPointerCancel={onHandlePointerCancel}>
          <div className="bar"/>
        </div>
        <div className="mst-drawer-content">
          <DrawerHeader token={token} t={t} onSetPhoto={onSetPhoto} onRemoveToken={onRemoveToken} onRenameToken={onRenameToken} onEditToken={onEditToken} onRefreshFromSheet={onRefreshFromSheet}/>
          <HpStepper />
          <ActionsSection />
          <BuffsSection />
          {drawerHeight !== 'peek' && (
            <>
              <div className="mst-drawer-tabs" style={{marginTop: 10}}>
                <button className={"mst-drawer-tab " + (tab==='stats'?'active':'')} onClick={()=>setTab('stats')}>{t.abilities}</button>
                <button className={"mst-drawer-tab " + (tab==='att'?'active':'')} onClick={()=>setTab('att')}>{t.attacks}</button>
                <button className={"mst-drawer-tab " + (tab==='buf'?'active':'')} onClick={()=>setTab('buf')}>{t.debuffs}</button>
                {Array.isArray(token.skills) && token.skills.length > 0 && (
                  <button className={"mst-drawer-tab " + (tab==='sk'?'active':'')} onClick={()=>setTab('sk')}>{t.skills || 'Habil.'}</button>
                )}
              </div>
              {tab === 'stats' && <StatsSection />}
              {tab === 'att' && <AttacksSection />}
              {tab === 'buf' && (
                <div style={{padding:'4px 0'}}>
                  <div style={{font:'600 11px/1.4 system-ui', color:'var(--ink-muted)', marginBottom:6}}>
                    Toca un chip para quitarlo. ＋ añadir.
                  </div>
                  <BuffsSection />
                </div>
              )}
              {tab === 'sk' && <SkillsSection />}
            </>
          )}
        </div>
      </div>
    );
  }

  if (layout === 'compact') {
    return (
      <div className={"mst-drawer h-" + drawerHeight}>
        <div className="mst-drawer-handle"
          onPointerDown={onHandlePointerDown} onPointerMove={onHandlePointerMove} onPointerUp={onHandlePointerUp} onPointerCancel={onHandlePointerCancel}>
          <div className="bar"/>
        </div>
        <div className="mst-drawer-content">
          <DrawerHeader token={token} t={t} onSetPhoto={onSetPhoto} onRemoveToken={onRemoveToken} onRenameToken={onRenameToken} onEditToken={onEditToken} onRefreshFromSheet={onRefreshFromSheet}/>
          <HpStepper />
          <ActionsSection />
          {drawerHeight !== 'peek' && (
            <>
              <CardTitle>{t.debuffs}</CardTitle>
              <BuffsSection />
              {drawerHeight === 'full' && (<>
                <CardTitle>{t.abilities}</CardTitle>
                <StatsSection />
                <CardTitle>{t.attacks}</CardTitle>
                <AttacksSection />
                {Array.isArray(token.skills) && token.skills.length > 0 && (<>
                  <CardTitle>{t.skills || 'Habilidades'}</CardTitle>
                  <SkillsSection />
                </>)}
                {token.spellSlots && Object.keys(token.spellSlots).length > 0 && (<>
                  <CardTitle>{t.spellSlots || 'Espacios'}</CardTitle>
                  <SpellSlotsSection />
                </>)}
              </>)}
            </>
          )}
        </div>
      </div>
    );
  }

  // expanded (default)
  return (
    <div className={"mst-drawer h-" + drawerHeight}>
      <div className="mst-drawer-handle"
        onPointerDown={onHandlePointerDown} onPointerMove={onHandlePointerMove} onPointerUp={onHandlePointerUp} onPointerCancel={onHandlePointerCancel}>
        <div className="bar"/>
      </div>
      <div className="mst-drawer-content">
        <DrawerHeader token={token} t={t} onSetPhoto={onSetPhoto} onRemoveToken={onRemoveToken} onRenameToken={onRenameToken} onEditToken={onEditToken} onRefreshFromSheet={onRefreshFromSheet}/>
        <HpStepper />
        <ActionsSection />
        <BuffsSection />
        <CardTitle>{t.abilities}</CardTitle>
        <StatsSection />
        <CardTitle>{t.attacks}</CardTitle>
        <AttacksSection />
        {Array.isArray(token.skills) && token.skills.length > 0 && (<>
          <CardTitle>{t.skills || 'Habilidades'}</CardTitle>
          <SkillsSection />
        </>)}
        {token.spellSlots && Object.keys(token.spellSlots).length > 0 && (<>
          <CardTitle>{t.spellSlots || 'Espacios de conjuro'}</CardTitle>
          <SpellSlotsSection />
        </>)}
      </div>
    </div>
  );
}

// Reescala una imagen a max 256px (lado mayor) y la devuelve como JPEG
// dataURL al ~85%. Evita saturar localStorage (límite ~5MB) con fotos grandes.
function downscaleImage(file, maxDim = 256, quality = 0.85) {
  return new Promise((resolve, reject) => {
    if (!file || !/^image\//.test(file.type)) {
      reject(new Error('not an image'));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error || new Error('read failed'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('decode failed'));
      img.onload = () => {
        let { width, height } = img;
        const ratio = Math.min(1, maxDim / Math.max(width, height));
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        try {
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (e) { reject(e); }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function DrawerHeader({ token, t, onSetPhoto, onRemoveToken, onRenameToken, onEditToken, onRefreshFromSheet }) {
  const fileRef = React.useRef(null);
  const onPick = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      const dataUrl = await downscaleImage(f, 256, 0.85);
      onSetPhoto && onSetPhoto(token.id, dataUrl);
    } catch (err) {
      console.warn('photo upload failed', err);
    }
  };
  const onNameClick = () => {
    const next = window.prompt(t.editName || 'Nombre', token.name);
    if (next != null && next.trim() && next !== token.name) {
      onRenameToken && onRenameToken(token.id, next.trim());
    }
  };
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 10, paddingTop: 4 }}>
      <button
        type="button"
        className="mst-portrait-btn"
        onClick={() => fileRef.current && fileRef.current.click()}
        title={t.changePhoto || 'Cambiar foto'}
        aria-label={t.changePhoto || 'Cambiar foto'}
        style={{ padding: 0, border: '2px solid var(--gold)', borderRadius: '50%', background: 'transparent', cursor: 'pointer', flexShrink: 0 }}
      >
        <window.TokenPortrait token={token} size={40} />
      </button>
      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={onPick} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          onClick={onNameClick}
          style={{ fontFamily:'Cinzel, Georgia, serif', fontWeight:700, fontSize: 18, lineHeight: 1.1, color:'var(--ink)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', cursor:'pointer' }}
          title={t.editName || 'Editar nombre'}
        >
          {token.name}
        </div>
        <div style={{ font:'600 10.5px/1 system-ui', letterSpacing:'.1em', textTransform:'uppercase', color:'var(--ink-muted)', marginTop:3 }}>
          {t.initiative} {token.ini}  ·  {t.speed} {token.spd}ft  ·  {t.perception} +{token.per}
        </div>
      </div>
      {onRefreshFromSheet && token && token.fromSheet && (
        <button
          className="mst-btn-icon"
          style={{ width: 32, height: 32, padding: 0, color: 'var(--gold)' }}
          aria-label={t.refreshFromSheet || 'Refrescar desde la ficha'}
          title={t.refreshFromSheet || 'Refrescar desde la ficha'}
          onClick={() => onRefreshFromSheet(token.id)}
        >
          <window.MstIcon name="rewind" size={16}/>
        </button>
      )}
      {onEditToken && (
        <button
          className="mst-btn-icon"
          style={{ width: 32, height: 32, padding: 0, color: 'var(--ink)' }}
          aria-label={t.editStats || 'Editar'}
          title={t.editStats || 'Editar estadísticas'}
          onClick={() => onEditToken()}
        >
          <window.MstIcon name="edit" size={16}/>
        </button>
      )}
      {onRemoveToken && (
        <button
          className="mst-btn-icon"
          style={{ width: 32, height: 32, padding: 0, color: 'var(--negative)' }}
          aria-label={t.removeToken || 'Quitar combatiente'}
          title={t.removeToken || 'Quitar combatiente'}
          onClick={() => {
            if (window.confirm((t.confirmRemove || '¿Quitar a {n} del encuentro?').replace('{n}', token.name))) {
              onRemoveToken(token.id);
            }
          }}
        >
          <window.MstIcon name="x" size={16}/>
        </button>
      )}
    </div>
  );
}

window.MstDrawer = MstDrawer;
