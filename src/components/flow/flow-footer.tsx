import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import styles from './flow-footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <ul className={styles.brochure}>
            <li>
              <a href="/">
                소개 및 비교자료
                <ChevronRightIcon strokeWidth={3} width={13} height={13} />
              </a>
            </li>
            <li>
              <a href="/">
                도입문의
                <ChevronRightIcon strokeWidth={3} width={13} height={13} />
              </a>
            </li>
            <li>
              <a href="/">
                플로우 블로그
                <ChevronRightIcon strokeWidth={3} width={13} height={13} />
              </a>
            </li>
          </ul>
          <ul className={styles.address}>
            <li>
              <p>
                <b>주소</b>
                서울특별시 영등포구 영신로 220 KnK디지털타워 1410호
              </p>
            </li>
            <li>
              <p>
                <b>마드라스체크㈜대표자</b>
                이학준
              </p>
              <p>
                <b>전화</b>
                1522-9298
              </p>
              <p>
                <b>이메일</b>
                support@flow.team
              </p>
            </li>
            <li>
              <p>
                <b>통신판매업신고번호</b>
                제2019-서울영등포-0298호
              </p>
              <p>
                <b>사업자등록번호</b>
                189-87-00172
              </p>
            </li>
          </ul>
          <ul className={styles.social}>
            <li>
              <a href="/">
                <Image
                  src="/images/flow/sns/sns-yt.svg"
                  alt="Youtube Icon"
                  width={24}
                  height={24}
                />
                유튜브
              </a>
            </li>
            <li>
              <a href="/">
                <Image
                  src="/images/flow/sns/sns-fb.svg"
                  alt="Youtube Icon"
                  width={24}
                  height={24}
                />
                페이스북
              </a>
            </li>
            <li>
              <a href="/">
                <Image
                  src="/images/flow/sns/sns-ins.svg"
                  alt="Youtube Icon"
                  width={24}
                  height={24}
                />
                인스타그램
              </a>
            </li>
            <li>
              <a href="/">
                <Image
                  src="/images/flow/sns/sns-flw.svg"
                  alt="Youtube Icon"
                  width={24}
                  height={24}
                />
                플로우 블로그
              </a>
            </li>
          </ul>
          <ul className={styles.terms}>
            <li>
              <a href="/">이용약관</a>
            </li>
            <li>
              <a href="/">
                <b>개인정보 처리방침</b>
              </a>
            </li>
            <li className={styles.copyright}>
              &copy; 2021 Madras check All rights Reserved.
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.siteMap}>
            <li>
              <ol>
                <li>
                  <b>회사소개</b>
                </li>
                <li>
                  <a href="/">스토리</a>
                </li>
                <li>
                  <a href="/">문화복지</a>
                </li>
                <li>
                  <a href="/">멤버소개</a>
                </li>
                <li>
                  <a href="/">채용</a>
                </li>
              </ol>
            </li>
            <li>
              <ol>
                <li>
                  <b>제품</b>
                </li>
                <li>
                  <Link href="/portfolio/flow/flow-project">프로젝트 협업</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/task">업무관리</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/chatting">메신저</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/okr">OKR</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/video">화상회의</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/security">보안기능</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/system">시스템 연동</Link>
                </li>
                <li>
                  <Link href="/portfolio/flow/download">다운로드</Link>
                </li>
              </ol>
            </li>
            <li>
              <ol>
                <li>
                  <b>요금</b>
                </li>
                <li>
                  <Link href="/price">요금제</Link>
                </li>
                <li>
                  <Link href="/build">구축형 문의</Link>
                </li>
                <li>
                  <Link href="/guest-vs-business">유료 VS 무료</Link>
                </li>
              </ol>
            </li>
            <li>
              <ol>
                <li>
                  <b>자료실</b>
                </li>
                <li>
                  <a href="/">리포트</a>
                </li>
                <li>
                  <a href="/">세미나</a>
                </li>
                <li>
                  <a href="/">플로우 활용</a>
                </li>
                <li>
                  <a href="/">재택근무 활용</a>
                </li>
                <li>
                  <a href="/">사용 매뉴얼</a>
                </li>
              </ol>
            </li>
            <li>
              <ol>
                <li>
                  <b>파트너</b>
                </li>
                <li>
                  <a href="/">파트너 소개</a>
                </li>
                <li>
                  <a href="/">파트너 모집</a>
                </li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
