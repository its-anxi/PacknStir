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
                🌱 The Zero-Plastic Circular Dispatch
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
                Join 3,200+ Eco-Conscious Brand Leaders
              </h3>
              <p class="text-stone-400 text-xs sm:text-sm max-w-xl">
                Get monthly deep dives on zero-plastic barrier coatings, regulatory packaging updates across the EU & North America, and £25 off your first wholesale sample run.
              </p>
            </div>

            <div class="lg:col-span-5">
              <form id="newsletter-form" class="space-y-2">
                <div class="flex flex-col sm:flex-row gap-2">
                  <input type="email" id="newsletter-email" placeholder="founder@yourbrand.com" class="flex-1 px-4 py-3 bg-stone-950 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                  <button type="submit" class="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer">
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
              <div class="w-9 h-9 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="font-extrabold text-2xl text-white font-serif tracking-tight">Pack<span class="text-emerald-400 font-sans">N</span>Stir</span>
            </div>
            <p class="text-xs text-stone-400 max-w-sm leading-relaxed">
              Pioneering circular paper, micro-flute corrugated cardboard, compostable tableware, and zero-plastic protective packaging for retail, hospitality, and e-commerce. 100% curbside recyclable and biodegradable.
            </p>
            <div class="text-xs text-stone-500 space-y-1">
              <div>📍 Global Distribution Hub & Cleanroom Lab</div>
              <div>⚡ 100% Powered by rooftop solar arrays & closed-loop water conversion</div>
            </div>
            
            <!-- Social Links -->
            <div class="flex items-center gap-3 pt-2">
              <a href="#" aria-label="LinkedIn" class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Packaging Catalog -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Product Catalog</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#shop?category=boxes" class="hover:text-emerald-400 transition-colors">Cardboard Boxes & Cartons (9)</a></li>
              <li><a href="#shop?category=postal" class="hover:text-emerald-400 transition-colors">Postal & E-Commerce (7)</a></li>
              <li><a href="#shop?category=takeaway" class="hover:text-emerald-400 transition-colors">Sustainable Takeaway (10)</a></li>
              <li><a href="#shop?category=protective" class="hover:text-emerald-400 transition-colors">Protective Packaging (8)</a></li>
              <li><a href="#shop?category=tape-bags" class="hover:text-emerald-400 transition-colors">Tape, Bags & Strapping (12)</a></li>
              <li><a href="#shop" class="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1">Browse All 46 Products →</a></li>
            </ul>
          </div>

          <!-- Column 3: The Eco-Heritage Showcase -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">The Eco-Heritage</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#showcase" class="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Master Showcase (46 items)</a></li>
              <li><a href="#showcase#cat-boxes" class="hover:text-emerald-400 transition-colors">Corrugated Fiber Origins</a></li>
              <li><a href="#showcase#cat-takeaway" class="hover:text-emerald-400 transition-colors">Bagasse & Palm Degradation</a></li>
              <li><a href="#showcase#cat-protective" class="hover:text-emerald-400 transition-colors">Starch Peanuts & Honeycomb</a></li>
              <li><a href="#showcase#cat-tape-bags" class="hover:text-emerald-400 transition-colors">Gummed Tape Science</a></li>
            </ul>
          </div>

          <!-- Column 4: Studio & B2B -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Company & Support</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Custom CAD Quote Tool</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Zero-Plastic Mission & Vision</a></li>
              <li><a href="#story" class="hover:text-emerald-400 transition-colors">Our Founding Timeline</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Materials Science Guide</a></li>
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Free Unprinted CAD Samples</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 PackNStir Inc. All rights reserved. 100% Repulpable, Plastic-Free & Compostable Packaging.</p>
          <div class="flex items-center gap-6">
            <a href="#about" class="hover:text-stone-300">Privacy Policy</a>
            <a href="#about" class="hover:text-stone-300">Terms of Supply</a>
            <a href="#about" class="hover:text-stone-300">FSC® Chain of Custody</a>
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
      msg.textContent = '🎉 Welcome to the PackNStir circular packaging community! Check your inbox for your sample voucher.';
      input.value = '';
    });
  }
}
