/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Typography, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DeleteForever from "@mui/icons-material/DeleteForever";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../redux/cartSlice/cartSlice";
import { Link } from "react-router-dom";
import { onValue, ref, set } from "firebase/database";
import { db } from "../../firebase";
import { v4 } from "uuid";

export default function CartReview() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const userId = useAppSelector((state) => state.auth.authUser?.uid);

  const [total, setTotal] = useState(0);

  const findTotal = () => {
    let total = 0;
    cartItems.forEach((element) => {
      const elementTotal = element.price * element.quantity;
      total = total + elementTotal;
      return total;
    });
    return total;
  };

  const orderToDB = () => {
    const uuid = v4();
    onValue(ref(db, `/orders/${userId}`), (snapshot) => {
      const data = snapshot.val();
      set(ref(db, `orders/${userId}`), {
        ...data,
        [uuid]: {
          total,
          cartItems,
        },
      });
    });
  };

  useEffect(() => {
    setTotal(findTotal());
  }, [cartItems]);

  return (
    <div className={styles.cartReviewContainer}>
      <div className={styles.titleContainer}>
        <Typography className={styles.titleLabel}>Your Cart</Typography>
        <Typography className={styles.subTitleLabel}>
          Before checking out, make sure you have everything you need.
        </Typography>
      </div>
      {cartItems.length > 0 ? (
        <div className={styles.itemsContainer}>
          <Typography className={styles.label}>Your items</Typography>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <div key={item.productCode} className={styles.singleItem}>
                <div className={styles.modelViewer}></div>
                <div className={styles.itemLabel}>
                  <Typography className={styles.itemName}>
                    {item.name}
                  </Typography>
                  <Typography className={styles.itemCode}>
                    #{item.productCode}
                  </Typography>
                </div>
                <div className={styles.colorsContainer}>
                  <Typography className={styles.label}>
                    Available Colors :
                  </Typography>
                  <div className={styles.colors}>
                    {item.colors.map((color) => (
                      <div
                        key={color}
                        style={{ background: color }}
                        className={styles.colorBox}
                      />
                    ))}
                  </div>
                </div>
                <div className={styles.quantityContainer}>
                  <Typography className={styles.label}>Quantity :</Typography>
                  <div className={styles.actions}>
                    <div
                      onClick={() => {
                        dispatch(
                          updateItemQuantity({
                            name: item.name,
                            manual: "decrease",
                          })
                        );
                      }}
                      className={styles.quantityArrow}
                    >
                      <ChevronLeftIcon />
                    </div>
                    <Typography className={styles.quantity}>
                      {item.quantity}
                    </Typography>
                    <div
                      onClick={() => {
                        dispatch(
                          updateItemQuantity({
                            name: item.name,
                            manual: "increase",
                          })
                        );
                      }}
                      className={styles.quantityArrow}
                    >
                      <ChevronRightIcon />
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => dispatch(removeItemFromCart(item.name))}
                  className={styles.delete}
                >
                  <DeleteForever />
                  <Typography className={styles.label}>Remove</Typography>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.totalContainer}>
            <Link to="/products" className={styles.backButton}>
              <Typography className={styles.backLabel}>
                Back to Products
              </Typography>
            </Link>
            <div className={styles.total}>
              <Typography className={styles.totalLabel}>
                Total : {total}&euro;
              </Typography>
              {userId && (
                <Button
                  onClick={() => orderToDB()}
                  className={styles.proceedButton}
                >
                  Proceed to Checkout
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <>
          <Typography className={styles.noItems}>
            You have no items in your cart. Go back to add some!
          </Typography>
          <Link to="/products" className={styles.backButton}>
            <Typography className={styles.backLabel}>
              Back to Products
            </Typography>
          </Link>
        </>
      )}
    </div>
  );
}
