import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Typography, Button } from "antd";
import { updateItemQuantity } from "../../../redux/cartSlice/cartSlice";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";

export default function CartItems() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  return (
    <div className={styles.cartItemsContainer}>
      <Typography className={styles.title}>Your Cart</Typography>
      <div className={styles.itemsContainer}>
        {cartItems.length > 0 &&
          cartItems.map((item) => {
            return (
              <div className={styles.singleItem}>
                <Typography className={styles.itemName}>
                  {item.name} <span>#{item.productCode}</span>
                </Typography>
                <Typography className={styles.description}>
                  {item.description}
                </Typography>
                <div className={styles.quantityContainer}>
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
                  <Typography className={styles.quantityLabel}>
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
                <Typography className={styles.totalPrice}>
                  {item.price * item.quantity} &euro;
                </Typography>
              </div>
            );
          })}
      </div>
      <div className={styles.checkoutContainer}>
        <Link to="/cart_review">
          <Button type="primary" className={styles.proceedButton}>
            Proceed To Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
}
