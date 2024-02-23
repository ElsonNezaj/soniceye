import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Typography, Button, Form, Input } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
import { updateUserDB } from "../../../firebaseUtils";
import { toggleConfirmPassword } from "../../../redux/authSlice/authslice";

export default function EditInputs({ setRightSideState }) {
  const dispatch = useAppDispatch();
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

  const handleSubmit = () => {
    if (formData.email !== userAuth.email) {
      dispatch(toggleConfirmPassword({ status: true, data: formData }));
    }
    formData &&
      formData.email === userAuth.email &&
      updateUserDB({ id: userAuth?.uid, data: formData });
  };

  return (
    <div className={styles.editInputsContainer}>
      <Typography className={styles.title}>Edit your profile</Typography>
      <Typography className={styles.subTitle}>
        Modify your personal data
      </Typography>
      <Form onSubmitCapture={() => handleSubmit()} className={styles.editForm}>
        <Input
          type="text"
          placeholder="Display Name"
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
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          className={styles.phoneInput}
        />
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
        <div className={styles.actionsContainer}>
          <Button
            className={styles.cancelContainer}
            onClick={() => setRightSideState("cart")}
            type="primary"
            danger
          >
            Cancel
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
          >
            Save your changes
          </Button>
        </div>
      </Form>
    </div>
  );
}
