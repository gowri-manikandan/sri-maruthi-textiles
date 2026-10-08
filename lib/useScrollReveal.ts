"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  fallbackTimeout?: number;
}

/**
 * Universal, fail-safe scroll reveal hook.
 *
 * Guarantees content is NEVER stuck invisible (opacity: 0):
 * 1. Immediately marks visible if prefers-reduced-motion or no IntersectionObserver.
 * 2. Checks element position on mount: if already in, above, or within 150px of the
 *    viewport (e.g. after client navigation, scroll restoration, or hash jump), reveals instantly.
 * 3. Uses a generous rootMargin and zero threshold for smooth entrance.
 * 4. Includes a fast failsafe timer so content is guaranteed visible even if
 *    scroll events or observer callbacks are delayed.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    threshold = 0,
    rootMargin = "80px 0px",
    fallbackTimeout = 500,
  } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) {
      setIsVisible(true);
      return;
    }

    // Check if element is already in or near viewport or already scrolled past
    const checkImmediate = () => {
      const rect = el.getBoundingClientRect();
      const vh =
        window.innerHeight || document.documentElement.clientHeight || 800;
      // If the top is above or near bottom of viewport, or element is already above viewport
      if (rect.top <= vh + 150 || rect.bottom <= 0) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkImmediate()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    // Guaranteed failsafe: never leave content invisible
    const failsafe = setTimeout(() => {
      setIsVisible(true);
    }, fallbackTimeout);

    return () => {
      clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [threshold, rootMargin, fallbackTimeout]);

  return [ref, isVisible] as const;
}
