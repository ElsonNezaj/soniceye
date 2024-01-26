import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import styles from "./styles.module.scss";
import * as THREE from "three";

export function Glasses(props) {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const { scene } = useGLTF("/glasses.glb");
  return <primitive camera={camera} object={scene} {...props} />;
}

export default function ModelView() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      className={styles.glasses}
    >
      <PresentationControls speed={1.5} global zoom={0.1} polar={[-0.1, 4]}>
        <Stage environment="night">
          <Glasses
            isAnimated={true}
            scale={window.innerWidth > 500 ? 0.1 : 0.09}
          />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
