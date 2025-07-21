import { useUser } from '../../../user-context/use-user';
import { DishCounter } from './dish-counter/DishCounter';

import styles from './Dish.module.scss';

export const Dish = ({ name, price }) => {
  const { user } = useUser();

  return (
    <div className={styles.dish}>
      <span className={styles.dish__name}>
        {name} - {price}$
      </span>
      { user && <DishCounter />}
    </div>
  );
};
