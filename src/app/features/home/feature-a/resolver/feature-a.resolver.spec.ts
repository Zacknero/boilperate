import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { featureAResolver } from './feature-a.resolver';

describe('featureAResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => featureAResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
