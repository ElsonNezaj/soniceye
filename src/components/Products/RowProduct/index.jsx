import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function RowProduct({ product }) {
  return (
    <div className={styles.rowProductContainer}>
      <div className={styles.modelView}></div>
      <div className={styles.productInfo}>
        {/* <div className={styles.mainInfo}>
          <Typography className={styles.productName}>{product.name}</Typography>
          <div className={styles.tagsContainer}>
            {product.tags.map((tag) => (
              <Typography className={styles.singleTag}>{tag}</Typography>
            ))}
          </div>
          <div className={styles.descriptionContainer}>
            <Typography className={styles.description}>
              {product.description}
            </Typography>
          </div>
        </div> */}
        <div className={styles.additionalInfo}>
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
      </div>
    </div>
  );
}
