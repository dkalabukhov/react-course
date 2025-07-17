import cn from 'classnames';

import { useState, useMemo } from 'react';

import styles from './StarRating.module.scss';

export const StarRating = ({
  count = 5,
  rating = 0,
  sizeVariant = 'm',
  handleUserSetRating,
}) => {
  const [temporaryRating, setTemporaryRating] = useState(0);

  const stars = useMemo(() => [...Array(count)].fill('⭐️'), [count]);

  return (
    <div className={styles.starRating}>
      {stars.map((star, index) => {
        const isActiveColor =
          (rating || temporaryRating) &&
          (index < rating || index < temporaryRating);

        return (
          <div
            key={index}
            className={cn(styles.starRating__star, {
              [styles.starRating__star_active]: isActiveColor,
              [styles.starRating__star_xs]: sizeVariant === 'xs',
              [styles.starRating__star_s]: sizeVariant === 's',
              [styles.starRating__star_m]: sizeVariant === 'm',
              [styles.starRating__star_l]: sizeVariant === 'l',
              [styles.starRating__star_xl]: sizeVariant === 'xl',
            })}
            onMouseEnter={() => setTemporaryRating(index + 1)}
            onMouseLeave={() => setTemporaryRating(0)}
            onClick={() => handleUserSetRating(index + 1)}
          >
            {star}
          </div>
        );
      })}
      <span className={styles.starRating__count}>
        {rating === 0 ? null : `(${rating})`}
      </span>
    </div>
  );
};
