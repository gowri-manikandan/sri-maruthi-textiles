import { ENQUIRY_HREF, site } from "@/lib/site";

/**
 * Foil CTA panel — DESIGN_BRIEF.md §4.10.
 *
 * HomeDecor's solid-colour-block-beside-a-photograph, in indigo. Full-bleed
 * (§3.4), two equal columns, panel first so it leads on mobile without any
 * order juggling.
 *
 * The panel's copy is NOT aligned to the 1200px page grid — it carries its own
 * symmetric padding instead, which is how the reference does it. A full-bleed
 * colour block that indents its text to an invisible container edge reads as a
 * mistake rather than as alignment.
 *
 * `on-dark` switches the focus ring to the light variant (globals.css §7), so
 * keyboard focus stays visible against indigo.
 *
 * Ratio note: the image manifest (§10) asks for a 3:4 portrait, which is right
 * for the desktop column where the photo stretches to the panel's full height.
 * Stacked on mobile, a literal 3:4 would run ~500px tall directly under an
 * already-tall panel, so the frame is 4:3 there and the supplied asset is
 * cropped by object-cover.
 */
export default function FoilCta() {
  const { eyebrow, heading, line, cta } = site.foilCta;

  return (
    <section className="grid lg:grid-cols-2">
      <div className="on-dark bg-accent p-6 lg:p-12">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>

        <h2 className="mt-2 max-w-[16ch] text-h2 text-bg">{heading}</h2>

        <p className="mt-3 max-w-[42ch] text-body text-bg/85">{line}</p>

        <a href={ENQUIRY_HREF} className="btn btn-outline-light mt-4">
          {cta}
        </a>
      </div>

      {/* Phase 14 replaces this with:
            <Image src={...} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw"
                   className="object-cover" /> */}
      <div className="flex aspect-4/3 items-center justify-center border border-dashed border-border bg-surface p-3 text-center lg:aspect-auto lg:h-full">
        <p className="max-w-[30ch] text-small text-muted">
          Foil CTA photograph — 3:4 portrait, full-bleed height. Factory,
          packing, or dispatch.
        </p>
      </div>
    </section>
  );
}
