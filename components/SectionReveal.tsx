"use client";

import { useEffect } from "react";

/**
 * Drives the §3.7 section reveal. Pairs with the CSS in globals.css.
 *
 * Three guarantees, in priority order — content being visible always beats
 * content being animated:
 *
 *   1. No JavaScript  → the arming script in <body> never runs, so the CSS
 *                       never hides anything and the page renders in full.
 *   2. Reduced motion → everything is revealed immediately. The CSS also
 *                       neutralises the transition independently.
 *   3. Broken or slow observer → a failsafe reveals everything. It only fires
 *                       if NOT ONE entry has been delivered, so a working
 *                       observer is never overridden mid-scroll. This is not
 *                       hypothetical: IntersectionObserver delivers nothing in
 *                       a document that produces no animation frames.
 */
const FAILSAFE_MS = 1500;

export default function SectionReveal() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    );
    if (sections.length === 0) return;

    const reveal = (el: Element) => el.setAttribute("data-revealed", "");
    const revealAll = () => sections.forEach(reveal);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    let delivered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        }
      },
      /* Trigger a little before the section's top edge reaches the bottom of
         the viewport, so the movement finishes as it comes into view rather
         than starting once it is already fully on screen. */
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    const failsafe = window.setTimeout(() => {
      if (!delivered) revealAll();
    }, FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return null;
}
