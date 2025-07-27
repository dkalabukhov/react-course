import cn from 'classnames';

import styles from './RestaurantTab.module.scss';

export const RestaurantTab = ({
  restaurant,
  activeRestaurantId,
  handleTabClick,
}) => {
  return (
    <li className={styles.restaurantTab}>
      <button
        className={cn(styles.restaurantTab__button, {
          [styles.restaurantTab__button_active]:
            restaurant.id === activeRestaurantId,
        })}
        onClick={() => handleTabClick(restaurant.id)}
      >
        {restaurant.name}
      </button>
    </li>
  );
};
