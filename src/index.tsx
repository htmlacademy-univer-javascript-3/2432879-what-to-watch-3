import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {currentFilm, FilmInfoMain, films} from './mocks/films';
import {user} from './mocks/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoFilmName={FilmInfoMain.promoFilmName} promoFilmGenre={FilmInfoMain.promoFilmGenre} promoFilmDate={FilmInfoMain.promoFilmDate} films={films} user={user} currentFilm={currentFilm}/>
  </React.StrictMode>
);
