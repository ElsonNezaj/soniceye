import React from "react";
import styles from "./styles.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import { Typography } from "antd";
import ModelView from "./3dGlass";

export default function SingleProductRoute({ params }) {
  const data = useAppSelector((state) => state.products.activeRouteData);

  return (
    <div className={styles.singleRouteContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.modelContainer}>
          <ModelView />
        </div>
        <div className={styles.dataContainer}>
          <Typography className={styles.titleLabel}>{data.name}</Typography>
        </div>
      </div>
    </div>
  );
}
