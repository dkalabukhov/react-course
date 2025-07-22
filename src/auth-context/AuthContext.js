import { createContext } from 'react';

export const AuthContext = createContext({
  auth: { isAuthorized: false },
  isAuthorized: false,
  logIn: () => {},
  logOut: () => {},
});
