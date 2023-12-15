import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type ReactNode, useState } from 'react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full px-1 text-gray-700 antialiased">
      {props.meta}

      <div className="mx-auto">
        <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-8 py-4 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:px-12 lg:py-8">
          <div className="flex items-baseline gap-4">
            <h1 className="font-antonio text-2xl font-bold text-gray-900 dark:text-gray-100 lg:text-3xl">
              <Link href="/">{AppConfig.title}</Link>
            </h1>
            <nav>
              {/* Active Links on Header Menu */}
              <ul className="hidden gap-1 sm:flex lg:gap-2 lg:text-lg">
                {menuData.map((menu) => {
                  return (
                    <li
                      className={`${
                        router.pathname === menu.path
                          ? 'text-gray-900 underline underline-offset-2 dark:text-gray-100 '
                          : 'text-gray-700 dark:text-gray-400 '
                      }inline-block rounded-lg px-2 hover:bg-gray-400 hover:text-gray-900 dark:hover:bg-neutral-800 dark:hover:text-gray-100`}
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
            className="pointer-events-auto hidden place-items-center gap-2 p-0 sm:flex lg:p-2 lg:text-lg"
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
          <button
            type="button"
            className="flex sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <Dialog
            as="div"
            className="sm:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10">
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto from-zinc-200 px-8 py-4 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <h1 className="font-antonio text-2xl font-bold text-gray-900 dark:text-gray-100">
                    <Link href="/">{AppConfig.title}</Link>
                  </h1>
                  <button
                    type="button"
                    className="rounded-md text-gray-700 dark:text-gray-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-4">
                      {menuData.map((menu) => {
                        return (
                          <Link
                            href={menu.path}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100"
                            key={menu.id}
                          >
                            {menu.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <a
                  className="pointer-events-auto absolute bottom-4 -mx-8 block w-full place-items-center gap-2 overflow-hidden p-0 text-center"
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  By{' '}
                  <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className="inline-block dark:invert"
                    width={100}
                    height={24}
                    priority
                  />
                </a>
              </Dialog.Panel>
            </div>
          </Dialog>
        </header>
        <main className="flex min-h-screen flex-col p-8 pt-32 lg:p-12 lg:pt-48">
          {props.children}
        </main>

        <footer className="border-t border-gray-300 py-6 text-center text-sm dark:border-neutral-800 lg:py-8 lg:text-base">
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
