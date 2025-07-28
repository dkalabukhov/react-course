import cn from 'classnames';

import { useTheme } from '../../../components/theme-context/use-theme';

import styles from './Footer.module.scss';
import { NavLink } from 'react-router';

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={cn(styles.footer, { [styles.footer_dark]: theme === 'dark' })}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <p className={styles.footer__copyright}>AnyFood 2025 &copy;</p>
          <ul className={styles.footer__linksList}>
            <li>
              <NavLink className={({ isActive }) => cn({[styles.footer__link_active]: isActive })} to='/'>Главная</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => cn({[styles.footer__link_active]: isActive })} to='/restaurants'>Рестораны</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
