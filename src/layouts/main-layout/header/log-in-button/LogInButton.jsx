import { LogIn } from "lucide-react";

import styles from './LogInButton.module.scss';

export const LogInBtn = ({ logIn }) => {
  return (
    <button onClick={logIn} className={styles.logInBtn}>
      <span>Войти</span>
      <LogIn />
    </button>
  )
};
