"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
}

const PRODUCTS: ProductItem[] = [
  {
    id: "bath-towels",
    num: "01",
    name: "Bath Towels",
    description:
      "Soft, absorbent cotton towels made for comfort, durability and everyday performance.",
    image: "/images/products/bath-towels.jpg",
    alt: "Folded premium cotton bath towels with woven borders in clean neutral setting",
    linkText: "Explore Collection",
    linkHref: "#contact",
  },
  {
    id: "pool-resort-towels",
    num: "02",
    name: "Pool & Resort Towels",
    description:
      "Premium towel solutions designed for hospitality, resorts and leisure environments.",
    image: "/images/products/pool-resort-towels.jpg",
    alt: "Premium pool and resort cotton towels by poolside lounge in warm natural light",
    linkText: "Explore Collection",
    linkHref: "#contact",
  },
  {
    id: "kitchen-utility-towels",
    num: "03",
    name: "Kitchen & Utility Towels",
    description:
      "Practical cotton textiles designed for everyday commercial and household use.",
    image: "/images/products/kitchen-utility-towels.png",
    alt: "Handloom cotton kitchen and utility towels hanging on natural wooden rod",
    linkText: "Explore Collection",
    linkHref: "#contact",
  },
  {
    id: "custom-weaves",
    num: "04",
    name: "Custom Weaves",
    badge: "CUSTOM REQUIREMENTS",
    description:
      "Custom sizes, colours, borders and weave specifications for your specific requirements.",
    image: "/images/products/custom-weaves.png",
    alt: "Close-up of custom woven cotton textile showing tailored weave details and craftsmanship",
    linkText: "Discuss Your Requirements",
    linkHref: "#commitments",
  },
];

/**
 * Section 5: "Product Collection" — Sri Maruthi Textiles
 *
 * Premium editorial B2B textile catalogue.
 * No e-commerce chrome (no prices, cart, or buy buttons).
 *
 * 2 x 2 editorial layout on desktop, stacked on mobile.
 * Background: Natural Beige (#E8DFCF)
 * Respects prefers-reduced-motion: reduce
 */
export default function ProductRange() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(motionQuery.matches);

    const onMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches);
    };
    motionQuery.addEventListener("change", onMotionChange);

    if (motionQuery.matches || typeof IntersectionObserver === "undefined") {
      setIsSectionVisible(true);
      return () => motionQuery.removeEventListener("change", onMotionChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      aria-labelledby="collection-heading"
      className="relative bg-[#E8DFCF] pt-[75px] pb-[75px] lg:pt-[105px] lg:pb-[105px] text-[#29251F] overflow-hidden"
    >
      {/* Subtle organic textile / paper texture background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] select-none"
        style={{
          backgroundImage: `radial-gradient(#29251F 0.75px, transparent 0.75px), radial-gradient(#40572D 0.75px, #E8DFCF 0.75px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
        {/* =========================================================================
            SECTION INTRO: Centered, max-width 650px (Requirements 4 & 5)
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
            From everyday essentials to custom textile requirements, we create
            cotton products with the quality, finish and specifications your
            business needs.
          </p>
        </div>

        {/* =========================================================================
            PRODUCT CATALOGUE GRID: 2 x 2 Editorial Grid on Desktop (Requirements 5, 7, 8)
            No floating white cards, no drop shadows. Image + clean text below on beige.
            ========================================================================= */}
        <div className="mt-[60px] sm:mt-[70px] lg:mt-[85px] grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-14 xl:gap-x-16 gap-y-14 sm:gap-y-16 lg:gap-y-20">
          {PRODUCTS.map((product, idx) => {
            // Staggered delays: 0.1s, 0.2s, 0.3s, 0.4s
            const delayMs = 100 + idx * 100;

            return (
              <article
                key={product.id}
                className={`group flex flex-col transition-all duration-[700ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isSectionVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[30px]"
                }`}
                style={{
                  transitionDelay: prefersReduced ? "0ms" : `${delayMs}ms`,
                }}
              >
                {/* 1. Large Product Photograph: aspect ~4:3, height 350-420px desktop, 280-330px mobile */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2px] border border-[rgba(41,37,31,0.12)] bg-[#DDD3C2]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(min-width: 1280px) 580px, (min-width: 768px) 50vw, 100vw"
                    quality={75}
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
                </div>

                {/* 2. Editorial Text Details: sits directly below the image on the same background */}
                <div className="mt-5 sm:mt-6 flex flex-col flex-1">
                  {/* Number & Micro Line (Requirement 17) */}
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[12.5px] font-bold tracking-[0.22em] text-[#40572D] uppercase">
                      {product.num}
                    </span>
                    <span
                      className="h-px w-7 sm:w-9 bg-[#40572D]/30"
                      aria-hidden="true"
                    />
                    {product.badge && (
                      <span className="font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#A95738]">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Title: Elegant Serif (30-34px desktop, 26-30px mobile) */}
                  <h3 className="mt-2 font-display text-[26px] sm:text-[30px] lg:text-[32px] font-normal leading-[1.2] text-[#29251F] group-hover:text-[#40572D] transition-colors duration-300 ease-out">
                    {product.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2.5 text-[15px] sm:text-[15.5px] leading-[1.62] text-[#29251F]/80 font-normal">
                    {product.description}
                  </p>

                  {/* Directional Text Link (Requirement 12) */}
                  <div className="mt-4 pt-1">
                    <a
                      href={product.linkHref}
                      className="group/link inline-flex items-center gap-2 text-[14.5px] sm:text-[15px] font-medium text-[#40572D] hover:text-[#26351C] transition-colors duration-250 link-underline"
                    >
                      <span>{product.linkText}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-250 ease-out group-hover/link:translate-x-1.5"
                      >
                        →
                      </span>
                    </a>
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
            <div className="mt-4">
              <a
                href="#commitments"
                className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-[#40572D] hover:text-[#26351C] transition-colors duration-250 link-underline"
              >
                <span>Discuss Your Requirements</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5"
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
