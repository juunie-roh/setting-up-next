import type { Metadata } from 'next';
import Image from 'next/image';

import { NextLinkBox } from '@/components';
import { DefaultLayout } from '@/layouts';

import styles from './about.module.css';

const linkBoxes = [
  {
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app',
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Templates',
    description: 'Explore starter templates for Next.js.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
    title: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a shareable URL with Vercel.',
  },
];

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <DefaultLayout>
        <div className={styles.link_wrap}>
          <p className="mr-3 text-lg text-gray-600">Built with</p>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            height={37}
            priority
          />
        </div>
        <div className={styles.linkBox_wrap}>
          {linkBoxes.map((box) => {
            return (
              <NextLinkBox
                href={box.href}
                title={box.title}
                description={box.description}
                key={box.title}
              />
            );
          })}
        </div>
      </DefaultLayout>
      <DefaultLayout>
        <ul className="list-disc text-gray-600">
          <li className="-ml-5 mb-3 list-none border-b border-gray-300 text-lg text-neutral-800 dark:border-neutral-800 dark:text-gray-300">
            Packages Used
          </li>
          <li>
            🔥 Type checking{' '}
            <a className="underline" href="https://www.typescriptlang.org">
              TypeScript
            </a>
          </li>
          <li>
            💎 Integrate with{' '}
            <a className="underline" href="https://tailwindcss.com">
              Tailwind CSS
            </a>
          </li>
          <li>✅ Strict Mode for TypeScript and React 18</li>
          <li>♻️ Type-safe environment variables with T3 Env</li>
          <li>⌨️ Form with React Hook Form</li>
          <li>
            📏 Linter with{' '}
            <a className="underline" href="https://eslint.org">
              ESLint
            </a>{' '}
            (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb
            configuration)
          </li>
          <li>
            💖 Code Formatter with{' '}
            <a className="underline" href="https://prettier.io">
              Prettier
            </a>
          </li>
          <li>🦊 Husky for Git Hooks</li>
          <li>🚫 Lint-staged for running linters on Git staged files</li>
          <li>
            🚓 Lint git commit with{' '}
            <a className="underline" href="https://commitlint.js.org">
              Commitlint
            </a>
          </li>
          <li>📓 Write standard compliant commit messages with Commitizen</li>
          <li>🦺 Unit Testing with Jest and React Testing Library</li>
          <li>👷 Run tests on pull request with GitHub Actions</li>
          <li>
            🎉{' '}
            <a className="underline" href="https://storybook.js.org">
              Storybook
            </a>{' '}
            for UI development
          </li>
          <li>🎁 Automatic changelog generation with Semantic Release</li>
          <li>💡 Absolute Imports using `@` prefix</li>
          <li>🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO</li>
          <li>🗺️ Sitemap.xml and robots.txt with next-sitemap</li>
          <li className="my-3 -ml-5 list-none border-b border-gray-300 text-lg text-neutral-800 dark:border-neutral-800 dark:text-gray-300">
            Built-in feature from Next.js
          </li>
          <li>☕ Minify HTML & CSS</li>
          <li>💨 Live reload</li>
          <li>✅ Cache busting</li>
        </ul>
      </DefaultLayout>
    </>
  );
}
