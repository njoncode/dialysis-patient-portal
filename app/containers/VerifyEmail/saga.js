import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import api from '../../utils/api';
import verifyEmailConstants from './constants';
import {
  verifyEmailSuccessAction,
  verifyEmailFailureAction,
  clearVerifyEmailSuccessFailureAction,
} from './actions';
import { makeSelectVerifyEmailToken } from './selectors';

// Individual exports for testing

function* verifyEmailRequestSaga() {
  try {
    // fetching states from selectors
    const token = yield select(makeSelectVerifyEmailToken);

    // api call
    const response = yield call(api.auth.verifyEmail, token);
    // console.log('verifyEmailRequestSaga response: ', response);

    if (response.success) {
      yield put(verifyEmailSuccessAction());
      yield put(clearVerifyEmailSuccessFailureAction());
      // yield put(push('/sign-in'));
    } else {
      yield put(verifyEmailFailureAction(response.message));
      yield put(clearVerifyEmailSuccessFailureAction());
    }
  } catch (error) {
    // error while calling api
    console.error('Error Caught: verifyEmailRequestSaga: ', error.message);
  }
}

export default function* verifyEmailSaga() {
  yield takeLatest(
    verifyEmailConstants.VERIFY_EMAIL_REQUEST,
    verifyEmailRequestSaga,
  );
}
