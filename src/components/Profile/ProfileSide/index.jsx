import styles from "./styles.module.scss";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Typography, Button, Image } from "antd";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOutRequested } from "../../../redux/authSlice/authslice";
import ProfileIcon from "../../../assets/images/profile.png";

export default function ProfileSide() {
  const dispatch = useAppDispatch();
  const authUser = useAppSelector((state) => state.auth.authUser);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const lastLogin = new Date(
    Number(authUser?.metadata.lastLoginAt)
  ).toLocaleString();

  const handleSignOut = () => {
    cartItems.length >= 1
      ? dispatch(signOutRequested({ uid: authUser?.uid, items: cartItems }))
      : dispatch(signOutRequested({ state: "no-update" }));
  };

  return (
    <div className={styles.profileContainer}>
      {authUser && (
        <>
          {/* MAIN DETAILS FOR USER */}
          <div className={styles.iconContainer}>
            <div className={styles.userContainer}>
              <div className={styles.icon}>
                <Image
                  src={ProfileIcon}
                  preview={false}
                  width={100}
                  height={100}
                />
              </div>
              <Typography className={styles.userName}>
                {authUser.displayName}
              </Typography>
            </div>
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
          {/* EXTRA INFO ABOUT USER */}

          <div className={styles.detailsContainer}>
            <Typography className={styles.titleLabel}>
              Personal Details
            </Typography>
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
        </>
      )}
      <div className={styles.actionsContainer}>
        <Button
          className={styles.editButton}
          type="primary"
          icon={<BorderColorIcon />}
        >
          Edit your profile
        </Button>
        <Button
          className={styles.editButton}
          danger
          type="primary"
          icon={<LogoutIcon />}
          onClick={() => handleSignOut()}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
