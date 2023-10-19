import Footer from '../../components/footer/Footer';
import {AppRoute} from '../../const';
import FilmsList from '../../components/filmsList/FilmsList';
import {films} from '../../mocks/films';
import {Link} from 'react-router-dom';
import {User} from '../../types/user';

type MyListPageProps = {
  user: User;
}

function MyListPage({user}: MyListPageProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={AppRoute.Main} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{user.filmCount}</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user.avatarImg} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <Link to='/#' className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyListPage;
