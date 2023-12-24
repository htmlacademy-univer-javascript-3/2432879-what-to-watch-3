import WelcomePage from '../../pages/welcomePage/welcomePage';
import {Route, Routes} from 'react-router-dom';
import FilmPage from '../../pages/filmPage/filmPage';
import LoginPage from '../../pages/loginPage/loginPage';
import Player from '../../pages/player/player';
import ReviewPage from '../../pages/reviewPage/reviewPage';
import Page404 from '../../pages/page404/page404';
import {AppRoute} from '../../const';
import PrivateRoute from '../privateRoute/privateRoute';
import MyListPage from '../../pages/myListPage/myListPage';
import HistoryRouter from '../historyRoute/historyRouter';
import browserHistory from '../../browserHistory';

function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<WelcomePage/>}/>
        <Route path={AppRoute.SignIn} element={<LoginPage/>}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute>
            <MyListPage/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Film} element={<FilmPage/>}/>
        <Route path={AppRoute.AddReview} element={
          <PrivateRoute>
            <ReviewPage/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Player} element={<Player/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
