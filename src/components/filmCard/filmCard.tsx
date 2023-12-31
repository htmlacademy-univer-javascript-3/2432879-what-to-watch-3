import {Link, useNavigate} from 'react-router-dom';
import VideoPlayer from '../videoPlayer/videoPlayer';

type FilmProps = {
  id: string;
  previewImage: string;
  name: string;
  onMouseEnter: () => void;
  previewVideoLink: string;
  isPlay: boolean;
  selectedCard: string;
  onMouseLeave: () => void;
}

function FilmCard({id, previewImage, name, onMouseEnter, onMouseLeave, previewVideoLink, isPlay, selectedCard}: FilmProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <article onClick={() => navigate(`/films/${id}`)} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {isPlay && id === selectedCard ? <VideoPlayer previewVideoLink={previewVideoLink} poster={previewImage}/> : <img src={previewImage} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
