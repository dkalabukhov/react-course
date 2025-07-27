import { useSelector } from "react-redux";

import { CartItem } from "./CartItem";
import { selectDishById } from "../../../redux/entities/dishes/dishesSlice";
import { selectAmountByItemId } from "../../../redux/entities/cart/CartSlice";

export const CartItemContainer = ({ itemId }) => {
  const dish = useSelector((state) => selectDishById(state, itemId));
  const dishCount = useSelector((state) => selectAmountByItemId(state, itemId));

  if (!dish.name || !dish.price) {
    return null;
  }

  return (
    <CartItem dish={dish} dishCount={dishCount} />
  )
};
