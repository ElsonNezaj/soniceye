import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { saveItemToCart } from "../../../redux/cartSlice/cartSlice";
import { Link } from "react-router-dom";

export default function RowProduct({ product }) {
  const dispatch = useAppDispatch();
  const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);
  const handleClick = () => {
    dispatch(saveItemToCart(product));
  };
  return (
    <div className={styles.rowProductContainer}>
      <Link
        to={`/products/${product.productCode}/${product.name}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.modelView}></div>
      </Link>
      <Link
        to={`/products/${product.productCode}/${product.name}`}
        style={{ textDecoration: "none" }}
      >
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
              <div className={styles.addToCartContainer}>
                <Button
                  onClick={handleClick}
                  className={styles.addToCartButton}
                >
                  Add To Cart
                </Button>
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
      </Link>

      <div
        onClick={() => setIsAdditionalInfo(!isAdditionalInfo)}
        className={styles.hoverBox}
      >
        <Typography className={styles.hoverText}>
          {isAdditionalInfo ? "Main Info" : "Additional Info"}
        </Typography>
      </div>
    </div>
  );
}
