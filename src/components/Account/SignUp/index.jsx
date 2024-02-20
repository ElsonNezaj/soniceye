import React, { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { Input, Typography, Select } from "antd";
import styles from "./styles.module.scss";
import { getAuthRequested } from "../../../redux/authSlice/authslice";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function SignUpForm() {
  const dispatch = useAppDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    displayName: "",
    gender: undefined,
    age: undefined,
    phoneNumber: undefined,
    country: "",
    city: "",
    address: "",
    zipCode: "",
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
      <div className={styles.inputsContainer}>
        <div className={styles.leftSide}>
          <Input
            className={styles.input}
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
            placeholder="E-mail*"
            name="email"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <Input
            className={styles.input}
            required
            value={data.password}
            type="password"
            placeholder="Password*"
            name="password"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <div className={styles.row}>
            <Select
              options={[
                {
                  value: "male",
                  label: (
                    <Typography className={styles.option}>Male</Typography>
                  ),
                },
                {
                  value: "female",
                  label: (
                    <Typography className={styles.option}>Female</Typography>
                  ),
                },
                {
                  value: "empty",
                  label: (
                    <Typography className={styles.option}>
                      Rather Not Say
                    </Typography>
                  ),
                },
              ]}
              value={data.gender}
              placeholder="Gender"
              onChange={(e) => setData({ ...data, gender: e })}
              className={styles.input}
              style={{ width: "50%" }}
            />
            <Input
              type="number"
              value={data.age}
              placeholder="Age"
              name="age"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={styles.input}
              style={{ width: "50%" }}
            />
          </div>
        </div>
        <div className={styles.rightSide}>
          <PhoneInput
            placeholder="Phone Number*"
            name="phoneNumber"
            value={data.phoneNumber}
            onChange={(e) => setData({ ...data, phoneNumber: e })}
            className={styles.phoneInput}
            required
          />
          <Input
            className={styles.input}
            required
            name="address"
            value={data.address}
            type="text"
            placeholder="Address*"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <Input
            className={styles.input}
            required
            name="country"
            value={data.country}
            type="text"
            placeholder="Country*"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <div className={styles.row}>
            <Input
              className={styles.input}
              required
              name="city"
              value={data.city}
              type="text"
              placeholder="City*"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <Input
              className={styles.input}
              required
              name="zipCode"
              value={data.zipCode}
              type="text"
              placeholder="Zip Code*"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
      </div>
      <Input type="submit" value="Sign Up" className={styles.submitButton} />
    </form>
  );
}
