import { useSelector } from "react-redux";

import { Review } from "./Review";
import { selectReviewById } from "../../redux/entities/reviews/reviewsSlice";
import { selectUserById } from "../../redux/entities/users/usersSlice";

export const ReviewContainer = ({ reviewId }) => {
  const review = useSelector((state) => selectReviewById(state, reviewId));
  const user = useSelector((state) => selectUserById(state, review.userId));

  return (
    <Review review={review} user={user} />
  )
};
