import { Dish } from './dish/Dish';
import { Ingredients } from './ingredients/Ingredients';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ dish }) => {
  return (
    <li className={styles.menuItem}>
      <Dish
        {...dish}
        dishId={dish.id}
      />
      {dish.ingredients && <Ingredients ingredients={dish.ingredients} />}
    </li>
  );
};
