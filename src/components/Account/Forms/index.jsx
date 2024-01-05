import React, { useState } from "react";
import styles from "./styles.module.scss";
import SignUpForm from "../SignUp";
import LoginForm from "../LoginForm";
import ContentTabs from "../ContentTabs";

export default function RegistrationForm() {
  const [formState, setFormState] = useState("login");
  return (
    <div className={styles.formContainers}>
      <ContentTabs setFormState={setFormState} formState={formState} />
      {formState === "login" ? <LoginForm /> : <SignUpForm />}
    </div>
  );
}
