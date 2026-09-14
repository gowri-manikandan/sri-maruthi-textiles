import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

/**
 * Open Graph / Twitter card — DESIGN_BRIEF.md §6.
 *
 * WhatsApp sharing is a primary referral path for this audience, so the card
 * matters more than usual and shipping without one is not an option.
 *
 * §6 asks for the hero photograph here. No photograph exists yet, and a stock
 * image standing in for the mill would be worse than none — so this is a
 * typographic card in the brand palette instead. It is honest, it is on-brand,
 * and it is a drop-in replacement target: Phase 14 should swap this file for
 * the real hero crop at 1200×630.
 *
 * Satori (which renders this) supports a narrow slice of CSS — flexbox only,
 * every element explicitly display:flex, no CSS variables, no `gap` in older
 * versions. Hence the literal hex values and explicit margins below; they are
 * the §3.1 tokens transcribed, not a second palette.
 */
export const alt = site.seo.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Satori ships with no system fonts, so a bare `fontFamily: "Georgia, serif"`
   silently renders as sans — the card looked correct but was off-brand. The
   real Fraunces face is vendored at assets/fonts/ (71KB, not in public/ since
   it is only ever read server-side) and handed to Satori explicitly.

   If the read fails for any reason, the card still renders in the fallback
   sans rather than the whole OG image 500ing: a slightly off-brand preview
   beats no preview at all on WhatsApp. */
async function loadFont(file: string): Promise<ArrayBuffer | null> {
  try {
    const data = await readFile(
      path.join(process.cwd(), "assets", "fonts", file),
    );
    return Uint8Array.from(data).buffer;
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const [displayFont, sansFont] = await Promise.all([
    loadFont("fraunces-display.ttf"),
    loadFont("inter-semibold.ttf"),
  ]);

  /* Satori applies the FIRST registered font to anything without an explicit
     fontFamily, so both faces must be named and set deliberately — supplying
     only Fraunces silently rendered the eyebrow and the meta line in serif
     too, collapsing the §3.2 serif/sans pairing. */
  const displayFamily = displayFont ? "Fraunces" : "serif";
  const sansFamily = sansFont ? "Inter" : "sans-serif";

  const fonts = [
    displayFont && {
      name: "Fraunces",
      data: displayFont,
      style: "normal" as const,
      weight: 400 as const,
    },
    sansFont && {
      name: "Inter",
      data: sansFont,
      style: "normal" as const,
      weight: 600 as const,
    },
  ].filter(Boolean) as NonNullable<
    ConstructorParameters<typeof ImageResponse>[1]
  >["fonts"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FBF9F6", // --color-bg
          padding: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontFamily: sansFamily,
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#2A3B8F", // --color-accent
              fontWeight: 600,
            }}
          >
            20+ years · Kerala &amp; Coimbatore
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontFamily: displayFamily,
              fontSize: 78,
              lineHeight: 1.05,
              color: "#1C1A1E", // --color-ink
              maxWidth: 900,
            }}
          >
            Wholesale cotton towels, made to a committed date.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #E4DCD0", // --color-border
            paddingTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: displayFamily,
              fontSize: 36,
              color: "#1C1A1E",
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: sansFamily,
              fontSize: 26,
              color: "#6B615A",
            }}
          >
            Bath · Hand · Bulk
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
