import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {currentFilm, promoFilmInfo, films, filmInfo} from './mocks/films';
import {user} from './mocks/user';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFilmsListAction} from './store/apiActions';
import {ToastContainer} from 'react-toastify';

store.dispatch(fetchFilmsListAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App filmInfo={filmInfo} promoFilmInfo={promoFilmInfo} films={films} user={user} currentFilm={currentFilm}/>
    </Provider>
  </React.StrictMode>
);
