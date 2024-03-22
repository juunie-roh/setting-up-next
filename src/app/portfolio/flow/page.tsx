import type { Metadata } from 'next';

import {
  Functions,
  MainBanner,
  Management,
  Partner,
} from '@/components/flow/sections';

export const metadata: Metadata = {
  title: 'Flow KR',
};

export default function Page() {
  return (
    <>
      <MainBanner />
      <Partner />
      <Functions />
      <Management />
      MIGRATION TESTING
    </>
  );
}
