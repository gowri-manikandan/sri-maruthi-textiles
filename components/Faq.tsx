"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";

interface FaqItem {
  num: string;
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    num: "01",
    q: "What types of textiles do you manufacture?",
    a: "With over 20 years of handloom weaving experience, we manufacture durable cotton blend towels and textile products for hospitality, retail and wholesale business requirements. We also craft custom textiles tailored to your exact specifications.",
  },
  {
    num: "02",
    q: "Can I request custom sizes or colours?",
    a: "Yes. We can discuss requirements such as custom sizes, colours, borders and weave specifications depending on the product and order requirements.",
  },
  {
    num: "03",
    q: "Can I receive samples before placing an order?",
    a: "Yes. You can request samples to evaluate the fabric, weave, feel and finish before discussing your order.",
  },
  {
    num: "04",
    q: "Do you supply to hotels and resorts?",
    a: "Yes. For over 20 years, our cotton blend textile products have been supplied to hotels, resorts, wholesalers and commercial businesses. Share your specifications with us and our team will provide a tailored quote and solution.",
  },
  {
    num: "05",
    q: "How do I discuss a bulk or business requirement?",
    a: "Use the enquiry form below or contact our team directly. Share your product requirements, approximate quantity and any specifications you already have, and we can discuss the next steps.",
  },
  {
    num: "06",
    q: "Can you develop a textile according to our requirements?",
    a: "We can discuss custom requirements including size, colour, borders and weave specifications. The final solution depends on the product and requirements discussed with our team.",
  },
];

/**
 * Section 8: "FAQ" — Sri Maruthi Textiles
 *
 * Heading: "Questions, Answered"
 *
 * Premium, minimal editorial FAQ section:
 * - Left column (~38%): Eyebrow, Fraunces serif heading, short description, and subtle transition link to enquiry
 * - Right column (~62%): Clean accessible accordion list with thin hairline dividers, small terracotta numerals,
 *   smooth +/× toggle rotation, and comfortable typography
 *
 * Background: Warm Ivory (#F5F1E8)
 * Respects prefers-reduced-motion: reduce
 */
export default function Faq() {
  const [sectionRef, isVisible] = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open initially
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPrefersReduced(
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
    }
  }, []);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      aria-labelledby="faq-heading"
      className="relative bg-[#F5F1E8] py-[80px] sm:py-[95px] lg:py-[115px] text-[#29251F] overflow-hidden"
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
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 xl:gap-20">
          {/* =========================================================================
              LEFT COLUMN: Header & Editorial Transition (~38% Desktop Width)
              ========================================================================= */}
          <div className="w-full lg:w-[38%] xl:w-[36%] shrink-0">
            <div className="lg:sticky lg:top-28">
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 transition-all duration-[600ms] delay-[100ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#40572D]">
                  FAQ
                </span>
                <span
                  className="h-px w-8 sm:w-12 bg-[#40572D]/35"
                  aria-hidden="true"
                />
              </div>

              {/* Main Heading */}
              <h2
                id="faq-heading"
                className={`mt-4 sm:mt-5 font-display font-normal text-[2.5rem] sm:text-[2.9rem] lg:text-[3.35rem] leading-[1.08] tracking-[-0.015em] text-[#29251F] transition-all duration-[750ms] delay-[180ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[20px]"
                }`}
              >
                Questions,
                <br />
                Answered
              </h2>

              {/* Description */}
              <p
                className={`mt-4 sm:mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#29251F]/80 font-normal max-w-[420px] transition-all duration-[700ms] delay-[260ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                Looking for specific sizes, colours, finishes or quantities?
                Here are answers to some common questions. If you have a specific
                requirement, our team is happy to discuss it with you.
              </p>

              {/* Transition to Enquiry Section */}
              <div
                className={`mt-7 sm:mt-8 pt-6 border-t border-[rgba(41,37,31,0.12)] transition-all duration-[600ms] delay-[340ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[15px]"
                }`}
              >
                <p className="text-[13.5px] sm:text-[14px] text-[#29251F]/70">
                  Still have a question?
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-1.5 mt-1.5 font-medium text-[15px] sm:text-[15.5px] text-[#40572D] hover:text-[#26351C] transition-colors duration-250 link-underline"
                >
                  <span>Tell us what you need</span>
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

          {/* =========================================================================
              RIGHT COLUMN: Vertical Accordion List (~62% Desktop Width)
              ========================================================================= */}
          <div className="w-full lg:flex-1">
            <div className="border-t border-[rgba(41,37,31,0.14)]">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                const delayMs = 150 + idx * 80;

                return (
                  <div
                    key={item.num}
                    className={`border-b border-[rgba(41,37,31,0.14)] transition-all duration-[650ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-[20px]"
                    }`}
                    style={{
                      transitionDelay: prefersReduced ? "0ms" : `${delayMs}ms`,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(idx)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.num}`}
                      id={`faq-question-${item.num}`}
                      className="group w-full py-5 sm:py-6 flex items-start justify-between gap-4 sm:gap-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#40572D] focus-visible:ring-offset-2 rounded-[2px]"
                    >
                      <div className="flex items-start gap-3 sm:gap-4 flex-1">
                        {/* Refined Step Number */}
                        <span className="font-sans text-[11.5px] sm:text-[12px] font-bold tracking-[0.18em] text-[#A95738] shrink-0 mt-1">
                          {item.num}
                        </span>

                        {/* Question Text */}
                        <span
                          className={`font-sans text-[17px] sm:text-[18.5px] lg:text-[19px] font-medium leading-[1.35] transition-colors duration-250 ${
                            isOpen
                              ? "text-[#40572D]"
                              : "text-[#29251F] group-hover:text-[#40572D]"
                          }`}
                        >
                          {item.q}
                        </span>
                      </div>

                      {/* Accessible +/- Toggle Icon */}
                      <span
                        aria-hidden="true"
                        className={`shrink-0 size-[26px] sm:size-[28px] rounded-full border border-[rgba(41,37,31,0.18)] flex items-center justify-center transition-all duration-300 ease-out mt-0.5 ${
                          isOpen
                            ? "bg-[#40572D] text-[#F5F1E8] border-[#40572D]"
                            : "bg-[#F5F1E8] text-[#40572D] group-hover:border-[#40572D]"
                        }`}
                      >
                        <span
                          className={`inline-block font-sans text-[16px] sm:text-[17px] leading-none transition-transform duration-300 ease-out select-none ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </button>

                    {/* Smooth Accordion Answer Body */}
                    <div
                      id={`faq-answer-${item.num}`}
                      role="region"
                      aria-labelledby={`faq-question-${item.num}`}
                      className={`grid transition-all duration-350 ease-out motion-reduce:transition-none ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-7 sm:pl-8 pr-4 pb-5 sm:pb-6 text-[15px] sm:text-[15.5px] leading-[1.65] text-[#29251F]/75 font-normal">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
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
