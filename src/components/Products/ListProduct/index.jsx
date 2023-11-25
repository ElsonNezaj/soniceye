import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

import { Glasses } from "../../Landing/3dGlass";
import { Canvas } from "react-three-fiber";
import { Stage } from "@react-three/drei";

export default function ListProduct() {
  return (
    <div className={styles.listProductContainer}>
      <div className={styles.modelContainer}>
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          className={styles.glasses}
        >
          <Stage environment="night">
            <Glasses
              isAnimated={false}
              scale={window.innerWidth > 500 ? 0.9 : 0.09}
            />
          </Stage>
        </Canvas>
      </div>
      <div className={styles.productDescription}>
        <Typography className={styles.productName}>LIST PRODUCT</Typography>
      </div>
    </div>
  );
}
