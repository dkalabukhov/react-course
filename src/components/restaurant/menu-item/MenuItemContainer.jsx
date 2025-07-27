import { useSelector } from "react-redux";

import { selectDishById } from "../../../redux/entities/dishes/dishesSlice";
import { MenuItem } from "./MenuItem";

export const MenuItemContainer = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish.name || !dish.price) {
    return null;
  }

  return (
    <MenuItem dish={dish} />
  )
};
