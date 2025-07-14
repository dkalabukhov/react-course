import { useState, useMemo } from 'react';

import styles from './StarRating.module.css';

export const StarRating = ({
  count = 5,
  rating = 0,
  iconSize = 18,
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
            className={styles.starRating__star}
            style={{
              fontSize: `${iconSize}px`,
              filter: isActiveColor ? 'grayscale(0)' : 'grayscale(100%)',
            }}
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
