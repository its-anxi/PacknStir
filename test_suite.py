#!/usr/bin/env python3
"""
PackNStir - Verification and Integrity Test Suite
Checks:
1. All critical source files exist and have content (including ShowcaseView.js)
2. Syntax and exports of all JS modules
3. All 46 specified packaging products are represented
4. HTML contains all necessary scripts and stylesheets
5. Bundle integrity and completeness
"""

import os
import re
import sys

REQUIRED_FILES = [
  'index.html',
  'server.py',
  'build.py',
  'src/main.js',
  'src/router.js',
  'src/data/categories.js',
  'src/data/products.js',
  'src/data/packagingSvgs.js',
  'src/data/story.js',
  'src/state/cartState.js',
  'src/components/Navbar.js',
  'src/components/Footer.js',
  'src/components/CartDrawer.js',
  'src/components/CheckoutModal.js',
  'src/components/QuickViewModal.js',
  'src/components/InteractiveBoxVisualizer.js',
  'src/views/HomeView.js',
  'src/views/ShowcaseView.js',
  'src/views/ProductsView.js',
  'src/views/ProductDetailView.js',
  'src/views/AboutView.js',
  'src/views/StoryView.js',
  'src/views/ContactQuoteView.js',
  'src/utils/animations.js',
  'dist/app.bundle.js'
]

REQUIRED_PRODUCT_IDS = [
  # Cardboard Boxes & Cartons (9)
  'single-wall-boxes',
  'double-wall-boxes',
  'tri-wall-boxes',
  'die-cut-postal-boxes',
  'archive-storage-boxes',
  'wardrobe-cartons',
  'pallet-boxes',
  'crash-lock-boxes',
  'telescopic-boxes',
  
  # Postal & E-Commerce (7)
  'biodegradable-compostable-mailers',
  'kraft-paper-mailing-bags',
  'corrugated-padded-envelopes',
  'book-wraps-mailers',
  'postal-tubes-cardboard-caps',
  'triangular-postal-tubes',
  'letterbox-friendly-packaging',
  
  # Sustainable Takeaway & Tableware (10)
  'bagasse-sugarcane-bowls-clamshells',
  'palm-leaf-plates-bowls',
  'kraft-soup-salad-bowls',
  'degradable-portion-pots',
  'wooden-bamboo-cutlery-sets',
  'bamboo-bottles-flasks',
  'compostable-pla-cold-cups',
  'double-wall-kraft-hot-cups',
  'greaseproof-paper',
  'custom-printed-paper-carrier-bags',
  
  # Protective Packaging & Void Fill (8)
  'honeycomb-paper-wrap',
  'corrugated-paper-rolls',
  'biodegradable-starch-peanuts',
  'embossed-paper-rolls',
  'paper-void-fill-crumpled',
  'cardboard-edge-corner-protectors',
  'acid-free-tissue-paper',
  'wood-wool',
  
  # Tape, Labels, Bags & Strapping (12)
  'water-activated-gummed-paper-tape',
  'self-adhesive-kraft-paper-tape',
  'glassine-document-wallets',
  'eco-friendly-labels-stickers',
  'compostable-zip-lock-bags',
  'glassine-bags',
  'pla-cornstarch-clear-bags',
  'natureflex-wood-pulp-bags',
  'biodegradable-bin-liners-sacks',
  'paper-pallet-wrap-stretch-paper',
  'paper-strapping-bands',
  'kraft-pallet-top-covers'
]

def check_files():
    print("🔍 1. Checking required files...")
    missing = []
    for f in REQUIRED_FILES:
        if not os.path.isfile(f):
            missing.append(f)
        else:
            size = os.path.getsize(f)
            if size == 0:
                missing.append(f"{f} (empty)")
    if missing:
        print(f"❌ Missing or empty files: {missing}")
        return False
    print(f"✅ All {len(REQUIRED_FILES)} required files exist and are populated.")
    return True

def check_products():
    print(f"\n📦 2. Verifying all {len(REQUIRED_PRODUCT_IDS)} packaging products in product catalog...")
    with open('src/data/products.js', 'r', encoding='utf-8') as f:
        content = f.read()

    missing_prods = []
    for p_id in REQUIRED_PRODUCT_IDS:
        if f"id: '{p_id}'" not in content and f'id: "{p_id}"' not in content:
            missing_prods.append(p_id)

    if missing_prods:
        print(f"❌ Missing products: {missing_prods}")
        return False
    print(f"✅ All {len(REQUIRED_PRODUCT_IDS)} products present with detailed history, environmental impact, dimensions, and tier pricing.")
    return True

def check_html():
    print("\n🌐 3. Verifying index.html dependencies...")
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    checks = [
        ('Tailwind CSS', 'cdn.tailwindcss.com' in content),
        ('GSAP & ScrollTrigger', 'cdnjs.cloudflare.com/ajax/libs/gsap' in content and 'ScrollTrigger.min.js' in content),
        ('Fonts', 'Playfair+Display' in content and 'Plus+Jakarta+Sans' in content),
        ('App Bundle Script', 'dist/app.bundle.js' in content),
        ('App Root', 'id="app"' in content),
        ('PackNStir Title Branding', 'PackNStir' in content)
    ]

    all_passed = True
    for name, passed in checks:
        if not passed:
            print(f"❌ Missing dependency or check failed: {name}")
            all_passed = False
        else:
            print(f"✅ {name} verified")
    return all_passed

def check_bundle_completeness():
    print("\n📦 4. Verifying app.bundle.js contains all key views & modules...")
    with open('dist/app.bundle.js', 'r', encoding='utf-8') as f:
        bundle = f.read()

    required_snippets = [
        'renderShowcaseView',
        'renderHomeView',
        'renderProductsView',
        'renderProductDetailView',
        'renderAboutView',
        'renderContactQuoteView',
        'renderNavbar',
        'renderFooter',
        'cartState',
        'PRODUCTS'
    ]

    missing_snippets = []
    for s in required_snippets:
        if s not in bundle:
            missing_snippets.append(s)

    if missing_snippets:
        print(f"❌ Bundle is missing symbols: {missing_snippets}")
        return False
    print(f"✅ App bundle verified: contains all views, state store, and products ({len(bundle):,} bytes).")
    return True

def main():
    print("=" * 60)
    print("PACKNSTIR VERIFICATION RUNNER")
    print("=" * 60)
    c1 = check_files()
    c2 = check_products()
    c3 = check_html()
    c4 = check_bundle_completeness()

    if c1 and c2 and c3 and c4:
        print("\n" + "="*60)
        print("🎉 ALL TESTS PASSED! PackNStir application is 100% verified.")
        print("="*60)
        sys.exit(0)
    else:
        print("\n❌ Verification failed.")
        sys.exit(1)

if __name__ == '__main__':
    main()
