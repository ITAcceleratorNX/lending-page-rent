"use client"

import { ArrowRight } from "lucide-react"
import type { CatalogCategory, CatalogProduct } from "@/lib/catalog"
import { formatProductPrice } from "@/lib/catalog"
import { whatsappUrl } from "@/lib/site"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProductImage } from "./product-image"

type ProductModalProps = {
  product: CatalogProduct | null
  category: CatalogCategory
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductModal({ product, category, open, onOpenChange }: ProductModalProps) {
  if (!product) return null

  const slides =
    product.images.length > 0 ? product.images : [category.image]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl md:max-w-2xl p-0 gap-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="relative bg-secondary/20">
          <Carousel className="w-full">
            <CarouselContent>
              {slides.map((src, index) => (
                <CarouselItem key={`${product.id}-${index}`}>
                  <div className="relative aspect-[4/3] w-full">
                    <ProductImage
                      src={src}
                      fallbackSrc={category.image}
                      alt={`${product.name} — фото ${index + 1}`}
                      sizes="(max-width: 768px) 100vw, 640px"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {slides.length > 1 ? (
              <>
                <CarouselPrevious className="left-3 border-border bg-background/90" />
                <CarouselNext className="right-3 border-border bg-background/90" />
              </>
            ) : null}
          </Carousel>
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-2">
              {category.name}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide">
              {product.name}
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-accent font-medium">
            {formatProductPrice(product)}
            <span className="text-sm text-muted-foreground font-normal"> / шт</span>
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            <span>Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
