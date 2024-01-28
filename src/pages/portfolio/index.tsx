import Link from 'next/link';

import { DefaultSection, Meta } from '@/layouts';
import { Main } from '@/templates';

type IMenuData = {
  title: string;
  href: string;
  key: number;
};

const menuDatas: Array<IMenuData> = [
  {
    title: '100 Days: CSS Works',
    href: '/100days/index.html',
    key: 1,
  },
];

const Portfolio = () => {
  return (
    <Main
      meta={<Meta title="Juun's Works" description="Portfolio of my works" />}
    >
      <DefaultSection>
        <h2 className="text-gray-900 dark:text-gray-100">Portfolios</h2>
        <ul>
          {menuDatas.map((menu) => {
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
      </DefaultSection>
    </Main>
  );
};

export default Portfolio;
