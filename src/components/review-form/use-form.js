import { useReducer } from 'react';

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

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setName = (name) => {
    dispatch({ type: SET_NAME_ACTION, payload: name });
  };

  const setRating = (rating) => {
    dispatch({ type: SET_RATING_ACTION, payload: rating });
  };

  const setReview = (review) => {
    dispatch({ type: SET_REVIEW_ACTION, payload: review });
  };

  const clearForm = () => {
    dispatch({ type: CLEAR_FORM_ACTION });
  };

  return {
    form,
    setName,
    setRating,
    setReview,
    clearForm,
  };
};
