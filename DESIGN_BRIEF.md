# Sri Maruthi Textiles — Landing Page
## Master Brief & Phased Build Prompts for Claude Code

> **Revision 2 (2026-08-31).** Sections 1, 3, 4, 8 and 10 were rewritten after the
> client supplied three visual references (see §0.2). Sections 2, 5, 6, 7 carry
> over from Revision 1 largely unchanged. `CLAUDE_CODE_BRIEF.md` is a pointer to
> this file — this is the only brief.

---

## 0. How to use this document

1. Claude Code reads this file first in every session: *"Read DESIGN_BRIEF.md before doing anything."*
2. Fill in the `[[PLACEHOLDER]]` fields in §4 with real company details as they arrive.
3. Work through §8 **one phase at a time**. Paste the phase prompt, review in the browser, commit, move on. Never paste multiple phases at once.

### 0.1 Build status

| Phase | State |
|---|---|
| 0R — Re-token | **Shipped.** Rev 2 palette, Fraunces, full type scale, eyebrow / numeral-ghost / btn-outline-light utilities. Verified in the browser. |
| 1R — Navbar + hero | Next. The Rev 1 markup still stands and renders on the new tokens, but it is not the Rev 2 composition. |
| 2 onward | Not started |

### 0.2 Visual references and what was taken from each

Three references were supplied. **None are to be copied.** These are the specific
moves extracted from them, and the reasoning that turned three references into
one direction.

| Reference | What it is | What we take |
|---|---|---|
| **Rangoli Furnishings** | Indian B2B bath-linen manufacturer | The closest structural analogue to this business. Its **section order** is our section order: photographic hero with a years-in-business eyebrow → an immediate pale action band offering a sample kit → three differentiator cards → origin story as text + photo collage → testimonials → oversized ghosted stat numerals → category thumbnail strip → deep multi-column footer. |
| **Texora** | Textile/garment manufacturer | Trust density placed early: the years figure treated as a **large numeral beside a rule and a bullet list**, not buried in a stat band. Also the eyebrow-label convention (a short tracked-out uppercase word above every section head). |
| **HomeDecor** | Warm editorial home-goods retail | The **compositional grammar**: oversized display serif, generous whitespace, flat cards with hairline dividers, asymmetric two-column blocks, a solid single-color foil panel set beside a photograph, and section heads paired with small controls on the opposite edge. |

**The synthesis.** Rangoli and Texora tell us what a wholesale buyer needs to see
and in what order. HomeDecor tells us how it should look while doing it. So:
Rangoli's information architecture, executed with HomeDecor's compositional
restraint, with Texora's density in the trust blocks.

**Direction, in one line:** *warm ground, ink structure* — cream body sections
and editorial serif section heads, but a dark full-bleed photographic hero and
dense trust bands. Design-led, still unmistakably a factory that ships on time.

### 0.3 What changed from Revision 1, and why

- **Accent moved from terracotta `#B5502F` to deep indigo `#2A3B8F`.** The
  product photography for this business is wall-to-wall warm — rust towel
  stacks, pink and ochre yarn cones, cream cotton. A terracotta accent sits
  *inside* that range and dissolves into the imagery. All three references pick
  an accent deliberately **absent** from their photography (Rangoli blue-violet,
  Texora red on navy, HomeDecor acid yellow on terracotta) so it reads as a
  signal rather than as decoration. Indigo is the cool counterweight to warm
  cotton, and it carries the established/trustworthy read this B2B audience
  responds to. Contrast on cream: **9.4:1**, comfortably AAA.
- **Display face moved from DM Serif Display to Fraunces.** The references' type
  is scaled far past heading size and becomes the composition. DM Serif Display
  is a single-optical-size face; pushed to 96px it looks enlarged rather than
  designed. Fraunces is variable with a genuine optical-size axis, so the same
  family is sharp and high-contrast at 96px and still sturdy at 22px.
- **Section plan restructured** from a generic marketing stack into Rangoli's
  order, with two new sections earning their place: the sample-kit action band
  (§4.3) and the oversized numerals band (§4.9).
- **Phases re-cut** into more, smaller units matching the new sections.

---

## 1. Role framing (top of every session)

```
You are acting as a UX/UI designer, SEO specialist, and full-stack Next.js
developer building a marketing landing page for Sri Maruthi Textiles, a
wholesale cotton towel manufacturer. Read DESIGN_BRIEF.md fully before
writing any code.

Follow §3 exactly — do not invent colors, fonts, or spacing values.
Follow §3.6 (composition rules) as strictly as §3.1 (color): the layout
grammar is as much a part of this design system as the palette is.

Work one phase at a time per §8. After each phase, stop, say what you
built and how to verify it in the browser, and wait for go-ahead.
```

---

## 2. Business & audience brief

- **Business:** Manufacturer of cotton towels. B2B, not direct-to-consumer.
- **Service area:** Kerala and parts of Tamil Nadu (mainly Coimbatore).
- **Goal:** Generate wholesale enquiries and build credibility. Lead-gen, not e-commerce.
- **Primary action:** View products → enquire via form, phone, or WhatsApp.
- **Audience:** Wholesale business owners, 30–50, average technical comfort, Kerala/Tamil Nadu. They evaluate on **price, quality, on-time delivery**, and decide trust on **existing customers, years in business, and volume track record**.
- **Implication:** Clarity over cleverness. Big tappable call/WhatsApp CTAs. No jargon. Trust signals in the first screen and the one after it, never buried. Minimal-friction forms.

> The direction in §0.2 is deliberately more considered than a typical supplier
> site — but every distinctive move must still serve this audience. Where beauty
> and legibility conflict, legibility wins. A 45-year-old wholesaler on a
> mid-range Android in daylight is the test case.

---

## 3. Design system

### 3.1 Color

Declared once as CSS custom properties in `app/globals.css` under `@theme`.
Components reference them through Tailwind utilities only — never inline hex.

```css
/* Ground — 60% */
--color-bg:          #FBF9F6;  /* warm off-white; the default page ground     */
--color-surface:     #F1EBE2;  /* soft beige; alternating bands, flat cards   */

/* Structure — 30% */
--color-ink:         #1C1A1E;  /* near-black; body text, headlines            */
--color-ink-deep:    #131218;  /* darker; footer, hero overlay, foil panels   */
--color-muted:       #6B615A;  /* warm grey; secondary text, 5.7:1 on bg      */
--color-border:      #E4DCD0;  /* hairlines; the ONLY card/divider treatment  */

/* Accent — 10% */
--color-accent:      #2A3B8F;  /* deep indigo; 9.4:1 on bg, 9.9:1 vs white    */
--color-accent-soft: #E7EAF7;  /* pale indigo; the action band ground only    */

/* Status */
--color-success:     #3E7A4A;
--color-error:       #B3392C;
```

**Accent budget.** Indigo is permitted on exactly these: primary buttons, the
action band ground (`accent-soft`), section eyebrow labels, link underlines,
active nav state, the foil CTA panel, and icon chips. Nothing else. If a new
surface wants indigo, the answer is no — use `surface` or a hairline.

**Never:** gradients, drop shadows, glassmorphism, colored shadows, or any color
not in this list. Derive hover states with `color-mix()` from existing tokens so
no new value enters the palette.

**Ghost numeral color** (§4.9) — not a token, computed:
`color-mix(in oklab, var(--color-ink) 14%, var(--color-bg))`.

### 3.2 Typography

Two families. Both self-hosted via `next/font/google` — no runtime request.

- **Display — `Fraunces`.** Variable; use the optical-size axis so large sizes
  get high contrast and sharp serifs while small sizes stay sturdy. Set
  `WONK: 0` and `SOFT: 0` — the character comes from the optical axis, not from
  whimsy. This is a mill, not a bakery.
- **Body / UI — `Inter`.** Neutral by design. When the serif carries all the
  personality, the body face should carry none. Best-in-class legibility at 16px
  on a mid-range phone, which is the actual constraint here.

| Role | Family | Mobile | Desktop | Weight | LH | Tracking |
|---|---|---|---|---|---|---|
| Hero display | Fraunces | 44px | 96px | 400 (opsz max) | 0.98 | -0.02em |
| H2 section head | Fraunces | 30px | 44px | 400 | 1.1 | -0.015em |
| H3 | Fraunces | 22px | 28px | 500 | 1.2 | -0.01em |
| Ghost numeral | Fraunces | 64px | 140px | 400 | 1 | -0.03em |
| Eyebrow label | Inter | 12px | 13px | 600 | 1.2 | **0.12em, uppercase** |
| Body | Inter | 16px | 18px | 400 | 1.6 | 0 |
| Small / meta | Inter | 14px | 14px | 400 | 1.5 | 0 |
| Button | Inter | 16px | 16px | 600 | 1 | 0.01em |

All sizes as `clamp()` in the `@theme` block so they interpolate 375px → 1280px.

**On "opsz max":** do not hand-set `font-variation-settings` anywhere. `html` carries
`font-optical-sizing: auto`, so the browser drives Fraunces' optical-size axis from
the computed font-size automatically — high-contrast and sharp at 96px, sturdy and
open at 22px, with nothing to wire per element. Inter has no `opsz` axis, so the
declaration is a no-op there. `next/font` requests only the `opsz` axis, which
leaves `WONK` and `SOFT` pinned at their defaults of 0.

**The eyebrow is a system component, not decoration.** Every major section opens
with one: tracked-out uppercase Inter in indigo. Texora's `••• PARTNERSHIP`
convention, stripped of the dots. It is what makes an editorial page still scan
like a business page.

### 3.3 Spacing

8px base. Only these steps: `8, 16, 24, 32, 48, 64, 96, 128`. Tailwind's
`--spacing` is set to `8px`, so `p-1`=8 … `p-16`=128. No other steps, no
arbitrary values.

### 3.4 Layout & grid

- Max content width `1200px`, centered. Side padding `24px` mobile / `64px` desktop.
- Section rhythm `48px` mobile / `96px` desktop.
- 12-column desktop, 4-column mobile.
- **Full-bleed sections break the container**: hero, the action band, the foil
  CTA panel, and the footer run edge-to-edge with their content still held to
  1200px inside.
- Image ratios: hero `21:9` desktop / `4:5` mobile; product cards `4:5`;
  category thumbnails `1:1`; story collage `3:4` and `4:3` paired.

### 3.5 Icons

`lucide-react`, outline, one stroke weight throughout. No emoji. Icons appear
only in: differentiator card chips, How-It-Works steps, footer contact rows, and
inline CTA arrows. Never decorative, never a substitute for a photo.

### 3.6 Composition rules — the reference grammar

**These are binding, at the same level as the color tokens.** They are what
separates this build from a generic template, and they are the actual content of
the three references.

1. **Photography carries the page.** Every major section is anchored by a real
   photograph. No illustration, no gradient mesh, no icon-as-hero, no abstract
   shapes. If a section has no photo available, it gets a clearly-marked
   placeholder at the correct ratio — never a decorative substitute.

2. **One type element per page is scaled far past heading size.** Here it is the
   hero headline (96px) and the numerals band (140px). Two moments, no more.
   Scaling everything up destroys the effect.

3. **Editorial rhythm over card grids.** Prefer asymmetric two-column blocks —
   text against a photo pair, a solid panel beside a photograph. Card grids are
   permitted for the differentiators (3) and the product range, and nowhere else.

4. **Cards are flat.** 1px `--color-border` hairline or no border at all. Border
   radius `4px` maximum. **No shadows, ever.** No hover lift. Hover changes
   background or border color only.

5. **The accent has a small surface area.** See the accent budget in §3.1. If
   indigo covers more than roughly a tenth of any viewport, something is wrong.

6. **Warmth comes from the photographs; the interface stays neutral.** The cream
   and beige grounds are near-achromatic. All the color in a screenshot of this
   site should be coming from the towels and the yarn, plus small indigo marks.

7. **Alternate grounds, separate with hairlines.** Sections alternate `bg` and
   `surface`. Where two `bg` sections meet, a single `--color-border` hairline
   divides them. No section gets a border on all four sides.

8. **Left-align section heads; put controls on the opposite edge.** HomeDecor's
   move — the H2 sits left, and any carousel arrows, "See all" link, or filter
   row sits right on the same baseline.

### 3.7 Motion

Framer Motion, sparingly. Permitted: 16px slide-up plus fade on section entry
(once, not on every scroll), and color transitions on interactive elements at
180ms. Not permitted: parallax, counters that tick up, scroll-jacking, staggered
letter reveals, anything on the hero photograph. Everything wrapped in a
`prefers-reduced-motion` guard that disables it entirely.

---

## 4. Section plan

> `[[ ]]` is a placeholder. Where real content is missing, use clearly-marked
> placeholder content so layout can be built and swapped later. **Never invent
> statistics, client names, or testimonials that could read as real.**

### 4.1 Navbar
Wordmark (`[[LOGO]]`, wordmark placeholder until supplied) · Home · Products ·
Why Us · Contact · **[Enquire Now]** indigo pill.

Sticky. **Transparent over the hero photograph, then solid `bg` with a bottom
hairline once scrolled past it** — Rangoli and Texora both do this, and it is
what lets the hero go genuinely full-bleed. Mobile: hamburger to a full panel.

### 4.2 Hero — full-bleed dark
- Full-bleed photograph, `21:9` desktop / `4:5` mobile, with a dark overlay
  weighted to the bottom-left so the type clears AA regardless of the photo.
- Eyebrow, uppercase tracked: `[[X]]+ YEARS OF COTTON TOWEL MANUFACTURE`
- Headline, Fraunces 96px, bottom-left, two lines maximum:
  `[[e.g. "Cotton towels, made for business that lasts"]]`
- One line of subtext, Inter, max 60ch.
- Primary **Enquire Now** (indigo fill) + secondary **View Products** (white outline).
- No carousel. Texora's slide counter is a nice detail, but a single strong
  photograph outperforms a rotating one and is one less thing to maintain.

### 4.3 Action band — pale indigo, full-bleed
Directly under the hero, no gap. Rangoli's single best move: a short horizontal
strip on `accent-soft` carrying the offer that converts a browsing wholesaler.

- One line: `Ready stock, low minimums, samples dispatched from Coimbatore.` `[[confirm wording]]`
- Phone and WhatsApp as tappable links, ≥48px targets.
- **[Request Sample Kit]** button.

Collapses to stacked, full-width on mobile with the phone/WhatsApp links first.

### 4.4 What Makes Us Different
Eyebrow + H2, then **exactly three** flat cards, hairline borders, circular
indigo-tinted icon chip, H3, two lines of body. Single column on mobile.

1. Direct from the mill — bulk pricing with no middleman markup
2. Consistent quality — GSM, cotton grade and stitching checked per lot
3. Delivery you can plan around — a committed date, across Kerala and Coimbatore

### 4.5 The Mill Story
Asymmetric: copy column left (eyebrow, H2, two paragraphs, text link), and a
**two-photograph collage** right — one `3:4` portrait offset against one `4:3`
landscape, overlapping on the 12-column grid. This is where the problem →
solution argument lives, told as narrative rather than as a labelled
"Problem / Solution" block.

Content: wholesalers struggle to find manufacturers reliable on quality
consistency and delivery timelines at fair bulk pricing → the direct-from-mill
answer.

### 4.6 How It Works
Four numbered steps, horizontal on desktop with a hairline connector, stacked on
mobile. Large Fraunces numeral, lucide icon, short label, one line.

Enquire → Sample & pricing → Confirm order → Delivered to your location

### 4.7 Product Range
Eyebrow + H2 left, **[See full range]** right on the same baseline (§3.6 rule 8).

Grid of flat product cards: `4:5` photograph, name, one spec line
(GSM / size / cotton grade), small **Enquire** link that scrolls to the form.
3-up desktop, 2-up tablet, 1-up mobile.

Below it, a **category thumbnail strip** — six `1:1` thumbnails in one row with
labels underneath, horizontally scrollable on mobile. Rangoli's move; it
communicates range at a glance without a second grid.

Categories: bath towels · hand towels · bulk packs · custom sizes ·
GSM variants · `[[sixth]]`

### 4.8 Customer Voices
On `surface`. Copy block left (eyebrow, H2, one line), testimonial cards right.
Large quote glyph, quote text, name + business + city with an avatar circle.

**Placeholder only until real permissioned quotes exist.** Format:
`"[[quote]]" — [[Name, Business, City]]`.

### 4.9 The Numbers
The page's second oversized-type moment and its most graphic. Four figures in
one row, Fraunces at 140px in the ghost color (§3.1), small Inter label under
each. Understated rather than loud — the scale does the work, not the contrast.
2×2 on mobile.

`[[X]]+` Years in business · `[[X]]+` Wholesale clients · `[[X]]` Districts
covered · `[[X]]` `[[fourth metric]]`

Real numbers only. Ship with visible placeholders rather than invented figures.

### 4.10 Foil CTA panel
HomeDecor's solid-color-block-beside-a-photo, in indigo. Two equal columns:
solid `--color-accent` panel with white H2, one line, and a white-outline
button; beside it a full-height factory or stock photograph. Stacked on mobile,
panel first.

### 4.11 FAQ
Accordion, native `<details>`/`<summary>` or a fully keyboard-accessible
equivalent. Single column, max 720px, left-aligned.

Covers: MOQ · delivery timeline · customization · payment terms · sample
availability · areas served.

### 4.12 Final CTA + enquiry form
Phone and WhatsApp click-to-chat as large primary targets — for this audience
these convert better than the form and must not be visually subordinate to it.

Form fields, and nothing more: Name · Business Name · Phone/WhatsApp · City ·
Requirement or Quantity · Message. Every field labelled.

### 4.13 Footer
Full-bleed `--color-ink-deep`. Wordmark and one line left; three link columns
(Pages · Products · Contact) right; address, phone, WhatsApp, email, service
area; hairline above the copyright row.

---

## 5. Tech stack

- **Framework:** Next.js 16 (App Router), TypeScript.
- **Styling:** Tailwind v4. No `tailwind.config` file exists in v4 — all tokens live in the `@theme` block in `app/globals.css`.
- **Fonts:** `next/font/google` — Fraunces (variable) + Inter.
- **Icons:** `lucide-react`.
- **Forms:** client form → `/app/api/enquiry/route.ts`. Delivery target (email / WhatsApp / Sheet) decided at Phase 10; stub with `console.log` until then.
- **Images:** `next/image` throughout.
- **Animation:** Framer Motion, per §3.7.
- **Deployment:** Vercel.

---

## 6. SEO requirements

- `<title>` and `<meta description>` via the Metadata API.
- Open Graph + Twitter cards with a real hero image — WhatsApp sharing is a likely referral path for this audience, so the OG image matters more than usual.
- Semantic HTML: `<header> <nav> <main> <section> <footer>`. Not div soup.
- One `<h1>`, logical heading order after it.
- `sitemap.xml`, `robots.txt`, canonical URL.
- Descriptive alt text on every product image; `alt=""` on decorative ones.
- Natural local keywords: "wholesale cotton towel manufacturer Kerala", "bulk towel supplier Coimbatore". No stuffing.
- `LocalBusiness` / `Organization` JSON-LD with service area.

---

## 7. Accessibility & performance checklist

- Real `<button>`/`<a>` for every control. Never a clickable `<div>`.
- Visible focus states; never strip an outline without replacing it.
- **Hero text over photography must be verified against the actual supplied
  image**, not against the overlay in isolation. AA minimum.
- All form inputs have associated `<label>`s.
- **`--color-border` is 1.29:1 against `bg` — decorative hairlines only.** It is
  below the WCAG 3:1 non-text minimum, so it must never bound a control or a form
  input. Those use `--color-muted` (5.74:1), as `btn-secondary` already does.
  This matters at Phase 10.
- `next/image` with correct `sizes`; hero `priority`, everything else lazy.
- Tap targets ≥48px — especially the phone/WhatsApp links.
- Minimal third-party script; nothing render-blocking.
- Keyboard-only pass through the whole page before any phase is called done.
- `prefers-reduced-motion` honoured everywhere per §3.7.

---

## 8. Phased build plan — one phase per session

### Phase 0R — Re-token
```
Rewrite the @theme block in app/globals.css to the Revision 2 design system
in DESIGN_BRIEF.md §3.1 and §3.2: the new indigo-accented palette, Fraunces
replacing DM Serif Display in next/font, and the updated type scale including
the hero-display and ghost-numeral steps. Add the eyebrow label as a reusable
utility. Update the btn utilities for the new accent and add a white-outline
variant for use over photography. Verify the accent and muted contrast ratios
and report them. Do not touch section markup yet.
```

### Phase 1R — Navbar + full-bleed hero
```
Rebuild the Navbar and Hero per DESIGN_BRIEF.md §4.1 and §4.2. Navbar goes
transparent over the hero and solid with a bottom hairline once scrolled past
it. Hero is a full-bleed photograph with a bottom-left-weighted dark overlay,
eyebrow, 96px Fraunces headline, subtext and two CTAs. Use a clearly-marked
placeholder at the correct ratio for the photograph — no stock image standing
in for real work. Check the type clears AA against the overlay.
```

### Phase 2 — Action band
```
Build the pale-indigo full-bleed action band per §4.3, sitting directly under
the hero with no gap. Phone and WhatsApp as real tel:/wa.me links with 48px
minimum targets, plus the Request Sample Kit button.
```

### Phase 3 — What Makes Us Different
```
Build the three-card differentiator section per §4.4. Flat hairline cards,
circular indigo-tinted lucide icon chips, single column on mobile. Obey the
flat-card rule in §3.6 — no shadows, no hover lift.
```

### Phase 4 — The Mill Story
```
Build the asymmetric story section per §4.5: copy column left, two overlapping
photograph placeholders right (3:4 offset against 4:3) laid out on the
12-column grid. Stacks cleanly on mobile without the overlap.
```

### Phase 5 — How It Works
```
Build the four-step process section per §4.6 — large Fraunces numerals, lucide
icons, hairline connector on desktop, stacked on mobile.
```

### Phase 6 — Product Range + category strip
```
Build the product card grid and the six-thumbnail category strip per §4.7.
next/image with proper alt text, 4:5 product cards and 1:1 thumbnails, section
head left with "See full range" right on the same baseline. Strip scrolls
horizontally on mobile.
```

### Phase 7 — Customer Voices
```
Build the testimonial section per §4.8 on the surface ground. Clearly-marked
placeholder quotes only — nothing that could be mistaken for a real client.
```

### Phase 8 — The Numbers
```
Build the oversized-numeral band per §4.9. 140px Fraunces in the ghost color
derived per §3.1, small Inter labels, 2x2 on mobile. Placeholder figures must
be visibly marked as placeholders.
```

### Phase 9 — Foil CTA panel
```
Build the two-column indigo foil panel beside a photograph per §4.10. Stacks
panel-first on mobile.
```

### Phase 10 — FAQ + enquiry form + API route
```
Build the keyboard-accessible FAQ accordion per §4.11 and the final CTA plus
enquiry form per §4.12, with phone/WhatsApp visually at least as prominent as
the form. Build /app/api/enquiry/route.ts. Ask me where enquiries should be
delivered before wiring real delivery — stub with console.log and a success
message until I decide.
```

### Phase 11 — Footer
```
Build the full-bleed deep-ink footer per §4.13.
```

### Phase 12 — SEO pass
```
Implement everything in §6. Show me the generated metadata output.
```

### Phase 13 — Accessibility, performance & motion polish
```
Work §7 item by item and fix anything non-compliant. Then add the §3.7 motion
— 16px slide-up plus fade on section entry, once, reduced-motion guarded.
Report which items you verified and how.
```

### Phase 14 — Content swap
```
Replace every placeholder with real content, section by section, confirming
each swap before the next.
```

---

## 9. Real content still needed

- Company logo (SVG preferred), tagline
- Real phone + WhatsApp number, email, physical address
- Years in business, wholesale client count, districts covered, fourth metric
- Product categories with sizes, GSM options, cotton grades
- Real customer testimonials with permission to publish
- Where enquiry submissions should land
- Domain name

---

## 10. Image manifest

Photographs are the design (§3.6 rule 1). This is the full shot list, with the
treatment each will receive, so they can be framed correctly at capture time.

| Slot | Ratio | Notes |
|---|---|---|
| Hero | `21:9` desktop, `4:5` mobile crop | Towel stock or the production floor. **Must have a visually calm bottom-left third** — the headline sits there under an overlay. Supply the widest version available. |
| Mill story A | `3:4` portrait | Loom, weaving, or a hands-on process shot. |
| Mill story B | `4:3` landscape | Yarn cones or dyed stock. Colour-rich — this is where warmth enters the page. |
| Product cards | `4:5` × 5–6 | One per category. Consistent lighting and background across the set. Texture must be legible. |
| Category thumbs | `1:1` × 6 | Can be tight crops of the product shots. |
| Foil CTA | `3:4` portrait, full-bleed height | Factory, packing, or dispatch. |
| Testimonial avatars | `1:1` small | Optional; initials in a circle if unavailable. |
| OG / social card | `1200×630` | Derived from the hero. Matters — WhatsApp sharing is a primary referral path. |

**Colour guidance:** warm imagery is wanted and expected. The interface is
deliberately near-achromatic so the photographs supply all the colour. Do not
colour-correct towards neutral.
