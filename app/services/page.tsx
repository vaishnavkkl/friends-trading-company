import { CategoryPageView } from '@/components/CategoryPageView';
import { categoryMetadata, getRequiredCategory } from '@/lib/category-page';

export const metadata = categoryMetadata('services');

export default function ServicesPage() {
  return <CategoryPageView category={getRequiredCategory('services')} />;
}
