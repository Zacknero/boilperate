import { Route } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';

export const FEATURES_ROUTES: Route[] = [
  {
    path: 'home',
    loadChildren: () => import('./home/routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/routes').then((m) => m.ADMIN_ROUTES),
    canActivate: [() => inject(AuthService).isUserAdmin()],
  },
];
