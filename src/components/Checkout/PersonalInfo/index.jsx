import styles from "./styles.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { Typography, Form, Input } from "antd";

export default function PersonalInfo() {
  const userAuth = useAppSelector((state) => state.auth.authUser);
  const [formData, setFormData] = useState({
    ...userAuth,
    displayName: userAuth.displayName,
    email: userAuth.email,
    phoneNumber: userAuth.phoneNumber,
    address: userAuth.address,
    city: userAuth.city,
    country: userAuth.country,
    zipCode: userAuth.zipCode,
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.personalInfoContainer}>
      <Form className={styles.infoForm}>
        <div className={styles.leftSideInputs}>
          <Typography className={styles.sectionTitle}>
            Personal Information
          </Typography>
          <Input
            type="text"
            placeholder="Your Name"
            name="displayName"
            value={formData.displayName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            type="text"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <PhoneInput
            placeholder="Phone Number*"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleChange(e?.target.name, e?.target.value)}
            className={styles.phoneInput}
          />
        </div>
        <div className={styles.rightSideInput}>
          <Typography className={styles.sectionTitle}>
            Address Information
          </Typography>
          <Input
            name="address"
            type="text"
            value={formData.address}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Address"
            className={styles.input}
          />
          <Input
            name="city"
            type="text"
            value={formData.city}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="City"
            className={styles.input}
          />
          <Input
            name="country"
            type="text"
            value={formData.country}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Country"
            className={styles.input}
          />
          <Input
            name="zipCode"
            type="text"
            value={formData.zipCode}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            placeholder="Zip Code"
            className={styles.input}
          />
        </div>
      </Form>
    </div>
  );
}
