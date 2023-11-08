import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsList} from './action';
import {genres} from '../mocks/genres';
import {films} from '../mocks/films';

const initialState = {
  genreActive: genres[0],
  filmList: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genreActive = action.payload;
    })
    .addCase(getFilmsList, (state) => {
      state.filmList = films.filter((film) => film.genre === state.genreActive.genre);
    });
});

export {reducer};
