import cn from 'classnames';
import { Link } from 'react-router';

import styles from './Logo.module.scss';

export const Logo = ({ title, centered = true }) => {
  return (
    <h1 className={cn(styles.logo, { [styles.logo_centered]: centered })}>
      <Link to='/'>{title}</Link>
    </h1>
  );
};
