import { HOME_FEATURED_CATEGORIES, SUSTAINABILITY_STATS } from '../data/categories.js';
import { getFeaturedProducts } from '../data/products.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { TESTIMONIALS } from '../data/story.js';
import { renderBoxVisualizer, initBoxVisualizer } from '../components/InteractiveBoxVisualizer.js';
import { cart } from '../state/cartState.js';

export function renderHomeView() {
  const featured = getFeaturedProducts();

  return `
    <div class="space-y-24 sm:space-y-32 bg-white">
      
      <!-- ========================================== -->
      <!-- 1. HERO SECTION: CLEAN WHITE & GREEN CTA   -->
      <!-- ========================================== -->
      <section class="relative pt-12 pb-12 sm:pt-20 sm:pb-20 overflow-hidden bg-white">
        <!-- Floating subtle kraft background aura -->
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#F6EFE3]/50 via-emerald-50/40 to-[#FAF8F5] rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Headline & Value Prop (6 cols) -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-950 border border-emerald-300 text-xs font-black tracking-wide shadow-2xs">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
                <span>Zero Single-Use Plastics • 100% Natural Packaging</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-[1.08] font-serif">
                Zero-Plastic Packaging <br/>
                <span class="italic text-emerald-800 font-serif">Engineered</span> to Dissolve Back to Earth.
              </h1>

              <p class="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                PackNStir replaces synthetic bubble wrap, poly mailers, and plastic takeaway linings with 100% repulpable single/double-wall corrugated cartons, sugarcane bagasse, and water-activated gummed paper.
              </p>

              <!-- Green CTAs -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#eco-impact" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-extrabold text-sm shadow-xl shadow-emerald-950/25 transition-all flex items-center justify-center gap-2.5 group cursor-pointer">
                  <span>🌍 Eco-System & Global Warming (46 Formats)</span>
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                
                <a href="#shop" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#F6EFE3] hover:bg-[#EBDDC8] border border-[#DEC6A6] text-stone-900 font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2">
                  <span>Shop 46 Products</span>
                </a>
              </div>

              <!-- Trust Stats Row -->
              <div class="pt-6 border-t border-[#EBDDC8] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span class="block text-2xl sm:text-3xl font-black text-emerald-950 font-serif">0%</span>
                  <span class="text-xs text-stone-500 font-bold uppercase tracking-wider">Plastic Content</span>
                </div>
                <div>
                  <span class="block text-2xl sm:text-3xl font-black text-emerald-950 font-serif">46+</span>
                  <span class="text-xs text-stone-500 font-bold uppercase tracking-wider">Circular Formats</span>
                </div>
                <div>
                  <span class="block text-2xl sm:text-3xl font-black text-emerald-950 font-serif">&lt; 90d</span>
                  <span class="text-xs text-stone-500 font-bold uppercase tracking-wider">Compost Cycle</span>
                </div>
              </div>
            </div>

            <!-- Right: Interactive Floating 3D Packaging Visualizer (6 cols) -->
            <div class="lg:col-span-6">
              ${renderBoxVisualizer()}
            </div>

          </div>
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 2. FOUR SPECIFIED CATEGORIES GRID          -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-black tracking-widest text-emerald-800 block mb-2">Engineered by Material Architecture</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
            Essential Sustainable Categories
          </h2>
          <p class="text-stone-600 text-sm mt-3">
            Pure plant fibers, starch molecular adhesives, and food-grade aqueous barrier coatings.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${HOME_FEATURED_CATEGORIES.map(cat => `
            <a href="${cat.link}" class="group rounded-3xl bg-[#FAF8F5] border-2 border-[#EBDDC8] p-7 shadow-xs hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="w-14 h-14 rounded-2xl bg-white border border-[#EBDDC8] group-hover:bg-emerald-900 group-hover:text-white transition-all flex items-center justify-center text-3xl shadow-xs">
                    ${cat.icon}
                  </span>
                  <span class="text-[10px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full">
                    ${cat.items}
                  </span>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-stone-950 group-hover:text-emerald-900 transition-colors font-serif">
                    ${cat.title}
                  </h3>
                  <p class="text-xs font-semibold text-emerald-800 mt-1">${cat.subtitle}</p>
                  <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                    ${cat.desc}
                  </p>
                </div>
              </div>

              <div class="pt-6 mt-6 border-t border-[#EBDDC8] flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                <span>View Formats</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- 2.5 DEDICATED ECOSYSTEM & GLOBAL WARMING MASTER DIRECTORY BANNER -->
      <!-- =============================================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#FAF8F5] via-[#F6EFE3] to-[#EBDDC8] p-8 sm:p-12 border-2 border-[#DEC6A6] shadow-md relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-8 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-[11px] font-bold border border-emerald-800">
                <span>🌍 Dedicated Master Archive</span>
              </div>
              <h2 class="text-2xl sm:text-4xl font-black text-stone-950 font-serif leading-tight">
                How Our Packaging Protects Earth's Ecosystems & Fights Global Warming
              </h2>
              <p class="text-stone-700 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                Every single product in our <strong>46-item catalog</strong> has been scientifically analyzed and documented. Explore the material origins of each packaging archetype, learn how it shields oceans and topsoil from toxic microplastics, and inspect its net CO₂e carbon reduction.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div class="p-3 bg-white/90 rounded-2xl border border-[#DEC6A6]">
                  <span class="text-xs font-black text-emerald-900 block">📜 Material History</span>
                  <span class="text-[11px] text-stone-600 block mt-0.5">Origins, inventions & timber replacement</span>
                </div>
                <div class="p-3 bg-white/90 rounded-2xl border border-[#DEC6A6]">
                  <span class="text-xs font-black text-emerald-900 block">🌊 Ocean & Soil Biomes</span>
                  <span class="text-[11px] text-stone-600 block mt-0.5">0% microplastics; non-toxic biodegradation</span>
                </div>
                <div class="p-3 bg-white/90 rounded-2xl border border-[#DEC6A6]">
                  <span class="text-xs font-black text-emerald-900 block">🌡️ Global Warming Reducer</span>
                  <span class="text-[11px] text-stone-600 block mt-0.5">Up to -78% carbon emissions vs plastic</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3">
              <a href="#eco-impact" class="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-extrabold text-xs shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 text-center group cursor-pointer">
                <span>Explore Eco-System & Global Warming (46 Formats)</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <span class="text-[11px] text-stone-500 font-medium">Free open-access environmental dataset</span>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================== -->
      <!-- 3. ANIMATED ECO-CREDENTIALS SECTION        -->
      <!-- ========================================== -->
      <section class="bg-[#1E3A2F] text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-16 relative overflow-hidden max-w-7xl mx-auto shadow-2xl">
        <div class="relative z-10 max-w-3xl mb-12">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-300 block mb-2">Verified Circular Credentials</span>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            0% Fossil Plastic. 100% Compostable.
          </h2>
          <p class="text-emerald-100/80 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Every fiber harvested carries full Forest Stewardship Council® chain-of-custody tracking. Certified by TÜV Austria for non-toxic backyard compost decomposition.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          ${SUSTAINABILITY_STATS.map(stat => `
            <div class="bg-emerald-900/40 border border-emerald-700/50 rounded-3xl p-6 sm:p-8 space-y-2 backdrop-blur-sm">
              <span class="text-4xl sm:text-5xl font-black text-emerald-300 font-serif tracking-tight block">
                ${stat.displayValue}
              </span>
              <h3 class="text-sm font-bold text-white">${stat.label}</h3>
              <p class="text-xs text-emerald-200/75 leading-relaxed">${stat.subtext}</p>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 4. HIGHLIGHTS & FEATURED PRODUCTS          -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span class="text-xs uppercase font-black tracking-widest text-emerald-800 block mb-1">Sustainable Stock Items</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
              Flagship Packaging Solutions
            </h2>
          </div>
          <a href="#showcase" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors">
            <span>Explore All 46 in The Eco-Showcase</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featured.slice(0, 6).map(prod => `
            <div class="bg-white rounded-3xl border-2 border-[#EBDDC8] overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between group">
              
              <!-- Card Visual Header -->
              <div class="relative bg-gradient-to-b from-[#FBF8F3] to-[#F4EFE6] p-6 flex items-center justify-center h-64 border-b border-[#EBDDC8] overflow-hidden">
                <span class="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full shadow-xs">
                  ${prod.badge || 'FSC® Certified'}
                </span>
                
                <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  ${getProductSvg(prod.svgType, 'card')}
                </div>

                <!-- Quick View Trigger -->
                <button data-quickview-id="${prod.id}" class="btn-trigger-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-800 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Quick View</span>
                </button>
              </div>

              <!-- Product Details Body -->
              <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span class="uppercase tracking-wider font-bold text-emerald-900">${prod.categoryName}</span>
                    <span class="font-semibold bg-[#F6EFE3] px-2 py-0.5 rounded text-stone-800">MOQ: ${prod.moq} pcs</span>
                  </div>
                  <h3 class="text-lg font-bold text-stone-950 group-hover:text-emerald-900 transition-colors leading-snug font-serif">
                    <a href="#product/${prod.id}">${prod.name}</a>
                  </h3>
                  <p class="text-xs text-stone-600 mt-1 line-clamp-2">${prod.subtitle}</p>
                </div>

                <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span class="text-[10px] text-stone-400 block -mb-0.5">Starting at</span>
                    <span class="text-xl font-black text-stone-950">$${prod.price.toFixed(2)}</span>
                    <span class="text-xs text-stone-500">/ ${prod.unit}</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <button data-add-quick-id="${prod.id}" class="btn-card-quick-add px-4 py-2 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5" title="Add Minimum Order to Cart">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                      <span>Add</span>
                    </button>
                    <a href="#product/${prod.id}" class="p-2 text-stone-400 hover:text-stone-900 hover:bg-[#F6EFE3] rounded-xl transition-colors" title="View Full Specs">
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
      <!-- 5. CLIENT TRUST & TESTIMONIALS             -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-2">Client Trust</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
            Loved by 2,400+ Sustainable Businesses
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          ${TESTIMONIALS.map(t => `
            <div class="bg-[#FAF8F5] rounded-3xl p-8 border-2 border-[#EBDDC8] shadow-xs flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="flex items-center gap-1 text-emerald-700 text-sm">
                  ★ ★ ★ ★ ★
                </div>
                <p class="text-stone-800 text-sm sm:text-base leading-relaxed italic font-serif">
                  "${t.quote}"
                </p>
              </div>

              <div class="pt-4 border-t border-[#DEC6A6] flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-stone-900">${t.author}</h4>
                  <p class="text-[11px] text-stone-500">${t.role} • ${t.company}</p>
                </div>
                <span class="text-[11px] font-bold text-emerald-950 bg-emerald-100 px-3 py-1 rounded-full">
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
