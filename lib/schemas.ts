import { z } from 'zod';

export const CompanySchema = z.object({
  name: z.string().min(1),
  location: z.string().min(1),
  whatsappNumber: z.string().min(5),
  instagramHandle: z.string().optional().or(z.literal(''))
});

export const CategorySchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string(),
  image: z.string().url().or(z.string().startsWith('/')),
  types: z.array(z.string()).default([]),
  featuredItems: z.array(z.string()).default([])
});

export const ProductSchema = z.object({
  name: z.string().min(1),
  productSlug: z.string().min(1),
  brand: z.string().min(1),
  category: z.string().min(1),
  slug: z.string().min(1),
  condition: z.string().min(1),
  price: z.string().min(1),
  originalPrice: z.string().optional().or(z.literal('')),
  image: z.string().min(1),
  summary: z.string().min(1),
  details: z.array(z.string()).default([]),
  sourceName: z.string().default('Unsplash'),
  sourceUrl: z.string().url().or(z.string().startsWith('https')).default('https://unsplash.com')
});

export const BrandOfferSchema = z.object({
  name: z.string(),
  category: z.string(),
  offer: z.string()
});

export const CatalogSchema = z.object({
  company: CompanySchema,
  categories: z.array(CategorySchema),
  featuredProducts: z.array(ProductSchema),
  brandOffers: z.array(BrandOfferSchema),
  services: z.array(z.string())
});

export type ValidatedCatalog = z.infer<typeof CatalogSchema>;
export type ValidatedProduct = z.infer<typeof ProductSchema>;
export type ValidatedCategory = z.infer<typeof CategorySchema>;
