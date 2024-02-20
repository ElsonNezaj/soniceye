import styles from "./styles.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import { Typography, Button, Form, Input } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";

export default function EditInputs() {
  const userAuth = useAppSelector((state) => state.auth.authUser);
  const [formData, setFormData] = useState({
    displayName: userAuth.displayName,
    email: userAuth.email,
    phoneNumber: userAuth.phoneNumber,
    address: userAuth.address,
    city: userAuth.city,
    country: userAuth.country,
    zipCode: userAuth.zipCode,
  });
  const [selectedInput, setSelectedInput] = useState("");

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className={styles.editInputsContainer}>
      <Typography className={styles.title}>Edit your profile</Typography>
      <Typography className={styles.subTitle}>
        Modify your personal data
      </Typography>
      <Form onSubmitCapture={(e) => console.log(e)} className={styles.editForm}>
        <Input
          type="text"
          placeholder="Display Name"
          name="displayName"
          value={selectedInput === "displayName" ? "" : formData.displayName}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.input}
        />
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          value={selectedInput === "email" ? "" : formData.email}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.input}
        />
        <PhoneInput
          placeholder="Phone Number*"
          name="phoneNumber"
          value={selectedInput === "phoneNumber" ? "" : formData.phoneNumber}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.phoneInput}
        />
        <Input
          name="address"
          type="text"
          value={selectedInput === "address" ? "" : formData.address}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="Address"
          className={styles.input}
        />
        <Input
          name="city"
          type="text"
          value={selectedInput === "city" ? "" : formData.city}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="City"
          className={styles.input}
        />
        <Input
          name="country"
          type="text"
          value={selectedInput === "country" ? "" : formData.country}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="Country"
          className={styles.input}
        />
        <Input
          name="zipCode"
          type="text"
          value={selectedInput === "zipCode" ? "" : formData.zipCode}
          onFocus={(e) => setSelectedInput(e.target.name)}
          onBlur={(e) => setSelectedInput("")}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          placeholder="Zip Code"
          className={styles.input}
        />

        <Button
          type="primary"
          htmlType="submit"
          className={styles.submitButton}
        >
          Save your changes
        </Button>
      </Form>
    </div>
  );
}
