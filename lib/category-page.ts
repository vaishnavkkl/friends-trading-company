import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/catalog';

export function getRequiredCategory(slug: string) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    throw new Error(`Missing category data for slug: ${slug}`);
  }

  return category;
}

export function categoryMetadata(slug: string): Metadata {
  const category = getRequiredCategory(slug);

  return {
    title: `${category.name} Deals in Jubail`,
    description: `${category.description} Ask Friends Trading Company for latest ${category.name} stock and best price in Jubail, Saudi Arabia.`,
    keywords: [
      `${category.name} Jubail`,
      `${category.name} Saudi Arabia`,
      'Electronics Shop in Jubail',
      'Best Mobile & Laptop Deals Saudi Arabia'
    ]
  };
}
