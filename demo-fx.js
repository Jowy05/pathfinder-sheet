// =================================================================
// FX ENGINE — magnetic buttons, ripples, cursor trail, screen shake,
// confetti, sound, and dice roll logic
// =================================================================

(function () {
  'use strict';

  const FX = {
    soundEnabled: false,
    audioCtx: null,
    cyberOn: false,
  };

  // ---------- AUDIO (subtle synth blips, no assets) ----------
  function ensureAudio() {
    if (!FX.audioCtx) {
      try { FX.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
    }
    return FX.audioCtx;
  }
  function blip(freq = 880, dur = 0.08, type = 'square', vol = 0.05) {
    if (!FX.soundEnabled) return;
    const ctx = ensureAudio(); if (!ctx) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.value = vol;
    o.connect(g); g.connect(ctx.destination);
    o.start();
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    o.stop(ctx.currentTime + dur);
  }
  function diceRollSound() {
    if (!FX.soundEnabled) return;
    for (let i = 0; i < 8; i++) {
      setTimeout(() => blip(400 + Math.random() * 800, 0.04, 'triangle', 0.04), i * 80);
    }
  }
  function critSound() {
    if (!FX.soundEnabled) return;
    blip(1200, 0.12, 'sawtooth', 0.08);
    setTimeout(() => blip(1800, 0.18, 'sine', 0.07), 100);
    setTimeout(() => blip(2400, 0.25, 'sine', 0.06), 220);
  }
  function fumbleSound() {
    if (!FX.soundEnabled) return;
    blip(180, 0.18, 'sawtooth', 0.09);
    setTimeout(() => blip(110, 0.25, 'square', 0.08), 120);
  }
  FX.blip = blip;
  FX.diceRollSound = diceRollSound;
  FX.critSound = critSound;
  FX.fumbleSound = fumbleSound;

  // ---------- MAGNETIC BUTTONS ----------
  function attachMagnetic(el) {
    let raf = null;
    el.addEventListener('mousemove', (e) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = FX.cyberOn ? 0.3 : 0.15;
        el.style.setProperty('--mx', (x * strength).toFixed(1) + 'px');
        el.style.setProperty('--my', (y * strength).toFixed(1) + 'px');
        if (!FX.cyberOn) {
          el.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`;
        }
      });
    });
    el.addEventListener('mouseleave', () => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
      if (!FX.cyberOn) el.style.transform = '';
    });
  }

  // ---------- RIPPLE ----------
  function attachRipple(el) {
    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect();
      const r = document.createElement('span');
      r.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      r.style.width = r.style.height = size + 'px';
      r.style.left = (e.clientX - rect.left) + 'px';
      r.style.top = (e.clientY - rect.top) + 'px';
      el.appendChild(r);
      blip(720 + Math.random() * 200, 0.04, 'square', 0.04);
      setTimeout(() => r.remove(), 700);
    });
    el.addEventListener('mouseenter', () => blip(1100, 0.03, 'sine', 0.025));
  }

  // ---------- CURSOR TRAIL ----------
  let lastTrailTs = 0;
  document.addEventListener('mousemove', (e) => {
    if (!FX.cyberOn) return;
    const now = performance.now();
    if (now - lastTrailTs < 25) return;
    lastTrailTs = now;
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    const overlay = document.getElementById('fx-overlay');
    if (overlay) overlay.appendChild(dot);
    setTimeout(() => dot.remove(), 700);
  });

  // ---------- SCREEN SHAKE ----------
  function shakeScreen() {
    const shell = document.querySelector('.demo-shell');
    if (!shell) return;
    shell.classList.remove('shake-screen');
    void shell.offsetWidth;
    shell.classList.add('shake-screen');
    setTimeout(() => shell.classList.remove('shake-screen'), 400);
  }
  FX.shakeScreen = shakeScreen;

  // ---------- CONFETTI ----------
  function burstConfetti(opts = {}) {
    const overlay = document.getElementById('fx-overlay');
    if (!overlay) return;
    const colors = opts.colors || ['#00f0ff', '#ff2a93', '#f8ef02', '#4be3ff', '#ff5edc'];
    const count = opts.count || 80;
    const cx = opts.x ?? window.innerWidth / 2;
    const cy = opts.y ?? window.innerHeight / 2;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      const angle = Math.random() * Math.PI * 2;
      const dist  = 200 + Math.random() * 320;
      p.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
      p.style.setProperty('--rot', (Math.random() * 360) + 'deg');
      p.style.left = cx + 'px';
      p.style.top = cy + 'px';
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.boxShadow = `0 0 8px ${p.style.background}`;
      p.style.animationDelay = (Math.random() * 100) + 'ms';
      overlay.appendChild(p);
      setTimeout(() => p.remove(), 1800);
    }
  }
  FX.burstConfetti = burstConfetti;

  // ---------- CRIT BANNER ----------
  function showCritBanner(type, label) {
    const old = document.querySelector('.crit-banner');
    if (old) old.remove();
    const b = document.createElement('div');
    b.className = 'crit-banner ' + (type === 'crit' ? 'crit-nat20' : 'crit-fumble');
    b.textContent = label || (type === 'crit' ? 'NAT 20' : 'FUMBLE');
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 1500);
  }
  FX.showCritBanner = showCritBanner;

  // ---------- D20 ROLL ----------
  function rollD20(stageEl, opts = {}) {
    const die = stageEl.querySelector('.d20');
    const result = stageEl.querySelector('.d20-result');
    if (!die) return;
    const roll = opts.forced ?? (1 + Math.floor(Math.random() * 20));

    // Cube end orientation: end at (0,0,0) so FRONT face is toward camera.
    const rx = 720 + Math.floor(Math.random() * 4) * 360;
    const ry = 1080 + Math.floor(Math.random() * 4) * 360;
    const rz = 360 + Math.floor(Math.random() * 2) * 360;
    die.style.setProperty('--rest-x', rx + 'deg');
    die.style.setProperty('--rest-y', ry + 'deg');
    die.style.setProperty('--rest-z', rz + 'deg');

    // Pre-fill the 6 cube faces with random unique numbers, ensuring FRONT shows the result
    const faces = die.querySelectorAll('.face');
    if (faces.length) {
      const pool = new Set([roll]);
      while (pool.size < faces.length) pool.add(1 + Math.floor(Math.random() * 20));
      const arr = Array.from(pool);
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      faces.forEach((f, i) => { f.textContent = arr[i]; });
      const front = die.querySelector('.f-front');
      if (front) front.textContent = roll;
    }

    die.classList.remove('settled', 'crit', 'fumble');
    die.classList.remove('rolling');
    void die.offsetWidth;
    die.classList.add('rolling');
    stageEl.classList.add('rolling');
    diceRollSound();

    if (result) {
      result.classList.remove('show', 'crit', 'fumble');
      result.textContent = '';
    }

    setTimeout(() => {
      die.classList.remove('rolling');
      die.classList.add('settled');
      stageEl.classList.remove('rolling');
      if (roll === 20) die.classList.add('crit');
      else if (roll === 1) die.classList.add('fumble');
      if (result) {
        result.textContent = roll;
        result.classList.add('show');
        if (roll === 20) result.classList.add('crit');
        else if (roll === 1) result.classList.add('fumble');
      }
      if (roll === 20) {
        critSound();
        shakeScreen();
        const rect = stageEl.getBoundingClientRect();
        burstConfetti({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2, count: 110 });
        showCritBanner('crit', 'NAT 20');
      } else if (roll === 1) {
        fumbleSound();
        shakeScreen();
        showCritBanner('fumble', 'PIFIA');
      } else {
        blip(900, 0.06, 'sine', 0.04);
      }
    }, 1500);

    return roll;
  }
  FX.rollD20 = rollD20;

  // ---------- CYBER TOGGLE ----------
  function setCyber(on) {
    FX.cyberOn = !!on;
    document.body.dataset.cyber = on ? 'on' : 'off';
    try { localStorage.setItem('pf1e-cyber', on ? '1' : '0'); } catch (e) {}
    if (on) {
      // holographic intro
      document.querySelectorAll('.panel').forEach((p, i) => {
        p.classList.remove('holo-in');
        void p.offsetWidth;
        p.style.animationDelay = (i * 60) + 'ms';
        p.classList.add('holo-in');
      });
      blip(1600, 0.08, 'sine', 0.05);
      setTimeout(() => blip(2200, 0.06, 'sine', 0.04), 90);
    } else {
      blip(900, 0.06, 'sine', 0.04);
      setTimeout(() => blip(500, 0.08, 'sine', 0.04), 80);
    }
  }
  FX.setCyber = setCyber;

  // ---------- SOUND TOGGLE ----------
  function setSound(on) {
    FX.soundEnabled = !!on;
    try { localStorage.setItem('pf1e-fx-sound', on ? '1' : '0'); } catch (e) {}
    const btn = document.getElementById('sound-toggle');
    if (btn) btn.textContent = on ? '🔊' : '🔇';
    if (on) ensureAudio();
  }
  FX.setSound = setSound;

  // ---------- BOOT ----------
  document.addEventListener('DOMContentLoaded', () => {
    // fx overlay
    if (!document.getElementById('fx-overlay')) {
      const o = document.createElement('div');
      o.id = 'fx-overlay';
      document.body.appendChild(o);
    }

    // attach to all .btn
    document.querySelectorAll('.btn').forEach((b) => {
      attachMagnetic(b);
      attachRipple(b);
    });

    // restore prefs
    let cyberPref = '0';
    let soundPref = '0';
    try {
      cyberPref = localStorage.getItem('pf1e-cyber') || '0';
      soundPref = localStorage.getItem('pf1e-fx-sound') || '0';
    } catch (e) {}
    setSound(soundPref === '1');
    setCyber(cyberPref === '1');

    // master toggle
    const tog = document.getElementById('cyber-master-toggle');
    if (tog) tog.addEventListener('click', () => setCyber(!FX.cyberOn));
    const sb = document.getElementById('sound-toggle');
    if (sb) sb.addEventListener('click', () => setSound(!FX.soundEnabled));

    // dice stages
    document.querySelectorAll('.d20-stage').forEach((stage) => {
      const trigger = stage.querySelector('.d20');
      if (trigger) trigger.addEventListener('click', () => rollD20(stage));
    });
    document.querySelectorAll('[data-roll]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.roll);
        if (target) rollD20(target, { forced: btn.dataset.force ? +btn.dataset.force : undefined });
      });
    });

    // HP demo
    const hpInput = document.getElementById('hp-current-demo');
    const hpMax   = document.getElementById('hp-max-demo');
    const hpFill  = document.getElementById('hp-fill-demo');
    const hpCon   = document.getElementById('hp-con-demo');
    const hpStatus = document.getElementById('hp-status-demo');
    function updateHp() {
      if (!hpInput || !hpMax || !hpFill) return;
      const cur = parseInt(hpInput.value, 10) || 0;
      const max = parseInt(hpMax.value, 10) || 1;
      const con = hpCon ? (parseInt(hpCon.value, 10) || 0) : 0;
      const pct = Math.max(0, Math.min(100, (cur / max) * 100));
      hpFill.style.width = pct + '%';

      // Death threshold (Pathfinder): HP <= -CON => dead
      const dead   = cur <= -con && con > 0;
      const dying  = cur <= 0 && !dead;

      const bar = hpFill.parentElement;

      if (dead) {
        // Heart stopped — flatline
        hpFill.style.background = FX.cyberOn ? 'linear-gradient(90deg,#3a0008,#7a0010)' : 'linear-gradient(90deg,#3a0008,#7a0010)';
        if (bar) {
          bar.style.setProperty('--hp-rate', '99s');     // virtually no animation
          bar.classList.add('flatline');
          bar.classList.remove('dying');
        }
        if (hpStatus) { hpStatus.textContent = '☠ Muerto · Línea plana'; hpStatus.style.color = FX.cyberOn ? '#ff2a93' : '#7a0010'; }
      } else if (dying) {
        // 0 or negative HP but not dead yet: heart rate collapses and decays toward 0
        // At 0 HP: 4s/cycle (slow, faint). As HP -> -CON: rate -> very slow (~12s)
        const negDepth = con > 0 ? Math.min(1, Math.abs(cur) / con) : 0;  // 0..1
        const rate = 4 + negDepth * 8;  // 4s -> 12s
        hpFill.style.width = '0%';
        hpFill.style.background = FX.cyberOn ? 'linear-gradient(90deg,#7a0010,#3a0008)' : 'linear-gradient(90deg,#7a0010,#3a0008)';
        if (bar) {
          bar.style.setProperty('--hp-rate', rate.toFixed(2) + 's');
          bar.classList.add('dying');
          bar.classList.remove('flatline');
        }
        if (hpStatus) { hpStatus.textContent = `☉ Inconsciente (${cur} HP / muere a ${-con})`; hpStatus.style.color = FX.cyberOn ? '#ff2a93' : '#7a0010'; }
      } else {
        // Alive — rate scales with HP %
        if (pct > 60) hpFill.style.background = FX.cyberOn ? '' : 'linear-gradient(90deg,#2d8a2d,#6bbf3e)';
        else if (pct > 30) hpFill.style.background = FX.cyberOn ? '' : 'linear-gradient(90deg,#c8a060,#e6c880)';
        else hpFill.style.background = FX.cyberOn ? '' : 'linear-gradient(90deg,#7a0010,#a00018)';
        const t = pct / 100;
        const rate = 0.4 + Math.pow(t, 1.6) * 1.6;
        if (bar) {
          bar.style.setProperty('--hp-rate', rate.toFixed(2) + 's');
          bar.classList.remove('dying', 'flatline');
        }
        if (hpStatus) {
          let label = 'Consciente';
          if (pct < 25) label = '✦ Malherido';
          else if (pct < 50) label = '✦ Herido';
          hpStatus.textContent = label;
          hpStatus.style.color = '';
        }
      }
    }
    if (hpInput) hpInput.addEventListener('input', updateHp);
    if (hpMax)   hpMax.addEventListener('input', updateHp);
    if (hpCon)   hpCon.addEventListener('input', updateHp);
    updateHp();
  });

  window.FX = FX;
})();
