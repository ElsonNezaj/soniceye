import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function OrderDetails({ details }) {
  console.log(details);
  return (
    <div className={styles.detailsContainer}>
      {details ? (
        <Typography>Details</Typography>
      ) : (
        <Typography>No Details</Typography>
      )}
    </div>
  );
}
