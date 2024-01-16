import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {
  protected readonly authService = inject(AuthService);

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let cloneReq = req;

    if (!this.authService.isUserAuthenticated()) {
      if (req.method === 'GET') {
        cloneReq = req.clone({
          params: req.params.set('Bearer', this.authService.getToken()),
        });
      }
    }

    return next.handle(cloneReq);
  }
}
