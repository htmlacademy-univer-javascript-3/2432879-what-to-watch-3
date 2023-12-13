import Footer from '../../components/footer/Footer';
import FilmsList from '../../components/filmsList/FilmsList';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/apiActions';

function MyListPage() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  useEffect(() => {
    dispatch(fetchFavoriteFilms());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header className={'user-page__head'}>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
