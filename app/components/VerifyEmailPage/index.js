/**
 *
 * VerifyEmail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MailIcon } from 'react-mail-icon';

import '../../styles/components/verifyEmail.scss';

import Loader from '../Loader';
import CustomButton from '../CustomButton';

const mailIconStyle = {
  display: 'flex',
};

const VerifyEmailPage = ({
  isVerifyEmailLoading,
  isVerifyEmailSuccess,
  verifyEmailFailureMessage,
}) => {
  const [shouldAnimate, setAnimation] = React.useState(false);

  console.log('isVerifyEmailLoading: ', isVerifyEmailLoading);
  console.log('isVerifyEmailSuccess: ', isVerifyEmailSuccess);

  return (
    <div className="verify-email-container">
      {isVerifyEmailLoading && <Loader text="Verifying Email" />}
      {verifyEmailFailureMessage && (
        <div className="verify-email-failure-container">
          <MailIcon
            style={mailIconStyle}
            mailBackFoldColor="#2874A6"
            mailTopFoldColor="#2E86C1"
            mailLeftFoldColor="#3498DB"
            mailRightFoldColor="#5DADE2"
            letterBackgroundColor="#FFFFFF"
            letterBorderColor="#1ABC9C"
            letterTextColor="#1ABC9C"
            shouldAnimateOpen={shouldAnimate}
            shouldAnimateDown={shouldAnimate}
            shouldAnimateOnHover
          />
          <h2 className="verify-email-failure-heading">Verifiy your email</h2>
          <p>Use the link below to verify your email.</p>
          <CustomButton
            onMouseOver={() => setAnimation(true)}
            onMouseOut={() => setAnimation(false)}
          >
            Verify Email
          </CustomButton>
        </div>
      )}
      {isVerifyEmailSuccess && (
        <div>
          <p>Your email address has been verified.</p>
          <Link to="/">
            <button type="button">Continue</button>
          </Link>
        </div>
      )}
    </div>
  );
};

VerifyEmailPage.propTypes = {
  isVerifyEmailLoading: PropTypes.bool,
  verifyEmailFailureMessage: PropTypes.string,
  isVerifyEmailSuccess: PropTypes.bool,
};

export default VerifyEmailPage;
