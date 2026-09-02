import { ENQUIRY_HREF, site } from "@/lib/site";

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
      {/* Media layer.

          Phase 14 replaces this whole block with:
            <Image src={...} alt="" fill priority sizes="100vw"
                   className="object-cover" />
          No stock photo stands in for real work, so until then this is an
          honest, labelled empty frame. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-deep">
        <div className="container-page flex h-full items-start justify-end pt-12">
          <p className="max-w-[38ch] rounded border border-dashed border-bg/25 p-2 text-small text-bg/55">
            <span className="font-semibold text-bg/75">
              Hero photograph placeholder.
            </span>{" "}
            Supply 21:9 for desktop with a 4:5 mobile crop, towel stock or the
            production floor. The bottom-left third must stay visually calm —
            the headline sits there.
          </p>
        </div>
      </div>

      {/* Scrim (§4.2). Separate layer so the real photograph can drop into the
          media layer above without touching any of this. */}
      <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />

      <div className="container-page pt-12 pb-6 lg:pb-12">
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
