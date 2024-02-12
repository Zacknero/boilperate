import { enableProdMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { environment } from './environments/environment';
import { APP_ROUTES } from './app/routes';
import { RequestInterceptorService } from './app/core/interceptors/request-interceptor.service';
import { ResponseInterceptorService } from './app/core/interceptors/response-interceptor.service';
import { AuthService } from './app/core/auth/auth.service';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      APP_ROUTES,
      // Debug e console
      // withDebugTracing(),
      // withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
    AuthService,
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptorService,
      multi: true,
    }
  ],
}).catch((err) => console.error(err));
