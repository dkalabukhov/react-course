import cn from 'classnames';

import styles from './RestaurantList.module.css';

export const RestaurantList = ({ restaurants, activeTab, handleTabClick }) => {
  return (
    <nav className={styles.restaurants}>
      <ul className={styles.restaurants__list}>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className={styles.restaurants__listItem}>
            <button
              className={cn(styles.restaurants__tabBtn, {
                [styles.restaurants__tabBtn_active]: restaurant === activeTab,
              })}
              onClick={(e) => handleTabClick(e, restaurant)}
            >
              {restaurant.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
