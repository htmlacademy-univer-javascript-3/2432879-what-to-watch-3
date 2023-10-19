import {ChangeEvent, useState} from 'react';

const rating = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;

function CommentSendForm() {
  const [review, setReview] = useState({
    stars: '',
    comment: ''
  });
  const ratingStarsHandle = ({target}: ChangeEvent<HTMLInputElement>) => {
    setReview({...review, stars: target.value});
  };
  const textReviewHandle = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({...review, comment: target.value});
  };
  return (
    <div className="add-review">
      <form className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              rating.map((id) => (
                <>
                  <input onChange={ratingStarsHandle} className="rating__input" id={`star-${id}`} type="radio" name="rating" value={id}/>
                  <label className="rating__label" htmlFor={`star-${id}`}>Rating {id}</label>
                </>
              ))
            }
          </div>
        </div>
        <div className="add-review__text">
          <textarea onChange={textReviewHandle} value={review.comment} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text">{review.comment}</textarea>

          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommentSendForm;
