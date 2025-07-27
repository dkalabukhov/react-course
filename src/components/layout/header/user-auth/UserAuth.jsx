import { useAuth } from '../../../auth-context/use-auth';
import { LogInBtn } from '../log-in-button/LogInButton';
import { LogOutBtn } from '../log-out-button/LogOutButton';
import { Profile } from '../profile/Profile';

import styles from './UserAuth.module.scss';

export const UserAuth = () => {
  const { auth: { username }, isAuthorized, logIn, logOut } = useAuth();
  return (
    <>
      {isAuthorized ? (
        <div className={styles.userAuthorized}>
          <Profile username={username} />
          <LogOutBtn logOut={logOut} />
        </div>
      ) : (
        <LogInBtn logIn={logIn} />
      )}
    </>
  );
};
