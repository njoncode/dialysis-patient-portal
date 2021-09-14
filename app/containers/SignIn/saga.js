/* eslint-disable no-console */
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import api from '../../utils/api';
import signInConstants from './constants';
import {
  signInSuccessAction,
  signInFailureAction,
  clearSignInSuccessFailureAction,
} from './actions';
import { makeSelectSignInUser } from './selectors';

// Individual exports for testing

function* signInRequestSaga() {
  try {
    // fetching states from selectors
    const userBody = yield select(makeSelectSignInUser);
    //  call apt api
    const response = yield call(api.auth.signIn, userBody);
    // console.log('signInRequestSaga: response: ', response);

    if (!!response.success || response.status === 200) {
      yield put(signInSuccessAction(response.data));
      // Storing access token in session storage
      sessionStorage.setItem('signedInUserInfo', JSON.stringify(response.data));

      yield put(clearSignInSuccessFailureAction());
      console.log('signInRequestSaga SUCCESSFULL');
      // Redirecting to home page : SIGN-IN SUCCESSFUL
      // yield put(push('/'));
    } else {
      // console.error('signInRequestSaga: failure', response.message);
      yield put(signInFailureAction(response.message));
      yield put(clearSignInSuccessFailureAction());
    }
  } catch (error) {
    // error while calling api
    console.error('Error Caught: signInRequestSaga: ', error.message);
  }
}

export default function* signInSaga() {
  yield takeLatest(signInConstants.SIGN_IN_REQUEST, signInRequestSaga);
}
