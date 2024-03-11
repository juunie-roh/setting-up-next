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
  {
    title: 'GLTF Loader Example on React',
    href: '/techrecord/gltf-loader-example',
    ctgry: 'ThreeJS',
    key: 2,
  },
  {
    title: 'Water Effect Example',
    href: '/techrecord/water-example',
    ctgry: 'ThreeJS',
    key: 3,
  },
  {
    title: 'Rapier Example',
    href: '/techrecord/rapier-example',
    ctgry: 'ThreeJS',
    key: 4,
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
        <table>
          <tbody>
            {menuDatas.map((menu) => {
              return (
                <tr
                  key={menu.key}
                  className="align-baseline text-gray-900 dark:text-gray-100"
                >
                  <td className="w-1/5 text-nowrap text-right">
                    <span className="mr-2 text-sm">{menu.ctgry}</span>
                  </td>
                  <td className="w-4/5 text-left">
                    <Link className="text-xl" href={menu.href}>
                      {menu.title}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </DefaultSection>
    </Main>
  );
};

export default TechRecord;
