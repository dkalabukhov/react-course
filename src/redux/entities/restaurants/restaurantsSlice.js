import { createSlice } from '@reduxjs/toolkit';

import { normalizedRestaurants } from '../../../constants/normalized-mock';

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantsIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantByDishId: (state, dishId) => {
      const restaurants = Object.values(state.entities);
      return restaurants.find(({ menu }) => menu.includes(dishId));
    },
  },
});

export const {
  selectRestaurantById,
  selectRestaurantsIds,
  selectRestaurantByDishId,
} = restaurantsSlice.selectors;
