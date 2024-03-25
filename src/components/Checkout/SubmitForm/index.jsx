import styles from "./styles.module.scss";
import { Form, Input, Typography } from "antd";
import InfoIcon from "@mui/icons-material/Info";

export default function SubmitForm() {
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
          <Input placeholder="Full Name" className={styles.input} />
          <Input placeholder="E-mail" className={styles.input} />
          <Input placeholder="Phone Number" className={styles.input} />
        </div>
        <div className={styles.section}>
          <Typography className={styles.sectionTitle}>
            Address Information
          </Typography>
          <Input placeholder="Address" className={styles.input} />
          <Input placeholder="City" className={styles.input} />
          <div className={styles.row}>
            <Input placeholder="Country" className={styles.input} />
            <Input placeholder="Zip Code" className={styles.input} />
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
