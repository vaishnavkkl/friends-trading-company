export type Company = {
  name: string;
  location: string;
  whatsappNumber: string;
  instagramHandle: string;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  image: string;
  types: string[];
  featuredItems: string[];
};

export type Product = {
  name: string;
  productSlug: string;
  brand: string;
  category: string;
  slug: string;
  condition: string;
  price: string;
  originalPrice?: string;
  image: string;
  summary: string;
  details: string[];
  sourceName: string;
  sourceUrl: string;
};

export type BrandOffer = {
  name: string;
  category: string;
  offer: string;
};

export type Catalog = {
  company: Company;
  categories: Category[];
  featuredProducts: Product[];
  brandOffers: BrandOffer[];
  services: string[];
};
