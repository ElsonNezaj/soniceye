import { Button, Drawer, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menuIcon.svg";
import { useState } from "react";

import appLogo from "../../assets/images/logo/soniceyeLogo.png";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link to="/home">
          <img src={appLogo} alt="app logo" className={styles.appLogo} />
        </Link>
      </div>
      <div className={styles.navigationContainer}>
        <Link to="/about" className={styles.link}>
          <Typography className={styles.navigationText}>About Us</Typography>
        </Link>
        <Typography className={styles.navigationText}>Contact</Typography>
      </div>
      <div className={styles.menuContainer}>
        <Typography className={styles.menuText}>Products</Typography>
        <Typography className={styles.menuText}>Account</Typography>
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
          <Typography className={styles.drawerContent}>Products</Typography>
          <Typography className={styles.drawerContent}>Account</Typography>
          <Link to="/about">
            <Typography className={styles.drawerContent}>About Us</Typography>
          </Link>
          <Typography className={styles.drawerContent}>Contact</Typography>
        </div>
      </Drawer>
    </div>
  );
}
