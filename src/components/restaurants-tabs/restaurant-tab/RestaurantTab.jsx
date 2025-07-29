import cn from 'classnames';
import { Link, useLocation } from 'react-router';

import styles from './RestaurantTab.module.scss';

export const RestaurantTab = ({ restaurant }) => {
  const { pathname } = useLocation();

  return (
    <li className={styles.restaurantTab}>
      <Link
        to={`/restaurants/${restaurant.id}/menu`}
        className={cn(styles.restaurantTab__button, {
          [styles.restaurantTab__button_active]:
            pathname === `/restaurants/${restaurant.id}/menu` ||
            pathname === `/restaurants/${restaurant.id}/reviews`,
        })}
      >
        {restaurant.name}
      </Link>
    </li>
  );
};
