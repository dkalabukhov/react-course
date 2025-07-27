import { useDispatch, useSelector } from 'react-redux';

import {
  clearCart,
  selectCartItemsIds,
  selectTotalCartPrice,
} from '../../redux/entities/cart/CartSlice';
import { Cart } from './Cart';

export const CartContainer = () => {
  const cartItemsIds = useSelector(selectCartItemsIds);
  const cartTotalPrice = useSelector(selectTotalCartPrice);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Cart
      cartItemsIds={cartItemsIds}
      totalPrice={cartTotalPrice}
      handleClearCart={handleClearCart}
    />
  );
};
