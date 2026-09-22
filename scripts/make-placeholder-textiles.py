"""
Generates the temporary placeholder imagery in /public/images.

WHY THESE EXIST
The client asked for stand-in images "from online" so the layout could be
judged with real visual weight instead of empty dashed boxes. Three sources
were tried and rejected:

  * Unsplash search  - bot-protected, so topical photo IDs cannot be found.
  * LoremFlickr      - returned the same irrelevant fallback for every textile
                       keyword (a cat statue, a cafe patio).
  * Lorem Picsum     - licence is clean, but the photos are random landscapes.
                       A mountain on a "Checked towels" card is worse than an
                       honest empty frame.

So these are generated rather than borrowed: woven-fabric textures in the
cotton palette, each product swatch matching its actual product type. That
makes them licence-clean (no third-party rights in the repo at all), topical,
and obviously not photographs of this mill - which matters, because passing
stock imagery off as your own factory is exactly the problem the brief warns
about.

THEY ARE NOT FOR LAUNCH. Replace every file with real photography before the
site goes live; see public/images/README.md.

Run:  python scripts/make-placeholder-textiles.py
"""

from __future__ import annotations

import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")

# Warm cotton palette, deliberately close to the site's own grounds so the
# placeholders sit in the design rather than fighting it.
CREAM = (243, 238, 228)
ECRU = (226, 215, 196)
SAND = (208, 190, 163)
RUST = (176, 92, 58)
OCHRE = (198, 154, 79)
OLIVE = (107, 120, 84)
DEEP = (74, 62, 52)


def weave(size: tuple[int, int], base: tuple[int, int, int], contrast: float = 10.0) -> Image.Image:
    """A plain-weave texture: alternating warp and weft threads plus grain."""
    w, h = size
    rng = np.random.default_rng(7)

    yy, xx = np.mgrid[0:h, 0:w]
    # Two out-of-phase square waves give the over-under of a plain weave.
    warp = ((xx // 3) % 2) * 2.0 - 1.0
    weft = ((yy // 3) % 2) * 2.0 - 1.0
    pattern = (warp * weft) * contrast

    grain = rng.normal(0.0, 4.0, (h, w))
    slub = rng.normal(0.0, 2.5, (h, 1))  # thread-thickness variation across the weft

    arr = np.zeros((h, w, 3), dtype=np.float64)
    for c in range(3):
        arr[:, :, c] = base[c] + pattern + grain + slub

    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")


def border_bands(img: Image.Image, colour, *, count: int = 3) -> Image.Image:
    """The woven border stripe every towel in the client's logo has."""
    w, h = img.size
    d = ImageDraw.Draw(img, "RGBA")
    unit = max(2, h // 90)
    top = int(h * 0.74)
    for i in range(count):
        y = top + i * unit * 3
        d.rectangle([0, y, w, y + unit], fill=(*colour, 205))
    return img


def soften(img: Image.Image) -> Image.Image:
    """A touch of blur and a vignette so it reads as cloth, not as a pattern."""
    img = img.filter(ImageFilter.GaussianBlur(0.4))
    w, h = img.size
    yy, xx = np.mgrid[0:h, 0:w]
    cx, cy = w / 2, h / 2
    r = np.sqrt(((xx - cx) / cx) ** 2 + ((yy - cy) / cy) ** 2)
    shade = np.clip(1.0 - 0.16 * np.clip(r - 0.55, 0, None) / 0.7, 0.8, 1.0)
    arr = np.asarray(img).astype(np.float64) * shade[:, :, None]
    return Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8), "RGB")


def checked(size, a, b, *, alpha: int = 150, divisions: int = 12):
    """Gingham: two translucent band sets crossing, so overlaps go darkest."""
    img = weave(size, CREAM)
    w, h = size
    d = ImageDraw.Draw(img, "RGBA")
    step = max(24, w // divisions)
    for x in range(0, w, step * 2):
        d.rectangle([x, 0, x + step, h], fill=(*a, alpha))
    for y in range(0, h, step * 2):
        d.rectangle([0, y, w, y + step], fill=(*b, alpha))
    return soften(img)


def printed(size, motif):
    img = weave(size, ECRU)
    w, h = size
    d = ImageDraw.Draw(img, "RGBA")
    step = max(40, w // 8)
    for y in range(step // 2, h, step):
        for x in range(step // 2, w, step):
            off = (step // 2) if (y // step) % 2 else 0
            cx = (x + off) % w
            r = step // 6
            d.polygon(
                [(cx, y - r), (cx + r, y), (cx, y + r), (cx - r, y)],
                fill=(*motif, 90),
            )
    return soften(img)


def folded_stack(size, tones):
    """Bands of differently toned cloth - stands in for a stack of towels."""
    w, h = size
    img = Image.new("RGB", size, CREAM)
    band = h // len(tones)
    for i, tone in enumerate(tones):
        strip = weave((w, band + 2), tone)
        strip = border_bands(strip, OLIVE if i % 2 else RUST, count=2)
        img.paste(strip, (0, i * band))
    d = ImageDraw.Draw(img, "RGBA")
    for i in range(1, len(tones)):
        d.rectangle([0, i * band - 2, w, i * band + 1], fill=(90, 74, 60, 70))
    return soften(img)


def hero_check(size):
    """Large-scale check with border stripes — the hero's stand-in."""
    img = checked(size, OLIVE, RUST, alpha=170, divisions=7)
    return soften(border_bands(img, RUST, count=3))


def build():
    os.makedirs(OUT, exist_ok=True)
    jobs = {
        # Hero: 21:9. Two earlier attempts failed here, both for the same
        # reason. The scrim is a vertical gradient sized to guarantee AA over
        # ANY photograph, so a horizontally banded image loses all its
        # structure under it and renders as flat grey. A check reads through,
        # because its structure runs in both directions.
        "hero.jpg": lambda: hero_check((2100, 900)),
        "story-a.jpg": lambda: soften(border_bands(weave((900, 1200), ECRU), OLIVE)),
        "story-b.jpg": lambda: folded_stack((1200, 900), [OCHRE, RUST, SAND]),
        "dispatch.jpg": lambda: folded_stack((900, 1200), [CREAM, SAND, ECRU]),
        "product-checked.jpg": lambda: checked((960, 1200), OLIVE, RUST),
        "product-plain.jpg": lambda: soften(border_bands(weave((960, 1200), SAND), RUST)),
        "product-printed.jpg": lambda: printed((960, 1200), OCHRE),
        "product-white.jpg": lambda: soften(border_bands(weave((960, 1200), (247, 245, 239)), OLIVE)),
    }
    for name, fn in jobs.items():
        path = os.path.join(OUT, name)
        fn().save(path, quality=86, optimize=True)
        print(f"{name:26} {os.path.getsize(path) // 1024:>5} KB")


if __name__ == "__main__":
    build()
