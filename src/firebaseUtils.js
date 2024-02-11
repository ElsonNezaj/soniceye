import { onValue, ref } from "firebase/database";
import { db } from "./firebase";
import { store } from "./redux/store";
import { setCartItems } from "./redux/cartSlice/cartSlice";

export const getUserCartItems = async (uid) => {
  if (uid) {
    onValue(ref(db, `/cartItems/${uid}`), async (snapshot) => {
      const data = await snapshot.val();
      if (data) {
        store.dispatch(setCartItems(data));
      } else {
        store.dispatch(setCartItems([]));
      }
    });
  }
};
