import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeGLTFLoader = () => {
  const gltf = useLoader(GLTFLoader, '/models/KWUBuildings/BokJi.glb');

  return <primitive object={gltf.scene} children-0-castShadow />;
};

export { ThreeGLTFLoader };
