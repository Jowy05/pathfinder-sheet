// =================================================================
// LOADER — D20 con dos alas, simple y elegante
// =================================================================

(function () {
  'use strict';

  const TARGET_DURATION = 3000;

  function getActiveTheme() {
    const t = document.documentElement.getAttribute('data-theme');
    return t || 'default';
  }

  function wingsSvg() {
    // Par de alas elegantes que enmarcan el d20
    return `<svg class="loader-wings" viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wingFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="var(--loader-accent)"   stop-opacity="0.45"/>
          <stop offset="100%" stop-color="var(--loader-accent-2)" stop-opacity="0.05"/>
        </linearGradient>
        <filter id="wingsGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <g filter="url(#wingsGlow)" stroke-linejoin="round" stroke-linecap="round" fill="url(#wingFill)" stroke="var(--loader-accent)" stroke-width="2.5">

        <!-- ALA IZQUIERDA -->
        <g class="wing-l">
          <!-- contorno principal con plumas -->
          <path d="M350,180
                   C300,160 240,140 180,130
                   C120,120 70,115 30,140
                   C70,150 100,165 110,185
                   C70,180 50,190 30,210
                   C80,220 110,230 130,250
                   C90,250 70,260 60,280
                   C120,275 170,260 210,235
                   C260,210 310,195 350,190 Z"/>
          <!-- separación de plumas -->
          <path d="M350,180 L180,130 M350,185 L110,185 M350,190 L130,250 M350,192 L210,235"
                stroke="var(--loader-accent)" stroke-width="1.5" opacity="0.6" fill="none"/>
        </g>

        <!-- ALA DERECHA (mirror) -->
        <g class="wing-r">
          <path d="M350,180
                   C400,160 460,140 520,130
                   C580,120 630,115 670,140
                   C630,150 600,165 590,185
                   C630,180 650,190 670,210
                   C620,220 590,230 570,250
                   C610,250 630,260 640,280
                   C580,275 530,260 490,235
                   C440,210 390,195 350,190 Z"/>
          <path d="M350,180 L520,130 M350,185 L590,185 M350,190 L570,250 M350,192 L490,235"
                stroke="var(--loader-accent)" stroke-width="1.5" opacity="0.6" fill="none"/>
        </g>
      </g>
    </svg>`;
  }

  function ringSvg(reverse) {
    const runes = '⚝✦⟁☥⚙⛧✶☯⚜♅✺✷⛤☸⚚✪';
    let circles = '';
    let runeText = '';
    const r = reverse ? 130 : 155;
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const x = 170 + Math.cos(angle) * r;
      const y = 170 + Math.sin(angle) * r;
      const color = reverse ? 'var(--loader-accent-2)' : 'var(--loader-accent)';
      circles += `<circle cx="${x}" cy="${y}" r="2.5" fill="${color}" opacity="0.7"/>`;
      runeText += `<text x="${x}" y="${y + 4}" text-anchor="middle" fill="${color}" font-size="14" opacity="0.6" font-family="serif">${runes[i % runes.length]}</text>`;
    }
    return `<svg class="ring-svg ${reverse ? 'reverse' : ''}" viewBox="0 0 340 340">
      <circle cx="170" cy="170" r="${r}" fill="none" stroke="${reverse ? 'var(--loader-accent-2)' : 'var(--loader-accent)'}" stroke-width="1" opacity="0.35" stroke-dasharray="4 6"/>
      ${circles}${runeText}
    </svg>`;
  }

  function d20Svg() {
    // Icosaedro real visto desde un ángulo isométrico
    // Top apex + 5 upper triangles + 5 lower triangles + bottom apex
    return `<svg class="loader-d20" viewBox="-110 -110 220 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="d20FaceLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="var(--loader-accent)" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="var(--loader-accent)" stop-opacity="0.15"/>
        </linearGradient>
        <linearGradient id="d20FaceMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="var(--loader-accent)" stop-opacity="0.28"/>
          <stop offset="100%" stop-color="var(--loader-accent)" stop-opacity="0.08"/>
        </linearGradient>
        <linearGradient id="d20FaceDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stop-color="var(--loader-accent)" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="var(--loader-accent)" stop-opacity="0.04"/>
        </linearGradient>
      </defs>

      <g class="d20-spin" stroke="var(--loader-accent)" stroke-width="2" stroke-linejoin="round">
        <!-- Top cap: 5 triangles meeting at top apex (0,-95) -->
        <polygon points="0,-95  -55,-30  -85,-55"  fill="url(#d20FaceMid)"/>
        <polygon points="0,-95  -85,-55  -30,-65"  fill="url(#d20FaceLight)"/>
        <polygon points="0,-95  -30,-65   30,-65"  fill="url(#d20FaceLight)"/>
        <polygon points="0,-95   30,-65   85,-55"  fill="url(#d20FaceMid)"/>
        <polygon points="0,-95   85,-55   55,-30"  fill="url(#d20FaceDark)"/>

        <!-- Equatorial band: 10 triangles -->
        <polygon points="-85,-55 -55,-30 -85,30"  fill="url(#d20FaceDark)"/>
        <polygon points="-55,-30 -85,30  -30,55"  fill="url(#d20FaceMid)"/>
        <polygon points="-55,-30 -30,-65 -30,55"  fill="url(#d20FaceLight)"/>
        <polygon points="-30,-65 -30,55   30,55"  fill="url(#d20FaceMid)"/>
        <polygon points="-30,-65  30,-65  30,55"  fill="url(#d20FaceLight)"/>
        <polygon points=" 30,-65  30,55   85,30"  fill="url(#d20FaceMid)"/>
        <polygon points=" 30,-65  85,-55  85,30"  fill="url(#d20FaceDark)"/>
        <polygon points=" 85,-55  55,-30  85,30"  fill="url(#d20FaceDark)"/>

        <!-- Bottom cap: 5 triangles meeting at bottom apex (0,95) -->
        <polygon points="0,95  -55,30  -85,30"  fill="url(#d20FaceDark)"/>
        <polygon points="0,95  -55,30  -30,55"  fill="url(#d20FaceMid)"/>
        <polygon points="0,95  -30,55   30,55"  fill="url(#d20FaceLight)"/>
        <polygon points="0,95   30,55   55,30"  fill="url(#d20FaceMid)"/>
        <polygon points="0,95   55,30   85,30"  fill="url(#d20FaceDark)"/>

        <!-- Numero "20" en la cara frontal central -->
        <text x="0" y="6" text-anchor="middle"
              font-family="Cinzel, Orbitron, serif" font-weight="700" font-size="40"
              fill="var(--loader-accent)" stroke="none"
              style="filter: drop-shadow(0 0 8px var(--loader-accent));">20</text>
      </g>
    </svg>`;
  }

  function createLoaderDOM() {
    const loader = document.createElement('div');
    loader.id = 'initial-loader';
    loader.dataset.loaderTheme = getActiveTheme();
    loader.innerHTML = `
      <div class="grid-floor"></div>
      <div id="ember-layer" style="position:absolute;inset:0;pointer-events:none;"></div>
      <div class="loader-stage">
        <div class="loader-ring">
          ${ringSvg(false)}
          ${ringSvg(true)}
        </div>
        ${d20Svg()}
      </div>
      <div class="loader-title">FICHA PATHFINDER</div>
      <div class="loader-subtitle" id="loader-subtitle">Invocando interfaz</div>
      <div class="loader-bar-wrap"><div class="loader-bar" id="loader-bar"></div></div>
      <div class="loader-pct" id="loader-pct">0%</div>
    `;
    document.body.appendChild(loader);

    const emberLayer = loader.querySelector('#ember-layer');
    for (let i = 0; i < 30; i++) {
      const e = document.createElement('div');
      e.className = 'ember';
      e.style.left = (Math.random() * 100) + '%';
      e.style.setProperty('--ex', (Math.random() * 200 - 100) + 'px');
      e.style.animationDuration = (3 + Math.random() * 4) + 's';
      e.style.animationDelay = (Math.random() * 3) + 's';
      emberLayer.appendChild(e);
    }
  }

  function startLoader() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', boot);
    } else { boot(); }
  }

  function boot() {
    createLoaderDOM();
    const bar = document.getElementById('loader-bar');
    const pct = document.getElementById('loader-pct');
    const sub = document.getElementById('loader-subtitle');
    const phases = [
      'Invocando interfaz',
      'Calibrando dados',
      'Sincronizando aura arcana',
      'Cargando hechizos',
      'Listo'
    ];
    const start = performance.now();
    function tick() {
      const elapsed = performance.now() - start;
      const p = Math.min(1, elapsed / TARGET_DURATION);
      const percent = Math.floor(p * 100);
      if (bar) bar.style.width = percent + '%';
      if (pct) pct.textContent = percent + '%';
      if (sub) {
        const idx = Math.min(phases.length - 1, Math.floor(p * phases.length));
        sub.textContent = phases[idx];
      }
      if (p < 1) requestAnimationFrame(tick);
      else finish();
    }
    function finish() {
      const loader = document.getElementById('initial-loader');
      if (!loader) return;
      setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => loader.remove(), 800);
      }, 200);
    }
    requestAnimationFrame(tick);
  }

  startLoader();
})();
