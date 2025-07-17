import { Review } from '../review/Review';

import styles from './ReviewList.module.scss';

export const ReviewList = ({ reviews }) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
};
