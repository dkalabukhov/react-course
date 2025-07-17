import { ReviewRating } from './review-rating/ReviewRating';

import styles from './Review.module.scss';

export const Review = ({ review }) => {
  return (
    <li className={styles.review}>
      <span className={styles.review__user}>{review.user}</span>
      <ReviewRating review={review} />
      <span className={styles.review__text}>{review.text}</span>
    </li>
  );
};
