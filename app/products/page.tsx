import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Phone, MessageCircle, ChevronRight, Layers, Sparkles } from "lucide-react";
import ProductCatalog from "@/components/ProductCatalog";
import { contact, site, SITE_URL, whatsappHref } from "@/lib/site";
import { PRODUCTS_CATALOG } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Sri Maruthi Textiles — Handloom Cotton Blend Towel Manufacturer",
  description:
    "Explore our complete collection of handloom cotton blend towels: bath towels, pool & resort towels, kitchen utility, checked, plain, and white towels. Direct mill pricing from Pallagoundanpalayam.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Handloom Cotton Towel Products — Sri Maruthi Textiles",
    description:
      "Wholesale handloom cotton blend towels direct from the loom in Tamil Nadu. Bath, resort, kitchen and custom weaves for Kerala & Tamil Nadu businesses.",
    url: "/products",
  },
};

export default function ProductsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Handloom Cotton Towel Products — Sri Maruthi Textiles",
    description:
      "Handloom cotton blend towel collections manufactured for wholesalers, hotels and retailers across Kerala and Tamil Nadu.",
    url: `${SITE_URL}/products`,
    hasPart: PRODUCTS_CATALOG.map((p) => ({
      "@type": "Product",
      name: p.name,
      description: p.shortDescription,
      image: `${SITE_URL}${p.image}`,
      sku: p.code,
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="min-h-screen bg-[#FBF9F6] text-[#29251F]">
        {/* =========================================================================
            HERO HEADER: Editorial Page Banner with Handloom Photography & Scrim
            ========================================================================= */}
        <div className="relative bg-[#26351C] text-[#F5F1E8] pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
          {/* Textile Photograph with Warm Lighting & Left Scrim */}
          <div className="absolute inset-0 -z-0">
            <Image
              src="/images/hero-handloom.jpg"
              alt="Folded premium handloom cotton blend towels"
              fill
              priority
              quality={85}
              className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[right_center] select-none"
            />
            {/* Subtle dark gradient/scrim on the left so white text remains readable */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#26351C]/95 via-[#26351C]/88 to-[#26351C]/45 lg:to-[#26351C]/20"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#26351C] via-transparent to-black/30"
            />
          </div>

          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-[#E8DFCF]/75 mb-5 sm:mb-6">
              <Link
                href="/"
                className="hover:text-[#F5F1E8] transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="size-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className="size-3.5 text-[#E8DFCF]/40" />
              <span className="text-[#F5F1E8] font-medium" aria-current="page">
                Products
              </span>
            </nav>

            <div className="max-w-[760px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#E8DFCF]">
                  OUR PRODUCTS
                </span>
                <span className="h-px w-10 sm:w-16 bg-[#E8DFCF]/30" aria-hidden="true" />
                <span className="font-sans text-[11px] sm:text-[12px] font-medium text-[#E8DFCF]/80">
                  {PRODUCTS_CATALOG.length} ITEMS
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="mt-3.5 sm:mt-4 font-display text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-normal leading-[1.08] tracking-tight text-[#F5F1E8]">
                Handloom Cotton Blend<br className="hidden sm:inline" /> Towels &amp; Linens
              </h1>

              {/* Supporting text */}
              <p className="mt-3.5 sm:mt-4 text-[15.5px] sm:text-[17px] leading-[1.6] text-[#E8DFCF]/90 font-normal max-w-[660px]">
                Premium quality cotton blend textiles designed for comfort, durability and long-lasting performance. Perfect for hospitality, retail and business use.
              </p>

              {/* Quick Wholesaler Contact Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`tel:${contact.phone.e164}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#40572D] hover:bg-[#4d6936] text-[#F5F1E8] text-[14px] font-medium transition-colors shadow-xs"
                >
                  <Phone className="size-4" />
                  <span>Call: {contact.phone.display}</span>
                </a>

                <a
                  href={whatsappHref(
                    contact.whatsapp.e164,
                    "Hello Sri Maruthi Textiles, I am browsing your online product catalogue and would like to request wholesale rates."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#E8DFCF]/30 hover:border-[#E8DFCF] hover:bg-white/10 text-[#F5F1E8] text-[14px] font-medium transition-colors"
                >
                  <MessageCircle className="size-4 text-[#E8DFCF]" />
                  <span>WhatsApp Catalogue Inquiry</span>
                </a>

                <span className="text-[13px] text-[#E8DFCF]/75 pl-1 hidden sm:inline">
                  ⚡ Dispatched from Uttukuli, Tiruppur
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATALOGUE BODY: Interactive Filter, Search & Grid
            ========================================================================= */}
        <div className="relative">
          <Suspense
            fallback={
              <div className="py-24 text-center">
                <div className="inline-block size-8 animate-spin rounded-full border-2 border-[#40572D] border-t-transparent" />
                <p className="mt-3 text-[14.5px] text-[#6B615A]">
                  Loading textile collection...
                </p>
              </div>
            }
          >
            <ProductCatalog />
          </Suspense>
        </div>

        {/* =========================================================================
            CUSTOM ORDERS BOTTOM HERO: Bespoke Weaves
            ========================================================================= */}
        <section className="bg-[#E8DFCF] text-[#29251F] py-16 sm:py-20 border-t border-[#E8DFCF]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[750px] mx-auto text-center">
              <span className="font-sans text-[11.5px] font-semibold tracking-[0.2em] uppercase text-[#40572D]">
                BESPOKE WEAVING SERVICES
              </span>
              <h2 className="mt-3 font-display text-[30px] sm:text-[36px] font-normal text-[#29251F]">
                Need a Custom Specification or Hotel Woven Logo?
              </h2>
              <p className="mt-3 text-[16px] text-[#29251F]/80 leading-relaxed">
                For orders above 1,000 pieces, we can tailor yarn blends, weave
                patterns, exact GSM, custom dimensions, and jacquard emblem borders
                to your precise requirements.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#40572D] hover:bg-[#344724] text-white text-[14.5px] font-medium transition-colors shadow-xs"
                >
                  <span>Discuss Custom Order</span>
                  <span>→</span>
                </Link>

                <a
                  href={whatsappHref(
                    contact.whatsapp.e164,
                    "Hello Sri Maruthi Textiles, I would like to discuss custom weaving specifications (custom size / GSM / logo border)."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-[#29251F]/30 hover:border-[#29251F] hover:bg-black/5 text-[#29251F] text-[14.5px] font-medium transition-colors"
                >
                  <MessageCircle className="size-4" />
                  <span>WhatsApp Custom Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
