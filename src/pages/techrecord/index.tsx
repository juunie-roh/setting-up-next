import Link from 'next/link';

import { DefaultSection, Meta } from '@/layouts';
import { Main } from '@/templates';

type IMenuData = {
  title: string;
  href: string;
  ctgry: string;
  key: number;
};

const menuDatas: Array<IMenuData> = [
  {
    title: 'Three.js Example on React',
    href: '/techrecord/three-example',
    ctgry: 'ThreeJS',
    key: 1,
  },
];

const TechRecord = () => {
  return (
    <Main
      meta={
        <Meta
          title="Juun' Technical Record"
          description="Records of technologies I've used."
        />
      }
    >
      <DefaultSection>
        <h2 className="text-gray-900 dark:text-gray-100">Tech Record</h2>
        <ul>
          {menuDatas.map((menu) => {
            return (
              <li key={menu.key} className="text-gray-900 dark:text-gray-100">
                <span className="mr-2 text-sm">{menu.ctgry}</span>
                <Link className="text-xl" href={menu.href}>
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </DefaultSection>
    </Main>
  );
};

export default TechRecord;
