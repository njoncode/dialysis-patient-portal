import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const signedInUserInfo = JSON.parse(
    sessionStorage.getItem('signedInUserInfo'),
  );
  // console.log('ProtectedRoutelocalStorage.getItem: ', signedInUserInfo);

  const isAuthenticated = !!signedInUserInfo;

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: '/sign-in' }} />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default ProtectedRoute;
