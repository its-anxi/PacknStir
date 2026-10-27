// Interactive 3D / Animated Packaging Visualizer
// Powered by SVG + CSS 3D transforms + GSAP

export function renderBoxVisualizer() {
  return `
    <div id="interactive-box-container" class="relative w-full max-w-xl mx-auto bg-stone-900/60 backdrop-blur-xl border border-stone-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
      <!-- Glow effect behind box -->
      <div id="box-ambient-glow" class="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 via-amber-600/20 to-emerald-800/20 rounded-3xl blur-2xl opacity-60 pointer-events-none transition-all duration-700"></div>

      <!-- Header & Active Spec Badge -->
      <div class="relative z-10 flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            3D Studio Preview
          </span>
          <span id="box-material-label" class="text-xs text-stone-400 font-medium hidden sm:inline-block">Natural Kraft (E-Flute)</span>
        </div>
        <div class="flex items-center gap-2">
          <button id="btn-toggle-unfold" class="px-3 py-1.5 text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors flex items-center gap-1.5 border border-stone-700">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            <span id="btn-unfold-text">Unfold Dieline</span>
          </button>
        </div>
      </div>

      <!-- Visual Stage Area -->
      <div class="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden">
        <!-- 3D Perspective Box View -->
        <div id="box-3d-stage" class="w-full h-full flex items-center justify-center transition-all duration-500">
          <svg id="box-svg-element" viewBox="0 0 500 400" class="w-full h-full max-h-80 object-contain drop-shadow-2xl">
            <defs>
              <!-- Kraft Material -->
              <linearGradient id="kraftFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#D7AB7E" />
                <stop offset="100%" stop-color="#A97D4F" />
              </linearGradient>
              <linearGradient id="kraftSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#9C7043" />
                <stop offset="100%" stop-color="#7B5430" />
              </linearGradient>
              <linearGradient id="kraftLidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#E2BB8F" />
                <stop offset="100%" stop-color="#BD9061" />
              </linearGradient>

              <!-- Forest Green Material -->
              <linearGradient id="forestFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E3E30" />
                <stop offset="100%" stop-color="#12271E" />
              </linearGradient>
              <linearGradient id="forestSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#142B21" />
                <stop offset="100%" stop-color="#0B1712" />
              </linearGradient>

              <!-- White Kraft Material -->
              <linearGradient id="whiteFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FAF8F5" />
                <stop offset="100%" stop-color="#DED7C8" />
              </linearGradient>

              <!-- Charcoal Material -->
              <linearGradient id="charcoalFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2D3339" />
                <stop offset="100%" stop-color="#1A1E22" />
              </linearGradient>

              <!-- Gold Foil Gradient -->
              <linearGradient id="foilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCE596" />
                <stop offset="50%" stop-color="#D4AF37" />
                <stop offset="100%" stop-color="#997A1E" />
              </linearGradient>

              <filter id="shadowFilter">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                <feOffset dx="0" dy="16" />
                <feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Dynamic Shadow -->
            <ellipse id="box-ground-shadow" cx="250" cy="340" rx="190" ry="30" fill="#000" opacity="0.45" filter="blur(10px)" />

            <!-- Isometric 3D Box Geometry -->
            <g id="box-geometry-group" transform="translate(0, 0)">
              <!-- Bottom Left Wall -->
              <polygon id="face-left" points="90,210 250,295 250,335 90,250" fill="url(#kraftSideGrad)" stroke="#664322" stroke-width="0.5" />
              
              <!-- Bottom Right Wall -->
              <polygon id="face-right" points="250,295 410,210 410,250 250,335" fill="#875E35" stroke="#5E4023" stroke-width="0.5" />

              <!-- Interior Floor (visible when lid is opened) -->
              <polygon id="face-interior" points="90,210 250,130 410,210 250,290" fill="#1C382B" opacity="0.9" />
              
              <!-- Interior Botanical Print on Inside Floor -->
              <g id="interior-print" opacity="0.7">
                <circle cx="250" cy="210" r="30" fill="none" stroke="#508A6F" stroke-width="1.5" stroke-dasharray="3 3"/>
                <text x="250" y="206" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#A8D6C0" text-anchor="middle" letter-spacing="1.5">ECOPACK STUDIO</text>
                <text x="250" y="220" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#78B59A" text-anchor="middle">100% CIRCULAR PACKAGING</text>
              </g>

              <!-- Hinged Lid (Transforms on Open / Close) -->
              <g id="box-lid-assembly" class="transition-transform duration-700 origin-[250px_130px]">
                <!-- Main Lid Plane -->
                <polygon id="face-top" points="90,210 250,125 410,210 250,295" fill="url(#kraftFaceGrad)" stroke="#B38656" stroke-width="0.8" />
                
                <!-- Front Tuck Lip -->
                <polygon id="face-lip" points="90,210 250,295 250,305 90,220" fill="url(#kraftLidGrad)" opacity="0.9" />

                <!-- Hot Stamp Logo on Lid Face -->
                <g id="lid-branding" transform="translate(250, 205) rotate(0)">
                  <circle cx="0" cy="0" r="32" fill="none" stroke="url(#foilGrad)" stroke-width="1.8" />
                  <path d="M-8,6 L0,-10 L8,6 L3,6 L0,-2 L-3,6 Z" fill="url(#foilGrad)" />
                  <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="800" fill="url(#foilGrad)" text-anchor="middle" letter-spacing="2">ECOPACK</text>
                  <text x="0" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="4.5" fill="#E8D190" text-anchor="middle" letter-spacing="1">STUDIO</text>
                </g>
              </g>

              <!-- Dimension Annotations Overlay -->
              <g id="dimension-guides" class="opacity-0 transition-opacity duration-300">
                <!-- Width line -->
                <line x1="90" y1="265" x2="250" y2="350" stroke="#E5C378" stroke-width="1" stroke-dasharray="2 2"/>
                <rect x="150" y="305" width="46" height="16" rx="4" fill="#1C1917" stroke="#E5C378" stroke-width="0.8"/>
                <text x="173" y="316" font-family="monospace" font-size="7.5" fill="#E5C378" text-anchor="middle">L: 305mm</text>

                <!-- Depth line -->
                <line x1="250" y1="350" x2="410" y2="265" stroke="#E5C378" stroke-width="1" stroke-dasharray="2 2"/>
                <rect x="310" y="305" width="46" height="16" rx="4" fill="#1C1917" stroke="#E5C378" stroke-width="0.8"/>
                <text x="333" y="316" font-family="monospace" font-size="7.5" fill="#E5C378" text-anchor="middle">W: 203mm</text>

                <!-- Height line -->
                <line x1="425" y1="210" x2="425" y2="250" stroke="#E5C378" stroke-width="1"/>
                <rect x="430" y="222" width="40" height="16" rx="4" fill="#1C1917" stroke="#E5C378" stroke-width="0.8"/>
                <text x="450" y="233" font-family="monospace" font-size="7.5" fill="#E5C378" text-anchor="middle">H: 76mm</text>
              </g>
            </g>

            <!-- Flat CAD Dieline Graphic (Hidden by default, shown when unfolded) -->
            <g id="box-cad-dieline" class="hidden" transform="translate(40, 20)">
              <rect x="0" y="0" width="420" height="340" fill="#1C1F22" rx="12" stroke="#374151" stroke-width="1"/>
              <!-- Grid background -->
              <defs>
                <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L0 0 0 20" fill="none" stroke="#2A3038" stroke-width="0.8"/>
                </pattern>
              </defs>
              <rect x="0" y="0" width="420" height="340" fill="url(#cadGrid)" rx="12" />
              <!-- Cut lines (Green) and Crease lines (Dashed Orange) -->
              <g transform="translate(50, 40)">
                <!-- Main body rectangle cut -->
                <rect x="40" y="30" width="240" height="200" fill="#D7AB7E" fill-opacity="0.15" stroke="#10B981" stroke-width="1.8" rx="2"/>
                <!-- Flaps & Wings -->
                <polygon points="40,30 10,60 10,130 40,150" fill="#A97D4F" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
                <polygon points="280,30 310,60 310,130 280,150" fill="#A97D4F" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
                <polygon points="40,30 90,0 230,0 280,30" fill="#A97D4F" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
                <!-- Crease fold lines (Dashed) -->
                <line x1="40" y1="90" x2="280" y2="90" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="40" y1="170" x2="280" y2="170" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="100" y1="30" x2="100" y2="230" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="220" y1="30" x2="220" y2="230" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <!-- CAD Labels -->
                <text x="160" y="135" font-family="monospace" font-size="9" fill="#10B981" text-anchor="middle" font-weight="bold">MAIN PANEL (INTERIOR)</text>
                <text x="160" y="150" font-family="monospace" font-size="7" fill="#9CA3AF" text-anchor="middle">CALIPER: 1.6mm E-FLUTE CORRUGATED</text>
                <!-- Legend -->
                <circle cx="20" cy="245" r="4" fill="#10B981"/>
                <text x="30" y="248" font-family="monospace" font-size="7" fill="#E5E7EB">DIE-CUT TRIM</text>
                <line x1="100" y1="245" x2="125" y2="245" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3 2"/>
                <text x="135" y="248" font-family="monospace" font-size="7" fill="#E5E7EB">CREASE / SCORE LINE</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <!-- Interactive Controls Bar -->
      <div class="relative z-10 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Material Color Swatches -->
        <div class="flex items-center gap-2">
          <span class="text-xs text-stone-400 mr-1">Board Finish:</span>
          <button data-material="kraft" class="material-btn active w-6 h-6 rounded-full bg-[#C49A6C] ring-2 ring-emerald-500 ring-offset-2 ring-offset-stone-900 transition-transform hover:scale-110" title="Natural Kraft"></button>
          <button data-material="forest" class="material-btn w-6 h-6 rounded-full bg-[#1A382B] ring-1 ring-stone-600 ring-offset-1 ring-offset-stone-900 transition-transform hover:scale-110" title="Forest Green"></button>
          <button data-material="white" class="material-btn w-6 h-6 rounded-full bg-[#F3EFE6] ring-1 ring-stone-600 ring-offset-1 ring-offset-stone-900 transition-transform hover:scale-110" title="Crisp White"></button>
          <button data-material="charcoal" class="material-btn w-6 h-6 rounded-full bg-[#23292F] ring-1 ring-stone-600 ring-offset-1 ring-offset-stone-900 transition-transform hover:scale-110" title="Charcoal Matte"></button>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <button id="btn-toggle-open" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md hover:shadow-emerald-900/30">
            Open Box Lid
          </button>
          <button id="btn-toggle-dims" class="px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-all border border-stone-700">
            Show Dimensions
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initBoxVisualizer() {
  const container = document.getElementById('interactive-box-container');
  if (!container) return;

  let isLidOpen = false;
  let isUnfolded = false;
  let areDimsVisible = false;
  let currentMaterial = 'kraft';

  const lidAssembly = document.getElementById('box-lid-assembly');
  const btnToggleOpen = document.getElementById('btn-toggle-open');
  const btnToggleDims = document.getElementById('btn-toggle-dims');
  const btnToggleUnfold = document.getElementById('btn-toggle-unfold');
  const btnUnfoldText = document.getElementById('btn-unfold-text');
  const dimGuides = document.getElementById('dimension-guides');
  const box3dGroup = document.getElementById('box-geometry-group');
  const boxCadGroup = document.getElementById('box-cad-dieline');
  const materialLabel = document.getElementById('box-material-label');
  const materialBtns = container.querySelectorAll('.material-btn');

  const faceTop = document.getElementById('face-top');
  const faceLeft = document.getElementById('face-left');
  const faceRight = document.getElementById('face-right');

  // Open / Close Lid Action
  if (btnToggleOpen) {
    btnToggleOpen.addEventListener('click', () => {
      if (isUnfolded) {
        // First revert to 3D view
        toggleUnfold();
      }
      isLidOpen = !isLidOpen;
      if (isLidOpen) {
        btnToggleOpen.textContent = 'Close Box Lid';
        if (window.gsap && lidAssembly) {
          window.gsap.to(lidAssembly, {
            transformOrigin: '250px 125px',
            scaleY: 0.25,
            y: -80,
            opacity: 0.35,
            duration: 0.7,
            ease: 'power3.out'
          });
        } else if (lidAssembly) {
          lidAssembly.style.transform = 'translateY(-80px) scaleY(0.25)';
          lidAssembly.style.opacity = '0.35';
        }
      } else {
        btnToggleOpen.textContent = 'Open Box Lid';
        if (window.gsap && lidAssembly) {
          window.gsap.to(lidAssembly, {
            scaleY: 1,
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
          });
        } else if (lidAssembly) {
          lidAssembly.style.transform = 'translateY(0) scaleY(1)';
          lidAssembly.style.opacity = '1';
        }
      }
    });
  }

  // Dimension Toggles
  if (btnToggleDims) {
    btnToggleDims.addEventListener('click', () => {
      areDimsVisible = !areDimsVisible;
      if (areDimsVisible) {
        btnToggleDims.classList.add('bg-stone-700', 'text-amber-300');
        dimGuides.classList.remove('opacity-0');
        dimGuides.classList.add('opacity-100');
      } else {
        btnToggleDims.classList.remove('bg-stone-700', 'text-amber-300');
        dimGuides.classList.remove('opacity-100');
        dimGuides.classList.add('opacity-0');
      }
    });
  }

  // Toggle Unfold Dieline View
  function toggleUnfold() {
    isUnfolded = !isUnfolded;
    if (isUnfolded) {
      btnUnfoldText.textContent = 'View 3D Box';
      box3dGroup.classList.add('hidden');
      boxCadGroup.classList.remove('hidden');
      if (window.gsap) {
        window.gsap.fromTo(boxCadGroup, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' });
      }
    } else {
      btnUnfoldText.textContent = 'Unfold Dieline';
      boxCadGroup.classList.add('hidden');
      box3dGroup.classList.remove('hidden');
      if (window.gsap) {
        window.gsap.fromTo(box3dGroup, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' });
      }
    }
  }

  if (btnToggleUnfold) {
    btnToggleUnfold.addEventListener('click', toggleUnfold);
  }

  // Material Swatches
  materialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      materialBtns.forEach(b => {
        b.classList.remove('ring-2', 'ring-emerald-500', 'ring-offset-2');
        b.classList.add('ring-1', 'ring-stone-600', 'ring-offset-1');
      });
      btn.classList.add('ring-2', 'ring-emerald-500', 'ring-offset-2');
      btn.classList.remove('ring-1', 'ring-stone-600', 'ring-offset-1');

      const mat = btn.getAttribute('data-material');
      currentMaterial = mat;

      if (mat === 'kraft') {
        faceTop.setAttribute('fill', 'url(#kraftFaceGrad)');
        faceLeft.setAttribute('fill', 'url(#kraftSideGrad)');
        faceRight.setAttribute('fill', '#875E35');
        if (materialLabel) materialLabel.textContent = 'Natural Kraft (E-Flute)';
      } else if (mat === 'forest') {
        faceTop.setAttribute('fill', 'url(#forestFaceGrad)');
        faceLeft.setAttribute('fill', 'url(#forestSideGrad)');
        faceRight.setAttribute('fill', '#0E1D16');
        if (materialLabel) materialLabel.textContent = 'Deep Forest Green (Foil Embossed)';
      } else if (mat === 'white') {
        faceTop.setAttribute('fill', 'url(#whiteFaceGrad)');
        faceLeft.setAttribute('fill', '#DCD5C5');
        faceRight.setAttribute('fill', '#C8BFAC');
        if (materialLabel) materialLabel.textContent = 'Crisp Bleached Kraft';
      } else if (mat === 'charcoal') {
        faceTop.setAttribute('fill', 'url(#charcoalFaceGrad)');
        faceLeft.setAttribute('fill', '#1F2429');
        faceRight.setAttribute('fill', '#14181B');
        if (materialLabel) materialLabel.textContent = 'Obsidian Matte Greyboard';
      }

      if (window.gsap) {
        window.gsap.fromTo(box3dGroup, { scale: 0.98 }, { scale: 1, duration: 0.3, ease: 'power1.out' });
      }
    });
  });
}
