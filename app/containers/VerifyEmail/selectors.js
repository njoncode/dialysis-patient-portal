import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the verifyEmail state domain
 */

const selectVerifyEmailDomain = state => state.verifyEmail || initialState;

const makeSelectVerifyEmail = createSelector(
  selectVerifyEmailDomain,
  substate => substate,
);

const makeSelectVerifyEmailToken = createSelector(
  selectVerifyEmailDomain,
  substate => substate.token,
);

const makeSelectIsVerifyEmailLoading = createSelector(
  selectVerifyEmailDomain,
  substate => substate.isVerifyEmailLoading,
);

const makeSelectIsVerifyEmailSuccess = createSelector(
  selectVerifyEmailDomain,
  substate => substate.isVerifyEmailSuccess,
);

const makeSelectVerifyEmailFailureMessage = createSelector(
  selectVerifyEmailDomain,
  substate => substate.verifyEmailFailureMessage,
);

export {
  selectVerifyEmailDomain,
  makeSelectVerifyEmail,
  makeSelectVerifyEmailToken,
  makeSelectIsVerifyEmailLoading,
  makeSelectIsVerifyEmailSuccess,
  makeSelectVerifyEmailFailureMessage,
};
