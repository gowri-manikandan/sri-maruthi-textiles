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
    { label: "Reviews", href: isHomePage ? "#reviews" : "/#reviews" },
    { label: "Custom Orders", href: isHomePage ? "#commitments" : "/#commitments" },
    { label: "FAQs", href: isHomePage ? "#faq" : "/#faq" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  // On desktop, the brand logo "Sri Maruthi Textiles" already links to Home.
  // Removing redundant "Home" prevents collision with the brand logo on laptop screens.
  const desktopNavItems = navItems.filter((item) => item.label !== "Home");

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
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3 lg:gap-4">
          {/* Logo emblem + wordmark (Primary Home button) */}
          <Link
            href="/"
            className={`shrink-0 inline-flex items-center gap-2.5 sm:gap-3 leading-none transition-colors duration-400 ${
              solid ? "text-[#29251F]" : "text-[#F5F1E8]"
            }`}
            onClick={() => setOpen(false)}
            aria-label="Sri Maruthi Textiles - Home"
          >
            {logo.emblem ? (
              <>
                <Image
                  src={logo.emblem}
                  alt=""
                  width={logo.emblemSize?.width ?? 512}
                  height={logo.emblemSize?.height ?? 512}
                  priority
                  className="size-8 sm:size-9 w-auto object-contain drop-shadow-sm shrink-0"
                />
                <span className="sr-only">{site.name}</span>
                <span
                  aria-hidden="true"
                  className="font-display text-[1.05rem] xl:text-[1.22rem] font-normal tracking-tight whitespace-nowrap"
                >
                  {site.name}
                </span>
              </>
            ) : (
              <span className="font-display text-[1.05rem] xl:text-[1.22rem] font-normal whitespace-nowrap">
                {site.name}
              </span>
            )}
          </Link>

          {/* Desktop Navigation + Request Enquiry CTA (Grouped in single flex row to prevent any overlap) */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 shrink-0">
            <ul className="flex items-center gap-2 xl:gap-3.5 2xl:gap-5 shrink-0">
              {desktopNavItems.map((link) => (
                <li key={link.label} className="shrink-0">
                  <Link
                    href={link.href}
                    className={`link-underline text-[12px] xl:text-[13px] 2xl:text-[13.5px] font-medium tracking-wide whitespace-nowrap transition-colors duration-300 motion-reduce:transition-none ${
                      link.isCurrent
                        ? "text-[#40572D] font-semibold"
                        : solid
                        ? "text-[#5a534c] hover:text-[#29251F]"
                        : "text-[#F5F1E8]/85 hover:text-[#F5F1E8]"
                    }`}
                  >
                    {link.label === "Custom Orders" ? (
                      <>
                        <span className="inline xl:hidden">Custom</span>
                        <span className="hidden xl:inline">Custom Orders</span>
                      </>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Request Enquiry button */}
            <Link
              href={enquiryHref}
              className="group inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-1.5 xl:py-2 rounded-md bg-[#40572D] text-[#F5F1E8] hover:bg-[#4d6936] text-[12px] xl:text-[13px] font-medium tracking-wide whitespace-nowrap transition-all duration-250 shadow-sm border border-[#40572D] shrink-0"
            >
              <span>Request Enquiry</span>
              <span
                aria-hidden="true"
                className="hidden xl:inline-block transition-transform duration-250 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>

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
