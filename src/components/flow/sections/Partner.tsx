import Image from 'next/image';

import common from '../common.module.css';
import styles from './partner.module.css';

const Images = (start: number, end: number) => {
  const arr = [];
  for (let i = start + 1; i < end + 1; i += 1) {
    arr.push(`/images/flow/company/company-${i}.svg`);
  }
  return arr;
};

export default function Partner() {
  return (
    <section className={styles.container}>
      <div className={common.inner}>
        <h2 className={common.title}>
          대기업부터 스타트업까지 <br />
          45만 팀이 선택한 1위
        </h2>
      </div>
      <div id={styles.partnerWrap}>
        <div id={styles.partnerLeft}>
          {Images(0, 12).map((src) => (
            <Image
              key={src}
              src={src}
              alt="partner company logo"
              width={0}
              height={0}
              style={{ width: 'auto', height: '100%' }}
            />
          ))}
        </div>
        <div id={styles.partnerRight}>
          {Images(20, 32).map((src) => (
            <Image
              key={src}
              src={src}
              alt="partner company logo"
              width={0}
              height={0}
              style={{ width: 'auto', height: '100%' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
