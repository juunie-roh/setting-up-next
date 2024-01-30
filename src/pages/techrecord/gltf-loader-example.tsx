import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { ThreeGLTFLoader } from '@/components';
import { DefaultSection, Meta, ThreeCanvas } from '@/layouts';
import { Main } from '@/templates';

const path = '/models/KWUBuildings/BokJi.glb';

const GLTFLoaderExample = () => {
  return (
    <Main
      meta={
        <Meta
          title="GLTF Loader Example"
          description="Loading GLTF Models Example on React-Next JS. Added onClick, onPointerOver, onPointerOut pointer events."
        />
      }
    >
      <ThreeCanvas>
        <Canvas camera={{ position: [30, 20, 30] }}>
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
          <ThreeGLTFLoader modelPath={path} />
          <OrbitControls />
        </Canvas>
      </ThreeCanvas>
      <DefaultSection>
        <p>
          onPointerOver/Out 및 onClick(log) 이벤트 적용 <br />
          커서가 모델 위에서 움직이는데도 깜빡이는 현상 발생 <br />
          Property로 설정하면 커서 인식을 mesh 단위로 진행하는 것으로 추정됨
          <br />
          raycaster로 pointer 인식을 직접 구현했을 때는 깜빡이는 현상이 없었음
          <br />
          raycaster와 intersect한 mesh가 포함된 group 전체에 isIntersected:{' '}
          boolean 속성을 부여해서 group 별로 pointer를 인식하는 방식이었음
          <br />
          목표 group을 array에 저장하여 원하는 group만 intersected 상호작용
          가능하다는 점이 있음
        </p>
      </DefaultSection>
    </Main>
  );
};

export default GLTFLoaderExample;