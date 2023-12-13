import {useAppDispatch, useAppSelector} from '../../hooks';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {fetchComments} from '../../store/apiActions';
import ReviewCard from '../reviewCard/reviewCard';
import {Comment} from '../../types/comments';

function Reviews() {
  const comments = useAppSelector((state) => state.comments);
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchComments(id));
    }
  }, [dispatch, id]);

  const leftColumn = comments.slice(0, Math.ceil(comments.length / 2));
  const rightColumn = comments.slice(Math.ceil(comments.length / 2), comments.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {leftColumn.map((item: Comment) => (
          <ReviewCard key={item.id} reviewData={item}/>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {rightColumn.map((item: Comment) => (
          <ReviewCard key={item.id} reviewData={item}/>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
