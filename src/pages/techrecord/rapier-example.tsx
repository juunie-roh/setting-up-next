import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Suspense, useMemo } from 'react';

// eslint-disable-next-line import/no-cycle
import { Rapier } from '@/components';
import { Meta, ThreeCanvas } from '@/layouts';
import { Main } from '@/templates';

export const Controls = {
  forward: 'forward',
  back: 'back',
  left: 'left',
  right: 'right',
  jump: 'jump',
};

const RapierExample = () => {
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: Controls.forward, keys: ['Space'] },
    ],
    [],
  );

  return (
    <Main
      meta={
        <Meta
          title="Rapier Example"
          description="Physics Engine Example from Rapier"
        />
      }
    >
      <ThreeCanvas>
        <KeyboardControls map={map}>
          <Canvas shadows camera={{ position: [20, 20, 20], fov: 30 }}>
            <color attach="background" args={['#ececec']} />
            <Suspense>
              <Physics debug>
                <Rapier />
              </Physics>
            </Suspense>
          </Canvas>
        </KeyboardControls>
      </ThreeCanvas>
    </Main>
  );
};

export default RapierExample;
