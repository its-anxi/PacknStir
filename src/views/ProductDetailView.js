import { getProductById, PRODUCTS } from '../data/products.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { cart } from '../state/cartState.js';

export function renderProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center text-xs font-semibold text-stone-500 gap-2">
        <a href="#home" class="hover:text-emerald-800 transition-colors">Home</a>
        <span>/</span>
        <a href="#products" class="hover:text-emerald-800 transition-colors">Catalog</a>
        <span>/</span>
        <a href="#products?category=${product.category}" class="hover:text-emerald-800 transition-colors">${product.categoryName}</a>
        <span>/</span>
        <span class="text-stone-900 truncate max-w-xs">${product.name}</span>
      </nav>

      <!-- Main PDP Product Hero Section (Gallery + Configurator) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Gallery & Packaging Angle View Switcher (6 cols) -->
        <div class="lg:col-span-6 space-y-4">
          
          <!-- Main Visual Stage Box -->
          <div class="relative bg-gradient-to-b from-stone-50 to-stone-100/80 rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm flex items-center justify-center min-h-[380px] sm:min-h-[460px] overflow-hidden group">
            
            <!-- Top Badges -->
            <div class="absolute top-5 left-5 flex items-center gap-2 z-10">
              <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 shadow-xs">
                ${product.badge || 'FSC® Certified'}
              </span>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-stone-700 border border-stone-200 shadow-xs hidden sm:inline-block">
                ${product.coating.split('(')[0]}
              </span>
            </div>

            <!-- Visual SVG Stage with dynamic angle transitions -->
            <div id="pdp-main-stage" class="w-full h-full max-h-80 flex items-center justify-center transition-all duration-300">
              ${getProductSvg(product.svgType, 'pdp')}
            </div>

            <!-- Eco Watermark -->
            <div class="absolute bottom-4 right-4 text-[10px] text-stone-400 font-mono tracking-wider">
              100% RECYCLABLE / BIO-DEGRADABLE
            </div>
          </div>

          <!-- Angle Thumbnail Selector -->
          <div class="grid grid-cols-4 gap-3">
            <button data-view="perspective" class="pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-900">3D Angle</span>
            </button>

            <button data-view="open" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Open Box</span>
            </button>

            <button data-view="dieline" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">CAD Dieline</span>
            </button>

            <button data-view="detail" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Macro Zoom</span>
            </button>
          </div>

          <!-- Eco Badges Row -->
          <div class="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl flex flex-wrap items-center justify-between gap-2 text-xs">
            ${product.ecoBadges.map(badge => `
              <span class="flex items-center gap-1 text-emerald-950 font-bold">
                <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${badge}</span>
              </span>
            `).join('')}
          </div>

        </div>

        <!-- Right: Specifications & Interactive Configurator (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-bold uppercase tracking-widest text-emerald-900">${product.categoryName}</span>
              <span class="text-xs text-stone-400">•</span>
              <span class="text-xs text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded">Lead Time: ${product.leadTime.split('(')[0]}</span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug font-serif">
              ${product.name}
            </h1>

            <p class="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
              ${product.description}
            </p>
          </div>

          <!-- Live Tier Pricing Display -->
          <div class="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-xs text-stone-400 block -mb-1">Active Unit Price</span>
                <span id="pdp-active-unit-price" class="text-3xl font-black text-stone-900">$${product.price.toFixed(2)}</span>
                <span class="text-xs text-stone-500">/ ${product.unit}</span>
              </div>
              <div class="text-right">
                <span class="text-xs text-stone-400 block -mb-1">Estimated Line Total</span>
                <span id="pdp-active-total" class="text-xl font-extrabold text-emerald-900">$${(product.price * product.moq).toFixed(2)}</span>
              </div>
            </div>

            <!-- Tiered Pricing Matrix Table -->
            <div class="pt-3 border-t border-stone-100">
              <span class="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">Volume Tier Discounts</span>
              <div class="grid grid-cols-4 gap-2 text-center text-xs">
                ${product.pricingTiers.map((tier, idx) => `
                  <button data-tier-qty="${tier.qty}" data-tier-price="${tier.pricePerUnit}" class="btn-tier-select p-2 rounded-xl border ${idx === 1 ? 'border-emerald-800 bg-emerald-50/60 font-bold text-emerald-950' : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'} transition-all">
                    <span class="block text-[11px] font-bold">${tier.qty.toLocaleString()} pcs</span>
                    <span class="block text-xs font-black text-stone-900 mt-0.5">$${tier.pricePerUnit.toFixed(2)}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Product Customization Form -->
          <div class="space-y-4">
            
            <!-- Dimensions Selector -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5 flex items-center justify-between">
                <span>Select Dimensions & Volume</span>
                <a href="#quote" class="text-emerald-800 font-semibold hover:underline">Need Custom Sizing?</a>
              </label>
              <select id="pdp-select-size" class="w-full text-xs font-semibold px-3.5 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-stone-900">
                ${product.dimensionsAvailable.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>

            <!-- Finish & Printing Selection -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5">Surface Finish & Inks</label>
              <select id="pdp-select-finish" class="w-full text-xs font-semibold px-3.5 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-stone-900">
                ${product.finishOptions.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <!-- Quantity Stepper -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5 flex items-center justify-between">
                <span>Production Quantity (Units)</span>
                <span class="text-stone-500 font-normal">Minimum Order Quantity: ${product.moq}</span>
              </label>
              <div class="flex items-center gap-3">
                <div class="flex items-center border border-stone-200 rounded-xl bg-white overflow-hidden shadow-xs flex-1">
                  <button id="pdp-qty-minus" class="px-4 py-2.5 text-stone-600 hover:bg-stone-100 font-bold text-sm">-</button>
                  <input type="number" id="pdp-qty-input" value="${product.moq}" min="${product.moq}" step="50" class="w-full text-center text-xs font-bold py-2.5 focus:outline-none" />
                  <button id="pdp-qty-plus" class="px-4 py-2.5 text-stone-600 hover:bg-stone-100 font-bold text-sm">+</button>
                </div>
                <button id="btn-request-sample" class="px-4 py-2.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors border border-stone-200 whitespace-nowrap">
                  Request $15 Sample Kit
                </button>
              </div>
            </div>

          </div>

          <!-- Add to Cart & Quote Actions -->
          <div class="space-y-3 pt-2">
            <button id="pdp-btn-add-cart" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span id="pdp-btn-add-text">Add ${product.moq} Units to Cart</span>
            </button>

            <div class="grid grid-cols-2 gap-3">
              <a href="#quote" class="py-3 text-center bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-800 transition-colors">
                Upload Custom Artwork / CAD
              </a>
              <a href="#about" class="py-3 text-center bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-emerald-900 transition-colors">
                Download Dieline PDF (.ai)
              </a>
            </div>
          </div>

        </div>

      </div>


      <!-- ========================================== -->
      <!-- TECHNICAL SPECS, ECO IMPACT & LEAD TABS    -->
      <!-- ========================================== -->
      <div class="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 space-y-8">
        
        <!-- Tabs Header -->
        <div class="flex items-center border-b border-stone-200 gap-8 overflow-x-auto text-xs font-bold text-stone-500 pb-3">
          <button data-tab="tab-specs" class="pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap">
            Technical Engineering Specs
          </button>
          <button data-tab="tab-eco" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Sustainability & Disposal Guide
          </button>
          <button data-tab="tab-artwork" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Artwork & Dieline Guidelines
          </button>
          <button data-tab="tab-shipping" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Production & Freight Logistics
          </button>
        </div>

        <!-- TAB 1: SPECS -->
        <div id="tab-specs" class="pdp-tab-content space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Board Composition</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.material}</span>
            </div>
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Board Weight / GSM</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.boardWeight}</span>
            </div>
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Barrier Coating</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.coating}</span>
            </div>
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Standard Preset Size</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.dimensionsPreset}</span>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-700">Structural Highlights</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${product.features.map(f => `
                <div class="flex items-center gap-2.5 text-xs text-stone-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 2: ECO -->
        <div id="tab-eco" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-emerald-950 text-white rounded-2xl space-y-3">
            <h4 class="text-sm font-bold text-emerald-300">100% Curbside Repulpable Certification</h4>
            <p class="text-xs text-emerald-100/80 leading-relaxed">
              Unlike traditional packaging with laminated PE plastic or metallic foils that require industrial separation, this product can be disposed directly into residential blue paper bins. The paper fibers dissolve cleanly in commercial paper mills to become new corrugated cartons within 14 days.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div class="p-4 rounded-2xl border border-stone-200">
              <h5 class="text-xs font-bold text-stone-900 mb-1">Curbside Recycling</h5>
              <p class="text-[11px] text-stone-500">100% blue bin recyclable in North America, UK, and European Union.</p>
            </div>
            <div class="p-4 rounded-2xl border border-stone-200">
              <h5 class="text-xs font-bold text-stone-900 mb-1">Compostability</h5>
              <p class="text-[11px] text-stone-500">Disintegrates in under 90 days in commercial or backyard soil without toxicity.</p>
            </div>
            <div class="p-4 rounded-2xl border border-stone-200">
              <h5 class="text-xs font-bold text-stone-900 mb-1">Non-Toxic Inks</h5>
              <p class="text-[11px] text-stone-500">Printed with plant-based soy and algae inks free from volatile organic compounds (VOCs).</p>
            </div>
          </div>
        </div>

        <!-- TAB 3: ARTWORK -->
        <div id="tab-artwork" class="pdp-tab-content hidden space-y-4">
          <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
            <h4 class="font-bold text-stone-900">Digital Artwork File Requirements:</h4>
            <ul class="list-disc pl-5 space-y-1 text-stone-600">
              <li>Submit vector artwork in Adobe Illustrator (.AI), PDF, or EPS format.</li>
              <li>Maintain 3mm (1/8") external bleed past all dieline trim cuts.</li>
              <li>Keep all critical logos and copy 5mm inside fold crease lines.</li>
              <li>Color profile: CMYK or Pantone Solid Coated / Uncoated.</li>
              <li>Minimum text size: 6pt for positive type, 8pt for reversed knocked-out type.</li>
            </ul>
          </div>
        </div>

        <!-- TAB 4: SHIPPING -->
        <div id="tab-shipping" class="pdp-tab-content hidden space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl border border-stone-200 space-y-1">
              <span class="font-bold text-stone-900 block">Stock Blank Format</span>
              <p class="text-stone-500">Ships within 48 to 72 hours from our Portland, OR or Antwerp logistics hubs.</p>
            </div>
            <div class="p-4 rounded-2xl border border-stone-200 space-y-1">
              <span class="font-bold text-stone-900 block">Custom Printed Run</span>
              <p class="text-stone-500">Standard production time is 7-10 business days following digital proof approval.</p>
            </div>
          </div>
        </div>

      </div>


      <!-- ========================================== -->
      <!-- RELATED PACKAGING SOLUTIONS                -->
      <!-- ========================================== -->
      <div class="space-y-6 pt-6">
        <h3 class="text-xl font-bold text-stone-900 font-serif">Frequently Paired Packaging</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.category === 'shipping')).slice(0, 3).map(rel => `
            <a href="#product/${rel.id}" class="p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-700/40 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group">
              <div class="w-16 h-16 rounded-xl bg-stone-100 flex-shrink-0 p-1 flex items-center justify-center">
                ${getProductSvg(rel.svgType, 'thumb')}
              </div>
              <div>
                <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">${rel.categoryName}</span>
                <h4 class="text-xs font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-tight mt-0.5">${rel.name}</h4>
                <span class="text-xs font-black text-stone-800 mt-1 block">$${rel.price.toFixed(2)} / ${rel.unit}</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

export function initProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];

  let currentQty = product.moq;
  let currentUnitPrice = product.price;

  const qtyInput = document.getElementById('pdp-qty-input');
  const qtyMinus = document.getElementById('pdp-qty-minus');
  const qtyPlus = document.getElementById('pdp-qty-plus');
  const unitPriceEl = document.getElementById('pdp-active-unit-price');
  const totalEl = document.getElementById('pdp-active-total');
  const btnAddText = document.getElementById('pdp-btn-add-text');
  const btnAddToCart = document.getElementById('pdp-btn-add-cart');
  const sizeSelect = document.getElementById('pdp-select-size');
  const finishSelect = document.getElementById('pdp-select-finish');
  const btnSample = document.getElementById('btn-request-sample');

  function recalculatePrice() {
    // Determine unit price based on tiered pricing matrix
    let matchedTier = product.pricingTiers[0];
    for (const tier of product.pricingTiers) {
      if (currentQty >= tier.qty) {
        matchedTier = tier;
      }
    }
    currentUnitPrice = matchedTier.pricePerUnit;

    const lineTotal = currentUnitPrice * currentQty;

    if (unitPriceEl) unitPriceEl.textContent = `$${currentUnitPrice.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${lineTotal.toFixed(2)}`;
    if (btnAddText) btnAddText.textContent = `Add ${currentQty.toLocaleString()} Units to Cart • $${lineTotal.toFixed(2)}`;

    // Highlight tier button
    document.querySelectorAll('.btn-tier-select').forEach(btn => {
      const q = parseInt(btn.getAttribute('data-tier-qty'));
      if (q === matchedTier.qty) {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-emerald-800 bg-emerald-50/60 font-bold text-emerald-950 transition-all';
      } else {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 transition-all';
      }
    });
  }

  // Tier buttons click
  document.querySelectorAll('.btn-tier-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const q = parseInt(e.currentTarget.getAttribute('data-tier-qty'));
      currentQty = q;
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  });

  // Quantity Stepper
  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      currentQty = Math.max(product.moq, currentQty - 50);
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      currentQty += 50;
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener('change', (e) => {
      currentQty = Math.max(product.moq, parseInt(e.target.value) || product.moq);
      qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  // Add To Cart
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const size = sizeSelect ? sizeSelect.value : product.dimensionsPreset;
      const finish = finishSelect ? finishSelect.value : product.finishOptions[0];

      cart.addItem(product, currentQty, {
        size,
        finish,
        customPrice: currentUnitPrice
      });

      // Quick feedback toast or button animation
      if (window.gsap) {
        window.gsap.fromTo(btnAddToCart, { scale: 0.97 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
      }
    });
  }

  // Request Sample Kit
  if (btnSample) {
    btnSample.addEventListener('click', () => {
      cart.addItem({
        id: 'sample-kit-' + product.id,
        name: `Sample Kit: ${product.name}`,
        price: 15.00,
        unit: 'sample box',
        svgType: product.svgType,
        dimensionsPreset: '1-unit physical CAD mockup'
      }, 1, {
        size: 'Physical CAD Mockup',
        finish: 'Sample Swatch Book Included',
        customPrice: 15.00
      });
    });
  }

  // Angle View Selector
  const stage = document.getElementById('pdp-main-stage');
  document.querySelectorAll('.pdp-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.pdp-thumb-btn').forEach(b => {
        b.className = 'pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all';
      });
      btn.className = 'pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all';

      const view = btn.getAttribute('data-view');
      if (stage && window.gsap) {
        window.gsap.to(stage, {
          opacity: 0.2,
          scale: 0.95,
          duration: 0.2,
          onComplete: () => {
            stage.innerHTML = getProductSvg(product.svgType, view);
            window.gsap.to(stage, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.2)' });
          }
        });
      }
    });
  });

  // PDP Tabs
  document.querySelectorAll('.pdp-tab-trigger').forEach(tabBtn => {
    tabBtn.addEventListener('click', (e) => {
      document.querySelectorAll('.pdp-tab-trigger').forEach(b => {
        b.className = 'pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap';
      });
      tabBtn.className = 'pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap';

      const targetId = tabBtn.getAttribute('data-tab');
      document.querySelectorAll('.pdp-tab-content').forEach(content => {
        content.classList.add('hidden');
      });
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.remove('hidden');
        if (window.gsap) {
          window.gsap.fromTo(activeContent, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
        }
      }
    });
  });

  // Run initial recalculation
  recalculatePrice();
}
