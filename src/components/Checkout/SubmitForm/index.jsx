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
      <Form className={styles.form}>
        <div className={styles.section}>
          <Typography>Personal Details</Typography>
          <Input placeholder="Full Name" className={styles.input} />
          <Input placeholder="E-mail" className={styles.input} />
          <Input placeholder="Phone Number" className={styles.input} />
        </div>
        <div className={styles.section}>
          <Typography>Address Information</Typography>
          <Input placeholder="Address" className={styles.input} />
          <Input placeholder="City" className={styles.input} />
          <div className={styles.row}>
            <Input placeholder="Country" className={styles.input} />
            <Input placeholder="Zip Code" className={styles.input} />
          </div>
        </div>
        <div className={styles.section}>
          <Typography>Payment Details</Typography>
          <Typography>(Currently we only support payments by card)</Typography>
          <Input placeholder="Name on the card" className={styles.input} />
          <Input placeholder="Card Number" className={styles.input} />
          <div className={styles.row}>
            <Input placeholder="Exp. Date" className={styles.input} />
            <Input placeholder="CVV" className={styles.input} />
          </div>
        </div>
      </Form>
      <Typography className={styles.info}>
        <InfoIcon /> For security reasons, we require you to re-enter your
        personal and account details, even if your details match account details
      </Typography>
    </div>
  );
}
