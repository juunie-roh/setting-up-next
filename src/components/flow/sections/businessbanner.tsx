import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import common from '../common.module.css';
import styles from './businessbanner.module.css';

export default function Business() {
  return (
    <section className={styles.container}>
      <div className={`${common.inner} ${styles.inner}`}>
        <div className={styles.text}>
          <div className={styles.symbols}>
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <p>가입만 하면 무료로 쓸 수 있어요!</p>
          <ul>
            <li>신용카드 등록없이</li>
            <li>30일 무료 체험판</li>
          </ul>
          <Link href="/portfolio/flow">
            무료체험 시작하기
            <ChevronRightIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
