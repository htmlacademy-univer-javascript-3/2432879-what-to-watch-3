import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import cn from 'classnames';
import {changeGenre} from '../../store/action';
import {useMemo} from 'react';

function GenersList() {
  const genreActive = useAppSelector((state) => state.genre);
  const filmsList = useAppSelector((state) => state.filmsList);
  const dispatch = useAppDispatch();
  const genres = ['All genres'];

  useMemo(() => filmsList.forEach(({genre}) => {
    if (!genres.includes(genre)){
      genres.push(genre);
    }
  }), [filmsList]);

  const genreClickHandle = (genre: string) => {
    dispatch(changeGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li onClick={() => genreClickHandle(genre)} key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': genre === genreActive})}>
          <Link to='#' className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenersList;
