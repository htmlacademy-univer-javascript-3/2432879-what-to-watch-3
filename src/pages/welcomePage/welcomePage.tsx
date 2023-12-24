import Footer from '../../components/footer/footer';
import FilmsList from '../../components/filmsList/filmsList';
import Header from '../../components/header/header';
import FilmCardButtons from '../../components/buttons/filmCardButton/filmCardButtons';
import GenersList from '../../components/genresList/genersList';
import {useAppDispatch, useAppSelector} from '../../hooks';
import ShowMoreButton from '../../components/showMoreButton';
import {useEffect} from 'react';
import { resetShownFilms} from '../../store/action';
import {useLocation} from 'react-router-dom';
import {filmsByGenre} from '../../utils/filmsByGenre';
import Spinner from '../../components/spinner/spinner';
import {fetchCurrentFilm} from '../../store/apiActions';

function WelcomePage() {
  const films = useAppSelector((state) => state.filmsList);
  const genreActive = useAppSelector((state) => state.genre);
  const shownFilms = useAppSelector((state) => state.shownFilms);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (promoFilm.id) {
      dispatch(fetchCurrentFilm(promoFilm.id));
    }
  }, [promoFilm, dispatch]);

  useEffect(() => {
    dispatch(resetShownFilms());
  }, [dispatch, location]);

  return (
    <div>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header className={'film-card__head'}/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <FilmCardButtons/>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenersList/>

          {films ? <FilmsList quantityFilmsList={shownFilms} films={filmsByGenre(films, genreActive)}/> : <Spinner/>}

          <ShowMoreButton films={filmsByGenre(films, genreActive)}/>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default WelcomePage;
