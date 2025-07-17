import cn from 'classnames';

import { useForm } from './use-form';
import { StarRating } from '../star-rating/StarRating';

import styles from './ReviewForm.module.scss';

export const ReviewForm = () => {
  const { form, setName, setRating, setReview, clearForm } = useForm();

  const { name, rating, review } = form;

  const handleUserSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form
      onSubmit={(e) => handleUserSubmitForm(e)}
      className={styles.reviewForm}
    >
      <div className={styles.reviewForm__group}>
        <label htmlFor='name'>Имя:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.reviewForm__input}
          type='text'
          id='name'
        />
      </div>
      <div className={styles.reviewForm__group}>
        <span>Оценка:</span>
        <StarRating
          rating={rating}
          handleUserSetRating={setRating}
          sizeVariant='l'
        />
      </div>
      <div className={styles.reviewForm__group}>
        <label htmlFor='review'>Отзыв:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className={styles.reviewForm__textarea}
          id='review'
        />
      </div>
      <div className={styles.reviewForm__controls}>
        <button
          type='button'
          className={cn(styles.reviewForm__btn_clear, styles.reviewForm__btn)}
          onClick={clearForm}
        >
          Очистить
        </button>
        <button
          className={cn(styles.reviewForm__btn_submit, styles.reviewForm__btn)}
          type='submit'
        >
          Отправить
        </button>
      </div>
    </form>
  );
};
