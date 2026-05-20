# Фото для каталога

Сюда сохраняйте изображения товаров. Сайт берёт файлы **только из этой папки**.

## Структура

```
catalog-photos/
  {категория}/
    {slug-товара}/
      01.jpg
      02.jpg
      03.jpg
```

- **категория** — ключ из каталога, например: `sets`, `chairs`, `glassware` (как в URL `/catalog/sets`).
- **slug-товара** — латиница через дефис, как в коде, например: `the-cubes`, `wooden-accent`.

### Пример для комплекта The Cubes

```
catalog-photos/sets/the-cubes/01.jpg
catalog-photos/sets/the-cubes/02.jpg
catalog-photos/sets/the-cubes/03.jpg
```

Форматы: **jpg**, **jpeg**, **png**, **webp** (если переименуете в коде расширение — см. `lib/catalog/product-images.ts`).

Пока файла нет — на карточке показывается фото категории.
