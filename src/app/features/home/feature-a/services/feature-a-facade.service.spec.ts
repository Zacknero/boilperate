import { TestBed } from '@angular/core/testing';

import { FeatureAFacadeService } from './feature-a-facade.service';

describe('FeatureAFacadeService', () => {
  let service: FeatureAFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureAFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
