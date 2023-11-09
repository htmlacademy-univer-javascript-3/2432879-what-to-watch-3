import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsList, resetShownFilms, showMoreFilms} from './action';
import {genres} from '../mocks/genres';
import {films} from '../mocks/films';

const initialState = {
  genreActive: genres[0],
  filmsList: films,
  shownFilms: 8,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.shownFilms = 8;
      state.genreActive = action.payload;
    })
    .addCase(getFilmsList, (state) => {
      if (state.genreActive.genre === 'All genres') {
        state.filmsList = films;
      } else{
        state.filmsList = films.filter((film) => film.genre === state.genreActive.genre);
      }
    })
    .addCase(showMoreFilms, (state) => {
      state.shownFilms += 8;
    })
    .addCase(resetShownFilms, (state) => {
      state.shownFilms = 8;
    });
});

export {reducer};
