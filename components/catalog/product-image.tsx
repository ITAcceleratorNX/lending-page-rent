"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

type ProductImageProps = {
  src: string
  fallbackSrc: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
  /** contain — целиком в рамке (для каталоговых PNG/WebP), cover — обрезка под блок */
  fit?: "contain" | "cover"
}

export function ProductImage({
  src,
  fallbackSrc,
  alt,
  className,
  sizes = "(max-width: 768px) 50vw, 320px",
  priority = false,
  fit = "contain",
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      quality={85}
      sizes={sizes}
      priority={priority}
      className={cn(
        fit === "contain"
          ? "object-contain object-center p-3 md:p-5"
          : "object-cover object-center",
        className,
      )}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
    />
  )
}
