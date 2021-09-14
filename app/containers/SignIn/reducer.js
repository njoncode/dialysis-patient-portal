/*
 *
 * SignIn reducer
 *
 */
import produce from 'immer';
import signInConstants from './constants';

export const initialState = {
  user: {
    email: '',
    password: '',
  },
  userInfo: null,
  isSignInLoading: false,
  isSignInSuccess: false,
  signInFailureMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case signInConstants.SIGN_IN_REQUEST:
        return {
          ...state,
          user: {
            ...state.user,
            ...action.payload,
          },
          isSignInLoading: true,
          isSignInSuccess: false,
          signInFailureMessage: '',
        };
      case signInConstants.SIGN_IN_SUCCESS:
        return {
          ...state,
          userInfo: action.payload,
          isSignInLoading: false,
          isSignInSuccess: true,
          signInFailureMessage: '',
        };
      case signInConstants.SIGN_IN_FAILURE:
        return {
          ...state,
          ...action.payload,
          isSignInLoading: false,
          isSignInSuccess: false,
          signInFailureMessage: action.payload,
        };
      case signInConstants.CLEAR_SIGN_IN_SUCCESS_FAILURE:
        return {
          ...state,
          isSignInSuccess: false,
          signInFailureMessage: '',
        };
      default:
        return state;
    }
  });

export default signInReducer;
