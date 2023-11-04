import React from "react";
import styles from "./styles.module.scss";
import Landing from "../Landing/MainContainer";

export default function Content() {
  return (
    <div className={styles.content}>
      <Landing />
    </div>
  );
}
