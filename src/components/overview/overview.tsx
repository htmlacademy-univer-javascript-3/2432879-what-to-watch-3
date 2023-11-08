import {FilmInfo} from '../../types/films';

type OverviewProps = {
  filmInfo: FilmInfo;
}

function Overview({filmInfo}: OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmInfo.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{filmInfo.scoresCount}</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.
        </p>

        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying
          the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies
          mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
          murder.
        </p>

        <p className="film-card__director"><strong>Director: {filmInfo.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {filmInfo.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default Overview;
