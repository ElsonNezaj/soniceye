import { all, call, put, takeLatest } from "redux-saga/effects";
import { getAuthFailed, getAuthRequested, getAuthSucceded } from "./authslice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export function* getAuth({ payload }) {
  try {
    const { email, password } = payload;
    console.log("Email:", email);
    console.log("Password:", password);
    const user = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    console.log("User Data:", user);
    const data = user.user;
    yield put(getAuthSucceded(data));
  } catch (err) {
    console.log(err);
    yield put(getAuthFailed());
  }
}

export function* onGetAuthRequested() {
  yield takeLatest(getAuthRequested.type, getAuth);
}

export function* authSagas() {
  yield all([call(onGetAuthRequested)]);
}
