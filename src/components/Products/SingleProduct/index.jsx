import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function SingleProduct({ view }) {
  return (
    <div className={styles.productContainer}>
      <Typography>SINGLE PRODUCT</Typography>
      {view === "list" ? <ListProduct /> : <RowProduct />}
    </div>
  );
}

function ListProduct() {
  return <div className={styles.listProduct}>LIST PRODUCT</div>;
}

function RowProduct() {
  return <div className={styles.rowProduct}>ROW PRODUCT</div>;
}
