'use client';

import type {
  CylinderArgs,
  CylinderProps,
  PlaneProps,
} from '@react-three/cannon';
import { Debug, Physics, useCylinder, usePlane } from '@react-three/cannon';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { type Ref, Suspense } from 'react';
import type { Group, Mesh } from 'three';

import Vehicle from '@/components/cannon/Beetle';
import { DefaultLayout, ThreeCanvas } from '@/layouts';

const Plane = (props: PlaneProps) => {
  const [ref] = usePlane(() => ({
    material: 'ground',
    type: 'Static',
    ...props,
  }));
  return (
    <group ref={ref as Ref<Group>}>
      <mesh receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
    </group>
  );
};

const Pillar = (props: CylinderProps) => {
  const args: CylinderArgs = [0.7, 0.7, 5, 16];
  const [ref] = useCylinder(() => ({
    args,
    mass: 10,
    ...props,
  }));
  return (
    <mesh ref={ref as Ref<Mesh>} castShadow>
      <cylinderGeometry args={args} />
      <meshNormalMaterial />
    </mesh>
  );
};

export default function CannonRaycastVehicle() {
  const { ambient_intensity, spot_intensity } = useControls(
    'Light Intensities',
    {
      ambient_intensity: { value: 0.1, min: 0, max: 2, step: 0.1 },
      spot_intensity: { value: 1, min: 0, max: 3, step: 0.1 },
    },
  );

  return (
    <>
      <ThreeCanvas>
        <Canvas shadows camera={{ fov: 50, position: [0, 5, 15] }}>
          <fog attach="fog" args={['#171720', 10, 50]} />
          <color attach="background" args={['#171720']} />
          <ambientLight intensity={ambient_intensity} />
          <spotLight
            position={[10, 10, 10]}
            angle={Math.PI / 3}
            intensity={spot_intensity}
            castShadow
            penumbra={1}
          />
          <Physics
            broadphase="SAP"
            defaultContactMaterial={{
              contactEquationRelaxation: 4,
              friction: 1e-3,
            }}
            allowSleep
          >
            <Debug>
              <Plane
                rotation={[-Math.PI / 2, 0, 0]}
                userData={{ id: 'floor' }}
              />
              <Vehicle
                position={[0, 2, 0]}
                rotation={[0, -Math.PI / 4, 0]}
                angularVelocity={[0, 0.5, 0]}
              />
              <Pillar position={[-5, 2.5, -5]} userData={{ id: 'pillar-1' }} />
              <Pillar position={[0, 2.5, -5]} userData={{ id: 'pillar-2' }} />
              <Pillar position={[5, 2.5, -5]} userData={{ id: 'pillar-3' }} />
            </Debug>
          </Physics>
          <Suspense fallback={null}>
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </ThreeCanvas>
      <DefaultLayout>
        <p>
          * WASD or Arrow Keys to drive, SPACE to brake
          <br />r to reset
        </p>
      </DefaultLayout>
    </>
  );
}
