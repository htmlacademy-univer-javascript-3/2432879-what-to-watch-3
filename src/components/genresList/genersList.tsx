import {genres} from '../../mocks/genres';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import cn from 'classnames';
import {changeGenre, getFilmsList} from '../../store/action';
import {Genre} from '../../types/genres';

function GenersList() {
  const genreActive = useAppSelector((state) => state.genreActive);
  const dispatch = useAppDispatch();

  const genreClickHandle = ({name, genre}: Genre) => {
    dispatch(changeGenre({name, genre}));
    dispatch(getFilmsList());
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map(({name, genre}: Genre) => (
        <li onClick={() => genreClickHandle({name, genre})} key={name} className={cn('catalog__genres-item', {'catalog__genres-item--active': name === genreActive.name})}>
          <Link to='#' className="catalog__genres-link">{name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenersList;
