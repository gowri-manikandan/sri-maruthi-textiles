/**
 * Single source of truth for company details and navigation.
 * Phase 14 swaps the [[PLACEHOLDER]] values here — not in components.
 */
export const site = {
  name: "Sri Maruthi Textiles",
  serviceArea: "Kerala & Tamil Nadu",

  /** Hero copy — confirm wording in Phase 14. */
  hero: {
    label: "Wholesale Cotton Towel Manufacturer · Kerala & Tamil Nadu",
    headline: "Cotton Towels, Made for Business That Lasts",
    subtext:
      "We manufacture bath, hand and bulk cotton towels for wholesalers across Kerala and Coimbatore — consistent quality, direct-from-mill pricing, delivered on the date we commit.",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

/** Primary CTA target — the enquiry form, built in Phase 10. */
export const ENQUIRY_HREF = "#contact";
