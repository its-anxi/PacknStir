export function renderContactQuoteView() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
          📐 Bespoke Structural Engineering
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
          Request a Custom Packaging Quote
        </h1>
        <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
          Need a non-standard size, unique die-cut flap, or full interior-exterior CMYK soy printing? Configure your exact requirements below for an instant price range and digital CAD proof within 24 hours.
        </p>
      </div>

      <!-- Split Layout: Contact Info & FAQ (Left) vs Interactive Configurator (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Studio Info, Engineer Contact & FAQ (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Direct Studio Info Box -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <h3 class="text-lg font-bold text-stone-900 font-serif">Packaging Studio & Plant</h3>
            
            <div class="space-y-4 text-xs text-stone-600">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Innovation HQ & Mill:</span>
                  <span>482 Greenleaf Way, Suite 100, Portland, OR 97201</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Engineering Inquiries:</span>
                  <span>cad@ecopackstudio.com</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Phone Line:</span>
                  <span>+1 (800) 419-PACK (Mon - Fri, 8am - 6pm PST)</span>
                </div>
              </div>
            </div>

            <!-- Speak with a Packaging Engineer Badge -->
            <div class="p-4 bg-emerald-950 text-emerald-200 rounded-2xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                EP
              </div>
              <div class="text-xs">
                <span class="font-bold text-white block">Dedicated Structural Engineer</span>
                <span>Assigned to review every CAD submission within 4 business hours.</span>
              </div>
            </div>
          </div>

          <!-- Custom Quote FAQs -->
          <div class="space-y-3">
            <h4 class="text-sm font-bold text-stone-900 font-serif">Frequently Asked Questions</h4>
            
            <details class="bg-white rounded-2xl border border-stone-200 p-4 text-xs group cursor-pointer" open>
              <summary class="font-bold text-stone-900 flex justify-between items-center">
                <span>How fast do custom CAD dielines take?</span>
                <span class="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p class="mt-2 text-stone-600 leading-relaxed">
                Our CAD team turns around vector Adobe Illustrator (.ai) and PDF dieline templates within 24 hours of form submission.
              </p>
            </details>

            <details class="bg-white rounded-2xl border border-stone-200 p-4 text-xs group cursor-pointer">
              <summary class="font-bold text-stone-900 flex justify-between items-center">
                <span>Can I receive a physical prototype before ordering?</span>
                <span class="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p class="mt-2 text-stone-600 leading-relaxed">
                Yes! We cut unprinted physical CAD prototypes directly on our digital flatbed cutters and express courier them to your office in 48 hours for $25 (credited toward your production order).
              </p>
            </details>

            <details class="bg-white rounded-2xl border border-stone-200 p-4 text-xs group cursor-pointer">
              <summary class="font-bold text-stone-900 flex justify-between items-center">
                <span>What are the minimum order quantities for custom sizes?</span>
                <span class="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p class="mt-2 text-stone-600 leading-relaxed">
                Custom corrugated mailers and takeaway boxes start at only 500 units. Custom rigid setup boxes start at 250 units.
              </p>
            </details>
          </div>

        </div>

        <!-- Right: Interactive 4-Step Custom Quote Estimator (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-800">Interactive Estimator</span>
              <span class="text-xs font-mono text-stone-400">Step 1 of 4</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
              Configure Your Packaging Specification
            </h3>
          </div>

          <form id="custom-quote-form" class="space-y-6">
            
            <!-- STEP 1: Box Type Selection -->
            <div class="space-y-3">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. Select Packaging Architecture *
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <label class="quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50/50 cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="mailer" checked class="hidden" />
                  <span class="text-lg">📦</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Corrugated Mailer</span>
                  <span class="text-[10px] text-stone-500">Roll-end tuck front</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="rigid" class="hidden" />
                  <span class="text-lg">✨</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Rigid Setup Box</span>
                  <span class="text-[10px] text-stone-500">Magnetic luxury</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="food" class="hidden" />
                  <span class="text-lg">🍕</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Food / Takeaway</span>
                  <span class="text-[10px] text-stone-500">Aqueous barrier coated</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="honeycomb" class="hidden" />
                  <span class="text-lg">✉️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Padded Mailer</span>
                  <span class="text-[10px] text-stone-500">Honeycomb paper</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="bag" class="hidden" />
                  <span class="text-lg">🛍️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Paper Bag / Tote</span>
                  <span class="text-[10px] text-stone-500">Twisted handle kraft</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="custom" class="hidden" />
                  <span class="text-lg">⚙️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Custom Shape</span>
                  <span class="text-[10px] text-stone-500">Bespoke CAD dieline</span>
                </label>
              </div>
            </div>

            <!-- STEP 2: Custom Dimensions Input (Length, Width, Height) -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                2. Interior Dimensions (L × W × H) *
              </label>
              
              <div class="grid grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Length (mm)</label>
                  <input type="number" id="dim-length" value="250" min="50" max="1000" class="w-full text-xs font-bold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Width (mm)</label>
                  <input type="number" id="dim-width" value="180" min="50" max="1000" class="w-full text-xs font-bold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Depth / Height (mm)</label>
                  <input type="number" id="dim-height" value="65" min="20" max="500" class="w-full text-xs font-bold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Substrate Material & Flute</label>
                  <select id="quote-select-material" class="w-full text-xs font-semibold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="kraft-e">Recycled Natural Kraft (E-Flute 1.6mm)</option>
                    <option value="kraft-b">Heavy-Duty Kraft (B-Flute 3.0mm)</option>
                    <option value="white-e">Bleached White Liner (E-Flute 1.6mm)</option>
                    <option value="greyboard">1200 GSM Compressed Greyboard (Rigid)</option>
                    <option value="foodgrade">PFAS-Free Aqueous Food Grade Board</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Exterior & Interior Printing</label>
                  <select id="quote-select-print" class="w-full text-xs font-semibold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="unprinted">Raw Natural (Unprinted)</option>
                    <option value="1color">1-Color Flexo Soy Ink Stamp</option>
                    <option value="cmyk-ext">Full Exterior CMYK Soy Inks</option>
                    <option value="cmyk-both">Full Exterior & Interior CMYK Print</option>
                    <option value="foil">Hot-Foil Stamping (Gold/Silver/Copper)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- STEP 3: Quantity Slider -->
            <div class="space-y-3 pt-2">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  3. Order Quantity: <span id="quote-qty-display" class="text-emerald-900 font-black">2,500 units</span>
                </label>
                <span class="text-xs text-stone-500 font-semibold" id="quote-moq-notice">Volume Tier: Mid-Scale Production</span>
              </div>
              <input type="range" id="quote-qty-slider" min="500" max="25000" step="250" value="2500" class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800" />
              <div class="flex justify-between text-[10px] text-stone-400 font-mono">
                <span>500 (MOQ)</span>
                <span>2,500 (Best Value)</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            <!-- STEP 4: Artwork Upload & Contact Details -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                4. Upload Artwork / Dieline & Contact
              </label>

              <!-- Drag & Drop File Upload Box -->
              <div id="drop-zone" class="border-2 border-dashed border-stone-300 hover:border-emerald-700 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-stone-50/60">
                <input type="file" id="artwork-file-input" class="hidden" accept=".ai,.pdf,.eps,.psd,.svg,.png" />
                <div class="w-10 h-10 rounded-xl bg-stone-200/80 text-stone-600 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                </div>
                <div class="text-xs font-bold text-stone-800" id="file-upload-title">Drop your vector artwork or dieline here</div>
                <div class="text-[11px] text-stone-500 mt-0.5">Supports .AI, .PDF, .EPS, .SVG (Up to 50MB)</div>
              </div>

              <!-- Contact Inputs -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <input type="text" id="quote-name" placeholder="Your Name *" class="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <input type="email" id="quote-email" placeholder="Work Email *" class="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
              </div>
              <div>
                <textarea id="quote-notes" rows="2" placeholder="Specific notes (e.g., custom window cutout, fragile glass jar weight, timeline)..." class="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"></textarea>
              </div>
            </div>

            <!-- Real-Time Price Preview Callout -->
            <div class="p-5 bg-gradient-to-r from-emerald-950 to-stone-900 text-white rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <span class="text-[10px] text-emerald-400 uppercase font-mono font-bold block">Estimated Unit Price Range</span>
                <span id="est-unit-price" class="text-2xl font-black text-white">$0.54 - $0.62</span>
                <span class="text-xs text-stone-400 block mt-0.5">Estimated Total: <span id="est-total-cost" class="font-bold text-emerald-300">$1,350.00</span></span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-emerald-400 bg-emerald-900/60 px-2 py-1 rounded-full font-semibold">CAD Sample Ready in 48h</span>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" id="btn-submit-quote" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-sm rounded-2xl shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
              <span id="btn-quote-text">Submit Bespoke CAD Request</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>

            <!-- Success Message Notification -->
            <div id="quote-success-banner" class="hidden p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 text-xs space-y-1">
              <p class="font-bold">✓ Quote Request Received! Reference: <span id="quote-ref-id" class="font-mono font-black">#EPQ-91823</span></p>
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

  // Box style cards
  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => {
        c.className = 'quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all';
      });
      card.className = 'quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50/50 cursor-pointer flex flex-col justify-between transition-all';
      updatePriceEstimate();
    });
  });

  function updatePriceEstimate() {
    const qty = parseInt(slider.value);
    if (qtyDisplay) qtyDisplay.textContent = `${qty.toLocaleString()} units`;

    // Base calculation
    let basePrice = 1.10;
    if (qty >= 1000) basePrice = 0.82;
    if (qty >= 2500) basePrice = 0.58;
    if (qty >= 5000) basePrice = 0.44;
    if (qty >= 10000) basePrice = 0.32;

    const printVal = printSelect ? printSelect.value : 'unprinted';
    if (printVal === '1color') basePrice += 0.08;
    if (printVal === 'cmyk-ext') basePrice += 0.16;
    if (printVal === 'cmyk-both') basePrice += 0.28;
    if (printVal === 'foil') basePrice += 0.35;

    const low = (basePrice * 0.95).toFixed(2);
    const high = (basePrice * 1.12).toFixed(2);
    const totalEst = (basePrice * qty).toFixed(2);

    if (estUnitPrice) estUnitPrice.textContent = `$${low} - $${high}`;
    if (estTotalCost) estTotalCost.textContent = `$${Number(totalEst).toLocaleString()}`;
  }

  if (slider) slider.addEventListener('input', updatePriceEstimate);
  if (materialSelect) materialSelect.addEventListener('change', updatePriceEstimate);
  if (printSelect) printSelect.addEventListener('change', updatePriceEstimate);

  // File drag & drop
  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        fileTitle.textContent = `Attached: ${e.target.files[0].name} (${(e.target.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
        dropZone.classList.add('border-emerald-600', 'bg-emerald-50/50');
      }
    });
  }

  // Submit quote
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'EPQ-' + Math.floor(10000 + Math.random() * 90000);
      if (quoteRefId) quoteRefId.textContent = '#' + ref;
      if (successBanner) successBanner.classList.remove('hidden');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Quote Request Submitted ✓';
        btnSubmit.classList.add('bg-stone-600');
      }
    });
  }

  updatePriceEstimate();
}
