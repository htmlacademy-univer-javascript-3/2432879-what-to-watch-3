import {Film} from '../../types/films';
import FilmCard from '../filmCard/FilmCard';
import {useEffect, useRef, useState} from 'react';

type FilmsListProps = {
  films: Film[];
  quantityFilmsList?: number;
}

function FilmsList({films, quantityFilmsList}: FilmsListProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedFilm, setSelectedFilm] = useState({
    id: '',
    srcCard: '',
    filmName: '',
    previewVideoLink: '',
  });

  const [isPlay, setIsPlay] = useState(false);

  const onMouseEnterHandle = ({id, srcCard, filmName, previewVideoLink}: Film) => {
    setSelectedFilm({...selectedFilm, id: id, srcCard: srcCard, filmName: filmName, previewVideoLink: previewVideoLink});
  };

  const onMouseLeaveEnter = () => {
    setSelectedFilm({...selectedFilm, id: '', srcCard: '', filmName: '', previewVideoLink: ''});
    setIsPlay(false);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsPlay(true);
    }, 1000);
    return () => clearTimeout(timeoutRef.current as NodeJS.Timeout);
  }, [selectedFilm]);

  return (
    <div className="catalog__films-list">
      {films.slice(0, quantityFilmsList).map(({id, srcCard, filmName, previewVideoLink}: Film) => (
        <FilmCard
          onMouseEnter={() => onMouseEnterHandle({id, srcCard, filmName, previewVideoLink})}
          onMouseLeave={() => onMouseLeaveEnter()}
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
