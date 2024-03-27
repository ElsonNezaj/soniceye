/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../../redux/cartSlice/cartSlice";

import { onValue, ref, set } from "firebase/database";
import { db } from "../../../firebase";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { v4 } from "uuid";

export default function Items({ personalData }) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const userId = useAppSelector((state) => state.auth.authUser?.uid);
  const [total, setTotal] = useState(0);

  const uuid = v4();

  const findTotal = () => {
    let total = 0;
    cartItems.forEach((element) => {
      const elementTotal = element.price * element.quantity;
      total = total + elementTotal;
      return total;
    });
    return total;
  };

  const handleItemUpdate = (name, status) => {
    dispatch(updateItemQuantity({ name: name, manual: status }));
  };

  const handleItemRemove = (name) => {
    dispatch(removeItemFromCart(name));
  };

  const isPersonalDataEmpty = () => {
    const keys = Object.keys(personalData);
    const objectHasEmpty = keys.find((el) => personalData[el].length === 0);
    return Boolean(objectHasEmpty);
  };

  const orderToDB = () => {
    // dispatch(toggleAppHeader(true));
    if (isPersonalDataEmpty()) {
      return;
    } else {
      onValue(ref(db, `/orders/${userId}`), (snapshot) => {
        const data = snapshot.val();
        set(ref(db, `orders/${userId}`), {
          ...data,
          [uuid]: {
            total,
            cartItems,
            personalData,
          },
        });
      });
    }
  };

  useEffect(() => {
    setTotal(findTotal());
  }, [cartItems]);

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
                <div className={styles.quantityContainer}>
                  <div
                    onClick={() => handleItemUpdate(item.name, "decrease")}
                    className={styles.input}
                  >
                    <KeyboardArrowLeftIcon />
                  </div>
                  <Typography className={styles.quantity}>
                    {item.quantity}
                  </Typography>
                  <div
                    onClick={() => handleItemUpdate(item.name, "increase")}
                    className={styles.input}
                  >
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
                <Typography
                  onClick={() => handleItemRemove(item.name)}
                  className={styles.removeButton}
                >
                  Remove
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.totalContainer}>
        <div className={styles.firstRow}>
          <Typography className={styles.subTotal}>Subtotal : </Typography>
          <Typography className={styles.total}>{total}.00 &euro;</Typography>
        </div>
        <div className={styles.firstRow}>
          <Typography className={styles.subTotal}>Delivery :</Typography>
          <Typography className={styles.total}>0.00 &euro;</Typography>
        </div>
        <div className={styles.firstRow}>
          <Typography className={styles.subTotal}>Total : </Typography>
          <Typography className={styles.total}>{total}.00 &euro;</Typography>
        </div>

        <div className={`${styles.firstRow} ${styles.lastRow}`}>
          <div />
          <Button
            type="primary"
            onClick={orderToDB}
            className={styles.completeButton}
          >
            Complete Order
          </Button>
        </div>
      </div>
    </div>
  );
}
