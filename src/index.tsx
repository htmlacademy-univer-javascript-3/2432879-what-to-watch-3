import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {currentFilm, promoFilmInfo, films, filmInfo} from './mocks/films';
import {user} from './mocks/user';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App filmInfo={filmInfo} promoFilmInfo={promoFilmInfo} films={films} user={user} currentFilm={currentFilm}/>
    </Provider>
  </React.StrictMode>
);
