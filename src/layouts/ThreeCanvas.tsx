import type { ReactNode } from 'react';

type IThreeCanvasProps = {
  children: ReactNode;
};

const ThreeCanvas = (props: IThreeCanvasProps) => {
  return (
    <div
      className="overflow-hidden rounded-md shadow-md"
      style={{ width: '100%', height: '60vh' }}
    >
      {props.children}
    </div>
  );
};

export { ThreeCanvas };
