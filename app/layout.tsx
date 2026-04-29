import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WhatsAppFloatingButton } from '@/components/WhatsAppFloatingButton';

export const metadata: Metadata = {
  title: {
    default: 'Friends Trading Company | Electronics Shop in Jubail',
    template: '%s | Friends Trading Company'
  },
  description:
    'Electronics shop in Jubail offering mobile, laptop, accessory, repair, and refurbished device deals across Saudi Arabia.',
  keywords: [
    'Electronics Shop in Jubail',
    'Best Mobile & Laptop Deals Saudi Arabia',
    'Friends Trading Company',
    'refurbished mobiles Jubail',
    'laptop repair Jubail'
  ],
  openGraph: {
    title: 'Friends Trading Company',
    description: 'Best mobile, laptop, accessory, and repair deals in Jubail, Saudi Arabia.',
    type: 'website',
    locale: 'en_US'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('ftc-theme')==='light')document.documentElement.classList.add('light')}catch(e){}`
          }}
        />
      </head>
      <body>
        <ScrollReveal />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
