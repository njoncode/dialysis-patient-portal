/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';
import signUpConstants from './constants';

export const initialState = {
  user: {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  },
  isSignUpLoading: false,
  isSignUpSuccess: false,
  signUpFailureMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case signUpConstants.SIGN_UP:
        return {
          ...state,
          user: {
            ...state.user,
            ...action.payload,
          },
          isSignUpLoading: true,
          isSignUpSuccess: false,
          signUpFailureMessage: '',
        };

      case signUpConstants.SIGN_UP_SUCCESS:
        return {
          ...state,
          isSignUpLoading: false,
          isSignUpSuccess: true,
          signUpFailureMessage: '',
        };
      case signUpConstants.SIGN_UP_FAILURE:
        return {
          ...state,
          ...action.payload,
          isSignUpLoading: false,
          isSignUpSuccess: false,
          signUpFailureMessage: action.payload,
        };
      case signUpConstants.CLEAR_SIGN_UP_SUCCESS_FAILURE:
        return {
          ...state,
          isSignUpSuccess: false,
          signUpFailureMessage: '',
        };
      default:
        return state;
    }
  });

export default signUpReducer;
