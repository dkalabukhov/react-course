import { createSelector, createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      if (state[payload] === 5) {
        return state;
      }
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] -= 1;
      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
    clearCart: (state) => {
      state = {};
      return state;
    }
  },
  selectors: {
    selectAmountByItemId: (state, id) => state[id],
  },
});

const selectCartSlice = (state) => state[cartSlice.name];

export const selectCartItemsIds = createSelector(
  [selectCartSlice],
  (cartSlice) => Object.keys(cartSlice)
);

export const selectTotalCartPrice = createSelector(
  [selectCartSlice, (state) => state.dishes.entities],
  (cartSlice, dishesEntities) => {
    return Object.keys(cartSlice).reduce((acc, cartItemId) => {
      const dish = dishesEntities[cartItemId];
      const dishCount = cartSlice[cartItemId];

      acc += dish.price * dishCount;

      return acc;
    }, 0);
  }
);

export const { selectAmountByItemId } = cartSlice.selectors;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
