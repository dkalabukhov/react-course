import { useState } from 'react';

import styles from './ProductCounter.module.css';

export const ProductCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleIncrement = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className={styles.productCounter}>
      <button
        disabled={counter === 0}
        onClick={handleDecrement}
        className={styles.productCounter__btn}
      >
        -
      </button>
      <span className={styles.productCounter__count}>{counter}</span>
      <button
        disabled={counter === 5}
        onClick={handleIncrement}
        className={styles.productCounter__btn}
      >
        +
      </button>
    </div>
  );
};
