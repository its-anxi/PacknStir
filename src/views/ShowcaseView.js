import { PRODUCTS } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { cart } from '../state/cartState.js';

export function renderShowcaseView() {
  return `
    <div class="bg-white min-h-screen text-stone-900 pb-28">
      
      <!-- =============================================================== -->
      <!-- 1. HERO HEADER: EARTH ECOSYSTEM & GLOBAL WARMING MASTER DIRECTORY -->
      <!-- =============================================================== -->
      <section class="relative bg-gradient-to-b from-[#FBF8F3] via-[#FAF8F5] to-white py-16 sm:py-24 border-b border-[#EBDDC8] overflow-hidden">
        
        <!-- Subtle decorative ambient elements -->
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Comprehensive Scientific Catalog • All 46 Products</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-stone-950 font-serif max-w-4xl mx-auto leading-tight">
            Earth Eco-System & <span class="italic text-emerald-800">Global Warming Directory</span>
          </h1>

          <p class="text-stone-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            A dedicated, transparent scientific archive of all <strong>46 plastic-free packaging innovations</strong>. 
            For every product, explore the <strong>material history</strong>, discover how it <strong>safeguards Earth's terrestrial and marine ecosystems</strong>, and inspect its <strong>verified carbon metrics that combat global warming</strong>.
          </p>

          <!-- 4 Global Impact Pillars -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 max-w-5xl mx-auto text-left">
            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🌊 Ocean Protection</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">0% Microplastics</div>
              <p class="text-[11px] text-stone-600 leading-snug">Pure plant cellulose & agricultural waste naturally bio-assimilate without plastic residue.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🌡️ Global Warming</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">-72% CO₂e Average</div>
              <p class="text-[11px] text-stone-600 leading-snug">Replaces petroleum cracking with renewable plant fibers that store atmospheric carbon.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🌱 Soil Regeneration</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">30–90 Days Humus</div>
              <p class="text-[11px] text-stone-600 leading-snug">Composts harmlessly into nutrient-rich organic matter that nourishes soil microbiomes.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🔄 Circular Milling</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">100% Repulpable</div>
              <p class="text-[11px] text-stone-600 leading-snug">Dissolves in standard mill hydro-pulpers; recyclable up to 7 consecutive lifecycles.</p>
            </div>
          </div>

          <!-- Interactive Live Volume Climate Calculator Bar -->
          <div class="mt-8 p-6 bg-[#F6EFE3] border border-[#DEC6A6] rounded-3xl max-w-4xl mx-auto shadow-sm text-left">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#DEC6A6]/80">
              <div>
                <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-900 block">🧮 Interactive Impact Estimator</span>
                <h3 class="text-base font-bold text-stone-900">Estimate Your Brand's Environmental Savings with PackNStir</h3>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-stone-600 font-semibold">Monthly Units:</span>
                <select id="calc-volume-select" class="px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700">
                  <option value="500">500 units/mo</option>
                  <option value="2500" selected>2,500 units/mo</option>
                  <option value="10000">10,000 units/mo</option>
                  <option value="50000">50,000 units/mo</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center sm:text-left">
              <div class="p-3 bg-white rounded-2xl border border-[#EBDDC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">CO₂e Atmospheric Savings</span>
                <span id="calc-co2-val" class="text-2xl font-black text-emerald-800 font-serif">3,125 kg</span>
                <span class="text-[11px] text-stone-500 block mt-0.5">Equivalent to ~7,750 miles not driven</span>
              </div>
              <div class="p-3 bg-white rounded-2xl border border-[#EBDDC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Ocean Plastic Avoided</span>
                <span id="calc-plastic-val" class="text-2xl font-black text-emerald-800 font-serif">625,000 g</span>
                <span class="text-[11px] text-stone-500 block mt-0.5">Over 31,000 plastic polybags replaced</span>
              </div>
              <div class="p-3 bg-white rounded-2xl border border-[#EBDDC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Soil Organic Matter Returned</span>
                <span id="calc-soil-val" class="text-2xl font-black text-emerald-800 font-serif">100% Repulpable</span>
                <span class="text-[11px] text-stone-500 block mt-0.5">Zero toxic microplastics in farmland</span>
              </div>
            </div>
          </div>

          <!-- Category Quick-Jump Nav -->
          <div class="pt-6 flex items-center justify-center gap-2 flex-wrap text-xs font-bold">
            <button data-cat="all" class="showcase-nav-pill active px-4 py-2.5 rounded-xl bg-emerald-900 text-white shadow-sm transition-all cursor-pointer">
              All 46 Packaging Formats
            </button>
            ${CATEGORIES.map(c => `
              <button data-cat="${c.id}" class="showcase-nav-pill px-4 py-2.5 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 border border-[#DEC6A6] transition-all cursor-pointer">
                ${c.shortName} (${c.itemCount})
              </button>
            `).join('')}
          </div>

          <!-- Live Search Bar within Directory -->
          <div class="pt-2 max-w-lg mx-auto">
            <div class="relative">
              <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" id="showcase-search" placeholder="Search by name, material history, ecosystem benefit, or global warming stat..." class="w-full pl-10 pr-4 py-3 bg-white border border-[#DEC6A6] rounded-2xl text-xs text-stone-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-700" />
            </div>
          </div>
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- 2. SCROLL-TRIGGERED 46 PRODUCT STORY & ECOSYSTEM/CLIMATE GRID   -->
      <!-- =============================================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#EBDDC8] gap-4">
          <div>
            <h2 class="text-xl font-extrabold text-stone-900 font-serif">Documented Products Catalog</h2>
            <p class="text-xs text-stone-500 mt-0.5">Showing all verified materials with history, ecosystem protection, and carbon data.</p>
          </div>
          <span id="showcase-count-badge" class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 font-bold text-xs">
            Showing 46 of 46 Products
          </span>
        </div>

        <div id="showcase-cards-container" class="space-y-16 pt-10">
          <!-- Rendered dynamically by initShowcaseView() -->
        </div>
      </section>

    </div>
  `;
}

export function initShowcaseView() {
  const container = document.getElementById('showcase-cards-container');
  const searchInput = document.getElementById('showcase-search');
  const navPills = document.querySelectorAll('.showcase-nav-pill');
  const countBadge = document.getElementById('showcase-count-badge');
  const volumeSelect = document.getElementById('calc-volume-select');

  if (!container) return;

  let activeCat = 'all';
  let searchQuery = '';

  // Interactive Live Volume Calculator
  if (volumeSelect) {
    const calcCo2 = document.getElementById('calc-co2-val');
    const calcPlastic = document.getElementById('calc-plastic-val');

    volumeSelect.addEventListener('change', () => {
      const vol = parseInt(volumeSelect.value, 10) || 2500;
      const co2 = Math.round(vol * 1.25);
      const plastic = Math.round(vol * 250);

      if (calcCo2) calcCo2.textContent = `${co2.toLocaleString()} kg`;
      if (calcPlastic) calcPlastic.textContent = `${plastic.toLocaleString()} g`;
    });
  }

  function renderCards() {
    let filtered = PRODUCTS;
    if (activeCat !== 'all') {
      filtered = filtered.filter(p => p.category === activeCat);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        (p.history && p.history.toLowerCase().includes(q)) ||
        (p.ecosystemBenefits && p.ecosystemBenefits.toLowerCase().includes(q)) ||
        (p.globalWarmingImpact && p.globalWarmingImpact.toLowerCase().includes(q)) ||
        (p.environmentalImpact && p.environmentalImpact.toLowerCase().includes(q)) ||
        p.material.toLowerCase().includes(q)
      );
    }

    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Products`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-24 bg-[#FBF8F3] rounded-3xl border border-[#EBDDC8]">
          <p class="text-base font-bold text-stone-800">No matching packaging formats found.</p>
          <p class="text-xs text-stone-500 mt-1">Try another search term or click "All 46 Packaging Formats".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((prod, index) => {
      const isReversed = index % 2 === 1;
      const co2Val = prod.co2SavedKg ? `${prod.co2SavedKg.toFixed(2)} kg CO₂e` : '1.25 kg CO₂e';
      const plasticVal = prod.plasticAvoidedGrams ? `${prod.plasticAvoidedGrams} g` : '180 g';
      const decompVal = prod.decompositionDays || '60–90 days';

      return `
        <article id="product-${prod.id}" class="showcase-item bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#EBDDC8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            <!-- Column A: Visual Representation & Metric Badges (5 cols) -->
            <div class="lg:col-span-5 bg-gradient-to-br from-[#FBF8F3] to-[#F4EFE6] p-8 sm:p-10 flex flex-col justify-between items-center relative border-b lg:border-b-0 ${isReversed ? 'lg:order-2 lg:border-l' : 'lg:border-r'} border-[#EBDDC8]">
              
              <!-- Top Badges -->
              <div class="w-full flex items-center justify-between gap-2 z-10">
                <span class="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full shadow-xs">
                  ${prod.badge || 'FSC® Certified'}
                </span>
                <span class="text-[11px] font-mono text-stone-500 font-semibold">
                  SKU #PNS-${String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <!-- Product Graphic -->
              <div class="w-full h-56 sm:h-64 flex items-center justify-center my-4 transform group-hover:scale-105 transition-transform duration-500">
                ${getProductSvg(prod.svgType, 'showcase')}
              </div>

              <!-- 3 Scientific Metrics Badges -->
              <div class="w-full grid grid-cols-3 gap-2 pt-4 border-t border-[#DEC6A6]/80 text-center">
                <div class="p-2 bg-white rounded-xl border border-[#EBDDC8]">
                  <span class="text-[9px] uppercase font-bold text-stone-500 block">CO₂e Saved</span>
                  <span class="text-xs font-black text-emerald-800 block">${co2Val}</span>
                </div>
                <div class="p-2 bg-white rounded-xl border border-[#EBDDC8]">
                  <span class="text-[9px] uppercase font-bold text-stone-500 block">Plastic Avoided</span>
                  <span class="text-xs font-black text-emerald-800 block">${plasticVal}</span>
                </div>
                <div class="p-2 bg-white rounded-xl border border-[#EBDDC8]">
                  <span class="text-[9px] uppercase font-bold text-stone-500 block">Degradation</span>
                  <span class="text-xs font-black text-stone-800 block truncate" title="${decompVal}">${decompVal}</span>
                </div>
              </div>

            </div>

            <!-- Column B: History, Ecosystem Benefits & Global Warming Impact (7 cols) -->
            <div class="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-5 ${isReversed ? 'lg:order-1' : ''}">
              
              <div class="space-y-4">
                
                <!-- Category and Title -->
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800">${prod.categoryName}</span>
                    <span class="text-stone-300">•</span>
                    <span class="text-xs text-stone-500 font-medium">${prod.material.split('(')[0]}</span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-stone-950 font-serif leading-tight">
                    <a href="#product/${prod.id}" class="hover:text-emerald-800 transition-colors">${prod.name}</a>
                  </h2>
                  <p class="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    ${prod.subtitle}
                  </p>
                </div>

                <!-- 1. MATERIAL & INDUSTRIAL HISTORY -->
                <div class="p-4 sm:p-5 rounded-2xl bg-[#FBF8F3] border border-[#DEC6A6] space-y-1 relative">
                  <div class="flex items-center gap-2 text-stone-900 font-serif font-bold text-xs uppercase tracking-wider">
                    <span>📜 Origin & Material History</span>
                  </div>
                  <p class="text-xs text-stone-700 leading-relaxed font-sans">
                    ${prod.history}
                  </p>
                </div>

                <!-- 2. HOW IT HELPS EARTH'S ECOSYSTEM (Ocean, Soil & Wildlife) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-teal-50/70 border-2 border-teal-600/40 space-y-1 relative">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-teal-950 font-bold text-xs uppercase tracking-wider">
                      <span class="w-2 h-2 rounded-full bg-teal-600"></span>
                      <span>🌊 Protection of Earth's Ecosystem (Oceans, Soil & Wildlife)</span>
                    </div>
                    <span class="text-[10px] font-black text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-full">0% Microplastics</span>
                  </div>
                  <p class="text-xs text-teal-950 font-medium leading-relaxed font-sans">
                    ${prod.ecosystemBenefits || prod.environmentalImpact}
                  </p>
                </div>

                <!-- 3. HOW IT COMBATS GLOBAL WARMING & CLIMATE CHANGE (CO2e & Carbon Sink) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-700/50 space-y-1 relative">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                      <span class="w-2 h-2 rounded-full bg-emerald-700"></span>
                      <span>🌡️ Combating Global Warming & Climate Change</span>
                    </div>
                    <span class="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Saves ${co2Val}</span>
                  </div>
                  <p class="text-xs text-emerald-950 font-medium leading-relaxed font-sans">
                    ${prod.globalWarmingImpact || 'Reduces fossil fuel cracking emissions by utilizing renewable biogenic cellulose that sequesters atmospheric carbon during growth cycles.'}
                  </p>
                </div>

                <!-- Eco Badges tags -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  ${prod.ecoBadges.map(badge => `
                    <span class="text-[10px] font-semibold bg-[#F6EFE3] text-emerald-950 px-2 py-0.5 rounded-md border border-[#DEC6A6]">
                      ✓ ${badge}
                    </span>
                  `).join('')}
                </div>

              </div>

              <!-- Action CTAs -->
              <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-xs text-stone-500 font-medium">
                  Standard sizing: <span class="text-stone-900 font-semibold">${prod.dimensionsPreset}</span>
                </div>

                <div class="flex items-center gap-3 w-full sm:w-auto">
                  <button data-quick-add-id="${prod.id}" class="btn-showcase-add flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-bold text-xs shadow-md shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                    <span>Order Batch (${prod.moq} pcs)</span>
                  </button>

                  <a href="#product/${prod.id}" class="px-4 py-2.5 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-1.5">
                    <span>Technical PDP</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </article>
      `;
    }).join('');

    // Re-attach quick add event listeners
    const addBtns = container.querySelectorAll('.btn-showcase-add');
    addBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-quick-add-id');
        const product = PRODUCTS.find(p => p.id === pId);
        if (!product) return;

        cart.addItem(product, product.moq);

        const originalText = btn.innerHTML;
        btn.classList.remove('bg-emerald-800', 'hover:bg-emerald-900');
        btn.classList.add('bg-stone-900', 'text-emerald-300');
        btn.innerHTML = `<span>✓ Added ${product.moq} pcs</span>`;

        setTimeout(() => {
          btn.classList.add('bg-emerald-800', 'hover:bg-emerald-900');
          btn.classList.remove('bg-stone-900', 'text-emerald-300');
          btn.innerHTML = originalText;
        }, 1500);
      });
    });

    // ScrollTrigger GSAP animation
    if (window.gsap && window.ScrollTrigger) {
      window.ScrollTrigger.batch('.showcase-item', {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) => {
          window.gsap.fromTo(batch, 
            { opacity: 0, y: 35 }, 
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out', overwrite: 'auto' }
          );
        },
        once: true
      });
    }
  }

  // Initial render
  renderCards();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  // Category navigation pills
  navPills.forEach(pill => {
    pill.addEventListener('click', () => {
      navPills.forEach(p => {
        p.classList.remove('active', 'bg-emerald-900', 'text-white');
        p.classList.add('bg-[#F6EFE3]', 'text-stone-800');
      });
      pill.classList.add('active', 'bg-emerald-900', 'text-white');
      pill.classList.remove('bg-[#F6EFE3]', 'text-stone-800');

      activeCat = pill.getAttribute('data-cat') || 'all';
      renderCards();
    });
  });

  // Check if hash has an anchor e.g. #product-single-wall-boxes
  const currentHash = window.location.hash;
  if (currentHash.includes('#product-')) {
    const targetId = currentHash.split('#product-')[1];
    setTimeout(() => {
      const el = document.getElementById(`product-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  }
}
