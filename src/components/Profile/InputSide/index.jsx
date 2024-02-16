import CartItems from "../CartItems";
import styles from "./styles.module.scss";

export default function InputSide() {
  return (
    <div className={styles.inputsContainer}>
      <div className={styles.cartContainer}>
        <CartItems />
      </div>
      <div className={styles.cartContainer}>ACCOUNT ORDERS</div>
    </div>
  );
}
