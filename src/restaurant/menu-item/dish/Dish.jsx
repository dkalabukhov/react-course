import { DishCounter } from './dish-counter/DishCounter';

import styles from './Dish.module.scss';

export const Dish = ({ name, price }) => {
  return (
    <div className={styles.dish}>
      <span className={styles.dish__name}>
        {name} - {price}$
      </span>
      <DishCounter />
    </div>
  );
};
