import {createAction} from '@reduxjs/toolkit';
import {Film, FilmInfo, PromoFilm} from '../types/films';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenre = createAction<string>('filmsList/changeGenre');
export const getFilmsList = createAction<Film[]>('filmsList/getFilmsList');
export const showMoreFilms = createAction('filmsList/showMoreFilms');
export const resetShownFilms = createAction('filmsList/resetShownFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectRoute = createAction<AppRoute>('routes/redirectRoute');
export const getCurrentFilm = createAction<FilmInfo>('films/getCurrentFilm');
export const getSimilarFilmsList = createAction<Film[]>('films/getSimilarFilmsList');
export const getPromoFilm = createAction<PromoFilm>('films/getPromoFilm');
export const getFavoriteFilms = createAction<Film[]>('films/getFavoriteFilms');
export const addFavoriteFilm = createAction<string>('films/addFavoriteFilm');
// export const saveIdCurrentFilm = createAction<string>('films/saveIdCurrentFilm');
