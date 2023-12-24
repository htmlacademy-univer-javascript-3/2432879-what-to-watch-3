import {FilmInfo} from '../../types/films';

type OverviewProps = {
  filmInfo: FilmInfo;
}

function Overview({filmInfo}: OverviewProps) {
  let ratingLevel;

  if (filmInfo.rating < 3) {
    ratingLevel = 'Bad';
  } else if (filmInfo.rating < 5) {
    ratingLevel = 'Normal';
  } else if (filmInfo.rating < 8) {
    ratingLevel = 'Good';
  } else if (filmInfo.rating < 10) {
    ratingLevel = 'Very good';
  } else {
    ratingLevel = 'Awesome';
  }

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmInfo.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{filmInfo.scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        {filmInfo.description}

        <p className="film-card__director"><strong>Director: {filmInfo.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {filmInfo.starring && filmInfo.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default Overview;
