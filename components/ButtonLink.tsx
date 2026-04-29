import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function ButtonLink({ href, children, variant = 'primary', className = '', ...props }: ButtonLinkProps) {
  const styles =
    variant === 'primary'
      ? 'bg-cyan-300 text-slate-950 shadow-glow hover:bg-white'
      : 'border border-white/15 bg-white/[0.04] text-white hover:border-cyan-200/60 hover:bg-white/[0.08]';

  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 ${styles} ${className}`;
  const isExternal = href.startsWith('http');

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} prefetch className={classes} {...props}>
      {children}
    </Link>
  );
}
