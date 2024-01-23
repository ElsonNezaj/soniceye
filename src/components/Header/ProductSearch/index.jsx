import React, { useState } from "react";
import { Input } from "antd";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { PRODUCTS } from "../../../assets/constants/constants";

export default function ProductSearch() {
  const [searchResults, setSearchResults] = useState();
  const [searchValue, setSearchValue] = useState();

  const filterDataOnChange = (value) => {
    setSearchValue(value);
    const filteredProducts = PRODUCTS.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredProducts);
  };

  return (
    <div className={styles.searchContainer}>
      <Input
        placeholder="Search for a product"
        onChange={(e) => filterDataOnChange(e.target.value)}
        suffix={<SearchIcon />}
        className={styles.input}
      />

      {searchValue?.length > 0 && (
        <div className={styles.resultsContainer}>
          {searchResults.map((item) => (
            <div key={item.name} className={styles.singleResult}></div>
          ))}
        </div>
      )}
    </div>
  );
}
