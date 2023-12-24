import {Film} from '../../types/films';
import FilmCard from '../filmCard/filmCard';
import {useEffect, useRef, useState} from 'react';

type FilmsListProps = {
  films: Film[];
  quantityFilmsList?: number;
}

function FilmsList({films, quantityFilmsList}: FilmsListProps) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [selectedFilmID, setSelectedFilmID] = useState('');

  const [isPlay, setIsPlay] = useState(false);

  const onMouseEnterHandle = ({id}: Film) => {
    setSelectedFilmID(id);
  };

  const onMouseLeaveEnter = () => {
    setSelectedFilmID('');
    setIsPlay(false);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIsPlay(true);
    }, 1000);
    return () => clearTimeout(timeoutRef.current as NodeJS.Timeout);
  }, [selectedFilmID]);

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
          selectedCard={selectedFilmID}
        />
      ))}
    </div>
  );
}

export default FilmsList;
