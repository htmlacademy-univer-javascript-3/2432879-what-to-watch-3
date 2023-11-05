import {ReactNode} from 'react';
import PlayButton from '../playButton/playButton';
import ListButton from '../listButton/listButton';

type FilmCardButtonProps = {
  children?: ReactNode;
}

function FilmCardButtons({children}: FilmCardButtonProps) {
  return (
    <div className="film-card__buttons">
      <PlayButton/>
      <ListButton/>
      {children}
    </div>
  );
}

export default FilmCardButtons;
