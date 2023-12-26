import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import {
  saveActionRouteData,
  saveActiveRoute,
} from "../../../redux/productsSlice/productsSlice";
import { Link } from "react-router-dom";

export default function RowProduct({ product }) {
  const dispatch = useAppDispatch();
  const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);
  const handleClick = () => {
    dispatch(saveActiveRoute(product.name));
    dispatch(saveActionRouteData(product));
  };
  return (
    <Link to={`/products/${product.name}`} style={{ textDecoration: "none" }}>
      <div onClick={() => handleClick()} className={styles.rowProductContainer}>
        <div className={styles.modelView}></div>
        <div className={styles.productInfo}>
          {!isAdditionalInfo ? (
            <div className={styles.mainInfo}>
              <Typography className={styles.productName}>
                {product.name}
              </Typography>
              <div className={styles.tagsContainer}>
                {product.tags.map((tag) => (
                  <Typography key={tag} className={styles.singleTag}>
                    {tag}
                  </Typography>
                ))}
              </div>
              <div className={styles.descriptionContainer}>
                <Typography className={styles.description}>
                  {product.description}
                </Typography>
              </div>
            </div>
          ) : (
            <div className={styles.additionalInfo}>
              <Typography className={styles.colorsLabel}>
                Available Colors
              </Typography>
              <div className={styles.colorsContainer}>
                {product.colors.map((color) => (
                  <div
                    className={styles.singleColor}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className={styles.previewContainer}>
                <div className={styles.previewButton}>Preview Model</div>
              </div>
            </div>
          )}
        </div>
        <div
          onClick={() => setIsAdditionalInfo(!isAdditionalInfo)}
          className={styles.hoverBox}
        >
          <Typography className={styles.hoverText}>
            {isAdditionalInfo ? "Main Info" : "Additional Info"}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
