import React from "react";
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Typography } from "antd";

export default function SingleProductRoute() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.products.activeRouteData);

  return (
    <div className={styles.singleRouteContainer}>
      <div className={styles.productTitle}>
        <Typography className={styles.titleLabel}>{data.name}</Typography>
      </div>
    </div>
  );
}
