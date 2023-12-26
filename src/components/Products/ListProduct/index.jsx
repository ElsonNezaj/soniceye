import React from "react";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";

import { Canvas } from "react-three-fiber";
import { Stage, useGLTF } from "@react-three/drei";
import { useAppDispatch } from "../../../redux/hooks";
import {
  saveActionRouteData,
  saveActiveRoute,
} from "../../../redux/productsSlice/productsSlice";

function Glasses(props) {
  const { scene } = useGLTF("/glasses.glb");

  return <primitive object={scene} {...props} />;
}

export default function ListProduct({ product }) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(saveActiveRoute(product.name));
    dispatch(saveActionRouteData(product));
  };
  return (
    <div onClick={() => handleClick()} className={styles.listProductContainer}>
      <div className={styles.modelContainer}>
        {/* <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          className={styles.glasses}
        >
          <Stage environment="night">
            <Glasses scale={window.innerWidth > 500 ? 0.9 : 0.09} />
          </Stage>
        </Canvas> */}
      </div>
      <div className={styles.productDescription}>
        <div className={styles.productHeader}>
          <Typography className={styles.productName}>{product.name}</Typography>
          <Typography className={styles.productPrice}>
            {product.price} &euro;
          </Typography>
        </div>
        <div className={styles.tagsContainer}>
          {product.tags.map((tag) => (
            <div key={tag} className={styles.tagContainer}>
              <Typography className={styles.tagLabel}>{tag}</Typography>
            </div>
          ))}
        </div>
        <div className={styles.descriptionContainer}>
          <Typography className={styles.description}>
            {product.description}
          </Typography>
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.previewContainer}>
            <Button className={styles.previewButton}>3D Preview</Button>
          </div>
          <div className={styles.colorsContainer}>
            <Typography className={styles.colorsLabel}>
              Available Colors : &nbsp;
            </Typography>
            <div className={styles.colors}>
              {product.colors.map((color) => (
                <div
                  style={{ backgroundColor: color }}
                  className={styles.color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
