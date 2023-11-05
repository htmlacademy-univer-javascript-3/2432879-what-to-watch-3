import {genres} from '../../mocks/genres';
import {Genre} from '../../types/genres';
import {Link} from 'react-router-dom';

function GenersList() {
  return (
    <ul className="catalog__genres-list">
      {genres.map(({name, link}: Genre) => (
        <li key={name} className='catalog__genres-item'>
          <Link to={link} className="catalog__genres-link">{name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenersList;
