# Image slots

## ⚠️ The files here now are TEMPORARY placeholders

Every `.jpg` in this folder was **generated**, not photographed — see
`scripts/make-placeholder-textiles.py`. They are woven-fabric textures in the
cotton palette, there so the layout can be judged with real visual weight
instead of empty boxes. **Replace all of them with real photography before the
site goes live.**

They are generated rather than borrowed because the alternatives were worse:
Unsplash's search is bot-protected, LoremFlickr returned the same irrelevant
fallback for every textile keyword, and Lorem Picsum only serves random
landscapes. Generating them also means no third-party image rights enter this
repo at all.

To regenerate: `python scripts/make-placeholder-textiles.py`

## Adding the real photographs

Drop files here, then set the matching path in `lib/site.ts` → `images`.
Nothing else changes: each slot is already a real `next/image`.

| Key in `images` | Current placeholder | Ratio | Notes |
|---|---|---|---|
| `hero` | `hero.jpg` | 21:9 (widest available) | Towel stock or the production floor. **Keep the bottom-left third visually calm** — the headline sits there under a scrim. The only image loaded eagerly. |
| `storyPortrait` | `story-a.jpg` | 3:4 | Loom, weaving, or a hands-on process shot. |
| `storyLandscape` | `story-b.jpg` | 4:3 | Yarn cones or dyed stock. Colour-rich — this is where warmth enters the page. |
| `foilCta` | `dispatch.jpg` | 3:4 | Factory, packing, or dispatch. Cropped to 4:3 on mobile. |
| `products.checked` | `product-checked.jpg` | 4:5 | Checked towels. |
| `products.plain` | `product-plain.jpg` | 4:5 | Plain towels. |
| `products.printed` | `product-printed.jpg` | 4:5 | Printed towels. |
| `products.white` | `product-white.jpg` | 4:5 | White towels. |

Keep lighting and background consistent across the four product shots; texture
must be legible at 244×305 on a desktop card.

Do not colour-correct towards neutral. The interface is deliberately
near-achromatic so the photographs supply all the colour (DESIGN_BRIEF.md §10).

## Gotcha when you swap them

Next caches optimised images by URL. If you replace a file but keep the same
filename, restart the dev server (or run a fresh `next build`) or you may keep
seeing the old one.
