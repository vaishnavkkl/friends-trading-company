import type { ReactNode } from 'react';

type SectionWrapperProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({ id, eyebrow, title, subtitle, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`content-section scroll-reveal mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/75">{eyebrow}</p> : null}
          {title ? <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">{title}</h2> : null}
          {subtitle ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{subtitle}</p> : null}
        </div>
      )}
      {children}
    </section>
  );
}
