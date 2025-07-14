import cn from 'classnames';
import { StarRating } from '../star-rating/StarRating';
import { useReducer } from 'react';

import styles from './ReviewForm.module.css';

const INITIAL_STATE = {
  name: '',
  rating: 0,
  review: '',
};

const SET_NAME_ACTION = 'SET_NAME_ACTION';
const SET_RATING_ACTION = 'SET_RATING_ACTION';
const SET_REVIEW_ACTION = 'SET_REVIEW_ACTION';
const CLEAR_FORM_ACTION = 'CLEAR_FORM_ACTION';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case SET_REVIEW_ACTION:
      return { ...state, review: payload };
    case CLEAR_FORM_ACTION:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleUserSubmitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleUserSetRating = (rating) => {
    dispatch({ type: SET_RATING_ACTION, payload: rating });
  };

  const { name, rating, review } = form;

  return (
    <form
      onSubmit={(e) => handleUserSubmitForm(e)}
      className={styles.reviewForm}
    >
      <div className={styles.reviewForm__group}>
        <label htmlFor='name'>Имя:</label>
        <input
          value={name}
          onChange={(e) =>
            dispatch({ type: SET_NAME_ACTION, payload: e.target.value })
          }
          className={styles.reviewForm__input}
          type='text'
          id='name'
        />
      </div>
      <div className={styles.reviewForm__group}>
        <span>Оценка:</span>
        <StarRating
          rating={rating}
          handleUserSetRating={handleUserSetRating}
        />
      </div>
      <div className={styles.reviewForm__group}>
        <label htmlFor='review'>Отзыв:</label>
        <textarea
          value={review}
          onChange={(e) =>
            dispatch({ type: SET_REVIEW_ACTION, payload: e.target.value })
          }
          className={styles.reviewForm__textarea}
          id='review'
        />
      </div>
      <div className={styles.reviewForm__controls}>
        <button
          type='button'
          className={cn(styles.reviewForm__btn_clear, styles.reviewForm__btn)}
          onClick={() => dispatch({ type: CLEAR_FORM_ACTION })}
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
