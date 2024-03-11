import styles from "./styles.module.scss";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect, useState } from "react";
import { toggleAppHeader } from "../../../redux/appSlice/appSlice";
import { Button, Steps, Typography } from "antd";

const steps = [
  {
    title: <Typography className={styles.title}>Personal Details</Typography>,
    icon: (
      <div className={styles.icon}>
        <Typography className={styles.label}>1</Typography>
      </div>
    ),
    content: "Personal Info Form",
  },
  {
    title: <Typography className={styles.title}>Address Info</Typography>,
    icon: (
      <div className={styles.icon}>
        <Typography className={styles.label}>2</Typography>
      </div>
    ),
    address: "Address Info Form",
  },
  {
    title: <Typography className={styles.title}>Payment Info</Typography>,
    icon: (
      <div className={styles.icon}>
        <Typography className={styles.label}>3</Typography>
      </div>
    ),
    content: "Payment Info Form",
  },
];

export default function Checkout(match) {
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(0);

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
      <div style={{ height: "80%" }}></div>
      <div className={styles.buttonContainer}>
        {current < items.length - 1 && <Button onClick={next}>Next</Button>}
        {current >= items.length - 1 && <Button>Done</Button>}
        {current > 0 && <Button onClick={prev}>Previous</Button>}
      </div>
    </div>
  );
}
