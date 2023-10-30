import {Link} from 'react-router-dom';
import VideoPlayer from '../videoPlayer/videoPlayer';

type FilmProps = {
  id: string;
  srcCard: string;
  filmName: string;
  onMouseEnter: () => void;
  previewVideoLink: string;
  isPlay: boolean;
  selectedCard: string;
  onMouseLeave: () => void;
}

function FilmCard({id, srcCard, filmName, onMouseEnter, onMouseLeave, previewVideoLink, isPlay, selectedCard}: FilmProps): JSX.Element {
  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {isPlay && id === selectedCard ? <VideoPlayer previewVideoLink={previewVideoLink} poster={srcCard}/> : <img src={srcCard} alt={filmName} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">
          {filmName}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
