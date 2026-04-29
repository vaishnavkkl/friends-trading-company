import { catalog } from '@/lib/catalog';

const baseNumber = catalog.company.whatsappNumber;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export function categoryWhatsAppMessage(category: string): string {
  return `Hello, I'm interested in ${category}. Please share available options.`;
}

export function productWhatsAppMessage(productName: string): string {
  return `Hello, I'm interested in ${productName}. Please share available options and best price.`;
}
