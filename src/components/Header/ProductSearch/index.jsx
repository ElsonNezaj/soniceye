import React, { useState } from "react";
import { Input, Typography, Button } from "antd";
import styles from "./styles.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { PRODUCTS } from "../../../assets/constants/constants";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useAppDispatch } from "../../../redux/hooks";
import { saveItemToCart } from "../../../redux/cartSlice/cartSlice";

export default function ProductSearch() {
  const dispatch = useAppDispatch();
  const [searchResults, setSearchResults] = useState();
  const [searchValue, setSearchValue] = useState();

  const handleClick = (item) => {
    dispatch(saveItemToCart(item));
  };

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
          {searchResults.length <= 0 && (
            <Typography className={styles.noResultsText}>
              No Results Found
            </Typography>
          )}
          {searchResults.map((item) => (
            <div key={item.name} className={styles.singleResult}>
              <div className={styles.titleContainer}>
                <Typography className={styles.titleLabel}>
                  {item.name}
                </Typography>
                <Typography className={styles.titleSubLabel}>
                  #{item.productCode}
                </Typography>
              </div>
              <div className={styles.descriptionContainer}>
                <Typography className={styles.descriptionLabel}>
                  {item.description}
                </Typography>
                <div className={styles.tagContainer}>
                  {item.tags.map((tag) => (
                    <Typography className={styles.descriptionSubLabel}>
                      {tag}
                    </Typography>
                  ))}
                </div>
              </div>
              <div className={styles.priceContainer}>
                <Typography className={styles.titleLabel}>
                  {item.price} €
                </Typography>
                <Button
                  onClick={() => handleClick(item)}
                  className={styles.addToCartButton}
                >
                  <AddShoppingCartIcon />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
