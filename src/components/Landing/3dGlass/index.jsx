import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import styles from "./styles.module.scss";

function Glasses(props) {
  const { scene } = useGLTF("/glasses.glb");
  return <primitive object={scene} {...props} />;
}

export default function ModelView() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      className={styles.glasses}
    >
      <PresentationControls speed={1.5} polar={[-0.1, 4]}>
        <Stage environment={"city"}>
          <Glasses scale={0.07} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
