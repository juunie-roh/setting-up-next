import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const menuData = [
  { id: 'about', name: 'about', path: '/about' },
  { id: 'item1', name: 'item1', path: '/item1' },
  { id: 'item2', name: 'item2', path: '/item2' },
];

const Main = (props: IMainProps) => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-8 py-4 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:px-12 lg:py-8">
          <div className="flex items-baseline gap-4">
            <h1 className="font-antonio text-xl font-bold text-gray-900 lg:text-3xl">
              <Link href="/">{AppConfig.title}</Link>
            </h1>
            <nav>
              {/* Active Links on Header Menu */}
              <ul className="flex gap-2 lg:text-lg">
                {menuData.map((menu) => {
                  return (
                    <li
                      className={`${
                        router.pathname === menu.path
                          ? 'text-gray-900 underline underline-offset-2 '
                          : 'text-gray-700 '
                      }inline-block rounded-lg px-2 hover:bg-gray-400 hover:text-gray-900`}
                      key={menu.id}
                    >
                      <Link href={menu.path}>{menu.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
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
        <main className="flex min-h-screen flex-col p-8 pt-32 lg:p-12 lg:pt-48">
          {props.children}
        </main>

        <footer className="border-t border-gray-300 py-6 text-center text-sm lg:py-8 lg:text-base">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Made
          by&nbsp;
          <a
            href="https://github.com/juunie-roh/setting-up-next"
            className="font-semibold"
          >
            {AppConfig.author}
          </a>
        </footer>
      </div>
    </div>
  );
};

export { Main };
