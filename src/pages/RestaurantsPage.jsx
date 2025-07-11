import { useState } from 'react';

import { RestaurantsTabs } from '../restaurants-tabs/RestaurantsTabs';
import { Restaurant } from '../restaurant/Restaurant';

import { restaurants } from '../../materials/mock';

export const RestaurantsPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);

  const handleTabClick = (restaurant) => {
    setActiveRestaurantId(restaurant.id);
  };

  return (
    <>
      <RestaurantsTabs
        restaurants={restaurants}
        activeRestaurant={activeRestaurant}
        handleTabClick={handleTabClick}
      />
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};
