import Footer from '../../components/footer/footer';
import FilmsList from '../../components/filmsList/filmsList';
import Header from '../../components/header/header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {fetchFavoriteFilms} from '../../store/apiActions';
import {AuthorizationStatus} from '../../const';

function MyListPage() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);
  const currentAuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {
    if (currentAuthorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteFilms());
    }
  }, [dispatch, currentAuthorizationStatus]);

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
