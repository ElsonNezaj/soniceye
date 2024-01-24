import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import { useAppSelector } from "../../redux/hooks";

export default function CartReview() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.cartReviewContainer}>
      <div className={styles.titleContainer}>
        <Typography className={styles.titleLabel}>Your Cart</Typography>
        <Typography className={styles.subTitleLabel}>
          Before checking out, make sure you have everything you need.
        </Typography>
      </div>
      <div className={styles.itemsContainer}>
        <Typography className={styles.label}>Your items</Typography>
        <div className={styles.items}>
          {cartItems.map((item) => (
            <div className={styles.singleItem}>
              <div className={styles.modelViewer}></div>
              <div className={styles.itemLabel}>
                <Typography className={styles.itemName}>
                  {item.item.name}
                </Typography>
                <Typography className={styles.itemCode}>
                  #{item.item.productCode}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
