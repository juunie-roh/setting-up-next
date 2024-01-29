import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { ThreeGLTFLoader } from '@/components';
import { Meta, ThreeCanvas } from '@/layouts';
import { Main } from '@/templates';

const GLTFLoaderExample = () => {
  return (
    <Main
      meta={
        <Meta
          title="GLTF Loader Example"
          description="Loading GLTF Models Example on React-Next JS"
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
          <ThreeGLTFLoader />
          <OrbitControls />
        </Canvas>
      </ThreeCanvas>
    </Main>
  );
};

export default GLTFLoaderExample;
