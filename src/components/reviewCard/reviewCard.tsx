import {Comment} from '../../types/comments';

type ReviewCardProps = {
  reviewData: Comment;
}

function ReviewCard({reviewData}: ReviewCardProps) {
  const date = new Date(Date.parse(reviewData.date));
  const month = date.toLocaleString('en', { month: 'long' });
  const day = date.getUTCDate();
  const year = date.getFullYear();

  const dateTime = reviewData.date.split('T')[0];

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewData.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewData.user}</cite>
          <time className="review__date" dateTime={dateTime}>{`${month} ${day}, ${year}`}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewData.rating}</div>
    </div>
  );
}

export default ReviewCard;
