import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../../hooks';

function PlayButton() {
  const navigate = useNavigate();
  const promoFilmInfo = useAppSelector((state) => state.promoFilm);
  const {id} = useParams();

  return (
    <button onClick={() => id ? navigate(`/player/${id}`) : navigate(`/player/${promoFilmInfo.id}`)} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
