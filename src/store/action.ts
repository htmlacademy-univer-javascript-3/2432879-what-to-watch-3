import {createAction} from '@reduxjs/toolkit';
import {Film} from '../types/films';

export const changeGenre = createAction<string>('filmsList/changeGenre');
export const getFilmsList = createAction<Film[]>('filmsList/getFilmsList');
// export const getFilmsListByGenre = createAction('filmsList/getFilmsListByGenre');
export const showMoreFilms = createAction('filmsList/showMoreFilms');
export const resetShownFilms = createAction('filmsList/resetShownFilms');
