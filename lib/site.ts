/**
 * Single source of truth for company details and navigation.
 * Phase 14 swaps the [[PLACEHOLDER]] values here — not in components.
 */
export const site = {
  name: "Sri Maruthi Textiles",
  serviceArea: "Kerala & Tamil Nadu",

  /** Hero copy (DESIGN_BRIEF.md §4.2) — confirm wording in Phase 14. */
  hero: {
    /** Rendered uppercase by the .eyebrow utility, so write it in sentence case. */
    eyebrow: "[[X]]+ years of cotton towel manufacture",
    headline: "Cotton Towels, Made for Business That Lasts",
    subtext:
      "We manufacture bath, hand and bulk cotton towels for wholesalers across Kerala and Coimbatore — consistent quality, direct-from-mill pricing, delivered on the date we commit.",
  },

  /** Action band copy (DESIGN_BRIEF.md §4.3).
   *  The brief suggests this line, but it makes three claims about the business
   *  — ready stock, low minimums, dispatch from Coimbatore. Confirm all three
   *  are true before launch; none of them are ours to assert. */
  actionBand: {
    line: "Ready stock, low minimums, samples dispatched from Coimbatore.",
    cta: "Request Sample Kit",
  },

  /** Differentiators (DESIGN_BRIEF.md §4.4) — exactly three, per the brief.
   *  The three claims come from the brief itself; the wording is kept close to
   *  it deliberately rather than embellished. Confirm in Phase 14. */
  differentiators: {
    eyebrow: "Why us",
    heading: "What makes us different",
    cards: [
      {
        id: "mill",
        title: "Direct from the mill",
        body: "Bulk pricing with no middleman markup — you buy from the people who make the towel.",
      },
      {
        id: "quality",
        title: "Consistent quality",
        body: "GSM, cotton grade and stitching are checked lot by lot, so the tenth order matches the first.",
      },
      {
        id: "delivery",
        title: "Delivery you can plan around",
        body: "A committed date at the time of order, across Kerala and Coimbatore.",
      },
    ],
  },
} as const;

/**
 * Contact details (DESIGN_BRIEF.md §4.3, §4.12, §4.13).
 *
 * `e164` stays empty until Phase 14 supplies the real numbers. An anchor
 * pointing at a wrong number is worse than one that falls back to the enquiry
 * form, so the href helpers below degrade rather than dial a guess.
 */
export const contact = {
  phone: { display: "[[+91 00000 00000]]", e164: "" },
  whatsapp: { display: "[[+91 00000 00000]]", e164: "" },
} as const;

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
] as const;

/** Primary CTA target — the enquiry form, built in Phase 10. */
export const ENQUIRY_HREF = "#contact";

/** `tel:` link, or the enquiry form while the number is still a placeholder. */
export function telHref(e164: string): string {
  return e164 ? `tel:${e164}` : ENQUIRY_HREF;
}

/** `wa.me` link, or the enquiry form while the number is still a placeholder. */
export function whatsappHref(e164: string): string {
  return e164 ? `https://wa.me/${e164.replace(/\D/g, "")}` : ENQUIRY_HREF;
}
