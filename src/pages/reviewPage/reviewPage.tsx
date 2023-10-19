import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import CommentSendForm from '../../components/commentSendForm/commentSendForm';
import {User} from '../../types/user';
import {Currentfilm} from '../../types/films';

type ReviewPageProps = {
  user: User;
  currentFilm: Currentfilm;
}

function ReviewPage({user, currentFilm}: ReviewPageProps) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.image} alt={currentFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={user.avatarImg} alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to="#" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.backgroundPoster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <CommentSendForm/>
    </section>
  );
}

export default ReviewPage;
