import React from "react";
import styles from "./styles.module.scss";
import ListProduct from "../ListProduct";
import RowProduct from "../RowProduct";

export default function SingleProduct({ view, product }) {
  console.log(view);
  return (
    <div
      className={`${(view === "row" || !view) && styles.productContainerRow} ${
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
