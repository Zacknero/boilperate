import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AdminActions } from './admin.actions';

@Injectable()
export class AdminEffects {
  loadListRoles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.loadAdmins),
      exhaustMap(() =>
        // al posto di of mettere servizio o facade che chiama http
        of(['Read', 'Edit', 'Approve']).pipe(
          map((list) =>
            AdminActions.loadAdminsSetListRoles({ listRoles: list }),
          ),
          catchError((err) =>
            of(AdminActions.loadAdminsFailure({ error: err })),
          ),
        ),
      ),
    );
  });

  constructor(private actions$: Actions) {}
}
