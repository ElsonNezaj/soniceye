import { Button, Drawer, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menuIcon.svg";
import { useState } from "react";

import appLogo from "../../assets/images/logo/soniceyeLogo.png";
import ProductSearch from "./ProductSearch";
import UserNavigation from "./UserNavigation";

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

      <div className={styles.mobileMenu}>
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className={styles.menuButton}
        >
          <Menu />
        </Button>
      </div>

      <Drawer
        open={isDrawerOpen}
        width={200}
        onClose={() => setIsDrawerOpen(false)}
        className={styles.drawer}
      >
        <div className={styles.drawerContentContainer}>
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
