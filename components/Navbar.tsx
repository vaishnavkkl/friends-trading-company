'use client';

import { Menu, MessageCircle, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { categories } from '@/lib/catalog';
import { whatsappUrl } from '@/lib/whatsapp';

const primaryLinks = categories.slice(0, 4);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsapp = whatsappUrl("Hello, I'm looking for electronics deals in Jubail. Please share today's best offers.");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <Link href="/" className="flex items-center gap-3" aria-label="Friends Trading Company home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-sm font-black text-cyan-100 shadow-glow">
            FTC
          </span>
          <span className="hidden text-sm font-semibold text-white sm:block">Friends Trading Company</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {primaryLinks.map((link) => (
            <Link key={link.slug} href={`/${link.slug}`} prefetch className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link href="/services" prefetch className="text-sm font-medium text-slate-300 transition hover:text-white">
            Services
          </Link>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 lg:hidden">
          <div className="grid gap-2">
            {categories.map((link) => (
              <Link
                key={link.slug}
                href={`/${link.slug}`}
                prefetch
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <ThemeToggle />
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              <MessageCircle size={17} />
              Get Best Deal
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
