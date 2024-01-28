import type { ReactNode } from 'react';

type IDefaultPageProps = {
  children: ReactNode;
};

const DefaultSection = (props: IDefaultPageProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-between">
      {props.children}
    </div>
  );
};

export { DefaultSection };
