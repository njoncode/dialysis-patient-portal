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

import { useLocation, useHistory } from 'react-router-dom';
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
  isverifyEmailFailure,
  verifyEmailFailureMessage,
}) => {
  useInjectReducer({ key: 'verifyEmail', reducer });
  useInjectSaga({ key: 'verifyEmail', saga });

  const history = useHistory();

  const { search } = useLocation();
  const { token } = queryString.parse(search);
  console.log('VerifyEmail token: ', token);

  const handleVerifyEmail = verifyEmailToken => {
    verifyEmailRequestDispatch(verifyEmailToken);
  };

  React.useEffect(() => {
    handleVerifyEmail(token);
    if (isVerifyEmailSuccess) {
      history.push('/sign-in');
    }
  }, [isVerifyEmailSuccess]);

  return (
    <div>
      <VerifyEmailPage
        handleVerifyEmail={handleVerifyEmail}
        isVerifyEmailLoading={isVerifyEmailLoading}
        isVerifyEmailSuccess={isVerifyEmailSuccess}
        isverifyEmailFailure={isverifyEmailFailure}
        verifyEmailFailureMessage={verifyEmailFailureMessage}
      />
    </div>
  );
};

VerifyEmail.propTypes = {
  verifyEmailRequestDispatch: PropTypes.func.isRequired,
  isVerifyEmailLoading: PropTypes.bool,
  isVerifyEmailSuccess: PropTypes.bool,
  isverifyEmailFailure: PropTypes.bool,
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
