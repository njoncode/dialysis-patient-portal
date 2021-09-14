/*
 *
 * SignIn actions
 *
 */

import signInConstants from './constants';

export const signInRequestAction = payload => ({
  type: signInConstants.SIGN_IN_REQUEST,
  payload,
});

export const signInSuccessAction = payload => ({
  type: signInConstants.SIGN_IN_SUCCESS,
  payload,
});

export const signInFailureAction = payload => ({
  type: signInConstants.SIGN_IN_FAILURE,
  payload,
});

export const clearSignInSuccessFailureAction = () => ({
  type: signInConstants.CLEAR_SIGN_IN_SUCCESS_FAILURE,
});
