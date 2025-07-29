import cn from 'classnames'

import styles from './RestaurantAverageRating.module.scss'

export const RestaurantAverageRating = ({ averageRating, reviewsCount, starsCount = 5 }) => {

  return (
    <div className={styles.starRating}>
      <span className={styles.averageRating}>{averageRating}</span>
      {Array.from({ length: starsCount }).fill('⭐️').map((star, index) => (
        <div className={cn(styles.starRating__star, {
          [styles.starRating__star_active]: index < Math.floor(averageRating),
        })} key={index}>
          {star}
        </div>
      ))}
      <span className={styles.starRating__count}>({reviewsCount})</span>
    </div>
  )
};
