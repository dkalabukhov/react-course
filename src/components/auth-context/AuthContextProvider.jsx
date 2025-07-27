import { useState } from 'react';
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const logIn = () => {
    setAuth({ isAuthorized: true, username: 'TestUser' });
  };

  const logOut = () => {
    setAuth({ isAuthorized: false });
  };

  return (
    <AuthContext
      value={{ auth, isAuthorized: auth.isAuthorized, logIn, logOut }}
    >
      {children}
    </AuthContext>
  );
};
