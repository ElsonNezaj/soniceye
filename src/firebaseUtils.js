import { onValue, ref, set } from "firebase/database";
import { auth, db } from "./firebase";
import { store } from "./redux/store";
import { setCartItems } from "./redux/cartSlice/cartSlice";
import {
  setLoginDataFromDatabase,
  setUpdatedUserDataFromDatabase,
} from "./redux/authSlice/authslice";
import { updateEmail } from "firebase/auth";

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
    yield onValue(ref(db, `/users/${uid}`), async (snapshot) => {
      const data = await snapshot.val();
      if (data) {
        console.log(data);
        store.dispatch(setLoginDataFromDatabase(data));
        window.location.href = "/";
      }
    });
  } catch (err) {
    console.log(err);
  }
}

export async function updateUserDB(payload) {
  const { id, data } = payload;
  await set(ref(db, `/users/${id}`), data);
  onValue(ref(db, `users/${id}`), async (snapshot) => {
    const data = await snapshot.val();
    if (data) {
      store.dispatch(setUpdatedUserDataFromDatabase(data));
    }
  });
}

export function getUserOrders(uid, setOrders) {
  onValue(ref(db, `/orders/${uid}`), async (snapshot) => {
    const data = await snapshot.val();
    setOrders(data);
  });
}

export async function changeAuthEmail(email) {
  const newEmail = await updateEmail(auth.currentUser, email);
  console.log(newEmail);
}
