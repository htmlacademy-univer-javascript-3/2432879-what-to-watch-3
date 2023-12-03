import Footer from '../../components/footer/Footer';
import FilmsList from '../../components/filmsList/FilmsList';
import {User} from '../../types/user';
import Header from '../../components/header/header';
import {useAppSelector} from '../../hooks';

type MyListPageProps = {
  user: User;
}

function MyListPage({user}: MyListPageProps) {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return (
    <div className="user-page">
      <Header user={user} className={'user-page__head'}>
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
