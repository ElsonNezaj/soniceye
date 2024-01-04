import React from "react";
import styles from "./styles.module.scss";
import SignUpForm from "../SignUp";
import LoginForm from "../LoginForm";

export default function RegistrationForm() {
  return (
    <div className={styles.formContainers}>
      <LoginForm />
      <SignUpForm />
    </div>
  );
}
