import { Link } from 'react-router';
import { RestaurantTabContainer } from './restaurant-tab/RestaurantTabContainer';

import styles from './RestaurantsTabs.module.scss';
import { ArrowLeft } from 'lucide-react';

export const RestaurantsTabs = ({ restaurantsIds }) => {
  return (
    <nav className={styles.restaurantsTabs}>
      <Link className={styles.restaurantsTabs__arrowBack} to='/restaurants'>
        <ArrowLeft />
        <span>Рестораны</span>
      </Link>
      <ul className={styles.restaurantsTabs__list}>
        {restaurantsIds.map((restaurantId) => (
          <RestaurantTabContainer
            key={restaurantId}
            restaurantId={restaurantId}
          />
        ))}
      </ul>
    </nav>
  );
};
