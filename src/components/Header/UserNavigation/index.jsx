import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteIcon from "@mui/icons-material/Delete";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../../redux/cartSlice/cartSlice";
import { signOutRequested } from "../../../redux/authSlice/authslice";
import { Link } from "react-router-dom";

export default function UserNavigation() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [menu, toggleMenu] = useState(false);

  const handleCartClick = () => {
    toggleMenu(!menu);
  };

  const handleSignOut = () => {
    dispatch(signOutRequested());
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
        {menu && <CartDropDownMenu handleCartClick={handleCartClick} />}
      </div>
      {!isAuth ? (
        <Link to="/account" className={styles.navigationContainer}>
          <div className={styles.iconContainer}>
            <PersonIcon />
          </div>
          <Typography className={styles.label}>Your Account</Typography>
        </Link>
      ) : (
        <div
          onClick={() => handleSignOut()}
          className={styles.navigationContainer}
        >
          <div className={styles.iconContainer}>
            <PersonIcon />
          </div>
          <Typography className={styles.label}>Log Out</Typography>
        </div>
      )}
    </div>
  );
}

const CartDropDownMenu = (props, ref) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);

  const findTotal = () => {
    let total = 0;
    cartItems.forEach((element) => {
      const elementTotal = element.item.price * element.quantity;
      total = total + elementTotal;
      return total;
    });
    return total;
  };

  useEffect(() => {
    setTotal(findTotal());
  }, [cartItems]);

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
          <>
            {cartItems.map((element) => (
              <div
                key={element.item.productCode}
                className={styles.singleElement}
              >
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
                    <div
                      onClick={() => {
                        dispatch(
                          updateItemQuantity({
                            name: element.item.name,
                            manual: "decrease",
                          })
                        );
                      }}
                      className={styles.actionButton}
                    >
                      <ChevronLeftIcon />
                    </div>
                    <div
                      onClick={() => {
                        dispatch(
                          updateItemQuantity({
                            name: element.item.name,
                            manual: "increase",
                          })
                        );
                      }}
                      className={styles.actionButton}
                    >
                      <ChevronRightIcon />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() =>
                    dispatch(removeItemFromCart(element.item.name))
                  }
                  className={styles.removeItemContainer}
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}
            <div className={styles.totalContainer}>
              <div className={styles.totalLabel}>
                <Typography className={styles.totalLabel}>Total : </Typography>
              </div>
              <div className={styles.amountContainer}>
                <Typography className={styles.amount}>{total} €</Typography>
              </div>
            </div>
          </>
        )}
      </div>
    </ClickAwayListener>
  );
};
