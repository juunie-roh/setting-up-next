'use client';

import { OrbitControls, Sky } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import type { Mesh } from 'three';

import { Ocean } from '@/components';
import { ThreeCanvas } from '@/layouts';

const Box = () => {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.position.y = 10 + Math.sin(state.clock.elapsedTime) * 20;
    ref.current.rotation.z += delta;
    ref.current.rotation.y = ref.current.rotation.z;
    ref.current.rotation.x = ref.current.rotation.y;
  });

  return (
    <mesh ref={ref} scale={20}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
};

export default function WaterExample() {
  return (
    <>
      <ThreeCanvas>
        <Canvas
          camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}
        >
          <pointLight position={[100, 100, 100]} />
          <pointLight position={[-100, -100, -100]} />
          <Suspense fallback={null}>
            <Ocean />
            <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
          </Suspense>
          <Box />
          <OrbitControls />
        </Canvas>
      </ThreeCanvas>
    </>
  );
}
