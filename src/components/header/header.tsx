'use client';

import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentState } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from '@/lib/features/counterSlice';
import { antonio } from '@/styles/fonts';
import { AppConfig } from '@/utils/AppConfig';

import styles from './header.module.css';

const menus = [
  { id: 'about', name: 'About', path: '/about' },
  { id: 'portfolio', name: 'Portfolio', path: '/portfolio' },
  { id: 'techrecord', name: 'Tech Record', path: '/techrecord' },
];

export default function Header() {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const count = useSelector((state: ComponentState) => state.value);
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div className={styles.header_wrap}>
        <h1 className={`${antonio.className} ${styles.title}`}>
          <Link href="/">{AppConfig.title}</Link>
        </h1>
        <nav>
          <ul className="hidden gap-1 sm:flex lg:gap-2 lg:text-lg">
            {menus.map((menu) => {
              return (
                <li
                  className={`${path === menu.path ? styles.listItemOn : styles.listItemOff} ${styles.listItem}`}
                  key={menu.id}
                >
                  <Link href={menu.path}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.redux}>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrease
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => dispatch(increment())}>
          Increase
        </button>
      </div>
      <Link
        className={styles.vercel}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{' '}
        <Image
          src="/vercel.svg"
          alt="Vercel logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <button
        type="button"
        className="flex sm:hidden"
        onClick={() => setIsOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="size-6" aria-hidden="true" />
      </button>
      <Dialog as="div" className="sm:hidden" open={isOpen} onClose={setIsOpen}>
        <div className="fixed inset-0 z-10">
          <Dialog.Panel className={styles.panel}>
            <div className="flex items-center justify-between">
              <h1 className={`${antonio.className} ${styles.panelTitle}`}>
                <Link href="/">{AppConfig.title}</Link>
              </h1>
              <button
                type="button"
                className="rounded-md text-gray-700 dark:text-gray-400"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Close main menu</span>
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-4">
                  {menus.map((menu) => {
                    return (
                      <Link
                        href={menu.path}
                        className={styles.panelItem}
                        key={menu.id}
                        onClick={() => setIsOpen(false)}
                      >
                        {menu.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link
              className={styles.vercel}
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </Link>
          </Dialog.Panel>
        </div>
      </Dialog>
    </header>
  );
}
