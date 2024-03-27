import styles from "./styles.module.scss";
import { Form, Input, Typography } from "antd";
import InfoIcon from "@mui/icons-material/Info";

export default function SubmitForm({ handleChange }) {
  return (
    <div className={styles.formContainer}>
      <Typography className={styles.title}>Checkout</Typography>
      <Typography className={styles.subTitle}>
        Complete checkout by confirming your details below
      </Typography>
      <Typography className={styles.info}>
        <InfoIcon /> For security reasons, we require you to re-enter your
        personal and account details
      </Typography>
      <Form className={styles.form}>
        <div className={styles.section}>
          <Typography className={styles.sectionTitle}>
            Personal Details
          </Typography>
          <Input
            placeholder="Full Name"
            name="fullName"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="E-mail"
            name="email"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
        </div>
        <div className={styles.section}>
          <Typography className={styles.sectionTitle}>
            Address Information
          </Typography>
          <Input
            placeholder="Address"
            name="address"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="City"
            name="city"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <div className={styles.row}>
            <Input
              placeholder="Country"
              name="country "
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={styles.input}
            />
            <Input
              placeholder="Zip Code"
              name="zipCode"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={styles.input}
            />
          </div>
        </div>
        <div className={styles.section}>
          <Typography className={styles.sectionTitle}>
            Payment Details
          </Typography>
          <Typography className={styles.message}>
            (Currently we only support payments by card)
          </Typography>
          <Input placeholder="Name on the card" className={styles.input} />
          <Input placeholder="Card Number" className={styles.input} />
          <div className={styles.row}>
            <Input placeholder="Exp. Date" className={styles.input} />
            <Input placeholder="CVV" className={styles.input} />
          </div>
        </div>
      </Form>
    </div>
  );
}
