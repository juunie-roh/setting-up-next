'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

import styles from './flow-header.module.css';
import Nav from './flow-nav';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className={`${styles.header} ${isOpen ? styles.on : ''}`}>
      <Link href="/portfolio/flow" className={styles.thin}>
        <div className={styles.thin_content}>
          <div className={styles.img} />
          <p>🎁 8주년 신규고객 이벤트!</p>
          <div className={styles.icon}>
            <ChevronRightIcon />
          </div>
        </div>
      </Link>

      <div className={styles.container}>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
