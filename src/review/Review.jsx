import { Rating } from '../rating/Rating';

import styles from './Review.module.css';

export const Review = ({ review }) => {
  return (
    <li className={styles.review}>
      <span className={styles.review__user}>{review.user}</span>
      <Rating review={review} />
      <span className={styles.review__text}>{review.text}</span>
    </li>
  );
};
