"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives the §3.7 section reveal. Pairs with the CSS in globals.css.
 *
 * Guarantees content is ALWAYS visible:
 * 1. Tracks route changes via usePathname so returning to the home page
 *    from another page immediately marks all sections as revealed.
 * 2. Immediately marks sections in or above the viewport with data-revealed="".
 * 3. Uses a MutationObserver on <main> so components rendered after client navigation
 *    are never missed.
 * 4. Includes an immediate reveal and fast failsafe to ensure NO section ever stays blank.
 */
export default function SectionReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reveal = (el: Element) => {
      if (!el.hasAttribute("data-revealed")) {
        el.setAttribute("data-revealed", "");
      }
    };

    const revealAll = () => {
      document
        .querySelectorAll<HTMLElement>("main > section, main section[id]")
        .forEach(reveal);
    };

    // Immediately reveal on any route change or initial load
    revealAll();

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const checkAndObserve = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main > section, main section[id]"
        )
      );
      if (sections.length === 0) return null;

      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight || 800;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        // If the section is in, above, or near viewport, reveal immediately
        if (rect.top <= windowHeight + 150 || rect.bottom <= 0) {
          reveal(sec);
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          }
        },
        { rootMargin: "80px 0px", threshold: 0 }
      );

      sections.forEach((section) => {
        if (!section.hasAttribute("data-revealed")) {
          observer.observe(section);
        }
      });

      return observer;
    };

    const observer = checkAndObserve();

    // Fast failsafe: after 200ms, reveal everything so nothing is ever stuck blank
    const failsafe = window.setTimeout(() => {
      revealAll();
    }, 200);

    // Watch for DOM changes inside <main> so newly mounted components during route transitions are caught
    const mainEl = document.querySelector("main");
    let mutationObserver: MutationObserver | null = null;
    if (mainEl && typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(() => {
        revealAll();
        checkAndObserve();
      });
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    return () => {
      window.clearTimeout(failsafe);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
