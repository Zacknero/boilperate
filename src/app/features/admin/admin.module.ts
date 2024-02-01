import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AdminComponent } from './admin/admin.component';
import { adminFeatureKey, adminReducer } from './admin/store/admin.reducer';
import { AdminEffects } from './admin/store/admin.effects';

const routes: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(adminFeatureKey, adminReducer),
    EffectsModule.forFeature(AdminEffects),
  ],
  exports: [RouterModule],
})
export class AdminModule {}
