import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the signIn state domain
 */

const selectSignInDomain = state => state.signIn || initialState;

const makeSelectSignIn = createSelector(
  selectSignInDomain,
  substate => substate,
);

/**
 * Other specific selectors
 */

const makeSelectSignInUser = createSelector(
  selectSignInDomain,
  substate => substate.user,
);

const makeSelectSignInUserInfo = createSelector(
  selectSignInDomain,
  substate => substate.userInfo,
);

const makeSelectEmail = createSelector(
  selectSignInDomain,
  substate => substate.user.email,
);

const makeSelectPassword = createSelector(
  selectSignInDomain,
  substate => substate.user.password,
);

const makeSelectIsSignInLoading = createSelector(
  selectSignInDomain,
  substate => substate.isSignInLoading,
);

const makeSelectIsSignInSuccess = createSelector(
  selectSignInDomain,
  substate => substate.isSignInSuccess,
);

const makeSelectSignInFailureMessage = createSelector(
  selectSignInDomain,
  substate => substate.signInFailureMessage,
);

export {
  selectSignInDomain,
  makeSelectSignIn,
  makeSelectSignInUser,
  makeSelectSignInUserInfo,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectIsSignInLoading,
  makeSelectIsSignInSuccess,
  makeSelectSignInFailureMessage,
};
