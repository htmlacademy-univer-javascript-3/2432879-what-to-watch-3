import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../const';
import {getFilmsList} from './action';
import {Film} from '../types/films';

export const fetchFilmsListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(ApiRoute.films);
    dispatch(getFilmsList(data));
  }
);
