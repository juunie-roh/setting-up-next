import React from 'react';

import { Footer, Header } from '@/components/flow';

import styles from './baselayout.module.css';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
}
