import cn from 'classnames';
import { NavLink } from 'react-router';

import styles from './RestaurantTab.module.scss';

export const RestaurantTab = ({ restaurant }) => {
  return (
    <li className={styles.restaurantTab}>
      <NavLink
        to={`/restaurants/${restaurant.id}`}
        className={({ isActive }) =>
          cn(styles.restaurantTab__button, {
            [styles.restaurantTab__button_active]: isActive,
          })
        }
      >
        {restaurant.name}
      </NavLink>
    </li>
  );
};
