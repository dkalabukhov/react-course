import { useState } from 'react';

import styles from './DishCounter.module.css';

const MINIMUM_AMOUNT = 0;
const MAXIMUM_AMOUNT = 5;

export const DishCounter = () => {
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
        className={styles.dishCounter__btn}
      >
        -
      </button>
      <span className={styles.dishCounter__count}>{counter}</span>
      <button
        disabled={counter === MAXIMUM_AMOUNT}
        onClick={handleIncrement}
        className={styles.dishCounter__btn}
      >
        +
      </button>
    </div>
  );
};
