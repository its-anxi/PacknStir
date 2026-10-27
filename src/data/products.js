import { getProductSvg } from './packagingSvgs.js';

export const PRODUCTS = [
  // ==========================================
  // 🍕 FOOD & BEVERAGE PACKAGING
  // ==========================================
  {
    id: 'pizza-boxes',
    name: 'Artisan Micro-Flute Pizza Boxes',
    category: 'food',
    categoryName: 'Food & Beverage',
    svgType: 'pizza-box',
    subtitle: 'Grease-resistant corrugated takeaway boxes with engineered corner ventilation.',
    price: 0.48,
    moq: 500,
    unit: 'box',
    featured: true,
    rating: 4.9,
    reviewCount: 142,
    badge: 'Best Seller',
    material: 'E-Flute Corrugated Kraft (1.5mm caliper)',
    boardWeight: '380 GSM Recycled Kraft Liner',
    coating: 'Plant-Starch Water-Based Aqueous Barrier (Zero PE / Zero Wax)',
    dimensionsPreset: '12" × 12" × 1.75" (305 × 305 × 45 mm)',
    dimensionsAvailable: ['10" Small (254mm)', '12" Medium (305mm)', '14" Large (355mm)', '16" X-Large (406mm)'],
    finishOptions: ['Raw Natural Kraft', 'Full Exterior CMYK Soy Ink', '1-Color Flexo Hot Stamp', 'Bleached White Liner'],
    ecoBadges: ['100% Curbside Recyclable', 'Zero Plastic Lining', 'FSC® Recycled', 'Home Compostable'],
    leadTime: '3-5 business days (stock) / 8-10 days (custom print)',
    description: 'Designed specifically for modern pizzerias and bakeries requiring heat retention without sogginess. Our micro-flute pizza boxes feature precision die-cut corner exhaust vents that release steam while locking in crust crispness. Protected by an ultra-thin aqueous barrier that repels oils and melted cheeses without using synthetic polyethylene linings.',
    features: [
      'Engineered steam dissipation tabs preserve crust crispness',
      'Food-grade aqueous coating repels heavy oils and mozzarella fats',
      'Sturdy crush-resistant E-flute architecture stacks up to 8 boxes high',
      'Custom exterior and interior lid printing with plant-derived soy inks'
    ],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.58, total: 290 },
      { qty: 1000, pricePerUnit: 0.48, total: 480 },
      { qty: 2500, pricePerUnit: 0.41, total: 1025 },
      { qty: 5000, pricePerUnit: 0.35, total: 1750 }
    ],
    specs: {
      'Board Grade': 'E-Flute Micro-Corrugated (150# test)',
      'Burst Strength': '175 Mullen (PSI)',
      'Thermal Retention': 'Up to 45 minutes at >60°C',
      'Disposal': 'Blue bin paper recycling or backyard compost'
    }
  },
  {
    id: 'takeaway-boxes',
    name: 'Leak-Proof Gable Takeaway Boxes',
    category: 'food',
    categoryName: 'Food & Beverage',
    svgType: 'takeaway-box',
    subtitle: 'Integrated handle lunch containers with folded poly-free leak barriers.',
    price: 0.36,
    moq: 500,
    unit: 'container',
    featured: true,
    rating: 4.8,
    reviewCount: 98,
    badge: 'Zero Leak',
    material: 'Virgin Unbleached Kraft Board',
    boardWeight: '320 GSM Heavy Kraft',
    coating: 'Hydrophobic & Oleophobic Water-Based Dispersion',
    dimensionsPreset: '8" × 5" × 4.5" (200 × 125 × 115 mm)',
    dimensionsAvailable: ['Small (600ml / 20oz)', 'Medium (1000ml / 34oz)', 'Large (1500ml / 51oz)', 'Gable Handle Tall'],
    finishOptions: ['Natural Brown Kraft', 'White Coated Exterior', 'Full Custom Flexo Print'],
    ecoBadges: ['Compostable EN13432', 'PFAS-Free Certified', 'Zero Polyethylene'],
    leadTime: '3-4 business days (stock) / 7-9 days (custom)',
    description: 'The modern alternative to plastic clamshells and Styrofoam. Handcrafted from unbleached virgin wood pulp, these gable takeaway containers fold into an airtight self-locking carry shape with integrated ergonomic handle tabs. Fully certified PFAS-free and water-sealed for dressings, broths, and hot curries.',
    features: [
      'Single-piece die cut with zero open corner seams for complete leak defense',
      'Integrated lock handle eliminates the need for secondary plastic carrier bags',
      'Microwave safe up to 3 minutes for easy customer reheating',
      'Flat-pack nested shipping saves 65% warehouse storage volume'
    ],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.44, total: 220 },
      { qty: 1000, pricePerUnit: 0.36, total: 360 },
      { qty: 2500, pricePerUnit: 0.31, total: 775 },
      { qty: 5000, pricePerUnit: 0.26, total: 1300 }
    ],
    specs: {
      'Capacity': '1,200 ml / 40 fl oz',
      'Temperature Range': '-20°C to +120°C',
      'Handle Capacity': 'Up to 2.2 kg carry load',
      'Coating Method': 'Aqueous dispersion roll coating'
    }
  },
  {
    id: 'burger-boxes',
    name: 'Ventilated Clamshell Burger Boxes',
    category: 'food',
    categoryName: 'Food & Beverage',
    svgType: 'burger-box',
    subtitle: 'Sturdy interlocking clamshells designed for gourmet burgers and sandwiches.',
    price: 0.28,
    moq: 1000,
    unit: 'clamshell',
    featured: false,
    rating: 4.7,
    reviewCount: 86,
    badge: 'Hot & Crispy',
    material: 'Natural Kraft Paperboard with Micro-Corrugation',
    boardWeight: '300 GSM Grease-Proof Board',
    coating: 'Plant-Based Oleoresin Sealer',
    dimensionsPreset: '4.75" × 4.75" × 3.5" (120 × 120 × 90 mm)',
    dimensionsAvailable: ['Standard Burger (120mm)', 'Brioche / Gourmet (140mm)', 'Long Sub / Sandwich (220mm)'],
    finishOptions: ['Natural Kraft', 'Minimalist Black Soy Ink Stamp', 'Full Color CMYK'],
    ecoBadges: ['PFAS-Free', 'OK Compost Industrial & Home', 'FSC® Mix'],
    leadTime: '2-4 business days',
    description: 'Keep artisanal buns golden and crisp with our latch-locking clamshell box. Engineered with micro-vent slits along the back ridge to allow steam to escape while trapping core radiant heat. Grease-proof barrier prevents sauce bleed-through on hands and delivery bags.',
    features: [
      'Dual front push-tab lock ensures container stays closed during bike transit',
      'No synthetic plastics, PFAS chemicals, or wax lamination',
      'Stackable indented top lid fits snugly with bottom bases',
      'Quick single-motion pop-open setup for rapid commercial kitchen packing'
    ],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.34, total: 340 },
      { qty: 2500, pricePerUnit: 0.28, total: 700 },
      { qty: 5000, pricePerUnit: 0.23, total: 1150 },
      { qty: 10000, pricePerUnit: 0.19, total: 1900 }
    ],
    specs: {
      'Board Caliper': '0.7 mm thickness',
      'Grease Kit Rating': 'Kit 10+ Oil Resistance',
      'Recyclability': 'Curbside repulpable in standard recycling mills'
    }
  },
  {
    id: 'pastry-boxes',
    name: 'Clear-Window Pastry & Cake Boxes',
    category: 'food',
    categoryName: 'Food & Beverage',
    svgType: 'pastry-box',
    subtitle: 'Heavy-duty cake carriers with crystalline plant-cellulose display windows.',
    price: 0.72,
    moq: 300,
    unit: 'box',
    featured: false,
    rating: 4.9,
    reviewCount: 114,
    badge: 'Artisanal Display',
    material: 'Bleached White Solid Bleached Sulfate (SBS) / Kraft',
    boardWeight: '400 GSM Heavy-Duty Board',
    coating: 'Bioplastic Cellulose Window (Wood-Pulp Derived)',
    dimensionsPreset: '10" × 10" × 5" (254 × 254 × 127 mm)',
    dimensionsAvailable: ['6" Cupcake / Tart', '8" Single Cake', '10" Standard Tier', '12" Multi-Tier Carrier'],
    finishOptions: ['Clean Crisp White', 'Warm Kraft Tan', 'Gold Foil Stamped Crest'],
    ecoBadges: ['100% Compostable Cellulose Window', 'Non-Toxic Starch Glues'],
    leadTime: '4-6 business days',
    description: 'Showcase delicate patisserie, celebration cakes, and artisanal pastries without compromising your sustainability promise. Our windowed bakery boxes use transparent NatureFlex™ cellulose film made from renewable tree pulp rather than petroleum-based plastics. Features heavy-duty corner locks and optional cupcake tray inserts.',
    features: [
      'Ultra-clear anti-fog cellulose window derived 100% from renewable wood pulp',
      'Reinforced corrugated cake base supports tall tiered cakes up to 5 kg',
      'Front drop-down loading door allows cakes to slide in flat without smudging icing',
      'Optional 4-cup, 6-cup, or 12-cup pop-up cupcake divider inserts available'
    ],
    pricingTiers: [
      { qty: 300, pricePerUnit: 0.88, total: 264 },
      { qty: 600, pricePerUnit: 0.72, total: 432 },
      { qty: 1500, pricePerUnit: 0.62, total: 930 },
      { qty: 3000, pricePerUnit: 0.54, total: 1620 }
    ],
    specs: {
      'Window Film': 'Cellulose Diacetate (Bio-degrades within 60 days)',
      'Load Capacity': 'Up to 5 kg / 11 lbs',
      'Corner Structure': 'Glueless self-erecting double-wall locks'
    }
  },
  {
    id: 'beverage-carriers',
    name: 'Molded Pulp Multi-Cup Drink Trays',
    category: 'food',
    categoryName: 'Food & Beverage',
    svgType: 'beverage-carrier',
    subtitle: 'Nesting 2-cup and 4-cup drink caddies made from 100% recycled newsprint pulp.',
    price: 0.22,
    moq: 1000,
    unit: 'tray',
    featured: false,
    rating: 4.6,
    reviewCount: 65,
    badge: '100% Post-Consumer',
    material: 'Molded Paper Pulp (100% Recovered Fiber)',
    boardWeight: 'Dense thermoformed fiber',
    coating: 'Zero coating - pure mechanical interlocking fibers',
    dimensionsPreset: '8.5" × 8.5" × 2" (215 × 215 × 50 mm)',
    dimensionsAvailable: ['2-Cup Dual Caddy', '4-Cup Family Tray', '4-Cup with Center Snack Well'],
    finishOptions: ['Natural Gray/Brown Molded Pulp', 'Custom Embossed Brand Crest'],
    ecoBadges: ['100% Post-Consumer Waste', 'Zero Chemical Bleaching', 'Instant Compostability'],
    leadTime: '2-3 business days',
    description: 'Rigid, impact-absorbing molded pulp drink carriers engineered to hold 8 oz to 32 oz cups securely during transit. Deep tapered wells cradle hot coffees and iced beverages without spilling or tilting. High-density nesting design allows 500 units to fit in less than 0.2 cubic meters of storage.',
    features: [
      'Accommodates diverse cup diameters from 8 oz espresso to 32 oz cold brew',
      'Dual-well perforation allows 4-cup tray to be snapped in half into two 2-cup holders',
      'Deep ribbed structural wall prevents tipping and absorbs condensation runoff',
      'Disposes effortlessly directly into compost bin, soil garden, or paper recycling'
    ],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.26, total: 260 },
      { qty: 2500, pricePerUnit: 0.22, total: 550 },
      { qty: 5000, pricePerUnit: 0.18, total: 900 },
      { qty: 10000, pricePerUnit: 0.15, total: 1500 }
    ],
    specs: {
      'Cup Sizing': 'Fits 8 oz - 32 oz standard commercial cup bases',
      'Density': 'Thermoformed high-pressure pulp',
      'Biodegradation': '100% breaks down in 30-45 days in moist soil'
    }
  },

  // ==========================================
  // ✨ LUXURY & RETAIL BOXES
  // ==========================================
  {
    id: 'perfume-boxes',
    name: 'Magnetic Rigid Perfume Setup Boxes',
    category: 'luxury',
    categoryName: 'Luxury & Retail',
    svgType: 'perfume-box',
    subtitle: 'Heirloom-grade magnetic flap boxes with custom precision-molded pulp inserts.',
    price: 2.85,
    moq: 250,
    unit: 'box',
    featured: true,
    rating: 5.0,
    reviewCount: 167,
    badge: 'Luxury Tier',
    material: '1200 GSM High-Density Recycled Greyboard',
    boardWeight: '1200 GSM Board Wrapped in 150 GSM FSC Specialty Art Paper',
    coating: 'Velvet Soft-Touch Eco Varnish (Water-Based)',
    dimensionsPreset: '4.5" × 4.5" × 6.5" (115 × 115 × 165 mm)',
    dimensionsAvailable: ['30ml Flacon (90×90×130mm)', '50ml Standard (110×110×150mm)', '100ml Grand (125×125×180mm)'],
    finishOptions: ['Metallic Champagne Hot Foil', 'Blind Embossing', 'Debossed Metallic Green Foil', 'Matte Midnight Forest'],
    ecoBadges: ['Repulpable Rigid Board', 'Zero Plastic EVA Foam Alternative', 'Rare Earth Neodymium Recyclable Magnets'],
    leadTime: '7-10 business days',
    description: 'The pinnacle of sustainable luxury unboxing. Crafted from solid 2mm thick recycled greyboard and hand-wrapped with fine-milled FSC paper with a velvety soft-touch finish. Instead of non-recyclable EVA foam inserts, we engineer bespoke contour-molded bamboo/wood pulp cushions that hold fragrance bottles with micrometer precision.',
    features: [
      'Dual hidden magnetic closure gives an authoritative, satisfying tactile snap',
      'Zero-foam interior: precision molded cellulose cavity shaped exactly to your flacon',
      'Ultra-crisp 90-degree v-groove mitered edges for architectural silhouette',
      'Finished with biodegradable soy-based inks and non-polluting foil stamping'
    ],
    pricingTiers: [
      { qty: 250, pricePerUnit: 3.45, total: 862.5 },
      { qty: 500, pricePerUnit: 2.85, total: 1425 },
      { qty: 1000, pricePerUnit: 2.35, total: 2350 },
      { qty: 2500, pricePerUnit: 1.95, total: 4875 }
    ],
    specs: {
      'Caliper': '2.0 mm solid rigid greyboard core',
      'Insert Material': 'Molded cellulose / organic cotton velvet layer',
      'Magnetic Pull': 'N35 grade neodymium magnet encased in paper cavity'
    }
  },
  {
    id: 'watch-jewelry-boxes',
    name: 'Two-Piece Velvet-Lined Jewelry Boxes',
    category: 'luxury',
    categoryName: 'Luxury & Retail',
    svgType: 'watch-box',
    subtitle: 'Lift-off shoulder setup boxes lined with GOTS-certified organic cotton velvet.',
    price: 3.20,
    moq: 200,
    unit: 'box',
    featured: false,
    rating: 4.9,
    reviewCount: 92,
    badge: 'Artisan Finish',
    material: '1500 GSM Compressed Cardboard with Linen Texture Wrap',
    boardWeight: '1500 GSM Greyboard + 140 GSM Organic Linen Paper',
    coating: 'Natural Mineral Starch Pigments',
    dimensionsPreset: '4.2" × 4.2" × 3.2" (105 × 105 × 80 mm)',
    dimensionsAvailable: ['Ring / Earring Box (60×60×45mm)', 'Watch / Bangle Setup (105×105×80mm)', 'Necklace Presentation (160×120×40mm)'],
    finishOptions: ['Natural Bone White', 'Deep Olive Linen', 'Obsidian Slate', 'Gold Foil Stamp'],
    ecoBadges: ['GOTS Certified Organic Lining', 'Plastic-Free Setup', 'Heirloom Durability'],
    leadTime: '8-12 business days',
    description: 'Engineered for fine timepieces, rings, and heirloom jewelry. Features an exposed structural neck and shoulder that produces an elegant reveals-edge when the lid is lifted. The interior cushion is stuffed with pure kapok tree fiber and covered in organic cotton velvet, replacing petroleum polyurethane pillows.',
    features: [
      'Vacuum-release lid fit creates a slow, deliberate 3-second descent opening feel',
      'Interior jewelry pillow stuffed with natural organic kapok fiber instead of foam',
      'Embossed logo plate on lid with tactile debossing or hand-burnished eco-foil',
      'Meets all international fine jewelry presentation safety and non-tarnish standards'
    ],
    pricingTiers: [
      { qty: 200, pricePerUnit: 3.90, total: 780 },
      { qty: 500, pricePerUnit: 3.20, total: 1600 },
      { qty: 1000, pricePerUnit: 2.65, total: 2650 },
      { qty: 2000, pricePerUnit: 2.20, total: 4400 }
    ],
    specs: {
      'Shoulder Reveal': '6 mm accent collar in matching or contrasting paper',
      'Lining': '100% GOTS certified organic unbleached cotton velvet',
      'Tarnish Resistance': 'Sulfur-free, acid-free certified paper contact'
    }
  },
  {
    id: 'cosmetic-cartons',
    name: 'Skincare Tuck-End Serum Cartons',
    category: 'luxury',
    categoryName: 'Luxury & Retail',
    svgType: 'cosmetic-carton',
    subtitle: 'High-definition folding cartons with micro-embossing and gold foil accents.',
    price: 0.42,
    moq: 1000,
    unit: 'carton',
    featured: true,
    rating: 4.8,
    reviewCount: 205,
    badge: 'Clean Beauty',
    material: 'FSC® Virgin Sulfate White Paperboard',
    boardWeight: '350 GSM Solid Bleached Sulfate (SBS)',
    coating: 'Silky Matte Water-Based Varnish & Spot UV alternative',
    dimensionsPreset: '1.75" × 1.75" × 5" (45 × 45 × 127 mm)',
    dimensionsAvailable: ['15ml Dropper (38×38×95mm)', '30ml Serum (45×45×127mm)', '50ml Cream Jar (65×65×60mm)', '100ml Lotion (55×55×165mm)'],
    finishOptions: ['Soft-Touch Matte Varnish', 'Embossed Botanical Details', 'Gold / Rose Gold Eco-Foil', 'Raw Uncoated Kraft'],
    ecoBadges: ['100% Post-Consumer Recyclable', 'Vegetable Ink Certified', 'FSC-C149821'],
    leadTime: '4-6 business days',
    description: 'Designed specifically for clean beauty brands and dermatological serums. Features reverse-tuck closures with internal dust flaps that guard dropper pipettes against vibration during transit. The exterior accepts razor-sharp fine serif typography and micro-embossed textures without fiber cracking.',
    features: [
      'Precision creasing lines ensure 100% square corners and jam-free automated line packing',
      'Bright 94-brightness SBS paperboard delivers vibrant Pantone color fidelity',
      'Zero synthetic polymer film laminate ensures total curbside repulpability',
      'Optional internal folding insert locks glass serum droppers centered and isolated'
    ],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.52, total: 520 },
      { qty: 2500, pricePerUnit: 0.42, total: 1050 },
      { qty: 5000, pricePerUnit: 0.34, total: 1700 },
      { qty: 10000, pricePerUnit: 0.27, total: 2700 }
    ],
    specs: {
      'Caliper': '16 pt / 0.40 mm board thickness',
      'Tuck Style': 'Reverse Tuck End (RTE) or Straight Tuck End (STE)',
      'Brightness': '94% GE Brightness White surface'
    }
  },
  {
    id: 'apparel-boxes',
    name: 'Collapsible Magnetic Apparel Boxes',
    category: 'luxury',
    categoryName: 'Luxury & Retail',
    svgType: 'apparel-box',
    subtitle: 'Space-saving flat-pack luxury boxes with woven grosgrain ribbon closure.',
    price: 3.40,
    moq: 250,
    unit: 'box',
    featured: false,
    rating: 4.9,
    reviewCount: 78,
    badge: 'Flat-Pack Luxury',
    material: '1400 GSM Heavy Greyboard with Reinforced Corner Joints',
    boardWeight: '1400 GSM Rigid Board wrapped in 157 GSM Art Paper',
    coating: 'Scratch-Resistant Matte Eco-Shield',
    dimensionsPreset: '14" × 10" × 4" (355 × 254 × 102 mm)',
    dimensionsAvailable: ['Shirt / Scarf (310×220×50mm)', 'Knitwear / Blazer (380×280×100mm)', 'Coat / Boots (450×360×140mm)'],
    finishOptions: ['Forest Green Matte', 'Natural Kraft Exterior', 'Pure White with Black Grosgrain Ribbon', 'Midnight Charcoal'],
    ecoBadges: ['Saves 75% Freight Volume', 'Re-usable Multi-Year Storage', 'Zero Plastic Shell'],
    leadTime: '6-8 business days',
    description: 'Transform fashion e-commerce unboxing while slashing shipping freight costs. These premium apparel boxes ship completely flat with pre-applied adhesive corner strips. In just four seconds, customer service teams or warehouse packers erect them into rigid presentation boxes locked by concealed magnets and elegant woven ribbons.',
    features: [
      'Collapsible 4-corner design ships flat, reducing shipping container volume by 75%',
      'Assembles in 5 seconds with four heavy-duty plant-starch adhesive corner wings',
      'Features interchangeable woven organic cotton or wood-cellulose grosgrain ribbon ties',
      'Sturdy enough to be repurposed by end-consumers as permanent wardrobe storage'
    ],
    pricingTiers: [
      { qty: 250, pricePerUnit: 4.10, total: 1025 },
      { qty: 500, pricePerUnit: 3.40, total: 1700 },
      { qty: 1000, pricePerUnit: 2.85, total: 2850 },
      { qty: 2500, pricePerUnit: 2.40, total: 6000 }
    ],
    specs: {
      'Board Thickness': '2.3 mm solid core',
      'Ribbon Width': '25 mm organic cotton herringbone or grosgrain',
      'Transit Resistance': 'Drop tested from 1.2m without corner separation'
    }
  },
  {
    id: 'chocolate-boxes',
    name: 'Multi-Tier Confectionery Partition Boxes',
    category: 'luxury',
    categoryName: 'Luxury & Retail',
    svgType: 'chocolate-box',
    subtitle: 'Architectural confectionery boxes with grease-resistant paper grid dividers.',
    price: 1.65,
    moq: 300,
    unit: 'box',
    featured: false,
    rating: 4.8,
    reviewCount: 61,
    badge: 'Artisan Confection',
    material: 'Virgin Food-Grade Bleached Cardboard & Glassine',
    boardWeight: '600 GSM Rigid Box + 250 GSM Interlocking Grid',
    coating: 'Food-Grade Aqueous Barrier & Translucent Glassine Cushion Slip',
    dimensionsPreset: '8" × 5" × 1.5" (200 × 125 × 38 mm)',
    dimensionsAvailable: ['6-Piece Cavity (120×80×35mm)', '12-Piece Cavity (200×125×38mm)', '24-Piece Multi-Tier (240×160×65mm)'],
    finishOptions: ['Deep Cocoa Brown with Gold Stamping', 'Pastel Cream & Rose Gold', 'Natural Unbleached Kraft'],
    ecoBadges: ['Direct Food Contact Certified', 'Zero Plastic Thermoform Cavity', 'Compostable Glassine'],
    leadTime: '5-7 business days',
    description: 'Eliminate plastic vacuum-formed chocolate blister trays. Our artisan chocolate boxes use die-cut interlocking food-grade paperboard dividers that hold delicate truffles and pralines securely in place. Topped with a multi-ply glassine paper cushion that absorbs shock and preserves shine without non-recyclable bubble plastic.',
    features: [
      'Interlocking paperboard divider slots assemble quickly without adhesives',
      'Grease-resistant liner prevents cocoa butter bleed and unsightly grease rings',
      'Includes crystal-clear glassine protective sheet embossed with your custom brand monogram',
      'Rigid lift-off lid construction with debossed gold or copper metallic accents'
    ],
    pricingTiers: [
      { qty: 300, pricePerUnit: 2.05, total: 615 },
      { qty: 600, pricePerUnit: 1.65, total: 990 },
      { qty: 1500, pricePerUnit: 1.35, total: 2025 },
      { qty: 3000, pricePerUnit: 1.12, total: 3360 }
    ],
    specs: {
      'Cavity Dimensions': '32 mm × 32 mm individual square wells',
      'Cover Slip': '45 GSM calendered translucent glassine paper',
      'Barrier Quality': 'Grease and moisture repelling according to FDA 21 CFR 176.170'
    }
  },

  // ==========================================
  // 📦 E-COMMERCE & SHIPPING
  // ==========================================
  {
    id: 'corrugated-mailers',
    name: 'Roll-End Tuck-Front Mailer Boxes',
    category: 'shipping',
    categoryName: 'E-Commerce & Shipping',
    svgType: 'mailer-box',
    subtitle: 'Colorful branded subscription mailers with self-locking dust flaps.',
    price: 0.68,
    moq: 300,
    unit: 'mailer',
    featured: true,
    rating: 5.0,
    reviewCount: 310,
    badge: 'E-Com Favorite',
    material: 'E-Flute Corrugated Board (100% Recycled)',
    boardWeight: '200# Burst Strength / 32 ECT (Edge Crush Test)',
    coating: 'Uncoated Tactile Kraft / Matte White Eco-Coat',
    dimensionsPreset: '10" × 8" × 3" (254 × 203 × 76 mm)',
    dimensionsAvailable: ['Mini E-Com (6"×4"×2")', 'Standard Retail (10"×8"×3")', 'Shoe / Apparel (12"×9"×4")', 'Large Hamper (14"×12"×5")'],
    finishOptions: ['Kraft Exterior + Interior Botanical Print', 'Double-Sided Full Color Print', 'Minimalist Black Soy Ink', 'Pure White Kraft'],
    ecoBadges: ['100% Curbside Recyclable', 'FSC® Recycled Corrugated', 'SFI Certified', 'Zero Plastic Tape Required'],
    leadTime: '3-5 business days (stock) / 6-8 days (custom printed)',
    description: 'The workhorse of modern direct-to-consumer e-commerce. Our Roll-End Tuck-Front (RETF) mailer features double-wall sides for superior drop resistance, front locking tabs that secure contents without miles of plastic tape, and optional dual-adhesive tear strips for effortless customer returns.',
    features: [
      'Roll-end design provides triple-wall side crush protection against heavy postal transit',
      'Optional "Peel & Seal" strip + tear-strip pull tab for seamless, knife-free customer unboxing',
      'Print high-impact full-bleed graphics on the interior lid for an unforgettable unboxing moment',
      'Made from 85% post-consumer recycled corrugated fluting that recycles endlessly'
    ],
    pricingTiers: [
      { qty: 300, pricePerUnit: 0.84, total: 252 },
      { qty: 600, pricePerUnit: 0.68, total: 408 },
      { qty: 1500, pricePerUnit: 0.55, total: 825 },
      { qty: 3000, pricePerUnit: 0.46, total: 1380 }
    ],
    specs: {
      'Flute Size': 'E-Flute (1.6mm thickness) / 90 flutes per linear foot',
      'Crush Resistance': '32 ECT (Edge Crush Test rating)',
      'Closure Mechanism': 'Self-locking tuck ears + friction fit'
    }
  },
  {
    id: 'shipping-cartons',
    name: 'Heavy-Duty RSC Master Shipping Cartons',
    category: 'shipping',
    categoryName: 'E-Commerce & Shipping',
    svgType: 'shipping-carton',
    subtitle: 'Double-wall corrugated shipping boxes engineered for palletized freight.',
    price: 1.45,
    moq: 150,
    unit: 'carton',
    featured: false,
    rating: 4.8,
    reviewCount: 94,
    badge: 'Heavy Transit',
    material: 'Double-Wall B/C Flute Corrugated Board',
    boardWeight: '275# Burst Strength / 48 ECT Double Wall',
    coating: 'Moisture-Resistant Fiber Impregnation',
    dimensionsPreset: '18" × 14" × 12" (457 × 355 × 305 mm)',
    dimensionsAvailable: ['Medium Box (14"×10"×10")', 'Master Shipper (18"×14"×12")', 'Pallet Cube (24"×18"×18")', 'Bulk Heavy (30"×20"×20")'],
    finishOptions: ['Standard Kraft with Handling Symbols', 'Custom 2-Color Flexo Transit Marking'],
    ecoBadges: ['100% Recycled Corrugated', 'Heavy Duty Multi-Use', 'End-of-Life Repulpable'],
    leadTime: '2-4 business days',
    description: 'Built for high-volume freight, international warehousing, and B2B wholesale distribution. Engineered with interlocking B/C flutes providing exceptional stacking strength, allowing pallets to be stacked three tiers high without bowing or sidewall buckle. Printed with international handling glyphs using water-borne inks.',
    features: [
      'Double-wall corrugated fluting withstands up to 65 kg of dynamic stacking pressure',
      'Precision slotted flaps meet tightly in center for fast automated taping machine runs',
      'Pre-printed with universal transit care icons (Fragile, This Side Up, Keep Dry, Recycle)',
      'Moisture-resistant sizing compound prevents box softening in humid marine shipping containers'
    ],
    pricingTiers: [
      { qty: 150, pricePerUnit: 1.75, total: 262.5 },
      { qty: 300, pricePerUnit: 1.45, total: 435 },
      { qty: 800, pricePerUnit: 1.20, total: 960 },
      { qty: 2000, pricePerUnit: 0.98, total: 1960 }
    ],
    specs: {
      'Board Rating': '275# Double-Wall / 48 ECT',
      'Max Weight Capacity': 'Up to 36 kg / 80 lbs per box',
      'Flute Combination': 'B-Flute (exterior rigidity) + C-Flute (cushioning)'
    }
  },
  {
    id: 'honeycomb-mailers',
    name: 'Honeycomb Padded Paper Mailers',
    category: 'shipping',
    categoryName: 'E-Commerce & Shipping',
    svgType: 'honeycomb-mailer',
    subtitle: 'Zero-plastic protective envelopes cushioned with expandable paper cells.',
    price: 0.52,
    moq: 250,
    unit: 'mailer',
    featured: true,
    rating: 4.9,
    reviewCount: 240,
    badge: 'Bubble-Free Pioneer',
    material: 'Heavy Kraft Exterior + Die-Cut Honeycomb Paper Core',
    boardWeight: '120 GSM Outer Kraft + 80 GSM Honeycomb Expander',
    coating: 'Water-Resistant Natural Starch Treatment',
    dimensionsPreset: '9" × 12" (229 × 305 mm) #4 Mailer',
    dimensionsAvailable: ['#0 Mini (5"×8")', '#2 Small (7"×10")', '#4 Standard (9"×12")', '#6 Large (12"×16")'],
    finishOptions: ['Natural Kraft with Green Printed Honeycomb Graphic', 'Clean White Kraft Exterior', 'Custom All-Over Water Inks'],
    ecoBadges: ['100% Repulpable with Paper', 'Eliminates Plastic Bubble Wrap', 'Curbside Recyclable (Single Stream)'],
    leadTime: '3-4 business days',
    description: 'The end of polyethylene bubble mailers. Traditional bubble envelopes cannot be recycled because plastic bubble film is heat-bonded to paper. Our patented honeycomb mailer replaces plastic bubbles with an interlocking hexagonal paper mesh that absorbs impacts, protects cosmetics, books, and jewelry, and drops straight into standard paper recycling bins.',
    features: [
      'Innovative hexagonal honeycomb paper interior expands on impact to shield contents',
      'Curbside recyclable in a single stream: no peeling plastic linings or separating materials',
      'Strong tamper-evident self-seal adhesive flap with tear strip for quick unboxing',
      'Weighs only 15% more than plastic mailers while providing equivalent shock damping'
    ],
    pricingTiers: [
      { qty: 250, pricePerUnit: 0.64, total: 160 },
      { qty: 500, pricePerUnit: 0.52, total: 260 },
      { qty: 1500, pricePerUnit: 0.42, total: 630 },
      { qty: 3000, pricePerUnit: 0.35, total: 1050 }
    ],
    specs: {
      'Cushion Thickness': '3.2 mm protective hexagonal mesh',
      'Closure': 'Permanent rubber-resin hotmelt adhesive strip',
      'Recyclability': 'PTS-Method 100% repulpable certified'
    }
  },
  {
    id: 'paper-tape',
    name: 'Branded Water-Activated Gummed Paper Tape',
    category: 'shipping',
    categoryName: 'E-Commerce & Shipping',
    svgType: 'paper-tape',
    subtitle: 'Tamper-evident reinforced kraft tape bonded with natural potato starch adhesive.',
    price: 12.50,
    moq: 10,
    unit: 'roll (450 ft)',
    featured: false,
    rating: 4.8,
    reviewCount: 156,
    badge: 'Tamper Proof',
    material: 'Natural Kraft Paper Reinforced with Biodegradable Fiber Filaments',
    boardWeight: '70 GSM Heavy Kraft Carrier',
    coating: 'Dried Plant-Starch Adhesive (Water-Activated)',
    dimensionsPreset: '2.75" width × 450 feet length (70mm × 137m)',
    dimensionsAvailable: ['Standard 2.75" (70mm)', 'Heavy Duty 3.0" (76mm)', 'Custom Width On Demand'],
    finishOptions: ['Natural Brown Kraft with 1-Color Black Print', 'Natural Brown with 2-Color Print', 'White Reinforced Kraft Tape'],
    ecoBadges: ['Bonds Directly to Corrugated Cardboard', 'Tamper Evident Fiber Tear', '100% Recyclable with Box'],
    leadTime: '3-5 business days',
    description: 'Unlike plastic pressure-sensitive tape that peels off cleanly or contaminates cardboard recycling streams, water-activated tape (WAT) fuses directly with the paper fibers of the carton. Once dried, it creates a permanent molecular bond that cannot be opened without leaving an obvious torn footprint, deterring in-transit pilferage.',
    features: [
      'Molecular adhesive fusion: becomes an integral part of the box rather than a tape layer',
      'Single strip seals cartons securely, using 60% less total tape length than plastic alternatives',
      'High-tensile cross-weave fiber strands prevent tearing under heavy package shifting',
      'Recycles directly with the shipping carton without needing to be peeled off prior to pulping'
    ],
    pricingTiers: [
      { qty: 10, pricePerUnit: 14.50, total: 145 },
      { qty: 25, pricePerUnit: 12.50, total: 312.5 },
      { qty: 50, pricePerUnit: 10.80, total: 540 },
      { qty: 100, pricePerUnit: 9.20, total: 920 }
    ],
    specs: {
      'Roll Length': '450 linear feet / 137 meters per roll',
      'Reinforcement': 'Cross-woven organic polymer filaments (Class 240 rated)',
      'Adhesive': 'Corn & potato starch water-soluble formula'
    }
  },

  // ==========================================
  // 🛍️ PAPER BAGS & ACCESSORIES
  // ==========================================
  {
    id: 'luxury-twisted-bags',
    name: 'Luxury Twisted-Handle Boutique Shopping Bags',
    category: 'bags',
    categoryName: 'Paper Bags & Accessories',
    svgType: 'luxury-bag',
    subtitle: 'Heavy 250 GSM paper carrier bags with reinforced turn-tops and twisted cord.',
    price: 0.95,
    moq: 300,
    unit: 'bag',
    featured: true,
    rating: 4.9,
    reviewCount: 184,
    badge: 'Boutique Grade',
    material: '250 GSM High-Tensile Virgin White Kraft / Recycled Kraft',
    boardWeight: '250 GSM Heavy Board with 400 GSM Base Board',
    coating: 'Matte Mineral Varnish & Hot-Foil Stamp',
    dimensionsPreset: '12" × 16" × 6" (305 × 406 × 152 mm)',
    dimensionsAvailable: ['Small Boutique (8"×10"×4")', 'Medium Fashion (12"×16"×6")', 'Large Department (16"×19"×7")', 'Wine / Slim (6"×15"×4")'],
    finishOptions: ['Deep Forest Green with Gold Foil', 'Crisp White with Cotton Twisted Handle', 'Raw Kraft with Black Cord', 'Custom Dyed Colorway'],
    ecoBadges: ['Supports Up to 15kg Load', '100% Repulpable Twisted Paper Handle', 'FSC® Certified'],
    leadTime: '5-7 business days',
    description: 'Elevate physical retail and in-store customer experiences. Built from heavyweight 250 GSM virgin paperboard with a turned-top reinforced hem that conceals the handle anchors. Reinforced with a 400 GSM cardboard floor insert, ensuring the bag stands proud and maintains its clean silhouette even under heavy loads.',
    features: [
      '100% paper twisted cord handles are comfortable to hold and fully recyclable',
      'Reinforced top turnover hem and heavy cardboard floor base support up to 15 kg',
      'Crisp gusset creases fold flat for compact under-counter storage in busy boutiques',
      'Finished with hot foil stamping, debossing, or velvety matte eco-coatings'
    ],
    pricingTiers: [
      { qty: 300, pricePerUnit: 1.18, total: 354 },
      { qty: 600, pricePerUnit: 0.95, total: 570 },
      { qty: 1500, pricePerUnit: 0.78, total: 1170 },
      { qty: 3000, pricePerUnit: 0.65, total: 1950 }
    ],
    specs: {
      'Paper Weight': '250 GSM high tear-resistance paper',
      'Handle': '6-ply tightly twisted paper rope with glued anchor pads',
      'Load Rating': 'Tested to 15 kg / 33 lbs static load'
    }
  },
  {
    id: 'grocery-bags',
    name: 'Square-Bottom Flat-Handle Kraft Grocery Bags',
    category: 'bags',
    categoryName: 'Paper Bags & Accessories',
    svgType: 'grocery-bag',
    subtitle: 'High-volume square-bottom kraft bags with internal flat folded handles.',
    price: 0.29,
    moq: 500,
    unit: 'bag',
    featured: false,
    rating: 4.7,
    reviewCount: 128,
    badge: 'High Volume',
    material: '100% Recycled Post-Consumer Brown Kraft Paper',
    boardWeight: '110 GSM High-Tensile Ribbed Kraft',
    coating: 'Natural uncoated porous breathable kraft',
    dimensionsPreset: '12" × 7" × 17" (305 × 178 × 432 mm)',
    dimensionsAvailable: ['Small Bakery (8"×5"×10")', 'Medium Takeout (10"×6"×12")', 'Standard Supermarket (12"×7"×17")', 'Wide Base Caterer (13"×10"×14")'],
    finishOptions: ['Natural Brown Kraft with 1-Color Stamp', '2-Color Water Inks', 'Unprinted Natural'],
    ecoBadges: ['100% Post-Consumer Content', 'Serrate Die-Cut Safety Edge', 'Food Safe Direct Contact'],
    leadTime: '2-4 business days',
    description: 'The ubiquitous, trusted packaging companion for organic supermarkets, artisan bakeries, and gourmet delis. Crafted from 100% post-consumer recycled brown kraft paper with a wide, stable block bottom that stands upright unsupported while clerks and customers pack goods.',
    features: [
      'Self-standing flat block bottom makes rapid packing effortless on checkout counters',
      'Internal glued flat kraft handles withstand energetic lifting without tearing',
      'Serrated top edge prevents paper cuts during rapid retail transactions',
      'Breathable natural fibers prevent bakery bread and fresh produce from steaming soft'
    ],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.36, total: 180 },
      { qty: 1000, pricePerUnit: 0.29, total: 290 },
      { qty: 2500, pricePerUnit: 0.24, total: 600 },
      { qty: 5000, pricePerUnit: 0.20, total: 1000 }
    ],
    specs: {
      'GSM': '110 GSM unbleached high-strength kraft',
      'Bottom Construction': 'SOS (Self-Opening Sack) block bottom',
      'Carrying Load': 'Guaranteed up to 9 kg / 20 lbs'
    }
  },
  {
    id: 'wine-bottle-bags',
    name: 'Reinforced Dual-Bottle Wine & Spirits Gift Bags',
    category: 'bags',
    categoryName: 'Paper Bags & Accessories',
    svgType: 'wine-bag',
    subtitle: 'Tall structural gift bags with internal bottle dividing partition.',
    price: 0.85,
    moq: 200,
    unit: 'bag',
    featured: false,
    rating: 4.9,
    reviewCount: 73,
    badge: 'Cellar Edition',
    material: '220 GSM Heavyweight Ribbed Kraft / Artboard',
    boardWeight: '220 GSM Paper + 450 GSM Base & Divider',
    coating: 'Matte Eco-Shield & Hot Foil Accents',
    dimensionsPreset: '7.5" × 3.75" × 14.5" (190 × 95 × 368 mm)',
    dimensionsAvailable: ['Single Bottle (4"×3.5"×14")', 'Dual Bottle with Divider (7.5"×3.75"×14.5")', 'Champagne Magnum (5"×5"×16")'],
    finishOptions: ['Matte Forest Green with Gold Foil Crest', 'Classic Kraft with Cotton Ribbon', 'Deep Burgundy Linen'],
    ecoBadges: ['Drop-Tested Base Board', 'Zero Plastic Handle Eyelets', 'FSC® Forest Stewardship'],
    leadTime: '4-6 business days',
    description: 'Engineered specifically for vineyards, boutique distilleries, and wine merchants. Features an integrated collapsible internal paper divider that prevents bottles from clinking together during walking transit. Supported by an ultra-thick baseboard that distributes glass weight evenly across the reinforced bottom fold.',
    features: [
      'Interlocking center fold keeps two full wine bottles separated, preventing glass clatter',
      'Thick woven cotton or twisted rope handles anchored into double-ply turned rims',
      'Fits Bordeaux, Burgundy, Champagne, and artisanal olive oil bottle shapes',
      'Hot-stamp your vineyard estate crest or distillery monogram in metallic foil'
    ],
    pricingTiers: [
      { qty: 200, pricePerUnit: 1.05, total: 210 },
      { qty: 500, pricePerUnit: 0.85, total: 425 },
      { qty: 1000, pricePerUnit: 0.72, total: 720 },
      { qty: 2500, pricePerUnit: 0.60, total: 1500 }
    ],
    specs: {
      'Bottle Capacity': 'Holds 2 × 750ml standard wine or spirits bottles',
      'Baseboard': '450 GSM heavyweight caliper cardboard insert',
      'Burst Resistance': 'Reinforced seams hold up to 6.5 kg'
    }
  },
  {
    id: 'tissue-paper',
    name: 'Custom Branded Acid-Free Tissue Paper',
    category: 'bags',
    categoryName: 'Paper Bags & Accessories',
    svgType: 'tissue-paper',
    subtitle: 'Silky 18 GSM translucent wrapping tissue printed with zero-VOC soy inks.',
    price: 0.12,
    moq: 1000,
    unit: 'sheet',
    featured: false,
    rating: 4.8,
    reviewCount: 139,
    badge: 'Delicate Wrap',
    material: '18 GSM Pure Acid-Free Sulfite Paper',
    boardWeight: '18 GSM Ultra-Lightweight Parchment',
    coating: 'None (Natural calendered finish)',
    dimensionsPreset: '20" × 30" (508 × 762 mm) Large Sheet',
    dimensionsAvailable: ['15" × 20" Compact Sheet', '20" × 30" Standard Retail Sheet', 'Continuous Roll (500m)'],
    finishOptions: ['Single-Color Repeated Pattern', '2-Color Botanical Print', 'Metallic Gold Soy Ink Stamp', 'Unprinted Pure Cream'],
    ecoBadges: ['100% Acid-Free & Lignin-Free', 'Zero Heavy Metals', 'Breaks Down in Compost in 21 Days'],
    leadTime: '4-6 business days',
    description: 'Transform every product unboxing into a tactile ceremony. Our 18 GSM acid-free and lignin-free tissue paper protects delicate fabrics, ceramics, and jewelry from yellowing or micro-scratches. Printed using zero-VOC soy inks that do not bleed onto garments or moisture-rich items.',
    features: [
      'Acid-free and lignin-free formulation guarantees archival safety for heirlooms and silks',
      'Delicate, crisp tactile crinkle creates an extraordinary sensory unboxing experience',
      'Zero-bleed vegetable soy inks ensure crisp repeating logo patterns without smudging',
      'Breaks down in residential compost piles within three weeks'
    ],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.16, total: 160 },
      { qty: 2500, pricePerUnit: 0.12, total: 300 },
      { qty: 5000, pricePerUnit: 0.09, total: 450 },
      { qty: 10000, pricePerUnit: 0.065, total: 650 }
    ],
    specs: {
      'Paper Weight': '18 GSM (+/- 1 GSM) semi-translucent tissue',
      'pH Level': 'Neutral pH 7.2 - 7.8 (Acid-free)',
      'Ink System': 'Soy & algae-derived water-dispersed pigments'
    }
  },
  {
    id: 'paper-stickers',
    name: 'Roll-Fed Compostable Logo Paper Stickers',
    category: 'bags',
    categoryName: 'Paper Bags & Accessories',
    svgType: 'paper-stickers',
    subtitle: 'Circular kraft & white paper seal stickers backed with plant-based adhesive.',
    price: 0.07,
    moq: 1000,
    unit: 'sticker',
    featured: false,
    rating: 4.9,
    reviewCount: 221,
    badge: 'Eco Seals',
    material: 'Natural Kraft Paper / Matte White Woodfree Paper',
    boardWeight: '80 GSM Face Stock + Glassine Liner',
    coating: 'Compostable Pressure-Sensitive Starch Adhesive',
    dimensionsPreset: '2.0" Round Diameter (50 mm)',
    dimensionsAvailable: ['1.5" Mini Round (38mm)', '2.0" Standard Round (50mm)', '2.5" Large Round (63mm)', '2" × 3" Rectangular Label'],
    finishOptions: ['Natural Brown Kraft Face', 'Matte Chalk White Face', 'Foil Stamped Accent Ring'],
    ecoBadges: ['DIN CERTCO Compostable Adhesive', 'Glassine Release Liner Recyclable', 'Zero Vinyl / Zero Plastic Film'],
    leadTime: '3-5 business days',
    description: 'The finishing touch for tissue paper wraps, box closures, and branded takeout bags. Unlike conventional vinyl stickers that leach microplastics and ruin paper recycling, our stickers are made with unbleached paper face stock and a certified compostable rubber-starch adhesive that washes out safely in paper mills.',
    features: [
      'Zero plastic: replaces vinyl and polypropylene stickers with pure paper fibers',
      'Certified compostable adhesive adheres strongly to kraft paper, glass, and metal',
      'Supplied on convenient continuous dispenser rolls with recyclable glassine liners',
      'Crisp high-resolution digital print with rich soy-based blacks, colors, and metallics'
    ],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.095, total: 95 },
      { qty: 2500, pricePerUnit: 0.07, total: 175 },
      { qty: 5000, pricePerUnit: 0.052, total: 260 },
      { qty: 10000, pricePerUnit: 0.038, total: 380 }
    ],
    specs: {
      'Face Stock': '80 GSM unbleached kraft or 85 GSM FSC white art paper',
      'Adhesive': 'Plant-derived water-dispersed emulsion adhesive',
      'Certifications': 'OK Compost Industrial & Home certified'
    }
  }
];

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}
