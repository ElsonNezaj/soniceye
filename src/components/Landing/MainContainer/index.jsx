import ModelView from "../3dGlass";
import styles from "./styles.module.scss";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.landingInfo}></div>
      <div className={styles.modelViewContainer}>
        <ModelView />
      </div>
    </div>
  );
}
