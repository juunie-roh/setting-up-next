import '@/styles/global.css';

import type { Metadata } from 'next';
import React from 'react';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

import StoreProvider from './StoreProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | Juun',
    default: 'Loading ...',
  },
  description: 'Generated by Next.js',
};

export default function RootLayout({
  // must accept a children prop
  // will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StoreProvider>
          <div className="min-h-screen w-full px-1 text-gray-700 antialiased">
            <div className="mx-auto flex min-h-screen flex-col justify-between">
              <Header />
              <main className="flex flex-col p-8 pt-24 lg:p-12 lg:pt-32">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
