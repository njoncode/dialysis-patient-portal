/*
 *
 * VerifyEmail reducer
 *
 */
import produce from 'immer';
import verifyEmailConstants from './constants';

export const initialState = {
  token: null,
  isVerifyEmailLoading: true,
  isVerifyEmailSuccess: false,
  isverifyEmailFailure: '',
  verifyEmailFailureMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const verifyEmailReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case verifyEmailConstants.VERIFY_EMAIL_REQUEST:
        return {
          ...state,
          token: action.payload,
        };
      case verifyEmailConstants.VERIFY_EMAIL_SUCCESS:
        return {
          ...state,
          isVerifyEmailLoading: false,
          isVerifyEmailSuccess: true,
          verifyEmailFailureMessage: '',
        };
      case verifyEmailConstants.VERIFY_EMAIL_FAILURE:
        return {
          ...state,
          isVerifyEmailLoading: false,
          isVerifyEmailSuccess: false,
          isverifyEmailFailure: true,
          verifyEmailFailureMessage: action.payload,
        };
      case verifyEmailConstants.CLEAR_VERIFY_EMAIL_SUCCESS_FAILURE:
        return {
          ...state,
          isVerifyEmailSuccess: false,
          isverifyEmailFailure: false,
        };
      default:
        return state;
    }
  });

export default verifyEmailReducer;
