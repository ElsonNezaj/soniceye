import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase";
import { store } from "./redux/store";
import { setCartItems } from "./redux/cartSlice/cartSlice";
import { setLoginDataFromDatabase } from "./redux/authSlice/authslice";

export function* getUserCartItems(uid) {
  if (uid) {
    yield onValue(ref(db, `/cartItems/${uid}`), async (snapshot) => {
      const data = await snapshot.val();
      if (data) {
        store.dispatch(setCartItems(data));
      } else {
        store.dispatch(setCartItems([]));
      }
    });
  }
}

export function* addUserToDatabase(uid, authUser) {
  try {
    yield set(ref(db, `/users/${uid}`), authUser);
  } catch (err) {
    console.log(err);
  }
}

export function* getUserFromDatabase(uid) {
  try {
    if (uid) {
      yield onValue(ref(db, `/users/${uid}`), async (snapshot) => {
        const data = await snapshot.val();
        if (data) {
          store.dispatch(setLoginDataFromDatabase(data));
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}
