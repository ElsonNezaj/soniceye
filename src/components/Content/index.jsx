import React from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function Content() {
  return (
    <div className={styles.content}>
      <Typography>CONTENT ROUTER</Typography>
    </div>
  );
}
