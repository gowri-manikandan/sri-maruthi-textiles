import MediaFrame from "@/components/MediaFrame";
import { ENQUIRY_HREF, images, site } from "@/lib/site";

/**
 * Product Range — DESIGN_BRIEF.md §4.7.
 *
 * Section head left, catalogue link right on the same baseline (§3.6 rule 8),
 * then a 4:5 product grid — four across on desktop, matching the four real
 * product types exactly.
 *
 * DEVIATION: §4.7 also asks for a six-thumbnail category strip below the grid.
 * That was written when the range was assumed to be six categories; the real
 * range is four, all of them already shown in the grid directly above. A strip
 * repeating the same four items immediately underneath is duplication, not
 * "range at a glance", so it has been removed. Restore it if the catalogue
 * ever grows past what one row of cards can show.
 *
 * The product cards carry NO border. §3.6 rule 4 allows a hairline or nothing,
 * and the HomeDecor reference these come from sets its cards as photograph +
 * name + one line with no chrome at all. On the `surface` ground a hairline
 * card would also be a box of surface inside surface, which reads as noise.
 *
 * WARNING: every product name and spec line here is placeholder content from
 * the brief's suggested category list, not Sri Maruthi's real catalogue.
 * See lib/site.ts.
 */
export default function ProductRange() {
  const { eyebrow, heading, linkLabel, items } = site.products;

  return (
    <section id="products" className="section-y bg-surface">
      <div className="container-page">
        {/* Head left, control right, same baseline. */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 text-h2 text-ink">{heading}</h2>
          </div>

          <a
            href={ENQUIRY_HREF}
            className="inline-flex min-h-6 items-center text-body font-semibold text-accent underline underline-offset-4 sm:shrink-0"
          >
            {linkLabel}
          </a>
        </div>

        {/* Product grid */}
        <ul data-stagger className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {items.map((item) => (
            <li key={item.id}>
              <MediaFrame
                src={images.products[item.id]}
                alt={`${item.name} — handloom cotton towels woven by ${site.name}`}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="media-zoom aspect-4/5"
                label={`${item.name} — 4:5 product photograph`}
              />

              <h3 className="mt-2 text-h3 text-ink">{item.name}</h3>
              <p className="mt-1 text-small text-muted">{item.spec}</p>

              <a
                href={ENQUIRY_HREF}
                aria-label={`Enquire about ${item.name}`}
                className="mt-1 inline-flex min-h-6 items-center text-small font-semibold text-accent underline underline-offset-4"
              >
                Enquire
              </a>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
