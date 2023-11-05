import {Film} from '../../types/films';
import FilmCard from '../filmCard/FilmCard';
import {useEffect, useState} from 'react';
import * as timers from "timers";

type FilmsListProps = {
  films: Film[];
}

function FilmsList({films}: FilmsListProps) {
  const [selectedFilm, setSelectedFilm] = useState({
    id: '',
    srcCard: '',
    filmName: '',
    previewVideoLink: '',
  });

  const [isPlay, setIsPlay] = useState(false);

  const selectedFilmHandle = ({id, srcCard, filmName, previewVideoLink}: Film) => {
    setSelectedFilm({...selectedFilm, id: id, srcCard: srcCard, filmName: filmName, previewVideoLink: previewVideoLink});
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsPlay(true), 1000);
    return clearTimeout(timeout);
  }, [selectedFilm]);

  return (
    <div className="catalog__films-list">
      {films.map(({id, srcCard, filmName, previewVideoLink}: Film) => (
        <FilmCard
          onMouseEnter={() => selectedFilmHandle({id, srcCard, filmName, previewVideoLink})}
          onMouseLeave={() => setIsPlay(false)}
          key={filmName}
          id={id}
          srcCard={srcCard}
          filmName={filmName}
          previewVideoLink={previewVideoLink}
          isPlay={isPlay}
          selectedCard={selectedFilm.id}
        />
      ))}
    </div>
  );
}

export default FilmsList;
