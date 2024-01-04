import React, { useState } from "react";
import { Input, Typography } from "antd";
import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { getLoginRequested } from "../../../redux/authSlice/authslice";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLoginRequested({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Typography className={styles.title}>LOG IN</Typography>
      <Typography className={styles.subtitle}>
        Log in by using an existing account
      </Typography>
      <Input
        className={styles.input}
        required
        value={email}
        type="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className={styles.input}
        required
        value={password}
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input type="submit" value="Log In" className={styles.submitButton} />
    </form>
  );
}
