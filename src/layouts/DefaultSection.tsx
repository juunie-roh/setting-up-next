import type { ReactNode } from 'react';

type IDefaultPageProps = {
  children: ReactNode;
};

const DefaultSection = (props: IDefaultPageProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between pb-8 lg:pb-12">
      {props.children}
    </div>
  );
};

export { DefaultSection };
