import { useLoader } from '@react-three/fiber';
import { useState } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type IThreeGLTFLoaderProps = {
  modelPath: string;
};
/**
 * Load model from `props.modelPath`, then add pointer events.
 * @param props IThreeGLTFLoaderProps
 * @returns React.JSX.Element
 */
const ThreeGLTFLoader = (props: IThreeGLTFLoaderProps) => {
  const gltf = useLoader(GLTFLoader, props.modelPath);
  const [active, setActive] = useState<boolean>(false);

  const setIsHovered = (isHovered: boolean) => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child instanceof Mesh) {
          const mesh = child as Mesh;
          if (mesh.material instanceof MeshStandardMaterial) {
            mesh.material.emissive.set(isHovered ? 0xff0000 : 0x000000);
            mesh.material.emissiveIntensity = isHovered ? 1 : 0;
          }
        }
      });
    }
  };

  return (
    <mesh
      rotation={[0, Math.PI / 2, 0]}
      onClick={() => setActive(!active)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={() => setIsHovered(false)}
      scale={active ? 1.5 : 1.0}
      castShadow
      receiveShadow
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export { ThreeGLTFLoader };
