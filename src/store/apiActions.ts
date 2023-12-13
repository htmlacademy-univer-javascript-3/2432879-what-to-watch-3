import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  addComment,
  getComments,
  getCurrentFilm, getFavoriteFilms,
  getFilmsList,
  getPromoFilm,
  getSimilarFilmsList, getUserProfile,
  redirectRoute,
  requireAuthorization
} from './action';
import {FavoriteFilmData, Film, FilmInfo, PromoFilm} from '../types/films';
import {Comment} from '../types/comments';
import {AuthData} from '../types/authData';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/userData';
import {PostCommentData} from '../types/PostCommentData';

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

export const changeFavoriteFilm = createAsyncThunk<void, FavoriteFilmData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/changeFavoriteFilm',
  async({filmId: filmId, isFavorite: isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<FilmInfo>(`${APIRoute.Favorite}/${filmId}/${isFavorite}`);
    dispatch(getCurrentFilm(data));
  }
);

export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async(filmId, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(getComments(data));
  }
);

export const postComment = createAsyncThunk<void, PostCommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postComment',
  async({filmId: filmId, comment: comment, rating: rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(`${APIRoute.Comments}/${filmId}`, {comment, rating});
    dispatch(addComment(data));
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
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(getUserProfile(data));
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
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(getUserProfile(data));
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


