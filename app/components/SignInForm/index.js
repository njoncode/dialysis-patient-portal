/**
 *
 * SignInForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { useToasts } from 'react-toast-notifications';

import '../../styles/components/signInForm.scss';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import Loader from '../Loader';

function SignInForm({
  handleOnChange,
  handleSubmit,
  signInState: { email, password },
  isSignInLoading,
  isSignInSuccess,
  signInFailureMessage,
}) {
  const { addToast } = useToasts();

  // const { handleOnChange, handleSubmit, userSignIn, ...otherProps } = props;

  React.useEffect(() => {
    if (isSignInSuccess) {
      addToast('Welcome to dashboard!', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
    if (signInFailureMessage) {
      addToast(signInFailureMessage, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [isSignInSuccess, signInFailureMessage]);

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          onChange={handleOnChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleOnChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton
            type="submit"
            disabled={!!(!email || !password) || isSignInLoading}
          >
            {!isSignInLoading && !isSignInSuccess ? (
              'Sign in'
            ) : (
              <Loader text="Signing in" />
            )}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

SignInForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signInState: PropTypes.object.isRequired,
  isSignInLoading: PropTypes.bool.isRequired,
  isSignInSuccess: PropTypes.bool.isRequired,
  signInFailureMessage: PropTypes.string.isRequired,
};

export default SignInForm;
