import InputSide from "../InputSide";
import ProfileSide from "../ProfileSide";
import styles from "./styles.module.scss";

export default function ProfileContainer() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.leftSide}>
        <ProfileSide />
      </div>
      <div className={styles.rightSide}>
        <InputSide />
      </div>
    </div>
  );
}
