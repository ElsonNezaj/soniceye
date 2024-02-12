import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { Input, Typography, Select } from "antd";
import styles from "./styles.module.scss";
import { getAuthRequested } from "../../../redux/authSlice/authslice";

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const [manualGender, setManualGender] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    displayName: "",
    gender: manualGender,
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAuthRequested({ ...data }));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <Typography className={styles.title}>NEW ACCOUNT</Typography>
      <Typography className={styles.subtitle}>Create a new account</Typography>
      <Input
        className={styles.input}
        required
        name="displayName"
        value={data.displayName}
        type="text"
        placeholder="Display Name"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <Input
        className={styles.input}
        required
        value={data.email}
        type="email"
        placeholder="E-mail"
        name="email"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <Input
        className={styles.input}
        required
        value={data.password}
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <div className={styles.row}>
        {/* <Select
          options={[
            {
              value: "male",
              label: <Typography className={styles.option}>Male</Typography>,
            },
            {
              value: "female",
              label: <Typography className={styles.option}>Female</Typography>,
            },
          ]}
          value={data.gender}
          placeholder="Gender"
          onChange={(e) => setManualGender(e.target.value)}
          className={styles.genderSelect}
        /> */}
        <Input type="number" className={styles.input} />
      </div>
      <Input type="submit" value="Sign Up" className={styles.submitButton} />
    </form>
  );
}
