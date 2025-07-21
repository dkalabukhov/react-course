import cn from 'classnames';

import { useForm } from './use-form';
import { StarRating } from '../star-rating/StarRating';
import { useTheme } from '../theme-context/use-theme';

import styles from './ReviewForm.module.scss';

export const ReviewForm = () => {
  const { theme } = useTheme();

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
          className={cn(styles.reviewForm__input, {
            [styles.reviewForm__input_dark]: theme === 'dark',
          })}
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
          className={cn(styles.reviewForm__textarea, {
            [styles.reviewForm__textarea_dark]: theme === 'dark',
          })}
          id='review'
        />
      </div>
      <div className={styles.reviewForm__controls}>
        <button
          type='button'
          className={cn(styles.reviewForm__btn_clear, styles.reviewForm__btn, {
            [styles.reviewForm__btn_clear_dark]: theme === 'dark',
          })}
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
