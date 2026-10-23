export interface Product {
  id: string;
  code: string;
  name: string;
  category: "plain-towels" | "checked-towels" | "white-towels" | "kora-towels" | string;
  categoryLabel: string;
  productType: "Bath Towel" | "Bath Sheet" | "Utility Towel" | string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
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
    id: "plain-towels",
    label: "Plain Towels",
    description: "Vibrant solid colorways and dual-color bath towels with uniform absorbency.",
  },
  {
    id: "checked-towels",
    label: "Checked Towels",
    description: "Authentic South Indian handloom check and border patterns woven for durability.",
  },
  {
    id: "white-towels",
    label: "White Towels",
    description: "Bleach-safe optical white bath towels built for hotels, hospitals, and daily wholesale.",
  },
  {
    id: "kora-towels",
    label: "Kora Towels",
    description: "Traditional unbleached kora cotton bath towels in generous dimensions.",
  },
];

export const PRODUCTS_CATALOG: Product[] = [
  // =========================================================================
  // 1. PLAIN TOWELS (7 Products)
  // =========================================================================
  {
    id: "73x146-plain-color-bath-towel",
    code: "SMT-PL-73146",
    name: "73 X 146 Plain Bath Towel",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Towel",
    badge: "POPULAR",
    shortDescription:
      "Vat-dyed plain bath towel in 26 × 52 inch dimensions, handloom woven from an 80/20 cotton-polyester blend with absorbent terry loops and reinforced selvedges.",
    fullDescription:
      "Handloom woven using durable 80/20 cotton blend yarn with locked selvedge edges to prevent unraveling during commercial laundry. Features a uniform looped pile and color-fast vat dyeing across six solid shades, making it a reliable wholesale bath towel for retail stores and hotels.",
    dimensions: "26 × 52 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Terry weave with reinforced selvedge",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-73146.webp",
    alt: "Red vat-dyed plain cotton blend bath towel with reinforced selvedge edges, 26 by 52 inches",
    features: [
      "Direct mill wholesale rate",
      "Even selvedges without loose threads",
      "Color-fast vat dyed yarn",
      "Ideal for general trade wholesalers",
    ],
  },
  {
    id: "45x90-plain-color-bath-towel",
    code: "SMT-PL-4590",
    name: "45 X 90 Plain Utility Towel",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Towel",
    shortDescription:
      "Compact 22 × 44 inch plain bath towel woven with tight terry loops in an 80/20 cotton blend for rapid drying.",
    fullDescription:
      "A lightweight, fast-drying plain cotton blend towel engineered for high-turnover use. Features snag-resistant tight terry loops and locked selvedges in six vibrant solid colors, ideal for budget hospitality, travel lodges, and daily wholesale distribution.",
    dimensions: "22 × 44 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Tight loop terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-4590.webp",
    alt: "Blue compact plain cotton blend bath towel with tight terry loops, 22 by 44 inches",
    features: [
      "High absorption with quick-dry pile",
      "Locked selvedges for extended longevity",
      "Uniform pile height across entire surface",
      "Direct mill dispatch across TN and Kerala",
    ],
  },
  {
    id: "70-plain-color-bath-towel",
    code: "SMT-PL-70",
    name: "70 Plain Bath Towel",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Towel",
    shortDescription:
      "Medium 24 × 48 inch plain bath towel featuring flat woven end borders and durable cotton blend terry across 7 vat-dyed colors.",
    fullDescription:
      "Constructed with structured flat selvedge end borders that maintain square alignment through commercial wash cycles. The 80/20 cotton-polyester pile provides balanced absorbency across seven vat-dyed tones including violet for wholesale buyers.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Terry weave with sturdy flat border",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue", "Violet"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-70.webp",
    alt: "Neatly stacked plain cotton blend bath towels showing flat woven end borders in assorted colors",
    features: [
      "Rich 7-color palette including Violet",
      "Tested for commercial colorfastness",
      "Double-stitched end hems",
      "Consistent mill-standard dimensions",
    ],
  },
  {
    id: "90-plain-color-bath-towel",
    code: "SMT-PL-90",
    name: "90 Plain Bath Towel",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Towel",
    badge: "FAST SELLER",
    shortDescription:
      "Dual-sided terry plain bath towel in standard 26 × 52 inch size with balanced absorbency and soft hand feel.",
    fullDescription:
      "Manufactured with symmetrical cotton blend terry loops on both faces for thorough water absorbency. The 80/20 cotton-polyester construction delivers a substantial hand feel and long-lasting shape retention for bulk towel orders.",
    dimensions: "26 × 52 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Plush dual-sided terry pile",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue", "Violet"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-90.webp",
    alt: "Vat-dyed plain cotton blend bath towel folded flat showing dual-sided terry loop pile",
    features: [
      "Substantial hand feel and great absorbency",
      "Vat-dyed yarns preserve vibrant tones",
      "Reinforced selvedges without loose ends",
      "Ready stock for fast bulk dispatch",
    ],
  },
  {
    id: "16001-plain-color-bath-towel",
    code: "SMT-PL-16001",
    name: "16001 High-Density Plain Bath Towel",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Towel",
    shortDescription:
      "Generous 27 × 54 inch plain bath towel woven with high-density looped terry for deep water absorption.",
    fullDescription:
      "Woven with higher yarn pick density producing a thick looped terry pile in an 80/20 cotton blend. Provides comfortable 27 × 54 inch wrap-around coverage with reinforced perimeter stitching across seven vat-dyed shades.",
    dimensions: "27 × 54 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "High-density looped terry",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue", "Violet"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-16001.webp",
    alt: "High-density plain cotton blend bath towel fabric swatches showing fine weave texture",
    features: [
      "Large 27 × 54 inch wrap-around size",
      "High loop density for maximum water absorption",
      "Soft textured finish comfortable for daily use",
      "Strict mill quality check before packing",
    ],
  },
  {
    id: "18001-plain-color-bath-towel",
    code: "SMT-PL-18001",
    name: "18001 Heavyweight Plain Bath Sheet",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Sheet",
    badge: "EXTRA LARGE",
    shortDescription:
      "Extra-large 31 × 62 inch heavyweight plain bath sheet featuring plush cotton blend terry and stout borders.",
    fullDescription:
      "Our largest solid plain towel, crafted as an expansive 31 × 62 inch bath sheet. Heavyweight 80/20 cotton-polyester looped pile provides maximum water retention and full-body coverage for resorts, luxury spas, and linen wholesalers.",
    dimensions: "31 × 62 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Heavyweight terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-18001.webp",
    alt: "Folded heavyweight extra-large plain cotton blend bath sheet in solid red with thick border",
    features: [
      "Expansive 31 × 62 inch extra-large dimensions",
      "Thick pile with superior moisture retention",
      "Stout border construction resists fraying",
      "Bulk packing available in assorted color bales",
    ],
  },
  {
    id: "190-double-color-bath-towel",
    code: "SMT-PL-190",
    name: "190 Dual-Tone Contrast Plain Bath Towel",
    category: "plain-towels",
    categoryLabel: "Plain Towels",
    productType: "Bath Towel",
    badge: "DUAL COLOR",
    shortDescription:
      "Expansive 31 × 62 inch dual-tone bath towel woven with contrasting cotton blend yarns in a heavy terry pile.",
    fullDescription:
      "Woven on handlooms using two contrasting yarn shades interlocked in a heavy terry structure. Generous 31 × 62 inch bath towel dimensions combine distinctive visual appeal with 80/20 cotton blend durability for commercial linen buyers.",
    dimensions: "31 × 62 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Dual-tone terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-pl-190.webp",
    alt: "Dual-tone plain cotton blend bath towel folded to show contrasting yarn weave and locked edges",
    features: [
      "Unique dual-tone woven styling",
      "Extra-large 31 × 62 inch coverage",
      "Color-locked yarns that resist fading",
      "Direct mill wholesale supply",
    ],
  },

  // =========================================================================
  // 2. CHECKED TOWELS (16 Products)
  // =========================================================================
  {
    id: "222-white-checked-bath-towel",
    code: "SMT-CK-222",
    name: "222 White Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Compact 22 × 44 inch handloom checked bath towel with yarn-dyed checks and fast-drying loops.",
    fullDescription:
      "Traditional South Indian checked bath towel woven from yarn-dyed 80/20 cotton blend yarn in a compact 22 × 44 inch profile. The fast-drying loop pile is easy to launder and built for high-turnover daily retail and household wholesale.",
    dimensions: "22 × 44 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Traditional checked handloom weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-222.webp",
    alt: "Compact handloom checked cotton blend towel in traditional red and white square check pattern",
    features: [
      "Authentic South Indian checked pattern",
      "Clean selvages with minimal yarn distortion",
      "Fast drying lightweight construction",
      "Competitive wholesale pricing per dozen",
    ],
  },
  {
    id: "222-black-checked-bath-towel",
    code: "SMT-CK-222BK",
    name: "222 Black Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Compact 22 × 44 inch handloom checked bath towel with bold black contrast checks and fast-drying loops.",
    fullDescription:
      "Traditional South Indian checked bath towel woven from yarn-dyed 80/20 cotton blend yarn with distinct black accent checks in a compact 22 × 44 inch profile. The fast-drying loop pile is easy to launder and built for high-turnover daily retail and household wholesale.",
    dimensions: "22 × 44 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Traditional black checked handloom weave",
    colors: ["Black", "Red", "Maroon", "Olive Green", "Navy Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-222-black.webp",
    alt: "Compact handloom checked cotton blend bath towel in bold black square check pattern",
    features: [
      "Authentic South Indian checked pattern",
      "Bold black contrast check styling",
      "Fast drying lightweight construction",
      "Competitive wholesale pricing per dozen",
    ],
  },
  {
    id: "888-black-checked-bath-towel",
    code: "SMT-CK-888",
    name: "888 Black Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    badge: "BESTSELLER",
    shortDescription:
      "Standard 24 × 48 inch checked bath towel featuring classic square grid checks, cotton blend terry, and locked selvedges.",
    fullDescription:
      "Our top-selling running checked bath towel, woven with balanced yarn tension across warp and weft for crisp check alignment. Features 80/20 cotton blend looped pile with colorfast yarn and locked selvedges for commercial durability.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Checked terry weave with selvedges",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-888.webp",
    alt: "Madras checked cotton blend bath towel with contrast red and blue check weave",
    features: [
      "Consistent high-selling running item",
      "Crisp square check alignment",
      "Pre-tested against yarn bleeding",
      "Ready stock for bulk wholesale dispatch",
    ],
  },
  {
    id: "888-white-checked-bath-towel",
    code: "SMT-CK-888WH",
    name: "888 White Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    badge: "POPULAR",
    shortDescription:
      "Standard 24 × 48 inch white checked bath towel featuring classic square grid checks, cotton blend terry, and locked selvedges.",
    fullDescription:
      "Our top-selling running white checked bath towel, woven with balanced yarn tension across warp and weft for crisp check alignment on an optical white base. Features 80/20 cotton blend looped pile with colorfast yarn and locked selvedges for commercial durability.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "White checked terry weave with selvedges",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-888-white.webp",
    alt: "Standard 24 by 48 inch white checked cotton blend bath towel with square check grid",
    features: [
      "Consistent high-selling running item",
      "Crisp square grid check pattern on white base",
      "Pre-tested against yarn bleeding",
      "Ready stock for bulk wholesale dispatch",
    ],
  },
  {
    id: "555-checked-bath-towel",
    code: "SMT-CK-555",
    name: "555 Four-Color Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Heritage 24 × 48 inch checked bath towel woven in four classic handloom colorways with lint-resistant yarn.",
    fullDescription:
      "Woven with high-twist 80/20 cotton blend yarn in four traditional South Indian check colorways. Provides dependable absorbency with locked edges that resist linting and shrinkage across commercial washes.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Classic yarn-dyed check weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-555.webp",
    alt: "Close-up view of four-color yarn-dyed check weave pattern on handloom cotton blend towel",
    features: [
      "Timeless heritage South Indian design",
      "Strong yarn twist prevents linting",
      "Even selvedges without loose ends",
      "Direct mill wholesale rate",
    ],
  },
  {
    id: "10001-checked-bath-towel",
    code: "SMT-CK-10001",
    name: "10001 Checked Bath Towel (Design 1)",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Sharp fine-grid checked bath towel in 24 × 48 inch dimensions with dense looped pile and neat side selvedges (Design 1).",
    fullDescription:
      "Crafted with finer yarn counts to deliver sharp geometric check lines and a smooth hand feel. The 80/20 cotton blend terry maintains square shape and high water absorption through repeated laundering.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Fine checked terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-10001.webp",
    alt: "10001 fine-grid checked cotton blend bath towel - Design 1",
    features: [
      "Refined fine-grid check appearance (Design 1)",
      "Excellent moisture retention capacity",
      "Tight side selvedges prevent unraveling",
      "Direct mill supply from Tiruppur district",
    ],
  },
  {
    id: "10001-checked-bath-towel-design-2",
    code: "SMT-CK-10001-D2",
    name: "10001 Checked Bath Towel (Design 2)",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Alternative geometric checked bath towel in 24 × 48 inch dimensions with soft absorbent cotton blend pile (Design 2).",
    fullDescription:
      "Design 2 variation of our popular 10001 handloom checked towel, featuring an alternative crisp check weave pattern with colorfast cotton blend yarn. Durable looped terry built for everyday family and hospitality retail.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Fine checked terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-10001-d2.webp",
    alt: "10001 fine-grid checked cotton blend bath towel - Design 2",
    features: [
      "Distinctive check layout (Design 2)",
      "High-absorbency looped terry fabric",
      "Colorfast yarn-dyed checks resist fading",
      "Direct mill wholesale supply",
    ],
  },
  {
    id: "175-checked-bath-towel",
    code: "SMT-CK-175",
    name: "175 Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Spacious 27 × 54 inch checked bath towel with reinforced flat borders, durable terry pile, and full body drying surface.",
    fullDescription:
      "Woven in a comfortable 27 × 54 inch profile featuring reinforced flat woven end borders. Woven from 80/20 cotton-polyester yarn with absorbent terry loops for thorough water uptake in wholesale hospitality and retail supply.",
    dimensions: "27 × 54 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Checked terry with reinforced border",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-175.webp",
    alt: "Spacious checked cotton blend bath towel with reinforced end border displayed folded",
    features: [
      "Generous 27 × 54 inch coverage",
      "Vibrant multi-color check options",
      "Durable loop structure resists flattening",
      "Strict quality inspection per lot",
    ],
  },
  {
    id: "15001-checked-bath-towel",
    code: "SMT-CK-15001",
    name: "15001 Dense Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    badge: "PREMIUM WEAVE",
    shortDescription:
      "Heavy checked bath towel in large 28 × 56 inch size with dense loop pile and double-needle lockstitched hems.",
    fullDescription:
      "Engineered with higher pick counts for a dense, plush checked terry pile. Sized at 28 × 56 inches for ample wrap, combining fast water uptake with high-tensile poly-cotton perimeter stitching for premium linen retailers.",
    dimensions: "28 × 56 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Dense checked terry pile",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-15001.webp",
    alt: "Dense terry loop weave texture of handloom checked cotton blend towel fabric",
    features: [
      "Substantial 28 × 56 inch bath sheet size",
      "Dense loop pile for rapid drying action",
      "Hemmed with high-tensile poly-cotton thread",
      "Ideal for premium linen retailers",
    ],
  },
  {
    id: "120-checked-bath-towel",
    code: "SMT-CK-120",
    name: "120 Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Balanced checked bath towel in 27 × 54 inch dimensions with colorfast vat-dyed yarn and clean selvedges.",
    fullDescription:
      "Woven with balanced warp and weft counts that resist bowing and skewing after industrial washing. The 80/20 cotton blend provides durable daily absorbency in six checked colorways for bulk distributors.",
    dimensions: "27 × 54 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Traditional checked terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-120.webp",
    alt: "Medium-heavy checked cotton blend bath towel with square pattern and neat selvedges",
    features: [
      "Balanced 80/20 cotton blend composition",
      "Vat-dyed yarns with high wash fastness",
      "Reinforced selvedges without loose threads",
      "Direct mill pricing",
    ],
  },
  {
    id: "150-checked-bath-towel",
    code: "SMT-CK-150",
    name: "150 Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Standard 27 × 54 inch checked bath towel featuring double-needle lockstitched hems and looped terry.",
    fullDescription:
      "Manufactured with double-needle lockstitching on all perimeter hems to prevent unraveling during heavy institutional washing. Provides uniform handloom weave across 27 × 54 inch dimensions in six checked patterns.",
    dimensions: "27 × 54 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Checked terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-150.webp",
    alt: "Folded checked cotton blend towel with double-stitched end hems and vibrant check lines",
    features: [
      "Consistent handloom quality assurance",
      "Clean hems with double-needle lockstitch",
      "6 bright color options for retail assortment",
      "Fast mill dispatch",
    ],
  },
  {
    id: "12001-checked-bath-towel",
    code: "SMT-CK-12001",
    name: "12001 Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "26 × 52 inch checked bath towel with durable terry pile and shrink-resistant weave balance.",
    fullDescription:
      "Handloom woven with uniform tension to resist out-of-square shrinkage and edge curling. Features thorough absorbency across a standard 26 × 52 inch drying area with clean side selvedges and color-fast vat-dyed check yarns.",
    dimensions: "26 × 52 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Checked terry weave with selvedges",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-12001.webp",
    alt: "Neat checked cotton blend towel sample showing clean side selvedges without loose threads",
    features: [
      "Even selvedges without loose threads",
      "Color-fast vat dyed check yarns",
      "Resistant to out-of-square shrinkage",
      "Bulk bales ready for shipment",
    ],
  },
  {
    id: "30x60-nis-checked-bath-towel",
    code: "SMT-CK-3060NIS",
    name: "3060 NIS Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "26 × 52 inch checked bath towel with woven horizontal border bands in 26 × 52 inch size and absorbent terry.",
    fullDescription:
      "Combines traditional square grid checks with distinctive horizontal border bands. The 80/20 cotton blend delivers swift water uptake, locked side edges, and sturdy handloom durability for wholesale buyers.",
    dimensions: "26 × 52 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "NIS patterned check weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-3060nis.webp",
    alt: "Checked cotton blend bath towel featuring NIS patterned weave and woven border bands",
    features: [
      "Distinctive NIS check weave styling",
      "High loop density for swift water uptake",
      "Clean locked side edges",
      "Direct mill wholesale rate",
    ],
  },
  {
    id: "18001-checked-bath-towel",
    code: "SMT-CK-18001",
    name: "18001 Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    badge: "EXTRA LARGE",
    shortDescription:
      "Extra-large 31 × 62 inch checked bath towel with heavyweight cotton blend pile for full-body wrap.",
    fullDescription:
      "The largest checked towel in our collection, offering an expansive 31 × 62 inch bath towel footprint. Heavyweight 80/20 cotton-polyester terry delivers superior moisture capacity and full wrap comfort for resorts and linen wholesalers.",
    dimensions: "31 × 62 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Heavyweight checked terry weave",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-18001.webp",
    alt: "Extra-large handloom checked cotton blend bath sheet folded showing dense check pattern",
    features: [
      "Expansive 31 × 62 inch full-body coverage",
      "Heavyweight terry pile for high water capacity",
      "Rich color saturation across all check tones",
      "Factory packed in wholesale bales",
    ],
  },
  {
    id: "30x60-black-bath-towel",
    code: "SMT-CK-3060BK",
    name: "30 X 60 Black Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    shortDescription:
      "Checked bath towel with black accent border framing in 26 × 52 inch dimensions and cotton blend terry.",
    fullDescription:
      "Combines colorful checked body terry with deep black contrast accent borders. Woven from 80/20 cotton blend yarn with double-stitched perimeter hems in a practical 26 × 52 inch bath towel size.",
    dimensions: "26 × 52 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Checked weave with black accent border",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-3060bk.webp",
    alt: "Handloom checked cotton blend towel featuring contrasting black accent border framing",
    features: [
      "Deep black contrast border styling",
      "Vat-dyed yarns that retain sharp lines",
      "Double-stitched selvedge hems",
      "Direct mill pricing",
    ],
  },
  {
    id: "70x140-black-bath-towel",
    code: "SMT-CK-70140BK",
    name: "70 X 140 Black Checked Bath Towel",
    category: "checked-towels",
    categoryLabel: "Checked Towels",
    productType: "Bath Towel",
    badge: "MODERN CONTRAST",
    shortDescription:
      "Large 28 × 56 inch checked bath towel framed with solid black selvedge borders and dense terry pile.",
    fullDescription:
      "Generous 28 × 56 inch bath towel featuring dense checked cotton blend terry framed by solid black selvedge edges. Commercial-laundry tested for colorfastness and dimensional stability across bulk orders.",
    dimensions: "28 × 56 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Dense checked weave with black selvedge",
    colors: ["Red", "Maroon", "Olive Green", "Navy Blue", "Cyan", "Blue"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-ck-70140bk.webp",
    alt: "Wide checked cotton blend bath towel with prominent black selvedge side borders",
    features: [
      "Large 28 × 56 inch generous size",
      "Bold black accent frame detailing",
      "Commercial laundry tested durability",
      "Available for immediate bulk dispatch",
    ],
  },

  // =========================================================================
  // 3. WHITE TOWELS (8 Products)
  // =========================================================================
  {
    id: "20x40-white-bath-towel",
    code: "SMT-WH-2040",
    name: "20 X 40 White Utility Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Utility Towel",
    shortDescription:
      "Compact 20 × 40 inch bleach-safe white utility and hand towel in cotton blend terry for salons, clinics, and spas.",
    fullDescription:
      "Woven from chlorine-bleach-tolerant 80/20 cotton blend yarns designed for frequent high-temperature sanitization wash cycles. Compact 20 × 40 inch utility towel size with low-lint loops, ideal as a wholesale hand towel or clinic utility towel.",
    dimensions: "20 × 40 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Optical white terry pile",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-2040.webp",
    alt: "Compact bleach-safe optical white cotton blend utility towel neatly folded",
    features: [
      "Bleach-safe optical white finish",
      "High temperature commercial wash ready",
      "Even selvedges without loose threads",
      "Competitive wholesale rate for bulk buyers",
    ],
  },
  {
    id: "23x24-white-bath-towel",
    code: "SMT-WH-2324",
    name: "23 X 46 White Bath Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Towel",
    shortDescription:
      "22 × 44 inch institutional white bath towel with uniform pile and quick-dry construction.",
    fullDescription:
      "Engineered for lodges, clinics, and budget hospitality supply where rapid drying and frequent laundering are required. The 80/20 cotton blend retains optical brightness and soft absorbency across high-turnover wash cycles.",
    dimensions: "22 × 44 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Uniform white terry weave",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-2346.webp",
    alt: "Folded institutional optical white cotton blend towel with uniform looped pile",
    features: [
      "Clean optical white shade",
      "Durable loop structure resists fraying",
      "Quick drying for fast room turnover",
      "Direct mill wholesale dispatch",
    ],
  },
  {
    id: "25x50-white-bath-towel",
    code: "SMT-WH-2550",
    name: "25 X 50 Hospitality White Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Towel",
    shortDescription:
      "Standard 24 × 48 inch hospitality white bath towel with terry pile and reinforced lockstitched hems.",
    fullDescription:
      "Standard hotel and guest house running item. Features looped terry in 24 × 48 inch dimensions woven with an 80/20 cotton blend and reinforced lockstitched hems that prevent fraying during industrial commercial laundry.",
    dimensions: "24 × 48 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Hospitality grade white terry",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-2550.webp",
    alt: "White cotton blend hotel bath towel folded on a clean surface showing neat edges",
    features: [
      "Hotel & institutional grade construction",
      "High water absorbency and plush hand",
      "Lock-stitched hems prevent unravelling",
      "Consistent mill quality lot by lot",
    ],
  },
  {
    id: "27x54-white-bath-towel",
    code: "SMT-WH-2754",
    name: "27 X 54 White Bath Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Towel",
    shortDescription:
      "Mid-large 26 × 52 inch optical white bath towel with plush cotton blend pile and flatweave end hems.",
    fullDescription:
      "Woven with flatweave end hems to maintain square alignment through repeated commercial washing. The 80/20 cotton-polyester blend provides plush drying comfort and brightness in a standard 26 × 52 inch profile for hotels.",
    dimensions: "26 × 52 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Plush white terry with flatweave hem",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-2754.webp",
    alt: "Optical white cotton blend bath towel showing flatweave hem detailing",
    features: [
      "Bright optical white yarn finish",
      "Reinforced double-stitched end hems",
      "Zero yarn slippage or edge fraying",
      "Direct mill pricing for hotels",
    ],
  },
  {
    id: "2001-white-bath-towel",
    code: "SMT-WH-2001",
    name: "2001 White Bath Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Towel",
    shortDescription:
      "Low-lint 24 × 50 inch optical white bath towel crafted with high-twist cotton blend yarns and absorbent terry loops.",
    fullDescription:
      "Constructed using ring-spun, high-twist 80/20 cotton blend yarn to minimize surface linting and yarn shedding in commercial tumble dryers. Delivers reliable absorbency across 24 × 50 inch dimensions for institutional buyers.",
    dimensions: "24 × 50 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "High-twist optical white terry",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-2001.webp",
    alt: "High-twist optical white cotton blend bath towel folded with crisp white presentation",
    features: [
      "Low-lint yarn construction",
      "Withstands repeated bleaching",
      "Even selvedges without loose threads",
      "Bulk institutional packaging",
    ],
  },
  {
    id: "4001-white-bath-towel",
    code: "SMT-WH-4001",
    name: "4001 White Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Towel",
    shortDescription:
      "28 × 56 inch white bath towel with deep water-absorbing cotton blend loops.",
    fullDescription:
      "Heavier institutional towel manufactured for resort suites and premium lodging. Generous 28 × 56 inch footprint with deep loop pile in an 80/20 cotton blend delivers soft absorbency and proven durability over 100+ commercial wash cycles.",
    dimensions: "28 × 56 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Heavyweight institutional white terry",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-4001.webp",
    alt: "Stack of heavyweight institutional white cotton blend bath towels folded neatly",
    features: [
      "Substantial 28 × 56 inch luxury size",
      "High density loop for maximum absorbency",
      "Commercial laundry tested to 100+ cycles",
      "Direct mill pricing",
    ],
  },
  {
    id: "30x60-white-bath-towel",
    code: "SMT-WH-3060",
    name: "30 X 60 White Bath Towel",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Towel",
    shortDescription:
      "28 × 56 inch white bath towel with plush terry pile and locked perimeter edges.",
    fullDescription:
      "Designed for executive hotels and premium bath linen supply. Provides dense fabric weave, rapid water uptake, and high dimensional retention across an expansive 28 × 56 inch drying surface in bleach-safe 80/20 cotton blend yarn.",
    dimensions: "28 × 56 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Plush hospitality white weave",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-3060.webp",
    alt: "Plush hospitality white cotton blend bath towel folded flat showing deep absorbent loops",
    features: [
      "Extra wide wrap-around surface",
      "Bleach-safe and sanitization ready",
      "Locked selvedges prevent edge fray",
      "Direct mill supply from Tamil Nadu",
    ],
  },
  {
    id: "34x68-white-bath-towel",
    code: "SMT-WH-3468",
    name: "34 X 68 White Bath Sheet",
    category: "white-towels",
    categoryLabel: "White Towels",
    productType: "Bath Sheet",
    shortDescription:
      "31 × 62 inch luxury white bath sheet with heavyweight terry and stout borders for resorts.",
    fullDescription:
      "Our heaviest white bath linen, tailored for luxury resort suites and wellness spas. Expansive 31 × 61 inch bath sheet size with plush 80/20 cotton blend looped terry for maximum warmth, comfort, and wrap.",
    dimensions: "31 × 62 inch",
    blend: "80% Cotton / 20% Polyester Blend",
    weaveType: "Super plush white bath sheet terry",
    colors: ["White"],
    moq: "15 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-wh-3468.webp",
    alt: "Extra-large luxury white cotton blend bath sheet folded to show deep plush terry pile",
    features: [
      "Expansive 31 × 61 inch luxury bath sheet",
      "Superb water uptake and soft luxury feel",
      "Stout border construction resists distortion",
      "Bulk mill pricing for hospitality buyers",
    ],
  },

  // =========================================================================
  // 4. KORA TOWELS (2 Products)
  // =========================================================================
  {
    id: "18001-print-kora-bath-towel",
    code: "SMT-KR-18001P",
    name: "18001 Printed Kora Cotton Bath Towel",
    category: "kora-towels",
    categoryLabel: "Kora Towels",
    productType: "Bath Sheet",
    shortDescription:
      "Traditional 33 × 66 inch unbleached kora cotton bath towel and bath sheet with decorative printed border.",
    fullDescription:
      "Handloom woven from natural unbleached kora cotton blend yarn (85% unbleached cotton / 15% polyester) featuring a decorative printed border band. Ample 33 × 66 inch bath sheet dimensions provide earthy natural tone and high natural absorbency that softens with each wash.",
    dimensions: "33 × 66 inch",
    blend: "85% Unbleached Cotton / 15% Polyester",
    weaveType: "Traditional unbleached kora weave with printed border",
    colors: ["Natural Kora"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-kr-18001p.webp",
    alt: "Natural unbleached kora cotton bath towel featuring traditional printed border motif",
    features: [
      "Natural unbleached kora cotton yarn",
      "Distinctive traditional print border motif",
      "Expansive 33 × 66 inch South Indian size",
      "Softens with every wash cycle",
    ],
  },
  {
    id: "18001-normal-kora-bath-towel",
    code: "SMT-KR-18001N",
    name: "18001 Kora Cotton Bath Towel",
    category: "kora-towels",
    categoryLabel: "Kora Towels",
    productType: "Bath Sheet",
    shortDescription:
      "Classic 33 × 66 inch unbleached kora cotton bath towel and bath sheet in pure solid handloom weave.",
    fullDescription:
      "Pure traditional handloom kora towel with natural unbleached yarn finish (85% unbleached cotton / 15% polyester) and solid borders. Generous 33 × 66 inch bath sheet size delivers durable skin-friendly absorbency for wholesale buyers.",
    dimensions: "33 × 66 inch",
    blend: "85% Unbleached Cotton / 15% Polyester",
    weaveType: "Pure traditional kora handloom weave",
    colors: ["Natural Kora"],
    moq: "10 pieces",
    dispatchTime: "1 to 2 days",
    image: "/images/products/smt-kr-18001n.webp",
    alt: "Traditional solid unbleached kora cotton handloom bath towel with natural earthy yarn finish",
    features: [
      "100% authentic South Indian kora finish",
      "Generous 33 × 66 inch dimensions",
      "Even selvedges without loose threads",
      "Direct mill wholesale rate",
    ],
  },
];

/**
 * Normalizes a word for stem matching (stripping common suffixes, plurals, and variations)
 */
export function normalizeSearchTerm(term: string): string {
  let w = term.toLowerCase().trim();
  w = w.replace(/^[^\w]+|[^\w]+$/g, "");
  if (!w) return "";

  // Plurals and suffixes
  if (w.endsWith("ies")) w = w.slice(0, -3) + "y";
  else if (w.endsWith("es") && !w.endsWith("ches") && !w.endsWith("shes")) w = w.slice(0, -2);
  else if (w.endsWith("s") && !w.endsWith("ss")) w = w.slice(0, -1);

  // Common synonyms and variations
  if (w === "checked" || w === "checks" || w === "check") return "check";
  if (w === "colours" || w === "colour") return "color";
  if (w === "sheets") return "sheet";
  if (w === "towels") return "towel";
  if (w === "cottons") return "cotton";

  return w;
}

/**
 * Checks whether a product matches a user search query across all product fields,
 * types, categories, specifications, and common customer search variations.
 */
export function matchProductSearch(product: Product, rawQuery: string): boolean {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return true;

  // 1. Direct SKU / Product Code exact/prefix match (e.g. "888", "SMT-CK-888", "SMTCK888", "73146")
  const cleanQueryCode = query.replace(/[^a-zA-Z0-9]/g, "");
  const cleanProductCode = product.code.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  if (cleanQueryCode.length >= 3 && cleanProductCode.includes(cleanQueryCode)) {
    return true;
  }

  // 2. High-intent generic customer search phrases
  const normQuery = query
    .split(/\s+/)
    .map((w) => normalizeSearchTerm(w))
    .join(" ");

  // "checked towel" / "check towel" / "checked towels"
  if (
    query === "checked towel" ||
    query === "checked towels" ||
    query === "check towel" ||
    query === "check towels" ||
    normQuery === "check towel"
  ) {
    return product.category === "checked-towels";
  }

  // "plain towel" / "plain towels"
  if (
    query === "plain towel" ||
    query === "plain towels" ||
    normQuery === "plain towel"
  ) {
    return product.category === "plain-towels";
  }

  // "white towel" / "white towels"
  if (
    query === "white towel" ||
    query === "white towels" ||
    normQuery === "white towel"
  ) {
    return product.category === "white-towels";
  }

  // "kora towel" / "kora towels"
  if (
    query === "kora towel" ||
    query === "kora towels" ||
    normQuery === "kora towel"
  ) {
    return product.category === "kora-towels";
  }

  // "bath sheet" / "bath sheets" / "large bath towel" / "large bath towels" / "extra large bath towel"
  if (
    query === "bath sheet" ||
    query === "bath sheets" ||
    query === "large bath towel" ||
    query === "large bath towels" ||
    query === "extra large bath towel" ||
    query === "extra large bath towels" ||
    normQuery === "bath sheet" ||
    normQuery === "large bath towel" ||
    normQuery === "extra large bath towel"
  ) {
    return (
      product.productType === "Bath Sheet" ||
      product.dimensions.includes("31 ×") ||
      product.dimensions.includes("33 ×")
    );
  }

  // "hand towel" / "hand towels" / "utility towel" / "utility towels"
  if (
    query === "hand towel" ||
    query === "hand towels" ||
    query === "utility towel" ||
    query === "utility towels" ||
    normQuery === "hand towel" ||
    normQuery === "utility towel"
  ) {
    return (
      product.productType === "Utility Towel" ||
      product.dimensions.includes("20 × 40")
    );
  }

  // "bath towel" / "bath towels"
  if (
    query === "bath towel" ||
    query === "bath towels" ||
    normQuery === "bath towel"
  ) {
    return product.productType === "Bath Towel" || product.productType === "Bath Sheet";
  }

  // "cotton towel" / "cotton towels" / "cotton blend towel"
  if (
    query === "cotton towel" ||
    query === "cotton towels" ||
    query === "cotton blend towel" ||
    query === "cotton blend towels" ||
    normQuery === "cotton towel" ||
    normQuery === "cotton blend towel"
  ) {
    return true; // All products in catalog are handloom cotton blend towels
  }

  // "wholesale towel" / "wholesale towels" / "wholesale"
  if (
    query === "wholesale towel" ||
    query === "wholesale towels" ||
    query === "wholesale" ||
    normQuery === "wholesale towel"
  ) {
    return true; // All products in catalog are manufactured for wholesale
  }

  // 3. Multi-token general search (colors, dimensions, specific names, etc.)
  const queryTokens = query
    .split(/[\s,+/]+/)
    .map((w) => w.trim())
    .filter(Boolean);

  if (queryTokens.length === 0) return true;

  const normDim = product.dimensions.toLowerCase().replace(/\s*×\s*/g, "x").replace(/\s*inch/g, "");

  // Build searchable word list for this product
  const productWords: string[] = [
    product.name,
    product.code,
    cleanProductCode,
    product.categoryLabel,
    product.productType,
    product.dimensions,
    normDim,
    ...product.colors,
    product.shortDescription,
    product.fullDescription,
  ];

  // Specific category keywords
  if (product.category === "checked-towels") {
    productWords.push("checked", "check", "checks", "madras");
  } else if (product.category === "plain-towels") {
    productWords.push("plain", "solid");
  } else if (product.category === "white-towels") {
    productWords.push("white", "optical", "hotel", "institutional", "bleach-safe");
  } else if (product.category === "kora-towels") {
    productWords.push("kora", "unbleached", "thorthu");
  }

  // Specific type keywords
  if (product.productType === "Bath Sheet") {
    productWords.push("sheet", "sheets", "large", "extra-large", "wrap");
  } else if (product.productType === "Bath Towel") {
    productWords.push("bath", "body");
  } else if (product.productType === "Utility Towel") {
    productWords.push("utility", "hand", "salon", "clinic", "spa");
  }

  // Global words for all products
  productWords.push("cotton", "towel", "wholesale", "handloom");

  const combinedText = productWords.join(" ").toLowerCase();

  // Create set of normalized words from product
  const tokens = combinedText
    .split(/[\s,./\(\)×-]+/)
    .map((w) => w.trim())
    .filter(Boolean);

  const normalizedProductWords = new Set<string>();
  for (const t of tokens) {
    normalizedProductWords.add(t);
    const n = normalizeSearchTerm(t);
    if (n) normalizedProductWords.add(n);
  }

  // Check that every query token matches
  return queryTokens.every((qt) => {
    const rawQt = qt.toLowerCase();
    const normQt = normalizeSearchTerm(rawQt);

    // Exact word or normalized word match
    if (normalizedProductWords.has(rawQt) || (normQt && normalizedProductWords.has(normQt))) {
      return true;
    }

    // Substring in combined text (e.g. "24x48" or specific code)
    if (combinedText.includes(rawQt)) {
      return true;
    }

    // Prefix match on words (min length 3)
    if (rawQt.length >= 3) {
      for (const pw of normalizedProductWords) {
        if (pw.startsWith(rawQt) || (normQt && pw.startsWith(normQt))) {
          // Avoid matching "hand" into "handloom"
          if (rawQt === "hand" && pw.startsWith("handloom")) continue;
          return true;
        }
      }
    }

    return false;
  });
}
