import { LogOutBtn } from "../log-out-btn/LogOutBtn";

import styles from './Profile.module.scss';

export const Profile = ({ user, logOut }) => {
  return (
    <div className={styles.profile}>
      <span className={styles.profile__name}>{user.name}</span>
      <LogOutBtn logOut={logOut} />
    </div>
  );
};
