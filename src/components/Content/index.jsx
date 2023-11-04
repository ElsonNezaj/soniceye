import React from "react";
import styles from "./styles.module.scss";
import ModelView from "../3dGlass";

export default function Content() {
  return (
    <div className={styles.content}>
      <ModelView />
    </div>
  );
}
