import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/films';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenre = createAction<string>('filmsList/changeGenre');
export const getFilmsList = createAction<Film[]>('filmsList/getFilmsList');
export const showMoreFilms = createAction('filmsList/showMoreFilms');
export const resetShownFilms = createAction('filmsList/resetShownFilms');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectRoute = createAction<AppRoute>('routes/redirectRoute');
