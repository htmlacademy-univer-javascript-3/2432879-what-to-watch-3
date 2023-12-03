import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getCurrentFilm, getFavoriteFilms,
  getFilmsList, getPromoFilm, getSimilarFilmsList,
  requireAuthorization,
  resetShownFilms,
  showMoreFilms
} from './action';
import {Film, FilmInfo, PromoFilm} from '../types/films';
import {AuthorizationStatus} from '../const';

type InitialState = {
  genre: string;
  filmsList: Film[];
  shownFilms: number;
  filmsListByGenre: Film[];
  authorizationStatus: AuthorizationStatus;
  currentFilm: FilmInfo;
  similarFilmsList: Film[];
  promoFilm: PromoFilm;
  favoriteFilms: Film[];
}

const initialState: InitialState = {
  genre: 'All genres',
  filmsList: [],
  shownFilms: 8,
  filmsListByGenre: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  currentFilm: <FilmInfo>{},
  similarFilmsList: [],
  promoFilm: <PromoFilm>{},
  favoriteFilms: [],
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
    })
    .addCase(getCurrentFilm,(state, action) => {
      state.currentFilm = action.payload;
    })
    .addCase(getSimilarFilmsList, (state, action) => {
      state.similarFilmsList = action.payload;
    })
    .addCase(getPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(getFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});

export {reducer};
