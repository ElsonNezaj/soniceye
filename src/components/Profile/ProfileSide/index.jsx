import styles from "./styles.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography } from "antd";
import { useAppSelector } from "../../../redux/hooks";

export default function ProfileSide() {
  const authUser = useAppSelector((state) => state.auth.authUser);
  const lastLogin = new Date(
    Number(authUser.metadata.lastLoginAt)
  ).toLocaleString();

  return (
    <div className={styles.profileContainer}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <AccountCircleIcon />
        </div>
        <Typography className={styles.userName}>
          {authUser.displayName}
        </Typography>
        <div className={styles.mainInfo}>
          <Typography className={styles.mainLabel}>
            <span>E-mail : </span>
            {authUser.email}
          </Typography>
          <Typography className={styles.genderLabel}>
            Gender : &nbsp;
            <span>{authUser.gender === "male" ? "M" : "F"}</span>
          </Typography>

          <Typography className={styles.genderLabel}>
            Age : &nbsp;
            <span>{authUser.age}</span>
          </Typography>
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <Typography className={styles.titleLabel}>Personal Details</Typography>
        <Typography className={styles.label}>
          <span>Phone number : </span>
          {authUser.phoneNumber}
        </Typography>
        <Typography className={styles.label}>
          <span>Address : </span>
          {authUser.address}
        </Typography>
        <Typography className={styles.label}>
          <span>City : </span>
          {authUser.city}
        </Typography>
        <Typography className={styles.label}>
          <span>Last Logged In : </span>
          {lastLogin}
        </Typography>
      </div>
      <div className={styles.previewOrders}>PREVIEW ORDERS BOX</div>
    </div>
  );
}
