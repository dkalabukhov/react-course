import { AnimatePresence, motion } from 'motion/react';
import cn from 'classnames';

import { ReviewList } from '../review-list/ReviewList';
import { MenuList } from './menu-list/MenuList';
import { ReviewForm } from '../review-form/ReviewForm';
import { useTheme } from '../theme-context/use-theme';
import { useUser } from '../user-context/use-user';

import styles from './Restaurant.module.scss';

export const Restaurant = ({ restaurant }) => {
  const { user } = useUser();
  const { theme } = useTheme();

  if (!restaurant.menu || !restaurant.name) {
    return null;
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={restaurant.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(styles.restaurant, {
          [styles.restaurant_dark]: theme === 'dark',
        })}
      >
        <h2 className={styles.restaurant__title}>{restaurant.name}</h2>
        <h3 className={styles.restaurant__subtitle}>Меню</h3>
        <MenuList menu={restaurant.menu} />
        <h3 className={styles.restaurant__subtitle}>Отзывы</h3>
        {restaurant.reviews.length ? (
          <ReviewList reviews={restaurant.reviews} />
        ) : (
          <p>Отзывов нет. Оставьте первый</p>
        )}
        <h3 className={styles.restaurant__subtitle}>Оставить отзыв</h3>
        {user ? <ReviewForm /> : <p>Войдите, чтобы оставить отзыв</p>}
      </motion.div>
    </AnimatePresence>
  );
};
