"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ENQUIRY_HREF, navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /* Escape closes the mobile menu — keyboard users must never be trapped. */
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav aria-label="Main" className="container-page">
        <div className="flex h-8 items-center justify-between gap-3">
          {/* Wordmark placeholder — swap for a real logo file in Phase 14. */}
          <a
            href="#top"
            className="font-display text-h3 leading-none text-ink"
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
                  className="text-small text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={ENQUIRY_HREF} className="btn btn-primary hidden lg:inline-flex">
              Enquire Now
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-6 items-center justify-center rounded text-ink lg:hidden"
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
