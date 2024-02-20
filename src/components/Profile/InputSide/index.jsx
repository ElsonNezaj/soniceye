import CartItems from "../CartItems";
import EditInputs from "../EditInputs";
import Orders from "../Orders";
import styles from "./styles.module.scss";

export default function InputSide({ rightSideState, setRightSideState }) {
  return (
    <div className={styles.inputsContainer}>
      {rightSideState === "cart" ? (
        <>
          <div className={styles.cartContainer}>
            <CartItems />
          </div>
          <div className={styles.cartContainer}>
            <Orders />
          </div>
        </>
      ) : (
        <EditInputs setRightSideState={setRightSideState} />
      )}
    </div>
  );
}
