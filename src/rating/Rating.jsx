import styles from './Rating.module.css';

export const Rating = ({ review }) => {
  return (
    <div className={styles.rating}>
      {[...Array(review.rating)].map((_, index) => (
        <span
          className={styles.rating__star}
          key={`${review.id}-star-${index}`}
        >
          ⭐️
        </span>
      ))}
      <span className={styles.rating__count}>({review.rating})</span>
    </div>
  );
};
