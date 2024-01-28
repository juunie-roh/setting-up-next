import { Canvas } from '@react-three/fiber';

import { ThreeSimpleBox } from '@/components';
import { Meta } from '@/layouts';
import { Main } from '@/templates';

const ThreeExample = () => {
  return (
    <Main
      meta={
        <Meta
          title="Three.js Example"
          description="Running Three.js on Next, React environment example."
        />
      }
    >
      <div style={{ width: '100%', height: '60vh' }}>
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <ThreeSimpleBox position={[-1.2, 0, 0]} />
          <ThreeSimpleBox position={[1.2, 0, 0]} />
        </Canvas>
      </div>
    </Main>
  );
};

export default ThreeExample;
