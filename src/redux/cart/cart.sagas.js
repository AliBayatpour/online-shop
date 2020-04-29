import { takeLatest, put, all, call } from "redux-saga/effects";
import userActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearcCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearcCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
