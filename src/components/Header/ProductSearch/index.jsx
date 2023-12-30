import React from "react";
import { Input } from "antd";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";

export default function ProductSearch() {
  return (
    <div className={styles.searchContainer}>
      <Input
        placeholder="Search for a product"
        suffix={<SearchIcon />}
        className={styles.input}
      />
    </div>
  );
}
