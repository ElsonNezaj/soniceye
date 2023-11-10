import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import * as THREE from "three";

function Glasses(props) {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const { scene } = useGLTF("/glasses.glb");

  const renderer = new THREE.WebGLRenderer();

  const animate = () => {
    requestAnimationFrame(animate);
    if (scene) {
      scene.rotation.y += 0.008;
    }
    renderer.render(scene, camera);
  };

  useEffect(() => {
    animate();
  }, []);
  return <primitive object={scene} {...props} />;
}

export default function ModelView() {
  const [mouseEntered, hasMouseEntered] = useState(false);

  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      onPointerEnter={() => hasMouseEntered(true)}
      onPointerLeave={() => hasMouseEntered(false)}
      className={styles.glasses}
    >
      <Stage environment={"city"}>
        <Glasses scale={0.1} mouseEntered={mouseEntered} />
      </Stage>
    </Canvas>
  );
}
