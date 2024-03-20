'use client';

import { Canvas } from '@react-three/fiber';

import { ThreeSimpleBox } from '@/components';
import { ThreeCanvas } from '@/layouts';

export default function ThreeExample() {
  return (
    <>
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
    </>
  );
}
