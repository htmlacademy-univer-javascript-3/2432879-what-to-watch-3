import {useAppDispatch, useAppSelector} from '../hooks';
import {showMoreFilms} from '../store/action';
import {Film} from '../types/films';

type ShowMoreButtonProps = {
  films: Film[];
}

function ShowMoreButton({films}: ShowMoreButtonProps) {
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
