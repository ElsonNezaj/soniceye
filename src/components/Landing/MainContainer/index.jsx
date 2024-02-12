/* eslint-disable react-hooks/exhaustive-deps */
import ModelView from "../3dGlass";
import styles from "./styles.module.scss";
import LandingCarousel from "../LandingCarousel";
import { useAppDispatch } from "../../../redux/hooks";
import { useEffect } from "react";
import { getLoginFailed } from "../../../redux/authSlice/authslice";

export default function Landing() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLoginFailed());
  }, []);

  return (
    <div className={styles.landingContainer}>
      <div className={styles.modelViewContainer}>
        <ModelView />
      </div>
      <div className={styles.landingInfo}>
        <LandingCarousel />
      </div>
    </div>
  );
}
