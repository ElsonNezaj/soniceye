import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase";
import { store } from "./redux/store";
import { setCartItems } from "./redux/cartSlice/cartSlice";
import {
  setLoginDataFromDatabase,
  setUpdatedUserDataFromDatabase,
  toggleConfirmPassword,
  toggleConfirmSignOut,
} from "./redux/authSlice/authslice";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
} from "firebase/auth";

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
    // const data = await orders.sort((a, b) => a > b);
    setOrders(data);
  });
}

export async function changeAuthEmail(
  email,
  password,
  currentUser,
  newEmail,
  newData
) {
  const credential = EmailAuthProvider.credential(email, password);
  await reauthenticateWithCredential(currentUser, credential).then(() => {
    updateEmail(currentUser, newEmail).then(() => {
      updateUserDB({ id: currentUser.uid, data: newData });
      store.dispatch(toggleConfirmSignOut(true));
      store.dispatch(toggleConfirmPassword(false));
    });
  });
}
