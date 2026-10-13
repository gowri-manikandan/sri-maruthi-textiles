import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Meaningful last modification dates for canonical public pages.
 * Update these dates whenever content on the respective pages is meaningfully changed.
 */
const LAST_MODIFIED_HOMEPAGE = new Date("2026-10-13");
const LAST_MODIFIED_PRODUCTS = new Date("2026-10-13");

/**
 * DESIGN_BRIEF.md §6. Served at /sitemap.xml by Next convention.
 *
 * Includes the canonical public routes:
 * 1. Homepage ("/")
 * 2. Products catalogue ("/products")
 *
 * In-page anchors (e.g. #contact, #faq) are not listed because fragments
 * are not separate URLs and search engines ignore them in a sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}`,
      lastModified: LAST_MODIFIED_HOMEPAGE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: LAST_MODIFIED_PRODUCTS,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}

