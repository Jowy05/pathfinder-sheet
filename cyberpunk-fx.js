/* ============================================================
   FICHA PATHFINDER · CYBERPUNK FX
   Toggle + ECG dinámico + screen shake + confetti + cursor trail.
   Activado vía html[data-cyber="on"].
   ============================================================ */
(function () {
  'use strict';

  const STORAGE_KEY = 'pf1e-cyber-mode';
  const root = document.documentElement;

  // ── State ────────────────────────────────────────────────
  const CY = window.CY = {
    on: false,
    sound: false,
    audioCtx: null,
    cursorTrailEnabled: false,
  };

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY) === 'on'; } catch (_) { return false; }
  }
  function setStored(on) {
    try { localStorage.setItem(STORAGE_KEY, on ? 'on' : 'off'); } catch (_) {}
  }

  // ── Apply / unapply mode ─────────────────────────────────
  function applyMode(on, opts = {}) {
    CY.on = !!on;
    if (on) {
      // Lazy-load del overlay CSS la primera vez que se activa
      if (typeof window.__loadCyberOverlay === 'function') window.__loadCyberOverlay();
      root.setAttribute('data-cyber', 'on');
    } else {
      root.removeAttribute('data-cyber');
    }
    setStored(on);

    // Holo-in animation on panels when toggling ON
    if (on && !opts.silent) {
      document.querySelectorAll('.panel').forEach((p, i) => {
        p.classList.remove('holo-in');
        // Force reflow
        void p.offsetWidth;
        p.style.animationDelay = (i * 40) + 'ms';
        p.classList.add('holo-in');
        setTimeout(() => { p.classList.remove('holo-in'); p.style.animationDelay = ''; }, 1200);
      });
    }

    // Update toggle UI
    document.querySelectorAll('.theme-menu-cyber-row').forEach(row => {
      row.setAttribute('data-cyber-active', on ? 'true' : 'false');
    });

    // Refresh HP visualisation immediately
    updateHpEcg();
  }

  // Boot — set early to avoid flash
  if (getStored()) root.setAttribute('data-cyber', 'on');

  // ── FX overlay layer ─────────────────────────────────────
  function ensureOverlay() {
    let o = document.getElementById('cy-fx-overlay');
    if (!o) {
      o = document.createElement('div');
      o.id = 'cy-fx-overlay';
      document.body.appendChild(o);
    }
    return o;
  }

  // ── Sound (subtle) ───────────────────────────────────────
  function getSoundStored() {
    try { return localStorage.getItem('pf1e-cyber-sound') !== 'off'; } catch (_) { return true; }
  }
  function setSoundStored(on) {
    try { localStorage.setItem('pf1e-cyber-sound', on ? 'on' : 'off'); } catch (_) {}
  }
  // Initial sound state from storage (default ON)
  CY.sound = getSoundStored();

  function applySound(on) {
    CY.sound = !!on;
    setSoundStored(CY.sound);
    const btn = document.getElementById('cy-sound-fab');
    if (btn) {
      btn.setAttribute('aria-pressed', CY.sound ? 'true' : 'false');
      btn.title = CY.sound
        ? (((typeof LANG !== 'undefined' ? LANG : 'es') === 'en') ? 'Mute sounds' : 'Silenciar sonidos')
        : (((typeof LANG !== 'undefined' ? LANG : 'es') === 'en') ? 'Enable sounds' : 'Activar sonidos');
      const icon = btn.querySelector('.cy-sound-fab-icon');
      if (icon) icon.textContent = CY.sound ? '🔊' : '🔇';
    }
    if (CY.sound) ctx();  // resume audio if needed
  }

  function ensureSoundFab() {
    if (document.getElementById('cy-sound-fab')) return;
    const btn = document.createElement('button');
    btn.id = 'cy-sound-fab';
    btn.type = 'button';
    btn.className = 'cy-sound-fab';
    btn.setAttribute('aria-label', 'Sound toggle');
    btn.innerHTML = `<span class="cy-sound-fab-icon">🔊</span>`;
    btn.addEventListener('click', () => applySound(!CY.sound));
    document.body.appendChild(btn);
    applySound(CY.sound);
  }

  function ctx() {
    if (!CY.audioCtx) {
      try { CY.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
      catch (_) { return null; }
    }
    if (CY.audioCtx.state === 'suspended') CY.audioCtx.resume();
    return CY.audioCtx;
  }
  function blip(freq = 880, dur = 0.08, type = 'sine', vol = 0.06) {
    if (!CY.sound) return;
    const c = ctx(); if (!c) return;
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.value = 0;
    o.connect(g); g.connect(c.destination);
    const t0 = c.currentTime;
    g.gain.linearRampToValueAtTime(vol, t0 + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.start(t0);
    o.stop(t0 + dur);
  }
  function chord(freqs, dur = 0.5, type = 'sawtooth', vol = 0.05) {
    freqs.forEach(f => blip(f, dur, type, vol));
  }

  // ── Magnetic buttons + ripple ────────────────────────────
  function attachButtonFX(btn) {
    if (btn.__cyAttached) return;
    btn.__cyAttached = true;
    btn.addEventListener('mousemove', e => {
      if (!CY.on) { btn.style.removeProperty('--mx'); btn.style.removeProperty('--my'); return; }
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.18;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.18;
      btn.style.setProperty('--mx', dx.toFixed(1) + 'px');
      btn.style.setProperty('--my', dy.toFixed(1) + 'px');
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.setProperty('--mx', '0px');
      btn.style.setProperty('--my', '0px');
    });
    btn.addEventListener('click', e => {
      if (!CY.on) return;
      const r = btn.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = (e.clientX - r.left) + 'px';
      ripple.style.top  = (e.clientY - r.top)  + 'px';
      ripple.style.width = ripple.style.height = '8px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
      blip(660 + Math.random() * 120, 0.05, 'square', 0.04);
    });
  }
  function attachAllButtons() {
    document.querySelectorAll('button').forEach(btn => {
      // Skip the lang button and floating action buttons — they are absolute-positioned and shouldn't drift.
      if (btn.classList.contains('btn-lang')) return;
      if (btn.id && /-fab$/.test(btn.id)) return;
      if (btn.closest && btn.closest('.theme-menu, #feedback-dropdown')) return;
      attachButtonFX(btn);
    });
  }

  // ── Cursor trail ─────────────────────────────────────────
  let lastTrailTs = 0;
  function onMouseMoveTrail(e) {
    if (!CY.on) return;
    const now = performance.now();
    if (now - lastTrailTs < 30) return;
    lastTrailTs = now;
    const o = ensureOverlay();
    const dot = document.createElement('div');
    dot.className = 'cy-cursor-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    o.appendChild(dot);
    setTimeout(() => dot.remove(), 750);
  }

  // ── Screen shake ─────────────────────────────────────────
  function shakeScreen() {
    const t = document.body;
    t.classList.remove('cy-shake-screen');
    void t.offsetWidth;
    t.classList.add('cy-shake-screen');
    setTimeout(() => t.classList.remove('cy-shake-screen'), 400);
  }

  // ── Confetti burst (crit nat 20) ─────────────────────────
  const CONFETTI_COLORS_CY = ['#00f0ff', '#ff2a93', '#f8ef02', '#4be3ff'];
  const CONFETTI_COLORS_PARCH = ['#c8a060', '#e6c880', '#7a0010', '#5a3a22'];
  function confettiBurst(x, y, count = 50) {
    const o = ensureOverlay();
    const colors = CY.on ? CONFETTI_COLORS_CY : CONFETTI_COLORS_PARCH;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'cy-confetti-piece';
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3;
      const dist  = 200 + Math.random() * 300;
      p.style.setProperty('--dx', (Math.cos(angle) * dist).toFixed(0) + 'px');
      p.style.setProperty('--dy', (Math.sin(angle) * dist).toFixed(0) + 'px');
      p.style.setProperty('--rot', (Math.random() * 360).toFixed(0) + 'deg');
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = (x ?? window.innerWidth / 2) + 'px';
      p.style.top  = (y ?? window.innerHeight / 2) + 'px';
      o.appendChild(p);
      setTimeout(() => p.remove(), 1700);
    }
  }

  // ── Crit / fumble banner ─────────────────────────────────
  function critBanner(text, type = 'nat20') {
    const o = ensureOverlay();
    const b = document.createElement('div');
    b.className = 'cy-crit-banner ' + (type === 'nat20' ? 'crit-nat20' : 'crit-fumble');
    b.textContent = text;
    o.appendChild(b);
    setTimeout(() => b.remove(), 1500);
  }

  // ── HP / ECG dynamic heartbeat ───────────────────────────
  // Hooks into existing fields: #hp-current, #hp-max, #con-mod, #hp-fill
  function updateHpEcg() {
    const hpCur  = document.getElementById('hp-current');
    const hpMax  = document.getElementById('hp-max');
    const conMod = document.getElementById('con-mod');
    const fill   = document.getElementById('hp-fill');
    if (!hpCur || !hpMax || !fill) return;

    const cur = parseInt(hpCur.value, 10) || 0;
    const max = parseInt(hpMax.value, 10) || 1;
    const con = conMod ? Math.max(0, parseInt(conMod.value, 10) || 0) : 0;
    const pct = Math.max(0, Math.min(100, (cur / max) * 100));

    const bar = fill.parentElement;
    if (!bar) return;
    bar.classList.remove('cy-dying', 'cy-flatline');

    // Death threshold (Pathfinder): negative HP >= CON => dead
    const dead  = con > 0 && cur <= -con;
    const dying = !dead && cur <= 0;

    if (dead) {
      bar.classList.add('cy-flatline');
      bar.style.setProperty('--hp-rate', '99s');
      // Don't override width — let the recalc-driven --hp-fill (which is 0 when cur≤-con) handle it
      if (fill.style.width) fill.style.width = '';
    } else if (dying) {
      bar.classList.add('cy-dying');
      const negDepth = con > 0 ? Math.min(1, Math.abs(cur) / con) : 0;
      const rate = 4 + negDepth * 8;  // 4s -> 12s
      bar.style.setProperty('--hp-rate', rate.toFixed(2) + 's');
      // Don't override width — let the recalc-driven --hp-fill handle it
      if (fill.style.width) fill.style.width = '';
    } else {
      // Alive — heart rate scales with HP %
      const t = pct / 100;
      const rate = 0.4 + Math.pow(t, 1.6) * 1.6;
      bar.style.setProperty('--hp-rate', rate.toFixed(2) + 's');
      // Clear any leftover inline width from previous dying/dead state
      // so the CSS-driven --hp-fill scaleX is what we see
      if (fill.style.width) fill.style.width = '';
    }
  }

  function attachHpListeners() {
    ['hp-current', 'hp-max', 'con-mod'].forEach(id => {
      const el = document.getElementById(id);
      if (!el || el.__cyHpAttached) return;
      el.__cyHpAttached = true;
      el.addEventListener('input', updateHpEcg);
      el.addEventListener('change', updateHpEcg);
    });
    // Also observe the fill width (recalc may rewrite it) — we just re-evaluate periodically as fallback
    if (!CY.__hpInterval) CY.__hpInterval = setInterval(updateHpEcg, 2500);
  }

  // ── Single-die crit/pifia hook ───────────────────────────
  // The web has a free roll d20 (#single-die / #single-die-number).
  // We watch its number for nat 20 / nat 1 and trigger effects.
  function attachDieObserver() {
    const numEl = document.getElementById('single-die-number');
    const dieEl = document.getElementById('single-die');
    if (!numEl || !dieEl) return;
    if (numEl.__cyObserved) return;
    numEl.__cyObserved = true;

    const lang = (typeof LANG !== 'undefined' ? LANG : 'es');

    // Watch the single die for crit/fumble — ONLY when the spin has
    // finished (i.e. .rolling has been removed and .die-result-flash added).
    // Skip the FIRST roll ever to avoid triggering on page load or first click
    let firstRollDone = false;
    let lastFinalVal = null;
    const obs = new MutationObserver(() => {
      // Ignorar si estamos en setDieType (suppressor flag)
      if (typeof suppressDieObserver !== 'undefined' && suppressDieObserver) return;
      
      const isRolling = dieEl.classList.contains('rolling');
      const isFinal   = dieEl.classList.contains('die-result-flash');
      // Only react on the FINAL value; ignore the random ticks while rolling.
      if (isRolling || !isFinal) return;

      const cur = numEl.textContent.trim();
      
      // Skip the very first roll — just mark it and return
      if (!firstRollDone) {
        firstRollDone = true;
        lastFinalVal = cur;
        return;
      }
      
      // On subsequent rolls, check if the value actually changed
      if (cur === lastFinalVal) return;
      lastFinalVal = cur;

      // Only trigger if we're rolling a d20
      const faces = parseInt(dieEl.dataset.faces, 10) || 20;
      if (faces !== 20) {
        dieEl.classList.remove('cy-crit', 'cy-fumble');
        return;
      }

      const n = parseInt(cur, 10);
      dieEl.classList.remove('cy-crit', 'cy-fumble');
      if (n === 20) {
        dieEl.classList.add('cy-crit');
        const r = dieEl.getBoundingClientRect();
        confettiBurst(r.left + r.width / 2, r.top + r.height / 2, 70);
        critBanner(lang === 'en' ? 'NAT 20' : 'NAT 20', 'nat20');
        shakeScreen();
        if (CY.on) chord([523, 659, 784, 1046], 0.5, 'sawtooth', 0.04);
        else       chord([523, 659, 784], 0.4, 'sine', 0.05);
      } else if (n === 1) {
        dieEl.classList.add('cy-fumble');
        critBanner(lang === 'en' ? 'PIFIA' : 'PIFIA', 'fumble');
        shakeScreen();
        blip(120, 0.5, 'sawtooth', 0.07);
      }
    });
    // Observe both the number text AND the die's class attribute changes,
    // so we react when .die-result-flash gets added.
    obs.observe(numEl, { childList: true, characterData: true, subtree: true });
    obs.observe(dieEl, { attributes: true, attributeFilter: ['class'] });
  }

  // ── Theme-menu integration: add toggle row ───────────────
  function injectThemeMenuToggle() {
    const menu = document.getElementById('theme-menu');
    if (!menu || menu.__cyInjected) return;
    if (menu.children.length === 0) return;  // wait until buildThemeMenu runs
    menu.__cyInjected = true;

    const lang = (typeof LANG !== 'undefined' ? LANG : 'es');
    const labelText = (lang === 'en' ? 'Hologram Mode' : 'Modo Holograma');
    const subText   = (lang === 'en' ? '(requires good hardware)' : '(requiere buen equipo)');

    const row = document.createElement('div');
    row.className = 'theme-menu-cyber-row';
    row.setAttribute('role', 'menuitemcheckbox');
    row.setAttribute('aria-checked', CY.on ? 'true' : 'false');
    row.setAttribute('data-cyber-active', CY.on ? 'true' : 'false');
    row.tabIndex = 0;
    row.innerHTML = `
      <span class="label"><span aria-hidden="true">⚡</span><span class="cyber-label-text"><span class="cyber-label-main">${labelText}</span><span class="cyber-label-sub">${subText}</span></span></span>
      <span class="switch" aria-hidden="true"></span>
    `;
    const toggle = () => {
      const next = !CY.on;
      applyMode(next);
      row.setAttribute('aria-checked', next ? 'true' : 'false');
    };
    row.addEventListener('click', toggle);
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    menu.appendChild(row);
  }

  // The original buildThemeMenu wipes innerHTML, so re-inject after each rebuild.
  function patchBuildThemeMenu() {
    if (typeof window.buildThemeMenu !== 'function' || window.buildThemeMenu.__cyPatched) return;
    const orig = window.buildThemeMenu;
    window.buildThemeMenu = function () {
      const result = orig.apply(this, arguments);
      const menu = document.getElementById('theme-menu');
      if (menu) menu.__cyInjected = false;
      injectThemeMenuToggle();
      return result;
    };
    window.buildThemeMenu.__cyPatched = true;
  }

  // ── Init ─────────────────────────────────────────────────
  function init() {
    ensureOverlay();
    ensureSoundFab();
    attachAllButtons();
    document.addEventListener('mousemove', onMouseMoveTrail, { passive: true });

    // Hook HP fields
    attachHpListeners();
    updateHpEcg();

    // Watch the single die for crit/fumble
    attachDieObserver();

    // Theme menu integration
    patchBuildThemeMenu();
    injectThemeMenuToggle();

    // Apply persisted state with full visuals
    if (getStored()) applyMode(true, { silent: true });

    // Listen for theme menu reopens to re-attach
    const themeFab = document.getElementById('theme-fab');
    if (themeFab) {
      themeFab.addEventListener('click', () => {
        setTimeout(injectThemeMenuToggle, 50);
      });
    }

    // Re-scan dynamically added buttons
    const mo = new MutationObserver(muts => {
      muts.forEach(m => {
        m.addedNodes.forEach(n => {
          if (n.nodeType !== 1) return;
          if (n.matches && n.matches('button')) attachButtonFX(n);
          if (n.querySelectorAll) n.querySelectorAll('button').forEach(attachButtonFX);
          // Re-attach HP listeners if hp inputs were re-rendered
          attachHpListeners();
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ── Expose API ───────────────────────────────────────────
  window.CY.toggle    = () => applyMode(!CY.on);
  window.CY.set       = (on) => applyMode(!!on);
  window.CY.update    = updateHpEcg;
  window.CY.confetti  = confettiBurst;
  window.CY.shake     = shakeScreen;
  window.CY.banner    = critBanner;
})();
