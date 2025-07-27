import { useSelector } from 'react-redux';
import { RestaurantTab } from './RestaurantTab';
import { selectRestaurantById } from '../../../redux/entities/restaurants/restaurantsSlice';

export const RestaurantTabContainer = ({
  restaurantId,
  activeRestaurantId,
  handleTabClick,
}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

  if (!restaurant.name) {
    return null;
  }

  return (
    <RestaurantTab
      restaurant={restaurant}
      activeRestaurantId={activeRestaurantId}
      handleTabClick={handleTabClick}
    />
  );
};
