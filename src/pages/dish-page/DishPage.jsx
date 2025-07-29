import { ArrowLeft } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router';

import { selectRestaurantByDishId } from '../../redux/entities/restaurants/restaurantsSlice';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';

import styles from './DishPage.module.scss';
import { Dish } from '../../components/restaurant/menu-item/dish/Dish';

export const DishPage = () => {
  const { dishId } = useParams();
  const restaurant = useSelector((state) => selectRestaurantByDishId(state, dishId));
  const dish = useSelector((state) => selectDishById(state, dishId));

  return (
    <div className={styles.dishPage}>
      <nav className={styles.dishPage__nav}>
        <Link className={styles.dishPage__link} to={`/restaurants/${restaurant.id}/menu`}>
          <ArrowLeft/>
          <span>Назад к {restaurant.name}</span>
        </Link>
      </nav>
      <Dish {...dish} dishId={dish.id} hasLink={false}/>
    </div>
  )
};
