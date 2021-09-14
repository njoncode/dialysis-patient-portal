/**
 *
 * SignUpForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { useToasts } from 'react-toast-notifications';

import '../../styles/components/customButton.scss';

import FormInput from '../FormInput';
import CustomButton from '../CustomButton';
import Loader from '../Loader';

function SignUpForm({
  handleOnChange,
  handleSubmit,
  signUpState,
  isSignUpLoading,
  isSignUpSuccess,
  signUpFailureMessage,
}) {
  const { addToast } = useToasts();

  const { name, email, phoneNumber, password, confirmPassword } = signUpState;

  React.useEffect(() => {
    if (isSignUpSuccess) {
      addToast('You have been successfully registered', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
    if (signUpFailureMessage) {
      addToast(signUpFailureMessage, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  }, [isSignUpSuccess, signUpFailureMessage]);

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          label="Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          label="Email"
          required
        />
        <FormInput
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleOnChange}
          label="Phone Number"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          label="Confirm Password"
          required
        />
        <CustomButton
          type="submit"
          disabled={
            !!(!name || !email || !phoneNumber || !password || !confirmPassword)
          }
        >
          {!isSignUpLoading ? 'Sign up' : <Loader text="Signing up" />}
        </CustomButton>
      </form>
    </div>
  );
}

SignUpForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUpState: PropTypes.object,
  isSignUpLoading: PropTypes.bool,
  isSignUpSuccess: PropTypes.bool,
  signUpFailureMessage: PropTypes.string,
};

export default SignUpForm;
