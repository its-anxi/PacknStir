import { CERTIFICATIONS } from '../data/categories.js';

export function renderFooter() {
  return `
    <footer class="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Newsletter & Sustainability Pledge Bar -->
        <div class="bg-stone-900/90 border border-stone-800 rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div class="lg:col-span-7 space-y-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                🌱 The Circular Packaging Dispatch
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
                Join 2,400+ Sustainable Brand Founders
              </h3>
              <p class="text-stone-400 text-xs sm:text-sm max-w-xl">
                Get monthly deep dives on zero-plastic barrier coatings, regulatory packaging updates across the EU & North America, and $25 off your first sample order.
              </p>
            </div>

            <div class="lg:col-span-5">
              <form id="newsletter-form" class="space-y-2">
                <div class="flex flex-col sm:flex-row gap-2">
                  <input type="email" id="newsletter-email" placeholder="founder@yourbrand.com" class="flex-1 px-4 py-3 bg-stone-950 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                  <button type="submit" class="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 flex-shrink-0">
                    <span>Subscribe</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
                <div id="newsletter-msg" class="text-xs hidden text-emerald-400 font-medium"></div>
                <p class="text-[11px] text-stone-500">We respect your inbox. Unsubscribe anytime with one click.</p>
              </form>
            </div>
          </div>
        </div>

        <!-- Trust Certifications Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-12 mb-12 border-b border-stone-800/80">
          ${CERTIFICATIONS.map(cert => `
            <div class="p-4 rounded-2xl bg-stone-900/40 border border-stone-800/60 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold text-emerald-400 block">${cert.name}</span>
                <span class="text-[10px] font-mono text-stone-500 block mb-1">${cert.code}</span>
                <p class="text-[11px] text-stone-400 leading-tight">${cert.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Main Footer Links Columns -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          
          <!-- Column 1: Brand Info (2 cols) -->
          <div class="col-span-2 space-y-4 pr-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
              </div>
              <span class="font-extrabold text-xl text-white font-serif">EcoPack <span class="text-emerald-400 font-sans">Studio</span></span>
            </div>
            <p class="text-xs text-stone-400 max-w-sm leading-relaxed">
              Pioneering circular paper, micro-flute corrugated, and rigid cardboard packaging for forward-thinking food, retail, luxury, and e-commerce brands. Zero single-use plastics, always.
            </p>
            <div class="text-xs text-stone-500 space-y-1">
              <div>📍 Innovation HQ: 482 Greenleaf Way, Portland, OR 97201</div>
              <div>⚡ Powered 100% by rooftop solar arrays & closed-loop water systems</div>
            </div>
          </div>

          <!-- Column 2: Packaging Catalog -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Product Catalog</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#products?category=food" class="hover:text-emerald-400 transition-colors">Micro-Flute Pizza Boxes</a></li>
              <li><a href="#products?category=food" class="hover:text-emerald-400 transition-colors">Leak-Proof Takeaway Containers</a></li>
              <li><a href="#products?category=luxury" class="hover:text-emerald-400 transition-colors">Magnetic Rigid Setup Boxes</a></li>
              <li><a href="#products?category=shipping" class="hover:text-emerald-400 transition-colors">Roll-End Tuck Front Mailers</a></li>
              <li><a href="#products?category=shipping" class="hover:text-emerald-400 transition-colors">Honeycomb Padded Mailers</a></li>
              <li><a href="#products?category=bags" class="hover:text-emerald-400 transition-colors">Boutique Twisted Paper Bags</a></li>
            </ul>
          </div>

          <!-- Column 3: Sustainability & Science -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Sustainability</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">PFAS-Free Aqueous Coatings</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Zero-Plastic Honeycomb Mesh</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">FSC® Forest Stewardship</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Soy & Algae-Based Inks</a></li>
              <li><a href="#story" class="hover:text-emerald-400 transition-colors">Solar Facility Tour</a></li>
            </ul>
          </div>

          <!-- Column 4: Studio & B2B -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Custom & B2B</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Bespoke CAD Configurator</a></li>
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Free Unprinted CAD Samples</a></li>
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Wholesale & Enterprise Supply</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Artwork & Dieline Guidelines</a></li>
              <li><a href="#story" class="hover:text-emerald-400 transition-colors">Our Founding Story</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 EcoPack Studio Inc. All rights reserved. 100% Repulpable & Compostable Packaging.</p>
          <div class="flex items-center gap-6">
            <a href="#about" class="hover:text-stone-300">Privacy Policy</a>
            <a href="#about" class="hover:text-stone-300">Terms of Supply</a>
            <a href="#about" class="hover:text-stone-300">Chain of Custody Certificate</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

export function initFooter() {
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-msg');
  const input = document.getElementById('newsletter-email');

  if (form && msg && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value;
      if (!email) return;

      msg.classList.remove('hidden');
      msg.textContent = '🎉 Welcome to the circular packaging movement! Check your inbox for your $25 sample code.';
      input.value = '';
    });
  }
}
