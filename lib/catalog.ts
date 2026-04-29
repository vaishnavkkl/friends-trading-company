import catalogData from '@/data/products.json';
import type { Catalog, Category, Product } from '@/types/catalog';

export const catalog = catalogData as Catalog;

export const categories: Category[] = catalog.categories;

export const featuredProducts: Product[] = catalog.featuredProducts;

export const brandOffers = catalog.brandOffers;

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return featuredProducts.filter((product) => product.slug === slug).slice(0, 6);
}

export function getProductBySlug(productSlug: string): Product | undefined {
  return featuredProducts.find((product) => product.productSlug === productSlug);
}
