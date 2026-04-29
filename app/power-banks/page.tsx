import { CategoryPageView } from '@/components/CategoryPageView';
import { categoryMetadata, getRequiredCategory } from '@/lib/category-page';

export const metadata = categoryMetadata('power-banks');

export default function PowerBanksPage() {
  return <CategoryPageView category={getRequiredCategory('power-banks')} />;
}
