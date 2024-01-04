import { all, call } from "redux-saga/effects";
import { authSagas } from "./authSlice/authSaga";

export function* rootSagas() {
  yield all([call(authSagas)]);
}
