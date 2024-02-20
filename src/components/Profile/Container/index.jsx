import { useState } from "react";
import InputSide from "../InputSide";
import ProfileSide from "../ProfileSide";
import styles from "./styles.module.scss";

export default function ProfileContainer() {
  const [rightSideState, setRightSideState] = useState("cart");
  return (
    <div className={styles.profileContainer}>
      <div className={styles.leftSide}>
        <ProfileSide setRightSideState={setRightSideState} />
      </div>
      <div className={styles.rightSide}>
        <InputSide
          rightSideState={rightSideState}
          setRightSideState={setRightSideState}
        />
      </div>
    </div>
  );
}
