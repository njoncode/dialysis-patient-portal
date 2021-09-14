/**
 *
 * SignInAndSignUp
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import '../../styles/containers/signInAndSignUp.scss';

import SignUp from '../SignUp';
import SignIn from '../SignIn';

export function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

SignInAndSignUp.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(SignInAndSignUp);
