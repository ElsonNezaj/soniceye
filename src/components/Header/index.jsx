import { Typography } from "antd";
import styles from "./styles.module.scss";
export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Typography className={styles.logoText}>SonicEye</Typography>
      </div>
      <div className={styles.navigationContainer}>
        <Typography className={styles.navigationText}>About Us</Typography>
        <Typography className={styles.navigationText}>Contact</Typography>
      </div>
      <div className={styles.menuContainer}>
        <Typography className={styles.menuText}>Products</Typography>
        <Typography className={styles.menuText}>Account</Typography>
      </div>
    </div>
  );
}
