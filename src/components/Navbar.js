import { cart } from '../state/cartState.js';

export function renderNavbar() {
  return `
    <header id="site-header" class="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
      
      <!-- Top Eco Announcement Bar -->
      <div class="bg-emerald-950 text-emerald-200 text-[11px] font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 overflow-hidden">
        <span class="inline-flex items-center gap-1.5 font-bold text-white uppercase tracking-wider text-[9px] bg-emerald-800 px-2 py-0.5 rounded-full">
          Plastic-Free Guarantee
        </span>
        <span class="truncate">All packaging 100% curbside recyclable & home compostable. Free carbon-neutral shipping over $150.</span>
        <a href="#quote" class="underline font-bold text-emerald-100 hover:text-white hidden sm:inline ml-1">Request Free Sample Kit →</a>
      </div>

      <!-- Main Navigation Bar -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand Identity -->
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-emerald-900 group-hover:bg-emerald-800 transition-colors flex items-center justify-center text-emerald-300 shadow-md shadow-emerald-950/20">
              <svg class="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
              </svg>
            </div>
            <div>
              <span class="font-extrabold text-xl tracking-tight text-stone-900 block font-serif">
                EcoPack <span class="text-emerald-800 font-sans font-bold">Studio</span>
              </span>
              <span class="text-[10px] tracking-widest uppercase text-stone-500 font-semibold block -mt-1">
                Circular Packaging Lab
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a href="#home" class="nav-link hover:text-emerald-800 transition-colors py-1 relative">Home</a>
            
            <!-- Products with Category Dropdown Indicator -->
            <div class="relative group">
              <a href="#products" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1">
                <span>Products Catalog</span>
                <svg class="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>

              <!-- Dropdown Menu -->
              <div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div class="w-64 bg-white rounded-2xl shadow-xl border border-stone-200 p-2 space-y-1">
                  <a href="#products?category=food" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-sm">🍕</span>
                    <div>
                      <div class="font-bold">Food & Beverage</div>
                      <div class="text-[10px] text-stone-500 font-normal">Pizza, lunch & cake boxes</div>
                    </div>
                  </a>
                  <a href="#products?category=luxury" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center text-sm">✨</span>
                    <div>
                      <div class="font-bold">Luxury & Retail</div>
                      <div class="text-[10px] text-stone-500 font-normal">Rigid setup, perfume & watch</div>
                    </div>
                  </a>
                  <a href="#products?category=shipping" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-amber-50 text-stone-800 flex items-center justify-center text-sm">📦</span>
                    <div>
                      <div class="font-bold">E-Commerce & Shipping</div>
                      <div class="text-[10px] text-stone-500 font-normal">Mailers, honeycomb & cartons</div>
                    </div>
                  </a>
                  <a href="#products?category=bags" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center text-sm">🛍️</span>
                    <div>
                      <div class="font-bold">Paper Bags & Accessories</div>
                      <div class="text-[10px] text-stone-500 font-normal">Twisted totes, tissue & stickers</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#about" class="nav-link hover:text-emerald-800 transition-colors py-1">About Us</a>
            <a href="#story" class="nav-link hover:text-emerald-800 transition-colors py-1">Our Story</a>
            <a href="#quote" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1.5">
              <span>Custom Quote</span>
              <span class="text-[9px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-full">Bespoke</span>
            </a>
          </nav>

          <!-- Right Action Items: Cart & Mobile Menu -->
          <div class="flex items-center gap-3">
            
            <!-- Custom Quote Pill Button (Desktop) -->
            <a href="#quote" class="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-emerald-900 hover:bg-emerald-800 text-white shadow-sm transition-all">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              <span>Instant CAD Quote</span>
            </a>

            <!-- Cart Trigger Button -->
            <button id="nav-cart-trigger" class="relative p-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 transition-colors flex items-center gap-2" aria-label="Shopping Cart">
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
      <div id="mobile-menu-drawer" class="md:hidden hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
        <div class="flex flex-col space-y-3 font-semibold text-stone-800 text-base">
          <a href="#home" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Home</a>
          <a href="#products" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100 flex items-center justify-between">
            <span>Products & Catalog</span>
            <span class="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full">19 items</span>
          </a>
          <a href="#about" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">About Us & Mission</a>
          <a href="#story" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Our Story & Timeline</a>
          <a href="#quote" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Contact & Custom Quote</a>
        </div>
        <div class="pt-2">
          <a href="#quote" class="w-full py-3 bg-emerald-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow">
            <span>Build Bespoke Custom Quote</span>
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
