import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../../../environments/environment';
import { HomeComponent } from './home.component';
import { FeatureAComponent } from './feature-a/feature-a.component';
import { FeatureBComponent } from './feature-b/feature-b.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  /*{path: '', redirectTo: 'home', pathMatch: 'full'},*/
  { path: '', component: HomeComponent },
  { path: 'feature-a', component: FeatureAComponent },
  { path: 'feature-b', component: FeatureBComponent },
  {
    path: 'test',
    component: TestComponent,
    canActivate: [() => environment.IS_TESTER],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
