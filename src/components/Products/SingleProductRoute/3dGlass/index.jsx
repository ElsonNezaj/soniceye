import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage } from "@react-three/drei";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import * as THREE from "three";

export function Glasses(props) {
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const { scene } = useGLTF("/glasses.glb");

  // const renderer = new THREE.WebGLRenderer();
  // window.addEventListener("resize", () => {
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  // });

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
      <Stage environment="night">
        <Glasses
          isAnimated={true}
          scale={window.innerWidth > 500 ? 0.1 : 0.09}
        />
      </Stage>
    </Canvas>
  );
}
