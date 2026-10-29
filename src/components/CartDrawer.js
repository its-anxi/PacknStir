import { cart } from '../state/cartState.js';
import { getProductSvg } from '../data/packagingSvgs.js';

export function renderCartDrawer() {
  return `
    <div id="cart-drawer-backdrop" class="fixed inset-0 bg-stone-950/70 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="cart-drawer-panel" class="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FAF8F5] text-stone-900 shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-out border-l border-stone-200">
        
        <!-- Drawer Header -->
        <div class="px-6 py-5 border-b border-stone-200 bg-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            </div>
            <div>
              <h2 class="text-base font-bold text-stone-900 tracking-tight">Your Sustainable Cart</h2>
              <p class="text-xs text-stone-500 font-medium" id="cart-drawer-subtitle">0 items selected</p>
            </div>
          </div>
          <button id="cart-drawer-close" class="w-8 h-8 rounded-lg flex items-center justify-center text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <!-- Free Carbon-Neutral Shipping Progress Meter -->
        <div id="cart-shipping-meter" class="px-6 py-3.5 bg-emerald-50/80 border-b border-emerald-100">
          <div class="flex items-center justify-between text-xs font-semibold text-emerald-900 mb-1.5">
            <span id="shipping-meter-text">Add $0.00 more for FREE shipping</span>
            <span class="text-emerald-700 font-bold">$150 Target</span>
          </div>
          <div class="w-full bg-emerald-200/60 rounded-full h-2 overflow-hidden">
            <div id="shipping-progress-bar" class="bg-gradient-to-r from-emerald-600 to-teal-600 h-2 rounded-full transition-all duration-500" style="width: 0%"></div>
          </div>
        </div>

        <!-- Scrollable Item List -->
        <div id="cart-items-container" class="flex-1 overflow-y-auto px-6 py-4 divide-y divide-stone-100">
          <!-- Dynamic Cart Items Injected Here -->
        </div>

        <!-- Drawer Footer & Cost Summary -->
        <div class="p-6 bg-white border-t border-stone-200 shadow-inner space-y-4">
          <!-- Promo Code Input -->
          <div class="flex gap-2">
            <div class="relative flex-1">
              <input type="text" id="cart-promo-input" placeholder="Promo code (e.g. ECO10)" class="w-full text-xs uppercase px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono" />
            </div>
            <button id="btn-apply-promo" class="px-3.5 py-2 text-xs font-semibold bg-stone-800 hover:bg-stone-900 text-white rounded-lg transition-colors">
              Apply
            </button>
          </div>
          <div id="promo-status-msg" class="text-xs hidden"></div>

          <!-- Price Calculations -->
          <div class="space-y-1.5 text-xs text-stone-600">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span id="cart-subtotal" class="font-semibold text-stone-900">$0.00</span>
            </div>
            <div id="cart-discount-row" class="flex justify-between text-emerald-700 hidden">
              <span id="cart-discount-label">Discount</span>
              <span id="cart-discount-val" class="font-semibold">-$0.00</span>
            </div>
            <div class="flex justify-between">
              <span class="flex items-center gap-1">
                Carbon-Neutral Shipping
                <span id="shipping-free-tag" class="hidden text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">FREE</span>
              </span>
              <span id="cart-shipping" class="font-semibold text-stone-900">$0.00</span>
            </div>
            <div class="flex justify-between">
              <span>Estimated Tax (5%)</span>
              <span id="cart-tax" class="font-semibold text-stone-900">$0.00</span>
            </div>
            <div class="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-100">
              <span>Total</span>
              <span id="cart-total" class="text-emerald-950 font-extrabold text-lg">$0.00</span>
            </div>
          </div>

          <!-- Checkout CTA -->
          <button id="btn-proceed-checkout" class="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all">
            <span>Proceed to Checkout</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>

          <p class="text-[11px] text-center text-stone-400 font-medium">
            🌱 Carbon-neutral delivery & plastic-free fulfillment guaranteed.
          </p>
        </div>

      </div>
    </div>
  `;
}

export function initCartDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  const panel = document.getElementById('cart-drawer-panel');
  const closeBtn = document.getElementById('cart-drawer-close');
  const itemsContainer = document.getElementById('cart-items-container');
  const promoInput = document.getElementById('cart-promo-input');
  const btnApplyPromo = document.getElementById('btn-apply-promo');
  const promoStatusMsg = document.getElementById('promo-status-msg');
  const btnCheckout = document.getElementById('btn-proceed-checkout');

  function openDrawer() {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
    renderCartContents();
  }

  function closeDrawer() {
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeDrawer();
    });
  }

  // Global open trigger
  window.addEventListener('open-cart-drawer', openDrawer);

  // Subscribe to cart updates
  cart.subscribe(() => {
    renderCartContents();
    updateNavbarBadges();
  });

  // Apply Promo
  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
      const code = promoInput.value;
      const res = cart.applyDiscountCode(code);
      if (promoStatusMsg) {
        promoStatusMsg.classList.remove('hidden', 'text-emerald-700', 'text-rose-600');
        if (res.success) {
          promoStatusMsg.classList.add('text-emerald-700');
          promoStatusMsg.textContent = res.message;
        } else {
          promoStatusMsg.classList.add('text-rose-600');
          promoStatusMsg.textContent = res.message;
        }
      }
    });
  }

  // Checkout trigger
  if (btnCheckout) {
    btnCheckout.addEventListener('click', () => {
      if (cart.items.length === 0) {
        alert('Your cart is empty. Please add items to checkout.');
        return;
      }
      closeDrawer();
      window.dispatchEvent(new CustomEvent('open-checkout-modal'));
    });
  }

  function renderCartContents() {
    if (!itemsContainer) return;

    const items = cart.items;
    const subtotal = cart.getSubtotal();
    const discount = cart.getDiscountAmount();
    const shipping = cart.getShippingCost();
    const tax = cart.getTaxAmount();
    const total = cart.getTotal();
    const progress = cart.getProgressToFreeShipping();

    // Update Header and Progress
    const subtitle = document.getElementById('cart-drawer-subtitle');
    if (subtitle) {
      subtitle.textContent = `${cart.getItemCount()} product line${cart.getItemCount() === 1 ? '' : 's'} (${cart.getTotalUnits().toLocaleString()} total units)`;
    }

    const meterText = document.getElementById('shipping-meter-text');
    const progressBar = document.getElementById('shipping-progress-bar');
    if (meterText && progressBar && progressBar.style) {
      if (progress.isFree) {
        meterText.textContent = '🎉 You unlocked FREE Carbon-Neutral Shipping!';
        progressBar.style.width = '100%';
      } else {
        meterText.textContent = `Add $${progress.remaining.toFixed(2)} more for FREE shipping`;
        progressBar.style.width = `${progress.ratio}%`;
      }
    }

    // Render Items
    if (items.length === 0) {
      itemsContainer.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center py-12">
          <div class="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <h3 class="text-stone-800 font-bold text-base mb-1">Your cart is empty</h3>
          <p class="text-stone-500 text-xs max-w-xs mb-6">Explore our zero-plastic catalog of pizza boxes, rigid setup boxes, and padded paper mailers.</p>
          <a href="#products" onclick="document.getElementById('cart-drawer-close').click()" class="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-xl transition-all shadow-md">
            Browse Sustainable Catalog
          </a>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = items.map(item => `
        <div class="py-4 flex gap-3 group">
          <div class="w-20 h-20 rounded-xl bg-stone-100 border border-stone-200 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
            ${getProductSvg(item.svgType, 'thumb')}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between gap-1">
              <h4 class="text-xs font-bold text-stone-900 truncate leading-snug">${item.name}</h4>
              <button data-remove-id="${item.cartItemId}" class="btn-remove-item text-stone-300 hover:text-rose-600 transition-colors p-1" title="Remove item">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
              </button>
            </div>
            <p class="text-[11px] text-stone-500 truncate mt-0.5">${item.size} • ${item.finish}</p>
            
            <div class="flex items-center justify-between mt-3">
              <!-- Quantity Stepper -->
              <div class="flex items-center border border-stone-200 rounded-lg bg-white overflow-hidden shadow-xs">
                <button data-step-id="${item.cartItemId}" data-delta="-50" class="btn-step-qty px-2 py-1 text-xs text-stone-600 hover:bg-stone-100 font-bold">-</button>
                <input type="number" data-qty-id="${item.cartItemId}" value="${item.quantity}" class="input-qty w-12 text-center text-xs font-semibold py-1 focus:outline-none border-x border-stone-200" />
                <button data-step-id="${item.cartItemId}" data-delta="50" class="btn-step-qty px-2 py-1 text-xs text-stone-600 hover:bg-stone-100 font-bold">+</button>
              </div>

              <!-- Line Price -->
              <div class="text-right">
                <span class="text-xs font-extrabold text-stone-900">$${(item.price * item.quantity).toFixed(2)}</span>
                <span class="block text-[10px] text-stone-400">($${item.price.toFixed(2)} / ea)</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');

      // Attach item listeners
      itemsContainer.querySelectorAll('.btn-remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-remove-id');
          cart.removeItem(id);
        });
      });

      itemsContainer.querySelectorAll('.btn-step-qty').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-step-id');
          const delta = parseInt(e.currentTarget.getAttribute('data-delta'));
          const currentItem = cart.items.find(i => i.cartItemId === id);
          if (currentItem) {
            cart.updateQuantity(id, currentItem.quantity + delta);
          }
        });
      });

      itemsContainer.querySelectorAll('.input-qty').forEach(input => {
        input.addEventListener('change', (e) => {
          const id = e.target.getAttribute('data-qty-id');
          const val = parseInt(e.target.value);
          cart.updateQuantity(id, val);
        });
      });
    }

    // Update Price Totals
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('cart-discount-row');
    const discountVal = document.getElementById('cart-discount-val');
    const shippingEl = document.getElementById('cart-shipping');
    const shippingTag = document.getElementById('shipping-free-tag');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (discountRow && discountVal) {
      if (discount > 0) {
        discountRow.classList.remove('hidden');
        discountVal.textContent = `-$${discount.toFixed(2)}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (shippingEl) {
      if (shipping === 0) {
        shippingEl.textContent = '$0.00';
        if (shippingTag) shippingTag.classList.remove('hidden');
      } else {
        shippingEl.textContent = `$${shipping.toFixed(2)}`;
        if (shippingTag) shippingTag.classList.add('hidden');
      }
    }

    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }

  // Update navbar badges whenever cart changes
  function updateNavbarBadges() {
    const badgeEls = document.querySelectorAll('.cart-count-badge');
    const count = cart.getItemCount();
    badgeEls.forEach(el => {
      el.textContent = count;
      if (count > 0) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  // Initial call
  renderCartContents();
  updateNavbarBadges();
}
