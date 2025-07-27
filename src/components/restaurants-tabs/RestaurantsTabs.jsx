import { RestaurantTabContainer } from './restaurant-tab/RestaurantTabContainer';

import styles from './RestaurantsTabs.module.scss';

export const RestaurantsTabs = ({
  restaurantsIds,
  activeRestaurantId,
  handleTabClick,
}) => {
  return (
    <nav className={styles.restaurantsTabs}>
      <ul className={styles.restaurantsTabs__list}>
        {restaurantsIds.map((restaurantId) => (
          <RestaurantTabContainer
            key={restaurantId}
            restaurantId={restaurantId}
            activeRestaurantId={activeRestaurantId}
            handleTabClick={handleTabClick}
          />
        ))}
      </ul>
    </nav>
  );
};
