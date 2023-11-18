import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>
      <Typography className={styles.title}>ABOUT US</Typography>
      <div className={styles.infoContainer}>
        <div className={styles.singleInfoContainer}>
          <Typography className={styles.subTitle}>What is SonicEye?</Typography>
          <Typography className={styles.subContent}>
            SonicEye is a product designed to assist individuals with sight
            impairment. With high-end sensors , comfortable design and slim
            presentation , these glasses offer comfort and solution.
          </Typography>
        </div>
        <div className={styles.singleInfoContainer}>
          <Typography className={styles.subTitle}>Our Team</Typography>
          <Typography className={styles.subContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consectetur eos dicta sunt libero, in odio quos molestias
            perferendis ut ea quibusdam excepturi.
          </Typography>
        </div>
        <div className={styles.singleInfoContainer}>
          <Typography className={styles.subTitle}>Our Goal</Typography>
          <Typography className={styles.subContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            consectetur eos dicta sunt libero, in odio quos molestias
            perferendis ut ea quibusdam excepturi.
          </Typography>
        </div>
      </div>
    </div>
  );
}
