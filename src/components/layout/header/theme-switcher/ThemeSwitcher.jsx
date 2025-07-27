import { MoonStar, Sun } from 'lucide-react';

import { useTheme } from '../../../theme-context/use-theme';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <button
        disabled={theme === 'light'}
        className={styles.themeSwitcher__btn}
        onClick={toggleTheme}
      >
        <Sun />
      </button>
      <label className={styles.toggler}>
        <input
          onChange={toggleTheme}
          checked={theme === 'dark'}
          type='checkbox'
          className={styles.toggler__input}
          name='toggler'
        />
        <div className={styles.toggler__state}>
          <div className={styles.toggler__control}>
            <div className={styles.toggler__circle}></div>
          </div>
        </div>
      </label>
      <button
        disabled={theme === 'dark'}
        className={styles.themeSwitcher__btn}
        onClick={toggleTheme}
      >
        <MoonStar />
      </button>
    </div>
  );
};
