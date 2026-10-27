import { renderHomeView, initHomeView } from './views/HomeView.js';
import { renderProductsView, initProductsView } from './views/ProductsView.js';
import { renderProductDetailView, initProductDetailView } from './views/ProductDetailView.js';
import { renderAboutView, initAboutView } from './views/AboutView.js';
import { renderStoryView, initStoryView } from './views/StoryView.js';
import { renderContactQuoteView, initContactQuoteView } from './views/ContactQuoteView.js';

export class Router {
  constructor(appContainerId) {
    this.container = document.getElementById(appContainerId);
    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    // Initial route
    this.handleRoute();
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || 'home';
    const [pathPart, queryPart] = rawHash.split('?');
    const path = pathPart.toLowerCase();

    // Parse query params (e.g. category=food)
    const params = new URLSearchParams(queryPart || '');
    const categoryParam = params.get('category') || 'all';

    // Highlight active link in navbar
    this.updateActiveNavLinks(path);

    // Fade out and render new view
    const renderFn = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (path === 'home') {
        this.container.innerHTML = renderHomeView();
        initHomeView();
      } else if (path === 'products') {
        this.container.innerHTML = renderProductsView(categoryParam);
        initProductsView(categoryParam);
      } else if (path.startsWith('product/')) {
        const productId = path.replace('product/', '');
        this.container.innerHTML = renderProductDetailView(productId);
        initProductDetailView(productId);
      } else if (path === 'about') {
        this.container.innerHTML = renderAboutView();
        initAboutView();
      } else if (path === 'story') {
        this.container.innerHTML = renderStoryView();
        initStoryView();
      } else if (path === 'quote' || path === 'contact') {
        this.container.innerHTML = renderContactQuoteView();
        initContactQuoteView();
      } else {
        // Fallback to home
        this.container.innerHTML = renderHomeView();
        initHomeView();
      }

      // GSAP entrance transition
      if (window.gsap) {
        window.gsap.fromTo(this.container, 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
      }
    };

    if (window.gsap && this.container.children.length > 0) {
      window.gsap.to(this.container, {
        opacity: 0,
        duration: 0.15,
        onComplete: renderFn
      });
    } else {
      renderFn();
    }
  }

  updateActiveNavLinks(currentPath) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkPath = href.replace('#', '').split('?')[0].toLowerCase();
      
      if (currentPath === linkPath || (currentPath.startsWith('product') && linkPath === 'products')) {
        link.classList.add('text-emerald-900', 'font-black');
        link.classList.remove('text-stone-700');
      } else {
        link.classList.remove('text-emerald-900', 'font-black');
        link.classList.add('text-stone-700');
      }
    });
  }
}
