import cn from 'classnames';

import { useTheme } from '../../theme-context/use-theme';
import { ThemeSwitcher } from './theme-switcher/ThemeSwitcher';
import { useUser } from '../../user-context/use-user';
import { LogInBtn } from './log-in-btn/LogInBtn';
import { Profile } from './profile/Profile';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme } = useTheme();
  const { user, logIn, logOut } = useUser();

  return (
    <header
      className={cn(styles.header, { [styles.header_dark]: theme === 'dark' })}
    >
      <div className='container'>
        <div className={styles.header__wrapper}>
          <ThemeSwitcher />
          <h1 className={styles.header__heading}>AnyFood</h1>
          {user ? (
            <Profile user={user} logOut={logOut} />
          ) : (
            <LogInBtn logIn={logIn} />
          )}
        </div>
      </div>
    </header>
  );
};
