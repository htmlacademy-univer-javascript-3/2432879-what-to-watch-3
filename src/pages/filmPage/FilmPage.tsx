import Footer from '../../components/footer/Footer';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import FilmsList from '../../components/filmsList/FilmsList';
import {User} from '../../types/user';
import Header from '../../components/header/header';
import FilmCardButtons from '../../components/buttons/filmCardButton/filmCardButtons';
import {Film, FilmInfo} from '../../types/films';
import Tabs from "../../components/tabs/tabs";

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

            <Tabs filmInfo={filmInfo}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList quantityFilmsList={4} films={films}/>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default FilmPage;
