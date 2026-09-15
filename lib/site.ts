/**
 * Single source of truth for company details and navigation.
 * Phase 14 swaps the [[PLACEHOLDER]] values here — not in components.
 */
/**
 * Image slots — DESIGN_BRIEF.md §10, Phase 14.
 *
 * Drop files into /public/images and set the paths here; every slot then
 * switches from its marked placeholder to a real `next/image` with no
 * component change. Shot list, ratios and framing notes are in §10 — the hero
 * in particular needs a visually calm bottom-left third, because the headline
 * sits there.
 *
 * Product images are keyed by the product `id` further down this file.
 */
export const images: {
  hero?: string;
  storyPortrait?: string;
  storyLandscape?: string;
  foilCta?: string;
  products: Record<string, string | undefined>;
} = {
  hero: undefined,
  storyPortrait: undefined,
  storyLandscape: undefined,
  foilCta: undefined,
  products: {},
};

/**
 * Absolute origin, needed for canonical URLs, Open Graph and the sitemap.
 * Set NEXT_PUBLIC_SITE_URL once the domain exists (§9). The localhost fallback
 * keeps development working but must not reach production — canonical tags
 * pointing at localhost would deindex the site.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const site = {
  name: "Sri Maruthi Textiles",
  serviceArea: "Kerala & Tamil Nadu",

  /** SEO copy (DESIGN_BRIEF.md §6). Local keywords are worked into real
   *  sentences rather than stuffed: "wholesale cotton towel manufacturer",
   *  "Kerala", "Coimbatore" all appear naturally. */
  seo: {
    title: "Sri Maruthi Textiles — Wholesale Cotton Towel Manufacturer",
    description:
      "Checked, plain, printed and white cotton towels for wholesalers across Kerala and Coimbatore. 20+ years of manufacturing, direct-from-mill pricing, delivered on a committed date.",
    ogAlt:
      "Sri Maruthi Textiles — wholesale cotton towel manufacturer serving Kerala and Coimbatore",
  },

  /** Hero copy (DESIGN_BRIEF.md §4.2) — confirm wording in Phase 14. */
  hero: {
    /** Rendered uppercase by the .eyebrow utility, so write it in sentence case. */
    eyebrow: "20+ years of cotton towel manufacture",
    headline: "Cotton Towels, Made for Business That Lasts",
    subtext:
      "We manufacture checked, plain, printed and white cotton towels for wholesalers across Kerala and Coimbatore — consistent quality, direct-from-mill pricing, delivered on the date we commit.",
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
   *  The four types are real, supplied by the client 2026-09-15. The SPEC
   *  LINES are still placeholders — GSM, sizes and cotton grade have not been
   *  given yet, so each one keeps an obvious `[[ ]]` slot rather than a
   *  plausible-looking invention. */
  products: {
    eyebrow: "Our products",
    heading: "What we make",
    linkLabel: "Ask for the full catalogue",
    items: [
      {
        id: "checked",
        name: "Checked towels",
        spec: "[[GSM]] gsm · [[size]] cm · [[cotton grade]]",
      },
      {
        id: "plain",
        name: "Plain towels",
        spec: "[[GSM]] gsm · [[size]] cm · [[cotton grade]]",
      },
      {
        id: "printed",
        name: "Printed towels",
        spec: "[[GSM]] gsm · [[size]] cm · [[cotton grade]]",
      },
      {
        id: "white",
        name: "White towels",
        spec: "[[GSM]] gsm · [[size]] cm · [[cotton grade]]",
      },
    ],
  },

  /** Footer (DESIGN_BRIEF.md §4.13). */
  footer: {
    line: "Wholesale cotton towel manufacturer supplying Kerala and Coimbatore for over 20 years.",
    /** [[PLACEHOLDER]] — Phase 14. */
    email: "[[email@example.com]]",
    /** [[PLACEHOLDER]] — Phase 14. */
    address: "[[Street address, town, district, PIN]]",
  },

  /** FAQ (DESIGN_BRIEF.md §4.11).
   *
   *  The six questions are the brief's and are correct as asked. The ANSWERS
   *  are mostly not ours to write: MOQ, lead time, payment terms and sample
   *  policy are commercial facts nobody has supplied. Each answer is written
   *  so the real figure drops into an obvious `[[ ]]` slot without rewriting
   *  the sentence around it. Only "areas served" is fully true today. */
  faq: {
    eyebrow: "Questions",
    heading: "Before you enquire",
    items: [
      {
        q: "What is your minimum order quantity?",
        a: "Minimum order is [[MOQ]] pieces per design. Tell us the quantity you have in mind and we will confirm what is workable.",
      },
      {
        q: "How long does delivery take?",
        a: "Standard orders are dispatched within [[X]] days of confirmation. We commit to a date when you place the order rather than after it.",
      },
      {
        q: "Can towels be made to our own specification?",
        a: "[[Confirm which of these are actually offered]] — sizes, GSM, colours and border styles can be made to order.",
      },
      {
        q: "What are your payment terms?",
        a: "[[Payment terms — advance percentage, balance on dispatch, credit terms if any.]]",
      },
      {
        q: "Can we see a sample first?",
        a: "Yes. Samples are sent on request. [[Confirm whether samples are free or chargeable, and who pays freight.]]",
      },
      {
        q: "Which areas do you supply?",
        a: "Kerala, and Tamil Nadu around Coimbatore. If you are outside that area, ask anyway and we will tell you what is possible.",
      },
    ],
  },

  /** Final CTA + enquiry form (DESIGN_BRIEF.md §4.12). */
  contactSection: {
    eyebrow: "Contact",
    heading: "Tell us what you need",
    line: "Calling or messaging is usually fastest — we answer during working hours. If it is easier, send the form instead and we will come back to you.",
    formHeading: "Send an enquiry",
    privacyNote:
      "We use these details only to reply to your enquiry. Nothing is shared with anyone else.",
  },

  /** Foil CTA panel (DESIGN_BRIEF.md §4.10).
   *  Deliberately free of claims — it describes what we will do next, not what
   *  the company is, so nothing here needs verifying in Phase 14. */
  foilCta: {
    eyebrow: "Next step",
    heading: "Get a sample and a price",
    line: "Tell us the sizes, GSM and quantity you need. We will send a sample and a quote for your order.",
    cta: "Request Sample Kit",
  },

  /** Customer Voices (DESIGN_BRIEF.md §4.8).
   *
   *  PLACEHOLDERS ONLY. The brief is explicit that no quote, name, business or
   *  city may be invented here — a fabricated testimonial is the one piece of
   *  placeholder copy that would be actively dishonest if it shipped. These
   *  entries are written so they cannot be mistaken for real ones. Replace in
   *  Phase 14, and only with quotes the customer has approved. */
  testimonials: {
    eyebrow: "Customer voices",
    heading: "What our buyers say",
    line: "Quotes are published only with the customer's permission.",
    quotes: [
      {
        id: "one",
        quote: "[[Quote about quality consistency across repeat orders.]]",
        name: "[[Name]]",
        business: "[[Business]]",
        city: "[[City]]",
      },
      {
        id: "two",
        quote: "[[Quote about delivery being on the committed date.]]",
        name: "[[Name]]",
        business: "[[Business]]",
        city: "[[City]]",
      },
    ],
  },
} as const;

/**
 * Contact details (DESIGN_BRIEF.md §4.3, §4.12, §4.13).
 *
 * Real as of 2026-09-11: one number serves both calls and WhatsApp.
 * `e164` must stay in +CC format — whatsappHref strips it to digits itself.
 * If an `e164` is ever blanked, the helpers below fall back to the enquiry
 * form rather than dialling a guess.
 */
export const contact = {
  phone: { display: "+91 93446 06026", e164: "+919344606026" },
  whatsapp: { display: "+91 93446 06026", e164: "+919344606026" },
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
