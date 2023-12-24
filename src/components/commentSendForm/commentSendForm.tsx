import {ChangeEvent, useState} from 'react';
import {postComment} from '../../store/apiActions';
import {useAppDispatch} from '../../hooks';
import {useNavigate, useParams} from 'react-router-dom';

const rating = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;

function CommentSendForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {id} = useParams();
  const [review, setReview] = useState({
    filmId: id ? id : '',
    rating: 0,
    comment: ''
  });
  const ratingStarsHandle = ({target}: ChangeEvent<HTMLInputElement>) => {
    setReview({...review, rating: Number(target.value)});
  };
  const textReviewHandle = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({...review, comment: target.value});
  };

  const sendReviewHandle = () => {
    dispatch(postComment(review));
    navigate(`/films/${id ? id : ''}`);
  };

  const checkFillingFieldsHandle = () => review.rating === 0 || review.comment === '' || review.comment.length < 50;

  return (
    <div className="add-review">
      <form className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              rating.map((starId) => (
                <>
                  <input onChange={ratingStarsHandle} className="rating__input" id={`star-${starId}`} type="radio" name="rating" value={starId}/>
                  <label className="rating__label" htmlFor={`star-${starId}`}>Rating {starId}</label>
                </>
              ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={textReviewHandle} value={review.comment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">{review.comment}</textarea>

          <div className="add-review__submit">
            <button onClick={sendReviewHandle} disabled={checkFillingFieldsHandle()} className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentSendForm;
