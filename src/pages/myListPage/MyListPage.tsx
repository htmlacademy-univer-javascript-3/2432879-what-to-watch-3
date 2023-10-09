import {FilmProps} from '../../components/filmCard/FilmCard';
import Catalog from '../../components/catalog/Catalog';
import Footer from '../../components/footer/Footer';

const filmCardInfo: FilmProps[] = [
  {srcCard: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', filmName: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {srcCard: 'img/bohemian-rhapsody.jpg', filmName: 'Bohemian Rhapsody'},
  {srcCard: 'img/macbeth.jpg', filmName: 'Macbeth'},
  {srcCard: 'img/aviator.jpg', filmName: 'Aviator'},
  {srcCard: 'img/we-need-to-talk-about-kevin.jpg', filmName: 'We need to talk about Kevin'},
  {srcCard: 'img/what-we-do-in-the-shadows.jpg', filmName: 'What we do in the shadows'},
  {srcCard: 'img/revenant.jpg', filmName: 'Revenant'},
  {srcCard: 'img/johnny-english.jpg', filmName: 'Johnny English'},
  {srcCard: 'img/shutter-island.jpg', filmName: 'Shutter Island'},
];

function MyListPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="markup/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <Catalog title="Catalog" filmCardInfo={filmCardInfo} extraTitleStyle="visually-hidden"/>
      <Footer/>
    </div>
  );
}

export default MyListPage;
