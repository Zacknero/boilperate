import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { catchError } from 'rxjs';

import { FeatureAFacadeService } from '../services/feature-a-facade.service';
import { Repos } from '../../../../shared/models/repos';

export const featureAResolver: ResolveFn<Repos[]> = (route, state) => {
  const featAFacade = inject(FeatureAFacadeService)

  return featAFacade.loadGitHubRepo()
    .pipe(
      catchError(err =>{
        console.log(err);
        throw err;
      })
    )
};
