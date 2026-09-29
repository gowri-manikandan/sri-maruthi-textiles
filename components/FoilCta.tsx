"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(motionQuery.matches);

    const onMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches);
    };
    motionQuery.addEventListener("change", onMotionChange);

    if (motionQuery.matches || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return () => motionQuery.removeEventListener("change", onMotionChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
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
              LEFT COLUMN: Large Editorial Photograph (~52-53% Desktop Width)
              ========================================================================= */}
          <div className="w-full lg:w-[52%] xl:w-[53%] shrink-0">
            <div className="relative group">
              <div
                className={`relative w-full h-[360px] sm:h-[430px] lg:h-[480px] xl:h-[500px] overflow-hidden rounded-[3px] border border-[rgba(41,37,31,0.12)] bg-[#E8DFCF] shadow-[0_6px_24px_rgba(41,37,31,0.06)] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0 duration-[850ms]"
                    : "opacity-0 translate-y-5 duration-[850ms]"
                }`}
              >
                <Image
                  src="/images/sample-kit/sample-kit-towels.jpg"
                  alt="Stack of premium cotton towels in taupe, beige, white, sage and navy with visible handloom weave texture"
                  fill
                  sizes="(min-width: 1024px) 53vw, 100vw"
                  quality={75}
                  className={`object-cover object-[center_35%] transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
                    isVisible
                      ? "opacity-100 scale-100 duration-[950ms] group-hover:scale-[1.015] group-hover:duration-700"
                      : "opacity-0 scale-[1.04] duration-[950ms]"
                  }`}
                />

                {/* Subtle soft natural vignette on lower border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/15 via-transparent to-transparent opacity-60"
                />
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Editorial Content (~47-48% Desktop Width)
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
                quality of our cotton textiles firsthand.
              </p>

              {/* Understated Inline Labels */}
              <div
                className={`mt-6 sm:mt-7 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#40572D]/90 transition-all duration-[600ms] delay-[340ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[12px]"
                }`}
              >
                <span>Fabric Feel</span>
                <span className="text-[#40572D]/35 select-none" aria-hidden="true">
                  •
                </span>
                <span>Weave &amp; Finish</span>
                <span className="text-[#40572D]/35 select-none" aria-hidden="true">
                  •
                </span>
                <span>Colour Options</span>
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
                  Tell us what you are looking for, and our team will help you
                  with the right samples for your requirement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
