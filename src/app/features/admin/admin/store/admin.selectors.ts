import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adminFeatureKey, State } from './admin.reducer';

export const selectAdmin = createFeatureSelector<State>(adminFeatureKey);

export const selectListRoles = createSelector(
  selectAdmin,
  (state: State) => state.listRoles,
);
