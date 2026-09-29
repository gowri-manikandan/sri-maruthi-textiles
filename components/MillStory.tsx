"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ENQUIRY_HREF } from "@/lib/site";

const HIGHLIGHTS = [
  {
    num: "01",
    line1: "Traditional",
    line2: "Handlooms",
    delay: "delay-[500ms]",
  },
  {
    num: "02",
    line1: "Skilled",
    line2: "Artisans",
    delay: "delay-[620ms]",
  },
  {
    num: "03",
    line1: "Timeless",
    line2: "Quality",
    delay: "delay-[740ms]",
  },
] as const;

/**
 * Section 3: "The Looms Behind the Towels" — Sri Maruthi Textiles
 *
 * Premium split-layout editorial section:
 * - Natural Beige (#E8DFCF) background with organic tactile micro-texture
 * - Left (~53% desktop): Large handloom artisan photograph with subtle entrance reveal and micro-zoom hover
 * - Overlapping detail swatch (bottom-right of main image) showcasing hand-guided weave & shuttle
 * - Right (~47% desktop): Editorial typography with Fraunces serif display, concise narrative,
 *   three horizontal editorial highlights with thin vertical dividers, and directional contact link
 * - Respects prefers-reduced-motion: reduce
 */
export default function MillStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Respect user's motion preference immediately
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Trigger when ~15% of section enters viewport
      { threshold: 0.15 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      aria-labelledby="craft-heading"
      className="relative bg-[#E8DFCF] py-[70px] lg:py-[100px] text-[#29251F] overflow-hidden"
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
        {/* Split Layout: ~53% Image Left, ~47% Content Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
          {/* =========================================================================
              LEFT COLUMN: Large Handloom Photograph + Overlapping Detail Swatch
              ========================================================================= */}
          <div className="w-full lg:w-[53%] shrink-0">
            <div className="relative">
              {/* Main Handloom Image Container */}
              <div
                className={`group relative h-[380px] sm:h-[450px] lg:h-[550px] w-full overflow-hidden rounded-[3px] border border-[rgba(41,37,31,0.14)] bg-[#DDD3C2] shadow-[0_6px_24px_rgba(41,37,31,0.07)] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 duration-[1000ms]"
                    : "opacity-0 translate-y-6 duration-[1000ms]"
                }`}
              >
                <Image
                  src="/images/loom-craft-artisan.jpg"
                  alt="Traditional handloom weaving cotton fabric with master artisan"
                  fill
                  sizes="(min-width: 1024px) 53vw, 100vw"
                  quality={90}
                  className={`pointer-events-none select-none object-cover object-[center_35%] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                    isVisible
                      ? "opacity-100 scale-100 duration-[1100ms] group-hover:scale-[1.015] group-hover:duration-700"
                      : "opacity-0 scale-[1.04] duration-[1100ms]"
                  }`}
                />

                {/* Subtle soft vignette highlight on lower border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/20 via-transparent to-transparent opacity-60"
                />
              </div>

              {/* Overlapping Detail Swatch (hidden on mobile to prevent clutter) */}
              <div
                className={`absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 lg:-bottom-5 lg:-right-4 z-10 hidden sm:block w-[170px] lg:w-[185px] rounded-[3px] border-[4px] border-[#E8DFCF] bg-[#FAF8F1] shadow-[0_12px_28px_rgba(41,37,31,0.14)] overflow-hidden transition-all duration-[800ms] delay-[450ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden group/swatch">
                  <Image
                    src="/images/loom-shuttle-detail.jpg"
                    alt="Close-up of handloom shuttle weaving pure cotton towel fabric"
                    fill
                    sizes="185px"
                    quality={85}
                    className="object-cover transition-transform duration-700 ease-out group-hover/swatch:scale-105"
                  />
                </div>
                {/* Editorial Micro-Label */}
                <div className="px-3 py-2 bg-[#FAF8F1] border-t border-[rgba(41,37,31,0.08)]">
                  <span className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-[#40572D]">
                    Hand-Guided Weave
                  </span>
                  <span className="block text-[11px] font-medium text-[#29251F]/75 leading-tight mt-0.5">
                    Pure cotton warp & weft
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Editorial Content & Highlights
              ========================================================================= */}
          <div className="w-full lg:flex-1 flex flex-col justify-center">
            <div className="max-w-[500px]">
              {/* Eyebrow with Horizontal Accent Line */}
              <div
                className={`flex items-center gap-3 transition-all duration-[700ms] delay-[100ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                  OUR CRAFT
                </span>
                <span
                  className="h-px w-8 sm:w-12 bg-[#40572D]/35"
                  aria-hidden="true"
                />
              </div>

              {/* Main Heading */}
              <h2
                id="craft-heading"
                className={`mt-4 sm:mt-5 font-display font-normal text-[2.4rem] sm:text-[2.75rem] lg:text-[3.15rem] xl:text-[3.45rem] leading-[1.05] tracking-[-0.015em] text-[#29251F] transition-all duration-[750ms] delay-[200ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[25px]"
                }`}
              >
                The Looms Behind
                <br />
                the Towels
              </h2>

              {/* Body Copy Paragraphs */}
              <div
                className={`mt-5 sm:mt-6 space-y-3.5 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.65] text-[#29251F]/85 font-normal transition-all duration-[700ms] delay-[350ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }`}
              >
                <p>
                  At Sri Maruthi Textiles, every towel begins at the loom. Our
                  skilled artisans bring generations of weaving expertise to
                  create fabrics that are soft, durable and full of character.
                </p>
                <p>
                  We work closely with our customers to deliver the right weave,
                  finish and specifications for their business.
                </p>
              </div>

              {/* Editorial Highlights: Three Items Horizontally with Thin Dividers */}
              <div
                className={`mt-8 sm:mt-9 pt-7 border-t border-[rgba(41,37,31,0.18)] transition-all duration-[700ms] delay-[450ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <div className="grid grid-cols-3 divide-x divide-[rgba(41,37,31,0.25)]">
                  {HIGHLIGHTS.map((item, idx) => {
                    const paddingClass =
                      idx === 0
                        ? "pr-3 sm:pr-5 lg:pr-6"
                        : idx === 1
                          ? "px-3 sm:px-5 lg:px-6"
                          : "pl-3 sm:pl-5 lg:pl-6";

                    return (
                      <div
                        key={item.num}
                        className={`${paddingClass} transition-all duration-[600ms] ${item.delay} ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-[15px]"
                        }`}
                      >
                        <span className="block font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#A95738]">
                          {item.num}
                        </span>
                        <p className="mt-2 font-display text-[14.5px] sm:text-[16px] lg:text-[17px] leading-[1.25] text-[#29251F]">
                          {item.line1}
                          <br />
                          {item.line2}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Editorial Text Link with Hover Arrow */}
              <div
                className={`mt-7 sm:mt-8 transition-all duration-[600ms] delay-[650ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[10px]"
                }`}
              >
                <a
                  href={ENQUIRY_HREF}
                  className="group inline-flex items-center gap-2 text-[14.5px] sm:text-[15.5px] font-medium tracking-wide text-[#40572D] hover:text-[#26351C] transition-colors duration-250 link-underline"
                >
                  <span>Talk to us about your requirements</span>
                  <span
                    aria-hidden="true"
                    className="inline-block transition-transform duration-250 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
