import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RequestInterceptorService } from './interceptors/request-interceptor.service';
import { ResponseInterceptorService } from './interceptors/response-interceptor.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [NavBarComponent],
  exports: [NavBarComponent],
  imports: [CommonModule, RouterLink, HttpClientModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
