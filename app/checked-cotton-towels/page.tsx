import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Clock,
  ArrowRight,
  CheckCircle2,
  Grid3X3,
  Layers,
  Truck,
  Building2,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { contact, site, SITE_URL, whatsappHref, telHref } from "@/lib/site";
import { PRODUCTS_CATALOG } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Checked Cotton Towels Manufacturer & Wholesale Supplier in India",
  description:
    "Direct manufacturer of handloom checked cotton blend towels in Tiruppur, India. Supplying wholesale checked bath towels, Madras check towels, and large bath sheets with low MOQ & 1–2 days dispatch across India.",
  alternates: {
    canonical: "/checked-cotton-towels",
  },
  openGraph: {
    title:
      "Checked Cotton Towels Manufacturer & Wholesale Supplier in India — Sri Maruthi Textiles",
    description:
      "Authentic handloom checked cotton blend towels manufactured in Tiruppur, Tamil Nadu. Direct mill supply of 16 checked bath towel models with colorfast vat-dyed yarns and locked selvedges.",
    url: "/checked-cotton-towels",
    images: [
      {
        url: "/images/products/smt-ck-888.webp",
        width: 1200,
        height: 630,
        alt: "Handloom checked cotton blend bath towels manufactured in Tiruppur, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Checked Cotton Towels Manufacturer & Wholesale Supplier in India — Sri Maruthi Textiles",
    description:
      "Direct handloom checked cotton blend towels manufacturer in Tiruppur. Wholesale checked bath towels for distributors, retailers, and hospitality buyers.",
    images: ["/images/products/smt-ck-888.webp"],
  },
};

const CHECKED_TOWELS = PRODUCTS_CATALOG.filter(
  (p) => p.category === "checked-towels"
);

const SIZE_BREAKDOWN = [
  {
    tier: "Compact Utility & Daily Checks",
    size: "22 × 44 inch",
    models: "SMT-CK-222, SMT-CK-222BK",
    desc: "Lightweight, fast-drying loop pile engineered for high-turnover daily retail, budget lodges, and household wholesale.",
    moq: "10 pcs",
  },
  {
    tier: "Standard Running Bath Towels",
    size: "24 × 48 inch",
    models: "SMT-CK-888, SMT-CK-888WH, SMT-CK-555, SMT-CK-10001, SMT-CK-10001-D2",
    desc: "The classic South Indian checked bath towel footprint. Crisp right-angle square alignment, balanced yarn tension, and colorfast checks.",
    moq: "10 pcs",
  },
  {
    tier: "Mid-Large Checked Bath Towels",
    size: "26 × 52 inch",
    models: "SMT-CK-12001, SMT-CK-3060NIS, SMT-CK-3060BK",
    desc: "Ample drying coverage featuring horizontal woven border bands, deep black accent frames, and shrink-resistant weave balance.",
    moq: "10 pcs",
  },
  {
    tier: "Generous Hotel & Retail Checks",
    size: "27 × 54 inch",
    models: "SMT-CK-175, SMT-CK-120, SMT-CK-150",
    desc: "Spacious wrap with reinforced flat borders and double-needle lockstitched hems that resist fraying in commercial laundry.",
    moq: "10 pcs",
  },
  {
    tier: "Dense Heavyweight Checked Towels",
    size: "28 × 56 inch",
    models: "SMT-CK-15001, SMT-CK-70140BK",
    desc: "High pick count weave with plush looped terry pile and bold selvedge framing for premium linen retailers and guest houses.",
    moq: "10 pcs",
  },
  {
    tier: "Extra-Large Checked Bath Sheet",
    size: "31 × 62 inch",
    models: "SMT-CK-18001",
    desc: "Our largest checked profile. Full-body wrap comfort and superior water retention capacity for resorts and luxury linen wholesalers.",
    moq: "10 pcs",
  },
];

const CHECKED_FAQS = [
  {
    q: "Are Sri Maruthi Textiles checked towels 100% cotton?",
    a: "No, and we are deliberate about declaring our true blend. All 16 models in our checked towel collection are woven from an 80% Cotton / 20% Polyester blend. The cotton warp and looped pile provide rapid water absorbency and a gentle hand feel, while the high-tensile polyester filament core locks the selvedges, prevents shrinkage distortion, and preserves square check alignment across commercial wash cycles.",
  },
  {
    q: "What makes your handloom checked bath towels different from powerloom market towels?",
    a: "Handloom weaving allows our master weavers in Tiruppur to maintain balanced warp and weft yarn tension. This prevents diagonal bowing, skewing, and edge curling that often ruin powerloom check towels after the first wash. Furthermore, our side selvedges are tightly woven and locked on the loom rather than loosely cut and overlocked.",
  },
  {
    q: "Do the checked yarn colors bleed or run during washing?",
    a: "No. We utilize color-fast vat-dyed yarns across all checked colorways (Red, Maroon, Olive Green, Navy Blue, Cyan, Blue, and Black accents). The yarns are dyed and pre-tested for high wash-fastness before weaving to ensure check lines remain sharp and will not bleed into adjacent white or light squares.",
  },
  {
    q: "What is your minimum order quantity (MOQ) for wholesale checked towels?",
    a: "Our wholesale minimum order quantity starts at just 10 pieces per checked towel model. Wholesalers and retailers can order manageable quantities to test market demand, or order full commercial bales in single or assorted colorways.",
  },
  {
    q: "Can we request physical sample towels before placing a bulk consignment?",
    a: "Yes. Physical sample towels are available on request and are chargeable at nominal cost. We dispatch samples via courier so you can evaluate fabric thickness, terry loop density, softness, locked selvedges, and check alignment firsthand.",
  },
  {
    q: "How are wholesale checked towels packed and dispatched?",
    a: "Towels are folded, inspected lot by lot, and compressed into heavy-duty wholesale transport bales. We dispatch directly from our Pallagoundenpalayam mill in Tiruppur district within 1 to 2 business days for ready stock, serving destinations across Kerala, Tamil Nadu, and pan-India transport networks.",
  },
  {
    q: "Can you weave custom checked towel patterns or custom dimensions?",
    a: "Yes. For bulk consignments of 1,000 pieces or more, we can manufacture custom checked handloom towels to your exact dimensional specifications, custom color combinations, target GSM, or woven border branding.",
  },
];

export default function CheckedCottonTowelsPage() {
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
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Checked Cotton Towels",
        item: `${SITE_URL}/checked-cotton-towels`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Checked Cotton Towels Manufacturer & Wholesale Supplier in India",
    description:
      "Authentic handloom checked cotton blend towels manufactured in Tiruppur, India. 16 verified models with colorfast vat-dyed checks, locked selvedges, and low MOQ.",
    url: `${SITE_URL}/checked-cotton-towels`,
    mainEntity: {
      "@type": "ItemList",
      name: "Handloom Checked Cotton Blend Towels",
      numberOfItems: CHECKED_TOWELS.length,
      itemListElement: CHECKED_TOWELS.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: p.name,
        description: p.shortDescription,
        image: `${SITE_URL}${p.image}`,
        url: `${SITE_URL}/products#${p.id}`,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CHECKED_FAQS.map((faq) => ({
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
            1. HERO SECTION: Handloom Checked Towels Manufacturer in Tiruppur
            ========================================================================= */}
        <section
          aria-labelledby="hero-heading"
          className="relative bg-[#26351C] text-[#F5F1E8] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden"
        >
          {/* Textile Mill Background with Dark Scrim */}
          <div className="absolute inset-0 -z-0">
            <Image
              src="/images/products/smt-ck-888.webp"
              alt="Handloom checked cotton blend bath towels woven in Tiruppur"
              fill
              priority
              quality={85}
              className="object-cover object-[70%_center] sm:object-[65%_center] lg:object-[right_center] select-none opacity-30 lg:opacity-40"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#26351C] via-[#26351C]/92 to-[#26351C]/65 lg:to-[#26351C]/35"
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
              <Link
                href="/products"
                className="hover:text-[#F5F1E8] transition-colors"
              >
                Products
              </Link>
              <ChevronRight className="size-3.5 text-[#E8DFCF]/40" />
              <span className="text-[#F5F1E8] font-medium" aria-current="page">
                Checked Cotton Towels
              </span>
            </nav>

            <div className="max-w-[840px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]">
                  HANDLOOM CHECK WEAVES • DIRECT FROM TIRUPPUR MILL
                </span>
                <span
                  className="h-px w-10 sm:w-16 bg-[#E8DFCF]/30"
                  aria-hidden="true"
                />
              </div>

              {/* Exact H1 Title */}
              <h1
                id="hero-heading"
                className="mt-3.5 sm:mt-4 font-display text-[2.35rem] sm:text-[3.25rem] lg:text-[3.85rem] font-normal leading-[1.08] tracking-tight text-[#F5F1E8]"
              >
                Checked Cotton Towels Manufacturer &amp; Wholesale Supplier in India
              </h1>

              {/* Keyword-Rich Natural Narrative Subtitle */}
              <p className="mt-4 sm:mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[#E8DFCF]/90 font-normal max-w-[760px]">
                Sri Maruthi Textiles is an authentic handloom checked cotton blend
                towel manufacturer based in Tiruppur, Tamil Nadu. Woven on our own
                handlooms using colorfast vat-dyed yarns and locked selvedges, our
                checked bath towels deliver traditional South Indian craftsmanship,
                high water absorbency, low MOQ, and 1–2 days dispatch for wholesale
                distributors, retail stores, and hospitality buyers across India.
              </p>

              {/* Hero Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[15px] font-semibold transition-all shadow-sm group"
                >
                  <span>Request Sample &amp; Pricing</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={whatsappHref(
                    contact.whatsapp.e164,
                    "Hello Sri Maruthi Textiles, I would like to enquire about wholesale checked cotton towels and request a sample pack."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#E8DFCF]/40 hover:border-[#E8DFCF] hover:bg-white/10 text-[#F5F1E8] text-[15px] font-medium transition-colors"
                >
                  <MessageCircle className="size-4 text-[#E8DFCF]" />
                  <span>WhatsApp Checked Towel Enquiry</span>
                </a>

                <Link
                  href="/wholesale-cotton-towels"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-md bg-white/10 hover:bg-white/15 text-[#F5F1E8] text-[14px] font-medium transition-colors"
                >
                  <span>Wholesale Cotton Towels</span>
                  <ChevronRight className="size-4" />
                </Link>
              </div>

              {/* Crawlable Quick Links to Related Pages */}
              <div className="mt-5 flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-[13px] text-[#E8DFCF]/85">
                <span className="text-[#E8DFCF]/50 font-medium">Explore Collections:</span>
                <Link
                  href="/wholesale-cotton-towels"
                  className="hover:text-[#F5F1E8] underline underline-offset-4 decoration-[#E8DFCF]/40 hover:decoration-[#F5F1E8] transition-colors"
                >
                  Wholesale Cotton Towels
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

              {/* Capability Metrics Ribbon */}
              <div className="mt-10 pt-6 border-t border-[rgba(245,241,232,0.15)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#E8DFCF]/90 text-[13.5px]">
                <div className="flex items-center gap-2">
                  <Grid3X3 className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>16 Checked Models</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>From 10 Pcs Low MOQ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>1–2 Days Dispatch</span>
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
            2. THE ART & INTEGRITY OF HANDLOOM CHECKED TOWELS
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Handloom Check Expertise */}
              <div className="lg:col-span-7">
                <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                  CRAFTSMANSHIP &amp; YARN INTEGRITY
                </span>
                <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                  Authentic South Indian Checked Towels Woven on Looms
                </h2>

                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[#29251F]/85">
                  <p>
                    South Indian checked towels (frequently termed <em>Madras check towels</em> or{" "}
                    <em>handloom checked bath towels</em>) are revered across India for
                    their brisk drying action, distinctive geometric square patterns, and
                    rugged longevity.
                  </p>
                  <p>
                    At Sri Maruthi Textiles, every checked towel is woven in our
                    Pallagoundenpalayam mill in Tiruppur. We dye our cotton yarns with
                    colorfast vat dyes before weaving, threading individual warp and
                    weft bobbins by hand. This deliberate tension balance guarantees
                    that checked lines meet at true right angles and resist the diagonal
                    bowing and skewing common in rushed commercial production.
                  </p>
                </div>

                {/* Verified Material Composition Disclosure */}
                <div className="mt-6 p-5 sm:p-6 rounded-md bg-[#ECEFE4] border border-[#40572D]/20">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-[#40572D] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-[18px] sm:text-[20px] font-medium text-[#29251F]">
                        Verified Material: Handloom 80/20 Cotton Blend
                      </h3>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#29251F]/80">
                        We do not make misleading claims that our checked towels are 100%
                        cotton. Every checked towel in our running range is manufactured
                        with an <strong>80% Cotton / 20% Polyester blend</strong>.
                      </p>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#29251F]/80">
                        The looped cotton pile ensures instant water absorption and natural
                        tactile softness. Meanwhile, the high-tensile polyester core locks the
                        selvedges, prevents shrinkage distortion, and keeps the check lines
                        crisp through hundreds of commercial wash cycles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-[14.5px]">
                  <Link
                    href="/products#checked-towels"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#40572D] hover:underline"
                  >
                    <span>View all 16 checked models in catalogue</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <span className="text-[#29251F]/30 hidden sm:inline">·</span>
                  <Link
                    href="/wholesale-cotton-towels"
                    className="font-medium text-[#29251F]/75 hover:text-[#29251F]"
                  >
                    Wholesale Cotton Towels manufacturing
                  </Link>
                  <span className="text-[#29251F]/30 hidden sm:inline">·</span>
                  <Link
                    href="/about-us"
                    className="font-medium text-[#29251F]/75 hover:text-[#29251F]"
                  >
                    About Sri Maruthi Textiles
                  </Link>
                </div>
              </div>

              {/* Right Column: Photography of Checked Towels */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xs border border-[#E8DFCF]">
                  <Image
                    src="/images/products/smt-ck-888.webp"
                    alt="888 Black Checked handloom cotton blend bath towel with square pattern"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-[12.5px] font-medium text-white/95">
                      SMT-CK-888: Our best-selling 24 × 48 in checked bath towel
                    </p>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xs border border-[#E8DFCF]">
                  <Image
                    src="/images/products/smt-ck-15001.webp"
                    alt="Dense checked terry loop pile texture showing tight locked selvedge"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-[12.5px] font-medium text-white/95">
                      Dense terry weave with locked selvedge edges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. COMPLETE CHECKED TOWELS CATALOGUE (16 VERIFIED MODELS)
            ========================================================================= */}
        <section
          id="checked-models"
          className="py-16 sm:py-20 lg:py-24 bg-[#F5F1E8] border-b border-[#E8DFCF]"
        >
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-[760px]">
                <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                  ACTIVE CATALOGUE
                </span>
                <h2 className="mt-2 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                  Our 16 Handloom Checked Towel Models
                </h2>
                <p className="mt-3 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                  Every product listed below is an authentic running checked towel
                  produced on our Tiruppur handlooms. All models feature locked
                  selvedges, verified 80/20 cotton blend yarn, and colorfast vat dyeing.
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[14px] font-semibold transition-colors shadow-xs"
                >
                  <span>Request Full Price List</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* 16 Checked Products Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {CHECKED_TOWELS.map((item) => (
                <article
                  key={item.id}
                  id={item.id}
                  className="rounded-md bg-[#FBF9F6] border border-[#E8DFCF] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#40572D]/60 hover:shadow-sm transition-all"
                >
                  <div>
                    {/* Towel Photo */}
                    <div className="relative aspect-[4/3] bg-black/5 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 300px"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#26351C]/90 text-[#F5F1E8] px-2.5 py-1 rounded text-[11px] font-mono tracking-wider font-semibold">
                        {item.code}
                      </div>
                      {item.badge && (
                        <div className="absolute top-3 right-3 bg-[#40572D] text-[#F5F1E8] px-2.5 py-0.5 rounded text-[10.5px] font-sans font-semibold tracking-wide">
                          {item.badge}
                        </div>
                      )}
                    </div>

                    {/* Content Details */}
                    <div className="p-5">
                      <h3 className="font-display text-[18px] sm:text-[19px] font-medium text-[#29251F] leading-snug">
                        {item.name}
                      </h3>

                      <dl className="mt-3.5 space-y-2 text-[12.5px] sm:text-[13px] text-[#29251F]/80">
                        <div className="flex items-center justify-between border-b border-[#E8DFCF]/60 pb-1.5">
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Dimensions
                          </dt>
                          <dd className="font-medium text-[#29251F]">
                            {item.dimensions}
                          </dd>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#E8DFCF]/60 pb-1.5">
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Material
                          </dt>
                          <dd className="font-medium text-[#40572D]">
                            {item.blend}
                          </dd>
                        </div>
                        <div className="border-b border-[#E8DFCF]/60 pb-1.5">
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Weave Style
                          </dt>
                          <dd className="text-[#29251F]/85 mt-0.5">
                            {item.weaveType}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[11px] uppercase tracking-wider text-[#29251F]/50 font-semibold font-sans">
                            Colours Available
                          </dt>
                          <dd className="text-[#29251F]/80 mt-0.5 truncate">
                            {item.colors.join(", ")}
                          </dd>
                        </div>
                      </dl>

                      <p className="mt-3 text-[12.5px] leading-relaxed text-[#29251F]/70 line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-[#E8DFCF]/60 mt-2">
                    <div className="pt-2.5 flex items-center justify-between text-[12px] text-[#29251F]/70 mb-3">
                      <span>MOQ: <strong className="text-[#29251F]">{item.moq}</strong></span>
                      <span>Dispatch: <strong className="text-[#40572D]">{item.dispatchTime}</strong></span>
                    </div>

                    <a
                      href={`#enquiry`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-[#ECEFE4] hover:bg-[#40572D] text-[#40572D] hover:text-[#F5F1E8] text-[13px] font-semibold transition-colors"
                    >
                      <span>Inquire This Model</span>
                      <ChevronRight className="size-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. SIZE & DIMENSION GUIDE FOR CHECKED TOWEL WHOLESALERS
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[760px]">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                SIZE &amp; SPECIFICATION MATRIX
              </span>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                Checked Towel Sizing Guide for Buyers
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                Wholesale checked towels are available across six distinct dimensional
                tiers. Review each size tier to match your distribution channel, retail
                clientele, or hospitality requirement.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SIZE_BREAKDOWN.map((tier) => (
                <div
                  key={tier.tier}
                  className="p-6 rounded-md bg-[#F5F1E8] border border-[#E8DFCF] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[14px] font-semibold text-[#40572D] bg-[#ECEFE4] px-2.5 py-0.5 rounded">
                        {tier.size}
                      </span>
                      <span className="text-[12px] text-[#29251F]/60">
                        MOQ: {tier.moq}
                      </span>
                    </div>

                    <h3 className="font-display text-[19px] font-medium text-[#29251F]">
                      {tier.tier}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-[#29251F]/80">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8DFCF]/70 text-[12px] text-[#29251F]/70 font-mono">
                    Models: <span className="text-[#29251F] font-medium">{tier.models}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom GSM / Custom Order Note */}
            <div className="mt-10 p-6 rounded-md bg-[#ECEFE4] border border-[#40572D]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-[18px] sm:text-[20px] font-medium text-[#29251F]">
                  Need Custom Checked Dimensions or Target GSM?
                </h3>
                <p className="text-[14px] text-[#29251F]/80 mt-1 max-w-[700px]">
                  For orders exceeding 1,000 pieces, our looms can be configured for
                  bespoke dimensions, specific GSM weights (250–500+ GSM), custom check
                  grid spacing, and institutional woven logos.
                </p>
              </div>
              <a
                href={whatsappHref(
                  contact.whatsapp.e164,
                  "Hello Sri Maruthi Textiles, I would like to discuss a custom checked towel weave (custom size / GSM / pattern)."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[13.5px] font-semibold transition-colors"
              >
                <MessageCircle className="size-4" />
                <span>Discuss Custom Weave</span>
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. REQUEST SAMPLE & PRICING SECTION & INQUIRY FORM
            ========================================================================= */}
        <section
          id="enquiry"
          aria-labelledby="enquiry-heading"
          className="relative py-16 sm:py-20 lg:py-24 bg-[#26351C] text-[#F5F1E8] overflow-hidden"
        >
          {/* Subtle organic textile grain */}
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
              {/* Left Column: Direct Factory Inquiry Details */}
              <div className="lg:col-span-5">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/80">
                  WHOLESALE PROCUREMENT
                </span>
                <h2
                  id="enquiry-heading"
                  className="mt-3.5 font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.35rem] font-normal leading-[1.08] text-[#F5F1E8]"
                >
                  Request Sample &amp; Pricing
                </h2>
                <p className="mt-4 text-[15.5px] sm:text-[16.5px] text-[#E8DFCF]/90 leading-relaxed">
                  Tell us which checked towel models or dimensions you are interested
                  in. Our team in Pallagoundenpalayam will calculate your wholesale slab,
                  confirm stock readiness, and arrange sample towel dispatch within 24
                  hours.
                </p>

                {/* Direct Mill Contact Card */}
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
                        WhatsApp (Instant Checked Towel Enquiry)
                      </span>
                      <a
                        href={whatsappHref(
                          contact.whatsapp.e164,
                          "Hello Sri Maruthi Textiles, I would like to request wholesale pricing and sample details for checked cotton towels."
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
                        Weaving Mill Address
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

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappHref(
                      contact.whatsapp.e164,
                      "Hello Sri Maruthi Textiles, I would like to request wholesale rates for checked cotton towels."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[13.5px] font-semibold transition-colors"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Quick Quote</span>
                  </a>

                  <Link
                    href="/wholesale-cotton-towels"
                    className="inline-flex items-center gap-1.5 text-[13.5px] text-[#E8DFCF] hover:text-[#F5F1E8] underline underline-offset-4"
                  >
                    <span>Wholesale Cotton Towels Hub</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Interactive Pricing & Sample Form */}
              <div className="lg:col-span-7">
                <EnquiryForm
                  heading="Request Sample & Pricing for Checked Towels"
                  subheading="Specify your target checked towel model, dimensions, estimated wholesale quantity, and delivery pin code. We will respond with an official wholesale quote and sample dispatch options within 24 hours."
                  badge="Checked Towels Direct Mill Rates"
                  submitLabel="Request Sample & Pricing"
                  defaultRequirement="Checked Towels"
                  idPrefix="checked-quote"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CHECKED TOWEL PROCUREMENT FAQ
            ========================================================================= */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]"
        >
          <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                BUYER QUESTIONS
              </span>
              <h2
                id="faq-heading"
                className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]"
              >
                Frequently Asked Questions on Checked Towels
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                Clear answers regarding our handloom checked towel materials, minimum
                quantities, colorfastness, sample swatches, and logistics.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {CHECKED_FAQS.map((faq) => (
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
            7. CROSS-LINKING & NAVIGATION BAR
            ========================================================================= */}
        <section className="py-12 bg-[#ECEFE4] text-[#29251F]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-[20px] font-medium text-[#29251F]">
                Looking for plain, optical white, or unbleached kora towels?
              </h3>
              <p className="text-[14px] text-[#29251F]/75 mt-1">
                Explore our full product catalogue or learn about our wholesale
                manufacturing operations.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[14px] font-semibold transition-colors shadow-xs"
              >
                <span>Products Catalogue</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/wholesale-cotton-towels"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#40572D]/40 text-[#40572D] hover:bg-[#40572D]/10 text-[14px] font-medium transition-colors"
              >
                <span>Wholesale Cotton Towels</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#29251F]/30 hover:border-[#29251F] text-[#29251F] text-[14px] font-medium transition-colors"
              >
                <span>About Us</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#hero-heading"
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
