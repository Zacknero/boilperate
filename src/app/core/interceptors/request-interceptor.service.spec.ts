import { TestBed } from '@angular/core/testing';

import { RequestInterceptorService } from './request-interceptor.service';

describe('RequestService', () => {
  let service: RequestInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
