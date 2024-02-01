import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import * as AuthAction from '../../auth/store/auth.action';

@Injectable()
export class AuthEffect {
  authSignIn$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthAction.trySignIn),
      map((action) => {
        const authData = action.credentials;
        return of(authData.username, authData.password);
      }),
      switchMap(() => of('sahxasuhc78c7sga7dgsac7dsgcgsad78gc78gas')),
      map((value) =>
        value ? AuthAction.signIn() : AuthAction.loginRedirect(),
      ),
    ),
  );

  loginSuccess$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthAction.signIn),
      switchMap(() => of('sahxasuhc78c7sga7dgsac7dsgcgsad78gc78gas')),
      map((value: string) => AuthAction.setToken({ token: value })),
      tap(() => this.router.navigate(['home'])),
    ),
  );

  loginRedirect$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthAction.loginRedirect),
        tap((_) => {
          this.router.navigate(['/login']);
        }),
      ),
    { dispatch: false },
  );

  authLogout$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthAction.logOut),
        map(() => this.router.navigate(['/'])),
      ),
    { dispatch: false },
  );

  constructor(
    private action$: Actions,
    private router: Router,
  ) {}
}
