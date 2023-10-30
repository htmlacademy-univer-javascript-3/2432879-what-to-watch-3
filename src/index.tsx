import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {currentFilm, promoFilmInfo, films, filmInfo} from './mocks/films';
import {user} from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App filmInfo={filmInfo} promoFilmInfo={promoFilmInfo} films={films} user={user} currentFilm={currentFilm}/>
  </React.StrictMode>
);
