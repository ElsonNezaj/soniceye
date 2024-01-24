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

export function* getAuth({ payload }) {
  try {
    const { email, password, displayName } = payload;
    const user = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    const data = user.user;
    yield call(updateProfile, data, { displayName: displayName });
    yield put(getAuthSucceded(data));
  } catch (err) {
    yield put(getAuthFailed());
  }
}

export function* getLogin({ payload }) {
  try {
    const { email, password } = payload;
    const user = yield call(signInWithEmailAndPassword, auth, email, password);
    console.log("User Data:", user);
    const data = user.user;
    yield put(getLoginSucceded(data));
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
