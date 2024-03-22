import type { Metadata } from 'next';

import {
  Example,
  Functions,
  MainBanner,
  Management,
  Partner,
  Service,
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
      <Example />
      <Service />
      MIGRATION TESTING
    </>
  );
}
