import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logIn = () => {
    setUser({ name: 'TestUser' });
  };

  const logOut = () => {
    setUser(null);
  };

  return <UserContext value={{ user, logIn, logOut }}>{children}</UserContext>;
};
