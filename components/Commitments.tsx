"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface Capability {
  num: string;
  title: string;
  delay: string;
}

const CAPABILITIES: Capability[] = [
  { num: "01", title: "Custom Sizes", delay: "delay-[100ms]" },
  { num: "02", title: "Custom Colours", delay: "delay-[200ms]" },
  { num: "03", title: "Custom Borders", delay: "delay-[300ms]" },
  { num: "04", title: "Custom Weaves", delay: "delay-[400ms]" },
];

const SWATCHES = [
  {
    label: "Colour",
    src: "/images/custom/custom-towels-palette.jpg",
    alt: "Yarn dye color swatch",
  },
  {
    label: "Weave",
    src: "/images/custom/waffle-color-stack.jpg",
    alt: "Handloom weave structure detail",
  },
  {
    label: "Border",
    src: "/images/custom/custom-border-detail.jpg",
    alt: "Custom jacquard towel border detail",
  },
  {
    label: "Finish",
    src: "/images/custom/swatch-kit-booklet.jpg",
    alt: "Plush handloom towel finish",
  },
];

/**
 * Section 6: "Custom Orders" — Sri Maruthi Textiles
 *
 * Primary Message: "Your Design. Our Craft."
 *
 * Cinematic B2B editorial split layout:
 * - Left (~53% desktop): Large tactile textile photograph + editorial swatch strip
 * - Right (~47% desktop): Deep olive background (#26351C), warm ivory typography,
 *   woven thread detail, 2x2 capability matrix, and primary CTA
 *
 * Respects prefers-reduced-motion: reduce
 */
export default function Commitments() {
  const [sectionRef, isVisible] = useScrollReveal();
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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14 xl:gap-16">
          {/* =========================================================================
              LEFT COLUMN: Large Tactile Textile Photograph (~53% Desktop Width)
              Requirements 2, 4, 5, 6, 13, 14
              ========================================================================= */}
          <div className="w-full lg:w-[52%] xl:w-[54%] shrink-0">
            <div className="relative group">
              {/* Main Custom Textile Photograph */}
              <div
                className={`relative w-full h-[380px] sm:h-[460px] lg:h-[580px] xl:h-[610px] overflow-hidden rounded-[3px] border border-[rgba(245,241,232,0.14)] bg-[#1F2B16] shadow-[0_12px_36px_rgba(0,0,0,0.35)] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 duration-[900ms]"
                    : "opacity-0 translate-y-6 duration-[900ms]"
                }`}
              >
                <Image
                  src="/images/custom/custom-towels-palette.jpg"
                  alt="Close-up of bespoke handloom cotton blend towels in terracotta, natural cream, and olive with custom woven borders"
                  fill
                  sizes="(min-width: 1024px) 54vw, 100vw"
                  quality={75}
                  className={`object-cover object-[center_40%] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
                    isVisible
                      ? "opacity-100 scale-100 duration-[1000ms] group-hover:scale-[1.015] group-hover:duration-700"
                      : "opacity-0 scale-[1.04] duration-[1000ms]"
                  }`}
                />

                {/* Subtle soft vignette highlight on lower border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F2B16]/50 via-transparent to-transparent opacity-75"
                />

                {/* Optional Image Swatches Strip (Requirement 6):
                    Visual indicators for COLOUR, WEAVE, BORDER, FINISH */}
                <div
                  className={`absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10 flex items-center gap-2 sm:gap-2.5 px-3 py-2 rounded-[3px] bg-[#26351C]/90 backdrop-blur-md border border-[rgba(245,241,232,0.18)] shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition-all duration-[800ms] delay-[400ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  {SWATCHES.map((swatch) => (
                    <div
                      key={swatch.label}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="relative size-[26px] sm:size-[28px] rounded-[2px] overflow-hidden border border-[rgba(245,241,232,0.3)]">
                        <Image
                          src={swatch.src}
                          alt={swatch.alt}
                          fill
                          sizes="30px"
                          quality={75}
                          className="object-cover"
                        />
                      </div>
                      <span className="font-sans text-[8.5px] sm:text-[9px] font-semibold tracking-[0.14em] uppercase text-[#E8DFCF]/90">
                        {swatch.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Editorial Content & Customization Matrix (~47% Desktop)
              Requirements 7, 8, 9, 10, 11, 12, 21
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

              {/* Subtle Decorative Woven Thread Pattern (Requirement 21) */}
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

              {/* Customization List: 2 x 2 Editorial Matrix with Thin Dividers (Requirements 9 & 10) */}
              <div
                className={`mt-7 sm:mt-8 border-t border-[rgba(245,241,232,0.22)] transition-all duration-[700ms] delay-[350ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                {/* 2 x 2 Arrangement on Desktop / Tablet; 1 per row on Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(245,241,232,0.22)] border-b border-[rgba(245,241,232,0.22)]">
                  {CAPABILITIES.slice(0, 2).map((item) => (
                    <div
                      key={item.num}
                      className={`py-3.5 sm:py-4 ${
                        item.num === "01" ? "sm:pr-5" : "sm:pl-5"
                      } transition-all duration-[550ms] ${item.delay} ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[15px]"
                      }`}
                    >
                      <span className="font-sans text-[11.5px] font-bold tracking-[0.2em] text-[#A95738] block">
                        {item.num}
                      </span>
                      <h3 className="mt-1 font-display text-[17.5px] sm:text-[18.5px] font-normal leading-[1.2] text-[#F5F1E8]">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(245,241,232,0.22)] border-b border-[rgba(245,241,232,0.22)]">
                  {CAPABILITIES.slice(2, 4).map((item) => (
                    <div
                      key={item.num}
                      className={`py-3.5 sm:py-4 ${
                        item.num === "03" ? "sm:pr-5" : "sm:pl-5"
                      } transition-all duration-[550ms] ${item.delay} ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[15px]"
                      }`}
                    >
                      <span className="font-sans text-[11.5px] font-bold tracking-[0.2em] text-[#A95738] block">
                        {item.num}
                      </span>
                      <h3 className="mt-1 font-display text-[17.5px] sm:text-[18.5px] font-normal leading-[1.2] text-[#F5F1E8]">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTA Button (Requirement 11) & Secondary Text (Requirement 12) */}
              <div
                className={`mt-8 sm:mt-9 transition-all duration-[600ms] delay-[500ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-[3px] bg-[#F5F1E8] hover:bg-[#FAF8F3] text-[#26351C] font-sans text-[14.5px] sm:text-[15px] font-semibold tracking-wide shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-all duration-250 ease-out hover:-translate-y-0.5"
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
