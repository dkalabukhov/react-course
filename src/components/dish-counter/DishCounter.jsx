import cn from 'classnames';

import { useTheme } from '../theme-context/use-theme';
import { useDishCounter } from './use-dish-counter';

import styles from './DishCounter.module.scss';

const MINIMUM_AMOUNT = 0;
const MAXIMUM_AMOUNT = 5;

export const DishCounter = ({ dishId }) => {
  console.log(dishId);

  const { theme } = useTheme();

  const { dishCount, handleIncrement, handleDecrement } = useDishCounter(dishId)

  return (
    <div className={styles.dishCounter}>
      <button
        disabled={dishCount === MINIMUM_AMOUNT}
        onClick={handleDecrement}
        className={cn(styles.dishCounter__btn, {
          [styles.dishCounter__btn_dark]: theme === 'dark',
        })}
      >
        -
      </button>
      <span className={styles.dishCounter__count}>{dishCount}</span>
      <button
        disabled={dishCount === MAXIMUM_AMOUNT}
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
