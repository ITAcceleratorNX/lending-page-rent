import Link from "next/link"
import { SiteShell } from "@/components/site-shell"

export default function CatalogNotFound() {
  return (
    <SiteShell>
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="font-serif text-3xl font-light tracking-wide mb-4">Категория не найдена</h1>
          <p className="text-muted-foreground mb-8">
            Такого раздела каталога нет. Вернитесь на главную и выберите категорию из списка.
          </p>
          <Link
            href="/#catalog"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-4 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            К каталогу
          </Link>
        </div>
      </main>
    </SiteShell>
  )
}
