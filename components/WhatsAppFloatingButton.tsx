import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/whatsapp';

export function WhatsAppFloatingButton() {
  const href = whatsappUrl("Hello, I'm interested in your latest electronics deals. Please share available options.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Friends Trading Company on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-cyan-300 text-slate-950 shadow-glow transition hover:bg-white sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 rounded-full animate-soft-pulse" />
      <MessageCircle className="relative" size={25} />
    </a>
  );
}
