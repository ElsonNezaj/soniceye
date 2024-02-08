import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import styles from "./styles.module.scss";
import * as THREE from "three";
import { useWindowSize } from "../../../../services/utils";

function MyGlasses(props) {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const { scene } = useGLTF("/productGlass.glb");
  return <primitive camera={camera} object={scene} {...props} />;
}

export default function ModelView() {
  const [width] = useWindowSize();
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 2 }} className={styles.glasses}>
      <PresentationControls speed={1.5} global zoom={0.1} polar={[-0.1, 4]}>
        <Stage environment="studio">
          <MyGlasses
            scale={width <= 700 && width > 500 ? 1 : width > 500 ? 0.1 : 0.09}
          />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
