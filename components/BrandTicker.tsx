import { brandOffers } from '@/lib/catalog';

export function BrandTicker() {
  const offers = [...brandOffers, ...brandOffers];

  return (
    <section className="brand-ticker relative border-y border-white/10 bg-black/30 py-5">
      <div className="ticker-edge ticker-edge-left" />
      <div className="ticker-edge ticker-edge-right" />
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 px-3 hover:[animation-play-state:paused]">
          {offers.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-3 shadow-[0_0_24px_rgba(32,230,255,0.08)]"
            >
              <span className="text-sm font-semibold text-white">{brand.name}</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span className="text-sm text-slate-300">{brand.offer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
