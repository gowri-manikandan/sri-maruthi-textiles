"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logo, site } from "@/lib/site";

/**
 * Navbar — Multi-page & in-page anchor adaptive navigation
 */
export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [hidden, setHidden] = useState(false);

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
    if (!hero) {
      setPastHero(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  /* Smart Hide on Scroll Down, Reveal on Scroll Up (threshold: 10px) */
  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    let ticking = false;
    const threshold = 10; // 8-12px threshold to ignore micro-scrolls

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Never hide if mobile menu is open
          if (open) {
            setHidden(false);
            document.documentElement.removeAttribute("data-nav-hidden");
            lastScrollY = currentScrollY;
            ticking = false;
            return;
          }

          // Top of page: always show
          if (currentScrollY <= 40) {
            setHidden(false);
            document.documentElement.removeAttribute("data-nav-hidden");
          } else {
            const diff = currentScrollY - lastScrollY;
            if (diff > threshold) {
              // Scrolling DOWN: slide upward smoothly out of the viewport
              setHidden(true);
              document.documentElement.setAttribute("data-nav-hidden", "true");
            } else if (diff < -threshold) {
              // Scrolling UP: reveal smoothly
              setHidden(false);
              document.documentElement.removeAttribute("data-nav-hidden");
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeAttribute("data-nav-hidden");
    };
  }, [open]);

  // Route change resets navbar to visible
  useEffect(() => {
    setHidden(false);
    setOpen(false);
    document.documentElement.removeAttribute("data-nav-hidden");
  }, [pathname]);

  const solid = !isHomePage || pastHero || open;

  const navItems = [
    { label: "Home", href: isHomePage ? "#top" : "/" },
    { label: "About", href: isHomePage ? "#story" : "/#story" },
    { label: "Products", href: "/products", isCurrent: pathname === "/products" },
    { label: "Process", href: isHomePage ? "#how-it-works" : "/#how-it-works" },
    { label: "Custom Orders", href: isHomePage ? "#commitments" : "/#commitments" },
    { label: "FAQs", href: isHomePage ? "#faq" : "/#faq" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  const enquiryHref = isHomePage ? "#contact" : "/#contact";

  return (
    <header
      id="brand-navbar"
      onFocus={() => {
        setHidden(false);
        document.documentElement.removeAttribute("data-nav-hidden");
      }}
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
      }}
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        hidden
          ? "opacity-90 pointer-events-none"
          : "opacity-100 pointer-events-auto"
      } ${
        solid
          ? "border-[#E8DFCF] bg-[#F5F1E8]/95 backdrop-blur-md shadow-xs"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-page">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-4">
          {/* Logo emblem + wordmark */}
          <Link
            href="/"
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
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-3.5 md:gap-4 lg:gap-6 xl:gap-7 lg:flex">
            {navItems.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`link-underline text-[13px] xl:text-[14px] font-medium tracking-wide transition-colors duration-300 motion-reduce:transition-none ${
                    link.isCurrent
                      ? "text-[#40572D] font-semibold"
                      : solid
                      ? "text-[#5a534c] hover:text-[#29251F]"
                      : "text-[#F5F1E8]/85 hover:text-[#F5F1E8]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Desktop Request Enquiry button */}
            <Link
              href={enquiryHref}
              className="group hidden lg:inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#40572D] text-[#F5F1E8] hover:bg-[#4d6936] text-[13.5px] font-medium tracking-wide transition-all duration-250 shadow-sm border border-[#40572D]"
            >
              <span>Request Enquiry</span>
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-250 group-hover:translate-x-1.5"
              >
                →
              </span>
            </Link>

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
            {navItems.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-[44px] items-center text-[15px] font-medium transition-colors ${
                    link.isCurrent
                      ? "text-[#40572D] font-semibold"
                      : "text-[#29251F] hover:text-[#40572D]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={enquiryHref}
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
          </Link>
        </div>
      </nav>
    </header>
  );
}
