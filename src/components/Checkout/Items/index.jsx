import { useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function Items() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.itemsContainer}>
      <Typography className={styles.title}>Your Items</Typography>
      <div className={styles.items}>
        {cartItems.map((item) => (
          <div className={styles.singleItem}>
            <div className={styles.firstRow}>
              <div className={styles.imageContainer} />
              <div className={styles.nameContainer}>
                <Typography className={styles.name}>{item.name}</Typography>
                <Typography className={styles.code}>
                  #{item.productCode}
                </Typography>
              </div>
            </div>
            <div className={styles.secondRow}>
              <div className={styles.colorsContainer}>
                {item.colors.map((color) => (
                  <div
                    style={{ background: color }}
                    className={styles.singleColor}
                  />
                ))}
                <div className={styles.quantityContainer}>
                  <Typography>Qnt. {item.quantity}</Typography>
                </div>
                <div className={styles.priceContainer}>
                  <Typography>{item.price}&euro;</Typography>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
