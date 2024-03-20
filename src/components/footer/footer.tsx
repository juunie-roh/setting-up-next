import Link from 'next/link';

import { AppConfig } from '@/utils/AppConfig';

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-6 text-center text-sm lg:py-8 lg:text-base dark:border-neutral-800">
      &copy; Copyright {new Date().getFullYear()} {AppConfig.title}. Made by{' '}
      <Link
        href="https://github.com/juunie-roh/setting-up-next"
        className="font-semibold"
      >
        {AppConfig.author}
      </Link>
    </footer>
  );
}
