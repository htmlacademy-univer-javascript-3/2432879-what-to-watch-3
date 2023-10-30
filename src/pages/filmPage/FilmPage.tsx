import Footer from '../../components/footer/Footer';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import FilmsList from '../../components/filmsList/FilmsList';
import {User} from '../../types/user';
import Header from '../../components/header/header';
import FilmCardButtons from '../../components/buttons/filmCardButton/filmCardButtons';
import {Film, FilmInfo} from '../../types/films';

type FilmPageProps = {
  filmInfo: FilmInfo;
  user: User;
  films: Film[];
}

function FilmPage({films, user, filmInfo}: FilmPageProps) {
  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmInfo.backgroundImage} alt={filmInfo.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header user={user} className={'film-card__head'}/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmInfo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmInfo.genre}</span>
                <span className="film-card__year">{filmInfo.released}</span>
              </p>

              <FilmCardButtons>
                <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
              </FilmCardButtons>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmInfo.posterImage} alt={`${filmInfo.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <Link to="#" className="film-nav__link">Overview</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Details</Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to="#" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>

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
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films}/>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default FilmPage;
