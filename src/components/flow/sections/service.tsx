import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import common from '../common.module.css';
import styles from './service.module.css';

export default function Service() {
  return (
    <section className={styles.container}>
      <div className={`${common.inner} ${styles.inner}`}>
        <h2 className={common.title}>
          국내 유일! 3가지 중
          <br />
          맞춤형 서비스를 선택하세요
        </h2>
        <div className={styles.saas}>
          <div className={styles.title}>클라우드형 (SaaS)</div>
          <i />
          <div className={styles.content}>
            <ul>
              <li>중소·스타트업 추천</li>
              <li>공공 CSAP 인증 (KT Bizworks)</li>
              <li>비영리기관 50% 할인 적용</li>
              <li>연결제 기준 가격(VAT는 별도)</li>
            </ul>
            <Link href="/portfolio/flow">
              10인 ₩ 60,000 월간
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
        <div className={styles.onPremise}>
          <div className={styles.title}>서버구축형 (On-Premise)</div>
          <i />
          <div className={styles.content}>
            <ul>
              <li>망분리 환경의 대기업/금융기관</li>
              <li>대형 공공기관 추천</li>
              <li>3개월 이내 설치 완료</li>
              <li>연동확장성 높음</li>
            </ul>
            <Link href="/portfolio/flow">
              가격 문의하기
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
