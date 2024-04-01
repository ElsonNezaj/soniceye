import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { saveItemToCart } from "../../../redux/cartSlice/cartSlice";
import { Link } from "react-router-dom";
import { toggleModelViewer } from "../../../redux/appSlice/appSlice";

export default function RowProduct({ product }) {
  const dispatch = useAppDispatch();
  const [isAdditionalInfo, setIsAdditionalInfo] = useState(false);
  const handleClick = () => {
    dispatch(saveItemToCart(product));
  };
  const handlePreview = () => {
    dispatch(toggleModelViewer(true));
  };
  return (
    <div className={styles.rowProductContainer}>
      <Link
        to={`/products/${product.productCode}/${product.name}`}
        style={{ textDecoration: "none" }}
      >
        <div className={styles.modelView}></div>
      </Link>

      <div className={styles.productInfo}>
        {!isAdditionalInfo ? (
          <div className={styles.mainInfo}>
            <Link
              to={`/products/${product.productCode}/${product.name}`}
              style={{ textDecoration: "none" }}
            >
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
            </Link>
            <div className={styles.addToCartContainer}>
              <Button onClick={handleClick} className={styles.addToCartButton}>
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
              <div
                onClick={() => handlePreview()}
                className={styles.previewButton}
              >
                Preview Model
              </div>
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
  );
}
