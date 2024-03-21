import { useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function Items() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.itemsContainer}>
      <Typography className={styles.title}>Order Summary</Typography>
      <div className={styles.items}>
        {cartItems.map((item) => (
          <div className={styles.singleItem}>
            <div className={styles.imageContainer} />
            <div className={styles.item}>
              <div className={styles.firstRow}>
                <Typography className={styles.itemName}>
                  {item.name}{" "}
                  <span className={styles.quantity}>x{item.quantity}</span>
                </Typography>
                <Typography className={styles.price}>
                  {item.price}&euro;
                </Typography>
              </div>
              <div className={styles.firstRow}>
                <Typography className={styles.label}>Pick a color :</Typography>
                <div className={styles.colors}>
                  {item.colors.map((color) => (
                    <div
                      style={{ background: color }}
                      className={styles.singleColor}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.firstRow}>
                <div />
                <Typography className={styles.removeButton}>Remove</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
