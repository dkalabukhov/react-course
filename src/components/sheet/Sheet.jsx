import cn from 'classnames';

import styles from './Sheet.module.scss';
import { XIcon } from 'lucide-react';

export const Sheet = ({
  themeMode = 'light',
  side = 'left',
  size = 'normal',
  active,
  hideSheet,
  children,
}) => {
  return (
    <div
      className={cn(styles.sheet, {
        [styles.sheet_active]: active,
        [styles.sheet_right]: side === 'right',
      })}
    >
      <div
        className={cn(styles.sheet__wrapper, {
          [styles.sheet__wrapper_right]: side === 'right',
        })}
        onClick={hideSheet}
      >
        <div
          className={cn(styles.sheet__content, {
            [styles.sheet__content_right]: side === 'right',
            [styles.sheet__content_large]: size === 'large',
            [styles.sheet__content_light]: themeMode === 'light',
            [styles.sheet__content_dark]: themeMode === 'dark',
          })}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
          <button className={styles.sheet__close} onClick={hideSheet}>
            <XIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
