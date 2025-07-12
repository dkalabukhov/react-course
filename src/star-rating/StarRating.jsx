import { useState, useMemo, useEffect } from 'react';

import styles from './StarRating.module.css';

export const StarRating = ({
  count = 5,
  currentRating = 0,
  iconSize = 18,
  handleUserSetRating,
}) => {
  const [rating, setRating] = useState(0);
  const [temporaryRating, setTemporaryRating] = useState(0);

  useEffect(() => {
    setRating(currentRating);
  }, [currentRating]);

  const handleStarClick = (rating) => {
    setRating(rating);
    handleUserSetRating(rating);
  };

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
            onClick={() => handleStarClick(index + 1)}
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
