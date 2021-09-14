/**
 *
 * VerifyEmail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const VerifyEmailPage = ({
  isVerifyEmailLoading,
  verifyEmailFailureMessage,
}) => (
  <div>
    {isVerifyEmailLoading && <Loader text="Verifying Email" />}
    {verifyEmailFailureMessage && (
      <p>Email Verification failed. Resend email</p>
    )}
    <p>Email Verification</p>
  </div>
);

VerifyEmailPage.propTypes = {
  isVerifyEmailLoading: PropTypes.bool.isRequired,
  verifyEmailFailureMessage: PropTypes.string.isRequired,
};

export default VerifyEmailPage;
