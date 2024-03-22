import Image from 'next/image';
import Link from 'next/link';

import common from '../common.module.css';
import styles from './examples.module.css';

export default function Example() {
  return (
    <section className={styles.container}>
      <div className={`${common.inner} ${styles.inner}`}>
        <div>
          <Image
            src="/images/flow/main/main-team.svg"
            alt="team image for pc"
            width={600}
            height={600}
          />
          <Image
            src="/images/flow/main/main-team.svg"
            alt="team image for mobile"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div>
          <h2 className={common.title}>
            모든 팀이 플로우로
            <br />
            함께 협업해요!
          </h2>
          <p>
            대한민국 450,000개 팀이 플로우 하나로
            <br />
            완벽한 프로젝트 협업을 합니다.
          </p>
          <Link href="/portfolio/flow" className={common.activeLink}>
            <i />
            고객 성공사례 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
