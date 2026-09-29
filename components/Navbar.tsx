"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { ENQUIRY_HREF, logo, navLinks, site } from "@/lib/site";

/**
 * Navbar — DESIGN_BRIEF.md §4.1.
 *
 * Fixed, and transparent while the hero photograph is behind it; solid `bg`
 * with a bottom hairline once scrolled past. That is what lets the hero go
 * genuinely full-bleed rather than starting 64px down the page.
 *
 * The flip is driven by an IntersectionObserver on the hero's `data-hero`
 * attribute rather than a scroll-position listener: no work on the main thread
 * per scroll frame, and it stays correct if the hero's height ever changes.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  /* Escape closes the mobile menu — keyboard users must never be trapped. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const hero = document.querySelector("[data-hero]");
    /* No hero on the page means nothing to be transparent over — stay solid. */
    if (!hero) {
      setPastHero(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      /* Shrink the root by the 64px navbar so the flip happens exactly as the
         hero's bottom edge slides under it, not a screenful early. */
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  /* The open mobile panel needs an opaque ground whatever is behind it. */
  const solid = pastHero || open;

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ease-out motion-reduce:transition-none ${
        solid
          ? "border-[#E8DFCF] bg-[#F5F1E8]/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-page">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Logo emblem + wordmark */}
          <a
            href="#top"
            className={`inline-flex items-center gap-2.5 sm:gap-3 leading-none transition-colors duration-400 ${
              solid ? "text-[#29251F]" : "text-[#F5F1E8]"
            }`}
            onClick={() => setOpen(false)}
          >
            {logo.emblem ? (
              <>
                <Image
                  src={logo.emblem}
                  alt=""
                  width={logo.emblemSize?.width ?? 512}
                  height={logo.emblemSize?.height ?? 512}
                  priority
                  className="size-8 sm:size-9 w-auto object-contain drop-shadow-sm"
                />
                <span className="sr-only">{site.name}</span>
                <span
                  aria-hidden="true"
                  className="font-display text-[1.15rem] sm:text-[1.28rem] font-normal tracking-tight"
                >
                  {site.name}
                </span>
              </>
            ) : (
              <span className="font-display text-[1.15rem] sm:text-[1.28rem] font-normal">
                {site.name}
              </span>
            )}
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-3.5 md:gap-4 lg:gap-6 xl:gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`link-underline text-[13px] xl:text-[14px] font-medium tracking-wide transition-colors duration-300 motion-reduce:transition-none ${
                    solid
                      ? "text-[#5a534c] hover:text-[#29251F]"
                      : "text-[#F5F1E8]/85 hover:text-[#F5F1E8]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Desktop Request Enquiry button */}
            <a
              href={ENQUIRY_HREF}
              className="group hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#40572D] text-[#F5F1E8] hover:bg-[#4d6936] text-[13.5px] font-medium tracking-wide transition-all duration-250 shadow-sm border border-[#40572D]"
            >
              <span>Request Enquiry</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-250 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex size-10 items-center justify-center rounded-md transition-colors lg:hidden ${
                solid
                  ? "text-[#29251F] hover:bg-[#E8DFCF]/50"
                  : "text-[#F5F1E8] hover:bg-white/10"
              }`}
            >
              {open ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-[#E8DFCF] bg-[#F5F1E8] px-4 py-5 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center text-[15px] font-medium text-[#29251F] hover:text-[#40572D] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ENQUIRY_HREF}
            onClick={() => setOpen(false)}
            className="group mt-4 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#40572D] px-4 py-3 text-center text-[15px] font-medium text-[#F5F1E8] transition-colors hover:bg-[#4d6936]"
          >
            <span>Request Enquiry</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-250 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
