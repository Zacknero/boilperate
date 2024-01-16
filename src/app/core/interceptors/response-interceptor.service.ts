import { inject, Injectable } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable()
export class ResponseInterceptorService implements HttpInterceptor {
  protected readonly authService = inject(AuthService);

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
          this.authService.setToken('Prova token');
        }
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          //here manage errors from BE
          console.log(err);
          alert(err.message);
        }
        return of(err);
      }),
    );
  }
}
