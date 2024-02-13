import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { TestComponent } from './test/test.component';
import { environment } from '../../../environments/environment';
import { featureAResolver } from "./feature-a/resolver/feature-a.resolver";
import { FeatureAFacadeService } from "./feature-a/services/feature-a-facade.service";

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
    providers: [FeatureAFacadeService],
    resolve: {
      featureA: featureAResolver,
    },
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
