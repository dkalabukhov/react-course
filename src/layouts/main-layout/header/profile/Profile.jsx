import { User } from 'lucide-react';
import styles from './Profile.module.scss';

export const Profile = ({ username }) => {
  return (
    <div className={styles.profile}>
      <span className={styles.profile__name}>{username}</span>
      <User />
    </div>
  );
};
