import fs from "node:fs"
import path from "node:path"
import type { CategoryKey } from "./types"

/** Корневая папка для фото каталога: `public/images/categories/` */
export const CATALOG_PHOTOS_BASE = "/images/categories"

const CATEGORY_FOLDER_MAP: Record<CategoryKey, string> = {
  sets: "sets",
  "table-settings": "table-settings",
  "dining-tables": "dining-tables",
  serpentine: "serpentine",
  chairs: "chairs",
  sofas: "sofas",
  lounge: "lounge-tables",
  tablecloths: "tablecloths",
  chargers: "charger-plates",
  "dinner-plates": "dining-plates",
  glassware: "glassware",
  "decor-vases": "decor-vases",
}

const IMAGE_FILE_RE = /^\d{2}\.(webp|png|jpe?g)$/i
const imageCache = new Map<string, string[]>()
const SLUG_DIR_ALIASES: Partial<Record<CategoryKey, Record<string, string>>> = {
  lounge: {
    "norman-set-3": "norman-set-of-3",
    "scholl-set-3": "scholl-set-of-3",
    "ruffles-set-3": "ruffles-set-of-3",
    "norman-fur-set-3": "norman-fur-set-of-3",
  },
  tablecloths: {
    "dume-rect": "dume-rectangular",
    "accord-rect": "accord-rectangular",
    "shiny-velvet-rect": "shiny-velvet-rectangular",
    "matte-velvet-rect": "matte-velvet-rectangular",
    "rondo-rect": "rondo-rectangular",
    "sonata-rect": "sonata-rectangular",
  },
  "dinner-plates": {
    "bruks-small-bowl": "bruks-bowl",
    "allen-set-4": "allen-set-of-4",
    "alten-appetizer": "alten",
    "burian-appetizer": "burian",
  },
  glassware: {
    "alonso-clear-3": "alonso-clear-set-of-3",
    "alonso-clear-2": "alonso-clear-set-of-2",
  },
}

/**
 * Возвращает реальные пути к фото товара из `public/images/categories/{folder}/{slug}/`.
 * Поддерживаются .webp, .png, .jpg, .jpeg и переменное количество файлов.
 */
export function productImagePaths(categoryKey: CategoryKey, slug: string): string[] {
  const folderName = CATEGORY_FOLDER_MAP[categoryKey] ?? categoryKey
  const cacheKey = `${folderName}/${slug}`
  const cached = imageCache.get(cacheKey)
  if (cached) return cached

  const alias = SLUG_DIR_ALIASES[categoryKey]?.[slug]
  const candidates = alias ? [slug, alias] : [slug]
  const files: string[] = []

  for (const candidate of candidates) {
    const dir = path.join(
      process.cwd(),
      "public",
      "images",
      "categories",
      folderName,
      candidate,
    )
    if (!fs.existsSync(dir)) continue

    const candidateFiles = fs
      .readdirSync(dir)
      .filter((file) => IMAGE_FILE_RE.test(file))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }))
      .map((file) => `${CATALOG_PHOTOS_BASE}/${folderName}/${candidate}/${file}`)

    if (candidateFiles.length > 0) {
      files.push(...candidateFiles)
      break
    }
  }

  imageCache.set(cacheKey, files)
  return files
}
