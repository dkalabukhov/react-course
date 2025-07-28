import cn from 'classnames';

import { useTheme } from '../../../components/theme-context/use-theme';
import { ThemeSwitcher } from './theme-switcher/ThemeSwitcher';
import { UserAuth } from './user-auth/UserAuth';
import { BurgerMenu } from './burger-menu/BurgerMenu';
import { CartContainer } from '../../../components/cart/CartContainer';

import styles from './Header.module.scss';
import { Logo } from './logo/Logo';

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
          <Logo title='AnyFood' centered />
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
