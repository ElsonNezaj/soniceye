/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";
import Items from "../Items";
import SubmitForm from "../SubmitForm";

export default function Checkout(match) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    dispatch(toggleAppHeader(true));

    return () => {
      dispatch(toggleAppHeader(false));
    };
  }, []);

  useEffect(() => {
    if (cartItems.length === 0) {
      window.location.href = "/home";
    }
  }, [cartItems]);

  return (
    <div className={styles.checkoutContainer}>
      <div className={styles.formContainer}>
        <SubmitForm handleChange={handleChange} />
      </div>
      <div className={styles.itemsContainer}>
        <Items personalData={data} />
      </div>
    </div>
  );
}
