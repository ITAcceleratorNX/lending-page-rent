import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { CategoryCatalog } from "@/components/catalog/category-catalog"
import { SiteShell } from "@/components/site-shell"
import { getAllCategorySlugs, getCategoryBySlug, getProductsByCategory } from "@/lib/catalog"
import type { CategoryKey } from "@/lib/catalog"
import { categoryAlt } from "@/lib/media"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    return { title: "Категория не найдена — Rent Me" }
  }

  return {
    title: `${category.name} — каталог Rent Me`,
    description: `Аренда: ${category.name.toLowerCase()} в Алматы. Просмотр ассортимента и заказ через WhatsApp.`,
    openGraph: {
      title: `${category.name} — Rent Me`,
      description: `Каталог ${category.name.toLowerCase()} для мероприятий в Алматы.`,
      images: [{ url: category.image, alt: categoryAlt(category.name) }],
    },
  }
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(slug as CategoryKey)

  return (
    <SiteShell>
      <main className="min-h-screen bg-background">
        <CategoryCatalog category={category} products={products} />
      </main>
    </SiteShell>
  )
}
