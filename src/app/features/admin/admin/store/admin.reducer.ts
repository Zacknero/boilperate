import { createReducer, on } from '@ngrx/store';
import { AdminActions } from './admin.actions';

export const adminFeatureKey = 'admin';

export interface State {
  listRoles: Array<string> | null;
}

export const initialState: State = {
  listRoles: null,
};

export const adminReducer = createReducer(
  initialState,
  on(AdminActions.loadAdminsSetListRoles, (state, action) => ({
    ...state,
    listRoles: action.listRoles,
  })),
);
