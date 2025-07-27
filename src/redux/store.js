import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./entities/users/usersSlice";
import { dishesSlice } from "./entities/dishes/dishesSlice";
import { reviewsSlice } from "./entities/reviews/reviewsSlice";
import { restaurantsSlice } from "./entities/restaurants/restaurantsSlice";
import { cartSlice } from "./entities/cart/CartSlice";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
});
