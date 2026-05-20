"use client"

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import type { CatalogCategory, CatalogProduct } from "@/lib/catalog/types"
import { formatProductPrice } from "@/lib/catalog/pricing"
import { whatsappUrl } from "@/lib/site"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ProductImage } from "./product-image"
import { cn } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"

type ProductModalProps = {
  product: CatalogProduct | null
  category: CatalogCategory
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductModal({ product, category, open, onOpenChange }: ProductModalProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [slideIndex, setSlideIndex] = useState(0)

  const slides =
    product && product.images.length > 0 ? product.images : product ? [category.image] : []

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return
    setSlideIndex(carouselApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api, onSelect])

  useEffect(() => {
    if (open && api) {
      api.scrollTo(0, true)
      setSlideIndex(0)
    }
  }, [open, product?.id, api])

  if (!product) return null

  const hasMultipleSlides = slides.length > 1

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-xl md:max-w-2xl p-0 gap-0 overflow-hidden border-border shadow-xl"
        closeClassName="top-3 right-3 z-30 flex size-10 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white opacity-100 shadow-md backdrop-blur-sm transition-colors hover:bg-black/65 hover:opacity-100 focus:ring-white/40 focus:ring-offset-0 data-[state=open]:bg-black/50 data-[state=open]:text-white [&_svg:not([class*='size-'])]:size-5"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>

        <div className="relative bg-white">
          <Carousel
            key={product.id}
            setApi={setApi}
            opts={{
              loop: hasMultipleSlides,
              align: "center",
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {slides.map((src, index) => (
                <CarouselItem key={`${product.id}-${index}`} className="basis-full pl-0">
                  <div className="flex h-[min(72vw,360px)] w-full items-center justify-center px-14 py-8 sm:h-[400px] sm:px-16">
                    <div className="relative h-full w-full">
                      <ProductImage
                        src={src}
                        fallbackSrc={category.image}
                        alt={`${product.name} — фото ${index + 1}`}
                        sizes="(max-width: 768px) 100vw, 640px"
                        priority={index === 0}
                        className="!p-2 sm:!p-4"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {hasMultipleSlides ? (
              <>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Предыдущее фото"
                  className="absolute left-3 top-1/2 z-20 size-10 -translate-y-1/2 rounded-full border-border/80 bg-background/95 shadow-md hover:bg-background"
                  onClick={() => api?.scrollPrev()}
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Следующее фото"
                  className="absolute right-3 top-1/2 z-20 size-10 -translate-y-1/2 rounded-full border-border/80 bg-background/95 shadow-md hover:bg-background"
                  onClick={() => api?.scrollNext()}
                >
                  <ChevronRight className="size-5" />
                </Button>

                <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Фото ${index + 1}`}
                      aria-current={slideIndex === index}
                      className={cn(
                        "size-2 rounded-full transition-colors",
                        slideIndex === index
                          ? "bg-accent scale-110"
                          : "bg-foreground/25 hover:bg-foreground/40",
                      )}
                      onClick={() => api?.scrollTo(index)}
                    />
                  ))}
                </div>
              </>
            ) : null}
          </Carousel>
        </div>

        <div className="p-6 md:p-8 space-y-5">
          <div>
            <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-2">
              {category.name}
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide leading-snug">
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
            rel="noopener noreferrer"
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
