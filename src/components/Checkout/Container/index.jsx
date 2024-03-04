import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";

export default function Checkout(match) {
  const dispatch = useAppDispatch();
  const orderId = match.match.params.orderID;

  console.log(orderId);

  useEffect(() => {
    dispatch(toggleAppHeader(true));

    return () => {
      dispatch(toggleAppHeader(false));
    };
  }, []);

  return (
    <div className={styles.checkoutContainer}> CHECKOUT CONTAINER !!!</div>
  );
}
