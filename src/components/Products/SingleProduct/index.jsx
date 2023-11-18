import React from "react";
import styles from "./styles.module.scss";
import ListProduct from "../ListProduct";
import RowProduct from "../RowProduct";

export default function SingleProduct({ view }) {
  return (
    <div className={styles.productContainer}>
      {view === "list" ? <ListProduct /> : <RowProduct />}
    </div>
  );
}
