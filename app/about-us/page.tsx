import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Building2,
  Clock,
  Layers,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Globe,
  Mail,
  Grid3X3,
  Truck,
  Sparkles,
} from "lucide-react";
import EnquiryForm from "@/components/EnquiryForm";
import { contact, site, SITE_URL, whatsappHref, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Handloom Towel Manufacturer in Tiruppur",
  description:
    "Sri Maruthi Textiles is a handloom towel manufacturer based in Tiruppur, Tamil Nadu, India. Over 20 years supplying quality cotton blend towels directly from our looms to wholesale distributors, retailers, and hospitality buyers.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title:
      "About Us — Handloom Towel Manufacturer in Tiruppur | Sri Maruthi Textiles",
    description:
      "Direct handloom towel manufacturer in Tiruppur, Tamil Nadu, India. Over 20 years weaving plain, checked, white, and kora cotton blend towels with verified low MOQ, direct mill pricing, and 1–2 days dispatch.",
    url: "/about-us",
    images: [
      {
        url: "/images/products/smt-ck-888.webp",
        width: 1200,
        height: 630,
        alt: "Genuine handloom checked cotton blend towels manufactured by Sri Maruthi Textiles in Tiruppur, Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Us — Handloom Towel Manufacturer in Tiruppur | Sri Maruthi Textiles",
    description:
      "Handloom towel manufacturer based in Tiruppur, Tamil Nadu, India. Over 20 years supplying wholesale cotton blend towels directly to distributors, retailers, and hospitality buyers.",
    images: ["/images/products/smt-ck-888.webp"],
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Cotton-Rich Blend & Colorfast Vat-Dyed Yarns",
    desc: "Selected cotton-polyester blend yarns (80/20 for plain, checked, and white towels; 85/15 for kora towels) prepared for handloom weaving. Yarns are pre-dyed using colorfast vat dyes to ensure vibrant shades and sharp check patterns that resist bleeding over repeated commercial washes.",
  },
  {
    step: "02",
    title: "Handloom Weaving on Traditional Looms",
    desc: "Woven by skilled handloom weavers in Tiruppur district using traditional looms. Controlled manual warp tension and shuttle passes create a balanced pick count, uniform terry pile, and locked selvedge edges that do not curl or fray.",
  },
  {
    step: "03",
    title: "Locked Selvedges & Neat Hem Finishing",
    desc: "Side selvedges are woven and locked directly on the loom rather than roughly cut. Perimeter end hems are securely stitched to prevent loose threads and unraveling during daily use and institutional commercial laundering.",
  },
  {
    step: "04",
    title: "Lot-by-Lot Floor Inspection & Transport Baling",
    desc: "Every woven lot is inspected directly on our mill floor for dimensional squareness, surface terry pile consistency, edge finish, and stitching integrity before being folded and packed into heavy-duty wholesale bales for prompt dispatch.",
  },
];

const PRODUCT_SUMMARIES = [
  {
    title: "Plain Cotton Blend Towels",
    code: "SMT-PL Series",
    image: "/images/products/smt-pl-73146.webp",
    alt: "Plain vat-dyed cotton blend bath towel with reinforced selvedge by Sri Maruthi Textiles",
    desc: "Solid and dual-color bath towels in 7 vat-dyed shades (Red, Maroon, Olive Green, Navy Blue, Cyan, Blue, Violet). Features absorbent looped terry pile in sizes 22×44 in up to 31×62 in.",
    link: "/products#plain-towels",
    linkText: "View Plain Towels",
  },
  {
    title: "Checked Handloom Towels",
    code: "SMT-CK Series",
    image: "/images/products/smt-ck-888.webp",
    alt: "Genuine handloom checked cotton blend bath towel by Sri Maruthi Textiles",
    desc: "Authentic South Indian checked bath towels across 16 running models (888, 555, 222, 10001, etc.) in sizes 22×44 in to 31×62 in with colorfast checks and locked selvedges.",
    link: "/checked-cotton-towels",
    linkText: "Explore Checked Cotton Towels",
  },
  {
    title: "Institutional White Towels",
    code: "SMT-WH Series",
    image: "/images/products/smt-wh-2754.webp",
    alt: "Bleach-safe optical white commercial bath towel by Sri Maruthi Textiles",
    desc: "Bleach-safe optical white bath towels (20×40 in to 31×62 in) engineered for hotels, resorts, clinics, and lodges with commercial laundry durability.",
    link: "/products#white-towels",
    linkText: "View White Towels",
  },
  {
    title: "Traditional Kora Towels",
    code: "SMT-KR Series",
    image: "/images/products/smt-kr-18001p.webp",
    alt: "Traditional unbleached kora cotton blend towel with border motif by Sri Maruthi Textiles",
    desc: "Generous 33×66 in traditional unbleached kora cotton bath towels (85/15 blend) featuring a natural earthy tone and printed border motifs.",
    link: "/products#kora-towels",
    linkText: "View Kora Towels",
  },
];

export default function AboutUsPage() {
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
        name: "About Us",
        item: `${SITE_URL}/about-us`,
      },
    ],
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/about-us#business`,
    name: "Sri Maruthi Textiles",
    legalName: "Sri Maruthi Textiles",
    url: `${SITE_URL}/about-us`,
    logo: `${SITE_URL}/images/logo-full.png`,
    image: `${SITE_URL}/images/products/smt-ck-888.webp`,
    description:
      "Handloom towel manufacturer based in Pallagoundenpalayam, Tiruppur, Tamil Nadu, India. Over 20 years supplying quality cotton blend towels directly from our looms to wholesale distributors, retailers, and hospitality businesses across India.",
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
          __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen bg-[#FBF9F6] text-[#29251F]">
        {/* =========================================================================
            1. HERO SECTION: Handloom Towel Manufacturer in Tiruppur, India
            ========================================================================= */}
        <section
          aria-labelledby="about-hero-title"
          className="relative bg-[#26351C] text-[#F5F1E8] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden"
        >
          {/* Subtle Organic Background Texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.045] select-none"
            style={{
              backgroundImage: `radial-gradient(#F5F1E8 0.75px, transparent 0.75px), radial-gradient(#A95738 0.75px, #26351C 0.75px)`,
              backgroundSize: "24px 24px",
              backgroundPosition: "0 0, 12px 12px",
            }}
          />

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
                About Us
              </span>
            </nav>

            <div className="max-w-[860px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]">
                  PALLAGOUNDENPALAYAM, TIRUPPUR • 20+ YEARS WEAVING HERITAGE
                </span>
                <span
                  className="h-px w-10 sm:w-16 bg-[#E8DFCF]/30"
                  aria-hidden="true"
                />
              </div>

              {/* Exact H1 Title */}
              <h1
                id="about-hero-title"
                className="mt-3.5 sm:mt-4 font-display text-[2.35rem] sm:text-[3.25rem] lg:text-[3.85rem] font-normal leading-[1.08] tracking-tight text-[#F5F1E8]"
              >
                About Sri Maruthi Textiles — Handloom Towel Manufacturer in Tiruppur, India
              </h1>

              {/* Subheading Narrative */}
              <p className="mt-4 sm:mt-5 text-[16px] sm:text-[17.5px] leading-[1.65] text-[#E8DFCF]/90 font-normal max-w-[780px]">
                Located in Pallagoundenpalayam, Uttukuli Taluk, in the textile center of Tiruppur district, Tamil Nadu, Sri
                Maruthi Textiles is an authentic handloom towel manufacturer with more than
                two decades of dedicated weaving experience. We manufacture and supply
                durable cotton blend towels directly from our looms to wholesale
                distributors, retail stores, and hospitality buyers across Kerala, Tamil Nadu,
                and pan-India with zero middleman markups.
              </p>

              {/* Primary Action Buttons & Internal Links */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[15px] font-semibold transition-all shadow-sm group"
                >
                  <span>Contact Our Mill</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-md border border-[#E8DFCF]/40 hover:border-[#E8DFCF] hover:bg-white/10 text-[#F5F1E8] text-[15px] font-medium transition-colors"
                >
                  <span>Full Catalogue</span>
                  <ChevronRight className="size-4" />
                </Link>

                <Link
                  href="/wholesale-cotton-towels"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-md border border-[#E8DFCF]/30 hover:border-[#E8DFCF] hover:bg-white/10 text-[#F5F1E8] text-[14px] font-medium transition-colors"
                >
                  <span>Wholesale Guide</span>
                </Link>

                <Link
                  href="/checked-cotton-towels"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-md border border-[#E8DFCF]/30 hover:border-[#E8DFCF] hover:bg-white/10 text-[#F5F1E8] text-[14px] font-medium transition-colors"
                >
                  <span>Checked Towels</span>
                </Link>

                <a
                  href={whatsappHref(
                    contact.whatsapp.e164,
                    "Hello Sri Maruthi Textiles, I am contacting you from the About Us page regarding handloom towels."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-md bg-white/10 hover:bg-white/15 text-[#F5F1E8] text-[14px] font-medium transition-colors"
                >
                  <MessageCircle className="size-4 text-[#E8DFCF]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              {/* Core Verified Pillars Ribbon */}
              <div className="mt-10 pt-6 border-t border-[rgba(245,241,232,0.15)] grid grid-cols-2 sm:grid-cols-4 gap-4 text-[#E8DFCF]/90 text-[13.5px]">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>Direct From Our Looms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>20+ Years Heritage</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>Checked Lot by Lot</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="size-4 text-[#E8DFCF] shrink-0" />
                  <span>Tamil Nadu, Kerala &amp; Pan-India</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. OUR 20-YEAR WEAVING HERITAGE & GENUINE PRODUCT SHOWCASE
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column: Heritage Story */}
              <div className="lg:col-span-7">
                <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                  OUR WEAVING MILL &amp; MANUFACTURING HERITAGE
                </span>
                <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                  The Looms Behind the Towels
                </h2>

                <div className="mt-5 space-y-4 text-[15.5px] sm:text-[16.5px] leading-[1.7] text-[#29251F]/85">
                  <p>
                    Most wholesale buyers tell the same story about towel suppliers:
                    service is promising for two orders, then yarn counts change, delivery
                    dates slip, and calls stop being answered. Quality that drifts and
                    unreliable dispatch schedules end up costing far more over a business
                    year than a slightly lower unit price ever saves.
                  </p>
                  <p>
                    <strong>We sell what we weave.</strong> Based in Pallagoundenpalayam,
                    Uttukuli Taluk, in the renowned textile belt of Tiruppur district, Tamil
                    Nadu, Sri Maruthi Textiles operates its own traditional handlooms. Every
                    consignment is woven by skilled local weavers, inspected by our team,
                    and packed directly on our own mill floor.
                  </p>
                  <p>
                    Because there are no middlemen, commission agents, or trading intermediaries
                    in our supply chain, we quote direct mill prices and commit to dispatch
                    dates that are ours to control rather than someone else&apos;s to miss.
                  </p>
                </div>

                {/* Material Truth Box: Verified Yarn Blends */}
                <div className="mt-6 p-5 sm:p-6 rounded-md bg-[#ECEFE4] border border-[#40572D]/20">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="size-5 text-[#40572D] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-[18px] sm:text-[20px] font-medium text-[#29251F]">
                        Verified Yarn Compositions: Why We Weave Cotton Blends
                      </h3>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#29251F]/80">
                        We state our material composition honestly. Our plain, checked, and
                        white towels are woven with an{" "}
                        <strong>80% Cotton / 20% Polyester blend</strong>, and our natural
                        kora towels use an{" "}
                        <strong>85% Unbleached Cotton / 15% Polyester blend</strong>.
                      </p>
                      <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-[#29251F]/80">
                        Natural cotton terry loops provide the rapid water absorbency, breathability,
                        and soft hand-feel that commercial users expect. The blended yarn core
                        strengthens the fabric structure, reinforces the locked selvedges, prevents
                        curling and shrinkage distortion, and withstands repeated commercial laundering.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Verified Wholesale Supply Links */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[14px] sm:text-[14.5px]">
                  <Link
                    href="/wholesale-cotton-towels"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#40572D] hover:underline"
                  >
                    <span>Wholesale Cotton Towels Supply</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <span className="text-[#29251F]/30 hidden sm:inline">·</span>
                  <Link
                    href="/checked-cotton-towels"
                    className="inline-flex items-center gap-1.5 font-semibold text-[#40572D] hover:underline"
                  >
                    <span>Checked Cotton Towels Collection</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <span className="text-[#29251F]/30 hidden sm:inline">·</span>
                  <Link
                    href="/products"
                    className="font-medium text-[#29251F]/75 hover:text-[#29251F]"
                  >
                    Products Catalogue
                  </Link>
                </div>
              </div>

              {/* Right Column: Genuine Product Photographs */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-md bg-[#F5F1E8] border border-[#E8DFCF]">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Genuine Photo 1: Checked Towel SMT-CK-888 */}
                    <div className="group relative aspect-[4/5] rounded overflow-hidden bg-white border border-[#E8DFCF]">
                      <Image
                        src="/images/products/smt-ck-888.webp"
                        alt="Genuine Sri Maruthi Textiles checked handloom towel (Model SMT-CK-888)"
                        fill
                        sizes="(max-width: 1024px) 50vw, 220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-2.5">
                        <span className="block font-mono text-[10.5px] font-semibold text-white uppercase tracking-wider">
                          SMT-CK-888
                        </span>
                        <span className="block text-[11px] text-white/90 leading-tight">
                          Checked Handloom
                        </span>
                      </div>
                    </div>

                    {/* Genuine Photo 2: Plain Towel SMT-PL-73146 */}
                    <div className="group relative aspect-[4/5] rounded overflow-hidden bg-white border border-[#E8DFCF]">
                      <Image
                        src="/images/products/smt-pl-73146.webp"
                        alt="Genuine Sri Maruthi Textiles plain vat-dyed bath towel (Model SMT-PL-73146)"
                        fill
                        sizes="(max-width: 1024px) 50vw, 220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-2.5">
                        <span className="block font-mono text-[10.5px] font-semibold text-white uppercase tracking-wider">
                          SMT-PL-73146
                        </span>
                        <span className="block text-[11px] text-white/90 leading-tight">
                          Plain Vat-Dyed
                        </span>
                      </div>
                    </div>

                    {/* Genuine Photo 3: White Towel SMT-WH-2754 */}
                    <div className="group relative aspect-[4/5] rounded overflow-hidden bg-white border border-[#E8DFCF]">
                      <Image
                        src="/images/products/smt-wh-2754.webp"
                        alt="Genuine Sri Maruthi Textiles optical white bath towel (Model SMT-WH-2754)"
                        fill
                        sizes="(max-width: 1024px) 50vw, 220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-2.5">
                        <span className="block font-mono text-[10.5px] font-semibold text-white uppercase tracking-wider">
                          SMT-WH-2754
                        </span>
                        <span className="block text-[11px] text-white/90 leading-tight">
                          Institutional White
                        </span>
                      </div>
                    </div>

                    {/* Genuine Photo 4: Kora Towel SMT-KR-18001P */}
                    <div className="group relative aspect-[4/5] rounded overflow-hidden bg-white border border-[#E8DFCF]">
                      <Image
                        src="/images/products/smt-kr-18001p.webp"
                        alt="Genuine Sri Maruthi Textiles traditional kora towel (Model SMT-KR-18001P)"
                        fill
                        sizes="(max-width: 1024px) 50vw, 220px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-2.5">
                        <span className="block font-mono text-[10.5px] font-semibold text-white uppercase tracking-wider">
                          SMT-KR-18001P
                        </span>
                        <span className="block text-[11px] text-white/90 leading-tight">
                          Unbleached Kora
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Honest Photographic Attribution Note */}
                  <div className="mt-3.5 pt-3 border-t border-[#E8DFCF] text-[12px] leading-relaxed text-[#29251F]/75 flex items-start gap-2">
                    <CheckCircle2 className="size-4 text-[#40572D] shrink-0 mt-0.5" />
                    <span>
                      <strong>Genuine Product Photography:</strong> The images above showcase actual towels manufactured by Sri Maruthi Textiles in Tiruppur. We feature our real product inventory and avoid stock photos that falsely represent our factory floor.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. CONFIRMED MANUFACTURING PROCESS & QUALITY CHECKS
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#ECEFE4] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[760px] mx-auto text-center">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                OUR WEAVING OPERATIONS
              </span>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                Handloom Manufacturing &amp; Quality Checks
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                We believe in straightforward facts. The manufacturing steps and quality
                checks detailed below represent our actual handloom weaving procedures
                and floor practices in Tiruppur.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="p-6 rounded-md bg-[#FBF9F6] border border-[#E8DFCF] flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <div className="font-mono text-[22px] font-semibold text-[#40572D] mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-display text-[18px] sm:text-[19px] font-semibold text-[#29251F] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed text-[#29251F]/80">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#E8DFCF]/70 text-[12px] font-medium text-[#40572D] flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    <span>Verified Weaving Standard</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Standard Callout Box */}
            <div className="mt-10 p-6 rounded-md bg-[#FBF9F6] border border-[#E8DFCF] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="font-display text-[18px] font-semibold text-[#29251F]">
                  Built for Repeated Commercial &amp; Institutional Use
                </h4>
                <p className="text-[14px] text-[#29251F]/75 max-w-[760px] leading-relaxed">
                  Our handloom towels are constructed with locked selvedge edges and secure hem stitching
                  specifically to withstand frequent commercial laundering in hotels, resorts, clinics, and lodges
                  without edge fraying or fabric distortion.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[13.5px] font-semibold transition-colors shadow-xs"
                >
                  <span>View Specifications</span>
                  <ChevronRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. PRODUCTS & WHOLESALE SUPPLY CAPABILITIES
            ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#FBF9F6] border-b border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[760px]">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                OUR PRODUCT LINES
              </span>
              <h2 className="mt-3 font-display text-[2rem] sm:text-[2.65rem] lg:text-[3rem] font-normal leading-[1.12] text-[#29251F]">
                Handloom Towel Varieties We Manufacture
              </h2>
              <p className="mt-3.5 text-[15.5px] sm:text-[16.5px] text-[#29251F]/80 leading-relaxed">
                Sri Maruthi Textiles weaves four core product varieties designed for
                wholesale distributors, retail linen shops, and hospitality providers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCT_SUMMARIES.map((prod) => (
                <div
                  key={prod.code}
                  className="rounded-md bg-[#F5F1E8] border border-[#E8DFCF] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#40572D]/50 transition-colors"
                >
                  <div className="relative aspect-[4/3] bg-white border-b border-[#E8DFCF]">
                    <Image
                      src={prod.image}
                      alt={prod.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-semibold tracking-wider text-[#40572D] uppercase bg-[#ECEFE4] px-2 py-0.5 rounded">
                        {prod.code}
                      </span>
                      <h3 className="mt-2.5 font-display text-[18px] sm:text-[19px] font-medium text-[#29251F]">
                        {prod.title}
                      </h3>
                      <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[#29251F]/80">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#E8DFCF]/70">
                      <Link
                        href={prod.link}
                        className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#40572D] hover:underline"
                      >
                        <span>{prod.linkText}</span>
                        <ChevronRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Wholesale Terms Matrix (Verified Information Only) */}
            <div className="mt-12 p-6 sm:p-8 rounded-md bg-[#F5F1E8] border border-[#E8DFCF]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#40572D] font-sans block">
                    B2B PROCUREMENT TERMS
                  </span>
                  <h3 className="font-display text-[20px] sm:text-[23px] font-normal text-[#29251F] mt-1">
                    Wholesale Supply for Distributors, Retailers &amp; Hospitality
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#29251F]/70">
                  <Truck className="size-4 text-[#40572D]" />
                  <span>Dispatched Directly from Tiruppur</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[14px]">
                <div className="p-4 rounded bg-[#FBF9F6] border border-[#E8DFCF]/80">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#29251F]/60 font-sans block">
                    Minimum Order Quantity (MOQ)
                  </span>
                  <p className="font-medium text-[#29251F] mt-1.5 leading-snug">
                    10 to 20 pieces per model for standard catalogue stock.
                  </p>
                  <p className="text-[12px] text-[#29251F]/70 mt-1">
                    Enables retailers to evaluate quality and test sell-through.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FBF9F6] border border-[#E8DFCF]/80">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#29251F]/60 font-sans block">
                    Fast Dispatch Timeline
                  </span>
                  <p className="font-medium text-[#40572D] mt-1.5 leading-snug">
                    Most orders dispatched in 1 to 2 days directly from Tiruppur.
                  </p>
                  <p className="text-[12px] text-[#29251F]/70 mt-1">
                    Dates confirmed at the time of order booking.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FBF9F6] border border-[#E8DFCF]/80">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#29251F]/60 font-sans block">
                    Custom Weave Specifications
                  </span>
                  <p className="font-medium text-[#29251F] mt-1.5 leading-snug">
                    Available for orders exceeding 1,000 pieces.
                  </p>
                  <p className="text-[12px] text-[#29251F]/70 mt-1">
                    Custom dimensions, weaves, and patterns on request.
                  </p>
                </div>

                <div className="p-4 rounded bg-[#FBF9F6] border border-[#E8DFCF]/80">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#29251F]/60 font-sans block">
                    Transparent Payment &amp; Samples
                  </span>
                  <p className="font-medium text-[#29251F] mt-1.5 leading-snug">
                    Percentage advance, balance due on dispatch.
                  </p>
                  <p className="text-[12px] text-[#29251F]/70 mt-1">
                    Sample kit available upon request (chargeable).
                  </p>
                </div>
              </div>

              {/* Wholesale Cross-linking CTA strip */}
              <div className="mt-6 pt-5 border-t border-[#E8DFCF] flex flex-wrap items-center justify-between gap-4 text-[13.5px]">
                <span className="text-[#29251F]/80">
                  Supplying commercial buyers across <strong>Tamil Nadu, Kerala</strong>, and wholesale road transport hubs pan-India.
                </span>
                <div className="flex items-center gap-4 font-semibold text-[#40572D]">
                  <Link href="/wholesale-cotton-towels" className="hover:underline flex items-center gap-1">
                    <span>Wholesale Guide</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                  <Link href="/checked-cotton-towels" className="hover:underline flex items-center gap-1">
                    <span>Checked Towels</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. FACTORY & CONTACT DETAILS WITH WORKING ENQUIRY FORM
            ========================================================================= */}
        <section
          id="enquiry"
          aria-labelledby="contact-mill-heading"
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
              {/* Left Column: Factory & Business Details */}
              <div className="lg:col-span-5">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/80">
                  DIRECT MILL COMMUNICATION
                </span>
                <h2
                  id="contact-mill-heading"
                  className="mt-3.5 font-display text-[2.4rem] sm:text-[3rem] lg:text-[3.35rem] font-normal leading-[1.08] text-[#F5F1E8]"
                >
                  Contact Our Mill
                </h2>
                <p className="mt-4 text-[15.5px] sm:text-[16.5px] text-[#E8DFCF]/90 leading-relaxed">
                  Whether you are planning regular bulk towel supply for wholesale distribution,
                  restocking a hotel linen inventory, or requesting chargeable sample
                  swatches, reach out to our team in Tiruppur. We answer during working hours.
                </p>

                {/* Verified Business Information Card */}
                <div className="mt-8 p-6 rounded-md bg-[rgba(245,241,232,0.05)] border border-[rgba(245,241,232,0.14)] space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="font-sans text-[11px] uppercase tracking-wider font-semibold text-[#A95738]">
                      Verified Business Information
                    </p>
                    <span className="text-[11px] text-[#E8DFCF]/60 font-mono">Tiruppur, India</span>
                  </div>

                  <div className="space-y-3.5 text-[14.5px]">
                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        Mill &amp; Office Address
                      </span>
                      <a
                        href={site.address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#F5F1E8] leading-snug hover:underline block"
                      >
                        {site.address.street}, {site.address.area}, {site.address.taluk},{" "}
                        {site.address.district}, {site.address.state} — {site.address.pincode},{" "}
                        {site.address.country}
                      </a>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        Telephone (Direct Line)
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
                        WhatsApp (Instant Enquiry)
                      </span>
                      <a
                        href={whatsappHref(
                          contact.whatsapp.e164,
                          "Hello Sri Maruthi Textiles, I would like to enquire about your handloom cotton blend towels."
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
                        Official Website
                      </span>
                      <a
                        href={SITE_URL}
                        className="font-medium text-[#F5F1E8] hover:underline"
                      >
                        {SITE_URL}
                      </a>
                    </div>

                    <div>
                      <span className="block text-[11px] text-[#E8DFCF]/60 uppercase tracking-wide">
                        GSTIN
                      </span>
                      <span className="font-mono text-[13.5px] font-medium text-[#F5F1E8] tracking-wider">
                        {site.gstin}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappHref(
                      contact.whatsapp.e164,
                      "Hello Sri Maruthi Textiles, I am contacting you from the About Us page regarding handloom towels."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[13.5px] font-semibold transition-colors"
                  >
                    <MessageCircle className="size-4" />
                    <span>WhatsApp Mill Enquiry</span>
                  </a>

                  <Link
                    href="/wholesale-cotton-towels"
                    className="inline-flex items-center gap-1.5 text-[13.5px] text-[#E8DFCF] hover:text-[#F5F1E8] underline underline-offset-4"
                  >
                    <span>Wholesale Guide</span>
                    <span aria-hidden="true">→</span>
                  </Link>

                  <Link
                    href="/checked-cotton-towels"
                    className="inline-flex items-center gap-1.5 text-[13.5px] text-[#E8DFCF] hover:text-[#F5F1E8] underline underline-offset-4"
                  >
                    <span>Checked Towels</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Working Enquiry Form */}
              <div className="lg:col-span-7">
                <EnquiryForm
                  heading="Send an Enquiry to Sri Maruthi Textiles"
                  subheading="Tell us your towel requirements, quantities, or specific questions below. Our team in Tiruppur will review your message and reply promptly."
                  badge="Direct Mill • Tiruppur"
                  submitLabel="Send Mill Enquiry"
                  defaultRequirement="Plain Towels"
                  idPrefix="about-quote"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. CROSS-LINKING & NAVIGATION BAR
            ========================================================================= */}
        <section className="py-12 bg-[#ECEFE4] text-[#29251F]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-[20px] font-medium text-[#29251F]">
                Ready to explore our handloom towel collections?
              </h3>
              <p className="text-[14px] text-[#29251F]/75 mt-1">
                Browse our full product catalogue, checked towel varieties, or wholesale supply terms.
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
                href="/checked-cotton-towels"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded border border-[#40572D]/40 text-[#40572D] hover:bg-[#40572D]/10 text-[14px] font-medium transition-colors"
              >
                <span>Checked Cotton Towels</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#about-hero-title"
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
