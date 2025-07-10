import { DishCounter } from '../../dish-counter/DishCounter';
import { Ingredients } from './ingredients/Ingredients';

import styles from './MenuItem.module.css';

export const MenuItem = ({ menuItem }) => {
  return (
    <li className={styles.menuItem} key={menuItem.id}>
      <div className={styles.menuItem__dish}>
        <span className={styles.menuItem__dishName}>
          {menuItem.name} - {menuItem.price}$
        </span>
        <DishCounter />
      </div>
      <Ingredients ingredients={menuItem.ingredients} />
    </li>
  );
};
