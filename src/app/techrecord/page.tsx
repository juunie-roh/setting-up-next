import type { Metadata } from 'next';
import Link from 'next/link';

import { DefaultLayout } from '@/layouts';

const menus = [
  {
    title: 'Three.js Example on React',
    href: '/techrecord/three-example',
    ctgry: 'react-three-fiber',
    key: 1,
  },
  {
    title: 'GLTF Loader Example on React',
    href: '/techrecord/gltf-loader-example',
    ctgry: 'react-three-drei',
    key: 2,
  },
  {
    title: 'Water Effect Example',
    href: '/techrecord/water-example',
    ctgry: 'react-three-drei',
    key: 3,
  },
  {
    title: 'react-three/cannon Example',
    href: '/techrecord/react-three-cannon',
    ctgry: 'react-three/cannon',
    key: 4,
  },
  {
    title: 'react-three/cannon Raycast Vehicle',
    href: 'techrecord/cannon-raycast-vehicle',
    ctgry: 'react-three/cannon',
    key: 5,
  },
];

export const metadata: Metadata = {
  title: 'Tech Records',
  description: 'Simple Records of Technologies Used.',
};

export default function TechrecordPage() {
  return (
    <DefaultLayout>
      <h2 className="text-gray-900 dark:text-gray-100">Tech Record</h2>
      <table>
        <tbody>
          {menus.map((menu) => {
            return (
              <tr
                key={menu.key}
                className="align-baseline text-gray-900 dark:text-gray-100"
              >
                <td className="w-1/5 text-nowrap text-right">
                  <span className="mr-2 text-sm">{menu.ctgry}</span>
                </td>
                <td className="w-4/5 text-left">
                  <Link prefetch className="text-xl" href={menu.href}>
                    {menu.title}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </DefaultLayout>
  );
}
