import { useState } from 'react';
import cn from 'classnames';

import { useAuth } from '../auth-context/use-auth';
import { Sheet } from '../sheet/Sheet';
import { useTheme } from '../theme-context/use-theme';
import { CartItemContainer } from './cart-item/CartItemContainer';

import styles from './Cart.module.scss';
import { ShoppingCart } from 'lucide-react';

export const Cart = ({
  cartItemsIds,
  totalPrice,
  handleClearCart,
  cartItemsCount,
}) => {
  const { isAuthorized } = useAuth();
  const { theme } = useTheme();

  const [isCartActive, setIsCartActive] = useState(false);

  const hideCart = () => {
    setIsCartActive(false);
  };

  return (
    <>
      {isAuthorized ? (
        <>
          <button
            onClick={() => setIsCartActive(true)}
            className={styles.sheetTrigger}
          >
            <span>Корзина</span>
            {cartItemsCount > 0 && (
              <div
                className={cn(styles.cartItemsCount, {
                  [styles.cartItemsCount_dark]: theme === 'dark',
                })}
              >
                {cartItemsCount}
              </div>
            )}
            <ShoppingCart />
          </button>
          <Sheet
            active={isCartActive}
            hideSheet={hideCart}
            scroll
            side='right'
            size='large'
            themeMode={theme}
          >
            <h3 className={styles.cartTitle}>Корзина</h3>
            {cartItemsIds.length > 0 ? (
              <div className={styles.cartContent}>
                <div className={styles.cartBody}>
                  <ul className={styles.cartItemsList}>
                    {cartItemsIds.map((cartItemId) => (
                      <CartItemContainer key={cartItemId} itemId={cartItemId} />
                    ))}
                  </ul>
                  <span className={styles.cartTotalPrice}>
                    К оплате: {totalPrice}$
                  </span>
                </div>
                <div className={styles.cartFooter}>
                  <button
                    className={cn(styles.cartButton, {
                      [styles.cartButton_dark]: theme === 'dark',
                    })}
                    onClick={handleClearCart}
                  >
                    Очистить корзину
                  </button>
                  <button
                    className={cn(styles.cartButton, {
                      [styles.cartButton_dark]: theme === 'dark',
                    })}
                  >
                    Оформить заказ
                  </button>
                </div>
              </div>
            ) : (
              <span>Корзина пуста</span>
            )}
          </Sheet>
        </>
      ) : null}
    </>
  );
};
