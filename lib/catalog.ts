import catalogConfig from '@/data/catalog.json';
import productsData from '@/data/products.json';
import { CatalogSchema } from './schemas';
import type { Category, Product } from '@/types/catalog';

const rawCatalog = {
  ...catalogConfig,
  ...productsData
};

const result = CatalogSchema.safeParse(rawCatalog);

if (!result.success) {
  console.error('❌ Data Validation Failed:', result.error.format());
}

export const catalog = result.success ? result.data : (rawCatalog as any);

export const categories: Category[] = catalog.categories || [];
export const featuredProducts: Product[] = catalog.featuredProducts || [];
export const brandOffers = catalog.brandOffers || [];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return featuredProducts.filter((product) => product.slug === slug).slice(0, 6);
}

export function getProductBySlug(productSlug: string): Product | undefined {
  return featuredProducts.find((product) => product.productSlug === productSlug);
}
