import React from "react";
import styles from "./styles.module.scss";
import { Typography, Tooltip } from "antd";
import ModelView from "./3dGlass";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { PRODUCTS } from "../../../assets/constants/constants";

export default function SingleProductRoute(match) {
  const { productCode } = match.match.params;
  const data = PRODUCTS.find((el) => el.productCode === Number(productCode));
  return (
    <div className={styles.singleRouteContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.modelContainer}>
          <Tooltip
            title={
              <span className={styles.tooltipMessage}>
                Drag on the left side of the page to rotate the model
              </span>
            }
            placement="right"
          >
            <Typography className={styles.quickMessage}>
              <HelpOutlineIcon />
            </Typography>
          </Tooltip>
          <ModelView />
        </div>
        <div className={styles.dataContainer}>
          <div className={styles.verticalText}>
            <Typography className={styles.titleLabel}>{data.name}</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
