"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Leaf, ShieldCheck } from "lucide-react";

/**
 * Custom line-art icon representing authentic handloom weaving:
 * vertical warp threads with horizontal weft guide, minimalist and refined.
 */
function HandloomIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 4h16" />
      <path d="M4 20h16" />
      <path d="M7 4v16" />
      <path d="M12 4v16" />
      <path d="M17 4v16" />
      <path d="M3 10h18" strokeDasharray="1.5 2" />
      <path d="M3 15h18" strokeDasharray="1.5 2" />
    </svg>
  );
}

const QUALITY_CARDS = [
  {
    num: "01",
    title: "Cotton-Rich Blend",
    description: "Soft, absorbent and reinforced with durable blended fibers for lasting quality.",
    icon: Leaf,
    isCustom: false,
  },
  {
    num: "02",
    title: "Authentic Handloom",
    description: "Traditional craftsmanship and superior finish in every piece.",
    icon: HandloomIcon,
    isCustom: true,
  },
  {
    num: "03",
    title: "Consistent Quality",
    description: "Strict quality checks from yarn to finished towel.",
    icon: ShieldCheck,
    isCustom: false,
  },
  {
    num: "04",
    title: "20+ Years Legacy",
    description: "Two decades of reliable handloom supply and trusted commercial partnerships.",
    icon: Globe,
    isCustom: false,
  },
] as const;

/**
 * Section 2: "Quality You Can Count On" — Sri Maruthi Textiles
 *
 * An asymmetrical editorial layout that establishes why commercial buyers
 * trust this mill: 40% editorial story on the left, 2x2 catalogue cards on the right.
 * Calm, subtle scroll reveal triggered via IntersectionObserver at 15–20% visibility.
 */
export default function QualitySection() {
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
      // Trigger when ~18% of the section is visible
      { threshold: 0.18 },
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      aria-labelledby="quality-heading"
      className="relative bg-[#F5F1E8] py-20 sm:py-24 lg:py-28 text-[#29251F] overflow-hidden"
    >
      {/* Subtle organic paper/fabric weave texture background */}
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
        {/* Asymmetrical 40% Left / 60% Right Grid on Desktop */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start">
          {/* LEFT COLUMN: Editorial Introduction (~40% desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            {/* Eyebrow with Short Decorative Hairline */}
            <div
              className={`flex items-center gap-3 transition-all duration-[600ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.22em] uppercase text-[#40572D]">
                WHY CHOOSE US
              </span>
              <span
                className="h-px w-8 sm:w-12 bg-[#40572D]/35"
                aria-hidden="true"
              />
            </div>

            {/* Main Section Heading */}
            <h2
              id="quality-heading"
              className={`mt-4 sm:mt-5 font-display font-normal text-[2.4rem] sm:text-[3rem] lg:text-[3.35rem] xl:text-[3.65rem] leading-[1.05] tracking-[-0.015em] text-[#29251F] transition-all duration-[700ms] delay-[100ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Quality You Can
              <br className="hidden sm:inline" /> Count On
            </h2>

            {/* Description Paragraph */}
            <p
              className={`mt-5 sm:mt-6 max-w-[490px] text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.65] text-[#29251F]/85 font-normal transition-all duration-[600ms] delay-[200ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              For over 20 years, we have been a dedicated handloom textile manufacturer,
              supplying premium cotton blend towels to wholesale, retail and hospitality
              businesses across Kerala, Tamil Nadu and nationwide.
            </p>

            {/* Understated Editorial Learn More Link */}
            <div
              className={`mt-6 sm:mt-8 transition-all duration-[500ms] delay-[300ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#story"
                className="group inline-flex items-center gap-2 text-[14.5px] sm:text-[15px] font-medium tracking-wide text-[#40572D] hover:text-[#26351C] transition-colors duration-250 link-underline"
              >
                <span>Learn More</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-250 group-hover:translate-x-1.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 Quality Cards (~60% desktop) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {QUALITY_CARDS.map((card, idx) => {
                const IconComponent = card.icon;
                const delays = [
                  "delay-[100ms]",
                  "delay-[200ms]",
                  "delay-[300ms]",
                  "delay-[400ms]",
                ];
                const cardDelay = delays[idx] ?? "delay-[100ms]";

                return (
                  <div
                    key={card.num}
                    className={`group relative rounded-[3px] border border-[rgba(41,37,31,0.12)] bg-[#FAF8F1] p-6 sm:p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(41,37,31,0.28)] hover:shadow-[0_6px_20px_rgba(41,37,31,0.05)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none ${
                      isVisible
                        ? `opacity-100 translate-y-0 ${cardDelay}`
                        : "opacity-0 translate-y-6"
                    } duration-[650ms] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none`}
                  >
                    {/* Card Top: Number & Olive Minimal Icon */}
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-sans text-[12px] font-semibold tracking-[0.2em] text-[#A95738]">
                          {card.num}
                        </span>

                        <div className="text-[#40572D] transition-all duration-300 ease-out opacity-80 group-hover:opacity-100 group-hover:-translate-y-0.5">
                          <IconComponent
                            className="size-[24px]"
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3 className="mt-5 font-display font-medium text-[1.2rem] sm:text-[1.28rem] text-[#29251F] leading-snug">
                        {card.title}
                      </h3>

                      {/* Card Description */}
                      <p className="mt-2 text-[13.5px] sm:text-[14.5px] leading-[1.6] text-[#29251F]/75 font-normal">
                        {card.description}
                      </p>
                    </div>

                    {/* Subtle bottom accent hairline on hover */}
                    <div
                      aria-hidden="true"
                      className="mt-6 h-px w-full bg-[rgba(41,37,31,0.08)] group-hover:bg-[#40572D]/30 transition-colors duration-300"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
