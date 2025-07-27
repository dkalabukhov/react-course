import cn from 'classnames';

import { ReviewRating } from './review-rating/ReviewRating';
import { useTheme } from '../theme-context/use-theme';

import styles from './Review.module.scss';

export const Review = ({ review, user }) => {
  const { theme } = useTheme();

  return (
    <li
      className={cn(styles.review, { [styles.review_dark]: theme === 'dark' })}
      key={review.id}
    >
      <span className={styles.review__user}>{user.name}</span>
      <ReviewRating review={review} />
      <span className={styles.review__text}>{review.text}</span>
    </li>
  );
};
