import type { ThreeElements } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import type * as THREE from 'three';

/**
 * Simple Box Example with rotating animation.
 * This box has `onClick`, `onPointerOver`, `onPointerOut` events.
 * @param props ThreeElements['mesh']
 * @returns React.JSX.Element
 */
const ThreeSimpleBox = (props: ThreeElements['mesh']) => {
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

export { ThreeSimpleBox };
