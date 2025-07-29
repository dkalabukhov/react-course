import { RestaurantListItemContainer } from './restaurant-list-item/RestaurantListItemContainer';
import styles from './RestaurantsList.module.scss';

export const RestaurantsList = ({ restaurantIds }) => {
  return (
    <ul className={styles.restaurantsList}>
      {restaurantIds.map((id) => (
        <RestaurantListItemContainer key={id} restaurantId={id} />
      ))}
    </ul>
  )
};
