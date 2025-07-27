import cn from 'classnames';

import { useTheme } from '../../theme-context/use-theme';

import styles from './Footer.module.scss';

export const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={cn(styles.footer, { [styles.footer_dark]: theme === 'dark' })}>
      <div className='container'>
        <div className={styles.footer__wrapper}>
          <p className={styles.footer__copyright}>AnyFood 2025 &copy;</p>
        </div>
      </div>
    </footer>
  );
};
