/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Result, Typography, Button } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { clearCartData } from "../../../redux/cartSlice/cartSlice";
import { toggleResultContainer } from "../../../redux/appSlice/appSlice";

export default function ResultContainer({ uuid }) {
  const dispatch = useAppDispatch();

  const handleReturnClick = () => {
    dispatch(clearCartData());
    dispatch(toggleResultContainer(false));
  };

  return (
    <div className={styles.resultContainer}>
      <Result
        status="success"
        title={
          <Typography className={styles.title}>
            Order <span>{uuid.split("-")[0]}</span> Placed Successfully!
          </Typography>
        }
        subTitle={
          <Typography className={styles.subTitle}>
            You will be updated about your order status via e-mail
          </Typography>
        }
        extra={[
          <Link to="/home">
            <Button
              type="primary"
              onClick={() => handleReturnClick()}
              className={styles.returnHomeButton}
            >
              Return to Home Page
            </Button>
          </Link>,
          <Link to="/products">
            <Button
              onClick={() => handleReturnClick()}
              className={styles.returnProductsButton}
            >
              Return to Products Page
            </Button>
          </Link>,
        ]}
      />
    </div>
  );
}
