"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface CustomOption {
  id: string;
  num: string;
  label: string;
  title: string;
  description: string;
  productCode: string;
  productName: string;
  spec: string;
  image: string;
  alt: string;
  tag: string;
  delay: string;
}

const CUSTOM_OPTIONS: CustomOption[] = [
  {
    id: "sizes",
    num: "01",
    label: "Sizes",
    title: "Custom Sizes",
    description: "Tailored towel dimensions from compact utility hand towels (22 × 44 in) up to expansive full-body bath sheets (31 × 62 in).",
    productCode: "SMT-PL-18001",
    productName: "18001 Heavyweight Plain Bath Sheet",
    spec: "31 × 62 in · Extra-Large Wrap · 80/20 Cotton Blend",
    image: "/images/products/smt-pl-18001.webp",
    alt: "Folded 18001 extra-large heavyweight plain cotton blend bath sheet showcasing custom sizing capability",
    tag: "Dimensions: Up to 31 × 62 in",
    delay: "delay-[100ms]",
  },
  {
    id: "colours",
    num: "02",
    label: "Colours",
    title: "Custom Colours",
    description: "Vat-dyed commercial colorfast solid tones across red, maroon, olive, navy, cyan, blue and violet with zero bleed.",
    productCode: "SMT-PL-73146",
    productName: "73 × 146 Plain Bath Towel",
    spec: "26 × 52 in · Vat-Dyed Red with Contrast Border",
    image: "/images/products/smt-pl-73146.webp",
    alt: "Vat-dyed plain red cotton blend bath towel with contrast woven stripes",
    tag: "7 Vat-Dyed Shades",
    delay: "delay-[200ms]",
  },
  {
    id: "borders",
    num: "03",
    label: "Borders",
    title: "Custom Borders",
    description: "Engineered flat woven headers, reinforced locked side selvedges, contrast colour bands, or traditional fringed tassels.",
    productCode: "SMT-CK-3060BK",
    productName: "30 × 60 Checked Towel with Tassels",
    spec: "30 × 60 in · Dark Border Header & Fringed Tassels",
    image: "/images/products/smt-ck-3060bk.webp",
    alt: "Checked cotton blend towel showing distinctive dark border band and traditional fringed tassel end hem",
    tag: "Woven Headers & Tassels",
    delay: "delay-[300ms]",
  },
  {
    id: "weaves",
    num: "04",
    label: "Weaves",
    title: "Custom Weaves",
    description: "Authentic South Indian yarn-dyed square check grids, fine-density weaves, tight terry loop piles, and waffle structures.",
    productCode: "SMT-CK-888",
    productName: "888 Classic Checked Bath Towel",
    spec: "24 × 48 in · Authentic Handloom Madras Check Weave",
    image: "/images/products/smt-ck-888.webp",
    alt: "South Indian handloom checked cotton blend bath towel in rich contrast square grid weave",
    tag: "Handloom Check Weaves",
    delay: "delay-[400ms]",
  },
];

/**
 * Section 6: "Custom Orders" — Sri Maruthi Textiles
 *
 * Primary Message: "Your Design. Our Craft."
 *
 * Cinematic B2B editorial split layout:
 * - Left (~53% desktop): Real mill product photograph presentation + interactive swatch controls
 * - Right (~47% desktop): Deep olive background (#26351C), warm ivory typography,
 *   woven thread detail, 2x2 capability matrix, and primary CTA
 *
 * Respects prefers-reduced-motion: reduce
 */
export default function Commitments() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState(3); // Default to Weaves (SMT-CK-888)
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReduced(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  const activeOption = CUSTOM_OPTIONS[selectedIndex];

  return (
    <section
      ref={sectionRef}
      id="commitments"
      aria-labelledby="custom-heading"
      className="relative bg-[#26351C] pt-[75px] pb-[75px] lg:pt-[115px] lg:pb-[115px] text-[#F5F1E8] overflow-hidden"
    >
      {/* Subtle organic weave / texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035] select-none"
        style={{
          backgroundImage: `radial-gradient(#F5F1E8 0.75px, transparent 0.75px), radial-gradient(#A95738 0.75px, #26351C 0.75px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">
          {/* =========================================================================
              LEFT COLUMN: Real Product Photography Studio Showcase (~53% Desktop Width)
              ========================================================================= */}
          <div className="w-full lg:w-[52%] xl:w-[54%] shrink-0">
            <div className="relative group">
              {/* Main Custom Textile Studio Card */}
              <div
                className={`relative w-full h-[390px] sm:h-[470px] lg:h-[520px] xl:h-[550px] overflow-hidden rounded-[4px] border border-[rgba(245,241,232,0.18)] bg-[#FAF8F3] shadow-[0_16px_40px_rgba(0,0,0,0.38)] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 duration-[900ms]"
                    : "opacity-0 translate-y-6 duration-[900ms]"
                }`}
              >
                {/* Header Strip inside Card */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-white/95 backdrop-blur-sm border-b border-[rgba(41,37,31,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#A95738] animate-pulse" />
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#29251F]/80">
                      SRI MARUTHI LOOM SPECIFICATION
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#26351C] text-[#F5F1E8] font-sans text-[9.5px] sm:text-[10px] font-semibold tracking-[0.14em] uppercase">
                    {activeOption.tag}
                  </span>
                </div>

                {/* Real Product Image with object-contain */}
                <div className="relative w-full h-full pt-12 pb-20 sm:pb-24 px-4 sm:px-8 flex items-center justify-center">
                  <Image
                    key={activeOption.id}
                    src={activeOption.image}
                    alt={activeOption.alt}
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    quality={88}
                    className={`object-contain p-3 sm:p-5 transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
                      isVisible
                        ? "opacity-100 scale-100 duration-[700ms]"
                        : "opacity-0 scale-[0.98] duration-[700ms]"
                    }`}
                  />
                </div>

                {/* Bottom Specification Badge inside Card */}
                <div className="absolute bottom-0 inset-x-0 z-20 px-3.5 sm:px-5 py-2.5 sm:py-3 bg-white/95 backdrop-blur-sm border-t border-[rgba(41,37,31,0.08)] flex items-center justify-between gap-3 text-[#29251F]">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#A95738]">
                        {activeOption.productCode}
                      </span>
                      <span className="text-[11px] text-[#29251F]/40 select-none">•</span>
                      <span className="font-sans text-[12px] sm:text-[13px] font-semibold text-[#29251F] truncate">
                        {activeOption.productName}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-[11.5px] text-[#29251F]/70 truncate mt-0.5">
                      {activeOption.spec}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[#40572D] bg-[#40572D]/10 px-2 py-1 rounded-[2px] hidden sm:inline-block">
                    Real Mill Sample
                  </span>
                </div>
              </div>

              {/* 4 Clickable Swatch Indicators: SIZES, COLOURS, BORDERS, WEAVES */}
              <div
                className={`mt-3.5 sm:mt-4 grid grid-cols-4 gap-2 sm:gap-2.5 transition-all duration-[800ms] delay-[350ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                role="tablist"
                aria-label="Custom towel capabilities"
              >
                {CUSTOM_OPTIONS.map((item, idx) => {
                  const isActive = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Select ${item.title}`}
                      onClick={() => setSelectedIndex(idx)}
                      className={`group/btn relative flex flex-col items-center p-2 rounded-[3px] border transition-all duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8] ${
                        isActive
                          ? "bg-[#FAF8F3] border-[#FAF8F3] shadow-[0_4px_12px_rgba(0,0,0,0.3)] -translate-y-0.5"
                          : "bg-[#26351C]/80 border-[rgba(245,241,232,0.18)] hover:bg-[#26351C] hover:border-[rgba(245,241,232,0.35)]"
                      }`}
                    >
                      <div className="relative size-[34px] sm:size-[40px] rounded-[2px] overflow-hidden bg-white border border-[rgba(41,37,31,0.1)] shrink-0">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="50px"
                          quality={75}
                          className="object-contain p-0.5 group-hover/btn:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <span
                        className={`mt-1.5 font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.14em] uppercase transition-colors ${
                          isActive
                            ? "text-[#26351C]"
                            : "text-[#E8DFCF]/80 group-hover/btn:text-[#F5F1E8]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`text-[8.5px] font-mono transition-colors ${
                          isActive ? "text-[#A95738]" : "text-[#E8DFCF]/50"
                        }`}
                      >
                        {item.num}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Editorial Content & Customization Matrix (~47% Desktop)
              ========================================================================= */}
          <div className="w-full lg:flex-1 flex flex-col justify-center">
            <div className="max-w-[500px]">
              {/* Eyebrow with Horizontal Accent Line */}
              <div
                className={`flex items-center gap-3 transition-all duration-[600ms] delay-[100ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/80">
                  CUSTOM SOLUTIONS
                </span>
                <span
                  className="h-px w-8 sm:w-12 bg-[rgba(245,241,232,0.25)]"
                  aria-hidden="true"
                />
              </div>

              {/* Main Heading: 52-62px Desktop, 40-46px Mobile */}
              <h2
                id="custom-heading"
                className={`mt-4 sm:mt-5 font-display font-normal text-[2.5rem] sm:text-[3.15rem] lg:text-[3.55rem] xl:text-[3.75rem] leading-[0.98] tracking-[-0.015em] text-[#F5F1E8] transition-all duration-[750ms] delay-[180ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[25px]"
                }`}
              >
                Your Design.
                <br />
                Our Craft.
              </h2>

              {/* Subtle Decorative Woven Thread Pattern */}
              <div
                aria-hidden="true"
                className={`my-4 sm:my-5 transition-all duration-[600ms] delay-[250ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[10px]"
                }`}
              >
                <svg
                  width="130"
                  height="6"
                  viewBox="0 0 130 6"
                  fill="none"
                  className="opacity-35 text-[#F5F1E8]"
                >
                  <path
                    d="M0 3h130"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                  />
                  <path
                    d="M2 1h126"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="2 4"
                  />
                  <path
                    d="M2 5h126"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeDasharray="2 4"
                  />
                </svg>
              </div>

              {/* Concise Narrative Description */}
              <p
                className={`text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#E8DFCF]/90 font-normal transition-all duration-[700ms] delay-[280ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }`}
              >
                Every business has different requirements. Backed by 20+ years of
                loom experience, we work with you to develop custom cotton blend textile
                products with the right size, colour, weave and finish for your needs.
              </p>

              {/* Customization List: 2 x 2 Interactive Matrix */}
              <div
                className={`mt-7 sm:mt-8 border-t border-[rgba(245,241,232,0.22)] transition-all duration-[700ms] delay-[350ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                {/* 2 x 2 Arrangement on Desktop / Tablet; 1 per row on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(245,241,232,0.22)] border-b border-[rgba(245,241,232,0.22)]">
                  {CUSTOM_OPTIONS.slice(0, 2).map((item, idx) => {
                    const isSelected = selectedIndex === idx;
                    return (
                      <button
                        key={item.num}
                        type="button"
                        onClick={() => setSelectedIndex(idx)}
                        className={`text-left w-full py-3.5 sm:py-4 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5F1E8] ${
                          item.num === "01" ? "sm:pr-5" : "sm:pl-5"
                        } ${
                          isSelected
                            ? "bg-[rgba(245,241,232,0.08)] sm:rounded-[2px]"
                            : "hover:bg-[rgba(245,241,232,0.03)]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-sans text-[11.5px] font-bold tracking-[0.2em] transition-colors ${
                            isSelected ? "text-[#F5F1E8]" : "text-[#A95738]"
                          }`}>
                            {item.num}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] uppercase tracking-wider text-[#A95738] font-semibold">
                              Active View
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 font-display text-[17.5px] sm:text-[18.5px] font-normal leading-[1.2] text-[#F5F1E8]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[12px] leading-[1.4] text-[#E8DFCF]/70 line-clamp-2">
                          {item.description}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(245,241,232,0.22)] border-b border-[rgba(245,241,232,0.22)]">
                  {CUSTOM_OPTIONS.slice(2, 4).map((item, idx) => {
                    const realIdx = idx + 2;
                    const isSelected = selectedIndex === realIdx;
                    return (
                      <button
                        key={item.num}
                        type="button"
                        onClick={() => setSelectedIndex(realIdx)}
                        className={`text-left w-full py-3.5 sm:py-4 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5F1E8] ${
                          item.num === "03" ? "sm:pr-5" : "sm:pl-5"
                        } ${
                          isSelected
                            ? "bg-[rgba(245,241,232,0.08)] sm:rounded-[2px]"
                            : "hover:bg-[rgba(245,241,232,0.03)]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-sans text-[11.5px] font-bold tracking-[0.2em] transition-colors ${
                            isSelected ? "text-[#F5F1E8]" : "text-[#A95738]"
                          }`}>
                            {item.num}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] uppercase tracking-wider text-[#A95738] font-semibold">
                              Active View
                            </span>
                          )}
                        </div>
                        <h3 className="mt-1 font-display text-[17.5px] sm:text-[18.5px] font-normal leading-[1.2] text-[#F5F1E8]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[12px] leading-[1.4] text-[#E8DFCF]/70 line-clamp-2">
                          {item.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Primary CTA Button & Secondary Text */}
              <div
                className={`mt-8 sm:mt-9 transition-all duration-[600ms] delay-[500ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[3px] bg-[#F5F1E8] hover:bg-[#FAF8F3] text-[#26351C] font-sans text-[14.5px] sm:text-[15px] font-semibold tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-250 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8]"
                >
                  <span>Discuss Your Requirements</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>

                <p className="mt-3.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#E8DFCF]/75 max-w-[460px]">
                  Tell us what you&apos;re looking for and our team can discuss
                  the right textile solution for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
