import {createAction} from '@reduxjs/toolkit';
import {Genre} from '../types/genres';

export const changeGenre = createAction<Genre>('filmsList/changeGenre');
export const getFilmsList = createAction('filmsList/getFilmsList');
export const showMoreFilms = createAction('filmsList/showMoreFilms');
export const resetShownFilms = createAction('filmsList/resetShownFilms');
