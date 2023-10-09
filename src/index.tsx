import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const FilmInfo = {
  promoFilmName: 'The Grand Budapest Hotel',
  promoFilmGenre: 'Drama',
  promoFilmDate: '2014',
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoFilmName={FilmInfo.promoFilmName} promoFilmGenre={FilmInfo.promoFilmGenre} promoFilmDate={FilmInfo.promoFilmDate}/>
  </React.StrictMode>
);
