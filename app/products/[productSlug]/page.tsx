import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { PageShell } from '@/components/PageShell';
import { ProductCard } from '@/components/ProductCard';
import { SectionWrapper } from '@/components/SectionWrapper';
import { featuredProducts, getProductBySlug, getProductsByCategory } from '@/lib/catalog';
import { productWhatsAppMessage, whatsappUrl } from '@/lib/whatsapp';

type ProductPageProps = {
  params: {
    productSlug: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return featuredProducts.map((product) => ({ productSlug: product.productSlug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.productSlug);

  if (!product) {
    return {
      title: 'Product'
    };
  }

  return {
    title: `${product.name} Deal in Jubail`,
    description: `${product.name} from Friends Trading Company in Jubail. ${product.summary}`,
    keywords: [product.name, product.brand, product.category, 'Electronics Shop in Jubail', 'Best Mobile & Laptop Deals Saudi Arabia']
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.productSlug);

  if (!product) {
    notFound();
  }

  const whatsapp = whatsappUrl(productWhatsAppMessage(product.name));
  const related = getProductsByCategory(product.slug).filter((item) => item.productSlug !== product.productSlug).slice(0, 3);

  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:px-10">
        <div className="absolute inset-0 cyber-grid opacity-35" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div className="glass relative overflow-hidden rounded-[2rem] p-4">
            <div className="absolute inset-0 bg-radial-cyan opacity-70" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40">
              <Image
                src={product.image}
                alt={`${product.name} product photo`}
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative">
            <Link href={`/${product.slug}`} prefetch className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
              <ArrowLeft size={17} />
              Back to {product.category}
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/75">{product.brand}</p>
            <h1 className="mt-4 text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">{product.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{product.summary}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Offer</p>
                <p className="mt-3 text-2xl font-semibold text-cyan-100">{product.price}</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Condition</p>
                <p className="mt-3 text-xl font-semibold text-white">{product.condition}</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Stock</p>
                <p className="mt-3 text-xl font-semibold text-white">Confirm on WhatsApp</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsapp} className="gap-2">
                <MessageCircle size={18} />
                Ask Best Price on WhatsApp
              </ButtonLink>
              <ButtonLink href={`/${product.slug}`} variant="secondary">
                Browse {product.category}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper title="What to confirm before buying" className="pt-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {product.details?.map((detail) => (
            <div key={detail} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <CheckCircle2 className="mb-8 text-cyan-200" size={24} />
              <p className="text-lg font-semibold leading-7 text-white">{detail}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Lead-first buying process" className="pt-8">
        <div className="glass grid gap-8 rounded-[2rem] p-8 md:grid-cols-[auto_1fr] md:items-center sm:p-10">
          <ShieldCheck className="text-cyan-200" size={44} />
          <div>
            <h2 className="text-3xl font-semibold text-white">No checkout. No cart. Direct deal confirmation.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Send the product name on WhatsApp. The team will confirm available stock, condition, exact price, and pickup or delivery options in Jubail.
            </p>
            <p className="mt-4 text-xs text-slate-500">Photo source: {product.sourceName}. Product photos are representative catalog visuals; exact item condition is confirmed before purchase.</p>
          </div>
        </div>
      </SectionWrapper>

      {related.length > 0 ? (
        <SectionWrapper title="Related deals" subtitle="A few similar options from the same category." className="pt-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.productSlug} product={item} />
            ))}
          </div>
        </SectionWrapper>
      ) : null}
    </PageShell>
  );
}
