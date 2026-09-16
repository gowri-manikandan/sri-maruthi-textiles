# Image slots

Drop files here, then set the matching path in `lib/site.ts` → `images`.
Nothing else changes: each slot switches from its marked placeholder to a real
`next/image` automatically.

| Key in `images` | File to add | Ratio | Notes |
|---|---|---|---|
| `hero` | e.g. `/images/hero.jpg` | 21:9 (widest available) | Towel stock or the production floor. **Keep the bottom-left third visually calm** — the headline sits there under a scrim. This is the only image loaded eagerly. |
| `storyPortrait` | `/images/story-a.jpg` | 3:4 | Loom, weaving, or a hands-on process shot. |
| `storyLandscape` | `/images/story-b.jpg` | 4:3 | Yarn cones or dyed stock. Colour-rich — this is where warmth enters the page. |
| `foilCta` | `/images/dispatch.jpg` | 3:4 | Factory, packing, or dispatch. Cropped to 4:3 on mobile. |
| `products.<id>` | `/images/bath.jpg` … | 4:5 | One per product id: `checked`, `plain`, `printed`, `white`. Consistent lighting and background across the set; texture must be legible. |

Do not colour-correct towards neutral. The interface is deliberately
near-achromatic so the photographs supply all the colour (DESIGN_BRIEF.md §10).
