// PackNStir Category Taxonomy & Environmental Credentials

export const CATEGORIES = [
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

export const HOME_FEATURED_CATEGORIES = [
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

export const SUSTAINABILITY_STATS = [
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

export const CERTIFICATIONS = [
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
