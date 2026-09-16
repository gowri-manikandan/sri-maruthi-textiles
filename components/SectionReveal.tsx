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
 *   3. Broken or slow observer → two independent failsafes, below.
 *
 * On the failsafes. The first version only fired when NOT ONE entry had been
 * delivered. That turned out to be too weak: an observer can deliver its
 * initial batch and then go silent — observed in a tab that produces no
 * animation frames, where the two in-view sections revealed, the "delivered"
 * flag went true, and the remaining eight stayed at opacity 0 permanently.
 * A page that renders blank below the fold is a far worse outcome than one
 * that skips an animation, so the late sweep is now unconditional.
 */

/** Catches an observer that never delivers anything at all. */
const FAILSAFE_MS = 1500;

/** Catches an observer that delivers once and then stops. Unconditional: by
 *  this point a working observer has already revealed everything on screen,
 *  so the sweep is a no-op for it. */
const HARD_FAILSAFE_MS = 8000;

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

    const hardFailsafe = window.setTimeout(() => {
      revealAll();
      observer.disconnect();
    }, HARD_FAILSAFE_MS);

    return () => {
      window.clearTimeout(failsafe);
      window.clearTimeout(hardFailsafe);
      observer.disconnect();
    };
  }, []);

  return null;
}
