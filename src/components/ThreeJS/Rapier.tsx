import { Box, OrbitControls, useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { quat, type RapierRigidBody, RigidBody } from '@react-three/rapier';
import React, { useRef, useState } from 'react';
import { Quaternion, Vector3 } from 'three';

type IRapierProps = {
  Controls: {
    forward: string;
    back: string;
    left: string;
    right: string;
    jump: string;
  };
};

const Rapier = (props: IRapierProps) => {
  const [hover, setHover] = useState(false);
  const [start, setStart] = useState(false);
  const cube = useRef<RapierRigidBody>(null!);
  const kicker = useRef<RapierRigidBody>(null!);
  const isOnFloor = useRef(true);

  const jump = () => {
    if (isOnFloor.current) {
      cube.current.applyImpulse({ x: 0, y: 5, z: 0 }, false);
    }
  };

  const jumpPressed = useKeyboardControls(
    (state) => state[props.Controls.jump] as boolean,
  );
  const leftPressed = useKeyboardControls(
    (state) => state[props.Controls.left] as boolean,
  );
  const rightPressed = useKeyboardControls(
    (state) => state[props.Controls.right] as boolean,
  );
  const backPressed = useKeyboardControls(
    (state) => state[props.Controls.back] as boolean,
  );
  const forwardPressed = useKeyboardControls(
    (state) => state[props.Controls.forward] as boolean,
  );

  const handleMovement = () => {
    if (rightPressed) {
      cube.current.applyImpulse({ x: 0.1, y: 0, z: 0 }, true);
    }
    if (leftPressed) {
      cube.current.applyImpulse({ x: -0.1, y: 0, z: 0 }, true);
    }
    if (backPressed) {
      cube.current.applyImpulse({ x: 0, y: 0, z: 0.1 }, true);
    }
    if (forwardPressed) {
      cube.current.applyImpulse({ x: 0, y: 0, z: -0.1 }, true);
    }
  };

  const speed = useRef(5);

  useFrame((_state, delta) => {
    if (jumpPressed) {
      jump();
    }
    handleMovement();

    if (!start) {
      return;
    }
    const curRotation = quat(kicker.current.rotation());
    const incrementRotation = new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      delta * 4,
    );
    curRotation.multiply(incrementRotation);
    kicker.current.setNextKinematicRotation(curRotation);

    speed.current += delta;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody
        position={[-2.5, 1, 0]}
        ref={cube}
        onCollisionEnter={({ other }: any) => {
          if (other.rigidBodyObject.name === 'floor') {
            isOnFloor.current = true;
          }
        }}
        onCollisionExit={({ other }: any) => {
          if (other.rigidBodyObject.name === 'floor') {
            isOnFloor.current = false;
          }
        }}
      >
        <Box
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
          onClick={() => setStart(true)}
        >
          <meshStandardMaterial color={hover ? 'hotpink' : 'royalblue'} />
        </Box>
      </RigidBody>
      <RigidBody type="kinematicPosition" position={[0, 0.75, 0]} ref={kicker}>
        <group position={[2.5, 0, 0]}>
          <Box args={[5, 0.5, 0.5]}>
            <meshStandardMaterial color="peachpuff" />
          </Box>
        </group>
      </RigidBody>
      <RigidBody type="fixed" name="floor">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
};

export { Rapier };
