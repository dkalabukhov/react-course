import { useAuth } from '../../../auth-context/use-auth';
import { DishCounter } from './dish-counter/DishCounter';

import styles from './Dish.module.scss';

export const Dish = ({ name, price }) => {
  const { isAuthorized } = useAuth();

  return (
    <div className={styles.dish}>
      <span className={styles.dish__name}>
        {name} - {price}$
      </span>
      { isAuthorized && <DishCounter />}
    </div>
  );
};
