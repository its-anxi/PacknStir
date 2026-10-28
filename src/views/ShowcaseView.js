import { PRODUCTS } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { cart } from '../state/cartState.js';

export function renderShowcaseView() {
  return `
    <div class="bg-white min-h-screen text-stone-900 pb-24">
      
      <!-- ========================================== -->
      <!-- 1. HERO STORYTELLING HEADER                -->
      <!-- ========================================== -->
      <section class="relative bg-gradient-to-b from-[#FBF8F3] via-white to-white py-16 sm:py-24 border-b border-stone-200/80 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800/60 shadow-xs">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>The Master Eco-Heritage Archive</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-stone-950 font-serif max-w-4xl mx-auto leading-tight">
            The Eco-Heritage <span class="italic text-emerald-800">Product Showcase</span>
          </h1>

          <p class="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            A visual, storytelling-driven exploration of all 46 plastic-free packaging innovations. Uncover the origins of our sustainable materials and inspect their verified environmental impact.
          </p>

          <!-- Category Quick-Jump Nav -->
          <div class="pt-4 flex items-center justify-center gap-2 flex-wrap text-xs font-bold">
            <button data-cat="all" class="showcase-nav-pill active px-4 py-2 rounded-xl bg-emerald-900 text-white shadow-sm transition-all">
              All 46 Formats
            </button>
            ${CATEGORIES.map(c => `
              <button data-cat="${c.id}" class="showcase-nav-pill px-4 py-2 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 border border-stone-300/80 transition-all">
                ${c.shortName} (${c.itemCount})
              </button>
            `).join('')}
          </div>

          <!-- Live Search Bar within Showcase -->
          <div class="pt-2 max-w-md mx-auto">
            <div class="relative">
              <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" id="showcase-search" placeholder="Search product history, material, or environmental impact..." class="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 rounded-2xl text-xs text-stone-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-700" />
            </div>
          </div>
        </div>
      </section>

      <!-- ========================================== -->
      <!-- 2. SCROLL-TRIGGERED 46 PRODUCT STORY GRID -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div id="showcase-cards-container" class="space-y-16">
          <!-- Rendered dynamically -->
        </div>
      </section>

    </div>
  `;
}

export function initShowcaseView() {
  const container = document.getElementById('showcase-cards-container');
  const searchInput = document.getElementById('showcase-search');
  const navPills = document.querySelectorAll('.showcase-nav-pill');
  if (!container) return;

  let activeCat = 'all';
  let searchQuery = '';

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
        p.history.toLowerCase().includes(q) ||
        p.environmentalImpact.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-24 bg-[#FBF8F3] rounded-3xl border border-stone-200">
          <p class="text-base font-bold text-stone-800">No matching packaging formats found.</p>
          <p class="text-xs text-stone-500 mt-1">Try another search term or click "All 46 Formats".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((prod, index) => {
      const isReversed = index % 2 === 1;

      return `
        <article class="showcase-item bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#EBDDC8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            <!-- Column A: Visual Placeholder & Key Badges (5 cols) -->
            <div class="lg:col-span-5 bg-gradient-to-br from-[#FBF8F3] to-[#F4EFE6] p-8 sm:p-12 flex flex-col justify-between items-center relative border-b lg:border-b-0 ${isReversed ? 'lg:order-2 lg:border-l' : 'lg:border-r'} border-[#EBDDC8]">
              
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

              <!-- Spec Summary Pill -->
              <div class="w-full pt-4 border-t border-stone-300/60 flex items-center justify-between text-xs font-semibold text-stone-600">
                <span>MOQ: <strong class="text-stone-900">${prod.moq} pcs</strong></span>
                <span>From <strong class="text-emerald-900 font-extrabold text-sm">$${prod.price.toFixed(2)}</strong> / ${prod.unit}</span>
              </div>

            </div>

            <!-- Column B: Storytelling, History & Environmental Impact (7 cols) -->
            <div class="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 ${isReversed ? 'lg:order-1' : ''}">
              
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
                  <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    ${prod.subtitle}
                  </p>
                </div>

                <!-- SECTION 1: PRODUCT HISTORY (Material Origins) -->
                <div class="p-5 rounded-2xl bg-[#FBF8F3] border border-[#DEC6A6]/60 space-y-1.5 relative overflow-hidden">
                  <div class="flex items-center gap-2 text-stone-800 font-serif font-bold text-xs uppercase tracking-wider">
                    <span>📜 Origin & Material History</span>
                  </div>
                  <p class="text-xs text-stone-700 leading-relaxed font-sans">
                    ${prod.history}
                  </p>
                </div>

                <!-- SECTION 2: ENVIRONMENTAL IMPACT (Green Highlighted Section) -->
                <div class="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-700/40 space-y-2 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                      <span class="w-2 h-2 rounded-full bg-emerald-700"></span>
                      <span>🌱 Environmental Impact & Circular Metrics</span>
                    </div>
                    <span class="text-[10px] font-extrabold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">100% Repulpable</span>
                  </div>
                  <p class="text-xs text-emerald-950 font-medium leading-relaxed font-sans">
                    ${prod.environmentalImpact}
                  </p>
                  
                  <!-- Eco Badges tags -->
                  <div class="flex flex-wrap gap-1.5 pt-1">
                    ${prod.ecoBadges.map(badge => `
                      <span class="text-[10px] font-semibold bg-white text-emerald-900 px-2 py-0.5 rounded border border-emerald-300/60 shadow-2xs">
                        ✓ ${badge}
                      </span>
                    `).join('')}
                  </div>
                </div>

              </div>

              <!-- Action CTAs -->
              <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-xs text-stone-500 font-medium">
                  Standard sizing: <span class="text-stone-900 font-semibold">${prod.dimensionsPreset}</span>
                </div>

                <div class="flex items-center gap-3 w-full sm:w-auto">
                  <button data-quick-add-id="${prod.id}" class="btn-showcase-add flex-1 sm:flex-none px-5 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-bold text-xs shadow-md shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                    <span>Order Batch (${prod.moq} pcs)</span>
                  </button>

                  <a href="#product/${prod.id}" class="px-4 py-3 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-1.5">
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

    // Attach Add to Cart listeners
    container.querySelectorAll('.btn-showcase-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-quick-add-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          cart.addItem(prod, prod.moq);
        }
      });
    });

    // GSAP Scroll Reveal for cards
    if (window.gsap && window.ScrollTrigger) {
      const items = container.querySelectorAll('.showcase-item');
      items.forEach((item) => {
        window.gsap.fromTo(item, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }

  // Nav pills filter
  navPills.forEach(pill => {
    pill.addEventListener('click', () => {
      navPills.forEach(p => {
        p.className = 'showcase-nav-pill px-4 py-2 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 border border-stone-300/80 transition-all';
      });
      pill.className = 'showcase-nav-pill active px-4 py-2 rounded-xl bg-emerald-900 text-white shadow-sm transition-all';
      activeCat = pill.getAttribute('data-cat');
      renderCards();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  // Initial render
  renderCards();
}
