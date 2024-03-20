import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";
import Items from "../Items";

export default function Checkout(match) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(toggleAppHeader(true));

    return () => {
      dispatch(toggleAppHeader(false));
    };
  }, []);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.formContainer}>CHECKOUT CONTAINER</div>
      <div className={styles.itemsContainer}>
        <Items />
      </div>
    </div>
  );
}
