/**
 *
 * VerifyEmail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import {
  makeSelectIsVerifyEmailLoading,
  makeSelectIsVerifyEmailSuccess,
  makeSelectVerifyEmailFailureMessage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import VerifyEmailPage from '../../components/VerifyEmailPage';

import { verifyEmailRequestAction } from './actions';

const VerifyEmail = ({
  verifyEmailRequestDispatch,
  isVerifyEmailLoading,
  isVerifyEmailSuccess,
  verifyEmailFailureMessage,
}) => {
  useInjectReducer({ key: 'verifyEmail', reducer });
  useInjectSaga({ key: 'verifyEmail', saga });

  const { search } = useLocation();
  const { token } = queryString.parse(search);
  console.log('VerifyEmail token: ', token);

  const handleVerifyEmail = () => {
    verifyEmailRequestDispatch(token);
  };

  React.useEffect(() => {
    handleVerifyEmail();
  }, []);

  return (
    <div>
      <VerifyEmailPage
        handleVerifyEmail={handleVerifyEmail}
        isVerifyEmailLoading={isVerifyEmailLoading}
        isVerifyEmailSuccess={isVerifyEmailSuccess}
        verifyEmailFailureMessage={verifyEmailFailureMessage}
      />
    </div>
  );
};

VerifyEmail.propTypes = {
  verifyEmailRequestDispatch: PropTypes.func.isRequired,
  isVerifyEmailLoading: PropTypes.bool,
  isVerifyEmailSuccess: PropTypes.bool,
  verifyEmailFailureMessage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  isVerifyEmailLoading: makeSelectIsVerifyEmailLoading,
  isVerifyEmailSuccess: makeSelectIsVerifyEmailSuccess,
  verifyEmailFailureMessage: makeSelectVerifyEmailFailureMessage,
});

const mapDispatchToProps = dispatch => ({
  verifyEmailRequestDispatch: data => dispatch(verifyEmailRequestAction(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(VerifyEmail);
