import {Link} from 'react-router-dom';

type FilmProps = {
  id: string;
  srcCard: string;
  filmName: string;
  onMouseOver: () => void;
}

function FilmCard({id, srcCard, filmName, onMouseOver}: FilmProps): JSX.Element {
  return (
    <article onMouseOver={onMouseOver} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={srcCard} alt={filmName} width="280" height="175"/>
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
