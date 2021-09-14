/*
 *
 * VerifyEmail actions
 *
 */

import verifyEmailConstants from './constants';

export function verifyEmailRequestAction(token) {
  return {
    type: verifyEmailConstants.VERIFY_EMAIL_REQUEST,
    payload: token,
  };
}

export function verifyEmailSuccessAction() {
  return {
    type: verifyEmailConstants.VERIFY_EMAIL_SUCCESS,
  };
}

export function verifyEmailFailureAction(payload) {
  return {
    type: verifyEmailConstants.VERIFY_EMAIL_FAILURE,
    payload,
  };
}

export function clearVerifyEmailSuccessFailureAction() {
  return {
    type: verifyEmailConstants.CLEAR_VERIFY_EMAIL_SUCCESS_FAILURE,
  };
}
