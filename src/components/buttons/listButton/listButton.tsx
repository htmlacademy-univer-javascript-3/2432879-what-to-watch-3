import {useAppSelector} from '../../../hooks';
import {useNavigate} from 'react-router-dom';
import {AppRoute} from '../../../const';

function ListButton() {
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(AppRoute.MyList)} className="btn btn--list film-card__button" type="button">
      {currentFilm.isFavorite ?
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg> :
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}

export default ListButton;
