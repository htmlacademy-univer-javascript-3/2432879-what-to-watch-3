import {useAppDispatch, useAppSelector} from '../hooks';
import {showMoreFilms} from '../store/action';

function ShowMoreButton() {
  const films = useAppSelector((state) => state.filmsList);
  const shownFilms = useAppSelector((state) => state.shownFilms);
  const dispatch = useAppDispatch();
  const showMoreFilmsHandle = () => {
    dispatch(showMoreFilms());
  };

  return (
    <div className="catalog__more">
      {shownFilms < films.length && <button onClick={() => showMoreFilmsHandle()} className="catalog__button" type="button">Show more</button>}
    </div>
  );
}

export default ShowMoreButton;
