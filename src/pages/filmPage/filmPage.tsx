import Footer from '../../components/footer/footer';
import {Link, useParams} from 'react-router-dom';
import FilmsList from '../../components/filmsList/filmsList';
import Header from '../../components/header/header';
import FilmCardButtons from '../../components/buttons/filmCardButton/filmCardButtons';
import Tabs from '../../components/tabs/tabs';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCurrentFilm, fetchSimilarFilmsList} from '../../store/apiActions';
import {useEffect} from 'react';

function FilmPage() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const currentFilmInfo = useAppSelector((state) => state.currentFilm);
  const similarFilmsList = useAppSelector((state) => state.similarFilmsList);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentFilm(id));
      dispatch(fetchSimilarFilmsList(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilmInfo.backgroundImage} alt={currentFilmInfo.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header className={'film-card__head'}/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilmInfo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilmInfo.genre}</span>
                <span className="film-card__year">{currentFilmInfo.released}</span>
              </p>

              <FilmCardButtons>
                <Link to={`/films/${currentFilmInfo.id}/review`} className="btn film-card__button">Add review</Link>
              </FilmCardButtons>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilmInfo.posterImage} alt={`${currentFilmInfo.name} poster`} width="218" height="327"/>
            </div>

            <Tabs/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList quantityFilmsList={4} films={similarFilmsList}/>
        </section>

        <Footer/>
      </div>
    </div>
  );
}

export default FilmPage;
