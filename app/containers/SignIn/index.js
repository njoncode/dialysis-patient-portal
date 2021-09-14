/**
 *
 * SignIn
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { useHistory } from 'react-router-dom';

import reducer from './reducer';
import saga from './saga';

import {
  signInRequestAction,
  signInSuccessAction,
  signInFailureAction,
  clearSignInSuccessFailureAction,
} from './actions';
import {
  makeSelectIsSignInLoading,
  makeSelectIsSignInSuccess,
  makeSelectSignInFailureMessage,
} from './selectors';

import SignInForm from '../../components/SignInForm';

export function SignIn({
  signInRequestDispatch,
  isSignInLoading,
  isSignInSuccess,
  signInFailureMessage,
}) {
  useInjectReducer({ key: 'signIn', reducer });
  useInjectSaga({ key: 'signIn', saga });

  const history = useHistory();

  React.useEffect(() => {
    if (isSignInSuccess) {
      history.push('/');
    }
  }, [isSignInSuccess]);

  console.log('isSignInSuccess!!!!: ', isSignInSuccess);

  const signInInitialState = {
    email: '',
    password: '',
  };

  const fetchSignIn = (state, action) => {
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

  const [signInState, dispatch] = React.useReducer(
    fetchSignIn,
    signInInitialState,
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

    signInRequestDispatch(signInState);
  };

  return (
    <SignInForm
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      signInState={signInState}
      isSignInLoading={isSignInLoading}
      isSignInSuccess={isSignInSuccess}
      signInFailureMessage={signInFailureMessage}
    />
  );
}

SignIn.propTypes = {
  signInRequestDispatch: PropTypes.func,
  isSignInLoading: PropTypes.bool,
  isSignInSuccess: PropTypes.bool,
  signInFailureMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isSignInLoading: makeSelectIsSignInLoading,
  isSignInSuccess: makeSelectIsSignInSuccess,
  signInFailureMessage: makeSelectSignInFailureMessage,
});

function mapDispatchToProps(dispatch) {
  return {
    signInRequestDispatch: data => dispatch(signInRequestAction(data)),
    signInSuccessDispatch: () => dispatch(signInSuccessAction()),
    signInFailureDispatch: data => dispatch(signInFailureAction(data)),
    clearSignInSuccessFailureDispatch: () =>
      dispatch(clearSignInSuccessFailureAction()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignIn);
