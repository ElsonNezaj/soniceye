import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  getAuthFailed,
  getAuthRequested,
  getAuthSucceded,
  getLoginRequested,
  getLoginSucceded,
} from "./authslice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
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
    yield call(updateProfile, user, { displayName: displayName });
    const data = user.user;
    yield put(getAuthSucceded(data));
  } catch (err) {
    console.log(err);
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
    console.log(err);
    yield put(getAuthFailed());
  }
}

export function* onGetAuthRequested() {
  yield takeLatest(getAuthRequested.type, getAuth);
}

export function* onGetLoginRequested() {
  yield takeLatest(getLoginRequested.type, getLogin);
}

export function* authSagas() {
  yield all([call(onGetAuthRequested), call(onGetLoginRequested)]);
}
