import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {currentFilm} from './mocks/films';
import {user} from './mocks/user';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFavoriteFilms, fetchFilmsListAction, fetchPromoFilm} from './store/apiActions';
import {ToastContainer} from 'react-toastify';

store.dispatch(fetchFilmsListAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchPromoFilm());
store.dispatch(fetchFavoriteFilms());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App user={user} currentFilm={currentFilm}/>
    </Provider>
  </React.StrictMode>
);
