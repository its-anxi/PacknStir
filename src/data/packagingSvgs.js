// High-fidelity SVG packaging mockups for PackNStir product line
// Designed with crisp white backgrounds, kraft cardboard tones, and leaf green accents

export function getProductSvg(type, variant = 'card', color = '#C29B70') {
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
