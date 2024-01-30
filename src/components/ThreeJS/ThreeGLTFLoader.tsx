import { useLoader } from '@react-three/fiber';
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

  const handleOnClick = () => {
    console.log('model clicked');
  };

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
    <primitive
      object={gltf.scene}
      onClick={() => handleOnClick()}
      onPointerOver={(e: React.PointerEvent) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={() => setIsHovered(false)}
      castShadow
      receiveShadow
    />
  );
};

export { ThreeGLTFLoader };
