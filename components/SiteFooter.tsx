"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { contact, logo, site, telHref, whatsappHref } from "@/lib/site";

/**
 * Section 10: Site Footer — Sri Maruthi Textiles
 *
 * Final brand statement reinforcing Sri Maruthi Textiles as a premium handloom
 * cotton textile manufacturer, with essential navigation and contact channels.
 *
 * Background: Deep Olive (#26351C)
 * Typography: Warm Ivory (#F5F1E8), Natural Beige (#E8DFCF)
 * Respects prefers-reduced-motion: reduce
 */

const EXPLORE_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#story" },
  { label: "Products", href: "#products" },
  { label: "Our Process", href: "#how-it-works" },
  { label: "Custom Solutions", href: "#commitments" },
] as const;

const CONNECT_LINKS = [
  { label: "Contact", href: "#contact" },
  { label: "Request a Sample", href: "#sample-kit" },
  { label: "Send an Enquiry", href: "#contact" },
] as const;

export default function SiteFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
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
      { threshold: 0.08 }
    );

    const el = footerRef.current;
    if (el) observer.observe(el);

    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: prefersReduced ? "auto" : "smooth",
      });
    }
  };

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      aria-label="Site Footer"
      className="relative bg-[#26351C] text-[#F5F1E8] overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 border-t border-[rgba(245,241,232,0.12)]"
    >
      {/* Subtle organic textile grain */}
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
        {/* =========================================================================
            TOP AREA: Brand Statement & Main Footer Grid
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-14 xl:gap-16">
          {/* Top Brand Identity Column (~45% Desktop) */}
          <div
            className={`w-full lg:w-[44%] xl:w-[42%] shrink-0 transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {/* Sri Maruthi Textiles Logo */}
            <a
              href="#top"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8DFCF] rounded-[2px]"
              aria-label={`${site.name} — Return to top`}
            >
              {logo.full ? (
                <Image
                  src={logo.full}
                  alt={site.name}
                  width={logo.fullSize?.width ?? 899}
                  height={logo.fullSize?.height ?? 944}
                  className="h-auto w-[185px] sm:w-[215px] lg:w-[235px] object-contain"
                />
              ) : (
                <span className="font-display text-[1.65rem] font-normal text-[#F5F1E8]">
                  {site.name}
                </span>
              )}
            </a>

            {/* Brand Descriptor */}
            <p className="mt-6 font-display font-normal text-[1.25rem] sm:text-[1.4rem] lg:text-[1.5rem] leading-[1.3] text-[#F5F1E8] max-w-[430px]">
              Handloom cotton textiles, crafted for businesses that value quality.
            </p>

            {/* Supporting Statement */}
            <p className="mt-3.5 text-[14px] sm:text-[14.5px] leading-[1.65] text-[#E8DFCF]/80 max-w-[440px] font-normal">
              From traditional craftsmanship to custom textile requirements, we
              create cotton products with care, consistency and purpose.
            </p>
          </div>

          {/* Main Navigation Grid (3 Columns) */}
          <div className="w-full lg:flex-1 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-8 xl:gap-10 pt-2 lg:pt-3">
            {/* Column 1: EXPLORE */}
            <nav
              aria-label="Explore navigation"
              className={`transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: prefersReduced ? "0ms" : "120ms" }}
            >
              <h3 className="font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/70">
                EXPLORE
              </h3>
              <ul className="mt-4 sm:mt-5 space-y-2.5">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-[14px] sm:text-[14.5px] text-[#E8DFCF]/85 hover:text-[#FAF8F3] transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                    >
                      <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 2: CONNECT */}
            <nav
              aria-label="Connect navigation"
              className={`transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: prefersReduced ? "0ms" : "200ms" }}
            >
              <h3 className="font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/70">
                CONNECT
              </h3>
              <ul className="mt-4 sm:mt-5 space-y-2.5">
                {CONNECT_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center text-[14px] sm:text-[14.5px] text-[#E8DFCF]/85 hover:text-[#FAF8F3] transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                    >
                      <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3: CONTACT */}
            <div
              className={`transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: prefersReduced ? "0ms" : "280ms" }}
            >
              <h3 className="font-sans text-[11px] sm:text-[11.5px] font-semibold tracking-[0.24em] uppercase text-[#E8DFCF]/70">
                CONTACT
              </h3>
              <ul className="mt-4 sm:mt-5 space-y-3.5 text-[14px] sm:text-[14.5px] text-[#E8DFCF]/85">
                <li>
                  <a
                    href={telHref(contact.phone.e164)}
                    className="group block hover:text-[#FAF8F3] transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                  >
                    <span className="block text-[11px] uppercase tracking-wider text-[#E8DFCF]/60 font-sans">
                      Phone
                    </span>
                    <span className="font-medium text-[#F5F1E8] group-hover:underline underline-offset-4">
                      {contact.phone.display}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappHref(contact.whatsapp.e164)}
                    className="group block hover:text-[#FAF8F3] transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                  >
                    <span className="block text-[11px] uppercase tracking-wider text-[#E8DFCF]/60 font-sans">
                      WhatsApp
                    </span>
                    <span className="font-medium text-[#F5F1E8] group-hover:underline underline-offset-4">
                      {contact.whatsapp.display}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:srimaruthitexthoorathu@gmail.com"
                    className="group block hover:text-[#FAF8F3] transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
                  >
                    <span className="block text-[11px] uppercase tracking-wider text-[#E8DFCF]/60 font-sans">
                      Email
                    </span>
                    <span className="font-medium text-[#F5F1E8] break-all group-hover:underline underline-offset-4">
                      srimaruthitexthoorathu@gmail.com
                    </span>
                  </a>
                </li>
                <li className="pt-1 text-[12px] text-[#E8DFCF]/65">
                  Serving wholesale, hospitality &amp; commercial clients across
                  Kerala &amp; Tamil Nadu.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FINAL BRAND STATEMENT: Visual Closing Statement
            ========================================================================= */}
        <div
          className={`mt-16 sm:mt-20 lg:mt-24 pt-10 sm:pt-12 border-t border-[rgba(245,241,232,0.12)] transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: prefersReduced ? "0ms" : "340ms" }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-[#A95738]">
                SRI MARUTHI TEXTILES
              </p>
              <h2 className="mt-3 font-display font-normal text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[3.85rem] leading-[1.05] tracking-[-0.015em] text-[#F5F1E8]">
                Woven with craft.<br />
                <span className="text-[#E8DFCF]/85">Made for your business.</span>
              </h2>
            </div>
            <div className="max-w-[340px]">
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#E8DFCF]/70 font-normal">
                Authentic handloom cotton textiles produced with disciplined
                craftsmanship for hotels, retailers and commercial partners.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM BAR: Copyright, Brand Mark & Back to Top Control
            ========================================================================= */}
        <div
          className={`mt-12 sm:mt-14 pt-8 border-t border-[rgba(245,241,232,0.12)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#E8DFCF]/75 transition-all duration-[750ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: prefersReduced ? "0ms" : "420ms" }}
        >
          {/* Copyright */}
          <p className="text-center sm:text-left">
            © 2026 Sri Maruthi Textiles. All rights reserved.
          </p>

          {/* Textile Craft Descriptor */}
          <p className="font-sans text-[12px] tracking-wide text-[#E8DFCF]/60 text-center">
            Handloom Cotton Textiles
          </p>

          {/* Back to top control */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[11.5px] uppercase tracking-[0.18em] font-semibold text-[#E8DFCF]/80 hover:text-[#FAF8F3] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E8DFCF] rounded px-1.5 py-1"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-250 ease-out group-hover:-translate-y-1 font-sans text-[13px]"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
