import cn from 'classnames';

import styles from './RestaurantsTabs.module.scss';

export const RestaurantsTabs = ({
  restaurants,
  activeRestaurant,
  handleTabClick,
}) => {
  return (
    <nav className={styles.restaurantsTabs}>
      <ul className={styles.restaurantsTabs__list}>
        {restaurants.map(
          (restaurant) =>
            restaurant.name && (
              <li
                key={restaurant.id}
                className={styles.restaurantsTabs__listItem}
              >
                <button
                  className={cn(styles.restaurantsTabs__tabBtn, {
                    [styles.restaurantsTabs__tabBtn_active]:
                      restaurant === activeRestaurant,
                  })}
                  onClick={() => handleTabClick(restaurant)}
                >
                  {restaurant.name}
                </button>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};
