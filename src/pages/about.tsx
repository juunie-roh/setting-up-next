import Image from 'next/image';

import { NextLinkBox } from '@/components';
import { Meta } from '@/layouts/Meta';
import { DefaultPage, Main } from '@/templates';

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
        description="description about this page, explain packages & techs used."
      />
    }
  >
    <DefaultPage>
      <div className="relative z-[-1] flex place-items-baseline before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <p className="mr-3 text-lg text-gray-600">This Project is built with</p>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
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
    </DefaultPage>
  </Main>
);

export default About;
