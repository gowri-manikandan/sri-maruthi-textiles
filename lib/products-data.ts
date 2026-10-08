export interface Product {
  id: string;
  code: string;
  name: string;
  category:
    | "bath-towels"
    | "pool-resort-towels"
    | "kitchen-utility-towels"
    | "checked-towels"
    | "plain-towels"
    | "white-towels"
    | "custom-weaves";
  categoryLabel: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  gsm: string;
  gsmValue: number;
  dimensions: string;
  blend: string;
  weaveType: string;
  colors: string[];
  moq: string;
  dispatchTime: string;
  image: string;
  alt: string;
  features: string[];
}

export interface ProductCategory {
  id: string;
  label: string;
  description: string;
  count?: number;
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "all",
    label: "All Products",
    description: "Complete catalogue of handloom cotton blend towels and institutional textiles.",
  },
  {
    id: "bath-towels",
    label: "Bath Towels",
    description: "Absorbent, durable cotton blend bath towels crafted for commercial wear and comfort.",
  },
  {
    id: "pool-resort-towels",
    label: "Pool & Resort Towels",
    description: "Generously sized, vibrant, colorfast towels designed for resorts, clubs, and pools.",
  },
  {
    id: "kitchen-utility-towels",
    label: "Kitchen & Utility Towels",
    description: "High-absorption, low-lint cotton textiles for commercial kitchens, prep areas and dining.",
  },
  {
    id: "checked-towels",
    label: "Checked Towels",
    description: "Authentic south Indian handloom check patterns woven with heritage yarn techniques.",
  },
  {
    id: "plain-towels",
    label: "Plain & Dyed Towels",
    description: "Rich solid colorways and natural unbleached finishes with uniform looped pile.",
  },
  {
    id: "white-towels",
    label: "White & Hotel Towels",
    description: "Bleach-safe, high-temperature wash optical white towels built for hospitality standards.",
  },
  {
    id: "custom-weaves",
    label: "Custom Weaves",
    description: "Custom borders, woven jacquard crests, custom GSM and sizes for orders over 1,000 pcs.",
  },
];

export const PRODUCTS_CATALOG: Product[] = [
  // --- Bath Towels ---
  {
    id: "classic-ribbed-bath-towel",
    code: "SMT-BT-01",
    name: "Classic Ribbed Border Bath Towel",
    category: "bath-towels",
    categoryLabel: "Bath Towels",
    badge: "BESTSELLER",
    shortDescription:
      "Plush, fast-absorbing handloom cotton blend towel featuring structured woven end borders for institutional resilience.",
    fullDescription:
      "Engineered for high-turnover hospitality and retail distribution. The balanced 80/20 cotton blend retains loft, softness, and absorbency wash after wash while preventing shrinkage and out-of-square warping.",
    gsm: "450 GSM",
    gsmValue: 450,
    dimensions: "75 × 150 cm",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Terry weave with ribbed flatweave end hem",
    colors: ["Warm Ivory", "Natural Beige", "Deep Olive", "Earthy Terracotta"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/bath-towels.jpg",
    alt: "Folded premium cotton blend bath towels with ribbed border on stone counter",
    features: [
      "Reinforced double-stitched side hems",
      "High loop density for rapid drying",
      "Commercial laundry tested to 100+ cycles",
      "Zero yarn slippage or edge fraying",
    ],
  },
  {
    id: "honeycomb-waffle-bath-towel",
    code: "SMT-BT-02",
    name: "Honeycomb Waffle Weave Bath Towel",
    category: "bath-towels",
    categoryLabel: "Bath Towels",
    badge: "QUICK DRY",
    shortDescription:
      "Lightweight, fast-drying three-dimensional waffle weave towel offering gentle exfoliation and high packing density.",
    fullDescription:
      "A modern aesthetic favored by boutique resorts, wellness centers, and home linen wholesalers. The waffle cell structure expands upon washing, creating micro-pockets that dry twice as fast as conventional terry.",
    gsm: "380 GSM",
    gsmValue: 380,
    dimensions: "70 × 140 cm",
    blend: "85% Combed Cotton / 15% Polyester",
    weaveType: "Three-dimensional honeycomb waffle weave",
    colors: ["Natural White", "Sage Green", "Storm Blue", "Heather Taupe", "Brass Ochre"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/custom/waffle-color-stack.jpg",
    alt: "Stack of waffle weave handloom cotton towels in earthy pastel tones",
    features: [
      "40% faster drying than standard terry",
      "Compact storage volume for resorts",
      "Pre-shrunk woven construction",
      "Breathable artisan handloom feel",
    ],
  },
  {
    id: "luxury-hotel-white-bath-towel",
    code: "SMT-BT-03",
    name: "Executive Optical White Hotel Bath Towel",
    category: "bath-towels",
    categoryLabel: "Bath Towels",
    badge: "HOSPITALITY GRADE",
    shortDescription:
      "Heavyweight optical white towel woven with 2-ply ring-spun yarn for premium star hotels and resort suites.",
    fullDescription:
      "Specially finished for chlorine and optical brightener compatibility. Woven on our dedicated handlooms with double lockstitched selvedges to resist industrial tunnel washers and heavy pressing.",
    gsm: "480 GSM",
    gsmValue: 480,
    dimensions: "75 × 150 cm",
    blend: "80% Ring-Spun Cotton / 20% Polyester",
    weaveType: "Dual-sided high pile terry with classic dobby border",
    colors: ["Pure Optical White"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/hotel-white-luxury.jpg",
    alt: "Stack of fluffy pure white luxury hotel cotton handloom bath towels",
    features: [
      "Chlorine bleach safe & boil-wash resistant",
      "Reinforced lockstitch edge bindings",
      "Exceptional tactile softness and thickness",
      "Immediate stock availability",
    ],
  },
  {
    id: "standard-wholesale-bath-towel",
    code: "SMT-BT-04",
    name: "Standard Wholesale Value Bath Towel",
    category: "bath-towels",
    categoryLabel: "Bath Towels",
    badge: "VOLUME PACK",
    shortDescription:
      "Reliable everyday cotton blend towel designed for high-volume retail bundles and institutional contracts.",
    fullDescription:
      "Our most economical full-size bath towel, delivering consistent grammage and reliable stitching at direct mill pricing with zero middleman margin.",
    gsm: "350 GSM",
    gsmValue: 350,
    dimensions: "70 × 135 cm",
    blend: "75% Cotton / 25% Polyester",
    weaveType: "Ring-spun loop terry weave",
    colors: ["Natural Ivory", "Sky Blue", "Almond Beige", "Mint"],
    moq: "20 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/sample-kit/sample-kit-towels.jpg",
    alt: "Stacked wholesale value bath towels in clean neutral packaging",
    features: [
      "Direct mill wholesale rate",
      "Even selvedges without loose threads",
      "Color-fast vat dyed yarn",
      "Ideal for general trade wholesalers",
    ],
  },

  // --- Pool & Resort Towels ---
  {
    id: "yarn-dyed-cabana-stripe-resort-towel",
    code: "SMT-PR-01",
    name: "Yarn-Dyed Cabana Stripe Resort Towel",
    category: "pool-resort-towels",
    categoryLabel: "Pool & Resort Towels",
    badge: "RESORT PICK",
    shortDescription:
      "Generously proportioned pool towel featuring yarn-dyed cabana stripes and hand-finished fringed ends.",
    fullDescription:
      "Crafted specifically for outdoor pool decks, beachfront resorts, and boutique leisure clubs. Woven with yarn-dyed threads that resist sun fading, repeated sun cream contact, and chlorinated water exposure.",
    gsm: "460 GSM",
    gsmValue: 460,
    dimensions: "90 × 180 cm",
    blend: "80% Cotton / 20% Poly Blend",
    weaveType: "Yarn-dyed wide stripe terry with twisted fringe trim",
    colors: ["Terracotta & Natural Cream", "Deep Navy & White", "Olive & Ivory"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/cabana-stripe-resort.jpg",
    alt: "Rolled and folded yarn-dyed cabana stripe cotton pool towels on sun lounger",
    features: [
      "Extra wide 90 cm width covers full sun loungers",
      "Vat-dyed yarns resist chlorine & saltwater",
      "Sun-resistant colorfast pigments",
      "Reinforced twisted tassels that won't unravel",
    ],
  },
  {
    id: "sunburst-hospitality-pool-towel",
    code: "SMT-PR-02",
    name: "Sunburst Hospitality Pool Towel",
    category: "pool-resort-towels",
    categoryLabel: "Pool & Resort Towels",
    badge: "HEAVY DUTY",
    shortDescription:
      "Vibrant high-contrast pool towel with reinforced borders designed to endure rigorous resort laundering.",
    fullDescription:
      "Built for daily resort turnaround. Combines dense loop absorbency with a sturdy polyester core that resists stretching, sagging, or thread pulls from beach chairs.",
    gsm: "440 GSM",
    gsmValue: 440,
    dimensions: "85 × 165 cm",
    blend: "80% Cotton / 20% Polyester",
    weaveType: "High-density looped terry with flatweave border",
    colors: ["Golden Ochre & White", "Azure Blue", "Emerald Pine"],
    moq: "12 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/pool-resort-towels.jpg",
    alt: "Sunburst pool and resort towels by poolside lounge in warm natural light",
    features: [
      "Anti-snag loop construction",
      "Double-folded and 4-thread overlocked borders",
      "Generous full-body coverage",
      "Quick bulk turnaround dispatch",
    ],
  },
  {
    id: "extra-length-spa-wellness-towel",
    code: "SMT-PR-03",
    name: "Extra-Length Spa & Wellness Towel",
    category: "pool-resort-towels",
    categoryLabel: "Pool & Resort Towels",
    badge: "SPA GRADE",
    shortDescription:
      "Ultra-long, velvety soft cotton blend towel suited for massage tables, thermal spas, and luxury suites.",
    fullDescription:
      "Provides complete coverage for 190 cm massage tables and relaxation decks. The velvety sheared finish on one side gives superior comfort against skin while the reverse loop provides moisture absorption.",
    gsm: "420 GSM",
    gsmValue: 420,
    dimensions: "90 × 190 cm",
    blend: "85% Combed Cotton / 15% Polyester",
    weaveType: "Dual-sided velour face and absorbent terry reverse",
    colors: ["Stone Grey", "Deep Forest Olive", "Natural Sand"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/pool-towels-alt.png",
    alt: "Extra-length spa and wellness towel folded neatly on timber shelf",
    features: [
      "Oversized 190 cm length for full table draping",
      "Resistant to essential oil staining",
      "Velour sheared side for skin contact",
      "Gentle hypoallergenic touch",
    ],
  },

  // --- Kitchen & Utility Towels ---
  {
    id: "traditional-checked-kitchen-towel",
    code: "SMT-KU-01",
    name: "Traditional Handloom Checked Kitchen Towel",
    category: "kitchen-utility-towels",
    categoryLabel: "Kitchen & Utility Towels",
    badge: "HIGH ABSORBENCY",
    shortDescription:
      "Flatweave handloom cotton blend tea towels with heritage check patterns for commercial and home kitchens.",
    fullDescription:
      "A staple across Kerala and Tamil Nadu catering supply networks. The flatweave handloom texture picks up grease and moisture without leaving fuzzy lint on glassware or stainless steel worktops.",
    gsm: "260 GSM",
    gsmValue: 260,
    dimensions: "45 × 70 cm",
    blend: "80% Cotton / 20% Polyester",
    weaveType: "Flat handloom check weave with stitched hems",
    colors: ["Terracotta Check", "Olive Check", "Navy Blue Check", "Ochre Check"],
    moq: "25 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/kitchen-utility-towels.png",
    alt: "Handloom cotton blend kitchen and utility towels hanging on natural wooden rod",
    features: [
      "Zero lint transfer on glassware & cutlery",
      "Dries completely in under 25 minutes",
      "Corner hanging loop included",
      "Washable at 60°C for commercial hygiene",
    ],
  },
  {
    id: "lint-free-commercial-glass-towel",
    code: "SMT-KU-02",
    name: "Lint-Free Commercial Bar & Glass Cloth",
    category: "kitchen-utility-towels",
    categoryLabel: "Kitchen & Utility Towels",
    badge: "LINT FREE",
    shortDescription:
      "Tightly woven low-lint cotton cloth for bar counters, wine glasses, and catering banquet service.",
    fullDescription:
      "Specialized tight-twist yarn eliminates residue on polished glassware. Highly valued by restaurant supply vendors and hotel banquet departments.",
    gsm: "240 GSM",
    gsmValue: 240,
    dimensions: "40 × 60 cm",
    blend: "85% Ring-Spun Cotton / 15% Polyester",
    weaveType: "Tight twill basketweave with red/blue tracer stripe",
    colors: ["Natural Ivory with Blue Tracer", "Natural Ivory with Red Tracer"],
    moq: "50 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/sample-kit/sample-check-weave.png",
    alt: "Tight woven lint-free textile texture close-up",
    features: [
      "100% streak-free finish on crystal and mirrors",
      "Starch-free soft hand feel right out of bag",
      "Durable overlocked borders",
      "Bulk packing in 50-piece cartons",
    ],
  },
  {
    id: "heavy-duty-prep-utility-cloth",
    code: "SMT-KU-03",
    name: "Heavy-Duty Prep & Utility Cloth",
    category: "kitchen-utility-towels",
    categoryLabel: "Kitchen & Utility Towels",
    badge: "DURABLE",
    shortDescription:
      "Heavyweight textured herringbone utility cloth built for demanding daily commercial wash cycles.",
    fullDescription:
      "Designed for back-of-house hotel kitchens, cafeterias, and cleaning contractors. Dense structure withstands heavy scrubbing and high-temperature disinfection.",
    gsm: "300 GSM",
    gsmValue: 300,
    dimensions: "50 × 75 cm",
    blend: "75% Cotton / 25% Polyester",
    weaveType: "Herringbone twill weave with reinforced borders",
    colors: ["Natural Beige", "Dark Charcoal", "Forest Olive"],
    moq: "20 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/custom/textile-swatches-flatlay.jpg",
    alt: "Textile swatches flatlay showing herringbone utility cloths",
    features: [
      "Resistant to high abrasion and harsh detergents",
      "Substantial thickness protects hands from warm pots",
      "Firm selvedge edges prevent fraying",
      "Rapid turnaround supply",
    ],
  },

  // --- Checked Towels ---
  {
    id: "madras-heritage-checked-bath-towel",
    code: "SMT-CT-01",
    name: "Madras Heritage Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    badge: "HERITAGE WEAVE",
    shortDescription:
      "Classic South Indian handloom checked bath towel woven on traditional pit looms with yarn-dyed cotton blend.",
    fullDescription:
      "The signature product that Sri Maruthi Textiles has woven for two decades. The authentic madras check layout uses yarn-dyed counts in earth tones, delivering immediate moisture absorption and unmatched longevity.",
    gsm: "330 GSM",
    gsmValue: 330,
    dimensions: "75 × 150 cm",
    blend: "80% Cotton / 20% Polyester Handloom Blend",
    weaveType: "Traditional 2/2 handloom plaid check",
    colors: ["Earthy Terracotta & Cream", "Sage Olive & Ivory", "Warm Mustard & Khaki"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/madras-check-towels.jpg",
    alt: "Stack of traditional South Indian handloom checked bath towels on rustic wood table",
    features: [
      "Woven on in-house looms with zero middleman margin",
      "Authentic handloom texture softens with each wash",
      "Lightweight yet remarkably absorbent",
      "Continuous wholesale inventory in stock",
    ],
  },
  {
    id: "micro-gingham-checked-towel",
    code: "SMT-CT-02",
    name: "Micro-Gingham Check Wholesale Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    badge: "FAST SELLER",
    shortDescription:
      "Neat micro-gingham checked cotton blend towel popular across general textile merchants and retail stalls.",
    fullDescription:
      "A compact, even check repeat that appeals to domestic and institutional buyers alike. Balanced warp and weft density ensures uniform squareness.",
    gsm: "310 GSM",
    gsmValue: 310,
    dimensions: "70 × 140 cm",
    blend: "75% Cotton / 25% Polyester",
    weaveType: "Precision gingham check weave",
    colors: ["Chestnut Brown", "Olive Green", "Deep Navy", "Brick Red"],
    moq: "20 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/product-checked.jpg",
    alt: "Micro-gingham checked handloom textile pattern",
    features: [
      "Fast turnover product for retail shops",
      "Consistent shade match across bulk lots",
      "Shrink-resistant blended yarns",
      "Dispatched in bundled 10s or 20s",
    ],
  },

  // --- Plain & Dyed Towels ---
  {
    id: "earthtone-plain-solid-bath-towel",
    code: "SMT-PL-01",
    name: "Earthtone Plain Solid Bath Towel",
    category: "plain-towels",
    categoryLabel: "Plain & Dyed Towels",
    badge: "NATURAL PALETTE",
    shortDescription:
      "Minimalist solid-color handloom towel dyed in warm earthy tones inspired by natural clay, olive, and sandstone.",
    fullDescription:
      "A clean, contemporary look for design-conscious hospitality and retail brands. Uniform loop pile provides a rich, tactile surface without distracting pattern breaks.",
    gsm: "410 GSM",
    gsmValue: 410,
    dimensions: "70 × 140 cm",
    blend: "80% Cotton / 20% Polyester",
    weaveType: "Single-pile uniform looped terry",
    colors: ["Warm Terracotta", "Raw Cream", "Deep Olive", "Desert Sand"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/custom/custom-towels-palette.jpg",
    alt: "Earthtone solid plain cotton towels folded on vanity",
    features: [
      "Uniform color fastness across repeated washes",
      "Clean tone-on-tone woven borders",
      "Skin-friendly soft touch",
      "Pairs seamlessly with modern bathroom decors",
    ],
  },
  {
    id: "natural-unbleached-kora-towel",
    code: "SMT-PL-02",
    name: "Natural Unbleached Kora Cotton Towel",
    category: "plain-towels",
    categoryLabel: "Plain & Dyed Towels",
    badge: "ECO FRIENDLY",
    shortDescription:
      "Chemical-free, unbleached raw kora cotton handloom towel featuring natural cotton flecks and gentle texture.",
    fullDescription:
      "Preserves the raw beauty of handloom spinning. Zero chemical bleaching or optical dyes makes this an ideal choice for Ayurvedic retreats, eco-resorts, and sensitive-skin customers.",
    gsm: "360 GSM",
    gsmValue: 360,
    dimensions: "75 × 145 cm",
    blend: "90% Natural Cotton / 10% Poly",
    weaveType: "Breathable open-loop natural weave",
    colors: ["Natural Kora (Off-White / Oatmeal)"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/product-plain.jpg",
    alt: "Natural unbleached plain cotton blend towel surface",
    features: [
      "Free from harsh chemical bleaches and dyes",
      "Authentic natural seed specks visible in weave",
      "High breathability and natural aroma",
      "Favored by wellness and Ayurvedic resorts",
    ],
  },

  // --- White & Hotel Towels ---
  {
    id: "standard-salon-healthcare-white-towel",
    code: "SMT-WT-02",
    name: "Standard Institutional Bleached White Towel",
    category: "white-towels",
    categoryLabel: "White & Hotel Towels",
    badge: "BOIL WASHABLE",
    shortDescription:
      "Durable pure white cotton towel for salons, clinics, gyms and healthcare institutions needing frequent sanitization.",
    fullDescription:
      "Formulated to endure stringent thermal and chemical sanitizing protocols. Retains structural integrity even under high-temperature washing.",
    gsm: "380 GSM",
    gsmValue: 380,
    dimensions: "70 × 140 cm",
    blend: "75% Cotton / 25% Polyester",
    weaveType: "Durable ring-spun white terry with reinforced hem",
    colors: ["Pure Optical White"],
    moq: "20 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/product-white.jpg",
    alt: "Pure white bleached cotton textile fabric texture",
    features: [
      "Withstands high-temperature thermal wash cycles",
      "Tear-resistant double stitched selvedge",
      "Economical unit pricing for continuous consumption",
      "Guaranteed white uniformity lot-by-lot",
    ],
  },

  // --- Custom Weaves ---
  {
    id: "custom-jacquard-logo-border-towel",
    code: "SMT-CW-01",
    name: "Custom Jacquard Border / Crest Towel",
    category: "custom-weaves",
    categoryLabel: "Custom Weaves",
    badge: "CUSTOM ORDERS (1000+ PCS)",
    shortDescription:
      "Towels woven with your property name, custom crest or specialized border pattern woven directly into the loom.",
    fullDescription:
      "For hotel chains, corporate hospitality, and large wholesalers requiring bespoke branding. We program your graphic, logo, or lettering directly onto our jacquard loom attachments.",
    gsm: "400 to 550 GSM (Tailored)",
    gsmValue: 500,
    dimensions: "Tailored (from 50×100 cm to 100×200 cm)",
    blend: "Custom Cotton/Poly or 100% Combed Cotton",
    weaveType: "Custom jacquard motif border with plush terry body",
    colors: ["Custom PANTONE Match / Brand Color Schemes"],
    moq: "1,000 pieces",
    dispatchTime: "Agreed timeline based on lot volume",
    image: "/images/custom/custom-border-detail.jpg",
    alt: "Close-up of custom jacquard border woven into white cotton towel",
    features: [
      "Permanent woven branding (not screen printed or embroidered)",
      "Exact GSM and dimensional customization",
      "Physical pre-production loom strike-off provided",
      "Direct factory pricing without middleman agency charges",
    ],
  },
  {
    id: "bespoke-specification-bulk-weave",
    code: "SMT-CW-02",
    name: "Bespoke Yarn Blend & Weight Batch",
    category: "custom-weaves",
    categoryLabel: "Custom Weaves",
    badge: "CUSTOM SPEC",
    shortDescription:
      "Fully customized yarn counts, warp/weft densities, dimensions, and selvedge treatments for bulk procurement.",
    fullDescription:
      "Have an existing sample towel that you need replicated at a better unit price and guaranteed delivery date? Send us your physical specimen or tech pack and we will match the GSM, weave count, and handle.",
    gsm: "250 to 600 GSM (To Spec)",
    gsmValue: 420,
    dimensions: "Any width up to 100 cm on loom",
    blend: "Custom client ratio specification",
    weaveType: "To client specification (Terry, Waffle, Twill, Jacquard)",
    colors: ["Custom Lab-Dipped Shades"],
    moq: "1,000 pieces",
    dispatchTime: "Scheduled against confirmed production slot",
    image: "/images/products/custom-weaves.png",
    alt: "Handloom craftsman adjusting custom loom warp threads for bespoke textile order",
    features: [
      "Physical lab dip & yarn blend matching",
      "Committed delivery date at order confirmation",
      "Transparent tier pricing for 1k, 5k, and 10k units",
      "Direct communication with loom masters",
    ],
  },
];
