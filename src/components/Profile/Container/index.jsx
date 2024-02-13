import { signOutRequested } from "../../../redux/authSlice/authslice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import InputSide from "../InputSide";
import ProfileSide from "../ProfileSide";
import styles from "./styles.module.scss";

export default function ProfileContainer() {
  const dispatch = useAppDispatch();
  const userAuth = useAppSelector((state) => state.auth.userAuth);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const handleSignOut = () => {
    cartItems.length >= 1
      ? dispatch(signOutRequested({ uid: userAuth?.uid, items: cartItems }))
      : dispatch(signOutRequested({ state: "no-update" }));
    window.location.href = "/";
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.leftSide}>
        <ProfileSide />
      </div>
      <div className={styles.rightSide}>
        <InputSide handleSignOut={handleSignOut()} />
      </div>
    </div>
  );
}
