'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { toggleLogin } from '@/libs/features';
import { useAppDispatch, useAppSelector } from '@/libs/hooks';
import type { LnbSubLiProps } from '@/types';

import { Li } from './components';
import styles from './flow-nav.module.css';

const productLnbSubLis: Array<LnbSubLiProps> = [
  {
    to: '/project',
    src: '/images/flow/header/gnb-project.png',
    title: '프로젝트 협업',
    sub_title: [
      '프로젝트 중심으로 모여 동일 부서가 아니더라도 관련자들과',
      '리얼타임으로 소통이 가능합니다.',
    ],
  },
  {
    to: '/task',
    src: '/images/flow//header/icon_menu_task.svg',
    title: '업무관리',
    sub_title: [
      '업무 시작부터 종료까지 단계별 상태로 구분하여 직관적인 워크',
      '플로우 시스템을 제공합니다.',
    ],
  },
  {
    to: '/chatting',
    src: '/images/flow/header/gnb-msg.png',
    title: '메신저',
    sub_title: [
      '조직 구성원의 연락처 ∙ 이메일 ∙ 내선번호를 확인 후 보다 빠르고',
      '정확한 업무소통을 할 수 있습니다.',
    ],
  },
  {
    to: '/okr',
    src: '/images/flow/header/icon_menu_okr.svg',
    title: 'OKR',
    sub_title: [
      '회사-팀-개인간 목표를 연결해, OKR 목표 관리와 업무를 방향성에',
      '맞춰 몰입 할 수 있습니다.',
    ],
  },
  {
    to: '/video',
    src: '/images/flow/header/gnb-meet.png',
    title: '화상회의',
    sub_title: [
      '플로우 사용자들이 보다 효율적으로 회의할 수 있도록 화상회의',
      '서비스를 무료로 제공합니다.',
    ],
  },
  {
    to: '/security',
    src: '/images/flow/header/gnb-security.png',
    title: '보안기능',
    sub_title: [
      '최고의 전문 인력이 관리하는 플로우만의 보안체계, 언제라도 대응',
      '할 수 있도록 보안 인력이 상시 대기하고 있습니다.',
    ],
  },
  {
    to: '/system',
    src: '/images/flow/header/gnb-system.png',
    title: '시스템 연동',
    sub_title: [
      '구글・드롭박스 등 세계최고 소프트웨어는 물론 우리회사의',
      '그룹웨어・ERP 등 사내시스템과도 연동할 수 있습니다.',
    ],
  },
  {
    to: '/download',
    src: '/images/flow/header/icon_menu_download.svg',
    title: '다운로드',
    sub_title: ['언제 어디서든 쉽고 빠르게 플로우를 이용해 보세요.', null],
  },
];

export default function Nav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const { isLoggedIn, userName } = useAppSelector((state) => state.auth);
  const [isSideMenuActive, setIsSideMenuActive] = useState(false);
  const [isLnbMenuOn, setIsLnbMenuOn] = useState(false);

  const dispatch = useAppDispatch();

  const onSideMenuClick = () => {
    setIsSideMenuActive(!isSideMenuActive);
    setIsLnbMenuOn(!isLnbMenuOn);
    setIsOpen(!isOpen);
  };

  const onLnbMenuClick = (id: string) => {
    document.getElementById(id)?.classList.toggle(styles.active!);
  };

  return (
    <nav className={styles.lnbWrap}>
      <h1>
        <Link scroll={false} href="/portfolio/flow">
          <Image
            src="/images/flow/logo.svg"
            alt="Flow Logo"
            width={130}
            height={28}
          />
        </Link>
      </h1>

      <ul className={`${styles.lnbMenu} ${isLnbMenuOn ? styles.on : ''}`}>
        <li
          role="presentation"
          id="product"
          onClick={() => onLnbMenuClick('product')}
        >
          <span>
            제품
            <ChevronDownIcon strokeWidth={3} width={16} height={16} />
          </span>
          <ul className={styles.lnbSub}>
            {productLnbSubLis.map((item) => (
              <Li
                key={item.to}
                to={item.to}
                src={item.src}
                title={item.title}
                sub_title={item.sub_title}
              />
            ))}
          </ul>
        </li>

        <li
          role="presentation"
          id="price"
          onClick={() => onLnbMenuClick('price')}
        >
          <span>
            요금
            <ChevronDownIcon strokeWidth={3} width={16} height={16} />
          </span>
          <ul className={styles.lnbSub}>
            <li>
              <Link href="/portfolio/flow/price">
                <strong>요금제</strong>
              </Link>
            </li>
            <li>
              <Link href="/portfolio/flow/build">
                <strong>구축형 문의</strong>
              </Link>
            </li>
            <li>
              <Link href="/portfolio/flow/guest-vs-build">
                <strong>유료 VS 무료</strong>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/portfolio/flow">고객사례</Link>
        </li>
        <li
          role="presentation"
          id="docs"
          onClick={() => onLnbMenuClick('docs')}
        >
          <span>
            자료실
            <ChevronDownIcon strokeWidth={3} width={16} height={16} />
          </span>
          <ul className={styles.lnbSub}>
            <li>
              <a href="/portfolio/flow">
                <strong>리포트</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>세미나</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>플로우 활용</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>재택근무 활용</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>사용 매뉴얼</strong>
              </a>
            </li>
          </ul>
        </li>

        <li
          role="presentation"
          id="lecture"
          onClick={() => onLnbMenuClick('lecture')}
        >
          <a href="/portfolio/flow">강의실</a>
        </li>

        <li className={styles.lnb_pc}>
          <a href="/portfolio/flow">소개서 받기</a>
        </li>

        <li
          role="presentation"
          className={styles.lnb_mobile}
          id="company"
          onClick={() => onLnbMenuClick('company')}
        >
          <span>
            회사소개
            <ChevronDownIcon strokeWidth={3} width={16} height={16} />
          </span>
          <ul className={styles.lnbSub}>
            <li>
              <a href="/portfolio/flow">
                <strong>스토리</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>문화복지</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>멤버소개</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>채용</strong>
              </a>
            </li>
          </ul>
        </li>

        <li
          role="presentation"
          className={styles.lnb_mobile}
          id="partner"
          onClick={() => onLnbMenuClick('partner')}
        >
          <span>
            파트너
            <ChevronDownIcon strokeWidth={3} width={16} height={16} />
          </span>
          <ul className={styles.lnbSub}>
            <li>
              <a href="/portfolio/flow">
                <strong>파트너 소개</strong>
              </a>
            </li>
            <li>
              <a href="/portfolio/flow">
                <strong>파트너 모집</strong>
              </a>
            </li>
          </ul>
        </li>

        <li className={styles.lnb_mobile}>
          <a href="/portfolio/flow">소개 및 비교자료</a>
        </li>

        <li className={`${styles.lnb_mobile} ${styles.footer}`}>
          <a href="/portfolio/flow">회원가입</a>
          <i />
          <a href="/portfolio/flow">도입문의</a>
        </li>
      </ul>

      <ul className={styles.lnbLogin}>
        {isLoggedIn ? (
          <>
            <li>
              <a
                href="/portfolio/flow"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleLogin());
                }}
              >
                로그아웃
              </a>
            </li>
            <li>
              <button type="button" onClick={() => dispatch(toggleLogin())}>
                {userName}
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <a
                href="/portfolio/flow"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(toggleLogin());
                }}
              >
                로그인
              </a>
            </li>
            <li>
              <button type="button" onClick={() => dispatch(toggleLogin())}>
                무료 회원가입
              </button>
            </li>
          </>
        )}
      </ul>

      <ul className={styles.lnbSide}>
        <li>
          <button type="button" onClick={() => dispatch(toggleLogin())}>
            {isLoggedIn ? userName : '무료시작'}
          </button>
        </li>
        <li>
          <div
            role="presentation"
            className={`${styles.sideMenu} ${isSideMenuActive ? styles.active : ''}`}
            onClick={onSideMenuClick}
          >
            <div className={styles.center}>
              <div className={`${styles.bar} ${styles.bar01}`} />
              <div className={`${styles.bar} ${styles.bar02}`} />
              <div className={`${styles.bar} ${styles.bar03}`} />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
