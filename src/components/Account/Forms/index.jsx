import React, { useState } from "react";
import { auth } from "../../../firebase";
import { Input, Typography } from "antd";
import styles from "./styles.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import SignUpForm from "../SignUp";

export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log(userCred);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.formContainers}>
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
      <SignUpForm />
    </div>
  );
}
