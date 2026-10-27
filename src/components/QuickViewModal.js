import { getProductById } from '../data/products.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { cart } from '../state/cartState.js';

export function renderQuickViewModal() {
  return `
    <div id="quickview-backdrop" class="fixed inset-0 bg-stone-950/75 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div id="quickview-container" class="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform scale-95 transition-all duration-300 my-8">
        
        <button id="quickview-close" class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-stone-100 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors shadow">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div id="quickview-content" class="grid grid-cols-1 md:grid-cols-2">
          <!-- Dynamically populated -->
        </div>

      </div>
    </div>
  `;
}

export function initQuickViewModal() {
  const backdrop = document.getElementById('quickview-backdrop');
  const container = document.getElementById('quickview-container');
  const closeBtn = document.getElementById('quickview-close');
  const contentEl = document.getElementById('quickview-content');

  function openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    contentEl.innerHTML = `
      <!-- Left: Visual & Badges -->
      <div class="bg-gradient-to-br from-stone-100 to-stone-200/80 p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-stone-200">
        <span class="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300">
          ${product.badge || 'FSC® Certified'}
        </span>
        <div class="w-full h-64 flex items-center justify-center">
          ${getProductSvg(product.svgType, 'quickview')}
        </div>
        <div class="w-full flex items-center justify-center gap-2 mt-2">
          ${product.ecoBadges.slice(0, 2).map(b => `
            <span class="text-[10px] font-medium bg-white/80 text-emerald-900 px-2 py-0.5 rounded border border-emerald-900/10">${b}</span>
          `).join('')}
        </div>
      </div>

      <!-- Right: Product Specs & Rapid Cart Add -->
      <div class="p-6 sm:p-8 flex flex-col justify-between space-y-4">
        <div>
          <span class="text-xs uppercase font-bold tracking-widest text-emerald-800">${product.categoryName}</span>
          <h2 class="text-xl font-extrabold text-stone-900 mt-1 leading-snug">${product.name}</h2>
          <p class="text-xs text-stone-600 mt-2 line-clamp-2">${product.subtitle}</p>

          <!-- Price & MOQ -->
          <div class="mt-4 pt-4 border-t border-stone-200/80 flex items-baseline justify-between">
            <div>
              <span class="text-2xl font-black text-stone-900">$${product.price.toFixed(2)}</span>
              <span class="text-xs text-stone-500">/ ${product.unit}</span>
            </div>
            <span class="text-xs font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">MOQ: ${product.moq} units</span>
          </div>

          <!-- Quick Selectors -->
          <div class="mt-4 space-y-3">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Standard Sizing</label>
              <select id="qv-size-select" class="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700">
                ${product.dimensionsAvailable.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Finish / Print</label>
              <select id="qv-finish-select" class="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700">
                ${product.finishOptions.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Quantity (Units)</label>
              <input type="number" id="qv-qty-input" value="${product.moq}" min="${product.moq}" step="50" class="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold" />
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2 pt-2">
          <button id="qv-btn-add" class="w-full py-3 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span>Add to Cart</span>
          </button>

          <a href="#product/${product.id}" id="qv-full-pdp-link" class="block w-full py-2.5 text-center text-xs font-bold text-stone-700 hover:text-emerald-900 hover:bg-stone-100 rounded-xl transition-colors">
            View Full Technical Specifications & Tiered Pricing →
          </a>
        </div>
      </div>
    `;

    // Attach Add to Cart listener
    const btnAdd = contentEl.querySelector('#qv-btn-add');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        const size = contentEl.querySelector('#qv-size-select').value;
        const finish = contentEl.querySelector('#qv-finish-select').value;
        const qty = parseInt(contentEl.querySelector('#qv-qty-input').value) || product.moq;

        cart.addItem(product, qty, { size, finish });
        closeQuickView();
      });
    }

    const pdpLink = contentEl.querySelector('#qv-full-pdp-link');
    if (pdpLink) {
      pdpLink.addEventListener('click', () => {
        closeQuickView();
      });
    }

    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    container.classList.remove('scale-95');
    container.classList.add('scale-100');
  }

  function closeQuickView() {
    container.classList.remove('scale-100');
    container.classList.add('scale-95');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeQuickView();
    });
  }

  window.addEventListener('open-quickview', (e) => {
    openQuickView(e.detail.productId);
  });
}
