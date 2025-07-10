import { useState } from 'react';

import { RestaurantsTabs } from '../restaurants-tabs/RestaurantsTabs';
import { Restaurant } from '../restaurant/Restaurant';

import { restaurants } from '../../materials/mock';

export const RestaurantsPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]);

  const handleTabClick = (tab) => {
    setActiveRestaurant(tab);
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
