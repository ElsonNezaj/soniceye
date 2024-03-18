import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";
import { Button, Steps, Typography } from "antd";
import { Link } from "react-router-dom";

import PersonalInfo from "../PersonalInfo";

const steps = [
  {
    title: <Typography className={styles.title}>Personal Details</Typography>,
    icon: (
      <div className={styles.icon}>
        <Typography className={styles.label}>1</Typography>
      </div>
    ),
  },

  {
    title: <Typography className={styles.title}>Payment Info</Typography>,
    icon: (
      <div className={styles.icon}>
        <Typography className={styles.label}>3</Typography>
      </div>
    ),
  },
];

export default function Checkout(match) {
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector((state) => state.auth.authUser);
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({
    any: undefined,
    personalDetails: {
      ...userAuth,
      displayName: userAuth.displayName,
      email: userAuth.email,
      phoneNumber: userAuth.phoneNumber,
      address: userAuth.address,
      city: userAuth.city,
      country: userAuth.country,
      zipCode: userAuth.zipCode,
    },
    paymentDetails: undefined,
  });

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon: item.icon,
  }));

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const updateData = (name, value) => {
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    dispatch(toggleAppHeader(true));

    return () => {
      dispatch(toggleAppHeader(false));
    };
  }, []);

  return (
    <div className={styles.checkoutContainer}>
      <Steps
        current={current}
        items={items}
        size="default"
        type="navigation"
        className={styles.steps}
      />
      <div className={styles.contentContainer}>
        {current === 0 ? (
          <PersonalInfo updateData={updateData} />
        ) : (
          "Hello World"
        )}
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.leftSide}>
          <Link to="/cart_review">
            <Button className={styles.backToReview}>Back to Cart Review</Button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          {current > 0 && <Button onClick={prev}>Previous</Button>}
          {current >= items.length - 1 && <Button>Done</Button>}
          {current < items.length - 1 && <Button onClick={next}>Next</Button>}
        </div>
      </div>
    </div>
  );
}
