import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import CommentSendForm from '../../components/commentSendForm/commentSendForm';
import {User} from '../../types/user';
import {Currentfilm} from '../../types/films';
import Header from '../../components/header/header';

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

        <Header user={user}>
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
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.backgroundPoster} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <CommentSendForm/>
    </section>
  );
}

export default ReviewPage;
