import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as List } from "../../../assets/images/filter/list.svg";
import { ReactComponent as Row } from "../../../assets/images/filter/row.svg";
import { Typography } from "antd";
import { PRODUCTS } from "../../../assets/constants/constants";
import SingleProduct from "../SingleProduct";

export default function Products() {
  const [view, setView] = useState("row");
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth <= 500) {
      setView("row");
    }
  }, [windowWidth]);

  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsFilterContainer}>
        <Typography className={styles.filterMainLabel}>PRODUCTS</Typography>
        <div className={styles.whiteLine} />
        <div className={styles.whiteLine} />
        <div className={styles.filterContainer}>
          <Typography className={styles.filterText}>View: </Typography>
          <div
            onClick={() => setView("row")}
            className={`
            ${styles.filterIcon} 
            ${view === "row" && styles.selectedView}
            `}
          >
            <Row />
          </div>
          <div
            onClick={() => setView("list")}
            className={`
            ${styles.filterIcon} 
            ${view === "list" && styles.selectedView}
            `}
          >
            <List />
          </div>
        </div>
      </div>
      <div
        className={`${styles.productsList} ${
          view === "list" ? styles.columnDirection : styles.rowDirection
        }`}
      >
        {PRODUCTS.map((product) => (
          <SingleProduct product={product} view={view} />
        ))}
      </div>
    </div>
  );
}
