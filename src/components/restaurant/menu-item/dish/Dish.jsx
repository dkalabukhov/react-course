import { Link } from 'react-router';
import cn from 'classnames';

import { useAuth } from '../../../auth-context/use-auth';
import { DishCounter } from '../../../dish-counter/DishCounter';

import styles from './Dish.module.scss';

export const Dish = ({
  name,
  price,
  dishId,
  img,
  description,
  hasLink = true,
}) => {
  const { isAuthorized } = useAuth();

  if (hasLink) {
    return (
      <div className={styles.dish}>
        <Link to={`/dish/${dishId}`} className={styles.dish__info}>
          <span className={styles.dish__name}>
            {name} - {price}$
          </span>
          <img src={img} alt={name} className={styles.dish__img} />
        </Link>
        {isAuthorized && <DishCounter dishId={dishId} />}
      </div>
    );
  }

  return (
    <div className={styles.dish}>
      <div className={cn(styles.dish__info, styles.dish__info_noLink)}>
        <span className={styles.dish__name}>
          {name} - {price}$
        </span>
        <img src={img} alt={name} className={styles.dish__img} />
        <span className={styles.dish__description}>{description}</span>
      </div>
      {isAuthorized && <DishCounter dishId={dishId} />}
    </div>
  );
};
