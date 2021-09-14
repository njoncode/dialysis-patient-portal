/*
 *
 * SignUp actions
 *
 */

// import { DEFAULT_ACTION } from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
// }

import signUpConstants from './constants';

export const signUpAction = payload => ({
  type: signUpConstants.SIGN_UP,
  payload,
});

export const signUpSuccessAction = () => ({
  type: signUpConstants.SIGN_UP_SUCCESS,
});

export const signUpFailureAction = payload => ({
  type: signUpConstants.SIGN_UP_FAILURE,
  payload,
});

export const clearSignUpSuccessFailureAction = payload => ({
  type: signUpConstants.CLEAR_SIGN_UP_SUCCESS_FAILURE,
  payload,
});
