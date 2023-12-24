import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {dropToken, getToken} from './token';
import {StatusCodes} from 'http-status-codes';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const shouldUnauthorizedError = () => StatusCodes.UNAUTHORIZED;

const BACKEND_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        if (detailMessage.message === 'Header Token is not correct') {
          toast.warn('Войдите в аккаунт');
        } else {
          toast.warn(detailMessage.message);
        }
      }
      if (error.response && shouldUnauthorizedError()) {
        dropToken();
      }

      throw error;
    }
  );

  return api;
};

