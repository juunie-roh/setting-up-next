import Image from 'next/image';

import { NextLinkBox } from '@/components';
import { DefaultSection, Meta } from '@/layouts';
import { Main } from '@/templates';

const linkBoxData = [
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

const About = () => (
  <Main
    meta={
      <Meta
        title="about Juun"
        description="description about this page, explain techs & packages used."
      />
    }
  >
    <DefaultSection>
      <div className="relative z-[-1] flex place-items-baseline before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <p className="mr-3 text-lg text-gray-600">Built with</p>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="my-8 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {linkBoxData.map((data) => {
          return (
            <NextLinkBox
              href={data.href}
              title={data.title}
              description={data.description}
              key={data.title}
            />
          );
        })}
      </div>
    </DefaultSection>

    <DefaultSection>
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
    </DefaultSection>
  </Main>
);

export default About;
