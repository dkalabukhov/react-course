import { ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';
import cn from 'classnames';

import { selectRestaurantByDishId } from '../../redux/entities/restaurants/restaurantsSlice';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';
import { Dish } from '../../components/restaurant/menu-item/dish/Dish';
import { useTheme } from '../../components/theme-context/use-theme';

import styles from './DishPage.module.scss';

export const DishPage = () => {
  const { dishId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantByDishId(state, dishId)
  );
  const dish = useSelector((state) => selectDishById(state, dishId));

  const { theme } = useTheme();

  return (
    <>
      <nav className={styles.nav}>
        <Link
          className={styles.nav__link}
          to={`/restaurants/${restaurant.id}/menu`}
        >
          <ArrowLeft />
          <span>Назад к {restaurant.name}</span>
        </Link>
      </nav>
      <div className={cn(styles.dishPage, {
        [styles.dishPage_dark]: theme === 'dark',
      })}>
        <Dish {...dish} dishId={dish.id} hasLink={false} />
      </div>
    </>
  );
};
