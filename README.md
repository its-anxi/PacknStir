# EcoPack Studio - Premium Sustainable Paper & Cardboard Packaging

A modern, high-performance, and responsive e-commerce web application for **EcoPack Studio**, a premium packaging brand engineering zero-plastic paper and cardboard solutions for Food & Beverage, Luxury & Retail, E-Commerce & Shipping, and Paper Bags.

Built with **JavaScript (modular ES6 & SPA router)**, **Tailwind CSS**, and **GSAP (GreenSock)** for smooth animations, interactive 3D packaging visualizers, and stateful e-commerce flows.

---

## 🚀 Quick Start Guide

### Option 1: Development Server (Recommended)
Launch the built-in development server with one command:
```bash
python3 server.py
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Direct Browser Launch
You can also directly double-click or open `index.html` in any modern web browser (Google Chrome, Safari, Firefox, Edge). The pre-bundled distribution in `dist/app.bundle.js` operates smoothly without requiring a web server.

---

## 🌟 Key Features & Pages

### 1. Navigation Bar & Shopping Cart Drawer
* **Sticky Navbar**: Quick access to Home, Products, About Us, Our Story, and Bespoke Custom Quote. Includes category dropdown and real-time cart item count badge.
* **Interactive Cart Drawer**: Slides smoothly in from the right. Real-time subtotal calculation, quantity steppers, promo codes (`ECO10`, `ZEROPLASTIC`, `FREESHIP`), and a dynamic progress bar toward **Free Carbon-Neutral Shipping** ($150 target).

### 2. Home Page
* **Dynamic Hero Section**: High-impact eco headline, value proposition badges, and an **Interactive 3D / Animated Packaging Visualizer**.
  * **3D Perspective View**: Rotate and inspect an isometric corrugated mailer box.
  * **Interactive Lid Assembly**: Open and close the box lid with GSAP animations.
  * **Live Material Swatches**: Preview Natural Kraft, Forest Green Foil, Crisp White, and Charcoal Matte.
  * **Unfold Dieline View**: Inspect the flat CAD engineering dieline with die-cut trim and crease lines.
  * **Dimension Callouts**: Toggle length, width, and depth guide annotations ($L \times W \times H$).
* **Explore Categories Grid**: Highlighting Food & Beverage, Luxury & Retail, E-Commerce & Shipping, and Paper Bags.
* **Featured Products Showcase**: Quick-add to cart and quick-view modal triggers.
* **Eco-Credentials Counter**: Animated statistics (14.8M+ plastic units displaced, 84,200 trees preserved, 100% recyclable, <90 days soil biodegradation).
* **Barrier Tech Comparison**: Science breakdown comparing non-toxic aqueous plant-starch coatings with hazardous polyethylene (PE) plastics and PFAS chemicals.
* **Client Trust Badges & Testimonials**: Reviews from D2C founders, artisan bakeries, and luxury houses.

### 3. Products & E-Commerce Catalog
* **Filterable Industry Grid**: Filter by Food & Beverage, Luxury & Retail, E-Commerce & Shipping, or Bags & Accessories.
* **Live Search & Sort**: Instant text search and sorting by Price, MOQ, and Top Rated.
* **19 Bespoke Product Cards**: Handcrafted architectural SVG representations, material details, MOQ badges, and unit pricing.
* **Quick View Modal**: Rapid inspection with size and finish options, quantity input, and instant cart add.

### 4. Product Detail Page (PDP)
* **High-Resolution Gallery**: Multi-angle view switcher (3D Angle, Open Box, CAD Dieline, Macro Detail).
* **Interactive Sizing & Finish Configurator**: Standard sizing presets vs custom dimensions.
* **Volume Tiered Pricing Matrix**: Interactive price table with unit discounts for volume orders (e.g. 500, 1,000, 2,500, 5,000 units).
* **Comprehensive Tabs**: Technical Engineering Specs, Sustainability & Disposal Guide, Digital Artwork & Dielines (.AI, .PDF guidelines), and Freight Lead Times.
* **Frequently Paired Solutions**: Recommended packaging pairings.

### 5. Brand Story & About Pages
* **About Us**: Zero-plastic manifesto, closed-loop circular agroforestry model, and comprehensive sustainable materials guide (fluting calipers, rigid greyboard, aqueous dispersion, molded pulp).
* **Our Story**: Interactive milestone timeline tracing the company from founding in 2018 to the honeycomb mailer breakthrough, PFAS-free barrier coating, and solar-powered closed-loop hub.

### 6. Contact & Custom Quote Page
* **Split Layout**: Direct headquarters and factory contact info, direct structural engineering support, and bespoke order FAQ.
* **Interactive 4-Step Bespoke Packaging Estimator**:
  * Step 1: Packaging architecture selection (Mailer, Rigid, Food Takeaway, Padded Mailer, Bag, Custom Shape).
  * Step 2: Custom dimensions ($L \times W \times H$ in mm) and substrate fluting grade.
  * Step 3: Print finish (Raw Unprinted, 1-Color Flexo, Full CMYK, Hot-Foil Stamping).
  * Step 4: Volume slider (500 to 25,000+ units) and drag-and-drop artwork file uploader.
  * **Real-time unit price range and total cost calculation**.
  * Instant CAD quote submission with generated reference tracking ID.

### 7. Complete Checkout & Order Confirmation Flow
* **Multi-Step Checkout Modal**:
  * Step 1: Contact details & carbon-neutral delivery options (Standard Ground vs Express Electric Courier).
  * Step 2: Payment method (Simulated Credit/Debit Card or B2B Net-30 Corporate Terms).
  * Environmental impact pledge showing kg of plastic diverted and native trees planted.
* **Order Confirmation Screen**:
  * Confetti celebration and unique Order ID.
  * Environmental sustainability receipt.
  * Downloadable / printable tax invoice.

---

## 📦 Complete Product Catalog (19 Items)

| Category | Product Name | Material & Caliper | Key Features |
|---|---|---|---|
| **Food & Beverage** | Artisan Micro-Flute Pizza Boxes | E-Flute Corrugated (1.5mm) | Grease-resistant aqueous barrier, corner steam vents |
| **Food & Beverage** | Leak-Proof Gable Takeaway Boxes | 320 GSM Heavy Kraft | Single-piece zero-seam leak proof, integrated handle |
| **Food & Beverage** | Ventilated Clamshell Burger Boxes | 300 GSM Grease-Proof Board | Push-tab latch, steam vents, stackable lid |
| **Food & Beverage** | Clear-Window Pastry & Cake Boxes | 400 GSM SBS White / Kraft | Transparent wood-cellulose window, drop-down door |
| **Food & Beverage** | Molded Pulp Multi-Cup Drink Trays | 100% Recovered Newsprint Pulp | Snappable 4-cup to 2-cup tray, deep anti-tilt wells |
| **Luxury & Retail** | Magnetic Rigid Perfume Setup Boxes | 1200 GSM Greyboard + Velvet | Concealed rare-earth magnets, molded pulp insert |
| **Luxury & Retail** | Two-Piece Velvet-Lined Jewelry Boxes | 1500 GSM Greyboard + Linen Wrap | Slow vacuum-release lid, organic kapok pillow |
| **Luxury & Retail** | Skincare Tuck-End Serum Cartons | 350 GSM Solid Bleached Sulfate | Reverse tuck, gold foil embossing, dropper lock |
| **Luxury & Retail** | Collapsible Magnetic Apparel Boxes | 1400 GSM Rigid Greyboard | Ships flat (saves 75% freight), woven ribbon closure |
| **Luxury & Retail** | Multi-Tier Confectionery Partition Boxes | 600 GSM Rigid Box + Grid | Food-grade interlocking dividers, glassine slip |
| **E-Commerce & Shipping**| Roll-End Tuck-Front Mailer Boxes | E-Flute Corrugated (32 ECT) | Triple-wall crush resistance, interior full print |
| **E-Commerce & Shipping**| Heavy-Duty RSC Shipping Cartons | Double-Wall B/C Flute (48 ECT) | Withstands 65kg stacking, international care glyphs |
| **E-Commerce & Shipping**| Honeycomb Padded Paper Mailers | Kraft + Hexagonal Paper Mesh | Replaces plastic bubble wrap, curbside repulpable |
| **E-Commerce & Shipping**| Branded Water-Activated Gummed Tape | 70 GSM Kraft + Fiber Reinforcement | Potato-starch adhesive, molecular box bonding |
| **Paper Bags & Accessories**| Luxury Twisted-Handle Shopping Bags | 250 GSM Heavy Virgin Kraft | Turned-top reinforced hem, 15kg load rating |
| **Paper Bags & Accessories**| Square-Bottom Flat-Handle Grocery Bags | 110 GSM Post-Consumer Kraft | Self-standing block bottom, serrated safety edge |
| **Paper Bags & Accessories**| Reinforced Wine & Spirits Gift Bags | 220 GSM Ribbed Kraft | Collapsible center bottle divider, 450 GSM floor |
| **Paper Bags & Accessories**| Custom Branded Acid-Free Tissue Paper | 18 GSM Archival Sulfite Paper | Neutral pH 7.5, zero-VOC soy inks, composts in 21 days|
| **Paper Bags & Accessories**| Roll-Fed Compostable Logo Paper Stickers | 80 GSM Kraft + Starch Adhesive | Plant-based adhesive, zero vinyl, blue-bin safe |

---

## 🛠️ Codebase Structure

```
PacknStir/
├── index.html                           # Main entry point with Tailwind, Fonts & GSAP
├── server.py                            # Fast local development HTTP server
├── build.py                             # Automated bundler generating dist/app.bundle.js
├── test_suite.py                        # Automated verification & test suite
├── dist/
│   └── app.bundle.js                    # Pre-bundled standalone application
└── src/
    ├── main.js                          # Application bootstrap and mounting
    ├── router.js                        # Client-side hash router with smooth transitions
    ├── data/
    │   ├── categories.js                # Industry categories, stats, and certifications
    │   ├── packagingSvgs.js             # High-fidelity SVG packaging mockups
    │   ├── products.js                  # Complete catalog of all 19 products
    │   └── story.js                     # Brand timeline, materials science, testimonials
    ├── state/
    │   └── cartState.js                 # Reactive shopping cart & checkout store
    ├── components/
    │   ├── Navbar.js                    # Sticky header with mobile drawer & cart badge
    │   ├── Footer.js                    # Newsletter, trust badges, sitemap
    │   ├── CartDrawer.js                # Slide-in cart with free-shipping meter & promos
    │   ├── CheckoutModal.js             # Multi-step checkout & order confirmation
    │   ├── QuickViewModal.js            # Rapid product preview modal
    │   └── InteractiveBoxVisualizer.js  # 3D isometric box visualizer with unfold dieline
    ├── views/
    │   ├── HomeView.js                  # Hero, 3D viewer, categories, counters, reviews
    │   ├── ProductsView.js              # Filterable catalog grid with search & sort
    │   ├── ProductDetailView.js         # Deep PDP with tiered pricing & customizer
    │   ├── AboutView.js                 # Zero-plastic manifesto & circular diagram
    │   ├── StoryView.js                 # Growth timeline & solar facility spotlight
    │   └── ContactQuoteView.js          # Bespoke packaging quote calculator
    └── utils/
        └── animations.js                # GSAP animation helpers
```

---

## 🧪 Testing & Verification

Run the test suite at any time:
```bash
python3 test_suite.py
```
To re-bundle after making modular edits in `src/`:
```bash
python3 build.py
```

---

## 🌿 Sustainability Certifications

* **FSC® Recycled & Mix**: Pulp harvested strictly from well-managed certified forests.
* **TÜV Austria OK Compost Home (EN 13432)**: Complete biodegradation in home garden compost in <90 days.
* **A Plastic Planet Trustmark**: 0.00% synthetic polyethylene, PLA, or wax coatings.
* **Soy & Algae Ink Verified**: Low VOC emissions, heavy metal-free plant pigments.
