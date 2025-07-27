import { Dish } from './dish/Dish';
import { Ingredients } from './ingredients/Ingredients';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ dish }) => {
  return (
    <li className={styles.menuItem}>
      <Dish dishId={dish.id} name={dish.name} price={dish.price} />
      {dish.ingredients && (
        <Ingredients ingredients={dish.ingredients} />
      )}
    </li>
  );
};
