import { CategoryPageView } from '@/components/CategoryPageView';
import { categoryMetadata, getRequiredCategory } from '@/lib/category-page';

export const metadata = categoryMetadata('tws-headsets');

export default function TwsHeadsetsPage() {
  return <CategoryPageView category={getRequiredCategory('tws-headsets')} />;
}
