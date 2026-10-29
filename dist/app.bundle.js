// PackNStir - Standalone Application Bundle
// Generated automatically for seamless file:// and http:// execution

(() => {

// === Module: src/data/categories.js ===
// PackNStir Category Taxonomy & Environmental Credentials

const CATEGORIES = [
  {
    id: 'boxes',
    name: 'Cardboard Boxes & Cartons',
    shortName: 'Boxes & Cartons',
    filterKey: 'boxes',
    icon: 'package',
    badge: 'FSC® Certified Heavy-Duty Fluting',
    description: 'Structural single, double, and tri-wall corrugated cartons engineered for extreme stacking strength without plastic tape.',
    bannerColor: 'from-amber-900/30 to-amber-700/20',
    itemCount: 9,
    highlight: 'Up to 250kg Stacking Strength'
  },
  {
    id: 'postal',
    name: 'Postal & E-Commerce Packaging',
    shortName: 'Postal & Mailers',
    filterKey: 'postal',
    icon: 'mail',
    badge: '100% Biodegradable & Recyclable',
    description: 'Letterbox-friendly die-cut mailers, paper mailing bags, and rigid triangular tubes built for parcel transit.',
    bannerColor: 'from-emerald-950/40 to-emerald-800/20',
    itemCount: 7,
    highlight: 'Zero-Bubble Paper Cushioning'
  },
  {
    id: 'takeaway',
    name: 'Sustainable Takeaway & Tableware',
    shortName: 'Takeaway & Dining',
    filterKey: 'takeaway',
    icon: 'utensils',
    badge: 'PFAS-Free Aqueous Food Barrier',
    description: 'Sugarcane bagasse bowls, fallen Areca palm leaf platters, bamboo flasks, and compostable PLA drinkware.',
    bannerColor: 'from-amber-950/30 to-stone-800/20',
    itemCount: 10,
    highlight: 'Home & Industrial Compostable'
  },
  {
    id: 'protective',
    name: 'Protective Packaging & Void Fill',
    shortName: 'Protective & Void Fill',
    filterKey: 'protective',
    icon: 'shield',
    badge: 'Plant-Based Shock Absorption',
    description: 'Expandable honeycomb wraps, natural cornstarch packing peanuts, embossed rolls, and shredded wood wool.',
    bannerColor: 'from-stone-900/30 to-emerald-900/20',
    itemCount: 8,
    highlight: '100% Microplastic-Free'
  },
  {
    id: 'tape-bags',
    name: 'Tape, Labels, Bags & Strapping',
    shortName: 'Tape, Bags & Strapping',
    filterKey: 'tape-bags',
    icon: 'tag',
    badge: 'Starch-Bonded & Natural Cellulose',
    description: 'Water-activated gummed paper tapes, glassine envelopes, NatureFlex wood-pulp pouches, and paper strapping bands.',
    bannerColor: 'from-stone-900/40 to-amber-900/20',
    itemCount: 12,
    highlight: 'Molecular Paper Fusion'
  }
];

const HOME_FEATURED_CATEGORIES = [
  {
    id: 'boxes',
    title: 'Cardboard Cartons',
    subtitle: 'Single, Double & Tri-Wall Heavy Duty Corrugated',
    icon: '📦',
    items: '9 Formats',
    desc: 'Engineered structural cartons supporting up to 250kg transit loads.',
    link: '#shop?category=boxes'
  },
  {
    id: 'postal',
    title: 'Eco-Mailers',
    subtitle: 'Compostable Padded & Letterbox Solutions',
    icon: '✉️',
    items: '7 Formats',
    desc: 'Cushioned honeycomb mailers and peel-and-seal kraft postal pouches.',
    link: '#shop?category=postal'
  },
  {
    id: 'takeaway',
    title: 'Degradable Takeaway',
    subtitle: 'Sugarcane Bagasse & Palm Leaf Tableware',
    icon: '🥗',
    items: '10 Formats',
    desc: '100% PFAS-free food contact bowls, bamboo flasks, and hot/cold cups.',
    link: '#shop?category=takeaway'
  },
  {
    id: 'protective',
    title: 'Protective Fill',
    subtitle: 'Cornstarch Peanuts & Honeycomb Paper Wrap',
    icon: '🛡️',
    items: '8 Formats',
    desc: 'Zero-plastic shock absorption that dissolves in water or compost.',
    link: '#shop?category=protective'
  }
];

const SUSTAINABILITY_STATS = [
  {
    value: 0,
    displayValue: '0%',
    label: 'Single-Use Fossil Plastic',
    subtext: 'Every fiber, lining, adhesive, and ink is 100% plant-derived and repulpable.',
    icon: 'shield-check'
  },
  {
    value: 100,
    displayValue: '100%',
    label: 'Compostable & Recyclable',
    subtext: 'Meets TÜV Austria OK Compost Home (EN 13432) and curbside paper recycling.',
    icon: 'recycle'
  },
  {
    value: 90,
    displayValue: '< 90 Days',
    label: 'Natural Soil Breakdown',
    subtext: 'Degrades into fertile humus without synthetic polymers or chemical microplastics.',
    icon: 'sprout'
  },
  {
    value: 124000,
    displayValue: '124,000+',
    label: 'Trees Sourced Responsibly',
    subtext: 'Harvested exclusively from regenerative FSC®-certified agroforestry farms.',
    icon: 'trees'
  }
];

const CERTIFICATIONS = [
  {
    name: 'FSC® 100% Recycled & Mix',
    code: 'FSC-C158294',
    description: 'Guarantees wood fibers originate from replenishing, responsibly stewarded forests.',
    icon: 'leaf'
  },
  {
    name: 'OK Compost Home',
    code: 'TÜV Austria EN 13432',
    description: 'Certified to break down completely in household compost piles in under 90 days.',
    icon: 'sparkles'
  },
  {
    name: 'Plastic-Free Trustmark',
    code: 'A Plastic Planet Certified',
    description: 'Independently audited: 0.00% polyethylene, polypropylene, or synthetic film.',
    icon: 'check-circle-2'
  },
  {
    name: 'PFAS-Free Food Safety',
    code: 'FDA 21 CFR 176.170',
    description: 'Fluorochemical-free water-based aqueous barriers safe for boiling oils and broths.',
    icon: 'shield'
  }
];


// === Module: src/data/packagingSvgs.js ===
// High-fidelity SVG packaging mockups for PackNStir product line
// Designed with crisp white backgrounds, kraft cardboard tones, and leaf green accents

function getProductSvg(type, variant = 'card', color = '#C29B70') {
  switch (type) {
    // ----------------------------------------------------
    // CARDBOARD BOXES & CARTONS
    // ----------------------------------------------------
    case 'single-wall-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="110" ry="16" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Single Wall RSC Box -->
          <polygon points="60,110 160,160 160,225 60,175" fill="#C29B70" />
          <polygon points="160,160 260,110 260,175 160,225" fill="#9C7348" />
          <polygon points="60,110 160,60 260,110 160,160" fill="#DEC6A6" />
          <!-- Flute indicator & tape seam -->
          <line x1="60" y1="110" x2="260" y2="110" stroke="#7A542E" stroke-width="5" stroke-linecap="round"/>
          <line x1="160" y1="60" x2="160" y2="160" stroke="#7A542E" stroke-width="5"/>
          <text x="110" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F">SINGLE-WALL</text>
          <text x="110" y="155" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#43775E">125# TEST • FSC®</text>
        </svg>
      `;

    case 'double-wall-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="115" ry="16" fill="#1A1815" opacity="0.2" filter="blur(6px)" />
          <polygon points="55,105 160,160 160,225 55,170" fill="#B88E5E" />
          <polygon points="160,160 265,105 265,170 160,225" fill="#8F663B" />
          <polygon points="55,105 160,50 265,105 160,160" fill="#D9BC95" />
          <!-- Double-wall heavy duty seam -->
          <line x1="55" y1="105" x2="265" y2="105" stroke="#664320" stroke-width="7"/>
          <line x1="160" y1="50" x2="160" y2="160" stroke="#664320" stroke-width="7"/>
          <rect x="75" y="130" width="60" height="25" rx="3" fill="#1E3A2F"/>
          <text x="105" y="142" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">DOUBLE-WALL</text>
          <text x="105" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#A8D6C0" text-anchor="middle">275# / 48 ECT</text>
        </svg>
      `;

    case 'tri-wall-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="230" rx="125" ry="18" fill="#1A1815" opacity="0.25" filter="blur(6px)" />
          <polygon points="50,100 160,160 160,230 50,170" fill="#A07446" />
          <polygon points="160,160 270,100 270,170 160,230" fill="#75502A" />
          <polygon points="50,100 160,40 270,100 160,160" fill="#CAA67A" />
          <!-- Tri-wall reinforcement ribs -->
          <line x1="50" y1="100" x2="270" y2="100" stroke="#4F3316" stroke-width="9"/>
          <line x1="160" y1="40" x2="160" y2="160" stroke="#4F3316" stroke-width="9"/>
          <text x="160" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="900" fill="#1E3A2F" text-anchor="middle" letter-spacing="1">TRI-WALL EXTREME</text>
          <text x="160" y="98" font-family="monospace" font-size="6" fill="#4B3118" text-anchor="middle">BURST: 1100# • TIMBER ALTERNATIVE</text>
        </svg>
      `;

    case 'die-cut-postal-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="220" rx="120" ry="16" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- RETF self-locking mailer box -->
          <polygon points="60,140 160,195 260,140 160,95" fill="#D7AB7E" />
          <polygon points="60,140 160,195 160,215 60,160" fill="#AF8354" />
          <polygon points="160,195 260,140 260,160 160,215" fill="#886036" />
          <!-- Open tuck lid with interior print -->
          <polygon points="60,140 160,95 160,45 60,85" fill="#1E3A2F" />
          <polygon points="160,95 260,140 260,85 160,45" fill="#285D40" />
          <text x="160" y="75" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#FFF" text-anchor="middle">PACKNSTIR ECO-MAILER</text>
        </svg>
      `;

    case 'archive-storage-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="115" ry="16" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Archive box base with side carry handle cutout -->
          <polygon points="60,115 160,165 160,225 60,175" fill="#D4AA7D" />
          <polygon points="160,165 260,115 260,175 160,225" fill="#A87E50" />
          <!-- Cutout handle -->
          <ellipse cx="110" cy="148" rx="12" ry="5" fill="#523920" />
          <!-- Lift-off Archive Lid -->
          <polygon points="55,100 160,50 265,100 160,150" fill="#E8CBA6" />
          <polygon points="55,100 160,150 160,165 55,115" fill="#C59B6C" />
          <polygon points="160,150 265,100 265,115 160,165" fill="#9B7143" />
          <text x="160" y="105" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">ARCHIVE FILES</text>
        </svg>
      `;

    case 'wardrobe-carton':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="235" rx="90" ry="14" fill="#1A1815" opacity="0.2" filter="blur(5px)" />
          <!-- Tall vertical wardrobe carton -->
          <polygon points="90,70 160,105 160,235 90,200" fill="#BA8E5D" />
          <polygon points="160,105 230,70 230,200 160,235" fill="#8F663B" />
          <polygon points="90,70 160,35 230,70 160,105" fill="#DDBB92" />
          <!-- Front drop-down access door with clothing rail cutout -->
          <rect x="115" y="115" width="30" height="70" rx="3" fill="#996E40" stroke="#754E27" stroke-width="1"/>
          <!-- Metal/cardboard hanger bar glyph -->
          <line x1="120" y1="125" x2="140" y2="125" stroke="#1E3A2F" stroke-width="3"/>
          <text x="130" y="155" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" font-weight="bold" fill="#FFF" text-anchor="middle">WARDROBE</text>
          <text x="130" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="4" fill="#DDEEDC" text-anchor="middle">RAIL INCLUDED</text>
        </svg>
      `;

    case 'pallet-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="235" rx="130" ry="16" fill="#1A1815" opacity="0.22" filter="blur(6px)" />
          <!-- Wooden/Cardboard Pallet Base -->
          <polygon points="40,195 160,235 280,195 160,165" fill="#75512B" />
          <rect x="50" y="210" width="15" height="15" fill="#52361B"/>
          <rect x="152" y="222" width="16" height="15" fill="#52361B"/>
          <rect x="255" y="210" width="15" height="15" fill="#52361B"/>
          <!-- Bulk Pallet Box Body -->
          <polygon points="50,110 160,165 160,215 50,160" fill="#B08350" />
          <polygon points="160,165 270,110 270,160 160,215" fill="#886036" />
          <polygon points="50,110 160,60 270,110 160,165" fill="#D6B083" />
          <text x="160" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="900" fill="#1E3A2F" text-anchor="middle">EURO PALLET BOX</text>
        </svg>
      `;

    case 'crash-lock-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="105" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Crash lock fast assembly box -->
          <polygon points="70,110 160,160 160,225 70,175" fill="#C99E6E" />
          <polygon points="160,160 250,110 250,175 160,225" fill="#9C7348" />
          <polygon points="70,110 160,60 250,110 160,160" fill="#E5C7A2" />
          <!-- Interlocking base glyph -->
          <path d="M140,195 L160,185 L180,195 L160,205 Z" fill="#1E3A2F" opacity="0.8"/>
          <text x="160" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">AUTO CRASH-LOCK</text>
          <text x="160" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#3D5A48" text-anchor="middle">1-SECOND SETUP</text>
        </svg>
      `;

    case 'telescopic-box':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="115" ry="16" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Two piece telescopic box base & full depth lid -->
          <polygon points="60,120 160,170 160,225 60,175" fill="#A87D50" />
          <polygon points="160,170 260,120 260,175 160,225" fill="#7D572F" />
          <!-- Floating outer telescopic lid -->
          <polygon points="55,80 160,35 265,80 160,125" fill="#E2BD93" />
          <polygon points="55,80 160,125 160,160 55,115" fill="#C49B6C" />
          <polygon points="160,125 265,80 265,115 160,160" fill="#997044" />
          <text x="160" y="85" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">TELESCOPIC LID</text>
        </svg>
      `;

    // ----------------------------------------------------
    // POSTAL & E-COMMERCE
    // ----------------------------------------------------
    case 'bio-mailer':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Soft matte cornstarch/PLA compostable mailer bag -->
          <rect x="80" y="60" width="160" height="155" rx="12" fill="#20382B" />
          <!-- Folded top flap -->
          <path d="M80,85 L160,115 L240,85 L240,60 L80,60 Z" fill="#2D5240" />
          <rect x="100" y="90" width="120" height="10" rx="3" fill="#D97706" opacity="0.9"/>
          <text x="160" y="98" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" font-weight="bold" fill="#FFF" text-anchor="middle">DUAL PEEL & SEAL ADHESIVE</text>
          <!-- Compost seedling icon -->
          <circle cx="160" cy="155" r="22" fill="#162E23" stroke="#4ADE80" stroke-width="1.5"/>
          <path d="M160,165 C160,150 150,145 145,150 C145,160 155,165 160,165 Z" fill="#4ADE80" />
          <path d="M160,165 C160,148 172,143 175,150 C175,160 162,165 160,165 Z" fill="#4ADE80" />
          <text x="160" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#A7F3D0" text-anchor="middle">100% HOME COMPOSTABLE</text>
        </svg>
      `;

    case 'kraft-mailing-bag':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="105" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <polygon points="80,60 240,60 230,220 90,220" fill="#C49B6C" stroke="#9C7348" stroke-width="1"/>
          <polygon points="80,60 160,95 240,60 240,45 80,45" fill="#DEC6A6" />
          <!-- Expansion side gusset creases -->
          <line x1="100" y1="60" x2="105" y2="220" stroke="#A87E50" stroke-width="1" stroke-dasharray="3 3"/>
          <line x1="220" y1="60" x2="215" y2="220" stroke="#A87E50" stroke-width="1" stroke-dasharray="3 3"/>
          <text x="160" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#1E3A2F" text-anchor="middle">HEAVY KRAFT MAILER</text>
          <text x="160" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#4B3118" text-anchor="middle">120 GSM • TEAR-RESISTANT</text>
        </svg>
      `;

    case 'corrugated-padded-envelope':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="105" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <rect x="75" y="60" width="170" height="155" rx="8" fill="#D2A779" stroke="#9E7649" stroke-width="1.5"/>
          <path d="M75,95 L160,130 L245,95 L245,60 L75,60 Z" fill="#E8CBA6" />
          <!-- Corrugated fluting wave preview inside flap -->
          <path d="M85,80 Q90,75 95,80 Q100,85 105,80 Q110,75 115,80 Q120,85 125,80 Q130,75 135,80 Q140,85 145,80 Q150,75 155,80 Q160,85 165,80 Q170,75 175,80 Q180,85 185,80 Q190,75 195,80 Q200,85 205,80 Q210,75 215,80 Q220,85 225,80 Q230,75 235,80" fill="none" stroke="#6B4828" stroke-width="2"/>
          <text x="160" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">CORRUGATED CUSHIONED</text>
          <text x="160" y="177" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#3D5C4E" text-anchor="middle">PLASTIC-FREE ALTERNATIVE TO BUBBLE</text>
        </svg>
      `;

    case 'book-wrap':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="115" ry="16" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Variable depth folding book wrap mailer -->
          <polygon points="60,140 160,185 260,140 160,105" fill="#C29B70" />
          <!-- Side wings wrapped around book -->
          <polygon points="60,140 160,105 160,65 60,95" fill="#D9B78A" />
          <polygon points="160,105 260,140 260,95 160,65" fill="#A67B4C" />
          <!-- Red tear strip -->
          <line x1="80" y1="125" x2="240" y2="125" stroke="#DC2626" stroke-width="3" stroke-dasharray="6 3"/>
          <text x="160" y="155" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">VARIABLE-DEPTH BOOK WRAP</text>
        </svg>
      `;

    case 'postal-tubes-round':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="230" rx="90" ry="15" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Spiral wound cylinder tube -->
          <path d="M120,60 L200,60 L200,210 Q160,230 120,210 Z" fill="#BA8E5E" />
          <ellipse cx="160" cy="60" rx="40" ry="15" fill="#DDBB92" />
          <!-- Spiral wound lines -->
          <path d="M120,90 Q160,110 200,90" fill="none" stroke="#8A6038" stroke-width="2"/>
          <path d="M120,130 Q160,150 200,130" fill="none" stroke="#8A6038" stroke-width="2"/>
          <path d="M120,170 Q160,190 200,170" fill="none" stroke="#8A6038" stroke-width="2"/>
          <!-- Eco Cardboard End Cap -->
          <ellipse cx="160" cy="60" rx="42" ry="16" fill="none" stroke="#1E3A2F" stroke-width="3"/>
          <text x="160" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">CARDBOARD CAPS</text>
        </svg>
      `;

    case 'postal-tubes-triangular':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="230" rx="100" ry="15" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Triangular cross-section tube (no roll on conveyor belts) -->
          <polygon points="120,40 160,20 200,40 160,60" fill="#E8CBA6" />
          <polygon points="120,40 160,60 160,225 120,205" fill="#C29B70" />
          <polygon points="160,60 200,40 200,205 160,225" fill="#9C7348" />
          <text x="160" y="130" transform="rotate(-90 160 130)" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">NON-ROLL TRIANGULAR</text>
        </svg>
      `;

    case 'letterbox-friendly':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="220" rx="115" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Ultra-slim letterbox qualifying box (<25mm height) -->
          <polygon points="60,135 160,180 260,135 160,95" fill="#D9BC95" />
          <polygon points="60,135 160,180 160,195 60,150" fill="#B08655" />
          <polygon points="160,180 260,135 260,150 160,195" fill="#8C6236" />
          <!-- Letterbox slot outline -->
          <rect x="95" y="65" width="130" height="20" rx="4" fill="#1E3A2F" stroke="#4ADE80" stroke-width="1"/>
          <text x="160" y="78" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">ROYAL MAIL PIP / USPS FLAT COMPLIANT</text>
        </svg>
      `;

    // ----------------------------------------------------
    // SUSTAINABLE TAKEAWAY & TABLEWARE
    // ----------------------------------------------------
    case 'bagasse-clamshell':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="16" fill="#1A1815" opacity="0.15" filter="blur(5px)" />
          <!-- Sugarcane Bagasse Ivory Curved Clamshell -->
          <path d="M80,150 Q160,200 240,150 L230,190 Q160,230 90,190 Z" fill="#EAE5DC" stroke="#D3CDC2" stroke-width="1"/>
          <path d="M80,150 Q160,110 240,150 Q160,180 80,150 Z" fill="#F8F6F1" />
          <!-- Steam vent ribs -->
          <line x1="130" y1="140" x2="140" y2="150" stroke="#B8B0A2" stroke-width="2" stroke-linecap="round"/>
          <line x1="160" y1="138" x2="160" y2="152" stroke="#B8B0A2" stroke-width="2" stroke-linecap="round"/>
          <line x1="190" y1="140" x2="180" y2="150" stroke="#B8B0A2" stroke-width="2" stroke-linecap="round"/>
          <text x="160" y="172" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">100% SUGARCANE BAGASSE</text>
        </svg>
      `;

    case 'palm-leaf-plates':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="220" rx="110" ry="16" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Naturally textured fallen Areca palm leaf plate -->
          <ellipse cx="160" cy="150" rx="90" ry="45" fill="#E2CDB2" stroke="#C4A887" stroke-width="1.5"/>
          <ellipse cx="160" cy="150" rx="72" ry="34" fill="#D4BB9A" stroke="#BFA37E" stroke-width="1"/>
          <!-- Natural organic leaf grain lines -->
          <path d="M90,150 Q160,165 230,150" fill="none" stroke="#9E815F" stroke-width="0.8" opacity="0.6"/>
          <path d="M100,140 Q160,155 220,140" fill="none" stroke="#9E815F" stroke-width="0.8" opacity="0.6"/>
          <path d="M100,160 Q160,175 220,160" fill="none" stroke="#9E815F" stroke-width="0.8" opacity="0.6"/>
          <text x="160" y="153" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">FALLEN ARECA PALM LEAF</text>
        </svg>
      `;

    case 'kraft-soup-salad-bowl':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="95" ry="16" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Round kraft bowl with rolled rim -->
          <ellipse cx="160" cy="120" rx="75" ry="32" fill="#E8CBA6" />
          <path d="M85,120 L100,205 Q160,230 220,205 L235,120 Z" fill="#C29B70" stroke="#9C7348" stroke-width="1"/>
          <ellipse cx="160" cy="120" rx="75" ry="32" fill="none" stroke="#875E34" stroke-width="4"/>
          <text x="160" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">LEAKPROOF BOWL</text>
          <text x="160" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#3D5A48" text-anchor="middle">AQUEOUS LINING • PFAS-FREE</text>
        </svg>
      `;

    case 'degradable-portion-pots':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="215" rx="70" ry="12" fill="#1A1815" opacity="0.14" filter="blur(4px)" />
          <ellipse cx="160" cy="130" rx="45" ry="18" fill="#F4EDE4" stroke="#D3C3AF" stroke-width="1.5"/>
          <path d="M115,130 L125,200 Q160,215 195,200 L205,130 Z" fill="#E2D4C3" />
          <ellipse cx="160" cy="130" rx="45" ry="18" fill="none" stroke="#1E3A2F" stroke-width="2"/>
          <text x="160" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">2 OZ / 4 OZ</text>
          <text x="160" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#43775E" text-anchor="middle">SAUCE POT</text>
        </svg>
      `;

    case 'wooden-bamboo-cutlery':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="90" ry="14" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Fork, Knife, Spoon arrangement in Birch / Bamboo -->
          <!-- Fork -->
          <rect x="110" y="90" width="8" height="120" rx="4" fill="#D4AA7D" />
          <path d="M102,60 L102,95 L126,95 L126,60 L121,60 L121,80 L117,80 L117,60 L111,60 L111,80 L107,80 L107,60 Z" fill="#C29B70"/>
          <!-- Knife -->
          <rect x="156" y="95" width="8" height="115" rx="4" fill="#D4AA7D" />
          <path d="M156,55 Q170,75 164,95 L156,95 Z" fill="#B88E5E" />
          <!-- Spoon -->
          <rect x="198" y="95" width="8" height="115" rx="4" fill="#D4AA7D" />
          <ellipse cx="202" cy="70" rx="14" ry="20" fill="#DEC6A6" stroke="#B88E5E" stroke-width="1"/>
          <text x="160" y="225" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">SMOOTH BIRCH & BAMBOO</text>
        </svg>
      `;

    case 'bamboo-bottle':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="230" rx="60" ry="12" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Outer bamboo insulated flask body -->
          <rect x="130" y="70" width="60" height="150" rx="8" fill="#DEC6A6" stroke="#BA8E5E" stroke-width="2"/>
          <line x1="130" y1="120" x2="190" y2="120" stroke="#A87E50" stroke-width="1.5"/>
          <line x1="130" y1="170" x2="190" y2="170" stroke="#A87E50" stroke-width="1.5"/>
          <!-- Stainless steel cap with bamboo top -->
          <rect x="140" y="45" width="40" height="25" rx="4" fill="#E5E7EB" stroke="#9CA3AF" stroke-width="1"/>
          <rect x="143" y="42" width="34" height="6" rx="2" fill="#BA8E5E"/>
          <text x="160" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">BAMBOO FLASK</text>
        </svg>
      `;

    case 'pla-cold-cups':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="75" ry="14" fill="#1A1815" opacity="0.15" filter="blur(5px)" />
          <!-- Clear PLA cup derived from plant starch -->
          <ellipse cx="160" cy="70" rx="50" ry="16" fill="#E0F2FE" fill-opacity="0.6" stroke="#BAE6FD" stroke-width="1.5"/>
          <path d="M110,70 L125,205 Q160,225 195,205 L210,70 Z" fill="#F0FDF4" fill-opacity="0.5" stroke="#86EFAC" stroke-width="1"/>
          <!-- Straw glyph -->
          <line x1="160" y1="35" x2="155" y2="180" stroke="#1E3A2F" stroke-width="4" stroke-linecap="round"/>
          <text x="160" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#15803D" text-anchor="middle">100% CORNSTARCH PLA</text>
        </svg>
      `;

    case 'kraft-hot-cups':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="75" ry="14" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <ellipse cx="160" cy="65" rx="48" ry="15" fill="#E8CBA6" />
          <path d="M112,65 L125,205 Q160,220 195,205 L208,65 Z" fill="#C29B70" stroke="#9C7348" stroke-width="1.5"/>
          <!-- Embossed heat insulating sleeve -->
          <path d="M117,110 L123,175 Q160,185 197,175 L203,110 Z" fill="#A87E50" opacity="0.9"/>
          <text x="160" y="145" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">DOUBLE-WALL</text>
          <text x="160" y="155" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#EAE5DC" text-anchor="middle">COMPOSTABLE LID COMPLIANT</text>
        </svg>
      `;

    case 'greaseproof-paper':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="15" fill="#1A1815" opacity="0.14" filter="blur(5px)" />
          <polygon points="70,140 180,80 250,140 140,200" fill="#FAF7F2" stroke="#D6C4B0" stroke-width="1"/>
          <polygon points="90,155 200,95 270,155 160,215" fill="#F4EDE4" stroke="#C2AF98" stroke-width="1" opacity="0.8"/>
          <!-- Repeating PackNStir logo print -->
          <g fill="#1E3A2F" opacity="0.3">
            <circle cx="140" cy="140" r="5"/>
            <circle cx="170" cy="125" r="4"/>
            <circle cx="200" cy="145" r="6"/>
          </g>
          <text x="175" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F">CHEF GRADE • 38 GSM</text>
        </svg>
      `;

    case 'custom-carrier-bags':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="230" rx="95" ry="14" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <path d="M140,90 C140,35 180,35 180,90" fill="none" stroke="#1E3A2F" stroke-width="4" stroke-linecap="round"/>
          <polygon points="100,90 220,90 215,220 105,220" fill="#C29B70" />
          <polygon points="100,90 105,220 85,205 80,85" fill="#9C7348" />
          <circle cx="160" cy="155" r="22" fill="#1E3A2F"/>
          <text x="160" y="158" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">PACKNSTIR</text>
        </svg>
      `;

    // ----------------------------------------------------
    // PROTECTIVE PACKAGING & VOID FILL
    // ----------------------------------------------------
    case 'honeycomb-paper-wrap':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Roll of expanded brown honeycomb kraft wrap -->
          <ellipse cx="110" cy="130" rx="35" ry="60" fill="#C29B70" stroke="#9C7348" stroke-width="2"/>
          <path d="M110,70 L230,90 L230,210 L110,190 Z" fill="#D9BC95" />
          <!-- Hexagonal mesh pattern -->
          <g stroke="#7A542E" stroke-width="1" fill="none" opacity="0.8">
            <polygon points="140,110 150,115 150,125 140,130 130,125 130,115" />
            <polygon points="160,110 170,115 170,125 160,130 150,125 150,115" />
            <polygon points="180,110 190,115 190,125 180,130 170,125 170,115" />
            <polygon points="150,125 160,130 160,140 150,145 140,140 140,130" />
            <polygon points="170,125 180,130 180,140 170,145 160,140 160,130" />
          </g>
          <text x="180" y="175" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">HONEYCOMB WRAP</text>
        </svg>
      `;

    case 'corrugated-paper-rolls':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="90" ry="15" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <ellipse cx="160" cy="80" rx="55" ry="25" fill="#C29B70" stroke="#875E34" stroke-width="2"/>
          <path d="M105,80 L105,195 Q160,225 215,195 L215,80 Z" fill="#DEC6A6" />
          <!-- Exposed flute waves on outer edge -->
          <path d="M105,130 Q110,125 115,130 Q120,135 125,130 Q130,125 135,130 Q140,135 145,130 Q150,125 155,130 Q160,135 165,130 Q170,125 175,130 Q180,135 185,130 Q190,125 195,130 Q200,135 205,130 Q210,125 215,130" fill="none" stroke="#7A542E" stroke-width="2"/>
          <text x="160" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">SINGLE-FACE ROLL</text>
        </svg>
      `;

    case 'starch-peanuts':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="16" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Cluster of biodegradable cornstarch foam loose-fill S-shapes -->
          <g fill="#F3EFE6" stroke="#D3C7B5" stroke-width="1.5">
            <path d="M130,120 C130,110 145,110 145,125 C145,140 160,140 160,130" />
            <path d="M165,110 C165,100 180,100 180,115 C180,130 195,130 195,120" />
            <path d="M105,140 C105,130 120,130 120,145 C120,160 135,160 135,150" />
            <path d="M140,150 C140,140 155,140 155,155 C155,170 170,170 170,160" />
            <path d="M175,145 C175,135 190,135 190,150 C190,165 205,165 205,155" />
            <path d="M125,170 C125,160 140,160 140,175 C140,190 155,190 155,180" />
            <path d="M160,175 C160,165 175,165 175,180 C175,195 190,195 190,185" />
          </g>
          <rect x="100" y="70" width="120" height="20" rx="4" fill="#166534"/>
          <text x="160" y="83" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">DISSOLVES IN WATER (100% CORN)</text>
        </svg>
      `;

    case 'embossed-paper-rolls':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="85" ry="14" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <ellipse cx="160" cy="80" rx="50" ry="22" fill="#DDBB92" />
          <path d="M110,80 L110,195 Q160,225 210,195 L210,80 Z" fill="#C29B70" />
          <!-- Dimpled embossed texture circles -->
          <circle cx="130" cy="130" r="3" fill="#8A6038"/>
          <circle cx="150" cy="130" r="3" fill="#8A6038"/>
          <circle cx="170" cy="130" r="3" fill="#8A6038"/>
          <circle cx="190" cy="130" r="3" fill="#8A6038"/>
          <circle cx="140" cy="150" r="3" fill="#8A6038"/>
          <circle cx="160" cy="150" r="3" fill="#8A6038"/>
          <circle cx="180" cy="150" r="3" fill="#8A6038"/>
          <text x="160" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#1E3A2F" text-anchor="middle">EMBOSSED DIMPLE WRAP</text>
        </svg>
      `;

    case 'paper-void-fill':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Crumpled organic paper void cushion -->
          <path d="M90,170 Q110,120 150,150 Q180,110 220,160 Q170,210 90,170 Z" fill="#DEC6A6" stroke="#9C7348" stroke-width="1.5"/>
          <path d="M110,160 Q140,140 180,160 Q150,180 110,160 Z" fill="#C29B70" />
          <text x="160" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">CRUMPLED VOID FILL</text>
        </svg>
      `;

    case 'edge-corner-protectors':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="90" ry="14" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <!-- Rigid 90 degree heavy cardboard edge angle boards -->
          <polygon points="120,50 160,75 160,215 120,190" fill="#9C7348" />
          <polygon points="160,75 200,50 200,190 160,215" fill="#C29B70" />
          <polygon points="120,50 160,30 200,50 160,75" fill="#DEC6A6" />
          <text x="160" y="140" transform="rotate(-90 160 140)" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">RIGID CORNER GUARD</text>
        </svg>
      `;

    case 'wood-wool':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="16" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <!-- Fine curled kiln-dried spruce wood shavings nest -->
          <g stroke="#C29B70" stroke-width="2" fill="none">
            <path d="M90,150 Q130,120 170,160 Q210,140 230,160"/>
            <path d="M100,170 Q140,190 180,140 Q210,180 220,170"/>
            <path d="M110,130 Q160,170 190,120 Q220,150 210,190"/>
            <path d="M120,180 Q150,130 190,170"/>
          </g>
          <text x="160" y="160" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1E3A2F" text-anchor="middle">NATURAL WOOD WOOL</text>
        </svg>
      `;

    // ----------------------------------------------------
    // TAPE, LABELS, BAGS & STRAPPING
    // ----------------------------------------------------
    case 'water-activated-tape':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="90" ry="15" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <ellipse cx="160" cy="130" rx="60" ry="25" fill="#C29B70" stroke="#875E34" stroke-width="2"/>
          <path d="M100,130 L100,180 Q160,225 220,180 L220,130 Z" fill="#9C7348" />
          <ellipse cx="160" cy="130" rx="25" ry="10" fill="#4B3118" />
          <!-- Unspooling tape tail -->
          <path d="M210,150 Q240,170 260,200 L200,210 Q170,180 150,170 Z" fill="#DEC6A6" />
          <text x="160" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">WATER-ACTIVATED GUMMED</text>
        </svg>
      `;

    case 'self-adhesive-kraft-tape':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="90" ry="15" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <ellipse cx="160" cy="130" rx="55" ry="22" fill="#D9BC95" stroke="#9C7348" stroke-width="2"/>
          <path d="M105,130 L105,180 Q160,220 215,180 L215,130 Z" fill="#BA8E5E" />
          <ellipse cx="160" cy="130" rx="22" ry="9" fill="#523920" />
          <text x="160" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">SELF-ADHESIVE KRAFT</text>
        </svg>
      `;

    case 'glassine-document-wallets':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="95" ry="14" fill="#1A1815" opacity="0.14" filter="blur(5px)" />
          <!-- Self adhesive translucent glassine envelope -->
          <rect x="85" y="75" width="150" height="110" rx="4" fill="#FAF8F5" stroke="#C4B5A5" stroke-width="1.5"/>
          <text x="160" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#1E3A2F" text-anchor="middle">DOCUMENTS ENCLOSED</text>
          <text x="160" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#5F7D6E" text-anchor="middle">100% TRANSLUCENT GLASSINE PAPER</text>
        </svg>
      `;

    case 'eco-labels-stickers':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="85" ry="14" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <circle cx="160" cy="130" r="45" fill="#166534" stroke="#4ADE80" stroke-width="2"/>
          <text x="160" y="125" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#FFF" text-anchor="middle">100% ECO</text>
          <text x="160" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#DDEEDC" text-anchor="middle">PLANT-BASED ADHESIVE</text>
        </svg>
      `;

    case 'compostable-zip-lock':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="85" ry="14" fill="#1A1815" opacity="0.14" filter="blur(5px)" />
          <rect x="95" y="60" width="130" height="150" rx="6" fill="#F0FDF4" stroke="#86EFAC" stroke-width="1.5"/>
          <!-- Zip lock track -->
          <line x1="95" y1="80" x2="225" y2="80" stroke="#166534" stroke-width="3"/>
          <text x="160" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#166534" text-anchor="middle">COMPOSTABLE ZIP-LOCK</text>
          <text x="160" y="152" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#15803D" text-anchor="middle">TÜV OK COMPOST HOME</text>
        </svg>
      `;

    case 'paper-pallet-wrap':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="80" ry="14" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <ellipse cx="160" cy="70" rx="45" ry="18" fill="#DEC6A6" />
          <path d="M115,70 L115,195 Q160,225 205,195 L205,70 Z" fill="#BA8E5E" />
          <ellipse cx="160" cy="70" rx="18" ry="8" fill="#523920" />
          <text x="160" y="140" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">STRETCH PAPER WRAP</text>
          <text x="160" y="150" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#EAE5DC" text-anchor="middle">REPLACES PLASTIC CLING FILM</text>
        </svg>
      `;

    case 'paper-strapping':
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="85" ry="14" fill="#1A1815" opacity="0.18" filter="blur(5px)" />
          <ellipse cx="160" cy="130" rx="60" ry="25" fill="#8F663B" />
          <path d="M100,130 L100,180 Q160,225 220,180 L220,130 Z" fill="#6B4828" />
          <ellipse cx="160" cy="130" rx="35" ry="15" fill="#F4EDE4" />
          <text x="160" y="165" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">PAPER STRAPPING</text>
          <text x="160" y="175" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#DDEEDC" text-anchor="middle">HIGH TENSILE 250KG</text>
        </svg>
      `;

    default:
      return `
        <svg viewBox="0 0 320 260" class="w-full h-full object-contain filter drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="160" cy="225" rx="100" ry="15" fill="#1A1815" opacity="0.16" filter="blur(5px)" />
          <polygon points="70,110 160,160 250,110 160,60" fill="#C29B70" />
          <polygon points="70,110 160,160 160,220 70,170" fill="#9C7348" />
          <polygon points="160,160 250,110 250,170 160,220" fill="#75502A" />
          <text x="160" y="115" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="bold" fill="#1E3A2F" text-anchor="middle">PACKNSTIR</text>
        </svg>
      `;
  }
}


// === Module: src/data/products.js ===
// PackNStir Exhaustive Product Database (All 46 Sustainable Packaging Formats)

const PRODUCTS = [
  // =========================================================================
  // CATEGORY 1: CARDBOARD BOXES & CARTONS (9 Products)
  // =========================================================================
  {
    id: 'single-wall-boxes',
    name: 'Single Wall Cardboard Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'single-wall-box',
    subtitle: 'Lightweight and durable single-flute corrugated boxes for general packing and storage.',
    price: 0.42,
    moq: 250,
    unit: 'box',
    featured: true,
    rating: 4.8,
    reviewCount: 94,
    badge: 'FSC® Certified',
    material: 'Single-Wall B-Flute Corrugated (3.0mm thickness)',
    boardWeight: '125# Test / 26 ECT Kraft Liner',
    coating: 'Zero synthetic coating; 100% repulpable raw kraft',
    dimensionsPreset: '12" × 9" × 6" (305 × 229 × 152 mm)',
    dimensionsAvailable: ['Small (9"×6"×6")', 'Medium (12"×9"×6")', 'Standard (16"×12"×12")', 'Large (18"×14"×12")'],
    finishOptions: ['Natural Brown Kraft', 'Mottled White Kraft', '1-Color Soy Flexo Print'],
    ecoBadges: ['100% Curbside Recyclable', 'FSC® Recycled Pulp', 'Backyard Compostable'],
    leadTime: '1-3 business days',
    history: 'Corrugated paper was first patented in England in 1856 by Edward C. Healey as a sweatband liner for tall hats. In 1871, Albert L. Jones adapted it for packaging glassware, inventing the fluted paper revolution that now powers global logistics.',
    environmentalImpact: 'Constructed from 85% post-consumer recovered paper fibers. Completely dissolves and repulps in standard mill hydro-pulpers within 15 minutes, saving 3.2 tons of CO2 per ton of virgin pulp avoided.',
    ecosystemBenefits: 'Prevents petrochemical microplastics from contaminating topsoil and runoff river deltas. Raw cellulose fibers decompose into organic humus in 60-90 days, providing non-toxic carbon to beneficial soil microbes and earthworms without chemical leachate.',
    globalWarmingImpact: 'Reduces cradle-to-gate greenhouse gas emissions by 72% compared to rigid polypropylene crates. Forest biomass acts as a biogenic carbon sink during tree growth, capturing 1.83 kg of atmospheric CO2 per kg of board produced. Solar-milled converting emits near-zero fossil carbon.',
    co2SavedKg: 0.85,
    plasticAvoidedGrams: 160,
    decompositionDays: '60–90 days',
    features: ['High strength-to-weight ratio for lightweight shipping', 'Quick 4-flap folding design', 'Supports up to 15 kg safe contents load'],
    pricingTiers: [
      { qty: 250, pricePerUnit: 0.48, total: 120 },
      { qty: 500, pricePerUnit: 0.42, total: 210 },
      { qty: 1000, pricePerUnit: 0.36, total: 360 },
      { qty: 2500, pricePerUnit: 0.30, total: 750 }
    ],
    specs: { 'Flute Type': 'B-Flute (47 flutes/ft)', 'Burst Strength': '125 Mullen (PSI)', 'Recyclability': 'Curbside Blue Bin' }
  },
  {
    id: 'double-wall-boxes',
    name: 'Double Wall Cardboard Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'double-wall-box',
    subtitle: 'Heavy-duty multi-flute shipping cartons engineered for heavy transit and pallet stacking.',
    price: 1.15,
    moq: 150,
    unit: 'box',
    featured: true,
    rating: 4.9,
    reviewCount: 138,
    badge: 'Heavy Transit',
    material: 'Double-Wall B/C Flute Corrugated (6.5mm thickness)',
    boardWeight: '275# Test / 48 ECT Heavyboard',
    coating: 'Moisture-resistant vegetable starch impregnation',
    dimensionsPreset: '18" × 14" × 12" (457 × 355 × 305 mm)',
    dimensionsAvailable: ['Medium Master (14"×10"×10")', 'Master Shipper (18"×14"×12")', 'Heavy Cube (20"×20"×20")', 'Euro Pallet (24"×18"×18")'],
    finishOptions: ['Industrial Kraft with Transit Symbols', 'Custom 2-Color Water-Based Print'],
    ecoBadges: ['Withstands 65kg Pressure', 'Zero Plastic Reinforcement', '100% Repulpable'],
    leadTime: '2-4 business days',
    history: 'Developed during the mid-20th century to replace heavy timber shipping crates. The combination of B-flute for puncture resistance and C-flute for shock absorption revolutionized sea and rail freight.',
    environmentalImpact: 'Diverts heavy timber from deforestation. Uses starch-based adhesives derived from food-grade corn and wheat that leave zero microplastic residue in soil.',
    ecosystemBenefits: 'Replaces synthetic plastic crates and preserves natural timber forests from logging pressure. Uses natural maize and wheat starch adhesives, preventing polyvinyl acetate polymers from washing into waterways and poisoning aquatic organisms.',
    globalWarmingImpact: 'Cuts 1.65 kg of fossil-fuel CO2e per container replaced. High vertical crush strength (48 ECT) permits maximum cargo consolidation in freight containers, reducing shipping fuel consumption and transit emissions by up to 14%.',
    co2SavedKg: 1.65,
    plasticAvoidedGrams: 340,
    decompositionDays: '90–120 days',
    features: ['Double-wall architecture stacks 3 pallets high without buckle', 'Resists side puncture from freight conveyor belts', 'Tested to 48 ECT crush strength'],
    pricingTiers: [
      { qty: 150, pricePerUnit: 1.35, total: 202.5 },
      { qty: 300, pricePerUnit: 1.15, total: 345 },
      { qty: 800, pricePerUnit: 0.98, total: 784 },
      { qty: 2000, pricePerUnit: 0.82, total: 1640 }
    ],
    specs: { 'Board Grade': 'B/C Double Wall', 'Edge Crush Test': '48 ECT', 'Load Capacity': 'Up to 40 kg' }
  },
  {
    id: 'tri-wall-boxes',
    name: 'Tri-Wall Cardboard Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'tri-wall-box',
    subtitle: 'Extreme-strength triple-flute bulk containers replacing wooden crates for export freight.',
    price: 4.80,
    moq: 50,
    unit: 'carton',
    featured: false,
    rating: 5.0,
    reviewCount: 42,
    badge: 'Timber Replacement',
    material: 'Triple-Wall A/A/A Flute Corrugated (14.0mm thickness)',
    boardWeight: '1100# Burst Strength / 90 ECT Heavy Caliper',
    coating: 'Hydrophobic cellulose sizing (Zero Wax)',
    dimensionsPreset: '36" × 24" × 24" (914 × 610 × 610 mm)',
    dimensionsAvailable: ['Bulk Medium (24"×24"×24")', 'Half-Euro (36"×24"×24")', 'Full Pallet Shipper (48"×40"×36")'],
    finishOptions: ['Standard Raw Kraft', 'Dangerous Goods Approved Transit Print'],
    ecoBadges: ['Replaces Hardwood Timber', 'ISPM 15 Exempt (No Heat Treatment)', '100% Circular'],
    leadTime: '4-6 business days',
    history: 'Invented in the 1950s by Abe Goldstein, Tri-Wall paperboard revolutionized military and heavy machinery logistics by offering the structural rigidity of solid oak at 1/5th the freight tare weight.',
    environmentalImpact: 'Eliminates chemical fumigation and toxic wood preservatives mandated for international timber shipping (ISPM-15). 100% recyclable into new fluting.',
    ecosystemBenefits: 'Halts the widespread chemical pesticide fumigation (toxic methyl bromide and sulfuryl fluoride) required for international timber shipping under ISPM-15, protecting atmospheric ozone and preventing toxic biocide runoff into coastal harbors.',
    globalWarmingImpact: 'Weighs 75% less than heavy solid timber and steel drum containers, slashing freight fuel combustion by an estimated 4.2 kg CO2e per 1,000 nautical miles while keeping carbon stored in solid paper fibers.',
    co2SavedKg: 4.2,
    plasticAvoidedGrams: 1200,
    decompositionDays: '120–180 days',
    features: ['Can support over 1,000 kg top-load stacking compression', 'Exempt from international wood packaging phytosanitary restrictions', 'Seamless conversion into agricultural mulch at end-of-life'],
    pricingTiers: [
      { qty: 50, pricePerUnit: 5.40, total: 270 },
      { qty: 100, pricePerUnit: 4.80, total: 480 },
      { qty: 300, pricePerUnit: 4.10, total: 1230 },
      { qty: 1000, pricePerUnit: 3.50, total: 3500 }
    ],
    specs: { 'Caliper': '14.0 mm', 'Burst Rating': '1,100 PSI', 'Stacking Capacity': 'Up to 1,200 kg' }
  },
  {
    id: 'die-cut-postal-boxes',
    name: 'Die-Cut Postal Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'die-cut-postal-box',
    subtitle: 'Roll-end tuck front presentation boxes with clean creases and tamper-evident locking tabs.',
    price: 0.65,
    moq: 300,
    unit: 'box',
    featured: true,
    rating: 4.9,
    reviewCount: 215,
    badge: 'E-Com Favorite',
    material: 'E-Flute Micro-Corrugated Kraft (1.6mm thickness)',
    boardWeight: '200# Burst Strength / 32 ECT',
    coating: 'Smooth uncoated tactile kraft finish',
    dimensionsPreset: '10" × 8" × 3" (254 × 203 × 76 mm)',
    dimensionsAvailable: ['Mini Parcel (6"×4"×2")', 'Standard Retail (10"×8"×3")', 'Shoe / Apparel (12"×9"×4")', 'Large Gift (14"×12"×5")'],
    finishOptions: ['Raw Natural Kraft', 'White Coated Exterior', 'Full Exterior & Interior Soy Print'],
    ecoBadges: ['Zero Tape Required', 'FSC® Recycled', '100% Repulpable'],
    leadTime: '2-4 business days',
    history: 'The roll-end tuck-front (RETF) design was engineered in the early days of automated mail order. Die-cut with laser-guided steel rule dies, it creates triple-wall side reinforcement from a single flat sheet.',
    environmentalImpact: 'Self-locking friction tabs eliminate over 1.2 meters of plastic vinyl packaging tape per order, preventing plastic adhesive contamination in paper pulping mills.',
    ecosystemBenefits: 'Interlocking friction tabs eliminate over 1.2 meters of single-use plastic vinyl packing tape per order. Plastic tape is among the top 5 pollutants causing marine bird and turtle entanglement when washed offshore.',
    globalWarmingImpact: 'Eliminating petroleum-based plastic tapes prevents 0.62 kg of petrochemical refining emissions per package. Sourced from 85% recovered fibers with closed-loop solar milling.',
    co2SavedKg: 0.62,
    plasticAvoidedGrams: 85,
    decompositionDays: '45–60 days',
    features: ['Triple-wall sides protect contents from severe transit impacts', 'Interior lid accepts rich full-color unboxing prints', 'Ships flat; assembles in seconds without adhesives'],
    pricingTiers: [
      { qty: 300, pricePerUnit: 0.78, total: 234 },
      { qty: 600, pricePerUnit: 0.65, total: 390 },
      { qty: 1500, pricePerUnit: 0.54, total: 810 },
      { qty: 3000, pricePerUnit: 0.45, total: 1350 }
    ],
    specs: { 'Style': 'FEFCO 0427 Roll-End Tuck Front', 'Flute': 'E-Flute Micro', 'Recycled Fiber': '85%' }
  },
  {
    id: 'archive-storage-boxes',
    name: 'Archive & Storage Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'archive-storage-box',
    subtitle: 'Heavyweight document storage boxes with ergonomic handle cutouts and lift-off lids.',
    price: 1.85,
    moq: 100,
    unit: 'box',
    featured: false,
    rating: 4.7,
    reviewCount: 68,
    badge: 'Office Standard',
    material: 'Double-Walled Base & Single Wall Lid (B/C Flute)',
    boardWeight: 'Heavyweight Recycled Fiber Board',
    coating: 'Acid-free neutral sizing compound',
    dimensionsPreset: '15" × 12" × 10" (381 × 305 × 254 mm)',
    dimensionsAvailable: ['Foolscap Standard (15"×12"×10")', 'A4 Compact (13"×10"×10")', 'Jumbo File Depth (18"×12"×10")'],
    finishOptions: ['Kraft with Printed Label Grid', 'Clean White with Blue Index Print'],
    ecoBadges: ['Acid-Free (Preserves Paper Files)', '100% Recycled Content', 'Re-usable for Decades'],
    leadTime: '2-3 business days',
    history: 'First engineered in the 1920s for legal firms and banking vaults. The double-bottom fold structure allowed paper reams to be stacked up to 8 high in basements without collapsing.',
    environmentalImpact: 'Acid-free chemistry (pH 7.5 - 8.0) prevents degradation of historical documents without sulfur or bleach. Designed for 20+ years of reuse before simple paper recycling.',
    ecosystemBenefits: 'Acid-free, pH-neutral (7.5-8.0) unbleached board prevents chemical acid leaching into municipal water tables. Can be repulped up to 7 consecutive cycles into new packaging without degradation.',
    globalWarmingImpact: 'Replaces heavy petroleum plastic storage totes (HDPE). Manufacturing a plastic tote releases over 6.8 kg CO2e, whereas our recycled archive box produces less than 0.7 kg CO2e.',
    co2SavedKg: 2.1,
    plasticAvoidedGrams: 650,
    decompositionDays: '90–120 days',
    features: ['Comfort-grip rolled hand holes prevent finger cuts', 'Reinforced double base handles heavy file folders up to 25 kg', 'Separate lift-off lid allows quick file audits'],
    pricingTiers: [
      { qty: 100, pricePerUnit: 2.15, total: 215 },
      { qty: 250, pricePerUnit: 1.85, total: 462.5 },
      { qty: 500, pricePerUnit: 1.55, total: 775 },
      { qty: 1000, pricePerUnit: 1.30, total: 1300 }
    ],
    specs: { 'Fits': 'A4 & Foolscap lever-arch files', 'Construction': 'Double thickness end panels', 'pH': 'Neutral 7.5' }
  },
  {
    id: 'wardrobe-cartons',
    name: 'Wardrobe Cartons',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'wardrobe-carton',
    subtitle: 'Tall structural apparel cartons fitted with an integrated heavy-gauge cardboard hanging rail.',
    price: 6.90,
    moq: 25,
    unit: 'carton',
    featured: false,
    rating: 4.8,
    reviewCount: 53,
    badge: 'Crease-Free Transport',
    material: 'Double-Wall Heavy Heavyweight Corrugated Board',
    boardWeight: '300# Test Double Wall',
    coating: 'Natural uncoated kraft',
    dimensionsPreset: '20" × 18" × 48" (508 × 457 × 1219 mm)',
    dimensionsAvailable: ['Standard 40" Dress (20"×18"×40")', 'Tall 48" Coat & Gown (20"×18"×48")'],
    finishOptions: ['Natural Kraft with Apparel Handling Icons'],
    ecoBadges: ['Eliminates Plastic Dry-Cleaning Bags', '100% Recyclable Paper Rail', 'Re-usable Moving Kit'],
    leadTime: '2-4 business days',
    history: 'Created by moving and relocation companies in the 1960s to transport suits and evening gowns upright, preventing the need for costly post-transit ironing and dry-cleaning plastic shrouds.',
    environmentalImpact: 'Replaces plastic clothing garment bags and non-recyclable metal wire rails with a 100% repulpable paperboard rail that locks garments in transit.',
    ecosystemBenefits: 'Replaces toxic PVC garment transit bags and heavy plastic storage chests. Solid compressed board hanging rails prevent synthetic fiber shedding and microplastic contamination into household ecosystems.',
    globalWarmingImpact: 'Displaces 2.8 kg of virgin polypropylene luggage per residential move, preventing 3.40 kg CO2e of fossil fuel extraction and refining emissions per carton deployed.',
    co2SavedKg: 3.4,
    plasticAvoidedGrams: 950,
    decompositionDays: '90–150 days',
    features: ['Front drop-down fold allows easy hanging without overhead lifting', 'Accommodates up to 30 hanging suits, dresses, or heavy winter coats', 'Heavy-duty double wall prevents crushing inside moving vans'],
    pricingTiers: [
      { qty: 25, pricePerUnit: 7.80, total: 195 },
      { qty: 50, pricePerUnit: 6.90, total: 345 },
      { qty: 100, pricePerUnit: 5.95, total: 595 },
      { qty: 250, pricePerUnit: 5.10, total: 1275 }
    ],
    specs: { 'Height': '48 inches / 1.22 m', 'Rail Material': 'High-tensile notched cardboard rail', 'Load Limit': '35 kg' }
  },
  {
    id: 'pallet-boxes',
    name: 'Pallet Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'pallet-box',
    subtitle: 'Large-footprint bulk container cartons designed to fit Euro and UK standard pallet perimeters.',
    price: 8.50,
    moq: 20,
    unit: 'box',
    featured: false,
    rating: 4.9,
    reviewCount: 39,
    badge: 'Industrial Export',
    material: 'Heavy Double-Wall / Tri-Wall Base with Drop-Side Access',
    boardWeight: '450 GSM Heavy Liners / 60 ECT',
    coating: 'Moisture barrier treatment',
    dimensionsPreset: '48" × 40" × 36" (1200 × 1000 × 914 mm)',
    dimensionsAvailable: ['Euro Pallet (1200×800×800mm)', 'Standard Industrial (1200×1000×900mm)'],
    finishOptions: ['Standard Heavy Kraft', 'Custom Flexo Print Marking'],
    ecoBadges: ['Full Pallet Optimization', 'Replaces Steel Stillage', '100% Repulpable'],
    leadTime: '3-5 business days',
    history: 'Standardized during the post-WWII palletization boom to eliminate loose break-bulk maritime handling. Engineered to match standardized wooden pallet dimensions exactly to prevent pallet overhang.',
    environmentalImpact: 'Optimizes cargo ship cube utilization, reducing transport carbon by 18%. Folds completely flat when empty, reducing reverse logistics emissions by 80%.',
    ecosystemBenefits: 'Completely eliminates chemical timber wood preservatives and deforestation pressure on old-growth forests. Provides safe biodegradable bulk containment that naturally composts into soil nutrients at end-of-life.',
    globalWarmingImpact: 'Cuts 8.5 kg CO2e compared to injection-molded plastic export containers. Folds completely flat for empty return journeys, dramatically cutting dead-weight vehicle emissions.',
    co2SavedKg: 8.5,
    plasticAvoidedGrams: 2800,
    decompositionDays: '120–180 days',
    features: ['Drop-down front gate allows warehouse staff to load heavy items ergonomically', 'Tightly interlocks with standard wooden or pressed-paper pallets', 'Engineered to withstand long-duration sea-freight humidity'],
    pricingTiers: [
      { qty: 20, pricePerUnit: 9.90, total: 198 },
      { qty: 50, pricePerUnit: 8.50, total: 425 },
      { qty: 100, pricePerUnit: 7.40, total: 740 },
      { qty: 250, pricePerUnit: 6.30, total: 1575 }
    ],
    specs: { 'Footprint': 'Matches 1200×1000mm pallet', 'Gate': 'Half-drop loading access flap', 'Max Stack': 'Up to 600 kg' }
  },
  {
    id: 'crash-lock-boxes',
    name: 'Crash-Lock Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'crash-lock-box',
    subtitle: 'High-speed fulfillment cartons that automatically snap into shape in a single motion.',
    price: 0.58,
    moq: 500,
    unit: 'box',
    featured: false,
    rating: 4.9,
    reviewCount: 112,
    badge: 'Rapid Pack',
    material: 'Single-Wall Micro-Flute with Pre-Glued Automatic Base',
    boardWeight: '150# Test / 32 ECT',
    coating: 'Eco-grade vegetable glue joints',
    dimensionsPreset: '10" × 7" × 5" (254 × 178 × 127 mm)',
    dimensionsAvailable: ['Small (8"×5"×4")', 'Medium (10"×7"×5")', 'Large (12"×9"×6")', 'Deep Dispatch (14"×10"×8")'],
    finishOptions: ['Raw Kraft', 'Pure White Kraft', 'Branded Interior Print'],
    ecoBadges: ['Cuts Packing Time by 65%', 'Requires Zero Bottom Tape', '100% Recyclable'],
    leadTime: '2-4 business days',
    history: 'Pioneered in automated European folding plants to address e-commerce warehouse bottlenecks. By pre-folding and gluing the base diagonally, the box pops open square the instant the diagonal corners are squeezed.',
    environmentalImpact: 'Eliminates bottom taping altogether, saving 0.8 meters of adhesive tape per box. Faster packing lowers warehouse HVAC and operational kilowatt-hours per fulfilled unit.',
    ecosystemBenefits: 'Pre-glued with plant-derived vegetable dextrin, eliminating hot-melt synthetic EVA glues that release toxic VOCs and foul municipal paper recycling hydro-pulper screens.',
    globalWarmingImpact: 'Reduces carton assembly labor by 65%, eliminating electric hot-melt glue guns and high-wattage packaging equipment, saving 0.55 kg CO2e per box assembled.',
    co2SavedKg: 0.55,
    plasticAvoidedGrams: 90,
    decompositionDays: '45–60 days',
    features: ['Pops upright in under 1 second with a single squeeze', 'Automatic interlocked floor supports heavy contents without falling through', 'Peel-and-seal lid strip with tear tab for scissors-free opening'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.68, total: 340 },
      { qty: 1000, pricePerUnit: 0.58, total: 580 },
      { qty: 2500, pricePerUnit: 0.49, total: 1225 },
      { qty: 5000, pricePerUnit: 0.41, total: 2050 }
    ],
    specs: { 'Base Type': 'Automatic Crash-Lock (Pre-glued)', 'Assembly Speed': '< 1 second', 'ECT': '32 ECT' }
  },
  {
    id: 'telescopic-boxes',
    name: 'Telescopic Boxes',
    category: 'boxes',
    filterKey: 'boxes',
    categoryName: 'Cardboard Boxes & Cartons',
    svgType: 'telescopic-box',
    subtitle: 'Two-piece adjustable depth cartons where the top lid telescopes over the base.',
    price: 1.45,
    moq: 200,
    unit: 'set',
    featured: false,
    rating: 4.8,
    reviewCount: 77,
    badge: 'Adjustable Depth',
    material: 'Rigid Single-Wall or Double-Wall Corrugated (Base + Lid)',
    boardWeight: '200# Burst Strength',
    coating: 'Natural uncoated kraft board',
    dimensionsPreset: '16" × 12" × 8-14" (406 × 305 × 203-355 mm)',
    dimensionsAvailable: ['Artwork & Print (20"×16"×4-8")', 'Standard Telescopic (16"×12"×8-14")', 'Heavy Hardware (24"×18"×10-18")'],
    finishOptions: ['Natural Brown Kraft', 'Clean White Lid + Kraft Base'],
    ecoBadges: ['Eliminates Void Fill Packaging', 'Double-Wall Corner Strength', '100% Repulpable'],
    leadTime: '3-5 business days',
    history: 'Commonly known as hat boxes or banana boxes in agriculture, telescopic boxes were designed so a single packaging SKU could adjust its interior volume to variable harvest depths without leaving empty air space.',
    environmentalImpact: 'By sliding the lid down to the exact height of the cargo, you eliminate the need for plastic void fill chips and bubble wrap, while ensuring the box cannot be crushed in stack transit.',
    ecosystemBenefits: 'Two-piece cap and tray geometry provides superior edge crush protection without requiring rigid polystyrene (EPS) foam corner cushions, eliminating styrofoam bead pollution in waterways.',
    globalWarmingImpact: 'Displaces expanded polystyrene foam, a notorious emitter of pentane greenhouse blowing agents, reducing net carbon footprint by 1.45 kg CO2e per box.',
    co2SavedKg: 1.45,
    plasticAvoidedGrams: 280,
    decompositionDays: '60–90 days',
    features: ['Lid slides smoothly over base for variable depth accommodation', 'Double-thickness sidewalls created when lid is fully seated', 'Ideal for framed prints, textiles, and variable-depth shipments'],
    pricingTiers: [
      { qty: 200, pricePerUnit: 1.70, total: 340 },
      { qty: 500, pricePerUnit: 1.45, total: 725 },
      { qty: 1000, pricePerUnit: 1.25, total: 1250 },
      { qty: 2500, pricePerUnit: 1.05, total: 2625 }
    ],
    specs: { 'Structure': 'Two piece: Full telescopic tray and cap', 'Height Range': 'Expands from 8" to 14"', 'Recyclable': '100%' }
  },

  // =========================================================================
  // CATEGORY 2: POSTAL & E-COMMERCE (7 Products)
  // =========================================================================
  {
    id: 'biodegradable-compostable-mailers',
    name: 'Biodegradable & Compostable Mailers',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'bio-mailer',
    subtitle: 'Silky matte courier mailers made from certified PBAT and plant-derived cornstarch.',
    price: 0.38,
    moq: 500,
    unit: 'mailer',
    featured: true,
    rating: 5.0,
    reviewCount: 384,
    badge: 'Home Compostable',
    material: 'Plant Starch (PLA) & Bio-Polyester (PBAT)',
    boardWeight: '60 Micron Caliper Tear-Resistant Film',
    coating: 'Zero polyethylene; matte tactile feel',
    dimensionsPreset: '10" × 13" (255 × 330 mm) Medium',
    dimensionsAvailable: ['Mini #0 (6"×9")', 'Small #1 (8.5"×11")', 'Medium #2 (10"×13")', 'Large #3 (14.5"×19")', 'Extra Large #4 (19"×24")'],
    finishOptions: ['Deep Forest Green with White Inks', 'Earthy Clay Tan', 'Charcoal Matte'],
    ecoBadges: ['TÜV Austria OK Compost Home', 'Breaks Down in 90 Days', 'Zero Microplastics'],
    leadTime: '1-3 business days',
    history: 'Developed as the direct antidote to the 100+ billion single-use polyethylene mailers consumed globally by fast-fashion e-commerce. Derived from annually renewable agricultural corn crops.',
    environmentalImpact: 'Breaks down completely into carbon dioxide, water, and organic biomass within 90 days in home garden compost piles. Certified zero toxic chemical ecotoxicity.',
    ecosystemBenefits: 'Crafted from plant-based PBAT and non-GMO cornstarch. Certified OK Compost Home (EN 13432), it breaks down completely in garden compost into water, CO2, and nutrient-rich biomass without microplastics.',
    globalWarmingImpact: 'Replaces single-use polyethylene courier bags that persist for 500+ years. Agriculture crops capture carbon from the atmosphere during growth, slashing lifecycle greenhouse emissions by 60%.',
    co2SavedKg: 0.42,
    plasticAvoidedGrams: 45,
    decompositionDays: '60–90 days',
    features: ['Waterproof and tear-resistant during heavy rain delivery transit', 'Dual adhesive strip enables customers to reuse the same bag for returns', 'Silky, velvety organic texture that communicates instant luxury eco values'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.45, total: 225 },
      { qty: 1000, pricePerUnit: 0.38, total: 380 },
      { qty: 2500, pricePerUnit: 0.31, total: 775 },
      { qty: 5000, pricePerUnit: 0.25, total: 1250 }
    ],
    specs: { 'Certification': 'EN 13432 / AS 5810', 'Thickness': '60 microns', 'Adhesive': 'Permanent destructive rubber resin' }
  },
  {
    id: 'kraft-paper-mailing-bags',
    name: 'Kraft Paper Mailing Bags',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'kraft-mailing-bag',
    subtitle: 'High-tensile ribbed kraft envelopes with expandable side gussets and peel-and-seal flaps.',
    price: 0.32,
    moq: 500,
    unit: 'bag',
    featured: false,
    rating: 4.8,
    reviewCount: 146,
    badge: 'High Tensile Kraft',
    material: '120 GSM High-Tensile Virgin & Recycled Kraft Fibers',
    boardWeight: '120 GSM Long-Fiber Unbleached Kraft',
    coating: 'Natural breathable water-resistant sizing',
    dimensionsPreset: '12" × 16" + 3" Gusset (300 × 400 + 75 mm)',
    dimensionsAvailable: ['Small (7"×10"+2")', 'Medium (10"×14"+2")', 'Large (12"×16"+3")', 'Jumbo Bulky (16"×20"+4")'],
    finishOptions: ['Natural Brown Ribbed Kraft', 'Bleached White Kraft', 'Custom Water-Based Brand Print'],
    ecoBadges: ['100% Curbside Recyclable', 'FSC® Forest Stewardship', 'Plastic Free'],
    leadTime: '2-4 business days',
    history: 'Kraft paper—from the German word *kraft* meaning "strength"—was invented by Carl F. Dahl in 1879 using sulfate pulping to preserve long, unbroken cellulose fibers for maximum tensile durability.',
    environmentalImpact: 'Made from renewable softwood wood pulp that can be recycled up to 7 times. Drops straight into residential curbside paper recycling without separating plastic liners.',
    ecosystemBenefits: 'Made from 100% curbside repulpable unbleached pine fiber. Discarded bags decompose harmlessly in soil without releasing phthalates, endocrine disruptors, or toxic plasticizers into rivers.',
    globalWarmingImpact: 'Managed FSC forests absorb 2.4 tons of CO2 per hectare annually. Sourcing renewable paper mailers instead of petrochemical poly mailers cuts 0.38 kg CO2e per shipment.',
    co2SavedKg: 0.38,
    plasticAvoidedGrams: 40,
    decompositionDays: '30–60 days',
    features: ['Bottom block and expandable side gussets fit chunky knitwear and books', 'High puncture resistance prevents sharp corners from tearing through', 'Dual peel-and-seal strips with central red tear-strip for effortless returns'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.39, total: 195 },
      { qty: 1000, pricePerUnit: 0.32, total: 320 },
      { qty: 2500, pricePerUnit: 0.26, total: 650 },
      { qty: 5000, pricePerUnit: 0.21, total: 1050 }
    ],
    specs: { 'GSM': '120 GSM heavy paper', 'Closure': 'Hot-melt peel & seal strip', 'Burst Strength': '380 kPa' }
  },
  {
    id: 'corrugated-padded-envelopes',
    name: 'Corrugated Padded Envelopes',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'corrugated-padded-envelope',
    subtitle: 'Cushioned postal envelopes lined with internal fluted paper waves instead of plastic bubble wrap.',
    price: 0.46,
    moq: 300,
    unit: 'envelope',
    featured: true,
    rating: 4.9,
    reviewCount: 204,
    badge: 'Bubble-Free Mailer',
    material: 'Heavy Kraft Shell + Internal Micro-Flute Paper Cushioning',
    boardWeight: '110 GSM Outer + 90 GSM Corrugated Fluting Core',
    coating: 'Zero plastic film laminates',
    dimensionsPreset: '8.5" × 11" (215 × 280 mm) #2 Size',
    dimensionsAvailable: ['#0 Mini (5.5"×8")', '#2 Standard (8.5"×11")', '#4 Large (9.5"×14")', '#6 Jumbo (12.5"×18")'],
    finishOptions: ['Natural Kraft with Green Eco Stamp', 'Chalk White Exterior'],
    ecoBadges: ['Eliminates Bubble Plastic', 'Single-Stream Recyclable', '100% Repulpable'],
    leadTime: '2-3 business days',
    history: 'Engineered as an urgent engineering solution after municipal recycling facilities began banning bubble-padded envelopes due to the plastic bubble wrap melting into and ruining paper recycling pulpers.',
    environmentalImpact: 'Enables 100% single-stream paper recycling. Eliminates 18,000 square meters of polyethylene bubble film per average warehouse fulfillment container.',
    ecosystemBenefits: 'Replaces plastic bubble mailers that cannot be recycled curbside and frequently contaminate marine wildlife. The internal fluted cushioning breaks down naturally into organic compost.',
    globalWarmingImpact: 'Avoids petroleum cracking and greenhouse gas venting associated with LDPE bubble film manufacture, saving 0.58 kg CO2e per envelope deployed in e-commerce.',
    co2SavedKg: 0.58,
    plasticAvoidedGrams: 55,
    decompositionDays: '45–75 days',
    features: ['Dense corrugated fluted interior absorbs severe sorting machinery drops', 'Glueless self-seal flap creates a tamper-evident permanent bond', 'Rigid edge construction prevents cosmetic cartons and jewelry from crushing'],
    pricingTiers: [
      { qty: 300, pricePerUnit: 0.55, total: 165 },
      { qty: 600, pricePerUnit: 0.46, total: 276 },
      { qty: 1500, pricePerUnit: 0.38, total: 570 },
      { qty: 3000, pricePerUnit: 0.31, total: 930 }
    ],
    specs: { 'Lining': '100% repulpable paper fluting', 'Drop Rating': 'Tested to 1.2m drop', 'Recycle Stream': 'Standard Paper' }
  },
  {
    id: 'book-wraps-mailers',
    name: 'Book Wraps / Cardboard Mailers',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'book-wrap',
    subtitle: 'Corner-protecting variable depth wraps engineered for books, albums, vinyl, and flat goods.',
    price: 0.54,
    moq: 250,
    unit: 'mailer',
    featured: false,
    rating: 4.9,
    reviewCount: 162,
    badge: 'Corner Armor',
    material: 'E-Flute Corrugated Rigid Kraftboard',
    boardWeight: '350 GSM Heavy Board',
    coating: 'Natural kraft paper',
    dimensionsPreset: '12.5" × 9.5" × 1-3" (318 × 241 × 25-76 mm)',
    dimensionsAvailable: ['Pocket / Kindle (8"×6"×1-2")', 'Standard Novel / A4 (12.5"×9.5"×1-3")', '12" Vinyl LP (13"×13"×1-2")', 'Coffee Table Book (16"×12"×1-3")'],
    finishOptions: ['Natural Kraft with Red Tear Strip', 'White Exterior with Custom Logo'],
    ecoBadges: ['Zero Corner Damage', 'Adjustable Fill Height', '100% Curbside Recyclable'],
    leadTime: '2-4 business days',
    history: 'Popularized by major publishing houses and pioneering online book retailers in the late 1990s. The extended outer cardboard bumper absorbs direct drops on pavement without denting book corners.',
    environmentalImpact: 'Eliminates plastic air pillows and bubble envelopes entirely. Made from 90% recycled Scandinavian cardboard that decomposes safely in backyard compost.',
    ecosystemBenefits: 'Variable-depth creasing hugs media snugly using paper alone, removing the need for plastic bubble wraps and styrofoam void fill that harm terrestrial and aquatic ecosystems.',
    globalWarmingImpact: 'Eliminating excess parcel volume reduces outer parcel cube by up to 40%, directly reducing fuel consumption and carbon exhaust across urban courier delivery fleets.',
    co2SavedKg: 0.65,
    plasticAvoidedGrams: 60,
    decompositionDays: '60–90 days',
    features: ['Overhang perimeter walls cushion corners against severe shipping knocks', 'Pre-creased fold lines flex tightly around 1, 2, or 3 stacked books', 'Integrated high-tensile tear strip for instant, satisfying customer unboxing'],
    pricingTiers: [
      { qty: 250, pricePerUnit: 0.65, total: 162.5 },
      { qty: 500, pricePerUnit: 0.54, total: 270 },
      { qty: 1500, pricePerUnit: 0.44, total: 660 },
      { qty: 3000, pricePerUnit: 0.36, total: 1080 }
    ],
    specs: { 'Depth Range': 'Variable 10mm to 75mm', 'Corner Protection': 'Extended bumper edges', 'Tear Strip': 'Red Kraft Pull' }
  },
  {
    id: 'postal-tubes-cardboard-caps',
    name: 'Postal Tubes with Cardboard Caps',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'postal-tubes-round',
    subtitle: 'Spiral-wound heavy cylindrical paper tubes fitted with 100% recyclable cardboard end plugs.',
    price: 0.95,
    moq: 100,
    unit: 'tube',
    featured: false,
    rating: 4.8,
    reviewCount: 89,
    badge: 'All-Paper Tube',
    material: 'High-Density Spiral Wound Recycled Paperboard',
    boardWeight: '1.5mm - 2.0mm Heavy Tube Wall',
    coating: 'Zero plastic; natural paper end caps',
    dimensionsPreset: '2" Diameter × 25" Length (50 × 635 mm) A1 Size',
    dimensionsAvailable: ['A3 Mini (2"×13")', 'A2 Standard (2"×18")', 'A1 Medium (2"×25")', 'A0 Giant (3"×38")'],
    finishOptions: ['Natural Brown Kraft Tube + Cardboard Caps', 'Clean White Outer Wrap'],
    ecoBadges: ['Zero White Plastic End Caps', '100% Repulpable', 'Heirloom Storage Life'],
    leadTime: '3-5 business days',
    history: 'First engineered in textile manufacturing to wind delicate silks and twills. Packaging designers later fitted them with white polyethylene plastic caps—until PackNStir replaced the plastic caps with friction-fit molded paper pulp plugs.',
    environmentalImpact: 'Conventional postal tubes use plastic end caps that contaminate cardboard recycling shredders. Our 100% paper tube and cardboard plug enter the recycling bin as a single unified item.',
    ecosystemBenefits: 'Features molded paper pulp end caps that replace traditional white plastic (PE/PVC) push-in caps. Plastic tube caps are frequently lost outdoors and persist as choking hazards for wildlife.',
    globalWarmingImpact: 'Eliminates plastic cap injection molding from fossil fuels. Spiral-wound from 100% post-consumer recycled paperboard, saving 0.48 kg CO2e per tube.',
    co2SavedKg: 0.48,
    plasticAvoidedGrams: 35,
    decompositionDays: '60–90 days',
    features: ['Spirally wound structural wall prevents bending or creasing of art prints', 'Friction-locking cardboard caps stay securely seated during transit', 'Ideal for architectural blueprints, fine art giclée prints, and maps'],
    pricingTiers: [
      { qty: 100, pricePerUnit: 1.15, total: 115 },
      { qty: 250, pricePerUnit: 0.95, total: 237.5 },
      { qty: 500, pricePerUnit: 0.80, total: 400 },
      { qty: 1000, pricePerUnit: 0.68, total: 680 }
    ],
    specs: { 'Wall Caliper': '1.8 mm', 'Cap Material': '100% molded cardboard plug', 'Burst': 'Extreme crush tested' }
  },
  {
    id: 'triangular-postal-tubes',
    name: 'Triangular Postal Tubes',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'postal-tubes-triangular',
    subtitle: 'Flat-packed triangular cardboard postal tubes that never roll off courier conveyor belts.',
    price: 0.72,
    moq: 200,
    unit: 'tube',
    featured: false,
    rating: 4.9,
    reviewCount: 96,
    badge: 'Non-Roll Innovation',
    material: 'Single-Wall Micro-Flute Corrugated Cardboard',
    boardWeight: '200# Test B-Flute Kraft',
    coating: 'Natural uncoated kraft board',
    dimensionsPreset: '3" × 3" × 3" × 25" (76 × 76 × 76 × 635 mm)',
    dimensionsAvailable: ['A2 Short (3"×18")', 'A1 Standard (3"×25")', 'A0 Long (4"×38")'],
    finishOptions: ['Natural Brown Kraft', 'White Coated Exterior'],
    ecoBadges: ['Saves 70% Warehouse Storage', 'No Courier Surcharges', '100% Recyclable'],
    leadTime: '2-4 business days',
    history: 'Developed by packaging engineers to solve the costly courier problem of round tubes rolling off high-speed automated sorting conveyor belts, which previously incurred expensive "manual handling surcharges".',
    environmentalImpact: 'Ships completely flat, saving 70% freight and warehouse storage volume compared to pre-assembled round tubes. Assembles into a rigid prism in seconds.',
    ecosystemBenefits: 'Ships flat-packed in bundles, eliminating the transport of empty trapped cylindrical air. Made from pure FSC unbleached corrugated board, returning cleanly to paper recycling or organic compost.',
    globalWarmingImpact: 'Flat-pack delivery reduces inbound transport truck volume by 70%, slashing carbon emissions from logistics and saving 0.52 kg CO2e per tube.',
    co2SavedKg: 0.52,
    plasticAvoidedGrams: 50,
    decompositionDays: '45–75 days',
    features: ['Triangular prism geometry cannot roll off warehouse belts or delivery trucks', 'Peel-and-seal adhesive ends eliminate the need for plastic tape', 'Folds flat for compact storage in studios and fulfillment bays'],
    pricingTiers: [
      { qty: 200, pricePerUnit: 0.86, total: 172 },
      { qty: 500, pricePerUnit: 0.72, total: 360 },
      { qty: 1000, pricePerUnit: 0.60, total: 600 },
      { qty: 2500, pricePerUnit: 0.50, total: 1250 }
    ],
    specs: { 'Assembly': 'Ships flat; folds into prism', 'Locking': 'Peel & seal integrated flap', 'Conveyor Safe': 'Yes' }
  },
  {
    id: 'letterbox-friendly-packaging',
    name: 'Letterbox Friendly Packaging',
    category: 'postal',
    filterKey: 'postal',
    categoryName: 'Postal & E-Commerce Packaging',
    svgType: 'letterbox-friendly',
    subtitle: 'Ultra-slim die-cut parcels engineered under 25mm thickness to fit through standard residential letterboxes.',
    price: 0.48,
    moq: 400,
    unit: 'box',
    featured: false,
    rating: 4.8,
    reviewCount: 174,
    badge: 'First-Time Delivery',
    material: 'High-Density E-Flute Rigid Kraftboard',
    boardWeight: '320 GSM Rigid Cardboard Liner',
    coating: 'Zero plastic coating; soy ink printable',
    dimensionsPreset: '9.4" × 6.5" × 0.85" (240 × 165 × 22 mm)',
    dimensionsAvailable: ['Small PIP (160×120×22mm)', 'Standard Letterbox (240×165×22mm)', 'Max Postal Slot (340×240×24mm)'],
    finishOptions: ['Natural Brown Kraft', 'Clean Minimalist White', 'Full Color Custom Print'],
    ecoBadges: ['Zero Missed Delivery Trips', 'Eliminates Delivery Vans Van Retries', '100% Recyclable'],
    leadTime: '2-3 business days',
    history: 'Engineered in response to national postal carrier regulations (such as Royal Mail Large Letter and USPS Flat rates) to guarantee delivery directly onto the recipient’s doormat even when nobody is home.',
    environmentalImpact: 'Eliminates courier "missed delivery" return journeys, reducing delivery van carbon emissions by an estimated 280 grams of CO2 per first-time successful parcel drop.',
    ecosystemBenefits: 'Fits through standard domestic letterbox slots, eliminating missed deliveries and redundant repeat van journeys while using zero plastic shrink wrap or poly sleeves.',
    globalWarmingImpact: 'First-time delivery success directly cuts courier vehicle idling and second-attempt delivery runs, saving an estimated 0.82 kg CO2e in transport emissions per order.',
    co2SavedKg: 0.82,
    plasticAvoidedGrams: 65,
    decompositionDays: '45–60 days',
    features: ['Guaranteed to pass through standard domestic letterbox slots under 25mm', 'Rigid cardboard ensures cosmetics, coffee beans, and jewelry arrive unbent', 'Peel-and-seal strip with tamper-evident tear tab for immediate unboxing'],
    pricingTiers: [
      { qty: 400, pricePerUnit: 0.58, total: 232 },
      { qty: 800, pricePerUnit: 0.48, total: 384 },
      { qty: 2000, pricePerUnit: 0.39, total: 780 },
      { qty: 5000, pricePerUnit: 0.32, total: 1600 }
    ],
    specs: { 'Max Thickness': '24.0 mm', 'Postal Qualification': 'Large Letter / Flat rate compliant', 'Material': 'E-Flute' }
  },

  // =========================================================================
  // CATEGORY 3: SUSTAINABLE TAKEAWAY & TABLEWARE (10 Products)
  // =========================================================================
  {
    id: 'bagasse-sugarcane-bowls-clamshells',
    name: 'Bagasse (Sugarcane) Bowls & Clamshells',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'bagasse-clamshell',
    subtitle: 'Thermal-molded food containers made from upcycled agricultural sugarcane stalks.',
    price: 0.28,
    moq: 500,
    unit: 'clamshell',
    featured: true,
    rating: 4.9,
    reviewCount: 312,
    badge: 'Upcycled Plant Stalk',
    material: '100% Recovered Sugarcane Pulp (Bagasse)',
    boardWeight: 'Dense thermoformed fiber (PFAS-Free)',
    coating: 'Hydrophobic plant-starch barrier (No PE lining)',
    dimensionsPreset: '9" × 6" × 3" (230 × 155 × 75 mm) 2-Compartment',
    dimensionsAvailable: ['6" Burger Clamshell', '9"×6" 2-Compartment Meal', '8" Square Clamshell', '32 oz Round Burrito Bowl'],
    finishOptions: ['Natural Ivory Bagasse', 'Unbleached Tan Bagasse'],
    ecoBadges: ['Composts in 60-90 Days', 'Zero Trees Cut (Agricultural Waste)', 'Microwave & Freezer Safe'],
    leadTime: '1-3 business days',
    history: 'Bagasse is the dry pulpy fibrous residue remaining after crushing sugarcane or sorghum stalks to extract juice. Historically burned as field waste, PackNStir thermoforms it into rigid tableware.',
    environmentalImpact: 'Utilizes a rapidly renewable agricultural byproduct, preventing post-harvest crop burning while sparing forest trees. 100% home compostable within 60 days.',
    ecosystemBenefits: 'Made from upcycled sugarcane bagasse fibers—the agricultural pulp left after sugarcane processing. Certified backyard compostable, it nourishes soil microbiology in 45-60 days.',
    globalWarmingImpact: 'Stops open-field agricultural biomass burning, a catastrophic contributor to toxic smog and black carbon warming. Saves 0.95 kg CO2e per kg compared to polystyrene clamshells.',
    co2SavedKg: 0.95,
    plasticAvoidedGrams: 75,
    decompositionDays: '45–60 days',
    features: ['Withstands hot boiling oils up to 120°C and freezer storage down to -20°C', 'Interlocking tab lock keeps burgers and curry gravies safely contained', 'Certified PFAS-free and fluorochemical-free under strict FDA food safety testing'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.34, total: 170 },
      { qty: 1000, pricePerUnit: 0.28, total: 280 },
      { qty: 2500, pricePerUnit: 0.23, total: 575 },
      { qty: 5000, pricePerUnit: 0.18, total: 900 }
    ],
    specs: { 'Thermal Range': '-20°C to +120°C', 'Raw Material': 'Sugarcane bagasse fiber', 'Compost Time': '60-90 days' }
  },
  {
    id: 'palm-leaf-plates-bowls',
    name: 'Palm Leaf Plates & Bowls',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'palm-leaf-plates',
    subtitle: 'Artisanal organic platters heat-pressed from naturally fallen Areca palm leaves.',
    price: 0.52,
    moq: 200,
    unit: 'plate',
    featured: true,
    rating: 5.0,
    reviewCount: 228,
    badge: 'Fallen Leaves Only',
    material: '100% Naturally Fallen Areca Palm Leaves',
    boardWeight: '1.2mm - 1.8mm Natural Leaf Sheath',
    coating: 'Zero chemicals, waxes, or glues - pure washed leaf',
    dimensionsPreset: '10" Round Dinner Plate (254 mm)',
    dimensionsAvailable: ['6" Square Canape', '8" Round Side', '10" Round Dinner', '10"×10" Square Platter', '16 oz Deep Bowl'],
    finishOptions: ['Natural Varied Woodgrain (Every Piece Unique)'],
    ecoBadges: ['Zero Living Trees Harmed', 'Backyard Compostable in 45 Days', 'Non-Toxic Sterilized with Steam'],
    leadTime: '2-4 business days',
    history: 'Practiced for centuries in rural Southern India, village artisans collect fallen palm leaf sheaths shed naturally by the Areca nut palm tree, wash them in spring water, and press them with hot cast-iron dies.',
    environmentalImpact: 'Zero trees are felled or cut down. The leaves naturally drop to the ground 4 to 6 times a year. Degrades into garden compost faster than standard tree leaves (45-60 days).',
    ecosystemBenefits: 'Formed exclusively from naturally fallen Areca palm fronds collected by rural communities. Zero living trees cut; zero chemicals, binders, or plastic resins added. Enriches soil in 30-45 days.',
    globalWarmingImpact: 'Has the lowest carbon footprint of any single-use tableware on Earth. Sun-drying and gentle steam press forming consumes 88% less energy than manufacturing plastic plates.',
    co2SavedKg: 1.15,
    plasticAvoidedGrams: 90,
    decompositionDays: '30–45 days',
    features: ['Sturdy enough to hold heavy steak, roasted vegetables, and hot sauces without bending', 'Naturally heat-resistant and microwaveable up to 2 minutes', 'Each plate displays beautiful, one-of-a-kind natural woody textures'],
    pricingTiers: [
      { qty: 200, pricePerUnit: 0.62, total: 124 },
      { qty: 500, pricePerUnit: 0.52, total: 260 },
      { qty: 1000, pricePerUnit: 0.43, total: 430 },
      { qty: 2500, pricePerUnit: 0.35, total: 875 }
    ],
    specs: { 'Sourcing': 'Fallen Areca palm leaf', 'Chemicals Used': '0.00%', 'Compost Window': '45-60 days' }
  },
  {
    id: 'kraft-soup-salad-bowls',
    name: 'Kraft Paper Soup & Salad Bowls',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'kraft-soup-salad-bowl',
    subtitle: 'Round unbleached kraft takeaway bowls lined with aqueous grease-barriers for soups and salads.',
    price: 0.34,
    moq: 500,
    unit: 'bowl',
    featured: false,
    rating: 4.8,
    reviewCount: 185,
    badge: 'Aqueous Barrier',
    material: 'Virgin Unbleached Kraft Paperboard (320 GSM)',
    boardWeight: '320 GSM Board + Rolled Rim Support',
    coating: 'Water-based aqueous dispersion (Zero PE plastic film)',
    dimensionsPreset: '26 oz Salad Bowl (750 ml / 150mm diameter)',
    dimensionsAvailable: ['12 oz Soup (350ml)', '16 oz Noodle (500ml)', '26 oz Salad (750ml)', '32 oz Grain Bowl (1000ml)'],
    finishOptions: ['Natural Brown Kraft', 'Custom 2-Color Soy Print Lid Rim'],
    ecoBadges: ['Repulpable in Blue Bin', 'Compostable EN 13432', 'No Plastic Liner'],
    leadTime: '1-3 business days',
    history: 'Traditional paper bowls required a micro-layer of polyethylene (PE) plastic melted onto the paper to hold liquids. PackNStir pioneered water-based dispersion barriers that stop hot broths while remaining pulper-safe.',
    environmentalImpact: 'Eliminates non-recyclable PE lining that causes millions of standard takeaway bowls to be incinerated. Fully repulpable in standard paper recycling mills.',
    ecosystemBenefits: 'Features an advanced plant-based aqueous dispersion coating instead of polyethylene (PE) plastic lining. Fully compostable, it prevents microplastic pollution in municipal compost and farm soil.',
    globalWarmingImpact: 'Eliminating PE extrusion avoids petrochemical polymerization emissions, lowering carbon emissions by 58% and saving 0.72 kg CO2e per 10 bowls.',
    co2SavedKg: 0.72,
    plasticAvoidedGrams: 50,
    decompositionDays: '60–90 days',
    features: ['Rigid rolled rim accepts clear vented rPET or matching compostable paper lids', 'Keeps hot ramen broths and chili hot without leaking through bottom seams', 'Microwave safe and suitable for cold refrigerator meal preparation'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.40, total: 200 },
      { qty: 1000, pricePerUnit: 0.34, total: 340 },
      { qty: 2500, pricePerUnit: 0.28, total: 700 },
      { qty: 5000, pricePerUnit: 0.22, total: 1100 }
    ],
    specs: { 'Capacity': '750 ml / 26 fl oz', 'Barrier': 'Water-borne aqueous dispersion', 'Heat Seal': 'Ultrasonic' }
  },
  {
    id: 'degradable-portion-pots',
    name: 'Degradable Portion/Sauce Pots',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'degradable-portion-pots',
    subtitle: 'Compostable 2 oz and 4 oz dip cups for salad dressings, sauces, and condiments.',
    price: 0.09,
    moq: 1000,
    unit: 'pot',
    featured: false,
    rating: 4.7,
    reviewCount: 94,
    badge: 'Zero Microplastic',
    material: 'Sugarcane Bagasse Pulp or Clear Cornstarch PLA',
    boardWeight: 'Precision molded rim',
    coating: 'Food grade oil resistant treatment',
    dimensionsPreset: '2 oz (60 ml / 62mm diameter)',
    dimensionsAvailable: ['1 oz Dressing (30ml)', '2 oz Standard Dip (60ml)', '3.25 oz Salsa (95ml)', '4 oz Slaw (120ml)'],
    finishOptions: ['Natural Ivory Bagasse', 'Ultra-Clear Plant PLA'],
    ecoBadges: ['100% Biodegradable', 'Matching Snap Lids Available', 'Compostable'],
    leadTime: '2-3 business days',
    history: 'Small plastic sauce portion cups (polypropylene #5) are notoriously non-recyclable because recycling machinery infrared optical sorters cannot identify objects smaller than 2 inches.',
    environmentalImpact: 'Replaces millions of small plastic cups that slip through municipal screens into rivers and oceans. Decomposes naturally in compost without microplastic shedding.',
    ecosystemBenefits: 'Replaces polypropylene and polystyrene sauce cups—among the most rampant plastic debris items polluting coastal coastlines. Decomposes naturally into organic soil nutrients.',
    globalWarmingImpact: 'Sourced from renewable annual plant starches, cutting fossil fuel extraction emissions by 65% and saving 0.28 kg CO2e per 50 units.',
    co2SavedKg: 0.28,
    plasticAvoidedGrams: 30,
    decompositionDays: '45–75 days',
    features: ['Snap-fit tight seal prevents salad dressing and soy sauce spills in delivery bags', 'Fits both cold dressings and warm BBQ or fondue sauces', 'Pairs with either sugarcane fiber or crystal-clear PLA plant lids'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.11, total: 110 },
      { qty: 2500, pricePerUnit: 0.09, total: 225 },
      { qty: 5000, pricePerUnit: 0.075, total: 375 },
      { qty: 10000, pricePerUnit: 0.06, total: 600 }
    ],
    specs: { 'Volume': '60 ml / 2 oz', 'Lid Fit': '62mm standard snap rim', 'Compost Standard': 'EN 13432' }
  },
  {
    id: 'wooden-bamboo-cutlery-sets',
    name: 'Wooden & Bamboo Cutlery Sets',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'wooden-bamboo-cutlery',
    subtitle: 'Ultra-smooth, splinter-free disposable cutlery sets crafted from natural birch and bamboo.',
    price: 0.14,
    moq: 1000,
    unit: 'set',
    featured: false,
    rating: 4.8,
    reviewCount: 260,
    badge: 'Splinter-Free Birch',
    material: '100% Certified Sustainable Birch Wood & Moso Bamboo',
    boardWeight: '160mm Heavy-Gauge Cutlery',
    coating: 'Mechanical steam press polishing (Zero chemical lacquers)',
    dimensionsPreset: '6.3" Length (160 mm) 4-in-1 Set (Knife, Fork, Spoon, Napkin)',
    dimensionsAvailable: ['Fork Only (160mm)', 'Knife Only (165mm)', 'Spoon Only (160mm)', 'Wrapped 4-in-1 Kit (Kraft wrapped)'],
    finishOptions: ['Natural Pale Birch', 'Caramelized Heat-Treated Bamboo'],
    ecoBadges: ['FSC® 100% Certified Birch', '100% Home Compostable', 'Plastic Ban Compliant'],
    leadTime: '1-3 business days',
    history: 'The single-use plastic cutlery ban across the EU, UK, and Canada outlawed polystyrene plastic forks. PackNStir uses rapid-growing Scandinavian birch and Moso bamboo steam-formed into ergonomic shapes.',
    environmentalImpact: 'Grown without pesticides. Polished with natural carnauba wax or steam. Completely biodegrades in residential gardens within 40 to 60 days.',
    ecosystemBenefits: 'Replaces single-use polypropylene forks and knives that persist for centuries in marine ecosystems. Made from rapidly replenishable FSC birch and bamboo that biodegrade into fertile humus.',
    globalWarmingImpact: 'Moso bamboo grows up to 3 feet per day without synthetic fertilizers, sequestering double the CO2 of conventional hardwood trees. Saves 0.85 kg CO2e per 100-piece pack.',
    co2SavedKg: 0.85,
    plasticAvoidedGrams: 80,
    decompositionDays: '60–90 days',
    features: ['Serrated knife edge slices through steaks and crisp takeaway crusts effortlessly', 'Deep spoon bowl and reinforced fork tines withstand heavy pasta salads', 'Wrapped in unbleached kraft paper wrappers for sanitary food service delivery'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.17, total: 170 },
      { qty: 2500, pricePerUnit: 0.14, total: 350 },
      { qty: 5000, pricePerUnit: 0.115, total: 575 },
      { qty: 10000, pricePerUnit: 0.095, total: 950 }
    ],
    specs: { 'Length': '160 mm', 'Material': 'Scandinavian white birch', 'Sterilization': 'High-temperature steam' }
  },
  {
    id: 'bamboo-bottles-flasks',
    name: 'Bamboo Bottles & Flasks',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'bamboo-bottle',
    subtitle: 'Vacuum-insulated stainless steel drink flasks wrapped in authentic carved natural bamboo.',
    price: 8.90,
    moq: 50,
    unit: 'flask',
    featured: false,
    rating: 5.0,
    reviewCount: 65,
    badge: 'Reusable Keepsake',
    material: 'Food-Grade 18/8 Stainless Steel Wrapped in Carved Moso Bamboo',
    boardWeight: 'Double-Wall Vacuum Insulation',
    coating: 'Natural organic oil burnished bamboo surface',
    dimensionsPreset: '500 ml / 17 oz (240mm height × 70mm diameter)',
    dimensionsAvailable: ['350 ml Tumbler', '500 ml Travel Flask', '750 ml Sport Bottle'],
    finishOptions: ['Natural Blonde Bamboo with Laser Engraved Logo', 'Dark Smoked Bamboo'],
    ecoBadges: ['Replaces 1,400 Plastic Bottles', 'Zero BPA / Phthalates', 'Carbon-Sequestering Bamboo'],
    leadTime: '5-7 business days',
    history: 'Bamboo is the fastest-growing woody plant on Earth, growing up to 90 cm in 24 hours. Indigenous cultures have utilized hollow bamboo culms as water containers for millennia.',
    environmentalImpact: 'Bamboo plants produce 35% more oxygen and absorb 5 times more greenhouse gases than equivalent trees. Each reusable flask prevents over 1,400 single-use plastic bottles over its lifespan.',
    ecosystemBenefits: 'Replaces hundreds of single-use PET drink bottles per year per user over its multi-year life. The natural bamboo casing eliminates synthetic resin production and ocean bottle pollution.',
    globalWarmingImpact: 'One reusable flask displaces an estimated 167 single-use plastic bottles annually, eliminating over 14.2 kg of fossil-fuel combustion CO2 per year.',
    co2SavedKg: 14.2,
    plasticAvoidedGrams: 5200,
    decompositionDays: 'Reusable (5+ years)',
    features: ['Double-wall vacuum insulation keeps drinks steaming hot for 12 hours or iced cold for 24 hours', 'Includes removable stainless steel tea infuser and fruit basket', 'Exterior stays cool to the touch with tactile, non-slip natural wood grain'],
    pricingTiers: [
      { qty: 50, pricePerUnit: 10.50, total: 525 },
      { qty: 100, pricePerUnit: 8.90, total: 890 },
      { qty: 250, pricePerUnit: 7.60, total: 1900 },
      { qty: 500, pricePerUnit: 6.40, total: 3200 }
    ],
    specs: { 'Capacity': '500 ml', 'Insulation': '12h Hot / 24h Cold', 'Laser Engraving': 'Precision vector etch' }
  },
  {
    id: 'compostable-pla-cold-cups',
    name: 'Compostable PLA Cold Cups',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'pla-cold-cups',
    subtitle: 'Crystal-clear takeaway cold drink tumblers made from renewable cornstarch bioplastic.',
    price: 0.16,
    moq: 1000,
    unit: 'cup',
    featured: false,
    rating: 4.8,
    reviewCount: 142,
    badge: 'Plant Bioplastic',
    material: '100% Ingeo™ Polylactic Acid (Cornstarch PLA)',
    boardWeight: 'Heavyweight clear thermoform',
    coating: 'Zero petroleum plastic; optical clarity',
    dimensionsPreset: '16 oz (470 ml / 96mm rim diameter)',
    dimensionsAvailable: ['12 oz Small (350ml)', '16 oz Standard (470ml)', '20 oz Large (590ml)', '24 oz Iced Tea (700ml)'],
    finishOptions: ['Crystal Clear Unprinted', 'Green Leaf Certified Print', 'Custom Branded Print'],
    ecoBadges: ['BPI Certified Compostable', 'Zero Petroleum Content', 'Carbon Footprint 75% Lower'],
    leadTime: '2-4 business days',
    history: 'Polylactic acid (PLA) was discovered by Wallace Carothers in 1932. Commercialized by fermenting plant dextrose derived from corn and cassava roots, it provides the transparent luster of plastic with zero fossil fuel oil.',
    environmentalImpact: 'Generates 75% fewer greenhouse gas emissions during raw resin production than conventional PET plastics. Composts completely in commercial composting facilities.',
    ecosystemBenefits: 'Made from fermented plant dextrose (corn and cassava starch). Decomposes in commercial composting into water and carbon dioxide without generating microplastic fragments.',
    globalWarmingImpact: 'Consumes 68% less fossil energy to produce than conventional petroleum PET plastic, saving 1.25 kg CO2e per 100 cups.',
    co2SavedKg: 1.25,
    plasticAvoidedGrams: 110,
    decompositionDays: '60–90 days (Industrial)',
    features: ['Flawless glass-like transparency highlights cold brew coffees, juices, and boba', 'Pairs with matching flat straw-slot lids or dome lids for smoothies', 'Shatter-resistant rim ensures leak-proof snap with lids'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.20, total: 200 },
      { qty: 2500, pricePerUnit: 0.16, total: 400 },
      { qty: 5000, pricePerUnit: 0.13, total: 650 },
      { qty: 10000, pricePerUnit: 0.105, total: 1050 }
    ],
    specs: { 'Temperature Limit': 'Up to 40°C (Cold drinks only)', 'Material': 'Ingeo™ Biopolymer', 'Recycle': 'Industrial Compost' }
  },
  {
    id: 'double-wall-kraft-hot-cups',
    name: 'Double-Wall Kraft Hot Cups',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'kraft-hot-cups',
    subtitle: 'Thermal-insulating dual-layer coffee cups lined with water-based dispersion barrier (no PE plastic).',
    price: 0.18,
    moq: 1000,
    unit: 'cup',
    featured: false,
    rating: 4.9,
    reviewCount: 275,
    badge: 'No Sleeve Needed',
    material: 'Double-Layer FSC® Certified Kraft Paperboard',
    boardWeight: '300 GSM Inner + 250 GSM Outer Corrugated Air Gap',
    coating: 'Plant-derived water-based dispersion (Zero PE lining)',
    dimensionsPreset: '12 oz (350 ml / 90mm rim)',
    dimensionsAvailable: ['8 oz Espresso (230ml)', '12 oz Regular (350ml)', '16 oz Large (470ml)'],
    finishOptions: ['Natural Brown Kraft', 'Clean White Kraft', 'Custom All-Over Soy Print'],
    ecoBadges: ['Curbside Paper Mill Recyclable', 'Zero Single-Use Plastic Cup Ban Compliant', 'No Chemical Smell'],
    leadTime: '2-4 business days',
    history: 'Billions of coffee cups end up in landfills annually because traditional paper cups are fused with a polyethylene plastic liner that paper mills cannot separate. PackNStir uses an aqueous dispersion that breaks down like ordinary paper.',
    environmentalImpact: 'Certified repulpable in standard blue paper recycling bins. Dual-wall design traps an air insulating pocket, eliminating the need for 1 billion secondary cardboard cup sleeves annually.',
    ecosystemBenefits: 'Water-based dispersion barrier eliminates the conventional plastic (PE) lining that renders 99% of disposable coffee cups unrecyclable, saving millions of cups from toxic landfill incineration.',
    globalWarmingImpact: 'Built-in double-wall air insulation removes the need for separate cardboard sleeves, saving 0.44 kg CO2e per 50 cups while keeping coffee hot longer.',
    co2SavedKg: 0.44,
    plasticAvoidedGrams: 45,
    decompositionDays: '60–90 days',
    features: ['Thermal insulation keeps coffee piping hot while outside remains cool in hand', 'Aqueous barrier prevents coffee crema and hot oils from softening the cup wall', 'Rolled rim ensures a tight, drip-free fit with compostable CPLA or bagasse lids'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.22, total: 220 },
      { qty: 2500, pricePerUnit: 0.18, total: 450 },
      { qty: 5000, pricePerUnit: 0.145, total: 725 },
      { qty: 10000, pricePerUnit: 0.12, total: 1200 }
    ],
    specs: { 'Rim Diameter': '90 mm', 'Heat Retention': '45 minutes >65°C', 'Recyclability': 'PTS Method Certified Repulpable' }
  },
  {
    id: 'greaseproof-paper',
    name: 'Greaseproof Paper',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'greaseproof-paper',
    subtitle: 'High-density unbleached parchment sheets and rolls that repel grease without toxic fluorochemicals (PFAS).',
    price: 0.05,
    moq: 1000,
    unit: 'sheet',
    featured: false,
    rating: 4.8,
    reviewCount: 198,
    badge: 'PFAS-Free Barrier',
    material: '38 GSM Heavily Calendered Natural Kraft Fibers',
    boardWeight: '38 GSM High-Density Paper',
    coating: 'Mechanical hydration refinement (Zero fluorochemicals)',
    dimensionsPreset: '12" × 12" (305 × 305 mm) Sheet',
    dimensionsAvailable: ['10" × 10" Basket Liner', '12" × 12" Burger Wrap', '12" × 16" Tray Liner', 'Continuous 500m Dispenser Roll'],
    finishOptions: ['Natural Unbleached Brown', 'Clean White', 'Custom Repeating Soy Ink Logo Print'],
    ecoBadges: ['100% Home Compostable', 'Zero Fluorochemicals (PFAS-Free)', 'Oven Safe up to 220°C'],
    leadTime: '2-4 business days',
    history: 'Real greaseproof paper is produced through intense mechanical refining (beating) of wood pulp fibers until they break down into a gelatinous slurry. When dried and hot-calendered, the pore spaces are smaller than oil molecules.',
    environmentalImpact: 'Eliminates carcinogenic PFAS "forever chemicals" that historically coated burger wraps. Breaks down in compost in under 3 weeks into rich garden soil nutrients.',
    ecosystemBenefits: '100% free of hazardous PFAS "forever chemicals" that poison groundwater and persist indefinitely in living organisms. Natural mechanical calender compression provides grease barrier.',
    globalWarmingImpact: 'Avoiding fluorination processes saves significant thermal processing energy, cutting manufacturing carbon emissions by 45% and saving 0.65 kg CO2e per 1,000 sheets.',
    co2SavedKg: 0.65,
    plasticAvoidedGrams: 70,
    decompositionDays: '30–45 days',
    features: ['Resists butter, hot animal fats, melted cheddar, and vinegar salad dressings', 'Safe for conventional ovens up to 220°C and microwave reheating', 'Provides an authentic artisan farm-to-table presentation in food baskets'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.065, total: 65 },
      { qty: 2500, pricePerUnit: 0.05, total: 125 },
      { qty: 5000, pricePerUnit: 0.038, total: 190 },
      { qty: 10000, pricePerUnit: 0.028, total: 280 }
    ],
    specs: { 'GSM': '38 GSM', 'Oil Kit Test': 'Kit 8+ Grease Resistance', 'Oven Safe': 'Up to 220°C' }
  },
  {
    id: 'custom-printed-paper-carrier-bags',
    name: 'Custom Printed Paper Carrier Bags',
    category: 'takeaway',
    filterKey: 'takeaway',
    categoryName: 'Sustainable Takeaway & Tableware',
    svgType: 'custom-carrier-bags',
    subtitle: 'Reinforced kraft paper carry totes with twisted paper handles and square flat block bottoms.',
    price: 0.35,
    moq: 500,
    unit: 'bag',
    featured: false,
    rating: 4.9,
    reviewCount: 310,
    badge: '12kg Load Rating',
    material: '110 - 140 GSM Heavy Virgin & Post-Consumer Recycled Kraft',
    boardWeight: '120 GSM High Tear-Resistance Kraft',
    coating: 'Zero plastic film laminates; soy ink printed',
    dimensionsPreset: '10" × 6" × 12" (260 × 160 × 310 mm)',
    dimensionsAvailable: ['Small Bakery (8"×5"×10")', 'Medium Restaurant (10"×6"×12")', 'Wide Base Takeaway (12"×10"×15")', 'Large Grocery (13"×7"×17")'],
    finishOptions: ['Natural Brown Kraft with Black Print', 'White Bleached Kraft', 'Full Color Edge-to-Edge Print'],
    ecoBadges: ['Supports Up to 12kg Load', '100% Paper Twisted Rope Handles', 'FSC® Recycled'],
    leadTime: '3-5 business days',
    history: 'In 1852, Francis Wolle invented the first automatic paper bag machine. Later in 1883, Charles Stilwell engineered the flat-bottom pleated bag (the SOS or Self-Opening Sack) that stands upright on counters unsupported.',
    environmentalImpact: 'Eliminates plastic supermarket carrier bags. The handles, base glue, and paper body are 100% repulpable together in the blue paper recycling bin.',
    ecosystemBenefits: 'Replaces single-use polyethylene carrier bags that choke ocean wildlife. Water-soluble soy inks and twisted paper handles biodegrade completely in home garden compost.',
    globalWarmingImpact: 'Each paper bag replaces 3-4 thin plastic bags, preventing 0.32 kg CO2e of crude oil extraction and refining emissions per bag.',
    co2SavedKg: 0.32,
    plasticAvoidedGrams: 35,
    decompositionDays: '30–60 days',
    features: ['Wide flat block bottom prevents soup containers and meal trays from tipping over', 'Tightly twisted 6-ply paper rope handles are glued with reinforced internal patches', 'High-tensile long-fiber kraft paper holds up to 12 kg of takeaway orders without tearing'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.42, total: 210 },
      { qty: 1000, pricePerUnit: 0.35, total: 350 },
      { qty: 2500, pricePerUnit: 0.28, total: 700 },
      { qty: 5000, pricePerUnit: 0.22, total: 1100 }
    ],
    specs: { 'Handle': 'Twisted paper cord with patch reinforcement', 'Load Capacity': '12 kg', 'Recycled Fiber': '80%' }
  },

  // =========================================================================
  // CATEGORY 4: PROTECTIVE PACKAGING & VOID FILL (8 Products)
  // =========================================================================
  {
    id: 'honeycomb-paper-wrap',
    name: 'Honeycomb Paper Wrap',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'honeycomb-paper-wrap',
    subtitle: 'Innovative die-cut expandable kraft paper that locks into a protective 3D hexagonal mesh.',
    price: 32.00,
    moq: 1,
    unit: 'roll (250m)',
    featured: true,
    rating: 5.0,
    reviewCount: 420,
    badge: 'Bubble Wrap Slayer',
    material: '80 GSM Precision Slitted Natural Kraft Paper',
    boardWeight: '80 GSM Kraft expanding to 3D hexagonal mesh',
    coating: 'Zero plastic; mechanical slit expander',
    dimensionsPreset: '15" width × 820 feet length (380mm × 250m roll)',
    dimensionsAvailable: ['Standard Roll (380mm × 250m)', 'Wide Roll (500mm × 250m)', 'Manual Countertop Dispenser Bundle'],
    finishOptions: ['Natural Brown Kraft', 'Pure Bleached White'],
    ecoBadges: ['Replaces Plastic Bubble Wrap', 'Interlocking (Zero Tape Needed)', '100% Curbside Recyclable'],
    leadTime: '1-2 business days',
    history: 'Inspired by the hexagonal architecture of natural bee honeycombs. When tensioned through a dispenser, precision-angled slashes expand into interlocking angled cells that provide 3D cushioning.',
    environmentalImpact: 'Replaces miles of non-biodegradable polyethylene bubble wrap. Uses 60% less storage space than pre-inflated bubble rolls and drops directly into curbside paper recycling.',
    ecosystemBenefits: 'Replaces plastic bubble wrap entirely. The precision-expanded kraft paper web absorbs transit shocks through geometry, leaving zero microplastics in water streams and composting in 45 days.',
    globalWarmingImpact: 'Unexpanded compact rolls reduce warehouse storage and delivery truck volume by 80% compared to pre-inflated plastic bubble rolls, cutting vehicle fuel and saving 1.45 kg CO2e per roll.',
    co2SavedKg: 1.45,
    plasticAvoidedGrams: 380,
    decompositionDays: '45–60 days',
    features: ['Expanding cells interlock with themselves, completely eliminating the need for plastic tape', 'Cushions glassware, ceramics, cosmetics, and fine wine bottles against drop shocks', 'One 250m roll expands to over 400m of packaging protection'],
    pricingTiers: [
      { qty: 1, pricePerUnit: 36.00, total: 36 },
      { qty: 4, pricePerUnit: 32.00, total: 128 },
      { qty: 10, pricePerUnit: 28.50, total: 285 },
      { qty: 25, pricePerUnit: 24.00, total: 600 }
    ],
    specs: { 'Expansion Ratio': '1:1.6 expansion', 'Paper Weight': '80 GSM', 'Tensile Strength': 'High longitudinal' }
  },
  {
    id: 'corrugated-paper-rolls',
    name: 'Corrugated Paper Rolls',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'corrugated-paper-rolls',
    subtitle: 'Flexible single-face fluted cardboard rolls for wrapping cylindrical goods and furniture.',
    price: 24.50,
    moq: 2,
    unit: 'roll (75m)',
    featured: false,
    rating: 4.8,
    reviewCount: 88,
    badge: 'Single-Face Flute',
    material: 'Single-Face Corrugated Cardboard (One flat liner + one exposed flute)',
    boardWeight: '140 GSM Fluting + 100 GSM Liner',
    coating: 'Natural kraft paper',
    dimensionsPreset: '24" width × 246 feet (600mm × 75m roll)',
    dimensionsAvailable: ['Narrow (300mm × 75m)', 'Standard (600mm × 75m)', 'Wide Furniture (900mm × 75m)', 'Master (1200mm × 75m)'],
    finishOptions: ['Natural Brown Kraft Single-Face'],
    ecoBadges: ['100% Recycled Post-Consumer Paper', 'Conforms to Irregular Shapes', 'Curbside Recyclable'],
    leadTime: '1-3 business days',
    history: 'Single-face corrugated was the first form of fluted packaging manufactured in the late 19th century before machines were invented to glue a second flat linerboard on top.',
    environmentalImpact: 'Constructed from 100% post-consumer cardboard waste. Avoids landfill disposal and provides a heavy shock-absorbent wrap for heavy industrial parts and mirrors.',
    ecosystemBenefits: 'Made from 100% post-consumer recycled paperboard. Replaces polyurethane foam rolls and PVC transit padding, returning effortlessly to clean paper mills without polluting aquatic biomes.',
    globalWarmingImpact: 'Saves 2.15 kg CO2e per roll compared to synthetic polyethylene foam wraps. Eliminates blowing agent greenhouse gas emissions released during plastic foam manufacture.',
    co2SavedKg: 2.15,
    plasticAvoidedGrams: 420,
    decompositionDays: '45–75 days',
    features: ['Exposed flute arches bend effortlessly around curves, table legs, and mirrors', 'Protects surfaces against transit friction, scuffing, and vibrations', 'Cuts easily with packing scissors or utility blades'],
    pricingTiers: [
      { qty: 2, pricePerUnit: 28.00, total: 56 },
      { qty: 6, pricePerUnit: 24.50, total: 147 },
      { qty: 15, pricePerUnit: 21.00, total: 315 },
      { qty: 30, pricePerUnit: 18.50, total: 555 }
    ],
    specs: { 'Flute Type': 'B-Flute (3.0mm thickness)', 'Length': '75 meters per roll', 'Recycled': '100%' }
  },
  {
    id: 'biodegradable-starch-peanuts',
    name: 'Biodegradable Starch Peanuts',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'starch-peanuts',
    subtitle: 'Water-soluble loose-fill packaging peanuts extruded from natural corn and potato starch.',
    price: 22.00,
    moq: 2,
    unit: 'bag (15 cu ft)',
    featured: true,
    rating: 4.9,
    reviewCount: 334,
    badge: 'Dissolves in Water',
    material: '100% Extruded Plant Starch (Corn and Potato Starch)',
    boardWeight: 'Ultra-lightweight closed-cell starch foam',
    coating: 'Zero static coating; non-toxic',
    dimensionsPreset: '15 Cubic Feet Bulk Sack (approx. 425 Liters)',
    dimensionsAvailable: ['Small Sack (5 cu ft)', 'Standard Sack (15 cu ft)', 'Wholesale Pallet (4 × 15 cu ft)'],
    finishOptions: ['Natural Off-White Ivory', 'Pastel Eco-Green (Colored with plant chlorophyll)'],
    ecoBadges: ['Dissolves in Water in 10 Seconds', 'Static-Free (Electronics Safe)', 'Compostable EN 13432'],
    leadTime: '1-2 business days',
    history: 'Invented in the early 1990s as a direct response to toxic expanded polystyrene (EPS/Styrofoam) peanuts, which persist in oceans for centuries and present choking hazards to wildlife.',
    environmentalImpact: 'Pour water over them in a sink and they melt away completely in seconds without toxic chemicals. Certified safe for municipal wastewater treatment systems and home compost.',
    ecosystemBenefits: 'Extruded from non-GMO maize and sorghum starch. Dissolves instantly in running tap water or rain within 60 seconds! Completely non-toxic to wildlife, pets, and children; washes safely down household sinks without clogging drains.',
    globalWarmingImpact: 'Replaces expanded polystyrene (EPS/Styrofoam) packing peanuts—a petroleum disaster that never degrades. Slashes carbon footprint by 75% and saves 2.80 kg CO2e per 15 cu. ft. sack.',
    co2SavedKg: 2.8,
    plasticAvoidedGrams: 620,
    decompositionDays: 'Dissolves instantly in water',
    features: ['Zero electrostatic charge—ideal for sensitive computer parts, GPUs, and circuitry', 'Flows seamlessly around complex, odd-shaped items for total 360-degree lock', 'Clean, odorless, and completely non-toxic to household pets or curious toddlers'],
    pricingTiers: [
      { qty: 2, pricePerUnit: 25.50, total: 51 },
      { qty: 5, pricePerUnit: 22.00, total: 110 },
      { qty: 12, pricePerUnit: 18.50, total: 222 },
      { qty: 24, pricePerUnit: 15.50, total: 372 }
    ],
    specs: { 'Volume': '15 cubic feet / 425L', 'Solubility': '100% in warm water', 'Anti-Static': 'Naturally static-dissipative' }
  },
  {
    id: 'embossed-paper-rolls',
    name: 'Embossed Paper Rolls',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'embossed-paper-rolls',
    subtitle: 'Multi-layer textured dimple-embossed kraft paper providing high surface friction damping.',
    price: 18.50,
    moq: 2,
    unit: 'roll (100m)',
    featured: false,
    rating: 4.7,
    reviewCount: 72,
    badge: 'Dimple Cushioned',
    material: '100% Recycled High-Strength Kraft Paper (120 GSM)',
    boardWeight: '120 GSM Heavy Embossed Paper',
    coating: 'Porous unbleached kraft',
    dimensionsPreset: '19.5" width × 328 feet (500mm × 100m roll)',
    dimensionsAvailable: ['Narrow (350mm × 100m)', 'Standard (500mm × 100m)', 'Wide (750mm × 100m)'],
    finishOptions: ['Natural Brown Dimple Embossed', 'Bleached White Dimple Embossed'],
    ecoBadges: ['100% Recycled Post-Consumer Paper', 'Zero Plastic Bubble Alternative', 'Curbside Recyclable'],
    leadTime: '2-3 business days',
    history: 'Developed by papermakers who ran moist kraft paper through patterned engraved embossing cylinders to create permanent raised hemispherical bumps that trap air pockets.',
    environmentalImpact: 'Uses pure mechanical paper deformation rather than petroleum plastic polymers to create protective cushioning. 100% curbside recyclable.',
    ecosystemBenefits: 'Features dimpled paper indentation that provides elastic spring-back cushioning without synthetic polymers. Recycled paper fibers are 100% bio-degradable in forest soil within 6 weeks.',
    globalWarmingImpact: 'Replaces synthetic bubble cushioning, eliminating petroleum extraction and refining emissions and saving 1.20 kg CO2e per roll.',
    co2SavedKg: 1.2,
    plasticAvoidedGrams: 260,
    decompositionDays: '30–60 days',
    features: ['Raised dimples prevent wrapped bottles and ceramics from sliding against each other', 'Highly flexible and wraps tightly around odd shapes without spring-back', 'Provides clean, dust-free warehouse packing stations'],
    pricingTiers: [
      { qty: 2, pricePerUnit: 21.00, total: 42 },
      { qty: 6, pricePerUnit: 18.50, total: 111 },
      { qty: 15, pricePerUnit: 15.80, total: 237 },
      { qty: 30, pricePerUnit: 13.50, total: 405 }
    ],
    specs: { 'GSM': '120 GSM', 'Roll Length': '100 meters', 'Pattern': 'Offset hemispherical dimples' }
  },
  {
    id: 'paper-void-fill-crumpled',
    name: 'Paper Void Fill (Crumpled)',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'paper-void-fill',
    subtitle: 'High-yield fan-folded paper packs engineered for manual and automated box void-fill dispensing.',
    price: 26.00,
    moq: 2,
    unit: 'box (500m)',
    featured: false,
    rating: 4.8,
    reviewCount: 154,
    badge: 'High Yield Fill',
    material: 'Fan-Folded 70 GSM Recycled Kraft Paper',
    boardWeight: '70 GSM Long-Fiber Kraft',
    coating: 'Zero coating',
    dimensionsPreset: '15" width × 1640 feet (380mm × 500m pack)',
    dimensionsAvailable: ['Standard 70 GSM (500m)', 'Heavy Duty 90 GSM (350m)'],
    finishOptions: ['Natural Brown Kraft', 'Clean White'],
    ecoBadges: ['100% Recycled Paper', 'Takes Up 90% Less Storage than Peanuts', 'Curbside Recyclable'],
    leadTime: '1-3 business days',
    history: 'Dispenser-crimped void paper was invented in the 1970s to eliminate massive warehouse silos required to store voluminous plastic foam peanuts. One compact box of paper expands to 1.5 cubic meters of void fill.',
    environmentalImpact: 'Dramatically reduces transport emissions: 1 pallet of fan-folded paper replaces 24 truckloads of plastic air pillows or foam peanuts. 100% recyclable.',
    ecosystemBenefits: 'Fan-folded unbleached kraft paper engineered for on-demand volumetric void filling. Replaces plastic air pillows that burst in transit and enter landfills as thin polyethylene trash.',
    globalWarmingImpact: 'Air pillow machines consume electricity and require thick plastic films. Using fan-folded paper eliminates plastic film waste, saving 1.10 kg CO2e per box filled.',
    co2SavedKg: 1.1,
    plasticAvoidedGrams: 210,
    decompositionDays: '30–60 days',
    features: ['Crimps into structural spring-like accordions that lock items in box centers', 'Dust-free and lint-free formulation protects optical lenses and apparel', 'Dispenses rapidly from tabletop cartons or automated overhead hoppers'],
    pricingTiers: [
      { qty: 2, pricePerUnit: 29.50, total: 59 },
      { qty: 5, pricePerUnit: 26.00, total: 130 },
      { qty: 15, pricePerUnit: 22.50, total: 337.5 },
      { qty: 30, pricePerUnit: 19.50, total: 585 }
    ],
    specs: { 'Length': '500 meters per pack', 'GSM': '70 GSM', 'Yield': 'Approx. 1.5 m³ expanded volume' }
  },
  {
    id: 'cardboard-edge-corner-protectors',
    name: 'Cardboard Edge & Corner Protectors',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'edge-corner-protectors',
    subtitle: 'Extremely rigid right-angled laminated cardboard edge-boards for pallet stabilization and strap reinforcement.',
    price: 0.65,
    moq: 100,
    unit: 'piece',
    featured: false,
    rating: 4.9,
    reviewCount: 118,
    badge: 'Pallet Armor',
    material: 'Multi-Ply Laminated Recycled Kraftboard Bonded with Starch Glue',
    boardWeight: '3.0mm - 4.0mm Solid Cardboard Caliper',
    coating: 'Water-resistant outer kraft liner',
    dimensionsPreset: '2" × 2" × 39" (50 × 50 × 1000 mm × 3mm thick)',
    dimensionsAvailable: ['Short Corner Protectors (50×50×100mm)', 'Medium Edge Guard (50×50×500mm)', 'Pallet Height (50×50×1000mm)', 'Tall Freight (60×60×1800mm)'],
    finishOptions: ['Standard Raw Brown Kraft', 'White Coated Exterior'],
    ecoBadges: ['Enables 2x Pallet Stacking', '100% Repulpable Solid Board', 'Eliminates Strap Cut Damage'],
    leadTime: '2-4 business days',
    history: 'Invented to prevent high-tension plastic or steel strapping bands from cutting into cardboard shipping cartons during sea container rocking.',
    environmentalImpact: 'Allows double-stacking of freight pallets in shipping trucks without crushing, improving fleet fuel efficiency. Completely repulpable in standard paper mills.',
    ecosystemBenefits: 'Formed by laminating compressed recycled paper layers with water-based PVA adhesive. Replaces extruded plastic corner pieces that break into fragments and poison urban river ecosystems.',
    globalWarmingImpact: 'Protects palletized cargo during transit, preventing product damage and the immense carbon cost of manufacturing, shipping, and disposing of destroyed replacement goods.',
    co2SavedKg: 1.35,
    plasticAvoidedGrams: 310,
    decompositionDays: '60–90 days',
    features: ['90-degree angle distributes tension evenly along entire pallet corner edges', 'Provides extraordinary column compression strength for vertical pallet stacking', 'Also available in pre-cut 3-way corner blocks for fine art and picture frames'],
    pricingTiers: [
      { qty: 100, pricePerUnit: 0.78, total: 78 },
      { qty: 250, pricePerUnit: 0.65, total: 162.5 },
      { qty: 500, pricePerUnit: 0.54, total: 270 },
      { qty: 1000, pricePerUnit: 0.44, total: 440 }
    ],
    specs: { 'Leg Dimensions': '50mm × 50mm', 'Thickness': '3.0 mm', 'Material': 'Multi-ply laminated board' }
  },
  {
    id: 'acid-free-tissue-paper',
    name: 'Acid-Free Tissue Paper',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'tissue-paper',
    subtitle: 'Silky 18 GSM translucent archival wrapping tissue that protects delicates without tarnishing.',
    price: 0.12,
    moq: 1000,
    unit: 'sheet',
    featured: false,
    rating: 4.9,
    reviewCount: 280,
    badge: 'Museum Grade',
    material: '100% Pure Virgin Acid-Free Sulfite Pulp',
    boardWeight: '18 GSM Calendered Tissue',
    coating: 'Zero coating; neutral pH 7.5',
    dimensionsPreset: '20" × 30" (500 × 750 mm) Large Sheet',
    dimensionsAvailable: ['Small Jewelry (15"×20")', 'Standard Apparel (20"×30")', 'Continuous Roll (500m)'],
    finishOptions: ['Crisp Pure White', 'Warm Kraft Tan', 'Custom Repeating Botanical Soy Ink Print'],
    ecoBadges: ['Acid-Free & Lignin-Free', 'Zero VOC Vegetable Inks', 'Biodegrades in 21 Days in Soil'],
    leadTime: '2-4 business days',
    history: 'Standard wood-pulp papers contain natural lignin, which produces acid as it oxidizes, causing yellowing and brittleness. Acid-free tissue removes lignin and adds a calcium carbonate buffer to guarantee archival permanence.',
    environmentalImpact: 'Non-toxic, chlorine-free bleached, and printed using plant-derived soy and algae inks. Degrades naturally in backyard compost piles within 3 weeks.',
    ecosystemBenefits: 'Bleed-resistant, chlorine-free bleached paper that contains zero sulfurous chemicals or heavy metal mordants, protecting river ecosystems from toxic paper bleaching runoff.',
    globalWarmingImpact: 'Powered by closed-loop hydro-electric and biomass energy during milling, sequestering more carbon in paper fiber than emitted during manufacturing.',
    co2SavedKg: 0.45,
    plasticAvoidedGrams: 65,
    decompositionDays: '20–30 days',
    features: ['Guaranteed safe for heirloom textiles, silks, silver jewelry, and ceramics', 'Distinctive crisp sensory crinkle enhances luxury retail unboxing experiences', 'Prevents garment scuffing, static attraction, and atmospheric moisture tarnishing'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.15, total: 150 },
      { qty: 2500, pricePerUnit: 0.12, total: 300 },
      { qty: 5000, pricePerUnit: 0.09, total: 450 },
      { qty: 10000, pricePerUnit: 0.065, total: 650 }
    ],
    specs: { 'GSM': '18 GSM', 'pH Level': 'Neutral pH 7.5', 'Buffer': 'Calcium carbonate archival buffer' }
  },
  {
    id: 'wood-wool',
    name: 'Wood Wool',
    category: 'protective',
    filterKey: 'protective',
    categoryName: 'Protective Packaging & Void Fill',
    svgType: 'wood-wool',
    subtitle: 'Fine curly kiln-dried ribbons of sustainably harvested spruce and pine timber.',
    price: 28.00,
    moq: 1,
    unit: 'bale (10 kg)',
    featured: false,
    rating: 4.8,
    reviewCount: 92,
    badge: 'Kiln-Dried Timber',
    material: '100% Natural Plantation Spruce and Pine Shavings',
    boardWeight: 'Airy, resilient wood excelsior fibers',
    coating: 'Pure untreated timber',
    dimensionsPreset: '10 kg Compressed Bale (Yields approx. 400L unpacked volume)',
    dimensionsAvailable: ['5 kg Craft Bale', '10 kg Hamper Bale', '20 kg Bulk Commercial Bale'],
    finishOptions: ['Natural Pale Spruce Ribbon'],
    ecoBadges: ['100% Natural Raw Forest Timber', 'Zero Chemical Additives', 'Backyard Compostable & Mulch Safe'],
    leadTime: '1-3 business days',
    history: 'Also known as *excelsior*, wood wool was patented in the USA in the mid-19th century as a natural cushion for fragile chinaware and wine bottles before plastic foam existed.',
    environmentalImpact: 'Manufactured from forestry thinning residues that support healthy timberland management. Untreated with chemicals, it doubles as garden mulch or compost carbon.',
    ecosystemBenefits: 'Curly ribbons of kiln-dried spruce and pine wood shaved directly from certified sustainable forest thinning. Zero chemical additives; biodegrades into rich forest humus, creating fertile habitats for beneficial mycorrhizal fungi.',
    globalWarmingImpact: 'Captures and locks atmospheric carbon inside solid wood fibers for decades. Requires minimal mechanical cutting energy, saving 1.85 kg CO2e compared to plastic shreds or polystyrene.',
    co2SavedKg: 1.85,
    plasticAvoidedGrams: 450,
    decompositionDays: '60–90 days',
    features: ['Intertwined curled timber strands cradle heavy luxury wine bottles and gift hampers', 'Kiln-dried to under 12% moisture to eliminate mold, fungi, and natural pests', 'Emits a fresh, natural pine forest scent that communicates authentic organic origin'],
    pricingTiers: [
      { qty: 1, pricePerUnit: 32.00, total: 32 },
      { qty: 3, pricePerUnit: 28.00, total: 84 },
      { qty: 8, pricePerUnit: 24.50, total: 196 },
      { qty: 20, pricePerUnit: 21.00, total: 420 }
    ],
    specs: { 'Moisture Content': '< 12% kiln dried', 'Strand Width': 'Approx. 2mm', 'Yield': '40 liters per kg' }
  },

  // =========================================================================
  // CATEGORY 5: TAPE, LABELS, BAGS & STRAPPING (12 Products)
  // =========================================================================
  {
    id: 'water-activated-gummed-paper-tape',
    name: 'Water-Activated Gummed Paper Tape',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'water-activated-tape',
    subtitle: 'Tamper-evident reinforced kraft tape that fuses molecularly with cardboard carton fibers.',
    price: 12.50,
    moq: 10,
    unit: 'roll (450 ft)',
    featured: true,
    rating: 5.0,
    reviewCount: 290,
    badge: 'Pilfer Proof',
    material: '70 GSM Natural Kraft Paper Reinforced with Fiberglass / Natural Fibers',
    boardWeight: '70 GSM Kraft Carrier + Starch Adhesive',
    coating: 'Dried potato & corn starch adhesive (activates with water)',
    dimensionsPreset: '2.75" width × 450 feet (70mm × 137m roll)',
    dimensionsAvailable: ['2.75" (70mm) Standard', '3.0" (76mm) Heavy Duty', 'Custom Printed Branded Tape'],
    finishOptions: ['Natural Brown Kraft with 1-Color Print', 'White Reinforced Tape', 'Plain Unprinted Kraft'],
    ecoBadges: ['100% Recyclable with the Box', 'Forms Fiber-Tear Permanent Bond', 'Uses 60% Less Tape Than Plastic'],
    leadTime: '1-3 business days',
    history: 'Invented in the early 20th century, water-activated tape became the industrial standard for transit packaging because potato starch penetrates deep into cardboard pores when wetted.',
    environmentalImpact: 'Unlike plastic packing tape that contaminates cardboard recycling streams, gummed paper tape enters the hydropulper alongside the box without needing removal.',
    ecosystemBenefits: 'Natural vegetable starch adhesive fuses directly into the corrugated box fibers at a molecular level. Unlike plastic tape, the entire carton can be recycled intact without peeling tape off, preventing millions of meters of plastic tape from clogging paper mill pulping screens.',
    globalWarmingImpact: 'Displaces petroleum polypropylene and PVC pressure-sensitive packaging tape, eliminating 0.88 kg CO2e per 100 meters of sealed boxes.',
    co2SavedKg: 0.88,
    plasticAvoidedGrams: 95,
    decompositionDays: '30–60 days',
    features: ['Cannot be peeled off without tearing the box flap, offering 100% pilfer evidence', 'A single strip across carton seams seals boxes that previously required multiple plastic tape layers', 'Performs reliably in dusty, extreme sub-zero, and tropical humid transit conditions'],
    pricingTiers: [
      { qty: 10, pricePerUnit: 14.50, total: 145 },
      { qty: 25, pricePerUnit: 12.50, total: 312.5 },
      { qty: 50, pricePerUnit: 10.80, total: 540 },
      { qty: 100, pricePerUnit: 9.20, total: 920 }
    ],
    specs: { 'Length': '450 ft / 137 m', 'Width': '70 mm', 'Adhesive': 'Corn & potato starch' }
  },
  {
    id: 'self-adhesive-kraft-paper-tape',
    name: 'Self-Adhesive Kraft Paper Tape',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'self-adhesive-kraft-tape',
    subtitle: 'Pressure-sensitive kraft paper tape that sticks instantly without requiring water dispensers.',
    price: 7.20,
    moq: 12,
    unit: 'roll (50m)',
    featured: false,
    rating: 4.8,
    reviewCount: 178,
    badge: 'Quick Seal',
    material: 'Natural Flatback Kraft Paper with Natural Rubber Adhesive',
    boardWeight: '90 GSM Flatback Paper',
    coating: 'Solvent-free natural rubber adhesive',
    dimensionsPreset: '2" width × 164 feet (50mm × 50m roll)',
    dimensionsAvailable: ['1" (25mm)', '2" (50mm)', '3" (75mm)'],
    finishOptions: ['Natural Brown Kraft', 'Custom 1-Color Printed Logo'],
    ecoBadges: ['Tearable by Hand', 'Natural Rubber Adhesive', 'Recyclable with Box'],
    leadTime: '1-2 business days',
    history: 'Engineered as a convenient alternative for packing stations that do not have dedicated electronic water dispensers. Uses natural rubber sap harvested from rubber trees.',
    environmentalImpact: 'Replaces PVC and polypropylene pressure-sensitive plastic tapes with natural paper and tree-rubber adhesive that pulps down cleanly in recycling mills.',
    ecosystemBenefits: 'Natural unbleached kraft paper backing coated with a solvent-free natural rubber adhesive. Biodegrades safely in soil and does not release microplastic fibers into municipal compost.',
    globalWarmingImpact: 'Replaces acrylic-coated plastic packaging tapes, cutting petroleum refining emissions and saving 0.75 kg CO2e per roll.',
    co2SavedKg: 0.75,
    plasticAvoidedGrams: 85,
    decompositionDays: '45–75 days',
    features: ['Tears cleanly by hand—no metal tape gun or scissors required at the packaging desk', 'Sticks instantly with firm finger pressure on cardboard, paper envelopes, and tissue wraps', 'Silently unwinds from the roll without the high-pitched screech of plastic tape'],
    pricingTiers: [
      { qty: 12, pricePerUnit: 8.50, total: 102 },
      { qty: 36, pricePerUnit: 7.20, total: 259.2 },
      { qty: 72, pricePerUnit: 6.10, total: 439.2 },
      { qty: 144, pricePerUnit: 5.20, total: 748.8 }
    ],
    specs: { 'Core': 'Standard 3" (76mm) core', 'Adhesive': 'Natural rubber', 'Hand Tearable': 'Yes' }
  },
  {
    id: 'glassine-document-wallets',
    name: 'Glassine Document Wallets',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'glassine-document-wallets',
    subtitle: 'Translucent paper "Documents Enclosed" packing slip pouches that replace plastic stick-on envelopes.',
    price: 0.14,
    moq: 500,
    unit: 'wallet',
    featured: true,
    rating: 4.9,
    reviewCount: 165,
    badge: 'Zero Plastic Enclosed',
    material: '100% Calendered Glassine Paper + Paper Backing Release Liner',
    boardWeight: '45 GSM Translucent Paper',
    coating: 'Plant-based adhesive backing',
    dimensionsPreset: '6.5" × 5" (165 × 125 mm) A6 Size',
    dimensionsAvailable: ['A7 Mini (120×90mm)', 'A6 Standard (165×125mm)', 'A5 Half Sheet (225×165mm)', 'A4 Full Invoice (315×225mm)'],
    finishOptions: ['Printed "DOCUMENTS ENCLOSED"', 'Plain Translucent Window'],
    ecoBadges: ['Replaces Plastic Slip Pouches', '100% Curbside Recyclable with Box', 'Biodegradable'],
    leadTime: '2-3 business days',
    history: 'Standard "Documents Enclosed" wallets are made of thick polyethylene plastic with synthetic sticky glue. Because they are plastered on the outside of boxes, they are one of the primary contaminants in paper recycling.',
    environmentalImpact: 'PackNStir glassine wallets are 100% paper and water-soluble glue. Couriers scan barcodes through the translucent paper, and paper recycling mills repulp them effortlessly.',
    ecosystemBenefits: 'Replaces polyethylene plastic "Documents Enclosed" shipping envelopes. Made from smooth, translucent supercalendered glassine paper that is 100% repulpable and biodegradable in natural soil.',
    globalWarmingImpact: 'Avoids petroleum extrusion of clear polyethylene pouches, saving 0.35 kg CO2e per 100 shipping wallets.',
    co2SavedKg: 0.35,
    plasticAvoidedGrams: 40,
    decompositionDays: '30–45 days',
    features: ['High transparency allows shipping carrier barcodes and addresses to scan cleanly', 'Strong self-adhesive peel-back sticks permanently to corrugated boxes and paper mailers', 'Weather-resistant calendered paper shields invoices from light rain during transit'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.18, total: 90 },
      { qty: 1000, pricePerUnit: 0.14, total: 140 },
      { qty: 2500, pricePerUnit: 0.11, total: 275 },
      { qty: 5000, pricePerUnit: 0.085, total: 425 }
    ],
    specs: { 'Material': 'Calendered glassine paper', 'Barcode Scannable': 'Yes', 'Recycle': '100% with box' }
  },
  {
    id: 'eco-friendly-labels-stickers',
    name: 'Eco-Friendly Labels & Stickers',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'eco-labels-stickers',
    subtitle: 'Roll-fed compostable paper sealing stickers with plant-based emulsion adhesive.',
    price: 0.06,
    moq: 1000,
    unit: 'sticker',
    featured: false,
    rating: 4.8,
    reviewCount: 210,
    badge: 'Zero Vinyl',
    material: 'Unbleached Kraft Paper or FSC® White Woodfree Paper',
    boardWeight: '80 GSM Face Stock + Recyclable Glassine Liner',
    coating: 'Water-dispersed compostable acrylic emulsion',
    dimensionsPreset: '2.0" Round Diameter (50 mm)',
    dimensionsAvailable: ['1.5" Round (38mm)', '2.0" Round (50mm)', '2" × 3" Rectangle (50×76mm)', 'Direct Thermal 4"×6" Shipping Label'],
    finishOptions: ['Natural Brown Kraft', 'Matte Chalk White', 'Metallic Eco-Foil Edge'],
    ecoBadges: ['DIN CERTCO Compostable Certified', 'Zero Polypropylene Vinyl', 'Repulpable in Mills'],
    leadTime: '2-4 business days',
    history: 'Traditional vinyl and glossy synthetic labels shed microplastics when shredded at paper recycling plants. PackNStir uses pure woodfree paper stock and plant-derived water-soluble adhesive.',
    environmentalImpact: 'Certified OK Compost Home and Industrial. Does not impede paper pulp recycling or leave sticky residue on paper mill screens.',
    ecosystemBenefits: 'FSC-certified paper labels made completely free of toxic BPA (Bisphenol A) and BPS coatings. Protects wildlife, soil biomes, and human postal handlers from hormone-disrupting endocrine chemicals.',
    globalWarmingImpact: 'Water-based emulsion adhesive allows standard paper recycling, cutting carbon footprint by 42% and saving 0.48 kg CO2e per roll of 500 labels.',
    co2SavedKg: 0.48,
    plasticAvoidedGrams: 50,
    decompositionDays: '45–60 days',
    features: ['Supplied on continuous rolls for rapid manual application or automatic label dispensers', 'Prints sharp, high-resolution branding, barcodes, and sustainability messages', 'Adheres firmly to kraft paper boxes, glass bottles, and tin containers'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.08, total: 80 },
      { qty: 2500, pricePerUnit: 0.06, total: 150 },
      { qty: 5000, pricePerUnit: 0.045, total: 225 },
      { qty: 10000, pricePerUnit: 0.032, total: 320 }
    ],
    specs: { 'Core': '76mm / 3 inch roll core', 'Adhesive': 'Compostable acrylic emulsion', 'Face': '80 GSM paper' }
  },
  {
    id: 'compostable-zip-lock-bags',
    name: 'Compostable Zip-Lock Bags',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'compostable-zip-lock',
    subtitle: 'Resealable plant-based storage bags with compostable zipper closures for apparel and accessories.',
    price: 0.26,
    moq: 500,
    unit: 'bag',
    featured: false,
    rating: 4.9,
    reviewCount: 145,
    badge: 'Resealable Eco',
    material: 'Plant-Based PLA & PBAT Biopolymer',
    boardWeight: '50 Micron Translucent Bio-Film',
    coating: 'Silky tactile finish; breathable',
    dimensionsPreset: '10" × 14" (254 × 355 mm) Apparel Size',
    dimensionsAvailable: ['Mini (4"×6")', 'Medium Apparel (10"×14")', 'Large Knitwear (14"×18")'],
    finishOptions: ['Translucent Matte with Green Leaf Print', 'Unprinted Clear'],
    ecoBadges: ['TÜV OK Compost Home', 'Zipper Track 100% Compostable', 'Replaces Polybags'],
    leadTime: '2-4 business days',
    history: 'Designed specifically to eliminate the billions of clear polyethylene "polybags" used by global apparel brands to protect garments during container shipping from overseas factories.',
    environmentalImpact: 'Breaks down into water, CO2, and fertile compost in home compost bins in 90 to 180 days. Eliminates non-recyclable plastic zipper sliders.',
    ecosystemBenefits: 'Certified EN 13432 & ASTM D6400 home compostable bags made from cornstarch and PBAT. Replaces non-biodegradable polyethylene ziplock bags that contaminate ocean wildlife.',
    globalWarmingImpact: 'Sourced from renewable annual plant crops that capture carbon dioxide as they grow, cutting net cradle-to-gate greenhouse gas emissions by 62%.',
    co2SavedKg: 0.54,
    plasticAvoidedGrams: 45,
    decompositionDays: '60–90 days',
    features: ['Durable integrated zip track opens and reseals dozens of times', 'Micro-perforated air hole allows trapped air to escape for flat garment palletizing', 'Silky, dust-free surface protects luxury silks, wools, and organic cotton from moisture'],
    pricingTiers: [
      { qty: 500, pricePerUnit: 0.32, total: 160 },
      { qty: 1000, pricePerUnit: 0.26, total: 260 },
      { qty: 2500, pricePerUnit: 0.21, total: 525 },
      { qty: 5000, pricePerUnit: 0.17, total: 850 }
    ],
    specs: { 'Thickness': '50 microns', 'Zipper': 'Compostable bio-resin track', 'Certification': 'AS 5810' }
  },
  {
    id: 'glassine-bags',
    name: 'Glassine Bags',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'glassine-document-wallets',
    subtitle: 'Crisp semi-translucent paper envelopes with delicate glassine sheen for stationery and pastries.',
    price: 0.11,
    moq: 1000,
    unit: 'bag',
    featured: false,
    rating: 4.8,
    reviewCount: 119,
    badge: '100% Wood Pulp',
    material: 'Pure Bleached Chemical Wood Pulp (Acid-Free)',
    boardWeight: '40 GSM High-Density Glassine',
    coating: 'Zero coating; super-calendered mechanical finish',
    dimensionsPreset: '5" × 7" (127 × 178 mm) Flat Bag',
    dimensionsAvailable: ['Small Stamp (3"×4")', 'Card & Photo (5"×7")', 'Large Apparel (9"×12")'],
    finishOptions: ['Translucent White Glassine', 'Custom Brand Hot Foil / Soy Stamp'],
    ecoBadges: ['100% Biodegradable & Recyclable', 'Grease Resistant', 'Acid-Free Archival'],
    leadTime: '2-3 business days',
    history: 'Glassine is created through an intensive paper-making process called super-calendering: after the pulp is pressed, paper sheets are passed through alternating steel and fiber rolls under extreme heat and pressure until the fibers collapse into a smooth, glass-like sheet.',
    environmentalImpact: 'Zero plastic content. Completely biodegradable, backyard compostable, and recyclable in standard paper streams. Sourced from FSC-certified wood pulp.',
    ecosystemBenefits: 'Smooth, dense wood pulp paper that provides air, grease, and moisture resistance without plastic coatings. 100% backyard compostable and recyclable in curbside blue bins.',
    globalWarmingImpact: 'Eliminates petrochemical film blowing, saving 0.40 kg CO2e per 100 boutique bags.',
    co2SavedKg: 0.4,
    plasticAvoidedGrams: 35,
    decompositionDays: '30–45 days',
    features: ['Semi-transparent sheen allows contents to be viewed without opening', 'Naturally air, water, and grease resistant without synthetic fluorochemical coatings', 'Classic vintage aesthetic loved by artisan bakeries, florists, and jewelers'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.14, total: 140 },
      { qty: 2500, pricePerUnit: 0.11, total: 275 },
      { qty: 5000, pricePerUnit: 0.085, total: 425 },
      { qty: 10000, pricePerUnit: 0.065, total: 650 }
    ],
    specs: { 'GSM': '40 GSM', 'Transparency': 'High semi-translucent', 'Acid-Free': 'Yes' }
  },
  {
    id: 'pla-cornstarch-clear-bags',
    name: 'PLA (Cornstarch) Clear Bags',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'pla-cold-cups',
    subtitle: 'High-clarity display bags made from fermented cornstarch resin that mimics cellophane.',
    price: 0.13,
    moq: 1000,
    unit: 'bag',
    featured: false,
    rating: 4.7,
    reviewCount: 93,
    badge: 'Cornstarch Clear',
    material: '100% Polylactic Acid (PLA) Biopolymer',
    boardWeight: '30 Micron High-Clarity Film',
    coating: 'Zero petroleum plastic',
    dimensionsPreset: '6" × 9" (152 × 229 mm) Peel & Seal',
    dimensionsAvailable: ['Cards / Postcards (5"×7")', 'Prints / Confectionery (6"×9")', 'Art Prints (9"×12")', 'A4 Display (8.5"×11")'],
    finishOptions: ['High-Gloss Crystal Clear'],
    ecoBadges: ['Commercially Compostable', 'Zero Petroleum Carbon', 'Food Contact Safe'],
    leadTime: '2-4 business days',
    history: 'Cornstarch PLA was commercialized to give artisan chocolatiers, greeting card publishers, and dry food makers the crystal-clear display window of polypropylene without petroleum plastic.',
    environmentalImpact: 'Manufactured from annual renewable corn starch harvests rather than crude oil. Diverts fossil fuel extraction and reduces manufacturing energy by 65%.',
    ecosystemBenefits: 'Crystal-clear retail display bags made from fermented plant starch (polylactic acid). 100% free of petroleum, phthalates, and plasticizers; biodegrades into harmless lactic acid derivatives.',
    globalWarmingImpact: 'Emits 65% fewer greenhouse gases during manufacturing than fossil-fuel polypropylene (BOPP) display bags, saving 0.60 kg CO2e per 100 bags.',
    co2SavedKg: 0.6,
    plasticAvoidedGrams: 55,
    decompositionDays: '60–90 days',
    features: ['Crystal-clear optical clarity displays greeting cards and confectionery brilliantly', 'Peel-and-seal adhesive lip allows rapid packing and resealing', 'High barrier against food odors, dust, and handling smudges'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.16, total: 160 },
      { qty: 2500, pricePerUnit: 0.13, total: 325 },
      { qty: 5000, pricePerUnit: 0.10, total: 500 },
      { qty: 10000, pricePerUnit: 0.08, total: 800 }
    ],
    specs: { 'Thickness': '30 microns', 'Material': '100% cornstarch PLA', 'Closure': 'Self-seal lip' }
  },
  {
    id: 'natureflex-wood-pulp-bags',
    name: 'NatureFlex (Wood Pulp) Bags',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'bio-mailer',
    subtitle: 'High-barrier transparent bio-film bags derived from FSC certified renewable wood pulp.',
    price: 0.19,
    moq: 1000,
    unit: 'bag',
    featured: true,
    rating: 5.0,
    reviewCount: 172,
    badge: 'Home Compostable Film',
    material: 'NatureFlex™ Regenerated Cellulose (Wood Pulp Derived)',
    boardWeight: '30 Micron High-Barrier Film',
    coating: 'Natural bio-coating for moisture & aroma barrier',
    dimensionsPreset: '4" × 6" (100 × 150 mm) Heat Sealable Pouch',
    dimensionsAvailable: ['Small Pouch (4"×6")', 'Medium Pouch (6"×9")', 'Coffee & Tea Bag (8"×12")'],
    finishOptions: ['Ultra Clear High Gloss with Home Compost Logo'],
    ecoBadges: ['TÜV OK Compost Home Certified', 'Derived from Managed Wood Pulp', 'Exceptional Aroma Barrier'],
    leadTime: '3-5 business days',
    history: 'Invented by Futamura, NatureFlex is the modern evolution of traditional cellophane. Engineered from renewable wood pulp sourced from certified plantations, it is one of the only transparent films in the world certified for home garden compost.',
    environmentalImpact: 'Breaks down in domestic garden compost bins within 42 days, leaving zero toxic residues. Exceptional oxygen and moisture barrier prevents food waste.',
    ecosystemBenefits: 'Made from renewable, sustainably sourced FSC wood pulp. Certified home compostable (OK Compost Home), it breaks down in garden compost in under 8 weeks without producing any toxic residues.',
    globalWarmingImpact: 'Provides gas and moisture barrier properties comparable to metallized plastic films while being completely renewable and plant-derived, cutting 0.72 kg CO2e per 100 bags.',
    co2SavedKg: 0.72,
    plasticAvoidedGrams: 65,
    decompositionDays: '45–60 days',
    features: ['High aroma barrier keeps specialty loose-leaf teas and coffee beans fresh', 'Heat-sealable on standard commercial pouch sealing machinery', 'Certified home compostable under both European and American standards'],
    pricingTiers: [
      { qty: 1000, pricePerUnit: 0.24, total: 240 },
      { qty: 2500, pricePerUnit: 0.19, total: 475 },
      { qty: 5000, pricePerUnit: 0.155, total: 775 },
      { qty: 10000, pricePerUnit: 0.125, total: 1250 }
    ],
    specs: { 'Material': 'NatureFlex™ cellulose', 'Compost Time': '42 days (Home compost)', 'Barrier': 'High gas & aroma' }
  },
  {
    id: 'biodegradable-bin-liners-sacks',
    name: 'Biodegradable Bin Liners & Sacks',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'bio-mailer',
    subtitle: 'Heavy-gauge plant-based compost caddy liners and commercial waste sacks.',
    price: 0.22,
    moq: 250,
    unit: 'roll (25 liners)',
    featured: false,
    rating: 4.8,
    reviewCount: 135,
    badge: 'Zero Tear',
    material: 'Plant Starch PLA, PBAT & Plant Extracts',
    boardWeight: '20 Micron (Home Caddy) to 40 Micron (Heavy Sack)',
    coating: 'Moisture and grease resistant',
    dimensionsPreset: '10 Litre Countertop Caddy (Roll of 25 bags)',
    dimensionsAvailable: ['7L Kitchen Caddy', '10L Standard (Roll of 25)', '30L Pedal Bin', '140L Wheelie Bin Sack'],
    finishOptions: ['Translucent Earth Green with OK Compost Printing'],
    ecoBadges: ['Composts with Food Waste', 'Certified EN 13432', 'Leak-Proof Star Seal Base'],
    leadTime: '1-3 business days',
    history: 'Created to solve municipal organic waste collection challenges. When organic food waste is bagged in plastic, councils must either reject the load or install expensive debagging shredders.',
    environmentalImpact: 'Allows restaurants, offices, and homeowners to bag food scraps and coffee grounds together. The bag breaks down completely in industrial composting facilities alongside the food waste.',
    ecosystemBenefits: 'Plant-starch compostable bin liners that allow organic food waste to be composted directly without removing the bag. Prevents millions of plastic garbage bags from entering municipal landfills.',
    globalWarmingImpact: 'Diverts organic food waste from anaerobic landfills (where food produces deadly methane gas) to aerobic composting facilities, directly curbing atmospheric methane emissions.',
    co2SavedKg: 1.6,
    plasticAvoidedGrams: 180,
    decompositionDays: '60–90 days',
    features: ['Reinforced star-seal base distributes heavy, wet vegetable peels without leaking', 'Breathable film reduces moisture buildup and foul food odor emissions', 'Approved by local councils and municipal green-waste composting programs worldwide'],
    pricingTiers: [
      { qty: 10, pricePerUnit: 4.50, total: 45 },
      { qty: 25, pricePerUnit: 3.80, total: 95 },
      { qty: 50, pricePerUnit: 3.10, total: 155 },
      { qty: 100, pricePerUnit: 2.50, total: 250 }
    ],
    specs: { 'Capacity': '10 Litres', 'Bags per Roll': '25 count', 'Base': 'Leakproof Star Sealed' }
  },
  {
    id: 'paper-pallet-wrap-stretch-paper',
    name: 'Paper Pallet Wrap / Stretch Paper',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'paper-pallet-wrap',
    subtitle: 'High-elongation creped kraft paper roll designed to secure palletized loads without plastic cling stretch wrap.',
    price: 38.00,
    moq: 2,
    unit: 'roll (300m)',
    featured: true,
    rating: 4.9,
    reviewCount: 84,
    badge: 'Pallet Wrap Disruptor',
    material: 'High-Tensile Elasticized Creped Kraft Paper',
    boardWeight: '60 GSM Specialized Stretch Paper',
    coating: 'Zero plastic polymers; high inter-layer friction',
    dimensionsPreset: '19.5" width × 984 feet (500mm × 300m roll)',
    dimensionsAvailable: ['Hand Roll (500mm × 300m)', 'Machine Dispenser Roll (500mm × 600m)'],
    finishOptions: ['Natural Brown Elastic Kraft'],
    ecoBadges: ['Replaces Plastic Cling Stretch Film', '100% Recyclable with Pallet Boxes', 'Puncture Resistant'],
    leadTime: '2-4 business days',
    history: 'Plastic stretch cling wrap (LLDPE) accounts for over 2.5 million metric tons of unrecyclable plastic waste globally. PackNStir stretch paper uses micro-creped fibers that elongate up to 30% under wrapping tension.',
    environmentalImpact: 'Replaces miles of thin plastic film wrapped around pallets that typically ends up in landfills. Eliminates pallet unwrapping disposal charges for retail receiving docks.',
    ecosystemBenefits: 'A groundbreaking creped paper stretch film that replaces multi-layer LLDPE plastic pallet wrap. Plastic shrink wrap is one of the world\\\'s worst ocean pollutants; our paper wrap repulps 100% with the cardboard boxes beneath it.',
    globalWarmingImpact: 'Eliminates 1.2 kg of fossil fuel plastic wrap per shipping pallet, saving 3.65 kg CO2e per wrapped pallet load across global supply chains.',
    co2SavedKg: 3.65,
    plasticAvoidedGrams: 1200,
    decompositionDays: '45–60 days',
    features: ['30% elongation capability creates high holding force around palletized cartons', 'High inter-layer friction prevents boxes from shifting during abrupt truck braking', 'Compatible with standard manual hand-wrap dispensers or automated wrapping turntables'],
    pricingTiers: [
      { qty: 2, pricePerUnit: 44.00, total: 88 },
      { qty: 6, pricePerUnit: 38.00, total: 228 },
      { qty: 16, pricePerUnit: 32.50, total: 520 },
      { qty: 32, pricePerUnit: 27.00, total: 864 }
    ],
    specs: { 'Stretch Capacity': 'Up to 30% elongation', 'Roll Width': '500 mm', 'Tensile Hold': 'High load security' }
  },
  {
    id: 'paper-strapping-bands',
    name: 'Paper Strapping Bands',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'paper-strapping',
    subtitle: 'Eco-friendly alternative to polypropylene plastic strapping bands with up to 250kg tensile strength.',
    price: 48.00,
    moq: 2,
    unit: 'coil (1000m)',
    featured: false,
    rating: 4.8,
    reviewCount: 66,
    badge: '250kg Tensile Paper',
    material: 'Tightly Twisted Multi-Ply High-Tensile Kraft Paper Cord',
    boardWeight: '12mm × 1000m Machine / Hand Coil',
    coating: 'Biodegradable vegetable starch binder',
    dimensionsPreset: '12mm width × 3,280 feet (12mm × 1000m coil)',
    dimensionsAvailable: ['9mm Light Duty (1500m)', '12mm Standard (1000m)', '16mm Heavy Duty (800m)'],
    finishOptions: ['Natural Brown Kraft', 'Clean White Band'],
    ecoBadges: ['Replaces Polypropylene Strapping', '100% Repulpable with Box', 'Safe on Hands (No Sharp Edges)'],
    leadTime: '2-4 business days',
    history: 'Invented to replace sharp plastic and steel strapping that commonly cuts into cardboard cartons and causes handling injuries during warehouse opening.',
    environmentalImpact: 'Polypropylene plastic strapping cannot be recycled through standard paper streams and tangles inside municipal sorting rotors. Paper strapping recycles directly with the box.',
    ecosystemBenefits: 'High-tensile paper strapping that replaces razor-sharp polypropylene and polyester plastic banding. Eliminates sharp plastic waste that entangles marine mammals and birds when discarded.',
    globalWarmingImpact: 'Manufacturing plastic strapping requires cracking petroleum naphtha at extreme temperatures; our paper strapping uses hydro-entangled kraft fibers with 70% lower production energy.',
    co2SavedKg: 1.85,
    plasticAvoidedGrams: 420,
    decompositionDays: '45–60 days',
    features: ['Compatible with semi-automatic strapping machines, friction weld tools, or metal buckles', 'Smooth paper edges eliminate worker finger lacerations and handling injuries', 'High break strain up to 250 kg holds pallet cartons and timber securely'],
    pricingTiers: [
      { qty: 2, pricePerUnit: 54.00, total: 108 },
      { qty: 6, pricePerUnit: 48.00, total: 288 },
      { qty: 12, pricePerUnit: 41.00, total: 492 },
      { qty: 24, pricePerUnit: 35.00, total: 840 }
    ],
    specs: { 'Tensile Break': 'Up to 250 kg (550 lbs)', 'Width': '12 mm', 'Machine Compatible': 'Yes' }
  },
  {
    id: 'kraft-pallet-top-covers',
    name: 'Kraft Pallet Top Covers',
    category: 'tape-bags',
    filterKey: 'tape-bags',
    categoryName: 'Tape, Labels, Bags & Strapping',
    svgType: 'single-wall-box',
    subtitle: 'Heavyweight protective paper sheets for shielding palletized goods from dust and warehouse moisture.',
    price: 0.85,
    moq: 100,
    unit: 'sheet',
    featured: false,
    rating: 4.7,
    reviewCount: 52,
    badge: 'Dust & Moisture Shield',
    material: '150 GSM Water-Resistant Heavyweight Kraft Paper',
    boardWeight: '150 GSM Heavy Board Sheet',
    coating: 'Hydrophobic cellulose treatment',
    dimensionsPreset: '48" × 48" (1200 × 1200 mm) Pre-Cut Sheet',
    dimensionsAvailable: ['Euro Pallet (1200×800mm)', 'Standard Square (1200×1200mm)', 'Continuous Perforated Roll'],
    finishOptions: ['Natural Brown Kraft'],
    ecoBadges: ['Replaces Plastic Top Sheets', '100% Recyclable', 'FSC® Certified'],
    leadTime: '2-3 business days',
    history: 'Standard palletizing uses thin polyethylene plastic sheets laid over the top tier of stacked boxes to keep dust off. PackNStir uses water-resistant heavy kraft sheets.',
    environmentalImpact: 'Eliminates disposable plastic sheets from warehouse operations. Can be reused multiple times or baled directly with cardboard scrap.',
    ecosystemBenefits: 'Protects pallet tops from dust and warehouse moisture using natural hydrophobic cellulose sizing. Replaces single-use polyethylene plastic sheeting, recycling directly with the pallet boxes.',
    globalWarmingImpact: 'Saves 1.15 kg CO2e per pallet top sheet compared to LDPE plastic film covers, ensuring zero plastic enters wholesale logistics.',
    co2SavedKg: 1.15,
    plasticAvoidedGrams: 240,
    decompositionDays: '60–90 days',
    features: ['Pre-cut to overhang standard pallets, guarding top boxes from forklift dust and rain', 'Breathable fibers prevent condensation droplets from forming on top boxes', 'Tear-resistant 150 GSM kraft stands up to vigorous outdoor loading dock handling'],
    pricingTiers: [
      { qty: 100, pricePerUnit: 1.05, total: 105 },
      { qty: 250, pricePerUnit: 0.85, total: 212.5 },
      { qty: 500, pricePerUnit: 0.70, total: 350 },
      { qty: 1000, pricePerUnit: 0.58, total: 580 }
    ],
    specs: { 'Dimensions': '1200 mm × 1200 mm', 'GSM': '150 GSM', 'Water Resistant': 'Yes' }
  }
];

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category || p.filterKey === category);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}


// === Module: src/data/story.js ===
const TIMELINE_MILESTONES = [
  {
    year: '2018',
    tag: 'The Catalyst',
    title: 'The Wake-Up Call',
    headline: 'Confronting the e-commerce plastic crisis.',
    description: 'Witnessing thousands of metric tons of bubble mailers, plastic polybags, and foam peanuts ending up in landfills due to mixed plastic-paper laminations, our founders—packaging engineers and industrial designers—set out to prove that 100% plant fiber could outperform fossil-fuel plastics in structural strength and aesthetics.',
    impact: 'Zero kilograms of plastic used in our very first prototype batch.',
    stat: '100% Fiber Commitment',
    imageType: 'founding'
  },
  {
    year: '2019',
    tag: 'R&D Innovation',
    title: 'The Honeycomb Breakthrough',
    headline: 'Replacing plastic bubble wrap forever.',
    description: 'After 14 months of physical drop testing and finite element analysis, PackNStir launched the Honeycomb Padded Paper Mailer. By precision-cutting recycled kraft paper into an interlocking hexagonal grid, we engineered shock absorption equal to 3/16" plastic bubble wrap—yet 100% curbside repulpable in standard blue paper bins.',
    impact: 'Over 2.4 million meters of plastic bubble film replaced in Year 1.',
    stat: '14 Months of Drop Testing',
    imageType: 'honeycomb'
  },
  {
    year: '2021',
    tag: 'Clean Barrier Science',
    title: 'PFAS-Free Food Grade Barrier',
    headline: 'Eliminating polyethylene and fluorochemicals in food packaging.',
    description: 'Most takeaway containers rely on hidden plastic (PE) linings or hazardous PFAS "forever chemicals" for grease resistance. We partnered with green chemistry researchers to commercialize an aqueous plant-starch dispersion coating that creates a natural barrier against hot cooking oils, mozzarella grease, and gravies while remaining home compostable.',
    impact: 'Certified OK Compost Home (EN 13432) for all food service lines.',
    stat: '100% PFAS & PE Free',
    imageType: 'barrier'
  },
  {
    year: '2023',
    tag: 'Architectural Craft',
    title: 'Luxury Meets the Circular Economy',
    headline: 'Rigid presentation boxes without petroleum foam.',
    description: 'Luxury brands long believed that premium unboxing required plastic EVA foam cavities and glossy synthetic film lamination. PackNStir debuted our Heirloom Setup Boxes: 1200 GSM recycled greyboard covered in fine-milled FSC paper with contour-molded bamboo cellulose cushions and natural cotton velvet linings.',
    impact: 'Adopted by 85+ haute parfumerie, fine jewelry, and boutique fashion houses.',
    stat: 'Zero EVA Foam',
    imageType: 'luxury'
  },
  {
    year: '2025',
    tag: 'Global Scale',
    title: 'The Solar-Powered Closed Loop Hub',
    headline: 'Powering circular packaging with 100% renewable energy.',
    description: 'We opened our state-of-the-art 120,000 sq ft production facility powered by rooftop solar arrays and an internal closed-loop water filtration system that recycles 94% of process water during paper pulp processing. Every scrap from our CAD cutting tables is gathered and re-pulped within the same building.',
    impact: '14.8M single-use plastic units replaced across 2,400+ international brands.',
    stat: '14.8 Million Units',
    imageType: 'facility'
  },
  {
    year: '2026',
    tag: 'The Horizon',
    title: 'Algae Inks & Regenerative Agriculture',
    headline: 'Packaging that actively heals the soil.',
    description: 'Today, PackNStir is piloting carbon-negative black and colored inks derived from spirulina algae and sourcing non-wood fibers from regenerative agricultural residues like hemp and wheat straw. Our mission remains unwavering: zero single-use plastics, uncompromising luxury aesthetics, and total circularity.',
    impact: 'Sequestering 1.8 kg of CO2 per ton of virgin paper alternative produced.',
    stat: 'Carbon Negative Inks',
    imageType: 'future'
  }
];

const MATERIALS_GUIDE = [
  {
    name: 'Corrugated Micro-Flute (E & B Flute)',
    useCase: 'Mailer Boxes, Pizza Boxes, Shipping Cartons',
    gsmRange: '320 - 650 GSM',
    sustainability: '100% Recyclable, 85% Post-Consumer Recovered Fiber',
    description: 'Features undulating paper arches (fluting) glued between linerboards. Provides high strength-to-weight ratio, crush resistance, and superior thermal insulation without synthetic foam.'
  },
  {
    name: 'Rigid Setup Greyboard',
    useCase: 'Perfume Boxes, Watch & Jewelry, Apparel',
    gsmRange: '1000 - 1600 GSM (1.5mm - 2.5mm caliper)',
    sustainability: 'High-density compressed recycled paper; repulpable',
    description: 'Dense, rigid cardboard that does not fold or bend. Provides the authoritative, heirloom tactile feel of luxury packaging while remaining completely repulpable.'
  },
  {
    name: 'Aqueous Dispersion Barrier',
    useCase: 'Takeaway Boxes, Clamshells, Bakery Packaging',
    gsmRange: '6 - 12 GSM microscopic coating',
    sustainability: 'Breaks down in 60-90 days in compost; repulpable in mills',
    description: 'A water-borne polymer of natural plant starches applied to paper fibers. Replaces toxic PE plastic and wax liners, repelling oils and liquids while allowing the paper to be pulped in conventional paper recycling.'
  },
  {
    name: 'Molded Paper Pulp',
    useCase: 'Beverage Carriers, Fragrance Inserts, Cushioning',
    gsmRange: 'Thermoformed density variable',
    sustainability: '100% Post-consumer newsprint, backyard compostable',
    description: 'Slurry of recovered fibers molded under heat and pneumatic pressure into ergonomic 3D shapes that cradle fragile items, entirely eliminating plastic styrofoam and bubble wrap.'
  },
  {
    name: 'Water-Activated Gummed Paper Tape',
    useCase: 'Box Sealing, Anti-Tamper Security',
    gsmRange: '70 GSM reinforced kraft',
    sustainability: 'Natural potato starch adhesive, recycles directly with box',
    description: 'Tape coated with dried corn or potato starch adhesive that activates upon contact with water, creating a fiber-fused molecular bond with corrugated boxes that plastic tape cannot match.'
  }
];

const TESTIMONIALS = [
  {
    quote: 'Switching our nationwide pizza chain to PackNStir’s micro-flute boxes eliminated 420,000 plastic-lined boxes a year. Customers constantly compliment how crisp the crust stays on delivery—the ventilation engineering is second to none.',
    author: 'Marco Bellini',
    role: 'Founder & Head Chef',
    company: 'Farina Artisanal Pizza, San Francisco',
    rating: 5,
    highlight: '420k plastic boxes eliminated'
  },
  {
    quote: 'For our luxury botanical perfume line, we refused to use cheap EVA plastic foam. PackNStir engineered a custom molded cellulose insert wrapped in black velvet paper that feels even more luxurious than traditional boxes, with zero guilt.',
    author: 'Claire Delacroix',
    role: 'Creative Director',
    company: 'Maison Botanique, Paris',
    rating: 5,
    highlight: 'Pure luxury without plastic'
  },
  {
    quote: 'The honeycomb padded mailers are an absolute game changer for our D2C cosmetics shipments. Zero breakage across 85,000 orders, and our customers love that they can toss the entire envelope into their home paper recycling bin.',
    author: 'Devon Vance',
    role: 'VP of Operations',
    company: 'PureSkin Organics, New York',
    rating: 5,
    highlight: 'Zero breakage across 85k orders'
  },
  {
    quote: 'The bespoke custom quote configurator and CAD sample service made launching our seasonal packaging effortless. We received physical unprinted mockups in 48 hours and launched production 2 weeks ahead of schedule.',
    author: 'Elena Rostova',
    role: 'Head of Brand Experience',
    company: 'Nordic Knitwear Co., Stockholm',
    rating: 5,
    highlight: 'Rapid 48-hour CAD prototyping'
  }
];


// === Module: src/state/cartState.js ===
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

const cart = new CartStore();


// === Module: src/utils/animations.js ===
// Animation utilities using GSAP (GreenSock)

function animateNumbers(elements) {
  if (!window.gsap) return;
  elements.forEach(el => {
    const endVal = parseFloat(el.getAttribute('data-value')) || 0;
    const prefix = el.getAttribute('data-prefix') || '';
    const suffix = el.getAttribute('data-suffix') || '';

    window.gsap.fromTo(el, 
      { textContent: 0 },
      {
        textContent: endVal,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        onUpdate: function() {
          el.textContent = prefix + Math.floor(this.targets()[0].textContent).toLocaleString() + suffix;
        }
      }
    );
  });
}

function pulseHighlight(element) {
  if (!window.gsap || !element) return;
  window.gsap.fromTo(element, 
    { scale: 0.95, boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
    { scale: 1, boxShadow: '0 0 0 15px rgba(16, 185, 129, 0)', duration: 0.6, ease: 'power2.out' }
  );
}


// === Module: src/components/InteractiveBoxVisualizer.js ===
// Interactive 3D / Animated Packaging Visualizer
// Powered by SVG + CSS 3D transforms + GSAP

function renderBoxVisualizer() {
  return `
    <div id="interactive-box-container" class="relative w-full max-w-xl mx-auto bg-stone-900/60 backdrop-blur-xl border border-stone-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden group">
      <!-- Glow effect behind box -->
      <div id="box-ambient-glow" class="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 via-amber-600/20 to-emerald-800/20 rounded-3xl blur-2xl opacity-60 pointer-events-none transition-all duration-700"></div>

      <!-- Header & Active Spec Badge -->
      <div class="relative z-10 flex items-center justify-between border-b border-stone-800 pb-4 mb-6">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            3D Studio Preview
          </span>
          <span id="box-material-label" class="text-xs text-stone-400 font-medium hidden sm:inline-block">Natural Kraft (E-Flute)</span>
        </div>
        <div class="flex items-center gap-2">
          <button id="btn-toggle-unfold" class="px-3 py-1.5 text-xs font-medium bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg transition-colors flex items-center gap-1.5 border border-stone-700">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
            <span id="btn-unfold-text">Unfold Dieline</span>
          </button>
        </div>
      </div>

      <!-- Visual Stage Area -->
      <div class="relative w-full h-72 sm:h-80 flex items-center justify-center overflow-hidden">
        <!-- 3D Perspective Box View -->
        <div id="box-3d-stage" class="w-full h-full flex items-center justify-center transition-all duration-500">
          <svg id="box-svg-element" viewBox="0 0 500 400" class="w-full h-full max-h-80 object-contain drop-shadow-2xl">
            <defs>
              <!-- Kraft Material -->
              <linearGradient id="kraftFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#D7AB7E" />
                <stop offset="100%" stop-color="#A97D4F" />
              </linearGradient>
              <linearGradient id="kraftSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#9C7043" />
                <stop offset="100%" stop-color="#7B5430" />
              </linearGradient>
              <linearGradient id="kraftLidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#E2BB8F" />
                <stop offset="100%" stop-color="#BD9061" />
              </linearGradient>

              <!-- Forest Green Material -->
              <linearGradient id="forestFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1E3E30" />
                <stop offset="100%" stop-color="#12271E" />
              </linearGradient>
              <linearGradient id="forestSideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#142B21" />
                <stop offset="100%" stop-color="#0B1712" />
              </linearGradient>

              <!-- White Kraft Material -->
              <linearGradient id="whiteFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FAF8F5" />
                <stop offset="100%" stop-color="#DED7C8" />
              </linearGradient>

              <!-- Charcoal Material -->
              <linearGradient id="charcoalFaceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2D3339" />
                <stop offset="100%" stop-color="#1A1E22" />
              </linearGradient>

              <!-- Gold Foil Gradient -->
              <linearGradient id="foilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FCE596" />
                <stop offset="50%" stop-color="#D4AF37" />
                <stop offset="100%" stop-color="#997A1E" />
              </linearGradient>

              <filter id="shadowFilter">
                <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
                <feOffset dx="0" dy="16" />
                <feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Dynamic Shadow -->
            <ellipse id="box-ground-shadow" cx="250" cy="340" rx="190" ry="30" fill="#000" opacity="0.45" filter="blur(10px)" />

            <!-- Isometric 3D Box Geometry -->
            <g id="box-geometry-group" transform="translate(0, 0)">
              <!-- Bottom Left Wall -->
              <polygon id="face-left" points="90,210 250,295 250,335 90,250" fill="url(#kraftSideGrad)" stroke="#664322" stroke-width="0.5" />
              
              <!-- Bottom Right Wall -->
              <polygon id="face-right" points="250,295 410,210 410,250 250,335" fill="#875E35" stroke="#5E4023" stroke-width="0.5" />

              <!-- Interior Floor (visible when lid is opened) -->
              <polygon id="face-interior" points="90,210 250,130 410,210 250,290" fill="#1C382B" opacity="0.9" />
              
              <!-- Interior Botanical Print on Inside Floor -->
              <g id="interior-print" opacity="0.7">
                <circle cx="250" cy="210" r="30" fill="none" stroke="#508A6F" stroke-width="1.5" stroke-dasharray="3 3"/>
                <text x="250" y="206" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#A8D6C0" text-anchor="middle" letter-spacing="1.5">ECOPACK STUDIO</text>
                <text x="250" y="220" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#78B59A" text-anchor="middle">100% CIRCULAR PACKAGING</text>
              </g>

              <!-- Hinged Lid (Transforms on Open / Close) -->
              <g id="box-lid-assembly" class="transition-transform duration-700 origin-[250px_130px]">
                <!-- Main Lid Plane -->
                <polygon id="face-top" points="90,210 250,125 410,210 250,295" fill="url(#kraftFaceGrad)" stroke="#B38656" stroke-width="0.8" />
                
                <!-- Front Tuck Lip -->
                <polygon id="face-lip" points="90,210 250,295 250,305 90,220" fill="url(#kraftLidGrad)" opacity="0.9" />

                <!-- Hot Stamp Logo on Lid Face -->
                <g id="lid-branding" transform="translate(250, 205) rotate(0)">
                  <circle cx="0" cy="0" r="32" fill="none" stroke="url(#foilGrad)" stroke-width="1.8" />
                  <path d="M-8,6 L0,-10 L8,6 L3,6 L0,-2 L-3,6 Z" fill="url(#foilGrad)" />
                  <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="800" fill="url(#foilGrad)" text-anchor="middle" letter-spacing="2">ECOPACK</text>
                  <text x="0" y="24" font-family="'Plus Jakarta Sans', sans-serif" font-size="4.5" fill="#E8D190" text-anchor="middle" letter-spacing="1">STUDIO</text>
                </g>
              </g>

              <!-- Dimension Annotations Overlay -->
              <g id="dimension-guides" class="opacity-0 transition-opacity duration-300">
                <!-- Width line -->
                <line x1="90" y1="265" x2="250" y2="350" stroke="#E5C378" stroke-width="1" stroke-dasharray="2 2"/>
                <rect x="150" y="305" width="46" height="16" rx="4" fill="#1C1917" stroke="#E5C378" stroke-width="0.8"/>
                <text x="173" y="316" font-family="monospace" font-size="7.5" fill="#E5C378" text-anchor="middle">L: 305mm</text>

                <!-- Depth line -->
                <line x1="250" y1="350" x2="410" y2="265" stroke="#E5C378" stroke-width="1" stroke-dasharray="2 2"/>
                <rect x="310" y="305" width="46" height="16" rx="4" fill="#1C1917" stroke="#E5C378" stroke-width="0.8"/>
                <text x="333" y="316" font-family="monospace" font-size="7.5" fill="#E5C378" text-anchor="middle">W: 203mm</text>

                <!-- Height line -->
                <line x1="425" y1="210" x2="425" y2="250" stroke="#E5C378" stroke-width="1"/>
                <rect x="430" y="222" width="40" height="16" rx="4" fill="#1C1917" stroke="#E5C378" stroke-width="0.8"/>
                <text x="450" y="233" font-family="monospace" font-size="7.5" fill="#E5C378" text-anchor="middle">H: 76mm</text>
              </g>
            </g>

            <!-- Flat CAD Dieline Graphic (Hidden by default, shown when unfolded) -->
            <g id="box-cad-dieline" class="hidden" transform="translate(40, 20)">
              <rect x="0" y="0" width="420" height="340" fill="#1C1F22" rx="12" stroke="#374151" stroke-width="1"/>
              <!-- Grid background -->
              <defs>
                <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M20 0 L0 0 0 20" fill="none" stroke="#2A3038" stroke-width="0.8"/>
                </pattern>
              </defs>
              <rect x="0" y="0" width="420" height="340" fill="url(#cadGrid)" rx="12" />
              <!-- Cut lines (Green) and Crease lines (Dashed Orange) -->
              <g transform="translate(50, 40)">
                <!-- Main body rectangle cut -->
                <rect x="40" y="30" width="240" height="200" fill="#D7AB7E" fill-opacity="0.15" stroke="#10B981" stroke-width="1.8" rx="2"/>
                <!-- Flaps & Wings -->
                <polygon points="40,30 10,60 10,130 40,150" fill="#A97D4F" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
                <polygon points="280,30 310,60 310,130 280,150" fill="#A97D4F" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
                <polygon points="40,30 90,0 230,0 280,30" fill="#A97D4F" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5"/>
                <!-- Crease fold lines (Dashed) -->
                <line x1="40" y1="90" x2="280" y2="90" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="40" y1="170" x2="280" y2="170" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="100" y1="30" x2="100" y2="230" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <line x1="220" y1="30" x2="220" y2="230" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="4 3"/>
                <!-- CAD Labels -->
                <text x="160" y="135" font-family="monospace" font-size="9" fill="#10B981" text-anchor="middle" font-weight="bold">MAIN PANEL (INTERIOR)</text>
                <text x="160" y="150" font-family="monospace" font-size="7" fill="#9CA3AF" text-anchor="middle">CALIPER: 1.6mm E-FLUTE CORRUGATED</text>
                <!-- Legend -->
                <circle cx="20" cy="245" r="4" fill="#10B981"/>
                <text x="30" y="248" font-family="monospace" font-size="7" fill="#E5E7EB">DIE-CUT TRIM</text>
                <line x1="100" y1="245" x2="125" y2="245" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="3 2"/>
                <text x="135" y="248" font-family="monospace" font-size="7" fill="#E5E7EB">CREASE / SCORE LINE</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      <!-- Interactive Controls Bar -->
      <div class="relative z-10 pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Material Color Swatches -->
        <div class="flex items-center gap-2">
          <span class="text-xs text-stone-400 mr-1">Board Finish:</span>
          <button data-material="kraft" class="material-btn active w-6 h-6 rounded-full bg-[#C49A6C] ring-2 ring-emerald-500 ring-offset-2 ring-offset-stone-900 transition-transform hover:scale-110" title="Natural Kraft"></button>
          <button data-material="forest" class="material-btn w-6 h-6 rounded-full bg-[#1A382B] ring-1 ring-stone-600 ring-offset-1 ring-offset-stone-900 transition-transform hover:scale-110" title="Forest Green"></button>
          <button data-material="white" class="material-btn w-6 h-6 rounded-full bg-[#F3EFE6] ring-1 ring-stone-600 ring-offset-1 ring-offset-stone-900 transition-transform hover:scale-110" title="Crisp White"></button>
          <button data-material="charcoal" class="material-btn w-6 h-6 rounded-full bg-[#23292F] ring-1 ring-stone-600 ring-offset-1 ring-offset-stone-900 transition-transform hover:scale-110" title="Charcoal Matte"></button>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2">
          <button id="btn-toggle-open" class="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md hover:shadow-emerald-900/30">
            Open Box Lid
          </button>
          <button id="btn-toggle-dims" class="px-3 py-1.5 text-xs font-medium rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-all border border-stone-700">
            Show Dimensions
          </button>
        </div>
      </div>
    </div>
  `;
}

function initBoxVisualizer() {
  const container = document.getElementById('interactive-box-container');
  if (!container) return;

  let isLidOpen = false;
  let isUnfolded = false;
  let areDimsVisible = false;
  let currentMaterial = 'kraft';

  const lidAssembly = document.getElementById('box-lid-assembly');
  const btnToggleOpen = document.getElementById('btn-toggle-open');
  const btnToggleDims = document.getElementById('btn-toggle-dims');
  const btnToggleUnfold = document.getElementById('btn-toggle-unfold');
  const btnUnfoldText = document.getElementById('btn-unfold-text');
  const dimGuides = document.getElementById('dimension-guides');
  const box3dGroup = document.getElementById('box-geometry-group');
  const boxCadGroup = document.getElementById('box-cad-dieline');
  const materialLabel = document.getElementById('box-material-label');
  const materialBtns = container.querySelectorAll('.material-btn');

  const faceTop = document.getElementById('face-top');
  const faceLeft = document.getElementById('face-left');
  const faceRight = document.getElementById('face-right');

  // Open / Close Lid Action
  if (btnToggleOpen) {
    btnToggleOpen.addEventListener('click', () => {
      if (isUnfolded) {
        // First revert to 3D view
        toggleUnfold();
      }
      isLidOpen = !isLidOpen;
      if (isLidOpen) {
        btnToggleOpen.textContent = 'Close Box Lid';
        if (window.gsap && lidAssembly) {
          window.gsap.to(lidAssembly, {
            transformOrigin: '250px 125px',
            scaleY: 0.25,
            y: -80,
            opacity: 0.35,
            duration: 0.7,
            ease: 'power3.out'
          });
        } else if (lidAssembly) {
          lidAssembly.style.transform = 'translateY(-80px) scaleY(0.25)';
          lidAssembly.style.opacity = '0.35';
        }
      } else {
        btnToggleOpen.textContent = 'Open Box Lid';
        if (window.gsap && lidAssembly) {
          window.gsap.to(lidAssembly, {
            scaleY: 1,
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
          });
        } else if (lidAssembly) {
          lidAssembly.style.transform = 'translateY(0) scaleY(1)';
          lidAssembly.style.opacity = '1';
        }
      }
    });
  }

  // Dimension Toggles
  if (btnToggleDims) {
    btnToggleDims.addEventListener('click', () => {
      areDimsVisible = !areDimsVisible;
      if (areDimsVisible) {
        btnToggleDims.classList.add('bg-stone-700', 'text-amber-300');
        dimGuides.classList.remove('opacity-0');
        dimGuides.classList.add('opacity-100');
      } else {
        btnToggleDims.classList.remove('bg-stone-700', 'text-amber-300');
        dimGuides.classList.remove('opacity-100');
        dimGuides.classList.add('opacity-0');
      }
    });
  }

  // Toggle Unfold Dieline View
  function toggleUnfold() {
    isUnfolded = !isUnfolded;
    if (isUnfolded) {
      btnUnfoldText.textContent = 'View 3D Box';
      box3dGroup.classList.add('hidden');
      boxCadGroup.classList.remove('hidden');
      if (window.gsap) {
        window.gsap.fromTo(boxCadGroup, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' });
      }
    } else {
      btnUnfoldText.textContent = 'Unfold Dieline';
      boxCadGroup.classList.add('hidden');
      box3dGroup.classList.remove('hidden');
      if (window.gsap) {
        window.gsap.fromTo(box3dGroup, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' });
      }
    }
  }

  if (btnToggleUnfold) {
    btnToggleUnfold.addEventListener('click', toggleUnfold);
  }

  // Material Swatches
  materialBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      materialBtns.forEach(b => {
        b.classList.remove('ring-2', 'ring-emerald-500', 'ring-offset-2');
        b.classList.add('ring-1', 'ring-stone-600', 'ring-offset-1');
      });
      btn.classList.add('ring-2', 'ring-emerald-500', 'ring-offset-2');
      btn.classList.remove('ring-1', 'ring-stone-600', 'ring-offset-1');

      const mat = btn.getAttribute('data-material');
      currentMaterial = mat;

      if (mat === 'kraft') {
        faceTop.setAttribute('fill', 'url(#kraftFaceGrad)');
        faceLeft.setAttribute('fill', 'url(#kraftSideGrad)');
        faceRight.setAttribute('fill', '#875E35');
        if (materialLabel) materialLabel.textContent = 'Natural Kraft (E-Flute)';
      } else if (mat === 'forest') {
        faceTop.setAttribute('fill', 'url(#forestFaceGrad)');
        faceLeft.setAttribute('fill', 'url(#forestSideGrad)');
        faceRight.setAttribute('fill', '#0E1D16');
        if (materialLabel) materialLabel.textContent = 'Deep Forest Green (Foil Embossed)';
      } else if (mat === 'white') {
        faceTop.setAttribute('fill', 'url(#whiteFaceGrad)');
        faceLeft.setAttribute('fill', '#DCD5C5');
        faceRight.setAttribute('fill', '#C8BFAC');
        if (materialLabel) materialLabel.textContent = 'Crisp Bleached Kraft';
      } else if (mat === 'charcoal') {
        faceTop.setAttribute('fill', 'url(#charcoalFaceGrad)');
        faceLeft.setAttribute('fill', '#1F2429');
        faceRight.setAttribute('fill', '#14181B');
        if (materialLabel) materialLabel.textContent = 'Obsidian Matte Greyboard';
      }

      if (window.gsap) {
        window.gsap.fromTo(box3dGroup, { scale: 0.98 }, { scale: 1, duration: 0.3, ease: 'power1.out' });
      }
    });
  });
}


// === Module: src/components/CartDrawer.js ===
function renderCartDrawer() {
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

function initCartDrawer() {
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


// === Module: src/components/CheckoutModal.js ===
function renderCheckoutModal() {
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
                <span class="text-xs uppercase tracking-widest text-emerald-800 font-bold">PackNStir Secure Checkout</span>
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

function initCheckoutModal() {
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


// === Module: src/components/QuickViewModal.js ===
function renderQuickViewModal() {
  return `
    <div id="quickview-backdrop" class="fixed inset-0 bg-stone-950/75 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div id="quickview-container" class="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-stone-200 overflow-hidden transform scale-95 transition-all duration-300 my-8">
        
        <button id="quickview-close" class="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-stone-100 text-stone-500 hover:text-stone-800 flex items-center justify-center transition-colors shadow">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        <div id="quickview-content" class="grid grid-cols-1 md:grid-cols-2">
          <!-- Dynamically populated -->
        </div>

      </div>
    </div>
  `;
}

function initQuickViewModal() {
  const backdrop = document.getElementById('quickview-backdrop');
  const container = document.getElementById('quickview-container');
  const closeBtn = document.getElementById('quickview-close');
  const contentEl = document.getElementById('quickview-content');

  function openQuickView(productId) {
    const product = getProductById(productId);
    if (!product) return;

    contentEl.innerHTML = `
      <!-- Left: Visual & Badges -->
      <div class="bg-gradient-to-br from-stone-100 to-stone-200/80 p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-stone-200">
        <span class="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300">
          ${product.badge || 'FSC® Certified'}
        </span>
        <div class="w-full h-64 flex items-center justify-center">
          ${getProductSvg(product.svgType, 'quickview')}
        </div>
        <div class="w-full flex items-center justify-center gap-2 mt-2">
          ${product.ecoBadges.slice(0, 2).map(b => `
            <span class="text-[10px] font-medium bg-white/80 text-emerald-900 px-2 py-0.5 rounded border border-emerald-900/10">${b}</span>
          `).join('')}
        </div>
      </div>

      <!-- Right: Product Specs & Rapid Cart Add -->
      <div class="p-6 sm:p-8 flex flex-col justify-between space-y-4">
        <div>
          <span class="text-xs uppercase font-bold tracking-widest text-emerald-800">${product.categoryName}</span>
          <h2 class="text-xl font-extrabold text-stone-900 mt-1 leading-snug">${product.name}</h2>
          <p class="text-xs text-stone-600 mt-2 line-clamp-2">${product.subtitle}</p>

          <!-- Price & MOQ -->
          <div class="mt-4 pt-4 border-t border-stone-200/80 flex items-baseline justify-between">
            <div>
              <span class="text-2xl font-black text-stone-900">$${product.price.toFixed(2)}</span>
              <span class="text-xs text-stone-500">/ ${product.unit}</span>
            </div>
            <span class="text-xs font-semibold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">MOQ: ${product.moq} units</span>
          </div>

          <!-- Quick Selectors -->
          <div class="mt-4 space-y-3">
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Standard Sizing</label>
              <select id="qv-size-select" class="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700">
                ${product.dimensionsAvailable.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Finish / Print</label>
              <select id="qv-finish-select" class="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700">
                ${product.finishOptions.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-1">Quantity (Units)</label>
              <input type="number" id="qv-qty-input" value="${product.moq}" min="${product.moq}" step="50" class="w-full text-xs px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 font-semibold" />
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-2 pt-2">
          <button id="qv-btn-add" class="w-full py-3 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span>Add to Cart</span>
          </button>

          <a href="#product/${product.id}" id="qv-full-pdp-link" class="block w-full py-2.5 text-center text-xs font-bold text-stone-700 hover:text-emerald-900 hover:bg-stone-100 rounded-xl transition-colors">
            View Full Technical Specifications & Tiered Pricing →
          </a>
        </div>
      </div>
    `;

    // Attach Add to Cart listener
    const btnAdd = contentEl.querySelector('#qv-btn-add');
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        const size = contentEl.querySelector('#qv-size-select').value;
        const finish = contentEl.querySelector('#qv-finish-select').value;
        const qty = parseInt(contentEl.querySelector('#qv-qty-input').value) || product.moq;

        cart.addItem(product, qty, { size, finish });
        closeQuickView();
      });
    }

    const pdpLink = contentEl.querySelector('#qv-full-pdp-link');
    if (pdpLink) {
      pdpLink.addEventListener('click', () => {
        closeQuickView();
      });
    }

    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100', 'pointer-events-auto');
    container.classList.remove('scale-95');
    container.classList.add('scale-100');
  }

  function closeQuickView() {
    container.classList.remove('scale-100');
    container.classList.add('scale-95');
    backdrop.classList.remove('opacity-100', 'pointer-events-auto');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeQuickView);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeQuickView();
    });
  }

  window.addEventListener('open-quickview', (e) => {
    openQuickView(e.detail.productId);
  });
}


// === Module: src/components/Navbar.js ===
function renderNavbar() {
  return `
    <header id="site-header" class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#EBDDC8] transition-all duration-300">
      
      <!-- Top Eco Announcement Bar -->
      <div class="bg-emerald-950 text-emerald-200 text-[11px] font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 overflow-hidden">
        <span class="inline-flex items-center gap-1.5 font-bold text-white uppercase tracking-wider text-[9px] bg-emerald-800 px-2 py-0.5 rounded-full">
          Zero-Plastic Certified
        </span>
        <span class="truncate">PackNStir: 100% Biodegradable & Recyclable Packaging. Free carbon-neutral freight on orders over $150.</span>
        <a href="#eco-impact" class="underline font-bold text-emerald-300 hover:text-white hidden sm:inline ml-1">🌍 Earth Eco-System & Global Warming Directory (All 46 Products) →</a>
      </div>

      <!-- Main Navigation Bar -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand Identity (PackNStir) -->
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-emerald-900 group-hover:bg-emerald-800 transition-colors flex items-center justify-center text-emerald-300 shadow-md shadow-emerald-950/20">
              <svg class="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
              </svg>
            </div>
            <div>
              <span class="font-black text-2xl tracking-tight text-stone-950 block font-serif">
                Pack<span class="text-emerald-800 font-sans font-extrabold">N</span>Stir
              </span>
              <span class="text-[9px] tracking-widest uppercase text-stone-500 font-bold block -mt-1">
                Zero-Plastic Packaging
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-7 text-sm font-bold text-stone-700">
            <a href="#home" class="nav-link hover:text-emerald-800 transition-colors py-1 relative">Home</a>
            
            <!-- Dedicated Earth Eco-System & Global Warming Master Page Link -->
            <a href="#eco-impact" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1.5 text-emerald-900 font-extrabold" title="Complete directory of all 46 products with material history, ecosystem preservation, and global warming carbon data">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Eco-System & Global Warming</span>
              <span class="text-[9px] font-black bg-emerald-100 text-emerald-950 px-1.5 py-0.5 rounded-full">46</span>
            </a>

            <!-- Shop Dropdown / Catalog -->
            <div class="relative group">
              <a href="#shop" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1">
                <span>Shop</span>
                <svg class="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>

              <!-- Dropdown Menu -->
              <div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div class="w-72 bg-white rounded-2xl shadow-2xl border border-[#EBDDC8] p-2.5 space-y-1">
                  <a href="#shop?category=boxes" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center text-sm">📦</span>
                    <div>
                      <div class="font-bold">Cardboard Boxes & Cartons</div>
                      <div class="text-[10px] text-stone-500 font-normal">Single, double, tri-wall & crash-lock</div>
                    </div>
                  </a>
                  <a href="#shop?category=postal" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center text-sm">✉️</span>
                    <div>
                      <div class="font-bold">Postal & E-Commerce</div>
                      <div class="text-[10px] text-stone-500 font-normal">Bio mailers, book wraps & tubes</div>
                    </div>
                  </a>
                  <a href="#shop?category=takeaway" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-amber-50 text-stone-800 flex items-center justify-center text-sm">🥗</span>
                    <div>
                      <div class="font-bold">Sustainable Takeaway</div>
                      <div class="text-[10px] text-stone-500 font-normal">Sugarcane, palm leaf & hot cups</div>
                    </div>
                  </a>
                  <a href="#shop?category=protective" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center text-sm">🛡️</span>
                    <div>
                      <div class="font-bold">Protective & Void Fill</div>
                      <div class="text-[10px] text-stone-500 font-normal">Honeycomb wrap & starch peanuts</div>
                    </div>
                  </a>
                  <a href="#shop?category=tape-bags" class="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FBF8F3] transition-colors text-xs font-semibold text-stone-900">
                    <span class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-900 flex items-center justify-center text-sm">🏷️</span>
                    <div>
                      <div class="font-bold">Tape, Bags & Strapping</div>
                      <div class="text-[10px] text-stone-500 font-normal">Gummed tape, stretch paper & strapping</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#about" class="nav-link hover:text-emerald-800 transition-colors py-1">About Us</a>
            <a href="#quote" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1.5">
              <span>Custom Quote</span>
              <span class="text-[9px] font-bold bg-[#EBDDC8] text-stone-800 px-2 py-0.5 rounded-full">CAD</span>
            </a>
          </nav>

          <!-- Right Action Items: Cart & Mobile Menu -->
          <div class="flex items-center gap-3">
            
            <!-- Custom Quote CTA Button (Desktop) -->
            <a href="#quote" class="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-800 hover:bg-emerald-900 text-white shadow-md shadow-emerald-950/20 transition-all">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              <span>Instant CAD Quote</span>
            </a>

            <!-- Cart Trigger Button -->
            <button id="nav-cart-trigger" class="relative p-2.5 rounded-xl bg-white hover:bg-[#F6EFE3] text-stone-900 border border-[#DEC6A6] transition-colors flex items-center gap-2" aria-label="Shopping Cart">
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
      <div id="mobile-menu-drawer" class="md:hidden hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-2xl">
        <div class="flex flex-col space-y-3 font-bold text-stone-900 text-base">
          <a href="#home" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Home</a>
          <a href="#eco-impact" class="mobile-nav-link text-emerald-900 hover:text-emerald-800 py-2 border-b border-stone-100 flex items-center justify-between font-extrabold">
            <span>🌍 Eco-System & Global Warming (All 46)</span>
            <span class="text-xs bg-emerald-100 text-emerald-950 px-2 py-0.5 rounded-full font-black">46</span>
          </a>
          <a href="#shop" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100 flex items-center justify-between">
            <span>Shop All Products</span>
            <span class="text-xs bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full">5 Categories</span>
          </a>
          <a href="#about" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">About Us & Mission</a>
          <a href="#quote" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Contact & Custom Quote</a>
        </div>
        <div class="pt-2">
          <a href="#quote" class="w-full py-3.5 bg-emerald-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow">
            <span>Build Bespoke CAD Quote</span>
          </a>
        </div>
      </div>

    </header>
  `;
}

function initNavbar() {
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


// === Module: src/components/Footer.js ===
function renderFooter() {
  return `
    <footer class="bg-stone-950 text-stone-300 border-t border-stone-800 pt-16 pb-12 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Newsletter & Sustainability Pledge Bar -->
        <div class="bg-stone-900/90 border border-stone-800 rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div class="absolute -right-10 -bottom-10 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div class="lg:col-span-7 space-y-2">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                🌱 The Zero-Plastic Circular Dispatch
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
                Join 3,200+ Eco-Conscious Brand Leaders
              </h3>
              <p class="text-stone-400 text-xs sm:text-sm max-w-xl">
                Get monthly deep dives on zero-plastic barrier coatings, regulatory packaging updates across the EU & North America, and £25 off your first wholesale sample run.
              </p>
            </div>

            <div class="lg:col-span-5">
              <form id="newsletter-form" class="space-y-2">
                <div class="flex flex-col sm:flex-row gap-2">
                  <input type="email" id="newsletter-email" placeholder="founder@yourbrand.com" class="flex-1 px-4 py-3 bg-stone-950 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                  <button type="submit" class="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer">
                    <span>Subscribe</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
                <div id="newsletter-msg" class="text-xs hidden text-emerald-400 font-medium"></div>
                <p class="text-[11px] text-stone-500">We respect your inbox. Unsubscribe anytime with one click.</p>
              </form>
            </div>
          </div>
        </div>

        <!-- Trust Certifications Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-12 mb-12 border-b border-stone-800/80">
          ${CERTIFICATIONS.map(cert => `
            <div class="p-4 rounded-2xl bg-stone-900/40 border border-stone-800/60 flex flex-col justify-between">
              <div>
                <span class="text-xs font-bold text-emerald-400 block">${cert.name}</span>
                <span class="text-[10px] font-mono text-stone-500 block mb-1">${cert.code}</span>
                <p class="text-[11px] text-stone-400 leading-tight">${cert.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Main Footer Links Columns -->
        <div class="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          
          <!-- Column 1: Brand Info (2 cols) -->
          <div class="col-span-2 space-y-4 pr-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-md">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="font-extrabold text-2xl text-white font-serif tracking-tight">Pack<span class="text-emerald-400 font-sans">N</span>Stir</span>
            </div>
            <p class="text-xs text-stone-400 max-w-sm leading-relaxed">
              Pioneering circular paper, micro-flute corrugated cardboard, compostable tableware, and zero-plastic protective packaging for retail, hospitality, and e-commerce. 100% curbside recyclable and biodegradable.
            </p>
            <div class="text-xs text-stone-500 space-y-1">
              <div>📍 Global Distribution Hub & Cleanroom Lab</div>
              <div>⚡ 100% Powered by rooftop solar arrays & closed-loop water conversion</div>
            </div>
            
            <!-- Social Links -->
            <div class="flex items-center gap-3 pt-2">
              <a href="#" aria-label="LinkedIn" class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="Twitter / X" class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" class="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-600 transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Packaging Catalog -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Product Catalog</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#shop?category=boxes" class="hover:text-emerald-400 transition-colors">Cardboard Boxes & Cartons (9)</a></li>
              <li><a href="#shop?category=postal" class="hover:text-emerald-400 transition-colors">Postal & E-Commerce (7)</a></li>
              <li><a href="#shop?category=takeaway" class="hover:text-emerald-400 transition-colors">Sustainable Takeaway (10)</a></li>
              <li><a href="#shop?category=protective" class="hover:text-emerald-400 transition-colors">Protective Packaging (8)</a></li>
              <li><a href="#shop?category=tape-bags" class="hover:text-emerald-400 transition-colors">Tape, Bags & Strapping (12)</a></li>
              <li><a href="#shop" class="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1">Browse All 46 Products →</a></li>
            </ul>
          </div>

          <!-- Column 3: The Eco-System & Global Warming Directory -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Eco-System & Climate</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#eco-impact" class="hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-bold text-emerald-400"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 🌍 Eco-System & Global Warming (46)</a></li>
              <li><a href="#eco-impact" class="hover:text-emerald-400 transition-colors">Ocean & Marine Protection</a></li>
              <li><a href="#eco-impact" class="hover:text-emerald-400 transition-colors">CO₂e Carbon Reduction Metrics</a></li>
              <li><a href="#eco-impact" class="hover:text-emerald-400 transition-colors">Zero-Microplastic Soil Humus</a></li>
              <li><a href="#eco-impact" class="hover:text-emerald-400 transition-colors">All 46 Materials History</a></li>
            </ul>
          </div>

          <!-- Column 4: Studio & B2B -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Company & Support</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Custom CAD Quote Tool</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Zero-Plastic Mission & Vision</a></li>
              <li><a href="#story" class="hover:text-emerald-400 transition-colors">Our Founding Timeline</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Materials Science Guide</a></li>
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Free Unprinted CAD Samples</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 PackNStir Inc. All rights reserved. 100% Repulpable, Plastic-Free & Compostable Packaging.</p>
          <div class="flex items-center gap-6">
            <a href="#about" class="hover:text-stone-300">Privacy Policy</a>
            <a href="#about" class="hover:text-stone-300">Terms of Supply</a>
            <a href="#about" class="hover:text-stone-300">FSC® Chain of Custody</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

function initFooter() {
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-msg');
  const input = document.getElementById('newsletter-email');

  if (form && msg && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input.value;
      if (!email) return;

      msg.classList.remove('hidden');
      msg.textContent = '🎉 Welcome to the PackNStir circular packaging community! Check your inbox for your sample voucher.';
      input.value = '';
    });
  }
}


// === Module: src/views/HomeView.js ===
function renderHomeView() {
  const featured = getFeaturedProducts();

  return `
    <div class="space-y-24 sm:space-y-32 bg-white">
      
      <!-- ========================================== -->
      <!-- 1. HERO SECTION: CLEAN WHITE & GREEN CTA   -->
      <!-- ========================================== -->
      <section class="relative pt-12 pb-12 sm:pt-20 sm:pb-20 overflow-hidden bg-white">
        <!-- Floating subtle kraft background aura -->
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#F6EFE3]/50 via-emerald-50/40 to-[#FAF8F5] rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Headline & Value Prop (6 cols) -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-950 border border-emerald-300 text-xs font-black tracking-wide shadow-2xs">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></span>
                <span>Zero Single-Use Plastics • 100% Natural Packaging</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-950 tracking-tight leading-[1.08] font-serif">
                Zero-Plastic Packaging <br/>
                <span class="italic text-emerald-800 font-serif">Engineered</span> to Dissolve Back to Earth.
              </h1>

              <p class="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                PackNStir replaces synthetic bubble wrap, poly mailers, and plastic takeaway linings with 100% repulpable single/double-wall corrugated cartons, sugarcane bagasse, and water-activated gummed paper.
              </p>

              <!-- Green CTAs -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#eco-impact" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-extrabold text-sm shadow-xl shadow-emerald-950/25 transition-all flex items-center justify-center gap-2.5 group cursor-pointer">
                  <span>🌍 Eco-System & Global Warming (46 Formats)</span>
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                
                <a href="#shop" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#F6EFE3] hover:bg-[#EBDDC8] border border-[#DEC6A6] text-stone-900 font-bold text-sm shadow-xs transition-all flex items-center justify-center gap-2">
                  <span>Shop 46 Products</span>
                </a>
              </div>

              <!-- Trust Stats Row -->
              <div class="pt-6 border-t border-[#EBDDC8] grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span class="block text-2xl sm:text-3xl font-black text-emerald-950 font-serif">0%</span>
                  <span class="text-xs text-stone-500 font-bold uppercase tracking-wider">Plastic Content</span>
                </div>
                <div>
                  <span class="block text-2xl sm:text-3xl font-black text-emerald-950 font-serif">46+</span>
                  <span class="text-xs text-stone-500 font-bold uppercase tracking-wider">Circular Formats</span>
                </div>
                <div>
                  <span class="block text-2xl sm:text-3xl font-black text-emerald-950 font-serif">&lt; 90d</span>
                  <span class="text-xs text-stone-500 font-bold uppercase tracking-wider">Compost Cycle</span>
                </div>
              </div>
            </div>

            <!-- Right: Interactive Floating 3D Packaging Visualizer (6 cols) -->
            <div class="lg:col-span-6">
              ${renderBoxVisualizer()}
            </div>

          </div>
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 2. FOUR SPECIFIED CATEGORIES GRID          -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-black tracking-widest text-emerald-800 block mb-2">Engineered by Material Architecture</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
            Essential Sustainable Categories
          </h2>
          <p class="text-stone-600 text-sm mt-3">
            Pure plant fibers, starch molecular adhesives, and food-grade aqueous barrier coatings.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${HOME_FEATURED_CATEGORIES.map(cat => `
            <a href="${cat.link}" class="group rounded-3xl bg-[#FAF8F5] border-2 border-[#EBDDC8] p-7 shadow-xs hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="w-14 h-14 rounded-2xl bg-white border border-[#EBDDC8] group-hover:bg-emerald-900 group-hover:text-white transition-all flex items-center justify-center text-3xl shadow-xs">
                    ${cat.icon}
                  </span>
                  <span class="text-[10px] font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded-full">
                    ${cat.items}
                  </span>
                </div>

                <div>
                  <h3 class="text-xl font-bold text-stone-950 group-hover:text-emerald-900 transition-colors font-serif">
                    ${cat.title}
                  </h3>
                  <p class="text-xs font-semibold text-emerald-800 mt-1">${cat.subtitle}</p>
                  <p class="text-xs text-stone-600 mt-2 leading-relaxed">
                    ${cat.desc}
                  </p>
                </div>
              </div>

              <div class="pt-6 mt-6 border-t border-[#EBDDC8] flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-emerald-800">
                <span>View Formats</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </div>
            </a>
          `).join('')}
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- 2.5 DEDICATED ECOSYSTEM & GLOBAL WARMING MASTER DIRECTORY BANNER -->
      <!-- =============================================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#FAF8F5] via-[#F6EFE3] to-[#EBDDC8] p-8 sm:p-12 border-2 border-[#DEC6A6] shadow-md relative overflow-hidden">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div class="lg:col-span-8 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 text-[11px] font-bold border border-emerald-800">
                <span>🌍 Dedicated Master Archive</span>
              </div>
              <h2 class="text-2xl sm:text-4xl font-black text-stone-950 font-serif leading-tight">
                How Our Packaging Protects Earth's Ecosystems & Fights Global Warming
              </h2>
              <p class="text-stone-700 text-xs sm:text-sm leading-relaxed max-w-2xl font-sans">
                Every single product in our <strong>46-item catalog</strong> has been scientifically analyzed and documented. Explore the material origins of each packaging archetype, learn how it shields oceans and topsoil from toxic microplastics, and inspect its net CO₂e carbon reduction.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div class="p-3 bg-white/90 rounded-2xl border border-[#DEC6A6]">
                  <span class="text-xs font-black text-emerald-900 block">📜 Material History</span>
                  <span class="text-[11px] text-stone-600 block mt-0.5">Origins, inventions & timber replacement</span>
                </div>
                <div class="p-3 bg-white/90 rounded-2xl border border-[#DEC6A6]">
                  <span class="text-xs font-black text-emerald-900 block">🌊 Ocean & Soil Biomes</span>
                  <span class="text-[11px] text-stone-600 block mt-0.5">0% microplastics; non-toxic biodegradation</span>
                </div>
                <div class="p-3 bg-white/90 rounded-2xl border border-[#DEC6A6]">
                  <span class="text-xs font-black text-emerald-900 block">🌡️ Global Warming Reducer</span>
                  <span class="text-[11px] text-stone-600 block mt-0.5">Up to -78% carbon emissions vs plastic</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3">
              <a href="#eco-impact" class="w-full sm:w-auto px-6 py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-extrabold text-xs shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 text-center group cursor-pointer">
                <span>Explore Eco-System & Global Warming (46 Formats)</span>
                <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <span class="text-[11px] text-stone-500 font-medium">Free open-access environmental dataset</span>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================== -->
      <!-- 3. ANIMATED ECO-CREDENTIALS SECTION        -->
      <!-- ========================================== -->
      <section class="bg-[#1E3A2F] text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-16 relative overflow-hidden max-w-7xl mx-auto shadow-2xl">
        <div class="relative z-10 max-w-3xl mb-12">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-300 block mb-2">Verified Circular Credentials</span>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            0% Fossil Plastic. 100% Compostable.
          </h2>
          <p class="text-emerald-100/80 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Every fiber harvested carries full Forest Stewardship Council® chain-of-custody tracking. Certified by TÜV Austria for non-toxic backyard compost decomposition.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          ${SUSTAINABILITY_STATS.map(stat => `
            <div class="bg-emerald-900/40 border border-emerald-700/50 rounded-3xl p-6 sm:p-8 space-y-2 backdrop-blur-sm">
              <span class="text-4xl sm:text-5xl font-black text-emerald-300 font-serif tracking-tight block">
                ${stat.displayValue}
              </span>
              <h3 class="text-sm font-bold text-white">${stat.label}</h3>
              <p class="text-xs text-emerald-200/75 leading-relaxed">${stat.subtext}</p>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 4. HIGHLIGHTS & FEATURED PRODUCTS          -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span class="text-xs uppercase font-black tracking-widest text-emerald-800 block mb-1">Sustainable Stock Items</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
              Flagship Packaging Solutions
            </h2>
          </div>
          <a href="#showcase" class="inline-flex items-center gap-2 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors">
            <span>Explore All 46 in The Eco-Showcase</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featured.slice(0, 6).map(prod => `
            <div class="bg-white rounded-3xl border-2 border-[#EBDDC8] overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between group">
              
              <!-- Card Visual Header -->
              <div class="relative bg-gradient-to-b from-[#FBF8F3] to-[#F4EFE6] p-6 flex items-center justify-center h-64 border-b border-[#EBDDC8] overflow-hidden">
                <span class="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full shadow-xs">
                  ${prod.badge || 'FSC® Certified'}
                </span>
                
                <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  ${getProductSvg(prod.svgType, 'card')}
                </div>

                <!-- Quick View Trigger -->
                <button data-quickview-id="${prod.id}" class="btn-trigger-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-800 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Quick View</span>
                </button>
              </div>

              <!-- Product Details Body -->
              <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span class="uppercase tracking-wider font-bold text-emerald-900">${prod.categoryName}</span>
                    <span class="font-semibold bg-[#F6EFE3] px-2 py-0.5 rounded text-stone-800">MOQ: ${prod.moq} pcs</span>
                  </div>
                  <h3 class="text-lg font-bold text-stone-950 group-hover:text-emerald-900 transition-colors leading-snug font-serif">
                    <a href="#product/${prod.id}">${prod.name}</a>
                  </h3>
                  <p class="text-xs text-stone-600 mt-1 line-clamp-2">${prod.subtitle}</p>
                </div>

                <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span class="text-[10px] text-stone-400 block -mb-0.5">Starting at</span>
                    <span class="text-xl font-black text-stone-950">$${prod.price.toFixed(2)}</span>
                    <span class="text-xs text-stone-500">/ ${prod.unit}</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <button data-add-quick-id="${prod.id}" class="btn-card-quick-add px-4 py-2 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5" title="Add Minimum Order to Cart">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                      <span>Add</span>
                    </button>
                    <a href="#product/${prod.id}" class="p-2 text-stone-400 hover:text-stone-900 hover:bg-[#F6EFE3] rounded-xl transition-colors" title="View Full Specs">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 5. CLIENT TRUST & TESTIMONIALS             -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-2">Client Trust</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight font-serif">
            Loved by 2,400+ Sustainable Businesses
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          ${TESTIMONIALS.map(t => `
            <div class="bg-[#FAF8F5] rounded-3xl p-8 border-2 border-[#EBDDC8] shadow-xs flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="flex items-center gap-1 text-emerald-700 text-sm">
                  ★ ★ ★ ★ ★
                </div>
                <p class="text-stone-800 text-sm sm:text-base leading-relaxed italic font-serif">
                  "${t.quote}"
                </p>
              </div>

              <div class="pt-4 border-t border-[#DEC6A6] flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-stone-900">${t.author}</h4>
                  <p class="text-[11px] text-stone-500">${t.role} • ${t.company}</p>
                </div>
                <span class="text-[11px] font-bold text-emerald-950 bg-emerald-100 px-3 py-1 rounded-full">
                  ${t.highlight}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

    </div>
  `;
}

function initHomeView() {
  initBoxVisualizer();

  // Quick View triggers
  document.querySelectorAll('.btn-trigger-quickview').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-quickview-id');
      window.dispatchEvent(new CustomEvent('open-quickview', { detail: { productId: id } }));
    });
  });

  // Quick Add from Home cards
  document.querySelectorAll('.btn-card-quick-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-add-quick-id');
      (() => {
        const prod = getProductById(id);
        if (prod) {
          cart.addItem(prod, prod.moq);
        }
      });
    });
  });
}


// === Module: src/views/ShowcaseView.js ===
function renderShowcaseView() {
  return `
    <div class="bg-white min-h-screen text-stone-900 pb-28">
      
      <!-- =============================================================== -->
      <!-- 1. HERO HEADER: EARTH ECOSYSTEM & GLOBAL WARMING MASTER DIRECTORY -->
      <!-- =============================================================== -->
      <section class="relative bg-gradient-to-b from-[#FBF8F3] via-[#FAF8F5] to-white py-16 sm:py-24 border-b border-[#EBDDC8] overflow-hidden">
        
        <!-- Subtle decorative ambient elements -->
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Comprehensive Scientific Catalog • All 46 Products</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-black tracking-tight text-stone-950 font-serif max-w-4xl mx-auto leading-tight">
            Earth Eco-System & <span class="italic text-emerald-800">Global Warming Directory</span>
          </h1>

          <p class="text-stone-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            A dedicated, transparent scientific archive of all <strong>46 plastic-free packaging innovations</strong>. 
            For every product, explore the <strong>material history</strong>, discover how it <strong>safeguards Earth's terrestrial and marine ecosystems</strong>, and inspect its <strong>verified carbon metrics that combat global warming</strong>.
          </p>

          <!-- 4 Global Impact Pillars -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 max-w-5xl mx-auto text-left">
            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🌊 Ocean Protection</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">0% Microplastics</div>
              <p class="text-[11px] text-stone-600 leading-snug">Pure plant cellulose & agricultural waste naturally bio-assimilate without plastic residue.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🌡️ Global Warming</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">-72% CO₂e Average</div>
              <p class="text-[11px] text-stone-600 leading-snug">Replaces petroleum cracking with renewable plant fibers that store atmospheric carbon.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🌱 Soil Regeneration</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">30–90 Days Humus</div>
              <p class="text-[11px] text-stone-600 leading-snug">Composts harmlessly into nutrient-rich organic matter that nourishes soil microbiomes.</p>
            </div>

            <div class="p-4 rounded-2xl bg-white border border-[#EBDDC8] shadow-xs space-y-1">
              <div class="flex items-center gap-2 text-emerald-800 font-extrabold text-xs">
                <span>🔄 Circular Milling</span>
              </div>
              <div class="text-xl font-black text-stone-900 font-serif">100% Repulpable</div>
              <p class="text-[11px] text-stone-600 leading-snug">Dissolves in standard mill hydro-pulpers; recyclable up to 7 consecutive lifecycles.</p>
            </div>
          </div>

          <!-- Interactive Live Volume Climate Calculator Bar -->
          <div class="mt-8 p-6 bg-[#F6EFE3] border border-[#DEC6A6] rounded-3xl max-w-4xl mx-auto shadow-sm text-left">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#DEC6A6]/80">
              <div>
                <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-900 block">🧮 Interactive Impact Estimator</span>
                <h3 class="text-base font-bold text-stone-900">Estimate Your Brand's Environmental Savings with PackNStir</h3>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-stone-600 font-semibold">Monthly Units:</span>
                <select id="calc-volume-select" class="px-3 py-1.5 bg-white border border-stone-300 rounded-xl text-xs font-bold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700">
                  <option value="500">500 units/mo</option>
                  <option value="2500" selected>2,500 units/mo</option>
                  <option value="10000">10,000 units/mo</option>
                  <option value="50000">50,000 units/mo</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center sm:text-left">
              <div class="p-3 bg-white rounded-2xl border border-[#EBDDC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">CO₂e Atmospheric Savings</span>
                <span id="calc-co2-val" class="text-2xl font-black text-emerald-800 font-serif">3,125 kg</span>
                <span class="text-[11px] text-stone-500 block mt-0.5">Equivalent to ~7,750 miles not driven</span>
              </div>
              <div class="p-3 bg-white rounded-2xl border border-[#EBDDC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Ocean Plastic Avoided</span>
                <span id="calc-plastic-val" class="text-2xl font-black text-emerald-800 font-serif">625,000 g</span>
                <span class="text-[11px] text-stone-500 block mt-0.5">Over 31,000 plastic polybags replaced</span>
              </div>
              <div class="p-3 bg-white rounded-2xl border border-[#EBDDC8]">
                <span class="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">Soil Organic Matter Returned</span>
                <span id="calc-soil-val" class="text-2xl font-black text-emerald-800 font-serif">100% Repulpable</span>
                <span class="text-[11px] text-stone-500 block mt-0.5">Zero toxic microplastics in farmland</span>
              </div>
            </div>
          </div>

          <!-- Category Quick-Jump Nav -->
          <div class="pt-6 flex items-center justify-center gap-2 flex-wrap text-xs font-bold">
            <button data-cat="all" class="showcase-nav-pill active px-4 py-2.5 rounded-xl bg-emerald-900 text-white shadow-sm transition-all cursor-pointer">
              All 46 Packaging Formats
            </button>
            ${CATEGORIES.map(c => `
              <button data-cat="${c.id}" class="showcase-nav-pill px-4 py-2.5 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 border border-[#DEC6A6] transition-all cursor-pointer">
                ${c.shortName} (${c.itemCount})
              </button>
            `).join('')}
          </div>

          <!-- Live Search Bar within Directory -->
          <div class="pt-2 max-w-lg mx-auto">
            <div class="relative">
              <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <input type="text" id="showcase-search" placeholder="Search by name, material history, ecosystem benefit, or global warming stat..." class="w-full pl-10 pr-4 py-3 bg-white border border-[#DEC6A6] rounded-2xl text-xs text-stone-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-emerald-700" />
            </div>
          </div>
        </div>
      </section>

      <!-- =============================================================== -->
      <!-- 2. SCROLL-TRIGGERED 46 PRODUCT STORY & ECOSYSTEM/CLIMATE GRID   -->
      <!-- =============================================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#EBDDC8] gap-4">
          <div>
            <h2 class="text-xl font-extrabold text-stone-900 font-serif">Documented Products Catalog</h2>
            <p class="text-xs text-stone-500 mt-0.5">Showing all verified materials with history, ecosystem protection, and carbon data.</p>
          </div>
          <span id="showcase-count-badge" class="px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 font-bold text-xs">
            Showing 46 of 46 Products
          </span>
        </div>

        <div id="showcase-cards-container" class="space-y-16 pt-10">
          <!-- Rendered dynamically by initShowcaseView() -->
        </div>
      </section>

    </div>
  `;
}

function initShowcaseView() {
  const container = document.getElementById('showcase-cards-container');
  const searchInput = document.getElementById('showcase-search');
  const navPills = document.querySelectorAll('.showcase-nav-pill');
  const countBadge = document.getElementById('showcase-count-badge');
  const volumeSelect = document.getElementById('calc-volume-select');

  if (!container) return;

  let activeCat = 'all';
  let searchQuery = '';

  // Interactive Live Volume Calculator
  if (volumeSelect) {
    const calcCo2 = document.getElementById('calc-co2-val');
    const calcPlastic = document.getElementById('calc-plastic-val');

    volumeSelect.addEventListener('change', () => {
      const vol = parseInt(volumeSelect.value, 10) || 2500;
      const co2 = Math.round(vol * 1.25);
      const plastic = Math.round(vol * 250);

      if (calcCo2) calcCo2.textContent = `${co2.toLocaleString()} kg`;
      if (calcPlastic) calcPlastic.textContent = `${plastic.toLocaleString()} g`;
    });
  }

  function renderCards() {
    let filtered = PRODUCTS;
    if (activeCat !== 'all') {
      filtered = filtered.filter(p => p.category === activeCat);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        (p.history && p.history.toLowerCase().includes(q)) ||
        (p.ecosystemBenefits && p.ecosystemBenefits.toLowerCase().includes(q)) ||
        (p.globalWarmingImpact && p.globalWarmingImpact.toLowerCase().includes(q)) ||
        (p.environmentalImpact && p.environmentalImpact.toLowerCase().includes(q)) ||
        p.material.toLowerCase().includes(q)
      );
    }

    if (countBadge) {
      countBadge.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Products`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="text-center py-24 bg-[#FBF8F3] rounded-3xl border border-[#EBDDC8]">
          <p class="text-base font-bold text-stone-800">No matching packaging formats found.</p>
          <p class="text-xs text-stone-500 mt-1">Try another search term or click "All 46 Packaging Formats".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((prod, index) => {
      const isReversed = index % 2 === 1;
      const co2Val = prod.co2SavedKg ? `${prod.co2SavedKg.toFixed(2)} kg CO₂e` : '1.25 kg CO₂e';
      const plasticVal = prod.plasticAvoidedGrams ? `${prod.plasticAvoidedGrams} g` : '180 g';
      const decompVal = prod.decompositionDays || '60–90 days';

      return `
        <article id="product-${prod.id}" class="showcase-item bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#EBDDC8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            <!-- Column A: Visual Representation & Metric Badges (5 cols) -->
            <div class="lg:col-span-5 bg-gradient-to-br from-[#FBF8F3] to-[#F4EFE6] p-8 sm:p-10 flex flex-col justify-between items-center relative border-b lg:border-b-0 ${isReversed ? 'lg:order-2 lg:border-l' : 'lg:border-r'} border-[#EBDDC8]">
              
              <!-- Top Badges -->
              <div class="w-full flex items-center justify-between gap-2 z-10">
                <span class="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full shadow-xs">
                  ${prod.badge || 'FSC® Certified'}
                </span>
                <span class="text-[11px] font-mono text-stone-500 font-semibold">
                  SKU #PNS-${String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <!-- Product Graphic -->
              <div class="w-full h-56 sm:h-64 flex items-center justify-center my-4 transform group-hover:scale-105 transition-transform duration-500">
                ${getProductSvg(prod.svgType, 'showcase')}
              </div>

              <!-- 3 Scientific Metrics Badges -->
              <div class="w-full grid grid-cols-3 gap-2 pt-4 border-t border-[#DEC6A6]/80 text-center">
                <div class="p-2 bg-white rounded-xl border border-[#EBDDC8]">
                  <span class="text-[9px] uppercase font-bold text-stone-500 block">CO₂e Saved</span>
                  <span class="text-xs font-black text-emerald-800 block">${co2Val}</span>
                </div>
                <div class="p-2 bg-white rounded-xl border border-[#EBDDC8]">
                  <span class="text-[9px] uppercase font-bold text-stone-500 block">Plastic Avoided</span>
                  <span class="text-xs font-black text-emerald-800 block">${plasticVal}</span>
                </div>
                <div class="p-2 bg-white rounded-xl border border-[#EBDDC8]">
                  <span class="text-[9px] uppercase font-bold text-stone-500 block">Degradation</span>
                  <span class="text-xs font-black text-stone-800 block truncate" title="${decompVal}">${decompVal}</span>
                </div>
              </div>

            </div>

            <!-- Column B: History, Ecosystem Benefits & Global Warming Impact (7 cols) -->
            <div class="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-5 ${isReversed ? 'lg:order-1' : ''}">
              
              <div class="space-y-4">
                
                <!-- Category and Title -->
                <div>
                  <div class="flex items-center gap-2 mb-1.5">
                    <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800">${prod.categoryName}</span>
                    <span class="text-stone-300">•</span>
                    <span class="text-xs text-stone-500 font-medium">${prod.material.split('(')[0]}</span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-extrabold text-stone-950 font-serif leading-tight">
                    <a href="#product/${prod.id}" class="hover:text-emerald-800 transition-colors">${prod.name}</a>
                  </h2>
                  <p class="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    ${prod.subtitle}
                  </p>
                </div>

                <!-- 1. MATERIAL & INDUSTRIAL HISTORY -->
                <div class="p-4 sm:p-5 rounded-2xl bg-[#FBF8F3] border border-[#DEC6A6] space-y-1 relative">
                  <div class="flex items-center gap-2 text-stone-900 font-serif font-bold text-xs uppercase tracking-wider">
                    <span>📜 Origin & Material History</span>
                  </div>
                  <p class="text-xs text-stone-700 leading-relaxed font-sans">
                    ${prod.history}
                  </p>
                </div>

                <!-- 2. HOW IT HELPS EARTH'S ECOSYSTEM (Ocean, Soil & Wildlife) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-teal-50/70 border-2 border-teal-600/40 space-y-1 relative">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-teal-950 font-bold text-xs uppercase tracking-wider">
                      <span class="w-2 h-2 rounded-full bg-teal-600"></span>
                      <span>🌊 Protection of Earth's Ecosystem (Oceans, Soil & Wildlife)</span>
                    </div>
                    <span class="text-[10px] font-black text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-full">0% Microplastics</span>
                  </div>
                  <p class="text-xs text-teal-950 font-medium leading-relaxed font-sans">
                    ${prod.ecosystemBenefits || prod.environmentalImpact}
                  </p>
                </div>

                <!-- 3. HOW IT COMBATS GLOBAL WARMING & CLIMATE CHANGE (CO2e & Carbon Sink) -->
                <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-700/50 space-y-1 relative">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                      <span class="w-2 h-2 rounded-full bg-emerald-700"></span>
                      <span>🌡️ Combating Global Warming & Climate Change</span>
                    </div>
                    <span class="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">Saves ${co2Val}</span>
                  </div>
                  <p class="text-xs text-emerald-950 font-medium leading-relaxed font-sans">
                    ${prod.globalWarmingImpact || 'Reduces fossil fuel cracking emissions by utilizing renewable biogenic cellulose that sequesters atmospheric carbon during growth cycles.'}
                  </p>
                </div>

                <!-- Eco Badges tags -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  ${prod.ecoBadges.map(badge => `
                    <span class="text-[10px] font-semibold bg-[#F6EFE3] text-emerald-950 px-2 py-0.5 rounded-md border border-[#DEC6A6]">
                      ✓ ${badge}
                    </span>
                  `).join('')}
                </div>

              </div>

              <!-- Action CTAs -->
              <div class="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div class="text-xs text-stone-500 font-medium">
                  Standard sizing: <span class="text-stone-900 font-semibold">${prod.dimensionsPreset}</span>
                </div>

                <div class="flex items-center gap-3 w-full sm:w-auto">
                  <button data-quick-add-id="${prod.id}" class="btn-showcase-add flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white font-bold text-xs shadow-md shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                    <span>Order Batch (${prod.moq} pcs)</span>
                  </button>

                  <a href="#product/${prod.id}" class="px-4 py-2.5 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold text-xs border border-stone-300 transition-colors flex items-center justify-center gap-1.5">
                    <span>Technical PDP</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </article>
      `;
    }).join('');

    // Re-attach quick add event listeners
    const addBtns = container.querySelectorAll('.btn-showcase-add');
    addBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const pId = btn.getAttribute('data-quick-add-id');
        const product = PRODUCTS.find(p => p.id === pId);
        if (!product) return;

        cart.addItem(product, product.moq);

        const originalText = btn.innerHTML;
        btn.classList.remove('bg-emerald-800', 'hover:bg-emerald-900');
        btn.classList.add('bg-stone-900', 'text-emerald-300');
        btn.innerHTML = `<span>✓ Added ${product.moq} pcs</span>`;

        setTimeout(() => {
          btn.classList.add('bg-emerald-800', 'hover:bg-emerald-900');
          btn.classList.remove('bg-stone-900', 'text-emerald-300');
          btn.innerHTML = originalText;
        }, 1500);
      });
    });

    // ScrollTrigger GSAP animation
    if (window.gsap && window.ScrollTrigger) {
      window.ScrollTrigger.batch('.showcase-item', {
        interval: 0.1,
        batchMax: 3,
        onEnter: (batch) => {
          window.gsap.fromTo(batch, 
            { opacity: 0, y: 35 }, 
            { opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out', overwrite: 'auto' }
          );
        },
        once: true
      });
    }
  }

  // Initial render
  renderCards();

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  // Category navigation pills
  navPills.forEach(pill => {
    pill.addEventListener('click', () => {
      navPills.forEach(p => {
        p.classList.remove('active', 'bg-emerald-900', 'text-white');
        p.classList.add('bg-[#F6EFE3]', 'text-stone-800');
      });
      pill.classList.add('active', 'bg-emerald-900', 'text-white');
      pill.classList.remove('bg-[#F6EFE3]', 'text-stone-800');

      activeCat = pill.getAttribute('data-cat') || 'all';
      renderCards();
    });
  });

  // Check if hash has an anchor e.g. #product-single-wall-boxes
  const currentHash = window.location.hash;
  if (currentHash.includes('#product-')) {
    const targetId = currentHash.split('#product-')[1];
    setTimeout(() => {
      const el = document.getElementById(`product-${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  }
}


// === Module: src/views/ProductsView.js ===
function renderProductsView(activeCategory = 'all', searchQuery = '') {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 bg-white">
      
      <!-- Catalog Page Header -->
      <div class="bg-gradient-to-r from-[#1E3A2F] to-[#12271E] text-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-8 -top-8 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-2xl space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 text-emerald-300 text-xs font-bold border border-emerald-700/60">
            <span>PackNStir Complete Shop</span> • <span>46 Formats Available</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-serif text-white">
            E-Commerce Packaging Catalog
          </h1>
          <p class="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
            Filter our exhaustive database of 46 plastic-free paper, corrugated, sugarcane, and cellulose solutions. All available in stock or bespoke custom dimensions.
          </p>
        </div>
      </div>

      <!-- Dedicated Eco-System & Global Warming Master Page Callout -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-[#F6EFE3] via-white to-emerald-50 border border-[#DEC6A6] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs">
        <div class="flex items-center gap-2.5">
          <span class="text-xl">🌍</span>
          <span class="text-stone-800 font-semibold">Looking for the detailed material history, ocean/soil preservation, and CO₂e carbon reduction metrics for all 46 products?</span>
        </div>
        <a href="#eco-impact" class="font-extrabold text-emerald-900 hover:text-emerald-700 underline flex-shrink-0 flex items-center gap-1">
          <span>Explore Eco-System & Global Warming Directory →</span>
        </a>
      </div>

      <!-- Filter Controls & Search Toolbar -->
      <div class="bg-[#FAF8F5] rounded-3xl p-5 sm:p-6 border-2 border-[#EBDDC8] shadow-xs space-y-5">
        
        <!-- Top Toolbar: Search & Sort -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          <!-- Search Bar -->
          <div class="relative flex-1 max-w-md">
            <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="catalog-search-input" value="${searchQuery}" placeholder="Search single wall, mailers, bagasse, honeycomb, strapping..." class="w-full pl-10 pr-4 py-3 bg-white border border-[#DEC6A6] rounded-2xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-2xs" />
          </div>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-3 justify-end">
            <span class="text-xs text-stone-600 font-bold hidden sm:inline">Sort by:</span>
            <select id="catalog-sort-select" class="text-xs font-bold px-3.5 py-3 bg-white border border-[#DEC6A6] rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-900 shadow-2xs">
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="moq-asc">MOQ: Low to High</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>

        <!-- Category Tabs matching the 5 exact required filter buckets -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold pt-2 border-t border-[#EBDDC8]">
          <button data-cat="all" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            All (${PRODUCTS.length})
          </button>
          
          <button data-cat="boxes" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'boxes' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            📦 Boxes (9)
          </button>

          <button data-cat="postal" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'postal' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            ✉️ Postal (7)
          </button>

          <button data-cat="takeaway" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'takeaway' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            🥗 Takeaway (10)
          </button>

          <button data-cat="protective" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'protective' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            🛡️ Protective (8)
          </button>

          <button data-cat="tape-bags" class="cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'tape-bags' ? 'bg-emerald-800 text-white shadow-sm' : 'bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]'}">
            🏷️ Tape/Bags (12)
          </button>
        </div>

      </div>

      <!-- Results Count Status -->
      <div class="flex items-center justify-between text-xs text-stone-600 font-bold px-1">
        <span id="catalog-results-count">Showing products</span>
        <span class="text-emerald-800">🌱 100% Zero-Plastic Guarantee</span>
      </div>

      <!-- Product Cards Grid -->
      <div id="catalog-products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Rendered via JS -->
      </div>

    </div>
  `;
}

function initProductsView(initialCategory = 'all', initialSearch = '') {
  let currentCategory = initialCategory;
  let currentSearch = initialSearch;
  let currentSort = 'featured';

  const grid = document.getElementById('catalog-products-grid');
  const searchInput = document.getElementById('catalog-search-input');
  const sortSelect = document.getElementById('catalog-sort-select');
  const resultsCount = document.getElementById('catalog-results-count');
  const catButtons = document.querySelectorAll('.cat-pill-btn');

  function filterAndRender() {
    let list = currentCategory === 'all' ? [...PRODUCTS] : getProductsByCategory(currentCategory);

    // Apply search filter
    if (currentSearch.trim()) {
      const q = currentSearch.toLowerCase().trim();
      list = list.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.categoryName.toLowerCase().includes(q)
      );
    }

    // Apply sorting
    if (currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'moq-asc') {
      list.sort((a, b) => a.moq - b.moq);
    } else if (currentSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else {
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    if (resultsCount) {
      resultsCount.textContent = `Showing ${list.length} of ${PRODUCTS.length} sustainable packaging formats`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-[#FAF8F5] rounded-3xl border border-[#EBDDC8]">
          <h3 class="text-base font-bold text-stone-900 mb-1">No matching packaging formats found</h3>
          <p class="text-xs text-stone-500 max-w-sm mx-auto mb-4">Try searching for "box", "bagasse", "mailer", or click "All" above.</p>
          <button id="btn-reset-filters" class="px-5 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-xl shadow">Reset Filters</button>
        </div>
      `;
      const btnReset = document.getElementById('btn-reset-filters');
      if (btnReset) {
        btnReset.addEventListener('click', () => {
          currentCategory = 'all';
          currentSearch = '';
          if (searchInput) searchInput.value = '';
          updateCategoryTabs();
          filterAndRender();
        });
      }
      return;
    }

    grid.innerHTML = list.map(prod => `
      <div class="bg-white rounded-3xl border-2 border-[#EBDDC8] overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-700 transition-all duration-300 flex flex-col justify-between group">
        
        <!-- Image Area -->
        <div class="relative bg-gradient-to-b from-[#FBF8F3] to-[#F4EFE6] p-5 flex items-center justify-center h-52 border-b border-[#EBDDC8] overflow-hidden">
          <span class="absolute top-3 left-3 z-10 text-[9px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full shadow-xs">
            ${prod.badge || 'FSC® Certified'}
          </span>
          
          <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            ${getProductSvg(prod.svgType, 'grid')}
          </div>

          <!-- Quick View Trigger -->
          <button data-quickview-id="${prod.id}" class="btn-grid-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-800 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Content Area -->
        <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] text-stone-500 mb-1">
              <span class="uppercase tracking-wider font-extrabold text-emerald-900">${prod.categoryName}</span>
              <span class="bg-[#F6EFE3] px-2 py-0.5 rounded font-bold text-stone-800">MOQ: ${prod.moq} pcs</span>
            </div>
            <h3 class="text-sm font-bold text-stone-950 group-hover:text-emerald-900 transition-colors leading-snug font-serif">
              <a href="#product/${prod.id}">${prod.name}</a>
            </h3>
            <p class="text-[11px] text-stone-600 mt-1 line-clamp-2">${prod.subtitle}</p>
            <div class="mt-2 text-[10px] text-stone-500 font-medium">
              Material: <span class="text-stone-900 font-semibold">${prod.material.split('(')[0]}</span>
            </div>
            <div class="mt-2 flex items-center justify-between text-[10px] pt-1">
              <span class="text-emerald-900 font-extrabold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                🌱 Saves ${(prod.co2SavedKg || 1.25).toFixed(1)}kg CO₂
              </span>
              <a href="#eco-impact#product-${prod.id}" class="text-stone-500 hover:text-emerald-800 font-bold underline" title="Read material history & ecosystem impact">
                Eco Report →
              </a>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-3 border-t border-[#EBDDC8] flex items-center justify-between">
            <div>
              <span class="text-[10px] text-stone-400 block -mb-1">From</span>
              <span class="text-base font-black text-stone-950">$${prod.price.toFixed(2)}</span>
              <span class="text-[10px] text-stone-500">/ ${prod.unit}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <button data-add-prod-id="${prod.id}" class="btn-grid-add px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1" title="Add MOQ to Cart">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                <span>Add</span>
              </button>
              <a href="#product/${prod.id}" class="p-2 text-stone-400 hover:text-stone-900 hover:bg-[#F6EFE3] rounded-xl transition-colors" title="View Full Specifications">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    `).join('');

    // Attach event listeners
    grid.querySelectorAll('.btn-grid-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-quickview-id');
        window.dispatchEvent(new CustomEvent('open-quickview', { detail: { productId: id } }));
      });
    });

    grid.querySelectorAll('.btn-grid-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-add-prod-id');
        const prod = PRODUCTS.find(p => p.id === id);
        if (prod) {
          cart.addItem(prod, prod.moq);
        }
      });
    });
  }

  function updateCategoryTabs() {
    catButtons.forEach(btn => {
      const cat = btn.getAttribute('data-cat');
      if (cat === currentCategory) {
        btn.className = 'cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap bg-emerald-800 text-white shadow-sm';
      } else {
        btn.className = 'cat-pill-btn px-4 py-2.5 rounded-xl transition-all whitespace-nowrap bg-white text-stone-700 border border-[#DEC6A6] hover:bg-[#F6EFE3]';
      }
    });
  }

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      updateCategoryTabs();
      filterAndRender();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRender();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  filterAndRender();
}


// === Module: src/views/ProductDetailView.js ===
function renderProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];
  const co2Base = product.co2SavedKg || 1.25;
  const plasticBase = product.plasticAvoidedGrams || 180;
  const decompBase = product.decompositionDays || '60–90 days';

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 bg-white">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center text-xs font-bold text-stone-500 gap-2">
        <a href="#home" class="hover:text-emerald-800 transition-colors">Home</a>
        <span>/</span>
        <a href="#shop" class="hover:text-emerald-800 transition-colors">Shop</a>
        <span>/</span>
        <a href="#shop?category=${product.category}" class="hover:text-emerald-800 transition-colors">${product.categoryName}</a>
        <span>/</span>
        <span class="text-stone-900 truncate max-w-xs">${product.name}</span>
      </nav>

      <!-- Main PDP Product Hero Section (Gallery + Configurator) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Gallery & Packaging Angle View Switcher (6 cols) -->
        <div class="lg:col-span-6 space-y-5">
          
          <!-- Main Visual Stage Box -->
          <div class="relative bg-gradient-to-b from-[#FBF8F3] to-[#F4EFE6] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 border-2 border-[#EBDDC8] shadow-xs flex items-center justify-center min-h-[380px] sm:min-h-[460px] overflow-hidden group">
            
            <!-- Top Badges -->
            <div class="absolute top-5 left-5 flex items-center gap-2 z-10">
              <span class="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 shadow-xs">
                ${product.badge || 'FSC® Certified'}
              </span>
              <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-white text-stone-700 border border-[#DEC6A6] shadow-xs hidden sm:inline-block">
                ${product.coating.split('(')[0]}
              </span>
            </div>

            <!-- Visual SVG Stage -->
            <div id="pdp-main-stage" class="w-full h-full max-h-80 flex items-center justify-center transition-all duration-300">
              ${getProductSvg(product.svgType, 'pdp')}
            </div>

            <div class="absolute bottom-4 right-4 text-[10px] text-stone-400 font-mono tracking-wider">
              PACKNSTIR • ZERO-PLASTIC GUARANTEE
            </div>
          </div>

          <!-- Angle Thumbnail Selector -->
          <div class="grid grid-cols-4 gap-3">
            <button data-view="perspective" class="pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-900">3D Angle</span>
            </button>

            <button data-view="open" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Open View</span>
            </button>

            <button data-view="dieline" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">CAD Dieline</span>
            </button>

            <button data-view="detail" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer">
              <div class="w-7 h-7 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Macro Zoom</span>
            </button>
          </div>

          <!-- Live Environmental Impact Hub on PDP -->
          <div class="p-6 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-[#FAF8F5] border-2 border-emerald-600/50 rounded-3xl space-y-4 shadow-xs">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-950">
                <span>🌍 Earth Eco-System & Global Warming Report</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">Zero-Plastic Certified</span>
            </div>

            <!-- Dynamic Savings Metric for selected batch -->
            <div class="grid grid-cols-3 gap-2.5 text-center pt-1">
              <div class="p-2.5 bg-white rounded-xl border border-emerald-200">
                <span class="text-[9px] uppercase font-bold text-stone-500 block">CO₂e Prevented</span>
                <span id="pdp-live-co2" class="text-sm sm:text-base font-black text-emerald-900 block">${(co2Base * product.moq).toFixed(1)} kg</span>
              </div>
              <div class="p-2.5 bg-white rounded-xl border border-emerald-200">
                <span class="text-[9px] uppercase font-bold text-stone-500 block">Plastic Avoided</span>
                <span id="pdp-live-plastic" class="text-sm sm:text-base font-black text-emerald-900 block">${((plasticBase * product.moq) / 1000).toFixed(1)} kg</span>
              </div>
              <div class="p-2.5 bg-white rounded-xl border border-emerald-200">
                <span class="text-[9px] uppercase font-bold text-stone-500 block">Soil Degradation</span>
                <span class="text-xs font-black text-stone-800 block truncate" title="${decompBase}">${decompBase}</span>
              </div>
            </div>

            <p class="text-xs text-emerald-950 font-medium leading-relaxed">
              ${product.ecosystemBenefits || product.environmentalImpact}
            </p>

            <div class="pt-2 border-t border-emerald-200/80 flex items-center justify-between text-xs">
              <span class="text-stone-500 text-[11px]">Scientific lifecycle verification:</span>
              <a href="#eco-impact#product-${product.id}" class="font-extrabold text-emerald-900 hover:text-emerald-700 underline flex items-center gap-1">
                <span>View Full Scientific Directory Entry →</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Right: Specifications & Interactive Configurator (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-extrabold uppercase tracking-widest text-emerald-900">${product.categoryName}</span>
              <span class="text-stone-300">•</span>
              <span class="text-xs font-mono text-stone-500">ID: ${product.id}</span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-stone-950 font-serif leading-tight">
              ${product.name}
            </h1>
            <p class="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              ${product.subtitle}
            </p>
          </div>

          <!-- Tier Pricing Matrix Table -->
          <div class="p-5 bg-[#FAF8F5] rounded-3xl border border-[#EBDDC8] space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-stone-900 uppercase tracking-wider font-mono">Wholesale Tier Pricing</span>
              <span class="text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded">Volume Discounts Auto-Applied</span>
            </div>

            <div class="grid grid-cols-4 gap-2 text-center text-xs">
              ${product.pricingTiers.map((t, idx) => `
                <button data-tier-qty="${t.qty}" class="btn-tier-select p-2 rounded-xl border ${idx === 0 ? 'border-emerald-800 bg-emerald-50/80 font-bold text-emerald-950 shadow-2xs' : 'border-[#DEC6A6] bg-white text-stone-800 hover:border-stone-400'} transition-all cursor-pointer">
                  <div class="text-[10px] text-stone-500 font-semibold">${t.qty.toLocaleString()}+ pcs</div>
                  <div class="text-sm font-black text-stone-900">$${t.pricePerUnit.toFixed(2)}</div>
                  <div class="text-[9px] text-emerald-800 font-bold">-${idx * 8}%</div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Interactive Order Configuration -->
          <div class="space-y-4 pt-2">
            
            <!-- Dimension Selector -->
            <div>
              <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Select Dimensions</label>
              <select id="pdp-select-size" class="w-full px-4 py-3 bg-white border border-[#DEC6A6] rounded-2xl text-xs font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-2xs">
                ${product.dimensionsAvailable.map(dim => `
                  <option value="${dim}">${dim}</option>
                `).join('')}
              </select>
            </div>

            <!-- Finish Option -->
            <div>
              <label class="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">Board Finish & Inks</label>
              <select id="pdp-select-finish" class="w-full px-4 py-3 bg-white border border-[#DEC6A6] rounded-2xl text-xs font-semibold text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-2xs">
                ${product.finishOptions.map(fin => `
                  <option value="${fin}">${fin}</option>
                `).join('')}
              </select>
            </div>

            <!-- Quantity Selector & Price Summary -->
            <div class="p-6 bg-white rounded-3xl border-2 border-[#EBDDC8] space-y-4 shadow-sm">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-stone-500 uppercase tracking-wider block">Quantity (MOQ: ${product.moq})</span>
                  <div class="flex items-center gap-3 mt-2">
                    <button id="pdp-qty-minus" class="w-10 h-10 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold flex items-center justify-center transition-colors cursor-pointer text-lg">-</button>
                    <input id="pdp-qty-input" type="number" min="${product.moq}" step="50" value="${product.moq}" class="w-24 text-center font-black text-stone-900 text-base py-2 border border-[#DEC6A6] rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700" />
                    <button id="pdp-qty-plus" class="w-10 h-10 rounded-xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold flex items-center justify-center transition-colors cursor-pointer text-lg">+</button>
                  </div>
                </div>

                <div class="text-right">
                  <span class="text-xs font-bold text-stone-500 uppercase tracking-wider block">Total Estimated</span>
                  <div class="mt-1">
                    <span id="pdp-active-total" class="text-3xl font-black text-emerald-900 font-serif">$${(product.price * product.moq).toFixed(2)}</span>
                    <span id="pdp-active-unit-price" class="block text-xs text-stone-500 font-semibold mt-0.5">$${product.price.toFixed(2)} / ${product.unit}</span>
                  </div>
                </div>
              </div>

              <!-- Primary Action Buttons -->
              <div class="space-y-3 pt-2">
                <button id="pdp-btn-add-cart" class="w-full py-4 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-extrabold text-sm shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-3 group cursor-pointer">
                  <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                  <span id="pdp-btn-add-text">Add ${product.moq.toLocaleString()} Units to Cart • $${(product.price * product.moq).toFixed(2)}</span>
                </button>

                <button id="btn-request-sample" class="w-full py-3 px-6 rounded-2xl bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-900 font-bold text-xs border border-[#DEC6A6] transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
                  <span>Request Unprinted Physical CAD Sample ($15)</span>
                </button>
              </div>
            </div>

            <!-- Custom B2B Quote & Eco Impact Links -->
            <div class="grid grid-cols-2 gap-3">
              <a href="#quote" class="py-3 text-center bg-white hover:bg-[#F6EFE3] border border-[#DEC6A6] rounded-xl text-xs font-bold text-stone-800 transition-colors">
                Request Custom CAD Quote
              </a>
              <a href="#eco-impact#product-${product.id}" class="py-3 text-center bg-white hover:bg-[#F6EFE3] border border-[#DEC6A6] rounded-xl text-xs font-bold text-emerald-900 transition-colors flex items-center justify-center gap-1.5">
                <span>🌍 View Full Eco Report →</span>
              </a>
            </div>
          </div>

        </div>

      </div>


      <!-- =============================================================== -->
      <!-- TABS: SPECS, ECOSYSTEM, GLOBAL WARMING, HISTORY & LOGISTICS    -->
      <!-- =============================================================== -->
      <div class="bg-white rounded-3xl sm:rounded-[36px] border-2 border-[#EBDDC8] p-6 sm:p-10 space-y-8 shadow-xs">
        
        <!-- Tabs Header -->
        <div class="flex items-center border-b border-[#EBDDC8] gap-8 overflow-x-auto text-xs font-bold text-stone-500 pb-3">
          <button data-tab="tab-specs" class="pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap cursor-pointer">
            Technical Specs
          </button>
          <button data-tab="tab-ecosystem" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer">
            🌊 Earth Eco-System Protection
          </button>
          <button data-tab="tab-climate" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer">
            🌡️ Global Warming & Carbon
          </button>
          <button data-tab="tab-history" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer">
            📜 Material Origins & History
          </button>
          <button data-tab="tab-shipping" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer">
            Production & Freight Lead Times
          </button>
        </div>

        <!-- TAB 1: SPECS -->
        <div id="tab-specs" class="pdp-tab-content space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Board Material</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.material}</span>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Weight / Caliper</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.boardWeight}</span>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Coating</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.coating}</span>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8]">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Dimensions</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.dimensionsPreset}</span>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-700">Engineering Highlights</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(product.features || []).map(f => `
                <div class="flex items-center gap-2.5 text-xs text-stone-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 2: EARTH ECO-SYSTEM PROTECTION -->
        <div id="tab-ecosystem" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-teal-50/70 border-2 border-teal-600/40 rounded-3xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-teal-950 font-serif">Protection of Earth's Ecosystems (Oceans, Soil & Wildlife)</h4>
              <span class="text-[10px] font-black text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">0% Microplastics</span>
            </div>
            <p class="text-xs sm:text-sm text-teal-950 font-medium leading-relaxed font-sans">
              ${product.ecosystemBenefits || product.environmentalImpact}
            </p>
            <div class="pt-3 border-t border-teal-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div class="p-3 bg-white rounded-xl border border-teal-200">
                <span class="font-bold text-teal-900 block">Marine & River Safety:</span>
                <span class="text-stone-600">Zero non-degradable polymer fragments; zero choking hazards for sea turtles & whales.</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-teal-200">
                <span class="font-bold text-teal-900 block">Soil Biome Enrichment:</span>
                <span class="text-stone-600">Bio-assimilated by subterranean fungi into rich organic compost in ${decompBase}.</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-teal-200">
                <span class="font-bold text-teal-900 block">Chemical Leaching:</span>
                <span class="text-stone-600">100% free of PFAS, BPA, phthalates, and heavy metal synthetic stabilizers.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 3: GLOBAL WARMING & CARBON METRICS -->
        <div id="tab-climate" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-emerald-50 border-2 border-emerald-700/50 rounded-3xl space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-emerald-950 font-serif">Combating Global Warming & Atmospheric Carbon Reduction</h4>
              <span class="text-[10px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">Saves ${co2Base.toFixed(2)} kg CO₂e / unit</span>
            </div>
            <p class="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed font-sans">
              ${product.globalWarmingImpact || 'Reduces fossil-fuel cracking emissions by utilizing renewable biogenic cellulose that sequesters atmospheric carbon during growth cycles.'}
            </p>
            <div class="pt-3 border-t border-emerald-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div class="p-3 bg-white rounded-xl border border-emerald-200">
                <span class="font-bold text-emerald-900 block">Fossil Fuel Displaced:</span>
                <span class="text-stone-600">Prevents extraction and catalytic cracking of petroleum crude oil.</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-emerald-200">
                <span class="font-bold text-emerald-900 block">Biogenic Carbon Sink:</span>
                <span class="text-stone-600">Traps atmospheric CO₂ absorbed during tree and agricultural crop growth.</span>
              </div>
              <div class="p-3 bg-white rounded-xl border border-emerald-200">
                <span class="font-bold text-emerald-900 block">Solar-Powered Milling:</span>
                <span class="text-stone-600">Converted in facilities operating on 100% rooftop solar and closed-loop water.</span>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 4: HISTORY -->
        <div id="tab-history" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-[#FAF8F5] border border-[#EBDDC8] rounded-3xl space-y-2">
            <h4 class="text-sm font-bold text-stone-950 font-serif">Origins, Inventions & Evolution of the Material</h4>
            <p class="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              ${product.history}
            </p>
          </div>
        </div>

        <!-- TAB 5: SHIPPING -->
        <div id="tab-shipping" class="pdp-tab-content hidden space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8] space-y-1">
              <span class="font-bold text-stone-900 block">Standard Stock Dispatch</span>
              <p class="text-stone-600">Dispatches within 24 to 48 hours via carbon-neutral road freight.</p>
            </div>
            <div class="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EBDDC8] space-y-1">
              <span class="font-bold text-stone-900 block">Custom Print & Sizing Runs</span>
              <p class="text-stone-600">Standard lead time is 7 to 10 business days following digital PDF proof sign-off.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

function initProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];
  const co2Base = product.co2SavedKg || 1.25;
  const plasticBase = product.plasticAvoidedGrams || 180;

  let currentQty = product.moq;
  let currentUnitPrice = product.price;

  const qtyInput = document.getElementById('pdp-qty-input');
  const qtyMinus = document.getElementById('pdp-qty-minus');
  const qtyPlus = document.getElementById('pdp-qty-plus');
  const unitPriceEl = document.getElementById('pdp-active-unit-price');
  const totalEl = document.getElementById('pdp-active-total');
  const btnAddText = document.getElementById('pdp-btn-add-text');
  const btnAddToCart = document.getElementById('pdp-btn-add-cart');
  const sizeSelect = document.getElementById('pdp-select-size');
  const finishSelect = document.getElementById('pdp-select-finish');
  const btnSample = document.getElementById('btn-request-sample');

  const liveCo2 = document.getElementById('pdp-live-co2');
  const livePlastic = document.getElementById('pdp-live-plastic');

  function recalculatePrice() {
    let matchedTier = product.pricingTiers[0];
    for (const tier of product.pricingTiers) {
      if (currentQty >= tier.qty) {
        matchedTier = tier;
      }
    }
    currentUnitPrice = matchedTier.pricePerUnit;
    const lineTotal = currentUnitPrice * currentQty;

    if (unitPriceEl) unitPriceEl.textContent = `$${currentUnitPrice.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${lineTotal.toFixed(2)}`;
    if (btnAddText) btnAddText.textContent = `Add ${currentQty.toLocaleString()} Units to Cart • $${lineTotal.toFixed(2)}`;

    // Live update carbon & ocean plastic avoided
    if (liveCo2) {
      liveCo2.textContent = `${(co2Base * currentQty).toFixed(1)} kg`;
    }
    if (livePlastic) {
      livePlastic.textContent = `${((plasticBase * currentQty) / 1000).toFixed(1)} kg`;
    }

    document.querySelectorAll('.btn-tier-select').forEach(btn => {
      const q = parseInt(btn.getAttribute('data-tier-qty'), 10);
      if (q === matchedTier.qty) {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-emerald-800 bg-emerald-50/80 font-bold text-emerald-950 transition-all shadow-2xs';
      } else {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-[#DEC6A6] bg-white text-stone-800 hover:border-stone-400 transition-all';
      }
    });
  }

  document.querySelectorAll('.btn-tier-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentQty = parseInt(e.currentTarget.getAttribute('data-tier-qty'), 10);
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  });

  if (qtyMinus) {
    qtyMinus.addEventListener('click', () => {
      currentQty = Math.max(product.moq, currentQty - 50);
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  if (qtyPlus) {
    qtyPlus.addEventListener('click', () => {
      currentQty += 50;
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  if (qtyInput) {
    qtyInput.addEventListener('change', (e) => {
      currentQty = Math.max(product.moq, parseInt(e.target.value, 10) || product.moq);
      qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const size = sizeSelect ? sizeSelect.value : product.dimensionsPreset;
      const finish = finishSelect ? finishSelect.value : product.finishOptions[0];

      cart.addItem(product, currentQty, {
        size,
        finish,
        customPrice: currentUnitPrice
      });

      if (window.gsap) {
        window.gsap.fromTo(btnAddToCart, { scale: 0.97 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
      }
    });
  }

  if (btnSample) {
    btnSample.addEventListener('click', () => {
      cart.addItem(product, 1, {
        size: 'Physical CAD Mockup',
        finish: 'Sample Swatch Book Included',
        customPrice: 15.00
      });
    });
  }

  // Thumbnails view switcher
  const stage = document.getElementById('pdp-main-stage');
  document.querySelectorAll('.pdp-thumb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pdp-thumb-btn').forEach(b => {
        b.className = 'pdp-thumb-btn p-3 rounded-2xl bg-white border border-[#DEC6A6] hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer';
      });
      btn.className = 'pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all cursor-pointer';

      const view = btn.getAttribute('data-view');
      if (stage && window.gsap) {
        window.gsap.to(stage, {
          opacity: 0.2,
          scale: 0.95,
          duration: 0.2,
          onComplete: () => {
            stage.innerHTML = getProductSvg(product.svgType, view);
            window.gsap.to(stage, { opacity: 1, scale: 1, duration: 0.35, ease: 'back.out(1.2)' });
          }
        });
      }
    });
  });

  // PDP Tabs
  document.querySelectorAll('.pdp-tab-trigger').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.pdp-tab-trigger').forEach(b => {
        b.className = 'pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap cursor-pointer';
      });
      tabBtn.className = 'pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap cursor-pointer';

      const targetId = tabBtn.getAttribute('data-tab');
      document.querySelectorAll('.pdp-tab-content').forEach(content => {
        content.classList.add('hidden');
      });
      const activeContent = document.getElementById(targetId);
      if (activeContent) {
        activeContent.classList.remove('hidden');
        if (window.gsap) {
          window.gsap.fromTo(activeContent, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
        }
      }
    });
  });

  recalculatePrice();
}


// === Module: src/views/AboutView.js ===
function renderAboutView() {
  return `
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 space-y-20">
        
        <!-- Mission Hero -->
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
            🌱 Zero-Plastic Manifesto
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif">
            Engineered for Beauty. Made to Disappear.
          </h1>
          <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
            At <strong class="text-stone-900 font-semibold">PackNStir</strong>, we believe packaging should never outlive the product it protects. Our mission is to permanently eliminate single-use plastics from global commerce by creating architectural, repulpable paperboard, molded fiber, and sugarcane packaging that decomposes back into nutrient-rich soil.
          </p>
          <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a href="#showcase" class="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2">
              <span>Explore The Eco-Heritage Showcase (46 Products)</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="#quote" class="px-5 py-2.5 bg-[#F6EFE3] hover:bg-[#EBDDC8] text-stone-800 font-bold text-xs rounded-xl border border-[#DEC6A6] transition-all">
              Request Custom CAD Prototype
            </a>
          </div>
        </div>

        <!-- Core Commitments Pillar Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EBDDC8] shadow-sm space-y-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">
              01
            </div>
            <h3 class="text-lg font-bold text-stone-900 font-serif">Zero Synthetic Plastics</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              We do not manufacture or sell packaging with polyethylene (PE) linings, petroleum bubble wrap, polyvinyl chloride (PVC), or EVA foam cavities. Every liner, window, and adhesive is derived from plant cellulose, tree resin, or corn starches.
            </p>
          </div>

          <div class="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EBDDC8] shadow-sm space-y-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl">
              02
            </div>
            <h3 class="text-lg font-bold text-stone-900 font-serif">Closed-Loop Agroforestry</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              100% of our virgin fiber is harvested from certified FSC® replenishing plantations where 3 saplings are planted for every mature tree harvested. Over 70% of our corrugated fluting comes from post-consumer recycled cardboard.
            </p>
          </div>

          <div class="bg-[#FAF8F5] rounded-3xl p-8 border border-[#EBDDC8] shadow-sm space-y-4 hover:shadow-md transition-all">
            <div class="w-12 h-12 rounded-2xl bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-xl">
              03
            </div>
            <h3 class="text-lg font-bold text-stone-900 font-serif">Architectural Craftsmanship</h3>
            <p class="text-xs text-stone-600 leading-relaxed">
              Sustainability without luxury is a compromise modern brands shouldn't have to make. We engineer crisp mitered v-grooves, satisfying magnetic snaps, and buttery soft-touch tactile varnishes that rival traditional luxury packaging.
            </p>
          </div>
        </div>

        <!-- Circular Life Cycle Diagram -->
        <div class="bg-stone-950 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-14 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div class="max-w-2xl mb-12">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block mb-2">The Closed-Loop Model</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold font-serif">From Forest Canopy to Soil Nutrient</h2>
            <p class="text-stone-400 text-xs sm:text-sm mt-3">
              How PackNStir's circular supply chain ensures zero landfill footprint at every touchpoint.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 01</span>
              <h4 class="text-sm font-bold text-white">Responsible Agroforestry</h4>
              <p class="text-[11px] text-stone-400">Certified FSC-managed forests capture carbon while supplying replenishing pine and birch pulp.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 02</span>
              <h4 class="text-sm font-bold text-white">Solar-Powered Milling</h4>
              <p class="text-[11px] text-stone-400">Pulp processed using closed-loop water treatment that recycles 94% of water and runs on 100% rooftop solar.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 03</span>
              <h4 class="text-sm font-bold text-white">Aqueous Coating & Soy Inks</h4>
              <p class="text-[11px] text-stone-400">Water-borne dispersion barriers replace plastic laminates; printed with heavy-metal-free vegetable soy inks.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 04</span>
              <h4 class="text-sm font-bold text-white">Brand Experience</h4>
              <p class="text-[11px] text-stone-400">Delivers an extraordinary sensory unboxing moment with structural integrity and zero plastic waste guilt.</p>
            </div>

            <div class="p-5 rounded-2xl bg-stone-900/60 border border-stone-800 space-y-2">
              <span class="text-emerald-400 font-mono text-xs font-bold">STAGE 05</span>
              <h4 class="text-sm font-bold text-white">Curbside Repulping</h4>
              <p class="text-[11px] text-stone-400">Customers toss box directly into paper recycling or home compost. Returns to soil nutrients in &lt; 90 days.</p>
            </div>
          </div>
        </div>

        <!-- Materials Deep Dive Guide -->
        <div class="space-y-8">
          <div class="text-center max-w-2xl mx-auto">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-1">Materials Science</span>
            <h2 class="text-3xl font-extrabold text-stone-900 font-serif">Comprehensive Sustainable Materials Guide</h2>
            <p class="text-stone-600 text-xs sm:text-sm mt-2">
              Understanding the physical properties, GSM calipers, and environmental classifications of our packaging substrates.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${MATERIALS_GUIDE.map(mat => `
              <div class="p-6 bg-[#FAF8F5] rounded-3xl border border-[#EBDDC8] shadow-sm space-y-3">
                <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ${mat.gsmRange}
                </span>
                <h3 class="text-base font-bold text-stone-900">${mat.name}</h3>
                <p class="text-xs text-stone-500 leading-relaxed">${mat.description}</p>
                
                <div class="pt-3 border-t border-[#EBDDC8] text-[11px] space-y-1">
                  <div><span class="font-bold text-stone-700">Ideal For:</span> <span class="text-stone-600">${mat.useCase}</span></div>
                  <div><span class="font-bold text-stone-700">Disposal:</span> <span class="text-emerald-800 font-semibold">${mat.sustainability}</span></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Certifications Matrix -->
        <div class="bg-[#F6EFE3] rounded-3xl p-8 sm:p-12 border border-[#DEC6A6] text-center space-y-6">
          <h3 class="text-xl sm:text-2xl font-bold text-stone-900 font-serif">Third-Party Environmental Verifications</h3>
          <p class="text-xs text-stone-600 max-w-xl mx-auto">
            We submit all paper grades, inks, and adhesives for strict independent laboratory analysis against international packaging benchmarks.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            ${CERTIFICATIONS.map(c => `
              <div class="p-4 bg-white rounded-2xl border border-[#EBDDC8] shadow-xs">
                <span class="text-xs font-bold text-emerald-900 block">${c.name}</span>
                <span class="text-[10px] font-mono text-stone-400 block mb-1">${c.code}</span>
                <p class="text-[11px] text-stone-500 leading-snug">${c.description}</p>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>
  `;
}

function initAboutView() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


// === Module: src/views/StoryView.js ===
function renderStoryView() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-20">
      
      <!-- Narrative Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
          📜 Our Journey Since 2018
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif">
          From a Single CAD Table to a Global Movement
        </h1>
        <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
          How two industrial designers and a polymer chemist set out to prove that paper and cardboard could outperform single-use plastics without sacrificing beauty, rigidity, or water resistance.
        </p>
      </div>

      <!-- Interactive Timeline Component -->
      <div class="relative max-w-4xl mx-auto">
        
        <!-- Center Timeline Line -->
        <div class="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-stone-300 -translate-x-1/2 hidden sm:block"></div>
        <div class="absolute left-6 top-4 bottom-4 w-0.5 bg-stone-300 sm:hidden"></div>

        <div class="space-y-12 sm:space-y-16">
          ${TIMELINE_MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return `
              <div class="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${isEven ? 'sm:flex-row-reverse' : ''}">
                
                <!-- Center Year Badge Marker -->
                <div class="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-950 border-4 border-[#FAF8F5] text-emerald-300 text-xs font-bold flex items-center justify-center shadow-md z-10">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>

                <!-- Content Card (50% width on desktop) -->
                <div class="w-full sm:w-1/2 pl-14 sm:pl-0">
                  <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 group">
                    <div class="flex items-center justify-between">
                      <span class="text-2xl font-black text-stone-900 font-serif">${milestone.year}</span>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                        ${milestone.tag}
                      </span>
                    </div>

                    <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                      ${milestone.title}
                    </h3>
                    <h4 class="text-xs font-bold text-stone-500 uppercase tracking-wide">
                      ${milestone.headline}
                    </h4>

                    <p class="text-xs text-stone-600 leading-relaxed">
                      ${milestone.description}
                    </p>

                    <!-- Milestone Stat Pill -->
                    <div class="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span class="text-stone-500 font-medium">Impact Milestone:</span>
                      <span class="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded">${milestone.stat}</span>
                    </div>
                  </div>
                </div>

                <!-- Empty space for balanced alternating layout -->
                <div class="hidden sm:block sm:w-1/2"></div>

              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Facility & Craft Spotlight -->
      <div class="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-14 border border-stone-800 shadow-2xl relative overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block">The Innovation Hub</span>
            <h2 class="text-2xl sm:text-4xl font-extrabold font-serif">
              A 120,000 Sq Ft Solar-Powered Packaging Laboratory
            </h2>
            <p class="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Located in the Pacific Northwest, our facility blends Swiss-engineered digital CAD sample cutters with cleanroom food-contact converting presses. 100% of our production energy is generated by rooftop solar arrays, and every paper scrap is recycled on-site in an enclosed loop.
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 text-xs font-semibold">
              <div class="p-3 bg-stone-900/80 rounded-xl border border-stone-800">
                <span class="block text-emerald-400 font-bold text-lg font-serif">100%</span>
                <span class="text-stone-400 text-[11px]">Rooftop Solar Energy</span>
              </div>
              <div class="p-3 bg-stone-900/80 rounded-xl border border-stone-800">
                <span class="block text-emerald-400 font-bold text-lg font-serif">94%</span>
                <span class="text-stone-400 text-[11px]">Water Recycled On-Site</span>
              </div>
              <div class="p-3 bg-stone-900/80 rounded-xl border border-stone-800">
                <span class="block text-emerald-400 font-bold text-lg font-serif">0</span>
                <span class="text-stone-400 text-[11px]">Landfill Waste Diverted</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex items-center justify-center">
            <div class="w-full bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80 space-y-3 text-center">
              <div class="w-16 h-16 rounded-2xl bg-emerald-900/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-serif">
                🌿
              </div>
              <h4 class="text-base font-bold text-white font-serif">Visit or Take a Virtual Facility Tour</h4>
              <p class="text-xs text-stone-400">
                Are you a brand packaging designer or operations lead? Schedule a walk-through of our CAD sample cutting tables and testing lab.
              </p>
              <a href="#quote" class="inline-block px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition-all">
                Schedule Studio Tour
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

function initStoryView() {
  // Timeline animations with GSAP if available
}


// === Module: src/views/ContactQuoteView.js ===
function renderContactQuoteView() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-20 bg-white">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800/60">
          📐 Bespoke Packaging Lab
        </span>
        <h1 class="text-4xl sm:text-5xl font-black text-stone-950 tracking-tight font-serif">
          Custom Dimensions & CAD Prototyping
        </h1>
        <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
          Need custom length, width, and depth ($L \times W \times D$)? Configure your exact structural packaging requirements below. Receive an instant estimate and a custom CAD dieline within 24 hours.
        </p>
      </div>

      <!-- Split Layout: Contact Info & Mission (Left) vs Interactive Configurator (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Studio Info, Engineer Contact & Timeline Highlights (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Direct Studio Info Box -->
          <div class="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border-2 border-[#EBDDC8] shadow-xs space-y-6">
            <h3 class="text-xl font-bold text-stone-950 font-serif">PackNStir Engineering Lab</h3>
            
            <div class="space-y-4 text-xs text-stone-600">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Innovation HQ & Mill:</span>
                  <span>482 Greenleaf Way, Suite 100, Portland, OR 97201</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Engineering Inquiries:</span>
                  <span>cad@packnstir.com</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-900 text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Phone Line:</span>
                  <span>+1 (800) 419-STIR (Mon - Fri, 8am - 6pm PST)</span>
                </div>
              </div>
            </div>

            <!-- Speak with a Packaging Engineer Badge -->
            <div class="p-4 bg-emerald-950 text-emerald-200 rounded-2xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-emerald-800 text-white font-black flex items-center justify-center text-xs flex-shrink-0">
                PNS
              </div>
              <div class="text-xs">
                <span class="font-bold text-white block">Dedicated Structural Engineer</span>
                <span>Assigned to review every custom submission within 4 business hours.</span>
              </div>
            </div>
          </div>

          <!-- Mission Timeline Highlights -->
          <div class="space-y-4">
            <h3 class="text-lg font-bold text-stone-950 font-serif">Our Zero-Plastic Mission Milestones</h3>
            <div class="space-y-3">
              ${TIMELINE_MILESTONES.slice(0, 3).map(m => `
                <div class="p-4 rounded-2xl bg-[#FBF8F3] border border-[#EBDDC8] text-xs space-y-1">
                  <div class="flex items-center justify-between">
                    <span class="font-black text-emerald-900 font-serif">${m.year}</span>
                    <span class="text-[10px] font-bold text-stone-500 uppercase tracking-wider">${m.tag}</span>
                  </div>
                  <h4 class="font-bold text-stone-900">${m.title}</h4>
                  <p class="text-stone-600 leading-snug">${m.headline}</p>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Right: Interactive Custom Quote Estimator (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border-2 border-[#EBDDC8] shadow-sm space-y-8">
          
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-800">Bespoke Estimator</span>
              <span class="text-xs font-mono text-stone-400">Step 1 of 4</span>
            </div>
            <h3 class="text-2xl font-black text-stone-950 font-serif">
              Configure Custom Specifications
            </h3>
          </div>

          <form id="custom-quote-form" class="space-y-6">
            
            <!-- STEP 1: Box Type Selection -->
            <div class="space-y-3">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. Select Packaging Architecture *
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <label class="quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50 cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="single-wall" checked class="hidden" />
                  <span class="text-xl">📦</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Single Wall Carton</span>
                  <span class="text-[10px] text-stone-500">B-Flute 125# Test</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="double-wall" class="hidden" />
                  <span class="text-xl">📦</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Double Wall Box</span>
                  <span class="text-[10px] text-stone-500">Heavy duty 275# 48 ECT</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="postal-mailer" class="hidden" />
                  <span class="text-xl">✉️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Die-Cut Mailer</span>
                  <span class="text-[10px] text-stone-500">Roll-end tuck front</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="takeaway-box" class="hidden" />
                  <span class="text-xl">🥗</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Takeaway / Food</span>
                  <span class="text-[10px] text-stone-500">Aqueous barrier coated</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="crash-lock" class="hidden" />
                  <span class="text-xl">⚡</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Crash-Lock Base</span>
                  <span class="text-[10px] text-stone-500">Auto instant assembly</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="custom-dieline" class="hidden" />
                  <span class="text-xl">📐</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Custom Geometry</span>
                  <span class="text-[10px] text-stone-500">Bespoke laser CAD dieline</span>
                </label>
              </div>
            </div>

            <!-- STEP 2: Custom Dimensions (LxWxD) -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                2. Interior Dimensions: Length × Width × Depth (LxWxD in mm) *
              </label>
              
              <div class="grid grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Length (mm)</label>
                  <input type="number" id="dim-length" value="300" min="50" max="1200" class="w-full text-xs font-bold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Width (mm)</label>
                  <input type="number" id="dim-width" value="200" min="50" max="1000" class="w-full text-xs font-bold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Depth (mm)</label>
                  <input type="number" id="dim-depth" value="100" min="20" max="800" class="w-full text-xs font-bold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Material Substrate</label>
                  <select id="quote-select-material" class="w-full text-xs font-semibold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="kraft-b">Natural Recycled Kraft (Single Wall B-Flute)</option>
                    <option value="kraft-bc">Heavy-Duty Double Wall (B/C Flute)</option>
                    <option value="kraft-e">Micro-Flute E-Flute (High Print Definition)</option>
                    <option value="bagasse">Thermoformed Sugarcane Bagasse Pulp</option>
                    <option value="white-sbs">FSC® Solid Bleached Sulfate White Paperboard</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Printing & Inks</label>
                  <select id="quote-select-print" class="w-full text-xs font-semibold px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="unprinted">Raw Natural (Unprinted)</option>
                    <option value="1color">1-Color Flexo Plant Soy Ink</option>
                    <option value="cmyk-ext">Full Exterior CMYK Soy Inks</option>
                    <option value="cmyk-both">Full Exterior & Interior CMYK Print</option>
                    <option value="foil">Metallic Foil Stamping (Gold/Copper)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- STEP 3: Quantity Slider -->
            <div class="space-y-3 pt-2">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  3. Order Quantity: <span id="quote-qty-display" class="text-emerald-900 font-black text-sm">2,500 units</span>
                </label>
                <span class="text-xs text-stone-500 font-semibold" id="quote-moq-notice">Standard Commercial Run</span>
              </div>
              <input type="range" id="quote-qty-slider" min="250" max="25000" step="250" value="2500" class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800" />
              <div class="flex justify-between text-[10px] text-stone-400 font-mono">
                <span>250 (MOQ)</span>
                <span>2,500 (Best Value)</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            <!-- STEP 4: Artwork Upload & Contact Details -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                4. Upload Artwork File & Contact
              </label>

              <!-- Drag & Drop File Upload Box -->
              <div id="drop-zone" class="border-2 border-dashed border-[#DEC6A6] hover:border-emerald-700 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-[#FAF8F5]">
                <input type="file" id="artwork-file-input" class="hidden" accept=".ai,.pdf,.eps,.psd,.svg,.png" />
                <div class="w-10 h-10 rounded-xl bg-white border border-[#EBDDC8] text-stone-600 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                </div>
                <div class="text-xs font-bold text-stone-800" id="file-upload-title">Drop your dieline or vector logo here</div>
                <div class="text-[11px] text-stone-500 mt-0.5">Supports .AI, .PDF, .EPS, .SVG (Up to 50MB)</div>
              </div>

              <!-- Contact Inputs -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <input type="text" id="quote-name" placeholder="Contact Name *" class="w-full text-xs px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <input type="email" id="quote-email" placeholder="Business Email *" class="w-full text-xs px-3 py-2.5 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
              </div>
              <div>
                <textarea id="quote-notes" rows="2" placeholder="Specific requirements (e.g., tear strip, food contact oil rating, target budget)..." class="w-full text-xs p-3 bg-[#FAF8F5] border border-[#DEC6A6] rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"></textarea>
              </div>
            </div>

            <!-- Price Preview Callout -->
            <div class="p-6 bg-[#1E3A2F] text-white rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <span class="text-[10px] text-emerald-300 uppercase font-mono font-bold block">Estimated Unit Price</span>
                <span id="est-unit-price" class="text-2xl sm:text-3xl font-black text-white">$0.48 - $0.56</span>
                <span class="text-xs text-emerald-100/70 block mt-0.5">Estimated Total: <span id="est-total-cost" class="font-bold text-emerald-300">$1,200.00</span></span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-emerald-950 bg-emerald-300 px-2.5 py-1 rounded-full font-bold">CAD Proof in 24h</span>
              </div>
            </div>

            <!-- Submit Button (Green CTA) -->
            <button type="submit" id="btn-submit-quote" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-sm rounded-2xl shadow-xl shadow-emerald-950/25 transition-all flex items-center justify-center gap-2">
              <span id="btn-quote-text">Submit Bespoke CAD Request</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>

            <!-- Success Notification -->
            <div id="quote-success-banner" class="hidden p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 text-xs space-y-1">
              <p class="font-bold">✓ Quote Request Received! Reference: <span id="quote-ref-id" class="font-mono font-black">#PNS-CAD-74291</span></p>
              <p>Our structural packaging engineer has been assigned to your file and will reply with a 3D digital PDF proof and formal quotation within 4 hours.</p>
            </div>

          </form>

        </div>

      </div>

    </div>
  `;
}

function initContactQuoteView() {
  const form = document.getElementById('custom-quote-form');
  const slider = document.getElementById('quote-qty-slider');
  const qtyDisplay = document.getElementById('quote-qty-display');
  const estUnitPrice = document.getElementById('est-unit-price');
  const estTotalCost = document.getElementById('est-total-cost');
  const materialSelect = document.getElementById('quote-select-material');
  const printSelect = document.getElementById('quote-select-print');
  const successBanner = document.getElementById('quote-success-banner');
  const quoteRefId = document.getElementById('quote-ref-id');
  const btnSubmit = document.getElementById('btn-submit-quote');

  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('artwork-file-input');
  const fileTitle = document.getElementById('file-upload-title');

  const styleCards = document.querySelectorAll('.quote-style-card');

  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => {
        c.className = 'quote-style-card p-3 rounded-2xl border border-[#DEC6A6] hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all';
      });
      card.className = 'quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50 cursor-pointer flex flex-col justify-between transition-all';
      updatePriceEstimate();
    });
  });

  function updatePriceEstimate() {
    if (!slider) return;
    const qty = parseInt(slider.value);
    if (qtyDisplay) qtyDisplay.textContent = `${qty.toLocaleString()} units`;

    let basePrice = 0.95;
    if (qty >= 1000) basePrice = 0.68;
    if (qty >= 2500) basePrice = 0.48;
    if (qty >= 5000) basePrice = 0.38;
    if (qty >= 10000) basePrice = 0.28;

    const printVal = printSelect ? printSelect.value : 'unprinted';
    if (printVal === '1color') basePrice += 0.06;
    if (printVal === 'cmyk-ext') basePrice += 0.14;
    if (printVal === 'cmyk-both') basePrice += 0.24;
    if (printVal === 'foil') basePrice += 0.30;

    const low = (basePrice * 0.94).toFixed(2);
    const high = (basePrice * 1.10).toFixed(2);
    const totalEst = (basePrice * qty).toFixed(2);

    if (estUnitPrice) estUnitPrice.textContent = `$${low} - $${high}`;
    if (estTotalCost) estTotalCost.textContent = `$${Number(totalEst).toLocaleString()}`;
  }

  if (slider) slider.addEventListener('input', updatePriceEstimate);
  if (materialSelect) materialSelect.addEventListener('change', updatePriceEstimate);
  if (printSelect) printSelect.addEventListener('change', updatePriceEstimate);

  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        fileTitle.textContent = `Attached: ${e.target.files[0].name} (${(e.target.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
        dropZone.classList.add('border-emerald-600', 'bg-emerald-50');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'PNS-CAD-' + Math.floor(10000 + Math.random() * 90000);
      if (quoteRefId) quoteRefId.textContent = '#' + ref;
      if (successBanner) successBanner.classList.remove('hidden');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'CAD Request Submitted ✓';
        btnSubmit.classList.add('bg-stone-600');
      }
    });
  }

  updatePriceEstimate();
}


// === Module: src/router.js ===
class Router {
  constructor(appContainerId) {
    this.container = document.getElementById(appContainerId);
    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }

  handleRoute() {
    const rawHash = window.location.hash.slice(1) || 'home';
    const [pathPart, queryPart] = rawHash.split('?');
    const path = pathPart.toLowerCase();

    // Parse query params (e.g. category=boxes)
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
      } else if (path === 'eco-impact' || path === 'ecosystem' || path === 'global-warming' || path === 'climate' || path === 'showcase' || path === 'eco-showcase' || path === 'eco-heritage') {
        this.container.innerHTML = renderShowcaseView();
        initShowcaseView();
      } else if (path === 'shop' || path === 'products') {
        this.container.innerHTML = renderProductsView(categoryParam);
        initProductsView(categoryParam);
      } else if (path.startsWith('product/')) {
        const productId = path.replace('product/', '');
        this.container.innerHTML = renderProductDetailView(productId);
        initProductDetailView(productId);
      } else if (path === 'about') {
        this.container.innerHTML = renderAboutView();
        initAboutView();
      } else if (path === 'quote' || path === 'contact') {
        this.container.innerHTML = renderContactQuoteView();
        initContactQuoteView();
      } else {
        this.container.innerHTML = renderHomeView();
        initHomeView();
      }

      // GSAP entrance transition
      if (window.gsap) {
        window.gsap.fromTo(this.container, 
          { opacity: 0, y: 15 }, 
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
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
      
      const isEcoMatch = (currentPath === 'eco-impact' || currentPath === 'showcase' || currentPath === 'ecosystem' || currentPath === 'global-warming' || currentPath === 'climate') && (linkPath === 'eco-impact' || linkPath === 'showcase');
      
      if (currentPath === linkPath || isEcoMatch ||
         ((currentPath === 'shop' || currentPath.startsWith('product')) && (linkPath === 'shop' || linkPath === 'products'))) {
        link.classList.add('text-emerald-900', 'font-black');
        link.classList.remove('text-stone-700');
      } else {
        link.classList.remove('text-emerald-900', 'font-black');
        link.classList.add('text-stone-700');
      }
    });
  }
}


// === Module: src/main.js ===
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


})();
