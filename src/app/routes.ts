import { Route } from '@angular/router';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./features/routes').then((m) => m.FEATURES_ROUTES),
  },
];
