import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getAuthFailed,
  getAuthRequested,
  getAuthSucceded,
  getLoginRequested,
  getLoginSucceded,
  signOutFailed,
  signOutRequested,
  signOutSucceded,
} from "./authslice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import {
  addUserToDatabase,
  getUserCartItems,
  getUserFromDatabase,
} from "../../firebaseUtils";

export function* getAuth({ payload }) {
  try {
    const {
      email,
      password,
      displayName,
      age,
      gender,
      phoneNumber,
      country,
      city,
      address,
      zipCode,
    } = payload;
    const user = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    const data = user.user;
    yield call(updateProfile, data, { displayName: displayName });
    const authData = {
      displayName: displayName,
      email: data.email,
      isEmailVerified: data.emailVerified,
      metadata: data.metadata,
      accessToken: data.accessToken,
      uid: data.uid,
      age,
      gender,
      phoneNumber,
      country,
      city,
      address,
      zipCode,
    };
    yield put(getAuthSucceded(authData));
    yield call(addUserToDatabase, authData?.uid, authData);
  } catch (err) {
    yield put(getAuthFailed());
  }
}

export function* getLogin({ payload }) {
  try {
    const { email, password } = payload;
    const user = yield call(signInWithEmailAndPassword, auth, email, password);
    const data = user.user;
    yield call(getUserCartItems, data?.uid);
    const userData = yield call(getUserFromDatabase, data.uid);
    yield console.log("new data", userData);
    yield put(getLoginSucceded(userData));
  } catch (err) {
    yield put(getAuthFailed());
  }
}

export function* signOutUser() {
  try {
    yield call(signOut, auth);
    yield put(signOutSucceded());
  } catch (err) {
    signOutFailed();
  }
}

export function* onGetAuthRequested() {
  yield takeLatest(getAuthRequested.type, getAuth);
}

export function* onGetLoginRequested() {
  yield takeLatest(getLoginRequested.type, getLogin);
}

export function* onSignOutRequested() {
  yield takeLatest(signOutRequested.type, signOutUser);
}

export function* authSagas() {
  yield all([
    call(onGetAuthRequested),
    call(onGetLoginRequested),
    call(onSignOutRequested),
  ]);
}
