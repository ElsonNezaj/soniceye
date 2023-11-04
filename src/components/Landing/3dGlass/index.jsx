import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import * as THREE from "three";

function Glasses(props) {
  const { scene } = useGLTF("/glasses.glb");
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  const animate = () => {
    requestAnimationFrame(animate);
    if (scene) {
      // scene.rotation.x += 0.01;
      scene.rotation.y += 0.01;
    }
    renderer.render(scene, camera);
  };

  useEffect(() => {
    animate();
  }, []);
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
      <PresentationControls speed={1.5} polar={[-0.1, 1]}>
        <Stage environment={"night"}>
          <Glasses scale={0.045} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}
