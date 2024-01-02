import React, { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function UserNavigation() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [menu, toggleMenu] = useState(false);

  const handleCartClick = () => {
    toggleMenu(!menu);
  };

  return (
    <div className={styles.userNavigationContainer}>
      <div className={styles.conectNumberContainer}>
        <Typography className={styles.label}>Contact Us</Typography>
        <Typography className={styles.label}>+355 069 123 4567</Typography>
      </div>
      <div className={`${styles.navigationContainer} ${styles.cartButton}`}>
        <div onClick={handleCartClick} className={styles.buttonContent}>
          {cartItems.length > 0 && (
            <div className={styles.badgeContainer}>
              <Typography className={styles.badgeLabel}>
                {cartItems.length}
              </Typography>
            </div>
          )}
          <div className={styles.iconContainer}>
            <ShoppingCartIcon />
          </div>
          <Typography className={styles.label}>Your Cart</Typography>
        </div>
        {menu && (
          <CartDropDownMenu handleCartClick={handleCartClick} name="soni" />
        )}
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

const CartDropDownMenu = (props, ref) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <ClickAwayListener
      onClickAway={props.handleCartClick && props.handleCartClick}
    >
      <div className={styles.menuContainer}>
        {cartItems.length <= 0 ? (
          <Typography className={styles.noItemLabel}>
            You have no items in the cart
          </Typography>
        ) : (
          cartItems.map((element) => (
            <div className={styles.singleElement}>
              <div className={styles.productInfo}>
                <Typography className={styles.itemLabel}>
                  {element.item.name}
                </Typography>
                <Typography className={styles.codeLabel}>
                  #{element.item.productCode}
                </Typography>
              </div>
              <div className={styles.quantityContainer}>
                <Typography className={styles.itemLabel}>
                  {element.quantity}
                </Typography>
                <div className={styles.quantityControl}>
                  <div className={styles.actionButton}>
                    <ChevronLeftIcon />
                  </div>
                  <div className={styles.actionButton}>
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
              <div className={styles.removeItemContainer}></div>
            </div>
          ))
        )}
      </div>
    </ClickAwayListener>
  );
};
