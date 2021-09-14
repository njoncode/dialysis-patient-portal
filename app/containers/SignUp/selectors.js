// import { createSelector } from 'reselect';
// import { initialState } from './reducer';

// /**
//  * Direct selector to the signUp state domain
//  */

// const selectSignUpDomain = state => state.signUp || initialState;

// /**
//  * Other specific selectors
//  */

// /**
//  * Default selector used by SignUp
//  */

// const makeSelectSignUp = () =>
//   createSelector(
//     selectSignUpDomain,
//     substate => substate,
//   );

// export default makeSelectSignUp;
// export { selectSignUpDomain };

import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectSignUp = state => state.signUp || initialState;

const makeSelectSignUp = createSelector(
  selectSignUp,
  substate => substate,
);

const makeSelectUser = createSelector(
  selectSignUp,
  substate => substate.user,
);

const makeSelectName = createSelector(
  selectSignUp,
  substate => substate.user.name,
);

const makeSelectEmail = createSelector(
  selectSignUp,
  substate => substate.user.email,
);

const makeSelectPassword = createSelector(
  selectSignUp,
  substate => substate.user.password,
);

const makeSelectConfirmPassword = createSelector(
  selectSignUp,
  substate => substate.user.confirmPassword,
);

const makeSelectIsSignUpLoading = createSelector(
  selectSignUp,
  substate => substate.isSignUpLoading,
);

const makeSelectIsSignUpSuccess = createSelector(
  selectSignUp,
  substate => substate.isSignUpSuccess,
);

const makeSelectSignUpFailureMessage = createSelector(
  selectSignUp,
  substate => substate.signUpFailureMessage,
);

export {
  selectSignUp,
  makeSelectUser,
  makeSelectSignUp,
  makeSelectName,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectConfirmPassword,
  makeSelectIsSignUpLoading,
  makeSelectIsSignUpSuccess,
  makeSelectSignUpFailureMessage,
};
