import type { Object3DNode } from '@react-three/fiber';
import { extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { ShaderMaterial } from 'three';
import { PlaneGeometry, RepeatWrapping, TextureLoader, Vector3 } from 'three';
import { Water } from 'three/examples/jsm/objects/Water';

extend({ Water });
declare global {
  namespace JSX {
    interface IntrinsicElements {
      water: Object3DNode<Water, typeof Water>;
    }
  }
}

const Ocean = () => {
  const ref = useRef<Water>(null!);
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(TextureLoader, '/waternormals.jpeg');
  waterNormals.wrapT = RepeatWrapping;
  waterNormals.wrapS = waterNormals.wrapT;
  const geom = useMemo(() => new PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: false,
      format: gl.outputColorSpace,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [waterNormals],
  );

  useFrame((_state, delta) => {
    const material = ref?.current?.material as ShaderMaterial;
    if (material.uniforms.time) {
      material.uniforms.time.value += delta;
    }
  });
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, 0, 0]}
    />
  );
};

export default Ocean;
