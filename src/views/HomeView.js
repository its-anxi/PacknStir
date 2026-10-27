import { CATEGORIES, SUSTAINABILITY_STATS } from '../data/categories.js';
import { getFeaturedProducts } from '../data/products.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { TESTIMONIALS } from '../data/story.js';
import { renderBoxVisualizer, initBoxVisualizer } from '../components/InteractiveBoxVisualizer.js';
import { cart } from '../state/cartState.js';

export function renderHomeView() {
  const featured = getFeaturedProducts();

  return `
    <div class="space-y-24 sm:space-y-32">
      
      <!-- ========================================== -->
      <!-- 1. HERO SECTION WITH 3D PACKAGING VIEWER   -->
      <!-- ========================================== -->
      <section class="relative pt-12 pb-8 sm:pt-20 sm:pb-16 overflow-hidden">
        <!-- Ambient background gradient -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-amber-100/30 to-stone-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Headline & Value Prop (6 cols) -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 border border-emerald-900/20 text-xs font-bold tracking-wide">
                <span class="w-2 h-2 rounded-full bg-emerald-700 animate-ping"></span>
                <span>Zero Single-Use Plastics • 100% Repulpable</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1] font-serif">
                Bespoke Sustainable Packaging <span class="italic text-emerald-900 font-serif">Engineered</span> for Modern Brands.
              </h1>

              <p class="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Replace plastic polybags, foam peanuts, and toxic laminations with high-performance FSC®-certified corrugated cardboard, rigid setup boxes, and food-grade aqueous barriers.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#products" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-900 hover:bg-emerald-800 active:scale-[0.99] text-white font-bold text-sm shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 group">
                  <span>Explore Product Catalog</span>
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                <a href="#quote" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2">
                  <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>Build Custom CAD Quote</span>
                </a>
              </div>

              <!-- Trust Stats Row -->
              <div class="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span class="block text-xl sm:text-2xl font-black text-stone-900">2,400+</span>
                  <span class="text-xs text-stone-500 font-medium">Brands Powered</span>
                </div>
                <div>
                  <span class="block text-xl sm:text-2xl font-black text-stone-900">0%</span>
                  <span class="text-xs text-stone-500 font-medium">Fossil Plastic Used</span>
                </div>
                <div>
                  <span class="block text-xl sm:text-2xl font-black text-stone-900">48h</span>
                  <span class="text-xs text-stone-500 font-medium">CAD Prototyping</span>
                </div>
              </div>
            </div>

            <!-- Right Interactive 3D Packaging Visualizer (6 cols) -->
            <div class="lg:col-span-6">
              ${renderBoxVisualizer()}
            </div>

          </div>
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 2. EXPLORE CATEGORIES GRID                 -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-2">Architectural Systems</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
            Packaging Engineered by Industry
          </h2>
          <p class="text-stone-600 text-sm mt-3">
            Every category utilizes certified sustainable pulp, water-soluble starch adhesives, and zero synthetic plastic films.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${CATEGORIES.map(cat => `
            <div class="group relative rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-700/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="w-12 h-12 rounded-2xl bg-stone-100 group-hover:bg-emerald-900 group-hover:text-white transition-colors flex items-center justify-center text-2xl shadow-xs">
                    ${cat.id === 'food' ? '🍕' : cat.id === 'luxury' ? '✨' : cat.id === 'shipping' ? '📦' : '🛍️'}
                  </span>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                    ${cat.itemCount} Styles
                  </span>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                    ${cat.name}
                  </h3>
                  <p class="text-xs text-stone-500 mt-2 leading-relaxed">
                    ${cat.description}
                  </p>
                </div>
              </div>

              <div class="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  ${cat.highlight}
                </span>
                <a href="#products?category=${cat.id}" class="text-xs font-bold text-stone-900 group-hover:text-emerald-800 flex items-center gap-1">
                  <span>View All</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 3. FEATURED PRODUCTS SHOWCASE               -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-1">Stock & Custom Formats</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
              Featured Packaging Solutions
            </h2>
          </div>
          <a href="#products" class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors">
            <span>Explore All 19 Products</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featured.slice(0, 6).map(prod => `
            <div class="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-800/30 transition-all duration-300 flex flex-col justify-between group">
              
              <!-- Visual Card Header -->
              <div class="relative bg-gradient-to-b from-stone-50 to-stone-100/60 p-6 flex items-center justify-center h-64 border-b border-stone-100 overflow-hidden">
                <span class="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-full shadow-xs">
                  ${prod.badge || 'FSC® Certified'}
                </span>
                
                <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  ${getProductSvg(prod.svgType, 'card')}
                </div>

                <!-- Hover Quick View Action Button -->
                <button data-quickview-id="${prod.id}" class="btn-trigger-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-700 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Quick View</span>
                </button>
              </div>

              <!-- Product Details Body -->
              <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span class="uppercase tracking-wider font-semibold text-emerald-900">${prod.categoryName}</span>
                    <span>MOQ: ${prod.moq} pcs</span>
                  </div>
                  <h3 class="text-base font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    <a href="#product/${prod.id}">${prod.name}</a>
                  </h3>
                  <p class="text-xs text-stone-500 mt-1 line-clamp-2">${prod.subtitle}</p>
                </div>

                <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span class="text-xs text-stone-400 block -mb-0.5">Starting at</span>
                    <span class="text-lg font-black text-stone-900">$${prod.price.toFixed(2)}</span>
                    <span class="text-xs text-stone-500">/ ${prod.unit}</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <button data-add-quick-id="${prod.id}" class="btn-card-quick-add px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5" title="Add Minimum Order to Cart">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                      <span>Add</span>
                    </button>
                    <a href="#product/${prod.id}" class="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-colors" title="View Full Specs">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 4. ECO-CREDENTIALS COUNTER & STATISTICS     -->
      <!-- ========================================== -->
      <section class="bg-emerald-950 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-16 relative overflow-hidden max-w-7xl mx-auto shadow-2xl">
        <!-- Botanical pattern overlay -->
        <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block mb-2">Verified Environmental Impact</span>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            Real Metrics. Real Trees. Zero Greenwashing.
          </h2>
          <p class="text-emerald-200/80 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Every millimeter of paperboard we mill is certified by the Forest Stewardship Council®. Our closed-loop manufacturing system returns 94% of process water clean to local aquifers.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          ${SUSTAINABILITY_STATS.map(stat => `
            <div class="bg-emerald-900/50 border border-emerald-800/60 rounded-3xl p-6 sm:p-8 space-y-2 backdrop-blur-sm">
              <span class="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-300 font-serif tracking-tight block">
                ${stat.displayValue}
              </span>
              <h3 class="text-sm font-bold text-white">${stat.label}</h3>
              <p class="text-xs text-emerald-200/70 leading-relaxed">${stat.subtext}</p>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 5. BARRIER TECH COMPARISON SECTION         -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block">Clean Chemistry Breakthrough</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
              Why Traditional "Paper" Packaging Still Fails the Planet
            </h2>
            <p class="text-stone-600 text-sm leading-relaxed">
              Standard takeaway containers, coffee cups, and glossy cosmetic boxes are secretly lined with a microscopic film of polyethylene (PE) plastic or fluorochemical (PFAS) coatings to stop grease. This plastic layer gums up recycling pulpers, forcing 91% of them straight into municipal incinerators and landfills.
            </p>

            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 class="text-xs font-bold text-stone-900">EcoPack Aqueous Dispersion</h4>
                  <p class="text-xs text-stone-500 mt-0.5">Water-borne plant starches repel hot oil and grease. Dissolves cleanly in standard paper mill hydro-pulpers for 100% fiber recovery.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-stone-100/80 border border-stone-200">
                <div class="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center flex-shrink-0 font-bold">✗</div>
                <div>
                  <h4 class="text-xs font-bold text-stone-900">Conventional Polyethylene (PE) Lining</h4>
                  <p class="text-xs text-stone-500 mt-0.5">Petroleum plastic fused to paperboard. Rejects municipal paper sorting; takes 450+ years to degrade into microplastics.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Infographic Visual Box -->
          <div class="lg:col-span-6">
            <div class="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-800 space-y-6">
              <div class="flex items-center justify-between border-b border-stone-800 pb-4">
                <span class="text-xs font-mono text-emerald-400 font-bold">LAB SPECIFICATION #EP-2026</span>
                <span class="text-xs text-stone-400">EN 13432 Compost Standard</span>
              </div>

              <div class="space-y-4">
                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-300">Curbside Blue Bin Repulpability</span>
                    <span class="text-emerald-400 font-bold">100% (Full Grade 1 Recyclable)</span>
                  </div>
                  <div class="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-300">Soil Biodegradation Window</span>
                    <span class="text-emerald-400 font-bold">&lt; 84 Days in Backyard Soil</span>
                  </div>
                  <div class="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-300">PFAS & Heavy Metal Concentration</span>
                    <span class="text-emerald-400 font-bold">0.00 ppm (Non-Detectable)</span>
                  </div>
                  <div class="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-between">
                <span>Verified by TÜV Austria OK Compost</span>
                <a href="#about" class="text-emerald-400 hover:text-emerald-300 font-bold underline">Read Whitepaper →</a>
              </div>
            </div>
          </div>

        </div>
      </section>


      <!-- ========================================== -->
      <!-- 6. CLIENT TESTIMONIALS                     -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-2">Client Trust</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
            Loved by Fast-Growing D2C & Hospitality Leaders
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          ${TESTIMONIALS.map(t => `
            <div class="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="flex items-center gap-1 text-amber-500 text-sm">
                  ★ ★ ★ ★ ★
                </div>
                <p class="text-stone-700 text-sm sm:text-base leading-relaxed italic font-serif">
                  "${t.quote}"
                </p>
              </div>

              <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-stone-900">${t.author}</h4>
                  <p class="text-[11px] text-stone-500">${t.role} • ${t.company}</p>
                </div>
                <span class="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                  ${t.highlight}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

    </div>
  `;
}

export function initHomeView() {
  initBoxVisualizer();

  // Quick View triggers
  document.querySelectorAll('.btn-trigger-quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-quickview-id');
      window.dispatchEvent(new CustomEvent('open-quickview', { detail: { productId: id } }));
    });
  });

  // Quick Add from Home cards
  document.querySelectorAll('.btn-card-quick-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-add-quick-id');
      import('../data/products.js').then(({ getProductById }) => {
        const prod = getProductById(id);
        if (prod) {
          cart.addItem(prod, prod.moq);
        }
      });
    });
  });
}
