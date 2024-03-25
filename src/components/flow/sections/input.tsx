/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import Link from 'next/link';

import common from '../common.module.css';
import styles from './input.module.css';

export default function Input() {
  return (
    <section className={styles.container}>
      <div className={`${common.inner} ${styles.inner}`}>
        <div>
          <h2 className={common.title}>
            간단한 정보를 기입하고 <br />
            소개서를 다운로드하세요!
          </h2>
          <p className={styles.miniText}>
            협업툴을 도입하기 전 플로우 소개서와 비교 자료로 장단점을 한눈에
            확인하세요!
          </p>
          <Image
            src="/images/flow/flow/flow-guide.png"
            width={480}
            height={390}
            alt="Flow Guide Image"
            className={styles.image}
          />
        </div>
        <form id="consultForm">
          <ul className={styles.formList}>
            <li>
              <label htmlFor="companyName">회사명</label>
              <input
                type="text"
                id="companyName"
                placeholder="회사명"
                name="companyName"
                required
                autoComplete="off"
              />
            </li>

            <li>
              <label htmlFor="userName">이름</label>
              <input
                type="text"
                id="userName"
                placeholder="이름"
                name="userName"
                required
                autoComplete="off"
              />
            </li>

            <li>
              <label htmlFor="tel">전화번호</label>
              <input
                type="tel"
                id="tel"
                placeholder="전화번호(-제외)"
                name="tel"
                required
                autoComplete="off"
              />
            </li>

            <li>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                placeholder="이메일"
                name="email"
                required
                autoComplete="off"
              />
            </li>

            <li>
              <select id="requiredNum" required>
                <option value="">예상 사용 인원을 선택하세요</option>
                <option value="10">10인 이하</option>
                <option value="11">11인 이상 30인 이하</option>
                <option value="31">31인 이상 50인 이하</option>
                <option value="51">51인 이상 100인 미만</option>
                <option value="100">100인 이상</option>
                <option value="500">500인 이상</option>
                <option value="1000">1000인 이상</option>
              </select>
            </li>

            <li>
              <select id="sector" required>
                <option value="">업종을 선택하세요</option>
                <option value="Produce">제조업</option>
                <option value="IT">정보통신업(IT)</option>
                <option value="Franchise">F&B, 프랜차이즈</option>
                <option value="Logistics">도·소매 유통 판매</option>
                <option value="Entertain">엔터테인먼트, 여행, 예술</option>
                <option value="Public">공공 행정</option>
                <option value="Construct">건설 및 기간 산업</option>
                <option value="Tax">세무, 법무, 노무</option>
                <option value="Transportation">운수 및 물류</option>
                <option value="Medical">의료 보건, 사회 복지</option>
                <option value="Finance">금융, 보험, 부동산</option>
                <option value="Association">협회 및 단체</option>
                <option value="Research">교육 및 연구</option>
                <option value="Agriculture">1차 산업(농·임·수산업)</option>
                <option value="etc">기타</option>
              </select>
            </li>
          </ul>

          <ul className={styles.agreeList}>
            <li>
              <input
                type="checkbox"
                id="privacyAgree"
                required
                name="privacyAgree"
              />
              <label
                htmlFor="privacyAgree"
                id="privacyAgreeLabel"
                className="checked"
              >
                <span>[필수]</span>
                <Link href="/portfolio/flow">개인정보 수집 및 이용</Link>에
                동의합니다.
              </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="marketingAgree"
                required
                name="marketingAgree"
              />
              <label
                htmlFor="marketingAgree"
                id="marketingAgreeLabel"
                className="checked"
              >
                <span>[필수]</span>
                <Link href="/portfolio/flow">홍보 및 마케팅 수집·이용</Link>에
                동의합니다.
              </label>
            </li>
          </ul>
        </form>
      </div>
    </section>
  );
}
