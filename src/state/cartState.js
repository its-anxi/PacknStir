// PackNStir - Reactive Shopping Cart & Checkout State Store

class CartStore {
  constructor() {
    this.storageKey = 'ecopack_studio_cart_v1';
    this.ordersKey = 'ecopack_studio_orders_v1';
    this.listeners = new Set();
    this.appliedDiscount = null; // { code: 'ECO10', percent: 10, label: '10% Launch Discount' }
    this.shippingThreshold = 150.00;
    this.standardShippingCost = 18.00;
    this.expressShippingCost = 35.00;
    this.selectedShippingMethod = 'standard'; // 'standard' or 'express'

    this.items = this.loadCart();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Could not read cart from localStorage', e);
    }
    // Return sample starter items for instant testing if cart is empty
    return [
      {
        cartItemId: 'sample-1',
        productId: 'corrugated-mailers',
        name: 'Roll-End Tuck-Front Mailer Boxes',
        price: 0.68,
        quantity: 300,
        unit: 'mailer',
        size: 'Standard Retail (10"×8"×3")',
        finish: 'Kraft Exterior + Interior Botanical Print',
        material: 'E-Flute Corrugated Board (100% Recycled)',
        svgType: 'mailer-box'
      },
      {
        cartItemId: 'sample-2',
        productId: 'perfume-boxes',
        name: 'Magnetic Rigid Perfume Setup Boxes',
        price: 2.85,
        quantity: 250,
        unit: 'box',
        size: '50ml Standard (110×110×150mm)',
        finish: 'Debossed Metallic Green Foil',
        material: '1200 GSM High-Density Recycled Greyboard',
        svgType: 'perfume-box'
      }
    ];
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.items));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
    this.notify();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    for (const listener of this.listeners) {
      try {
        listener(this);
      } catch (e) {
        console.error('Error in cart listener', e);
      }
    }
  }

  addItem(product, quantity = 1, options = {}) {
    const qty = Math.max(1, parseInt(quantity) || 1);
    const size = options.size || product.dimensionsPreset || 'Standard';
    const finish = options.finish || (product.finishOptions ? product.finishOptions[0] : 'Natural');
    const material = options.material || product.material;
    const unitPrice = options.customPrice !== undefined ? options.customPrice : product.price;

    // Check if duplicate item exists with identical options
    const existingIndex = this.items.findIndex(
      item => item.productId === product.id && item.size === size && item.finish === finish && item.material === material
    );

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += qty;
    } else {
      this.items.push({
        cartItemId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
        productId: product.id,
        name: product.name,
        price: unitPrice,
        quantity: qty,
        unit: product.unit || 'unit',
        size,
        finish,
        material,
        svgType: product.svgType || 'mailer-box'
      });
    }

    this.saveCart();
    this.triggerCartDrawerOpen();
  }

  updateQuantity(cartItemId, quantity) {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      this.removeItem(cartItemId);
      return;
    }

    const item = this.items.find(i => i.cartItemId === cartItemId);
    if (item) {
      item.quantity = qty;
      this.saveCart();
    }
  }

  removeItem(cartItemId) {
    this.items = this.items.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
  }

  clearCart() {
    this.items = [];
    this.appliedDiscount = null;
    this.saveCart();
  }

  applyDiscountCode(code) {
    const cleanCode = (code || '').trim().toUpperCase();
    if (cleanCode === 'ECO10') {
      this.appliedDiscount = { code: 'ECO10', percent: 10, label: '10% Sustainability Promo' };
      this.notify();
      return { success: true, message: 'Promo ECO10 applied: 10% discount!' };
    }
    if (cleanCode === 'ZEROPLASTIC' || cleanCode === 'ZERO') {
      this.appliedDiscount = { code: 'ZEROPLASTIC', percent: 15, label: '15% Zero-Plastic Pledge' };
      this.notify();
      return { success: true, message: 'Code ZEROPLASTIC applied: 15% discount!' };
    }
    if (cleanCode === 'FREESHIP') {
      this.appliedDiscount = { code: 'FREESHIP', percent: 0, freeShipping: true, label: 'Free Carbon-Neutral Shipping' };
      this.notify();
      return { success: true, message: 'Code FREESHIP applied: Shipping is now free!' };
    }
    return { success: false, message: 'Invalid or expired promo code. Try "ECO10" or "ZEROPLASTIC".' };
  }

  removeDiscountCode() {
    this.appliedDiscount = null;
    this.notify();
  }

  setShippingMethod(method) {
    if (method === 'standard' || method === 'express') {
      this.selectedShippingMethod = method;
      this.notify();
    }
  }

  getItemCount() {
    return this.items.reduce((sum, item) => sum + (item.quantity > 0 ? 1 : 0), 0);
  }

  getTotalUnits() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  getSubtotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getDiscountAmount() {
    if (!this.appliedDiscount) return 0;
    if (this.appliedDiscount.percent) {
      return (this.getSubtotal() * this.appliedDiscount.percent) / 100;
    }
    return 0;
  }

  getShippingCost() {
    if (this.appliedDiscount && this.appliedDiscount.freeShipping) return 0;
    const subtotal = this.getSubtotal();
    if (this.selectedShippingMethod === 'express') {
      return this.expressShippingCost;
    }
    if (subtotal >= this.shippingThreshold) {
      return 0; // Free carbon neutral shipping for orders over $150
    }
    return this.standardShippingCost;
  }

  getTaxAmount() {
    const taxable = Math.max(0, this.getSubtotal() - this.getDiscountAmount());
    return taxable * 0.05; // 5% standard green business tax estimate
  }

  getTotal() {
    const sub = this.getSubtotal();
    if (sub === 0) return 0;
    const discount = this.getDiscountAmount();
    const shipping = this.getShippingCost();
    const tax = this.getTaxAmount();
    return Math.max(0, sub - discount + shipping + tax);
  }

  getProgressToFreeShipping() {
    const sub = this.getSubtotal();
    const ratio = Math.min(1, sub / this.shippingThreshold);
    const remaining = Math.max(0, this.shippingThreshold - sub);
    return {
      ratio: ratio * 100,
      remaining,
      isFree: sub >= this.shippingThreshold
    };
  }

  recordCompletedOrder(orderData) {
    try {
      const existing = JSON.parse(localStorage.getItem(this.ordersKey) || '[]');
      existing.unshift(orderData);
      localStorage.setItem(this.ordersKey, JSON.stringify(existing.slice(0, 10)));
    } catch (e) {
      console.warn('Could not save order history', e);
    }
    this.clearCart();
  }

  triggerCartDrawerOpen() {
    window.dispatchEvent(new CustomEvent('open-cart-drawer'));
  }
}

export const cart = new CartStore();
