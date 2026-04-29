import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { categories, catalog } from '@/lib/catalog';
import { whatsappUrl } from '@/lib/whatsapp';

export function Footer() {
  const whatsapp = whatsappUrl("Hello, I want to know more about Friends Trading Company's latest stock.");

  return (
    <footer className="border-t border-white/10 bg-black/25">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-sm font-black text-cyan-100">
              FTC
            </span>
            <div>
              <p className="font-semibold text-white">{catalog.company.name}</p>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-400">
                <MapPin size={14} />
                {catalog.company.location}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
            A static product catalog built for quick browsing and direct lead generation through WhatsApp.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Categories</p>
          <div className="grid gap-3">
            {categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}`} prefetch className="text-sm text-slate-400 transition hover:text-white">
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Lead Channel</p>
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-full bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Contact on WhatsApp
          </a>
          <p className="mt-5 text-sm text-slate-500">Instagram coming soon.</p>
        </div>
      </div>
    </footer>
  );
}
