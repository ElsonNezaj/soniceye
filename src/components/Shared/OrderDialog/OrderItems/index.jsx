import styles from "./styles.module.scss";
import { Typography } from "antd";

export default function OrderItems({ items }) {
  console.log(items);
  return (
    <div className={styles.orderItemsContainer}>
      {items.map((item) => (
        <div className={styles.singleItem}>
          <Typography className={styles.itemName}>
            Product Name : <span>{item.name}</span>
          </Typography>
          <Typography className={styles.itemCode}>
            Product Code : #<span>{item.productCode}</span>
          </Typography>
          <div className={styles.quantityPriceContainer}>
            <Typography className={styles.itemQuantity}>
              Qnt. <span>{item.quantity}</span>
            </Typography>
            <Typography className={styles.itemPrice}>
              Price/unit : <span>{item.price}&euro;</span>
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
