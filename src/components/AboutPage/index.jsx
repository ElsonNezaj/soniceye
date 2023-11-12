import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>
      <Typography className={styles.title}>ABOUT US</Typography>
      <div className={styles.generalInfoContainer}></div>
      <div className={styles.teamInfoContainer}></div>
      <div className={styles.goalInfoContainer}></div>
    </div>
  );
}
