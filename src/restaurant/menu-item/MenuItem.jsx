import { Dish } from './dish/Dish';
import { Ingredients } from './ingredients/Ingredients';

import styles from './MenuItem.module.scss';

export const MenuItem = ({ menuItem }) => {
  return (
    <li className={styles.menuItem} key={menuItem.id}>
      <Dish name={menuItem.name} price={menuItem.price} />
      {menuItem.ingredients && (
        <Ingredients ingredients={menuItem.ingredients} />
      )}
    </li>
  );
};
