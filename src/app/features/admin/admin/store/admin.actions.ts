import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AdminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Load Admins': emptyProps(),
    'Load Admins Success': props<{ data: unknown }>(),
    'Load Admins Failure': props<{ error: unknown }>(),
    'Load Admins Set List Roles': props<{ listRoles: Array<string> }>(),
  },
});
