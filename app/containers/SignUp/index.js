/**
 *
 * SignUp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import {
  makeSelectUser,
  makeSelectName,
  makeSelectEmail,
  makeSelectPassword,
  makeSelectConfirmPassword,
  makeSelectIsSignUpLoading,
  makeSelectIsSignUpSuccess,
  makeSelectSignUpFailureMessage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

import {
  signUpAction,
  signUpSuccessAction,
  signUpFailureAction,
} from './actions';

import SignUpForm from '../../components/SignUpForm';

export function SignUp({
  signUpRequestDispatch,
  isSignUpLoading,
  isSignUpSuccess,
  signUpFailureMessage,
}) {
  useInjectReducer({ key: 'signUp', reducer });
  useInjectSaga({ key: 'signUp', saga });

  // initial state form sign-up form
  const signUpInitialState = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const fetchSignUp = (state, action) => {
    if (action.type === 'ON_CHANGE') {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    return {
      ...state,
    };
  };

  const [signUpState, dispatch] = React.useReducer(
    fetchSignUp,
    signUpInitialState,
  );

  const handleOnChange = event => {
    dispatch({
      type: 'ON_CHANGE',
      name: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const userBody = {
      name: signUpState.name,
      email: signUpState.email,
      phoneNumber: signUpState.phoneNumber,
      password: signUpState.password,
    };

    console.log('handleSubmit user: ', userBody);

    signUpRequestDispatch(userBody);
  };

  return (
    <div>
      <SignUpForm
        handleOnChange={handleOnChange}
        handleSubmit={handleSubmit}
        signUpState={signUpState}
        isSignUpLoading={isSignUpLoading}
        isSignUpSuccess={isSignUpSuccess}
        signUpFailureMessage={signUpFailureMessage}
      />
    </div>
  );
}

SignUp.propTypes = {
  signUpRequestDispatch: PropTypes.func.isRequired,
  isSignUpLoading: PropTypes.bool,
  isSignUpSuccess: PropTypes.bool,
  signUpFailureMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser,
  name: makeSelectName,
  email: makeSelectEmail,
  password: makeSelectPassword,
  confirmPassword: makeSelectConfirmPassword,
  isSignUpSuccess: makeSelectIsSignUpSuccess,
  signUpFailureMessage: makeSelectSignUpFailureMessage,
  isSignUpLoading: makeSelectIsSignUpLoading,
});

const mapDispatchToProps = dispatch => ({
  signUpRequestDispatch: data => dispatch(signUpAction(data)),
  signUpSuccessDispatch: () => dispatch(signUpSuccessAction()),
  signUpFailureDispatch: data => dispatch(signUpFailureAction(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignUp);
