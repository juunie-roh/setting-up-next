import type { ThreeElements } from '@react-three/fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import type * as THREE from 'three';

import { Meta } from '@/layouts';
import { Main } from '@/templates';

const Box = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((_state, delta) => {
    meshRef.current.rotation.x += delta;
  });
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

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
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
      </div>
    </Main>
  );
};

export default ThreeExample;
