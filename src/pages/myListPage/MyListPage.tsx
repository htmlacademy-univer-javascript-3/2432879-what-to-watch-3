import Footer from '../../components/footer/Footer';
import FilmsList from '../../components/filmsList/FilmsList';
import {films} from '../../mocks/films';
import {User} from '../../types/user';
import Header from '../../components/header/header';

type MyListPageProps = {
  user: User;
}

function MyListPage({user}: MyListPageProps) {
  return (
    <div className="user-page">
      <Header user={user} className={'user-page__head'}>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{user.filmCount}</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
