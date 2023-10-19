import {Film} from '../../types/films';
import FilmCard from '../filmCard/FilmCard';
import {useState} from 'react';

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps) {
  const [selectedFilm, setSelectedFilm] = useState({
    id: '',
    srcCard: '',
    filmName: '',
  });

  const selectedFilmHandle = ({id, srcCard, filmName}: Film) => {
    setSelectedFilm({...selectedFilm, id: id, srcCard: srcCard, filmName: filmName});
  };

  return (
    <div className="catalog__films-list">
      {films.map(({id, srcCard, filmName}: Film) => (
        <FilmCard onMouseOver={() => selectedFilmHandle({id, srcCard, filmName})} key={filmName} id={id} srcCard={srcCard} filmName={filmName}/>
      ))}
    </div>
  );
}

export default FilmsList;
