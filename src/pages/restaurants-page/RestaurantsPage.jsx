import { useState } from 'react';

import { RestaurantsTabs } from '../../components/restaurants-tabs/RestaurantsTabs';
import { RestaurantContainer } from '../../components/restaurant/RestaurantContainer';

export const RestaurantsPage = ({ restaurantsIds }) => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const handleTabClick = (id) => {
    setActiveRestaurantId(id);
  };

  return (
    <>
      <RestaurantsTabs
        restaurantsIds={restaurantsIds}
        activeRestaurantId={activeRestaurantId}
        handleTabClick={handleTabClick}
      />
      <RestaurantContainer activeRestaurantId={activeRestaurantId} />
    </>
  );
};
