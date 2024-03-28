import styles from "./styles.module.scss";
import { Form, Input, Typography } from "antd";
import InfoIcon from "@mui/icons-material/Info";

export default function SubmitForm({
  handleChange,
  handlePaymentChange,
  data,
  paymentData,
}) {
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
            value={data.fullName}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="E-mail"
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Phone Number"
            name="phoneNumber"
            value={data.phoneNumber}
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
            value={data.address}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="City"
            name="city"
            value={data.city}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <div className={styles.row}>
            <Input
              placeholder="Country"
              name="country"
              value={data.country}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className={styles.input}
            />
            <Input
              placeholder="Zip Code"
              name="zipCode"
              value={data.zipCode}
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
          <Input
            placeholder="Name on the card"
            name="nameOnCard"
            value={paymentData.nameOnCard}
            onChange={(e) => handlePaymentChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <Input
            placeholder="Card Number"
            name="number"
            value={paymentData.number}
            onChange={(e) => handlePaymentChange(e.target.name, e.target.value)}
            className={styles.input}
          />
          <div className={styles.row}>
            <Input
              placeholder="Exp. Date"
              name="date"
              value={paymentData.date}
              onChange={(e) =>
                handlePaymentChange(e.target.name, e.target.value)
              }
              className={styles.input}
            />
            <Input
              placeholder="CVV"
              name="security"
              value={paymentData.security}
              onChange={(e) =>
                handlePaymentChange(e.target.name, e.target.value)
              }
              className={styles.input}
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
