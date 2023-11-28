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
    name: '',
    previewImage: '',
    previewVideoLink: '',
    genre: ''
  });

  const [isPlay, setIsPlay] = useState(false);

  const onMouseEnterHandle = ({id, previewImage, name, previewVideoLink, genre}: Film) => {
    setSelectedFilm({...selectedFilm, id: id, name: name, previewImage: previewImage, previewVideoLink: previewVideoLink, genre: genre});
  };

  const onMouseLeaveEnter = () => {
    setSelectedFilm({...selectedFilm, id: '', name: '', previewImage: '', previewVideoLink: '', genre: ''});
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
      {films.slice(0, quantityFilmsList).map(({id, previewImage, name, previewVideoLink, genre}: Film) => (
        <FilmCard
          onMouseEnter={() => onMouseEnterHandle({id, name: name, previewImage: previewImage, previewVideoLink: previewVideoLink, genre: genre})}
          onMouseLeave={() => onMouseLeaveEnter()}
          key={name}
          id={id}
          name={name}
          previewImage={previewImage}
          previewVideoLink={previewVideoLink}
          isPlay={isPlay}
          selectedCard={selectedFilm.id}
        />
      ))}
    </div>
  );
}

export default FilmsList;
