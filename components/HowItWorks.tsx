"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface StepItem {
  id: string;
  step: string;
  title: string;
  stage: string;
  description: string;
  image: string;
  alt: string;
}

const PROCESS_STEPS: StepItem[] = [
  {
    id: "step-1",
    step: "01",
    title: "Cotton Selection",
    stage: "Raw Material",
    description:
      "We begin with carefully selected cotton chosen for softness, strength and long-lasting performance.",
    image: "/images/process/step-01-cotton.jpg",
    alt: "Carefully selected raw cotton fibers sorted for softness and strength",
  },
  {
    id: "step-2",
    step: "02",
    title: "Yarn Preparation",
    stage: "Transformation",
    description:
      "Cotton is prepared and transformed into yarn with attention to consistency, strength and feel.",
    image: "/images/process/step-02-yarn.jpg",
    alt: "Spindles of fine cotton yarn prepared for weaving",
  },
  {
    id: "step-3",
    step: "03",
    title: "Weaving & Craft",
    stage: "Craft",
    description:
      "Our handlooms bring the yarn together through traditional weaving techniques and skilled craftsmanship.",
    image: "/images/process/step-03-weaving.jpg",
    alt: "Traditional handloom weaving cotton fabric with master artisan",
  },
  {
    id: "step-4",
    step: "04",
    title: "Finishing & Inspection",
    stage: "Finished Product",
    description:
      "Every finished towel is checked for quality, finish and consistency before it reaches our customers.",
    image: "/images/process/step-04-folded-towels.jpg",
    alt: "Quality inspection and hand-checking of soft finished cotton towels",
  },
];

/**
 * Section 4: "Our Process" — Sri Maruthi Textiles
 *
 * "From Cotton to Finished Towel"
 *
 * Horizontal continuous editorial timeline on desktop with sequential scroll
 * progress and interactive hover states. Converts to an independent vertical
 * timeline on mobile with generous spacing.
 *
 * Background: Warm Ivory (#F5F1E8)
 * Respects prefers-reduced-motion: reduce
 */
export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // Independent visibility tracking for mobile items (Section 15)
  const [mobileVisible, setMobileVisible] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Motion preference check & section entrance observer
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(motionQuery.matches);

    const onMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReduced(e.matches);
    };
    motionQuery.addEventListener("change", onMotionChange);

    if (motionQuery.matches || typeof IntersectionObserver === "undefined") {
      setIsSectionVisible(true);
      setMobileVisible([true, true, true, true]);
      return () => motionQuery.removeEventListener("change", onMotionChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      observer.disconnect();
    };
  }, []);

  // 2. Desktop scroll tracking to activate steps 01 → 02 → 03 → 04 sequentially
  useEffect(() => {
    if (prefersReduced) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          // Only compute for desktop viewports (lg and above: >= 1024px)
          if (window.innerWidth >= 1024) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const sectionTop = rect.top;
            const sectionHeight = rect.height;

            // Trigger progression window as section moves through viewport
            const scrollRange = sectionHeight * 0.7;
            const scrollPosition = windowHeight * 0.6 - sectionTop;
            const progress = Math.max(0, Math.min(1, scrollPosition / scrollRange));

            // Map progress: 0 -> 0.26 (Step 0), 0.26 -> 0.52 (Step 1), 0.52 -> 0.78 (Step 2), > 0.78 (Step 3)
            let current = 0;
            if (progress >= 0.76) {
              current = 3;
            } else if (progress >= 0.5) {
              current = 2;
            } else if (progress >= 0.25) {
              current = 1;
            } else {
              current = 0;
            }

            setActiveStep(current);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount to establish position
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [prefersReduced]);

  // 3. Mobile independent IntersectionObserver for each process step
  useEffect(() => {
    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    const observers: IntersectionObserver[] = [];

    mobileItemRefs.current.forEach((itemEl, idx) => {
      if (!itemEl) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMobileVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.18 }
      );
      obs.observe(itemEl);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [prefersReduced]);

  // Active step priority: hover takes momentary focus, otherwise scroll-driven activeStep
  const effectiveActiveStep = hoveredStep !== null ? hoveredStep : activeStep;

  // Percentage for the continuous horizontal timeline connecting line (0% to 100%)
  const lineProgressPercent = prefersReduced
    ? 100
    : (effectiveActiveStep / (PROCESS_STEPS.length - 1)) * 100;

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      aria-labelledby="process-heading"
      className="relative bg-[#F5F1E8] pt-[75px] pb-[75px] lg:pt-[110px] lg:pb-[110px] text-[#29251F] overflow-hidden"
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
        {/* =========================================================================
            SECTION INTRO: Centered, max-width 650px (Requirements 3 & 4)
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
              OUR PROCESS
            </span>
            <span
              className="h-px w-6 sm:w-8 bg-[#40572D]/35"
              aria-hidden="true"
            />
          </div>

          {/* Main Heading: 52-62px Desktop, 40-46px Mobile */}
          <h2
            id="process-heading"
            className={`mt-4 sm:mt-5 font-display font-normal text-[2.5rem] sm:text-[3.1rem] lg:text-[3.55rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.015em] text-[#29251F] transition-all duration-[750ms] delay-[120ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[25px]"
            }`}
          >
            From Cotton to
            <br />
            Finished Towel
          </h2>

          {/* Description */}
          <p
            className={`mt-5 sm:mt-6 text-[16px] sm:text-[17.5px] leading-[1.62] text-[#29251F]/80 font-normal transition-all duration-[700ms] delay-[220ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isSectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[20px]"
            }`}
          >
            Every stage matters. From carefully selected cotton and yarn
            preparation to weaving, finishing and final inspection, we focus on
            consistency at every step.
          </p>
        </div>

        {/* =========================================================================
            MICRO DETAIL & DECORATIVE LABEL (Requirements 17 & 18)
            ========================================================================= */}
        <div
          className={`mt-10 sm:mt-12 flex flex-col items-center justify-center transition-all duration-[600ms] delay-[280ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[12px]"
          }`}
        >
          {/* Label: CRAFTED WITH CARE */}
          <span className="font-sans text-[10.5px] font-semibold tracking-[0.24em] uppercase text-[#40572D]/85">
            CRAFTED WITH CARE
          </span>

          {/* Micro Progress Journey: RAW MATERIAL → TRANSFORMATION → CRAFT → FINISHED PRODUCT */}
          <div className="mt-2.5 hidden sm:flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase">
            <span
              className={`transition-colors duration-400 ${
                effectiveActiveStep >= 0
                  ? "text-[#40572D] font-bold"
                  : "text-[#29251F]/45"
              }`}
            >
              Raw Material
            </span>
            <span className="text-[#40572D]/35 select-none" aria-hidden="true">
              →
            </span>
            <span
              className={`transition-colors duration-400 ${
                effectiveActiveStep >= 1
                  ? "text-[#40572D] font-bold"
                  : "text-[#29251F]/45"
              }`}
            >
              Transformation
            </span>
            <span className="text-[#40572D]/35 select-none" aria-hidden="true">
              →
            </span>
            <span
              className={`transition-colors duration-400 ${
                effectiveActiveStep >= 2
                  ? "text-[#40572D] font-bold"
                  : "text-[#29251F]/45"
              }`}
            >
              Craft
            </span>
            <span className="text-[#40572D]/35 select-none" aria-hidden="true">
              →
            </span>
            <span
              className={`transition-colors duration-400 ${
                effectiveActiveStep >= 3
                  ? "text-[#40572D] font-bold"
                  : "text-[#29251F]/45"
              }`}
            >
              Finished Product
            </span>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Continuous Horizontal Editorial Timeline (lg and above)
            Requirements 1, 8, 9, 10, 11, 12, 13
            ========================================================================= */}
        <div
          className={`hidden lg:block mt-[65px] transition-all duration-[800ms] delay-[350ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[20px]"
          }`}
        >
          {/* Top Row: 4 Column Step Titles & Numbers */}
          <div className="grid grid-cols-4 gap-6 xl:gap-8">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = effectiveActiveStep >= idx;
              const isCurrentStep = effectiveActiveStep === idx;
              const isHovered = hoveredStep === idx;

              return (
                <div
                  key={`header-${step.id}`}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer select-none pb-2 flex flex-col justify-end"
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className={`font-sans text-[12.5px] font-bold tracking-[0.22em] uppercase transition-colors duration-350 ease-out ${
                        isCurrentStep || isHovered
                          ? "text-[#40572D]"
                          : isActive
                            ? "text-[#40572D]/90"
                            : "text-[#40572D]/60"
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="font-sans text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#A95738]/90">
                      {step.stage}
                    </span>
                  </div>

                  <h3
                    className={`mt-1 font-display text-[20px] xl:text-[22px] font-medium leading-[1.22] transition-colors duration-350 ease-out ${
                      isCurrentStep || isHovered
                        ? "text-[#40572D]"
                        : "text-[#29251F]"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Continuous Timeline Connecting Line & 4 Step Markers */}
          <div className="relative py-4 my-2">
            {/* The continuous baseline connecting the centers of Step 1 to Step 4 (12.5% to 87.5%) */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 -translate-y-1/2 left-[12.5%] right-[12.5%] h-[1.5px] bg-[#40572D]/30"
            >
              {/* The active olive progress line that smoothly grows as user scrolls or navigates */}
              <div
                className="h-full bg-[#40572D] transition-all duration-700 ease-out motion-reduce:transition-none"
                style={{
                  width: `${lineProgressPercent}%`,
                }}
              />
            </div>

            {/* 4 Step Markers: precisely centered over each of the 4 columns */}
            <div className="grid grid-cols-4 gap-6 xl:gap-8">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = effectiveActiveStep >= idx;
                const isCurrentStep = effectiveActiveStep === idx;
                const isHovered = hoveredStep === idx;

                return (
                  <div
                    key={`marker-${step.id}`}
                    className="flex justify-center items-center"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      onMouseEnter={() => setHoveredStep(idx)}
                      onMouseLeave={() => setHoveredStep(null)}
                      aria-label={`Select process step ${step.step}: ${step.title}`}
                      className={`relative z-10 size-[14px] rounded-full transition-all duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40572D] ${
                        isCurrentStep || isHovered
                          ? "bg-[#40572D] ring-4 ring-[#40572D]/20 scale-110"
                          : isActive
                            ? "bg-[#40572D] ring-2 ring-[#40572D]/10"
                            : "bg-[#F5F1E8] border-2 border-[#40572D]/60"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: 4 Column Images & Descriptions */}
          <div className="grid grid-cols-4 gap-6 xl:gap-8 mt-2">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = effectiveActiveStep >= idx;
              const isCurrentStep = effectiveActiveStep === idx;
              const isHovered = hoveredStep === idx;

              return (
                <div
                  key={`content-${step.id}`}
                  onMouseEnter={() => setHoveredStep(idx)}
                  onMouseLeave={() => setHoveredStep(null)}
                  onClick={() => setActiveStep(idx)}
                  className="cursor-pointer select-none flex flex-col"
                >
                  {/* Image: approx 240-280px wide, ~180-210px height (4:3 aspect ratio) */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[3px] border border-[rgba(41,37,31,0.12)] bg-[#E8DFCF] shadow-[0_4px_16px_rgba(41,37,31,0.05)]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1280px) 275px, (min-width: 1024px) 240px, 100vw"
                      quality={75}
                      className={`object-cover transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:opacity-100 ${
                        isActive || isHovered
                          ? "opacity-100 scale-[1.025]"
                          : "opacity-75 scale-100"
                      }`}
                    />
                    {/* Subtle warm photo vignette */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/15 via-transparent to-transparent opacity-60"
                    />
                  </div>

                  {/* Description Text */}
                  <p
                    className={`mt-4 text-[14px] xl:text-[14.5px] leading-[1.62] transition-all duration-400 ease-out ${
                      isActive || isHovered
                        ? "text-[#29251F] opacity-100"
                        : "text-[#29251F]/70 opacity-75"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW: Connected Vertical Editorial Timeline (< lg)
            Requirements 14, 15, 16
            ========================================================================= */}
        <div className="lg:hidden mt-[50px] sm:mt-[60px] relative max-w-[620px] mx-auto">
          {/* Continuous vertical timeline connector line running down behind markers */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-8 left-[17px] sm:left-[21px] w-[1.5px] bg-[#40572D]/30"
          />

          <div className="space-y-[55px] sm:space-y-[62px]">
            {PROCESS_STEPS.map((step, idx) => {
              const isVisible = mobileVisible[idx] || prefersReduced;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    mobileItemRefs.current[idx] = el;
                  }}
                  className="relative flex items-start gap-5 sm:gap-6"
                >
                  {/* Marker Node on vertical line: scales and fades independently */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <div
                      className={`size-[15px] sm:size-[17px] rounded-full transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100 ${
                        isVisible
                          ? "bg-[#40572D] ring-4 ring-[#40572D]/15 scale-100 opacity-100"
                          : "bg-[#F5F1E8] border-2 border-[#40572D]/50 scale-80 opacity-60"
                      }`}
                    />
                  </div>

                  {/* Step Body */}
                  <div className="flex-1 max-w-[460px]">
                    {/* Step Number & Micro Stage Tag */}
                    <div
                      className={`flex items-baseline justify-between transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[10px]"
                      }`}
                    >
                      <span className="font-sans text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#40572D] uppercase">
                        {step.step}
                      </span>
                      <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase text-[#A95738]">
                        {step.stage}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`mt-1 font-display text-[22px] sm:text-[25px] font-medium leading-[1.2] text-[#29251F] transition-all duration-500 delay-[60ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[12px]"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Process Image: 4:3 Aspect Ratio */}
                    <div
                      className={`mt-3.5 relative w-full aspect-[4/3] max-w-[360px] overflow-hidden rounded-[3px] border border-[rgba(41,37,31,0.12)] bg-[#E8DFCF] shadow-[0_4px_16px_rgba(41,37,31,0.06)] transition-all duration-700 delay-[120ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[20px]"
                      }`}
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(max-width: 640px) 92vw, 360px"
                        quality={75}
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#29251F]/15 via-transparent to-transparent opacity-50"
                      />
                    </div>

                    {/* Description Text */}
                    <p
                      className={`mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#29251F]/80 transition-all duration-500 delay-[180ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-[15px]"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SECTION CTA: Editorial Subtle Link at Bottom (Requirement 19)
            "Looking for a custom textile solution?" → "Discuss Your Requirements →"
            ========================================================================= */}
        <div
          className={`mt-14 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 border-t border-[rgba(41,37,31,0.14)] text-center transition-all duration-[700ms] delay-[450ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            isSectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[15px]"
          }`}
        >
          <p className="text-[14.5px] sm:text-[15.5px] text-[#29251F]/75 font-normal">
            Looking for a custom textile solution?{" "}
            <a
              href="#commitments"
              className="group inline-flex items-center gap-1.5 font-medium text-[#40572D] hover:text-[#26351C] transition-colors duration-250 ml-1 link-underline"
            >
              <span>Discuss Your Requirements</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-250 ease-out group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
