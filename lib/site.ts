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

  /** The Mill Story (DESIGN_BRIEF.md §4.5).
   *  This is the problem → solution argument, told as narrative rather than as
   *  a labelled "Problem / Solution" block. Both paragraphs restate the brief's
   *  §4.5 position and invent no specifics — no founding year, no capacity, no
   *  headcount. Add those in Phase 14 once the real numbers exist. */
  story: {
    eyebrow: "Our story",
    heading: "The mill behind the towels",
    paragraphs: [
      "Most wholesalers tell the same story about suppliers: excellent for two orders, then the cotton changes, a date slips, and the calls stop being answered. Quality that drifts and deliveries that move cost far more over a year than a slightly better unit price ever saves.",
      "We sell what we make. Every lot is woven, checked and dispatched from our own floor — which is why we can quote without a middleman's margin on top, and commit to a date that is ours to control rather than someone else's to miss.",
    ],
    linkLabel: "Talk to us about your requirement",
  },

  /** How It Works (DESIGN_BRIEF.md §4.6) — the brief's four steps verbatim.
   *  This is the one section whose content is genuinely ours to write: it
   *  describes a buying process, not a claim about the company. */
  process: {
    eyebrow: "How it works",
    heading: "From first call to delivered stock",
    steps: [
      {
        id: "enquire",
        title: "Enquire",
        body: "Call, WhatsApp or send the form with what you need.",
      },
      {
        id: "sample",
        title: "Sample & pricing",
        body: "We send the catalogue, a sample and a quote for your quantity.",
      },
      {
        id: "confirm",
        title: "Confirm order",
        body: "Agree the specification, quantity and delivery date.",
      },
      {
        id: "deliver",
        title: "Delivered to you",
        body: "Dispatched to your location across Kerala and Coimbatore.",
      },
    ],
  },

  /** Product range (DESIGN_BRIEF.md §4.7).
   *
   *  EVERY entry below is a placeholder taken from the brief's suggested
   *  category list — none of it describes Sri Maruthi's actual catalogue.
   *  Phase 14 replaces the names, the spec lines and the sixth category with
   *  the real range. Do not ship this as-is. */
  products: {
    eyebrow: "Our products",
    heading: "What we make",
    linkLabel: "Ask for the full catalogue",
    items: [
      { id: "bath", name: "Bath towels", spec: "[[GSM]] gsm · [[size]] cm · [[cotton grade]]" },
      { id: "hand", name: "Hand towels", spec: "[[GSM]] gsm · [[size]] cm · [[cotton grade]]" },
      { id: "bulk", name: "Bulk packs", spec: "[[pack size]] · [[GSM]] gsm · [[cotton grade]]" },
      { id: "custom", name: "Custom sizes", spec: "[[size range]] · made to your specification" },
      { id: "gsm", name: "GSM variants", spec: "[[range]] gsm across the range" },
      { id: "sixth", name: "[[Sixth category]]", spec: "[[spec line]]" },
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
