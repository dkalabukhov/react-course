import { useSelector } from "react-redux";

import { Restaurant } from "./Restaurant";
import { selectRestaurantById } from "../../redux/entities/restaurants/restaurantsSlice";

export const RestaurantContainer = ({ activeRestaurantId }) => {
  const activeRestaurant = useSelector((state) => selectRestaurantById(state, activeRestaurantId));

  return (
    <Restaurant restaurant={activeRestaurant} />
  )
};
