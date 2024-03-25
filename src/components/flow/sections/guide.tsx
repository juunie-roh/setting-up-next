import Link from 'next/link';

import common from '../common.module.css';
import styles from './guide.module.css';

export default function Guide() {
  return (
    <section className={styles.container}>
      <div className={common.inner}>
        <h2 className={common.title}>
          협업툴 도입 전 <br />이 자료는 꼭 체크하세요!
        </h2>

        <div className={styles.cardWrap}>
          <ul>
            <li className={`${styles.card} ${styles.card1}`}>
              <Link href="/portfolio/flow">
                <p>
                  flow
                  <span />
                </p>
                <b>
                  국내외 협업툴 <br />
                  비교 18종
                </b>
                <i />
              </Link>
              <div className={styles.card_bg}>
                <span>비교자료 ㅡ</span>
              </div>
            </li>

            <li className={`${styles.card} ${styles.card2}`}>
              <Link href="/portfolio/flow">
                <p>
                  flow
                  <span />
                </p>
                <b>
                  협업툴 실패·성공 <br />
                  Best 5
                </b>
                <i />
              </Link>
              <div className={styles.card_bg}>
                <span>필수자료 ㅡ</span>
              </div>
            </li>

            <li className={`${styles.card} ${styles.card3}`}>
              <Link href="/portfolio/flow">
                <p>
                  flow
                  <span />
                </p>
                <b>
                  재택근무 매뉴얼 <br />
                  가이드
                </b>
                <i />
              </Link>
              <div className={styles.card_bg}>
                <span>하이브리드 워크 ㅡ</span>
              </div>
            </li>

            <li className={`${styles.card} ${styles.card4}`}>
              <Link href="/portfolio/flow">
                <p>
                  flow
                  <span />
                </p>
                <b>
                  협업툴 혁신기업 <br />
                  리포트
                </b>
                <i />
              </Link>
              <div className={styles.card_bg}>
                <span>DX 4,000개 기업 ㅡ</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
