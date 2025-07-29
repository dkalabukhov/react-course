import { Link } from 'react-router';
import styles from './RestaurantListItem.module.scss';
import { RestaurantAverageRating } from './restaurant-average-rating/RestaurantAverageRating';

export const RestaurantListItem = ({
  restaurant,
  averageRating,
  reviewsCount,
}) => {
  return (
    <Link
      className={styles.restaurantLink}
      to={`/restaurants/${restaurant.id}/menu`}
    >
      <li className={styles.restaurantListItem}>
        <img
          className={styles.restaurantListItem__img}
          src={restaurant.img}
          alt={restaurant.name}
        />
        <div className={styles.restaurantInfo}>
          <span className={styles.restaurantInfo__name}>{restaurant.name}</span>
          <span>{restaurant.description}</span>
          <span>
            <RestaurantAverageRating
              averageRating={averageRating}
              reviewsCount={reviewsCount}
            />
          </span>
        </div>
      </li>
    </Link>
  );
};
