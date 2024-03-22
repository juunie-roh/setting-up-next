import Image from 'next/image';
import Link from 'next/link';

import common from '../common.module.css';
import styles from './functions.module.css';

export default function Functions() {
  return (
    <section className={styles.container}>
      <div className={`${common.inner} ${styles.inner}`}>
        <h2 className={common.title}>
          가장 많이 쓰는
          <br />
          TOP5 기능
        </h2>

        <div className={styles.slideFunc}>
          <div className={styles.listWrap}>
            <ul id={styles.slideList}>
              <li className={styles.li_active}>프로젝트</li>
              <li>업무관리</li>
              <li>간트차트</li>
              <li>보안메신저</li>
              <li>OKR</li>
            </ul>
          </div>
          <p>
            메일, 채팅, 문서 중심의 방식에서 벗어나 <br />
            온라인 협업 방식으로 프로젝트 소통을 강화할 수 있습니다.
          </p>
          <div className={styles.slideProgress}>
            <p id="currentNum">1</p>
            <i id={styles.progressbar} className={styles.prgs_active} />
            <p id="nextNum">2</p>
          </div>
          <Link href="/portfolio/flow" className={common.activeLink}>
            <i />
            기능 살펴보기
          </Link>
        </div>
        <Image
          src="/images/flow/gradient-box.png"
          alt="none"
          aria-hidden
          width={485}
          height={950}
        />
      </div>
    </section>
  );
}
