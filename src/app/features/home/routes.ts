import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { TestComponent } from './test/test.component';
import { environment } from '../../../environments/environment';

export const HOME_ROUTES: Route[] = [
  /*{path: '', redirectTo: 'home', pathMatch: 'full'},*/
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'feature-a',
    loadComponent: () =>
      import('./feature-a/feature-a.component').then(
        (c) => c.FeatureAComponent,
      ),
  },
  {
    path: 'feature-b',
    loadComponent: () =>
      import('./feature-b/feature-b.component').then(
        (c) => c.FeatureBComponent,
      ),
  },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [() => environment.IS_TESTER],
  },
];
