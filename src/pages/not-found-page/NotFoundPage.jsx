import cn from 'classnames';
import { Link } from 'react-router';

import { useTheme } from '../../components/theme-context/use-theme';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.notFoundPage}>
      <h2 className={styles.notFoundPage__error}>404</h2>
      <p className={styles.notFoundPage__message}>Страница не найдена</p>
      <Link
        to='/'
        className={cn(styles.notFoundPage__button, {
          [styles.notFoundPage__button_dark]: theme === 'dark',
        })}
      >
        Перейти на главную
      </Link>
    </div>
  );
};
