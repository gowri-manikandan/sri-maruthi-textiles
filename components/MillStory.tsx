import { ArrowRight } from "lucide-react";
import MediaFrame from "@/components/MediaFrame";
import { ENQUIRY_HREF, images, site } from "@/lib/site";

/**
 * The Mill Story — DESIGN_BRIEF.md §4.5.
 *
 * Copy left on cols 1–5, a two-photograph collage right on cols 7–12: a 3:4
 * portrait with a 4:3 landscape offset across its lower-right corner. The
 * overlap only exists at `lg` — below that the two frames stack in normal flow
 * with no absolute positioning at all, which is the only way this composition
 * degrades cleanly on a phone.
 *
 * The landscape carries an 8px border in the section's own ground colour. That
 * is the gutter that makes the overlap read as two photographs rather than one
 * muddled edge — §3.6 rule 4 rules out the drop shadow that would normally do
 * this job.
 */
export default function MillStory() {
  const { eyebrow, heading, paragraphs, linkLabel } = site.story;

  return (
    <section id="story" className="section-y bg-surface">
      <div className="container-page">
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-4">
          {/* Copy */}
          <div className="lg:col-span-5">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 text-h2 text-ink">{heading}</h2>

            {paragraphs.map((text) => (
              <p key={text.slice(0, 24)} className="mt-3 text-body text-muted">
                {text}
              </p>
            ))}

            <a
              href={ENQUIRY_HREF}
              className="mt-3 inline-flex min-h-6 items-center gap-1 text-body font-semibold text-accent underline underline-offset-4"
            >
              {linkLabel}
              <ArrowRight aria-hidden="true" className="size-2" strokeWidth={1.5} />
            </a>
          </div>

          {/* Collage */}
          <div data-stagger className="grid gap-2 lg:relative lg:col-start-7 lg:col-span-6 lg:block lg:pb-8">
            <MediaFrame
              src={images.storyPortrait}
              alt="Weaving in progress on the mill floor"
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="aspect-3/4 lg:w-[70%]"
              label="Mill story A — 3:4 portrait. Loom, weaving, or a hands-on process shot."
            />
            {/* The gutter border lives on this wrapper, not on the frame, so it
                does not fight the placeholder's dashed border. */}
            <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[55%] lg:border-8 lg:border-surface">
              <MediaFrame
                src={images.storyLandscape}
                alt="Dyed cotton yarn cones in the mill store"
                sizes="(min-width: 1024px) 27vw, 100vw"
                className="aspect-4/3"
                label="Mill story B — 4:3 landscape. Yarn cones or dyed stock; colour-rich."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
