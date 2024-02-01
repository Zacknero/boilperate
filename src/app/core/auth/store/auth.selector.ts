import { createSelector } from '@ngrx/store';

import * as stateAuth from './auth.reducer';
import * as stateReducer from '../../../reducers';

export const selectAuth = (state: stateReducer.State) => {
  console.log(state);
  return state;
};

export const selectAuthStatus = createSelector(
  selectAuth,
  (state) => state.auth,
);

export const selectAuthAuthenticated = createSelector(
  selectAuthStatus,
  (state: stateAuth.State) => state.authenticated,
);

export const selectAuthToken = createSelector(
  selectAuthStatus,
  (state: stateAuth.State) => state.token,
);
