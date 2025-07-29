import { useSelector } from 'react-redux';

import { selectRestaurantById } from '../../../redux/entities/restaurants/restaurantsSlice';
import { RestaurantListItem } from './RestaurantListItem';
import { selectAverageRatingByIds } from '../../../redux/entities/reviews/reviewsSlice';

export const RestaurantListItemContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  const reviewsCount = restaurant.reviews.length;

  const averageRating = useSelector((state) =>
    selectAverageRatingByIds(state, restaurant.reviews)
  );

  return (
    <RestaurantListItem
      restaurant={restaurant}
      averageRating={averageRating.toFixed(1)}
      reviewsCount={reviewsCount}
    />
  );
};
