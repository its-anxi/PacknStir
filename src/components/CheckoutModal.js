import { cart } from '../state/cartState.js';

export function renderCheckoutModal() {
  return `
    <div id="checkout-modal-backdrop" class="fixed inset-0 bg-stone-950/80 backdrop-blur-md z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div id="checkout-modal-container" class="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform scale-95 transition-all duration-300 my-8">
        
        <!-- Modal Close Button -->
        <button id="checkout-modal-close" class="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <!-- View 1: Multi-Step Checkout Form -->
        <div id="checkout-form-view" class="grid grid-cols-1 lg:grid-cols-12">
          
          <!-- Left Column: Checkout Inputs (7 cols) -->
          <div class="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            <!-- Brand & Step Indicator -->
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
                <span class="text-xs uppercase tracking-widest text-emerald-800 font-bold">EcoPack Studio Secure Checkout</span>
              </div>
              <h2 class="text-2xl font-extrabold text-stone-900 tracking-tight">Finalize Your Order</h2>
            </div>

            <!-- Steps Tabs Header -->
            <div class="flex items-center border-b border-stone-200 pb-3 text-xs font-semibold text-stone-400 gap-6">
              <span id="tab-step-1" class="text-emerald-800 border-b-2 border-emerald-700 pb-3 -mb-3 flex items-center gap-1.5">
                <span class="w-4 h-4 rounded-full bg-emerald-800 text-white text-[10px] flex items-center justify-center">1</span>
                Contact & Shipping
              </span>
              <span id="tab-step-2" class="flex items-center gap-1.5 text-stone-400">
                <span class="w-4 h-4 rounded-full bg-stone-200 text-stone-600 text-[10px] flex items-center justify-center">2</span>
                Payment & Review
              </span>
            </div>

            <!-- STEP 1 CONTAINER -->
            <div id="checkout-step-1-panel" class="space-y-4">
              <h3 class="text-sm font-bold text-stone-800 flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                Contact & Shipping Details
              </h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">First Name *</label>
                  <input type="text" id="chk-fname" value="Sarah" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Last Name *</label>
                  <input type="text" id="chk-lname" value="Jenkins" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Business Email *</label>
                  <input type="email" id="chk-email" value="sarah@botaniqueorganics.com" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Company / Brand Name</label>
                  <input type="text" id="chk-company" value="Botanique Organics Ltd." class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-stone-700 mb-1">Delivery Address *</label>
                <input type="text" id="chk-address" value="482 Greenleaf Boulevard, Suite 300" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">City *</label>
                  <input type="text" id="chk-city" value="Portland" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">State / Region</label>
                  <input type="text" id="chk-state" value="OR" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Zip Code *</label>
                  <input type="text" id="chk-zip" value="97201" class="w-full text-xs px-3 py-2.5 bg-white border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
              </div>

              <!-- Shipping Methods -->
              <div class="pt-2">
                <label class="block text-xs font-semibold text-stone-700 mb-2">Select Carbon-Neutral Shipping Method</label>
                <div class="space-y-2">
                  <label class="flex items-center justify-between p-3 border border-emerald-600 bg-emerald-50/60 rounded-xl cursor-pointer">
                    <div class="flex items-center gap-3">
                      <input type="radio" name="shipping-choice" value="standard" checked class="text-emerald-700 focus:ring-emerald-700" />
                      <div>
                        <div class="text-xs font-bold text-stone-900">Standard Carbon-Neutral Road Freight (3-5 days)</div>
                        <div class="text-[11px] text-stone-500">100% offset via verified agroforestry credits</div>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-emerald-800" id="chk-standard-ship-cost">$0.00</span>
                  </label>

                  <label class="flex items-center justify-between p-3 border border-stone-200 bg-white hover:bg-stone-50 rounded-xl cursor-pointer">
                    <div class="flex items-center gap-3">
                      <input type="radio" name="shipping-choice" value="express" class="text-emerald-700 focus:ring-emerald-700" />
                      <div>
                        <div class="text-xs font-bold text-stone-900">Express Clean Electric Courier (1-2 days)</div>
                        <div class="text-[11px] text-stone-500">Zero-emission electric delivery fleet</div>
                      </div>
                    </div>
                    <span class="text-xs font-bold text-stone-800">$35.00</span>
                  </label>
                </div>
              </div>

              <div class="pt-3">
                <button type="button" id="btn-to-step-2" class="w-full py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2">
                  <span>Continue to Payment</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </button>
              </div>
            </div>

            <!-- STEP 2 CONTAINER (Hidden initially) -->
            <div id="checkout-step-2-panel" class="space-y-4 hidden">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-bold text-stone-800 flex items-center gap-2">
                  <svg class="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                  Payment & Invoicing Method
                </h3>
                <button type="button" id="btn-back-to-step-1" class="text-xs text-stone-500 hover:text-stone-800 underline">← Edit Shipping</button>
              </div>

              <!-- Payment Method Selector -->
              <div class="grid grid-cols-2 gap-2 text-xs font-semibold">
                <button type="button" id="pay-mode-card" class="p-3 rounded-xl border-2 border-emerald-800 bg-white text-emerald-950 flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                  <span>Credit / Debit Card</span>
                </button>
                <button type="button" id="pay-mode-invoice" class="p-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 hover:bg-white flex items-center justify-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>Net-30 Corporate Terms</span>
                </button>
              </div>

              <!-- Credit Card Fields -->
              <div id="card-inputs-wrapper" class="space-y-3 bg-white p-4 rounded-xl border border-stone-200">
                <div>
                  <label class="block text-xs font-semibold text-stone-700 mb-1">Card Number</label>
                  <div class="relative">
                    <input type="text" id="chk-card-num" value="4532 •••• •••• 8921" class="w-full text-xs font-mono px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                    <span class="absolute right-3 top-2.5 text-xs text-stone-400 font-bold">VISA</span>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">Expiry Date</label>
                    <input type="text" id="chk-card-exp" value="09/28" class="w-full text-xs font-mono px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-stone-700 mb-1">CVC / CVV</label>
                    <input type="text" id="chk-card-cvc" value="842" class="w-full text-xs font-mono px-3 py-2 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                  </div>
                </div>
              </div>

              <!-- Corporate Invoice Note -->
              <div id="invoice-inputs-wrapper" class="hidden p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-1">
                <p class="font-bold">B2B Net-30 Invoicing Selected</p>
                <p class="text-amber-800">Your organization will receive a digital tax invoice payable within 30 days. Purchase Order number can be specified on confirmation.</p>
              </div>

              <!-- Environmental Impact Pledge -->
              <div class="p-3.5 bg-emerald-950 text-emerald-100 rounded-xl flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-emerald-300 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                </div>
                <div class="text-[11px] leading-tight">
                  <span class="font-bold text-white block">Eco-Impact Guarantee</span>
                  This order will divert approx. <span id="chk-plastic-avoided" class="font-bold text-emerald-300">18.4 kg</span> of fossil plastic from landfills and plant 2 certified native trees.
                </div>
              </div>

              <div class="pt-2">
                <button type="button" id="btn-place-order" class="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 active:scale-[0.99] text-white rounded-xl font-bold text-sm shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
                  <span id="btn-place-order-text">Place Sustainable Order</span>
                  <svg id="btn-order-spinner" class="w-4 h-4 animate-spin hidden" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                </button>
              </div>
            </div>

          </div>

          <!-- Right Column: Live Order Summary (5 cols) -->
          <div class="lg:col-span-5 bg-stone-100/80 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-stone-200 flex flex-col justify-between">
            <div>
              <h3 class="text-sm font-bold text-stone-900 tracking-tight mb-4 flex items-center justify-between">
                <span>Order Summary</span>
                <span id="chk-item-count" class="text-xs text-stone-500 font-normal">2 items</span>
              </h3>

              <!-- Mini Item list -->
              <div id="chk-mini-items" class="space-y-3 max-h-56 overflow-y-auto pr-1 mb-6 divide-y divide-stone-200/60">
                <!-- Injected via JS -->
              </div>

              <!-- Cost breakdown -->
              <div class="space-y-2 text-xs text-stone-600 border-t border-stone-200 pt-4">
                <div class="flex justify-between">
                  <span>Subtotal</span>
                  <span id="chk-subtotal" class="font-semibold text-stone-900">$0.00</span>
                </div>
                <div id="chk-discount-row" class="flex justify-between text-emerald-800 hidden">
                  <span>Discount</span>
                  <span id="chk-discount" class="font-semibold">-$0.00</span>
                </div>
                <div class="flex justify-between">
                  <span>Carbon-Neutral Freight</span>
                  <span id="chk-shipping" class="font-semibold text-stone-900">$0.00</span>
                </div>
                <div class="flex justify-between">
                  <span>Taxes (5%)</span>
                  <span id="chk-tax" class="font-semibold text-stone-900">$0.00</span>
                </div>
                <div class="flex justify-between text-base font-bold text-stone-900 pt-3 border-t border-stone-200">
                  <span>Grand Total</span>
                  <span id="chk-grand-total" class="text-emerald-950 font-extrabold text-lg">$0.00</span>
                </div>
              </div>
            </div>

            <!-- Trust Badges -->
            <div class="pt-6 border-t border-stone-200/80 mt-6 grid grid-cols-2 gap-2 text-[10px] text-stone-500">
              <div class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                <span>FSC® Certified Supply Chain</span>
              </div>
            </div>

          </div>

        </div>

        <!-- View 2: ORDER CONFIRMATION SCREEN (Hidden initially) -->
        <div id="checkout-success-view" class="hidden p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
          <div class="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-lg animate-bounce">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
          </div>

          <div class="space-y-2">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
              Order Confirmed & Production Queued
            </span>
            <h2 class="text-3xl font-extrabold text-stone-900 tracking-tight">Thank You for Choosing Sustainable Packaging!</h2>
            <p class="text-stone-600 text-sm">
              Your order <span id="conf-order-id" class="font-mono font-bold text-stone-900">#ECO-892415</span> has been received and routed to our solar-powered facility.
            </p>
          </div>

          <!-- Environmental Impact Card -->
          <div class="p-5 rounded-2xl bg-emerald-950 text-white text-left shadow-xl space-y-3">
            <div class="flex items-center justify-between border-b border-emerald-800 pb-2">
              <span class="text-xs uppercase font-bold tracking-wider text-emerald-300">Sustainability Receipt</span>
              <span class="text-xs text-emerald-400 font-mono">100% Repulpable</span>
            </div>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <span id="conf-plastic-saved" class="block text-xl font-extrabold text-emerald-300">18.4 kg</span>
                <span class="text-[10px] text-emerald-200">Plastic Displaced</span>
              </div>
              <div>
                <span class="block text-xl font-extrabold text-emerald-300">2 Trees</span>
                <span class="text-[10px] text-emerald-200">Planted via FSC</span>
              </div>
              <div>
                <span class="block text-xl font-extrabold text-emerald-300">Zero PE</span>
                <span class="text-[10px] text-emerald-200">Curbside Blue Bin</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button id="btn-print-receipt" class="w-full sm:w-auto px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Download Printable Invoice</span>
            </button>
            <button id="btn-continue-shopping" class="w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-xl shadow transition-all">
              Return to Catalog
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initCheckoutModal() {
  const backdrop = document.getElementById('checkout-modal-backdrop');
  const container = document.getElementById('checkout-modal-container');
  const closeBtn = document.getElementById('checkout-modal-close');

  const formView = document.getElementById('checkout-form-view');
  const successView = document.getElementById('checkout-success-view');

  const step1Panel = document.getElementById('checkout-step-1-panel');
  const step2Panel = document.getElementById('checkout-step-2-panel');
  const tabStep1 = document.getElementById('tab-step-1');
  const tabStep2 = document.getElementById('tab-step-2');

  const btnToStep2 = document.getElementById('btn-to-step-2');
  const btnBackToStep1 = document.getElementById('btn-back-to-step-1');
  const btnPlaceOrder = document.getElementById('btn-place-order');
  const btnPlaceOrderText = document.getElementById('btn-place-order-text');
  const spinner = document.getElementById('btn-order-spinner');

  const payModeCard = document.getElementById('pay-mode-card');
  const payModeInvoice = document.getElementById('pay-mode-invoice');
  const cardInputs = document.getElementById('card-inputs-wrapper');
  const invoiceInputs = document.getElementById('invoice-inputs-wrapper');

  const btnPrintReceipt = document.getElementById('btn-print-receipt');
  const btnContinueShopping = document.getElementById('btn-continue-shopping');

  // Open / Close actions
  function openCheckout() {
    formView.classList.remove('hidden');
    successView.classList.add('hidden');
    goToStep(1);
    updateSummary();

    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    container.classList.remove('scale-95');
    container.classList.add('scale-100');
  }

  function closeCheckout() {
    container.classList.remove('scale-100');
    container.classList.add('scale-95');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeCheckout();
    });
  }

  window.addEventListener('open-checkout-modal', openCheckout);

  function goToStep(step) {
    if (step === 1) {
      step1Panel.classList.remove('hidden');
      step2Panel.classList.add('hidden');
      tabStep1.className = 'text-emerald-800 border-b-2 border-emerald-700 pb-3 -mb-3 flex items-center gap-1.5';
      tabStep2.className = 'flex items-center gap-1.5 text-stone-400';
    } else {
      step1Panel.classList.add('hidden');
      step2Panel.classList.remove('hidden');
      tabStep1.className = 'text-stone-500 flex items-center gap-1.5';
      tabStep2.className = 'text-emerald-800 border-b-2 border-emerald-700 pb-3 -mb-3 flex items-center gap-1.5';
    }
  }

  if (btnToStep2) {
    btnToStep2.addEventListener('click', () => {
      goToStep(2);
    });
  }

  if (btnBackToStep1) {
    btnBackToStep1.addEventListener('click', () => {
      goToStep(1);
    });
  }

  // Shipping Method Radios
  document.querySelectorAll('input[name="shipping-choice"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      cart.setShippingMethod(e.target.value);
      updateSummary();
    });
  });

  // Payment Mode toggle
  if (payModeCard && payModeInvoice) {
    payModeCard.addEventListener('click', () => {
      payModeCard.className = 'p-3 rounded-xl border-2 border-emerald-800 bg-white text-emerald-950 flex items-center justify-center gap-2';
      payModeInvoice.className = 'p-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 hover:bg-white flex items-center justify-center gap-2';
      cardInputs.classList.remove('hidden');
      invoiceInputs.classList.add('hidden');
    });

    payModeInvoice.addEventListener('click', () => {
      payModeInvoice.className = 'p-3 rounded-xl border-2 border-emerald-800 bg-white text-emerald-950 flex items-center justify-center gap-2';
      payModeCard.className = 'p-3 rounded-xl border border-stone-200 bg-stone-50 text-stone-600 hover:bg-white flex items-center justify-center gap-2';
      invoiceInputs.classList.remove('hidden');
      cardInputs.classList.add('hidden');
    });
  }

  // Update Summary Sidebar
  function updateSummary() {
    const miniItems = document.getElementById('chk-mini-items');
    const itemCount = document.getElementById('chk-item-count');
    const subtotalEl = document.getElementById('chk-subtotal');
    const discountRow = document.getElementById('chk-discount-row');
    const discountEl = document.getElementById('chk-discount');
    const shippingEl = document.getElementById('chk-shipping');
    const taxEl = document.getElementById('chk-tax');
    const grandTotalEl = document.getElementById('chk-grand-total');
    const plasticAvoided = document.getElementById('chk-plastic-avoided');
    const standardCostEl = document.getElementById('chk-standard-ship-cost');

    const items = cart.items;
    const subtotal = cart.getSubtotal();
    const discount = cart.getDiscountAmount();
    const shipping = cart.getShippingCost();
    const tax = cart.getTaxAmount();
    const total = cart.getTotal();

    if (itemCount) itemCount.textContent = `${items.length} item line${items.length === 1 ? '' : 's'}`;
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    if (discountRow && discountEl) {
      if (discount > 0) {
        discountRow.classList.remove('hidden');
        discountEl.textContent = `-$${discount.toFixed(2)}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE ($0.00)' : `$${shipping.toFixed(2)}`;
    if (standardCostEl) standardCostEl.textContent = subtotal >= cart.shippingThreshold ? 'FREE' : `$${cart.standardShippingCost.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (grandTotalEl) grandTotalEl.textContent = `$${total.toFixed(2)}`;

    // Estimate plastic saved
    const estimatedPlasticKg = (cart.getTotalUnits() * 0.045).toFixed(1);
    if (plasticAvoided) plasticAvoided.textContent = `${estimatedPlasticKg} kg`;

    if (miniItems) {
      miniItems.innerHTML = items.map(item => `
        <div class="py-2 flex items-center justify-between text-xs">
          <div class="pr-2 truncate">
            <span class="font-bold text-stone-900 block truncate">${item.name}</span>
            <span class="text-[11px] text-stone-500">${item.quantity} × $${item.price.toFixed(2)}</span>
          </div>
          <span class="font-bold text-stone-800 flex-shrink-0">$${(item.quantity * item.price).toFixed(2)}</span>
        </div>
      `).join('');
    }
  }

  // Place Order Simulation
  if (btnPlaceOrder) {
    btnPlaceOrder.addEventListener('click', () => {
      btnPlaceOrder.disabled = true;
      btnPlaceOrderText.textContent = 'Processing Eco-Order...';
      spinner.classList.remove('hidden');

      setTimeout(() => {
        const orderId = 'ECO-' + Math.floor(100000 + Math.random() * 900000);
        const plasticSaved = (cart.getTotalUnits() * 0.045).toFixed(1);

        document.getElementById('conf-order-id').textContent = '#' + orderId;
        document.getElementById('conf-plastic-saved').textContent = `${plasticSaved} kg`;

        cart.recordCompletedOrder({
          id: orderId,
          date: new Date().toISOString(),
          items: [...cart.items],
          total: cart.getTotal()
        });

        spinner.classList.add('hidden');
        btnPlaceOrder.disabled = false;
        btnPlaceOrderText.textContent = 'Place Sustainable Order';

        formView.classList.add('hidden');
        successView.classList.remove('hidden');

        // Optional celebration confetti if available or GSAP
        if (window.gsap) {
          window.gsap.fromTo(successView, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.2)' });
        }
      }, 1200);
    });
  }

  // Print Receipt
  if (btnPrintReceipt) {
    btnPrintReceipt.addEventListener('click', () => {
      window.print();
    });
  }

  // Return to shopping
  if (btnContinueShopping) {
    btnContinueShopping.addEventListener('click', () => {
      closeCheckout();
      window.location.hash = '#products';
    });
  }
}
