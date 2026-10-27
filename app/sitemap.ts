import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Meaningful last modification dates for canonical public pages.
 * Update these dates whenever content on the respective pages is meaningfully changed.
 */
const LAST_MODIFIED_HOMEPAGE = new Date("2026-10-13");
const LAST_MODIFIED_PRODUCTS = new Date("2026-10-13");
const LAST_MODIFIED_WHOLESALE = new Date("2026-10-26");
const LAST_MODIFIED_CHECKED_TOWELS = new Date("2026-10-26");
const LAST_MODIFIED_ABOUT_US = new Date("2026-10-27");

/**
 * DESIGN_BRIEF.md §6. Served at /sitemap.xml by Next convention.
 *
 * Includes the canonical public routes:
 * 1. Homepage ("/")
 * 2. Products catalogue ("/products")
 * 3. Wholesale landing page ("/wholesale-cotton-towels")
 * 4. Checked towels landing page ("/checked-cotton-towels")
 * 5. About us page ("/about-us")
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
    {
      url: `${SITE_URL}/wholesale-cotton-towels`,
      lastModified: LAST_MODIFIED_WHOLESALE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/checked-cotton-towels`,
      lastModified: LAST_MODIFIED_CHECKED_TOWELS,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about-us`,
      lastModified: LAST_MODIFIED_ABOUT_US,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}

