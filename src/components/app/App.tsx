import WelcomePage from '../../pages/welcomePage/WelcomePage';
import {Route, Routes} from 'react-router-dom';
import FilmPage from '../../pages/filmPage/FilmPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import Player from '../../pages/player/Player';
import ReviewPage from '../../pages/reviewPage/reviewPage';
import Page404 from '../../pages/page404/page404';
import {AppRoute} from '../../const';
import PrivateRoute from '../privateRoute/privateRoute';
import MyListPage from '../../pages/myListPage/MyListPage';
import {Currentfilm, Film, FilmInfo, PromoFilm} from '../../types/films';
import {User} from '../../types/user';
import HistoryRouter from '../historyRoute/historyRouter';
import browserHistory from '../../browserHistory';

type AppProps = {
  filmInfo: FilmInfo;
  promoFilmInfo: PromoFilm;
  films: Film[];
  user: User;
  currentFilm: Currentfilm;
}

function App({filmInfo, promoFilmInfo, films, user, currentFilm}: AppProps) {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<WelcomePage promoFilmInfo={promoFilmInfo} user={user}/>}/>
        <Route path={AppRoute.SignIn} element={<LoginPage/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyListPage user={user}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage films={films} user={user} filmInfo={filmInfo}/>}/>
        <Route path={AppRoute.AddReview} element={<ReviewPage user={user} currentFilm={currentFilm}/>}/>
        <Route path={AppRoute.Player} element={<Player currentFilm={currentFilm}/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;