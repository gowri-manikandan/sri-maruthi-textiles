"use client";

import { useEffect, useRef, useState } from "react";
import EnquiryForm from "@/components/EnquiryForm";
import { contact, telHref, whatsappHref } from "@/lib/site";

/**
 * Section 9: "Contact & Enquiry" — Sri Maruthi Textiles
 *
 * Primary B2B conversion section for commercial inquiries from hotels, resorts,
 * retailers, and distributors.
 *
 * Background: Deep Olive (#26351C)
 * Typography: Warm Ivory (#F5F1E8) & Natural Beige (#E8DFCF)
 * Respects prefers-reduced-motion: reduce
 */
export default function ContactSection() {
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
      { threshold: 0.12 }
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
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-[#26351C] py-[85px] sm:py-[100px] lg:py-[120px] text-[#F5F1E8] overflow-hidden"
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
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-14 xl:gap-16">
          {/* =========================================================================
              LEFT COLUMN: Editorial Narrative & Contact Details (~45% Desktop)
              ========================================================================= */}
          <div
            className={`w-full lg:w-[45%] xl:w-[44%] shrink-0 transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <div className="max-w-[480px]">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/80">
                  LET’S WORK TOGETHER
                </span>
                <span
                  className="h-px w-8 sm:w-12 bg-[rgba(245,241,232,0.25)]"
                  aria-hidden="true"
                />
              </div>

              {/* Main Heading */}
              <h2
                id="contact-heading"
                className="mt-4 sm:mt-5 font-display font-normal text-[2.5rem] sm:text-[3.15rem] lg:text-[3.55rem] xl:text-[3.75rem] leading-[1.04] tracking-[-0.015em] text-[#F5F1E8]"
              >
                Tell Us What You’re Looking For
              </h2>

              {/* Description */}
              <p className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.65] text-[#E8DFCF]/90 font-normal">
                Whether you need towels for a hotel, resort, retail business or
                a custom textile requirement, tell us what you have in mind. Our
                team will discuss your requirements and the next steps with you.
              </p>

              {/* Supporting Line */}
              <p className="mt-4 text-[14px] sm:text-[14.5px] leading-[1.6] text-[#E8DFCF]/75 font-medium italic">
                Share as much detail as you have. We’ll take it from there.
              </p>

              {/* Direct Contact Channels */}
              <div className="mt-8 sm:mt-10 pt-7 border-t border-[rgba(245,241,232,0.18)]">
                <p className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-[#A95738]">
                  Direct Inquiries
                </p>

                <ul className="mt-4 space-y-3.5 text-[14.5px] sm:text-[15px] text-[#F5F1E8]">
                  {/* Phone */}
                  <li>
                    <a
                      href={telHref(contact.phone.e164)}
                      className="group inline-flex items-center gap-3 text-[#F5F1E8] hover:text-[#FAF8F3] transition-colors"
                    >
                      <span className="size-8 rounded-[2px] bg-[rgba(245,241,232,0.08)] border border-[rgba(245,241,232,0.16)] flex items-center justify-center text-[#E8DFCF] group-hover:border-[#E8DFCF] transition-colors">
                        <svg
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[11px] uppercase tracking-wider text-[#E8DFCF]/70 font-sans">
                          Phone
                        </span>
                        <span className="font-medium underline underline-offset-4">
                          {contact.phone.display}
                        </span>
                      </span>
                    </a>
                  </li>

                  {/* WhatsApp */}
                  <li>
                    <a
                      href={whatsappHref(contact.whatsapp.e164)}
                      className="group inline-flex items-center gap-3 text-[#F5F1E8] hover:text-[#FAF8F3] transition-colors"
                    >
                      <span className="size-8 rounded-[2px] bg-[rgba(245,241,232,0.08)] border border-[rgba(245,241,232,0.16)] flex items-center justify-center text-[#E8DFCF] group-hover:border-[#E8DFCF] transition-colors">
                        <svg
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[11px] uppercase tracking-wider text-[#E8DFCF]/70 font-sans">
                          WhatsApp
                        </span>
                        <span className="font-medium underline underline-offset-4">
                          {contact.whatsapp.display}
                        </span>
                      </span>
                    </a>
                  </li>

                  {/* Email */}
                  <li>
                    <a
                      href="mailto:srimaruthitexthoorathu@gmail.com"
                      className="group inline-flex items-center gap-3 text-[#F5F1E8] hover:text-[#FAF8F3] transition-colors"
                    >
                      <span className="size-8 rounded-[2px] bg-[rgba(245,241,232,0.08)] border border-[rgba(245,241,232,0.16)] flex items-center justify-center text-[#E8DFCF] group-hover:border-[#E8DFCF] transition-colors">
                        <svg
                          className="size-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                      <span>
                        <span className="block text-[11px] uppercase tracking-wider text-[#E8DFCF]/70 font-sans">
                          Email
                        </span>
                        <span className="font-medium underline underline-offset-4 break-all">
                          srimaruthitexthoorathu@gmail.com
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>

                <p className="mt-5 text-[12.5px] text-[#E8DFCF]/70">
                  Serving wholesale, hospitality and commercial buyers across
                  Kerala &amp; Tamil Nadu.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Clean Warm-Ivory Form (~55% Desktop)
              ========================================================================= */}
          <div
            className={`w-full lg:flex-1 transition-all duration-[750ms] delay-[160ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
