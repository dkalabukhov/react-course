import cn from 'classnames';

import { useTheme } from '../../theme-context/use-theme';
import { ThemeSwitcher } from './theme-switcher/ThemeSwitcher';
import { UserAuth } from './user-auth/UserAuth';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={cn(styles.header, { [styles.header_dark]: theme === 'dark' })}
    >
      <div className='container'>
        <div className={styles.header__wrapper}>
          <ThemeSwitcher />
          <h1 className={styles.header__heading}>AnyFood</h1>
          <UserAuth />
        </div>
      </div>
    </header>
  );
};
