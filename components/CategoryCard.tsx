import {
  ArrowUpRight,
  BatteryCharging,
  Cable,
  Cpu,
  Download,
  HardDrive,
  Headphones,
  Laptop,
  Music2,
  Plug,
  Settings,
  Shield,
  Smartphone,
  Wrench
} from 'lucide-react';
import Link from 'next/link';
import type { Category } from '@/types/catalog';

function CategoryVisual({ slug }: { slug: string }) {
  if (slug === 'mobiles') {
    return (
      <div className="category-visual category-mobile" aria-hidden="true">
        <div className="category-phone-shell">
          <span className="category-phone-speaker" />
          <Smartphone size={42} strokeWidth={1.6} />
          <span className="category-phone-loader" />
        </div>
        <Download className="category-float-icon category-float-a" size={20} />
        <Shield className="category-float-icon category-float-b" size={18} />
      </div>
    );
  }

  if (slug === 'laptops') {
    return (
      <div className="category-visual category-laptop" aria-hidden="true">
        <div className="category-laptop-screen">
          <Laptop size={44} strokeWidth={1.5} />
          <span className="category-install-bar" />
          <span className="category-install-dot" />
        </div>
        <div className="category-laptop-base" />
        <Settings className="category-float-icon category-float-a" size={20} />
      </div>
    );
  }

  if (slug === 'power-banks') {
    return (
      <div className="category-visual category-power" aria-hidden="true">
        <div className="category-battery-shell">
          <span className="category-battery-fill" />
          <BatteryCharging size={38} strokeWidth={1.6} />
        </div>
        <span className="category-charge-bolt" />
      </div>
    );
  }

  if (slug === 'tws-headsets') {
    return (
      <div className="category-visual category-audio" aria-hidden="true">
        <Headphones size={54} strokeWidth={1.45} />
        <Music2 className="category-music-note category-note-one" size={18} />
        <Music2 className="category-music-note category-note-two" size={15} />
        <span className="category-sound-wave category-wave-one" />
        <span className="category-sound-wave category-wave-two" />
      </div>
    );
  }

  if (slug === 'accessories') {
    return (
      <div className="category-visual category-accessories" aria-hidden="true">
        <div className="category-accessory-item category-accessory-plug">
          <Plug size={24} />
        </div>
        <div className="category-accessory-item category-accessory-cable">
          <Cable size={24} />
        </div>
        <div className="category-accessory-item category-accessory-shield">
          <Shield size={24} />
        </div>
      </div>
    );
  }

  return (
    <div className="category-visual category-services" aria-hidden="true">
      <div className="category-service-laptop">
        <Laptop size={48} strokeWidth={1.45} />
        <span className="category-repair-scan" />
      </div>
      <Wrench className="category-repair-tool" size={23} />
      <HardDrive className="category-float-icon category-float-b" size={18} />
      <Cpu className="category-float-icon category-float-a" size={18} />
    </div>
  );
}

export function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="reveal-card group h-full transition duration-300 hover:-translate-y-2 hover:scale-[1.02] active:scale-[0.99]">
      <Link
        href={`/${category.slug}`}
        prefetch
        className="glass relative flex h-full min-h-72 overflow-hidden rounded-[2rem] p-6 transition duration-300 hover:border-cyan-200/55 hover:shadow-glow-strong"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="relative z-10 flex h-full w-full flex-col">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{category.description}</p>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-cyan-100 transition group-hover:border-cyan-200/45 group-hover:bg-cyan-200/10">
              <ArrowUpRight size={19} />
            </span>
          </div>
          <div className="mt-auto flex items-end justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {category.types.slice(0, 3).map((type) => (
                <span key={type} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                  {type}
                </span>
              ))}
            </div>
            <CategoryVisual slug={category.slug} />
          </div>
        </div>
      </Link>
    </div>
  );
}
