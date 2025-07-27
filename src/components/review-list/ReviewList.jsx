import { ReviewContainer } from '../review/ReviewContainer';

import styles from './ReviewList.module.scss';

export const ReviewList = ({ reviewsIds }) => {
  return (
    <ul className={styles.reviews}>
      {reviewsIds.map((reviewId) => (
        <ReviewContainer key={reviewId} reviewId={reviewId} />
      ))}
    </ul>
  );
};
