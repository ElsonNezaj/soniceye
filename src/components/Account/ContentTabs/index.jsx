import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function ContentTabs({ formState, setFormState }) {
  return (
    <div className={styles.tabsContainer}>
      <div
        onClick={() => setFormState("login")}
        className={`${styles.tab} ${formState === "login" && styles.selected}`}
      >
        <Typography className={styles.label}>Log In</Typography>
      </div>
      <div
        onClick={() => setFormState("signup")}
        className={`${styles.tab}  ${formState !== "login" && styles.selected}`}
      >
        <Typography className={styles.label}>Sign Up</Typography>
      </div>
    </div>
  );
}
