'use client';
import dynamic from 'next/dynamic';
const CartProvider = dynamic(
  () => import('react-use-cart').then((mod) => mod.CartProvider),
  { ssr: false },
);
import { Animator, Banner, Footer, Navbar } from '@/components/Shared';
import './globals.css';
import { Suspense } from 'react';

const metadata = {
  title: 'Funncart | A market place for handmade products',
  description: 'A market place for handmade products',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Suspense>
          <CartProvider>
            <Animator>
              <Banner />
              <Navbar />
              {children}
              <Footer />
            </Animator>
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
