import type { Metadata } from 'next';

import { MainBanner } from '@/components/flow/sections';

export const metadata: Metadata = {
  title: 'Flow KR',
};

export default function Page() {
  return (
    <>
      <MainBanner />
      MIGRATION TESTING
    </>
  );
}
