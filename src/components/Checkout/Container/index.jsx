/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";
import Items from "../Items";
import SubmitForm from "../SubmitForm";
import ResultContainer from "../../Shared/Result";

import InfoIcon from "@mui/icons-material/Info";
import Typography from "antd/lib/typography";
import Button from "antd/lib/button";
import { Link } from "react-router-dom";

export default function Checkout(match) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const isResultContainer = useAppSelector(
    (state) => state.app.isResultContainer
  );
  const uuid = match.match.params.orderID;

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const [paymentData, setPaymentData] = useState({
    nameOnCard: "",
    number: "",
    date: "",
    security: "",
  });

  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handlePaymentChange = (name, value) => {
    setPaymentData({ ...paymentData, [name]: value });
  };

  useEffect(() => {
    dispatch(toggleAppHeader(true));

    return () => {
      dispatch(toggleAppHeader(false));
    };
  }, []);

  return (
    <div className={styles.checkoutContainer}>
      {isResultContainer ? (
        <ResultContainer uuid={uuid} />
      ) : (
        <>
          {cartItems.length < 1 && (
            <div className={styles.noItemsWatermark}>
              <InfoIcon />
              <Typography className={styles.message}>
                You need to have at least 1 cart item to continue to checkout.
              </Typography>
              <Link to="/products">
                <Button type="primary" className={styles.backButton}>
                  Back to Products
                </Button>
              </Link>
            </div>
          )}
          <div
            className={`${styles.formContainer} ${
              cartItems.length < 1 && styles.blur
            }`}
          >
            <SubmitForm
              handleChange={handleChange}
              handlePaymentChange={handlePaymentChange}
              data={data}
              paymentData={paymentData}
            />
          </div>
          <div
            className={`${styles.itemsContainer} ${
              cartItems.length < 1 && styles.blur
            }`}
          >
            <Items personalData={data} paymentData={paymentData} uuid={uuid} />
          </div>
        </>
      )}
    </div>
  );
}
