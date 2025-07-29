import { useOutletContext } from 'react-router';

import { ReviewList } from '../../components/review-list/ReviewList';
import { ReviewForm } from '../../components/review-form/ReviewForm';
import { useAuth } from '../../components/auth-context/use-auth';

import styles from './RestaurantReviewsPage.module.scss';

export const RestaurantReviewsPage = () => {
  const restaurant = useOutletContext();
  const { isAuthorized } = useAuth();

  return (
    <div className={styles.reviews}>
      {restaurant.reviews.length ? (
        <ReviewList reviewsIds={restaurant.reviews} />
      ) : (
        <p>Отзывов нет. Оставьте первый</p>
      )}
      <h3 className={styles.reviews__title}>Оставить отзыв</h3>
      {isAuthorized ? <ReviewForm /> : <p>Войдите, чтобы оставить отзыв</p>}
    </div>
  );
};
