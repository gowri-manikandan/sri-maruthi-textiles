"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface ProductColor {
  name: string;
  hex: string;
}

interface ProductItem {
  id: string;
  num: string;
  name: string;
  badge?: string;
  description: string;
  image: string;
  alt: string;
  linkText: string;
  linkHref: string;
  specs: {
    gsm: string;
    dimensions: string;
    yarnBlend: string;
    weaveType: string;
  };
  colors: ProductColor[];
}

const PRODUCTS: ProductItem[] = [
  {
    id: "plain-towels",
    num: "01",
    name: "Plain Towels",
    description:
      "Soft, absorbent solid-dyed and dual-color cotton blend bath towels crafted for everyday durability and high wholesale market turnover.",
    image: "/images/product-plain.jpg",
    alt: "Plain dyed cotton blend bath towels by Sri Maruthi Textiles",
    linkText: "View Details",
    linkHref: "/products?category=plain-towels",
    specs: {
      gsm: "360 - 450 GSM",
      dimensions: "22 x 44 to 31 x 62 in",
      yarnBlend: "80% Cotton\n20% Polyester",
      weaveType: "Terry Pile\nwith Selvedge",
    },
    colors: [
      { name: "Red", hex: "#C53030" },
      { name: "Maroon", hex: "#781D2A" },
      { name: "Olive Green", hex: "#40572D" },
      { name: "Navy Blue", hex: "#1B2A3D" },
      { name: "Cyan", hex: "#00ACC1" },
    ],
  },
  {
    id: "checked-towels",
    num: "02",
    name: "Checked Towels",
    description:
      "Authentic South Indian handloom check patterns and contrast border towels woven with heritage yarn techniques.",
    image: "/images/product-checked.jpg",
    alt: "Authentic handloom checked cotton bath towels by Sri Maruthi Textiles",
    linkText: "View Details",
    linkHref: "/products?category=checked-towels",
    specs: {
      gsm: "350 - 450 GSM",
      dimensions: "22 x 44 to 31 x 62 in",
      yarnBlend: "80% Cotton\n20% Polyester",
      weaveType: "Checked Weave\nDual-Sided",
    },
    colors: [
      { name: "Red", hex: "#C53030" },
      { name: "Maroon", hex: "#781D2A" },
      { name: "Olive Green", hex: "#40572D" },
      { name: "Navy Blue", hex: "#1B2A3D" },
      { name: "Cyan", hex: "#00ACC1" },
    ],
  },
  {
    id: "white-towels",
    num: "03",
    name: "White Towels",
    description:
      "Bleach-safe optical white bath towels built for hotels, lodges, hospitals, salons, and institutional linen supplies.",
    image: "/images/product-white.jpg",
    alt: "Optical white institutional bath towels by Sri Maruthi Textiles",
    linkText: "View Details",
    linkHref: "/products?category=white-towels",
    specs: {
      gsm: "340 - 460 GSM",
      dimensions: "20 x 40 to 31 x 61 in",
      yarnBlend: "80% Cotton\n20% Polyester",
      weaveType: "Optical White\nHospitality Terry",
    },
    colors: [
      { name: "Optical White", hex: "#FFFFFF" },
    ],
  },
  {
    id: "kora-towels",
    num: "04",
    name: "Kora Towels",
    badge: "TRADITIONAL WEAVE",
    description:
      "Traditional unbleached kora cotton bath towels with decorative print and solid borders in generous 33 × 66 inch dimensions.",
    image: "/images/product-printed.jpg",
    alt: "Traditional unbleached kora bath towels by Sri Maruthi Textiles",
    linkText: "View Details",
    linkHref: "/products?category=kora-towels",
    specs: {
      gsm: "440 GSM",
      dimensions: "33 x 66 in",
      yarnBlend: "85% Unbleached Cotton\n15% Polyester",
      weaveType: "Traditional Kora\nHandloom Weave",
    },
    colors: [
      { name: "Natural Kora", hex: "#ECE6D8" },
    ],
  },
];

/**
 * Section 5: "Product Collection" — Sri Maruthi Textiles
 *
 * Premium editorial B2B textile catalogue.
 * 4 cards layout matching editorial specification table mockup.
 * Background: Natural Warm Linen / Cream (#F5F1E8)
 * Respects prefers-reduced-motion: reduce
 */
export default function ProductRange() {
  const [sectionRef, isSectionVisible] = useScrollReveal();
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReduced(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      aria-labelledby="collection-heading"
      className="relative bg-[#F5F1E8] pt-[75px] pb-[75px] lg:pt-[105px] lg:pb-[105px] text-[#29251F] overflow-hidden"
    >
      {/* Subtle organic textile / paper texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] select-none"
        style={{
          backgroundImage: `radial-gradient(#29251F 0.75px, transparent 0.75px), radial-gradient(#40572D 0.75px, #F5F1E8 0.75px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            SECTION INTRO: Centered, max-width 650px
            ========================================================================= */}
        <div className="mx-auto max-w-[650px] text-center">
          {/* Eyebrow */}
          <div
            className={`flex items-center justify-center gap-3 transition-all duration-[600ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[15px]"
            }`}
          >
            <span
              className="h-px w-6 sm:w-8 bg-[#40572D]/35"
              aria-hidden="true"
            />
            <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
              OUR PRODUCTS
            </span>
            <span
              className="h-px w-6 sm:w-8 bg-[#40572D]/35"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading: 52-60px Desktop, 40-44px Mobile */}
          <h2
            id="collection-heading"
            className={`mt-4 sm:mt-5 font-display font-normal text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.015em] text-[#29251F] transition-all duration-[750ms] delay-[120ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[20px]"
            }`}
          >
            Our Textile Collection
          </h2>

          {/* Subheading / Description */}
          <p
            className={`mt-5 sm:mt-6 text-[16px] sm:text-[17.5px] leading-[1.62] text-[#29251F]/80 font-normal transition-all duration-[700ms] delay-[220ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[15px]"
            }`}
          >
            Backed by over 20 years of handloom weaving, we produce cotton blend
            towels and textile products with the consistent quality, durability
            and finish your business needs.
          </p>

          {/* Direct link to new complete products page */}
          <div
            className={`mt-6 transition-all duration-[700ms] delay-[300ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[15px]"
            }`}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[14px] font-medium transition-all shadow-xs"
            >
              <span>Explore Complete Catalogue (16+ Items)</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* =========================================================================
            PRODUCT CATALOGUE GRID: 4 Columns on Desktop matching provided mockup
            ========================================================================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 xl:gap-6">
          {PRODUCTS.map((product, idx) => {
            const delayMs = 100 + idx * 90;

            return (
              <article
                key={product.id}
                className={`group flex flex-col h-full transition-all duration-[700ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[30px]"
                }`}
                style={{
                  transitionDelay: prefersReduced ? "0ms" : `${delayMs}ms`,
                }}
              >
                {/* 1. Large Product Photograph: rounded-lg with subtle border */}
                <Link
                  href={product.linkHref}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border border-[rgba(41,37,31,0.12)] bg-[#DDD3C2] block shadow-2xs"
                  aria-label={`View details for ${product.name}`}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1280px) 330px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    quality={82}
                    className={`object-cover transition-all ease-out motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:opacity-100 ${
                      isSectionVisible
                        ? "opacity-100 scale-100 duration-[800ms] group-hover:scale-[1.035] group-hover:duration-700"
                        : "opacity-70 scale-[1.03] duration-[800ms]"
                    }`}
                  />
                  {/* Subtle warm photographic vignette */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/15 via-transparent to-transparent opacity-60"
                  />
                </Link>

                {/* 2. Editorial Text Details */}
                <div className="mt-4 sm:mt-5 flex flex-col flex-1">
                  {/* Number & Micro Line or Badge */}
                  {product.badge ? (
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[13px] font-semibold text-[#29251F]">
                        {product.num}
                      </span>
                      <span className="font-sans text-[10px] font-bold tracking-[0.16em] uppercase text-[#6B615A]">
                        {product.badge}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2.5">
                      <span className="font-sans text-[13px] font-semibold text-[#29251F]">
                        {product.num}
                      </span>
                      <span
                        className="h-px w-7 sm:w-9 bg-[#29251F]/35"
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  {/* Product Title: Elegant Serif */}
                  <h3 className="mt-2.5 font-display text-[22px] sm:text-[24px] lg:text-[25px] font-normal leading-[1.2] text-[#29251F] group-hover:text-[#40572D] transition-colors duration-250">
                    <Link href={product.linkHref} className="hover:underline">
                      {product.name}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#29251F]/75 font-normal sm:min-h-[58px]">
                    {product.description}
                  </p>

                  {/* Micro Accent Divider Line before Spec Box */}
                  <div className="mt-3.5 mb-3">
                    <span
                      className="block h-px w-7 sm:w-8 bg-[#29251F]/25"
                      aria-hidden="true"
                    />
                  </div>

                  {/* 3. Specification Table Box with Vertical Dividers */}
                  <div className="mt-auto rounded-md border border-[#29251F]/15 bg-[#EDE5D8]/50 overflow-hidden shadow-2xs">
                    {/* Dimensions spec bar */}
                    <div className="px-3 py-2 flex items-center justify-between text-left">
                      <span className="text-[10px] uppercase font-medium text-[#73685C] tracking-wider leading-none">
                        Dimensions
                      </span>
                      <span className="text-[11.5px] sm:text-[12px] font-semibold text-[#29251F] leading-tight">
                        {product.specs.dimensions}
                      </span>
                    </div>

                    {/* Bottom row: Color swatches on left, View Details on right */}
                    <div className="border-t border-[#29251F]/15 px-2.5 sm:px-3 py-2 flex items-center justify-between bg-black/[0.015]">
                      <div
                        className="flex items-center gap-1.5"
                        aria-label="Available Colours"
                      >
                        {product.colors.map((c, i) => (
                          <span
                            key={i}
                            className="size-3.5 sm:size-4 rounded-full border border-black/15 shadow-2xs shrink-0"
                            style={{ backgroundColor: c.hex }}
                            title={c.name}
                            aria-label={c.name}
                          />
                        ))}
                      </div>

                      <Link
                        href={product.linkHref}
                        className="group/btn inline-flex items-center gap-1 text-[11px] sm:text-[11.5px] font-medium text-[#29251F] hover:text-[#40572D] transition-colors whitespace-nowrap"
                      >
                        <span>View Details</span>
                        <span
                          aria-hidden="true"
                          className="inline-block transition-transform duration-200 group-hover/btn:translate-x-0.5"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================================================
            SECTION CTA: Editorial Bottom Box (Requirement 25)
            "Can't find exactly what you need? We can develop a textile solution..."
            ========================================================================= */}
        <div
          className={`mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-10 border-t border-[rgba(41,37,31,0.14)] text-center transition-all duration-[700ms] delay-[450ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[15px]"
          }`}
        >
          <div className="max-w-[620px] mx-auto">
            <h4 className="font-display text-[20px] sm:text-[23px] font-normal text-[#29251F]">
              Can&apos;t find exactly what you need?
            </h4>
            <p className="mt-2 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#29251F]/75">
              We can develop a textile solution around your specific requirements.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#40572D] hover:bg-[#344724] text-[#F5F1E8] text-[14px] font-medium transition-colors shadow-xs"
              >
                <span>View Complete Catalogue</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#commitments"
                className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-[#40572D]/35 text-[#40572D] hover:bg-[#40572D]/10 text-[14px] font-medium transition-colors"
              >
                <span>Discuss Your Requirements</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
