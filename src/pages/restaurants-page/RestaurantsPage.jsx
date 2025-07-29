import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router';

import { RestaurantsTabs } from '../../components/restaurants-tabs/RestaurantsTabs';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/restaurantsSlice';
import { RestaurantsList } from '../../components/restaurants-list/RestaurantsList';

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/restaurants' ? (
        <RestaurantsList restaurantIds={restaurantsIds} />
      ) : (
        <RestaurantsTabs restaurantsIds={restaurantsIds} />
      )}
      <Outlet />
    </>
  );
};
