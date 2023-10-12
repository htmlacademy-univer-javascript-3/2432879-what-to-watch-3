import WelcomePage from '../../pages/welcomePage/WelcomePage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FilmPage from '../../pages/filmPage/FilmPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import Player from '../../pages/player/Player';
import ReviewPage from '../../pages/reviewPage/reviewPage';
import Page404 from '../../pages/page404/page404';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../privateRoute/privateRoute';
import MyListPage from '../../pages/myListPage/MyListPage';

type AppProps = {
  promoFilmName: string;
  promoFilmGenre: string;
  promoFilmDate: string;
}

function App({promoFilmName, promoFilmGenre, promoFilmDate}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<WelcomePage promoFilmName={promoFilmName} promoFilmGenre={promoFilmGenre} promoFilmDate={promoFilmDate}/>}/>
        <Route path={AppRoute.SignIn} element={<LoginPage/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage/>}/>
        <Route path={AppRoute.AddReview} element={<ReviewPage/>}/>
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
