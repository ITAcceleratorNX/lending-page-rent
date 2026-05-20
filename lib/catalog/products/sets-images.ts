/** Фото: `public/images/categories/sets/{slug}-01.webp` … */

export const SETS_IMAGES_BY_SLUG: Record<string, string[]> = {
  "arabian-night": [
    "/images/categories/sets/arabian-night-01.webp",
    "/images/categories/sets/arabian-night-02.webp",
    "/images/categories/sets/arabian-night-03.webp",
  ],
  bend: [
    "/images/categories/sets/bend-01.webp",
    "/images/categories/sets/bend-02.webp",
    "/images/categories/sets/bend-03.webp",
    "/images/categories/sets/bend-04.webp",
  ],
  "black-gloss": [
    "/images/categories/sets/black-gloss-01.webp",
    "/images/categories/sets/black-gloss-02.webp",
    "/images/categories/sets/black-gloss-03.webp",
    "/images/categories/sets/black-gloss-04.webp",
  ],
  "black-lines": [
    "/images/categories/sets/black-lines-01.webp",
    "/images/categories/sets/black-lines-02.webp",
    "/images/categories/sets/black-lines-03.webp",
  ],
  "boho-story": [
    "/images/categories/sets/boho-story-01.webp",
    "/images/categories/sets/boho-story-02.webp",
    "/images/categories/sets/boho-story-03.webp",
    "/images/categories/sets/boho-story-04.webp",
  ],
  "chic-in-pink": [
    "/images/categories/sets/chic-in-pink-01.webp",
    "/images/categories/sets/chic-in-pink-02.webp",
    "/images/categories/sets/chic-in-pink-03.webp",
  ],
  eye: [
    "/images/categories/sets/eye-01.webp",
    "/images/categories/sets/eye-02.webp",
    "/images/categories/sets/eye-03.webp",
  ],
  forest: [
    "/images/categories/sets/forest-01.webp",
    "/images/categories/sets/forest-02.webp",
    "/images/categories/sets/forest-03.webp",
  ],
  lilies: [
    "/images/categories/sets/lilies-01.webp",
    "/images/categories/sets/lilies-02.webp",
    "/images/categories/sets/lilies-03.webp",
    "/images/categories/sets/lilies-04.webp",
  ],
  "magic-candles": [
    "/images/categories/sets/magic-candles-01.webp",
    "/images/categories/sets/magic-candles-02.webp",
    "/images/categories/sets/magic-candles-03.webp",
  ],
  "neon-light": [
    "/images/categories/sets/neon-light-01.webp",
    "/images/categories/sets/neon-light-02.webp",
    "/images/categories/sets/neon-light-03.webp",
  ],
  "orange-pattern": [
    "/images/categories/sets/orange-pattern-01.webp",
    "/images/categories/sets/orange-pattern-02.webp",
    "/images/categories/sets/orange-pattern-03.webp",
  ],
  "peach-mood": [
    "/images/categories/sets/peach-mood-01.webp",
    "/images/categories/sets/peach-mood-02.webp",
    "/images/categories/sets/peach-mood-03.webp",
  ],
  "pink-blush": [
    "/images/categories/sets/pink-blush-01.webp",
    "/images/categories/sets/pink-blush-02.webp",
    "/images/categories/sets/pink-blush-03.webp",
    "/images/categories/sets/pink-blush-04.webp",
  ],
  "play-of-shades": [
    "/images/categories/sets/play-of-shades-01.webp",
    "/images/categories/sets/play-of-shades-02.webp",
    "/images/categories/sets/play-of-shades-03.webp",
  ],
  playground: [
    "/images/categories/sets/playgroud-01.webp",
    "/images/categories/sets/playgroud-02.webp",
    "/images/categories/sets/playgroud-03.webp",
    "/images/categories/sets/playgroud-04.webp",
  ],
  "polka-dots": [
    "/images/categories/sets/polka-dots-01.webp",
    "/images/categories/sets/polka-dots-02.webp",
    "/images/categories/sets/polka-dots-03.webp",
  ],
  safari: [
    "/images/categories/sets/safari-01.webp",
    "/images/categories/sets/safari-02.webp",
    "/images/categories/sets/safari-03.webp",
    "/images/categories/sets/safari-04.webp",
  ],
  sicilian: [
    "/images/categories/sets/sicilian-01.webp",
    "/images/categories/sets/sicilian-02.webp",
    "/images/categories/sets/sicilian-03.webp",
  ],
  sky: [
    "/images/categories/sets/sky-01.webp",
    "/images/categories/sets/sky-02.webp",
    "/images/categories/sets/sky-03.webp",
    "/images/categories/sets/sky-04.webp",
  ],
  "stylish-wave": [
    "/images/categories/sets/stylish-wave-01.webp",
    "/images/categories/sets/stylish-wave-02.webp",
    "/images/categories/sets/stylish-wave-03.webp",
    "/images/categories/sets/stylish-wave-04.webp",
  ],
  "the-cubes": [
    "/images/categories/sets/the-cubes-02.webp",
    "/images/categories/sets/the-cubes-03.webp",
    "/images/categories/sets/the-cubes-04.webp",
  ],
  "total-white": [
    "/images/categories/sets/total-white-01.webp",
    "/images/categories/sets/total-white-02.webp",
    "/images/categories/sets/total-white-03.webp",
  ],
  "velvet-folds": [
    "/images/categories/sets/velvet-folds-01.webp",
    "/images/categories/sets/velvet-folds-02.webp",
    "/images/categories/sets/velvet-folds-03.webp",
  ],
  "velvet-wave": [
    "/images/categories/sets/velvet-wave-01.webp",
    "/images/categories/sets/velvet-wave-02.webp",
    "/images/categories/sets/velvet-wave-03.webp",
    "/images/categories/sets/velvet-wave-04.webp",
  ],
  "wooden-accent": [
    "/images/categories/sets/wooden-accent-01.webp",
    "/images/categories/sets/wooden-accent-02.webp",
    "/images/categories/sets/wooden-accent-03.webp",
  ],
}

export function getSetsImagePaths(slug: string): string[] | undefined {
  return SETS_IMAGES_BY_SLUG[slug]
}
