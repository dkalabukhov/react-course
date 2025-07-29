import { AnimatePresence, motion } from 'motion/react';
import { NavLink, Outlet } from 'react-router';
import cn from 'classnames';

import { useTheme } from '../theme-context/use-theme';

import styles from './Restaurant.module.scss';

const RestaurantTab = ({ pathTo, title }) => {
  return (
    <li>
      <h3 className={styles.restaurant__subtitle}>
        <NavLink
          to={pathTo}
          className={({ isActive }) =>
            cn({ [styles.restaurant__activeLink]: isActive })
          }
        >
          {title}
        </NavLink>
      </h3>
    </li>
  );
};

export const Restaurant = ({ restaurant }) => {
  const { theme } = useTheme();

  if (!restaurant.name || !restaurant.menu.length) {
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
        <ul className={styles.restaurant__tabs}>
          <RestaurantTab pathTo={`/restaurants/${restaurant.id}/menu`} title='Меню' />
          <li>
            <span>|</span>
          </li>
          <RestaurantTab pathTo={`/restaurants/${restaurant.id}/reviews`} title='Отзывы' />
        </ul>
        <Outlet context={restaurant} />
      </motion.div>
    </AnimatePresence>
  );
};
