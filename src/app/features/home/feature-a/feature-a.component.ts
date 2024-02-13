import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.scss'],
  providers: [],
  standalone: true,
  imports: [AsyncPipe],
})
export class FeatureAComponent {
  protected readonly route = inject(ActivatedRoute);
  listGitHubRepo$ = this.route.data.pipe(map((data) => data?.['featureA']));
}
