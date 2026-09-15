import MediaFrame from "@/components/MediaFrame";
import { ENQUIRY_HREF, images, site } from "@/lib/site";

/**
 * Product Range — DESIGN_BRIEF.md §4.7.
 *
 * Section head left, catalogue link right on the same baseline (§3.6 rule 8).
 * Then a 4:5 product grid, then a 1:1 category strip that scrolls horizontally
 * on mobile.
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
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {items.map((item) => (
            <li key={item.id}>
              <MediaFrame
                src={images.products[item.id]}
                alt={`${item.name} — cotton towels manufactured by ${site.name}`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-4/5"
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

        {/* Category strip — range at a glance, without a second full grid. */}
        <ul className="mt-6 flex gap-2 overflow-x-auto lg:grid lg:grid-cols-6 lg:gap-3 lg:overflow-x-visible">
          {items.map((item) => (
            <li key={item.id} className="w-16 shrink-0 lg:w-auto">
              <MediaFrame
                src={images.products[item.id]}
                alt=""
                sizes="(min-width: 1024px) 16vw, 128px"
                className="aspect-square"
                label="1:1"
              />
              <p className="mt-1 text-small text-ink">{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
