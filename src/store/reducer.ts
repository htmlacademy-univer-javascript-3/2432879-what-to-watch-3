import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsList, resetShownFilms, showMoreFilms} from './action';
import {Film} from '../types/films';

const initialState = {
  genre: 'All genres',
  filmsList: <Film[]>[],
  shownFilms: 8,
  filmsListByGenre: <Film[]>[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.shownFilms = 8;
      state.genre = action.payload;
    })
    .addCase(getFilmsList, (state, action) => {
      state.filmsList = action.payload;
    })
    // .addCase(getFilmsListByGenre, (state) => {
    //   if (state.genre === 'All genres') {
    //     state.filmsListByGenre = state.filmsList;
    //   } else{
    //     state.filmsListByGenre.filter((film) => film.genre === state.genre);
    //   }
    //   console.log(state.filmsListByGenre);
    // })
    .addCase(showMoreFilms, (state) => {
      state.shownFilms += 8;
    })
    .addCase(resetShownFilms, (state) => {
      state.shownFilms = 8;
    });
});

export {reducer};
