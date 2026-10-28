import { cart } from '../state/cartState.js';

export function renderNavbar() {
  return `
    <header id="site-header" class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EBDDC8] transition-all duration-300">
      
      <!-- Top Eco Announcement Bar -->
      <div class="bg-emerald-950 text-emerald-200 text-[11px] font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 overflow-hidden">
        <span class="inline-flex items-center gap-1.5 font-bold text-white uppercase tracking-wider text-[9px] bg-emerald-800 px-2 py-0.5 rounded-full">
          Zero-Plastic Certified
        </span>
        <span class="truncate">PackNStir: 100% Biodegradable & Recyclable Packaging. Free carbon-neutral freight on orders over $150.</span>
        <a href="#showcase" class="underline font-bold text-emerald-300 hover:text-white hidden sm:inline ml-1">Explore Eco-Heritage Showcase →</a>
      </div>

      <!-- Main Navigation Bar -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand Identity (PackNStir) -->
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-emerald-900 group-hover:bg-emerald-800 transition-colors flex items-center justify-center text-emerald-300 shadow-md shadow-emerald-950/20">
              <svg class="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div>
              <span class="font-black text-2xl tracking-tight text-stone-950 block font-serif">
                Pack<span class="text-emerald-800 font-sans font-extrabold">N</span>Stir
              </span>
              <span class="text-[9px] tracking-widest uppercase text-stone-500 font-bold block -mt-1">
                Zero-Plastic Packaging
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-7 text-sm font-bold text-stone-700">
            <a href="#home" class="nav-link hover:text-emerald-800 transition-colors py-1 relative">Home</a>
            
            <!-- Dedicated Eco-Heritage Master Page Link -->
            <a href="#showcase" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1.5 text-emerald-900">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></span>
              <span>The Eco-Showcase</span>
              <span class="text-[9px] font-black bg-emerald-100 text-emerald-950 px-1.5 py-0.5 rounded-full">46</span>
            </a>

            <!-- Shop Dropdown / Catalog -->
            <div class="relative group">
              <a href="#shop" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1">
                <span>Shop</span>
                <svg class="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>

              <!-- Dropdown Menu -->
              <div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div class="w-72 bg-white rounded-2xl shadow-2xl border border-[#EBDDC8] p-2.5 space-y-1">
                  <a href="#shop?category=boxes" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm">📦</span>
                    <div>
                      <div class="font-bold">Cardboard Boxes & Cartons</div>
                      <div class="text-[10px] text-stone-500 font-normal">Single, double, tri-wall & crash-lock</div>
                    </div>
                  </a>
                  <a href="#shop?category=postal" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center text-sm">✉️</span>
                    <div>
                      <div class="font-bold">Postal & E-Commerce</div>
                      <div class="text-[10px] text-stone-500 font-normal">Bio mailers, book wraps & tubes</div>
                    </div>
                  </a>
                  <a href="#shop?category=takeaway" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-amber-50 text-stone-800 flex items-center justify-center text-sm">🥗</span>
                    <div>
                      <div class="font-bold">Sustainable Takeaway</div>
                      <div class="text-[10px] text-stone-500 font-normal">Sugarcane, palm leaf & hot cups</div>
                    </div>
                  </a>
                  <a href="#shop?category=protective" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center text-sm">🛡️</span>
                    <div>
                      <div class="font-bold">Protective & Void Fill</div>
                      <div class="text-[10px] text-stone-500 font-normal">Honeycomb wrap & starch peanuts</div>
                    </div>
                  </a>
                  <a href="#shop?category=tape-bags" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center text-sm">🏷️</span>
                    <div>
                      <div class="font-bold">Tape, Bags & Strapping</div>
                      <div class="text-[10px] text-stone-500 font-normal">Gummed tape, stretch paper & strapping</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#about" class="nav-link hover:text-emerald-800 transition-colors py-1">About Us</a>
            <a href="#quote" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1.5">
              <span>Custom Quote</span>
              <span class="text-[9px] font-bold bg-[#EBDDC8] text-stone-800 px-2 py-0.5 rounded-full">CAD</span>
            </a>
          </nav>

          <!-- Right Action Items: Cart & Mobile Menu -->
          <div class="flex items-center gap-3">
            
            <!-- Custom Quote CTA Button (Desktop) -->
            <a href="#quote" class="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md shadow-emerald-950/20 transition-all">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              <span>Instant CAD Quote</span>
            </a>

            <!-- Cart Trigger Button -->
            <button id="nav-cart-trigger" class="relative p-2.5 rounded-xl bg-white hover:bg-[#F6EFE3] text-stone-900 border border-[#DEC6A6] transition-colors flex items-center gap-2" aria-label="Shopping Cart">
              <svg class="w-5 h-5 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span class="text-xs font-bold hidden sm:inline text-stone-900">Cart</span>
              <span class="cart-count-badge hidden absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-emerald-700 text-white text-[11px] font-black flex items-center justify-center shadow">
                0
              </span>
            </button>

            <!-- Mobile Hamburger Menu Button -->
            <button id="mobile-menu-trigger" class="md:hidden p-2.5 rounded-xl bg-white text-stone-800 border border-stone-200 hover:bg-stone-100 transition-colors" aria-label="Toggle Navigation">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>

          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu-drawer" class="md:hidden hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-2xl">
        <div class="flex flex-col space-y-3 font-bold text-stone-900 text-base">
          <a href="#home" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Home</a>
          <a href="#showcase" class="mobile-nav-link text-emerald-900 hover:text-emerald-800 py-2 border-b border-stone-100 flex items-center justify-between">
            <span>The Eco-Showcase (Master Archive)</span>
            <span class="text-xs bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded-full font-black">46</span>
          </a>
          <a href="#shop" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100 flex items-center justify-between">
            <span>Shop All Products</span>
            <span class="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full">5 Categories</span>
          </a>
          <a href="#about" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">About Us & Mission</a>
          <a href="#quote" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Contact & Custom Quote</a>
        </div>
        <div class="pt-2">
          <a href="#quote" class="w-full py-3.5 bg-emerald-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow">
            <span>Build Bespoke CAD Quote</span>
          </a>
        </div>
      </div>

    </header>
  `;
}

export function initNavbar() {
  const cartTrigger = document.getElementById('nav-cart-trigger');
  if (cartTrigger) {
    cartTrigger.addEventListener('click', () => {
      cart.triggerCartDrawerOpen();
    });
  }

  const mobileTrigger = document.getElementById('mobile-menu-trigger');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileTrigger && mobileDrawer) {
    mobileTrigger.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }
}
