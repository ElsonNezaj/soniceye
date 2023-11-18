import React from "react";
import styles from "./styles.module.scss";

export default function Products() {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsFilterContainer}>FILTER</div>
      <div className={styles.productsList}>Products List</div>
    </div>
  );
}
