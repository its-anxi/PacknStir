import { getProductById, PRODUCTS } from '../data/products.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { cart } from '../state/cartState.js';

export function renderProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 bg-white">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center text-xs font-bold text-stone-500 gap-2">
        <a href="#home" class="hover:text-emerald-800 transition-colors">Home</a>
        <span>/</span>
        <a href="#shop" class="hover:text-emerald-800 transition-colors">Shop</a>
        <span>/</span>
        <a href="#shop?category=${product.category}" class="hover:text-emerald-800 transition-colors">${product.categoryName}</a>
        <span>/</span>
        <span class="text-stone-900 truncate max-w-xs">${product.name}</span>
      </nav>

      <!-- Main PDP Product Hero Section (Gallery + Configurator) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Gallery & Packaging Angle View Switcher (6 cols) -->
        <div class="lg:col-span-6 space-y-4">
          
          <!-- Main Visual Stage Box -->
          <div class="relative bg-gradient-to-b from-[#FBF8F3] to-[#F4EFE6] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 border-2 border-[#EBDDC8] shadow-xs flex items-center justify-center min-h-[380px] sm:min-h-[460px] overflow-hidden group">
            
            <!-- Top Badges -->
            <div class="absolute top-5 left-5 flex items-center gap-2 z-10">
              <span class="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 shadow-xs">
                ${product.badge || 'FSC® Certified'}
              </span>
              <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-white text-stone-700 border border-[#DEC6A6] shadow-xs hidden sm:inline-block">
                ${product.coating.split('(')[0]}
              </span>
            </div>

            <!-- Visual SVG Stage -->
            <div id="pdp-main-stage" class="w-full h-full max-h-80 flex items-center justify-center transition-all duration-300">
              ${getProductSvg(product.svgType, 'pdp')}
            </div>

            <div class="absolute bottom-4 right-4 text-[10px] text-stone-400 font-mono tracking-wider">
              PACKNSTIR • ZERO-PLASTIC GUARANTEE
            </div>
          </div>

          <!-- Angle Thumbnail Selector -->
          <div class="grid grid-cols-4 gap-3">
            <button data-view="perspective" class="pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-900">3D Angle</span>
            </button>

            <button data-view="open" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Open View</span>
            </button>

            <button data-view="dieline" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">CAD Dieline</span>
            </button>

            <button data-view="detail" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Macro Zoom</span>
            </button>
          </div>

          <!-- Environmental Callout Box -->
          <div class="p-5 bg-emerald-50 border-2 border-emerald-600/40 rounded-2xl space-y-2">
            <div class="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-950">
              <span>🌱 Eco-Heritage Environmental Impact:</span>
            </div>
            <p class="text-xs text-emerald-950 font-medium leading-relaxed">
              ${product.environmentalImpact}
            </p>
          </div>

        </div>

        <!-- Right: Specifications & Interactive Configurator (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-extrabold uppercase tracking-widest text-emerald-900">${product.categoryName}</span>
              <span class="text-stone-300">•</span>
              <span class="text-xs text-stone-700 font-semibold bg-[#F6EFE3] px-2.5 py-0.5 rounded">Lead Time: ${product.leadTime}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight leading-snug font-serif">
              ${product.name}
            </h1>

            <p class="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
              ${product.description || product.subtitle}
            </p>
          </div>

          <!-- Live Tier Pricing Display -->
          <div class="p-6 bg-[#FAF8F5] rounded-3xl border-2 border-[#EBDDC8] shadow-xs space-y-4">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Active Unit Price</span>
                <span id="pdp-active-unit-price" class="text-3xl font-black text-stone-950">$${product.price.toFixed(2)}</span>
                <span class="text-xs text-stone-500">/ ${product.unit}</span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">Estimated Line Total</span>
                <span id="pdp-active-total" class="text-2xl font-black text-emerald-900">$${(product.price * product.moq).toFixed(2)}</span>
              </div>
            </div>

            <!-- Tiered Pricing Matrix Table -->
            <div class="pt-3 border-t border-[#EBDDC8]">
              <span class="text-[10px] font-black text-stone-600 uppercase tracking-wider block mb-2">Volume Tier Discounts</span>
              <div class="grid grid-cols-4 gap-2 text-center text-xs">
                ${product.pricingTiers.map((tier, idx) => `
                  <button data-tier-qty="${tier.qty}" data-tier-price="${tier.pricePerUnit}" class="btn-tier-select p-2 rounded-xl border ${idx === 1 ? 'border-emerald-800 bg-emerald-50/80 font-bold text-emerald-950 shadow-2xs' : 'border-[#DEC6A6] bg-white text-stone-800 hover:border-stone-400'} transition-all">
                    <span class="block text-[10px] font-bold">${tier.qty.toLocaleString()} pcs</span>
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
                <span>Select Dimensions</span>
                <a href="#quote" class="text-emerald-800 font-bold hover:underline">Custom Sizing?</a>
              </label>
              <select id="pdp-select-size" class="w-full text-xs font-bold px-3.5 py-3 bg-white border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-stone-900 shadow-2xs">
                ${product.dimensionsAvailable.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>

            <!-- Finish Selection -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5">Surface Finish & Inks</label>
              <select id="pdp-select-finish" class="w-full text-xs font-bold px-3.5 py-3 bg-white border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-stone-900 shadow-2xs">
                ${product.finishOptions.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <!-- Quantity Stepper -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5 flex items-center justify-between">
                <span>Production Quantity</span>
                <span class="text-stone-500 font-normal">Minimum Order Quantity: ${product.moq}</span>
              </label>
              <div class="flex items-center gap-3">
                <div class="flex items-center border border-[#DEC6A6] rounded-xl bg-white overflow-hidden shadow-2xs flex-1">
                  <button id="pdp-qty-minus" class="px-4 py-2.5 text-stone-600 hover:bg-[#F6EFE3] font-bold text-sm">-</button>
                  <input type="number" id="pdp-qty-input" value="${product.moq}" min="${product.moq}" step="50" class="w-full text-center text-xs font-bold py-2.5 focus:outline-none" />
                  <button id="pdp-qty-plus" class="px-4 py-2.5 text-stone-600 hover:bg-[#F6EFE3] font-bold text-sm">+</button>
                </div>
                <button id="btn-request-sample" class="px-4 py-2.5 text-xs font-bold text-stone-800 bg-[#F6EFE3] hover:bg-[#EBDDC8] rounded-xl transition-colors border border-[#DEC6A6] whitespace-nowrap">
                  Request $15 Sample Kit
                </button>
              </div>
            </div>

          </div>

          <!-- Add to Cart & Custom Quote Actions -->
          <div class="space-y-3 pt-2">
            <button id="pdp-btn-add-cart" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-950/25 transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span id="pdp-btn-add-text">Add ${product.moq} Units to Cart</span>
            </button>

            <div class="grid grid-cols-2 gap-3">
              <a href="#quote" class="py-3 text-center bg-white hover:bg-[#F6EFE3] border border-[#DEC6A6] rounded-xl text-xs font-bold text-stone-800 transition-colors">
                Request Bespoke CAD Quote
              </a>
              <a href="#showcase" class="py-3 text-center bg-white hover:bg-[#F6EFE3] border border-[#DEC6A6] rounded-xl text-xs font-bold text-emerald-900 transition-colors">
                View in Eco-Showcase →
              </a>
            </div>
          </div>

        </div>

      </div>


      <!-- ========================================== -->
      <!-- TABS: SPECS, HISTORY, ECO IMPACT & LOGISTICS -->
      <!-- ========================================== -->
      <div class="bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#EBDDC8] p-6 sm:p-10 space-y-8 shadow-xs">
        
        <!-- Tabs Header -->
        <div class="flex items-center border-b border-[#EBDDC8] gap-8 overflow-x-auto text-xs font-bold text-stone-500 pb-3">
          <button data-tab="tab-specs" class="pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap">
            Technical Specs
          </button>
          <button data-tab="tab-history" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Product History & Material Origins
          </button>
          <button data-tab="tab-eco" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Environmental Impact
          </button>
          <button data-tab="tab-shipping" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Production & Freight Lead Times
          </button>
        </div>

        <!-- TAB 1: SPECS -->
        <div id="tab-specs" class="pdp-tab-content space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Board Material</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.material}</span>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Weight / Caliper</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.boardWeight}</span>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Coating</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.coating}</span>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Dimensions</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.dimensionsPreset}</span>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-700">Engineering Highlights</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(product.features || []).map(f => `
                <div class="flex items-center gap-2.5 text-xs text-stone-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 2: HISTORY (Origins of material) -->
        <div id="tab-history" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-[#FAF8F5] border border-[#EBDDC8] rounded-2xl space-y-2">
            <h4 class="text-sm font-bold text-stone-950 font-serif">Origins & Evolution of the Format</h4>
            <p class="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              ${product.history}
            </p>
          </div>
        </div>

        <!-- TAB 3: ECO IMPACT -->
        <div id="tab-eco" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-emerald-50 border-2 border-emerald-700/40 rounded-2xl space-y-2">
            <h4 class="text-sm font-bold text-emerald-950 font-serif">Environmental Impact & Waste Diversion</h4>
            <p class="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed font-sans">
              ${product.environmentalImpact}
            </p>
          </div>
        </div>

        <!-- TAB 4: SHIPPING -->
        <div id="tab-shipping" class="pdp-tab-content hidden space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8] space-y-1">
              <span class="font-bold text-stone-900 block">Standard Stock Dispatch</span>
              <p class="text-stone-600">Dispatches within 24 to 48 hours via carbon-neutral road freight.</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8] space-y-1">
              <span class="font-bold text-stone-900 block">Custom Print & Sizing Runs</span>
              <p class="text-stone-600">Standard lead time is 7 to 10 business days following digital PDF proof sign-off.</p>
            </div>
          </div>
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

    document.querySelectorAll('.btn-tier-select').forEach(btn => {
      const q = parseInt(btn.getAttribute('data-tier-qty'));
      if (q === matchedTier.qty) {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-emerald-800 bg-emerald-50/80 font-bold text-emerald-950 transition-all shadow-2xs';
      } else {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-[#DEC6A6] bg-white text-stone-800 hover:border-stone-400 transition-all';
      }
    });
  }

  document.querySelectorAll('.btn-tier-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentQty = parseInt(e.currentTarget.getAttribute('data-tier-qty'));
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  });

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

  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const size = sizeSelect ? sizeSelect.value : product.dimensionsPreset;
      const finish = finishSelect ? finishSelect.value : product.finishOptions[0];

      cart.addItem(product, currentQty, {
        size,
        finish,
        customPrice: currentUnitPrice
      });

      if (window.gsap) {
        window.gsap.fromTo(btnAddToCart, { scale: 0.97 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
      }
    });
  }

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

  // Thumbnails view switcher
  const stage = document.getElementById('pdp-main-stage');
  document.querySelectorAll('.pdp-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.pdp-thumb-btn').forEach(b => {
        b.className = 'pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all';
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

  recalculatePrice();
}
