/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";
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
import { Link } from "react-router-dom";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import { signOutRequested } from "../../../redux/authSlice/authslice";

export default function UserNavigation() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const userAuth = useAppSelector((state) => state.auth.authUser);
  const [menu, toggleMenu] = useState(false);

  const handleCartClick = () => {
    toggleMenu(!menu);
  };

  const handleLogout = () => {
    cartItems.length >= 1
      ? dispatch(signOutRequested({ uid: userAuth.uid, items: cartItems }))
      : dispatch(signOutRequested({ state: "no-update" }));
  };

  return (
    <div className={styles.userNavigationContainer}>
      <div className={styles.conectNumberContainer}>
        <Typography className={styles.label}>Contact Us</Typography>
        <Typography className={styles.label}>+355 069 123 4567</Typography>
      </div>
      <div className={`${styles.navigationContainer} ${styles.cartButton}`}>
        <div onClick={handleCartClick} className={styles.buttonContent}>
          {cartItems?.length > 0 && (
            <div className={styles.badgeContainer}>
              <Typography className={styles.badgeLabel}>
                {cartItems?.length}
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
        <>
          <Link to="/profile" className={styles.navigationContainer}>
            <div className={styles.iconContainer}>
              <PersonIcon />
            </div>
            <Typography className={styles.label}>
              {userAuth?.displayName ? userAuth.displayName : userAuth?.email}
            </Typography>
          </Link>
          {!userAuth && (
            <Button danger onClick={() => handleLogout()}>
              Emergency Logout
            </Button>
          )}
        </>
      )}
    </div>
  );
}

const CartDropDownMenu = (props, ref) => {
  const dispatch = useAppDispatch();
  const { handleCartClick } = props;
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const [total, setTotal] = useState(0);

  const findTotal = () => {
    let total = 0;
    cartItems.forEach((element) => {
      const elementTotal = element.price * element.quantity;
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
        {cartItems?.length <= 0 ? (
          <Typography className={styles.noItemLabel}>
            You have no items in the cart
          </Typography>
        ) : (
          <>
            {cartItems.map((element) => (
              <div key={element.productCode} className={styles.singleElement}>
                <div className={styles.productInfo}>
                  <Typography className={styles.itemLabel}>
                    {element.name}
                  </Typography>
                  <Typography className={styles.codeLabel}>
                    #{element.productCode}
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
                            name: element.name,
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
                            name: element.name,
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
                  onClick={() => dispatch(removeItemFromCart(element.name))}
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
            <div className={styles.checkoutContainer}>
              <Link to="/cart_review" className={styles.link}>
                <Button
                  onClick={handleCartClick}
                  className={styles.checkoutButton}
                >
                  Checkout &nbsp; <PointOfSaleIcon />
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </ClickAwayListener>
  );
};
