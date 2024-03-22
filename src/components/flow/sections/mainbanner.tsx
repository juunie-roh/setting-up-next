import { ChevronRightIcon } from '@heroicons/react/24/outline';

import styles from './mainbanner.module.css';

export default function MainBanner() {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.titleBox}>
          <p>대한민국에서 가장 많이 검증된 1위</p>
          <h2>
            프로젝트 관리 ㅡ <br /> 협업툴 <span>플로우</span>
          </h2>
          <a href="/">
            무료로 시작하기
            <ChevronRightIcon
              color="#ffffff"
              strokeWidth={3}
              width={20}
              height={20}
            />
          </a>
        </div>

        <div className={styles.imageBox}>
          <div id={styles.main_obj}>
            <i />
            <span id={styles.request}>Request 45,343</span>
            <span id={styles.progress}>Progress 45,782</span>
            <span id={styles.feedback}>Feedback 13,678</span>
          </div>
          <div id={styles.sub_obj}>
            <i />
          </div>
          <div id={styles.pj_web} />
        </div>
      </div>
    </section>
  );
}
