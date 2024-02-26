import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";
import { useHistory } from "react-router-dom";

export default function Checkout(match) {
  return (
    <div className={styles.checkoutContainer}> CHECKOUT CONTAINER !!!</div>
  );
}
