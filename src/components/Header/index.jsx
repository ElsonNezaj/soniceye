import { Button, Drawer, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menuIcon.svg";
import { useEffect, useState } from "react";

import appLogo from "../../assets/images/logo/soniceyeLogo.png";
import ProductSearch from "./ProductSearch";
import UserNavigation from "./UserNavigation";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { ShoppingCart, Person } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../redux/cartSlice/cartSlice";
import { signOutRequested } from "../../redux/authSlice/authslice";

export default function Header() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.firstRow}>
        <div className={styles.logoContainer}>
          <Link to="/home">
            <img src={appLogo} alt="app logo" className={styles.appLogo} />
          </Link>
        </div>
        <div className={styles.searchContainer}>
          <ProductSearch />
        </div>
        <div className={styles.userContainer}>
          <UserNavigation />
        </div>

        <div className={styles.mobileMenu}>
          <Button
            onClick={() => setIsDrawerOpen(true)}
            className={styles.menuButton}
          >
            <Menu />
          </Button>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.menuContainer}>
          <div className={styles.menuItems}>
            <a href="/products" className={styles.menuText}>
              Products
            </a>
            <a href="/about" className={styles.menuText}>
              About Us
            </a>
            <a href="/contact" className={styles.menuText}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <Drawer
        open={isDrawerOpen}
        width={250}
        onClose={() => setIsDrawerOpen(false)}
        bodyStyle={{ padding: "0px 10px 0px 10px" }}
        className={styles.drawer}
        closable={false}
      >
        <div className={styles.drawerContentContainer}>
          <CartContainer setIsDrawerOpen={setIsDrawerOpen} />
          <Link to="/products" onClick={() => setIsDrawerOpen(false)}>
            <Typography className={styles.drawerContent}>Products</Typography>
          </Link>
          {!isAuth ? (
            <Link to="/account" onClick={() => setIsDrawerOpen(false)}>
              <Typography className={styles.drawerContent}>Account</Typography>
            </Link>
          ) : (
            <Link to="/profile" onClick={() => setIsDrawerOpen(false)}>
              <Typography
                onClick={() => setIsDrawerOpen(false)}
                className={styles.drawerContent}
              >
                Account
              </Typography>
            </Link>
          )}
          <Link to="/about" onClick={() => setIsDrawerOpen(false)}>
            <Typography className={styles.drawerContent}>About Us</Typography>
          </Link>
          <Link to="/contact" onClick={() => setIsDrawerOpen(false)}>
            <Typography className={styles.drawerContent}>Contact</Typography>
          </Link>
        </div>
        {/* <a href="/soniceye.apk" download className={styles.downloadLink}>
          Download Mobile Version <br></br> (APK)
        </a> */}
      </Drawer>
    </div>
  );
}

function CartContainer({ setIsDrawerOpen }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const authUser = useAppSelector((state) => state.auth.authUser);
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

  const handleLogout = () => {
    cartItems.length >= 1
      ? dispatch(signOutRequested({ uid: authUser.uid, items: cartItems }))
      : dispatch(signOutRequested({ state: "no-update" }));
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setTotal(findTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <div className={styles.cartContainer}>
      {authUser && (
        <div className={styles.userContainerMobile}>
          <Typography className={styles.title}>
            <Person /> &nbsp; {authUser.displayName}
          </Typography>
          <Button
            onClick={() => handleLogout()}
            className={styles.logoutButton}
          >
            Log Out
          </Button>
        </div>
      )}
      <div className={styles.titleContainer}>
        <Typography className={styles.title}>
          <ShoppingCart /> &nbsp; Your Cart
        </Typography>
        <Typography className={styles.totalAmount}>
          Total : {total && total} €
        </Typography>
      </div>
      <div
        className={`${styles.itemsContainer} ${
          cartItems.length === 0 && styles.alignCenter
        }`}
      >
        {cartItems.length === 0 ? (
          <Typography className={styles.emptyLabel}>
            Your cart is empty
          </Typography>
        ) : (
          cartItems.map((element) => (
            <div key={element.productCode} className={styles.singleCartItem}>
              <Typography className={styles.productName}>
                {element.name}
              </Typography>
              <div className={styles.secondRow}>
                <Typography className={styles.prodCode}>
                  #{element.productCode}
                </Typography>
                <Typography className={styles.prodPrice}>
                  {element.price} €
                </Typography>
              </div>
              <div className={styles.quantityContainer}>
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
                  <ChevronLeft />
                </div>
                <Typography className={styles.quantityLabel}>
                  {element.quantity}
                </Typography>
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
                  <ChevronRight />
                </div>
              </div>
              <Button
                onClick={() => dispatch(removeItemFromCart(element.name))}
                className={styles.removeButton}
              >
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <Link to="/cart_review" className={styles.link}>
          <Button
            onClick={() => setIsDrawerOpen(false)}
            className={styles.checkoutButton}
          >
            Checkout
          </Button>
        </Link>
      )}
    </div>
  );
}
