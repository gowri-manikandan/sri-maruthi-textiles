import { ArrowRight } from "lucide-react";
import { ENQUIRY_HREF, site } from "@/lib/site";

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
function PhotoFrame({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-border bg-bg p-3 text-center ${className}`}
    >
      <p className="max-w-[26ch] text-small text-muted">{label}</p>
    </div>
  );
}

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
          <div className="grid gap-2 lg:relative lg:col-start-7 lg:col-span-6 lg:block lg:pb-8">
            <PhotoFrame
              label="Mill story A — 3:4 portrait. Loom, weaving, or a hands-on process shot."
              className="aspect-3/4 lg:w-[70%]"
            />
            {/* The gutter border lives on this wrapper, not on the frame, so it
                does not fight the placeholder's dashed border. */}
            <div className="lg:absolute lg:right-0 lg:bottom-0 lg:w-[55%] lg:border-8 lg:border-surface">
              <PhotoFrame
                label="Mill story B — 4:3 landscape. Yarn cones or dyed stock; colour-rich."
                className="aspect-4/3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
