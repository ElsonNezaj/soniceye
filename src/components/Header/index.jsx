import { Button, Drawer, Typography } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menuIcon.svg";
import { useState } from "react";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Link to="/home">
          <Typography className={styles.logoText}>SonicEye</Typography>
        </Link>
      </div>
      <div className={styles.navigationContainer}>
        <Typography className={styles.navigationText}>About Us</Typography>
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
      ></Drawer>
    </div>
  );
}
