import { TIMELINE_MILESTONES } from '../data/story.js';

export function renderContactQuoteView() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-20 bg-white">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800/60">
          📐 Bespoke Packaging Lab
        </span>
        <h1 class="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight font-serif">
          Custom Dimensions & CAD Prototyping
        </h1>
        <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
          Need custom length, width, and depth ($L \times W \times D$)? Configure your exact structural packaging requirements below. Receive an instant estimate and a custom CAD dieline within 24 hours.
        </p>
      </div>

      <!-- Split Layout: Contact Info & Mission (Left) vs Interactive Configurator (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Studio Info, Engineer Contact & Timeline Highlights (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Direct Studio Info Box -->
          <div class="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border-2 border-[#EBDDC8] shadow-xs space-y-6">
            <h3 class="text-xl font-bold text-stone-950 font-serif">PackNStir Engineering Lab</h3>
            
            <div class="space-y-4 text-xs text-stone-600">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Innovation HQ & Mill:</span>
                  <span>482 Greenleaf Way, Suite 100, Portland, OR 97201</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Engineering Inquiries:</span>
                  <span>cad@packnstir.com</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Phone Line:</span>
                  <span>+1 (800) 419-STIR (Mon - Fri, 8am - 6pm PST)</span>
                </div>
              </div>
            </div>

            <!-- Speak with a Packaging Engineer Badge -->
            <div class="p-4 bg-emerald-950 text-emerald-200 rounded-2xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-emerald-800 text-white font-black flex items-center justify-center text-xs flex-shrink-0">
                PNS
              </div>
              <div class="text-xs">
                <span class="font-bold text-white block">Dedicated Structural Engineer</span>
                <span>Assigned to review every custom submission within 4 business hours.</span>
              </div>
            </div>
          </div>

          <!-- Mission Timeline Highlights -->
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-stone-950 font-serif">Our Zero-Plastic Mission Milestones</h3>
            <div class="space-y-3">
              ${TIMELINE_MILESTONES.slice(0, 3).map(m => `
                <div class="p-4 rounded-2xl bg-[#FBF8F3] border border-[#EBDDC8] text-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-emerald-900 font-serif">${m.year}</span>
                    <span class="text-[10px] font-bold text-stone-500 uppercase tracking-wider">${m.tag}</span>
                  </div>
                  <h4 class="font-bold text-stone-900">${m.title}</h4>
                  <p class="text-stone-600 leading-snug">${m.headline}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Right: Interactive Custom Quote Estimator (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border-2 border-[#EBDDC8] shadow-sm space-y-8">
          
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-800">Bespoke Estimator</span>
              <span class="text-xs font-mono text-stone-400">Step 1 of 4</span>
            </div>
            <h3 class="text-2xl font-black text-stone-950 font-serif">
              Configure Custom Specifications
            </h3>
          </div>

          <form id="custom-quote-form" class="space-y-6">
            
            <!-- STEP 1: Box Type Selection -->
            <div class="space-y-3">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. Select Packaging Architecture *
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <label class="quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50 cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="single-wall" checked class="hidden" />
                  <span class="text-xl">📦</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Single Wall Carton</span>
                  <span class="text-[10px] text-stone-500">B-Flute 125# Test</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="double-wall" class="hidden" />
                  <span class="text-xl">📦</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Double Wall Box</span>
                  <span class="text-[10px] text-stone-500">Heavy duty 275# 48 ECT</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="postal-mailer" class="hidden" />
                  <span class="text-xl">✉️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Die-Cut Mailer</span>
                  <span class="text-[10px] text-stone-500">Roll-end tuck front</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="takeaway-box" class="hidden" />
                  <span class="text-xl">🥗</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Takeaway / Food</span>
                  <span class="text-[10px] text-stone-500">Aqueous barrier coated</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="crash-lock" class="hidden" />
                  <span class="text-xl">⚡</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Crash-Lock Base</span>
                  <span class="text-[10px] text-stone-500">Auto instant assembly</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="custom-dieline" class="hidden" />
                  <span class="text-xl">📐</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Custom Geometry</span>
                  <span class="text-[10px] text-stone-500">Bespoke laser CAD dieline</span>
                </label>
              </div>
            </div>

            <!-- STEP 2: Custom Dimensions (LxWxD) -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                2. Interior Dimensions: Length × Width × Depth (LxWxD in mm) *
              </label>
              
              <div class="grid grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Length (mm)</label>
                  <input type="number" id="dim-length" value="300" min="50" max="1200" class="w-full text-xs font-bold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Width (mm)</label>
                  <input type="number" id="dim-width" value="200" min="50" max="1000" class="w-full text-xs font-bold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Depth (mm)</label>
                  <input type="number" id="dim-depth" value="100" min="20" max="800" class="w-full text-xs font-bold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Material Substrate</label>
                  <select id="quote-select-material" class="w-full text-xs font-semibold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="kraft-b">Natural Recycled Kraft (Single Wall B-Flute)</option>
                    <option value="kraft-bc">Heavy-Duty Double Wall (B/C Flute)</option>
                    <option value="kraft-e">Micro-Flute E-Flute (High Print Definition)</option>
                    <option value="bagasse">Thermoformed Sugarcane Bagasse Pulp</option>
                    <option value="white-sbs">FSC® Solid Bleached Sulfate White Paperboard</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Printing & Inks</label>
                  <select id="quote-select-print" class="w-full text-xs font-semibold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="unprinted">Raw Natural (Unprinted)</option>
                    <option value="1color">1-Color Flexo Plant Soy Ink</option>
                    <option value="cmyk-ext">Full Exterior CMYK Soy Inks</option>
                    <option value="cmyk-both">Full Exterior & Interior CMYK Print</option>
                    <option value="foil">Metallic Foil Stamping (Gold/Copper)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- STEP 3: Quantity Slider -->
            <div class="space-y-3 pt-2">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  3. Order Quantity: <span id="quote-qty-display" class="text-emerald-900 font-black text-sm">2,500 units</span>
                </label>
                <span class="text-xs text-stone-500 font-semibold" id="quote-moq-notice">Standard Commercial Run</span>
              </div>
              <input type="range" id="quote-qty-slider" min="250" max="25000" step="250" value="2500" class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800" />
              <div class="flex justify-between text-[10px] text-stone-400 font-mono">
                <span>250 (MOQ)</span>
                <span>2,500 (Best Value)</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            <!-- STEP 4: Artwork Upload & Contact Details -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                4. Upload Artwork File & Contact
              </label>

              <!-- Drag & Drop File Upload Box -->
              <div id="drop-zone" class="border-2 border-dashed border-[#DEC6A6] hover:border-emerald-700 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-[#FAF8F5]">
                <input type="file" id="artwork-file-input" class="hidden" accept=".ai,.pdf,.eps,.psd,.svg,.png" />
                <div class="w-10 h-10 rounded-xl bg-white border border-[#EBDDC8] text-stone-600 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                </div>
                <div class="text-xs font-bold text-stone-800" id="file-upload-title">Drop your dieline or vector logo here</div>
                <div class="text-[11px] text-stone-500 mt-0.5">Supports .AI, .PDF, .EPS, .SVG (Up to 50MB)</div>
              </div>

              <!-- Contact Inputs -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <input type="text" id="quote-name" placeholder="Contact Name *" class="w-full text-xs px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <input type="email" id="quote-email" placeholder="Business Email *" class="w-full text-xs px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
              </div>
              <div>
                <textarea id="quote-notes" rows="2" placeholder="Specific requirements (e.g., tear strip, food contact oil rating, target budget)..." class="w-full text-xs p-3 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"></textarea>
              </div>
            </div>

            <!-- Price Preview Callout -->
            <div class="p-6 bg-[#1E3A2F] text-white rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <span class="text-[10px] text-emerald-300 uppercase font-mono font-bold block">Estimated Unit Price</span>
                <span id="est-unit-price" class="text-2xl sm:text-3xl font-black text-white">$0.48 - $0.56</span>
                <span class="text-xs text-emerald-100/70 block mt-0.5">Estimated Total: <span id="est-total-cost" class="font-bold text-emerald-300">$1,200.00</span></span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-emerald-950 bg-emerald-300 px-2.5 py-1 rounded-full font-bold">CAD Proof in 24h</span>
              </div>
            </div>

            <!-- Submit Button (Green CTA) -->
            <button type="submit" id="btn-submit-quote" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-sm rounded-2xl shadow-xl shadow-emerald-950/25 transition-all flex items-center justify-center gap-2">
              <span id="btn-quote-text">Submit Bespoke CAD Request</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>

            <!-- Success Notification -->
            <div id="quote-success-banner" class="hidden p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 text-xs space-y-1">
              <p class="font-bold">✓ Quote Request Received! Reference: <span id="quote-ref-id" class="font-mono font-black">#PNS-CAD-74291</span></p>
              <p>Our structural packaging engineer has been assigned to your file and will reply with a 3D digital PDF proof and formal quotation within 4 hours.</p>
            </div>

          </form>

        </div>

      </div>

    </div>
  `;
}

export function initContactQuoteView() {
  const form = document.getElementById('custom-quote-form');
  const slider = document.getElementById('quote-qty-slider');
  const qtyDisplay = document.getElementById('quote-qty-display');
  const estUnitPrice = document.getElementById('est-unit-price');
  const estTotalCost = document.getElementById('est-total-cost');
  const materialSelect = document.getElementById('quote-select-material');
  const printSelect = document.getElementById('quote-select-print');
  const successBanner = document.getElementById('quote-success-banner');
  const quoteRefId = document.getElementById('quote-ref-id');
  const btnSubmit = document.getElementById('btn-submit-quote');

  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('artwork-file-input');
  const fileTitle = document.getElementById('file-upload-title');

  const styleCards = document.querySelectorAll('.quote-style-card');

  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => {
        c.className = 'quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all';
      });
      card.className = 'quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50 cursor-pointer flex flex-col justify-between transition-all';
      updatePriceEstimate();
    });
  });

  function updatePriceEstimate() {
    if (!slider) return;
    const qty = parseInt(slider.value);
    if (qtyDisplay) qtyDisplay.textContent = `${qty.toLocaleString()} units`;

    let basePrice = 0.95;
    if (qty >= 1000) basePrice = 0.68;
    if (qty >= 2500) basePrice = 0.48;
    if (qty >= 5000) basePrice = 0.38;
    if (qty >= 10000) basePrice = 0.28;

    const printVal = printSelect ? printSelect.value : 'unprinted';
    if (printVal === '1color') basePrice += 0.06;
    if (printVal === 'cmyk-ext') basePrice += 0.14;
    if (printVal === 'cmyk-both') basePrice += 0.24;
    if (printVal === 'foil') basePrice += 0.30;

    const low = (basePrice * 0.94).toFixed(2);
    const high = (basePrice * 1.10).toFixed(2);
    const totalEst = (basePrice * qty).toFixed(2);

    if (estUnitPrice) estUnitPrice.textContent = `$${low} - $${high}`;
    if (estTotalCost) estTotalCost.textContent = `$${Number(totalEst).toLocaleString()}`;
  }

  if (slider) slider.addEventListener('input', updatePriceEstimate);
  if (materialSelect) materialSelect.addEventListener('change', updatePriceEstimate);
  if (printSelect) printSelect.addEventListener('change', updatePriceEstimate);

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        fileTitle.textContent = `Attached: ${e.target.files[0].name} (${(e.target.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
        dropZone.classList.add('border-emerald-600', 'bg-emerald-50');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'PNS-CAD-' + Math.floor(10000 + Math.random() * 90000);
      if (quoteRefId) quoteRefId.textContent = '#' + ref;
      if (successBanner) successBanner.classList.remove('hidden');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'CAD Request Submitted ✓';
        btnSubmit.classList.add('bg-stone-600');
      }
    });
  }

  updatePriceEstimate();
}
