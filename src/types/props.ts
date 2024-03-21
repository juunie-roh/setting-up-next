import type { StaticImageData } from 'next/image';

export type LnbSubLiProps = {
  title: string;
  sub_title: [string, string | null];
  to: string;
  src: string | StaticImageData;
};
