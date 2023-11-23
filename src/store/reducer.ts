import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilmsList, requireAuthorization, resetShownFilms, showMoreFilms} from './action';
import {Film} from '../types/films';
import {AuthorizationStatus} from '../const';

type InitialState = {
  genre: string;
  filmsList: Film[];
  shownFilms: number;
  filmsListByGenre: Film[];
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  shownFilms: 8,
  filmsListByGenre: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(showMoreFilms, (state) => {
      state.shownFilms += 8;
    })
    .addCase(resetShownFilms, (state) => {
      state.shownFilms = 8;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
