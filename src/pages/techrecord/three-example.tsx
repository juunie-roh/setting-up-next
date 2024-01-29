import { Canvas } from '@react-three/fiber';

import { ThreeSimpleBox } from '@/components';
import { Meta, ThreeCanvas } from '@/layouts';
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
      <ThreeCanvas>
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
      </ThreeCanvas>
    </Main>
  );
};

export default ThreeExample;
