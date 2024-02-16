import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Typography } from "antd";
import { useAppSelector } from "../../../redux/hooks";
import { getUserOrders } from "../../../firebaseUtils";

export default function Orders() {
  const uuid = useAppSelector((state) => state.auth.authUser.uid);
  const [orders, setOrders] = useState();
  const ordersToMap = orders && Object.keys(orders);

  useEffect(() => {
    uuid && getUserOrders(uuid, setOrders);
  }, [uuid]);

  return (
    <div className={styles.ordersContainer}>
      <Typography className={styles.ordersTitle}>Your Orders</Typography>
      <div className={styles.itemsContainer}>
        {ordersToMap &&
          ordersToMap.map((key) => {
            console.log(key);
            const singleOrder = orders[key];
            return (
              <div key={key} className={styles.singleOrderContainer}>
                <Typography className={styles.orderCode}>
                  Order Number: <span>#{key.slice(0, 8)}</span>
                </Typography>
                <div className={styles.orderInfo}>
                  <div className={styles.orderItems}>
                    {singleOrder.cartItems.map((cartItem) => (
                      <div
                        key={cartItem.productCode}
                        className={styles.cartItemContainer}
                      >
                        <Typography className={styles.nameLabel}>
                          Name : {cartItem.name}
                        </Typography>
                        <Typography className={styles.codeLabel}>
                          Product Code : #{cartItem.productCode}
                        </Typography>
                        <Typography className={styles.label}>
                          Quantity : {cartItem.quantity}
                        </Typography>
                        <Typography className={styles.label}>
                          Price/unit : {cartItem.price}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  <div className={styles.orderPrice}>
                    <Typography className={styles.orderTotalLabel}>
                      Total : {singleOrder.total} &euro;
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
