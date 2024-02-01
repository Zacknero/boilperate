import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import {
  selectAuthAuthenticated,
  selectAuthToken,
} from '../auth/store/auth.selector';
import { State } from '../auth/store/auth.reducer';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  private readonly store = inject(Store<State>);
  private authenticated = false;
  private token: string | null = '';

  constructor() {
    this.store
      .pipe(select(selectAuthAuthenticated))
      .subscribe((auth) => (this.authenticated = auth));

    this.store
      .pipe(select(selectAuthToken))
      .subscribe((token) => (this.token = token));
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let cloneReq = req;

    if (this.authenticated) {
      if (req.method === 'GET') {
        cloneReq = req.clone({
          params: req.params.set('Bearer', this.token ?? ''),
        });
      }
    }

    return next.handle(cloneReq);
  }
}
