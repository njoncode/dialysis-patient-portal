import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  console.log('ProtectedRoute!!!!!');

  const signedInUserInfo = JSON.parse(
    sessionStorage.getItem('signedInUserInfo'),
  );
  console.log('ProtectedRoute signedInUserInfo: ', signedInUserInfo);

  const isAuthenticated = !!signedInUserInfo;

  console.log('ProtectedRoute isAuthenticated: ', isAuthenticated);

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

/* <Route
      {...rest}
      render={props => {
        if (signedInUserInfo) {
          return <Component {...rest} {...props} />;
        }
        return <Redirect to="/sign-in" />;
      }}
    /> */
