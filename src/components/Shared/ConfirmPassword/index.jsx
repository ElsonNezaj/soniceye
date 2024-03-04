import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography, Button, Form, Input } from "antd";
import { Dialog } from "@mui/material";
import { toggleConfirmPassword } from "../../../redux/authSlice/authslice";
import { useState } from "react";
import { changeAuthEmail } from "../../../firebaseUtils";
import { auth } from "../../../firebase";

export default function ConfirmPassword() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.auth.isConfirmPassword);
  const authEmail = useAppSelector((state) => state.auth.authUser?.email);
  const currentUser = auth.currentUser;
  const newEmail = useAppSelector((state) => state.auth.updateData?.email);
  const newData = useAppSelector((state) => state.auth.updateData);
  const [password, setPassword] = useState("");

  const handleChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    authEmail &&
      newData &&
      newEmail &&
      currentUser &&
      changeAuthEmail(authEmail, password, currentUser, newEmail, newData);
  };

  return (
    <Dialog
      open={open}
      onClose={() => dispatch(toggleConfirmPassword(false))}
      className={styles.modal}
    >
      <div className={styles.messageContainer}>
        <Typography className={styles.message}>
          You are changing your email !
        </Typography>
        <Typography className={styles.submessage}>
          To make sure it's you , confirm your password below:
        </Typography>
        <Form onSubmitCapture={handleSubmit} className={styles.passwordForm}>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => handleChange(e.target.value)}
            className={styles.passwordInput}
          />
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
          >
            Authenticate
          </Button>
        </Form>
      </div>
    </Dialog>
  );
}
