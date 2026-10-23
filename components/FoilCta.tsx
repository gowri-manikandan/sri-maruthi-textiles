"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface SampleItem {
  id: string;
  code: string;
  name: string;
  category: string;
  categoryBadge: string;
  dimensions: string;
  blend: string;
  image: string;
  alt: string;
  highlight: string;
}

const SAMPLE_ITEMS: SampleItem[] = [
  {
    id: "checked",
    code: "SMT-CK-888",
    name: "888 Checked Bath Towel",
    category: "Checked Towels",
    categoryBadge: "Checked Weave",
    dimensions: "24 × 48 in",
    blend: "80% Cotton / 20% Polyester Blend",
    image: "/images/products/smt-ck-888.webp",
    alt: "Sample kit checked cotton blend bath towel with authentic South Indian Madras grid weave",
    highlight: "Authentic Handloom Check",
  },
  {
    id: "plain",
    code: "SMT-PL-73146",
    name: "73 × 146 Plain Bath Towel",
    category: "Plain Towels",
    categoryBadge: "Plain Terry",
    dimensions: "26 × 52 in",
    blend: "80% Cotton / 20% Polyester Blend",
    image: "/images/products/smt-pl-73146.webp",
    alt: "Sample kit vat-dyed plain red cotton blend towel with flat woven border",
    highlight: "Vat-Dyed Colorfast Pile",
  },
  {
    id: "white",
    code: "SMT-WH-2754",
    name: "27 × 54 Institutional White Towel",
    category: "White Towels",
    categoryBadge: "Hotel White",
    dimensions: "27 × 54 in",
    blend: "80% Cotton / 20% Polyester Blend",
    image: "/images/products/smt-wh-2754.webp",
    alt: "Sample kit optical white institutional bath towel with woven identity stripe",
    highlight: "Bleach-Safe Commercial Terry",
  },
  {
    id: "kora",
    code: "SMT-KR-18001P",
    name: "18001 Traditional Kora Bath Towel",
    category: "Kora Towels",
    categoryBadge: "Kora Heritage",
    dimensions: "33 × 66 in",
    blend: "80% Cotton / 20% Polyester Blend",
    image: "/images/products/smt-kr-18001p.webp",
    alt: "Sample kit traditional unbleached kora cotton blend bath towel",
    highlight: "Unbleached Natural Cotton",
  },
];

/**
 * Section 7: "Sample Kit" — Sri Maruthi Textiles
 *
 * Premium B2B conversion section allowing commercial buyers (hotels, resorts,
 * retailers) to physically evaluate fabric softness, weave, and finish.
 *
 * Background: Warm Ivory (#F5F1E8)
 * Typography: Dark Brown (#29251F) & Deep Olive (#26351C)
 * Respects prefers-reduced-motion: reduce
 */
export default function FoilCta() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeSample = SAMPLE_ITEMS[selectedIndex];

  return (
    <section
      ref={sectionRef}
      id="sample-kit"
      aria-labelledby="sample-kit-heading"
      className="relative bg-[#F5F1E8] py-[75px] sm:py-[85px] lg:py-[98px] text-[#29251F] overflow-hidden"
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

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-14 xl:gap-16">
          {/* =========================================================================
              LEFT COLUMN: Interactive Sample Kit Showcase (~52-53% Desktop Width)
              ========================================================================= */}
          <div className="w-full lg:w-[52%] xl:w-[53%] shrink-0">
            <div className="relative group">
              {/* Main Exhibition Card */}
              <div
                className={`relative w-full h-[370px] sm:h-[440px] lg:h-[480px] xl:h-[500px] overflow-hidden rounded-[4px] border border-[rgba(41,37,31,0.14)] bg-white shadow-[0_10px_32px_rgba(41,37,31,0.08)] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 duration-[850ms]"
                    : "opacity-0 translate-y-5 duration-[850ms]"
                }`}
              >
                {/* Header Bar inside Card */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-[#FAF8F3]/95 backdrop-blur-sm border-b border-[rgba(41,37,31,0.08)]">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#40572D]" />
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#40572D]">
                      SAMPLE PACK PREVIEW
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-[2px] bg-[#26351C] text-[#F5F1E8] font-sans text-[9.5px] sm:text-[10px] font-semibold tracking-[0.12em] uppercase">
                    Sample 0{selectedIndex + 1} of 04 · {activeSample.categoryBadge}
                  </span>
                </div>

                {/* Real Product Image with object-contain */}
                <div className="relative w-full h-full pt-12 pb-16 px-4 sm:px-8 flex items-center justify-center">
                  <Image
                    key={activeSample.id}
                    src={activeSample.image}
                    alt={activeSample.alt}
                    fill
                    sizes="(min-width: 1024px) 53vw, 100vw"
                    quality={88}
                    className={`object-contain p-3 sm:p-5 transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
                      isVisible
                        ? "opacity-100 scale-100 duration-[700ms]"
                        : "opacity-0 scale-[0.98] duration-[700ms]"
                    }`}
                  />
                </div>

                {/* Bottom Information Bar inside Card */}
                <div className="absolute bottom-0 inset-x-0 z-20 px-3.5 sm:px-5 py-2.5 sm:py-3 bg-[#FAF8F3]/95 backdrop-blur-sm border-t border-[rgba(41,37,31,0.08)] flex items-center justify-between gap-3 text-[#29251F]">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] font-bold text-[#A95738]">
                        {activeSample.code}
                      </span>
                      <span className="text-[11px] text-[#29251F]/40 select-none">•</span>
                      <span className="font-sans text-[12px] sm:text-[13px] font-semibold text-[#29251F] truncate">
                        {activeSample.name}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-[11.5px] text-[#29251F]/70 truncate mt-0.5">
                      {activeSample.dimensions} · {activeSample.blend}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-[#40572D] bg-[#40572D]/10 px-2 py-1 rounded-[2px] hidden sm:inline-block">
                    Physical Swatch
                  </span>
                </div>
              </div>

              {/* 4 Clickable Sample Thumbnails */}
              <div
                className={`mt-3 sm:mt-3.5 grid grid-cols-4 gap-2 sm:gap-2.5 transition-all duration-[800ms] delay-[350ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                role="tablist"
                aria-label="Sample kit towel types"
              >
                {SAMPLE_ITEMS.map((item, idx) => {
                  const isActive = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Inspect ${item.name} sample`}
                      onClick={() => setSelectedIndex(idx)}
                      className={`group/btn relative flex flex-col items-center p-2 rounded-[3px] border transition-all duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26351C] ${
                        isActive
                          ? "bg-white border-[#26351C] shadow-[0_4px_12px_rgba(41,37,31,0.12)] -translate-y-0.5"
                          : "bg-white/60 border-[rgba(41,37,31,0.12)] hover:bg-white hover:border-[rgba(41,37,31,0.25)]"
                      }`}
                    >
                      <div className="relative size-[34px] sm:size-[40px] rounded-[2px] overflow-hidden bg-[#FAF8F3] border border-[rgba(41,37,31,0.08)] shrink-0">
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
                        className={`mt-1.5 font-sans text-[9px] sm:text-[10px] font-bold tracking-[0.12em] uppercase truncate w-full text-center transition-colors ${
                          isActive
                            ? "text-[#26351C]"
                            : "text-[#29251F]/70 group-hover/btn:text-[#29251F]"
                        }`}
                      >
                        {item.categoryBadge}
                      </span>
                      <span
                        className={`text-[8.5px] font-mono transition-colors ${
                          isActive ? "text-[#A95738]" : "text-[#29251F]/45"
                        }`}
                      >
                        Sample 0{idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Editorial Content & Sample Kit Benefits (~47-48% Desktop)
              ========================================================================= */}
          <div className="w-full lg:flex-1 flex flex-col justify-center">
            <div className="max-w-[490px]">
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 transition-all duration-[600ms] delay-[100ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#40572D]">
                  SAMPLE KIT
                </span>
                <span
                  className="h-px w-8 sm:w-12 bg-[#40572D]/35"
                  aria-hidden="true"
                />
              </div>

              {/* Main Heading */}
              <h2
                id="sample-kit-heading"
                className={`mt-4 sm:mt-5 font-display font-normal text-[2.35rem] sm:text-[2.75rem] lg:text-[3.15rem] xl:text-[3.35rem] leading-[1.08] tracking-[-0.015em] text-[#29251F] transition-all duration-[750ms] delay-[180ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }`}
              >
                Feel the Quality
                <br />
                for Yourself
              </h2>

              {/* Description */}
              <p
                className={`mt-4 sm:mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.62] text-[#29251F]/80 font-normal transition-all duration-[700ms] delay-[260ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                See the fabric, feel the weave and experience the finish before
                placing your requirement. Request a sample kit and explore the
                quality of our cotton blend textiles firsthand.
              </p>

              {/* What's in the Sample Kit - Feature Checklist */}
              <div
                className={`mt-6 sm:mt-7 border-t border-[rgba(41,37,31,0.12)] pt-5 space-y-2.5 transition-all duration-[700ms] delay-[340ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-[#40572D] text-[13px] font-bold mt-0.5" aria-hidden="true">✓</span>
                  <p className="text-[13px] sm:text-[13.5px] text-[#29251F]/80 leading-[1.5]">
                    <strong className="font-semibold text-[#29251F]">4 Core Weaves &amp; Finishes:</strong> Hands-on swatches of Checked, Plain, Hotel White, and Kora towels.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#40572D] text-[13px] font-bold mt-0.5" aria-hidden="true">✓</span>
                  <p className="text-[13px] sm:text-[13.5px] text-[#29251F]/80 leading-[1.5]">
                    <strong className="font-semibold text-[#29251F]">Tactile GSM &amp; Absorbency:</strong> Evaluate yarn density, terry loop softness, and locked selvedge quality.
                  </p>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#40572D] text-[13px] font-bold mt-0.5" aria-hidden="true">✓</span>
                  <p className="text-[13px] sm:text-[13.5px] text-[#29251F]/80 leading-[1.5]">
                    <strong className="font-semibold text-[#29251F]">Mill Wholesale Price Sheet:</strong> Transparent tiered quantity quotes starting from just 10 pieces.
                  </p>
                </div>
              </div>

              {/* Primary CTA & Supporting Note */}
              <div
                className={`mt-7 sm:mt-8 pt-2 transition-all duration-[600ms] delay-[420ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[3px] bg-[#26351C] hover:bg-[#1F2B16] text-[#F5F1E8] font-sans text-[14.5px] sm:text-[15px] font-semibold tracking-wide shadow-[0_4px_16px_rgba(38,53,28,0.22)] transition-all duration-250 ease-out hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#26351C] focus-visible:ring-offset-2"
                >
                  <span>Request a Sample Kit</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>

                {/* Supporting Text */}
                <p className="mt-3.5 text-[13px] sm:text-[13.5px] leading-[1.55] text-[#29251F]/70 max-w-[440px]">
                  Dispatched across Kerala &amp; Tamil Nadu within 1 to 2 days. Tell us what you are looking for, and our team will prepare the right samples for your requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
