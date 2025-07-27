import { DishCounter } from '../../dish-counter/DishCounter';
import styles from './CartItem.module.scss';

export const CartItem = ({ dish, dishCount }) => {
  const totalPrice = dish.price * dishCount;

  return (
    <li className={styles.cartItem}>
      <span>{dish.name} - {totalPrice}$</span>
      <DishCounter dishId={dish.id} />
    </li>
  )
};
