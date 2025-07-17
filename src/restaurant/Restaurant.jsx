import { AnimatePresence, motion } from 'motion/react';

import { ReviewList } from '../review-list/ReviewList';
import { MenuList } from './menu-list/MenuList';
import { ReviewForm } from '../review-form/ReviewForm';

import styles from './Restaurant.module.scss';

export const Restaurant = ({ restaurant }) => {
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
        className={styles.restaurant}
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
        <ReviewForm />
      </motion.div>
    </AnimatePresence>
  );
};
