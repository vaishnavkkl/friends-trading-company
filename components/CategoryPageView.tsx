import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { PageShell } from '@/components/PageShell';
import { ProductCard } from '@/components/ProductCard';
import { SectionWrapper } from '@/components/SectionWrapper';
import { getProductsByCategory } from '@/lib/catalog';
import { categoryWhatsAppMessage, productWhatsAppMessage, whatsappUrl } from '@/lib/whatsapp';
import type { Category } from '@/types/catalog';

export function CategoryPageView({ category }: { category: Category }) {
  const whatsapp = whatsappUrl(categoryWhatsAppMessage(category.name));
  const products = getProductsByCategory(category.slug);

  return (
    <PageShell>
      <section className="relative overflow-hidden px-5 pb-14 pt-32 sm:px-8 lg:px-10">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.62fr]">
          <div className="relative">
            <Link href="/" prefetch className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white">
              <ArrowLeft size={17} />
              Back to Home
            </Link>
            <h1 className="text-5xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              {category.name} in <span className="text-gradient">Jubail</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{category.description}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={whatsapp} className="gap-2">
                <MessageCircle size={18} />
                Ask for latest stock on WhatsApp
              </ButtonLink>
              <ButtonLink href="#featured" variant="secondary">
                View featured items
              </ButtonLink>
            </div>
          </div>
          <div className="glass relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2rem] p-3">
            <div className="absolute inset-0 bg-radial-cyan opacity-55" />
            <Image
              src={category.image}
              alt={`${category.name} category photo`}
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 88vw"
              className="rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <SectionWrapper
        title={`${category.name} types`}
        subtitle="This page shows only selected examples. Exact inventory changes frequently, so contact us for the current list."
        className="pt-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.types.map((type) => (
            <div key={type} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <Check className="mb-8 text-cyan-200" size={24} />
              <h2 className="text-xl font-semibold text-white">{type}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-400">Ask our team for available options and best current price.</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="featured"
        title={`Featured ${category.name.toLowerCase()} examples`}
        subtitle="A small preview of popular items and service requests. The full stock list is shared directly on WhatsApp."
        className="pt-8"
      >
        {products.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.productSlug} product={product} />
            ))}
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {category.featuredItems.slice(0, 5).map((item) => (
              <article key={item} className="glass group flex min-h-72 flex-col overflow-hidden rounded-[2rem] p-6 transition hover:border-cyan-200/45 hover:shadow-glow">
                <div className="mb-8 grid h-28 w-28 place-items-center rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                  <Image
                    src={category.image}
                    alt={`${item} photo`}
                    width={140}
                    height={140}
                    className="h-full w-full rounded-[1.5rem] object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/75">{category.name}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-tight text-white">{item}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-400">Availability, condition, and price can be confirmed through WhatsApp.</p>
                <a
                  href={whatsappUrl(productWhatsAppMessage(item))}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white"
                >
                  <MessageCircle size={17} />
                  Ask Best Price
                </a>
              </article>
            ))}
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="pt-8">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/16 via-blue-500/10 to-transparent" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white sm:text-5xl">Need the latest {category.name} stock?</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Send a quick message with your budget and preferred condition. We will reply with available options.
              </p>
            </div>
            <ButtonLink href={whatsapp} className="shrink-0 gap-2">
              <MessageCircle size={18} />
              Ask for latest stock on WhatsApp
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
