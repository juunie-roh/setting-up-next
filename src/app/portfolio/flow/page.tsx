import type { Metadata } from 'next';

import {
  Business,
  Example,
  Functions,
  Guide,
  MainBanner,
  Management,
  Partner,
  Service,
} from '@/components/flow/sections';
import Input from '@/components/flow/sections/input';

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
      <Guide />
      <Input />
      <Business />
    </>
  );
}
