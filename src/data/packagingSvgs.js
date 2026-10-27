// High-fidelity SVG packaging mockups for EcoPack Studio products
// Designed with luxury earthy tones, realistic shading, fluting textures, and precision fold lines

export function getProductSvg(type, variant = 'perspective', color = '#C49A6C') {
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
