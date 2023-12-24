import {useAppDispatch, useAppSelector} from '../../../hooks';
import {useEffect, useState} from 'react';
import {changeFavoriteFilm, fetchFavoriteFilms} from '../../../store/apiActions';
import {useParams} from 'react-router-dom';
import {AuthorizationStatus} from '../../../const';

function ListButton() {
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const currentAuthorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const [added, setAdded] = useState(currentFilm.isFavorite);

  useEffect(() => {
    setAdded(currentFilm.isFavorite);
    if (currentAuthorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [currentFilm, promoFilm, dispatch, currentAuthorizationStatus]);

  const changeIsFavorite = () => {
    dispatch(changeFavoriteFilm({filmId: id ? id : promoFilm.id, isFavorite: added ? '0' : '1'}));
  };

  return (
    <button onClick={changeIsFavorite} className="btn btn--list film-card__button" type="button">
      {added ?
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
