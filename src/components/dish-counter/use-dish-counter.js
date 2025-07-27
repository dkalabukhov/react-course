import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addToCart,
  removeFromCart,
  selectAmountByItemId,
} from '../../redux/entities/cart/CartSlice';

export const useDishCounter = (dishId) => {
  const dispatch = useDispatch();

  const handleIncrement = useCallback(
    () => dispatch(addToCart(dishId)),
    [dispatch, dishId]
  );

  const handleDecrement = useCallback(
    () => dispatch(removeFromCart(dishId)),
    [dispatch, dishId]
  );

  const amount = useSelector((state) => selectAmountByItemId(state, dishId));

  return {
    handleIncrement,
    handleDecrement,
    dishCount: amount ?? 0,
  };
};
