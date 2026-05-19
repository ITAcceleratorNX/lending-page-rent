"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { CatalogCategory, CatalogProduct } from "@/lib/catalog"
import { ProductCard } from "./product-card"
import { ProductModal } from "./product-modal"
import { categoryAlt } from "@/lib/media"

type CategoryCatalogProps = {
  category: CatalogCategory
  products: CatalogProduct[]
}

export function CategoryCatalog({ category, products }: CategoryCatalogProps) {
  const [selectedProduct, setSelectedProduct] = useState<CatalogProduct | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  function handleSelect(product: CatalogProduct) {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  function handleModalOpenChange(open: boolean) {
    setModalOpen(open)
    if (!open) {
      setSelectedProduct(null)
    }
  }

  return (
    <>
      <section className="relative border-b border-border bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-4 py-10 md:py-14">
          <Link
            href="/#catalog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-luxury text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>К каталогу</span>
          </Link>
          <div className="grid md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_320px] gap-8 items-end">
            <div>
              <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">
                Каталог
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
                {category.name}
              </h1>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                {products.length}{" "}
                {products.length === 1
                  ? "позиция"
                  : products.length < 5
                    ? "позиции"
                    : "позиций"}{" "}
                в аренду. Нажмите на товар, чтобы посмотреть фото и цену, затем напишите нам в
                WhatsApp.
              </p>
            </div>
            <div className="relative hidden md:block aspect-[4/3] border border-border overflow-hidden">
              <Image
                src={category.image}
                alt={categoryAlt(category.name)}
                fill
                quality={88}
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={category}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        category={category}
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
      />
    </>
  )
}
