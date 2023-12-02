import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {props.children}
    </main>

    <footer>
      &copyright; Copyright {new Date().getFullYear()} {AppConfig.title}. Made
      by {AppConfig.author}
    </footer>
  </div>
);

export default Main;
