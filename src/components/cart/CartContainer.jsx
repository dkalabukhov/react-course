import { useDispatch, useSelector } from 'react-redux';

import {
  clearCart,
  selectCartItemsCount,
  selectCartItemsIds,
  selectTotalCartPrice,
} from '../../redux/entities/cart/CartSlice';
import { Cart } from './Cart';

export const CartContainer = () => {
  const cartItemsIds = useSelector(selectCartItemsIds);
  const cartTotalPrice = useSelector(selectTotalCartPrice);
  const cartItemsCount = useSelector(selectCartItemsCount);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Cart
      cartItemsIds={cartItemsIds}
      totalPrice={cartTotalPrice}
      cartItemsCount={cartItemsCount}
      handleClearCart={handleClearCart}
    />
  );
};
