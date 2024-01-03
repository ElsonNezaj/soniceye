import { Button, Drawer, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menuIcon.svg";
import { useEffect, useState } from "react";

import appLogo from "../../assets/images/logo/soniceyeLogo.png";
import ProductSearch from "./ProductSearch";
import UserNavigation from "./UserNavigation";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../redux/cartSlice/cartSlice";

export default function Header() {
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
            <Typography className={styles.menuText}>Contact</Typography>
          </div>
        </div>
      </div>

      <Drawer
        open={isDrawerOpen}
        width={250}
        onClose={() => setIsDrawerOpen(false)}
        bodyStyle={{ padding: "0px 10px 0px 10px" }}
        className={styles.drawer}
      >
        <div className={styles.drawerContentContainer}>
          <CartContainer />
          <Link to="/products" onClick={() => setIsDrawerOpen(false)}>
            <Typography className={styles.drawerContent}>Products</Typography>
          </Link>
          <Typography className={styles.drawerContent}>
            Account <span>(Not Working)</span>
          </Typography>
          <Link to="/about" onClick={() => setIsDrawerOpen(false)}>
            <Typography className={styles.drawerContent}>About Us</Typography>
          </Link>
          <Typography className={styles.drawerContent}>
            Contact <span>(Not Working)</span>
          </Typography>
        </div>
      </Drawer>
    </div>
  );
}

function CartContainer() {
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
    <div className={styles.cartContainer}>
      <div className={styles.titleContainer}>
        <Typography className={styles.title}>
          <ShoppingCart /> &nbsp; Your Cart
        </Typography>
        <Typography className={styles.totalAmount}>
          Total : {total} €
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
            <div
              key={element.item.productCode}
              className={styles.singleCartItem}
            >
              <Typography className={styles.productName}>
                {element.item.name}
              </Typography>
              <div className={styles.secondRow}>
                <Typography className={styles.prodCode}>
                  #{element.item.productCode}
                </Typography>
                <Typography className={styles.prodPrice}>
                  {element.item.price} €
                </Typography>
              </div>
              <div className={styles.quantityContainer}>
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
                  <ChevronLeft />
                </div>
                <Typography className={styles.quantityLabel}>
                  {element.quantity}
                </Typography>
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
                  <ChevronRight />
                </div>
              </div>
              <Button
                onClick={() => dispatch(removeItemFromCart(element.item.name))}
                className={styles.removeButton}
              >
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
