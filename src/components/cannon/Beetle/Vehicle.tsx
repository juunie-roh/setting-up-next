import {
  type BoxProps,
  useBox,
  useRaycastVehicle,
  type WheelInfoOptions,
} from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { type Ref, useRef } from 'react';
import type { Group, Object3D } from 'three';

import { useControls } from '@/utils/useControls';

import { Chassis } from './Chassis';
import { Wheel } from './Wheel';

export type VehicleProps = Required<
  Pick<BoxProps, 'angularVelocity' | 'position' | 'rotation'>
> & {
  back?: number;
  force?: number;
  front?: number;
  height?: number;
  maxBrake?: number;
  radius?: number;
  steer?: number;
  width?: number;
};

function Vehicle({
  angularVelocity,
  back = -1.15,
  force = 1500,
  front = 1.3,
  height = -0.04,
  maxBrake = 50,
  position,
  radius = 0.7,
  rotation,
  steer = 0.5,
  width = 1.2,
}: VehicleProps) {
  const chassisBody = useRef<Object3D>(null);
  const wheels = [
    useRef<Object3D>(null),
    useRef<Object3D>(null),
    useRef<Object3D>(null),
    useRef<Object3D>(null),
  ];

  const controls = useControls();

  const wheelInfo: WheelInfoOptions = {
    axleLocal: [-1, 0, 0], // This is inverted for asymmetrical wheel models (left v. right sided)
    customSlidingRotationalSpeed: -30,
    dampingCompression: 4.4,
    dampingRelaxation: 10,
    directionLocal: [0, -1, 0], // set to same as Physics Gravity
    frictionSlip: 2,
    maxSuspensionForce: 1e4,
    maxSuspensionTravel: 0.3,
    radius,
    suspensionRestLength: 0.3,
    suspensionStiffness: 30,
    useCustomSlidingRotationalSpeed: true,
  };

  const wheelInfo1: WheelInfoOptions = {
    ...wheelInfo,
    chassisConnectionPointLocal: [-width / 2, height, front],
    isFrontWheel: true,
  };
  const wheelInfo2: WheelInfoOptions = {
    ...wheelInfo,
    chassisConnectionPointLocal: [width / 2, height, front],
    isFrontWheel: true,
  };
  const wheelInfo3: WheelInfoOptions = {
    ...wheelInfo,
    chassisConnectionPointLocal: [-width / 2, height, back],
    isFrontWheel: false,
  };
  const wheelInfo4: WheelInfoOptions = {
    ...wheelInfo,
    chassisConnectionPointLocal: [width / 2, height, back],
    isFrontWheel: false,
  };

  const [, chassisApi] = useBox(
    () => ({
      allowSleep: false,
      angularVelocity,
      args: [1.7, 1, 4],
      mass: 500,
      // eslint-disable-next-line no-console
      onCollide: (e) => console.log('bonk', e.body.userData),
      position,
      rotation,
    }),
    chassisBody,
  );

  const [vehicle, vehicleApi] = useRaycastVehicle(() => ({
    chassisBody,
    wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
    wheels,
  }));

  // useEffect(
  //   () => vehicleApi.sliding.subscribe((v) => console.log('sliding', v)),
  //   [],
  // );

  useFrame(() => {
    const { backward, brake, forward, left, reset, right } = controls.current;

    for (let e = 2; e < 4; e += 1) {
      vehicleApi.applyEngineForce(
        forward || backward ? force * (forward && !backward ? -1 : 1) : 0,
        2,
      );
    }

    for (let s = 0; s < 2; s += 1) {
      vehicleApi.setSteeringValue(
        left || right ? steer * (left && !right ? 1 : -1) : 0,
        s,
      );
    }

    for (let b = 2; b < 4; b += 1) {
      vehicleApi.setBrake(brake ? maxBrake : 0, b);
    }

    if (reset) {
      chassisApi.position.set(...position);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(...angularVelocity);
      chassisApi.rotation.set(...rotation);
    }
  });

  return (
    <group ref={vehicle as Ref<Group>} position={[0, -0.4, 0]}>
      <Chassis ref={chassisBody} />
      <Wheel ref={wheels[0]} radius={radius} leftSide />
      <Wheel ref={wheels[1]} radius={radius} />
      <Wheel ref={wheels[2]} radius={radius} leftSide />
      <Wheel ref={wheels[3]} radius={radius} />
    </group>
  );
}

export default Vehicle;
