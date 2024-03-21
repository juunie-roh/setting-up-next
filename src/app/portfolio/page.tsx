import type { Metadata } from 'next';
import Link from 'next/link';

import { DefaultLayout } from '@/layouts';

const menus = [
  {
    title: '100 Days: CSS Works',
    href: '/100days/index.html',
    key: 1,
  },
  {
    title: 'Flow: Clone Coding',
    href: '/portfolio/flow',
    key: 2,
  },
];

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Take a look over the works I've done",
};

export default function PortfolioPage() {
  return (
    <>
      <DefaultLayout>
        <h2 className="text-gray-900 dark:text-gray-100">Portfolios</h2>
        <ul>
          {menus.map((menu) => {
            return (
              <li
                key={menu.key}
                className="text-xl text-gray-900 dark:text-gray-100"
              >
                <Link href={menu.href}>{menu.title}</Link>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    </>
  );
}
