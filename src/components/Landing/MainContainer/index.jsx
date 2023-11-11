import ModelView from "../3dGlass";
import styles from "./styles.module.scss";
import LandingCarousel from "../LandingCarousel";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.modelViewContainer}>
        <ModelView />
      </div>
      <div className={styles.landingInfo}>
        <LandingCarousel />
      </div>
    </div>
  );
}
