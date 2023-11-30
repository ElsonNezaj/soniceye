import React from "react";
import styles from "./styles.module.scss";
import ListProduct from "../ListProduct";
import RowProduct from "../RowProduct";

export default function SingleProduct({ view, product }) {
  return (
    <div
      className={`${view === "row" && styles.productContainerRow} ${
        view === "list" && styles.productContainerList
      }`}
    >
      <>
        {view === "list" ? (
          <ListProduct product={product} />
        ) : (
          <RowProduct product={product} />
        )}
      </>
    </div>
  );
}
