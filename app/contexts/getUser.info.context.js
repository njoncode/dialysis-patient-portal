import React from 'react';
import PropTypes from 'prop-types';

import api from '../utils/api';

export const GetUserContext = React.createContext();

export const GetUserContextProvider = ({ children }) => {
  const userInfo = JSON.parse(sessionStorage.getItem('signedInUserInfo'));

  const [user, setUser] = React.useState('');

  // console.log('🛻😎😀🚒GetUserContextProvider: user: ', user);

  React.useEffect(() => {
    if (userInfo) {
      const {
        user: { id },
        tokens: {
          access: { token },
        },
      } = userInfo;

      const tokenInfo = `Bearer ${token}`;

      api.user
        .fetchUser(id, tokenInfo)
        .then(res => {
          // console.log('handleGetUserDetails res: ', res);
          setUser(res);
        })
        .catch(error =>
          console.error('GetUserContextProvider error caught: ', error),
        );
    }
  }, []);

  return (
    <GetUserContext.Provider value={user}>{children}</GetUserContext.Provider>
  );
};

GetUserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
