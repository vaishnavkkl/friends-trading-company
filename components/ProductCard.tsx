import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import type { Product } from '@/types/catalog';
import { productWhatsAppMessage, whatsappUrl } from '@/lib/whatsapp';

export function ProductCard({ product }: { product: Product }) {
  const href = whatsappUrl(productWhatsAppMessage(product.name));

  return (
    <article
      className="glass product-card reveal-card group relative flex h-full min-h-[31rem] overflow-hidden rounded-[2rem] p-5 transition duration-300 hover:border-cyan-200/45 hover:shadow-glow"
    >
      <div className="flex w-full flex-col">
        <div className="relative mb-6 grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-cyan-200/[0.03]">
          <div className="absolute inset-0 bg-radial-cyan opacity-80" />
          <Image
            src={product.image}
            alt={`${product.name} product visual`}
            width={900}
            height={675}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
            className="relative h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        </div>

        <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
          <span>{product.brand}</span>
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 tracking-normal text-slate-200">{product.condition}</span>
        </div>
        <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{product.summary}</p>

        <div className="mt-auto pt-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xl font-semibold text-cyan-100">{product.price}</p>
              {product.originalPrice ? <p className="mt-1 text-xs text-slate-500">{product.originalPrice}</p> : null}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-4 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              <MessageCircle size={17} />
              Ask Price
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
