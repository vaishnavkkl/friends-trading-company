import { CategoryPageView } from '@/components/CategoryPageView';
import { categoryMetadata, getRequiredCategory } from '@/lib/category-page';

export const metadata = categoryMetadata('laptops');

export default function LaptopsPage() {
  return <CategoryPageView category={getRequiredCategory('laptops')} />;
}
