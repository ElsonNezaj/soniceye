import {
  signOutRequested,
  toggleConfirmSignOut,
} from "../../../redux/authSlice/authslice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";
import { Dialog } from "@mui/material";

export default function LogOutModal() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.auth.isSignOutConfirm);
  const handleOk = () => {
    dispatch(signOutRequested({ state: "no-update" }));
    dispatch(toggleConfirmSignOut(false));
  };
  return (
    <Dialog open={open} onClose={handleOk} className={styles.modal}>
      <div className={styles.messageContainer}>
        <Typography className={styles.title}>E-mail changed !</Typography>
        <Typography className={styles.message}>
          You will be signed out.
        </Typography>
        <Typography className={styles.submessage}>
          Please log back in with your new e-mail!
        </Typography>
        <Button type="primary" onClick={handleOk} className={styles.okButton}>
          Sign Out
        </Button>
      </div>
    </Dialog>
  );
}
