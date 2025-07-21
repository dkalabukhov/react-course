import { LogOut } from "lucide-react";

import styles from './LogOutBtn.module.scss';

export const LogOutBtn = ({ logOut }) => {
  return (
    <button onClick={logOut} className={styles.logOutBtn}>
      <span>Выход</span>
      <LogOut />
    </button>
  )
};
