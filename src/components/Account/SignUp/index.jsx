import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { Input, Typography } from "antd";
import styles from "./styles.module.scss";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuthRequested } from "../../../redux/authSlice/authslice";

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCred) => {
    //     console.log(userCred);
    //   })
    //   .catch((err) => console.log(err));
    dispatch(getAuthRequested({ email, password }));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Typography className={styles.title}>NEW ACCOUNT</Typography>
      <Typography className={styles.subtitle}>Create a new account</Typography>
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
      <Input type="submit" value="Sign Up" className={styles.submitButton} />
    </form>
  );
}
