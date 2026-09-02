"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ENQUIRY_HREF, navLinks, site } from "@/lib/site";

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
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 motion-reduce:transition-none ${
        solid
          ? "border-border bg-bg/95 backdrop-blur-sm"
          : "on-dark border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-page">
        <div className="flex h-8 items-center justify-between gap-3">
          {/* Wordmark placeholder — swap for a real logo file in Phase 14. */}
          <a
            href="#top"
            className={`font-display text-h3 leading-none ${
              solid ? "text-ink" : "text-bg"
            }`}
            onClick={() => setOpen(false)}
          >
            {site.name}
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-small transition-colors motion-reduce:transition-none ${
                    solid
                      ? "text-muted hover:text-ink"
                      : "text-bg/80 hover:text-bg"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Indigo-on-dark is only 1.68:1, so over the hero the brand button
                inverts to a light fill with an indigo label (§4.2). */}
            <a
              href={ENQUIRY_HREF}
              className={`btn hidden lg:inline-flex ${
                solid ? "btn-primary" : "btn-on-dark"
              }`}
            >
              Enquire Now
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex size-6 items-center justify-center rounded lg:hidden ${
                solid ? "text-ink" : "text-bg"
              }`}
            >
              {open ? (
                <X aria-hidden="true" className="size-3" />
              ) : (
                <Menu aria-hidden="true" className="size-3" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-border py-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-6 items-center text-body text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ENQUIRY_HREF}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-2 w-full"
          >
            Enquire Now
          </a>
        </div>
      </nav>
    </div>
  );
}
