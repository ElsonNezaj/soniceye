import React from "react";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";

import { useAppDispatch } from "../../../redux/hooks";
import { saveItemToCart } from "../../../redux/cartSlice/cartSlice";
import { Link } from "react-router-dom";
import { toggleModelViewer } from "../../../redux/appSlice/appSlice";

export default function ListProduct({ product }) {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(saveItemToCart(product));
  };
  const handlePreview = () => {
    dispatch(toggleModelViewer(true));
  };
  return (
    <div className={styles.listProductContainer}>
      <div className={styles.modelContainer}>
        <Link
          to={`/products/${product.productCode}/${product.name}`}
          style={{ textDecoration: "none" }}
        ></Link>
      </div>
      <div className={styles.productDescription}>
        <Link
          to={`/products/${product.productCode}/${product.name}`}
          style={{ textDecoration: "none" }}
        >
          <div className={styles.productHeader}>
            <Typography className={styles.productName}>
              {product.name}
            </Typography>
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
        </Link>
        <div className={styles.footerContainer}>
          <div className={styles.previewContainer}>
            <Button
              onClick={() => handlePreview()}
              className={styles.previewButton}
            >
              3D Preview
            </Button>
          </div>
          <div className={styles.addToCartContainer}>
            <Button onClick={handleClick} className={styles.previewButton}>
              Add To Cart
            </Button>
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
