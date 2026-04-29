import { CategoryPageView } from '@/components/CategoryPageView';
import { categoryMetadata, getRequiredCategory } from '@/lib/category-page';

export const metadata = categoryMetadata('mobiles');

export default function MobilesPage() {
  return <CategoryPageView category={getRequiredCategory('mobiles')} />;
}
