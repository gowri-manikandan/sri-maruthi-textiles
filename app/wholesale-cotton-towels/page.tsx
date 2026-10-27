import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Truck,
  Layers,
  Sparkles,
  CheckCircle2,
  FileText,
  Building2,
  Clock,
  ArrowRight,
  MapPin,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { contact, site, SITE_URL, whatsappHref, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wholesale Cotton Towels Manufacturer in Tiruppur, India",
  description:
    "Sri Maruthi Textiles is a handloom cotton towel manufacturer in Tiruppur, India. We supply wholesale plain, checked, white, and kora cotton blend towels to distributors, retailers, and hospitality businesses across India with direct mill rates, low MOQ, and fast dispatch.",
  alternates: {
    canonical: "/wholesale-cotton-towels",
  },
  openGraph: {
    title:
      "Wholesale Cotton Towels Manufacturer in Tiruppur, India — Sri Maruthi Textiles",
    description:
      "Direct handloom towel manufacturer in Tiruppur, Tamil Nadu. Supplying wholesale plain, checked, white, and kora cotton blend towels with verified yarn compositions, low MOQ, and fast dispatch across India.",
    url: "/wholesale-cotton-towels",
    images: [
      {
        url: "/images/hero-handloom.jpg",
        width: 1200,
        height: 630,
        alt: "Wholesale Cotton Towels Manufacturer in Tiruppur, India — Sri Maruthi Textiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Wholesale Cotton Towels Manufacturer in Tiruppur, India — Sri Maruthi Textiles",
    description:
      "Direct handloom towel manufacturer in Tiruppur, Tamil Nadu. Wholesale plain, checked, white, and kora cotton blend towels for distributors, retailers, and hotels nationwide.",
    images: ["/images/hero-handloom.jpg"],
  },
};

const WHOLESALE_CATEGORIES = [
  {
    id: "plain-towels",
    name: "Plain Cotton Blend Bath Towels",
    codePrefix: "SMT-PL",
    image: "/images/products/smt-pl-73146.webp",
    alt: "Vat-dyed plain cotton blend bath towel with reinforced selvedge edges",
    blend: "80% Cotton / 20% Polyester Blend",
    dimensions: "22 × 44 in (Utility) to 31 × 62 in (Bath Sheet)",
    colors: "Red, Maroon, Olive Green, Navy Blue, Cyan, Blue, Violet",
    weave: "Looped terry pile with flat end borders and locked selvedges",
    moq: "10 pieces",
    dispatch: "1 to 2 days",
    bestFor: "General trade wholesalers, retail stores, budget hospitality",
    link: "/products#plain-towels",
    linkText: "View Plain Towels in Catalogue",
  },
  {
    id: "checked-towels",
    name: "Checked Handloom Bath Towels",
    codePrefix: "SMT-CK",
    image: "/images/products/smt-ck-888.webp",
    alt: "Madras checked cotton blend bath towel with crisp check alignment",
    blend: "80% Cotton / 20% Polyester Blend",
    dimensions: "22 × 44 in, 24 × 48 in, 26 × 52 in, 27 × 54 in, 28 × 56 in, 31 × 62 in",
    colors: "Yarn-dyed colorfast checks in 6 vibrant colorways",
    weave: "Traditional South Indian checked terry weave with locked edges",
    moq: "10 pieces",
    dispatch: "1 to 2 days",
    bestFor: "Wholesale textile merchants, retail showrooms, regional distributors",
    link: "/checked-cotton-towels",
    linkText: "Explore Checked Cotton Towels",
  },
  {
    id: "white-towels",
    name: "Institutional Bleach-Safe White Towels",
    codePrefix: "SMT-WH",
    image: "/images/products/smt-wh-2754.webp",
    alt: "Optical white cotton blend hotel bath towel with reinforced hems",
    blend: "80% Cotton / 20% Polyester Blend",
    dimensions: "20 × 40 in (Utility/Hand) to 31 × 62 in (Resort Bath Sheet)",
    colors: "Optical White (Chlorine Bleach Tolerant)",
    weave: "Ring-spun high-twist terry with double-needle lockstitched hems",
    moq: "15 pieces",
    dispatch: "1 to 2 days",
    bestFor: "Hotels, resorts, hospitals, salons, wellness spas, corporate guest houses",
    link: "/products#white-towels",
    linkText: "View White Towels in Catalogue",
  },
  {
    id: "kora-towels",
    name: "Traditional Unbleached Kora Towels",
    codePrefix: "SMT-KR",
    image: "/images/products/smt-kr-18001p.webp",
    alt: "Natural unbleached kora cotton bath towel with traditional border motif",
    blend: "85% Unbleached Cotton / 15% Polyester",
    dimensions: "Generous 33 × 66 in (South Indian Bath Sheet)",
    colors: "Natural Unbleached Kora (Solid or Printed Border)",
    weave: "Pure traditional South Indian handloom weave; softens with each wash",
    moq: "10 pieces",
    dispatch: "1 to 2 days",
    bestFor: "Traditional textile retailers, Kerala & Tamil Nadu regional trade, ayurvedic centers",
    link: "/products#kora-towels",
    linkText: "View Kora Towels in Catalogue",
  },
];

const SPEC_MATRIX = [
  {
    category: "Plain Towels",
    sizes: "22×44, 24×48, 26×52, 27×54, 31×62 in",
    material: "80% Cotton / 20% Polyester Blend",
    colors: "7 Vat-Dyed Solid Colors",
    construction: "Looped terry with locked selvedge",
    moq: "10 pcs",
    dispatch: "1–2 days",
  },
  {
    category: "Checked Towels",
    sizes: "22×44, 24×48, 26×52, 27×54, 28×56, 31×62 in",
    material: "80% Cotton / 20% Polyester Blend",
    colors: "Colorfast yarn-dyed checks (6 tones)",
    construction: "Heritage South Indian check weave",
    moq: "10 pcs",
    dispatch: "1–2 days",
  },
  {
    category: "White Towels",
    sizes: "20×40, 22×44, 24×48, 26×52, 28×56, 31×62 in",
    material: "80% Cotton / 20% Polyester Blend",
    colors: "Optical White (Bleach-Safe)",
    construction: "Institutional high-twist terry, lockstitched hems",
    moq: "15 pcs",
    dispatch: "1–2 days",
  },
  {
    category: "Kora Towels",
    sizes: "33×66 in (Extra Large)",
    material: "85% Unbleached Cotton / 15% Polyester",
    colors: "Natural Kora (Solid or Printed Border)",
    construction: "Traditional unbleached handloom weave",
    moq: "10 pcs",
    dispatch: "1–2 days",
  },
  {
    category: "Custom Weaving",
    sizes: "Custom dimensions upon specification",
    material: "Custom yarn blend formulation (min 1,000 pcs)",
    colors: "Custom dyes & jacquard logo weaves",
    construction: "Engineered to buyer GSM & border spec",
    moq: "1,000 pcs",
    dispatch: "Committed schedule",
  },
];

const WHOLESALE_FAQS = [
  {
    q: "Are Sri Maruthi Textiles towels 100% cotton?",
    a: "No, and we are deliberate about declaring our true blend. Our plain, checked, and white towels are woven from an 80% Cotton / 20% Polyester blend, and our traditional kora towels use an 85% Unbleached Cotton / 15% Polyester blend. The cotton warp and looped pile provide rapid water absorbency and a soft hand feel, while the high-tensile polyester core locks the selvedges, prevents shrinkage distortion, and withstands repeated commercial laundering without edge fraying.",
  },
  {
    q: "What is your minimum order quantity (MOQ) for wholesale orders?",
    a: "For standard running items in our checked, plain, and kora collections, our minimum order quantity is between 10 and 15 pieces per type. For institutional white towels, MOQ is 15 pieces. For custom weaving orders with bespoke dimensions, custom GSM, or jacquard woven logos, the minimum order is 1,000 pieces.",
  },
  {
    q: "How can buyers request physical samples before placing a bulk consignment?",
    a: "Physical sample towels and swatch sets are available on request and are chargeable at nominal cost. You can inspect fabric GSM, terry loop density, softness, locked selvedges, and colorfastness firsthand. Contact us via phone, WhatsApp, or the enquiry form on this page to request sample dispatch to your address.",
  },
  {
    q: "What are your standard dispatch and logistics timelines?",
    a: "Most orders for standard running catalogue stock are dispatched within 1 to 2 business days from our manufacturing mill in Tiruppur district, Tamil Nadu. We commit to a firm dispatch date at the time of order confirmation. Transit times depend on your destination city and preferred freight transporter.",
  },
  {
    q: "Where is your manufacturing mill located?",
    a: "Our mill is located at 1/37, Gandhi Nagar, Pallagoundenpalayam, Uttukuli Taluk, Tiruppur District, Tamil Nadu 638056, India. All goods are woven on our own handlooms, inspected, and packed on our own floor before freight dispatch.",
  },
  {
    q: "Can you manufacture towels to custom GSM, dimensions, or with hotel woven logos?",
    a: "Yes. For wholesale consignments above 1,000 pieces, we manufacture bespoke handloom towels tailored to buyer specifications. This includes custom GSM, exact dimensions, specific yarn blend formulations, and jacquard border emblems for hotels and institutions.",
  },
  {
    q: "What are your commercial payment terms for wholesale consignments?",
    a: "Our wholesale terms are a percentage advance upon order confirmation, with the remaining balance due upon dispatch before handover to the freight transporter. We confirm the exact payment schedule when providing your official quotation.",
  },
  {
    q: "Do you supply wholesale buyers and distributors outside Kerala and Tamil Nadu?",
    a: "Yes. While Tamil Nadu and Kerala represent our established core distribution network, we supply wholesale distributors, retail chains, and hospitality businesses across India. Goods are securely packed in heavy-duty wholesale bales and consigned via reputable interstate logistics and transport carriers.",
  },
];

export default function WholesaleLandingPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wholesale Cotton Towels",
        item: `${SITE_URL}/wholesale-cotton-towels`,
      },
    ],
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/wholesale-cotton-towels#manufacturer`,
    name: "Sri Maruthi Textiles",
    legalName: "Sri Maruthi Textiles",
    url: `${SITE_URL}/wholesale-cotton-towels`,
    logo: `${SITE_URL}/images/logo-full.png`,
    image: `${SITE_URL}/images/hero-handloom.jpg`,
    description:
      "Handloom cotton towel manufacturer in Tiruppur, India. Wholesale plain, checked, white, and kora cotton blend towels for distributors, retailers, and hospitality businesses across India.",
    telephone: contact.phone.e164,
    email: contact.email,
    taxID: site.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.area,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Tamil Nadu" },
      { "@type": "State", name: "Kerala" },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wholesale Cotton Towels Manufacturer in Tiruppur, India — Sri Maruthi Textiles",
    description:
      "Direct handloom towel manufacturer in Tiruppur supplying wholesale plain, checked, white, and kora cotton blend towels to distributors, retailers, and hospitality businesses across India.",
    url: `${SITE_URL}/wholesale-cotton-towels`,
    mainEntity: {
      "@type": "ItemList",
      name: "Wholesale Handloom Cotton Blend Towel Varieties",
      numberOfItems: WHOLESALE_CATEGORIES.length,
      itemListElement: WHOLESALE_CATEGORIES.map((cat, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: cat.name,
        description: `${cat.name} handloom woven in Tiruppur. Material: ${cat.blend}. Dimensions: ${cat.dimensions}.`,
        image: `${SITE_URL}${cat.image}`,
        url: `${SITE_URL}${cat.link}`,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WHOLESALE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen bg-[#FBF9F6] text-[#29251F]">
        {/* =========================================================================
            1. HERO SECTION: Direct Handloom Mill in Tiruppur, India
            ========================================================================= */}
        <section
          aria-labelledby="hero-title"
          className="relative bg-[#26351C] text-[#F5F1E8] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden"
        >
          {/* Textile Mill Background with High-Contrast Dark Gradient Scrim */}
          <div className="absolute inset-0 -z-0">
            <Image
              src="/images/hero-handloom.jpg"
              alt="Handloom woven cotton blend towels in Tiruppur textile mill"
              fill
              priority
              quality={85}
              className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[right_center] select-none opacity-40 lg:opacity-50"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#26351C] via-[#26351C]/92 to-[#26351C]/60 lg:to-[#26351C]/30"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#26351C] via-transparent to-black/35"
            />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[13px] text-[#E8DFCF]/80 mb-5 sm:mb-6"
            >
              <Link
                href="/"
                className="hover:text-[#F5F1E8] transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="size-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="size-3.5 text-[#E8DFCF]/40" />
              <span className="text-[#F5F1E8] font-medium" aria-current="page">
                Wholesale Cotton Towels
              </span>
            </nav>

            <div className="max-w-[840px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]">
                  DIRECT HANDLOOM MILL • TIRUPPUR, TAMIL NADU
                </span>
                <span
                  className="h-px w-10 sm:w-16 bg-[#E8DFCF]/30"
                  aria-hidden="true"
                />
              </div>

              {/* Exact H1 Title */}
              <h1
                id="hero-title"
                className="mt-3.5 sm:mt-4 font-display text-[2.4rem] sm:text-[3.25rem] lg:text-[3.85rem] font-normal leading-[1.08] tracking-tight text-[#F5F1E8]"
              >
                Wholesale Cotton Towels Manufacturer in Tiruppur, India
              </h1>

              {/* Subheading / Value Proposition */}
              <p className="mt-4 sm:mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[#E8DFCF]/90 font-normal max-w-[760px]">
                Sri Maruthi Textiles has been weaving quality handloom towels on our
                own looms in Pallagoundenpalayam, Tiruppur district for over 20 years.
                We supply wholesale distributors, retail store chains, resorts, and
                hospitality businesses across India with verified cotton blend
                materials, dependable lot-by-lot consistency, direct mill rates, and
                prompt factory dispatch.
              </p>

              {/* Primary Call to Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#wholesale-pricing"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[15px] font-semibold transition-all shadow-sm group"
                >
                  <span>Request Wholesale Pricing</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#E8DFCF]/40 hover:border-[#E8DFCF] hover:bg-white/10 text-[#F5F1E8] text-[15px] font-medium transition-colors"
                >
                  <span>View Products Catalogue</span>
                  <ChevronRight className="size-4" />
                </Link>

                <a
                  href={whatsappHref(
                    contact.whatsapp.e164,
                    "Hello Sri Maruthi Textiles, I would like to enquire about wholesale cotton towel pricing and sample dispatch."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-md bg-white/10 hover:bg-white/15 border border-[#E8DFCF]/20 text-[#F5F1E8] text-[14px] font-medium transition-colors"
                >
                  <MessageCircle className="size-4 text-[#E8DFCF]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Crawlable Quick Links to Related Pages */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[13px] text-[#E8DFCF]/85">
                <span className="text-[#E8DFCF]/50 font-medium">Explore Collections:</span>
                <Link
                  href="/checked-cotton-towels"
                  className="hover:text-[#F5F1E8] underline underline-offset-4 decoration-[#E8DFCF]/40 hover:decoration-[#F5F1E8] transition-colors"
                >
                  Checked Cotton Towels
                </Link>
                <span className="text-[#E8DFCF]/30" aria-hidden="true">·</span>
                <Link
                  href="/products"
                  className="hover:text-[#F5F1E8] underline underline-offset-4 decoration-[#E8DFCF]/40 hover:decoration-[#F5F1E8] transition-colors"
                >
                  Products Catalogue
                </Link>
                <span className="text-[#E8DFCF]/30" aria-hidden="true">·</span>
                <Link
                  href="/about-us"
                  className="hover:text-[#F5F1E8] underline underline-offset-4 decoration-[#E8DFCF]/40 hover:decoration-[#F5F1E8] transition-colors"
                >
                  About Us &amp; Mill Heritage
                </Link>
              </div>

              {/* Verified Capabilities Ribbon */}
              <div className="mt-10 pt-6 border-t border-[rgba(245,241,232,0.15)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#E8DFCF]/90 text-[13.5px]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>10–15 Pcs Low MOQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>1–2 Days Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>Direct From Looms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>Pan-India Transport</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. MANUFACTURING BUSINESS & SUPPLY ADVANTAGE
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Narrative Copy */}
              <div className="lg:col-span-7">
                <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                  OUR WEAVING FACILITY
                </span>
                <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                  Authentic Handloom Weaving from the Heart of Tiruppur
                </h2>

                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[#29251F]/85">
                  <p>
                    Situated in <strong>Pallagoundenpalayam</strong>, within the renowned
                    textile district of Tiruppur, Tamil Nadu, Sri Maruthi Textiles operates
                    traditional handlooms managed by skilled weavers. For over two decades,
                    we have adhered to direct mill manufacturing — selling what we weave
                    directly to buyers without trading agents, brokers, or markup layers.
                  </p>
                  <p>
                    Because we control every shuttle and beam on our floor, we inspect
                    warp and weft tension, yarn counts, and locked selvedge stitching lot by
                    lot. Wholesalers and hospitality clients receive consistent GSM and
                    dimensions across recurring bulk consignments.
                  </p>
                </div>

                {/* The Verified Material Truth Box */}
                <div className="mt-6 p-5 sm:p-6 rounded-md bg-[#ECEFE4] border border-[#40572D]/20">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-[#40572D] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-[18px] sm:text-[20px] font-medium text-[#29251F]">
                        Our Verified Composition: Why We Woven Cotton Blends
                      </h3>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#29251F]/80">
                        We do not make false claims that every towel is 100% cotton. Our
                        plain, checked, and white towels are engineered with an{" "}
                        <strong>80% Cotton / 20% Polyester blend</strong>, and our natural
                        kora towels use an{" "}
                        <strong>85% Unbleached Cotton / 15% Polyester blend</strong>.
                      </p>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#29251F]/80">
                        This balanced composition gives commercial buyers the best of both
                        worlds: <em>absorbent cotton terry loops</em> that dry skin gently and
                        quickly, supported by a <em>high-tensile polyester core</em> that
                        prevents edge fraying, eliminates shrinkage curling, and withstands
                        strenuous commercial laundry cycles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-[14.5px]">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 font-semibold text-[#40572D] hover:text-[#26351C] transition-colors"
                  >
                    <span>About our mill &amp; handloom manufacturing</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <span className="text-[#29251F]/30 hidden sm:inline">·</span>
                  <Link
                    href="/checked-cotton-towels"
                    className="inline-flex items-center gap-2 font-semibold text-[#40572D] hover:text-[#26351C] transition-colors"
                  >
                    <span>Explore Checked Cotton Towels</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Photography Frames */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xs border border-[#E8DFCF]">
                  <Image
                    src="/images/loom-craft-artisan.jpg"
                    alt="Artisan handloom weaving in Tiruppur textile mill"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-[12.5px] font-medium text-white/95">
                      Handloom weaving at our Pallagoundenpalayam mill
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xs border border-[#E8DFCF]">
                  <Image
                    src="/images/loom-shuttle-detail.jpg"
                    alt="Handloom shuttle and yarn tension control detail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-[12.5px] font-medium text-white/95">
                      Uniform yarn tension and reinforced locked selvedges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. PRODUCT VARIETIES & VERIFIED SPECIFICATIONS
            ========================================================================= */}
        <section
          id="product-varieties"
          className="py-16 sm:py-20 lg:py-24 bg-[#F5F1E8] border-b border-[#E8DFCF]"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[760px]">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                PRODUCT CATALOGUE
              </span>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                Wholesale Towel Varieties &amp; Specifications
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                Explore our primary running handloom lines. All towels are manufactured
                with locked selvedges, tested for commercial wash fastness, and
                available in bulk bales with low minimum order quantities.
              </p>
            </div>

            {/* Product Variety Cards Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {WHOLESALE_CATEGORIES.map((cat) => (
                <article
                  key={cat.id}
                  className="rounded-md bg-[#FBF9F6] border border-[#E8DFCF] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#40572D]/50 transition-colors"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 320px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#26351C]/90 text-[#F5F1E8] px-2.5 py-1 rounded text-[11px] font-mono tracking-wider font-semibold">
                        {cat.codePrefix} SERIES
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <h3 className="font-display text-[19px] sm:text-[20px] font-medium text-[#29251F] leading-snug">
                        {cat.name}
                      </h3>

                      <dl className="mt-4 space-y-2.5 text-[13px] text-[#29251F]/80">
                        <div>
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Material Blend
                          </dt>
                          <dd className="font-medium text-[#29251F]">{cat.blend}</dd>
                        </div>
                        <div>
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Dimensions
                          </dt>
                          <dd className="font-medium text-[#29251F]">{cat.dimensions}</dd>
                        </div>
                        <div>
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Weave &amp; Selvedge
                          </dt>
                          <dd className="text-[#29251F]/80">{cat.weave}</dd>
                        </div>
                        <div>
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Available Shades
                          </dt>
                          <dd className="text-[#29251F]/80">{cat.colors}</dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[#E8DFCF]/60 mt-4">
                    <div className="pt-3 flex items-center justify-between text-[12.5px] text-[#29251F]/70 mb-3">
                      <span>MOQ: <strong className="text-[#29251F]">{cat.moq}</strong></span>
                      <span>Dispatch: <strong className="text-[#40572D]">{cat.dispatch}</strong></span>
                    </div>

                    <Link
                      href={cat.link}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#ECEFE4] hover:bg-[#40572D] text-[#40572D] hover:text-[#F5F1E8] text-[13px] font-semibold transition-colors"
                    >
                      <span>{cat.linkText}</span>
                      <ChevronRight className="size-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Verified Specification Matrix Table */}
            <div className="mt-14 pt-10 border-t border-[#E8DFCF]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-[#40572D]">
                    COMPARATIVE MATRIX
                  </span>
                  <h3 className="mt-1 font-display text-[22px] sm:text-[26px] font-normal text-[#29251F]">
                    Verified Specifications by Product Line
                  </h3>
                </div>
                <p className="text-[13px] text-[#29251F]/70 max-w-[400px]">
                  All dimensions and yarn ratios are strictly verified against our
                  active handloom production standards.
                </p>
              </div>

              <div className="overflow-x-auto rounded-md border border-[#E8DFCF] bg-[#FBF9F6] shadow-xs">
                <table className="w-full text-left text-[13.5px] border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#ECEFE4] border-b border-[#E8DFCF] text-[12px] uppercase font-sans font-semibold tracking-wider text-[#29251F]/80">
                      <th className="py-3.5 px-4">Towel Variety</th>
                      <th className="py-3.5 px-4">Dimensions</th>
                      <th className="py-3.5 px-4">Verified Blend</th>
                      <th className="py-3.5 px-4">Weave &amp; Hems</th>
                      <th className="py-3.5 px-4">MOQ</th>
                      <th className="py-3.5 px-4">Dispatch</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DFCF]/70">
                    {SPEC_MATRIX.map((row, idx) => (
                      <tr
                        key={row.category}
                        className={idx % 2 === 0 ? "bg-white/50" : "bg-[#FBF9F6]"}
                      >
                        <td className="py-3.5 px-4 font-semibold text-[#29251F]">
                          {row.category}
                        </td>
                        <td className="py-3.5 px-4 text-[#29251F]/80">{row.sizes}</td>
                        <td className="py-3.5 px-4 font-medium text-[#40572D]">
                          {row.material}
                        </td>
                        <td className="py-3.5 px-4 text-[#29251F]/80">
                          {row.construction}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-medium text-[#29251F]">
                          {row.moq}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-[#26351C]">
                          {row.dispatch}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. HOSPITALITY & INSTITUTIONAL BULK SOLUTIONS
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xs border border-[#E8DFCF]">
                  <Image
                    src="/images/custom/custom-border-detail.jpg"
                    alt="Custom woven border and jacquard detailing on hotel towels"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                    <p className="text-[13px] font-medium text-white/95">
                      Custom jacquard logo borders available for orders over 1,000 pieces
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                  HOSPITALITY &amp; INSTITUTIONAL SUPPLY
                </span>
                <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                  Engineered for Hotels, Resorts, Spas, and Healthcare
                </h2>

                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[#29251F]/85">
                  <p>
                    Institutional laundries demand towels that resist industrial hot water
                    washers, heavy tumbling, and bleach sanitization without shedding
                    excessive lint or losing shape.
                  </p>
                  <p>
                    Our optical white towels (SMT-WH Series) are woven with high-twist
                    yarns and double-needle lockstitching on all perimeter hems. They
                    retain brightness and square alignment across 100+ commercial wash
                    cycles, ensuring dependable turnarounds for guest rooms and treatment
                    centers.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-md bg-[#F5F1E8] border border-[#E8DFCF]">
                    <h3 className="font-semibold text-[15px] text-[#29251F]">
                      Chlorine-Bleach Safe
                    </h3>
                    <p className="mt-1 text-[13px] text-[#29251F]/75 leading-relaxed">
                      Woven specifically for high-temperature sanitizing wash cycles in
                      hospitals and hotel laundries.
                    </p>
                  </div>
                  <div className="p-4 rounded-md bg-[#F5F1E8] border border-[#E8DFCF]">
                    <h3 className="font-semibold text-[15px] text-[#29251F]">
                      Custom Weave Sizing (1,000+ Pcs)
                    </h3>
                    <p className="mt-1 text-[13px] text-[#29251F]/75 leading-relaxed">
                      Custom dimensions, target GSM, and woven name borders tailored for
                      resorts and institutional linen buyers.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#wholesale-pricing"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#26351C] hover:bg-[#1E2B16] text-[#F5F1E8] text-[14.5px] font-semibold transition-colors"
                  >
                    <span>Request Institutional Pricing</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={whatsappHref(
                      contact.whatsapp.e164,
                      "Hello Sri Maruthi Textiles, I am enquiring on behalf of a hotel/resort for institutional towels."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#40572D] hover:underline"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Hospitality Quote</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. HOW SAMPLES AND WHOLESALE PRICING WORK (4-STEP PROCESS)
            ========================================================================= */}
        <section
          id="sample-process"
          className="py-16 sm:py-20 lg:py-24 bg-[#ECEFE4] border-b border-[#E8DFCF]"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[760px] mx-auto text-center">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                CLEAR PROCUREMENT PROCESS
              </span>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                How to Request Samples and Wholesale Pricing
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                We believe in simple, transparent B2B transactions without hidden
                clauses. Here is our exact 4-step workflow from initial inquiry to
                delivered consignment.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-md bg-[#FBF9F6] border border-[#E8DFCF] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="size-11 rounded-full bg-[#40572D] text-[#F5F1E8] font-display text-[20px] flex items-center justify-center font-medium mb-4">
                    1
                  </div>
                  <h3 className="font-display text-[19px] font-semibold text-[#29251F]">
                    Submit Requirement
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#29251F]/80">
                    Use our enquiry form, call, or WhatsApp us with your required towel
                    types (plain, checked, white, or kora), dimensions, estimated
                    quantities, and delivery city.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8DFCF]/70 text-[12px] font-medium text-[#40572D]">
                  Response within 24 hours
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-md bg-[#FBF9F6] border border-[#E8DFCF] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="size-11 rounded-full bg-[#40572D] text-[#F5F1E8] font-display text-[20px] flex items-center justify-center font-medium mb-4">
                    2
                  </div>
                  <h3 className="font-display text-[19px] font-semibold text-[#29251F]">
                    Sample &amp; Pricing
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#29251F]/80">
                    We share our full catalogue and wholesale rate quotation for your
                    volume. Physical sample towels are dispatched on request (chargeable)
                    so you can inspect loop pile, yarn density, and selvedges.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8DFCF]/70 text-[12px] font-medium text-[#40572D]">
                  Chargeable sample swatches
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-md bg-[#FBF9F6] border border-[#E8DFCF] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="size-11 rounded-full bg-[#40572D] text-[#F5F1E8] font-display text-[20px] flex items-center justify-center font-medium mb-4">
                    3
                  </div>
                  <h3 className="font-display text-[19px] font-semibold text-[#29251F]">
                    Order Confirmation
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#29251F]/80">
                    Confirm your quantity breakdown (colors/checks) and delivery terms. We
                    commit to a firm dispatch date before payment, with terms structured as
                    an advance percentage and the balance upon dispatch.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8DFCF]/70 text-[12px] font-medium text-[#40572D]">
                  Firm committed dispatch date
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-md bg-[#FBF9F6] border border-[#E8DFCF] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="size-11 rounded-full bg-[#40572D] text-[#F5F1E8] font-display text-[20px] flex items-center justify-center font-medium mb-4">
                    4
                  </div>
                  <h3 className="font-display text-[19px] font-semibold text-[#29251F]">
                    Freight Dispatch
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-[#29251F]/80">
                    Your consignment is packed into secure, waterproofed wholesale bales
                    and dispatched within 1–2 days (ready stock) via verified transport
                    logistics across Tamil Nadu, Kerala, or pan-India hubs.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E8DFCF]/70 text-[12px] font-medium text-[#40572D]">
                  Consignment tracking provided
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. REQUEST WHOLESALE PRICING CALL TO ACTION & FORM
            ========================================================================= */}
        <section
          id="wholesale-pricing"
          aria-labelledby="pricing-heading"
          className="relative py-16 sm:py-20 lg:py-24 bg-[#26351C] text-[#F5F1E8] overflow-hidden"
        >
          {/* Subtle textile texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035] select-none"
            style={{
              backgroundImage: `radial-gradient(#F5F1E8 0.75px, transparent 0.75px), radial-gradient(#A95738 0.75px, #26351C 0.75px)`,
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0, 12px 12px",
            }}
          />

          <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Direct Mill Details */}
              <div className="lg:col-span-5">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/80">
                  DIRECT FACTORY ENQUIRY
                </span>
                <h2
                  id="pricing-heading"
                  className="mt-3.5 font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.35rem] font-normal leading-[1.08] text-[#F5F1E8]"
                >
                  Request Wholesale Pricing
                </h2>
                <p className="mt-4 text-[15.5px] sm:text-[16.5px] text-[#E8DFCF]/90 leading-relaxed">
                  Tell us what towel varieties, dimensions, and approximate quantities you
                  require. We will review your specifications and reply with our official
                  wholesale pricing slab, sample dispatch details, and freight estimates
                  within 24 hours.
                </p>

                {/* Direct Contact Cards */}
                <div className="mt-8 p-6 rounded-md bg-[rgba(245,241,232,0.05)] border border-[rgba(245,241,232,0.14)] space-y-4">
                  <p className="font-sans text-[11px] uppercase tracking-wider font-semibold text-[#A95738]">
                    Direct Communication Channels
                  </p>

                  <div className="space-y-3 text-[14.5px]">
                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        Telephone (Direct Mill Line)
                      </span>
                      <a
                        href={telHref(contact.phone.e164)}
                        className="font-medium text-[#F5F1E8] hover:text-[#FAF8F3] hover:underline"
                      >
                        {contact.phone.display}
                      </a>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        WhatsApp (Instant Enquiry &amp; Catalogue)
                      </span>
                      <a
                        href={whatsappHref(
                          contact.whatsapp.e164,
                          "Hello Sri Maruthi Textiles, I would like to request wholesale rates for cotton blend towels."
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#F5F1E8] hover:text-[#FAF8F3] hover:underline"
                      >
                        {contact.whatsapp.display}
                      </a>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${contact.email}`}
                        className="font-medium text-[#F5F1E8] hover:text-[#FAF8F3] hover:underline break-all"
                      >
                        {contact.email}
                      </a>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        Mill Address
                      </span>
                      <span className="font-medium text-[#F5F1E8] leading-snug block">
                        {site.address.street}, {site.address.area}, {site.address.district},{" "}
                        {site.address.state} — {site.address.pincode}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        GSTIN
                      </span>
                      <span className="font-mono text-[13px] font-medium text-[#F5F1E8] tracking-wider">
                        {site.gstin}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={whatsappHref(
                      contact.whatsapp.e164,
                      "Hello Sri Maruthi Textiles, I would like to request wholesale rates for cotton blend towels."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[13.5px] font-semibold transition-colors"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Quick Quote</span>
                  </a>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-[13.5px] text-[#E8DFCF] hover:text-[#F5F1E8] underline underline-offset-4"
                  >
                    <span>Browse 24+ SKUs</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                <EnquiryForm
                  heading="Request Wholesale Pricing & Samples"
                  subheading="Tell us about your required towel varieties, dimensions, and estimated quantities. Our production team in Tiruppur will respond with an official wholesale rate card and sample dispatch options within 24 hours."
                  badge="Direct Mill Rates • Fast Turnaround"
                  submitLabel="Request Wholesale Pricing"
                  defaultRequirement="Checked Towels"
                  idPrefix="wholesale-quote"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. WHOLESALE PROCUREMENT FAQ ACCORDION
            ========================================================================= */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]"
        >
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                PROCUREMENT CLARIFICATIONS
              </span>
              <h2
                id="faq-heading"
                className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]"
              >
                Frequently Asked Wholesale Questions
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                Clear, verified answers regarding our manufacturing standards, MOQ, yarn
                blends, sample policies, and logistics.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {WHOLESALE_FAQS.map((faq, idx) => (
                <details
                  key={faq.q}
                  className="group rounded-md bg-[#F5F1E8] border border-[#E8DFCF] p-5 sm:p-6 transition-colors [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-[17px] sm:text-[19px] font-medium text-[#29251F] hover:text-[#40572D] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40572D]">
                    <span>{faq.q}</span>
                    <span className="shrink-0 size-6 rounded-full bg-[#ECEFE4] text-[#40572D] flex items-center justify-center text-[15px] font-bold group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-3.5 text-[14.5px] sm:text-[15px] leading-[1.65] text-[#29251F]/80 pt-3 border-t border-[#E8DFCF]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. BOTTOM CROSS-LINKING BAR
            ========================================================================= */}
        <section className="py-12 bg-[#ECEFE4] text-[#29251F]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-[20px] font-medium text-[#29251F]">
                Looking for specific product dimensions or SKUs?
              </h3>
              <p className="text-[14px] text-[#29251F]/75 mt-1">
                Explore our full digital catalogue with detailed specifications, codes,
                and photos.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[14px] font-semibold transition-colors shadow-xs"
              >
                <span>Browse Products Page</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/checked-cotton-towels"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#40572D]/40 text-[#40572D] hover:bg-[#40572D]/10 text-[14px] font-medium transition-colors"
              >
                <span>Checked Cotton Towels</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#29251F]/30 hover:border-[#29251F] text-[#29251F] text-[14px] font-medium transition-colors"
              >
                <span>About Us &amp; Mill Heritage</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#hero-title"
                className="inline-flex items-center px-4 py-2.5 rounded border border-[#29251F]/30 hover:border-[#29251F] text-[#29251F] text-[14px] font-medium transition-colors"
              >
                Back to Top ↑
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
