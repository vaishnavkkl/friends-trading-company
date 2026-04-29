import { ArrowDown, BatteryCharging, Cpu, Laptop, MessageCircle, Smartphone, Wrench } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';
import { whatsappUrl } from '@/lib/whatsapp';

export function HeroSection() {
  const whatsapp = whatsappUrl("Hello, I'm looking for the best electronics deals in Jubail. Please share available options.");

  return (
    <section className="relative min-h-[92vh] overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-10">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(36,124,255,0.18),rgba(32,230,255,0.08),rgba(255,255,255,0.02),rgba(36,124,255,0.14))] bg-[length:220%_220%] animate-gradient-drift" />
      <div className="relative mx-auto grid min-h-[calc(92vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.88fr]">
        <div className="max-w-4xl">
          <h1
            className="hero-reveal text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Best Deals on Electronics in <span className="text-gradient">Jubail</span>
          </h1>
          <p
            className="hero-reveal mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl [animation-delay:90ms]"
          >
            New & Refurbished Devices at Unmatched Prices
          </p>
          <div
            className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row [animation-delay:160ms]"
          >
            <ButtonLink href="#categories" className="gap-2">
              Explore Categories
              <ArrowDown size={18} />
            </ButtonLink>
            <ButtonLink href={whatsapp} variant="secondary" className="gap-2">
              <MessageCircle size={18} />
              Get Best Deal on WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div
          className="hero-reveal hero-service-animation relative mx-auto aspect-square w-full max-w-xl [animation-delay:140ms]"
          aria-hidden="true"
        >
          <div className="absolute inset-8 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />

          <div className="hero-device laptop-device">
            <div className="laptop-screen">
              <div className="screen-glow" />
              <div className="screen-line screen-line-one" />
              <div className="screen-line screen-line-two" />
              <div className="screen-line screen-line-three" />
              <Cpu className="screen-chip" size={38} />
            </div>
            <div className="laptop-base" />
          </div>

          <div className="hero-device phone-device">
            <div className="phone-speaker" />
            <Smartphone className="phone-icon" size={72} strokeWidth={1.6} />
            <div className="phone-scan" />
          </div>

          <div className="service-node service-node-wrench">
            <Wrench size={24} />
          </div>
          <div className="service-node service-node-battery">
            <BatteryCharging size={24} />
          </div>
          <div className="service-node service-node-laptop">
            <Laptop size={24} />
          </div>

          <span className="signal-dot signal-dot-one" />
          <span className="signal-dot signal-dot-two" />
          <span className="signal-dot signal-dot-three" />
        </div>
      </div>
    </section>
  );
}
