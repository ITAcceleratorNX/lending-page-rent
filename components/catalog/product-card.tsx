"use client"

import type { CatalogCategory, CatalogProduct } from "@/lib/catalog/types"
import { formatProductPrice } from "@/lib/catalog/pricing"
import { categoryAlt } from "@/lib/media"
import { ProductImage } from "./product-image"

type ProductCardProps = {
  product: CatalogProduct
  category: CatalogCategory
  onSelect: (product: CatalogProduct) => void
}

export function ProductCard({ product, category, onSelect }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group text-left bg-card border border-border hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md w-full"
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        <ProductImage
          src={product.images[0] ?? category.image}
          fallbackSrc={category.image}
          alt={`${product.name} — ${categoryAlt(category.name)}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
        />
      </div>
      <div className="p-4 md:p-5">
        <h3 className="text-sm md:text-base font-medium leading-snug line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-accent font-medium text-sm md:text-base">
          {formatProductPrice(product)}
          <span className="text-xs text-muted-foreground font-normal"> / шт</span>
        </p>
      </div>
    </button>
  )
}
