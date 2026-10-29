import { PRODUCTS, getProductsByCategory } from '../data/products.js';
import { CATEGORIES } from '../data/categories.js';
import { getProductSvg } from '../data/packagingSvgs.js';
import { cart } from '../state/cartState.js';

export function renderProductsView(activeCategory = 'all', searchQuery = '') {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 bg-white">
      
      <!-- Catalog Page Header -->
      <div class="bg-gradient-to-r from-[#1E3A2F] to-[#12271E] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-8 -top-8 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-2xl space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 text-xs font-bold border border-emerald-700/60">
            <span>PackNStir Complete Shop</span> • <span>46 Formats Available</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-serif text-white">
            E-Commerce Packaging Catalog
          </h1>
          <p class="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
            Filter our exhaustive database of 46 plastic-free paper, corrugated, sugarcane, and cellulose solutions. All available in stock or bespoke custom dimensions.
          </p>
        </div>
      </div>

      <!-- Dedicated Eco-System & Global Warming Master Page Callout -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-[#F6EFE3] via-white to-emerald-50 border border-[#DEC6A6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs">
        <div class="flex items-center gap-2.5">
          <span class="text-xl">🌍</span>
          <span class="text-stone-800 font-semibold">Looking for the detailed material history, ocean/soil preservation, and CO₂e carbon reduction metrics for all 46 products?</span>
        </div>
        <a href="#eco-impact" class="font-extrabold text-emerald-900 hover:text-emerald-700 underline flex-shrink-0 flex items-center gap-1">
          <span>Explore Eco-System & Global Warming Directory →</span>
        </a>
      </div>

      <!-- Filter Controls & Search Toolbar -->
      <div class="bg-[#FAF8F5] rounded-3xl p-5 sm:p-6 border-2 border-[#EBDDC8] shadow-xs space-y-5">
        
        <!-- Top Toolbar: Search & Sort -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          <!-- Search Bar -->
          <div class="relative flex-1 max-w-md">
            <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="catalog-search-input" value="${searchQuery}" placeholder="Search single wall, mailers, bagasse, honeycomb, strapping..." class="w-full pl-10 pr-4 py-3 bg-white border border-[#DEC6A6] rounded-2xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-2xs" />
          </div>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-3 justify-end">
            <span class="text-xs text-stone-600 font-bold hidden sm:inline">Sort by:</span>
            <select id="catalog-sort-select" class="text-xs font-bold px-3.5 py-3 bg-white border border-[#DEC6A6] rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900 shadow-2xs">
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="moq-asc">MOQ: Low to High</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>

        <!-- Category Tabs matching the 5 exact required filter buckets -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold pt-2 border-t border-[#EBDDC8]">
          <button data-cat="all" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            All (${PRODUCTS.length})
          </button>
          
          <button data-cat="boxes" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'boxes' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            📦 Boxes (9)
          </button>

          <button data-cat="postal" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'postal' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            ✉️ Postal (7)
          </button>

          <button data-cat="takeaway" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'takeaway' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            🥗 Takeaway (10)
          </button>

          <button data-cat="protective" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'protective' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            🛡️ Protective (8)
          </button>

          <button data-cat="tape-bags" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'tape-bags' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            🏷️ Tape/Bags (12)
          </button>
        </div>

      </div>

      <!-- Results Count Status -->
      <div class="flex items-center justify-between text-xs text-stone-600 font-bold px-1">
        <span id="catalog-results-count">Showing products</span>
        <span class="text-emerald-800">🌱 100% Zero-Plastic Guarantee</span>
      </div>

      <!-- Product Cards Grid -->
      <div id="catalog-products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Rendered via JS -->
      </div>

    </div>
  `;
}

export function initProductsView(initialCategory = 'all', initialSearch = '') {
  let currentCategory = initialCategory;
  let currentSearch = initialSearch;
  let currentSort = 'featured';

  const grid = document.getElementById('catalog-products-grid');
  const searchInput = document.getElementById('catalog-search-input');
  const sortSelect = document.getElementById('catalog-sort-select');
  const resultsCount = document.getElementById('catalog-results-count');
  const catButtons = document.querySelectorAll('.cat-pill-btn');

  function filterAndRender() {
    let list = currentCategory === 'all' ? [...PRODUCTS] : getProductsByCategory(currentCategory);

    // Apply search filter
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      );
    }

    // Apply sorting
    if (currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'moq-asc') {
      list.sort((a, b) => a.moq - b.moq);
    } else if (currentSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    if (resultsCount) {
      resultsCount.textContent = `Showing ${list.length} of ${PRODUCTS.length} sustainable packaging formats`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-[#FAF8F5] rounded-3xl border border-[#EBDDC8]">
          <h3 class="text-base font-bold text-stone-900 mb-1">No matching packaging formats found</h3>
          <p class="text-xs text-stone-500 max-w-sm mx-auto mb-4">Try searching for "box", "bagasse", "mailer", or click "All" above.</p>
          <button id="btn-reset-filters" class="px-5 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-xl shadow">Reset Filters</button>
        </div>
      `;
      const btnReset = document.getElementById('btn-reset-filters');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          currentCategory = 'all';
          currentSearch = '';
          if (searchInput) searchInput.value = '';
          updateCategoryTabs();
          filterAndRender();
        });
      }
      return;
    }

    grid.innerHTML = list.map(prod => `
      <div class="bg-white rounded-3xl border-2 border-[#EBDDC8] overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between group">
        
        <!-- Image Area -->
        <div class="relative bg-gradient-to-b from-[#FBF8F3] to-[#F4EFE6] p-5 flex items-center justify-center h-52 border-b border-[#EBDDC8] overflow-hidden">
          <span class="absolute top-3 left-3 z-10 text-[9px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full shadow-xs">
            ${prod.badge || 'FSC® Certified'}
          </span>
          
          <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            ${getProductSvg(prod.svgType, 'grid')}
          </div>

          <!-- Quick View Trigger -->
          <button data-quickview-id="${prod.id}" class="btn-grid-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-800 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Content Area -->
        <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] text-stone-500 mb-1">
              <span class="uppercase tracking-wider font-extrabold text-emerald-900">${prod.categoryName}</span>
              <span class="bg-[#F6EFE3] px-2 py-0.5 rounded font-bold text-stone-800">MOQ: ${prod.moq} pcs</span>
            </div>
            <h3 class="text-sm font-bold text-stone-950 group-hover:text-emerald-900 transition-colors leading-snug font-serif">
              <a href="#product/${prod.id}">${prod.name}</a>
            </h3>
            <p class="text-[11px] text-stone-600 mt-1 line-clamp-2">${prod.subtitle}</p>
            <div class="mt-2 text-[10px] text-stone-500 font-medium">
              Material: <span class="text-stone-900 font-semibold">${prod.material.split('(')[0]}</span>
            </div>
            <div class="mt-2 flex items-center justify-between text-[10px] pt-1">
              <span class="text-emerald-900 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                🌱 Saves ${(prod.co2SavedKg || 1.25).toFixed(1)}kg CO₂
              </span>
              <a href="#eco-impact#product-${prod.id}" class="text-stone-500 hover:text-emerald-800 font-bold underline" title="Read material history & ecosystem impact">
                Eco Report →
              </a>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-3 border-t border-[#EBDDC8] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-stone-400 block -mb-1">From</span>
              <span class="text-base font-black text-stone-950">$${prod.price.toFixed(2)}</span>
              <span class="text-[10px] text-stone-500">/ ${prod.unit}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <button data-add-prod-id="${prod.id}" class="btn-grid-add px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1" title="Add MOQ to Cart">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                <span>Add</span>
              </button>
              <a href="#product/${prod.id}" class="p-2 text-stone-400 hover:text-stone-900 hover:bg-[#F6EFE3] rounded-xl transition-colors" title="View Full Specifications">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    `).join('');

    // Attach event listeners
    grid.querySelectorAll('.btn-grid-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-quickview-id');
        window.dispatchEvent(new CustomEvent('open-quickview', { detail: { productId: id } }));
      });
    });

    grid.querySelectorAll('.btn-grid-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-add-prod-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          cart.addItem(prod, prod.moq);
        }
      });
    });
  }

  function updateCategoryTabs() {
    catButtons.forEach(btn => {
      const cat = btn.getAttribute('data-cat');
      if (cat === currentCategory) {
        btn.className = 'cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap bg-emerald-800 text-white shadow-sm';
      } else {
        btn.className = 'cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]';
      }
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      updateCategoryTabs();
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}
