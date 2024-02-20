import styles from "./styles.module.scss";
import { useAppSelector } from "../../../redux/hooks";
import { Typography, Button, Form, Input } from "antd";

export default function EditInputs() {
  const userAuth = useAppSelector((state) => state.auth.authUser);
  return (
    <div className={styles.editInputsContainer}>
      <Typography className={styles.title}>Edit your profile</Typography>
      <Typography className={styles.subTitle}>
        Modify your personal data
      </Typography>
      <Form className={styles.editForm}>
        <Input
          type="text"
          placeholder="Display Name"
          className={styles.input}
        />
        <Input type="text" placeholder="E-mail" className={styles.input} />
        <Input type="text" placeholder="Address" className={styles.input} />
        <Input type="text" placeholder="City" className={styles.input} />
        <Input type="text" placeholder="Country" className={styles.input} />
        <Input type="text" placeholder="Zip Code" className={styles.input} />
      </Form>
    </div>
  );
}
