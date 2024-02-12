import { Component, inject } from '@angular/core';
import { FeatureAFacadeService } from './services/feature-a-facade.service';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-feature-a',
    templateUrl: './feature-a.component.html',
    styleUrls: ['./feature-a.component.scss'],
    providers: [FeatureAFacadeService],
    standalone: true,
    imports: [AsyncPipe],
})
export class FeatureAComponent {
  protected readonly featureAFacade = inject(FeatureAFacadeService);
  listGitHubRepo$ = this.featureAFacade.loadGitHubRepo();
}
