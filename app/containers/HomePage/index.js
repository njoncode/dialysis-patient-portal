/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useToasts } from 'react-toast-notifications';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import messages from './messages';

import { makeSelectSignInUserInfo } from '../SignIn/selectors';

const HomePage = () => {
  console.log('HomePage RENDERED!!!!!!');

  const { addToast } = useToasts();

  const homePagesignedInUserInfo = JSON.parse(
    sessionStorage.getItem('signedInUserInfo'),
  );

  React.useEffect(() => {
    if (
      homePagesignedInUserInfo &&
      !homePagesignedInUserInfo.user.isEmailVerified
    ) {
      addToast('Please verify your email id.', {
        appearance: 'warning',
        autoDismiss: true,
      });
    }
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <h3>Dialysis Centre</h3>
    </div>
  );
};

HomePage.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userInfo: makeSelectSignInUserInfo,
});

export default connect(mapStateToProps)(HomePage);
