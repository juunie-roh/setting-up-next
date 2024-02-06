import type { ReactNode } from 'react';

type ICodeBox = {
  children: ReactNode;
};

const CodeBox = (props: ICodeBox) => {
  return (
    <div className="mb-4 w-full rounded-md bg-slate-300 p-4 dark:bg-slate-600 dark:text-gray-200">
      <code>{props.children}</code>
    </div>
  );
};

export { CodeBox };
