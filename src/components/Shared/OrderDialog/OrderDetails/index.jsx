import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function OrderDetails({ details }) {
  return (
    <div className={styles.detailsContainer}>
      {details ? (
        <div className={styles.detailsInfo}>
          <Typography className={styles.label}>
            Full Name : <span>{details.fullName}</span>
          </Typography>
          <Typography className={styles.label}>
            E-mail : <span>{details.email}</span>
          </Typography>
          <Typography className={styles.label}>
            Phone Number : <span>{details.phoneNumber}</span>
          </Typography>
          <Typography className={styles.label}>
            Address : <span>{details.address}</span>
          </Typography>
          <Typography className={styles.label}>
            City : <span>{details.city}</span>
          </Typography>
          <Typography className={styles.label}>
            Country : <span>{details.country}</span>
          </Typography>
          <Typography className={styles.label}>
            Zip Code : <span>{details.zipCode}</span>
          </Typography>
        </div>
      ) : (
        <Typography>No Details</Typography>
      )}
    </div>
  );
}
