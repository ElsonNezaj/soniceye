import React from "react";
import styles from "./styles.module.scss";
import ListProduct from "../ListProduct";
import RowProduct from "../RowProduct";

export default function SingleProduct({ view }) {
  return (
    <div
      className={`${view === "row" && styles.productContainerRow} ${
        view === "list" && styles.productContainerList
      }`}
    >
      {view === "list" ? <ListProduct /> : <RowProduct />}
    </div>
  );
}
