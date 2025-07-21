import cn from 'classnames';

import { useState } from 'react';
import { useTheme } from '../../../../theme-context/use-theme';

import styles from './DishCounter.module.scss';

const MINIMUM_AMOUNT = 0;
const MAXIMUM_AMOUNT = 5;

export const DishCounter = () => {
  const { theme } = useTheme();
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > MINIMUM_AMOUNT) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    if (counter < MAXIMUM_AMOUNT) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className={styles.dishCounter}>
      <button
        disabled={counter === MINIMUM_AMOUNT}
        onClick={handleDecrement}
        className={cn(styles.dishCounter__btn, {
          [styles.dishCounter__btn_dark]: theme === 'dark',
        })}
      >
        -
      </button>
      <span className={styles.dishCounter__count}>{counter}</span>
      <button
        disabled={counter === MAXIMUM_AMOUNT}
        onClick={handleIncrement}
        className={cn(styles.dishCounter__btn, {
          [styles.dishCounter__btn_dark]: theme === 'dark',
        })}
      >
        +
      </button>
    </div>
  );
};
