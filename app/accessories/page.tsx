import { CategoryPageView } from '@/components/CategoryPageView';
import { categoryMetadata, getRequiredCategory } from '@/lib/category-page';

export const metadata = categoryMetadata('accessories');

export default function AccessoriesPage() {
  return <CategoryPageView category={getRequiredCategory('accessories')} />;
}
