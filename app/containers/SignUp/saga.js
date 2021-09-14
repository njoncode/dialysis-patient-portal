import { takeLatest, call, put, select } from 'redux-saga/effects';
// import { push } from 'react-router-redux';

// import signUpConstants from './constants';

import api from '../../utils/api';
import signUpConstants from './constants';
import {
  signUpSuccessAction,
  signUpFailureAction,
  clearSignUpSuccessFailureAction,
} from './actions';
import { makeSelectUser } from './selectors';

// Individual exports for testing

function* signUpRequestSaga() {
  try {
    // fetching states from selectors
    const userBody = yield select(makeSelectUser);
    //  call apt api
    const response = yield call(api.auth.signUp, userBody);
    // console.log('signUpRequestSaga: response: ', response);

    if (response.success && response.status === 201) {
      yield put(signUpSuccessAction());
      yield put(clearSignUpSuccessFailureAction());
    } else {
      yield put(signUpFailureAction(response.message));
      yield put(clearSignUpSuccessFailureAction());
    }
  } catch (error) {
    // error while calling api
    console.log('Error Caght: signInRequestSaga: ', error.message);
  }
}

export default function* signUpSaga() {
  yield takeLatest(signUpConstants.SIGN_UP, signUpRequestSaga);
}
