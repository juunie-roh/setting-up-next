import Image from 'next/image';
import Link from 'next/link';

import type { LnbSubLiProps } from '@/types/props';

export default function Li({ to, src, title, sub_title }: LnbSubLiProps) {
  return (
    <li>
      <Link href={to}>
        <strong>
          <Image src={src} alt="" width={19} height={19} />
          {title}
        </strong>
        <p>
          {sub_title[0]}
          {sub_title[1] && (
            <>
              <br />
              {sub_title[1]}
            </>
          )}
        </p>
      </Link>
    </li>
  );
}
