import CartItems from "../CartItems";
import Orders from "../Orders";
import styles from "./styles.module.scss";

export default function InputSide() {
  return (
    <div className={styles.inputsContainer}>
      <div className={styles.cartContainer}>
        <CartItems />
      </div>
      <div className={styles.cartContainer}>
        <Orders />
      </div>
    </div>
  );
}
