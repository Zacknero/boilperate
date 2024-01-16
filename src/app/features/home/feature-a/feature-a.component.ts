import { Component, inject } from '@angular/core';
import { FeatureAFacadeService } from './services/feature-a-facade.service';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss'],
  providers: [FeatureAFacadeService],
})
export class FeatureAComponent {
  protected readonly featureAFacade = inject(FeatureAFacadeService);
  listGitHubRepo$ = this.featureAFacade.loadGitHubRepo();
}
