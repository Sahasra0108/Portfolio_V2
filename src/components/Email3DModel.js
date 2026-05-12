import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Email3DModel = () => {
  const { scene } = useGLTF('./hand.obj'); // Path to your 3D model
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive object={scene} />
    </Canvas>
  );
};
