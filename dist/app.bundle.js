// EcoPack Studio - Standalone Application Bundle
// Generated automatically for seamless file:// and http:// execution

(() => {

// === Module: src/data/categories.js ===
const CATEGORIES = [
  {
    id: 'food',
    name: 'Food & Beverage Packaging',
    shortName: 'Food & Beverage',
    icon: 'utensils',
    badge: 'Food Safe & Grease-Resistant',
    description: 'Certified food-contact paper containers engineered with 100% plastic-free aqueous barrier coatings.',
    bannerColor: 'from-amber-900/30 to-amber-700/20',
    itemCount: 5,
    highlight: 'Plastic-free barrier tech'
  },
  {
    id: 'luxury',
    name: 'Luxury & Retail Boxes',
    shortName: 'Luxury & Retail',
    icon: 'sparkles',
    badge: 'Premium Rigid Board',
    description: 'High-density rigid setup boxes and tuck cartons finished with soy inks, hot foil, and magnetic closures.',
    bannerColor: 'from-emerald-950/40 to-emerald-800/20',
    itemCount: 5,
    highlight: 'Zero-glue collapsible design'
  },
  {
    id: 'shipping',
    name: 'E-Commerce & Shipping',
    shortName: 'E-Commerce & Shipping',
    icon: 'package',
    badge: 'Heavy-Duty & Protective',
    description: 'Crush-resistant mailers, honeycomb cushioning, and water-activated paper tape for sustainable transit.',
    bannerColor: 'from-amber-950/30 to-stone-800/20',
    itemCount: 4,
    highlight: 'Cushioning without bubble wrap'
  },
  {
    id: 'bags',
    name: 'Paper Bags & Accessories',
    shortName: 'Bags & Accessories',
    icon: 'shopping-bag',
    badge: 'Reinforced Kraft Paper',
    description: 'High-tensile shopping bags, acid-free custom tissue paper, and compostable sticker rolls.',
    bannerColor: 'from-stone-900/30 to-emerald-900/20',
    itemCount: 5,
    highlight: 'High tensile strength up to 18kg'
  }
];

const SUSTAINABILITY_STATS = [
  {
    value: 14800000,
    displayValue: '14.8M+',
    label: 'Single-Use Plastics Eliminated',
    subtext: 'Replaced with repulpable fiber barriers across our global client base.',
    icon: 'shield-check'
  },
  {
    value: 84200,
    displayValue: '84,200',
    label: 'Trees Preserved via Agroforestry',
    subtext: '100% of wood pulp sourced from certified FSC® replenishing plantations.',
    icon: 'trees'
  },
  {
    value: 100,
    displayValue: '100%',
    label: 'Recyclable & Compostable',
    subtext: 'No polyethylene liners; disposes directly into curbside paper bins.',
    icon: 'recycle'
  },
  {
    value: 90,
    displayValue: '< 90 Days',
    label: 'Soil Biodegradation Window',
    subtext: 'Verified by OK Compost Home standards in active commercial & backyard soil.',
    icon: 'sprout'
  }
];

const CERTIFICATIONS = [
  {
    name: 'FSC® Certified',
    code: 'FSC-C149821',
    description: 'Pulp sourced strictly from well-managed, certified responsible forests.',
    icon: 'leaf'
  },
  {
    name: 'OK Compost Home',
    code: 'EN 13432 Compliant',
    description: 'Degrades completely in home compost piles without chemical residue.',
    icon: 'sparkles'
  },
  {
    name: 'Plastic Free Trustmark',
    code: 'A Plastic Planet Certified',
    description: 'Zero PE, PLA, or synthetic fossil-fuel polymer laminations.',
    icon: 'check-circle-2'
  },
  {
    name: 'Soy Ink Verified',
    code: 'American Soybean Assoc.',
    description: 'Non-toxic, heavy-metal free VOC emissions during printing.',
    icon: 'droplets'
  }
];


// === Module: src/data/packagingSvgs.js ===
// High-fidelity SVG packaging mockups for EcoPack Studio products
// Designed with luxury earthy tones, realistic shading, fluting textures, and precision fold lines

function getProductSvg(type, variant = 'perspective', color = '#C49A6C') {
  switch (type) {
    case 'pizza-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="kraftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#D4AA7D" />
              <stop offset="100%" stop-color="#A97D4F" />
            </linearGradient>
            <linearGradient id="kraftDark" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#996E42" />
              <stop offset="100%" stop-color="#7B5430" />
            </linearGradient>
            <pattern id="kraftTexture" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10 L20 10 M10 0 L10 20" stroke="#875E34" stroke-width="0.3" stroke-opacity="0.15"/>
            </pattern>
          </defs>
          <!-- Shadow -->
          <ellipse cx="200" cy="270" rx="160" ry="25" fill="#1A1815" opacity="0.18" filter="blur(6px)" />
          <!-- Box Base Side Left -->
          <polygon points="50,170 200,240 200,265 50,195" fill="url(#kraftDark)" />
          <!-- Box Base Side Right -->
          <polygon points="200,240 350,170 350,195 200,265" fill="#885E35" />
          <!-- Box Top Lid (Slightly tilted open) -->
          <polygon points="50,170 200,95 350,170 200,240" fill="url(#kraftGrad)" />
          <polygon points="50,170 200,95 350,170 200,240" fill="url(#kraftTexture)" />
          <!-- Flute edge / rim -->
          <polygon points="50,170 200,240 200,244 50,174" fill="#B28759" />
          <polygon points="200,240 350,170 350,174 200,244" fill="#754E29" />
          <!-- Steam Vent Cutouts -->
          <circle cx="100" cy="165" r="4" fill="#4A341E" opacity="0.6"/>
          <circle cx="300" cy="165" r="4" fill="#4A341E" opacity="0.6"/>
          <!-- EcoPack Studio Hot Stamp Branding on Lid -->
          <g transform="translate(160, 140) rotate(-5)">
            <rect x="0" y="0" width="80" height="40" rx="4" fill="none" stroke="#2D4A3E" stroke-width="1.5" stroke-dasharray="3 3"/>
            <text x="40" y="18" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#1C382B" text-anchor="middle" letter-spacing="1">ECOPACK</text>
            <text x="40" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#2E4F3E" text-anchor="middle" letter-spacing="0.5">100% RECYCLED</text>
            <circle cx="40" cy="33" r="2" fill="#2E4F3E"/>
          </g>
          <!-- Thumb notch cut out -->
          <path d="M 190 236 C 190 242, 210 242, 210 236 Z" fill="#694320" />
        </svg>
      `;

    case 'takeaway-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gableTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#E2BA8D" />
              <stop offset="100%" stop-color="#C59B6F" />
            </linearGradient>
            <linearGradient id="gableBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#9C7247" />
              <stop offset="50%" stop-color="#BA8E62" />
              <stop offset="100%" stop-color="#7B5430" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="280" rx="130" ry="20" fill="#1A1815" opacity="0.18" filter="blur(6px)" />
          <!-- Gable handle -->
          <path d="M165,65 Q200,45 235,65 L245,100 L155,100 Z" fill="#8A6038" />
          <rect x="180" y="65" width="40" height="12" rx="6" fill="#F8F5EE" />
          <!-- Roof slants -->
          <polygon points="120,130 200,100 280,130 200,150" fill="url(#gableTop)" />
          <polygon points="200,100 280,130 280,132 200,102" fill="#754E29" />
          <!-- Front Body -->
          <polygon points="120,130 200,150 200,260 135,245" fill="#C59B6F" />
          <!-- Side Body -->
          <polygon points="200,150 280,130 265,245 200,260" fill="#9C7247" />
          <!-- Leak-proof folded lock seam -->
          <path d="M120,130 Q160,140 200,150" stroke="#754E29" stroke-width="1.5" fill="none"/>
          <!-- Eco stamp -->
          <g transform="translate(150, 185) rotate(4)">
            <circle cx="20" cy="20" r="16" fill="none" stroke="#1A3328" stroke-width="1.2"/>
            <path d="M14 22 L20 14 L26 22 Z" fill="#1A3328" />
            <text x="20" y="30" font-size="5" font-family="sans-serif" font-weight="bold" fill="#1A3328" text-anchor="middle">LEAKPROOF</text>
          </g>
        </svg>
      `;

    case 'burger-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="265" rx="135" ry="22" fill="#1A1815" opacity="0.18" filter="blur(6px)" />
          <!-- Bottom tray -->
          <polygon points="90,195 200,245 310,195 200,165" fill="#7D5733" />
          <polygon points="90,195 200,245 200,260 100,215" fill="#9C7146" />
          <polygon points="200,245 310,195 300,215 200,260" fill="#6B4828" />
          <!-- Clamshell Lid (Angled open) -->
          <polygon points="80,175 200,110 320,175 200,225" fill="#D2A779" />
          <polygon points="80,175 200,225 200,232 80,182" fill="#BA8D5F" />
          <polygon points="200,225 320,175 320,182 200,232" fill="#8A6239" />
          <!-- Steam Vent punch -->
          <rect x="150" y="145" width="20" height="4" rx="2" fill="#52361B" opacity="0.7"/>
          <rect x="230" y="145" width="20" height="4" rx="2" fill="#52361B" opacity="0.7"/>
          <!-- Eco stamp -->
          <text x="200" y="180" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" font-weight="700" fill="#1A3328" text-anchor="middle" letter-spacing="1">BIO-CLAMSHELL</text>
          <text x="200" y="195" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#3D5C4E" text-anchor="middle">AQUEOUS COATED • COMPOSTABLE</text>
        </svg>
      `;

    case 'pastry-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="145" ry="24" fill="#1A1815" opacity="0.16" filter="blur(6px)" />
          <!-- Box sides -->
          <polygon points="80,175 200,235 200,265 80,205" fill="#C9A378" />
          <polygon points="200,235 320,175 320,205 200,265" fill="#9E774E" />
          <!-- Box Top -->
          <polygon points="80,175 200,115 320,175 200,235" fill="#E8C8A2" />
          <!-- Clear PLA/Cellulose Window -->
          <polygon points="120,170 200,130 280,170 200,210" fill="#C7E6DE" fill-opacity="0.55" stroke="#FFF" stroke-width="1.5" />
          <line x1="140" y1="165" x2="180" y2="145" stroke="#FFFFFF" stroke-width="2" opacity="0.8" stroke-linecap="round"/>
          <line x1="160" y1="185" x2="220" y2="155" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6" stroke-linecap="round"/>
          <!-- Internal pastry silhouette -->
          <ellipse cx="200" cy="175" rx="35" ry="16" fill="#8F5835" opacity="0.45"/>
          <!-- Eco label -->
          <rect x="180" y="240" width="40" height="14" rx="2" fill="#1A3328"/>
          <text x="200" y="250" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="700" fill="#FDFBF7" text-anchor="middle">CELLULOSE WINDOW</text>
        </svg>
      `;

    case 'beverage-carrier':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="275" rx="150" ry="20" fill="#1A1815" opacity="0.18" filter="blur(6px)" />
          <!-- Molded pulp rounded base -->
          <path d="M80,200 Q200,260 320,200 L300,250 Q200,290 100,250 Z" fill="#99836B" />
          <!-- Top tray surface with 4 cup wells -->
          <polygon points="70,190 200,130 330,190 200,245" fill="#C2B099" />
          <!-- 4 Cup Wells -->
          <ellipse cx="140" cy="170" rx="24" ry="12" fill="#6A5A4A" stroke="#B2A089" stroke-width="2"/>
          <ellipse cx="260" cy="170" rx="24" ry="12" fill="#6A5A4A" stroke="#B2A089" stroke-width="2"/>
          <ellipse cx="155" cy="210" rx="24" ry="12" fill="#6A5A4A" stroke="#B2A089" stroke-width="2"/>
          <ellipse cx="245" cy="210" rx="24" ry="12" fill="#6A5A4A" stroke="#B2A089" stroke-width="2"/>
          <!-- Center Carry Bridge / Arch -->
          <path d="M185,195 L185,110 Q200,90 215,110 L215,195 Z" fill="#AD9B85" stroke="#7A6854" stroke-width="1"/>
          <!-- Carry Hole -->
          <rect x="193" y="115" width="14" height="25" rx="7" fill="#FDFBF7" />
          <!-- Molded texture badge -->
          <text x="200" y="235" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#1A3328" text-anchor="middle">MOLDED PULP</text>
        </svg>
      `;

    case 'perfume-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="luxeDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1B2E26" />
              <stop offset="100%" stop-color="#0E1A15" />
            </linearGradient>
            <linearGradient id="goldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#F2D179" />
              <stop offset="50%" stop-color="#D4AF37" />
              <stop offset="100%" stop-color="#AA820A" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="275" rx="125" ry="20" fill="#0A0E0B" opacity="0.3" filter="blur(7px)" />
          <!-- Rigid Box Base -->
          <polygon points="120,180 200,225 280,180 200,140" fill="#14241E" />
          <polygon points="120,180 200,225 200,265 120,220" fill="#0F1B16" />
          <polygon points="200,225 280,180 280,220 200,265" fill="#09120E" />
          <!-- High-density black foam insert -->
          <polygon points="135,175 200,210 265,175 200,145" fill="#1F2321" stroke="#333" stroke-width="0.5"/>
          <!-- Bottle cutout recess -->
          <polygon points="175,175 200,190 225,175 200,160" fill="#0A0C0B" />
          <!-- Magnetic hinged lid tilted upright -->
          <polygon points="120,180 200,140 200,45 120,80" fill="url(#luxeDark)" />
          <polygon points="200,140 280,180 280,85 200,45" fill="#182A22" />
          <!-- Inside lid debossed gold logo -->
          <g transform="translate(145, 95) rotate(-15)">
            <text x="25" y="15" font-family="'Playfair Display', serif" font-size="8" font-weight="600" fill="url(#goldFoil)" letter-spacing="2">MAISON BIO</text>
            <line x1="5" y1="20" x2="45" y2="20" stroke="url(#goldFoil)" stroke-width="0.8"/>
            <text x="25" y="27" font-family="'Plus Jakarta Sans', sans-serif" font-size="4" fill="#C5A059" text-anchor="middle" letter-spacing="1">EAU DE PARFUM</text>
          </g>
          <!-- Front gold rim edge -->
          <line x1="120" y1="180" x2="200" y2="225" stroke="url(#goldFoil)" stroke-width="1.5" />
          <line x1="200" y1="225" x2="280" y2="180" stroke="url(#goldFoil)" stroke-width="1.5" />
        </svg>
      `;

    case 'watch-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="120" ry="18" fill="#121815" opacity="0.25" filter="blur(6px)" />
          <!-- Setup box bottom shoulder -->
          <polygon points="130,170 200,210 270,170 200,130" fill="#242B28" />
          <polygon points="130,170 200,210 200,260 130,220" fill="#1C211F" />
          <polygon points="200,210 270,170 270,220 200,260" fill="#161A18" />
          <!-- Cream organic cotton / linen watch pillow -->
          <path d="M165,160 Q200,135 235,160 Q200,195 165,160 Z" fill="#EDE7DF" stroke="#D5CCC0" stroke-width="1"/>
          <!-- Gold lift-off lid floating overhead -->
          <polygon points="125,120 200,80 275,120 200,160" fill="#EADBC8" />
          <polygon points="125,120 200,160 200,175 125,135" fill="#D3BEA4" />
          <polygon points="200,160 275,120 275,135 200,175" fill="#BFA78C" />
          <!-- Embossed logo on lid -->
          <text x="200" y="125" font-family="'Playfair Display', serif" font-size="9" font-weight="700" fill="#4A3F35" text-anchor="middle" letter-spacing="2">CHRONO ECO</text>
        </svg>
      `;

    case 'cosmetic-carton':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="280" rx="100" ry="16" fill="#121815" opacity="0.2" filter="blur(5px)" />
          <!-- Tall slim cosmetic tuck-end box -->
          <!-- Top Tuck flap -->
          <polygon points="160,80 200,60 240,80 200,95" fill="#F4EDE4" stroke="#D6C4B0" stroke-width="0.5"/>
          <!-- Front face -->
          <polygon points="160,80 200,95 200,270 160,250" fill="#FAF7F2" stroke="#E5D9CB" stroke-width="0.5"/>
          <!-- Side face -->
          <polygon points="200,95 240,80 240,250 200,270" fill="#E8DEC5" stroke="#D3C3A8" stroke-width="0.5"/>
          <!-- Minimalist botanical branding -->
          <g transform="translate(180, 140)">
            <path d="M-5,0 Q0,-15 5,0 Q0,15 -5,0" fill="#2E5A44" opacity="0.8"/>
            <text x="0" y="30" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#1C382B" text-anchor="middle" letter-spacing="1.5">BOTANIC</text>
            <text x="0" y="42" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#5F7D6E" text-anchor="middle">PURE SERUM</text>
            <text x="0" y="60" font-family="'Plus Jakarta Sans', sans-serif" font-size="4" fill="#889E92" text-anchor="middle">30 ML / 1.0 FL OZ</text>
            <line x1="-12" y1="70" x2="12" y2="70" stroke="#2E5A44" stroke-width="0.8"/>
            <text x="0" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="4" font-weight="bold" fill="#C5A059" text-anchor="middle">FOIL EMBOSSED</text>
          </g>
        </svg>
      `;

    case 'apparel-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="155" ry="22" fill="#1A1815" opacity="0.22" filter="blur(6px)" />
          <!-- Large flat collapsible apparel box -->
          <polygon points="70,190 200,245 330,190 200,140" fill="#1F2A24" />
          <polygon points="70,190 200,245 200,265 70,210" fill="#151E1A" />
          <polygon points="200,245 330,190 330,210 200,265" fill="#0F1713" />
          <!-- Top Lid with Grosgrain Ribbon -->
          <polygon points="70,190 200,140 200,75 70,120" fill="#293931" />
          <!-- Ribbon Bow Detail -->
          <path d="M195,190 Q200,180 205,190 Q215,185 205,200 Q200,215 195,200 Z" fill="#C5A059" />
          <path d="M200,140 L200,245" stroke="#C5A059" stroke-width="3" stroke-dasharray="4 2"/>
          <!-- Eco brand deboss -->
          <text x="135" y="145" transform="rotate(-20 135 145)" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#FDFBF7" letter-spacing="2">ATELIER ECO</text>
        </svg>
      `;

    case 'chocolate-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="140" ry="20" fill="#1A1815" opacity="0.2" filter="blur(6px)" />
          <polygon points="80,180 200,235 320,180 200,130" fill="#4A2F22" />
          <polygon points="80,180 200,235 200,260 80,205" fill="#382117" />
          <polygon points="200,235 320,180 320,205 200,260" fill="#28160E" />
          <!-- Grid dividers for artisanal chocolates -->
          <line x1="140" y1="155" x2="260" y2="207" stroke="#7B5643" stroke-width="1.5"/>
          <line x1="200" y1="130" x2="200" y2="235" stroke="#7B5643" stroke-width="1.5"/>
          <line x1="260" y1="155" x2="140" y2="207" stroke="#7B5643" stroke-width="1.5"/>
          <!-- Artisanal chocolates in nests -->
          <circle cx="165" cy="175" r="7" fill="#2E1B12" stroke="#D4AF37" stroke-width="1"/>
          <circle cx="200" cy="160" r="7" fill="#6E442B" stroke="#D4AF37" stroke-width="1"/>
          <circle cx="235" cy="175" r="7" fill="#1A100B" stroke="#D4AF37" stroke-width="1"/>
          <circle cx="165" cy="200" r="7" fill="#543725" stroke="#D4AF37" stroke-width="1"/>
          <circle cx="200" cy="215" r="7" fill="#3D2418" stroke="#D4AF37" stroke-width="1"/>
          <circle cx="235" cy="200" r="7" fill="#754B33" stroke="#D4AF37" stroke-width="1"/>
          <!-- Crystal Glassine protective slip -->
          <polygon points="90,175 200,130 310,175 200,220" fill="#FFF" fill-opacity="0.3" stroke="#FFF" stroke-width="0.8"/>
        </svg>
      `;

    case 'mailer-box':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="275" rx="150" ry="22" fill="#1A1815" opacity="0.2" filter="blur(6px)" />
          <!-- Self-locking Roll-End Tuck Front (RETF) Mailer -->
          <polygon points="60,180 200,245 340,180 200,125" fill="#B88B5B" />
          <polygon points="60,180 200,245 200,265 60,200" fill="#9B7143" />
          <polygon points="200,245 340,180 340,200 200,265" fill="#7D572F" />
          <!-- Interior botanical print visible as lid opens -->
          <polygon points="60,180 200,125 200,60 60,105" fill="#1B382B" />
          <polygon points="200,125 340,180 340,110 200,60" fill="#244837" />
          <!-- Interior leaf motifs -->
          <g fill="#43775E" opacity="0.6">
            <circle cx="130" cy="115" r="4"/>
            <circle cx="160" cy="95" r="6"/>
            <circle cx="250" cy="100" r="5"/>
            <circle cx="280" cy="125" r="6"/>
          </g>
          <!-- Front locking tuck wings -->
          <polygon points="175,245 200,257 225,245 200,235" fill="#875E33" />
          <!-- Eco branding text -->
          <text x="200" y="90" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#FDFBF7" text-anchor="middle" letter-spacing="1.5">OPEN FOR GOOD THINGS</text>
          <text x="200" y="102" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#B1D1C1" text-anchor="middle">100% CORRUGATED E-FLUTE</text>
        </svg>
      `;

    case 'shipping-carton':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="275" rx="140" ry="20" fill="#1A1815" opacity="0.22" filter="blur(6px)" />
          <!-- Heavy-duty regular slotted carton (RSC) -->
          <polygon points="80,140 200,195 200,270 80,210" fill="#B28452" />
          <polygon points="200,195 320,140 320,210 200,270" fill="#8C6234" />
          <polygon points="80,140 200,85 320,140 200,195" fill="#CAA06F" />
          <!-- Reinforced paper packing tape seam -->
          <line x1="80" y1="140" x2="320" y2="140" stroke="#754E27" stroke-width="8" stroke-linecap="square"/>
          <line x1="200" y1="85" x2="200" y2="195" stroke="#754E27" stroke-width="8"/>
          <!-- International handling symbols (Fragile glass, This way up, Recyclable) -->
          <g transform="translate(105, 175)" fill="#3B2613">
            <!-- Glass -->
            <path d="M5,0 L15,0 L15,8 L11,12 L11,18 L16,18 L16,20 L4,20 L4,18 L9,18 L9,12 L5,8 Z" />
            <!-- Up arrows -->
            <path d="M30,5 L35,0 L40,5 L37,5 L37,18 L33,18 L33,5 Z" />
            <path d="M45,5 L50,0 L55,5 L52,5 L52,18 L48,18 L48,5 Z" />
            <!-- FSC tree -->
            <path d="M68,16 L74,5 L80,16 L76,16 L76,20 L72,20 L72,16 Z" />
          </g>
          <text x="260" y="185" font-family="monospace" font-size="8" font-weight="bold" fill="#3B2613">RSC DOUBLE-WALL</text>
          <text x="260" y="198" font-family="monospace" font-size="6" fill="#52391F">BURST: 275 LBS</text>
        </svg>
      `;

    case 'honeycomb-mailer':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="275" rx="130" ry="18" fill="#1A1815" opacity="0.18" filter="blur(6px)" />
          <!-- Padded paper mailer -->
          <rect x="110" y="80" width="180" height="180" rx="10" fill="#CCA375" stroke="#9E7649" stroke-width="2"/>
          <!-- Top flap folded over -->
          <path d="M110,120 L200,160 L290,120 L290,80 L110,80 Z" fill="#E2BE93" stroke="#9E7649" stroke-width="1.5"/>
          <!-- Peel and seal strip indicator -->
          <rect x="140" y="130" width="120" height="12" rx="3" fill="#D9534F" opacity="0.8"/>
          <text x="200" y="139" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#FFF" text-anchor="middle">PEEL & SEAL STRIP</text>
          <!-- Honeycomb pattern cutout demonstration -->
          <g transform="translate(130, 160)" stroke="#7D5831" stroke-width="1" fill="none" opacity="0.7">
            <polygon points="15,0 30,8 30,24 15,32 0,24 0,8" />
            <polygon points="45,0 60,8 60,24 45,32 30,24 30,8" />
            <polygon points="75,0 90,8 90,24 75,32 60,24 60,8" />
            <polygon points="30,24 45,32 45,48 30,56 15,48 15,32" />
            <polygon points="60,24 75,32 75,48 60,56 45,48 45,32" />
            <polygon points="90,24 105,32 105,48 90,56 75,48 75,32" />
          </g>
          <!-- Badge -->
          <text x="200" y="240" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1A3328" text-anchor="middle">ZERO PLASTIC • BUBBLE-FREE</text>
        </svg>
      `;

    case 'paper-tape':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="120" ry="18" fill="#1A1815" opacity="0.2" filter="blur(6px)" />
          <!-- Tape Roll Cylindrical 3D -->
          <!-- Outer roll -->
          <ellipse cx="200" cy="160" rx="90" ry="40" fill="#C99E6E" stroke="#9E7649" stroke-width="2"/>
          <path d="M110,160 L110,210 Q200,280 290,210 L290,160 Z" fill="#A87E4E" stroke="#7A562D" stroke-width="2"/>
          <!-- Inner cardboard core -->
          <ellipse cx="200" cy="160" rx="40" ry="18" fill="#6B4D2F" stroke="#4F361E" stroke-width="2"/>
          <ellipse cx="200" cy="163" rx="35" ry="15" fill="#3D2916" />
          <!-- Tape unspooling strip -->
          <path d="M280,180 Q320,200 340,240 L250,260 Q230,230 200,225 Z" fill="#CCA475" stroke="#9E7649" stroke-width="1"/>
          <!-- Water-activated repeated graphic on strip -->
          <g transform="translate(230, 220) rotate(15)">
            <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#1A3328">100% RECYCLED</text>
            <text x="0" y="10" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" fill="#2E5A44">WATER ACTIVATED</text>
          </g>
        </svg>
      `;

    case 'luxury-bag':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#142B21" />
              <stop offset="60%" stop-color="#1E3E30" />
              <stop offset="100%" stop-color="#10221A" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="285" rx="130" ry="16" fill="#101813" opacity="0.25" filter="blur(6px)" />
          <!-- Twisted paper cord handle -->
          <path d="M170,120 C170,40 230,40 230,120" fill="none" stroke="#D4AF37" stroke-width="5" stroke-linecap="round"/>
          <path d="M165,120 C165,45 225,45 225,120" fill="none" stroke="#AA820A" stroke-width="2" stroke-linecap="round"/>
          <!-- Bag front body -->
          <polygon points="120,120 280,120 270,270 130,270" fill="url(#bagGrad)" />
          <!-- Side gusset fold -->
          <polygon points="120,120 130,270 100,250 95,115" fill="#0C1913" />
          <!-- Turn-top reinforced hem line -->
          <line x1="95" y1="135" x2="280" y2="135" stroke="#2D5442" stroke-width="1.5"/>
          <!-- Hot-foil logo center front -->
          <g transform="translate(200, 190)">
            <text x="0" y="0" font-family="'Playfair Display', serif" font-size="14" font-weight="700" fill="#D4AF37" text-anchor="middle" letter-spacing="3">VERDANT</text>
            <line x1="-30" y1="8" x2="30" y2="8" stroke="#D4AF37" stroke-width="1"/>
            <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#E8D190" text-anchor="middle" letter-spacing="1.5">PARIS • NEW YORK</text>
          </g>
          <!-- Eyelet holes -->
          <circle cx="170" cy="130" r="3" fill="#D4AF37"/>
          <circle cx="230" cy="130" r="3" fill="#D4AF37"/>
        </svg>
      `;

    case 'grocery-bag':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="285" rx="125" ry="16" fill="#1A1815" opacity="0.2" filter="blur(6px)" />
          <!-- Flat kraft glued handles -->
          <path d="M175,110 L175,50 L225,50 L225,110" fill="none" stroke="#A87B4C" stroke-width="8" stroke-linecap="square"/>
          <!-- Bag body with serrated top edge -->
          <polygon points="120,110 280,110 270,275 130,275" fill="#CAA06F" />
          <polygon points="120,110 130,275 95,255 90,105" fill="#9C7345" />
          <!-- Center pinch fold in side gusset -->
          <line x1="105" y1="107" x2="112" y2="265" stroke="#7A562F" stroke-width="1"/>
          <!-- Serrated scissors cut top edge -->
          <path d="M120,110 L130,106 L140,110 L150,106 L160,110 L170,106 L180,110 L190,106 L200,110 L210,106 L220,110 L230,106 L240,110 L250,106 L260,110 L270,106 L280,110" stroke="#B08655" stroke-width="2" fill="none"/>
          <!-- Organic Market Stamp -->
          <g transform="translate(200, 185) rotate(-5)">
            <rect x="-40" y="-20" width="80" height="40" rx="3" fill="none" stroke="#204030" stroke-width="1.8"/>
            <text x="0" y="-3" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="800" fill="#204030" text-anchor="middle" letter-spacing="1">FARMERS CO-OP</text>
            <text x="0" y="10" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#325E49" text-anchor="middle">100% RECYCLED KRAFT</text>
          </g>
        </svg>
      `;

    case 'wine-bag':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="285" rx="90" ry="15" fill="#121815" opacity="0.22" filter="blur(5px)" />
          <!-- Twisted rope handle -->
          <path d="M185,100 C185,30 215,30 215,100" fill="none" stroke="#C5A059" stroke-width="4" stroke-linecap="round"/>
          <!-- Tall slim bottle bag -->
          <polygon points="160,95 240,95 235,275 165,275" fill="#202A24" />
          <polygon points="160,95 165,275 145,260 140,90" fill="#151D18" />
          <!-- Bottle neck peeking out -->
          <rect x="190" y="65" width="20" height="30" rx="3" fill="#2D4F38" />
          <rect x="193" y="55" width="14" height="15" fill="#B32428" />
          <!-- Hot-foil vineyard crest -->
          <g transform="translate(200, 180)">
            <circle cx="0" cy="0" r="18" fill="none" stroke="#D4AF37" stroke-width="1.2"/>
            <text x="0" y="4" font-family="'Playfair Display', serif" font-size="12" fill="#D4AF37" text-anchor="middle">V</text>
            <text x="0" y="32" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="bold" fill="#D4AF37" text-anchor="middle" letter-spacing="2">RESERVE</text>
          </g>
        </svg>
      `;

    case 'tissue-paper':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="140" ry="18" fill="#1A1815" opacity="0.15" filter="blur(6px)" />
          <!-- Layered crumpled/folded delicate acid-free tissue paper sheets -->
          <polygon points="90,160 220,100 310,160 180,230" fill="#FBF8F2" stroke="#E5DEC9" stroke-width="1"/>
          <polygon points="110,180 240,120 330,175 200,245" fill="#F4EEE1" stroke="#D8CDB6" stroke-width="1" opacity="0.9"/>
          <!-- Repeating botanical water-based ink stamp pattern across the sheets -->
          <g fill="#2D5A42" opacity="0.25">
            <circle cx="150" cy="160" r="8"/>
            <circle cx="190" cy="140" r="6"/>
            <circle cx="230" cy="165" r="9"/>
            <circle cx="270" cy="145" r="7"/>
            <circle cx="170" cy="190" r="7"/>
            <circle cx="210" cy="205" r="8"/>
            <circle cx="250" cy="190" r="6"/>
          </g>
          <!-- Spec badge -->
          <rect x="150" y="240" width="100" height="18" rx="4" fill="#1A3328"/>
          <text x="200" y="252" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="bold" fill="#FFF" text-anchor="middle">18 GSM ACID-FREE TISSUE</text>
        </svg>
      `;

    case 'paper-stickers':
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="120" ry="18" fill="#1A1815" opacity="0.2" filter="blur(6px)" />
          <!-- Sticker roll dispenser reel -->
          <ellipse cx="170" cy="160" rx="60" ry="30" fill="#C49B6C" stroke="#9A7246" stroke-width="2"/>
          <path d="M110,160 L110,210 Q170,260 230,210 L230,160 Z" fill="#9E7345" stroke="#7A542E" stroke-width="2"/>
          <ellipse cx="170" cy="160" rx="25" ry="12" fill="#52391F" />
          <!-- Liner strip unwinding with round stickers -->
          <path d="M220,185 Q260,200 320,230 L280,265 Q230,230 190,210 Z" fill="#F8F4EC" stroke="#DDD" stroke-width="1"/>
          <!-- Round compostable stickers on release liner -->
          <circle cx="250" cy="210" r="18" fill="#1B382B" stroke="#2D5A42" stroke-width="1.5"/>
          <text x="250" y="213" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" font-weight="bold" fill="#FFF" text-anchor="middle">ECO SEAL</text>
          <circle cx="295" cy="240" r="18" fill="#C49B6C" stroke="#9A7246" stroke-width="1.5"/>
          <text x="295" y="243" font-family="'Plus Jakarta Sans', sans-serif" font-size="5" font-weight="bold" fill="#20382B" text-anchor="middle">100% BIO</text>
        </svg>
      `;

    default:
      return `
        <svg viewBox="0 0 400 320" class="w-full h-full object-contain filter drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="200" cy="270" rx="130" ry="20" fill="#1A1815" opacity="0.18" filter="blur(6px)" />
          <polygon points="100,160 200,220 300,160 200,110" fill="#C49B6C" />
          <polygon points="100,160 200,220 200,255 100,195" fill="#9E7345" />
          <polygon points="200,220 300,160 300,195 200,255" fill="#7A542E" />
          <text x="200" y="170" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1A3328" text-anchor="middle">ECOPACK STUDIO</text>
        </svg>
      `;
  }
}


// === Module: src/data/products.js ===
const PRODUCTS = [
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

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getProductsByCategory(category) {
  if (!category || category === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
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
    description: 'After 14 months of physical drop testing and finite element analysis, EcoPack Studio launched the Honeycomb Padded Paper Mailer. By precision-cutting recycled kraft paper into an interlocking hexagonal grid, we engineered shock absorption equal to 3/16" plastic bubble wrap—yet 100% curbside repulpable in standard blue paper bins.',
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
    description: 'Luxury brands long believed that premium unboxing required plastic EVA foam cavities and glossy synthetic film lamination. EcoPack Studio debuted our Heirloom Setup Boxes: 1200 GSM recycled greyboard covered in fine-milled FSC paper with contour-molded bamboo cellulose cushions and natural cotton velvet linings.',
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
    description: 'Today, EcoPack Studio is piloting carbon-negative black and colored inks derived from spirulina algae and sourcing non-wood fibers from regenerative agricultural residues like hemp and wheat straw. Our mission remains unwavering: zero single-use plastics, uncompromising luxury aesthetics, and total circularity.',
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
    quote: 'Switching our nationwide pizza chain to EcoPack’s micro-flute boxes eliminated 420,000 plastic-lined boxes a year. Customers constantly compliment how crisp the crust stays on delivery—the ventilation engineering is second to none.',
    author: 'Marco Bellini',
    role: 'Founder & Head Chef',
    company: 'Farina Artisanal Pizza, San Francisco',
    rating: 5,
    highlight: '420k plastic boxes eliminated'
  },
  {
    quote: 'For our luxury botanical perfume line, we refused to use cheap EVA plastic foam. EcoPack engineered a custom molded cellulose insert wrapped in black velvet paper that feels even more luxurious than traditional boxes, with zero guilt.',
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
// EcoPack Studio - Reactive Shopping Cart & Checkout State Store

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
    if (meterText && progressBar) {
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
    <header id="site-header" class="sticky top-0 z-40 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all duration-300">
      
      <!-- Top Eco Announcement Bar -->
      <div class="bg-emerald-950 text-emerald-200 text-[11px] font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2 overflow-hidden">
        <span class="inline-flex items-center gap-1.5 font-bold text-white uppercase tracking-wider text-[9px] bg-emerald-800 px-2 py-0.5 rounded-full">
          Plastic-Free Guarantee
        </span>
        <span class="truncate">All packaging 100% curbside recyclable & home compostable. Free carbon-neutral shipping over $150.</span>
        <a href="#quote" class="underline font-bold text-emerald-100 hover:text-white hidden sm:inline ml-1">Request Free Sample Kit →</a>
      </div>

      <!-- Main Navigation Bar -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Logo & Brand Identity -->
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-emerald-900 group-hover:bg-emerald-800 transition-colors flex items-center justify-center text-emerald-300 shadow-md shadow-emerald-950/20">
              <svg class="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
              </svg>
            </div>
            <div>
              <span class="font-extrabold text-xl tracking-tight text-stone-900 block font-serif">
                EcoPack <span class="text-emerald-800 font-sans font-bold">Studio</span>
              </span>
              <span class="text-[10px] tracking-widest uppercase text-stone-500 font-semibold block -mt-1">
                Circular Packaging Lab
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <a href="#home" class="nav-link hover:text-emerald-800 transition-colors py-1 relative">Home</a>
            
            <!-- Products with Category Dropdown Indicator -->
            <div class="relative group">
              <a href="#products" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1">
                <span>Products Catalog</span>
                <svg class="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-800 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </a>

              <!-- Dropdown Menu -->
              <div class="absolute left-0 top-full pt-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div class="w-64 bg-white rounded-2xl shadow-xl border border-stone-200 p-2 space-y-1">
                  <a href="#products?category=food" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-sm">🍕</span>
                    <div>
                      <div class="font-bold">Food & Beverage</div>
                      <div class="text-[10px] text-stone-500 font-normal">Pizza, lunch & cake boxes</div>
                    </div>
                  </a>
                  <a href="#products?category=luxury" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center text-sm">✨</span>
                    <div>
                      <div class="font-bold">Luxury & Retail</div>
                      <div class="text-[10px] text-stone-500 font-normal">Rigid setup, perfume & watch</div>
                    </div>
                  </a>
                  <a href="#products?category=shipping" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-amber-50 text-stone-800 flex items-center justify-center text-sm">📦</span>
                    <div>
                      <div class="font-bold">E-Commerce & Shipping</div>
                      <div class="text-[10px] text-stone-500 font-normal">Mailers, honeycomb & cartons</div>
                    </div>
                  </a>
                  <a href="#products?category=bags" class="flex items-center gap-3 p-2 rounded-xl hover:bg-stone-50 transition-colors text-xs font-semibold text-stone-800">
                    <span class="w-7 h-7 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center text-sm">🛍️</span>
                    <div>
                      <div class="font-bold">Paper Bags & Accessories</div>
                      <div class="text-[10px] text-stone-500 font-normal">Twisted totes, tissue & stickers</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <a href="#about" class="nav-link hover:text-emerald-800 transition-colors py-1">About Us</a>
            <a href="#story" class="nav-link hover:text-emerald-800 transition-colors py-1">Our Story</a>
            <a href="#quote" class="nav-link hover:text-emerald-800 transition-colors py-1 flex items-center gap-1.5">
              <span>Custom Quote</span>
              <span class="text-[9px] font-bold bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-full">Bespoke</span>
            </a>
          </nav>

          <!-- Right Action Items: Cart & Mobile Menu -->
          <div class="flex items-center gap-3">
            
            <!-- Custom Quote Pill Button (Desktop) -->
            <a href="#quote" class="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-emerald-900 hover:bg-emerald-800 text-white shadow-sm transition-all">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
              <span>Instant CAD Quote</span>
            </a>

            <!-- Cart Trigger Button -->
            <button id="nav-cart-trigger" class="relative p-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 transition-colors flex items-center gap-2" aria-label="Shopping Cart">
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
      <div id="mobile-menu-drawer" class="md:hidden hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
        <div class="flex flex-col space-y-3 font-semibold text-stone-800 text-base">
          <a href="#home" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Home</a>
          <a href="#products" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100 flex items-center justify-between">
            <span>Products & Catalog</span>
            <span class="text-xs bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full">19 items</span>
          </a>
          <a href="#about" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">About Us & Mission</a>
          <a href="#story" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Our Story & Timeline</a>
          <a href="#quote" class="mobile-nav-link hover:text-emerald-800 py-2 border-b border-stone-100">Contact & Custom Quote</a>
        </div>
        <div class="pt-2">
          <a href="#quote" class="w-full py-3 bg-emerald-900 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow">
            <span>Build Bespoke Custom Quote</span>
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
                🌱 The Circular Packaging Dispatch
              </span>
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif">
                Join 2,400+ Sustainable Brand Founders
              </h3>
              <p class="text-stone-400 text-xs sm:text-sm max-w-xl">
                Get monthly deep dives on zero-plastic barrier coatings, regulatory packaging updates across the EU & North America, and $25 off your first sample order.
              </p>
            </div>

            <div class="lg:col-span-5">
              <form id="newsletter-form" class="space-y-2">
                <div class="flex flex-col sm:flex-row gap-2">
                  <input type="email" id="newsletter-email" placeholder="founder@yourbrand.com" class="flex-1 px-4 py-3 bg-stone-950 border border-stone-700 rounded-xl text-xs text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500" required />
                  <button type="submit" class="px-5 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 flex-shrink-0">
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
              <div class="w-9 h-9 rounded-xl bg-emerald-900 flex items-center justify-center text-emerald-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
              </div>
              <span class="font-extrabold text-xl text-white font-serif">EcoPack <span class="text-emerald-400 font-sans">Studio</span></span>
            </div>
            <p class="text-xs text-stone-400 max-w-sm leading-relaxed">
              Pioneering circular paper, micro-flute corrugated, and rigid cardboard packaging for forward-thinking food, retail, luxury, and e-commerce brands. Zero single-use plastics, always.
            </p>
            <div class="text-xs text-stone-500 space-y-1">
              <div>📍 Innovation HQ: 482 Greenleaf Way, Portland, OR 97201</div>
              <div>⚡ Powered 100% by rooftop solar arrays & closed-loop water systems</div>
            </div>
          </div>

          <!-- Column 2: Packaging Catalog -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Product Catalog</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#products?category=food" class="hover:text-emerald-400 transition-colors">Micro-Flute Pizza Boxes</a></li>
              <li><a href="#products?category=food" class="hover:text-emerald-400 transition-colors">Leak-Proof Takeaway Containers</a></li>
              <li><a href="#products?category=luxury" class="hover:text-emerald-400 transition-colors">Magnetic Rigid Setup Boxes</a></li>
              <li><a href="#products?category=shipping" class="hover:text-emerald-400 transition-colors">Roll-End Tuck Front Mailers</a></li>
              <li><a href="#products?category=shipping" class="hover:text-emerald-400 transition-colors">Honeycomb Padded Mailers</a></li>
              <li><a href="#products?category=bags" class="hover:text-emerald-400 transition-colors">Boutique Twisted Paper Bags</a></li>
            </ul>
          </div>

          <!-- Column 3: Sustainability & Science -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Sustainability</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">PFAS-Free Aqueous Coatings</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Zero-Plastic Honeycomb Mesh</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">FSC® Forest Stewardship</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Soy & Algae-Based Inks</a></li>
              <li><a href="#story" class="hover:text-emerald-400 transition-colors">Solar Facility Tour</a></li>
            </ul>
          </div>

          <!-- Column 4: Studio & B2B -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider">Custom & B2B</h4>
            <ul class="space-y-2 text-xs text-stone-400">
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Bespoke CAD Configurator</a></li>
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Free Unprinted CAD Samples</a></li>
              <li><a href="#quote" class="hover:text-emerald-400 transition-colors">Wholesale & Enterprise Supply</a></li>
              <li><a href="#about" class="hover:text-emerald-400 transition-colors">Artwork & Dieline Guidelines</a></li>
              <li><a href="#story" class="hover:text-emerald-400 transition-colors">Our Founding Story</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 EcoPack Studio Inc. All rights reserved. 100% Repulpable & Compostable Packaging.</p>
          <div class="flex items-center gap-6">
            <a href="#about" class="hover:text-stone-300">Privacy Policy</a>
            <a href="#about" class="hover:text-stone-300">Terms of Supply</a>
            <a href="#about" class="hover:text-stone-300">Chain of Custody Certificate</a>
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
      msg.textContent = '🎉 Welcome to the circular packaging movement! Check your inbox for your $25 sample code.';
      input.value = '';
    });
  }
}


// === Module: src/views/HomeView.js ===
function renderHomeView() {
  const featured = getFeaturedProducts();

  return `
    <div class="space-y-24 sm:space-y-32">
      
      <!-- ========================================== -->
      <!-- 1. HERO SECTION WITH 3D PACKAGING VIEWER   -->
      <!-- ========================================== -->
      <section class="relative pt-12 pb-8 sm:pt-20 sm:pb-16 overflow-hidden">
        <!-- Ambient background gradient -->
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-amber-100/30 to-stone-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <!-- Left Headline & Value Prop (6 cols) -->
            <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/10 text-emerald-900 border border-emerald-900/20 text-xs font-bold tracking-wide">
                <span class="w-2 h-2 rounded-full bg-emerald-700 animate-ping"></span>
                <span>Zero Single-Use Plastics • 100% Repulpable</span>
              </div>

              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-[1.1] font-serif">
                Bespoke Sustainable Packaging <span class="italic text-emerald-900 font-serif">Engineered</span> for Modern Brands.
              </h1>

              <p class="text-stone-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Replace plastic polybags, foam peanuts, and toxic laminations with high-performance FSC®-certified corrugated cardboard, rigid setup boxes, and food-grade aqueous barriers.
              </p>

              <!-- CTA Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#products" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-900 hover:bg-emerald-800 active:scale-[0.99] text-white font-bold text-sm shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2 group">
                  <span>Explore Product Catalog</span>
                  <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
                <a href="#quote" class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2">
                  <svg class="w-4 h-4 text-emerald-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>Build Custom CAD Quote</span>
                </a>
              </div>

              <!-- Trust Stats Row -->
              <div class="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span class="block text-xl sm:text-2xl font-black text-stone-900">2,400+</span>
                  <span class="text-xs text-stone-500 font-medium">Brands Powered</span>
                </div>
                <div>
                  <span class="block text-xl sm:text-2xl font-black text-stone-900">0%</span>
                  <span class="text-xs text-stone-500 font-medium">Fossil Plastic Used</span>
                </div>
                <div>
                  <span class="block text-xl sm:text-2xl font-black text-stone-900">48h</span>
                  <span class="text-xs text-stone-500 font-medium">CAD Prototyping</span>
                </div>
              </div>
            </div>

            <!-- Right Interactive 3D Packaging Visualizer (6 cols) -->
            <div class="lg:col-span-6">
              ${renderBoxVisualizer()}
            </div>

          </div>
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 2. EXPLORE CATEGORIES GRID                 -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-2">Architectural Systems</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
            Packaging Engineered by Industry
          </h2>
          <p class="text-stone-600 text-sm mt-3">
            Every category utilizes certified sustainable pulp, water-soluble starch adhesives, and zero synthetic plastic films.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${CATEGORIES.map(cat => `
            <div class="group relative rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-emerald-700/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="w-12 h-12 rounded-2xl bg-stone-100 group-hover:bg-emerald-900 group-hover:text-white transition-colors flex items-center justify-center text-2xl shadow-xs">
                    ${cat.id === 'food' ? '🍕' : cat.id === 'luxury' ? '✨' : cat.id === 'shipping' ? '📦' : '🛍️'}
                  </span>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-stone-100 px-2.5 py-1 rounded-full">
                    ${cat.itemCount} Styles
                  </span>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                    ${cat.name}
                  </h3>
                  <p class="text-xs text-stone-500 mt-2 leading-relaxed">
                    ${cat.description}
                  </p>
                </div>
              </div>

              <div class="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  ${cat.highlight}
                </span>
                <a href="#products?category=${cat.id}" class="text-xs font-bold text-stone-900 group-hover:text-emerald-800 flex items-center gap-1">
                  <span>View All</span>
                  <svg class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 3. FEATURED PRODUCTS SHOWCASE               -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-1">Stock & Custom Formats</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
              Featured Packaging Solutions
            </h2>
          </div>
          <a href="#products" class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700 transition-colors">
            <span>Explore All 19 Products</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featured.slice(0, 6).map(prod => `
            <div class="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-800/30 transition-all duration-300 flex flex-col justify-between group">
              
              <!-- Visual Card Header -->
              <div class="relative bg-gradient-to-b from-stone-50 to-stone-100/60 p-6 flex items-center justify-center h-64 border-b border-stone-100 overflow-hidden">
                <span class="absolute top-4 left-4 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-2.5 py-1 rounded-full shadow-xs">
                  ${prod.badge || 'FSC® Certified'}
                </span>
                
                <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                  ${getProductSvg(prod.svgType, 'card')}
                </div>

                <!-- Hover Quick View Action Button -->
                <button data-quickview-id="${prod.id}" class="btn-trigger-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-700 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                  <span>Quick View</span>
                </button>
              </div>

              <!-- Product Details Body -->
              <div class="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between text-[11px] text-stone-500 mb-1">
                    <span class="uppercase tracking-wider font-semibold text-emerald-900">${prod.categoryName}</span>
                    <span>MOQ: ${prod.moq} pcs</span>
                  </div>
                  <h3 class="text-base font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
                    <a href="#product/${prod.id}">${prod.name}</a>
                  </h3>
                  <p class="text-xs text-stone-500 mt-1 line-clamp-2">${prod.subtitle}</p>
                </div>

                <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span class="text-xs text-stone-400 block -mb-0.5">Starting at</span>
                    <span class="text-lg font-black text-stone-900">$${prod.price.toFixed(2)}</span>
                    <span class="text-xs text-stone-500">/ ${prod.unit}</span>
                  </div>

                  <div class="flex items-center gap-2">
                    <button data-add-quick-id="${prod.id}" class="btn-card-quick-add px-3.5 py-2 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5" title="Add Minimum Order to Cart">
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                      <span>Add</span>
                    </button>
                    <a href="#product/${prod.id}" class="p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-100 rounded-xl transition-colors" title="View Full Specs">
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
      <!-- 4. ECO-CREDENTIALS COUNTER & STATISTICS     -->
      <!-- ========================================== -->
      <section class="bg-emerald-950 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-16 relative overflow-hidden max-w-7xl mx-auto shadow-2xl">
        <!-- Botanical pattern overlay -->
        <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div class="relative z-10 max-w-3xl mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block mb-2">Verified Environmental Impact</span>
          <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight font-serif text-white">
            Real Metrics. Real Trees. Zero Greenwashing.
          </h2>
          <p class="text-emerald-200/80 text-sm sm:text-base mt-4 leading-relaxed font-sans">
            Every millimeter of paperboard we mill is certified by the Forest Stewardship Council®. Our closed-loop manufacturing system returns 94% of process water clean to local aquifers.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          ${SUSTAINABILITY_STATS.map(stat => `
            <div class="bg-emerald-900/50 border border-emerald-800/60 rounded-3xl p-6 sm:p-8 space-y-2 backdrop-blur-sm">
              <span class="text-3xl sm:text-4xl lg:text-5xl font-black text-emerald-300 font-serif tracking-tight block">
                ${stat.displayValue}
              </span>
              <h3 class="text-sm font-bold text-white">${stat.label}</h3>
              <p class="text-xs text-emerald-200/70 leading-relaxed">${stat.subtext}</p>
            </div>
          `).join('')}
        </div>
      </section>


      <!-- ========================================== -->
      <!-- 5. BARRIER TECH COMPARISON SECTION         -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6">
            <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block">Clean Chemistry Breakthrough</span>
            <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
              Why Traditional "Paper" Packaging Still Fails the Planet
            </h2>
            <p class="text-stone-600 text-sm leading-relaxed">
              Standard takeaway containers, coffee cups, and glossy cosmetic boxes are secretly lined with a microscopic film of polyethylene (PE) plastic or fluorochemical (PFAS) coatings to stop grease. This plastic layer gums up recycling pulpers, forcing 91% of them straight into municipal incinerators and landfills.
            </p>

            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 font-bold">✓</div>
                <div>
                  <h4 class="text-xs font-bold text-stone-900">EcoPack Aqueous Dispersion</h4>
                  <p class="text-xs text-stone-500 mt-0.5">Water-borne plant starches repel hot oil and grease. Dissolves cleanly in standard paper mill hydro-pulpers for 100% fiber recovery.</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 rounded-2xl bg-stone-100/80 border border-stone-200">
                <div class="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center flex-shrink-0 font-bold">✗</div>
                <div>
                  <h4 class="text-xs font-bold text-stone-900">Conventional Polyethylene (PE) Lining</h4>
                  <p class="text-xs text-stone-500 mt-0.5">Petroleum plastic fused to paperboard. Rejects municipal paper sorting; takes 450+ years to degrade into microplastics.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Infographic Visual Box -->
          <div class="lg:col-span-6">
            <div class="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-800 space-y-6">
              <div class="flex items-center justify-between border-b border-stone-800 pb-4">
                <span class="text-xs font-mono text-emerald-400 font-bold">LAB SPECIFICATION #EP-2026</span>
                <span class="text-xs text-stone-400">EN 13432 Compost Standard</span>
              </div>

              <div class="space-y-4">
                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-300">Curbside Blue Bin Repulpability</span>
                    <span class="text-emerald-400 font-bold">100% (Full Grade 1 Recyclable)</span>
                  </div>
                  <div class="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-300">Soil Biodegradation Window</span>
                    <span class="text-emerald-400 font-bold">&lt; 84 Days in Backyard Soil</span>
                  </div>
                  <div class="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: 95%"></div>
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex justify-between text-xs">
                    <span class="text-stone-300">PFAS & Heavy Metal Concentration</span>
                    <span class="text-emerald-400 font-bold">0.00 ppm (Non-Detectable)</span>
                  </div>
                  <div class="w-full bg-stone-800 rounded-full h-2 overflow-hidden">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-stone-800 text-xs text-stone-400 flex items-center justify-between">
                <span>Verified by TÜV Austria OK Compost</span>
                <a href="#about" class="text-emerald-400 hover:text-emerald-300 font-bold underline">Read Whitepaper →</a>
              </div>
            </div>
          </div>

        </div>
      </section>


      <!-- ========================================== -->
      <!-- 6. CLIENT TESTIMONIALS                     -->
      <!-- ========================================== -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-800 block mb-2">Client Trust</span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight font-serif">
            Loved by Fast-Growing D2C & Hospitality Leaders
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          ${TESTIMONIALS.map(t => `
            <div class="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
              <div class="space-y-4">
                <div class="flex items-center gap-1 text-amber-500 text-sm">
                  ★ ★ ★ ★ ★
                </div>
                <p class="text-stone-700 text-sm sm:text-base leading-relaxed italic font-serif">
                  "${t.quote}"
                </p>
              </div>

              <div class="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 class="text-xs font-bold text-stone-900">${t.author}</h4>
                  <p class="text-[11px] text-stone-500">${t.role} • ${t.company}</p>
                </div>
                <span class="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
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


// === Module: src/views/ProductsView.js ===
function renderProductsView(activeCategory = 'all', searchQuery = '') {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      <!-- Catalog Page Header -->
      <div class="bg-gradient-to-r from-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-xl relative overflow-hidden">
        <div class="absolute -right-8 -top-8 w-72 h-72 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="relative z-10 max-w-2xl space-y-3">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800/60">
            <span>Stock & Custom Runs</span> • <span>Direct Mill Pricing</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white">
            Sustainable Packaging Catalog
          </h1>
          <p class="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Every product is engineered with zero plastic films, non-toxic water-based inks, and certified FSC® fibers. Filter by industry, compare MOQ tiers, or order instant CAD samples.
          </p>
        </div>
      </div>

      <!-- Filter Controls & Search Toolbar -->
      <div class="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-4">
        
        <!-- Top Toolbar: Search & Sort -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          <!-- Search Bar -->
          <div class="relative flex-1 max-w-md">
            <svg class="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <input type="text" id="catalog-search-input" value="${searchQuery}" placeholder="Search pizza boxes, perfume rigid boxes, mailers..." class="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-700" />
          </div>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-3 justify-end">
            <span class="text-xs text-stone-500 font-semibold hidden sm:inline">Sort:</span>
            <select id="catalog-sort-select" class="text-xs font-semibold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 text-stone-800">
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="moq-asc">MOQ: Low to High</option>
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold pt-2 border-t border-stone-100">
          <button data-cat="all" class="cat-pill-btn px-4 py-2 rounded-xl transition-all whitespace-nowrap ${activeCategory === 'all' ? 'bg-emerald-900 text-white shadow-sm' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}">
            All Formats (${PRODUCTS.length})
          </button>
          ${CATEGORIES.map(c => `
            <button data-cat="${c.id}" class="cat-pill-btn px-4 py-2 rounded-xl transition-all whitespace-nowrap ${activeCategory === c.id ? 'bg-emerald-900 text-white shadow-sm' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}">
              ${c.shortName} (${c.itemCount})
            </button>
          `).join('')}
        </div>

      </div>

      <!-- Results Count Status -->
      <div class="flex items-center justify-between text-xs text-stone-500 font-semibold px-1">
        <span id="catalog-results-count">Showing products</span>
        <span class="text-emerald-800">🌱 100% Curbside Repulpable Verified</span>
      </div>

      <!-- Product Cards Grid -->
      <div id="catalog-products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <!-- Rendered via JS -->
      </div>

      <!-- Custom Packaging CTA Banner -->
      <div class="bg-amber-50/80 rounded-3xl p-8 border border-amber-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-xs uppercase font-extrabold tracking-wider text-amber-900">Custom Sizing & CAD Samples</span>
          <h3 class="text-xl font-extrabold text-stone-900 font-serif">Need Bespoke Dimensions or Unique Die-Cuts?</h3>
          <p class="text-xs text-stone-600 max-w-xl">
            Our structural packaging lab crafts tailored dielines within 24 hours. We ship physical unprinted CAD mockups made on our automated digital cutting table in 48 hours.
          </p>
        </div>
        <a href="#quote" class="px-6 py-3.5 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex-shrink-0 flex items-center gap-2">
          <span>Launch Custom CAD Configurator</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
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
      // Featured first
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Update counter
    if (resultsCount) {
      resultsCount.textContent = `Showing ${list.length} of ${PRODUCTS.length} packaging solutions`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-400 mx-auto mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h3 class="text-base font-bold text-stone-900 mb-1">No matching packaging found</h3>
          <p class="text-xs text-stone-500 max-w-sm mx-auto mb-4">Try searching for "pizza", "mailer", "rigid", or clear your category filter.</p>
          <button id="btn-reset-filters" class="px-4 py-2 bg-emerald-800 text-white text-xs font-bold rounded-xl shadow">Reset Filters</button>
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
      <div class="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-800/40 transition-all duration-300 flex flex-col justify-between group">
        
        <!-- Image Area with Badges & Quick View -->
        <div class="relative bg-gradient-to-b from-stone-50 to-stone-100/70 p-5 flex items-center justify-center h-56 border-b border-stone-100 overflow-hidden">
          <span class="absolute top-3.5 left-3.5 z-10 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full shadow-xs">
            ${prod.badge || 'FSC® 100%'}
          </span>
          
          <div class="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            ${getProductSvg(prod.svgType, 'grid')}
          </div>

          <!-- Quick View Trigger -->
          <button data-quickview-id="${prod.id}" class="btn-grid-quickview absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 hover:bg-emerald-900 hover:text-white text-stone-700 text-xs font-bold rounded-xl shadow-md border border-stone-200 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            <span>Quick View</span>
          </button>
        </div>

        <!-- Content Area -->
        <div class="p-5 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] text-stone-500 mb-1">
              <span class="uppercase tracking-wider font-bold text-emerald-900">${prod.categoryName}</span>
              <span class="bg-stone-100 px-2 py-0.5 rounded font-medium">MOQ: ${prod.moq} pcs</span>
            </div>
            <h3 class="text-sm font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-snug">
              <a href="#product/${prod.id}">${prod.name}</a>
            </h3>
            <p class="text-[11px] text-stone-500 mt-1 line-clamp-2">${prod.subtitle}</p>
            <div class="mt-2 text-[10px] text-stone-400 font-medium">
              Board: <span class="text-stone-700">${prod.material.split('(')[0]}</span>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-3 border-t border-stone-100 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-stone-400 block -mb-1">From</span>
              <span class="text-base font-black text-stone-900">$${prod.price.toFixed(2)}</span>
              <span class="text-[10px] text-stone-500">/ ${prod.unit}</span>
            </div>

            <div class="flex items-center gap-1.5">
              <button data-add-prod-id="${prod.id}" class="btn-grid-add px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 active:scale-95 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1" title="Add MOQ to Cart">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                <span>Add</span>
              </button>
              <a href="#product/${prod.id}" class="p-1.5 text-stone-400 hover:text-stone-900 hover:bg-stone-100 rounded-xl transition-colors" title="View Specifications">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

        </div>

      </div>
    `).join('');

    // Attach event listeners to buttons
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
        btn.className = 'cat-pill-btn px-4 py-2 rounded-xl transition-all whitespace-nowrap bg-emerald-900 text-white shadow-sm';
      } else {
        btn.className = 'cat-pill-btn px-4 py-2 rounded-xl transition-all whitespace-nowrap bg-stone-100 text-stone-600 hover:bg-stone-200';
      }
    });
  }

  // Category Buttons
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      updateCategoryTabs();
      filterAndRender();
    });
  });

  // Search input live filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterAndRender();
    });
  }

  // Sort select
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  // Initial render
  filterAndRender();
}


// === Module: src/views/ProductDetailView.js ===
function renderProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];

  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      <!-- Breadcrumbs -->
      <nav class="flex items-center text-xs font-semibold text-stone-500 gap-2">
        <a href="#home" class="hover:text-emerald-800 transition-colors">Home</a>
        <span>/</span>
        <a href="#products" class="hover:text-emerald-800 transition-colors">Catalog</a>
        <span>/</span>
        <a href="#products?category=${product.category}" class="hover:text-emerald-800 transition-colors">${product.categoryName}</a>
        <span>/</span>
        <span class="text-stone-900 truncate max-w-xs">${product.name}</span>
      </nav>

      <!-- Main PDP Product Hero Section (Gallery + Configurator) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Gallery & Packaging Angle View Switcher (6 cols) -->
        <div class="lg:col-span-6 space-y-4">
          
          <!-- Main Visual Stage Box -->
          <div class="relative bg-gradient-to-b from-stone-50 to-stone-100/80 rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm flex items-center justify-center min-h-[380px] sm:min-h-[460px] overflow-hidden group">
            
            <!-- Top Badges -->
            <div class="absolute top-5 left-5 flex items-center gap-2 z-10">
              <span class="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-950 text-emerald-300 shadow-xs">
                ${product.badge || 'FSC® Certified'}
              </span>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 text-stone-700 border border-stone-200 shadow-xs hidden sm:inline-block">
                ${product.coating.split('(')[0]}
              </span>
            </div>

            <!-- Visual SVG Stage with dynamic angle transitions -->
            <div id="pdp-main-stage" class="w-full h-full max-h-80 flex items-center justify-center transition-all duration-300">
              ${getProductSvg(product.svgType, 'pdp')}
            </div>

            <!-- Eco Watermark -->
            <div class="absolute bottom-4 right-4 text-[10px] text-stone-400 font-mono tracking-wider">
              100% RECYCLABLE / BIO-DEGRADABLE
            </div>
          </div>

          <!-- Angle Thumbnail Selector -->
          <div class="grid grid-cols-4 gap-3">
            <button data-view="perspective" class="pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-900">3D Angle</span>
            </button>

            <button data-view="open" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Open Box</span>
            </button>

            <button data-view="dieline" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">CAD Dieline</span>
            </button>

            <button data-view="detail" class="pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all">
              <div class="w-8 h-8 flex items-center justify-center">
                <svg class="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              </div>
              <span class="text-[10px] font-bold text-stone-600">Macro Zoom</span>
            </button>
          </div>

          <!-- Eco Badges Row -->
          <div class="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl flex flex-wrap items-center justify-between gap-2 text-xs">
            ${product.ecoBadges.map(badge => `
              <span class="flex items-center gap-1 text-emerald-950 font-bold">
                <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
                <span>${badge}</span>
              </span>
            `).join('')}
          </div>

        </div>

        <!-- Right: Specifications & Interactive Configurator (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-bold uppercase tracking-widest text-emerald-900">${product.categoryName}</span>
              <span class="text-xs text-stone-400">•</span>
              <span class="text-xs text-amber-900 font-semibold bg-amber-50 px-2 py-0.5 rounded">Lead Time: ${product.leadTime.split('(')[0]}</span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug font-serif">
              ${product.name}
            </h1>

            <p class="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
              ${product.description}
            </p>
          </div>

          <!-- Live Tier Pricing Display -->
          <div class="p-5 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-xs text-stone-400 block -mb-1">Active Unit Price</span>
                <span id="pdp-active-unit-price" class="text-3xl font-black text-stone-900">$${product.price.toFixed(2)}</span>
                <span class="text-xs text-stone-500">/ ${product.unit}</span>
              </div>
              <div class="text-right">
                <span class="text-xs text-stone-400 block -mb-1">Estimated Line Total</span>
                <span id="pdp-active-total" class="text-xl font-extrabold text-emerald-900">$${(product.price * product.moq).toFixed(2)}</span>
              </div>
            </div>

            <!-- Tiered Pricing Matrix Table -->
            <div class="pt-3 border-t border-stone-100">
              <span class="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">Volume Tier Discounts</span>
              <div class="grid grid-cols-4 gap-2 text-center text-xs">
                ${product.pricingTiers.map((tier, idx) => `
                  <button data-tier-qty="${tier.qty}" data-tier-price="${tier.pricePerUnit}" class="btn-tier-select p-2 rounded-xl border ${idx === 1 ? 'border-emerald-800 bg-emerald-50/60 font-bold text-emerald-950' : 'border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400'} transition-all">
                    <span class="block text-[11px] font-bold">${tier.qty.toLocaleString()} pcs</span>
                    <span class="block text-xs font-black text-stone-900 mt-0.5">$${tier.pricePerUnit.toFixed(2)}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Product Customization Form -->
          <div class="space-y-4">
            
            <!-- Dimensions Selector -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5 flex items-center justify-between">
                <span>Select Dimensions & Volume</span>
                <a href="#quote" class="text-emerald-800 font-semibold hover:underline">Need Custom Sizing?</a>
              </label>
              <select id="pdp-select-size" class="w-full text-xs font-semibold px-3.5 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-stone-900">
                ${product.dimensionsAvailable.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>

            <!-- Finish & Printing Selection -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5">Surface Finish & Inks</label>
              <select id="pdp-select-finish" class="w-full text-xs font-semibold px-3.5 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none text-stone-900">
                ${product.finishOptions.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <!-- Quantity Stepper -->
            <div>
              <label class="block text-xs font-bold text-stone-800 mb-1.5 flex items-center justify-between">
                <span>Production Quantity (Units)</span>
                <span class="text-stone-500 font-normal">Minimum Order Quantity: ${product.moq}</span>
              </label>
              <div class="flex items-center gap-3">
                <div class="flex items-center border border-stone-200 rounded-xl bg-white overflow-hidden shadow-xs flex-1">
                  <button id="pdp-qty-minus" class="px-4 py-2.5 text-stone-600 hover:bg-stone-100 font-bold text-sm">-</button>
                  <input type="number" id="pdp-qty-input" value="${product.moq}" min="${product.moq}" step="50" class="w-full text-center text-xs font-bold py-2.5 focus:outline-none" />
                  <button id="pdp-qty-plus" class="px-4 py-2.5 text-stone-600 hover:bg-stone-100 font-bold text-sm">+</button>
                </div>
                <button id="btn-request-sample" class="px-4 py-2.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors border border-stone-200 whitespace-nowrap">
                  Request $15 Sample Kit
                </button>
              </div>
            </div>

          </div>

          <!-- Add to Cart & Quote Actions -->
          <div class="space-y-3 pt-2">
            <button id="pdp-btn-add-cart" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span id="pdp-btn-add-text">Add ${product.moq} Units to Cart</span>
            </button>

            <div class="grid grid-cols-2 gap-3">
              <a href="#quote" class="py-3 text-center bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-stone-800 transition-colors">
                Upload Custom Artwork / CAD
              </a>
              <a href="#about" class="py-3 text-center bg-white hover:bg-stone-50 border border-stone-200 rounded-xl text-xs font-bold text-emerald-900 transition-colors">
                Download Dieline PDF (.ai)
              </a>
            </div>
          </div>

        </div>

      </div>


      <!-- ========================================== -->
      <!-- TECHNICAL SPECS, ECO IMPACT & LEAD TABS    -->
      <!-- ========================================== -->
      <div class="bg-white rounded-3xl border border-stone-200 shadow-sm p-6 sm:p-10 space-y-8">
        
        <!-- Tabs Header -->
        <div class="flex items-center border-b border-stone-200 gap-8 overflow-x-auto text-xs font-bold text-stone-500 pb-3">
          <button data-tab="tab-specs" class="pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap">
            Technical Engineering Specs
          </button>
          <button data-tab="tab-eco" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Sustainability & Disposal Guide
          </button>
          <button data-tab="tab-artwork" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Artwork & Dieline Guidelines
          </button>
          <button data-tab="tab-shipping" class="pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap">
            Production & Freight Logistics
          </button>
        </div>

        <!-- TAB 1: SPECS -->
        <div id="tab-specs" class="pdp-tab-content space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Board Composition</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.material}</span>
            </div>
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Board Weight / GSM</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.boardWeight}</span>
            </div>
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Barrier Coating</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.coating}</span>
            </div>
            <div class="p-4 rounded-2xl bg-stone-50 border border-stone-100">
              <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">Standard Preset Size</span>
              <span class="text-xs font-extrabold text-stone-900 block">${product.dimensionsPreset}</span>
            </div>
          </div>

          <div class="space-y-3 pt-2">
            <h4 class="text-xs font-bold uppercase tracking-wider text-stone-700">Structural Highlights</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${product.features.map(f => `
                <div class="flex items-center gap-2.5 text-xs text-stone-700">
                  <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- TAB 2: ECO -->
        <div id="tab-eco" class="pdp-tab-content hidden space-y-4">
          <div class="p-6 bg-emerald-950 text-white rounded-2xl space-y-3">
            <h4 class="text-sm font-bold text-emerald-300">100% Curbside Repulpable Certification</h4>
            <p class="text-xs text-emerald-100/80 leading-relaxed">
              Unlike traditional packaging with laminated PE plastic or metallic foils that require industrial separation, this product can be disposed directly into residential blue paper bins. The paper fibers dissolve cleanly in commercial paper mills to become new corrugated cartons within 14 days.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div class="p-4 rounded-2xl border border-stone-200">
              <h5 class="text-xs font-bold text-stone-900 mb-1">Curbside Recycling</h5>
              <p class="text-[11px] text-stone-500">100% blue bin recyclable in North America, UK, and European Union.</p>
            </div>
            <div class="p-4 rounded-2xl border border-stone-200">
              <h5 class="text-xs font-bold text-stone-900 mb-1">Compostability</h5>
              <p class="text-[11px] text-stone-500">Disintegrates in under 90 days in commercial or backyard soil without toxicity.</p>
            </div>
            <div class="p-4 rounded-2xl border border-stone-200">
              <h5 class="text-xs font-bold text-stone-900 mb-1">Non-Toxic Inks</h5>
              <p class="text-[11px] text-stone-500">Printed with plant-based soy and algae inks free from volatile organic compounds (VOCs).</p>
            </div>
          </div>
        </div>

        <!-- TAB 3: ARTWORK -->
        <div id="tab-artwork" class="pdp-tab-content hidden space-y-4">
          <div class="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
            <h4 class="font-bold text-stone-900">Digital Artwork File Requirements:</h4>
            <ul class="list-disc pl-5 space-y-1 text-stone-600">
              <li>Submit vector artwork in Adobe Illustrator (.AI), PDF, or EPS format.</li>
              <li>Maintain 3mm (1/8") external bleed past all dieline trim cuts.</li>
              <li>Keep all critical logos and copy 5mm inside fold crease lines.</li>
              <li>Color profile: CMYK or Pantone Solid Coated / Uncoated.</li>
              <li>Minimum text size: 6pt for positive type, 8pt for reversed knocked-out type.</li>
            </ul>
          </div>
        </div>

        <!-- TAB 4: SHIPPING -->
        <div id="tab-shipping" class="pdp-tab-content hidden space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div class="p-4 rounded-2xl border border-stone-200 space-y-1">
              <span class="font-bold text-stone-900 block">Stock Blank Format</span>
              <p class="text-stone-500">Ships within 48 to 72 hours from our Portland, OR or Antwerp logistics hubs.</p>
            </div>
            <div class="p-4 rounded-2xl border border-stone-200 space-y-1">
              <span class="font-bold text-stone-900 block">Custom Printed Run</span>
              <p class="text-stone-500">Standard production time is 7-10 business days following digital proof approval.</p>
            </div>
          </div>
        </div>

      </div>


      <!-- ========================================== -->
      <!-- RELATED PACKAGING SOLUTIONS                -->
      <!-- ========================================== -->
      <div class="space-y-6 pt-6">
        <h3 class="text-xl font-bold text-stone-900 font-serif">Frequently Paired Packaging</h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          ${PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.category === 'shipping')).slice(0, 3).map(rel => `
            <a href="#product/${rel.id}" class="p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-700/40 shadow-xs hover:shadow-md transition-all flex items-center gap-4 group">
              <div class="w-16 h-16 rounded-xl bg-stone-100 flex-shrink-0 p-1 flex items-center justify-center">
                ${getProductSvg(rel.svgType, 'thumb')}
              </div>
              <div>
                <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">${rel.categoryName}</span>
                <h4 class="text-xs font-bold text-stone-900 group-hover:text-emerald-900 transition-colors leading-tight mt-0.5">${rel.name}</h4>
                <span class="text-xs font-black text-stone-800 mt-1 block">$${rel.price.toFixed(2)} / ${rel.unit}</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function initProductDetailView(productId) {
  const product = getProductById(productId) || PRODUCTS[0];

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

  function recalculatePrice() {
    // Determine unit price based on tiered pricing matrix
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

    // Highlight tier button
    document.querySelectorAll('.btn-tier-select').forEach(btn => {
      const q = parseInt(btn.getAttribute('data-tier-qty'));
      if (q === matchedTier.qty) {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-emerald-800 bg-emerald-50/60 font-bold text-emerald-950 transition-all';
      } else {
        btn.className = 'btn-tier-select p-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-700 hover:border-stone-400 transition-all';
      }
    });
  }

  // Tier buttons click
  document.querySelectorAll('.btn-tier-select').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const q = parseInt(e.currentTarget.getAttribute('data-tier-qty'));
      currentQty = q;
      if (qtyInput) qtyInput.value = currentQty;
      recalculatePrice();
    });
  });

  // Quantity Stepper
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
      currentQty = Math.max(product.moq, parseInt(e.target.value) || product.moq);
      qtyInput.value = currentQty;
      recalculatePrice();
    });
  }

  // Add To Cart
  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      const size = sizeSelect ? sizeSelect.value : product.dimensionsPreset;
      const finish = finishSelect ? finishSelect.value : product.finishOptions[0];

      cart.addItem(product, currentQty, {
        size,
        finish,
        customPrice: currentUnitPrice
      });

      // Quick feedback toast or button animation
      if (window.gsap) {
        window.gsap.fromTo(btnAddToCart, { scale: 0.97 }, { scale: 1, duration: 0.25, ease: 'power2.out' });
      }
    });
  }

  // Request Sample Kit
  if (btnSample) {
    btnSample.addEventListener('click', () => {
      cart.addItem({
        id: 'sample-kit-' + product.id,
        name: `Sample Kit: ${product.name}`,
        price: 15.00,
        unit: 'sample box',
        svgType: product.svgType,
        dimensionsPreset: '1-unit physical CAD mockup'
      }, 1, {
        size: 'Physical CAD Mockup',
        finish: 'Sample Swatch Book Included',
        customPrice: 15.00
      });
    });
  }

  // Angle View Selector
  const stage = document.getElementById('pdp-main-stage');
  document.querySelectorAll('.pdp-thumb-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.pdp-thumb-btn').forEach(b => {
        b.className = 'pdp-thumb-btn p-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-400 shadow-xs flex flex-col items-center gap-1.5 transition-all';
      });
      btn.className = 'pdp-thumb-btn active p-3 rounded-2xl bg-white border-2 border-emerald-800 shadow-xs flex flex-col items-center gap-1.5 transition-all';

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
    tabBtn.addEventListener('click', (e) => {
      document.querySelectorAll('.pdp-tab-trigger').forEach(b => {
        b.className = 'pdp-tab-trigger hover:text-stone-900 transition-colors whitespace-nowrap';
      });
      tabBtn.className = 'pdp-tab-trigger active text-emerald-900 border-b-2 border-emerald-800 pb-3 -mb-3 whitespace-nowrap';

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

  // Run initial recalculation
  recalculatePrice();
}


// === Module: src/views/AboutView.js ===
function renderAboutView() {
  return `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-20">
      
      <!-- Mission Hero -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
          🌱 Zero Plastic Manifesto
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight font-serif">
          Engineered for Beauty. Made to Disappear.
        </h1>
        <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
          At EcoPack Studio, we believe packaging should never outlive the product it protects. Our mission is to permanently eliminate single-use plastics from global commerce by creating architectural, repulpable paperboard packaging that decomposes back into rich forest soil.
        </p>
      </div>

      <!-- Core Commitments Pillar Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">
            01
          </div>
          <h3 class="text-lg font-bold text-stone-900 font-serif">Zero Synthetic Plastics</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            We do not manufacture or sell packaging with polyethylene (PE) linings, petroleum bubble wrap, polyvinyl chloride (PVC), or EVA foam cavities. Every liner, window, and adhesive is derived from plant cellulose, tree resin, or corn starches.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xl">
            02
          </div>
          <h3 class="text-lg font-bold text-stone-900 font-serif">Closed-Loop Agroforestry</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            100% of our virgin fiber is harvested from certified FSC® replenishing plantations where 3 saplings are planted for every mature tree harvested. Over 70% of our corrugated fluting comes from post-consumer recycled cardboard.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-stone-100 text-stone-900 flex items-center justify-center font-bold text-xl">
            03
          </div>
          <h3 class="text-lg font-bold text-stone-900 font-serif">Architectural Craftsmanship</h3>
          <p class="text-xs text-stone-600 leading-relaxed">
            Sustainability without luxury is a compromise modern brands shouldn't have to make. We engineer crisp mitered v-grooves, satisfying magnetic snaps, and buttery soft-touch tactile varnishes that rival traditional luxury packaging.
          </p>
        </div>
      </div>

      <!-- Circular Life Cycle Interactive Diagram -->
      <div class="bg-stone-950 text-white rounded-3xl sm:rounded-[40px] p-8 sm:p-14 border border-stone-800 shadow-2xl relative overflow-hidden">
        <div class="max-w-2xl mb-12">
          <span class="text-xs uppercase font-extrabold tracking-widest text-emerald-400 block mb-2">The Closed-Loop Model</span>
          <h2 class="text-2xl sm:text-4xl font-extrabold font-serif">From Forest Canopy to Soil Nutrient</h2>
          <p class="text-stone-400 text-xs sm:text-sm mt-3">
            How EcoPack Studio's circular supply chain ensures zero landfill footprint at every touchpoint.
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
            <div class="p-6 bg-white rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
              <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                ${mat.gsmRange}
              </span>
              <h3 class="text-base font-bold text-stone-900">${mat.name}</h3>
              <p class="text-xs text-stone-500 leading-relaxed">${mat.description}</p>
              
              <div class="pt-3 border-t border-stone-100 text-[11px] space-y-1">
                <div><span class="font-bold text-stone-700">Ideal For:</span> <span class="text-stone-500">${mat.useCase}</span></div>
                <div><span class="font-bold text-stone-700">Disposal:</span> <span class="text-emerald-800 font-semibold">${mat.sustainability}</span></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Certifications Matrix -->
      <div class="bg-stone-100 rounded-3xl p-8 sm:p-12 border border-stone-200 text-center space-y-6">
        <h3 class="text-xl sm:text-2xl font-bold text-stone-900 font-serif">Third-Party Environmental Verifications</h3>
        <p class="text-xs text-stone-600 max-w-xl mx-auto">
          We submit all paper grades, inks, and adhesives for strict independent laboratory analysis against international packaging benchmarks.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          ${CERTIFICATIONS.map(c => `
            <div class="p-4 bg-white rounded-2xl border border-stone-200/80 shadow-xs">
              <span class="text-xs font-bold text-emerald-900 block">${c.name}</span>
              <span class="text-[10px] font-mono text-stone-400 block mb-1">${c.code}</span>
              <p class="text-[11px] text-stone-500 leading-snug">${c.description}</p>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function initAboutView() {
  // Page is primarily informative; smoothly scrolls to top
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
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-16">
      
      <!-- Page Header -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
          📐 Bespoke Structural Engineering
        </span>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight font-serif">
          Request a Custom Packaging Quote
        </h1>
        <p class="text-stone-600 text-sm sm:text-base leading-relaxed">
          Need a non-standard size, unique die-cut flap, or full interior-exterior CMYK soy printing? Configure your exact requirements below for an instant price range and digital CAD proof within 24 hours.
        </p>
      </div>

      <!-- Split Layout: Contact Info & FAQ (Left) vs Interactive Configurator (Right) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        <!-- Left: Studio Info, Engineer Contact & FAQ (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <!-- Direct Studio Info Box -->
          <div class="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <h3 class="text-lg font-bold text-stone-900 font-serif">Packaging Studio & Plant</h3>
            
            <div class="space-y-4 text-xs text-stone-600">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Innovation HQ & Mill:</span>
                  <span>482 Greenleaf Way, Suite 100, Portland, OR 97201</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Engineering Inquiries:</span>
                  <span>cad@ecopackstudio.com</span>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <span class="font-bold text-stone-900 block text-xs">Direct Phone Line:</span>
                  <span>+1 (800) 419-PACK (Mon - Fri, 8am - 6pm PST)</span>
                </div>
              </div>
            </div>

            <!-- Speak with a Packaging Engineer Badge -->
            <div class="p-4 bg-emerald-950 text-emerald-200 rounded-2xl flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                EP
              </div>
              <div class="text-xs">
                <span class="font-bold text-white block">Dedicated Structural Engineer</span>
                <span>Assigned to review every CAD submission within 4 business hours.</span>
              </div>
            </div>
          </div>

          <!-- Custom Quote FAQs -->
          <div class="space-y-3">
            <h4 class="text-sm font-bold text-stone-900 font-serif">Frequently Asked Questions</h4>
            
            <details class="bg-white rounded-2xl border border-stone-200 p-4 text-xs group cursor-pointer" open>
              <summary class="font-bold text-stone-900 flex justify-between items-center">
                <span>How fast do custom CAD dielines take?</span>
                <span class="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p class="mt-2 text-stone-600 leading-relaxed">
                Our CAD team turns around vector Adobe Illustrator (.ai) and PDF dieline templates within 24 hours of form submission.
              </p>
            </details>

            <details class="bg-white rounded-2xl border border-stone-200 p-4 text-xs group cursor-pointer">
              <summary class="font-bold text-stone-900 flex justify-between items-center">
                <span>Can I receive a physical prototype before ordering?</span>
                <span class="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p class="mt-2 text-stone-600 leading-relaxed">
                Yes! We cut unprinted physical CAD prototypes directly on our digital flatbed cutters and express courier them to your office in 48 hours for $25 (credited toward your production order).
              </p>
            </details>

            <details class="bg-white rounded-2xl border border-stone-200 p-4 text-xs group cursor-pointer">
              <summary class="font-bold text-stone-900 flex justify-between items-center">
                <span>What are the minimum order quantities for custom sizes?</span>
                <span class="text-stone-400 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p class="mt-2 text-stone-600 leading-relaxed">
                Custom corrugated mailers and takeaway boxes start at only 500 units. Custom rigid setup boxes start at 250 units.
              </p>
            </details>
          </div>

        </div>

        <!-- Right: Interactive 4-Step Custom Quote Estimator (7 cols) -->
        <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs uppercase font-extrabold tracking-wider text-emerald-800">Interactive Estimator</span>
              <span class="text-xs font-mono text-stone-400">Step 1 of 4</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-extrabold text-stone-900 font-serif">
              Configure Your Packaging Specification
            </h3>
          </div>

          <form id="custom-quote-form" class="space-y-6">
            
            <!-- STEP 1: Box Type Selection -->
            <div class="space-y-3">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. Select Packaging Architecture *
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <label class="quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50/50 cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="mailer" checked class="hidden" />
                  <span class="text-lg">📦</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Corrugated Mailer</span>
                  <span class="text-[10px] text-stone-500">Roll-end tuck front</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="rigid" class="hidden" />
                  <span class="text-lg">✨</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Rigid Setup Box</span>
                  <span class="text-[10px] text-stone-500">Magnetic luxury</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="food" class="hidden" />
                  <span class="text-lg">🍕</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Food / Takeaway</span>
                  <span class="text-[10px] text-stone-500">Aqueous barrier coated</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="honeycomb" class="hidden" />
                  <span class="text-lg">✉️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Padded Mailer</span>
                  <span class="text-[10px] text-stone-500">Honeycomb paper</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="bag" class="hidden" />
                  <span class="text-lg">🛍️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Paper Bag / Tote</span>
                  <span class="text-[10px] text-stone-500">Twisted handle kraft</span>
                </label>

                <label class="quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all">
                  <input type="radio" name="box-style" value="custom" class="hidden" />
                  <span class="text-lg">⚙️</span>
                  <span class="text-xs font-bold text-stone-900 block mt-2">Custom Shape</span>
                  <span class="text-[10px] text-stone-500">Bespoke CAD dieline</span>
                </label>
              </div>
            </div>

            <!-- STEP 2: Custom Dimensions Input (Length, Width, Height) -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                2. Interior Dimensions (L × W × H) *
              </label>
              
              <div class="grid grid-cols-3 gap-3">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Length (mm)</label>
                  <input type="number" id="dim-length" value="250" min="50" max="1000" class="w-full text-xs font-bold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Width (mm)</label>
                  <input type="number" id="dim-width" value="180" min="50" max="1000" class="w-full text-xs font-bold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Depth / Height (mm)</label>
                  <input type="number" id="dim-height" value="65" min="20" max="500" class="w-full text-xs font-bold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Substrate Material & Flute</label>
                  <select id="quote-select-material" class="w-full text-xs font-semibold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="kraft-e">Recycled Natural Kraft (E-Flute 1.6mm)</option>
                    <option value="kraft-b">Heavy-Duty Kraft (B-Flute 3.0mm)</option>
                    <option value="white-e">Bleached White Liner (E-Flute 1.6mm)</option>
                    <option value="greyboard">1200 GSM Compressed Greyboard (Rigid)</option>
                    <option value="foodgrade">PFAS-Free Aqueous Food Grade Board</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] font-semibold text-stone-600 mb-1">Exterior & Interior Printing</label>
                  <select id="quote-select-print" class="w-full text-xs font-semibold px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none">
                    <option value="unprinted">Raw Natural (Unprinted)</option>
                    <option value="1color">1-Color Flexo Soy Ink Stamp</option>
                    <option value="cmyk-ext">Full Exterior CMYK Soy Inks</option>
                    <option value="cmyk-both">Full Exterior & Interior CMYK Print</option>
                    <option value="foil">Hot-Foil Stamping (Gold/Silver/Copper)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- STEP 3: Quantity Slider -->
            <div class="space-y-3 pt-2">
              <div class="flex items-center justify-between">
                <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                  3. Order Quantity: <span id="quote-qty-display" class="text-emerald-900 font-black">2,500 units</span>
                </label>
                <span class="text-xs text-stone-500 font-semibold" id="quote-moq-notice">Volume Tier: Mid-Scale Production</span>
              </div>
              <input type="range" id="quote-qty-slider" min="500" max="25000" step="250" value="2500" class="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-emerald-800" />
              <div class="flex justify-between text-[10px] text-stone-400 font-mono">
                <span>500 (MOQ)</span>
                <span>2,500 (Best Value)</span>
                <span>10,000</span>
                <span>25,000+</span>
              </div>
            </div>

            <!-- STEP 4: Artwork Upload & Contact Details -->
            <div class="space-y-3 pt-2">
              <label class="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                4. Upload Artwork / Dieline & Contact
              </label>

              <!-- Drag & Drop File Upload Box -->
              <div id="drop-zone" class="border-2 border-dashed border-stone-300 hover:border-emerald-700 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-stone-50/60">
                <input type="file" id="artwork-file-input" class="hidden" accept=".ai,.pdf,.eps,.psd,.svg,.png" />
                <div class="w-10 h-10 rounded-xl bg-stone-200/80 text-stone-600 flex items-center justify-center mx-auto mb-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>
                </div>
                <div class="text-xs font-bold text-stone-800" id="file-upload-title">Drop your vector artwork or dieline here</div>
                <div class="text-[11px] text-stone-500 mt-0.5">Supports .AI, .PDF, .EPS, .SVG (Up to 50MB)</div>
              </div>

              <!-- Contact Inputs -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <input type="text" id="quote-name" placeholder="Your Name *" class="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
                <div>
                  <input type="email" id="quote-email" placeholder="Work Email *" class="w-full text-xs px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none" required />
                </div>
              </div>
              <div>
                <textarea id="quote-notes" rows="2" placeholder="Specific notes (e.g., custom window cutout, fragile glass jar weight, timeline)..." class="w-full text-xs p-3 bg-stone-50 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-700 focus:outline-none"></textarea>
              </div>
            </div>

            <!-- Real-Time Price Preview Callout -->
            <div class="p-5 bg-gradient-to-r from-emerald-950 to-stone-900 text-white rounded-2xl shadow-lg flex items-center justify-between">
              <div>
                <span class="text-[10px] text-emerald-400 uppercase font-mono font-bold block">Estimated Unit Price Range</span>
                <span id="est-unit-price" class="text-2xl font-black text-white">$0.54 - $0.62</span>
                <span class="text-xs text-stone-400 block mt-0.5">Estimated Total: <span id="est-total-cost" class="font-bold text-emerald-300">$1,350.00</span></span>
              </div>
              <div class="text-right">
                <span class="text-[10px] text-emerald-400 bg-emerald-900/60 px-2 py-1 rounded-full font-semibold">CAD Sample Ready in 48h</span>
              </div>
            </div>

            <!-- Submit Button -->
            <button type="submit" id="btn-submit-quote" class="w-full py-4 bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] text-white font-bold text-sm rounded-2xl shadow-xl shadow-emerald-950/20 transition-all flex items-center justify-center gap-2">
              <span id="btn-quote-text">Submit Bespoke CAD Request</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>

            <!-- Success Message Notification -->
            <div id="quote-success-banner" class="hidden p-4 bg-emerald-100 border border-emerald-300 rounded-2xl text-emerald-950 text-xs space-y-1">
              <p class="font-bold">✓ Quote Request Received! Reference: <span id="quote-ref-id" class="font-mono font-black">#EPQ-91823</span></p>
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

  // Box style cards
  styleCards.forEach(card => {
    card.addEventListener('click', () => {
      styleCards.forEach(c => {
        c.className = 'quote-style-card p-3 rounded-2xl border border-stone-200 hover:border-stone-400 bg-white cursor-pointer flex flex-col justify-between transition-all';
      });
      card.className = 'quote-style-card active p-3 rounded-2xl border-2 border-emerald-800 bg-emerald-50/50 cursor-pointer flex flex-col justify-between transition-all';
      updatePriceEstimate();
    });
  });

  function updatePriceEstimate() {
    const qty = parseInt(slider.value);
    if (qtyDisplay) qtyDisplay.textContent = `${qty.toLocaleString()} units`;

    // Base calculation
    let basePrice = 1.10;
    if (qty >= 1000) basePrice = 0.82;
    if (qty >= 2500) basePrice = 0.58;
    if (qty >= 5000) basePrice = 0.44;
    if (qty >= 10000) basePrice = 0.32;

    const printVal = printSelect ? printSelect.value : 'unprinted';
    if (printVal === '1color') basePrice += 0.08;
    if (printVal === 'cmyk-ext') basePrice += 0.16;
    if (printVal === 'cmyk-both') basePrice += 0.28;
    if (printVal === 'foil') basePrice += 0.35;

    const low = (basePrice * 0.95).toFixed(2);
    const high = (basePrice * 1.12).toFixed(2);
    const totalEst = (basePrice * qty).toFixed(2);

    if (estUnitPrice) estUnitPrice.textContent = `$${low} - $${high}`;
    if (estTotalCost) estTotalCost.textContent = `$${Number(totalEst).toLocaleString()}`;
  }

  if (slider) slider.addEventListener('input', updatePriceEstimate);
  if (materialSelect) materialSelect.addEventListener('change', updatePriceEstimate);
  if (printSelect) printSelect.addEventListener('change', updatePriceEstimate);

  // File drag & drop
  if (dropZone && fileInput) {
    dropZone.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        fileTitle.textContent = `Attached: ${e.target.files[0].name} (${(e.target.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
        dropZone.classList.add('border-emerald-600', 'bg-emerald-50/50');
      }
    });
  }

  // Submit quote
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ref = 'EPQ-' + Math.floor(10000 + Math.random() * 90000);
      if (quoteRefId) quoteRefId.textContent = '#' + ref;
      if (successBanner) successBanner.classList.remove('hidden');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Quote Request Submitted ✓';
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


// === Module: src/main.js ===
document.addEventListener('DOMContentLoaded', () => {
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
});


})();
