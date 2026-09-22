import MediaFrame from "@/components/MediaFrame";
import { ENQUIRY_HREF, images, site } from "@/lib/site";

/**
 * Hero — DESIGN_BRIEF.md §4.2.
 *
 * Full-bleed photograph, dark scrim weighted to the bottom-left, copy stacked
 * in that corner. `data-hero` is the hook Navbar observes to decide when to
 * stop being transparent — see components/Navbar.tsx.
 *
 * On height: §3.4 gives the photograph as 21:9 desktop / 4:5 mobile, and the
 * image manifest (§10) still asks for those crops. But a literal 21:9 section
 * is only ~440px tall at 1024px wide, which the headline, subtext and two CTAs
 * overflow. So the ASSET keeps those ratios while the SECTION is sized in
 * viewport units and the photo is object-cover'd into it. The composition then
 * holds at any window size, and 88svh deliberately leaves a sliver of the next
 * section visible — a scroll cue, and where the Phase 2 action band will sit.
 */
export default function Hero() {
  return (
    <section
      id="top"
      data-hero
      className="on-dark relative isolate flex min-h-[88svh] items-end overflow-hidden"
    >
      {/* Media layer. `priority` because this is the LCP element (§7); it is
          the only image on the page that is not lazy. alt="" because the
          headline already carries the meaning — see MediaFrame. */}
      {/* The positioning lives on this wrapper, NOT on MediaFrame's className.
          MediaFrame's own wrapper is `relative` so that `fill` has something to
          fill; passing `absolute inset-0` in alongside it put two position
          utilities on one element, Tailwind resolved to `relative`, `inset-0`
          then stretched nothing, and the image rendered at 0x0 height — an
          invisible hero that looked like a plain grey gradient, because all
          you could see was the scrim over the page background. */}
      <div className="absolute inset-0 -z-10">
        <MediaFrame
          src={images.hero}
          alt=""
          priority
          sizes="100vw"
          tone="dark"
          className="h-full w-full border-0"
          label="Hero photograph — 21:9 desktop with a 4:5 mobile crop. Towel stock or the production floor. The bottom-left third must stay visually calm; the headline sits there."
        />
      </div>

      {/* Scrim (§4.2). Separate layer so the real photograph can drop into the
          media layer above without touching any of this. */}
      <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />

      <div data-hero-enter className="container-page pt-12 pb-6 lg:pb-12">
        <p className="eyebrow eyebrow-light">{site.hero.eyebrow}</p>

        <h1 className="mt-2 max-w-[22ch] text-display text-bg">
          {site.hero.headline}
        </h1>

        <p className="mt-3 max-w-[60ch] text-body text-bg/85">
          {site.hero.subtext}
        </p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a href={ENQUIRY_HREF} className="btn btn-on-dark">
            Enquire Now
          </a>
          <a href="#products" className="btn btn-outline-light">
            View Products
          </a>
        </div>
      </div>
    </section>
  );
}
