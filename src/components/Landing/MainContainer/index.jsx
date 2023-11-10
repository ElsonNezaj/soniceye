import { Typography } from "antd";
import ModelView from "../3dGlass";
import styles from "./styles.module.scss";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.modelViewContainer}>
        <ModelView />
      </div>
      <div className={styles.landingInfo}>
        <Typography className={styles.appTitle}>Your Sonic Eyes</Typography>
        <div className={styles.featuresCarousel}></div>
      </div>
    </div>
  );
}
