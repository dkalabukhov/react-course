import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { Restaurant } from './Restaurant';
import { selectRestaurantById } from '../../redux/entities/restaurants/restaurantsSlice';
import { useEffect } from 'react';

export const RestaurantContainer = ({ restaurantId }) => {
  const navigate = useNavigate();
  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  useEffect(() => {
    if (!activeRestaurant) {
      navigate('/restaurants');
    }
  }, [activeRestaurant, navigate]);

  if (!activeRestaurant || !activeRestaurant.name) {
    return null;
  }

  return <Restaurant restaurant={activeRestaurant} />;
};
