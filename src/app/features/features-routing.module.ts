import { inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { State } from '../reducers';
import { selectAuthAuthenticated } from '../core/auth/store/auth.selector';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [
      () => inject(Store<State>).pipe(select(selectAuthAuthenticated)),
    ],
  },
  {
    path: `login`,
    loadChildren: () =>
      import(`./login/login.module`).then((m) => m.LoginModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
