import { ProductCounter } from '../../product-counter/ProductCounter';
import { Ingredients } from './ingredients/Ingredients';

import styles from './MenuItem.module.css';

export const MenuItem = ({ menuItem }) => {
  return (
    <li className={styles.menuItem} key={menuItem.id}>
      <div className={styles.menuItem__product}>
        <span className={styles.menuItem__productName}>
          {menuItem.name} - {menuItem.price}$
        </span>
        <ProductCounter />
      </div>
      <Ingredients ingredients={menuItem.ingredients} />
    </li>
  );
};
