/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ToastProvider } from 'react-toast-notifications';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import SignInAndSignUp from '../SignInAndSignUp';
import ProtectedRoute from '../../router/ProtectedRoute';
import { GetUserContextProvider } from '../../contexts/getUser.info.context';
import VerifyEmail from '../VerifyEmail';

export default function App() {
  return (
    <div>
      <ToastProvider style={{ zIndex: '9999999' }}>
        <GetUserContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/sign-in" component={SignInAndSignUp} />
              <ProtectedRoute exact path="/" component={HomePage} />
              <Route path="/verify-email" component={VerifyEmail} />
              <Route component={NotFoundPage} />
            </Switch>
          </Router>
        </GetUserContextProvider>
      </ToastProvider>
      <GlobalStyle />
    </div>
  );
}
