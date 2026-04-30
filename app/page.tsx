import { CheckCircle2, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { BrandTicker } from '@/components/BrandTicker';
import { CategoryCard } from '@/components/CategoryCard';
import { HeroSection } from '@/components/HeroSection';
import { PageShell } from '@/components/PageShell';
import { ProductCard } from '@/components/ProductCard';
import { SectionWrapper } from '@/components/SectionWrapper';
import { categories, catalog, featuredProducts } from '@/lib/catalog';
import { whatsappUrl } from '@/lib/whatsapp';

const trustItems = [
  { label: '1000+ Happy Customers', icon: Sparkles },
  { label: 'Affordable Pricing', icon: CheckCircle2 },
  { label: 'Quality Checked Products', icon: ShieldCheck }
];

export default function HomePage() {
  const stockWhatsapp = whatsappUrl("Hello, please share the latest stock and best price from Friends Trading Company.");

  return (
    <PageShell>
      <HeroSection />
      <BrandTicker />

      <SectionWrapper
        id="categories"
        title="Browse high-demand categories"
        subtitle="A focused catalog of the products customers ask for most. Contact us for exact stock, condition, and today's best price."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Featured deals"
        subtitle="Sample products only. Availability and prices change, so WhatsApp is the fastest way to confirm the latest options."
        className="pt-8"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Repair and setup services"
        subtitle="Professional support for devices you already own, from common repairs to software setup and practical upgrades."
        className="pt-8"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {catalog.services?.map((service) => (
            <div key={service} className="glass rounded-[1.5rem] p-6 transition hover:border-cyan-200/40 hover:shadow-glow">
              <Wrench className="mb-8 text-cyan-200" size={26} />
              <h3 className="text-xl font-semibold text-white">{service}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">Ask for availability, diagnosis time, and current service pricing.</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Trusted for practical electronics deals" className="pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7">
                <Icon className="mb-8 text-cyan-200" size={28} />
                <p className="text-2xl font-semibold text-white">{item.label}</p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Follow us on Instagram"
        subtitle="Coming Soon"
        className="pt-8"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="aspect-square rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_35%_28%,rgba(32,230,255,0.22),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))]"
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/20 bg-gradient-to-r from-cyan-300/15 via-blue-500/10 to-white/[0.04] p-8 shadow-glow sm:p-12">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                We have 100+ products. Contact us for latest stock & best price.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Tell us the category, budget, and preferred condition. We will share available options directly.
              </p>
            </div>
            <ButtonLink href={stockWhatsapp} className="shrink-0">
              Ask for Latest Stock
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </PageShell>
  );
}
