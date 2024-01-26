import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { ReactComponent as List } from "../../../assets/images/filter/list.svg";
import { ReactComponent as Row } from "../../../assets/images/filter/row.svg";
import { Typography } from "antd";
import { PRODUCTS } from "../../../assets/constants/constants";
import SingleProduct from "../SingleProduct";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleProductsView } from "../../../redux/productsSlice/productsSlice";

export default function Products() {
  const dispatch = useAppDispatch();
  const view = useAppSelector((state) => state.products.view);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth <= 500) {
      dispatch(toggleProductsView("row"));
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
            onClick={() => dispatch(toggleProductsView("row"))}
            className={`
            ${styles.filterIcon} 
            ${view === "row" && styles.selectedView}
            `}
          >
            <Row />
          </div>
          <div
            onClick={() => dispatch(toggleProductsView("list"))}
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
          <SingleProduct key={product.name} product={product} view={view} />
        ))}
      </div>
    </div>
  );
}
