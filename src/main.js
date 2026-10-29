import { renderNavbar, initNavbar } from './components/Navbar.js';
import { renderFooter, initFooter } from './components/Footer.js';
import { renderCartDrawer, initCartDrawer } from './components/CartDrawer.js';
import { renderCheckoutModal, initCheckoutModal } from './components/CheckoutModal.js';
import { renderQuickViewModal, initQuickViewModal } from './components/QuickViewModal.js';
import { Router } from './router.js';

function bootstrapApp() {
  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  // Mount Application Shell
  appRoot.innerHTML = `
    <!-- Top Navigation Bar -->
    <div id="navbar-root">
      ${renderNavbar()}
    </div>

    <!-- Main View Dynamic Container -->
    <main id="main-content" class="min-h-screen">
      <!-- Router renders current page view here -->
    </main>

    <!-- Footer -->
    <div id="footer-root">
      ${renderFooter()}
    </div>

    <!-- Modals & Slide-Overs -->
    <div id="cart-drawer-root">
      ${renderCartDrawer()}
    </div>

    <div id="checkout-modal-root">
      ${renderCheckoutModal()}
    </div>

    <div id="quickview-modal-root">
      ${renderQuickViewModal()}
    </div>
  `;

  // Initialize components
  initNavbar();
  initFooter();
  initCartDrawer();
  initCheckoutModal();
  initQuickViewModal();

  // Initialize SPA Router
  new Router('main-content');
}

// Ensure execution whether loaded before or after DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
