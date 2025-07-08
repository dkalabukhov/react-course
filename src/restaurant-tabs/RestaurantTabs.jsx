import { useState } from 'react';

import { RestaurantList } from './restaurant-list/RestaurantList';
import { Restaurant } from '../restaurant/Restaurant';

import { restaurants } from '../../materials/mock';

export const RestaurantTabs = () => {
  const [activeTab, setActiveTab] = useState(restaurants[0]);

  const handleTabClick = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <>
      <RestaurantList
        restaurants={restaurants}
        activeTab={activeTab}
        handleTabClick={handleTabClick}
      />
      <Restaurant restaurant={activeTab} />
    </>
  );
};
