import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export default function UserNavigation() {
  return (
    <div className={styles.userNavigationContainer}>
      <div className={styles.conectNumberContainer}>
        <Typography className={styles.label}>Contact Us</Typography>
        <Typography className={styles.label}>+355 069 123 4567</Typography>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.iconContainer}>
          <ShoppingCartIcon />
        </div>
        <Typography className={styles.label}>Your Cart</Typography>
      </div>
      <div className={styles.navigationContainer}>
        <div className={styles.iconContainer}>
          <PersonIcon />
        </div>
        <Typography className={styles.label}>Your Account</Typography>
      </div>
    </div>
  );
}
