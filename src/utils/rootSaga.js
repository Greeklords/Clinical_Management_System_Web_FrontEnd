import { all, takeEvery } from 'redux-saga/effects';
import * as authActionTypes from '../components/auth/redux/authActionTypes';

import { loginUser, registerUser } from '../components/auth/redux/authSaga';

// combining all the saga file together
export default function* root() {
  yield all([
    // Home page
    takeEvery(authActionTypes.LOGIN, loginUser),
    takeEvery(authActionTypes.REGISTER, registerUser),
  ]);
}
