import { inject, Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';

import * as AuthAction from '../auth/store/auth.action';
import { State } from '../auth/store/auth.reducer';

@Injectable()
export class ResponseInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log(event);
          //some conditions for verify response or recover the token
          AuthAction.setToken({ token: 'value of token' });
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          //here manage errors from BE
          console.log(err);
          alert(err.message);

          if (err.status === 401) {
            // auto logout if 401 response returned from api
            inject(Store<State>).dispatch(AuthAction.logOut());
            location.reload();
          }
        }
        const error = err.error.message || err.statusText;
        return of(error);
      }),
    );
  }
}
