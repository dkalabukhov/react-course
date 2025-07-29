import { createSlice } from '@reduxjs/toolkit';

import { normalizedReviews } from '../../../constants/normalized-mock';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;

    return acc;
  }, {}),
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
    selectAverageRatingByIds: (state, ids) =>
      ids
        .map((id) => state.entities[id])
        .reduce((acc, review) => acc + review.rating, 0) / ids.length,
  },
});

export const { selectReviewById, selectAverageRatingByIds } = reviewsSlice.selectors;
