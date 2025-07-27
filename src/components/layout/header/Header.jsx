import cn from 'classnames';

import { useTheme } from '../../theme-context/use-theme';
import { ThemeSwitcher } from './theme-switcher/ThemeSwitcher';
import { UserAuth } from './user-auth/UserAuth';
import { BurgerMenu } from './burger-menu/BurgerMenu';
import { CartContainer } from '../../cart/CartContainer';

import styles from './Header.module.scss';

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      className={cn(styles.header, { [styles.header_dark]: theme === 'dark' })}
    >
      <div className='container'>
        <div className={styles.header__wrapper}>
          <div className={styles.header__mobile}>
            <BurgerMenu />
            <CartContainer />
          </div>
          <h1 className={styles.header__logo}>AnyFood</h1>
          <div className={styles.header__desktop}>
            <ThemeSwitcher />
            <div className={styles.header__controls}>
              <CartContainer />
              <UserAuth />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
