import { Button, Drawer, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menuIcon.svg";
import { useState } from "react";

import appLogo from "../../assets/images/logo/soniceyeLogo.png";
import ProductSearch from "./ProductSearch";
import UserNavigation from "./UserNavigation";
import { ShoppingCart } from "@mui/icons-material";

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
        width={200}
        onClose={() => setIsDrawerOpen(false)}
        bodyStyle={{ padding: "0px 10px 0px 10px" }}
        className={styles.drawer}
      >
        <div className={styles.drawerContentContainer}>
          <div className={styles.cartContainer}>
            <Typography className={styles.title}>
              <ShoppingCart /> &nbsp; Your Cart
            </Typography>
            <div className={styles.itemsContainer}>
              <Typography className={styles.label}>
                Your cart is empty
              </Typography>
            </div>
          </div>
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
