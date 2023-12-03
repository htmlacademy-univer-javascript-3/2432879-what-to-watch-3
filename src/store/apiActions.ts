import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  getCurrentFilm, getFavoriteFilms,
  getFilmsList,
  getPromoFilm,
  getSimilarFilmsList,
  redirectRoute,
  requireAuthorization
} from './action';
import {Film, FilmInfo, PromoFilm} from '../types/films';
import {AuthData} from '../types/authData';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/userData';

export const fetchFilmsListAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(getFilmsList(data));
  }
);

export const fetchCurrentFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentFilm',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmInfo>(`${APIRoute.Films}/${filmId}`);
    dispatch(getCurrentFilm(data));
  }
);
export const fetchSimilarFilmsList = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilmsList',
  async (filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${filmId}/similar`);
    dispatch(getSimilarFilmsList(data));
  }
);

export const fetchPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromoFilm',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(APIRoute.Promo);
    dispatch(getPromoFilm(data));
  }
);
export const fetchFavoriteFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(getFavoriteFilms(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectRoute(AppRoute.SignIn));
  }
);


