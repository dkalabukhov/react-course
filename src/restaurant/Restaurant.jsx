import { ReviewList } from '../review-list/ReviewList';
import { MenuList } from './menu-list/MenuList';

import { AnimatePresence, motion } from 'motion/react';

import styles from './Restaurant.module.css';

export const Restaurant = ({ restaurant }) => {
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
      </motion.div>
    </AnimatePresence>
  );
};
