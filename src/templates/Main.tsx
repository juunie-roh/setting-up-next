import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="min-h-screen w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto">
      <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="flex items-baseline gap-4">
          <h1 className="text-xl font-bold text-gray-900 lg:text-3xl">
            <Link href="/">{AppConfig.title}</Link>
          </h1>
          <p className="lg:text-lg">Header Area Here</p>
        </div>
        <a
          className="pointer-events-auto flex place-items-center gap-2 p-0 lg:p-2 lg:text-lg"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-48">
        {props.children}
      </main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Made by&nbsp;
        {AppConfig.author}
        <a href="https://juun.vercel.app">Juun</a>
      </footer>
    </div>
  </div>
);

export { Main };
