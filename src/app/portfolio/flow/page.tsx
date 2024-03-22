import type { Metadata } from 'next';

import { MainBanner, Partner } from '@/components/flow/sections';

export const metadata: Metadata = {
  title: 'Flow KR',
};

export default function Page() {
  return (
    <>
      <MainBanner />
      <Partner />
      MIGRATION TESTING
    </>
  );
}
