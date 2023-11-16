import {reducer} from './reducer';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../browserHistory';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'routes/redirectRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
