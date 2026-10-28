import { MATERIALS_GUIDE } from '../data/story.js';
import { CERTIFICATIONS } from '../data/categories.js';

export function renderAboutView() {
  return `
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 space-y-20">
        
        <!-- Mission Hero -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            🌱 Zero-Plastic Manifesto
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif">
            Engineered for Beauty. Made to Disappear.
          </h1>
          <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
            At <strong class="text-stone-900 font-semibold">PackNStir</strong>, we believe packaging should never outlive the product it protects. Our mission is to permanently eliminate single-use plastics from global commerce by creating architectural, repulpable paperboard, molded fiber, and sugarcane packaging that decomposes back into nutrient-rich soil.
          </p>
          <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a href="#showcase" class="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2">
              <span>Explore The Eco-Heritage Showcase (46 Products)</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="#quote" class="px-5 py-2.5 bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold text-xs rounded-xl border border-[#DEC6A6] transition-all">
              Request Custom CAD Prototype
            </a>
          </div>
        </div>

        <!-- Core Commitments Pillar Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EBDDC8] shadow-sm space-y-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 class="text-lg font-bold text-stone-900 font-serif">Zero Synthetic Plastics</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              We do not manufacture or sell packaging with polyethylene (PE) linings, petroleum bubble wrap, polyvinyl chloride (PVC), or EVA foam cavities. Every liner, window, and adhesive is derived from plant cellulose, tree resin, or corn starches.
            </p>
          </div>

          <div class="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EBDDC8] shadow-sm space-y-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 class="text-lg font-bold text-stone-900 font-serif">Closed-Loop Agroforestry</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              100% of our virgin fiber is harvested from certified FSC® replenishing plantations where 3 saplings are planted for every mature tree harvested. Over 70% of our corrugated fluting comes from post-consumer recycled cardboard.
            </p>
          </div>

          <div class="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EBDDC8] shadow-sm space-y-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 class="text-lg font-bold text-stone-900 font-serif">Architectural Craftsmanship</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              Sustainability without luxury is a compromise modern brands shouldn't have to make. We engineer crisp mitered v-grooves, satisfying magnetic snaps, and buttery soft-touch tactile varnishes that rival traditional luxury packaging.
            </p>
          </div>
        </div>

        <!-- Circular Life Cycle Diagram -->
        <div class="bg-stone-950 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-14 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div class="max-w-2xl mb-12">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block mb-2">The Closed-Loop Model</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold font-serif">From Forest Canopy to Soil Nutrient</h2>
            <p class="text-stone-400 text-xs sm:text-sm mt-3">
              How PackNStir's circular supply chain ensures zero landfill footprint at every touchpoint.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 01</span>
              <h4 class="text-sm font-bold text-white">Responsible Agroforestry</h4>
              <p class="text-[11px] text-stone-400">Certified FSC-managed forests capture carbon while supplying replenishing pine and birch pulp.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 02</span>
              <h4 class="text-sm font-bold text-white">Solar-Powered Milling</h4>
              <p class="text-[11px] text-stone-400">Pulp processed using closed-loop water treatment that recycles 94% of water and runs on 100% rooftop solar.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 03</span>
              <h4 class="text-sm font-bold text-white">Aqueous Coating & Soy Inks</h4>
              <p class="text-[11px] text-stone-400">Water-borne dispersion barriers replace plastic laminates; printed with heavy-metal-free vegetable soy inks.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 04</span>
              <h4 class="text-sm font-bold text-white">Brand Experience</h4>
              <p class="text-[11px] text-stone-400">Delivers an extraordinary sensory unboxing moment with structural integrity and zero plastic waste guilt.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 05</span>
              <h4 class="text-sm font-bold text-white">Curbside Repulping</h4>
              <p class="text-[11px] text-stone-400">Customers toss box directly into paper recycling or home compost. Returns to soil nutrients in &lt; 90 days.</p>
            </div>
          </div>
        </div>

        <!-- Materials Deep Dive Guide -->
        <div class="space-y-8">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-1">Materials Science</span>
            <h2 class="text-3xl font-extrabold text-stone-900 font-serif">Comprehensive Sustainable Materials Guide</h2>
            <p class="text-stone-600 text-xs sm:text-sm mt-2">
              Understanding the physical properties, GSM calipers, and environmental classifications of our packaging substrates.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${MATERIALS_GUIDE.map(mat => `
              <div class="p-6 bg-[#FAF8F5] rounded-3xl border border-[#EBDDC8] shadow-sm space-y-3">
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ${mat.gsmRange}
                </span>
                <h3 class="text-base font-bold text-stone-900">${mat.name}</h3>
                <p class="text-xs text-stone-500 leading-relaxed">${mat.description}</p>
                
                <div class="pt-3 border-t border-[#EBDDC8] text-[11px] space-y-1">
                  <div><span class="font-bold text-stone-700">Ideal For:</span> <span class="text-stone-600">${mat.useCase}</span></div>
                  <div><span class="font-bold text-stone-700">Disposal:</span> <span class="text-emerald-800 font-semibold">${mat.sustainability}</span></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Certifications Matrix -->
        <div class="bg-[#F6EFE3] rounded-3xl p-8 sm:p-12 border border-[#DEC6A6] text-center space-y-6">
          <h3 class="text-xl sm:text-2xl font-bold text-stone-900 font-serif">Third-Party Environmental Verifications</h3>
          <p class="text-xs text-stone-600 max-w-xl mx-auto">
            We submit all paper grades, inks, and adhesives for strict independent laboratory analysis against international packaging benchmarks.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            ${CERTIFICATIONS.map(c => `
              <div class="p-4 bg-white rounded-2xl border border-[#EBDDC8] shadow-xs">
                <span class="text-xs font-bold text-emerald-900 block">${c.name}</span>
                <span class="text-[10px] font-mono text-stone-400 block mb-1">${c.code}</span>
                <p class="text-[11px] text-stone-500 leading-snug">${c.description}</p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initAboutView() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
