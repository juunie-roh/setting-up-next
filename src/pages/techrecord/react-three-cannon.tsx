import type {
  BoxProps,
  ConvexPolyhedronProps,
  CylinderProps,
  PlaneProps,
  SphereProps,
} from '@react-three/cannon';
import {
  Debug,
  Physics,
  useBox,
  useConvexPolyhedron,
  useCylinder,
  usePlane,
  useSphere,
  useTrimesh,
} from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { useMemo, useRef } from 'react';
import { IcosahedronGeometry, type Mesh, TorusKnotGeometry } from 'three';

import { Meta, ThreeCanvas } from '@/layouts';
import { Main } from '@/templates';
import CannonUtils from '@/utils/CannonUtils';

const Plane = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({ mass: 0, ...props }), useRef<Mesh>(null!));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial />
    </mesh>
  );
};

const Box = (props: BoxProps) => {
  const [ref, api] = useBox(
    () => ({ args: [1, 1, 1], mass: 1, ...props }),
    useRef<Mesh>(null!),
  );
  return (
    <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const Sphere = (props: SphereProps) => {
  const [ref, api] = useSphere(
    () => ({ args: [0.75], mass: 1, ...props }),
    useRef<Mesh>(null!),
  );

  return (
    <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
      <sphereGeometry args={[0.75]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const Cylinder = (props: CylinderProps) => {
  const [ref, api] = useCylinder(
    () => ({ args: [1, 1, 2, 8], mass: 1, ...props }),
    useRef<Mesh>(null!),
  );

  return (
    <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
      <cylinderGeometry args={[1, 1, 2, 8]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const Icosahedron = (props: ConvexPolyhedronProps) => {
  const geometry = useMemo(() => new IcosahedronGeometry(1, 0), []);
  const args = useMemo(
    () => CannonUtils.toConvexPolyhedronProps(geometry),
    [geometry],
  );
  const [ref, api] = useConvexPolyhedron(
    () => ({ args, mass: 1, ...props }),
    useRef<Mesh>(null!),
  );

  return (
    <mesh
      ref={ref}
      castShadow
      geometry={geometry}
      onPointerDown={() => api.velocity.set(0, 5, 0)}
    >
      <meshNormalMaterial />
    </mesh>
  );
};

const TorusKnot = (props: any) => {
  const geometry = useMemo(() => new TorusKnotGeometry(), []);
  const [ref, api] = useTrimesh(
    () => ({
      args: [geometry.attributes.position?.array, geometry.index?.array],
      mass: 1,
      ...props,
    }),
    useRef<Mesh>(null!),
  );

  return (
    <mesh ref={ref} castShadow onPointerDown={() => api.velocity.set(0, 5, 0)}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
  );
};

const ReactThreeCannon = () => {
  const gravity = useControls('Gravity', {
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: -9.8, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });

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
        <Canvas shadows camera={{ position: [0, 2, 4] }}>
          <spotLight
            position={[2.5, 5, 5]}
            angle={Math.PI / 4}
            penumbra={0.5}
            castShadow
            intensity={Math.PI * 25}
          />
          <spotLight
            position={[-2.5, 5, 5]}
            angle={Math.PI / 4}
            penumbra={0.5}
            castShadow
            intensity={Math.PI * 25}
          />
          <Physics gravity={[gravity.x, gravity.y, gravity.z]}>
            <Debug>
              <Plane rotation={[-Math.PI / 2, 0, 0]} />
              <Box position={[-4, 3, 0]} />
              <Sphere position={[-2, 3, 0]} />
              <Cylinder position={[0, 3, 0]} />
              <Icosahedron position={[4, 3, 0]} />
              <TorusKnot position={[4, 3, 0]} />
            </Debug>
          </Physics>
        </Canvas>
      </ThreeCanvas>
    </Main>
  );
};

export default ReactThreeCannon;
