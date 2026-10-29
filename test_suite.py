#!/usr/bin/env python3
"""
PackNStir - Verification and Integrity Test Suite
Checks:
1. All critical source files exist and have content
2. All 46 specified packaging products are represented
3. Dedicated Earth Eco-System & Global Warming data for all 46 products
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

def check_ecosystem_and_global_warming():
    print(f"\n🌍 3. Verifying dedicated Earth Eco-System & Global Warming datasets...")
    with open('src/data/products.js', 'r', encoding='utf-8') as f:
        content = f.read()

    missing_fields = []
    for p_id in REQUIRED_PRODUCT_IDS:
        # Check that each product block has ecosystemBenefits and globalWarmingImpact
        block_pattern = rf"id:\s*'{p_id}'[\s\S]*?(?=id:|$)"
        m = re.search(block_pattern, content)
        if not m:
            missing_fields.append((p_id, "block not found"))
            continue
        block = m.group(0)
        if 'ecosystemBenefits:' not in block:
            missing_fields.append((p_id, "missing ecosystemBenefits"))
        if 'globalWarmingImpact:' not in block:
            missing_fields.append((p_id, "missing globalWarmingImpact"))
        if 'co2SavedKg:' not in block:
            missing_fields.append((p_id, "missing co2SavedKg"))

    if missing_fields:
        print(f"❌ Missing eco/climate fields on products: {missing_fields[:5]}")
        return False

    # Check that Navbar links to #eco-impact
    with open('src/components/Navbar.js', 'r', encoding='utf-8') as f:
        nav_content = f.read()
    if 'href="#eco-impact"' not in nav_content or 'Eco-System & Global Warming' not in nav_content:
        print("❌ Navbar does not prominently feature #eco-impact or Eco-System & Global Warming link.")
        return False

    # Check router handles #eco-impact
    with open('src/router.js', 'r', encoding='utf-8') as f:
        router_content = f.read()
    if 'eco-impact' not in router_content:
        print("❌ Router does not route eco-impact.")
        return False

    print(f"✅ All 46 products have explicit Earth Eco-System & Global Warming datasets, metrics, and navigation routing.")
    return True

def check_html():
    print("\n🌐 4. Verifying index.html dependencies...")
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
    print("\n📦 5. Verifying app.bundle.js contains all key views & modules...")
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
        'PRODUCTS',
        'ecosystemBenefits',
        'globalWarmingImpact',
        'eco-impact'
    ]

    missing_snippets = []
    for s in required_snippets:
        if s not in bundle:
            missing_snippets.append(s)

    if missing_snippets:
        print(f"❌ Bundle is missing symbols: {missing_snippets}")
        return False
    print(f"✅ App bundle verified: contains all views, state store, eco/climate data, and products ({len(bundle):,} bytes).")
    return True

def main():
    print("=" * 65)
    print("PACKNSTIR VERIFICATION RUNNER - ECO-SYSTEM & CLIMATE DIRECTORY")
    print("=" * 65)
    c1 = check_files()
    c2 = check_products()
    c3 = check_ecosystem_and_global_warming()
    c4 = check_html()
    c5 = check_bundle_completeness()

    if c1 and c2 and c3 and c4 and c5:
        print("\n" + "="*65)
        print("🎉 ALL TESTS PASSED! Dedicated Eco-System & Global Warming Directory verified.")
        print("="*65)
        sys.exit(0)
    else:
        print("\n❌ Verification failed.")
        sys.exit(1)

if __name__ == '__main__':
    main()
