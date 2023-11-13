'use client';
import dynamic from 'next/dynamic';
import { Toaster } from 'react-hot-toast';

const CartProvider = dynamic(
  () => import('react-use-cart').then((mod) => mod.CartProvider),
  { ssr: false },
);
import { Animator, Banner, Footer, Navbar } from '@/components/Shared';
import './globals.css';
import { Suspense } from 'react';
import { WhatsappIcon } from '@/components/Assets/Icons';
import { PHONE_NO } from '@/constants/contact';

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
              <Toaster />
              {children}
              <div className="fixed bottom-8 right-8">
                <a href={`https://wa.me/${PHONE_NO}`} target="_blank">
                  <WhatsappIcon />
                </a>
              </div>
              <Footer />
            </Animator>
          </CartProvider>
        </Suspense>
      </body>
    </html>
  );
}
