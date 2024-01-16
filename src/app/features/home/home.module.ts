import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FeatureAComponent } from './feature-a/feature-a.component';
import { FeatureBComponent } from "./feature-b/feature-b.component";

@NgModule({
  declarations: [FeatureAComponent, FeatureBComponent],
  imports: [CommonModule, HomeRoutingModule, AsyncPipe],
})
export class HomeModule {}
